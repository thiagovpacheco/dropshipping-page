// ===== LimpaBrasa — criação de preferência Mercado Pago =====
// Função serverless (Vercel/Netlify Functions). Recebe os itens do
// carrinho e devolve { init_point } pra redirecionar ao Checkout Pro.
//
// Requer a variável de ambiente MP_ACCESS_TOKEN (Access Token de PRODUÇÃO
// do Mercado Pago — Painel > Suas integrações > Credenciais).
//
// Node 18+ tem fetch global. Sem dependências.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const token = process.env.MP_ACCESS_TOKEN;
  if (!token) {
    res.status(500).json({ error: "MP_ACCESS_TOKEN não configurado" });
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const items = (body.items || []).map((i) => ({
      title: String(i.title).slice(0, 250),
      quantity: Math.max(1, parseInt(i.quantity, 10) || 1),
      unit_price: Number(i.unit_price),
      currency_id: "BRL",
    }));

    if (!items.length) {
      res.status(400).json({ error: "Carrinho vazio" });
      return;
    }

    // URL base do site (pra back_urls). Ajuste BASE_URL se quiser fixar.
    const proto = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const base = process.env.BASE_URL || `${proto}://${host}`;

    const preference = {
      items,
      back_urls: {
        success: `${base}/loja/index.html?status=sucesso`,
        failure: `${base}/loja/index.html?status=falha`,
        pending: `${base}/loja/index.html?status=pendente`,
      },
      auto_return: "approved",
      statement_descriptor: "LIMPABRASA",
      // 12x sem juros via Pix/cartão: as parcelas vêm da config da conta MP.
      payment_methods: {
        installments: 12,
      },
    };

    const mp = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(preference),
    });

    const data = await mp.json();
    if (!mp.ok) {
      res.status(502).json({ error: "Mercado Pago", detail: data });
      return;
    }

    res.status(200).json({
      init_point: data.init_point,
      sandbox_init_point: data.sandbox_init_point,
      id: data.id,
    });
  } catch (e) {
    res.status(500).json({ error: String(e && e.message ? e.message : e) });
  }
}
