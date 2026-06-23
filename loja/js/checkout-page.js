/* ===== LimpaBrasa — checkout transparente (Mercado Pago Bricks) ===== */
(function () {
  var CFG = window.LB;
  var KEY = "lb_cart_v1";

  function brl(c) { return (c / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); }
  function loadCart() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function clearCart() { localStorage.removeItem(KEY); }
  function waLink() { return "https://wa.me/" + (CFG.contato.whatsapp || ""); }
  function $(id) { return document.getElementById(id); }

  var cart = loadCart();
  var totalCentavos = cart.reduce(function (s, x) { return s + x.preco * x.qtd; }, 0);

  // ---------- resumo do pedido ----------
  function renderSummary() {
    var box = $("coItems");
    box.innerHTML = cart.map(function (it) {
      return '' +
        '<div class="co__item">' +
          '<img src="' + it.img + '" alt="">' +
          '<div class="co__iteminfo"><b>' + it.nome + '</b>' +
            (it.variante ? '<span>Cor: ' + it.variante + '</span>' : '') +
            '<span>Qtd: ' + it.qtd + '</span></div>' +
          '<div class="co__itemprice">' + brl(it.preco * it.qtd) + '</div>' +
        '</div>';
    }).join("");
    $("coSubtotal").textContent = brl(totalCentavos);
    $("coTotal").textContent = brl(totalCentavos);
  }

  // ---------- estados de erro/config ----------
  function showConfigWarning() {
    $("coLoading").style.display = "none";
    var w = $("coConfig");
    w.style.display = "block";
    $("coWa").href = waLink();
  }

  function showResult(html) {
    $("coResult").style.display = "block";
    $("coResultCard").innerHTML = html;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showSuccess() {
    clearCart();
    showResult(
      '<div class="co__icon co__icon--ok">✓</div>' +
      '<h2>Pagamento aprovado!</h2>' +
      '<p>Recebemos seu pedido. Em instantes você recebe a confirmação por e-mail. ' +
      'Qualquer dúvida, fala com a gente no WhatsApp.</p>' +
      '<a class="btn btn--cta" href="index.html">Voltar à loja</a>'
    );
  }

  function showPix(poi) {
    clearCart();
    var td = (poi && poi.transaction_data) || {};
    var img = td.qr_code_base64 ? '<img class="co__qr" src="data:image/png;base64,' + td.qr_code_base64 + '" alt="QR Code Pix">' : "";
    var code = td.qr_code || "";
    showResult(
      '<div class="co__icon co__icon--pix">⚡</div>' +
      '<h2>Quase lá — pague com Pix</h2>' +
      '<p>Escaneie o QR Code no app do seu banco ou use o Pix copia e cola. ' +
      'A aprovação é na hora.</p>' +
      img +
      (code ? '<div class="co__copy"><input id="coPixCode" readonly value="' + code + '">' +
        '<button class="btn btn--dark" onclick="LBcopyPix()">Copiar código</button></div>' : "") +
      '<p class="co__muted">Assim que o pagamento cair, processamos seu pedido automaticamente.</p>' +
      '<a class="btn btn--ghost" href="index.html">Voltar à loja</a>'
    );
  }

  function showPending(detail) {
    showResult(
      '<div class="co__icon co__icon--pix">⏳</div>' +
      '<h2>Pagamento em análise</h2>' +
      '<p>Seu pagamento está sendo processado. Você recebe a confirmação por e-mail. ' +
      (detail ? '<br><span class="co__muted">(' + detail + ')</span>' : "") + '</p>' +
      '<a class="btn btn--cta" href="index.html">Voltar à loja</a>'
    );
  }

  function showRejected(detail) {
    showResult(
      '<div class="co__icon co__icon--err">!</div>' +
      '<h2>Pagamento não aprovado</h2>' +
      '<p>Não rolou dessa vez' + (detail ? ' (' + detail + ')' : "") + '. ' +
      'Tente outro cartão/forma de pagamento ou fale com a gente no WhatsApp.</p>' +
      '<a class="btn btn--cta" href="checkout.html">Tentar de novo</a> ' +
      '<a class="btn btn--ghost" href="' + waLink() + '" target="_blank">WhatsApp</a>'
    );
  }

  window.LBcopyPix = function () {
    var el = $("coPixCode");
    if (!el) return;
    el.select();
    try { navigator.clipboard.writeText(el.value); } catch (e) { document.execCommand("copy"); }
    var b = event.target; var t = b.textContent; b.textContent = "Copiado ✓";
    setTimeout(function () { b.textContent = t; }, 1800);
  };

  // ---------- trata resposta do backend ----------
  function handlePayment(result) {
    if (!result || result.error) {
      showRejected(result && result.error ? "erro ao processar" : "");
      return;
    }
    if (result.status === "approved") return showSuccess();
    if (result.point_of_interaction) return showPix(result.point_of_interaction);
    if (result.status === "pending" || result.status === "in_process") return showPending(result.status_detail);
    return showRejected(result.status_detail);
  }

  // ---------- inicializa o Brick ----------
  function initBrick() {
    var pk = CFG.mercadoPago && CFG.mercadoPago.publicKey;
    if (!pk || typeof MercadoPago === "undefined") { showConfigWarning(); return; }

    var mp = new MercadoPago(pk, { locale: "pt-BR" });
    var bricks = mp.bricks();
    var amount = totalCentavos / 100;

    bricks.create("payment", "paymentBrick_container", {
      initialization: { amount: amount },
      customization: {
        visual: { hideFormTitle: false },
        paymentMethods: {
          creditCard: "all",
          debitCard: "all",
          bankTransfer: "all",   // Pix
          maxInstallments: (CFG.produto && CFG.produto.parcelas) || 12
        }
      },
      callbacks: {
        onReady: function () { $("coLoading").style.display = "none"; },
        onError: function (error) { console.error("Brick error:", error); },
        onSubmit: function (data) {
          var fd = (data && data.formData) || {};
          var desc = cart.map(function (it) {
            return it.nome + (it.variante ? " (" + it.variante + ")" : "") + " x" + it.qtd;
          }).join(", ");
          return fetch(CFG.checkout.endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.assign({}, fd, {
              description: desc,
              transaction_amount: fd.transaction_amount || amount
            }))
          })
            .then(function (r) { return r.json(); })
            .then(function (result) { handlePayment(result); })
            .catch(function (e) { console.error(e); showRejected("falha de conexão"); });
        }
      }
    });
  }

  // ---------- start ----------
  document.addEventListener("DOMContentLoaded", function () {
    if (!cart.length) {
      $("coLoading").style.display = "none";
      showResult(
        '<div class="co__icon">🛒</div><h2>Seu carrinho está vazio</h2>' +
        '<p>Bora deixar a grelha nova de novo. 🔥</p>' +
        '<a class="btn btn--cta" href="index.html">Ver o produto</a>'
      );
      return;
    }
    renderSummary();
    initBrick();
  });
})();
