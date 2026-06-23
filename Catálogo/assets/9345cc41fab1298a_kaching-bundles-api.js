Array.prototype.flat || (Array.prototype.flat = function(t = 1) {
  return t > 0 ? (
    // @ts-expect-error - Polyfill for older browsers
    this.reduce(
      (e, s) => e.concat(Array.isArray(s) ? s.flat(t - 1) : s),
      []
    )
  ) : (
    // @ts-expect-error - Polyfill for older browsers
    this.slice()
  );
});
Array.prototype.flatMap || (Array.prototype.flatMap = function(t, e) {
  return this.map(t, e).flat();
});
const yt = (t) => {
  const e = window.Shopify.currency;
  e && (t.currencyRate = Number(e.rate));
  const s = window.Shopify.country;
  s && (t.country = s);
  const n = window.Shopify.locale;
  n && (t.locale = n);
}, R = () => {
  try {
    const t = "kaching_local_storage_test";
    return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
}, I = R() ? window.localStorage : window.sessionStorage, v = () => new URLSearchParams(window.location.search).get("kaching");
let E;
const mt = () => (E === void 0 && (E = v() === "off"), E);
let N;
const w = () => (N === void 0 && (N = v() === "debug"), N);
let G;
const K = () => (G === void 0 && (G = v() === "dev"), G);
let j;
const Q = () => (j === void 0 && (j = v() === "info"), j), gt = async (t, e, s, n, o) => {
  try {
    const i = "kaching_visited_deal_blocks", a = I.getItem(i), u = a ? JSON.parse(a) : [];
    if (u.includes(e))
      return;
    u.push(e), I.setItem(i, JSON.stringify(u)), await fetch("https://bundles-stats.kachingappz.app/impressions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        shopDomain: t,
        dealBlockId: e,
        productId: s,
        abTestVariantId: n,
        sessionId: o
      }),
      keepalive: !0
    });
  } catch (i) {
    console.error(i);
  }
}, P = /* @__PURE__ */ new Set(), W = async (t, e = {}, s = 1) => {
  if (S("sendStorefrontEvent", { name: t, data: e }), P.has(t) || (P.add(t), Math.random() > s))
    return;
  const n = window.location.href;
  return await fetch(
    "https://storefront-events.kachingappz.app/bundles/events",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        event: { name: t, data: e, url: n, shop: window.Shopify.shop }
      })
    }
  );
};
let U = !1;
const x = async (t, e, s = 0.1) => {
  if (U || Math.random() > s || t === "Failed to fetch" || t && (t.includes(
    "Cannot define multiple custom elements with the same tag name"
  ) || t.includes(
    "Failed to execute 'define' on 'CustomElementRegistry'"
  ) || t.includes("CustomElementRegistry.define")))
    return;
  const n = window.location.href, o = window.Shopify.shop;
  return U = !0, await fetch(
    "https://storefront-events.kachingappz.app/bundles/errors",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: { message: t, stack: e, url: n, shop: o }
      })
    }
  );
}, It = () => {
  const t = ["kaching-bundles.js", "kaching-bundles-block.js"];
  window.addEventListener("error", async function(e) {
    const s = async (n) => {
      const { filename: o, message: i, error: a } = n;
      for (const u of t)
        if (o.includes(u)) {
          if (w() || F()) {
            S("Error", n);
            return;
          }
          await x(i, a.stack);
        }
    };
    try {
      await s(e);
    } catch (n) {
      console.error(n);
    }
  }), window.addEventListener("unhandledrejection", async function(e) {
    const s = async (n) => {
      if (typeof n.reason != "object")
        return;
      const { message: o, stack: i } = n.reason;
      if (i) {
        for (const a of t)
          if (i.includes(a)) {
            if (w() || F()) {
              S("Unhandled rejection", n);
              return;
            }
            await x(o, i);
          }
      }
    };
    try {
      await s(e);
    } catch (n) {
      console.error(n);
    }
  });
};
function S(t, e = null) {
  !w() && !K() || console.debug("[Kaching Bundles]", t, e);
}
function bt(t, e = null) {
  !Q() && !w() && !K() || console.info("[Kaching Bundles]", t, e);
}
const wt = () => {
  const t = (n) => {
    window.dispatchEvent(new Event(n));
  }, e = history.pushState;
  history.pushState = function(...o) {
    const i = e.apply(this, o);
    return t("pushstate"), t("locationchange"), i;
  };
  const s = history.replaceState;
  history.replaceState = function(...o) {
    const i = s.apply(this, o);
    return t("replacestate"), t("locationchange"), i;
  }, H(window, "popstate", () => {
    t("locationchange");
  });
}, St = (t, e, s, n = 0) => {
  const o = Object.getPrototypeOf(t);
  if (o.hasOwnProperty(e)) {
    const i = Object.getOwnPropertyDescriptor(
      o,
      e
    );
    if (!i.configurable)
      return;
    Object.defineProperty(t, e, {
      configurable: !0,
      get: function(...a) {
        return i.get.apply(this, a);
      },
      set: function(...a) {
        const u = this[e];
        i.set.apply(this, a);
        const l = this[e];
        return typeof s == "function" && setTimeout(s.bind(this, u, l), n), l;
      }
    });
  }
}, X = (t, e = document) => {
  try {
    return e.querySelector(t);
  } catch {
    return null;
  }
}, vt = (t, e = document) => {
  try {
    return [...e.querySelectorAll(t)];
  } catch {
    return [];
  }
}, H = (t, e, s) => t.addEventListener(e, s), Dt = (t) => document.createElement(t), kt = (t, e) => t && t.classList.add(e), Et = (t, e, s) => t.setAttribute(e, s), Nt = (t) => Number(t.split("/").pop()), Gt = (t) => t.dataset, jt = (t) => {
  const e = X(t);
  if (!e)
    return;
  const s = JSON.parse(e.textContent);
  return S("jsonFromElement", s), s;
}, Y = (t, e) => {
  let s = 0, n = t;
  for (; n && n !== e && n !== document.body; )
    s++, n = n.parentNode;
  return n !== e ? 1 / 0 : s;
}, Z = (t, e) => {
  if (t === e)
    return t;
  const s = /* @__PURE__ */ new Set();
  let n = t;
  for (; n; )
    s.add(n), n = n.parentElement;
  for (n = e; n; ) {
    if (s.has(n))
      return n;
    n = n.parentElement;
  }
  return document.documentElement;
}, Ot = (t, e, s = 1 / 0) => {
  let n = null, o = 1 / 0;
  for (const i of e) {
    const a = Z(t, i);
    if (a === document.body || a === document.documentElement)
      continue;
    const u = Y(t, a);
    u > s || u < o && (n = i, o = u);
  }
  return n;
}, F = () => {
  const t = document.currentScript;
  return t ? t.src.includes("kaching-bundles-dev") : !1;
}, M = (t, e = {}) => {
  const s = window.Shopify.routes, o = (s && s.root || "/") + t, i = new URLSearchParams();
  for (const [u, l] of Object.entries(e))
    i.append(u, l);
  const a = i.toString();
  return a ? `${o}?${a}` : o;
}, At = (t, e) => {
  new MutationObserver((n, o) => {
    for (const i of n)
      i.type === "childList" && i.removedNodes.forEach((a) => {
        a.contains(t) && (o.disconnect(), e());
      });
  }).observe(document.body, { childList: !0, subtree: !0 });
}, Tt = (t, e = 300, s = 100) => {
  let n = 0;
  const o = () => {
    window.Shopify.analytics ? t() : n < e ? (n++, setTimeout(o, s)) : W(
      "shopify_analytics_missing",
      {
        userAgent: navigator.userAgent
      },
      0.1
    );
  };
  o();
}, B = async (t, {
  useExternalMetafieldNamespace: e,
  useMetaobjects: s
}) => s ? et(
  t
) : tt(t), tt = async (t, e) => {
  var n;
  const s = (n = (await t.query(
    `
      query FetchDealBlocks($metafieldNamespace: String!) {
        shop {
          metafield(namespace: $metafieldNamespace, key: "deal_blocks") {
            value
          }
        }
      }
    `,
    {
      variables: {
        metafieldNamespace: "$app:kaching_bundles"
      }
    }
  )).shop.metafield) == null ? void 0 : n.value;
  return s ? JSON.parse(s) : [];
}, et = async (t, e) => {
  const s = "$app:deal_block", n = [];
  let o = null;
  for (; ; ) {
    const i = await t.query(
      `
        query FetchDealBlockMetaobjects($type: String!, $cursor: String) {
          metaobjects(type: $type, first: 250, after: $cursor) {
            nodes {
              fields {
                key
                value
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      `,
      {
        variables: {
          type: s,
          cursor: o
        }
      }
    );
    for (const a of i.metaobjects.nodes) {
      const u = a.fields.find(
        (l) => l.key === "settings"
      );
      u != null && u.value && n.push(JSON.parse(u.value));
    }
    if (!i.metaobjects.pageInfo.hasNextPage)
      break;
    o = i.metaobjects.pageInfo.endCursor;
  }
  return n;
};
class nt {
  constructor(e, s) {
    this.storefrontApiVersion = "2026-01", this.storefrontAccessToken = s, this.shopifyDomain = e;
  }
  async query(e, s) {
    var u, l;
    const n = (u = s == null ? void 0 : s.variables) != null ? u : {};
    let o = `https://${this.shopifyDomain}/api/${this.storefrontApiVersion}/graphql.json`;
    const i = (l = e.match(/query\s+(\w+)/)) == null ? void 0 : l[1];
    i && (o += `?operation_name=${i}`);
    const a = await (await fetch(o, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": this.storefrontAccessToken
      },
      body: JSON.stringify({
        query: e,
        variables: n
      })
    })).text();
    if (!a)
      throw new Error("Empty graphql response");
    return JSON.parse(a).data;
  }
}
class L extends Error {
  constructor(e) {
    super(e), this.name = "CartFetchError";
  }
}
const O = "kaching_session_id", qt = async () => {
  try {
    st();
    const t = z();
    await at() !== t && await ct(t);
  } catch (t) {
    if (t instanceof L)
      console.error(t);
    else
      throw t;
  }
}, st = () => {
  const t = new URL(window.location.href), e = new URLSearchParams(t.search), s = e.get("preview_kaching_session_id");
  s && (I.setItem(O, s), e.delete("preview_kaching_session_id"), t.search = e.toString(), window.history.replaceState({}, "", t.toString()));
}, z = () => I.getItem(O) || rt(), rt = () => {
  const t = ot();
  return I.setItem(O, t), t;
}, ot = () => typeof crypto != "undefined" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : it(), it = () => "10000000-1000-4000-8000-100000000000".replace(
  /[018]/g,
  (t) => (+t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +t / 4).toString(16)
), at = async () => {
  const t = await fetch(M("cart.js"));
  if (!t.ok)
    throw new L("Failed to fetch cart");
  return (await t.json()).attributes._kaching_session_id;
}, ct = async (t) => await fetch(M("cart/update.js"), {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    attributes: {
      _kaching_session_id: t
    }
  })
}), ut = ({
  kachingSessionId: t,
  abTestVariantsCount: e,
  abTestTrafficAllocation: s
}) => {
  const n = parseInt(t.replace(/-/g, "").slice(0, 4), 16) % 256, o = Math.floor(n * 100 / 256);
  if (!s)
    return lt(o, e);
  const i = 100 - s;
  if (o < i)
    return 1;
  const a = e - 1;
  if (a === 0)
    return 1;
  const u = s / a, l = Math.floor(
    (o - i) / u
  );
  return Math.min(l + 2, e);
}, lt = (t, e) => {
  const s = 100 / e, n = Math.floor(t / s);
  return Math.min(n + 1, e);
};
let h, m = null, $, J = [];
const _t = (t) => {
  J = t;
}, dt = async () => {
  if (m)
    return m;
  m = (async () => {
    if (!h.storefrontAccessToken)
      return;
    const t = new nt(
      h.shopifyDomain,
      h.storefrontAccessToken
    );
    $ = await B(t, {
      useExternalMetafieldNamespace: !1,
      useMetaobjects: h.featureFlags.storefront_metaobjects
    });
  })();
  try {
    await m;
  } catch (t) {
    throw m = null, t;
  }
}, ft = async () => {
  var s;
  await dt();
  const t = $.filter((n) => {
    if (!n.abTestVariantId)
      return !0;
    const o = z(), i = ut({
      kachingSessionId: o,
      abTestVariantsCount: n.abTestVariantsCount,
      abTestTrafficAllocation: n.abTestTrafficAllocation
    });
    return n.abTestVariantNumber === i;
  }), e = (s = J.find(
    (n) => n.locale === h.locale
  )) == null ? void 0 : s.translations;
  return t.map((n) => {
    const o = (e == null ? void 0 : e.dealBlocks[n.id]) || {};
    return pt(n, o);
  });
}, pt = (t, e) => {
  var A, T, q, _, V, C;
  const s = (r) => {
    switch (r.dealBarType) {
      case void 0:
      case "quantity-break":
        return n(r);
      case "bxgy":
        return o(r);
      case "bundle":
        return i(r);
      case "sku":
        return a(r);
      default:
        return null;
    }
  }, n = (r) => ({
    id: r.id,
    title: e[r.title] || r.title,
    mediaImageGID: r.mediaImageGID,
    freeGifts: [
      ...l(r.freeGifts),
      ...y(r.id, t.progressiveGifts)
    ],
    upsells: b(r.upsells),
    dealBarType: "quantity-break",
    quantity: Number(r.quantity),
    discount: g(r.discountType, r.discountValue)
  }), o = (r) => ({
    id: r.id,
    title: e[r.title] || r.title,
    mediaImageGID: r.mediaImageGID,
    freeGifts: [
      ...l(r.freeGifts),
      ...y(r.id, t.progressiveGifts)
    ],
    upsells: b(r.upsells),
    dealBarType: "bxgy",
    buyQuantity: Number(r.buyQuantity),
    buyDiscount: g(
      r.buyDiscountType,
      r.buyDiscountValue
    ),
    getQuantity: Number(r.getQuantity),
    getDiscount: g(
      r.getDiscountType,
      r.getDiscountValue
    )
  }), i = (r) => ({
    id: r.id,
    title: e[r.title] || r.title,
    mediaImageGID: r.mediaImageGID,
    freeGifts: [
      ...l(r.freeGifts),
      ...y(r.id, t.progressiveGifts)
    ],
    upsells: b(r.upsells),
    dealBarType: "bundle",
    bundleProducts: u(r.bundleProducts)
  }), a = (r) => ({
    id: r.id,
    title: e[r.title] || r.title,
    mediaImageGID: r.mediaImageGID,
    freeGifts: [
      ...l(r.freeGifts),
      ...y(r.id, t.progressiveGifts)
    ],
    upsells: b(r.upsells),
    dealBarType: "sku"
  }), u = (r) => r.map((c) => {
    var d;
    return {
      id: c.id,
      productId: c.productGID === "default" ? "default" : p(c.productGID),
      variantId: c.variantGIDs && ((d = c.variantGIDs) != null && d[0]) ? p(c.variantGIDs[0]) : null,
      variantIds: c.variantGIDs ? c.variantGIDs.map(p) : null,
      quantity: Number(c.quantity),
      discount: g(
        c.discountType,
        c.discountValue
      )
    };
  }), l = (r) => r ? r.filter((d) => d.productGID).map((d) => {
    var D, k;
    return {
      id: d.id,
      productId: p(d.productGID),
      variantId: d.variantGIDs && ((D = d.variantGIDs) != null && D[0]) ? p(d.variantGIDs[0]) : null,
      variantIds: d.variantGIDs ? d.variantGIDs.map(p) : null,
      quantity: Number(d.quantity),
      applyOnlyForSubscriptions: (k = d.applyOnlyForSubscriptions) != null ? k : !1
    };
  }) : [], y = (r, c) => {
    if (!c)
      return [];
    const d = t.dealBars.findIndex((f) => f.id === r);
    return c.gifts.filter((f) => f.giftType === "product").filter((f) => f.productGID).filter(
      (f) => d + 1 >= f.unlockAtBar
    ).map((f) => ({
      id: f.id,
      productId: p(f.productGID),
      variantId: null,
      variantIds: null,
      quantity: 1,
      applyOnlyForSubscriptions: !1
    }));
  }, b = (r) => r ? r.map((c) => ({
    id: c.id,
    productId: c.productGID ? p(c.productGID) : null,
    variantId: c.variantGIDs && c.variantGIDs[0] ? p(c.variantGIDs[0]) : null,
    variantIds: c.variantGIDs ? c.variantGIDs.map(p) : null,
    quantity: Number(c.quantity),
    discount: g(c.discountType, c.discountValue)
  })) : [];
  return {
    id: t.id,
    nanoId: t.nanoId,
    discountName: (A = t.discountName) != null ? A : null,
    collectionBreaksEnabled: (T = t.collectionBreaksEnabled) != null ? T : !1,
    collectionBreaksDealProducts: !!t.collectionBreaksEnabled && ((q = t.collectionBreaks) == null ? void 0 : q.visibility) === "deal-products",
    differentVariantsEnabled: t.differentVariantsEnabled,
    marketId: (_ = t.marketId) != null ? _ : null,
    excludedMarketIds: (V = t.excludedMarketIds) != null ? V : null,
    currency: (C = t.currency) != null ? C : null,
    dealBars: t.dealBars.filter((r) => "showAsSoldOutEnabled" in r ? !r.showAsSoldOutEnabled : !0).map(s).filter((r) => r !== null)
  };
}, g = (t, e) => !t || t === "default" ? null : {
  type: t,
  value: Number(e)
}, p = (t) => Number(t.split("/").pop()), Vt = (t) => (h = t, {
  fetchDeals: ft
});
export {
  mt as A,
  It as B,
  yt as C,
  Vt as D,
  dt as E,
  Et as a,
  H as b,
  nt as c,
  S as d,
  M as e,
  wt as f,
  Nt as g,
  vt as h,
  bt as i,
  x as j,
  z as k,
  Dt as l,
  Ot as m,
  At as n,
  St as o,
  qt as p,
  X as q,
  jt as r,
  W as s,
  Gt as t,
  gt as u,
  B as v,
  Tt as w,
  ut as x,
  _t as y,
  kt as z
};
