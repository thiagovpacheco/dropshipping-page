// ===== LimpaBrasa — processa pagamento (Checkout Transparente / Bricks) =====
// Função serverless (Vercel). Recebe o formData do Payment Brick e cria o
// pagamento direto na API do Mercado Pago (cartão de crédito/débito e Pix).
//
// Requer a variável de ambiente MP_ACCESS_TOKEN (Access Token de PRODUÇÃO
// do Mercado Pago — Painel > Suas integrações > Credenciais de produção).
//
// Node 18+ tem fetch e crypto.randomUUID globais. Sem dependências.

import { randomUUID } from "node:crypto";

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
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

    // O Payment Brick manda: token, issuer_id, payment_method_id, installments,
    // transaction_amount, payer { email, identification }. Pra Pix vem sem token.
    const amount = Number(body.transaction_amount);
    if (!amount || amount <= 0) {
      res.status(400).json({ error: "Valor inválido" });
      return;
    }
    if (!body.payment_method_id) {
      res.status(400).json({ error: "Forma de pagamento ausente" });
      return;
    }

    const payment = {
      transaction_amount: amount,
      description: String(body.description || "Pedido LimpaBrasa").slice(0, 250),
      payment_method_id: body.payment_method_id,
      payer: {
        email: body.payer?.email,
        identification: body.payer?.identification,
      },
      statement_descriptor: "LIMPABRASA",
    };
    if (body.token) payment.token = body.token;
    if (body.installments) payment.installments = parseInt(body.installments, 10);
    if (body.issuer_id) payment.issuer_id = body.issuer_id;

    const mp = await fetch("https://api.mercadopago.com/v1/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Idempotency-Key": randomUUID(),
      },
      body: JSON.stringify(payment),
    });

    const data = await mp.json();
    if (!mp.ok) {
      res.status(502).json({ error: "Mercado Pago", detail: data });
      return;
    }

    // Resposta enxuta pro front. Pix vem em point_of_interaction.
    res.status(200).json({
      id: data.id,
      status: data.status,
      status_detail: data.status_detail,
      payment_method_id: data.payment_method_id,
      point_of_interaction: data.point_of_interaction || null,
    });
  } catch (e) {
    res.status(500).json({ error: String(e && e.message ? e.message : e) });
  }
}
