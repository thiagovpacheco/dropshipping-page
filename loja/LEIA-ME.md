# Loja LimpaBrasa

Loja estática (HTML/CSS/JS puro) pra validar demanda do **limpador elétrico
de churrasqueira** no orgânico (TikTok/Instagram), com checkout real via
**Mercado Pago**.

## Estrutura

```
loja/
├─ index.html      → landing do produto (página principal de venda)
├─ catalogo.html   → catálogo (produto + cabeça extra)
├─ contato.html    → WhatsApp, e-mail, redes, formulário
├─ css/styles.css  → design system LimpaBrasa
├─ js/config.js    → ⚙️ EDITE AQUI: preço, contato, checkout
├─ js/loja.js      → carrinho + checkout
└─ assets/         → imagens otimizadas (webp)
api/checkout.js    → função serverless do Mercado Pago
vercel.json        → config de deploy
```

## 1. Antes de publicar — edite `loja/js/config.js`

- `contato.whatsapp` → seu número (só dígitos: 55 + DDD + número)
- `contato.email`, `instagram`, `tiktok`
- `produto.precoCentavos` → preço de venda (29900 = R$299,00)

## 2. Ver localmente

Na raiz do projeto:

```
npx serve .
```

Abre o endereço mostrado e acesse `/loja/`. (Abrir o `index.html` direto
pelo navegador funciona, mas o checkout real só roda publicado — veja abaixo.)

## 3. Checkout transparente Mercado Pago (Pix + cartão no próprio site)

O botão **Finalizar compra** leva pra `loja/checkout.html`, que mostra o
formulário de pagamento do Mercado Pago (Bricks) **dentro do site**: Pix com
aprovação na hora, cartão de crédito em até 12x, débito e boleto. O front
manda os dados pra `/api/process_payment`, que cria o pagamento na API do MP.

Precisa de **DUAS credenciais de PRODUÇÃO** (Mercado Pago → Suas integrações
→ sua aplicação → Credenciais de produção):

- **Public Key** (`APP_USR-...`) → vai no front, em `loja/js/config.js`,
  campo `mercadoPago.publicKey`.
- **Access Token** (`APP_USR-...`) → vai no backend, como variável de
  ambiente `MP_ACCESS_TOKEN` na Vercel. **Nunca** coloque o Access Token no
  `config.js` (ele é público) — só a Public Key.

### Publicar na Vercel (recomendado, grátis)

1. Crie a conta no Mercado Pago e uma aplicação em **Suas integrações**.
2. Cole a **Public Key** em `loja/js/config.js` → `mercadoPago.publicKey`.
3. Suba o projeto pro GitHub (rode `/salvar` no MazyOS).
4. Em vercel.com → **New Project** → importe o repositório.
5. Em **Settings → Environment Variables**, adicione:
   - `MP_ACCESS_TOKEN` = seu **Access Token de PRODUÇÃO** do Mercado Pago.
6. Deploy. A `api/process_payment.js` vira `https://seusite.com/api/process_payment`
   automaticamente.

### Enquanto não tiver as credenciais (arrancar hoje)

No `config.js`, em `checkout.linkPagamentoFallback`, cole um **Link de
Pagamento** criado direto no painel do Mercado Pago. O botão "Finalizar
compra" passa a redirecionar pra ele — sem precisar de backend nem Public Key.

## 4. Importante (dropshipping)

- **Fornecedor/frete:** defina antes de vender de verdade. O prazo no
  checkout do MP é só o pagamento — o envio é por sua conta/fornecedor.
- **Depoimentos e selos** são genéricos de validação. Troque por reais
  assim que tiver.
- **Imagens** são do produto original, otimizadas. Grave vídeos próprios
  pro TikTok/IG (converte muito mais no orgânico).
