import { d as O, c as E, e as L, H as h, s as w } from "./index-021f6a62-C5QpSv3X.js";
import { z as x, o as M, B as p, E as b, i as m, I as y } from "./transactionRequest-be6a8ea9-CUKWo5mx.js";
class R extends p {
  constructor({ callbackSelector: e, cause: t, data: n, extraData: c, sender: u, urls: r }) {
    var i;
    super(t.shortMessage || "An error occurred while fetching for an offchain result.", {
      cause: t,
      metaMessages: [
        ...t.metaMessages || [],
        (i = t.metaMessages) != null && i.length ? "" : [],
        "Offchain Gateway Call:",
        r && [
          "  Gateway URL(s):",
          ...r.map((d) => `    ${b(d)}`)
        ],
        `  Sender: ${u}`,
        `  Data: ${n}`,
        `  Callback selector: ${e}`,
        `  Extra data: ${c}`
      ].flat()
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupError"
    });
  }
}
class $ extends p {
  constructor({ result: e, url: t }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", {
      metaMessages: [
        `Gateway URL: ${b(t)}`,
        `Response: ${w(e)}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupResponseMalformedError"
    });
  }
}
class S extends p {
  constructor({ sender: e, to: t }) {
    super("Reverted sender address does not match target contract address (`to`).", {
      metaMessages: [
        `Contract address: ${t}`,
        `OffchainLookup sender address: ${e}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupSenderMismatchError"
    });
  }
}
function A(a, e) {
  if (!m(a, { strict: !1 }))
    throw new y({ address: a });
  if (!m(e, { strict: !1 }))
    throw new y({ address: e });
  return a.toLowerCase() === e.toLowerCase();
}
const j = "0x556f1830", q = {
  name: "OffchainLookup",
  type: "error",
  inputs: [
    {
      name: "sender",
      type: "address"
    },
    {
      name: "urls",
      type: "string[]"
    },
    {
      name: "callData",
      type: "bytes"
    },
    {
      name: "callbackFunction",
      type: "bytes4"
    },
    {
      name: "extraData",
      type: "bytes"
    }
  ]
};
async function D(a, { blockNumber: e, blockTag: t, data: n, to: c }) {
  const { args: u } = O({
    data: n,
    abi: [q]
  }), [r, i, d, s, o] = u, { ccipRead: f } = a, g = f && typeof (f == null ? void 0 : f.request) == "function" ? f.request : v;
  try {
    if (!A(c, r))
      throw new S({ sender: r, to: c });
    const l = await g({ data: d, sender: r, urls: i }), { data: k } = await E(a, {
      blockNumber: e,
      blockTag: t,
      data: x([
        s,
        L([{ type: "bytes" }, { type: "bytes" }], [l, o])
      ]),
      to: c
    });
    return k;
  } catch (l) {
    throw new R({
      callbackSelector: s,
      cause: l,
      data: n,
      extraData: o,
      sender: r,
      urls: i
    });
  }
}
async function v({ data: a, sender: e, urls: t }) {
  var c;
  let n = new Error("An unknown error occurred.");
  for (let u = 0; u < t.length; u++) {
    const r = t[u], i = r.includes("{data}") ? "GET" : "POST", d = i === "POST" ? { data: a, sender: e } : void 0;
    try {
      const s = await fetch(r.replace("{sender}", e).replace("{data}", a), {
        body: JSON.stringify(d),
        method: i
      });
      let o;
      if ((c = s.headers.get("Content-Type")) != null && c.startsWith("application/json") ? o = (await s.json()).data : o = await s.text(), !s.ok) {
        n = new h({
          body: d,
          details: o != null && o.error ? w(o.error) : s.statusText,
          headers: s.headers,
          status: s.status,
          url: r
        });
        continue;
      }
      if (!M(o)) {
        n = new $({
          result: o,
          url: r
        });
        continue;
      }
      return o;
    } catch (s) {
      n = new h({
        body: d,
        details: s.message,
        url: r
      });
    }
  }
  throw n;
}
export {
  v as ccipRequest,
  D as offchainLookup,
  q as offchainLookupAbiItem,
  j as offchainLookupSignature
};
//# sourceMappingURL=ccip-c78d2f16-Bj6lCXts.js.map
