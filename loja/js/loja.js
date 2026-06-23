/* ===== LimpaBrasa — carrinho + checkout Mercado Pago ===== */
(function () {
  var CFG = window.LB;
  var KEY = "lb_cart_v1";

  // ---------- util ----------
  function brl(centavos) {
    return (centavos / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }
  function save(items) { localStorage.setItem(KEY, JSON.stringify(items)); render(); }
  var cart = load();

  // chave única por variante + bundle
  function lineKey(it) { return it.tipo + "|" + (it.variante || "") + "|" + (it.bundle ? 1 : 0); }

  window.LBcart = {
    add: function (it) {
      var k = lineKey(it);
      var found = cart.find(function (x) { return lineKey(x) === k; });
      if (found) found.qtd += it.qtd || 1;
      else cart.push(Object.assign({ qtd: 1 }, it));
      save(cart); open();
    },
    setQty: function (k, d) {
      var l = cart.find(function (x) { return lineKey(x) === k; });
      if (!l) return;
      l.qtd += d;
      if (l.qtd <= 0) cart = cart.filter(function (x) { return lineKey(x) !== k; });
      save(cart);
    },
    count: function () { return cart.reduce(function (s, x) { return s + x.qtd; }, 0); },
    total: function () { return cart.reduce(function (s, x) { return s + x.preco * x.qtd; }, 0); }
  };

  // ---------- render ----------
  function render() {
    var c = LBcart.count();
    document.querySelectorAll(".cart-count").forEach(function (el) {
      el.textContent = c; el.style.display = c ? "grid" : "none";
    });
    var body = document.getElementById("cartBody");
    if (!body) return;
    if (!cart.length) {
      body.innerHTML = '<div class="cart-empty">Seu carrinho está vazio.<br>Bora deixar a grelha nova de novo. 🔥</div>';
    } else {
      body.innerHTML = cart.map(function (it) {
        var k = lineKey(it);
        return '' +
          '<div class="citem">' +
            '<img src="' + it.img + '" alt="">' +
            '<div class="citem__info">' +
              '<b>' + it.nome + '</b>' +
              (it.variante ? '<div class="var">Cor: ' + it.variante + '</div>' : '') +
              (it.bundle ? '<div class="var">+ cabeça extra</div>' : '') +
              '<div class="qty">' +
                '<button onclick="LBcart.setQty(\'' + k + '\',-1)">−</button>' +
                '<span>' + it.qtd + '</span>' +
                '<button onclick="LBcart.setQty(\'' + k + '\',1)">+</button>' +
              '</div>' +
            '</div>' +
            '<div class="citem__price">' + brl(it.preco * it.qtd) + '</div>' +
          '</div>';
      }).join("");
    }
    var tot = document.getElementById("cartTotal");
    if (tot) tot.textContent = brl(LBcart.total());
    var co = document.getElementById("checkoutBtn");
    if (co) co.disabled = !cart.length;
  }

  // ---------- drawer ----------
  function open() { var o = document.getElementById("overlay"), d = document.getElementById("drawer"); if (o) o.classList.add("open"); if (d) d.classList.add("open"); }
  function close() { var o = document.getElementById("overlay"), d = document.getElementById("drawer"); if (o) o.classList.remove("open"); if (d) d.classList.remove("open"); }
  window.LBdrawer = { open: open, close: close };

  // ---------- checkout ----------
  // Vai pra página de checkout transparente (Pix + cartão no próprio site).
  // Se houver link de pagamento configurado, redireciona direto pra ele.
  window.LBcheckout = function () {
    if (!cart.length) return;
    var fb = CFG.checkout.linkPagamentoFallback;
    if (fb) { window.location.href = fb; return; }
    window.location.href = CFG.checkout.pagina || "checkout.html";
  };

  document.addEventListener("DOMContentLoaded", render);
})();
