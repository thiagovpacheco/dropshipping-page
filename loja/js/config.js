/* ===== LimpaBrasa — configuração da loja =====
   Edite aqui preço, variantes, contato e checkout.
   Preços em CENTAVOS (R$299,00 = 29900). */
window.LB = {
  marca: "LimpaBrasa",
  produto: {
    nome: "Escova Elétrica de Churrasqueira LimpaBrasa",
    precoCentavos: 29900,        // R$299,00
    precoDeCentavos: 49900,      // "de R$499" (ancoragem)
    parcelas: 12,                // 12x sem juros (ajuste conforme o MP)
    img: "assets/produto-marrom.webp",
    variantes: [
      { id: "marrom", nome: "Marrom", img: "assets/produto-marrom.webp" },
      { id: "preto",  nome: "Preto",  img: "assets/produto-preto.webp"  }
    ],
    bundle: {
      ativo: true,
      nome: "Cabeça de cerdas extra",
      descricao: "Dobre a vida útil — uma reserva pra quando a primeira gastar.",
      precoCentavos: 4900        // +R$49,00
    }
  },
  contato: {
    whatsapp: "5500000000000",   // TROCAR: DDI+DDD+numero, só dígitos
    email: "contato@limpabrasa.com.br",
    instagram: "limpabrasa",
    tiktok: "limpabrasa"
  },
  mercadoPago: {
    // Public Key de PRODUÇÃO do Mercado Pago (começa com APP_USR-...).
    // Painel MP > Suas integrações > sua aplicação > Credenciais de produção.
    // Usada no front pra montar o checkout transparente (Bricks).
    publicKey: "APP_USR-72166bae-c015-4b2c-88b8-3802273a33a1"
  },
  checkout: {
    // Página de checkout transparente (Pix + cartão dentro do site).
    pagina: "checkout.html",
    // Backend serverless que processa o pagamento (Vercel: /api/process_payment).
    endpoint: "/api/process_payment",
    // Fallback enquanto o backend/credenciais não estiverem no ar:
    // cole aqui um LINK DE PAGAMENTO do Mercado Pago e o botão
    // "Finalizar compra" redireciona pra ele (sem backend).
    // Deixe "" pra usar o checkout transparente acima.
    linkPagamentoFallback: ""
  }
};
