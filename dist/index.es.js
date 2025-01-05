var Qf = Object.defineProperty;
var Bc = (r) => {
  throw TypeError(r);
};
var Vf = (r, t, e) => t in r ? Qf(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var A = (r, t, e) => Vf(r, typeof t != "symbol" ? t + "" : t, e), jo = (r, t, e) => t.has(r) || Bc("Cannot " + e);
var l = (r, t, e) => (jo(r, t, "read from private field"), e ? e.call(r) : t.get(r)), b = (r, t, e) => t.has(r) ? Bc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), d = (r, t, e, n) => (jo(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e), P = (r, t, e) => (jo(r, t, "access private method"), e);
var qs = (r, t, e, n) => ({
  set _(s) {
    d(r, t, s, e);
  },
  get _() {
    return l(r, t, n);
  }
});
import Jf, { useState as vr, useCallback as co, useEffect as lo } from "react";
import { useConnectWallet as Xa, init as _f, Web3OnboardProvider as zf } from "@web3-onboard/react";
import Kf from "@web3-onboard/injected-wallets";
import jf from "@web3-onboard/coinbase";
import Wf from "@web3-onboard/trust";
const Yf = "6.13.4";
function Zf(r, t, e) {
  const n = t.split("|").map((i) => i.trim());
  for (let i = 0; i < n.length; i++)
    switch (t) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof r === t)
          return;
    }
  const s = new Error(`invalid value for type ${t}`);
  throw s.code = "INVALID_ARGUMENT", s.argument = `value.${e}`, s.value = r, s;
}
async function Ft(r) {
  const t = Object.keys(r);
  return (await Promise.all(t.map((n) => Promise.resolve(r[n])))).reduce((n, s, i) => (n[t[i]] = s, n), {});
}
function H(r, t, e) {
  for (let n in t) {
    let s = t[n];
    const i = e ? e[n] : null;
    i && Zf(s, i, n), Object.defineProperty(r, n, { enumerable: !0, value: s, writable: !1 });
  }
}
function Jr(r) {
  if (r == null)
    return "null";
  if (Array.isArray(r))
    return "[ " + r.map(Jr).join(", ") + " ]";
  if (r instanceof Uint8Array) {
    const t = "0123456789abcdef";
    let e = "0x";
    for (let n = 0; n < r.length; n++)
      e += t[r[n] >> 4], e += t[r[n] & 15];
    return e;
  }
  if (typeof r == "object" && typeof r.toJSON == "function")
    return Jr(r.toJSON());
  switch (typeof r) {
    case "boolean":
    case "symbol":
      return r.toString();
    case "bigint":
      return BigInt(r).toString();
    case "number":
      return r.toString();
    case "string":
      return JSON.stringify(r);
    case "object": {
      const t = Object.keys(r);
      return t.sort(), "{ " + t.map((e) => `${Jr(e)}: ${Jr(r[e])}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function vt(r, t) {
  return r && r.code === t;
}
function qa(r) {
  return vt(r, "CALL_EXCEPTION");
}
function lt(r, t, e) {
  let n = r;
  {
    const i = [];
    if (e) {
      if ("message" in e || "code" in e || "name" in e)
        throw new Error(`value will overwrite populated values: ${Jr(e)}`);
      for (const o in e) {
        if (o === "shortMessage")
          continue;
        const a = e[o];
        i.push(o + "=" + Jr(a));
      }
    }
    i.push(`code=${t}`), i.push(`version=${Yf}`), i.length && (r += " (" + i.join(", ") + ")");
  }
  let s;
  switch (t) {
    case "INVALID_ARGUMENT":
      s = new TypeError(r);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      s = new RangeError(r);
      break;
    default:
      s = new Error(r);
  }
  return H(s, { code: t }), e && Object.assign(s, e), s.shortMessage == null && H(s, { shortMessage: n }), s;
}
function v(r, t, e, n) {
  if (!r)
    throw lt(t, e, n);
}
function m(r, t, e, n) {
  v(r, t, "INVALID_ARGUMENT", { argument: e, value: n });
}
function Kl(r, t, e) {
  e == null && (e = ""), e && (e = ": " + e), v(r >= t, "missing arguemnt" + e, "MISSING_ARGUMENT", {
    count: r,
    expectedCount: t
  }), v(r <= t, "too many arguments" + e, "UNEXPECTED_ARGUMENT", {
    count: r,
    expectedCount: t
  });
}
["NFD", "NFC", "NFKD", "NFKC"].reduce((r, t) => {
  try {
    if ("test".normalize(t) !== "test")
      throw new Error("bad");
    if (t === "NFD" && "é".normalize("NFD") !== "é")
      throw new Error("broken");
    r.push(t);
  } catch {
  }
  return r;
}, []);
function Ui(r, t, e) {
  if (e == null && (e = ""), r !== t) {
    let n = e, s = "new";
    e && (n += ".", s += " " + e), v(!1, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
      operation: s
    });
  }
}
function jl(r, t, e) {
  if (r instanceof Uint8Array)
    return e ? new Uint8Array(r) : r;
  if (typeof r == "string" && r.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
    const n = new Uint8Array((r.length - 2) / 2);
    let s = 2;
    for (let i = 0; i < n.length; i++)
      n[i] = parseInt(r.substring(s, s + 2), 16), s += 2;
    return n;
  }
  m(!1, "invalid BytesLike value", t || "value", r);
}
function Z(r, t) {
  return jl(r, t, !1);
}
function Lt(r, t) {
  return jl(r, t, !0);
}
function st(r, t) {
  return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || typeof t == "number" && r.length !== 2 + 2 * t || t === !0 && r.length % 2 !== 0);
}
function $a(r) {
  return st(r, !0) || r instanceof Uint8Array;
}
const Oc = "0123456789abcdef";
function R(r) {
  const t = Z(r);
  let e = "0x";
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    e += Oc[(s & 240) >> 4] + Oc[s & 15];
  }
  return e;
}
function yt(r) {
  return "0x" + r.map((t) => R(t).substring(2)).join("");
}
function Zr(r) {
  return st(r, !0) ? (r.length - 2) / 2 : Z(r).length;
}
function ut(r, t, e) {
  const n = Z(r);
  return e != null && e > n.length && v(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
    buffer: n,
    length: n.length,
    offset: e
  }), R(n.slice(t ?? 0, e ?? n.length));
}
function Wl(r, t, e) {
  const n = Z(r);
  v(t >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(n),
    length: t,
    offset: t + 1
  });
  const s = new Uint8Array(t);
  return s.fill(0), e ? s.set(n, t - n.length) : s.set(n, 0), R(s);
}
function Pr(r, t) {
  return Wl(r, t, !0);
}
function Xf(r, t) {
  return Wl(r, t, !1);
}
const To = BigInt(0), Ae = BigInt(1), _r = 9007199254740991;
function uo(r, t) {
  const e = So(r, "value"), n = BigInt(Q(t, "width"));
  if (v(e >> n === To, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: r
  }), e >> n - Ae) {
    const s = (Ae << n) - Ae;
    return -((~e & s) + Ae);
  }
  return e;
}
function Yl(r, t) {
  let e = S(r, "value");
  const n = BigInt(Q(t, "width")), s = Ae << n - Ae;
  if (e < To) {
    e = -e, v(e <= s, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
    const i = (Ae << n) - Ae;
    return (~e & i) + Ae;
  } else
    v(e < s, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
  return e;
}
function qn(r, t) {
  const e = So(r, "value"), n = BigInt(Q(t, "bits"));
  return e & (Ae << n) - Ae;
}
function S(r, t) {
  switch (typeof r) {
    case "bigint":
      return r;
    case "number":
      return m(Number.isInteger(r), "underflow", t || "value", r), m(r >= -_r && r <= _r, "overflow", t || "value", r), BigInt(r);
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return r[0] === "-" && r[1] !== "-" ? -BigInt(r.substring(1)) : BigInt(r);
      } catch (e) {
        m(!1, `invalid BigNumberish string: ${e.message}`, t || "value", r);
      }
  }
  m(!1, "invalid BigNumberish value", t || "value", r);
}
function So(r, t) {
  const e = S(r, t);
  return v(e >= To, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value: r
  }), e;
}
const Ic = "0123456789abcdef";
function Uo(r) {
  if (r instanceof Uint8Array) {
    let t = "0x0";
    for (const e of r)
      t += Ic[e >> 4], t += Ic[e & 15];
    return BigInt(t);
  }
  return S(r);
}
function Q(r, t) {
  switch (typeof r) {
    case "bigint":
      return m(r >= -_r && r <= _r, "overflow", t || "value", r), Number(r);
    case "number":
      return m(Number.isInteger(r), "underflow", t || "value", r), m(r >= -_r && r <= _r, "overflow", t || "value", r), r;
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return Q(BigInt(r), t);
      } catch (e) {
        m(!1, `invalid numeric string: ${e.message}`, t || "value", r);
      }
  }
  m(!1, "invalid numeric value", t || "value", r);
}
function qf(r) {
  return Q(Uo(r));
}
function Qn(r, t) {
  let n = So(r, "value").toString(16);
  if (t == null)
    n.length % 2 && (n = "0" + n);
  else {
    const s = Q(t, "width");
    for (v(s * 2 >= n.length, `value exceeds width (${s} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: r
    }); n.length < s * 2; )
      n = "0" + n;
  }
  return "0x" + n;
}
function Dt(r) {
  const t = So(r, "value");
  if (t === To)
    return new Uint8Array([]);
  let e = t.toString(16);
  e.length % 2 && (e = "0" + e);
  const n = new Uint8Array(e.length / 2);
  for (let s = 0; s < n.length; s++) {
    const i = s * 2;
    n[s] = parseInt(e.substring(i, i + 2), 16);
  }
  return n;
}
function zr(r) {
  let t = R($a(r) ? r : Dt(r)).substring(2);
  for (; t.startsWith("0"); )
    t = t.substring(1);
  return t === "" && (t = "0"), "0x" + t;
}
const kc = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
BigInt(0);
const Rc = BigInt(58);
function $f(r) {
  const t = Z(r);
  let e = Uo(t), n = "";
  for (; e; )
    n = kc[Number(e % Rc)] + n, e /= Rc;
  for (let s = 0; s < t.length && !t[s]; s++)
    n = kc[0] + n;
  return n;
}
function th(r) {
  r = atob(r);
  const t = new Uint8Array(r.length);
  for (let e = 0; e < r.length; e++)
    t[e] = r.charCodeAt(e);
  return Z(t);
}
function eh(r) {
  const t = Z(r);
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += String.fromCharCode(t[n]);
  return btoa(e);
}
var ts;
class Zl {
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(t, e, n) {
    /**
     *  The event filter.
     */
    A(this, "filter");
    /**
     *  The **EventEmitterable**.
     */
    A(this, "emitter");
    b(this, ts);
    d(this, ts, e), H(this, { emitter: t, filter: n });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    l(this, ts) != null && await this.emitter.off(this.filter, l(this, ts));
  }
}
ts = new WeakMap();
function nh(r, t, e, n, s) {
  m(!1, `invalid codepoint at offset ${t}; ${r}`, "bytes", e);
}
function Xl(r, t, e, n, s) {
  if (r === "BAD_PREFIX" || r === "UNEXPECTED_CONTINUE") {
    let i = 0;
    for (let o = t + 1; o < e.length && e[o] >> 6 === 2; o++)
      i++;
    return i;
  }
  return r === "OVERRUN" ? e.length - t - 1 : 0;
}
function rh(r, t, e, n, s) {
  return r === "OVERLONG" ? (m(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s), n.push(s), 0) : (n.push(65533), Xl(r, t, e));
}
const sh = Object.freeze({
  error: nh,
  ignore: Xl,
  replace: rh
});
function ih(r, t) {
  t == null && (t = sh.error);
  const e = Z(r, "bytes"), n = [];
  let s = 0;
  for (; s < e.length; ) {
    const i = e[s++];
    if (!(i >> 7)) {
      n.push(i);
      continue;
    }
    let o = null, a = null;
    if ((i & 224) === 192)
      o = 1, a = 127;
    else if ((i & 240) === 224)
      o = 2, a = 2047;
    else if ((i & 248) === 240)
      o = 3, a = 65535;
    else {
      (i & 192) === 128 ? s += t("UNEXPECTED_CONTINUE", s - 1, e, n) : s += t("BAD_PREFIX", s - 1, e, n);
      continue;
    }
    if (s - 1 + o >= e.length) {
      s += t("OVERRUN", s - 1, e, n);
      continue;
    }
    let c = i & (1 << 8 - o - 1) - 1;
    for (let u = 0; u < o; u++) {
      let f = e[s];
      if ((f & 192) != 128) {
        s += t("MISSING_CONTINUE", s, e, n), c = null;
        break;
      }
      c = c << 6 | f & 63, s++;
    }
    if (c !== null) {
      if (c > 1114111) {
        s += t("OUT_OF_RANGE", s - 1 - o, e, n, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        s += t("UTF16_SURROGATE", s - 1 - o, e, n, c);
        continue;
      }
      if (c <= a) {
        s += t("OVERLONG", s - 1 - o, e, n, c);
        continue;
      }
      n.push(c);
    }
  }
  return n;
}
function ln(r, t) {
  m(typeof r == "string", "invalid string value", "str", r);
  let e = [];
  for (let n = 0; n < r.length; n++) {
    const s = r.charCodeAt(n);
    if (s < 128)
      e.push(s);
    else if (s < 2048)
      e.push(s >> 6 | 192), e.push(s & 63 | 128);
    else if ((s & 64512) == 55296) {
      n++;
      const i = r.charCodeAt(n);
      m(n < r.length && (i & 64512) === 56320, "invalid surrogate pair", "str", r);
      const o = 65536 + ((s & 1023) << 10) + (i & 1023);
      e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(o & 63 | 128);
    } else
      e.push(s >> 12 | 224), e.push(s >> 6 & 63 | 128), e.push(s & 63 | 128);
  }
  return new Uint8Array(e);
}
function oh(r) {
  return r.map((t) => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10 & 1023) + 55296, (t & 1023) + 56320))).join("");
}
function fo(r, t) {
  return oh(ih(r, t));
}
function ql(r) {
  async function t(e, n) {
    v(n == null || !n.cancelled, "request cancelled before sending", "CANCELLED");
    const s = e.url.split(":")[0].toLowerCase();
    v(s === "http" || s === "https", `unsupported protocol ${s}`, "UNSUPPORTED_OPERATION", {
      info: { protocol: s },
      operation: "request"
    }), v(s === "https" || !e.credentials || e.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
      operation: "request"
    });
    let i = null;
    const o = new AbortController(), a = setTimeout(() => {
      i = lt("request timeout", "TIMEOUT"), o.abort();
    }, e.timeout);
    n && n.addListener(() => {
      i = lt("request cancelled", "CANCELLED"), o.abort();
    });
    const c = {
      method: e.method,
      headers: new Headers(Array.from(e)),
      body: e.body || void 0,
      signal: o.signal
    };
    let u;
    try {
      u = await fetch(e.url, c);
    } catch (w) {
      throw clearTimeout(a), i || w;
    }
    clearTimeout(a);
    const f = {};
    u.headers.forEach((w, E) => {
      f[E.toLowerCase()] = w;
    });
    const h = await u.arrayBuffer(), p = h == null ? null : new Uint8Array(h);
    return {
      statusCode: u.status,
      statusMessage: u.statusText,
      headers: f,
      body: p
    };
  }
  return t;
}
const ah = 12, ch = 250;
let Tc = ql();
const lh = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), uh = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
let Wo = !1;
async function $l(r, t) {
  try {
    const e = r.match(lh);
    if (!e)
      throw new Error("invalid data");
    return new Gn(200, "OK", {
      "content-type": e[1] || "text/plain"
    }, e[2] ? th(e[3]) : hh(e[3]));
  } catch {
    return new Gn(599, "BAD REQUEST (invalid data: URI)", {}, null, new fn(r));
  }
}
function tu(r) {
  async function t(e, n) {
    try {
      const s = e.match(uh);
      if (!s)
        throw new Error("invalid link");
      return new fn(`${r}${s[2]}`);
    } catch {
      return new Gn(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new fn(e));
    }
  }
  return t;
}
const Vi = {
  data: $l,
  ipfs: tu("https://gateway.ipfs.io/ipfs/")
}, eu = /* @__PURE__ */ new WeakMap();
var nr, xn;
class fh {
  constructor(t) {
    b(this, nr);
    b(this, xn);
    d(this, nr, []), d(this, xn, !1), eu.set(t, () => {
      if (!l(this, xn)) {
        d(this, xn, !0);
        for (const e of l(this, nr))
          setTimeout(() => {
            e();
          }, 0);
        d(this, nr, []);
      }
    });
  }
  addListener(t) {
    v(!l(this, xn), "singal already cancelled", "UNSUPPORTED_OPERATION", {
      operation: "fetchCancelSignal.addCancelListener"
    }), l(this, nr).push(t);
  }
  get cancelled() {
    return l(this, xn);
  }
  checkSignal() {
    v(!this.cancelled, "cancelled", "CANCELLED", {});
  }
}
nr = new WeakMap(), xn = new WeakMap();
function Ji(r) {
  if (r == null)
    throw new Error("missing signal; should not happen");
  return r.checkSignal(), r;
}
var es, ns, pe, We, rs, ss, At, Xt, Ye, rr, sr, ir, Be, ge, Nn, or, si;
const Po = class Po {
  /**
   *  Create a new FetchRequest instance with default values.
   *
   *  Once created, each property may be set before issuing a
   *  ``.send()`` to make the request.
   */
  constructor(t) {
    b(this, or);
    b(this, es);
    b(this, ns);
    b(this, pe);
    b(this, We);
    b(this, rs);
    b(this, ss);
    b(this, At);
    b(this, Xt);
    b(this, Ye);
    // Hooks
    b(this, rr);
    b(this, sr);
    b(this, ir);
    b(this, Be);
    b(this, ge);
    b(this, Nn);
    d(this, ss, String(t)), d(this, es, !1), d(this, ns, !0), d(this, pe, {}), d(this, We, ""), d(this, rs, 3e5), d(this, ge, {
      slotInterval: ch,
      maxAttempts: ah
    }), d(this, Nn, null);
  }
  /**
   *  The fetch URL to request.
   */
  get url() {
    return l(this, ss);
  }
  set url(t) {
    d(this, ss, String(t));
  }
  /**
   *  The fetch body, if any, to send as the request body. //(default: null)//
   *
   *  When setting a body, the intrinsic ``Content-Type`` is automatically
   *  set and will be used if **not overridden** by setting a custom
   *  header.
   *
   *  If %%body%% is null, the body is cleared (along with the
   *  intrinsic ``Content-Type``).
   *
   *  If %%body%% is a string, the intrinsic ``Content-Type`` is set to
   *  ``text/plain``.
   *
   *  If %%body%% is a Uint8Array, the intrinsic ``Content-Type`` is set to
   *  ``application/octet-stream``.
   *
   *  If %%body%% is any other object, the intrinsic ``Content-Type`` is
   *  set to ``application/json``.
   */
  get body() {
    return l(this, At) == null ? null : new Uint8Array(l(this, At));
  }
  set body(t) {
    if (t == null)
      d(this, At, void 0), d(this, Xt, void 0);
    else if (typeof t == "string")
      d(this, At, ln(t)), d(this, Xt, "text/plain");
    else if (t instanceof Uint8Array)
      d(this, At, t), d(this, Xt, "application/octet-stream");
    else if (typeof t == "object")
      d(this, At, ln(JSON.stringify(t))), d(this, Xt, "application/json");
    else
      throw new Error("invalid body");
  }
  /**
   *  Returns true if the request has a body.
   */
  hasBody() {
    return l(this, At) != null;
  }
  /**
   *  The HTTP method to use when requesting the URI. If no method
   *  has been explicitly set, then ``GET`` is used if the body is
   *  null and ``POST`` otherwise.
   */
  get method() {
    return l(this, We) ? l(this, We) : this.hasBody() ? "POST" : "GET";
  }
  set method(t) {
    t == null && (t = ""), d(this, We, String(t).toUpperCase());
  }
  /**
   *  The headers that will be used when requesting the URI. All
   *  keys are lower-case.
   *
   *  This object is a copy, so any changes will **NOT** be reflected
   *  in the ``FetchRequest``.
   *
   *  To set a header entry, use the ``setHeader`` method.
   */
  get headers() {
    const t = Object.assign({}, l(this, pe));
    return l(this, Ye) && (t.authorization = `Basic ${eh(ln(l(this, Ye)))}`), this.allowGzip && (t["accept-encoding"] = "gzip"), t["content-type"] == null && l(this, Xt) && (t["content-type"] = l(this, Xt)), this.body && (t["content-length"] = String(this.body.length)), t;
  }
  /**
   *  Get the header for %%key%%, ignoring case.
   */
  getHeader(t) {
    return this.headers[t.toLowerCase()];
  }
  /**
   *  Set the header for %%key%% to %%value%%. All values are coerced
   *  to a string.
   */
  setHeader(t, e) {
    l(this, pe)[String(t).toLowerCase()] = String(e);
  }
  /**
   *  Clear all headers, resetting all intrinsic headers.
   */
  clearHeaders() {
    d(this, pe, {});
  }
  [Symbol.iterator]() {
    const t = this.headers, e = Object.keys(t);
    let n = 0;
    return {
      next: () => {
        if (n < e.length) {
          const s = e[n++];
          return {
            value: [s, t[s]],
            done: !1
          };
        }
        return { value: void 0, done: !0 };
      }
    };
  }
  /**
   *  The value that will be sent for the ``Authorization`` header.
   *
   *  To set the credentials, use the ``setCredentials`` method.
   */
  get credentials() {
    return l(this, Ye) || null;
  }
  /**
   *  Sets an ``Authorization`` for %%username%% with %%password%%.
   */
  setCredentials(t, e) {
    m(!t.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), d(this, Ye, `${t}:${e}`);
  }
  /**
   *  Enable and request gzip-encoded responses. The response will
   *  automatically be decompressed. //(default: true)//
   */
  get allowGzip() {
    return l(this, ns);
  }
  set allowGzip(t) {
    d(this, ns, !!t);
  }
  /**
   *  Allow ``Authentication`` credentials to be sent over insecure
   *  channels. //(default: false)//
   */
  get allowInsecureAuthentication() {
    return !!l(this, es);
  }
  set allowInsecureAuthentication(t) {
    d(this, es, !!t);
  }
  /**
   *  The timeout (in milliseconds) to wait for a complete response.
   *  //(default: 5 minutes)//
   */
  get timeout() {
    return l(this, rs);
  }
  set timeout(t) {
    m(t >= 0, "timeout must be non-zero", "timeout", t), d(this, rs, t);
  }
  /**
   *  This function is called prior to each request, for example
   *  during a redirection or retry in case of server throttling.
   *
   *  This offers an opportunity to populate headers or update
   *  content before sending a request.
   */
  get preflightFunc() {
    return l(this, rr) || null;
  }
  set preflightFunc(t) {
    d(this, rr, t);
  }
  /**
   *  This function is called after each response, offering an
   *  opportunity to provide client-level throttling or updating
   *  response data.
   *
   *  Any error thrown in this causes the ``send()`` to throw.
   *
   *  To schedule a retry attempt (assuming the maximum retry limit
   *  has not been reached), use [[response.throwThrottleError]].
   */
  get processFunc() {
    return l(this, sr) || null;
  }
  set processFunc(t) {
    d(this, sr, t);
  }
  /**
   *  This function is called on each retry attempt.
   */
  get retryFunc() {
    return l(this, ir) || null;
  }
  set retryFunc(t) {
    d(this, ir, t);
  }
  /**
   *  This function is called to fetch content from HTTP and
   *  HTTPS URLs and is platform specific (e.g. nodejs vs
   *  browsers).
   *
   *  This is by default the currently registered global getUrl
   *  function, which can be changed using [[registerGetUrl]].
   *  If this has been set, setting is to ``null`` will cause
   *  this FetchRequest (and any future clones) to revert back to
   *  using the currently registered global getUrl function.
   *
   *  Setting this is generally not necessary, but may be useful
   *  for developers that wish to intercept requests or to
   *  configurege a proxy or other agent.
   */
  get getUrlFunc() {
    return l(this, Nn) || Tc;
  }
  set getUrlFunc(t) {
    d(this, Nn, t);
  }
  toString() {
    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${l(this, At) ? R(l(this, At)) : "null"}>`;
  }
  /**
   *  Update the throttle parameters used to determine maximum
   *  attempts and exponential-backoff properties.
   */
  setThrottleParams(t) {
    t.slotInterval != null && (l(this, ge).slotInterval = t.slotInterval), t.maxAttempts != null && (l(this, ge).maxAttempts = t.maxAttempts);
  }
  /**
   *  Resolves to the response by sending the request.
   */
  send() {
    return v(l(this, Be) == null, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" }), d(this, Be, new fh(this)), P(this, or, si).call(this, 0, Sc() + this.timeout, 0, this, new Gn(0, "", {}, null, this));
  }
  /**
   *  Cancels the inflight response, causing a ``CANCELLED``
   *  error to be rejected from the [[send]].
   */
  cancel() {
    v(l(this, Be) != null, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
    const t = eu.get(this);
    if (!t)
      throw new Error("missing signal; should not happen");
    t();
  }
  /**
   *  Returns a new [[FetchRequest]] that represents the redirection
   *  to %%location%%.
   */
  redirect(t) {
    const e = this.url.split(":")[0].toLowerCase(), n = t.split(":")[0].toLowerCase();
    v(this.method === "GET" && (e !== "https" || n !== "http") && t.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
      operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t)})`
    });
    const s = new Po(t);
    return s.method = "GET", s.allowGzip = this.allowGzip, s.timeout = this.timeout, d(s, pe, Object.assign({}, l(this, pe))), l(this, At) && d(s, At, new Uint8Array(l(this, At))), d(s, Xt, l(this, Xt)), s;
  }
  /**
   *  Create a new copy of this request.
   */
  clone() {
    const t = new Po(this.url);
    return d(t, We, l(this, We)), l(this, At) && d(t, At, l(this, At)), d(t, Xt, l(this, Xt)), d(t, pe, Object.assign({}, l(this, pe))), d(t, Ye, l(this, Ye)), this.allowGzip && (t.allowGzip = !0), t.timeout = this.timeout, this.allowInsecureAuthentication && (t.allowInsecureAuthentication = !0), d(t, rr, l(this, rr)), d(t, sr, l(this, sr)), d(t, ir, l(this, ir)), d(t, ge, Object.assign({}, l(this, ge))), d(t, Nn, l(this, Nn)), t;
  }
  /**
   *  Locks all static configuration for gateways and FetchGetUrlFunc
   *  registration.
   */
  static lockConfig() {
    Wo = !0;
  }
  /**
   *  Get the current Gateway function for %%scheme%%.
   */
  static getGateway(t) {
    return Vi[t.toLowerCase()] || null;
  }
  /**
   *  Use the %%func%% when fetching URIs using %%scheme%%.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGateway(t, e) {
    if (t = t.toLowerCase(), t === "http" || t === "https")
      throw new Error(`cannot intercept ${t}; use registerGetUrl`);
    if (Wo)
      throw new Error("gateways locked");
    Vi[t] = e;
  }
  /**
   *  Use %%getUrl%% when fetching URIs over HTTP and HTTPS requests.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGetUrl(t) {
    if (Wo)
      throw new Error("gateways locked");
    Tc = t;
  }
  /**
   *  Creates a getUrl function that fetches content from HTTP and
   *  HTTPS URLs.
   *
   *  The available %%options%% are dependent on the platform
   *  implementation of the default getUrl function.
   *
   *  This is not generally something that is needed, but is useful
   *  when trying to customize simple behaviour when fetching HTTP
   *  content.
   */
  static createGetUrlFunc(t) {
    return ql();
  }
  /**
   *  Creates a function that can "fetch" data URIs.
   *
   *  Note that this is automatically done internally to support
   *  data URIs, so it is not necessary to register it.
   *
   *  This is not generally something that is needed, but may
   *  be useful in a wrapper to perfom custom data URI functionality.
   */
  static createDataGateway() {
    return $l;
  }
  /**
   *  Creates a function that will fetch IPFS (unvalidated) from
   *  a custom gateway baseUrl.
   *
   *  The default IPFS gateway used internally is
   *  ``"https:/\/gateway.ipfs.io/ipfs/"``.
   */
  static createIpfsGatewayFunc(t) {
    return tu(t);
  }
};
es = new WeakMap(), ns = new WeakMap(), pe = new WeakMap(), We = new WeakMap(), rs = new WeakMap(), ss = new WeakMap(), At = new WeakMap(), Xt = new WeakMap(), Ye = new WeakMap(), rr = new WeakMap(), sr = new WeakMap(), ir = new WeakMap(), Be = new WeakMap(), ge = new WeakMap(), Nn = new WeakMap(), or = new WeakSet(), si = async function(t, e, n, s, i) {
  var f, h, p;
  if (t >= l(this, ge).maxAttempts)
    return i.makeServerError("exceeded maximum retry limit");
  v(Sc() <= e, "timeout", "TIMEOUT", {
    operation: "request.send",
    reason: "timeout",
    request: s
  }), n > 0 && await dh(n);
  let o = this.clone();
  const a = (o.url.split(":")[0] || "").toLowerCase();
  if (a in Vi) {
    const w = await Vi[a](o.url, Ji(l(s, Be)));
    if (w instanceof Gn) {
      let E = w;
      if (this.processFunc) {
        Ji(l(s, Be));
        try {
          E = await this.processFunc(o, E);
        } catch (y) {
          (y.throttle == null || typeof y.stall != "number") && E.makeServerError("error in post-processing function", y).assertOk();
        }
      }
      return E;
    }
    o = w;
  }
  this.preflightFunc && (o = await this.preflightFunc(o));
  const c = await this.getUrlFunc(o, Ji(l(s, Be)));
  let u = new Gn(c.statusCode, c.statusMessage, c.headers, c.body, s);
  if (u.statusCode === 301 || u.statusCode === 302) {
    try {
      const w = u.headers.location || "";
      return P(f = o.redirect(w), or, si).call(f, t + 1, e, 0, s, u);
    } catch {
    }
    return u;
  } else if (u.statusCode === 429 && (this.retryFunc == null || await this.retryFunc(o, u, t))) {
    const w = u.headers["retry-after"];
    let E = l(this, ge).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
    return typeof w == "string" && w.match(/^[1-9][0-9]*$/) && (E = parseInt(w)), P(h = o.clone(), or, si).call(h, t + 1, e, E, s, u);
  }
  if (this.processFunc) {
    Ji(l(s, Be));
    try {
      u = await this.processFunc(o, u);
    } catch (w) {
      (w.throttle == null || typeof w.stall != "number") && u.makeServerError("error in post-processing function", w).assertOk();
      let E = l(this, ge).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
      return w.stall >= 0 && (E = w.stall), P(p = o.clone(), or, si).call(p, t + 1, e, E, s, u);
    }
  }
  return u;
};
let fn = Po;
var xi, Ni, vi, qt, is, ar;
const bc = class bc {
  constructor(t, e, n, s, i) {
    b(this, xi);
    b(this, Ni);
    b(this, vi);
    b(this, qt);
    b(this, is);
    b(this, ar);
    d(this, xi, t), d(this, Ni, e), d(this, vi, Object.keys(n).reduce((o, a) => (o[a.toLowerCase()] = String(n[a]), o), {})), d(this, qt, s == null ? null : new Uint8Array(s)), d(this, is, i || null), d(this, ar, { message: "" });
  }
  toString() {
    return `<FetchResponse status=${this.statusCode} body=${l(this, qt) ? R(l(this, qt)) : "null"}>`;
  }
  /**
   *  The response status code.
   */
  get statusCode() {
    return l(this, xi);
  }
  /**
   *  The response status message.
   */
  get statusMessage() {
    return l(this, Ni);
  }
  /**
   *  The response headers. All keys are lower-case.
   */
  get headers() {
    return Object.assign({}, l(this, vi));
  }
  /**
   *  The response body, or ``null`` if there was no body.
   */
  get body() {
    return l(this, qt) == null ? null : new Uint8Array(l(this, qt));
  }
  /**
   *  The response body as a UTF-8 encoded string, or the empty
   *  string (i.e. ``""``) if there was no body.
   *
   *  An error is thrown if the body is invalid UTF-8 data.
   */
  get bodyText() {
    try {
      return l(this, qt) == null ? "" : fo(l(this, qt));
    } catch {
      v(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
        operation: "bodyText",
        info: { response: this }
      });
    }
  }
  /**
   *  The response body, decoded as JSON.
   *
   *  An error is thrown if the body is invalid JSON-encoded data
   *  or if there was no body.
   */
  get bodyJson() {
    try {
      return JSON.parse(this.bodyText);
    } catch {
      v(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
        operation: "bodyJson",
        info: { response: this }
      });
    }
  }
  [Symbol.iterator]() {
    const t = this.headers, e = Object.keys(t);
    let n = 0;
    return {
      next: () => {
        if (n < e.length) {
          const s = e[n++];
          return {
            value: [s, t[s]],
            done: !1
          };
        }
        return { value: void 0, done: !0 };
      }
    };
  }
  /**
   *  Return a Response with matching headers and body, but with
   *  an error status code (i.e. 599) and %%message%% with an
   *  optional %%error%%.
   */
  makeServerError(t, e) {
    let n;
    t ? n = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})` : (t = `${this.statusCode} ${this.statusMessage}`, n = `CLIENT ESCALATED SERVER ERROR (${t})`);
    const s = new bc(599, n, this.headers, this.body, l(this, is) || void 0);
    return d(s, ar, { message: t, error: e }), s;
  }
  /**
   *  If called within a [request.processFunc](FetchRequest-processFunc)
   *  call, causes the request to retry as if throttled for %%stall%%
   *  milliseconds.
   */
  throwThrottleError(t, e) {
    e == null ? e = -1 : m(Number.isInteger(e) && e >= 0, "invalid stall timeout", "stall", e);
    const n = new Error(t || "throttling requests");
    throw H(n, { stall: e, throttle: !0 }), n;
  }
  /**
   *  Get the header value for %%key%%, ignoring case.
   */
  getHeader(t) {
    return this.headers[t.toLowerCase()];
  }
  /**
   *  Returns true if the response has a body.
   */
  hasBody() {
    return l(this, qt) != null;
  }
  /**
   *  The request made for this response.
   */
  get request() {
    return l(this, is);
  }
  /**
   *  Returns true if this response was a success statusCode.
   */
  ok() {
    return l(this, ar).message === "" && this.statusCode >= 200 && this.statusCode < 300;
  }
  /**
   *  Throws a ``SERVER_ERROR`` if this response is not ok.
   */
  assertOk() {
    if (this.ok())
      return;
    let { message: t, error: e } = l(this, ar);
    t === "" && (t = `server response ${this.statusCode} ${this.statusMessage}`);
    let n = null;
    this.request && (n = this.request.url);
    let s = null;
    try {
      l(this, qt) && (s = fo(l(this, qt)));
    } catch {
    }
    v(!1, t, "SERVER_ERROR", {
      request: this.request || "unknown request",
      response: this,
      error: e,
      info: {
        requestUrl: n,
        responseBody: s,
        responseStatus: `${this.statusCode} ${this.statusMessage}`
      }
    });
  }
};
xi = new WeakMap(), Ni = new WeakMap(), vi = new WeakMap(), qt = new WeakMap(), is = new WeakMap(), ar = new WeakMap();
let Gn = bc;
function Sc() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function hh(r) {
  return ln(r.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16))));
}
function dh(r) {
  return new Promise((t) => setTimeout(t, r));
}
const ph = BigInt(-1), fe = BigInt(0), Kr = BigInt(1), gh = BigInt(5), Lr = {};
let Xr = "0000";
for (; Xr.length < 80; )
  Xr += Xr;
function zn(r) {
  let t = Xr;
  for (; t.length < r; )
    t += t;
  return BigInt("1" + t.substring(0, r));
}
function $s(r, t, e) {
  const n = BigInt(t.width);
  if (t.signed) {
    const s = Kr << n - Kr;
    v(e == null || r >= -s && r < s, "overflow", "NUMERIC_FAULT", {
      operation: e,
      fault: "overflow",
      value: r
    }), r > fe ? r = uo(qn(r, n), n) : r = -uo(qn(-r, n), n);
  } else {
    const s = Kr << n;
    v(e == null || r >= 0 && r < s, "overflow", "NUMERIC_FAULT", {
      operation: e,
      fault: "overflow",
      value: r
    }), r = (r % s + s) % s & s - Kr;
  }
  return r;
}
function Yo(r) {
  typeof r == "number" && (r = `fixed128x${r}`);
  let t = !0, e = 128, n = 18;
  if (typeof r == "string") {
    if (r !== "fixed") if (r === "ufixed")
      t = !1;
    else {
      const i = r.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
      m(i, "invalid fixed format", "format", r), t = i[1] !== "u", e = parseInt(i[2]), n = parseInt(i[3]);
    }
  } else if (r) {
    const i = r, o = (a, c, u) => i[a] == null ? u : (m(typeof i[a] === c, "invalid fixed format (" + a + " not " + c + ")", "format." + a, i[a]), i[a]);
    t = o("signed", "boolean", t), e = o("width", "number", e), n = o("decimals", "number", n);
  }
  m(e % 8 === 0, "invalid FixedNumber width (not byte aligned)", "format.width", e), m(n <= 80, "invalid FixedNumber decimals (too large)", "format.decimals", n);
  const s = (t ? "" : "u") + "fixed" + String(e) + "x" + String(n);
  return { signed: t, width: e, decimals: n, name: s };
}
function mh(r, t) {
  let e = "";
  r < fe && (e = "-", r *= ph);
  let n = r.toString();
  if (t === 0)
    return e + n;
  for (; n.length <= t; )
    n = Xr + n;
  const s = n.length - t;
  for (n = n.substring(0, s) + "." + n.substring(s); n[0] === "0" && n[1] !== "."; )
    n = n.substring(1);
  for (; n[n.length - 1] === "0" && n[n.length - 2] !== "."; )
    n = n.substring(0, n.length - 1);
  return e + n;
}
var me, et, St, tt, Kn, Je, ga, ma, ya, wa;
const En = class En {
  // Use this when changing this file to get some typing info,
  // but then switch to any to mask the internal type
  //constructor(guard: any, value: bigint, format: _FixedFormat) {
  /**
   *  @private
   */
  constructor(t, e, n) {
    b(this, tt);
    /**
     *  The specific fixed-point arithmetic field for this value.
     */
    A(this, "format");
    b(this, me);
    // The actual value (accounting for decimals)
    b(this, et);
    // A base-10 value to multiple values by to maintain the magnitude
    b(this, St);
    /**
     *  This is a property so console.log shows a human-meaningful value.
     *
     *  @private
     */
    A(this, "_value");
    Ui(t, Lr, "FixedNumber"), d(this, et, e), d(this, me, n);
    const s = mh(e, n.decimals);
    H(this, { format: n.name, _value: s }), d(this, St, zn(n.decimals));
  }
  /**
   *  If true, negative values are permitted, otherwise only
   *  positive values and zero are allowed.
   */
  get signed() {
    return l(this, me).signed;
  }
  /**
   *  The number of bits available to store the value.
   */
  get width() {
    return l(this, me).width;
  }
  /**
   *  The number of decimal places in the fixed-point arithment field.
   */
  get decimals() {
    return l(this, me).decimals;
  }
  /**
   *  The value as an integer, based on the smallest unit the
   *  [[decimals]] allow.
   */
  get value() {
    return l(this, et);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% added
   *  to %%other%%, ignoring overflow.
   */
  addUnsafe(t) {
    return P(this, tt, ga).call(this, t);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% added
   *  to %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  add(t) {
    return P(this, tt, ga).call(this, t, "add");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
   *  from %%this%%, ignoring overflow.
   */
  subUnsafe(t) {
    return P(this, tt, ma).call(this, t);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
   *  from %%this%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  sub(t) {
    return P(this, tt, ma).call(this, t, "sub");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%, ignoring overflow and underflow (precision loss).
   */
  mulUnsafe(t) {
    return P(this, tt, ya).call(this, t);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  mul(t) {
    return P(this, tt, ya).call(this, t, "mul");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs or if underflow (precision loss) occurs.
   */
  mulSignal(t) {
    P(this, tt, Kn).call(this, t);
    const e = l(this, et) * l(t, et);
    return v(e % l(this, St) === fe, "precision lost during signalling mul", "NUMERIC_FAULT", {
      operation: "mulSignal",
      fault: "underflow",
      value: this
    }), P(this, tt, Je).call(this, e / l(this, St), "mulSignal");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%, ignoring underflow (precision loss). A
   *  [[NumericFaultError]] is thrown if overflow occurs.
   */
  divUnsafe(t) {
    return P(this, tt, wa).call(this, t);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%, ignoring underflow (precision loss). A
   *  [[NumericFaultError]] is thrown if overflow occurs.
   */
  div(t) {
    return P(this, tt, wa).call(this, t, "div");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%. A [[NumericFaultError]] is thrown if underflow
   *  (precision loss) occurs.
   */
  divSignal(t) {
    v(l(t, et) !== fe, "division by zero", "NUMERIC_FAULT", {
      operation: "div",
      fault: "divide-by-zero",
      value: this
    }), P(this, tt, Kn).call(this, t);
    const e = l(this, et) * l(this, St);
    return v(e % l(t, et) === fe, "precision lost during signalling div", "NUMERIC_FAULT", {
      operation: "divSignal",
      fault: "underflow",
      value: this
    }), P(this, tt, Je).call(this, e / l(t, et), "divSignal");
  }
  /**
   *  Returns a comparison result between %%this%% and %%other%%.
   *
   *  This is suitable for use in sorting, where ``-1`` implies %%this%%
   *  is smaller, ``1`` implies %%this%% is larger and ``0`` implies
   *  both are equal.
   */
  cmp(t) {
    let e = this.value, n = t.value;
    const s = this.decimals - t.decimals;
    return s > 0 ? n *= zn(s) : s < 0 && (e *= zn(-s)), e < n ? -1 : e > n ? 1 : 0;
  }
  /**
   *  Returns true if %%other%% is equal to %%this%%.
   */
  eq(t) {
    return this.cmp(t) === 0;
  }
  /**
   *  Returns true if %%other%% is less than to %%this%%.
   */
  lt(t) {
    return this.cmp(t) < 0;
  }
  /**
   *  Returns true if %%other%% is less than or equal to %%this%%.
   */
  lte(t) {
    return this.cmp(t) <= 0;
  }
  /**
   *  Returns true if %%other%% is greater than to %%this%%.
   */
  gt(t) {
    return this.cmp(t) > 0;
  }
  /**
   *  Returns true if %%other%% is greater than or equal to %%this%%.
   */
  gte(t) {
    return this.cmp(t) >= 0;
  }
  /**
   *  Returns a new [[FixedNumber]] which is the largest **integer**
   *  that is less than or equal to %%this%%.
   *
   *  The decimal component of the result will always be ``0``.
   */
  floor() {
    let t = l(this, et);
    return l(this, et) < fe && (t -= l(this, St) - Kr), t = l(this, et) / l(this, St) * l(this, St), P(this, tt, Je).call(this, t, "floor");
  }
  /**
   *  Returns a new [[FixedNumber]] which is the smallest **integer**
   *  that is greater than or equal to %%this%%.
   *
   *  The decimal component of the result will always be ``0``.
   */
  ceiling() {
    let t = l(this, et);
    return l(this, et) > fe && (t += l(this, St) - Kr), t = l(this, et) / l(this, St) * l(this, St), P(this, tt, Je).call(this, t, "ceiling");
  }
  /**
   *  Returns a new [[FixedNumber]] with the decimal component
   *  rounded up on ties at %%decimals%% places.
   */
  round(t) {
    if (t == null && (t = 0), t >= this.decimals)
      return this;
    const e = this.decimals - t, n = gh * zn(e - 1);
    let s = this.value + n;
    const i = zn(e);
    return s = s / i * i, $s(s, l(this, me), "round"), new En(Lr, s, l(this, me));
  }
  /**
   *  Returns true if %%this%% is equal to ``0``.
   */
  isZero() {
    return l(this, et) === fe;
  }
  /**
   *  Returns true if %%this%% is less than ``0``.
   */
  isNegative() {
    return l(this, et) < fe;
  }
  /**
   *  Returns the string representation of %%this%%.
   */
  toString() {
    return this._value;
  }
  /**
   *  Returns a float approximation.
   *
   *  Due to IEEE 754 precission (or lack thereof), this function
   *  can only return an approximation and most values will contain
   *  rounding errors.
   */
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  /**
   *  Return a new [[FixedNumber]] with the same value but has had
   *  its field set to %%format%%.
   *
   *  This will throw if the value cannot fit into %%format%%.
   */
  toFormat(t) {
    return En.fromString(this.toString(), t);
  }
  /**
   *  Creates a new [[FixedNumber]] for %%value%% divided by
   *  %%decimal%% places with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% (once adjusted
   *  for %%decimals%%) cannot fit in %%format%%, either due to overflow
   *  or underflow (precision loss).
   */
  static fromValue(t, e, n) {
    const s = e == null ? 0 : Q(e), i = Yo(n);
    let o = S(t, "value");
    const a = s - i.decimals;
    if (a > 0) {
      const c = zn(a);
      v(o % c === fe, "value loses precision for format", "NUMERIC_FAULT", {
        operation: "fromValue",
        fault: "underflow",
        value: t
      }), o /= c;
    } else a < 0 && (o *= zn(-a));
    return $s(o, i, "fromValue"), new En(Lr, o, i);
  }
  /**
   *  Creates a new [[FixedNumber]] for %%value%% with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
   *  in %%format%%, either due to overflow or underflow (precision loss).
   */
  static fromString(t, e) {
    const n = t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
    m(n && n[2].length + n[3].length > 0, "invalid FixedNumber string value", "value", t);
    const s = Yo(e);
    let i = n[2] || "0", o = n[3] || "";
    for (; o.length < s.decimals; )
      o += Xr;
    v(o.substring(s.decimals).match(/^0*$/), "too many decimals for format", "NUMERIC_FAULT", {
      operation: "fromString",
      fault: "underflow",
      value: t
    }), o = o.substring(0, s.decimals);
    const a = BigInt(n[1] + i + o);
    return $s(a, s, "fromString"), new En(Lr, a, s);
  }
  /**
   *  Creates a new [[FixedNumber]] with the big-endian representation
   *  %%value%% with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
   *  in %%format%% due to overflow.
   */
  static fromBytes(t, e) {
    let n = Uo(Z(t, "value"));
    const s = Yo(e);
    return s.signed && (n = uo(n, s.width)), $s(n, s, "fromBytes"), new En(Lr, n, s);
  }
};
me = new WeakMap(), et = new WeakMap(), St = new WeakMap(), tt = new WeakSet(), Kn = function(t) {
  m(this.format === t.format, "incompatible format; use fixedNumber.toFormat", "other", t);
}, Je = function(t, e) {
  return t = $s(t, l(this, me), e), new En(Lr, t, l(this, me));
}, ga = function(t, e) {
  return P(this, tt, Kn).call(this, t), P(this, tt, Je).call(this, l(this, et) + l(t, et), e);
}, ma = function(t, e) {
  return P(this, tt, Kn).call(this, t), P(this, tt, Je).call(this, l(this, et) - l(t, et), e);
}, ya = function(t, e) {
  return P(this, tt, Kn).call(this, t), P(this, tt, Je).call(this, l(this, et) * l(t, et) / l(this, St), e);
}, wa = function(t, e) {
  return v(l(t, et) !== fe, "division by zero", "NUMERIC_FAULT", {
    operation: "div",
    fault: "divide-by-zero",
    value: this
  }), P(this, tt, Kn).call(this, t), P(this, tt, Je).call(this, l(this, et) * l(this, St) / l(t, et), e);
};
let ho = En;
function yh(r) {
  let t = r.toString(16);
  for (; t.length < 2; )
    t = "0" + t;
  return "0x" + t;
}
function Uc(r, t, e) {
  let n = 0;
  for (let s = 0; s < e; s++)
    n = n * 256 + r[t + s];
  return n;
}
function Fc(r, t, e, n) {
  const s = [];
  for (; e < t + 1 + n; ) {
    const i = nu(r, e);
    s.push(i.result), e += i.consumed, v(e <= t + 1 + n, "child data too short", "BUFFER_OVERRUN", {
      buffer: r,
      length: n,
      offset: t
    });
  }
  return { consumed: 1 + n, result: s };
}
function nu(r, t) {
  v(r.length !== 0, "data too short", "BUFFER_OVERRUN", {
    buffer: r,
    length: 0,
    offset: 1
  });
  const e = (n) => {
    v(n <= r.length, "data short segment too short", "BUFFER_OVERRUN", {
      buffer: r,
      length: r.length,
      offset: n
    });
  };
  if (r[t] >= 248) {
    const n = r[t] - 247;
    e(t + 1 + n);
    const s = Uc(r, t + 1, n);
    return e(t + 1 + n + s), Fc(r, t, t + 1 + n, n + s);
  } else if (r[t] >= 192) {
    const n = r[t] - 192;
    return e(t + 1 + n), Fc(r, t, t + 1, n);
  } else if (r[t] >= 184) {
    const n = r[t] - 183;
    e(t + 1 + n);
    const s = Uc(r, t + 1, n);
    e(t + 1 + n + s);
    const i = R(r.slice(t + 1 + n, t + 1 + n + s));
    return { consumed: 1 + n + s, result: i };
  } else if (r[t] >= 128) {
    const n = r[t] - 128;
    e(t + 1 + n);
    const s = R(r.slice(t + 1, t + 1 + n));
    return { consumed: 1 + n, result: s };
  }
  return { consumed: 1, result: yh(r[t]) };
}
function Fo(r) {
  const t = Z(r, "data"), e = nu(t, 0);
  return m(e.consumed === t.length, "unexpected junk after rlp payload", "data", r), e.result;
}
function Lc(r) {
  const t = [];
  for (; r; )
    t.unshift(r & 255), r >>= 8;
  return t;
}
function ru(r) {
  if (Array.isArray(r)) {
    let n = [];
    if (r.forEach(function(i) {
      n = n.concat(ru(i));
    }), n.length <= 55)
      return n.unshift(192 + n.length), n;
    const s = Lc(n.length);
    return s.unshift(247 + s.length), s.concat(n);
  }
  const t = Array.prototype.slice.call(Z(r, "object"));
  if (t.length === 1 && t[0] <= 127)
    return t;
  if (t.length <= 55)
    return t.unshift(128 + t.length), t;
  const e = Lc(t.length);
  return e.unshift(183 + e.length), e.concat(t);
}
const Dc = "0123456789abcdef";
function Cr(r) {
  let t = "0x";
  for (const e of ru(r))
    t += Dc[e >> 4], t += Dc[e & 15];
  return t;
}
const su = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];
function wh(r, t) {
  let e = 18;
  if (typeof t == "string") {
    const n = su.indexOf(t);
    m(n >= 0, "invalid unit", "unit", t), e = 3 * n;
  } else t != null && (e = Q(t, "unit"));
  return ho.fromValue(r, e, { decimals: e, width: 512 }).toString();
}
function Ah(r, t) {
  m(typeof r == "string", "value must be a string", "value", r);
  let e = 18;
  if (typeof t == "string") {
    const n = su.indexOf(t);
    m(n >= 0, "invalid unit", "unit", t), e = 3 * n;
  } else t != null && (e = Q(t, "unit"));
  return ho.fromString(r, { decimals: e, width: 512 }).value;
}
const Mt = 32, Aa = new Uint8Array(Mt), bh = ["then"], _i = {}, iu = /* @__PURE__ */ new WeakMap();
function Wn(r) {
  return iu.get(r);
}
function Mc(r, t) {
  iu.set(r, t);
}
function ti(r, t) {
  const e = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
  throw e.error = t, e;
}
function ba(r, t, e) {
  return r.indexOf(null) >= 0 ? t.map((n, s) => n instanceof Hs ? ba(Wn(n), n, e) : n) : r.reduce((n, s, i) => {
    let o = t.getValue(s);
    return s in n || (e && o instanceof Hs && (o = ba(Wn(o), o, e)), n[s] = o), n;
  }, {});
}
var os;
const jr = class jr extends Array {
  /**
   *  @private
   */
  constructor(...e) {
    const n = e[0];
    let s = e[1], i = (e[2] || []).slice(), o = !0;
    n !== _i && (s = e, i = [], o = !1);
    super(s.length);
    // No longer used; but cannot be removed as it will remove the
    // #private field from the .d.ts which may break backwards
    // compatibility
    b(this, os);
    s.forEach((u, f) => {
      this[f] = u;
    });
    const a = i.reduce((u, f) => (typeof f == "string" && u.set(f, (u.get(f) || 0) + 1), u), /* @__PURE__ */ new Map());
    if (Mc(this, Object.freeze(s.map((u, f) => {
      const h = i[f];
      return h != null && a.get(h) === 1 ? h : null;
    }))), d(this, os, []), l(this, os) == null && l(this, os), !o)
      return;
    Object.freeze(this);
    const c = new Proxy(this, {
      get: (u, f, h) => {
        if (typeof f == "string") {
          if (f.match(/^[0-9]+$/)) {
            const w = Q(f, "%index");
            if (w < 0 || w >= this.length)
              throw new RangeError("out of result range");
            const E = u[w];
            return E instanceof Error && ti(`index ${w}`, E), E;
          }
          if (bh.indexOf(f) >= 0)
            return Reflect.get(u, f, h);
          const p = u[f];
          if (p instanceof Function)
            return function(...w) {
              return p.apply(this === h ? u : this, w);
            };
          if (!(f in u))
            return u.getValue.apply(this === h ? u : this, [f]);
        }
        return Reflect.get(u, f, h);
      }
    });
    return Mc(c, Wn(this)), c;
  }
  /**
   *  Returns the Result as a normal Array. If %%deep%%, any children
   *  which are Result objects are also converted to a normal Array.
   *
   *  This will throw if there are any outstanding deferred
   *  errors.
   */
  toArray(e) {
    const n = [];
    return this.forEach((s, i) => {
      s instanceof Error && ti(`index ${i}`, s), e && s instanceof jr && (s = s.toArray(e)), n.push(s);
    }), n;
  }
  /**
   *  Returns the Result as an Object with each name-value pair. If
   *  %%deep%%, any children which are Result objects are also
   *  converted to an Object.
   *
   *  This will throw if any value is unnamed, or if there are
   *  any outstanding deferred errors.
   */
  toObject(e) {
    const n = Wn(this);
    return n.reduce((s, i, o) => (v(i != null, `value at index ${o} unnamed`, "UNSUPPORTED_OPERATION", {
      operation: "toObject()"
    }), ba(n, this, e)), {});
  }
  /**
   *  @_ignore
   */
  slice(e, n) {
    e == null && (e = 0), e < 0 && (e += this.length, e < 0 && (e = 0)), n == null && (n = this.length), n < 0 && (n += this.length, n < 0 && (n = 0)), n > this.length && (n = this.length);
    const s = Wn(this), i = [], o = [];
    for (let a = e; a < n; a++)
      i.push(this[a]), o.push(s[a]);
    return new jr(_i, i, o);
  }
  /**
   *  @_ignore
   */
  filter(e, n) {
    const s = Wn(this), i = [], o = [];
    for (let a = 0; a < this.length; a++) {
      const c = this[a];
      c instanceof Error && ti(`index ${a}`, c), e.call(n, c, a, this) && (i.push(c), o.push(s[a]));
    }
    return new jr(_i, i, o);
  }
  /**
   *  @_ignore
   */
  map(e, n) {
    const s = [];
    for (let i = 0; i < this.length; i++) {
      const o = this[i];
      o instanceof Error && ti(`index ${i}`, o), s.push(e.call(n, o, i, this));
    }
    return s;
  }
  /**
   *  Returns the value for %%name%%.
   *
   *  Since it is possible to have a key whose name conflicts with
   *  a method on a [[Result]] or its superclass Array, or any
   *  JavaScript keyword, this ensures all named values are still
   *  accessible by name.
   */
  getValue(e) {
    const n = Wn(this).indexOf(e);
    if (n === -1)
      return;
    const s = this[n];
    return s instanceof Error && ti(`property ${JSON.stringify(e)}`, s.error), s;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(e, n) {
    return new jr(_i, e, n);
  }
};
os = new WeakMap();
let Hs = jr;
function Gc(r) {
  let t = Dt(r);
  return v(t.length <= Mt, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: t, length: Mt, offset: t.length }), t.length !== Mt && (t = Lt(yt([Aa.slice(t.length % Mt), t]))), t;
}
class dn {
  constructor(t, e, n, s) {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    A(this, "name");
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    A(this, "type");
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    A(this, "localName");
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    A(this, "dynamic");
    H(this, { name: t, type: e, localName: n, dynamic: s }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(t, e) {
    m(!1, t, this.localName, e);
  }
}
var Ze, cr, as, qi;
class Ea {
  constructor() {
    b(this, as);
    // An array of WordSize lengthed objects to concatenation
    b(this, Ze);
    b(this, cr);
    d(this, Ze, []), d(this, cr, 0);
  }
  get data() {
    return yt(l(this, Ze));
  }
  get length() {
    return l(this, cr);
  }
  appendWriter(t) {
    return P(this, as, qi).call(this, Lt(t.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(t) {
    let e = Lt(t);
    const n = e.length % Mt;
    return n && (e = Lt(yt([e, Aa.slice(n)]))), P(this, as, qi).call(this, e);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(t) {
    return P(this, as, qi).call(this, Gc(t));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const t = l(this, Ze).length;
    return l(this, Ze).push(Aa), d(this, cr, l(this, cr) + Mt), (e) => {
      l(this, Ze)[t] = Gc(e);
    };
  }
}
Ze = new WeakMap(), cr = new WeakMap(), as = new WeakSet(), qi = function(t) {
  return l(this, Ze).push(t), d(this, cr, l(this, cr) + t.length), t.length;
};
var _t, $t, lr, ur, vn, Rr, Na, ou;
const Ec = class Ec {
  constructor(t, e, n) {
    b(this, Rr);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    A(this, "allowLoose");
    b(this, _t);
    b(this, $t);
    b(this, lr);
    b(this, ur);
    b(this, vn);
    H(this, { allowLoose: !!e }), d(this, _t, Lt(t)), d(this, lr, 0), d(this, ur, null), d(this, vn, n ?? 1024), d(this, $t, 0);
  }
  get data() {
    return R(l(this, _t));
  }
  get dataLength() {
    return l(this, _t).length;
  }
  get consumed() {
    return l(this, $t);
  }
  get bytes() {
    return new Uint8Array(l(this, _t));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(t) {
    const e = new Ec(l(this, _t).slice(l(this, $t) + t), this.allowLoose, l(this, vn));
    return d(e, ur, this), e;
  }
  // Read bytes
  readBytes(t, e) {
    let n = P(this, Rr, ou).call(this, 0, t, !!e);
    return P(this, Rr, Na).call(this, t), d(this, $t, l(this, $t) + n.length), n.slice(0, t);
  }
  // Read a numeric values
  readValue() {
    return Uo(this.readBytes(Mt));
  }
  readIndex() {
    return qf(this.readBytes(Mt));
  }
};
_t = new WeakMap(), $t = new WeakMap(), lr = new WeakMap(), ur = new WeakMap(), vn = new WeakMap(), Rr = new WeakSet(), Na = function(t) {
  var e;
  if (l(this, ur))
    return P(e = l(this, ur), Rr, Na).call(e, t);
  d(this, lr, l(this, lr) + t), v(l(this, vn) < 1 || l(this, lr) <= l(this, vn) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${l(this, vn)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
    buffer: Lt(l(this, _t)),
    offset: l(this, $t),
    length: t,
    info: {
      bytesRead: l(this, lr),
      dataLength: this.dataLength
    }
  });
}, ou = function(t, e, n) {
  let s = Math.ceil(e / Mt) * Mt;
  return l(this, $t) + s > l(this, _t).length && (this.allowLoose && n && l(this, $t) + e <= l(this, _t).length ? s = e : v(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
    buffer: Lt(l(this, _t)),
    length: l(this, _t).length,
    offset: l(this, $t) + s
  })), l(this, _t).slice(l(this, $t), l(this, $t) + s);
};
let xa = Ec;
function po(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function tc(r, ...t) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(r.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${r.length}`);
}
function Eh(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  po(r.outputLen), po(r.blockLen);
}
function Qs(r, t = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function au(r, t) {
  tc(r);
  const e = t.outputLen;
  if (r.length < e)
    throw new Error(`digestInto() expects output buffer of length at least ${e}`);
}
const Zo = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const cu = (r) => r instanceof Uint8Array, xh = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), Xo = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength), Ce = (r, t) => r << 32 - t | r >>> t, Nh = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Nh)
  throw new Error("Non little-endian hardware is not supported");
function vh(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function Lo(r) {
  if (typeof r == "string" && (r = vh(r)), !cu(r))
    throw new Error(`expected Uint8Array, got ${typeof r}`);
  return r;
}
function Ph(...r) {
  const t = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let e = 0;
  return r.forEach((n) => {
    if (!cu(n))
      throw new Error("Uint8Array expected");
    t.set(n, e), e += n.length;
  }), t;
}
class ec {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function nc(r) {
  const t = (n) => r().update(Lo(n)).digest(), e = r();
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => r(), t;
}
function Ch(r = 32) {
  if (Zo && typeof Zo.getRandomValues == "function")
    return Zo.getRandomValues(new Uint8Array(r));
  throw new Error("crypto.getRandomValues must be defined");
}
class lu extends ec {
  constructor(t, e) {
    super(), this.finished = !1, this.destroyed = !1, Eh(t);
    const n = Lo(e);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, i = new Uint8Array(s);
    i.set(n.length > s ? t.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++)
      i[o] ^= 54;
    this.iHash.update(i), this.oHash = t.create();
    for (let o = 0; o < i.length; o++)
      i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return Qs(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    Qs(this), tc(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: e, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: a } = this;
    return t = t, t.finished = s, t.destroyed = i, t.blockLen = o, t.outputLen = a, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const uu = (r, t, e) => new lu(r, t).update(e).digest();
uu.create = (r, t) => new lu(r, t);
function Bh(r, t, e, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(t, e, n);
  const s = BigInt(32), i = BigInt(4294967295), o = Number(e >> s & i), a = Number(e & i), c = n ? 4 : 0, u = n ? 0 : 4;
  r.setUint32(t + c, o, n), r.setUint32(t + u, a, n);
}
class fu extends ec {
  constructor(t, e, n, s) {
    super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Xo(this.buffer);
  }
  update(t) {
    Qs(this);
    const { view: e, buffer: n, blockLen: s } = this;
    t = Lo(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const a = Math.min(s - this.pos, i - o);
      if (a === s) {
        const c = Xo(t);
        for (; s <= i - o; o += s)
          this.process(c, o);
        continue;
      }
      n.set(t.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === s && (this.process(e, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Qs(this), au(t, this), this.finished = !0;
    const { buffer: e, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    e[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > s - o && (this.process(n, 0), o = 0);
    for (let h = o; h < s; h++)
      e[h] = 0;
    Bh(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const a = Xo(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, f = this.get();
    if (u > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let h = 0; h < u; h++)
      a.setUint32(4 * h, f[h], i);
  }
  digest() {
    const { buffer: t, outputLen: e } = this;
    this.digestInto(t);
    const n = t.slice(0, e);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: e, buffer: n, length: s, finished: i, destroyed: o, pos: a } = this;
    return t.length = s, t.pos = a, t.finished = i, t.destroyed = o, s % e && t.buffer.set(n), t;
  }
}
const Oh = (r, t, e) => r & t ^ ~r & e, Ih = (r, t, e) => r & t ^ r & e ^ t & e, kh = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), mn = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), yn = /* @__PURE__ */ new Uint32Array(64);
class Rh extends fu {
  constructor() {
    super(64, 32, 8, !1), this.A = mn[0] | 0, this.B = mn[1] | 0, this.C = mn[2] | 0, this.D = mn[3] | 0, this.E = mn[4] | 0, this.F = mn[5] | 0, this.G = mn[6] | 0, this.H = mn[7] | 0;
  }
  get() {
    const { A: t, B: e, C: n, D: s, E: i, F: o, G: a, H: c } = this;
    return [t, e, n, s, i, o, a, c];
  }
  // prettier-ignore
  set(t, e, n, s, i, o, a, c) {
    this.A = t | 0, this.B = e | 0, this.C = n | 0, this.D = s | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(t, e) {
    for (let h = 0; h < 16; h++, e += 4)
      yn[h] = t.getUint32(e, !1);
    for (let h = 16; h < 64; h++) {
      const p = yn[h - 15], w = yn[h - 2], E = Ce(p, 7) ^ Ce(p, 18) ^ p >>> 3, y = Ce(w, 17) ^ Ce(w, 19) ^ w >>> 10;
      yn[h] = y + yn[h - 7] + E + yn[h - 16] | 0;
    }
    let { A: n, B: s, C: i, D: o, E: a, F: c, G: u, H: f } = this;
    for (let h = 0; h < 64; h++) {
      const p = Ce(a, 6) ^ Ce(a, 11) ^ Ce(a, 25), w = f + p + Oh(a, c, u) + kh[h] + yn[h] | 0, y = (Ce(n, 2) ^ Ce(n, 13) ^ Ce(n, 22)) + Ih(n, s, i) | 0;
      f = u, u = c, c = a, a = o + w | 0, o = i, i = s, s = n, n = w + y | 0;
    }
    n = n + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, f = f + this.H | 0, this.set(n, s, i, o, a, c, u, f);
  }
  roundClean() {
    yn.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const hu = /* @__PURE__ */ nc(() => new Rh()), zi = /* @__PURE__ */ BigInt(2 ** 32 - 1), va = /* @__PURE__ */ BigInt(32);
function du(r, t = !1) {
  return t ? { h: Number(r & zi), l: Number(r >> va & zi) } : { h: Number(r >> va & zi) | 0, l: Number(r & zi) | 0 };
}
function pu(r, t = !1) {
  let e = new Uint32Array(r.length), n = new Uint32Array(r.length);
  for (let s = 0; s < r.length; s++) {
    const { h: i, l: o } = du(r[s], t);
    [e[s], n[s]] = [i, o];
  }
  return [e, n];
}
const Th = (r, t) => BigInt(r >>> 0) << va | BigInt(t >>> 0), Sh = (r, t, e) => r >>> e, Uh = (r, t, e) => r << 32 - e | t >>> e, Fh = (r, t, e) => r >>> e | t << 32 - e, Lh = (r, t, e) => r << 32 - e | t >>> e, Dh = (r, t, e) => r << 64 - e | t >>> e - 32, Mh = (r, t, e) => r >>> e - 32 | t << 64 - e, Gh = (r, t) => t, Hh = (r, t) => r, gu = (r, t, e) => r << e | t >>> 32 - e, mu = (r, t, e) => t << e | r >>> 32 - e, yu = (r, t, e) => t << e - 32 | r >>> 64 - e, wu = (r, t, e) => r << e - 32 | t >>> 64 - e;
function Qh(r, t, e, n) {
  const s = (t >>> 0) + (n >>> 0);
  return { h: r + e + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const Vh = (r, t, e) => (r >>> 0) + (t >>> 0) + (e >>> 0), Jh = (r, t, e, n) => t + e + n + (r / 2 ** 32 | 0) | 0, _h = (r, t, e, n) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0), zh = (r, t, e, n, s) => t + e + n + s + (r / 2 ** 32 | 0) | 0, Kh = (r, t, e, n, s) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0) + (s >>> 0), jh = (r, t, e, n, s, i) => t + e + n + s + i + (r / 2 ** 32 | 0) | 0, _ = {
  fromBig: du,
  split: pu,
  toBig: Th,
  shrSH: Sh,
  shrSL: Uh,
  rotrSH: Fh,
  rotrSL: Lh,
  rotrBH: Dh,
  rotrBL: Mh,
  rotr32H: Gh,
  rotr32L: Hh,
  rotlSH: gu,
  rotlSL: mu,
  rotlBH: yu,
  rotlBL: wu,
  add: Qh,
  add3L: Vh,
  add3H: Jh,
  add4L: _h,
  add4H: zh,
  add5H: jh,
  add5L: Kh
}, [Wh, Yh] = _.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((r) => BigInt(r))), wn = /* @__PURE__ */ new Uint32Array(80), An = /* @__PURE__ */ new Uint32Array(80);
class Zh extends fu {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: e, Bh: n, Bl: s, Ch: i, Cl: o, Dh: a, Dl: c, Eh: u, El: f, Fh: h, Fl: p, Gh: w, Gl: E, Hh: y, Hl: x } = this;
    return [t, e, n, s, i, o, a, c, u, f, h, p, w, E, y, x];
  }
  // prettier-ignore
  set(t, e, n, s, i, o, a, c, u, f, h, p, w, E, y, x) {
    this.Ah = t | 0, this.Al = e | 0, this.Bh = n | 0, this.Bl = s | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = u | 0, this.El = f | 0, this.Fh = h | 0, this.Fl = p | 0, this.Gh = w | 0, this.Gl = E | 0, this.Hh = y | 0, this.Hl = x | 0;
  }
  process(t, e) {
    for (let C = 0; C < 16; C++, e += 4)
      wn[C] = t.getUint32(e), An[C] = t.getUint32(e += 4);
    for (let C = 16; C < 80; C++) {
      const M = wn[C - 15] | 0, L = An[C - 15] | 0, I = _.rotrSH(M, L, 1) ^ _.rotrSH(M, L, 8) ^ _.shrSH(M, L, 7), G = _.rotrSL(M, L, 1) ^ _.rotrSL(M, L, 8) ^ _.shrSL(M, L, 7), D = wn[C - 2] | 0, X = An[C - 2] | 0, j = _.rotrSH(D, X, 19) ^ _.rotrBH(D, X, 61) ^ _.shrSH(D, X, 6), K = _.rotrSL(D, X, 19) ^ _.rotrBL(D, X, 61) ^ _.shrSL(D, X, 6), ct = _.add4L(G, K, An[C - 7], An[C - 16]), ft = _.add4H(ct, I, j, wn[C - 7], wn[C - 16]);
      wn[C] = ft | 0, An[C] = ct | 0;
    }
    let { Ah: n, Al: s, Bh: i, Bl: o, Ch: a, Cl: c, Dh: u, Dl: f, Eh: h, El: p, Fh: w, Fl: E, Gh: y, Gl: x, Hh: N, Hl: O } = this;
    for (let C = 0; C < 80; C++) {
      const M = _.rotrSH(h, p, 14) ^ _.rotrSH(h, p, 18) ^ _.rotrBH(h, p, 41), L = _.rotrSL(h, p, 14) ^ _.rotrSL(h, p, 18) ^ _.rotrBL(h, p, 41), I = h & w ^ ~h & y, G = p & E ^ ~p & x, D = _.add5L(O, L, G, Yh[C], An[C]), X = _.add5H(D, N, M, I, Wh[C], wn[C]), j = D | 0, K = _.rotrSH(n, s, 28) ^ _.rotrBH(n, s, 34) ^ _.rotrBH(n, s, 39), ct = _.rotrSL(n, s, 28) ^ _.rotrBL(n, s, 34) ^ _.rotrBL(n, s, 39), ft = n & i ^ n & a ^ i & a, Qt = s & o ^ s & c ^ o & c;
      N = y | 0, O = x | 0, y = w | 0, x = E | 0, w = h | 0, E = p | 0, { h, l: p } = _.add(u | 0, f | 0, X | 0, j | 0), u = a | 0, f = c | 0, a = i | 0, c = o | 0, i = n | 0, o = s | 0;
      const B = _.add3L(j, ct, Qt);
      n = _.add3H(B, X, K, ft), s = B | 0;
    }
    ({ h: n, l: s } = _.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)), { h: i, l: o } = _.add(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = _.add(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: u, l: f } = _.add(this.Dh | 0, this.Dl | 0, u | 0, f | 0), { h, l: p } = _.add(this.Eh | 0, this.El | 0, h | 0, p | 0), { h: w, l: E } = _.add(this.Fh | 0, this.Fl | 0, w | 0, E | 0), { h: y, l: x } = _.add(this.Gh | 0, this.Gl | 0, y | 0, x | 0), { h: N, l: O } = _.add(this.Hh | 0, this.Hl | 0, N | 0, O | 0), this.set(n, s, i, o, a, c, u, f, h, p, w, E, y, x, N, O);
  }
  roundClean() {
    wn.fill(0), An.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const Xh = /* @__PURE__ */ nc(() => new Zh());
function qh() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
const Hc = qh();
Hc.crypto || Hc.msCrypto;
function $h(r) {
  switch (r) {
    case "sha256":
      return hu.create();
    case "sha512":
      return Xh.create();
  }
  m(!1, "invalid hashing algorithm name", "algorithm", r);
}
const [Au, bu, Eu] = [[], [], []], td = /* @__PURE__ */ BigInt(0), ei = /* @__PURE__ */ BigInt(1), ed = /* @__PURE__ */ BigInt(2), nd = /* @__PURE__ */ BigInt(7), rd = /* @__PURE__ */ BigInt(256), sd = /* @__PURE__ */ BigInt(113);
for (let r = 0, t = ei, e = 1, n = 0; r < 24; r++) {
  [e, n] = [n, (2 * e + 3 * n) % 5], Au.push(2 * (5 * n + e)), bu.push((r + 1) * (r + 2) / 2 % 64);
  let s = td;
  for (let i = 0; i < 7; i++)
    t = (t << ei ^ (t >> nd) * sd) % rd, t & ed && (s ^= ei << (ei << /* @__PURE__ */ BigInt(i)) - ei);
  Eu.push(s);
}
const [id, od] = /* @__PURE__ */ pu(Eu, !0), Qc = (r, t, e) => e > 32 ? yu(r, t, e) : gu(r, t, e), Vc = (r, t, e) => e > 32 ? wu(r, t, e) : mu(r, t, e);
function ad(r, t = 24) {
  const e = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let o = 0; o < 10; o++)
      e[o] = r[o] ^ r[o + 10] ^ r[o + 20] ^ r[o + 30] ^ r[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, u = e[c], f = e[c + 1], h = Qc(u, f, 1) ^ e[a], p = Vc(u, f, 1) ^ e[a + 1];
      for (let w = 0; w < 50; w += 10)
        r[o + w] ^= h, r[o + w + 1] ^= p;
    }
    let s = r[2], i = r[3];
    for (let o = 0; o < 24; o++) {
      const a = bu[o], c = Qc(s, i, a), u = Vc(s, i, a), f = Au[o];
      s = r[f], i = r[f + 1], r[f] = c, r[f + 1] = u;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        e[a] = r[o + a];
      for (let a = 0; a < 10; a++)
        r[o + a] ^= ~e[(a + 2) % 10] & e[(a + 4) % 10];
    }
    r[0] ^= id[n], r[1] ^= od[n];
  }
  e.fill(0);
}
class rc extends ec {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, e, n, s = !1, i = 24) {
    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, po(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = xh(this.state);
  }
  keccak() {
    ad(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    Qs(this);
    const { blockLen: e, state: n } = this;
    t = Lo(t);
    const s = t.length;
    for (let i = 0; i < s; ) {
      const o = Math.min(e - this.pos, s - i);
      for (let a = 0; a < o; a++)
        n[this.pos++] ^= t[i++];
      this.pos === e && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: e, pos: n, blockLen: s } = this;
    t[n] ^= e, e & 128 && n === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    Qs(this, !1), tc(t), this.finish();
    const e = this.state, { blockLen: n } = this;
    for (let s = 0, i = t.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const o = Math.min(n - this.posOut, i - s);
      t.set(e.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return po(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (au(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: e, suffix: n, outputLen: s, rounds: i, enableXOF: o } = this;
    return t || (t = new rc(e, n, s, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = s, t.enableXOF = o, t.destroyed = this.destroyed, t;
  }
}
const cd = (r, t, e) => nc(() => new rc(t, r, e)), ld = /* @__PURE__ */ cd(1, 136, 256 / 8);
let xu = !1;
const Nu = function(r) {
  return ld(r);
};
let vu = Nu;
function wt(r) {
  const t = Z(r, "data");
  return R(vu(t));
}
wt._ = Nu;
wt.lock = function() {
  xu = !0;
};
wt.register = function(r) {
  if (xu)
    throw new TypeError("keccak256 is locked");
  vu = r;
};
Object.freeze(wt);
const Pu = function(r) {
  return $h("sha256").update(r).digest();
};
let Cu = Pu, Bu = !1;
function Ys(r) {
  const t = Z(r, "data");
  return R(Cu(t));
}
Ys._ = Pu;
Ys.lock = function() {
  Bu = !0;
};
Ys.register = function(r) {
  if (Bu)
    throw new Error("sha256 is locked");
  Cu = r;
};
Object.freeze(Ys);
Object.freeze(Ys);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ou = BigInt(0), Do = BigInt(1), ud = BigInt(2), Mo = (r) => r instanceof Uint8Array, fd = /* @__PURE__ */ Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function Vs(r) {
  if (!Mo(r))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let e = 0; e < r.length; e++)
    t += fd[r[e]];
  return t;
}
function Iu(r) {
  const t = r.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function sc(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  return BigInt(r === "" ? "0" : `0x${r}`);
}
function Js(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  const t = r.length;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const e = new Uint8Array(t / 2);
  for (let n = 0; n < e.length; n++) {
    const s = n * 2, i = r.slice(s, s + 2), o = Number.parseInt(i, 16);
    if (Number.isNaN(o) || o < 0)
      throw new Error("Invalid byte sequence");
    e[n] = o;
  }
  return e;
}
function xr(r) {
  return sc(Vs(r));
}
function ic(r) {
  if (!Mo(r))
    throw new Error("Uint8Array expected");
  return sc(Vs(Uint8Array.from(r).reverse()));
}
function _s(r, t) {
  return Js(r.toString(16).padStart(t * 2, "0"));
}
function oc(r, t) {
  return _s(r, t).reverse();
}
function hd(r) {
  return Js(Iu(r));
}
function de(r, t, e) {
  let n;
  if (typeof t == "string")
    try {
      n = Js(t);
    } catch (i) {
      throw new Error(`${r} must be valid hex string, got "${t}". Cause: ${i}`);
    }
  else if (Mo(t))
    n = Uint8Array.from(t);
  else
    throw new Error(`${r} must be hex string or Uint8Array`);
  const s = n.length;
  if (typeof e == "number" && s !== e)
    throw new Error(`${r} expected ${e} bytes, got ${s}`);
  return n;
}
function hi(...r) {
  const t = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let e = 0;
  return r.forEach((n) => {
    if (!Mo(n))
      throw new Error("Uint8Array expected");
    t.set(n, e), e += n.length;
  }), t;
}
function dd(r, t) {
  if (r.length !== t.length)
    return !1;
  for (let e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
function pd(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function gd(r) {
  let t;
  for (t = 0; r > Ou; r >>= Do, t += 1)
    ;
  return t;
}
function md(r, t) {
  return r >> BigInt(t) & Do;
}
const yd = (r, t, e) => r | (e ? Do : Ou) << BigInt(t), ac = (r) => (ud << BigInt(r - 1)) - Do, qo = (r) => new Uint8Array(r), Jc = (r) => Uint8Array.from(r);
function ku(r, t, e) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof e != "function")
    throw new Error("hmacFn must be a function");
  let n = qo(r), s = qo(r), i = 0;
  const o = () => {
    n.fill(1), s.fill(0), i = 0;
  }, a = (...h) => e(s, n, ...h), c = (h = qo()) => {
    s = a(Jc([0]), h), n = a(), h.length !== 0 && (s = a(Jc([1]), h), n = a());
  }, u = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let h = 0;
    const p = [];
    for (; h < t; ) {
      n = a();
      const w = n.slice();
      p.push(w), h += n.length;
    }
    return hi(...p);
  };
  return (h, p) => {
    o(), c(h);
    let w;
    for (; !(w = p(u())); )
      c();
    return o(), w;
  };
}
const wd = {
  bigint: (r) => typeof r == "bigint",
  function: (r) => typeof r == "function",
  boolean: (r) => typeof r == "boolean",
  string: (r) => typeof r == "string",
  stringOrUint8Array: (r) => typeof r == "string" || r instanceof Uint8Array,
  isSafeInteger: (r) => Number.isSafeInteger(r),
  array: (r) => Array.isArray(r),
  field: (r, t) => t.Fp.isValid(r),
  hash: (r) => typeof r == "function" && Number.isSafeInteger(r.outputLen)
};
function Fi(r, t, e = {}) {
  const n = (s, i, o) => {
    const a = wd[i];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const c = r[s];
    if (!(o && c === void 0) && !a(c, r))
      throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${i}`);
  };
  for (const [s, i] of Object.entries(t))
    n(s, i, !1);
  for (const [s, i] of Object.entries(e))
    n(s, i, !0);
  return r;
}
const Ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: md,
  bitLen: gd,
  bitMask: ac,
  bitSet: yd,
  bytesToHex: Vs,
  bytesToNumberBE: xr,
  bytesToNumberLE: ic,
  concatBytes: hi,
  createHmacDrbg: ku,
  ensureBytes: de,
  equalBytes: dd,
  hexToBytes: Js,
  hexToNumber: sc,
  numberToBytesBE: _s,
  numberToBytesLE: oc,
  numberToHexUnpadded: Iu,
  numberToVarBytesBE: hd,
  utf8ToBytes: pd,
  validateObject: Fi
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Et = BigInt(0), gt = BigInt(1), Yn = BigInt(2), bd = BigInt(3), Pa = BigInt(4), _c = BigInt(5), zc = BigInt(8);
BigInt(9);
BigInt(16);
function Kt(r, t) {
  const e = r % t;
  return e >= Et ? e : t + e;
}
function Ed(r, t, e) {
  if (e <= Et || t < Et)
    throw new Error("Expected power/modulo > 0");
  if (e === gt)
    return Et;
  let n = gt;
  for (; t > Et; )
    t & gt && (n = n * r % e), r = r * r % e, t >>= gt;
  return n;
}
function ne(r, t, e) {
  let n = r;
  for (; t-- > Et; )
    n *= n, n %= e;
  return n;
}
function Ca(r, t) {
  if (r === Et || t <= Et)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${t}`);
  let e = Kt(r, t), n = t, s = Et, i = gt;
  for (; e !== Et; ) {
    const a = n / e, c = n % e, u = s - i * a;
    n = e, e = c, s = i, i = u;
  }
  if (n !== gt)
    throw new Error("invert: does not exist");
  return Kt(s, t);
}
function xd(r) {
  const t = (r - gt) / Yn;
  let e, n, s;
  for (e = r - gt, n = 0; e % Yn === Et; e /= Yn, n++)
    ;
  for (s = Yn; s < r && Ed(s, t, r) !== r - gt; s++)
    ;
  if (n === 1) {
    const o = (r + gt) / Pa;
    return function(c, u) {
      const f = c.pow(u, o);
      if (!c.eql(c.sqr(f), u))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  const i = (e + gt) / Yn;
  return function(a, c) {
    if (a.pow(c, t) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let u = n, f = a.pow(a.mul(a.ONE, s), e), h = a.pow(c, i), p = a.pow(c, e);
    for (; !a.eql(p, a.ONE); ) {
      if (a.eql(p, a.ZERO))
        return a.ZERO;
      let w = 1;
      for (let y = a.sqr(p); w < u && !a.eql(y, a.ONE); w++)
        y = a.sqr(y);
      const E = a.pow(f, gt << BigInt(u - w - 1));
      f = a.sqr(E), h = a.mul(h, E), p = a.mul(p, f), u = w;
    }
    return h;
  };
}
function Nd(r) {
  if (r % Pa === bd) {
    const t = (r + gt) / Pa;
    return function(n, s) {
      const i = n.pow(s, t);
      if (!n.eql(n.sqr(i), s))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (r % zc === _c) {
    const t = (r - _c) / zc;
    return function(n, s) {
      const i = n.mul(s, Yn), o = n.pow(i, t), a = n.mul(s, o), c = n.mul(n.mul(a, Yn), o), u = n.mul(a, n.sub(c, n.ONE));
      if (!n.eql(n.sqr(u), s))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  return xd(r);
}
const vd = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function Pd(r) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, e = vd.reduce((n, s) => (n[s] = "function", n), t);
  return Fi(r, e);
}
function Cd(r, t, e) {
  if (e < Et)
    throw new Error("Expected power > 0");
  if (e === Et)
    return r.ONE;
  if (e === gt)
    return t;
  let n = r.ONE, s = t;
  for (; e > Et; )
    e & gt && (n = r.mul(n, s)), s = r.sqr(s), e >>= gt;
  return n;
}
function Bd(r, t) {
  const e = new Array(t.length), n = t.reduce((i, o, a) => r.is0(o) ? i : (e[a] = i, r.mul(i, o)), r.ONE), s = r.inv(n);
  return t.reduceRight((i, o, a) => r.is0(o) ? i : (e[a] = r.mul(i, e[a]), r.mul(i, o)), s), e;
}
function Ru(r, t) {
  const e = t !== void 0 ? t : r.toString(2).length, n = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: n };
}
function Od(r, t, e = !1, n = {}) {
  if (r <= Et)
    throw new Error(`Expected Field ORDER > 0, got ${r}`);
  const { nBitLength: s, nByteLength: i } = Ru(r, t);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = Nd(r), a = Object.freeze({
    ORDER: r,
    BITS: s,
    BYTES: i,
    MASK: ac(s),
    ZERO: Et,
    ONE: gt,
    create: (c) => Kt(c, r),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return Et <= c && c < r;
    },
    is0: (c) => c === Et,
    isOdd: (c) => (c & gt) === gt,
    neg: (c) => Kt(-c, r),
    eql: (c, u) => c === u,
    sqr: (c) => Kt(c * c, r),
    add: (c, u) => Kt(c + u, r),
    sub: (c, u) => Kt(c - u, r),
    mul: (c, u) => Kt(c * u, r),
    pow: (c, u) => Cd(a, c, u),
    div: (c, u) => Kt(c * Ca(u, r), r),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, u) => c + u,
    subN: (c, u) => c - u,
    mulN: (c, u) => c * u,
    inv: (c) => Ca(c, r),
    sqrt: n.sqrt || ((c) => o(a, c)),
    invertBatch: (c) => Bd(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, u, f) => f ? u : c,
    toBytes: (c) => e ? oc(c, i) : _s(c, i),
    fromBytes: (c) => {
      if (c.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);
      return e ? ic(c) : xr(c);
    }
  });
  return Object.freeze(a);
}
function Tu(r) {
  if (typeof r != "bigint")
    throw new Error("field order must be bigint");
  const t = r.toString(2).length;
  return Math.ceil(t / 8);
}
function Su(r) {
  const t = Tu(r);
  return t + Math.ceil(t / 2);
}
function Id(r, t, e = !1) {
  const n = r.length, s = Tu(t), i = Su(t);
  if (n < 16 || n < i || n > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${n}`);
  const o = e ? xr(r) : ic(r), a = Kt(o, t - gt) + gt;
  return e ? oc(a, s) : _s(a, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const kd = BigInt(0), $o = BigInt(1);
function Rd(r, t) {
  const e = (s, i) => {
    const o = i.negate();
    return s ? o : i;
  }, n = (s) => {
    const i = Math.ceil(t / s) + 1, o = 2 ** (s - 1);
    return { windows: i, windowSize: o };
  };
  return {
    constTimeNegate: e,
    // non-const time multiplication ladder
    unsafeLadder(s, i) {
      let o = r.ZERO, a = s;
      for (; i > kd; )
        i & $o && (o = o.add(a)), a = a.double(), i >>= $o;
      return o;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(s, i) {
      const { windows: o, windowSize: a } = n(i), c = [];
      let u = s, f = u;
      for (let h = 0; h < o; h++) {
        f = u, c.push(f);
        for (let p = 1; p < a; p++)
          f = f.add(u), c.push(f);
        u = f.double();
      }
      return c;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(s, i, o) {
      const { windows: a, windowSize: c } = n(s);
      let u = r.ZERO, f = r.BASE;
      const h = BigInt(2 ** s - 1), p = 2 ** s, w = BigInt(s);
      for (let E = 0; E < a; E++) {
        const y = E * c;
        let x = Number(o & h);
        o >>= w, x > c && (x -= p, o += $o);
        const N = y, O = y + Math.abs(x) - 1, C = E % 2 !== 0, M = x < 0;
        x === 0 ? f = f.add(e(C, i[N])) : u = u.add(e(M, i[O]));
      }
      return { p: u, f };
    },
    wNAFCached(s, i, o, a) {
      const c = s._WINDOW_SIZE || 1;
      let u = i.get(s);
      return u || (u = this.precomputeWindow(s, c), c !== 1 && i.set(s, a(u))), this.wNAF(c, u, o);
    }
  };
}
function Uu(r) {
  return Pd(r.Fp), Fi(r, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Ru(r.n, r.nBitLength),
    ...r,
    p: r.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Td(r) {
  const t = Uu(r);
  Fi(t, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: e, Fp: n, a: s } = t;
  if (e) {
    if (!n.eql(s, n.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof e != "object" || typeof e.beta != "bigint" || typeof e.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: Sd, hexToBytes: Ud } = Ad, $n = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(t = "") {
      super(t);
    }
  },
  _parseInt(r) {
    const { Err: t } = $n;
    if (r.length < 2 || r[0] !== 2)
      throw new t("Invalid signature integer tag");
    const e = r[1], n = r.subarray(2, e + 2);
    if (!e || n.length !== e)
      throw new t("Invalid signature integer: wrong length");
    if (n[0] & 128)
      throw new t("Invalid signature integer: negative");
    if (n[0] === 0 && !(n[1] & 128))
      throw new t("Invalid signature integer: unnecessary leading zero");
    return { d: Sd(n), l: r.subarray(e + 2) };
  },
  toSig(r) {
    const { Err: t } = $n, e = typeof r == "string" ? Ud(r) : r;
    if (!(e instanceof Uint8Array))
      throw new Error("ui8a expected");
    let n = e.length;
    if (n < 2 || e[0] != 48)
      throw new t("Invalid signature tag");
    if (e[1] !== n - 2)
      throw new t("Invalid signature: incorrect length");
    const { d: s, l: i } = $n._parseInt(e.subarray(2)), { d: o, l: a } = $n._parseInt(i);
    if (a.length)
      throw new t("Invalid signature: left bytes after parsing");
    return { r: s, s: o };
  },
  hexFromSig(r) {
    const t = (u) => Number.parseInt(u[0], 16) & 8 ? "00" + u : u, e = (u) => {
      const f = u.toString(16);
      return f.length & 1 ? `0${f}` : f;
    }, n = t(e(r.s)), s = t(e(r.r)), i = n.length / 2, o = s.length / 2, a = e(i), c = e(o);
    return `30${e(o + i + 4)}02${c}${s}02${a}${n}`;
  }
}, an = BigInt(0), le = BigInt(1);
BigInt(2);
const Kc = BigInt(3);
BigInt(4);
function Fd(r) {
  const t = Td(r), { Fp: e } = t, n = t.toBytes || ((E, y, x) => {
    const N = y.toAffine();
    return hi(Uint8Array.from([4]), e.toBytes(N.x), e.toBytes(N.y));
  }), s = t.fromBytes || ((E) => {
    const y = E.subarray(1), x = e.fromBytes(y.subarray(0, e.BYTES)), N = e.fromBytes(y.subarray(e.BYTES, 2 * e.BYTES));
    return { x, y: N };
  });
  function i(E) {
    const { a: y, b: x } = t, N = e.sqr(E), O = e.mul(N, E);
    return e.add(e.add(O, e.mul(E, y)), x);
  }
  if (!e.eql(e.sqr(t.Gy), i(t.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(E) {
    return typeof E == "bigint" && an < E && E < t.n;
  }
  function a(E) {
    if (!o(E))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(E) {
    const { allowedPrivateKeyLengths: y, nByteLength: x, wrapPrivateKey: N, n: O } = t;
    if (y && typeof E != "bigint") {
      if (E instanceof Uint8Array && (E = Vs(E)), typeof E != "string" || !y.includes(E.length))
        throw new Error("Invalid key");
      E = E.padStart(x * 2, "0");
    }
    let C;
    try {
      C = typeof E == "bigint" ? E : xr(de("private key", E, x));
    } catch {
      throw new Error(`private key must be ${x} bytes, hex or bigint, not ${typeof E}`);
    }
    return N && (C = Kt(C, O)), a(C), C;
  }
  const u = /* @__PURE__ */ new Map();
  function f(E) {
    if (!(E instanceof h))
      throw new Error("ProjectivePoint expected");
  }
  class h {
    constructor(y, x, N) {
      if (this.px = y, this.py = x, this.pz = N, y == null || !e.isValid(y))
        throw new Error("x required");
      if (x == null || !e.isValid(x))
        throw new Error("y required");
      if (N == null || !e.isValid(N))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(y) {
      const { x, y: N } = y || {};
      if (!y || !e.isValid(x) || !e.isValid(N))
        throw new Error("invalid affine point");
      if (y instanceof h)
        throw new Error("projective point not allowed");
      const O = (C) => e.eql(C, e.ZERO);
      return O(x) && O(N) ? h.ZERO : new h(x, N, e.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(y) {
      const x = e.invertBatch(y.map((N) => N.pz));
      return y.map((N, O) => N.toAffine(x[O])).map(h.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(y) {
      const x = h.fromAffine(s(de("pointHex", y)));
      return x.assertValidity(), x;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(y) {
      return h.BASE.multiply(c(y));
    }
    // "Private method", don't use it directly
    _setWindowSize(y) {
      this._WINDOW_SIZE = y, u.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (t.allowInfinityPoint && !e.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: y, y: x } = this.toAffine();
      if (!e.isValid(y) || !e.isValid(x))
        throw new Error("bad point: x or y not FE");
      const N = e.sqr(x), O = i(y);
      if (!e.eql(N, O))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y } = this.toAffine();
      if (e.isOdd)
        return !e.isOdd(y);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(y) {
      f(y);
      const { px: x, py: N, pz: O } = this, { px: C, py: M, pz: L } = y, I = e.eql(e.mul(x, L), e.mul(C, O)), G = e.eql(e.mul(N, L), e.mul(M, O));
      return I && G;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new h(this.px, e.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: y, b: x } = t, N = e.mul(x, Kc), { px: O, py: C, pz: M } = this;
      let L = e.ZERO, I = e.ZERO, G = e.ZERO, D = e.mul(O, O), X = e.mul(C, C), j = e.mul(M, M), K = e.mul(O, C);
      return K = e.add(K, K), G = e.mul(O, M), G = e.add(G, G), L = e.mul(y, G), I = e.mul(N, j), I = e.add(L, I), L = e.sub(X, I), I = e.add(X, I), I = e.mul(L, I), L = e.mul(K, L), G = e.mul(N, G), j = e.mul(y, j), K = e.sub(D, j), K = e.mul(y, K), K = e.add(K, G), G = e.add(D, D), D = e.add(G, D), D = e.add(D, j), D = e.mul(D, K), I = e.add(I, D), j = e.mul(C, M), j = e.add(j, j), D = e.mul(j, K), L = e.sub(L, D), G = e.mul(j, X), G = e.add(G, G), G = e.add(G, G), new h(L, I, G);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(y) {
      f(y);
      const { px: x, py: N, pz: O } = this, { px: C, py: M, pz: L } = y;
      let I = e.ZERO, G = e.ZERO, D = e.ZERO;
      const X = t.a, j = e.mul(t.b, Kc);
      let K = e.mul(x, C), ct = e.mul(N, M), ft = e.mul(O, L), Qt = e.add(x, N), B = e.add(C, M);
      Qt = e.mul(Qt, B), B = e.add(K, ct), Qt = e.sub(Qt, B), B = e.add(x, O);
      let T = e.add(C, L);
      return B = e.mul(B, T), T = e.add(K, ft), B = e.sub(B, T), T = e.add(N, O), I = e.add(M, L), T = e.mul(T, I), I = e.add(ct, ft), T = e.sub(T, I), D = e.mul(X, B), I = e.mul(j, ft), D = e.add(I, D), I = e.sub(ct, D), D = e.add(ct, D), G = e.mul(I, D), ct = e.add(K, K), ct = e.add(ct, K), ft = e.mul(X, ft), B = e.mul(j, B), ct = e.add(ct, ft), ft = e.sub(K, ft), ft = e.mul(X, ft), B = e.add(B, ft), K = e.mul(ct, B), G = e.add(G, K), K = e.mul(T, B), I = e.mul(Qt, I), I = e.sub(I, K), K = e.mul(Qt, ct), D = e.mul(T, D), D = e.add(D, K), new h(I, G, D);
    }
    subtract(y) {
      return this.add(y.negate());
    }
    is0() {
      return this.equals(h.ZERO);
    }
    wNAF(y) {
      return w.wNAFCached(this, u, y, (x) => {
        const N = e.invertBatch(x.map((O) => O.pz));
        return x.map((O, C) => O.toAffine(N[C])).map(h.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(y) {
      const x = h.ZERO;
      if (y === an)
        return x;
      if (a(y), y === le)
        return this;
      const { endo: N } = t;
      if (!N)
        return w.unsafeLadder(this, y);
      let { k1neg: O, k1: C, k2neg: M, k2: L } = N.splitScalar(y), I = x, G = x, D = this;
      for (; C > an || L > an; )
        C & le && (I = I.add(D)), L & le && (G = G.add(D)), D = D.double(), C >>= le, L >>= le;
      return O && (I = I.negate()), M && (G = G.negate()), G = new h(e.mul(G.px, N.beta), G.py, G.pz), I.add(G);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(y) {
      a(y);
      let x = y, N, O;
      const { endo: C } = t;
      if (C) {
        const { k1neg: M, k1: L, k2neg: I, k2: G } = C.splitScalar(x);
        let { p: D, f: X } = this.wNAF(L), { p: j, f: K } = this.wNAF(G);
        D = w.constTimeNegate(M, D), j = w.constTimeNegate(I, j), j = new h(e.mul(j.px, C.beta), j.py, j.pz), N = D.add(j), O = X.add(K);
      } else {
        const { p: M, f: L } = this.wNAF(x);
        N = M, O = L;
      }
      return h.normalizeZ([N, O])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(y, x, N) {
      const O = h.BASE, C = (L, I) => I === an || I === le || !L.equals(O) ? L.multiplyUnsafe(I) : L.multiply(I), M = C(this, x).add(C(y, N));
      return M.is0() ? void 0 : M;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(y) {
      const { px: x, py: N, pz: O } = this, C = this.is0();
      y == null && (y = C ? e.ONE : e.inv(O));
      const M = e.mul(x, y), L = e.mul(N, y), I = e.mul(O, y);
      if (C)
        return { x: e.ZERO, y: e.ZERO };
      if (!e.eql(I, e.ONE))
        throw new Error("invZ was invalid");
      return { x: M, y: L };
    }
    isTorsionFree() {
      const { h: y, isTorsionFree: x } = t;
      if (y === le)
        return !0;
      if (x)
        return x(h, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: y, clearCofactor: x } = t;
      return y === le ? this : x ? x(h, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(y = !0) {
      return this.assertValidity(), n(h, this, y);
    }
    toHex(y = !0) {
      return Vs(this.toRawBytes(y));
    }
  }
  h.BASE = new h(t.Gx, t.Gy, e.ONE), h.ZERO = new h(e.ZERO, e.ONE, e.ZERO);
  const p = t.nBitLength, w = Rd(h, t.endo ? Math.ceil(p / 2) : p);
  return {
    CURVE: t,
    ProjectivePoint: h,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: o
  };
}
function Ld(r) {
  const t = Uu(r);
  return Fi(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function Dd(r) {
  const t = Ld(r), { Fp: e, n } = t, s = e.BYTES + 1, i = 2 * e.BYTES + 1;
  function o(B) {
    return an < B && B < e.ORDER;
  }
  function a(B) {
    return Kt(B, n);
  }
  function c(B) {
    return Ca(B, n);
  }
  const { ProjectivePoint: u, normPrivateKeyToScalar: f, weierstrassEquation: h, isWithinCurveOrder: p } = Fd({
    ...t,
    toBytes(B, T, V) {
      const rt = T.toAffine(), W = e.toBytes(rt.x), ht = hi;
      return V ? ht(Uint8Array.from([T.hasEvenY() ? 2 : 3]), W) : ht(Uint8Array.from([4]), W, e.toBytes(rt.y));
    },
    fromBytes(B) {
      const T = B.length, V = B[0], rt = B.subarray(1);
      if (T === s && (V === 2 || V === 3)) {
        const W = xr(rt);
        if (!o(W))
          throw new Error("Point is not on curve");
        const ht = h(W);
        let dt = e.sqrt(ht);
        const Rt = (dt & le) === le;
        return (V & 1) === 1 !== Rt && (dt = e.neg(dt)), { x: W, y: dt };
      } else if (T === i && V === 4) {
        const W = e.fromBytes(rt.subarray(0, e.BYTES)), ht = e.fromBytes(rt.subarray(e.BYTES, 2 * e.BYTES));
        return { x: W, y: ht };
      } else
        throw new Error(`Point of length ${T} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`);
    }
  }), w = (B) => Vs(_s(B, t.nByteLength));
  function E(B) {
    const T = n >> le;
    return B > T;
  }
  function y(B) {
    return E(B) ? a(-B) : B;
  }
  const x = (B, T, V) => xr(B.slice(T, V));
  class N {
    constructor(T, V, rt) {
      this.r = T, this.s = V, this.recovery = rt, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(T) {
      const V = t.nByteLength;
      return T = de("compactSignature", T, V * 2), new N(x(T, 0, V), x(T, V, 2 * V));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(T) {
      const { r: V, s: rt } = $n.toSig(de("DER", T));
      return new N(V, rt);
    }
    assertValidity() {
      if (!p(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!p(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(T) {
      return new N(this.r, this.s, T);
    }
    recoverPublicKey(T) {
      const { r: V, s: rt, recovery: W } = this, ht = G(de("msgHash", T));
      if (W == null || ![0, 1, 2, 3].includes(W))
        throw new Error("recovery id invalid");
      const dt = W === 2 || W === 3 ? V + t.n : V;
      if (dt >= e.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const Rt = W & 1 ? "03" : "02", ee = u.fromHex(Rt + w(dt)), Vt = c(dt), Ge = a(-ht * Vt), pn = a(rt * Vt), ue = u.BASE.multiplyAndAddUnsafe(ee, Ge, pn);
      if (!ue)
        throw new Error("point at infinify");
      return ue.assertValidity(), ue;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return E(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new N(this.r, a(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return Js(this.toDERHex());
    }
    toDERHex() {
      return $n.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return Js(this.toCompactHex());
    }
    toCompactHex() {
      return w(this.r) + w(this.s);
    }
  }
  const O = {
    isValidPrivateKey(B) {
      try {
        return f(B), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: f,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const B = Su(t.n);
      return Id(t.randomBytes(B), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(B = 8, T = u.BASE) {
      return T._setWindowSize(B), T.multiply(BigInt(3)), T;
    }
  };
  function C(B, T = !0) {
    return u.fromPrivateKey(B).toRawBytes(T);
  }
  function M(B) {
    const T = B instanceof Uint8Array, V = typeof B == "string", rt = (T || V) && B.length;
    return T ? rt === s || rt === i : V ? rt === 2 * s || rt === 2 * i : B instanceof u;
  }
  function L(B, T, V = !0) {
    if (M(B))
      throw new Error("first arg must be private key");
    if (!M(T))
      throw new Error("second arg must be public key");
    return u.fromHex(T).multiply(f(B)).toRawBytes(V);
  }
  const I = t.bits2int || function(B) {
    const T = xr(B), V = B.length * 8 - t.nBitLength;
    return V > 0 ? T >> BigInt(V) : T;
  }, G = t.bits2int_modN || function(B) {
    return a(I(B));
  }, D = ac(t.nBitLength);
  function X(B) {
    if (typeof B != "bigint")
      throw new Error("bigint expected");
    if (!(an <= B && B < D))
      throw new Error(`bigint expected < 2^${t.nBitLength}`);
    return _s(B, t.nByteLength);
  }
  function j(B, T, V = K) {
    if (["recovered", "canonical"].some((Ne) => Ne in V))
      throw new Error("sign() legacy options not supported");
    const { hash: rt, randomBytes: W } = t;
    let { lowS: ht, prehash: dt, extraEntropy: Rt } = V;
    ht == null && (ht = !0), B = de("msgHash", B), dt && (B = de("prehashed msgHash", rt(B)));
    const ee = G(B), Vt = f(T), Ge = [X(Vt), X(ee)];
    if (Rt != null) {
      const Ne = Rt === !0 ? W(e.BYTES) : Rt;
      Ge.push(de("extraEntropy", Ne));
    }
    const pn = hi(...Ge), ue = ee;
    function Sr(Ne) {
      const He = I(Ne);
      if (!p(He))
        return;
      const Zs = c(He), ve = u.BASE.multiply(He).toAffine(), Jt = a(ve.x);
      if (Jt === an)
        return;
      const Pe = a(Zs * a(ue + Jt * Vt));
      if (Pe === an)
        return;
      let Ur = (ve.x === Jt ? 0 : 2) | Number(ve.y & le), Hi = Pe;
      return ht && E(Pe) && (Hi = y(Pe), Ur ^= 1), new N(Jt, Hi, Ur);
    }
    return { seed: pn, k2sig: Sr };
  }
  const K = { lowS: t.lowS, prehash: !1 }, ct = { lowS: t.lowS, prehash: !1 };
  function ft(B, T, V = K) {
    const { seed: rt, k2sig: W } = j(B, T, V), ht = t;
    return ku(ht.hash.outputLen, ht.nByteLength, ht.hmac)(rt, W);
  }
  u.BASE._setWindowSize(8);
  function Qt(B, T, V, rt = ct) {
    var ve;
    const W = B;
    if (T = de("msgHash", T), V = de("publicKey", V), "strict" in rt)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: ht, prehash: dt } = rt;
    let Rt, ee;
    try {
      if (typeof W == "string" || W instanceof Uint8Array)
        try {
          Rt = N.fromDER(W);
        } catch (Jt) {
          if (!(Jt instanceof $n.Err))
            throw Jt;
          Rt = N.fromCompact(W);
        }
      else if (typeof W == "object" && typeof W.r == "bigint" && typeof W.s == "bigint") {
        const { r: Jt, s: Pe } = W;
        Rt = new N(Jt, Pe);
      } else
        throw new Error("PARSE");
      ee = u.fromHex(V);
    } catch (Jt) {
      if (Jt.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (ht && Rt.hasHighS())
      return !1;
    dt && (T = t.hash(T));
    const { r: Vt, s: Ge } = Rt, pn = G(T), ue = c(Ge), Sr = a(pn * ue), Ne = a(Vt * ue), He = (ve = u.BASE.multiplyAndAddUnsafe(ee, Sr, Ne)) == null ? void 0 : ve.toAffine();
    return He ? a(He.x) === Vt : !1;
  }
  return {
    CURVE: t,
    getPublicKey: C,
    getSharedSecret: L,
    sign: ft,
    verify: Qt,
    ProjectivePoint: u,
    Signature: N,
    utils: O
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Md(r) {
  return {
    hash: r,
    hmac: (t, ...e) => uu(r, t, Ph(...e)),
    randomBytes: Ch
  };
}
function Gd(r, t) {
  const e = (n) => Dd({ ...r, ...Md(n) });
  return Object.freeze({ ...e(t), create: e });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Fu = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), jc = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Hd = BigInt(1), Ba = BigInt(2), Wc = (r, t) => (r + t / Ba) / t;
function Qd(r) {
  const t = Fu, e = BigInt(3), n = BigInt(6), s = BigInt(11), i = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), u = r * r * r % t, f = u * u * r % t, h = ne(f, e, t) * f % t, p = ne(h, e, t) * f % t, w = ne(p, Ba, t) * u % t, E = ne(w, s, t) * w % t, y = ne(E, i, t) * E % t, x = ne(y, a, t) * y % t, N = ne(x, c, t) * x % t, O = ne(N, a, t) * y % t, C = ne(O, e, t) * f % t, M = ne(C, o, t) * E % t, L = ne(M, n, t) * u % t, I = ne(L, Ba, t);
  if (!Oa.eql(Oa.sqr(I), r))
    throw new Error("Cannot find square root");
  return I;
}
const Oa = Od(Fu, void 0, void 0, { sqrt: Qd }), bn = Gd({
  a: BigInt(0),
  b: BigInt(7),
  Fp: Oa,
  n: jc,
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (r) => {
      const t = jc, e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -Hd * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = e, o = BigInt("0x100000000000000000000000000000000"), a = Wc(i * r, t), c = Wc(-n * r, t);
      let u = Kt(r - a * e - c * s, t), f = Kt(-a * n - c * i, t);
      const h = u > o, p = f > o;
      if (h && (u = t - u), p && (f = t - f), u > o || f > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + r);
      return { k1neg: h, k1: u, k2neg: p, k2: f };
    }
  }
}, hu);
BigInt(0);
bn.ProjectivePoint;
const di = "0x0000000000000000000000000000000000000000", Yc = "0x0000000000000000000000000000000000000000000000000000000000000000", Zc = BigInt(0), Xc = BigInt(1), qc = BigInt(2), $c = BigInt(27), tl = BigInt(28), Ki = BigInt(35), Dr = {};
function el(r) {
  return Pr(Dt(r), 32);
}
var cs, ls, us, fr;
const he = class he {
  /**
   *  @private
   */
  constructor(t, e, n, s) {
    b(this, cs);
    b(this, ls);
    b(this, us);
    b(this, fr);
    Ui(t, Dr, "Signature"), d(this, cs, e), d(this, ls, n), d(this, us, s), d(this, fr, null);
  }
  /**
   *  The ``r`` value for a signautre.
   *
   *  This represents the ``x`` coordinate of a "reference" or
   *  challenge point, from which the ``y`` can be computed.
   */
  get r() {
    return l(this, cs);
  }
  set r(t) {
    m(Zr(t) === 32, "invalid r", "value", t), d(this, cs, R(t));
  }
  /**
   *  The ``s`` value for a signature.
   */
  get s() {
    return l(this, ls);
  }
  set s(t) {
    m(Zr(t) === 32, "invalid s", "value", t);
    const e = R(t);
    m(parseInt(e.substring(0, 3)) < 8, "non-canonical s", "value", e), d(this, ls, e);
  }
  /**
   *  The ``v`` value for a signature.
   *
   *  Since a given ``x`` value for ``r`` has two possible values for
   *  its correspondin ``y``, the ``v`` indicates which of the two ``y``
   *  values to use.
   *
   *  It is normalized to the values ``27`` or ``28`` for legacy
   *  purposes.
   */
  get v() {
    return l(this, us);
  }
  set v(t) {
    const e = Q(t, "value");
    m(e === 27 || e === 28, "invalid v", "v", t), d(this, us, e);
  }
  /**
   *  The EIP-155 ``v`` for legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get networkV() {
    return l(this, fr);
  }
  /**
   *  The chain ID for EIP-155 legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get legacyChainId() {
    const t = this.networkV;
    return t == null ? null : he.getChainId(t);
  }
  /**
   *  The ``yParity`` for the signature.
   *
   *  See ``v`` for more details on how this value is used.
   */
  get yParity() {
    return this.v === 27 ? 0 : 1;
  }
  /**
   *  The [[link-eip-2098]] compact representation of the ``yParity``
   *  and ``s`` compacted into a single ``bytes32``.
   */
  get yParityAndS() {
    const t = Z(this.s);
    return this.yParity && (t[0] |= 128), R(t);
  }
  /**
   *  The [[link-eip-2098]] compact representation.
   */
  get compactSerialized() {
    return yt([this.r, this.yParityAndS]);
  }
  /**
   *  The serialized representation.
   */
  get serialized() {
    return yt([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
  }
  /**
   *  Returns a new identical [[Signature]].
   */
  clone() {
    const t = new he(Dr, this.r, this.s, this.v);
    return this.networkV && d(t, fr, this.networkV), t;
  }
  /**
   *  Returns a representation that is compatible with ``JSON.stringify``.
   */
  toJSON() {
    const t = this.networkV;
    return {
      _type: "signature",
      networkV: t != null ? t.toString() : null,
      r: this.r,
      s: this.s,
      v: this.v
    };
  }
  /**
   *  Compute the chain ID from the ``v`` in a legacy EIP-155 transactions.
   *
   *  @example:
   *    Signature.getChainId(45)
   *    //_result:
   *
   *    Signature.getChainId(46)
   *    //_result:
   */
  static getChainId(t) {
    const e = S(t, "v");
    return e == $c || e == tl ? Zc : (m(e >= Ki, "invalid EIP-155 v", "v", t), (e - Ki) / qc);
  }
  /**
   *  Compute the ``v`` for a chain ID for a legacy EIP-155 transactions.
   *
   *  Legacy transactions which use [[link-eip-155]] hijack the ``v``
   *  property to include the chain ID.
   *
   *  @example:
   *    Signature.getChainIdV(5, 27)
   *    //_result:
   *
   *    Signature.getChainIdV(5, 28)
   *    //_result:
   *
   */
  static getChainIdV(t, e) {
    return S(t) * qc + BigInt(35 + e - 27);
  }
  /**
   *  Compute the normalized legacy transaction ``v`` from a ``yParirty``,
   *  a legacy transaction ``v`` or a legacy [[link-eip-155]] transaction.
   *
   *  @example:
   *    // The values 0 and 1 imply v is actually yParity
   *    Signature.getNormalizedV(0)
   *    //_result:
   *
   *    // Legacy non-EIP-1559 transaction (i.e. 27 or 28)
   *    Signature.getNormalizedV(27)
   *    //_result:
   *
   *    // Legacy EIP-155 transaction (i.e. >= 35)
   *    Signature.getNormalizedV(46)
   *    //_result:
   *
   *    // Invalid values throw
   *    Signature.getNormalizedV(5)
   *    //_error:
   */
  static getNormalizedV(t) {
    const e = S(t);
    return e === Zc || e === $c ? 27 : e === Xc || e === tl ? 28 : (m(e >= Ki, "invalid v", "v", t), e & Xc ? 27 : 28);
  }
  /**
   *  Creates a new [[Signature]].
   *
   *  If no %%sig%% is provided, a new [[Signature]] is created
   *  with default values.
   *
   *  If %%sig%% is a string, it is parsed.
   */
  static from(t) {
    function e(u, f) {
      m(u, f, "signature", t);
    }
    if (t == null)
      return new he(Dr, Yc, Yc, 27);
    if (typeof t == "string") {
      const u = Z(t, "signature");
      if (u.length === 64) {
        const f = R(u.slice(0, 32)), h = u.slice(32, 64), p = h[0] & 128 ? 28 : 27;
        return h[0] &= 127, new he(Dr, f, R(h), p);
      }
      if (u.length === 65) {
        const f = R(u.slice(0, 32)), h = u.slice(32, 64);
        e((h[0] & 128) === 0, "non-canonical s");
        const p = he.getNormalizedV(u[64]);
        return new he(Dr, f, R(h), p);
      }
      e(!1, "invalid raw signature length");
    }
    if (t instanceof he)
      return t.clone();
    const n = t.r;
    e(n != null, "missing r");
    const s = el(n), i = function(u, f) {
      if (u != null)
        return el(u);
      if (f != null) {
        e(st(f, 32), "invalid yParityAndS");
        const h = Z(f);
        return h[0] &= 127, R(h);
      }
      e(!1, "missing s");
    }(t.s, t.yParityAndS);
    e((Z(i)[0] & 128) == 0, "non-canonical s");
    const { networkV: o, v: a } = function(u, f, h) {
      if (u != null) {
        const p = S(u);
        return {
          networkV: p >= Ki ? p : void 0,
          v: he.getNormalizedV(p)
        };
      }
      if (f != null)
        return e(st(f, 32), "invalid yParityAndS"), { v: Z(f)[0] & 128 ? 28 : 27 };
      if (h != null) {
        switch (Q(h, "sig.yParity")) {
          case 0:
            return { v: 27 };
          case 1:
            return { v: 28 };
        }
        e(!1, "invalid yParity");
      }
      e(!1, "missing v");
    }(t.v, t.yParityAndS, t.yParity), c = new he(Dr, s, i, a);
    return o && d(c, fr, o), e(t.yParity == null || Q(t.yParity, "sig.yParity") === c.yParity, "yParity mismatch"), e(t.yParityAndS == null || t.yParityAndS === c.yParityAndS, "yParityAndS mismatch"), c;
  }
};
cs = new WeakMap(), ls = new WeakMap(), us = new WeakMap(), fr = new WeakMap();
let be = he;
var Xe;
const Zn = class Zn {
  /**
   *  Creates a new **SigningKey** for %%privateKey%%.
   */
  constructor(t) {
    b(this, Xe);
    m(Zr(t) === 32, "invalid private key", "privateKey", "[REDACTED]"), d(this, Xe, R(t));
  }
  /**
   *  The private key.
   */
  get privateKey() {
    return l(this, Xe);
  }
  /**
   *  The uncompressed public key.
   *
   * This will always begin with the prefix ``0x04`` and be 132
   * characters long (the ``0x`` prefix and 130 hexadecimal nibbles).
   */
  get publicKey() {
    return Zn.computePublicKey(l(this, Xe));
  }
  /**
   *  The compressed public key.
   *
   *  This will always begin with either the prefix ``0x02`` or ``0x03``
   *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
   *  nibbles)
   */
  get compressedPublicKey() {
    return Zn.computePublicKey(l(this, Xe), !0);
  }
  /**
   *  Return the signature of the signed %%digest%%.
   */
  sign(t) {
    m(Zr(t) === 32, "invalid digest length", "digest", t);
    const e = bn.sign(Lt(t), Lt(l(this, Xe)), {
      lowS: !0
    });
    return be.from({
      r: Qn(e.r, 32),
      s: Qn(e.s, 32),
      v: e.recovery ? 28 : 27
    });
  }
  /**
   *  Returns the [[link-wiki-ecdh]] shared secret between this
   *  private key and the %%other%% key.
   *
   *  The %%other%% key may be any type of key, a raw public key,
   *  a compressed/uncompressed pubic key or aprivate key.
   *
   *  Best practice is usually to use a cryptographic hash on the
   *  returned value before using it as a symetric secret.
   *
   *  @example:
   *    sign1 = new SigningKey(id("some-secret-1"))
   *    sign2 = new SigningKey(id("some-secret-2"))
   *
   *    // Notice that privA.computeSharedSecret(pubB)...
   *    sign1.computeSharedSecret(sign2.publicKey)
   *    //_result:
   *
   *    // ...is equal to privB.computeSharedSecret(pubA).
   *    sign2.computeSharedSecret(sign1.publicKey)
   *    //_result:
   */
  computeSharedSecret(t) {
    const e = Zn.computePublicKey(t);
    return R(bn.getSharedSecret(Lt(l(this, Xe)), Z(e), !1));
  }
  /**
   *  Compute the public key for %%key%%, optionally %%compressed%%.
   *
   *  The %%key%% may be any type of key, a raw public key, a
   *  compressed/uncompressed public key or private key.
   *
   *  @example:
   *    sign = new SigningKey(id("some-secret"));
   *
   *    // Compute the uncompressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey)
   *    //_result:
   *
   *    // Compute the compressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey, true)
   *    //_result:
   *
   *    // Compute the uncompressed public key
   *    SigningKey.computePublicKey(sign.publicKey, false);
   *    //_result:
   *
   *    // Compute the Compressed a public key
   *    SigningKey.computePublicKey(sign.publicKey, true);
   *    //_result:
   */
  static computePublicKey(t, e) {
    let n = Z(t, "key");
    if (n.length === 32) {
      const i = bn.getPublicKey(n, !!e);
      return R(i);
    }
    if (n.length === 64) {
      const i = new Uint8Array(65);
      i[0] = 4, i.set(n, 1), n = i;
    }
    const s = bn.ProjectivePoint.fromHex(n);
    return R(s.toRawBytes(e));
  }
  /**
   *  Returns the public key for the private key which produced the
   *  %%signature%% for the given %%digest%%.
   *
   *  @example:
   *    key = new SigningKey(id("some-secret"))
   *    digest = id("hello world")
   *    sig = key.sign(digest)
   *
   *    // Notice the signer public key...
   *    key.publicKey
   *    //_result:
   *
   *    // ...is equal to the recovered public key
   *    SigningKey.recoverPublicKey(digest, sig)
   *    //_result:
   *
   */
  static recoverPublicKey(t, e) {
    m(Zr(t) === 32, "invalid digest length", "digest", t);
    const n = be.from(e);
    let s = bn.Signature.fromCompact(Lt(yt([n.r, n.s])));
    s = s.addRecoveryBit(n.yParity);
    const i = s.recoverPublicKey(Lt(t));
    return m(i != null, "invalid signautre for digest", "signature", e), "0x" + i.toHex(!1);
  }
  /**
   *  Returns the point resulting from adding the ellipic curve points
   *  %%p0%% and %%p1%%.
   *
   *  This is not a common function most developers should require, but
   *  can be useful for certain privacy-specific techniques.
   *
   *  For example, it is used by [[HDNodeWallet]] to compute child
   *  addresses from parent public keys and chain codes.
   */
  static addPoints(t, e, n) {
    const s = bn.ProjectivePoint.fromHex(Zn.computePublicKey(t).substring(2)), i = bn.ProjectivePoint.fromHex(Zn.computePublicKey(e).substring(2));
    return "0x" + s.add(i).toHex(!!n);
  }
};
Xe = new WeakMap();
let pi = Zn;
const Vd = BigInt(0), Jd = BigInt(36);
function nl(r) {
  r = r.toLowerCase();
  const t = r.substring(2).split(""), e = new Uint8Array(40);
  for (let s = 0; s < 40; s++)
    e[s] = t[s].charCodeAt(0);
  const n = Z(wt(e));
  for (let s = 0; s < 40; s += 2)
    n[s >> 1] >> 4 >= 8 && (t[s] = t[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && (t[s + 1] = t[s + 1].toUpperCase());
  return "0x" + t.join("");
}
const cc = {};
for (let r = 0; r < 10; r++)
  cc[String(r)] = String(r);
for (let r = 0; r < 26; r++)
  cc[String.fromCharCode(65 + r)] = String(10 + r);
const rl = 15;
function _d(r) {
  r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
  let t = r.split("").map((n) => cc[n]).join("");
  for (; t.length >= rl; ) {
    let n = t.substring(0, rl);
    t = parseInt(n, 10) % 97 + t.substring(n.length);
  }
  let e = String(98 - parseInt(t, 10) % 97);
  for (; e.length < 2; )
    e = "0" + e;
  return e;
}
const zd = function() {
  const r = {};
  for (let t = 0; t < 36; t++) {
    const e = "0123456789abcdefghijklmnopqrstuvwxyz"[t];
    r[e] = BigInt(t);
  }
  return r;
}();
function Kd(r) {
  r = r.toLowerCase();
  let t = Vd;
  for (let e = 0; e < r.length; e++)
    t = t * Jd + zd[r[e]];
  return t;
}
function nt(r) {
  if (m(typeof r == "string", "invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    r.startsWith("0x") || (r = "0x" + r);
    const t = nl(r);
    return m(!r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || t === r, "bad address checksum", "address", r), t;
  }
  if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    m(r.substring(2, 4) === _d(r), "bad icap checksum", "address", r);
    let t = Kd(r.substring(4)).toString(16);
    for (; t.length < 40; )
      t = "0" + t;
    return nl("0x" + t);
  }
  m(!1, "invalid address", "address", r);
}
function jd(r) {
  const t = nt(r.from);
  let n = S(r.nonce, "tx.nonce").toString(16);
  return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, nt(ut(wt(Cr([t, n])), 12));
}
function Lu(r) {
  return r && typeof r.getAddress == "function";
}
async function ta(r, t) {
  const e = await t;
  return (e == null || e === "0x0000000000000000000000000000000000000000") && (v(typeof r != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: r }), m(!1, "invalid AddressLike value; did not resolve to a value address", "target", r)), nt(e);
}
function Gt(r, t) {
  if (typeof r == "string")
    return r.match(/^0x[0-9a-f]{40}$/i) ? nt(r) : (v(t != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), ta(r, t.resolveName(r)));
  if (Lu(r))
    return ta(r, r.getAddress());
  if (r && typeof r.then == "function")
    return ta(r, r);
  m(!1, "unsupported addressable value", "target", r);
}
const _e = {};
function k(r, t) {
  let e = !1;
  return t < 0 && (e = !0, t *= -1), new kt(_e, `${e ? "" : "u"}int${t}`, r, { signed: e, width: t });
}
function q(r, t) {
  return new kt(_e, `bytes${t || ""}`, r, { size: t });
}
const sl = Symbol.for("_ethers_typed");
var hr;
const ze = class ze {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s) {
    /**
     *  The type, as a Solidity-compatible type.
     */
    A(this, "type");
    /**
     *  The actual value.
     */
    A(this, "value");
    b(this, hr);
    /**
     *  @_ignore:
     */
    A(this, "_typedSymbol");
    s == null && (s = null), Ui(_e, t, "Typed"), H(this, { _typedSymbol: sl, type: e, value: n }), d(this, hr, s), this.format();
  }
  /**
   *  Format the type as a Human-Readable type.
   */
  format() {
    if (this.type === "array")
      throw new Error("");
    if (this.type === "dynamicArray")
      throw new Error("");
    return this.type === "tuple" ? `tuple(${this.value.map((t) => t.format()).join(",")})` : this.type;
  }
  /**
   *  The default value returned by this type.
   */
  defaultValue() {
    return 0;
  }
  /**
   *  The minimum value for numeric types.
   */
  minValue() {
    return 0;
  }
  /**
   *  The maximum value for numeric types.
   */
  maxValue() {
    return 0;
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].
   */
  isBigInt() {
    return !!this.type.match(/^u?int[0-9]+$/);
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedData]].
   */
  isData() {
    return this.type.startsWith("bytes");
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedString]].
   */
  isString() {
    return this.type === "string";
  }
  /**
   *  Returns the tuple name, if this is a tuple. Throws otherwise.
   */
  get tupleName() {
    if (this.type !== "tuple")
      throw TypeError("not a tuple");
    return l(this, hr);
  }
  // Returns the length of this type as an array
  // - `null` indicates the length is unforced, it could be dynamic
  // - `-1` indicates the length is dynamic
  // - any other value indicates it is a static array and is its length
  /**
   *  Returns the length of the array type or ``-1`` if it is dynamic.
   *
   *  Throws if the type is not an array.
   */
  get arrayLength() {
    if (this.type !== "array")
      throw TypeError("not an array");
    return l(this, hr) === !0 ? -1 : l(this, hr) === !1 ? this.value.length : null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(t, e) {
    return new ze(_e, t, e);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(t) {
    return k(t, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(t) {
    return k(t, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(t) {
    return k(t, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(t) {
    return k(t, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(t) {
    return k(t, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(t) {
    return k(t, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(t) {
    return k(t, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(t) {
    return k(t, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(t) {
    return k(t, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(t) {
    return k(t, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(t) {
    return k(t, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(t) {
    return k(t, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(t) {
    return k(t, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(t) {
    return k(t, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(t) {
    return k(t, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(t) {
    return k(t, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(t) {
    return k(t, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(t) {
    return k(t, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(t) {
    return k(t, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(t) {
    return k(t, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(t) {
    return k(t, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(t) {
    return k(t, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(t) {
    return k(t, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(t) {
    return k(t, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(t) {
    return k(t, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(t) {
    return k(t, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(t) {
    return k(t, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(t) {
    return k(t, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(t) {
    return k(t, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(t) {
    return k(t, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(t) {
    return k(t, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(t) {
    return k(t, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(t) {
    return k(t, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(t) {
    return k(t, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(t) {
    return k(t, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(t) {
    return k(t, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(t) {
    return k(t, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(t) {
    return k(t, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(t) {
    return k(t, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(t) {
    return k(t, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(t) {
    return k(t, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(t) {
    return k(t, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(t) {
    return k(t, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(t) {
    return k(t, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(t) {
    return k(t, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(t) {
    return k(t, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(t) {
    return k(t, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(t) {
    return k(t, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(t) {
    return k(t, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(t) {
    return k(t, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(t) {
    return k(t, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(t) {
    return k(t, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(t) {
    return k(t, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(t) {
    return k(t, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(t) {
    return k(t, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(t) {
    return k(t, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(t) {
    return k(t, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(t) {
    return k(t, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(t) {
    return k(t, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(t) {
    return k(t, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(t) {
    return k(t, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(t) {
    return k(t, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(t) {
    return k(t, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(t) {
    return k(t, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(t) {
    return k(t, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(t) {
    return k(t, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(t) {
    return q(t, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(t) {
    return q(t, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(t) {
    return q(t, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(t) {
    return q(t, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(t) {
    return q(t, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(t) {
    return q(t, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(t) {
    return q(t, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(t) {
    return q(t, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(t) {
    return q(t, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(t) {
    return q(t, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(t) {
    return q(t, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(t) {
    return q(t, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(t) {
    return q(t, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(t) {
    return q(t, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(t) {
    return q(t, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(t) {
    return q(t, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(t) {
    return q(t, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(t) {
    return q(t, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(t) {
    return q(t, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(t) {
    return q(t, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(t) {
    return q(t, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(t) {
    return q(t, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(t) {
    return q(t, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(t) {
    return q(t, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(t) {
    return q(t, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(t) {
    return q(t, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(t) {
    return q(t, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(t) {
    return q(t, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(t) {
    return q(t, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(t) {
    return q(t, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(t) {
    return q(t, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(t) {
    return q(t, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(t) {
    return new ze(_e, "address", t);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(t) {
    return new ze(_e, "bool", !!t);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(t) {
    return new ze(_e, "bytes", t);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(t) {
    return new ze(_e, "string", t);
  }
  /**
   *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
   */
  static array(t, e) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
   */
  static tuple(t, e) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static overrides(t) {
    return new ze(_e, "overrides", Object.assign({}, t));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(t) {
    return t && typeof t == "object" && "_typedSymbol" in t && t._typedSymbol === sl;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(t, e) {
    if (ze.isTyped(t)) {
      if (t.type !== e)
        throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);
      return t.value;
    }
    return t;
  }
};
hr = new WeakMap();
let kt = ze;
class Wd extends dn {
  constructor(t) {
    super("address", "address", t, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(t, e) {
    let n = kt.dereference(e, "string");
    try {
      n = nt(n);
    } catch (s) {
      return this._throwError(s.message, e);
    }
    return t.writeValue(n);
  }
  decode(t) {
    return nt(Qn(t.readValue(), 20));
  }
}
class Yd extends dn {
  constructor(e) {
    super(e.name, e.type, "_", e.dynamic);
    A(this, "coder");
    this.coder = e;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(e, n) {
    return this.coder.encode(e, n);
  }
  decode(e) {
    return this.coder.decode(e);
  }
}
function Du(r, t, e) {
  let n = [];
  if (Array.isArray(e))
    n = e;
  else if (e && typeof e == "object") {
    let c = {};
    n = t.map((u) => {
      const f = u.localName;
      return v(f, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder: u }, value: e }), v(!c[f], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder: u }, value: e }), c[f] = !0, e[f];
    });
  } else
    m(!1, "invalid tuple value", "tuple", e);
  m(t.length === n.length, "types/value length mismatch", "tuple", e);
  let s = new Ea(), i = new Ea(), o = [];
  t.forEach((c, u) => {
    let f = n[u];
    if (c.dynamic) {
      let h = i.length;
      c.encode(i, f);
      let p = s.writeUpdatableValue();
      o.push((w) => {
        p(w + h);
      });
    } else
      c.encode(s, f);
  }), o.forEach((c) => {
    c(s.length);
  });
  let a = r.appendWriter(s);
  return a += r.appendWriter(i), a;
}
function Mu(r, t) {
  let e = [], n = [], s = r.subReader(0);
  return t.forEach((i) => {
    let o = null;
    if (i.dynamic) {
      let a = r.readIndex(), c = s.subReader(a);
      try {
        o = i.decode(c);
      } catch (u) {
        if (vt(u, "BUFFER_OVERRUN"))
          throw u;
        o = u, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    } else
      try {
        o = i.decode(r);
      } catch (a) {
        if (vt(a, "BUFFER_OVERRUN"))
          throw a;
        o = a, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    if (o == null)
      throw new Error("investigate");
    e.push(o), n.push(i.localName || null);
  }), Hs.fromItems(e, n);
}
class Zd extends dn {
  constructor(e, n, s) {
    const i = e.type + "[" + (n >= 0 ? n : "") + "]", o = n === -1 || e.dynamic;
    super("array", i, s, o);
    A(this, "coder");
    A(this, "length");
    H(this, { coder: e, length: n });
  }
  defaultValue() {
    const e = this.coder.defaultValue(), n = [];
    for (let s = 0; s < this.length; s++)
      n.push(e);
    return n;
  }
  encode(e, n) {
    const s = kt.dereference(n, "array");
    Array.isArray(s) || this._throwError("expected array value", s);
    let i = this.length;
    i === -1 && (i = s.length, e.writeValue(s.length)), Kl(s.length, i, "coder array" + (this.localName ? " " + this.localName : ""));
    let o = [];
    for (let a = 0; a < s.length; a++)
      o.push(this.coder);
    return Du(e, o, s);
  }
  decode(e) {
    let n = this.length;
    n === -1 && (n = e.readIndex(), v(n * Mt <= e.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: e.bytes, offset: n * Mt, length: e.dataLength }));
    let s = [];
    for (let i = 0; i < n; i++)
      s.push(new Yd(this.coder));
    return Mu(e, s);
  }
}
class Xd extends dn {
  constructor(t) {
    super("bool", "bool", t, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(t, e) {
    const n = kt.dereference(e, "bool");
    return t.writeValue(n ? 1 : 0);
  }
  decode(t) {
    return !!t.readValue();
  }
}
class Gu extends dn {
  constructor(t, e) {
    super(t, t, e, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(t, e) {
    e = Lt(e);
    let n = t.writeValue(e.length);
    return n += t.writeBytes(e), n;
  }
  decode(t) {
    return t.readBytes(t.readIndex(), !0);
  }
}
class qd extends Gu {
  constructor(t) {
    super("bytes", t);
  }
  decode(t) {
    return R(super.decode(t));
  }
}
class $d extends dn {
  constructor(e, n) {
    let s = "bytes" + String(e);
    super(s, s, n, !1);
    A(this, "size");
    H(this, { size: e }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(e, n) {
    let s = Lt(kt.dereference(n, this.type));
    return s.length !== this.size && this._throwError("incorrect data length", n), e.writeBytes(s);
  }
  decode(e) {
    return R(e.readBytes(this.size));
  }
}
const tp = new Uint8Array([]);
class ep extends dn {
  constructor(t) {
    super("null", "", t, !1);
  }
  defaultValue() {
    return null;
  }
  encode(t, e) {
    return e != null && this._throwError("not null", e), t.writeBytes(tp);
  }
  decode(t) {
    return t.readBytes(0), null;
  }
}
const np = BigInt(0), rp = BigInt(1), sp = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class ip extends dn {
  constructor(e, n, s) {
    const i = (n ? "int" : "uint") + e * 8;
    super(i, i, s, !1);
    A(this, "size");
    A(this, "signed");
    H(this, { size: e, signed: n }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(e, n) {
    let s = S(kt.dereference(n, this.type)), i = qn(sp, Mt * 8);
    if (this.signed) {
      let o = qn(i, this.size * 8 - 1);
      (s > o || s < -(o + rp)) && this._throwError("value out-of-bounds", n), s = Yl(s, 8 * Mt);
    } else (s < np || s > qn(i, this.size * 8)) && this._throwError("value out-of-bounds", n);
    return e.writeValue(s);
  }
  decode(e) {
    let n = qn(e.readValue(), this.size * 8);
    return this.signed && (n = uo(n, this.size * 8)), n;
  }
}
class op extends Gu {
  constructor(t) {
    super("string", t);
  }
  defaultValue() {
    return "";
  }
  encode(t, e) {
    return super.encode(t, ln(kt.dereference(e, "string")));
  }
  decode(t) {
    return fo(super.decode(t));
  }
}
class ji extends dn {
  constructor(e, n) {
    let s = !1;
    const i = [];
    e.forEach((a) => {
      a.dynamic && (s = !0), i.push(a.type);
    });
    const o = "tuple(" + i.join(",") + ")";
    super("tuple", o, n, s);
    A(this, "coders");
    H(this, { coders: Object.freeze(e.slice()) });
  }
  defaultValue() {
    const e = [];
    this.coders.forEach((s) => {
      e.push(s.defaultValue());
    });
    const n = this.coders.reduce((s, i) => {
      const o = i.localName;
      return o && (s[o] || (s[o] = 0), s[o]++), s;
    }, {});
    return this.coders.forEach((s, i) => {
      let o = s.localName;
      !o || n[o] !== 1 || (o === "length" && (o = "_length"), e[o] == null && (e[o] = e[i]));
    }), Object.freeze(e);
  }
  encode(e, n) {
    const s = kt.dereference(n, "tuple");
    return Du(e, this.coders, s);
  }
  decode(e) {
    return Mu(e, this.coders);
  }
}
function Br(r) {
  return wt(ln(r));
}
var ap = "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";
const il = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]), ol = 4;
function cp(r) {
  let t = 0;
  function e() {
    return r[t++] << 8 | r[t++];
  }
  let n = e(), s = 1, i = [0, 1];
  for (let L = 1; L < n; L++)
    i.push(s += e());
  let o = e(), a = t;
  t += o;
  let c = 0, u = 0;
  function f() {
    return c == 0 && (u = u << 8 | r[t++], c = 8), u >> --c & 1;
  }
  const h = 31, p = 2 ** h, w = p >>> 1, E = w >> 1, y = p - 1;
  let x = 0;
  for (let L = 0; L < h; L++) x = x << 1 | f();
  let N = [], O = 0, C = p;
  for (; ; ) {
    let L = Math.floor(((x - O + 1) * s - 1) / C), I = 0, G = n;
    for (; G - I > 1; ) {
      let j = I + G >>> 1;
      L < i[j] ? G = j : I = j;
    }
    if (I == 0) break;
    N.push(I);
    let D = O + Math.floor(C * i[I] / s), X = O + Math.floor(C * i[I + 1] / s) - 1;
    for (; !((D ^ X) & w); )
      x = x << 1 & y | f(), D = D << 1 & y, X = X << 1 & y | 1;
    for (; D & ~X & E; )
      x = x & w | x << 1 & y >>> 1 | f(), D = D << 1 ^ w, X = (X ^ w) << 1 | w | 1;
    O = D, C = 1 + X - D;
  }
  let M = n - 4;
  return N.map((L) => {
    switch (L - M) {
      case 3:
        return M + 65792 + (r[a++] << 16 | r[a++] << 8 | r[a++]);
      case 2:
        return M + 256 + (r[a++] << 8 | r[a++]);
      case 1:
        return M + r[a++];
      default:
        return L - 1;
    }
  });
}
function lp(r) {
  let t = 0;
  return () => r[t++];
}
function Hu(r) {
  return lp(cp(up(r)));
}
function up(r) {
  let t = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((s, i) => t[s.charCodeAt(0)] = i);
  let e = r.length, n = new Uint8Array(6 * e >> 3);
  for (let s = 0, i = 0, o = 0, a = 0; s < e; s++)
    a = a << 6 | t[r.charCodeAt(s)], o += 6, o >= 8 && (n[i++] = a >> (o -= 8));
  return n;
}
function fp(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function hp(r, t) {
  let e = Array(r);
  for (let n = 0, s = 0; n < r; n++) e[n] = s += fp(t());
  return e;
}
function gi(r, t = 0) {
  let e = [];
  for (; ; ) {
    let n = r(), s = r();
    if (!s) break;
    t += n;
    for (let i = 0; i < s; i++)
      e.push(t + i);
    t += s + 1;
  }
  return e;
}
function Qu(r) {
  return mi(() => {
    let t = gi(r);
    if (t.length) return t;
  });
}
function Vu(r) {
  let t = [];
  for (; ; ) {
    let e = r();
    if (e == 0) break;
    t.push(dp(e, r));
  }
  for (; ; ) {
    let e = r() - 1;
    if (e < 0) break;
    t.push(pp(e, r));
  }
  return t.flat();
}
function mi(r) {
  let t = [];
  for (; ; ) {
    let e = r(t.length);
    if (!e) break;
    t.push(e);
  }
  return t;
}
function Ju(r, t, e) {
  let n = Array(r).fill().map(() => []);
  for (let s = 0; s < t; s++)
    hp(r, e).forEach((i, o) => n[o].push(i));
  return n;
}
function dp(r, t) {
  let e = 1 + t(), n = t(), s = mi(t);
  return Ju(s.length, 1 + r, t).flatMap((o, a) => {
    let [c, ...u] = o;
    return Array(s[a]).fill().map((f, h) => {
      let p = h * n;
      return [c + h * e, u.map((w) => w + p)];
    });
  });
}
function pp(r, t) {
  let e = 1 + t();
  return Ju(e, 1 + r, t).map((s) => [s[0], s.slice(1)]);
}
function gp(r) {
  let t = [], e = gi(r);
  return s(n([]), []), t;
  function n(i) {
    let o = r(), a = mi(() => {
      let c = gi(r).map((u) => e[u]);
      if (c.length) return n(c);
    });
    return { S: o, B: a, Q: i };
  }
  function s({ S: i, B: o }, a, c) {
    if (!(i & 4 && c === a[a.length - 1])) {
      i & 2 && (c = a[a.length - 1]), i & 1 && t.push(a);
      for (let u of o)
        for (let f of u.Q)
          s(u, [...a, f], c);
    }
  }
}
function mp(r) {
  return r.toString(16).toUpperCase().padStart(2, "0");
}
function _u(r) {
  return `{${mp(r)}}`;
}
function yp(r) {
  let t = [];
  for (let e = 0, n = r.length; e < n; ) {
    let s = r.codePointAt(e);
    e += s < 65536 ? 1 : 2, t.push(s);
  }
  return t;
}
function zs(r) {
  let e = r.length;
  if (e < 4096) return String.fromCodePoint(...r);
  let n = [];
  for (let s = 0; s < e; )
    n.push(String.fromCodePoint(...r.slice(s, s += 4096)));
  return n.join("");
}
function wp(r, t) {
  let e = r.length, n = e - t.length;
  for (let s = 0; n == 0 && s < e; s++) n = r[s] - t[s];
  return n;
}
var Ap = "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";
const yi = 44032, go = 4352, mo = 4449, yo = 4519, zu = 19, Ku = 21, Ks = 28, wo = Ku * Ks, bp = zu * wo, Ep = yi + bp, xp = go + zu, Np = mo + Ku, vp = yo + Ks;
function ii(r) {
  return r >> 24 & 255;
}
function ju(r) {
  return r & 16777215;
}
let Ia, al, ka, $i;
function Pp() {
  let r = Hu(Ap);
  Ia = new Map(Qu(r).flatMap((t, e) => t.map((n) => [n, e + 1 << 24]))), al = new Set(gi(r)), ka = /* @__PURE__ */ new Map(), $i = /* @__PURE__ */ new Map();
  for (let [t, e] of Vu(r)) {
    if (!al.has(t) && e.length == 2) {
      let [n, s] = e, i = $i.get(n);
      i || (i = /* @__PURE__ */ new Map(), $i.set(n, i)), i.set(s, t);
    }
    ka.set(t, e.reverse());
  }
}
function Wu(r) {
  return r >= yi && r < Ep;
}
function Cp(r, t) {
  if (r >= go && r < xp && t >= mo && t < Np)
    return yi + (r - go) * wo + (t - mo) * Ks;
  if (Wu(r) && t > yo && t < vp && (r - yi) % Ks == 0)
    return r + (t - yo);
  {
    let e = $i.get(r);
    return e && (e = e.get(t), e) ? e : -1;
  }
}
function Yu(r) {
  Ia || Pp();
  let t = [], e = [], n = !1;
  function s(i) {
    let o = Ia.get(i);
    o && (n = !0, i |= o), t.push(i);
  }
  for (let i of r)
    for (; ; ) {
      if (i < 128)
        t.push(i);
      else if (Wu(i)) {
        let o = i - yi, a = o / wo | 0, c = o % wo / Ks | 0, u = o % Ks;
        s(go + a), s(mo + c), u > 0 && s(yo + u);
      } else {
        let o = ka.get(i);
        o ? e.push(...o) : s(i);
      }
      if (!e.length) break;
      i = e.pop();
    }
  if (n && t.length > 1) {
    let i = ii(t[0]);
    for (let o = 1; o < t.length; o++) {
      let a = ii(t[o]);
      if (a == 0 || i <= a) {
        i = a;
        continue;
      }
      let c = o - 1;
      for (; ; ) {
        let u = t[c + 1];
        if (t[c + 1] = t[c], t[c] = u, !c || (i = ii(t[--c]), i <= a)) break;
      }
      i = ii(t[o]);
    }
  }
  return t;
}
function Bp(r) {
  let t = [], e = [], n = -1, s = 0;
  for (let i of r) {
    let o = ii(i), a = ju(i);
    if (n == -1)
      o == 0 ? n = a : t.push(a);
    else if (s > 0 && s >= o)
      o == 0 ? (t.push(n, ...e), e.length = 0, n = a) : e.push(a), s = o;
    else {
      let c = Cp(n, a);
      c >= 0 ? n = c : s == 0 && o == 0 ? (t.push(n), n = a) : (e.push(a), s = o);
    }
  }
  return n >= 0 && t.push(n, ...e), t;
}
function Zu(r) {
  return Yu(r).map(ju);
}
function Op(r) {
  return Bp(Yu(r));
}
const cl = 45, Xu = ".", qu = 65039, $u = 1, Ao = (r) => Array.from(r);
function wi(r, t) {
  return r.P.has(t) || r.Q.has(t);
}
class Ip extends Array {
  get is_emoji() {
    return !0;
  }
  // free tagging system
}
let Ra, tf, tr, Ta, ef, qr, ea, Hr, jn, ll, Sa;
function lc() {
  if (Ra) return;
  let r = Hu(ap);
  const t = () => gi(r), e = () => new Set(t()), n = (f, h) => h.forEach((p) => f.add(p));
  Ra = new Map(Vu(r)), tf = e(), tr = t(), Ta = new Set(t().map((f) => tr[f])), tr = new Set(tr), ef = e(), e();
  let s = Qu(r), i = r();
  const o = () => {
    let f = /* @__PURE__ */ new Set();
    return t().forEach((h) => n(f, s[h])), n(f, t()), f;
  };
  qr = mi((f) => {
    let h = mi(r).map((p) => p + 96);
    if (h.length) {
      let p = f >= i;
      h[0] -= 32, h = zs(h), p && (h = `Restricted[${h}]`);
      let w = o(), E = o(), y = !r();
      return { N: h, P: w, Q: E, M: y, R: p };
    }
  }), ea = e(), Hr = /* @__PURE__ */ new Map();
  let a = t().concat(Ao(ea)).sort((f, h) => f - h);
  a.forEach((f, h) => {
    let p = r(), w = a[h] = p ? a[h - p] : { V: [], M: /* @__PURE__ */ new Map() };
    w.V.push(f), ea.has(f) || Hr.set(f, w);
  });
  for (let { V: f, M: h } of new Set(Hr.values())) {
    let p = [];
    for (let E of f) {
      let y = qr.filter((N) => wi(N, E)), x = p.find(({ G: N }) => y.some((O) => N.has(O)));
      x || (x = { G: /* @__PURE__ */ new Set(), V: [] }, p.push(x)), x.V.push(E), n(x.G, y);
    }
    let w = p.flatMap((E) => Ao(E.G));
    for (let { G: E, V: y } of p) {
      let x = new Set(w.filter((N) => !E.has(N)));
      for (let N of y)
        h.set(N, x);
    }
  }
  jn = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set();
  const u = (f) => jn.has(f) ? c.add(f) : jn.add(f);
  for (let f of qr) {
    for (let h of f.P) u(h);
    for (let h of f.Q) u(h);
  }
  for (let f of jn)
    !Hr.has(f) && !c.has(f) && Hr.set(f, $u);
  n(jn, Zu(jn)), ll = gp(r).map((f) => Ip.from(f)).sort(wp), Sa = /* @__PURE__ */ new Map();
  for (let f of ll) {
    let h = [Sa];
    for (let p of f) {
      let w = h.map((E) => {
        let y = E.get(p);
        return y || (y = /* @__PURE__ */ new Map(), E.set(p, y)), y;
      });
      p === qu ? h.push(...w) : h = w;
    }
    for (let p of h)
      p.V = f;
  }
}
function uc(r) {
  return (nf(r) ? "" : `${fc(Go([r]))} `) + _u(r);
}
function fc(r) {
  return `"${r}"‎`;
}
function kp(r) {
  if (r.length >= 4 && r[2] == cl && r[3] == cl)
    throw new Error(`invalid label extension: "${zs(r.slice(0, 4))}"`);
}
function Rp(r) {
  for (let e = r.lastIndexOf(95); e > 0; )
    if (r[--e] !== 95)
      throw new Error("underscore allowed only at start");
}
function Tp(r) {
  let t = r[0], e = il.get(t);
  if (e) throw li(`leading ${e}`);
  let n = r.length, s = -1;
  for (let i = 1; i < n; i++) {
    t = r[i];
    let o = il.get(t);
    if (o) {
      if (s == i) throw li(`${e} + ${o}`);
      s = i + 1, e = o;
    }
  }
  if (s == n) throw li(`trailing ${e}`);
}
function Go(r, t = 1 / 0, e = _u) {
  let n = [];
  Sp(r[0]) && n.push("◌"), r.length > t && (t >>= 1, r = [...r.slice(0, t), 8230, ...r.slice(-t)]);
  let s = 0, i = r.length;
  for (let o = 0; o < i; o++) {
    let a = r[o];
    nf(a) && (n.push(zs(r.slice(s, o))), n.push(e(a)), s = o + 1);
  }
  return n.push(zs(r.slice(s, i))), n.join("");
}
function Sp(r) {
  return lc(), tr.has(r);
}
function nf(r) {
  return lc(), ef.has(r);
}
function Up(r) {
  return Mp(Fp(r, Op, Qp));
}
function Fp(r, t, e) {
  if (!r) return [];
  lc();
  let n = 0;
  return r.split(Xu).map((s) => {
    let i = yp(s), o = {
      input: i,
      offset: n
      // codepoint, not substring!
    };
    n += i.length + 1;
    try {
      let a = o.tokens = Hp(i, t, e), c = a.length, u;
      if (!c)
        throw new Error("empty label");
      let f = o.output = a.flat();
      if (Rp(f), !(o.emoji = c > 1 || a[0].is_emoji) && f.every((p) => p < 128))
        kp(f), u = "ASCII";
      else {
        let p = a.flatMap((w) => w.is_emoji ? [] : w);
        if (!p.length)
          u = "Emoji";
        else {
          if (tr.has(f[0])) throw li("leading combining mark");
          for (let y = 1; y < c; y++) {
            let x = a[y];
            if (!x.is_emoji && tr.has(x[0]))
              throw li(`emoji + combining mark: "${zs(a[y - 1])} + ${Go([x[0]])}"`);
          }
          Tp(f);
          let w = Ao(new Set(p)), [E] = Dp(w);
          Gp(E, p), Lp(E, w), u = E.N;
        }
      }
      o.type = u;
    } catch (a) {
      o.error = a;
    }
    return o;
  });
}
function Lp(r, t) {
  let e, n = [];
  for (let s of t) {
    let i = Hr.get(s);
    if (i === $u) return;
    if (i) {
      let o = i.M.get(s);
      if (e = e ? e.filter((a) => o.has(a)) : Ao(o), !e.length) return;
    } else
      n.push(s);
  }
  if (e) {
    for (let s of e)
      if (n.every((i) => wi(s, i)))
        throw new Error(`whole-script confusable: ${r.N}/${s.N}`);
  }
}
function Dp(r) {
  let t = qr;
  for (let e of r) {
    let n = t.filter((s) => wi(s, e));
    if (!n.length)
      throw qr.some((s) => wi(s, e)) ? sf(t[0], e) : rf(e);
    if (t = n, n.length == 1) break;
  }
  return t;
}
function Mp(r) {
  return r.map(({ input: t, error: e, output: n }) => {
    if (e) {
      let s = e.message;
      throw new Error(r.length == 1 ? s : `Invalid label ${fc(Go(t, 63))}: ${s}`);
    }
    return zs(n);
  }).join(Xu);
}
function rf(r) {
  return new Error(`disallowed character: ${uc(r)}`);
}
function sf(r, t) {
  let e = uc(t), n = qr.find((s) => s.P.has(t));
  return n && (e = `${n.N} ${e}`), new Error(`illegal mixture: ${r.N} + ${e}`);
}
function li(r) {
  return new Error(`illegal placement: ${r}`);
}
function Gp(r, t) {
  for (let e of t)
    if (!wi(r, e))
      throw sf(r, e);
  if (r.M) {
    let e = Zu(t);
    for (let n = 1, s = e.length; n < s; n++)
      if (Ta.has(e[n])) {
        let i = n + 1;
        for (let o; i < s && Ta.has(o = e[i]); i++)
          for (let a = n; a < i; a++)
            if (e[a] == o)
              throw new Error(`duplicate non-spacing marks: ${uc(o)}`);
        if (i - n > ol)
          throw new Error(`excessive non-spacing marks: ${fc(Go(e.slice(n - 1, i)))} (${i - n}/${ol})`);
        n = i;
      }
  }
}
function Hp(r, t, e) {
  let n = [], s = [];
  for (r = r.slice().reverse(); r.length; ) {
    let i = Vp(r);
    if (i)
      s.length && (n.push(t(s)), s = []), n.push(e(i));
    else {
      let o = r.pop();
      if (jn.has(o))
        s.push(o);
      else {
        let a = Ra.get(o);
        if (a)
          s.push(...a);
        else if (!tf.has(o))
          throw rf(o);
      }
    }
  }
  return s.length && n.push(t(s)), n;
}
function Qp(r) {
  return r.filter((t) => t != qu);
}
function Vp(r, t) {
  let e = Sa, n, s = r.length;
  for (; s && (e = e.get(r[--s]), !!e); ) {
    let { V: i } = e;
    i && (n = i, r.length = s);
  }
  return n;
}
const of = new Uint8Array(32);
of.fill(0);
function ul(r) {
  return m(r.length !== 0, "invalid ENS name; empty component", "comp", r), r;
}
function af(r) {
  const t = ln(Jp(r)), e = [];
  if (r.length === 0)
    return e;
  let n = 0;
  for (let s = 0; s < t.length; s++)
    t[s] === 46 && (e.push(ul(t.slice(n, s))), n = s + 1);
  return m(n < t.length, "invalid ENS name; empty component", "name", r), e.push(ul(t.slice(n))), e;
}
function Jp(r) {
  try {
    if (r.length === 0)
      throw new Error("empty label");
    return Up(r);
  } catch (t) {
    m(!1, `invalid ENS name (${t.message})`, "name", r);
  }
}
function Ua(r) {
  m(typeof r == "string", "invalid ENS name; not a string", "name", r), m(r.length, "invalid ENS name (empty label)", "name", r);
  let t = of;
  const e = af(r);
  for (; e.length; )
    t = wt(yt([t, wt(e.pop())]));
  return R(t);
}
function _p(r, t) {
  const e = t;
  return m(e <= 255, "DNS encoded label cannot exceed 255", "length", e), R(yt(af(r).map((n) => {
    m(n.length <= e, `label ${JSON.stringify(r)} exceeds ${e} bytes`, "name", r);
    const s = new Uint8Array(n.length + 1);
    return s.set(n, 1), s[0] = s.length - 1, s;
  }))) + "00";
}
function na(r, t) {
  return {
    address: nt(r),
    storageKeys: t.map((e, n) => (m(st(e, 32), "invalid slot", `storageKeys[${n}]`, e), e.toLowerCase()))
  };
}
function Tr(r) {
  if (Array.isArray(r))
    return r.map((e, n) => Array.isArray(e) ? (m(e.length === 2, "invalid slot set", `value[${n}]`, e), na(e[0], e[1])) : (m(e != null && typeof e == "object", "invalid address-slot set", "value", r), na(e.address, e.storageKeys)));
  m(r != null && typeof r == "object", "invalid access list", "value", r);
  const t = Object.keys(r).map((e) => {
    const n = r[e].reduce((s, i) => (s[i] = !0, s), {});
    return na(e, Object.keys(n).sort());
  });
  return t.sort((e, n) => e.address.localeCompare(n.address)), t;
}
function zp(r) {
  let t;
  return typeof r == "string" ? t = pi.computePublicKey(r, !1) : t = r.publicKey, nt(wt("0x" + t.substring(4)).substring(26));
}
function Kp(r, t) {
  return zp(pi.recoverPublicKey(r, t));
}
const bt = BigInt(0), jp = BigInt(2), Wp = BigInt(27), Yp = BigInt(28), Zp = BigInt(35), Xp = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), ra = 4096 * 32;
function fl(r, t) {
  let e = r.toString(16);
  for (; e.length < 2; )
    e = "0" + e;
  return e += Ys(t).substring(4), "0x" + e;
}
function Ho(r) {
  return r === "0x" ? null : nt(r);
}
function hc(r, t) {
  try {
    return Tr(r);
  } catch (e) {
    m(!1, e.message, t, r);
  }
}
function Li(r, t) {
  return r === "0x" ? 0 : Q(r, t);
}
function mt(r, t) {
  if (r === "0x")
    return bt;
  const e = S(r, t);
  return m(e <= Xp, "value exceeds uint size", t, e), e;
}
function it(r, t) {
  const e = S(r, "value"), n = Dt(e);
  return m(n.length <= 32, "value too large", `tx.${t}`, e), n;
}
function dc(r) {
  return Tr(r).map((t) => [t.address, t.storageKeys]);
}
function qp(r, t) {
  m(Array.isArray(r), `invalid ${t}`, "value", r);
  for (let e = 0; e < r.length; e++)
    m(st(r[e], 32), "invalid ${ param } hash", `value[${e}]`, r[e]);
  return r;
}
function $p(r) {
  const t = Fo(r);
  m(Array.isArray(t) && (t.length === 9 || t.length === 6), "invalid field count for legacy transaction", "data", r);
  const e = {
    type: 0,
    nonce: Li(t[0], "nonce"),
    gasPrice: mt(t[1], "gasPrice"),
    gasLimit: mt(t[2], "gasLimit"),
    to: Ho(t[3]),
    value: mt(t[4], "value"),
    data: R(t[5]),
    chainId: bt
  };
  if (t.length === 6)
    return e;
  const n = mt(t[6], "v"), s = mt(t[7], "r"), i = mt(t[8], "s");
  if (s === bt && i === bt)
    e.chainId = n;
  else {
    let o = (n - Zp) / jp;
    o < bt && (o = bt), e.chainId = o, m(o !== bt || n === Wp || n === Yp, "non-canonical legacy v", "v", t[6]), e.signature = be.from({
      r: Pr(t[7], 32),
      s: Pr(t[8], 32),
      v: n
    });
  }
  return e;
}
function tg(r, t) {
  const e = [
    it(r.nonce, "nonce"),
    it(r.gasPrice || 0, "gasPrice"),
    it(r.gasLimit, "gasLimit"),
    r.to || "0x",
    it(r.value, "value"),
    r.data
  ];
  let n = bt;
  if (r.chainId != bt)
    n = S(r.chainId, "tx.chainId"), m(!t || t.networkV == null || t.legacyChainId === n, "tx.chainId/sig.v mismatch", "sig", t);
  else if (r.signature) {
    const i = r.signature.legacyChainId;
    i != null && (n = i);
  }
  if (!t)
    return n !== bt && (e.push(Dt(n)), e.push("0x"), e.push("0x")), Cr(e);
  let s = BigInt(27 + t.yParity);
  return n !== bt ? s = be.getChainIdV(n, t.v) : BigInt(t.v) !== s && m(!1, "tx.chainId/sig.v mismatch", "sig", t), e.push(Dt(s)), e.push(Dt(t.r)), e.push(Dt(t.s)), Cr(e);
}
function pc(r, t) {
  let e;
  try {
    if (e = Li(t[0], "yParity"), e !== 0 && e !== 1)
      throw new Error("bad yParity");
  } catch {
    m(!1, "invalid yParity", "yParity", t[0]);
  }
  const n = Pr(t[1], 32), s = Pr(t[2], 32), i = be.from({ r: n, s, yParity: e });
  r.signature = i;
}
function eg(r) {
  const t = Fo(Z(r).slice(1));
  m(Array.isArray(t) && (t.length === 9 || t.length === 12), "invalid field count for transaction type: 2", "data", R(r));
  const e = {
    type: 2,
    chainId: mt(t[0], "chainId"),
    nonce: Li(t[1], "nonce"),
    maxPriorityFeePerGas: mt(t[2], "maxPriorityFeePerGas"),
    maxFeePerGas: mt(t[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: mt(t[4], "gasLimit"),
    to: Ho(t[5]),
    value: mt(t[6], "value"),
    data: R(t[7]),
    accessList: hc(t[8], "accessList")
  };
  return t.length === 9 || pc(e, t.slice(9)), e;
}
function ng(r, t) {
  const e = [
    it(r.chainId, "chainId"),
    it(r.nonce, "nonce"),
    it(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    it(r.maxFeePerGas || 0, "maxFeePerGas"),
    it(r.gasLimit, "gasLimit"),
    r.to || "0x",
    it(r.value, "value"),
    r.data,
    dc(r.accessList || [])
  ];
  return t && (e.push(it(t.yParity, "yParity")), e.push(Dt(t.r)), e.push(Dt(t.s))), yt(["0x02", Cr(e)]);
}
function rg(r) {
  const t = Fo(Z(r).slice(1));
  m(Array.isArray(t) && (t.length === 8 || t.length === 11), "invalid field count for transaction type: 1", "data", R(r));
  const e = {
    type: 1,
    chainId: mt(t[0], "chainId"),
    nonce: Li(t[1], "nonce"),
    gasPrice: mt(t[2], "gasPrice"),
    gasLimit: mt(t[3], "gasLimit"),
    to: Ho(t[4]),
    value: mt(t[5], "value"),
    data: R(t[6]),
    accessList: hc(t[7], "accessList")
  };
  return t.length === 8 || pc(e, t.slice(8)), e;
}
function sg(r, t) {
  const e = [
    it(r.chainId, "chainId"),
    it(r.nonce, "nonce"),
    it(r.gasPrice || 0, "gasPrice"),
    it(r.gasLimit, "gasLimit"),
    r.to || "0x",
    it(r.value, "value"),
    r.data,
    dc(r.accessList || [])
  ];
  return t && (e.push(it(t.yParity, "recoveryParam")), e.push(Dt(t.r)), e.push(Dt(t.s))), yt(["0x01", Cr(e)]);
}
function ig(r) {
  let t = Fo(Z(r).slice(1)), e = "3", n = null;
  if (t.length === 4 && Array.isArray(t[0])) {
    e = "3 (network format)";
    const i = t[1], o = t[2], a = t[3];
    m(Array.isArray(i), "invalid network format: blobs not an array", "fields[1]", i), m(Array.isArray(o), "invalid network format: commitments not an array", "fields[2]", o), m(Array.isArray(a), "invalid network format: proofs not an array", "fields[3]", a), m(i.length === o.length, "invalid network format: blobs/commitments length mismatch", "fields", t), m(i.length === a.length, "invalid network format: blobs/proofs length mismatch", "fields", t), n = [];
    for (let c = 0; c < t[1].length; c++)
      n.push({
        data: i[c],
        commitment: o[c],
        proof: a[c]
      });
    t = t[0];
  }
  m(Array.isArray(t) && (t.length === 11 || t.length === 14), `invalid field count for transaction type: ${e}`, "data", R(r));
  const s = {
    type: 3,
    chainId: mt(t[0], "chainId"),
    nonce: Li(t[1], "nonce"),
    maxPriorityFeePerGas: mt(t[2], "maxPriorityFeePerGas"),
    maxFeePerGas: mt(t[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: mt(t[4], "gasLimit"),
    to: Ho(t[5]),
    value: mt(t[6], "value"),
    data: R(t[7]),
    accessList: hc(t[8], "accessList"),
    maxFeePerBlobGas: mt(t[9], "maxFeePerBlobGas"),
    blobVersionedHashes: t[10]
  };
  n && (s.blobs = n), m(s.to != null, `invalid address for transaction type: ${e}`, "data", r), m(Array.isArray(s.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", r);
  for (let i = 0; i < s.blobVersionedHashes.length; i++)
    m(st(s.blobVersionedHashes[i], 32), `invalid blobVersionedHash at index ${i}: must be length 32`, "data", r);
  return t.length === 11 || pc(s, t.slice(11)), s;
}
function og(r, t, e) {
  const n = [
    it(r.chainId, "chainId"),
    it(r.nonce, "nonce"),
    it(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    it(r.maxFeePerGas || 0, "maxFeePerGas"),
    it(r.gasLimit, "gasLimit"),
    r.to || di,
    it(r.value, "value"),
    r.data,
    dc(r.accessList || []),
    it(r.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
    qp(r.blobVersionedHashes || [], "blobVersionedHashes")
  ];
  return t && (n.push(it(t.yParity, "yParity")), n.push(Dt(t.r)), n.push(Dt(t.s)), e) ? yt([
    "0x03",
    Cr([
      n,
      e.map((s) => s.data),
      e.map((s) => s.commitment),
      e.map((s) => s.proof)
    ])
  ]) : yt(["0x03", Cr(n)]);
}
var Oe, fs, hs, ds, ps, gs, ms, ys, ws, As, bs, Es, dr, Pn, qe, Cn, xs, to;
const Ke = class Ke {
  /**
   *  Creates a new Transaction with default values.
   */
  constructor() {
    b(this, xs);
    b(this, Oe);
    b(this, fs);
    b(this, hs);
    b(this, ds);
    b(this, ps);
    b(this, gs);
    b(this, ms);
    b(this, ys);
    b(this, ws);
    b(this, As);
    b(this, bs);
    b(this, Es);
    b(this, dr);
    b(this, Pn);
    b(this, qe);
    b(this, Cn);
    d(this, Oe, null), d(this, fs, null), d(this, ds, 0), d(this, ps, bt), d(this, gs, null), d(this, ms, null), d(this, ys, null), d(this, hs, "0x"), d(this, ws, bt), d(this, As, bt), d(this, bs, null), d(this, Es, null), d(this, dr, null), d(this, Pn, null), d(this, Cn, null), d(this, qe, null);
  }
  /**
   *  The transaction type.
   *
   *  If null, the type will be automatically inferred based on
   *  explicit properties.
   */
  get type() {
    return l(this, Oe);
  }
  set type(t) {
    switch (t) {
      case null:
        d(this, Oe, null);
        break;
      case 0:
      case "legacy":
        d(this, Oe, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        d(this, Oe, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        d(this, Oe, 2);
        break;
      case 3:
      case "cancun":
      case "eip-4844":
        d(this, Oe, 3);
        break;
      default:
        m(!1, "unsupported transaction type", "type", t);
    }
  }
  /**
   *  The name of the transaction type.
   */
  get typeName() {
    switch (this.type) {
      case 0:
        return "legacy";
      case 1:
        return "eip-2930";
      case 2:
        return "eip-1559";
      case 3:
        return "eip-4844";
    }
    return null;
  }
  /**
   *  The ``to`` address for the transaction or ``null`` if the
   *  transaction is an ``init`` transaction.
   */
  get to() {
    const t = l(this, fs);
    return t == null && this.type === 3 ? di : t;
  }
  set to(t) {
    d(this, fs, t == null ? null : nt(t));
  }
  /**
   *  The transaction nonce.
   */
  get nonce() {
    return l(this, ds);
  }
  set nonce(t) {
    d(this, ds, Q(t, "value"));
  }
  /**
   *  The gas limit.
   */
  get gasLimit() {
    return l(this, ps);
  }
  set gasLimit(t) {
    d(this, ps, S(t));
  }
  /**
   *  The gas price.
   *
   *  On legacy networks this defines the fee that will be paid. On
   *  EIP-1559 networks, this should be ``null``.
   */
  get gasPrice() {
    const t = l(this, gs);
    return t == null && (this.type === 0 || this.type === 1) ? bt : t;
  }
  set gasPrice(t) {
    d(this, gs, t == null ? null : S(t, "gasPrice"));
  }
  /**
   *  The maximum priority fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxPriorityFeePerGas() {
    const t = l(this, ms);
    return t ?? (this.type === 2 || this.type === 3 ? bt : null);
  }
  set maxPriorityFeePerGas(t) {
    d(this, ms, t == null ? null : S(t, "maxPriorityFeePerGas"));
  }
  /**
   *  The maximum total fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxFeePerGas() {
    const t = l(this, ys);
    return t ?? (this.type === 2 || this.type === 3 ? bt : null);
  }
  set maxFeePerGas(t) {
    d(this, ys, t == null ? null : S(t, "maxFeePerGas"));
  }
  /**
   *  The transaction data. For ``init`` transactions this is the
   *  deployment code.
   */
  get data() {
    return l(this, hs);
  }
  set data(t) {
    d(this, hs, R(t));
  }
  /**
   *  The amount of ether (in wei) to send in this transactions.
   */
  get value() {
    return l(this, ws);
  }
  set value(t) {
    d(this, ws, S(t, "value"));
  }
  /**
   *  The chain ID this transaction is valid on.
   */
  get chainId() {
    return l(this, As);
  }
  set chainId(t) {
    d(this, As, S(t));
  }
  /**
   *  If signed, the signature for this transaction.
   */
  get signature() {
    return l(this, bs) || null;
  }
  set signature(t) {
    d(this, bs, t == null ? null : be.from(t));
  }
  /**
   *  The access list.
   *
   *  An access list permits discounted (but pre-paid) access to
   *  bytecode and state variable access within contract execution.
   */
  get accessList() {
    const t = l(this, Es) || null;
    return t ?? (this.type === 1 || this.type === 2 || this.type === 3 ? [] : null);
  }
  set accessList(t) {
    d(this, Es, t == null ? null : Tr(t));
  }
  /**
   *  The max fee per blob gas for Cancun transactions.
   */
  get maxFeePerBlobGas() {
    const t = l(this, dr);
    return t == null && this.type === 3 ? bt : t;
  }
  set maxFeePerBlobGas(t) {
    d(this, dr, t == null ? null : S(t, "maxFeePerBlobGas"));
  }
  /**
   *  The BLOb versioned hashes for Cancun transactions.
   */
  get blobVersionedHashes() {
    let t = l(this, Pn);
    return t == null && this.type === 3 ? [] : t;
  }
  set blobVersionedHashes(t) {
    if (t != null) {
      m(Array.isArray(t), "blobVersionedHashes must be an Array", "value", t), t = t.slice();
      for (let e = 0; e < t.length; e++)
        m(st(t[e], 32), "invalid blobVersionedHash", `value[${e}]`, t[e]);
    }
    d(this, Pn, t);
  }
  /**
   *  The BLObs for the Transaction, if any.
   *
   *  If ``blobs`` is non-``null``, then the [[seriailized]]
   *  will return the network formatted sidecar, otherwise it
   *  will return the standard [[link-eip-2718]] payload. The
   *  [[unsignedSerialized]] is unaffected regardless.
   *
   *  When setting ``blobs``, either fully valid [[Blob]] objects
   *  may be specified (i.e. correctly padded, with correct
   *  committments and proofs) or a raw [[BytesLike]] may
   *  be provided.
   *
   *  If raw [[BytesLike]] are provided, the [[kzg]] property **must**
   *  be already set. The blob will be correctly padded and the
   *  [[KzgLibrary]] will be used to compute the committment and
   *  proof for the blob.
   *
   *  A BLOb is a sequence of field elements, each of which must
   *  be within the BLS field modulo, so some additional processing
   *  may be required to encode arbitrary data to ensure each 32 byte
   *  field is within the valid range.
   *
   *  Setting this automatically populates [[blobVersionedHashes]],
   *  overwriting any existing values. Setting this to ``null``
   *  does **not** remove the [[blobVersionedHashes]], leaving them
   *  present.
   */
  get blobs() {
    return l(this, Cn) == null ? null : l(this, Cn).map((t) => Object.assign({}, t));
  }
  set blobs(t) {
    if (t == null) {
      d(this, Cn, null);
      return;
    }
    const e = [], n = [];
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      if ($a(i)) {
        v(l(this, qe), "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
          operation: "set blobs()"
        });
        let o = Z(i);
        if (m(o.length <= ra, "blob is too large", `blobs[${s}]`, i), o.length !== ra) {
          const u = new Uint8Array(ra);
          u.set(o), o = u;
        }
        const a = l(this, qe).blobToKzgCommitment(o), c = R(l(this, qe).computeBlobKzgProof(o, a));
        e.push({
          data: R(o),
          commitment: R(a),
          proof: c
        }), n.push(fl(1, a));
      } else {
        const o = R(i.commitment);
        e.push({
          data: R(i.data),
          commitment: o,
          proof: R(i.proof)
        }), n.push(fl(1, o));
      }
    }
    d(this, Cn, e), d(this, Pn, n);
  }
  get kzg() {
    return l(this, qe);
  }
  set kzg(t) {
    d(this, qe, t);
  }
  /**
   *  The transaction hash, if signed. Otherwise, ``null``.
   */
  get hash() {
    return this.signature == null ? null : wt(P(this, xs, to).call(this, !0, !1));
  }
  /**
   *  The pre-image hash of this transaction.
   *
   *  This is the digest that a [[Signer]] must sign to authorize
   *  this transaction.
   */
  get unsignedHash() {
    return wt(this.unsignedSerialized);
  }
  /**
   *  The sending address, if signed. Otherwise, ``null``.
   */
  get from() {
    return this.signature == null ? null : Kp(this.unsignedHash, this.signature);
  }
  /**
   *  The public key of the sender, if signed. Otherwise, ``null``.
   */
  get fromPublicKey() {
    return this.signature == null ? null : pi.recoverPublicKey(this.unsignedHash, this.signature);
  }
  /**
   *  Returns true if signed.
   *
   *  This provides a Type Guard that properties requiring a signed
   *  transaction are non-null.
   */
  isSigned() {
    return this.signature != null;
  }
  /**
   *  The serialized transaction.
   *
   *  This throws if the transaction is unsigned. For the pre-image,
   *  use [[unsignedSerialized]].
   */
  get serialized() {
    return P(this, xs, to).call(this, !0, !0);
  }
  /**
   *  The transaction pre-image.
   *
   *  The hash of this is the digest which needs to be signed to
   *  authorize this transaction.
   */
  get unsignedSerialized() {
    return P(this, xs, to).call(this, !1, !1);
  }
  /**
   *  Return the most "likely" type; currently the highest
   *  supported transaction type.
   */
  inferType() {
    const t = this.inferTypes();
    return t.indexOf(2) >= 0 ? 2 : t.pop();
  }
  /**
   *  Validates the explicit properties and returns a list of compatible
   *  transaction types.
   */
  inferTypes() {
    const t = this.gasPrice != null, e = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null, n = this.accessList != null, s = l(this, dr) != null || l(this, Pn);
    this.maxFeePerGas != null && this.maxPriorityFeePerGas != null && v(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this }), v(!e || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this }), v(this.type !== 0 || !n, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
    const i = [];
    return this.type != null ? i.push(this.type) : e ? i.push(2) : t ? (i.push(1), n || i.push(0)) : n ? (i.push(1), i.push(2)) : (s && this.to || (i.push(0), i.push(1), i.push(2)), i.push(3)), i.sort(), i;
  }
  /**
   *  Returns true if this transaction is a legacy transaction (i.e.
   *  ``type === 0``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if this transaction is berlin hardform transaction (i.e.
   *  ``type === 1``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if this transaction is london hardform transaction (i.e.
   *  ``type === 2``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns true if this transaction is an [[link-eip-4844]] BLOB
   *  transaction.
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isCancun() {
    return this.type === 3;
  }
  /**
   *  Create a copy of this transaciton.
   */
  clone() {
    return Ke.from(this);
  }
  /**
   *  Return a JSON-friendly object.
   */
  toJSON() {
    const t = (e) => e == null ? null : e.toString();
    return {
      type: this.type,
      to: this.to,
      //            from: this.from,
      data: this.data,
      nonce: this.nonce,
      gasLimit: t(this.gasLimit),
      gasPrice: t(this.gasPrice),
      maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
      maxFeePerGas: t(this.maxFeePerGas),
      value: t(this.value),
      chainId: t(this.chainId),
      sig: this.signature ? this.signature.toJSON() : null,
      accessList: this.accessList
    };
  }
  /**
   *  Create a **Transaction** from a serialized transaction or a
   *  Transaction-like object.
   */
  static from(t) {
    if (t == null)
      return new Ke();
    if (typeof t == "string") {
      const n = Z(t);
      if (n[0] >= 127)
        return Ke.from($p(n));
      switch (n[0]) {
        case 1:
          return Ke.from(rg(n));
        case 2:
          return Ke.from(eg(n));
        case 3:
          return Ke.from(ig(n));
      }
      v(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
    }
    const e = new Ke();
    return t.type != null && (e.type = t.type), t.to != null && (e.to = t.to), t.nonce != null && (e.nonce = t.nonce), t.gasLimit != null && (e.gasLimit = t.gasLimit), t.gasPrice != null && (e.gasPrice = t.gasPrice), t.maxPriorityFeePerGas != null && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas), t.maxFeePerGas != null && (e.maxFeePerGas = t.maxFeePerGas), t.maxFeePerBlobGas != null && (e.maxFeePerBlobGas = t.maxFeePerBlobGas), t.data != null && (e.data = t.data), t.value != null && (e.value = t.value), t.chainId != null && (e.chainId = t.chainId), t.signature != null && (e.signature = be.from(t.signature)), t.accessList != null && (e.accessList = t.accessList), t.blobVersionedHashes != null && (e.blobVersionedHashes = t.blobVersionedHashes), t.kzg != null && (e.kzg = t.kzg), t.blobs != null && (e.blobs = t.blobs), t.hash != null && (m(e.isSigned(), "unsigned transaction cannot define '.hash'", "tx", t), m(e.hash === t.hash, "hash mismatch", "tx", t)), t.from != null && (m(e.isSigned(), "unsigned transaction cannot define '.from'", "tx", t), m(e.from.toLowerCase() === (t.from || "").toLowerCase(), "from mismatch", "tx", t)), e;
  }
};
Oe = new WeakMap(), fs = new WeakMap(), hs = new WeakMap(), ds = new WeakMap(), ps = new WeakMap(), gs = new WeakMap(), ms = new WeakMap(), ys = new WeakMap(), ws = new WeakMap(), As = new WeakMap(), bs = new WeakMap(), Es = new WeakMap(), dr = new WeakMap(), Pn = new WeakMap(), qe = new WeakMap(), Cn = new WeakMap(), xs = new WeakSet(), to = function(t, e) {
  v(!t || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  const n = t ? this.signature : null;
  switch (this.inferType()) {
    case 0:
      return tg(this, n);
    case 1:
      return sg(this, n);
    case 2:
      return ng(this, n);
    case 3:
      return og(this, n, e ? this.blobs : null);
  }
  v(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
};
let bo = Ke;
const cf = new Uint8Array(32);
cf.fill(0);
const ag = BigInt(-1), lf = BigInt(0), uf = BigInt(1), cg = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function lg(r) {
  const t = Z(r), e = t.length % 32;
  return e ? yt([t, cf.slice(e)]) : R(t);
}
const ug = Qn(uf, 32), fg = Qn(lf, 32), hl = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, sa = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function dl(r) {
  return function(t) {
    return m(typeof t == "string", `invalid domain value for ${JSON.stringify(r)}`, `domain.${r}`, t), t;
  };
}
const hg = {
  name: dl("name"),
  version: dl("version"),
  chainId: function(r) {
    const t = S(r, "domain.chainId");
    return m(t >= 0, "invalid chain ID", "domain.chainId", r), Number.isSafeInteger(t) ? Number(t) : zr(t);
  },
  verifyingContract: function(r) {
    try {
      return nt(r).toLowerCase();
    } catch {
    }
    m(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", r);
  },
  salt: function(r) {
    const t = Z(r, "domain.salt");
    return m(t.length === 32, 'invalid domain value "salt"', "domain.salt", r), R(t);
  }
};
function ia(r) {
  {
    const t = r.match(/^(u?)int(\d+)$/);
    if (t) {
      const e = t[1] === "", n = parseInt(t[2]);
      m(n % 8 === 0 && n !== 0 && n <= 256 && t[2] === String(n), "invalid numeric width", "type", r);
      const s = qn(cg, e ? n - 1 : n), i = e ? (s + uf) * ag : lf;
      return function(o) {
        const a = S(o, "value");
        return m(a >= i && a <= s, `value out-of-bounds for ${r}`, "value", a), Qn(e ? Yl(a, 256) : a, 32);
      };
    }
  }
  {
    const t = r.match(/^bytes(\d+)$/);
    if (t) {
      const e = parseInt(t[1]);
      return m(e !== 0 && e <= 32 && t[1] === String(e), "invalid bytes width", "type", r), function(n) {
        const s = Z(n);
        return m(s.length === e, `invalid length for ${r}`, "value", n), lg(n);
      };
    }
  }
  switch (r) {
    case "address":
      return function(t) {
        return Pr(nt(t), 32);
      };
    case "bool":
      return function(t) {
        return t ? ug : fg;
      };
    case "bytes":
      return function(t) {
        return wt(t);
      };
    case "string":
      return function(t) {
        return Br(t);
      };
  }
  return null;
}
function pl(r, t) {
  return `${r}(${t.map(({ name: e, type: n }) => n + " " + e).join(",")})`;
}
function Wi(r) {
  const t = r.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
  return t ? {
    base: t[1],
    index: t[2] + t[4],
    array: {
      base: t[1],
      prefix: t[1] + t[2],
      count: t[5] ? parseInt(t[5]) : -1
    }
  } : { base: r };
}
var Pi, $e, Ns, Co, ff;
const re = class re {
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   *
   *  This performs all necessary checking that types are valid and
   *  do not violate the [[link-eip-712]] structural constraints as
   *  well as computes the [[primaryType]].
   */
  constructor(t) {
    b(this, Co);
    /**
     *  The primary type for the structured [[types]].
     *
     *  This is derived automatically from the [[types]], since no
     *  recursion is possible, once the DAG for the types is consturcted
     *  internally, the primary type must be the only remaining type with
     *  no parent nodes.
     */
    A(this, "primaryType");
    b(this, Pi);
    b(this, $e);
    b(this, Ns);
    d(this, $e, /* @__PURE__ */ new Map()), d(this, Ns, /* @__PURE__ */ new Map());
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = {};
    Object.keys(t).forEach((c) => {
      i[c] = t[c].map(({ name: u, type: f }) => {
        let { base: h, index: p } = Wi(f);
        return h === "int" && !t.int && (h = "int256"), h === "uint" && !t.uint && (h = "uint256"), { name: u, type: h + (p || "") };
      }), e.set(c, /* @__PURE__ */ new Set()), n.set(c, []), s.set(c, /* @__PURE__ */ new Set());
    }), d(this, Pi, JSON.stringify(i));
    for (const c in i) {
      const u = /* @__PURE__ */ new Set();
      for (const f of i[c]) {
        m(!u.has(f.name), `duplicate variable name ${JSON.stringify(f.name)} in ${JSON.stringify(c)}`, "types", t), u.add(f.name);
        const h = Wi(f.type).base;
        m(h !== c, `circular type reference to ${JSON.stringify(h)}`, "types", t), !ia(h) && (m(n.has(h), `unknown type ${JSON.stringify(h)}`, "types", t), n.get(h).push(c), e.get(c).add(h));
      }
    }
    const o = Array.from(n.keys()).filter((c) => n.get(c).length === 0);
    m(o.length !== 0, "missing primary type", "types", t), m(o.length === 1, `ambiguous primary types or unused types: ${o.map((c) => JSON.stringify(c)).join(", ")}`, "types", t), H(this, { primaryType: o[0] });
    function a(c, u) {
      m(!u.has(c), `circular type reference to ${JSON.stringify(c)}`, "types", t), u.add(c);
      for (const f of e.get(c))
        if (n.has(f)) {
          a(f, u);
          for (const h of u)
            s.get(h).add(f);
        }
      u.delete(c);
    }
    a(this.primaryType, /* @__PURE__ */ new Set());
    for (const [c, u] of s) {
      const f = Array.from(u);
      f.sort(), l(this, $e).set(c, pl(c, i[c]) + f.map((h) => pl(h, i[h])).join(""));
    }
  }
  /**
   *  The types.
   */
  get types() {
    return JSON.parse(l(this, Pi));
  }
  /**
   *  Returnthe encoder for the specific %%type%%.
   */
  getEncoder(t) {
    let e = l(this, Ns).get(t);
    return e || (e = P(this, Co, ff).call(this, t), l(this, Ns).set(t, e)), e;
  }
  /**
   *  Return the full type for %%name%%.
   */
  encodeType(t) {
    const e = l(this, $e).get(t);
    return m(e, `unknown type: ${JSON.stringify(t)}`, "name", t), e;
  }
  /**
   *  Return the encoded %%value%% for the %%type%%.
   */
  encodeData(t, e) {
    return this.getEncoder(t)(e);
  }
  /**
   *  Returns the hash of %%value%% for the type of %%name%%.
   */
  hashStruct(t, e) {
    return wt(this.encodeData(t, e));
  }
  /**
   *  Return the fulled encoded %%value%% for the [[types]].
   */
  encode(t) {
    return this.encodeData(this.primaryType, t);
  }
  /**
   *  Return the hash of the fully encoded %%value%% for the [[types]].
   */
  hash(t) {
    return this.hashStruct(this.primaryType, t);
  }
  /**
   *  @_ignore:
   */
  _visit(t, e, n) {
    if (ia(t))
      return n(t, e);
    const s = Wi(t).array;
    if (s)
      return m(s.count === -1 || s.count === e.length, `array length mismatch; expected length ${s.count}`, "value", e), e.map((o) => this._visit(s.prefix, o, n));
    const i = this.types[t];
    if (i)
      return i.reduce((o, { name: a, type: c }) => (o[a] = this._visit(c, e[a], n), o), {});
    m(!1, `unknown type: ${t}`, "type", t);
  }
  /**
   *  Call %%calback%% for each value in %%value%%, passing the type and
   *  component within %%value%%.
   *
   *  This is useful for replacing addresses or other transformation that
   *  may be desired on each component, based on its type.
   */
  visit(t, e) {
    return this._visit(this.primaryType, t, e);
  }
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   */
  static from(t) {
    return new re(t);
  }
  /**
   *  Return the primary type for %%types%%.
   */
  static getPrimaryType(t) {
    return re.from(t).primaryType;
  }
  /**
   *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
   */
  static hashStruct(t, e, n) {
    return re.from(e).hashStruct(t, n);
  }
  /**
   *  Return the domain hash for %%domain%%.
   */
  static hashDomain(t) {
    const e = [];
    for (const n in t) {
      if (t[n] == null)
        continue;
      const s = hl[n];
      m(s, `invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", t), e.push({ name: n, type: s });
    }
    return e.sort((n, s) => sa.indexOf(n.name) - sa.indexOf(s.name)), re.hashStruct("EIP712Domain", { EIP712Domain: e }, t);
  }
  /**
   *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static encode(t, e, n) {
    return yt([
      "0x1901",
      re.hashDomain(t),
      re.from(e).hash(n)
    ]);
  }
  /**
   *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static hash(t, e, n) {
    return wt(re.encode(t, e, n));
  }
  // Replaces all address types with ENS names with their looked up address
  /**
   * Resolves to the value from resolving all addresses in %%value%% for
   * %%types%% and the %%domain%%.
   */
  static async resolveNames(t, e, n, s) {
    t = Object.assign({}, t);
    for (const a in t)
      t[a] == null && delete t[a];
    const i = {};
    t.verifyingContract && !st(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
    const o = re.from(e);
    o.visit(n, (a, c) => (a === "address" && !st(c, 20) && (i[c] = "0x"), c));
    for (const a in i)
      i[a] = await s(a);
    return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]), n = o.visit(n, (a, c) => a === "address" && i[c] ? i[c] : c), { domain: t, value: n };
  }
  /**
   *  Returns the JSON-encoded payload expected by nodes which implement
   *  the JSON-RPC [[link-eip-712]] method.
   */
  static getPayload(t, e, n) {
    re.hashDomain(t);
    const s = {}, i = [];
    sa.forEach((c) => {
      const u = t[c];
      u != null && (s[c] = hg[c](u), i.push({ name: c, type: hl[c] }));
    });
    const o = re.from(e);
    e = o.types;
    const a = Object.assign({}, e);
    return m(a.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", e), a.EIP712Domain = i, o.encode(n), {
      types: a,
      domain: s,
      primaryType: o.primaryType,
      message: o.visit(n, (c, u) => {
        if (c.match(/^bytes(\d*)/))
          return R(Z(u));
        if (c.match(/^u?int/))
          return S(u).toString();
        switch (c) {
          case "address":
            return u.toLowerCase();
          case "bool":
            return !!u;
          case "string":
            return m(typeof u == "string", "invalid string", "value", u), u;
        }
        m(!1, "unsupported type", "type", c);
      })
    };
  }
};
Pi = new WeakMap(), $e = new WeakMap(), Ns = new WeakMap(), Co = new WeakSet(), ff = function(t) {
  {
    const s = ia(t);
    if (s)
      return s;
  }
  const e = Wi(t).array;
  if (e) {
    const s = e.prefix, i = this.getEncoder(s);
    return (o) => {
      m(e.count === -1 || e.count === o.length, `array length mismatch; expected length ${e.count}`, "value", o);
      let a = o.map(i);
      return l(this, $e).has(s) && (a = a.map(wt)), wt(yt(a));
    };
  }
  const n = this.types[t];
  if (n) {
    const s = Br(l(this, $e).get(t));
    return (i) => {
      const o = n.map(({ name: a, type: c }) => {
        const u = this.getEncoder(c)(i[a]);
        return l(this, $e).has(c) ? wt(u) : u;
      });
      return o.unshift(s), yt(o);
    };
  }
  m(!1, `unknown type: ${t}`, "type", t);
};
let Eo = re;
function Ht(r) {
  const t = /* @__PURE__ */ new Set();
  return r.forEach((e) => t.add(e)), Object.freeze(t);
}
const dg = "external public payable override", pg = Ht(dg.split(" ")), hf = "constant external internal payable private public pure view override", gg = Ht(hf.split(" ")), df = "constructor error event fallback function receive struct", pf = Ht(df.split(" ")), gf = "calldata memory storage payable indexed", mg = Ht(gf.split(" ")), yg = "tuple returns", wg = [df, gf, yg, hf].join(" "), Ag = Ht(wg.split(" ")), bg = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
}, Eg = new RegExp("^(\\s*)"), xg = new RegExp("^([0-9]+)"), Ng = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), mf = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), yf = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var xt, ye, Ci, Fa;
const Bo = class Bo {
  constructor(t) {
    b(this, Ci);
    b(this, xt);
    b(this, ye);
    d(this, xt, 0), d(this, ye, t.slice());
  }
  get offset() {
    return l(this, xt);
  }
  get length() {
    return l(this, ye).length - l(this, xt);
  }
  clone() {
    return new Bo(l(this, ye));
  }
  reset() {
    d(this, xt, 0);
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(t) {
    const e = this.peek();
    if (e.type !== "KEYWORD" || !t.has(e.text))
      throw new Error(`expected keyword ${e.text}`);
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(t) {
    if (this.peek().type !== t) {
      const e = this.peek();
      throw new Error(`expected ${t}; got ${e.type} ${JSON.stringify(e.text)}`);
    }
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const t = this.peek();
    if (t.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const e = P(this, Ci, Fa).call(this, l(this, xt) + 1, t.match + 1);
    return d(this, xt, t.match + 1), e;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const t = this.peek();
    if (t.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const e = [];
    for (; l(this, xt) < t.match - 1; ) {
      const n = this.peek().linkNext;
      e.push(P(this, Ci, Fa).call(this, l(this, xt) + 1, n)), d(this, xt, n);
    }
    return d(this, xt, t.match + 1), e;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (l(this, xt) >= l(this, ye).length)
      throw new Error("out-of-bounds");
    return l(this, ye)[l(this, xt)];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(t) {
    const e = this.peekType("KEYWORD");
    return e != null && t.has(e) ? e : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(t) {
    if (this.length === 0)
      return null;
    const e = this.peek();
    return e.type === t ? e.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const t = this.peek();
    return qs(this, xt)._++, t;
  }
  toString() {
    const t = [];
    for (let e = l(this, xt); e < l(this, ye).length; e++) {
      const n = l(this, ye)[e];
      t.push(`${n.type}:${n.text}`);
    }
    return `<TokenString ${t.join(" ")}>`;
  }
};
xt = new WeakMap(), ye = new WeakMap(), Ci = new WeakSet(), Fa = function(t = 0, e = 0) {
  return new Bo(l(this, ye).slice(t, e).map((n) => Object.freeze(Object.assign({}, n, {
    match: n.match - t,
    linkBack: n.linkBack - t,
    linkNext: n.linkNext - t
  }))));
};
let Ee = Bo;
function Jn(r) {
  const t = [], e = (o) => {
    const a = i < r.length ? JSON.stringify(r[i]) : "$EOI";
    throw new Error(`invalid token ${a} at ${i}: ${o}`);
  };
  let n = [], s = [], i = 0;
  for (; i < r.length; ) {
    let o = r.substring(i), a = o.match(Eg);
    a && (i += a[1].length, o = r.substring(i));
    const c = { depth: n.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: i, value: -1 };
    t.push(c);
    let u = bg[o[0]] || "";
    if (u) {
      if (c.type = u, c.text = o[0], i++, u === "OPEN_PAREN")
        n.push(t.length - 1), s.push(t.length - 1);
      else if (u == "CLOSE_PAREN")
        n.length === 0 && e("no matching open bracket"), c.match = n.pop(), t[c.match].match = t.length - 1, c.depth--, c.linkBack = s.pop(), t[c.linkBack].linkNext = t.length - 1;
      else if (u === "COMMA")
        c.linkBack = s.pop(), t[c.linkBack].linkNext = t.length - 1, s.push(t.length - 1);
      else if (u === "OPEN_BRACKET")
        c.type = "BRACKET";
      else if (u === "CLOSE_BRACKET") {
        let f = t.pop().text;
        if (t.length > 0 && t[t.length - 1].type === "NUMBER") {
          const h = t.pop().text;
          f = h + f, t[t.length - 1].value = Q(h);
        }
        if (t.length === 0 || t[t.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        t[t.length - 1].text += f;
      }
      continue;
    }
    if (a = o.match(Ng), a) {
      if (c.text = a[1], i += c.text.length, Ag.has(c.text)) {
        c.type = "KEYWORD";
        continue;
      }
      if (c.text.match(yf)) {
        c.type = "TYPE";
        continue;
      }
      c.type = "ID";
      continue;
    }
    if (a = o.match(xg), a) {
      c.text = a[1], c.type = "NUMBER", i += c.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${i}`);
  }
  return new Ee(t.map((o) => Object.freeze(o)));
}
function gl(r, t) {
  let e = [];
  for (const n in t.keys())
    r.has(n) && e.push(n);
  if (e.length > 1)
    throw new Error(`conflicting types: ${e.join(", ")}`);
}
function Qo(r, t) {
  if (t.peekKeyword(pf)) {
    const e = t.pop().text;
    if (e !== r)
      throw new Error(`expected ${r}, got ${e}`);
  }
  return t.popType("ID");
}
function hn(r, t) {
  const e = /* @__PURE__ */ new Set();
  for (; ; ) {
    const n = r.peekType("KEYWORD");
    if (n == null || t && !t.has(n))
      break;
    if (r.pop(), e.has(n))
      throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
    e.add(n);
  }
  return Object.freeze(e);
}
function wf(r) {
  let t = hn(r, gg);
  return gl(t, Ht("constant payable nonpayable".split(" "))), gl(t, Ht("pure view payable nonpayable".split(" "))), t.has("view") ? "view" : t.has("pure") ? "pure" : t.has("payable") ? "payable" : t.has("nonpayable") ? "nonpayable" : t.has("constant") ? "view" : "nonpayable";
}
function un(r, t) {
  return r.popParams().map((e) => Pt.from(e, t));
}
function Af(r) {
  if (r.peekType("AT")) {
    if (r.pop(), r.peekType("NUMBER"))
      return S(r.pop().text);
    throw new Error("invalid gas");
  }
  return null;
}
function Or(r) {
  if (r.length)
    throw new Error(`unexpected tokens at offset ${r.offset}: ${r.toString()}`);
}
const vg = new RegExp(/^(.*)\[([0-9]*)\]$/);
function ml(r) {
  const t = r.match(yf);
  if (m(t, "invalid type", "type", r), r === "uint")
    return "uint256";
  if (r === "int")
    return "int256";
  if (t[2]) {
    const e = parseInt(t[2]);
    m(e !== 0 && e <= 32, "invalid bytes length", "type", r);
  } else if (t[3]) {
    const e = parseInt(t[3]);
    m(e !== 0 && e <= 256 && e % 8 === 0, "invalid numeric width", "type", r);
  }
  return r;
}
const at = {}, Wt = Symbol.for("_ethers_internal"), yl = "_ParamTypeInternal", wl = "_ErrorInternal", Al = "_EventInternal", bl = "_ConstructorInternal", El = "_FallbackInternal", xl = "_FunctionInternal", Nl = "_StructInternal";
var vs, eo;
const se = class se {
  /**
   *  @private
   */
  constructor(t, e, n, s, i, o, a, c) {
    b(this, vs);
    /**
     *  The local name of the parameter (or ``""`` if unbound)
     */
    A(this, "name");
    /**
     *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
     *  ``"uint256[3][]"``)
     */
    A(this, "type");
    /**
     *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
     */
    A(this, "baseType");
    /**
     *  True if the parameters is indexed.
     *
     *  For non-indexable types this is ``null``.
     */
    A(this, "indexed");
    /**
     *  The components for the tuple.
     *
     *  For non-tuple types this is ``null``.
     */
    A(this, "components");
    /**
     *  The array length, or ``-1`` for dynamic-lengthed arrays.
     *
     *  For non-array types this is ``null``.
     */
    A(this, "arrayLength");
    /**
     *  The type of each child in the array.
     *
     *  For non-array types this is ``null``.
     */
    A(this, "arrayChildren");
    if (Ui(t, at, "ParamType"), Object.defineProperty(this, Wt, { value: yl }), o && (o = Object.freeze(o.slice())), s === "array") {
      if (a == null || c == null)
        throw new Error("");
    } else if (a != null || c != null)
      throw new Error("");
    if (s === "tuple") {
      if (o == null)
        throw new Error("");
    } else if (o != null)
      throw new Error("");
    H(this, {
      name: e,
      type: n,
      baseType: s,
      indexed: i,
      components: o,
      arrayLength: a,
      arrayChildren: c
    });
  }
  /**
   *  Return a string representation of this type.
   *
   *  For example,
   *
   *  ``sighash" => "(uint256,address)"``
   *
   *  ``"minimal" => "tuple(uint256,address) indexed"``
   *
   *  ``"full" => "tuple(uint256 foo, address bar) indexed baz"``
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json") {
      const n = this.name || "";
      if (this.isArray()) {
        const i = JSON.parse(this.arrayChildren.format("json"));
        return i.name = n, i.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(i);
      }
      const s = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: n
      };
      return typeof this.indexed == "boolean" && (s.indexed = this.indexed), this.isTuple() && (s.components = this.components.map((i) => JSON.parse(i.format(t)))), JSON.stringify(s);
    }
    let e = "";
    return this.isArray() ? (e += this.arrayChildren.format(t), e += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? e += "(" + this.components.map((n) => n.format(t)).join(t === "full" ? ", " : ",") + ")" : e += this.type, t !== "sighash" && (this.indexed === !0 && (e += " indexed"), t === "full" && this.name && (e += " " + this.name)), e;
  }
  /**
   *  Returns true if %%this%% is an Array type.
   *
   *  This provides a type gaurd ensuring that [[arrayChildren]]
   *  and [[arrayLength]] are non-null.
   */
  isArray() {
    return this.baseType === "array";
  }
  /**
   *  Returns true if %%this%% is a Tuple type.
   *
   *  This provides a type gaurd ensuring that [[components]]
   *  is non-null.
   */
  isTuple() {
    return this.baseType === "tuple";
  }
  /**
   *  Returns true if %%this%% is an Indexable type.
   *
   *  This provides a type gaurd ensuring that [[indexed]]
   *  is non-null.
   */
  isIndexable() {
    return this.indexed != null;
  }
  /**
   *  Walks the **ParamType** with %%value%%, calling %%process%%
   *  on each type, destructing the %%value%% recursively.
   */
  walk(t, e) {
    if (this.isArray()) {
      if (!Array.isArray(t))
        throw new Error("invalid array value");
      if (this.arrayLength !== -1 && t.length !== this.arrayLength)
        throw new Error("array is wrong length");
      const n = this;
      return t.map((s) => n.arrayChildren.walk(s, e));
    }
    if (this.isTuple()) {
      if (!Array.isArray(t))
        throw new Error("invalid tuple value");
      if (t.length !== this.components.length)
        throw new Error("array is wrong length");
      const n = this;
      return t.map((s, i) => n.components[i].walk(s, e));
    }
    return e(this.type, t);
  }
  /**
   *  Walks the **ParamType** with %%value%%, asynchronously calling
   *  %%process%% on each type, destructing the %%value%% recursively.
   *
   *  This can be used to resolve ENS names by walking and resolving each
   *  ``"address"`` type.
   */
  async walkAsync(t, e) {
    const n = [], s = [t];
    return P(this, vs, eo).call(this, n, t, e, (i) => {
      s[0] = i;
    }), n.length && await Promise.all(n), s[0];
  }
  /**
   *  Creates a new **ParamType** for %%obj%%.
   *
   *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
   *  otherwise the ``indexed`` keyword will throw an error.
   */
  static from(t, e) {
    if (se.isParamType(t))
      return t;
    if (typeof t == "string")
      try {
        return se.from(Jn(t), e);
      } catch {
        m(!1, "invalid param type", "obj", t);
      }
    else if (t instanceof Ee) {
      let a = "", c = "", u = null;
      hn(t, Ht(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN") ? (c = "tuple", u = t.popParams().map((y) => se.from(y)), a = `tuple(${u.map((y) => y.format()).join(",")})`) : (a = ml(t.popType("TYPE")), c = a);
      let f = null, h = null;
      for (; t.length && t.peekType("BRACKET"); ) {
        const y = t.pop();
        f = new se(at, "", a, c, null, u, h, f), h = y.value, a += y.text, c = "array", u = null;
      }
      let p = null;
      if (hn(t, mg).has("indexed")) {
        if (!e)
          throw new Error("");
        p = !0;
      }
      const E = t.peekType("ID") ? t.pop().text : "";
      if (t.length)
        throw new Error("leftover tokens");
      return new se(at, E, a, c, p, u, h, f);
    }
    const n = t.name;
    m(!n || typeof n == "string" && n.match(mf), "invalid name", "obj.name", n);
    let s = t.indexed;
    s != null && (m(e, "parameter cannot be indexed", "obj.indexed", t.indexed), s = !!s);
    let i = t.type, o = i.match(vg);
    if (o) {
      const a = parseInt(o[2] || "-1"), c = se.from({
        type: o[1],
        components: t.components
      });
      return new se(at, n || "", i, "array", s, null, a, c);
    }
    if (i === "tuple" || i.startsWith(
      "tuple("
      /* fix: ) */
    ) || i.startsWith(
      "("
      /* fix: ) */
    )) {
      const a = t.components != null ? t.components.map((u) => se.from(u)) : null;
      return new se(at, n || "", i, "tuple", s, a, null, null);
    }
    return i = ml(t.type), new se(at, n || "", i, i, s, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(t) {
    return t && t[Wt] === yl;
  }
};
vs = new WeakSet(), eo = function(t, e, n, s) {
  if (this.isArray()) {
    if (!Array.isArray(e))
      throw new Error("invalid array value");
    if (this.arrayLength !== -1 && e.length !== this.arrayLength)
      throw new Error("array is wrong length");
    const o = this.arrayChildren, a = e.slice();
    a.forEach((c, u) => {
      var f;
      P(f = o, vs, eo).call(f, t, c, n, (h) => {
        a[u] = h;
      });
    }), s(a);
    return;
  }
  if (this.isTuple()) {
    const o = this.components;
    let a;
    if (Array.isArray(e))
      a = e.slice();
    else {
      if (e == null || typeof e != "object")
        throw new Error("invalid tuple value");
      a = o.map((c) => {
        if (!c.name)
          throw new Error("cannot use object value with unnamed components");
        if (!(c.name in e))
          throw new Error(`missing value for component ${c.name}`);
        return e[c.name];
      });
    }
    if (a.length !== this.components.length)
      throw new Error("array is wrong length");
    a.forEach((c, u) => {
      var f;
      P(f = o[u], vs, eo).call(f, t, c, n, (h) => {
        a[u] = h;
      });
    }), s(a);
    return;
  }
  const i = n(this.type, e);
  i.then ? t.push(async function() {
    s(await i);
  }()) : s(i);
};
let Pt = se;
class Ir {
  /**
   *  @private
   */
  constructor(t, e, n) {
    /**
     *  The type of the fragment.
     */
    A(this, "type");
    /**
     *  The inputs for the fragment.
     */
    A(this, "inputs");
    Ui(t, at, "Fragment"), n = Object.freeze(n.slice()), H(this, { type: e, inputs: n });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(t) {
    if (typeof t == "string") {
      try {
        Ir.from(JSON.parse(t));
      } catch {
      }
      return Ir.from(Jn(t));
    }
    if (t instanceof Ee)
      switch (t.peekKeyword(pf)) {
        case "constructor":
          return cn.from(t);
        case "error":
          return jt.from(t);
        case "event":
          return Fe.from(t);
        case "fallback":
        case "receive":
          return je.from(t);
        case "function":
          return Le.from(t);
        case "struct":
          return Nr.from(t);
      }
    else if (typeof t == "object") {
      switch (t.type) {
        case "constructor":
          return cn.from(t);
        case "error":
          return jt.from(t);
        case "event":
          return Fe.from(t);
        case "fallback":
        case "receive":
          return je.from(t);
        case "function":
          return Le.from(t);
        case "struct":
          return Nr.from(t);
      }
      v(!1, `unsupported type: ${t.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    m(!1, "unsupported frgament object", "obj", t);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(t) {
    return cn.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(t) {
    return jt.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(t) {
    return Fe.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(t) {
    return Le.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(t) {
    return Nr.isFragment(t);
  }
}
class Vo extends Ir {
  /**
   *  @private
   */
  constructor(e, n, s, i) {
    super(e, n, i);
    /**
     *  The name of the fragment.
     */
    A(this, "name");
    m(typeof s == "string" && s.match(mf), "invalid identifier", "name", s), i = Object.freeze(i.slice()), H(this, { name: s });
  }
}
function Ai(r, t) {
  return "(" + t.map((e) => e.format(r)).join(r === "full" ? ", " : ",") + ")";
}
class jt extends Vo {
  /**
   *  @private
   */
  constructor(t, e, n) {
    super(t, "error", e, n), Object.defineProperty(this, Wt, { value: wl });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return Br(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this fragment as %%format%%.
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json")
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(t)))
      });
    const e = [];
    return t !== "sighash" && e.push("error"), e.push(this.name + Ai(t, this.inputs)), e.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(t) {
    if (jt.isFragment(t))
      return t;
    if (typeof t == "string")
      return jt.from(Jn(t));
    if (t instanceof Ee) {
      const e = Qo("error", t), n = un(t);
      return Or(t), new jt(at, e, n);
    }
    return new jt(at, t.name, t.inputs ? t.inputs.map(Pt.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(t) {
    return t && t[Wt] === wl;
  }
}
class Fe extends Vo {
  /**
   *  @private
   */
  constructor(e, n, s, i) {
    super(e, "event", n, s);
    /**
     *  Whether this event is anonymous.
     */
    A(this, "anonymous");
    Object.defineProperty(this, Wt, { value: Al }), H(this, { anonymous: i });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return Br(this.format("sighash"));
  }
  /**
   *  Returns a string representation of this event as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [];
    return e !== "sighash" && n.push("event"), n.push(this.name + Ai(e, this.inputs)), e !== "sighash" && this.anonymous && n.push("anonymous"), n.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(e, n) {
    return n = (n || []).map((i) => Pt.from(i)), new Fe(at, e, n, !1).topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(e) {
    if (Fe.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return Fe.from(Jn(e));
      } catch {
        m(!1, "invalid event fragment", "obj", e);
      }
    else if (e instanceof Ee) {
      const n = Qo("event", e), s = un(e, !0), i = !!hn(e, Ht(["anonymous"])).has("anonymous");
      return Or(e), new Fe(at, n, s, i);
    }
    return new Fe(at, e.name, e.inputs ? e.inputs.map((n) => Pt.from(n, !0)) : [], !!e.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(e) {
    return e && e[Wt] === Al;
  }
}
class cn extends Ir {
  /**
   *  @private
   */
  constructor(e, n, s, i, o) {
    super(e, n, s);
    /**
     *  Whether the constructor can receive an endowment.
     */
    A(this, "payable");
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    A(this, "gas");
    Object.defineProperty(this, Wt, { value: bl }), H(this, { payable: i, gas: o });
  }
  /**
   *  Returns a string representation of this constructor as %%format%%.
   */
  format(e) {
    if (v(e != null && e !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" }), e === "json")
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [`constructor${Ai(e, this.inputs)}`];
    return this.payable && n.push("payable"), this.gas != null && n.push(`@${this.gas.toString()}`), n.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(e) {
    if (cn.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return cn.from(Jn(e));
      } catch {
        m(!1, "invalid constuctor fragment", "obj", e);
      }
    else if (e instanceof Ee) {
      hn(e, Ht(["constructor"]));
      const n = un(e), s = !!hn(e, pg).has("payable"), i = Af(e);
      return Or(e), new cn(at, "constructor", n, s, i);
    }
    return new cn(at, "constructor", e.inputs ? e.inputs.map(Pt.from) : [], !!e.payable, e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(e) {
    return e && e[Wt] === bl;
  }
}
class je extends Ir {
  constructor(e, n, s) {
    super(e, "fallback", n);
    /**
     *  If the function can be sent value during invocation.
     */
    A(this, "payable");
    Object.defineProperty(this, Wt, { value: El }), H(this, { payable: s });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(e) {
    const n = this.inputs.length === 0 ? "receive" : "fallback";
    if (e === "json") {
      const s = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type: n, stateMutability: s });
    }
    return `${n}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(e) {
    if (je.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return je.from(Jn(e));
      } catch {
        m(!1, "invalid fallback fragment", "obj", e);
      }
    else if (e instanceof Ee) {
      const n = e.toString(), s = e.peekKeyword(Ht(["fallback", "receive"]));
      if (m(s, "type must be fallback or receive", "obj", n), e.popKeyword(Ht(["fallback", "receive"])) === "receive") {
        const c = un(e);
        return m(c.length === 0, "receive cannot have arguments", "obj.inputs", c), hn(e, Ht(["payable"])), Or(e), new je(at, [], !0);
      }
      let o = un(e);
      o.length ? m(o.length === 1 && o[0].type === "bytes", "invalid fallback inputs", "obj.inputs", o.map((c) => c.format("minimal")).join(", ")) : o = [Pt.from("bytes")];
      const a = wf(e);
      if (m(a === "nonpayable" || a === "payable", "fallback cannot be constants", "obj.stateMutability", a), hn(e, Ht(["returns"])).has("returns")) {
        const c = un(e);
        m(c.length === 1 && c[0].type === "bytes", "invalid fallback outputs", "obj.outputs", c.map((u) => u.format("minimal")).join(", "));
      }
      return Or(e), new je(at, o, a === "payable");
    }
    if (e.type === "receive")
      return new je(at, [], !0);
    if (e.type === "fallback") {
      const n = [Pt.from("bytes")], s = e.stateMutability === "payable";
      return new je(at, n, s);
    }
    m(!1, "invalid fallback description", "obj", e);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(e) {
    return e && e[Wt] === El;
  }
}
class Le extends Vo {
  /**
   *  @private
   */
  constructor(e, n, s, i, o, a) {
    super(e, "function", n, i);
    /**
     *  If the function is constant (e.g. ``pure`` or ``view`` functions).
     */
    A(this, "constant");
    /**
     *  The returned types for the result of calling this function.
     */
    A(this, "outputs");
    /**
     *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
     *  or ``pure``)
     */
    A(this, "stateMutability");
    /**
     *  If the function can be sent value during invocation.
     */
    A(this, "payable");
    /**
     *  The recommended gas limit to send when calling this function.
     */
    A(this, "gas");
    Object.defineProperty(this, Wt, { value: xl }), o = Object.freeze(o.slice()), H(this, { constant: s === "view" || s === "pure", gas: a, outputs: o, payable: s === "payable", stateMutability: s });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return Br(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this function as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e))),
        outputs: this.outputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [];
    return e !== "sighash" && n.push("function"), n.push(this.name + Ai(e, this.inputs)), e !== "sighash" && (this.stateMutability !== "nonpayable" && n.push(this.stateMutability), this.outputs && this.outputs.length && (n.push("returns"), n.push(Ai(e, this.outputs))), this.gas != null && n.push(`@${this.gas.toString()}`)), n.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(e, n) {
    return n = (n || []).map((i) => Pt.from(i)), new Le(at, e, "view", n, [], null).selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(e) {
    if (Le.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return Le.from(Jn(e));
      } catch {
        m(!1, "invalid function fragment", "obj", e);
      }
    else if (e instanceof Ee) {
      const s = Qo("function", e), i = un(e), o = wf(e);
      let a = [];
      hn(e, Ht(["returns"])).has("returns") && (a = un(e));
      const c = Af(e);
      return Or(e), new Le(at, s, o, i, a, c);
    }
    let n = e.stateMutability;
    return n == null && (n = "payable", typeof e.constant == "boolean" ? (n = "view", e.constant || (n = "payable", typeof e.payable == "boolean" && !e.payable && (n = "nonpayable"))) : typeof e.payable == "boolean" && !e.payable && (n = "nonpayable")), new Le(at, e.name, n, e.inputs ? e.inputs.map(Pt.from) : [], e.outputs ? e.outputs.map(Pt.from) : [], e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(e) {
    return e && e[Wt] === xl;
  }
}
class Nr extends Vo {
  /**
   *  @private
   */
  constructor(t, e, n) {
    super(t, "struct", e, n), Object.defineProperty(this, Wt, { value: Nl });
  }
  /**
   *  Returns a string representation of this struct as %%format%%.
   */
  format() {
    throw new Error("@TODO");
  }
  /**
   *  Returns a new **StructFragment** for %%obj%%.
   */
  static from(t) {
    if (typeof t == "string")
      try {
        return Nr.from(Jn(t));
      } catch {
        m(!1, "invalid struct fragment", "obj", t);
      }
    else if (t instanceof Ee) {
      const e = Qo("struct", t), n = un(t);
      return Or(t), new Nr(at, e, n);
    }
    return new Nr(at, t.name, t.inputs ? t.inputs.map(Pt.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(t) {
    return t && t[Wt] === Nl;
  }
}
const xe = /* @__PURE__ */ new Map();
xe.set(0, "GENERIC_PANIC");
xe.set(1, "ASSERT_FALSE");
xe.set(17, "OVERFLOW");
xe.set(18, "DIVIDE_BY_ZERO");
xe.set(33, "ENUM_RANGE_ERROR");
xe.set(34, "BAD_STORAGE_DATA");
xe.set(49, "STACK_UNDERFLOW");
xe.set(50, "ARRAY_RANGE_ERROR");
xe.set(65, "OUT_OF_MEMORY");
xe.set(81, "UNINITIALIZED_FUNCTION_CALL");
const Pg = new RegExp(/^bytes([0-9]*)$/), Cg = new RegExp(/^(u?int)([0-9]*)$/);
let oa = null, vl = 1024;
function Bg(r, t, e, n) {
  let s = "missing revert data", i = null;
  const o = null;
  let a = null;
  if (e) {
    s = "execution reverted";
    const u = Z(e);
    if (e = R(e), u.length === 0)
      s += " (no data present; likely require(false) occurred", i = "require(false)";
    else if (u.length % 32 !== 4)
      s += " (could not decode reason; invalid data length)";
    else if (R(u.slice(0, 4)) === "0x08c379a0")
      try {
        i = n.decode(["string"], u.slice(4))[0], a = {
          signature: "Error(string)",
          name: "Error",
          args: [i]
        }, s += `: ${JSON.stringify(i)}`;
      } catch {
        s += " (could not decode reason; invalid string data)";
      }
    else if (R(u.slice(0, 4)) === "0x4e487b71")
      try {
        const f = Number(n.decode(["uint256"], u.slice(4))[0]);
        a = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [f]
        }, i = `Panic due to ${xe.get(f) || "UNKNOWN"}(${f})`, s += `: ${i}`;
      } catch {
        s += " (could not decode panic code)";
      }
    else
      s += " (unknown custom error)";
  }
  const c = {
    to: t.to ? nt(t.to) : null,
    data: t.data || "0x"
  };
  return t.from && (c.from = nt(t.from)), lt(s, "CALL_EXCEPTION", {
    action: r,
    data: e,
    reason: i,
    transaction: c,
    invocation: o,
    revert: a
  });
}
var Bn, Qr;
const Oo = class Oo {
  constructor() {
    b(this, Bn);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(t) {
    const e = t.map((s) => P(this, Bn, Qr).call(this, Pt.from(s)));
    return new ji(e, "_").defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(t, e) {
    Kl(e.length, t.length, "types/values length mismatch");
    const n = t.map((o) => P(this, Bn, Qr).call(this, Pt.from(o))), s = new ji(n, "_"), i = new Ea();
    return s.encode(i, e), i.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(t, e, n) {
    const s = t.map((o) => P(this, Bn, Qr).call(this, Pt.from(o)));
    return new ji(s, "_").decode(new xa(e, n, vl));
  }
  static _setDefaultMaxInflation(t) {
    m(typeof t == "number" && Number.isInteger(t), "invalid defaultMaxInflation factor", "value", t), vl = t;
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    return oa == null && (oa = new Oo()), oa;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(t, e, n) {
    return Bg(t, e, n, Oo.defaultAbiCoder());
  }
};
Bn = new WeakSet(), Qr = function(t) {
  if (t.isArray())
    return new Zd(P(this, Bn, Qr).call(this, t.arrayChildren), t.arrayLength, t.name);
  if (t.isTuple())
    return new ji(t.components.map((n) => P(this, Bn, Qr).call(this, n)), t.name);
  switch (t.baseType) {
    case "address":
      return new Wd(t.name);
    case "bool":
      return new Xd(t.name);
    case "string":
      return new op(t.name);
    case "bytes":
      return new qd(t.name);
    case "":
      return new ep(t.name);
  }
  let e = t.type.match(Cg);
  if (e) {
    let n = parseInt(e[2] || "256");
    return m(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + e[1] + " bit length", "param", t), new ip(n / 8, e[1] === "int", t.name);
  }
  if (e = t.type.match(Pg), e) {
    let n = parseInt(e[1]);
    return m(n !== 0 && n <= 32, "invalid bytes length", "param", t), new $d(n, t.name);
  }
  m(!1, "invalid type", "type", t.type);
};
let bi = Oo;
class Og {
  /**
   *  @_ignore:
   */
  constructor(t, e, n) {
    /**
     *  The matching fragment for the ``topic0``.
     */
    A(this, "fragment");
    /**
     *  The name of the Event.
     */
    A(this, "name");
    /**
     *  The full Event signature.
     */
    A(this, "signature");
    /**
     *  The topic hash for the Event.
     */
    A(this, "topic");
    /**
     *  The arguments passed into the Event with ``emit``.
     */
    A(this, "args");
    const s = t.name, i = t.format();
    H(this, {
      fragment: t,
      name: s,
      signature: i,
      topic: e,
      args: n
    });
  }
}
class Ig {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s) {
    /**
     *  The matching fragment from the transaction ``data``.
     */
    A(this, "fragment");
    /**
     *  The name of the Function from the transaction ``data``.
     */
    A(this, "name");
    /**
     *  The arguments passed to the Function from the transaction ``data``.
     */
    A(this, "args");
    /**
     *  The full Function signature from the transaction ``data``.
     */
    A(this, "signature");
    /**
     *  The selector for the Function from the transaction ``data``.
     */
    A(this, "selector");
    /**
     *  The ``value`` (in wei) from the transaction.
     */
    A(this, "value");
    const i = t.name, o = t.format();
    H(this, {
      fragment: t,
      name: i,
      args: n,
      signature: o,
      selector: e,
      value: s
    });
  }
}
class kg {
  /**
   *  @_ignore:
   */
  constructor(t, e, n) {
    /**
     *  The matching fragment.
     */
    A(this, "fragment");
    /**
     *  The name of the Error.
     */
    A(this, "name");
    /**
     *  The arguments passed to the Error with ``revert``.
     */
    A(this, "args");
    /**
     *  The full Error signature.
     */
    A(this, "signature");
    /**
     *  The selector for the Error.
     */
    A(this, "selector");
    const s = t.name, i = t.format();
    H(this, {
      fragment: t,
      name: s,
      args: n,
      signature: i,
      selector: e
    });
  }
}
class Pl {
  /**
   *  @_ignore:
   */
  constructor(t) {
    /**
     *  The ``keccak256`` of the value logged.
     */
    A(this, "hash");
    /**
     *  @_ignore:
     */
    A(this, "_isIndexed");
    H(this, { hash: t, _isIndexed: !0 });
  }
  /**
   *  Returns ``true`` if %%value%% is an **Indexed**.
   *
   *  This provides a Type Guard for property access.
   */
  static isIndexed(t) {
    return !!(t && t._isIndexed);
  }
}
const Cl = {
  0: "generic panic",
  1: "assert(false)",
  17: "arithmetic overflow",
  18: "division or modulo by zero",
  33: "enum overflow",
  34: "invalid encoded storage byte array accessed",
  49: "out-of-bounds array access; popping on an empty array",
  50: "out-of-bounds access of an array or bytesN",
  65: "out of memory",
  81: "uninitialized function"
}, Bl = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (r) => `reverted with reason string ${JSON.stringify(r)}`
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (r) => {
      let t = "unknown panic code";
      return r >= 0 && r <= 255 && Cl[r.toString()] && (t = Cl[r.toString()]), `reverted with panic code 0x${r.toString(16)} (${t})`;
    }
  }
};
var Ie, ke, Re, Bt, Me, no, ro;
const Xn = class Xn {
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(t) {
    b(this, Me);
    /**
     *  All the Contract ABI members (i.e. methods, events, errors, etc).
     */
    A(this, "fragments");
    /**
     *  The Contract constructor.
     */
    A(this, "deploy");
    /**
     *  The Fallback method, if any.
     */
    A(this, "fallback");
    /**
     *  If receiving ether is supported.
     */
    A(this, "receive");
    b(this, Ie);
    b(this, ke);
    b(this, Re);
    //    #structs: Map<string, StructFragment>;
    b(this, Bt);
    let e = [];
    typeof t == "string" ? e = JSON.parse(t) : e = t, d(this, Re, /* @__PURE__ */ new Map()), d(this, Ie, /* @__PURE__ */ new Map()), d(this, ke, /* @__PURE__ */ new Map());
    const n = [];
    for (const o of e)
      try {
        n.push(Ir.from(o));
      } catch (a) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(o)}:`, a.message);
      }
    H(this, {
      fragments: Object.freeze(n)
    });
    let s = null, i = !1;
    d(this, Bt, this.getAbiCoder()), this.fragments.forEach((o, a) => {
      let c;
      switch (o.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          H(this, { deploy: o });
          return;
        case "fallback":
          o.inputs.length === 0 ? i = !0 : (m(!s || o.payable !== s.payable, "conflicting fallback fragments", `fragments[${a}]`, o), s = o, i = s.payable);
          return;
        case "function":
          c = l(this, Re);
          break;
        case "event":
          c = l(this, ke);
          break;
        case "error":
          c = l(this, Ie);
          break;
        default:
          return;
      }
      const u = o.format();
      c.has(u) || c.set(u, o);
    }), this.deploy || H(this, {
      deploy: cn.from("constructor()")
    }), H(this, { fallback: s, receive: i });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(t) {
    const e = t ? "minimal" : "full";
    return this.fragments.map((s) => s.format(e));
  }
  /**
   *  Return the JSON-encoded ABI. This is the format Solidiy
   *  returns.
   */
  formatJson() {
    const t = this.fragments.map((e) => e.format("json"));
    return JSON.stringify(t.map((e) => JSON.parse(e)));
  }
  /**
   *  The ABI coder that will be used to encode and decode binary
   *  data.
   */
  getAbiCoder() {
    return bi.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(t) {
    const e = P(this, Me, no).call(this, t, null, !1);
    return m(e, "no matching function", "key", t), e.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(t) {
    return !!P(this, Me, no).call(this, t, null, !1);
  }
  /**
   *  Get the [[FunctionFragment]] for %%key%%, which may be a function
   *  selector, function name or function signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple functions match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single function in
   *  the ABI, this will throw.
   */
  getFunction(t, e) {
    return P(this, Me, no).call(this, t, e || null, !0);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(t) {
    const e = Array.from(l(this, Re).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, Re).get(s), n);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(t) {
    const e = P(this, Me, ro).call(this, t, null, !1);
    return m(e, "no matching event", "key", t), e.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(t) {
    return !!P(this, Me, ro).call(this, t, null, !1);
  }
  /**
   *  Get the [[EventFragment]] for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple events match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single event in
   *  the ABI, this will throw.
   */
  getEvent(t, e) {
    return P(this, Me, ro).call(this, t, e || null, !0);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(t) {
    const e = Array.from(l(this, ke).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, ke).get(s), n);
    }
  }
  /**
   *  Get the [[ErrorFragment]] for %%key%%, which may be an error
   *  selector, error name or error signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple errors match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single error in
   *  the ABI, this will throw.
   */
  getError(t, e) {
    if (st(t)) {
      const s = t.toLowerCase();
      if (Bl[s])
        return jt.from(Bl[s].signature);
      for (const i of l(this, Ie).values())
        if (s === i.selector)
          return i;
      return null;
    }
    if (t.indexOf("(") === -1) {
      const s = [];
      for (const [i, o] of l(this, Ie))
        i.split(
          "("
          /* fix:) */
        )[0] === t && s.push(o);
      if (s.length === 0)
        return t === "Error" ? jt.from("error Error(string)") : t === "Panic" ? jt.from("error Panic(uint256)") : null;
      if (s.length > 1) {
        const i = s.map((o) => JSON.stringify(o.format())).join(", ");
        m(!1, `ambiguous error description (i.e. ${i})`, "name", t);
      }
      return s[0];
    }
    if (t = jt.from(t).format(), t === "Error(string)")
      return jt.from("error Error(string)");
    if (t === "Panic(uint256)")
      return jt.from("error Panic(uint256)");
    const n = l(this, Ie).get(t);
    return n || null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(t) {
    const e = Array.from(l(this, Ie).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, Ie).get(s), n);
    }
  }
  // Get the 4-byte selector used by Solidity to identify a function
  /*
  getSelector(fragment: ErrorFragment | FunctionFragment): string {
      if (typeof(fragment) === "string") {
          const matches: Array<Fragment> = [ ];
  
          try { matches.push(this.getFunction(fragment)); } catch (error) { }
          try { matches.push(this.getError(<string>fragment)); } catch (_) { }
  
          if (matches.length === 0) {
              logger.throwArgumentError("unknown fragment", "key", fragment);
          } else if (matches.length > 1) {
              logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
          }
  
          fragment = matches[0];
      }
  
      return dataSlice(id(fragment.format()), 0, 4);
  }
      */
  // Get the 32-byte topic hash used by Solidity to identify an event
  /*
  getEventTopic(fragment: EventFragment): string {
      //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
      return id(fragment.format());
  }
  */
  _decodeParams(t, e) {
    return l(this, Bt).decode(t, e);
  }
  _encodeParams(t, e) {
    return l(this, Bt).encode(t, e);
  }
  /**
   *  Encodes a ``tx.data`` object for deploying the Contract with
   *  the %%values%% as the constructor arguments.
   */
  encodeDeploy(t) {
    return this._encodeParams(this.deploy.inputs, t || []);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified error (see [[getError]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeErrorResult(t, e) {
    if (typeof t == "string") {
      const n = this.getError(t);
      m(n, "unknown error", "fragment", t), t = n;
    }
    return m(ut(e, 0, 4) === t.selector, `data signature does not match error ${t.name}.`, "data", e), this._decodeParams(t.inputs, ut(e, 4));
  }
  /**
   *  Encodes the transaction revert data for a call result that
   *  reverted from the the Contract with the sepcified %%error%%
   *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeErrorResult(t, e) {
    if (typeof t == "string") {
      const n = this.getError(t);
      m(n, "unknown error", "fragment", t), t = n;
    }
    return yt([
      t.selector,
      this._encodeParams(t.inputs, e || [])
    ]);
  }
  /**
   *  Decodes the %%data%% from a transaction ``tx.data`` for
   *  the function specified (see [[getFunction]] for valid values
   *  for %%fragment%%).
   *
   *  Most developers should prefer the [[parseTransaction]] method
   *  instead, which will automatically detect the fragment.
   */
  decodeFunctionData(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      m(n, "unknown function", "fragment", t), t = n;
    }
    return m(ut(e, 0, 4) === t.selector, `data signature does not match function ${t.name}.`, "data", e), this._decodeParams(t.inputs, ut(e, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      m(n, "unknown function", "fragment", t), t = n;
    }
    return yt([
      t.selector,
      this._encodeParams(t.inputs, e || [])
    ]);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeFunctionResult(t, e) {
    if (typeof t == "string") {
      const i = this.getFunction(t);
      m(i, "unknown function", "fragment", t), t = i;
    }
    let n = "invalid length for result data";
    const s = Lt(e);
    if (s.length % 32 === 0)
      try {
        return l(this, Bt).decode(t.outputs, s);
      } catch {
        n = "could not decode result data";
      }
    v(!1, n, "BAD_DATA", {
      value: R(s),
      info: { method: t.name, signature: t.format() }
    });
  }
  makeError(t, e) {
    const n = Z(t, "data"), s = bi.getBuiltinCallException("call", e, n);
    if (s.message.startsWith("execution reverted (unknown custom error)")) {
      const a = R(n.slice(0, 4)), c = this.getError(a);
      if (c)
        try {
          const u = l(this, Bt).decode(c.inputs, n.slice(4));
          s.revert = {
            name: c.name,
            signature: c.format(),
            args: u
          }, s.reason = s.revert.signature, s.message = `execution reverted: ${s.reason}`;
        } catch {
          s.message = "execution reverted (coult not decode custom error)";
        }
    }
    const o = this.parseTransaction(e);
    return o && (s.invocation = {
      method: o.name,
      signature: o.signature,
      args: o.args
    }), s;
  }
  /**
   *  Encodes the result data (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values
   *  for %%fragment%%) with %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeFunctionResult(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      m(n, "unknown function", "fragment", t), t = n;
    }
    return R(l(this, Bt).encode(t.outputs, e || []));
  }
  /*
      spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
          const promises: Array<Promise<>> = [ ];
          const process = function(type: ParamType, value: any): any {
              if (type.baseType === "array") {
                  return descend(type.child
              }
              if (type. === "address") {
              }
          };
  
          const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
              if (inputs.length !== values.length) { throw new Error("length mismatch"); }
              
          };
  
          const result: Array<any> = [ ];
          values.forEach((value, index) => {
              if (value == null) {
                  topics.push(null);
              } else if (param.baseType === "array" || param.baseType === "tuple") {
                  logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
              } else if (Array.isArray(value)) {
                  topics.push(value.map((value) => encodeTopic(param, value)));
              } else {
                  topics.push(encodeTopic(param, value));
              }
          });
      }
  */
  // Create the filter for the event with search criteria (e.g. for eth_filterLog)
  encodeFilterTopics(t, e) {
    if (typeof t == "string") {
      const i = this.getEvent(t);
      m(i, "unknown event", "eventFragment", t), t = i;
    }
    v(e.length <= t.inputs.length, `too many arguments for ${t.format()}`, "UNEXPECTED_ARGUMENT", { count: e.length, expectedCount: t.inputs.length });
    const n = [];
    t.anonymous || n.push(t.topicHash);
    const s = (i, o) => i.type === "string" ? Br(o) : i.type === "bytes" ? wt(R(o)) : (i.type === "bool" && typeof o == "boolean" ? o = o ? "0x01" : "0x00" : i.type.match(/^u?int/) ? o = Qn(o) : i.type.match(/^bytes/) ? o = Xf(o, 32) : i.type === "address" && l(this, Bt).encode(["address"], [o]), Pr(R(o), 32));
    for (e.forEach((i, o) => {
      const a = t.inputs[o];
      if (!a.indexed) {
        m(i == null, "cannot filter non-indexed parameters; must be null", "contract." + a.name, i);
        return;
      }
      i == null ? n.push(null) : a.baseType === "array" || a.baseType === "tuple" ? m(!1, "filtering with tuples or arrays not supported", "contract." + a.name, i) : Array.isArray(i) ? n.push(i.map((c) => s(a, c))) : n.push(s(a, i));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(t, e) {
    if (typeof t == "string") {
      const o = this.getEvent(t);
      m(o, "unknown event", "eventFragment", t), t = o;
    }
    const n = [], s = [], i = [];
    return t.anonymous || n.push(t.topicHash), m(e.length === t.inputs.length, "event arguments/values mismatch", "values", e), t.inputs.forEach((o, a) => {
      const c = e[a];
      if (o.indexed)
        if (o.type === "string")
          n.push(Br(c));
        else if (o.type === "bytes")
          n.push(wt(c));
        else {
          if (o.baseType === "tuple" || o.baseType === "array")
            throw new Error("not implemented");
          n.push(l(this, Bt).encode([o.type], [c]));
        }
      else
        s.push(o), i.push(c);
    }), {
      data: l(this, Bt).encode(s, i),
      topics: n
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(t, e, n) {
    if (typeof t == "string") {
      const w = this.getEvent(t);
      m(w, "unknown event", "eventFragment", t), t = w;
    }
    if (n != null && !t.anonymous) {
      const w = t.topicHash;
      m(st(n[0], 32) && n[0].toLowerCase() === w, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
    }
    const s = [], i = [], o = [];
    t.inputs.forEach((w, E) => {
      w.indexed ? w.type === "string" || w.type === "bytes" || w.baseType === "tuple" || w.baseType === "array" ? (s.push(Pt.from({ type: "bytes32", name: w.name })), o.push(!0)) : (s.push(w), o.push(!1)) : (i.push(w), o.push(!1));
    });
    const a = n != null ? l(this, Bt).decode(s, yt(n)) : null, c = l(this, Bt).decode(i, e, !0), u = [], f = [];
    let h = 0, p = 0;
    return t.inputs.forEach((w, E) => {
      let y = null;
      if (w.indexed)
        if (a == null)
          y = new Pl(null);
        else if (o[E])
          y = new Pl(a[p++]);
        else
          try {
            y = a[p++];
          } catch (x) {
            y = x;
          }
      else
        try {
          y = c[h++];
        } catch (x) {
          y = x;
        }
      u.push(y), f.push(w.name || null);
    }), Hs.fromItems(u, f);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(t) {
    const e = Z(t.data, "tx.data"), n = S(t.value != null ? t.value : 0, "tx.value"), s = this.getFunction(R(e.slice(0, 4)));
    if (!s)
      return null;
    const i = l(this, Bt).decode(s.inputs, e.slice(4));
    return new Ig(s, s.selector, i, n);
  }
  parseCallResult(t) {
    throw new Error("@TODO");
  }
  /**
   *  Parses a receipt log, finding the matching event and extracts
   *  the parameter values along with other useful event details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseLog(t) {
    const e = this.getEvent(t.topics[0]);
    return !e || e.anonymous ? null : new Og(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(t) {
    const e = R(t), n = this.getError(ut(e, 0, 4));
    if (!n)
      return null;
    const s = l(this, Bt).decode(n.inputs, ut(e, 4));
    return new kg(n, n.selector, s);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(t) {
    return t instanceof Xn ? t : typeof t == "string" ? new Xn(JSON.parse(t)) : typeof t.formatJson == "function" ? new Xn(t.formatJson()) : typeof t.format == "function" ? new Xn(t.format("json")) : new Xn(t);
  }
};
Ie = new WeakMap(), ke = new WeakMap(), Re = new WeakMap(), Bt = new WeakMap(), Me = new WeakSet(), // Find a function definition by any means necessary (unless it is ambiguous)
no = function(t, e, n) {
  if (st(t)) {
    const i = t.toLowerCase();
    for (const o of l(this, Re).values())
      if (i === o.selector)
        return o;
    return null;
  }
  if (t.indexOf("(") === -1) {
    const i = [];
    for (const [o, a] of l(this, Re))
      o.split(
        "("
        /* fix:) */
      )[0] === t && i.push(a);
    if (e) {
      const o = e.length > 0 ? e[e.length - 1] : null;
      let a = e.length, c = !0;
      kt.isTyped(o) && o.type === "overrides" && (c = !1, a--);
      for (let u = i.length - 1; u >= 0; u--) {
        const f = i[u].inputs.length;
        f !== a && (!c || f !== a - 1) && i.splice(u, 1);
      }
      for (let u = i.length - 1; u >= 0; u--) {
        const f = i[u].inputs;
        for (let h = 0; h < e.length; h++)
          if (kt.isTyped(e[h])) {
            if (h >= f.length) {
              if (e[h].type === "overrides")
                continue;
              i.splice(u, 1);
              break;
            }
            if (e[h].type !== f[h].baseType) {
              i.splice(u, 1);
              break;
            }
          }
      }
    }
    if (i.length === 1 && e && e.length !== i[0].inputs.length) {
      const o = e[e.length - 1];
      (o == null || Array.isArray(o) || typeof o != "object") && i.splice(0, 1);
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const o = i.map((a) => JSON.stringify(a.format())).join(", ");
      m(!1, `ambiguous function description (i.e. matches ${o})`, "key", t);
    }
    return i[0];
  }
  const s = l(this, Re).get(Le.from(t).format());
  return s || null;
}, // Find an event definition by any means necessary (unless it is ambiguous)
ro = function(t, e, n) {
  if (st(t)) {
    const i = t.toLowerCase();
    for (const o of l(this, ke).values())
      if (i === o.topicHash)
        return o;
    return null;
  }
  if (t.indexOf("(") === -1) {
    const i = [];
    for (const [o, a] of l(this, ke))
      o.split(
        "("
        /* fix:) */
      )[0] === t && i.push(a);
    if (e) {
      for (let o = i.length - 1; o >= 0; o--)
        i[o].inputs.length < e.length && i.splice(o, 1);
      for (let o = i.length - 1; o >= 0; o--) {
        const a = i[o].inputs;
        for (let c = 0; c < e.length; c++)
          if (kt.isTyped(e[c]) && e[c].type !== a[c].baseType) {
            i.splice(o, 1);
            break;
          }
      }
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const o = i.map((a) => JSON.stringify(a.format())).join(", ");
      m(!1, `ambiguous event description (i.e. matches ${o})`, "key", t);
    }
    return i[0];
  }
  const s = l(this, ke).get(Fe.from(t).format());
  return s || null;
};
let La = Xn;
const bf = BigInt(0);
function $r(r) {
  return r ?? null;
}
function pt(r) {
  return r == null ? null : r.toString();
}
class Ol {
  /**
   *  Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
   *  %%maxPriorityFeePerGas%%.
   */
  constructor(t, e, n) {
    /**
     *  The gas price for legacy networks.
     */
    A(this, "gasPrice");
    /**
     *  The maximum fee to pay per gas.
     *
     *  The base fee per gas is defined by the network and based on
     *  congestion, increasing the cost during times of heavy load
     *  and lowering when less busy.
     *
     *  The actual fee per gas will be the base fee for the block
     *  and the priority fee, up to the max fee per gas.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    A(this, "maxFeePerGas");
    /**
     *  The additional amout to pay per gas to encourage a validator
     *  to include the transaction.
     *
     *  The purpose of this is to compensate the validator for the
     *  adjusted risk for including a given transaction.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    A(this, "maxPriorityFeePerGas");
    H(this, {
      gasPrice: $r(t),
      maxFeePerGas: $r(e),
      maxPriorityFeePerGas: $r(n)
    });
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { gasPrice: t, maxFeePerGas: e, maxPriorityFeePerGas: n } = this;
    return {
      _type: "FeeData",
      gasPrice: pt(t),
      maxFeePerGas: pt(e),
      maxPriorityFeePerGas: pt(n)
    };
  }
}
function xo(r) {
  const t = {};
  r.to && (t.to = r.to), r.from && (t.from = r.from), r.data && (t.data = R(r.data));
  const e = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const s of e)
    !(s in r) || r[s] == null || (t[s] = S(r[s], `request.${s}`));
  const n = "type,nonce".split(/,/);
  for (const s of n)
    !(s in r) || r[s] == null || (t[s] = Q(r[s], `request.${s}`));
  return r.accessList && (t.accessList = Tr(r.accessList)), "blockTag" in r && (t.blockTag = r.blockTag), "enableCcipRead" in r && (t.enableCcipRead = !!r.enableCcipRead), "customData" in r && (t.customData = r.customData), "blobVersionedHashes" in r && r.blobVersionedHashes && (t.blobVersionedHashes = r.blobVersionedHashes.slice()), "kzg" in r && (t.kzg = r.kzg), "blobs" in r && r.blobs && (t.blobs = r.blobs.map((s) => $a(s) ? R(s) : Object.assign({}, s))), t;
}
var tn;
class Rg {
  /**
   *  Create a new **Block** object.
   *
   *  This should generally not be necessary as the unless implementing a
   *  low-level library.
   */
  constructor(t, e) {
    /**
     *  The provider connected to the block used to fetch additional details
     *  if necessary.
     */
    A(this, "provider");
    /**
     *  The block number, sometimes called the block height. This is a
     *  sequential number that is one higher than the parent block.
     */
    A(this, "number");
    /**
     *  The block hash.
     *
     *  This hash includes all properties, so can be safely used to identify
     *  an exact set of block properties.
     */
    A(this, "hash");
    /**
     *  The timestamp for this block, which is the number of seconds since
     *  epoch that this block was included.
     */
    A(this, "timestamp");
    /**
     *  The block hash of the parent block.
     */
    A(this, "parentHash");
    /**
     *  The hash tree root of the parent beacon block for the given
     *  execution block. See [[link-eip-4788]].
     */
    A(this, "parentBeaconBlockRoot");
    /**
     *  The nonce.
     *
     *  On legacy networks, this is the random number inserted which
     *  permitted the difficulty target to be reached.
     */
    A(this, "nonce");
    /**
     *  The difficulty target.
     *
     *  On legacy networks, this is the proof-of-work target required
     *  for a block to meet the protocol rules to be included.
     *
     *  On modern networks, this is a random number arrived at using
     *  randao.  @TODO: Find links?
     */
    A(this, "difficulty");
    /**
     *  The total gas limit for this block.
     */
    A(this, "gasLimit");
    /**
     *  The total gas used in this block.
     */
    A(this, "gasUsed");
    /**
     *  The root hash for the global state after applying changes
     *  in this block.
     */
    A(this, "stateRoot");
    /**
     *  The hash of the transaction receipts trie.
     */
    A(this, "receiptsRoot");
    /**
     *  The total amount of blob gas consumed by the transactions
     *  within the block. See [[link-eip-4844]].
     */
    A(this, "blobGasUsed");
    /**
     *  The running total of blob gas consumed in excess of the
     *  target, prior to the block. See [[link-eip-4844]].
     */
    A(this, "excessBlobGas");
    /**
     *  The miner coinbase address, wihch receives any subsidies for
     *  including this block.
     */
    A(this, "miner");
    /**
     *  The latest RANDAO mix of the post beacon state of
     *  the previous block.
     */
    A(this, "prevRandao");
    /**
     *  Any extra data the validator wished to include.
     */
    A(this, "extraData");
    /**
     *  The base fee per gas that all transactions in this block were
     *  charged.
     *
     *  This adjusts after each block, depending on how congested the network
     *  is.
     */
    A(this, "baseFeePerGas");
    b(this, tn);
    d(this, tn, t.transactions.map((n) => typeof n != "string" ? new Ei(n, e) : n)), H(this, {
      provider: e,
      hash: $r(t.hash),
      number: t.number,
      timestamp: t.timestamp,
      parentHash: t.parentHash,
      parentBeaconBlockRoot: t.parentBeaconBlockRoot,
      nonce: t.nonce,
      difficulty: t.difficulty,
      gasLimit: t.gasLimit,
      gasUsed: t.gasUsed,
      blobGasUsed: t.blobGasUsed,
      excessBlobGas: t.excessBlobGas,
      miner: t.miner,
      prevRandao: $r(t.prevRandao),
      extraData: t.extraData,
      baseFeePerGas: $r(t.baseFeePerGas),
      stateRoot: t.stateRoot,
      receiptsRoot: t.receiptsRoot
    });
  }
  /**
   *  Returns the list of transaction hashes, in the order
   *  they were executed within the block.
   */
  get transactions() {
    return l(this, tn).map((t) => typeof t == "string" ? t : t.hash);
  }
  /**
   *  Returns the complete transactions, in the order they
   *  were executed within the block.
   *
   *  This is only available for blocks which prefetched
   *  transactions, by passing ``true`` to %%prefetchTxs%%
   *  into [[Provider-getBlock]].
   */
  get prefetchedTransactions() {
    const t = l(this, tn).slice();
    return t.length === 0 ? [] : (v(typeof t[0] == "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
      operation: "transactionResponses()"
    }), t);
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { baseFeePerGas: t, difficulty: e, extraData: n, gasLimit: s, gasUsed: i, hash: o, miner: a, prevRandao: c, nonce: u, number: f, parentHash: h, parentBeaconBlockRoot: p, stateRoot: w, receiptsRoot: E, timestamp: y, transactions: x } = this;
    return {
      _type: "Block",
      baseFeePerGas: pt(t),
      difficulty: pt(e),
      extraData: n,
      gasLimit: pt(s),
      gasUsed: pt(i),
      blobGasUsed: pt(this.blobGasUsed),
      excessBlobGas: pt(this.excessBlobGas),
      hash: o,
      miner: a,
      prevRandao: c,
      nonce: u,
      number: f,
      parentHash: h,
      timestamp: y,
      parentBeaconBlockRoot: p,
      stateRoot: w,
      receiptsRoot: E,
      transactions: x
    };
  }
  [Symbol.iterator]() {
    let t = 0;
    const e = this.transactions;
    return {
      next: () => t < this.length ? {
        value: e[t++],
        done: !1
      } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The number of transactions in this block.
   */
  get length() {
    return l(this, tn).length;
  }
  /**
   *  The [[link-js-date]] this block was included at.
   */
  get date() {
    return this.timestamp == null ? null : new Date(this.timestamp * 1e3);
  }
  /**
   *  Get the transaction at %%indexe%% within this block.
   */
  async getTransaction(t) {
    let e;
    if (typeof t == "number")
      e = l(this, tn)[t];
    else {
      const n = t.toLowerCase();
      for (const s of l(this, tn))
        if (typeof s == "string") {
          if (s !== n)
            continue;
          e = s;
          break;
        } else {
          if (s.hash === n)
            continue;
          e = s;
          break;
        }
    }
    if (e == null)
      throw new Error("no such tx");
    return typeof e == "string" ? await this.provider.getTransaction(e) : e;
  }
  /**
   *  If a **Block** was fetched with a request to include the transactions
   *  this will allow synchronous access to those transactions.
   *
   *  If the transactions were not prefetched, this will throw.
   */
  getPrefetchedTransaction(t) {
    const e = this.prefetchedTransactions;
    if (typeof t == "number")
      return e[t];
    t = t.toLowerCase();
    for (const n of e)
      if (n.hash === t)
        return n;
    m(!1, "no matching transaction", "indexOrHash", t);
  }
  /**
   *  Returns true if this block been mined. This provides a type guard
   *  for all properties on a [[MinedBlock]].
   */
  isMined() {
    return !!this.hash;
  }
  /**
   *  Returns true if this block is an [[link-eip-2930]] block.
   */
  isLondon() {
    return !!this.baseFeePerGas;
  }
  /**
   *  @_ignore:
   */
  orphanedEvent() {
    if (!this.isMined())
      throw new Error("");
    return Tg(this);
  }
}
tn = new WeakMap();
class Di {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    A(this, "provider");
    /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */
    A(this, "transactionHash");
    /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */
    A(this, "blockHash");
    /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */
    A(this, "blockNumber");
    /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */
    A(this, "removed");
    /**
     *  The address of the contract that emitted this log.
     */
    A(this, "address");
    /**
     *  The data included in this log when it was emitted.
     */
    A(this, "data");
    /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */
    A(this, "topics");
    /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */
    A(this, "index");
    /**
     *  The index within the transaction of this log.
     */
    A(this, "transactionIndex");
    this.provider = e;
    const n = Object.freeze(t.topics.slice());
    H(this, {
      transactionHash: t.transactionHash,
      blockHash: t.blockHash,
      blockNumber: t.blockNumber,
      removed: t.removed,
      address: t.address,
      data: t.data,
      topics: n,
      index: t.index,
      transactionIndex: t.transactionIndex
    });
  }
  /**
   *  Returns a JSON-compatible object.
   */
  toJSON() {
    const { address: t, blockHash: e, blockNumber: n, data: s, index: i, removed: o, topics: a, transactionHash: c, transactionIndex: u } = this;
    return {
      _type: "log",
      address: t,
      blockHash: e,
      blockNumber: n,
      data: s,
      index: i,
      removed: o,
      topics: a,
      transactionHash: c,
      transactionIndex: u
    };
  }
  /**
   *  Returns the block that this log occurred in.
   */
  async getBlock() {
    const t = await this.provider.getBlock(this.blockHash);
    return v(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  Returns the transaction that this log occurred in.
   */
  async getTransaction() {
    const t = await this.provider.getTransaction(this.transactionHash);
    return v(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  Returns the transaction receipt fot the transaction that this
   *  log occurred in.
   */
  async getTransactionReceipt() {
    const t = await this.provider.getTransactionReceipt(this.transactionHash);
    return v(!!t, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return Sg(this);
  }
}
var Bi;
class Ef {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    A(this, "provider");
    /**
     *  The address the transaction was sent to.
     */
    A(this, "to");
    /**
     *  The sender of the transaction.
     */
    A(this, "from");
    /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */
    A(this, "contractAddress");
    /**
     *  The transaction hash.
     */
    A(this, "hash");
    /**
     *  The index of this transaction within the block transactions.
     */
    A(this, "index");
    /**
     *  The block hash of the [[Block]] this transaction was included in.
     */
    A(this, "blockHash");
    /**
     *  The block number of the [[Block]] this transaction was included in.
     */
    A(this, "blockNumber");
    /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */
    A(this, "logsBloom");
    /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */
    A(this, "gasUsed");
    /**
     *  The gas used for BLObs. See [[link-eip-4844]].
     */
    A(this, "blobGasUsed");
    /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */
    A(this, "cumulativeGasUsed");
    /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */
    A(this, "gasPrice");
    /**
     *  The price paid per BLOB in gas. See [[link-eip-4844]].
     */
    A(this, "blobGasPrice");
    /**
     *  The [[link-eip-2718]] transaction type.
     */
    A(this, "type");
    //readonly byzantium!: boolean;
    /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */
    A(this, "status");
    /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */
    A(this, "root");
    b(this, Bi);
    d(this, Bi, Object.freeze(t.logs.map((s) => new Di(s, e))));
    let n = bf;
    t.effectiveGasPrice != null ? n = t.effectiveGasPrice : t.gasPrice != null && (n = t.gasPrice), H(this, {
      provider: e,
      to: t.to,
      from: t.from,
      contractAddress: t.contractAddress,
      hash: t.hash,
      index: t.index,
      blockHash: t.blockHash,
      blockNumber: t.blockNumber,
      logsBloom: t.logsBloom,
      gasUsed: t.gasUsed,
      cumulativeGasUsed: t.cumulativeGasUsed,
      blobGasUsed: t.blobGasUsed,
      gasPrice: n,
      blobGasPrice: t.blobGasPrice,
      type: t.type,
      //byzantium: tx.byzantium,
      status: t.status,
      root: t.root
    });
  }
  /**
   *  The logs for this transaction.
   */
  get logs() {
    return l(this, Bi);
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to: t,
      from: e,
      contractAddress: n,
      hash: s,
      index: i,
      blockHash: o,
      blockNumber: a,
      logsBloom: c,
      logs: u,
      //byzantium, 
      status: f,
      root: h
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash: o,
      blockNumber: a,
      //byzantium, 
      contractAddress: n,
      cumulativeGasUsed: pt(this.cumulativeGasUsed),
      from: e,
      gasPrice: pt(this.gasPrice),
      blobGasUsed: pt(this.blobGasUsed),
      blobGasPrice: pt(this.blobGasPrice),
      gasUsed: pt(this.gasUsed),
      hash: s,
      index: i,
      logs: u,
      logsBloom: c,
      root: h,
      status: f,
      to: t
    };
  }
  /**
   *  @_ignore:
   */
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () => t < this.length ? { value: this.logs[t++], done: !1 } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The total fee for this transaction, in wei.
   */
  get fee() {
    return this.gasUsed * this.gasPrice;
  }
  /**
   *  Resolves to the block this transaction occurred in.
   */
  async getBlock() {
    const t = await this.provider.getBlock(this.blockHash);
    if (t == null)
      throw new Error("TODO");
    return t;
  }
  /**
   *  Resolves to the transaction this transaction occurred in.
   */
  async getTransaction() {
    const t = await this.provider.getTransaction(this.hash);
    if (t == null)
      throw new Error("TODO");
    return t;
  }
  /**
   *  Resolves to the return value of the execution of this transaction.
   *
   *  Support for this feature is limited, as it requires an archive node
   *  with the ``debug_`` or ``trace_`` API enabled.
   */
  async getResult() {
    return await this.provider.getTransactionResult(this.hash);
  }
  /**
   *  Resolves to the number of confirmations this transaction has.
   */
  async confirmations() {
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return Nf(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(t) {
    return v(!t || t.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), xf(this, t);
  }
}
Bi = new WeakMap();
var On;
const xc = class xc {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */
    A(this, "provider");
    /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    A(this, "blockNumber");
    /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    A(this, "blockHash");
    /**
     *  The index within the block that this transaction resides at.
     */
    A(this, "index");
    /**
     *  The transaction hash.
     */
    A(this, "hash");
    /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */
    A(this, "type");
    /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */
    A(this, "to");
    /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */
    A(this, "from");
    /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */
    A(this, "nonce");
    /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */
    A(this, "gasLimit");
    /**
     *  The gas price can have various values, depending on the network.
     *
     *  In modern networks, for transactions that are included this is
     *  the //effective gas price// (the fee per gas that was actually
     *  charged), while for transactions that have not been included yet
     *  is the [[maxFeePerGas]].
     *
     *  For legacy transactions, or transactions on legacy networks, this
     *  is the fee that will be charged per unit of gas the transaction
     *  consumes.
     */
    A(this, "gasPrice");
    /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */
    A(this, "maxPriorityFeePerGas");
    /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */
    A(this, "maxFeePerGas");
    /**
     *  The [[link-eip-4844]] max fee per BLOb gas.
     */
    A(this, "maxFeePerBlobGas");
    /**
     *  The data.
     */
    A(this, "data");
    /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */
    A(this, "value");
    /**
     *  The chain ID.
     */
    A(this, "chainId");
    /**
     *  The signature.
     */
    A(this, "signature");
    /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */
    A(this, "accessList");
    /**
     *  The [[link-eip-4844]] BLOb versioned hashes.
     */
    A(this, "blobVersionedHashes");
    b(this, On);
    this.provider = e, this.blockNumber = t.blockNumber != null ? t.blockNumber : null, this.blockHash = t.blockHash != null ? t.blockHash : null, this.hash = t.hash, this.index = t.index, this.type = t.type, this.from = t.from, this.to = t.to || null, this.gasLimit = t.gasLimit, this.nonce = t.nonce, this.data = t.data, this.value = t.value, this.gasPrice = t.gasPrice, this.maxPriorityFeePerGas = t.maxPriorityFeePerGas != null ? t.maxPriorityFeePerGas : null, this.maxFeePerGas = t.maxFeePerGas != null ? t.maxFeePerGas : null, this.maxFeePerBlobGas = t.maxFeePerBlobGas != null ? t.maxFeePerBlobGas : null, this.chainId = t.chainId, this.signature = t.signature, this.accessList = t.accessList != null ? t.accessList : null, this.blobVersionedHashes = t.blobVersionedHashes != null ? t.blobVersionedHashes : null, d(this, On, -1);
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber: t, blockHash: e, index: n, hash: s, type: i, to: o, from: a, nonce: c, data: u, signature: f, accessList: h, blobVersionedHashes: p } = this;
    return {
      _type: "TransactionResponse",
      accessList: h,
      blockNumber: t,
      blockHash: e,
      blobVersionedHashes: p,
      chainId: pt(this.chainId),
      data: u,
      from: a,
      gasLimit: pt(this.gasLimit),
      gasPrice: pt(this.gasPrice),
      hash: s,
      maxFeePerGas: pt(this.maxFeePerGas),
      maxPriorityFeePerGas: pt(this.maxPriorityFeePerGas),
      maxFeePerBlobGas: pt(this.maxFeePerBlobGas),
      nonce: c,
      signature: f,
      to: o,
      index: n,
      type: i,
      value: pt(this.value)
    };
  }
  /**
   *  Resolves to the Block that this transaction was included in.
   *
   *  This will return null if the transaction has not been included yet.
   */
  async getBlock() {
    let t = this.blockNumber;
    if (t == null) {
      const n = await this.getTransaction();
      n && (t = n.blockNumber);
    }
    if (t == null)
      return null;
    const e = this.provider.getBlock(t);
    if (e == null)
      throw new Error("TODO");
    return e;
  }
  /**
   *  Resolves to this transaction being re-requested from the
   *  provider. This can be used if you have an unmined transaction
   *  and wish to get an up-to-date populated instance.
   */
  async getTransaction() {
    return this.provider.getTransaction(this.hash);
  }
  /**
   *  Resolve to the number of confirmations this transaction has.
   */
  async confirmations() {
    if (this.blockNumber == null) {
      const { tx: e, blockNumber: n } = await Ft({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber()
      });
      return e == null || e.blockNumber == null ? 0 : n - e.blockNumber + 1;
    }
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(t, e) {
    const n = t ?? 1, s = e ?? 0;
    let i = l(this, On), o = -1, a = i === -1;
    const c = async () => {
      if (a)
        return null;
      const { blockNumber: p, nonce: w } = await Ft({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (w < this.nonce) {
        i = p;
        return;
      }
      if (a)
        return null;
      const E = await this.getTransaction();
      if (!(E && E.blockNumber != null))
        for (o === -1 && (o = i - 3, o < l(this, On) && (o = l(this, On))); o <= p; ) {
          if (a)
            return null;
          const y = await this.provider.getBlock(o, !0);
          if (y == null)
            return;
          for (const x of y)
            if (x === this.hash)
              return;
          for (let x = 0; x < y.length; x++) {
            const N = await y.getTransaction(x);
            if (N.from === this.from && N.nonce === this.nonce) {
              if (a)
                return null;
              const O = await this.provider.getTransactionReceipt(N.hash);
              if (O == null || p - O.blockNumber + 1 < n)
                return;
              let C = "replaced";
              N.data === this.data && N.to === this.to && N.value === this.value ? C = "repriced" : N.data === "0x" && N.from === N.to && N.value === bf && (C = "cancelled"), v(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: C === "replaced" || C === "cancelled",
                reason: C,
                replacement: N.replaceableTransaction(i),
                hash: N.hash,
                receipt: O
              });
            }
          }
          o++;
        }
    }, u = (p) => {
      if (p == null || p.status !== 0)
        return p;
      v(!1, "transaction execution reverted", "CALL_EXCEPTION", {
        action: "sendTransaction",
        data: null,
        reason: null,
        invocation: null,
        revert: null,
        transaction: {
          to: p.to,
          from: p.from,
          data: ""
          // @TODO: in v7, split out sendTransaction properties
        },
        receipt: p
      });
    }, f = await this.provider.getTransactionReceipt(this.hash);
    if (n === 0)
      return u(f);
    if (f) {
      if (await f.confirmations() >= n)
        return u(f);
    } else if (await c(), n === 0)
      return null;
    return await new Promise((p, w) => {
      const E = [], y = () => {
        E.forEach((N) => N());
      };
      if (E.push(() => {
        a = !0;
      }), s > 0) {
        const N = setTimeout(() => {
          y(), w(lt("wait for transaction timeout", "TIMEOUT"));
        }, s);
        E.push(() => {
          clearTimeout(N);
        });
      }
      const x = async (N) => {
        if (await N.confirmations() >= n) {
          y();
          try {
            p(u(N));
          } catch (O) {
            w(O);
          }
        }
      };
      if (E.push(() => {
        this.provider.off(this.hash, x);
      }), this.provider.on(this.hash, x), i >= 0) {
        const N = async () => {
          try {
            await c();
          } catch (O) {
            if (vt(O, "TRANSACTION_REPLACED")) {
              y(), w(O);
              return;
            }
          }
          a || this.provider.once("block", N);
        };
        E.push(() => {
          this.provider.off("block", N);
        }), this.provider.once("block", N);
      }
    });
  }
  /**
   *  Returns ``true`` if this transaction has been included.
   *
   *  This is effective only as of the time the TransactionResponse
   *  was instantiated. To get up-to-date information, use
   *  [[getTransaction]].
   *
   *  This provides a Type Guard that this transaction will have
   *  non-null property values for properties that are null for
   *  unmined transactions.
   */
  isMined() {
    return this.blockHash != null;
  }
  /**
   *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
   *  transaction.
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
   *  transaction. See [[link-eip-2070]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if the transaction is a London (i.e. ``type == 2``)
   *  transaction. See [[link-eip-1559]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
   *  transaction. See [[link-eip-4844]].
   */
  isCancun() {
    return this.type === 3;
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that evict this transaction.
   */
  removedEvent() {
    return v(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Nf(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(t) {
    return v(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), v(!t || t.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), xf(this, t);
  }
  /**
   *  Returns a new TransactionResponse instance which has the ability to
   *  detect (and throw an error) if the transaction is replaced, which
   *  will begin scanning at %%startBlock%%.
   *
   *  This should generally not be used by developers and is intended
   *  primarily for internal use. Setting an incorrect %%startBlock%% can
   *  have devastating performance consequences if used incorrectly.
   */
  replaceableTransaction(t) {
    m(Number.isInteger(t) && t >= 0, "invalid startBlock", "startBlock", t);
    const e = new xc(this, this.provider);
    return d(e, On, t), e;
  }
};
On = new WeakMap();
let Ei = xc;
function Tg(r) {
  return { orphan: "drop-block", hash: r.hash, number: r.number };
}
function xf(r, t) {
  return { orphan: "reorder-transaction", tx: r, other: t };
}
function Nf(r) {
  return { orphan: "drop-transaction", tx: r };
}
function Sg(r) {
  return { orphan: "drop-log", log: {
    transactionHash: r.transactionHash,
    blockHash: r.blockHash,
    blockNumber: r.blockNumber,
    address: r.address,
    data: r.data,
    topics: Object.freeze(r.topics.slice()),
    index: r.index
  } };
}
class gc extends Di {
  /**
   * @_ignore:
   */
  constructor(e, n, s) {
    super(e, e.provider);
    /**
     *  The Contract Interface.
     */
    A(this, "interface");
    /**
     *  The matching event.
     */
    A(this, "fragment");
    /**
     *  The parsed arguments passed to the event by ``emit``.
     */
    A(this, "args");
    const i = n.decodeEventLog(s, e.data, e.topics);
    H(this, { args: i, fragment: s, interface: n });
  }
  /**
   *  The name of the event.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The signature of the event.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
class vf extends Di {
  /**
   * @_ignore:
   */
  constructor(e, n) {
    super(e, e.provider);
    /**
     *  The error encounted when trying to decode the log.
     */
    A(this, "error");
    H(this, { error: n });
  }
}
var Ps;
class Ug extends Ef {
  /**
   *  @_ignore:
   */
  constructor(e, n, s) {
    super(s, n);
    b(this, Ps);
    d(this, Ps, e);
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((e) => {
      const n = e.topics.length ? l(this, Ps).getEvent(e.topics[0]) : null;
      if (n)
        try {
          return new gc(e, l(this, Ps), n);
        } catch (s) {
          return new vf(e, s);
        }
      return e;
    });
  }
}
Ps = new WeakMap();
var Oi;
class mc extends Ei {
  /**
   *  @_ignore:
   */
  constructor(e, n, s) {
    super(s, n);
    b(this, Oi);
    d(this, Oi, e);
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(e, n) {
    const s = await super.wait(e, n);
    return s == null ? null : new Ug(l(this, Oi), this.provider, s);
  }
}
Oi = new WeakMap();
class Pf extends Zl {
  /**
   *  @_event:
   */
  constructor(e, n, s, i) {
    super(e, n, s);
    /**
     *  The log with no matching events.
     */
    A(this, "log");
    H(this, { log: i });
  }
  /**
   *  Resolves to the block the event occured in.
   */
  async getBlock() {
    return await this.log.getBlock();
  }
  /**
   *  Resolves to the transaction the event occured in.
   */
  async getTransaction() {
    return await this.log.getTransaction();
  }
  /**
   *  Resolves to the transaction receipt the event occured in.
   */
  async getTransactionReceipt() {
    return await this.log.getTransactionReceipt();
  }
}
class Fg extends Pf {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s, i) {
    super(t, e, n, new gc(i, t.interface, s));
    const o = t.interface.decodeEventLog(s, this.log.data, this.log.topics);
    H(this, { args: o, fragment: s });
  }
  /**
   *  The event name.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The event signature.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
const Il = BigInt(0);
function Cf(r) {
  return r && typeof r.call == "function";
}
function Bf(r) {
  return r && typeof r.estimateGas == "function";
}
function Jo(r) {
  return r && typeof r.resolveName == "function";
}
function Of(r) {
  return r && typeof r.sendTransaction == "function";
}
function If(r) {
  if (r != null) {
    if (Jo(r))
      return r;
    if (r.provider)
      return r.provider;
  }
}
var Ii;
class Lg {
  constructor(t, e, n) {
    b(this, Ii);
    A(this, "fragment");
    if (H(this, { fragment: e }), e.inputs.length < n.length)
      throw new Error("too many arguments");
    const s = kr(t.runner, "resolveName"), i = Jo(s) ? s : null;
    d(this, Ii, async function() {
      const o = await Promise.all(e.inputs.map((a, c) => n[c] == null ? null : a.walkAsync(n[c], (f, h) => f === "address" ? Array.isArray(h) ? Promise.all(h.map((p) => Gt(p, i))) : Gt(h, i) : h)));
      return t.interface.encodeFilterTopics(e, o);
    }());
  }
  getTopicFilter() {
    return l(this, Ii);
  }
}
Ii = new WeakMap();
function kr(r, t) {
  return r == null ? null : typeof r[t] == "function" ? r : r.provider && typeof r.provider[t] == "function" ? r.provider : null;
}
function er(r) {
  return r == null ? null : r.provider || null;
}
async function kf(r, t) {
  const e = kt.dereference(r, "overrides");
  m(typeof e == "object", "invalid overrides parameter", "overrides", r);
  const n = xo(e);
  return m(n.to == null || (t || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), m(n.data == null || (t || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
}
async function Dg(r, t, e) {
  const n = kr(r, "resolveName"), s = Jo(n) ? n : null;
  return await Promise.all(t.map((i, o) => i.walkAsync(e[o], (a, c) => (c = kt.dereference(c, a), a === "address" ? Gt(c, s) : c))));
}
function Mg(r) {
  const t = async function(o) {
    const a = await kf(o, ["data"]);
    a.to = await r.getAddress(), a.from && (a.from = await Gt(a.from, If(r.runner)));
    const c = r.interface, u = S(a.value || Il, "overrides.value") === Il, f = (a.data || "0x") === "0x";
    c.fallback && !c.fallback.payable && c.receive && !f && !u && m(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", o), m(c.fallback || f, "cannot send data to receive-only contract", "overrides.data", a.data);
    const h = c.receive || c.fallback && c.fallback.payable;
    return m(h || u, "cannot send value to non-payable fallback", "overrides.value", a.value), m(c.fallback || f, "cannot send data to receive-only contract", "overrides.data", a.data), a;
  }, e = async function(o) {
    const a = kr(r.runner, "call");
    v(Cf(a), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const c = await t(o);
    try {
      return await a.call(c);
    } catch (u) {
      throw qa(u) && u.data ? r.interface.makeError(u.data, c) : u;
    }
  }, n = async function(o) {
    const a = r.runner;
    v(Of(a), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const c = await a.sendTransaction(await t(o)), u = er(r.runner);
    return new mc(r.interface, u, c);
  }, s = async function(o) {
    const a = kr(r.runner, "estimateGas");
    return v(Bf(a), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await a.estimateGas(await t(o));
  }, i = async (o) => await n(o);
  return H(i, {
    _contract: r,
    estimateGas: s,
    populateTransaction: t,
    send: n,
    staticCall: e
  }), i;
}
function Gg(r, t) {
  const e = function(...u) {
    const f = r.interface.getFunction(t, u);
    return v(f, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: t, args: u }
    }), f;
  }, n = async function(...u) {
    const f = e(...u);
    let h = {};
    if (f.inputs.length + 1 === u.length && (h = await kf(u.pop()), h.from && (h.from = await Gt(h.from, If(r.runner)))), f.inputs.length !== u.length)
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    const p = await Dg(r.runner, f.inputs, u);
    return Object.assign({}, h, await Ft({
      to: r.getAddress(),
      data: r.interface.encodeFunctionData(f, p)
    }));
  }, s = async function(...u) {
    const f = await a(...u);
    return f.length === 1 ? f[0] : f;
  }, i = async function(...u) {
    const f = r.runner;
    v(Of(f), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const h = await f.sendTransaction(await n(...u)), p = er(r.runner);
    return new mc(r.interface, p, h);
  }, o = async function(...u) {
    const f = kr(r.runner, "estimateGas");
    return v(Bf(f), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await f.estimateGas(await n(...u));
  }, a = async function(...u) {
    const f = kr(r.runner, "call");
    v(Cf(f), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const h = await n(...u);
    let p = "0x";
    try {
      p = await f.call(h);
    } catch (E) {
      throw qa(E) && E.data ? r.interface.makeError(E.data, h) : E;
    }
    const w = e(...u);
    return r.interface.decodeFunctionResult(w, p);
  }, c = async (...u) => e(...u).constant ? await s(...u) : await i(...u);
  return H(c, {
    name: r.interface.getFunctionName(t),
    _contract: r,
    _key: t,
    getFragment: e,
    estimateGas: o,
    populateTransaction: n,
    send: i,
    staticCall: s,
    staticCallResult: a
  }), Object.defineProperty(c, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const u = r.interface.getFunction(t);
      return v(u, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: t }
      }), u;
    }
  }), c;
}
function Hg(r, t) {
  const e = function(...s) {
    const i = r.interface.getEvent(t, s);
    return v(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: t, args: s }
    }), i;
  }, n = function(...s) {
    return new Lg(r, e(...s), s);
  };
  return H(n, {
    name: r.interface.getEventName(t),
    _contract: r,
    _key: t,
    getFragment: e
  }), Object.defineProperty(n, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const s = r.interface.getEvent(t);
      return v(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: t }
      }), s;
    }
  }), n;
}
const No = Symbol.for("_ethersInternal_contract"), Rf = /* @__PURE__ */ new WeakMap();
function Qg(r, t) {
  Rf.set(r[No], t);
}
function Zt(r) {
  return Rf.get(r[No]);
}
function Vg(r) {
  return r && typeof r == "object" && "getTopicFilter" in r && typeof r.getTopicFilter == "function" && r.fragment;
}
async function yc(r, t) {
  let e, n = null;
  if (Array.isArray(t)) {
    const i = function(o) {
      if (st(o, 32))
        return o;
      const a = r.interface.getEvent(o);
      return m(a, "unknown fragment", "name", o), a.topicHash;
    };
    e = t.map((o) => o == null ? null : Array.isArray(o) ? o.map(i) : i(o));
  } else t === "*" ? e = [null] : typeof t == "string" ? st(t, 32) ? e = [t] : (n = r.interface.getEvent(t), m(n, "unknown fragment", "event", t), e = [n.topicHash]) : Vg(t) ? e = await t.getTopicFilter() : "fragment" in t ? (n = t.fragment, e = [n.topicHash]) : m(!1, "unknown event name", "event", t);
  e = e.map((i) => {
    if (i == null)
      return null;
    if (Array.isArray(i)) {
      const o = Array.from(new Set(i.map((a) => a.toLowerCase())).values());
      return o.length === 1 ? o[0] : (o.sort(), o);
    }
    return i.toLowerCase();
  });
  const s = e.map((i) => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
  return { fragment: n, tag: s, topics: e };
}
async function oi(r, t) {
  const { subs: e } = Zt(r);
  return e.get((await yc(r, t)).tag) || null;
}
async function kl(r, t, e) {
  const n = er(r.runner);
  v(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: t });
  const { fragment: s, tag: i, topics: o } = await yc(r, e), { addr: a, subs: c } = Zt(r);
  let u = c.get(i);
  if (!u) {
    const h = { address: a || r, topics: o }, p = (x) => {
      let N = s;
      if (N == null)
        try {
          N = r.interface.getEvent(x.topics[0]);
        } catch {
        }
      if (N) {
        const O = N, C = s ? r.interface.decodeEventLog(s, x.data, x.topics) : [];
        Ma(r, e, C, (M) => new Fg(r, M, e, O, x));
      } else
        Ma(r, e, [], (O) => new Pf(r, O, e, x));
    };
    let w = [];
    u = { tag: i, listeners: [], start: () => {
      w.length || w.push(n.on(h, p));
    }, stop: async () => {
      if (w.length == 0)
        return;
      let x = w;
      w = [], await Promise.all(x), n.off(h, p);
    } }, c.set(i, u);
  }
  return u;
}
let Da = Promise.resolve();
async function Jg(r, t, e, n) {
  await Da;
  const s = await oi(r, t);
  if (!s)
    return !1;
  const i = s.listeners.length;
  return s.listeners = s.listeners.filter(({ listener: o, once: a }) => {
    const c = Array.from(e);
    n && c.push(n(a ? null : o));
    try {
      o.call(r, ...c);
    } catch {
    }
    return !a;
  }), s.listeners.length === 0 && (s.stop(), Zt(r).subs.delete(s.tag)), i > 0;
}
async function Ma(r, t, e, n) {
  try {
    await Da;
  } catch {
  }
  const s = Jg(r, t, e, n);
  return Da = s, await s;
}
const Yi = ["then"];
var zl;
zl = No;
const fi = class fi {
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(t, e, n, s) {
    /**
     *  The target to connect to.
     *
     *  This can be an address, ENS name or any [[Addressable]], such as
     *  another contract. To get the resovled address, use the ``getAddress``
     *  method.
     */
    A(this, "target");
    /**
     *  The contract Interface.
     */
    A(this, "interface");
    /**
     *  The connected runner. This is generally a [[Provider]] or a
     *  [[Signer]], which dictates what operations are supported.
     *
     *  For example, a **Contract** connected to a [[Provider]] may
     *  only execute read-only operations.
     */
    A(this, "runner");
    /**
     *  All the Events available on this contract.
     */
    A(this, "filters");
    /**
     *  @_ignore:
     */
    A(this, zl);
    /**
     *  The fallback or receive function if any.
     */
    A(this, "fallback");
    m(typeof t == "string" || Lu(t), "invalid value for Contract target", "target", t), n == null && (n = null);
    const i = La.from(e);
    H(this, { target: t, runner: n, interface: i }), Object.defineProperty(this, No, { value: {} });
    let o, a = null, c = null;
    if (s) {
      const h = er(n);
      c = new mc(this.interface, h, s);
    }
    let u = /* @__PURE__ */ new Map();
    if (typeof t == "string")
      if (st(t))
        a = t, o = Promise.resolve(t);
      else {
        const h = kr(n, "resolveName");
        if (!Jo(h))
          throw lt("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        o = h.resolveName(t).then((p) => {
          if (p == null)
            throw lt("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: t
            });
          return Zt(this).addr = p, p;
        });
      }
    else
      o = t.getAddress().then((h) => {
        if (h == null)
          throw new Error("TODO");
        return Zt(this).addr = h, h;
      });
    Qg(this, { addrPromise: o, addr: a, deployTx: c, subs: u });
    const f = new Proxy({}, {
      get: (h, p, w) => {
        if (typeof p == "symbol" || Yi.indexOf(p) >= 0)
          return Reflect.get(h, p, w);
        try {
          return this.getEvent(p);
        } catch (E) {
          if (!vt(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (h, p) => Yi.indexOf(p) >= 0 ? Reflect.has(h, p) : Reflect.has(h, p) || this.interface.hasEvent(String(p))
    });
    return H(this, { filters: f }), H(this, {
      fallback: i.receive || i.fallback ? Mg(this) : null
    }), new Proxy(this, {
      get: (h, p, w) => {
        if (typeof p == "symbol" || p in h || Yi.indexOf(p) >= 0)
          return Reflect.get(h, p, w);
        try {
          return h.getFunction(p);
        } catch (E) {
          if (!vt(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (h, p) => typeof p == "symbol" || p in h || Yi.indexOf(p) >= 0 ? Reflect.has(h, p) : h.interface.hasFunction(p)
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(t) {
    return new fi(this.target, this.interface, t);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(t) {
    return new fi(t, this.interface, this.runner);
  }
  /**
   *  Return the resolved address of this Contract.
   */
  async getAddress() {
    return await Zt(this).addrPromise;
  }
  /**
   *  Return the deployed bytecode or null if no bytecode is found.
   */
  async getDeployedCode() {
    const t = er(this.runner);
    v(t, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const e = await t.getCode(await this.getAddress());
    return e === "0x" ? null : e;
  }
  /**
   *  Resolve to this Contract once the bytecode has been deployed, or
   *  resolve immediately if already deployed.
   */
  async waitForDeployment() {
    const t = this.deploymentTransaction();
    if (t)
      return await t.wait(), this;
    if (await this.getDeployedCode() != null)
      return this;
    const n = er(this.runner);
    return v(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" }), new Promise((s, i) => {
      const o = async () => {
        try {
          if (await this.getDeployedCode() != null)
            return s(this);
          n.once("block", o);
        } catch (a) {
          i(a);
        }
      };
      o();
    });
  }
  /**
   *  Return the transaction used to deploy this contract.
   *
   *  This is only available if this instance was returned from a
   *  [[ContractFactory]].
   */
  deploymentTransaction() {
    return Zt(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getFunction(t) {
    return typeof t != "string" && (t = t.format()), Gg(this, t);
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(t) {
    return typeof t != "string" && (t = t.format()), Hg(this, t);
  }
  /**
   *  @_ignore:
   */
  async queryTransaction(t) {
    throw new Error("@TODO");
  }
  /*
      // @TODO: this is a non-backwards compatible change, but will be added
      //        in v7 and in a potential SmartContract class in an upcoming
      //        v6 release
      async getTransactionReceipt(hash: string): Promise<null | ContractTransactionReceipt> {
          const provider = getProvider(this.runner);
          assert(provider, "contract runner does not have a provider",
              "UNSUPPORTED_OPERATION", { operation: "queryTransaction" });
  
          const receipt = await provider.getTransactionReceipt(hash);
          if (receipt == null) { return null; }
  
          return new ContractTransactionReceipt(this.interface, provider, receipt);
      }
      */
  /**
   *  Provide historic access to event data for %%event%% in the range
   *  %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
   *  inclusive.
   */
  async queryFilter(t, e, n) {
    e == null && (e = 0), n == null && (n = "latest");
    const { addr: s, addrPromise: i } = Zt(this), o = s || await i, { fragment: a, topics: c } = await yc(this, t), u = { address: o, topics: c, fromBlock: e, toBlock: n }, f = er(this.runner);
    return v(f, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await f.getLogs(u)).map((h) => {
      let p = a;
      if (p == null)
        try {
          p = this.interface.getEvent(h.topics[0]);
        } catch {
        }
      if (p)
        try {
          return new gc(h, this.interface, p);
        } catch (w) {
          return new vf(h, w);
        }
      return new Di(h, f);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(t, e) {
    const n = await kl(this, "on", t);
    return n.listeners.push({ listener: e, once: !1 }), n.start(), this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(t, e) {
    const n = await kl(this, "once", t);
    return n.listeners.push({ listener: e, once: !0 }), n.start(), this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(t, ...e) {
    return await Ma(this, t, e, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(t) {
    if (t) {
      const s = await oi(this, t);
      return s ? s.listeners.length : 0;
    }
    const { subs: e } = Zt(this);
    let n = 0;
    for (const { listeners: s } of e.values())
      n += s.length;
    return n;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(t) {
    if (t) {
      const s = await oi(this, t);
      return s ? s.listeners.map(({ listener: i }) => i) : [];
    }
    const { subs: e } = Zt(this);
    let n = [];
    for (const { listeners: s } of e.values())
      n = n.concat(s.map(({ listener: i }) => i));
    return n;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(t, e) {
    const n = await oi(this, t);
    if (!n)
      return this;
    if (e) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(e);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (e == null || n.listeners.length === 0) && (n.stop(), Zt(this).subs.delete(n.tag)), this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(t) {
    if (t) {
      const e = await oi(this, t);
      if (!e)
        return this;
      e.stop(), Zt(this).subs.delete(e.tag);
    } else {
      const { subs: e } = Zt(this);
      for (const { tag: n, stop: s } of e.values())
        s(), e.delete(n);
    }
    return this;
  }
  /**
   *  Alias for [on].
   */
  async addListener(t, e) {
    return await this.on(t, e);
  }
  /**
   *  Alias for [off].
   */
  async removeListener(t, e) {
    return await this.off(t, e);
  }
  /**
   *  Create a new Class for the %%abi%%.
   */
  static buildClass(t) {
    class e extends fi {
      constructor(s, i = null) {
        super(s, t, i);
      }
    }
    return e;
  }
  /**
   *  Create a new BaseContract with a specified Interface.
   */
  static from(t, e, n) {
    return n == null && (n = null), new this(t, e, n);
  }
};
let Ga = fi;
function _g() {
  return Ga;
}
class Hn extends _g() {
}
function aa(r) {
  return r.match(/^ipfs:\/\/ipfs\//i) ? r = r.substring(12) : r.match(/^ipfs:\/\//i) ? r = r.substring(7) : m(!1, "unsupported IPFS format", "link", r), `https://gateway.ipfs.io/ipfs/${r}`;
}
class zg {
  /**
   *  Creates a new **MulticoinProviderPluing** for %%name%%.
   */
  constructor(t) {
    /**
     *  The name.
     */
    A(this, "name");
    H(this, { name: t });
  }
  connect(t) {
    return this;
  }
  /**
   *  Returns ``true`` if %%coinType%% is supported by this plugin.
   */
  supportsCoinType(t) {
    return !1;
  }
  /**
   *  Resolves to the encoded %%address%% for %%coinType%%.
   */
  async encodeAddress(t, e) {
    throw new Error("unsupported coin");
  }
  /**
   *  Resolves to the decoded %%data%% for %%coinType%%.
   */
  async decodeAddress(t, e) {
    throw new Error("unsupported coin");
  }
}
const Tf = new RegExp("^(ipfs)://(.*)$", "i"), Rl = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  Tf,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
var In, pr, kn, Vr, Io, Sf;
const Wr = class Wr {
  constructor(t, e, n) {
    b(this, kn);
    /**
     *  The connected provider.
     */
    A(this, "provider");
    /**
     *  The address of the resolver.
     */
    A(this, "address");
    /**
     *  The name this resolver was resolved against.
     */
    A(this, "name");
    // For EIP-2544 names, the ancestor that provided the resolver
    b(this, In);
    b(this, pr);
    H(this, { provider: t, address: e, name: n }), d(this, In, null), d(this, pr, new Hn(e, [
      "function supportsInterface(bytes4) view returns (bool)",
      "function resolve(bytes, bytes) view returns (bytes)",
      "function addr(bytes32) view returns (address)",
      "function addr(bytes32, uint) view returns (bytes)",
      "function text(bytes32, string) view returns (string)",
      "function contenthash(bytes32) view returns (bytes)"
    ], t));
  }
  /**
   *  Resolves to true if the resolver supports wildcard resolution.
   */
  async supportsWildcard() {
    return l(this, In) == null && d(this, In, (async () => {
      try {
        return await l(this, pr).supportsInterface("0x9061b923");
      } catch (t) {
        if (vt(t, "CALL_EXCEPTION"))
          return !1;
        throw d(this, In, null), t;
      }
    })()), await l(this, In);
  }
  /**
   *  Resolves to the address for %%coinType%% or null if the
   *  provided %%coinType%% has not been configured.
   */
  async getAddress(t) {
    if (t == null && (t = 60), t === 60)
      try {
        const i = await P(this, kn, Vr).call(this, "addr(bytes32)");
        return i == null || i === di ? null : i;
      } catch (i) {
        if (vt(i, "CALL_EXCEPTION"))
          return null;
        throw i;
      }
    if (t >= 0 && t < 2147483648) {
      let i = t + 2147483648;
      const o = await P(this, kn, Vr).call(this, "addr(bytes32,uint)", [i]);
      if (st(o, 20))
        return nt(o);
    }
    let e = null;
    for (const i of this.provider.plugins)
      if (i instanceof zg && i.supportsCoinType(t)) {
        e = i;
        break;
      }
    if (e == null)
      return null;
    const n = await P(this, kn, Vr).call(this, "addr(bytes32,uint)", [t]);
    if (n == null || n === "0x")
      return null;
    const s = await e.decodeAddress(t, n);
    if (s != null)
      return s;
    v(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
      operation: `getAddress(${t})`,
      info: { coinType: t, data: n }
    });
  }
  /**
   *  Resolves to the EIP-634 text record for %%key%%, or ``null``
   *  if unconfigured.
   */
  async getText(t) {
    const e = await P(this, kn, Vr).call(this, "text(bytes32,string)", [t]);
    return e == null || e === "0x" ? null : e;
  }
  /**
   *  Rsolves to the content-hash or ``null`` if unconfigured.
   */
  async getContentHash() {
    const t = await P(this, kn, Vr).call(this, "contenthash(bytes32)");
    if (t == null || t === "0x")
      return null;
    const e = t.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
    if (e) {
      const s = e[1] === "e3010170" ? "ipfs" : "ipns", i = parseInt(e[4], 16);
      if (e[5].length === i * 2)
        return `${s}://${$f("0x" + e[2])}`;
    }
    const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
    if (n && n[1].length === 64)
      return `bzz://${n[1]}`;
    v(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
      operation: "getContentHash()",
      info: { data: t }
    });
  }
  /**
   *  Resolves to the avatar url or ``null`` if the avatar is either
   *  unconfigured or incorrectly configured (e.g. references an NFT
   *  not owned by the address).
   *
   *  If diagnosing issues with configurations, the [[_getAvatar]]
   *  method may be useful.
   */
  async getAvatar() {
    return (await this._getAvatar()).url;
  }
  /**
   *  When resolving an avatar, there are many steps involved, such
   *  fetching metadata and possibly validating ownership of an
   *  NFT.
   *
   *  This method can be used to examine each step and the value it
   *  was working from.
   */
  async _getAvatar() {
    const t = [{ type: "name", value: this.name }];
    try {
      const e = await this.getText("avatar");
      if (e == null)
        return t.push({ type: "!avatar", value: "" }), { url: null, linkage: t };
      t.push({ type: "avatar", value: e });
      for (let n = 0; n < Rl.length; n++) {
        const s = e.match(Rl[n]);
        if (s == null)
          continue;
        const i = s[1].toLowerCase();
        switch (i) {
          case "https":
          case "data":
            return t.push({ type: "url", value: e }), { linkage: t, url: e };
          case "ipfs": {
            const o = aa(e);
            return t.push({ type: "ipfs", value: e }), t.push({ type: "url", value: o }), { linkage: t, url: o };
          }
          case "erc721":
          case "erc1155": {
            const o = i === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
            t.push({ type: i, value: e });
            const a = await this.getAddress();
            if (a == null)
              return t.push({ type: "!owner", value: "" }), { url: null, linkage: t };
            const c = (s[2] || "").split("/");
            if (c.length !== 2)
              return t.push({ type: `!${i}caip`, value: s[2] || "" }), { url: null, linkage: t };
            const u = c[1], f = new Hn(c[0], [
              // ERC-721
              "function tokenURI(uint) view returns (string)",
              "function ownerOf(uint) view returns (address)",
              // ERC-1155
              "function uri(uint) view returns (string)",
              "function balanceOf(address, uint256) view returns (uint)"
            ], this.provider);
            if (i === "erc721") {
              const y = await f.ownerOf(u);
              if (a !== y)
                return t.push({ type: "!owner", value: y }), { url: null, linkage: t };
              t.push({ type: "owner", value: y });
            } else if (i === "erc1155") {
              const y = await f.balanceOf(a, u);
              if (!y)
                return t.push({ type: "!balance", value: "0" }), { url: null, linkage: t };
              t.push({ type: "balance", value: y.toString() });
            }
            let h = await f[o](u);
            if (h == null || h === "0x")
              return t.push({ type: "!metadata-url", value: "" }), { url: null, linkage: t };
            t.push({ type: "metadata-url-base", value: h }), i === "erc1155" && (h = h.replace("{id}", Qn(u, 32).substring(2)), t.push({ type: "metadata-url-expanded", value: h })), h.match(/^ipfs:/i) && (h = aa(h)), t.push({ type: "metadata-url", value: h });
            let p = {};
            const w = await new fn(h).send();
            w.assertOk();
            try {
              p = w.bodyJson;
            } catch {
              try {
                t.push({ type: "!metadata", value: w.bodyText });
              } catch {
                const N = w.body;
                return N && t.push({ type: "!metadata", value: R(N) }), { url: null, linkage: t };
              }
              return { url: null, linkage: t };
            }
            if (!p)
              return t.push({ type: "!metadata", value: "" }), { url: null, linkage: t };
            t.push({ type: "metadata", value: JSON.stringify(p) });
            let E = p.image;
            if (typeof E != "string")
              return t.push({ type: "!imageUrl", value: "" }), { url: null, linkage: t };
            if (!E.match(/^(https:\/\/|data:)/i)) {
              if (E.match(Tf) == null)
                return t.push({ type: "!imageUrl-ipfs", value: E }), { url: null, linkage: t };
              t.push({ type: "imageUrl-ipfs", value: E }), E = aa(E);
            }
            return t.push({ type: "url", value: E }), { linkage: t, url: E };
          }
        }
      }
    } catch {
    }
    return { linkage: t, url: null };
  }
  static async getEnsAddress(t) {
    const e = await t.getNetwork(), n = e.getPlugin("org.ethers.plugins.network.Ens");
    return v(n, "network does not support ENS", "UNSUPPORTED_OPERATION", {
      operation: "getEnsAddress",
      info: { network: e }
    }), n.address;
  }
  /**
   *  Resolve to the ENS resolver for %%name%% using %%provider%% or
   *  ``null`` if unconfigured.
   */
  static async fromName(t, e) {
    var s;
    let n = e;
    for (; ; ) {
      if (n === "" || n === "." || e !== "eth" && n === "eth")
        return null;
      const i = await P(s = Wr, Io, Sf).call(s, t, n);
      if (i != null) {
        const o = new Wr(t, i, e);
        return n !== e && !await o.supportsWildcard() ? null : o;
      }
      n = n.split(".").slice(1).join(".");
    }
  }
};
In = new WeakMap(), pr = new WeakMap(), kn = new WeakSet(), Vr = async function(t, e) {
  e = (e || []).slice();
  const n = l(this, pr).interface;
  e.unshift(Ua(this.name));
  let s = null;
  await this.supportsWildcard() && (s = n.getFunction(t), v(s, "missing fragment", "UNKNOWN_ERROR", {
    info: { funcName: t }
  }), e = [
    _p(this.name, 255),
    n.encodeFunctionData(s, e)
  ], t = "resolve(bytes,bytes)"), e.push({
    enableCcipRead: !0
  });
  try {
    const i = await l(this, pr)[t](...e);
    return s ? n.decodeFunctionResult(s, i)[0] : i;
  } catch (i) {
    if (!vt(i, "CALL_EXCEPTION"))
      throw i;
  }
  return null;
}, Io = new WeakSet(), Sf = async function(t, e) {
  const n = await Wr.getEnsAddress(t);
  try {
    const i = await new Hn(n, [
      "function resolver(bytes32) view returns (address)"
    ], t).resolver(Ua(e), {
      enableCcipRead: !0
    });
    return i === di ? null : i;
  } catch (s) {
    throw s;
  }
  return null;
}, b(Wr, Io);
let vo = Wr;
const Tl = BigInt(0);
function Y(r, t) {
  return function(e) {
    return e == null ? t : r(e);
  };
}
function _o(r, t) {
  return (e) => {
    if (t && e == null)
      return null;
    if (!Array.isArray(e))
      throw new Error("not an array");
    return e.map((n) => r(n));
  };
}
function Mi(r, t) {
  return (e) => {
    const n = {};
    for (const s in r) {
      let i = s;
      if (t && s in t && !(i in e)) {
        for (const o of t[s])
          if (o in e) {
            i = o;
            break;
          }
      }
      try {
        const o = r[s](e[i]);
        o !== void 0 && (n[s] = o);
      } catch (o) {
        const a = o instanceof Error ? o.message : "not-an-error";
        v(!1, `invalid value for value.${s} (${a})`, "BAD_DATA", { value: e });
      }
    }
    return n;
  };
}
function Kg(r) {
  switch (r) {
    case !0:
    case "true":
      return !0;
    case !1:
    case "false":
      return !1;
  }
  m(!1, `invalid boolean; ${JSON.stringify(r)}`, "value", r);
}
function js(r) {
  return m(st(r, !0), "invalid data", "value", r), r;
}
function Nt(r) {
  return m(st(r, 32), "invalid hash", "value", r), r;
}
const jg = Mi({
  address: nt,
  blockHash: Nt,
  blockNumber: Q,
  data: js,
  index: Q,
  removed: Y(Kg, !1),
  topics: _o(Nt),
  transactionHash: Nt,
  transactionIndex: Q
}, {
  index: ["logIndex"]
});
function Wg(r) {
  return jg(r);
}
const Yg = Mi({
  hash: Y(Nt),
  parentHash: Nt,
  parentBeaconBlockRoot: Y(Nt, null),
  number: Q,
  timestamp: Q,
  nonce: Y(js),
  difficulty: S,
  gasLimit: S,
  gasUsed: S,
  stateRoot: Y(Nt, null),
  receiptsRoot: Y(Nt, null),
  blobGasUsed: Y(S, null),
  excessBlobGas: Y(S, null),
  miner: Y(nt),
  prevRandao: Y(Nt, null),
  extraData: js,
  baseFeePerGas: Y(S)
}, {
  prevRandao: ["mixHash"]
});
function Zg(r) {
  const t = Yg(r);
  return t.transactions = r.transactions.map((e) => typeof e == "string" ? e : Uf(e)), t;
}
const Xg = Mi({
  transactionIndex: Q,
  blockNumber: Q,
  transactionHash: Nt,
  address: nt,
  topics: _o(Nt),
  data: js,
  index: Q,
  blockHash: Nt
}, {
  index: ["logIndex"]
});
function qg(r) {
  return Xg(r);
}
const $g = Mi({
  to: Y(nt, null),
  from: Y(nt, null),
  contractAddress: Y(nt, null),
  // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
  index: Q,
  root: Y(R),
  gasUsed: S,
  blobGasUsed: Y(S, null),
  logsBloom: Y(js),
  blockHash: Nt,
  hash: Nt,
  logs: _o(qg),
  blockNumber: Q,
  //confirmations: allowNull(getNumber, null),
  cumulativeGasUsed: S,
  effectiveGasPrice: Y(S),
  blobGasPrice: Y(S, null),
  status: Y(Q),
  type: Y(Q, 0)
}, {
  effectiveGasPrice: ["gasPrice"],
  hash: ["transactionHash"],
  index: ["transactionIndex"]
});
function t0(r) {
  return $g(r);
}
function Uf(r) {
  r.to && S(r.to) === Tl && (r.to = "0x0000000000000000000000000000000000000000");
  const t = Mi({
    hash: Nt,
    // Some nodes do not return this, usually test nodes (like Ganache)
    index: Y(Q, void 0),
    type: (e) => e === "0x" || e == null ? 0 : Q(e),
    accessList: Y(Tr, null),
    blobVersionedHashes: Y(_o(Nt, !0), null),
    blockHash: Y(Nt, null),
    blockNumber: Y(Q, null),
    transactionIndex: Y(Q, null),
    from: nt,
    // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
    gasPrice: Y(S),
    maxPriorityFeePerGas: Y(S),
    maxFeePerGas: Y(S),
    maxFeePerBlobGas: Y(S, null),
    gasLimit: S,
    to: Y(nt, null),
    value: S,
    nonce: Q,
    data: js,
    creates: Y(nt, null),
    chainId: Y(S, null)
  }, {
    data: ["input"],
    gasLimit: ["gas"],
    index: ["transactionIndex"]
  })(r);
  if (t.to == null && t.creates == null && (t.creates = jd(t)), (r.type === 1 || r.type === 2) && r.accessList == null && (t.accessList = []), r.signature ? t.signature = be.from(r.signature) : t.signature = be.from(r), t.chainId == null) {
    const e = t.signature.legacyChainId;
    e != null && (t.chainId = e);
  }
  return t.blockHash && S(t.blockHash) === Tl && (t.blockHash = null), t;
}
const e0 = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class Gi {
  /**
   *  Creates a new **NetworkPlugin**.
   */
  constructor(t) {
    /**
     *  The name of the plugin.
     *
     *  It is recommended to use reverse-domain-notation, which permits
     *  unique names with a known authority as well as hierarchal entries.
     */
    A(this, "name");
    H(this, { name: t });
  }
  /**
   *  Creates a copy of this plugin.
   */
  clone() {
    return new Gi(this.name);
  }
}
class zo extends Gi {
  /**
   *  Creates a new GasCostPlugin from %%effectiveBlock%% until the
   *  latest block or another GasCostPlugin supercedes that block number,
   *  with the associated %%costs%%.
   */
  constructor(e, n) {
    e == null && (e = 0);
    super(`org.ethers.network.plugins.GasCost#${e || 0}`);
    /**
     *  The block number to treat these values as valid from.
     *
     *  This allows a hardfork to have updated values included as well as
     *  mulutiple hardforks to be supported.
     */
    A(this, "effectiveBlock");
    /**
     *  The transactions base fee.
     */
    A(this, "txBase");
    /**
     *  The fee for creating a new account.
     */
    A(this, "txCreate");
    /**
     *  The fee per zero-byte in the data.
     */
    A(this, "txDataZero");
    /**
     *  The fee per non-zero-byte in the data.
     */
    A(this, "txDataNonzero");
    /**
     *  The fee per storage key in the [[link-eip-2930]] access list.
     */
    A(this, "txAccessListStorageKey");
    /**
     *  The fee per address in the [[link-eip-2930]] access list.
     */
    A(this, "txAccessListAddress");
    const s = { effectiveBlock: e };
    function i(o, a) {
      let c = (n || {})[o];
      c == null && (c = a), m(typeof c == "number", `invalud value for ${o}`, "costs", n), s[o] = c;
    }
    i("txBase", 21e3), i("txCreate", 32e3), i("txDataZero", 4), i("txDataNonzero", 16), i("txAccessListStorageKey", 1900), i("txAccessListAddress", 2400), H(this, s);
  }
  clone() {
    return new zo(this.effectiveBlock, this);
  }
}
class Ko extends Gi {
  /**
   *  Creates a new **EnsPlugin** connected to %%address%% on the
   *  %%targetNetwork%%. The default ENS address and mainnet is used
   *  if unspecified.
   */
  constructor(e, n) {
    super("org.ethers.plugins.network.Ens");
    /**
     *  The ENS Registrty Contract address.
     */
    A(this, "address");
    /**
     *  The chain ID that the ENS contract lives on.
     */
    A(this, "targetNetwork");
    H(this, {
      address: e || e0,
      targetNetwork: n ?? 1
    });
  }
  clone() {
    return new Ko(this.address, this.targetNetwork);
  }
}
var ki, Ri;
class n0 extends Gi {
  /**
   *  Creates a new **FetchUrlFeeDataNetworkPlugin** which will
   *  be used when computing the fee data for the network.
   */
  constructor(e, n) {
    super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    b(this, ki);
    b(this, Ri);
    d(this, ki, e), d(this, Ri, n);
  }
  /**
   *  The URL to initialize the FetchRequest with in %%processFunc%%.
   */
  get url() {
    return l(this, ki);
  }
  /**
   *  The callback to use when computing the FeeData.
   */
  get processFunc() {
    return l(this, Ri);
  }
  // We are immutable, so we can serve as our own clone
  clone() {
    return this;
  }
}
ki = new WeakMap(), Ri = new WeakMap();
const ca = /* @__PURE__ */ new Map();
var Cs, Bs, Rn;
const Yr = class Yr {
  /**
   *  Creates a new **Network** for %%name%% and %%chainId%%.
   */
  constructor(t, e) {
    b(this, Cs);
    b(this, Bs);
    b(this, Rn);
    d(this, Cs, t), d(this, Bs, S(e)), d(this, Rn, /* @__PURE__ */ new Map());
  }
  /**
   *  Returns a JSON-compatible representation of a Network.
   */
  toJSON() {
    return { name: this.name, chainId: String(this.chainId) };
  }
  /**
   *  The network common name.
   *
   *  This is the canonical name, as networks migh have multiple
   *  names.
   */
  get name() {
    return l(this, Cs);
  }
  set name(t) {
    d(this, Cs, t);
  }
  /**
   *  The network chain ID.
   */
  get chainId() {
    return l(this, Bs);
  }
  set chainId(t) {
    d(this, Bs, S(t, "chainId"));
  }
  /**
   *  Returns true if %%other%% matches this network. Any chain ID
   *  must match, and if no chain ID is present, the name must match.
   *
   *  This method does not currently check for additional properties,
   *  such as ENS address or plug-in compatibility.
   */
  matches(t) {
    if (t == null)
      return !1;
    if (typeof t == "string") {
      try {
        return this.chainId === S(t);
      } catch {
      }
      return this.name === t;
    }
    if (typeof t == "number" || typeof t == "bigint") {
      try {
        return this.chainId === S(t);
      } catch {
      }
      return !1;
    }
    if (typeof t == "object") {
      if (t.chainId != null) {
        try {
          return this.chainId === S(t.chainId);
        } catch {
        }
        return !1;
      }
      return t.name != null ? this.name === t.name : !1;
    }
    return !1;
  }
  /**
   *  Returns the list of plugins currently attached to this Network.
   */
  get plugins() {
    return Array.from(l(this, Rn).values());
  }
  /**
   *  Attach a new %%plugin%% to this Network. The network name
   *  must be unique, excluding any fragment.
   */
  attachPlugin(t) {
    if (l(this, Rn).get(t.name))
      throw new Error(`cannot replace existing plugin: ${t.name} `);
    return l(this, Rn).set(t.name, t.clone()), this;
  }
  /**
   *  Return the plugin, if any, matching %%name%% exactly. Plugins
   *  with fragments will not be returned unless %%name%% includes
   *  a fragment.
   */
  getPlugin(t) {
    return l(this, Rn).get(t) || null;
  }
  /**
   *  Gets a list of all plugins that match %%name%%, with otr without
   *  a fragment.
   */
  getPlugins(t) {
    return this.plugins.filter((e) => e.name.split("#")[0] === t);
  }
  /**
   *  Create a copy of this Network.
   */
  clone() {
    const t = new Yr(this.name, this.chainId);
    return this.plugins.forEach((e) => {
      t.attachPlugin(e.clone());
    }), t;
  }
  /**
   *  Compute the intrinsic gas required for a transaction.
   *
   *  A GasCostPlugin can be attached to override the default
   *  values.
   */
  computeIntrinsicGas(t) {
    const e = this.getPlugin("org.ethers.plugins.network.GasCost") || new zo();
    let n = e.txBase;
    if (t.to == null && (n += e.txCreate), t.data)
      for (let s = 2; s < t.data.length; s += 2)
        t.data.substring(s, s + 2) === "00" ? n += e.txDataZero : n += e.txDataNonzero;
    if (t.accessList) {
      const s = Tr(t.accessList);
      for (const i in s)
        n += e.txAccessListAddress + e.txAccessListStorageKey * s[i].storageKeys.length;
    }
    return n;
  }
  /**
   *  Returns a new Network for the %%network%% name or chainId.
   */
  static from(t) {
    if (r0(), t == null)
      return Yr.from("mainnet");
    if (typeof t == "number" && (t = BigInt(t)), typeof t == "string" || typeof t == "bigint") {
      const e = ca.get(t);
      if (e)
        return e();
      if (typeof t == "bigint")
        return new Yr("unknown", t);
      m(!1, "unknown network", "network", t);
    }
    if (typeof t.clone == "function")
      return t.clone();
    if (typeof t == "object") {
      m(typeof t.name == "string" && typeof t.chainId == "number", "invalid network object name or chainId", "network", t);
      const e = new Yr(t.name, t.chainId);
      return (t.ensAddress || t.ensNetwork != null) && e.attachPlugin(new Ko(t.ensAddress, t.ensNetwork)), e;
    }
    m(!1, "invalid network", "network", t);
  }
  /**
   *  Register %%nameOrChainId%% with a function which returns
   *  an instance of a Network representing that chain.
   */
  static register(t, e) {
    typeof t == "number" && (t = BigInt(t));
    const n = ca.get(t);
    n && m(!1, `conflicting network for ${JSON.stringify(n.name)}`, "nameOrChainId", t), ca.set(t, e);
  }
};
Cs = new WeakMap(), Bs = new WeakMap(), Rn = new WeakMap();
let De = Yr;
function Sl(r, t) {
  const e = String(r);
  if (!e.match(/^[0-9.]+$/))
    throw new Error(`invalid gwei value: ${r}`);
  const n = e.split(".");
  if (n.length === 1 && n.push(""), n.length !== 2)
    throw new Error(`invalid gwei value: ${r}`);
  for (; n[1].length < t; )
    n[1] += "0";
  if (n[1].length > 9) {
    let s = BigInt(n[1].substring(0, 9));
    n[1].substring(9).match(/^0+$/) || s++, n[1] = s.toString();
  }
  return BigInt(n[0] + n[1]);
}
function Ul(r) {
  return new n0(r, async (t, e, n) => {
    n.setHeader("User-Agent", "ethers");
    let s;
    try {
      const [i, o] = await Promise.all([
        n.send(),
        t()
      ]);
      s = i;
      const a = s.bodyJson.standard;
      return {
        gasPrice: o.gasPrice,
        maxFeePerGas: Sl(a.maxFee, 9),
        maxPriorityFeePerGas: Sl(a.maxPriorityFee, 9)
      };
    } catch (i) {
      v(!1, `error encountered with polygon gas station (${JSON.stringify(n.url)})`, "SERVER_ERROR", { request: n, response: s, error: i });
    }
  });
}
let Fl = !1;
function r0() {
  if (Fl)
    return;
  Fl = !0;
  function r(t, e, n) {
    const s = function() {
      const i = new De(t, e);
      return n.ensNetwork != null && i.attachPlugin(new Ko(null, n.ensNetwork)), i.attachPlugin(new zo()), (n.plugins || []).forEach((o) => {
        i.attachPlugin(o);
      }), i;
    };
    De.register(t, s), De.register(e, s), n.altNames && n.altNames.forEach((i) => {
      De.register(i, s);
    });
  }
  r("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }), r("ropsten", 3, { ensNetwork: 3 }), r("rinkeby", 4, { ensNetwork: 4 }), r("goerli", 5, { ensNetwork: 5 }), r("kovan", 42, { ensNetwork: 42 }), r("sepolia", 11155111, { ensNetwork: 11155111 }), r("holesky", 17e3, { ensNetwork: 17e3 }), r("classic", 61, {}), r("classicKotti", 6, {}), r("arbitrum", 42161, {
    ensNetwork: 1
  }), r("arbitrum-goerli", 421613, {}), r("arbitrum-sepolia", 421614, {}), r("base", 8453, { ensNetwork: 1 }), r("base-goerli", 84531, {}), r("base-sepolia", 84532, {}), r("bnb", 56, { ensNetwork: 1 }), r("bnbt", 97, {}), r("linea", 59144, { ensNetwork: 1 }), r("linea-goerli", 59140, {}), r("linea-sepolia", 59141, {}), r("matic", 137, {
    ensNetwork: 1,
    plugins: [
      Ul("https://gasstation.polygon.technology/v2")
    ]
  }), r("matic-amoy", 80002, {}), r("matic-mumbai", 80001, {
    altNames: ["maticMumbai", "maticmum"],
    plugins: [
      Ul("https://gasstation-testnet.polygon.technology/v2")
    ]
  }), r("optimism", 10, {
    ensNetwork: 1,
    plugins: []
  }), r("optimism-goerli", 420, {}), r("optimism-sepolia", 11155420, {}), r("xdai", 100, { ensNetwork: 1 });
}
function Ha(r) {
  return JSON.parse(JSON.stringify(r));
}
var en, ie, Tn, Te, Os, so;
class s0 {
  /**
   *  Create a new **PollingBlockSubscriber** attached to %%provider%%.
   */
  constructor(t) {
    b(this, Os);
    b(this, en);
    b(this, ie);
    b(this, Tn);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    b(this, Te);
    d(this, en, t), d(this, ie, null), d(this, Tn, 4e3), d(this, Te, -2);
  }
  /**
   *  The polling interval.
   */
  get pollingInterval() {
    return l(this, Tn);
  }
  set pollingInterval(t) {
    d(this, Tn, t);
  }
  start() {
    l(this, ie) || (d(this, ie, l(this, en)._setTimeout(P(this, Os, so).bind(this), l(this, Tn))), P(this, Os, so).call(this));
  }
  stop() {
    l(this, ie) && (l(this, en)._clearTimeout(l(this, ie)), d(this, ie, null));
  }
  pause(t) {
    this.stop(), t && d(this, Te, -2);
  }
  resume() {
    this.start();
  }
}
en = new WeakMap(), ie = new WeakMap(), Tn = new WeakMap(), Te = new WeakMap(), Os = new WeakSet(), so = async function() {
  try {
    const t = await l(this, en).getBlockNumber();
    if (l(this, Te) === -2) {
      d(this, Te, t);
      return;
    }
    if (t !== l(this, Te)) {
      for (let e = l(this, Te) + 1; e <= t; e++) {
        if (l(this, ie) == null)
          return;
        await l(this, en).emit("block", e);
      }
      d(this, Te, t);
    }
  } catch {
  }
  l(this, ie) != null && d(this, ie, l(this, en)._setTimeout(P(this, Os, so).bind(this), l(this, Tn)));
};
var gr, mr, Sn;
class wc {
  /**
   *  Create a new **OnBlockSubscriber** attached to %%provider%%.
   */
  constructor(t) {
    b(this, gr);
    b(this, mr);
    b(this, Sn);
    d(this, gr, t), d(this, Sn, !1), d(this, mr, (e) => {
      this._poll(e, l(this, gr));
    });
  }
  /**
   *  Called on every new block.
   */
  async _poll(t, e) {
    throw new Error("sub-classes must override this");
  }
  start() {
    l(this, Sn) || (d(this, Sn, !0), l(this, mr).call(this, -2), l(this, gr).on("block", l(this, mr)));
  }
  stop() {
    l(this, Sn) && (d(this, Sn, !1), l(this, gr).off("block", l(this, mr)));
  }
  pause(t) {
    this.stop();
  }
  resume() {
    this.start();
  }
}
gr = new WeakMap(), mr = new WeakMap(), Sn = new WeakMap();
var Is, nn;
class i0 extends wc {
  constructor(e, n) {
    super(e);
    b(this, Is);
    b(this, nn);
    d(this, Is, n), d(this, nn, -2);
  }
  pause(e) {
    e && d(this, nn, -2), super.pause(e);
  }
  async _poll(e, n) {
    const s = await n.getBlock(l(this, Is));
    s != null && (l(this, nn) === -2 ? d(this, nn, s.number) : s.number > l(this, nn) && (n.emit(l(this, Is), s.number), d(this, nn, s.number)));
  }
}
Is = new WeakMap(), nn = new WeakMap();
var ko;
class o0 extends wc {
  constructor(e, n) {
    super(e);
    b(this, ko);
    d(this, ko, Ha(n));
  }
  async _poll(e, n) {
    throw new Error("@TODO");
  }
}
ko = new WeakMap();
var ks;
class a0 extends wc {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%hash%%.
   */
  constructor(e, n) {
    super(e);
    b(this, ks);
    d(this, ks, n);
  }
  async _poll(e, n) {
    const s = await n.getTransactionReceipt(l(this, ks));
    s && n.emit(l(this, ks), s);
  }
}
ks = new WeakMap();
var rn, Rs, Ts, Un, oe, Ro, Ff;
class Ac {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%filter%%.
   */
  constructor(t, e) {
    b(this, Ro);
    b(this, rn);
    b(this, Rs);
    b(this, Ts);
    b(this, Un);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    b(this, oe);
    d(this, rn, t), d(this, Rs, Ha(e)), d(this, Ts, P(this, Ro, Ff).bind(this)), d(this, Un, !1), d(this, oe, -2);
  }
  start() {
    l(this, Un) || (d(this, Un, !0), l(this, oe) === -2 && l(this, rn).getBlockNumber().then((t) => {
      d(this, oe, t);
    }), l(this, rn).on("block", l(this, Ts)));
  }
  stop() {
    l(this, Un) && (d(this, Un, !1), l(this, rn).off("block", l(this, Ts)));
  }
  pause(t) {
    this.stop(), t && d(this, oe, -2);
  }
  resume() {
    this.start();
  }
}
rn = new WeakMap(), Rs = new WeakMap(), Ts = new WeakMap(), Un = new WeakMap(), oe = new WeakMap(), Ro = new WeakSet(), Ff = async function(t) {
  if (l(this, oe) === -2)
    return;
  const e = Ha(l(this, Rs));
  e.fromBlock = l(this, oe) + 1, e.toBlock = t;
  const n = await l(this, rn).getLogs(e);
  if (n.length === 0) {
    l(this, oe) < t - 60 && d(this, oe, t - 60);
    return;
  }
  for (const s of n)
    l(this, rn).emit(l(this, Rs), s), d(this, oe, s.blockNumber);
};
const c0 = BigInt(2), l0 = 10;
function Zi(r) {
  return r && typeof r.then == "function";
}
function io(r, t) {
  return r + ":" + JSON.stringify(t, (e, n) => {
    if (n == null)
      return "null";
    if (typeof n == "bigint")
      return `bigint:${n.toString()}`;
    if (typeof n == "string")
      return n.toLowerCase();
    if (typeof n == "object" && !Array.isArray(n)) {
      const s = Object.keys(n);
      return s.sort(), s.reduce((i, o) => (i[o] = n[o], i), {});
    }
    return n;
  });
}
class Lf {
  /**
   *  Create a new UnmanagedSubscriber with %%name%%.
   */
  constructor(t) {
    /**
     *  The name fof the event.
     */
    A(this, "name");
    H(this, { name: t });
  }
  start() {
  }
  stop() {
  }
  pause(t) {
  }
  resume() {
  }
}
function u0(r) {
  return JSON.parse(JSON.stringify(r));
}
function Qa(r) {
  return r = Array.from(new Set(r).values()), r.sort(), r;
}
async function la(r, t) {
  if (r == null)
    throw new Error("invalid event");
  if (Array.isArray(r) && (r = { topics: r }), typeof r == "string")
    switch (r) {
      case "block":
      case "debug":
      case "error":
      case "finalized":
      case "network":
      case "pending":
      case "safe":
        return { type: r, tag: r };
    }
  if (st(r, 32)) {
    const e = r.toLowerCase();
    return { type: "transaction", tag: io("tx", { hash: e }), hash: e };
  }
  if (r.orphan) {
    const e = r;
    return { type: "orphan", tag: io("orphan", e), filter: u0(e) };
  }
  if (r.address || r.topics) {
    const e = r, n = {
      topics: (e.topics || []).map((s) => s == null ? null : Array.isArray(s) ? Qa(s.map((i) => i.toLowerCase())) : s.toLowerCase())
    };
    if (e.address) {
      const s = [], i = [], o = (a) => {
        st(a) ? s.push(a) : i.push((async () => {
          s.push(await Gt(a, t));
        })());
      };
      Array.isArray(e.address) ? e.address.forEach(o) : o(e.address), i.length && await Promise.all(i), n.address = Qa(s.map((a) => a.toLowerCase()));
    }
    return { filter: n, tag: io("event", n), type: "event" };
  }
  m(!1, "unknown ProviderEvent", "event", r);
}
function ua() {
  return (/* @__PURE__ */ new Date()).getTime();
}
const f0 = {
  cacheTimeout: 250,
  pollingInterval: 4e3
};
var Ot, Fn, It, Ss, te, yr, Ln, sn, Ti, ae, Us, Fs, z, Yt, Va, Ja, ai, _a, ci, oo;
class h0 {
  /**
   *  Create a new **AbstractProvider** connected to %%network%%, or
   *  use the various network detection capabilities to discover the
   *  [[Network]] if necessary.
   */
  constructor(t, e) {
    b(this, z);
    b(this, Ot);
    b(this, Fn);
    // null=unpaused, true=paused+dropWhilePaused, false=paused
    b(this, It);
    b(this, Ss);
    b(this, te);
    b(this, yr);
    b(this, Ln);
    // The most recent block number if running an event or -1 if no "block" event
    b(this, sn);
    b(this, Ti);
    b(this, ae);
    b(this, Us);
    b(this, Fs);
    if (d(this, Fs, Object.assign({}, f0, e || {})), t === "any")
      d(this, yr, !0), d(this, te, null);
    else if (t) {
      const n = De.from(t);
      d(this, yr, !1), d(this, te, Promise.resolve(n)), setTimeout(() => {
        this.emit("network", n, null);
      }, 0);
    } else
      d(this, yr, !1), d(this, te, null);
    d(this, sn, -1), d(this, Ln, /* @__PURE__ */ new Map()), d(this, Ot, /* @__PURE__ */ new Map()), d(this, Fn, /* @__PURE__ */ new Map()), d(this, It, null), d(this, Ss, !1), d(this, Ti, 1), d(this, ae, /* @__PURE__ */ new Map()), d(this, Us, !1);
  }
  get pollingInterval() {
    return l(this, Fs).pollingInterval;
  }
  /**
   *  Returns ``this``, to allow an **AbstractProvider** to implement
   *  the [[ContractRunner]] interface.
   */
  get provider() {
    return this;
  }
  /**
   *  Returns all the registered plug-ins.
   */
  get plugins() {
    return Array.from(l(this, Fn).values());
  }
  /**
   *  Attach a new plug-in.
   */
  attachPlugin(t) {
    if (l(this, Fn).get(t.name))
      throw new Error(`cannot replace existing plugin: ${t.name} `);
    return l(this, Fn).set(t.name, t.connect(this)), this;
  }
  /**
   *  Get a plugin by name.
   */
  getPlugin(t) {
    return l(this, Fn).get(t) || null;
  }
  /**
   *  Prevent any CCIP-read operation, regardless of whether requested
   *  in a [[call]] using ``enableCcipRead``.
   */
  get disableCcipRead() {
    return l(this, Us);
  }
  set disableCcipRead(t) {
    d(this, Us, !!t);
  }
  /**
   *  Resolves to the data for executing the CCIP-read operations.
   */
  async ccipReadFetch(t, e, n) {
    if (this.disableCcipRead || n.length === 0 || t.to == null)
      return null;
    const s = t.to.toLowerCase(), i = e.toLowerCase(), o = [];
    for (let a = 0; a < n.length; a++) {
      const c = n[a], u = c.replace("{sender}", s).replace("{data}", i), f = new fn(u);
      c.indexOf("{data}") === -1 && (f.body = { data: i, sender: s }), this.emit("debug", { action: "sendCcipReadFetchRequest", request: f, index: a, urls: n });
      let h = "unknown error", p;
      try {
        p = await f.send();
      } catch (w) {
        o.push(w.message), this.emit("debug", { action: "receiveCcipReadFetchError", request: f, result: { error: w } });
        continue;
      }
      try {
        const w = p.bodyJson;
        if (w.data)
          return this.emit("debug", { action: "receiveCcipReadFetchResult", request: f, result: w }), w.data;
        w.message && (h = w.message), this.emit("debug", { action: "receiveCcipReadFetchError", request: f, result: w });
      } catch {
      }
      v(p.statusCode < 400 || p.statusCode >= 500, `response not found during CCIP fetch: ${h}`, "OFFCHAIN_FAULT", { reason: "404_MISSING_RESOURCE", transaction: t, info: { url: c, errorMessage: h } }), o.push(h);
    }
    v(!1, `error encountered during CCIP fetch: ${o.map((a) => JSON.stringify(a)).join(", ")}`, "OFFCHAIN_FAULT", {
      reason: "500_SERVER_ERROR",
      transaction: t,
      info: { urls: n, errorMessages: o }
    });
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a block before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Block]].
   */
  _wrapBlock(t, e) {
    return new Rg(Zg(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a log before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Log]].
   */
  _wrapLog(t, e) {
    return new Di(Wg(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  receipt before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionReceipt]].
   */
  _wrapTransactionReceipt(t, e) {
    return new Ef(t0(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  response before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionResponse]].
   */
  _wrapTransactionResponse(t, e) {
    return new Ei(Uf(t), this);
  }
  /**
   *  Resolves to the Network, forcing a network detection using whatever
   *  technique the sub-class requires.
   *
   *  Sub-classes **must** override this.
   */
  _detectNetwork() {
    v(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
      operation: "_detectNetwork"
    });
  }
  /**
   *  Sub-classes should use this to perform all built-in operations. All
   *  methods sanitizes and normalizes the values passed into this.
   *
   *  Sub-classes **must** override this.
   */
  async _perform(t) {
    v(!1, `unsupported method: ${t.method}`, "UNSUPPORTED_OPERATION", {
      operation: t.method,
      info: t
    });
  }
  // State
  async getBlockNumber() {
    const t = Q(await P(this, z, Yt).call(this, { method: "getBlockNumber" }), "%response");
    return l(this, sn) >= 0 && d(this, sn, t), t;
  }
  /**
   *  Returns or resolves to the address for %%address%%, resolving ENS
   *  names and [[Addressable]] objects and returning if already an
   *  address.
   */
  _getAddress(t) {
    return Gt(t, this);
  }
  /**
   *  Returns or resolves to a valid block tag for %%blockTag%%, resolving
   *  negative values and returning if already a valid block tag.
   */
  _getBlockTag(t) {
    if (t == null)
      return "latest";
    switch (t) {
      case "earliest":
        return "0x0";
      case "finalized":
      case "latest":
      case "pending":
      case "safe":
        return t;
    }
    if (st(t))
      return st(t, 32) ? t : zr(t);
    if (typeof t == "bigint" && (t = Q(t, "blockTag")), typeof t == "number")
      return t >= 0 ? zr(t) : l(this, sn) >= 0 ? zr(l(this, sn) + t) : this.getBlockNumber().then((e) => zr(e + t));
    m(!1, "invalid blockTag", "blockTag", t);
  }
  /**
   *  Returns or resolves to a filter for %%filter%%, resolving any ENS
   *  names or [[Addressable]] object and returning if already a valid
   *  filter.
   */
  _getFilter(t) {
    const e = (t.topics || []).map((c) => c == null ? null : Array.isArray(c) ? Qa(c.map((u) => u.toLowerCase())) : c.toLowerCase()), n = "blockHash" in t ? t.blockHash : void 0, s = (c, u, f) => {
      let h;
      switch (c.length) {
        case 0:
          break;
        case 1:
          h = c[0];
          break;
        default:
          c.sort(), h = c;
      }
      if (n && (u != null || f != null))
        throw new Error("invalid filter");
      const p = {};
      return h && (p.address = h), e.length && (p.topics = e), u && (p.fromBlock = u), f && (p.toBlock = f), n && (p.blockHash = n), p;
    };
    let i = [];
    if (t.address)
      if (Array.isArray(t.address))
        for (const c of t.address)
          i.push(this._getAddress(c));
      else
        i.push(this._getAddress(t.address));
    let o;
    "fromBlock" in t && (o = this._getBlockTag(t.fromBlock));
    let a;
    return "toBlock" in t && (a = this._getBlockTag(t.toBlock)), i.filter((c) => typeof c != "string").length || o != null && typeof o != "string" || a != null && typeof a != "string" ? Promise.all([Promise.all(i), o, a]).then((c) => s(c[0], c[1], c[2])) : s(i, o, a);
  }
  /**
   *  Returns or resolves to a transaction for %%request%%, resolving
   *  any ENS names or [[Addressable]] and returning if already a valid
   *  transaction.
   */
  _getTransactionRequest(t) {
    const e = xo(t), n = [];
    if (["to", "from"].forEach((s) => {
      if (e[s] == null)
        return;
      const i = Gt(e[s], this);
      Zi(i) ? n.push(async function() {
        e[s] = await i;
      }()) : e[s] = i;
    }), e.blockTag != null) {
      const s = this._getBlockTag(e.blockTag);
      Zi(s) ? n.push(async function() {
        e.blockTag = await s;
      }()) : e.blockTag = s;
    }
    return n.length ? async function() {
      return await Promise.all(n), e;
    }() : e;
  }
  async getNetwork() {
    if (l(this, te) == null) {
      const s = (async () => {
        try {
          const i = await this._detectNetwork();
          return this.emit("network", i, null), i;
        } catch (i) {
          throw l(this, te) === s && d(this, te, null), i;
        }
      })();
      return d(this, te, s), (await s).clone();
    }
    const t = l(this, te), [e, n] = await Promise.all([
      t,
      this._detectNetwork()
      // The actual connected network
    ]);
    return e.chainId !== n.chainId && (l(this, yr) ? (this.emit("network", n, e), l(this, te) === t && d(this, te, Promise.resolve(n))) : v(!1, `network changed: ${e.chainId} => ${n.chainId} `, "NETWORK_ERROR", {
      event: "changed"
    })), e.clone();
  }
  async getFeeData() {
    const t = await this.getNetwork(), e = async () => {
      const { _block: s, gasPrice: i, priorityFee: o } = await Ft({
        _block: P(this, z, _a).call(this, "latest", !1),
        gasPrice: (async () => {
          try {
            const f = await P(this, z, Yt).call(this, { method: "getGasPrice" });
            return S(f, "%response");
          } catch {
          }
          return null;
        })(),
        priorityFee: (async () => {
          try {
            const f = await P(this, z, Yt).call(this, { method: "getPriorityFee" });
            return S(f, "%response");
          } catch {
          }
          return null;
        })()
      });
      let a = null, c = null;
      const u = this._wrapBlock(s, t);
      return u && u.baseFeePerGas && (c = o ?? BigInt("1000000000"), a = u.baseFeePerGas * c0 + c), new Ol(i, a, c);
    }, n = t.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    if (n) {
      const s = new fn(n.url), i = await n.processFunc(e, this, s);
      return new Ol(i.gasPrice, i.maxFeePerGas, i.maxPriorityFeePerGas);
    }
    return await e();
  }
  async estimateGas(t) {
    let e = this._getTransactionRequest(t);
    return Zi(e) && (e = await e), S(await P(this, z, Yt).call(this, {
      method: "estimateGas",
      transaction: e
    }), "%response");
  }
  async call(t) {
    const { tx: e, blockTag: n } = await Ft({
      tx: this._getTransactionRequest(t),
      blockTag: this._getBlockTag(t.blockTag)
    });
    return await P(this, z, Ja).call(this, P(this, z, Va).call(this, e, n, t.enableCcipRead ? 0 : -1));
  }
  async getBalance(t, e) {
    return S(await P(this, z, ai).call(this, { method: "getBalance" }, t, e), "%response");
  }
  async getTransactionCount(t, e) {
    return Q(await P(this, z, ai).call(this, { method: "getTransactionCount" }, t, e), "%response");
  }
  async getCode(t, e) {
    return R(await P(this, z, ai).call(this, { method: "getCode" }, t, e));
  }
  async getStorage(t, e, n) {
    const s = S(e, "position");
    return R(await P(this, z, ai).call(this, { method: "getStorage", position: s }, t, n));
  }
  // Write
  async broadcastTransaction(t) {
    const { blockNumber: e, hash: n, network: s } = await Ft({
      blockNumber: this.getBlockNumber(),
      hash: this._perform({
        method: "broadcastTransaction",
        signedTransaction: t
      }),
      network: this.getNetwork()
    }), i = bo.from(t);
    if (i.hash !== n)
      throw new Error("@TODO: the returned hash did not match");
    return this._wrapTransactionResponse(i, s).replaceableTransaction(e);
  }
  // Queries
  async getBlock(t, e) {
    const { network: n, params: s } = await Ft({
      network: this.getNetwork(),
      params: P(this, z, _a).call(this, t, !!e)
    });
    return s == null ? null : this._wrapBlock(s, n);
  }
  async getTransaction(t) {
    const { network: e, params: n } = await Ft({
      network: this.getNetwork(),
      params: P(this, z, Yt).call(this, { method: "getTransaction", hash: t })
    });
    return n == null ? null : this._wrapTransactionResponse(n, e);
  }
  async getTransactionReceipt(t) {
    const { network: e, params: n } = await Ft({
      network: this.getNetwork(),
      params: P(this, z, Yt).call(this, { method: "getTransactionReceipt", hash: t })
    });
    if (n == null)
      return null;
    if (n.gasPrice == null && n.effectiveGasPrice == null) {
      const s = await P(this, z, Yt).call(this, { method: "getTransaction", hash: t });
      if (s == null)
        throw new Error("report this; could not find tx or effectiveGasPrice");
      n.effectiveGasPrice = s.gasPrice;
    }
    return this._wrapTransactionReceipt(n, e);
  }
  async getTransactionResult(t) {
    const { result: e } = await Ft({
      network: this.getNetwork(),
      result: P(this, z, Yt).call(this, { method: "getTransactionResult", hash: t })
    });
    return e == null ? null : R(e);
  }
  // Bloom-filter Queries
  async getLogs(t) {
    let e = this._getFilter(t);
    Zi(e) && (e = await e);
    const { network: n, params: s } = await Ft({
      network: this.getNetwork(),
      params: P(this, z, Yt).call(this, { method: "getLogs", filter: e })
    });
    return s.map((i) => this._wrapLog(i, n));
  }
  // ENS
  _getProvider(t) {
    v(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
      operation: "_getProvider()"
    });
  }
  async getResolver(t) {
    return await vo.fromName(this, t);
  }
  async getAvatar(t) {
    const e = await this.getResolver(t);
    return e ? await e.getAvatar() : null;
  }
  async resolveName(t) {
    const e = await this.getResolver(t);
    return e ? await e.getAddress() : null;
  }
  async lookupAddress(t) {
    t = nt(t);
    const e = Ua(t.substring(2).toLowerCase() + ".addr.reverse");
    try {
      const n = await vo.getEnsAddress(this), i = await new Hn(n, [
        "function resolver(bytes32) view returns (address)"
      ], this).resolver(e);
      if (i == null || i === di)
        return null;
      const a = await new Hn(i, [
        "function name(bytes32) view returns (string)"
      ], this).name(e);
      return await this.resolveName(a) !== t ? null : a;
    } catch (n) {
      if (vt(n, "BAD_DATA") && n.value === "0x" || vt(n, "CALL_EXCEPTION"))
        return null;
      throw n;
    }
    return null;
  }
  async waitForTransaction(t, e, n) {
    const s = e ?? 1;
    return s === 0 ? this.getTransactionReceipt(t) : new Promise(async (i, o) => {
      let a = null;
      const c = async (u) => {
        try {
          const f = await this.getTransactionReceipt(t);
          if (f != null && u - f.blockNumber + 1 >= s) {
            i(f), a && (clearTimeout(a), a = null);
            return;
          }
        } catch (f) {
          console.log("EEE", f);
        }
        this.once("block", c);
      };
      n != null && (a = setTimeout(() => {
        a != null && (a = null, this.off("block", c), o(lt("timeout", "TIMEOUT", { reason: "timeout" })));
      }, n)), c(await this.getBlockNumber());
    });
  }
  async waitForBlock(t) {
    v(!1, "not implemented yet", "NOT_IMPLEMENTED", {
      operation: "waitForBlock"
    });
  }
  /**
   *  Clear a timer created using the [[_setTimeout]] method.
   */
  _clearTimeout(t) {
    const e = l(this, ae).get(t);
    e && (e.timer && clearTimeout(e.timer), l(this, ae).delete(t));
  }
  /**
   *  Create a timer that will execute %%func%% after at least %%timeout%%
   *  (in ms). If %%timeout%% is unspecified, then %%func%% will execute
   *  in the next event loop.
   *
   *  [Pausing](AbstractProvider-paused) the provider will pause any
   *  associated timers.
   */
  _setTimeout(t, e) {
    e == null && (e = 0);
    const n = qs(this, Ti)._++, s = () => {
      l(this, ae).delete(n), t();
    };
    if (this.paused)
      l(this, ae).set(n, { timer: null, func: s, time: e });
    else {
      const i = setTimeout(s, e);
      l(this, ae).set(n, { timer: i, func: s, time: ua() });
    }
    return n;
  }
  /**
   *  Perform %%func%% on each subscriber.
   */
  _forEachSubscriber(t) {
    for (const e of l(this, Ot).values())
      t(e.subscriber);
  }
  /**
   *  Sub-classes may override this to customize subscription
   *  implementations.
   */
  _getSubscriber(t) {
    switch (t.type) {
      case "debug":
      case "error":
      case "network":
        return new Lf(t.type);
      case "block": {
        const e = new s0(this);
        return e.pollingInterval = this.pollingInterval, e;
      }
      case "safe":
      case "finalized":
        return new i0(this, t.type);
      case "event":
        return new Ac(this, t.filter);
      case "transaction":
        return new a0(this, t.hash);
      case "orphan":
        return new o0(this, t.filter);
    }
    throw new Error(`unsupported event: ${t.type}`);
  }
  /**
   *  If a [[Subscriber]] fails and needs to replace itself, this
   *  method may be used.
   *
   *  For example, this is used for providers when using the
   *  ``eth_getFilterChanges`` method, which can return null if state
   *  filters are not supported by the backend, allowing the Subscriber
   *  to swap in a [[PollingEventSubscriber]].
   */
  _recoverSubscriber(t, e) {
    for (const n of l(this, Ot).values())
      if (n.subscriber === t) {
        n.started && n.subscriber.stop(), n.subscriber = e, n.started && e.start(), l(this, It) != null && e.pause(l(this, It));
        break;
      }
  }
  async on(t, e) {
    const n = await P(this, z, oo).call(this, t);
    return n.listeners.push({ listener: e, once: !1 }), n.started || (n.subscriber.start(), n.started = !0, l(this, It) != null && n.subscriber.pause(l(this, It))), this;
  }
  async once(t, e) {
    const n = await P(this, z, oo).call(this, t);
    return n.listeners.push({ listener: e, once: !0 }), n.started || (n.subscriber.start(), n.started = !0, l(this, It) != null && n.subscriber.pause(l(this, It))), this;
  }
  async emit(t, ...e) {
    const n = await P(this, z, ci).call(this, t, e);
    if (!n || n.listeners.length === 0)
      return !1;
    const s = n.listeners.length;
    return n.listeners = n.listeners.filter(({ listener: i, once: o }) => {
      const a = new Zl(this, o ? null : i, t);
      try {
        i.call(this, ...e, a);
      } catch {
      }
      return !o;
    }), n.listeners.length === 0 && (n.started && n.subscriber.stop(), l(this, Ot).delete(n.tag)), s > 0;
  }
  async listenerCount(t) {
    if (t) {
      const n = await P(this, z, ci).call(this, t);
      return n ? n.listeners.length : 0;
    }
    let e = 0;
    for (const { listeners: n } of l(this, Ot).values())
      e += n.length;
    return e;
  }
  async listeners(t) {
    if (t) {
      const n = await P(this, z, ci).call(this, t);
      return n ? n.listeners.map(({ listener: s }) => s) : [];
    }
    let e = [];
    for (const { listeners: n } of l(this, Ot).values())
      e = e.concat(n.map(({ listener: s }) => s));
    return e;
  }
  async off(t, e) {
    const n = await P(this, z, ci).call(this, t);
    if (!n)
      return this;
    if (e) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(e);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (!e || n.listeners.length === 0) && (n.started && n.subscriber.stop(), l(this, Ot).delete(n.tag)), this;
  }
  async removeAllListeners(t) {
    if (t) {
      const { tag: e, started: n, subscriber: s } = await P(this, z, oo).call(this, t);
      n && s.stop(), l(this, Ot).delete(e);
    } else
      for (const [e, { started: n, subscriber: s }] of l(this, Ot))
        n && s.stop(), l(this, Ot).delete(e);
    return this;
  }
  // Alias for "on"
  async addListener(t, e) {
    return await this.on(t, e);
  }
  // Alias for "off"
  async removeListener(t, e) {
    return this.off(t, e);
  }
  /**
   *  If this provider has been destroyed using the [[destroy]] method.
   *
   *  Once destroyed, all resources are reclaimed, internal event loops
   *  and timers are cleaned up and no further requests may be sent to
   *  the provider.
   */
  get destroyed() {
    return l(this, Ss);
  }
  /**
   *  Sub-classes may use this to shutdown any sockets or release their
   *  resources and reject any pending requests.
   *
   *  Sub-classes **must** call ``super.destroy()``.
   */
  destroy() {
    this.removeAllListeners();
    for (const t of l(this, ae).keys())
      this._clearTimeout(t);
    d(this, Ss, !0);
  }
  /**
   *  Whether the provider is currently paused.
   *
   *  A paused provider will not emit any events, and generally should
   *  not make any requests to the network, but that is up to sub-classes
   *  to manage.
   *
   *  Setting ``paused = true`` is identical to calling ``.pause(false)``,
   *  which will buffer any events that occur while paused until the
   *  provider is unpaused.
   */
  get paused() {
    return l(this, It) != null;
  }
  set paused(t) {
    !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1));
  }
  /**
   *  Pause the provider. If %%dropWhilePaused%%, any events that occur
   *  while paused are dropped, otherwise all events will be emitted once
   *  the provider is unpaused.
   */
  pause(t) {
    if (d(this, sn, -1), l(this, It) != null) {
      if (l(this, It) == !!t)
        return;
      v(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
        operation: "pause"
      });
    }
    this._forEachSubscriber((e) => e.pause(t)), d(this, It, !!t);
    for (const e of l(this, ae).values())
      e.timer && clearTimeout(e.timer), e.time = ua() - e.time;
  }
  /**
   *  Resume the provider.
   */
  resume() {
    if (l(this, It) != null) {
      this._forEachSubscriber((t) => t.resume()), d(this, It, null);
      for (const t of l(this, ae).values()) {
        let e = t.time;
        e < 0 && (e = 0), t.time = ua(), setTimeout(t.func, e);
      }
    }
  }
}
Ot = new WeakMap(), Fn = new WeakMap(), It = new WeakMap(), Ss = new WeakMap(), te = new WeakMap(), yr = new WeakMap(), Ln = new WeakMap(), sn = new WeakMap(), Ti = new WeakMap(), ae = new WeakMap(), Us = new WeakMap(), Fs = new WeakMap(), z = new WeakSet(), Yt = async function(t) {
  const e = l(this, Fs).cacheTimeout;
  if (e < 0)
    return await this._perform(t);
  const n = io(t.method, t);
  let s = l(this, Ln).get(n);
  return s || (s = this._perform(t), l(this, Ln).set(n, s), setTimeout(() => {
    l(this, Ln).get(n) === s && l(this, Ln).delete(n);
  }, e)), await s;
}, Va = async function(t, e, n) {
  v(n < l0, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
    reason: "TOO_MANY_REDIRECTS",
    transaction: Object.assign({}, t, { blockTag: e, enableCcipRead: !0 })
  });
  const s = xo(t);
  try {
    return R(await this._perform({ method: "call", transaction: s, blockTag: e }));
  } catch (i) {
    if (!this.disableCcipRead && qa(i) && i.data && n >= 0 && e === "latest" && s.to != null && ut(i.data, 0, 4) === "0x556f1830") {
      const o = i.data, a = await Gt(s.to, this);
      let c;
      try {
        c = y0(ut(i.data, 4));
      } catch (h) {
        v(!1, h.message, "OFFCHAIN_FAULT", {
          reason: "BAD_DATA",
          transaction: s,
          info: { data: o }
        });
      }
      v(c.sender.toLowerCase() === a.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
        action: "call",
        data: o,
        reason: "OffchainLookup",
        transaction: s,
        invocation: null,
        revert: {
          signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
          name: "OffchainLookup",
          args: c.errorArgs
        }
      });
      const u = await this.ccipReadFetch(s, c.calldata, c.urls);
      v(u != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
        reason: "FETCH_FAILED",
        transaction: s,
        info: { data: i.data, errorArgs: c.errorArgs }
      });
      const f = {
        to: a,
        data: yt([c.selector, m0([u, c.extraData])])
      };
      this.emit("debug", { action: "sendCcipReadCall", transaction: f });
      try {
        const h = await P(this, z, Va).call(this, f, e, n + 1);
        return this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, f), result: h }), h;
      } catch (h) {
        throw this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, f), error: h }), h;
      }
    }
    throw i;
  }
}, Ja = async function(t) {
  const { value: e } = await Ft({
    network: this.getNetwork(),
    value: t
  });
  return e;
}, ai = async function(t, e, n) {
  let s = this._getAddress(e), i = this._getBlockTag(n);
  return (typeof s != "string" || typeof i != "string") && ([s, i] = await Promise.all([s, i])), await P(this, z, Ja).call(this, P(this, z, Yt).call(this, Object.assign(t, { address: s, blockTag: i })));
}, _a = async function(t, e) {
  if (st(t, 32))
    return await P(this, z, Yt).call(this, {
      method: "getBlock",
      blockHash: t,
      includeTransactions: e
    });
  let n = this._getBlockTag(t);
  return typeof n != "string" && (n = await n), await P(this, z, Yt).call(this, {
    method: "getBlock",
    blockTag: n,
    includeTransactions: e
  });
}, ci = async function(t, e) {
  let n = await la(t, this);
  return n.type === "event" && e && e.length > 0 && e[0].removed === !0 && (n = await la({ orphan: "drop-log", log: e[0] }, this)), l(this, Ot).get(n.tag) || null;
}, oo = async function(t) {
  const e = await la(t, this), n = e.tag;
  let s = l(this, Ot).get(n);
  return s || (s = { subscriber: this._getSubscriber(e), tag: n, addressableMap: /* @__PURE__ */ new WeakMap(), nameMap: /* @__PURE__ */ new Map(), started: !1, listeners: [] }, l(this, Ot).set(n, s)), s;
};
function d0(r, t) {
  try {
    const e = za(r, t);
    if (e)
      return fo(e);
  } catch {
  }
  return null;
}
function za(r, t) {
  if (r === "0x")
    return null;
  try {
    const e = Q(ut(r, t, t + 32)), n = Q(ut(r, e, e + 32));
    return ut(r, e + 32, e + 32 + n);
  } catch {
  }
  return null;
}
function Ll(r) {
  const t = Dt(r);
  if (t.length > 32)
    throw new Error("internal; should not happen");
  const e = new Uint8Array(32);
  return e.set(t, 32 - t.length), e;
}
function p0(r) {
  if (r.length % 32 === 0)
    return r;
  const t = new Uint8Array(Math.ceil(r.length / 32) * 32);
  return t.set(r), t;
}
const g0 = new Uint8Array([]);
function m0(r) {
  const t = [];
  let e = 0;
  for (let n = 0; n < r.length; n++)
    t.push(g0), e += 32;
  for (let n = 0; n < r.length; n++) {
    const s = Z(r[n]);
    t[n] = Ll(e), t.push(Ll(s.length)), t.push(p0(s)), e += 32 + Math.ceil(s.length / 32) * 32;
  }
  return yt(t);
}
const Dl = "0x0000000000000000000000000000000000000000000000000000000000000000";
function y0(r) {
  const t = {
    sender: "",
    urls: [],
    calldata: "",
    selector: "",
    extraData: "",
    errorArgs: []
  };
  v(Zr(r) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
    reason: "insufficient OffchainLookup data"
  });
  const e = ut(r, 0, 32);
  v(ut(e, 0, 12) === ut(Dl, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup sender"
  }), t.sender = ut(e, 12);
  try {
    const n = [], s = Q(ut(r, 32, 64)), i = Q(ut(r, s, s + 32)), o = ut(r, s + 32);
    for (let a = 0; a < i; a++) {
      const c = d0(o, a * 32);
      if (c == null)
        throw new Error("abort");
      n.push(c);
    }
    t.urls = n;
  } catch {
    v(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup urls"
    });
  }
  try {
    const n = za(r, 64);
    if (n == null)
      throw new Error("abort");
    t.calldata = n;
  } catch {
    v(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup calldata"
    });
  }
  v(ut(r, 100, 128) === ut(Dl, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup callbaackSelector"
  }), t.selector = ut(r, 96, 100);
  try {
    const n = za(r, 128);
    if (n == null)
      throw new Error("abort");
    t.extraData = n;
  } catch {
    v(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup extraData"
    });
  }
  return t.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((n) => t[n]), t;
}
function Mr(r, t) {
  if (r.provider)
    return r.provider;
  v(!1, "missing provider", "UNSUPPORTED_OPERATION", { operation: t });
}
async function Ml(r, t) {
  let e = xo(t);
  if (e.to != null && (e.to = Gt(e.to, r)), e.from != null) {
    const n = e.from;
    e.from = Promise.all([
      r.getAddress(),
      Gt(n, r)
    ]).then(([s, i]) => (m(s.toLowerCase() === i.toLowerCase(), "transaction from mismatch", "tx.from", i), s));
  } else
    e.from = r.getAddress();
  return await Ft(e);
}
class w0 {
  /**
   *  Creates a new Signer connected to %%provider%%.
   */
  constructor(t) {
    /**
     *  The provider this signer is connected to.
     */
    A(this, "provider");
    H(this, { provider: t || null });
  }
  async getNonce(t) {
    return Mr(this, "getTransactionCount").getTransactionCount(await this.getAddress(), t);
  }
  async populateCall(t) {
    return await Ml(this, t);
  }
  async populateTransaction(t) {
    const e = Mr(this, "populateTransaction"), n = await Ml(this, t);
    n.nonce == null && (n.nonce = await this.getNonce("pending")), n.gasLimit == null && (n.gasLimit = await this.estimateGas(n));
    const s = await this.provider.getNetwork();
    if (n.chainId != null) {
      const o = S(n.chainId);
      m(o === s.chainId, "transaction chainId mismatch", "tx.chainId", t.chainId);
    } else
      n.chainId = s.chainId;
    const i = n.maxFeePerGas != null || n.maxPriorityFeePerGas != null;
    if (n.gasPrice != null && (n.type === 2 || i) ? m(!1, "eip-1559 transaction do not support gasPrice", "tx", t) : (n.type === 0 || n.type === 1) && i && m(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", t), (n.type === 2 || n.type == null) && n.maxFeePerGas != null && n.maxPriorityFeePerGas != null)
      n.type = 2;
    else if (n.type === 0 || n.type === 1) {
      const o = await e.getFeeData();
      v(o.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
        operation: "getGasPrice"
      }), n.gasPrice == null && (n.gasPrice = o.gasPrice);
    } else {
      const o = await e.getFeeData();
      if (n.type == null)
        if (o.maxFeePerGas != null && o.maxPriorityFeePerGas != null)
          if (n.type = 2, n.gasPrice != null) {
            const a = n.gasPrice;
            delete n.gasPrice, n.maxFeePerGas = a, n.maxPriorityFeePerGas = a;
          } else
            n.maxFeePerGas == null && (n.maxFeePerGas = o.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = o.maxPriorityFeePerGas);
        else o.gasPrice != null ? (v(!i, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
          operation: "populateTransaction"
        }), n.gasPrice == null && (n.gasPrice = o.gasPrice), n.type = 0) : v(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
          operation: "signer.getFeeData"
        });
      else (n.type === 2 || n.type === 3) && (n.maxFeePerGas == null && (n.maxFeePerGas = o.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = o.maxPriorityFeePerGas));
    }
    return await Ft(n);
  }
  async estimateGas(t) {
    return Mr(this, "estimateGas").estimateGas(await this.populateCall(t));
  }
  async call(t) {
    return Mr(this, "call").call(await this.populateCall(t));
  }
  async resolveName(t) {
    return await Mr(this, "resolveName").resolveName(t);
  }
  async sendTransaction(t) {
    const e = Mr(this, "sendTransaction"), n = await this.populateTransaction(t);
    delete n.from;
    const s = bo.from(n);
    return await e.broadcastTransaction(await this.signTransaction(s));
  }
}
function A0(r) {
  return JSON.parse(JSON.stringify(r));
}
var Ut, Se, wr, Dn, Ar, Ls, Vn, Ka, ja;
class Df {
  /**
   *  Creates a new **FilterIdSubscriber** which will used [[_subscribe]]
   *  and [[_emitResults]] to setup the subscription and provide the event
   *  to the %%provider%%.
   */
  constructor(t) {
    b(this, Vn);
    b(this, Ut);
    b(this, Se);
    b(this, wr);
    b(this, Dn);
    b(this, Ar);
    b(this, Ls);
    d(this, Ut, t), d(this, Se, null), d(this, wr, P(this, Vn, Ka).bind(this)), d(this, Dn, !1), d(this, Ar, null), d(this, Ls, !1);
  }
  /**
   *  Sub-classes **must** override this to begin the subscription.
   */
  _subscribe(t) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle the events.
   */
  _emitResults(t, e) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle recovery on errors.
   */
  _recover(t) {
    throw new Error("subclasses must override this");
  }
  start() {
    l(this, Dn) || (d(this, Dn, !0), P(this, Vn, Ka).call(this, -2));
  }
  stop() {
    l(this, Dn) && (d(this, Dn, !1), d(this, Ls, !0), P(this, Vn, ja).call(this), l(this, Ut).off("block", l(this, wr)));
  }
  pause(t) {
    t && P(this, Vn, ja).call(this), l(this, Ut).off("block", l(this, wr));
  }
  resume() {
    this.start();
  }
}
Ut = new WeakMap(), Se = new WeakMap(), wr = new WeakMap(), Dn = new WeakMap(), Ar = new WeakMap(), Ls = new WeakMap(), Vn = new WeakSet(), Ka = async function(t) {
  try {
    l(this, Se) == null && d(this, Se, this._subscribe(l(this, Ut)));
    let e = null;
    try {
      e = await l(this, Se);
    } catch (i) {
      if (!vt(i, "UNSUPPORTED_OPERATION") || i.operation !== "eth_newFilter")
        throw i;
    }
    if (e == null) {
      d(this, Se, null), l(this, Ut)._recoverSubscriber(this, this._recover(l(this, Ut)));
      return;
    }
    const n = await l(this, Ut).getNetwork();
    if (l(this, Ar) || d(this, Ar, n), l(this, Ar).chainId !== n.chainId)
      throw new Error("chaid changed");
    if (l(this, Ls))
      return;
    const s = await l(this, Ut).send("eth_getFilterChanges", [e]);
    await this._emitResults(l(this, Ut), s);
  } catch (e) {
    console.log("@TODO", e);
  }
  l(this, Ut).once("block", l(this, wr));
}, ja = function() {
  const t = l(this, Se);
  t && (d(this, Se, null), t.then((e) => {
    l(this, Ut).destroyed || l(this, Ut).send("eth_uninstallFilter", [e]);
  }));
};
var br;
class b0 extends Df {
  /**
   *  Creates a new **FilterIdEventSubscriber** attached to %%provider%%
   *  listening for %%filter%%.
   */
  constructor(e, n) {
    super(e);
    b(this, br);
    d(this, br, A0(n));
  }
  _recover(e) {
    return new Ac(e, l(this, br));
  }
  async _subscribe(e) {
    return await e.send("eth_newFilter", [l(this, br)]);
  }
  async _emitResults(e, n) {
    for (const s of n)
      e.emit(l(this, br), e._wrapLog(s, e._network));
  }
}
br = new WeakMap();
class E0 extends Df {
  async _subscribe(t) {
    return await t.send("eth_newPendingTransactionFilter", []);
  }
  async _emitResults(t, e) {
    for (const n of e)
      t.emit("pending", n);
  }
}
const x0 = "bigint,boolean,function,number,string,symbol".split(/,/g);
function ao(r) {
  if (r == null || x0.indexOf(typeof r) >= 0 || typeof r.getAddress == "function")
    return r;
  if (Array.isArray(r))
    return r.map(ao);
  if (typeof r == "object")
    return Object.keys(r).reduce((t, e) => (t[e] = r[e], t), {});
  throw new Error(`should not happen: ${r} (${typeof r})`);
}
function N0(r) {
  return new Promise((t) => {
    setTimeout(t, r);
  });
}
function Gr(r) {
  return r && r.toLowerCase();
}
function Gl(r) {
  return r && typeof r.pollingInterval == "number";
}
const Mf = {
  polling: !1,
  staticNetwork: null,
  batchStallTime: 10,
  batchMaxSize: 1 << 20,
  batchMaxCount: 100,
  cacheTimeout: 250,
  pollingInterval: 4e3
};
class fa extends w0 {
  constructor(e, n) {
    super(e);
    A(this, "address");
    n = nt(n), H(this, { address: n });
  }
  connect(e) {
    v(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
      operation: "signer.connect"
    });
  }
  async getAddress() {
    return this.address;
  }
  // JSON-RPC will automatially fill in nonce, etc. so we just check from
  async populateTransaction(e) {
    return await this.populateCall(e);
  }
  // Returns just the hash of the transaction after sent, which is what
  // the bare JSON-RPC API does;
  async sendUncheckedTransaction(e) {
    const n = ao(e), s = [];
    if (n.from) {
      const o = n.from;
      s.push((async () => {
        const a = await Gt(o, this.provider);
        m(a != null && a.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", e), n.from = a;
      })());
    } else
      n.from = this.address;
    if (n.gasLimit == null && s.push((async () => {
      n.gasLimit = await this.provider.estimateGas({ ...n, from: this.address });
    })()), n.to != null) {
      const o = n.to;
      s.push((async () => {
        n.to = await Gt(o, this.provider);
      })());
    }
    s.length && await Promise.all(s);
    const i = this.provider.getRpcTransaction(n);
    return this.provider.send("eth_sendTransaction", [i]);
  }
  async sendTransaction(e) {
    const n = await this.provider.getBlockNumber(), s = await this.sendUncheckedTransaction(e);
    return await new Promise((i, o) => {
      const a = [1e3, 100];
      let c = 0;
      const u = async () => {
        try {
          const f = await this.provider.getTransaction(s);
          if (f != null) {
            i(f.replaceableTransaction(n));
            return;
          }
        } catch (f) {
          if (vt(f, "CANCELLED") || vt(f, "BAD_DATA") || vt(f, "NETWORK_ERROR") || vt(f, "UNSUPPORTED_OPERATION")) {
            f.info == null && (f.info = {}), f.info.sendTransactionHash = s, o(f);
            return;
          }
          if (vt(f, "INVALID_ARGUMENT") && (c++, f.info == null && (f.info = {}), f.info.sendTransactionHash = s, c > 10)) {
            o(f);
            return;
          }
          this.provider.emit("error", lt("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", { error: f }));
        }
        this.provider._setTimeout(() => {
          u();
        }, a.pop() || 4e3);
      };
      u();
    });
  }
  async signTransaction(e) {
    const n = ao(e);
    if (n.from) {
      const i = await Gt(n.from, this.provider);
      m(i != null && i.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", e), n.from = i;
    } else
      n.from = this.address;
    const s = this.provider.getRpcTransaction(n);
    return await this.provider.send("eth_signTransaction", [s]);
  }
  async signMessage(e) {
    const n = typeof e == "string" ? ln(e) : e;
    return await this.provider.send("personal_sign", [
      R(n),
      this.address.toLowerCase()
    ]);
  }
  async signTypedData(e, n, s) {
    const i = ao(s), o = await Eo.resolveNames(e, n, i, async (a) => {
      const c = await Gt(a);
      return m(c != null, "TypedData does not support null address", "value", a), c;
    });
    return await this.provider.send("eth_signTypedData_v4", [
      this.address.toLowerCase(),
      JSON.stringify(Eo.getPayload(o.domain, n, o.value))
    ]);
  }
  async unlock(e) {
    return this.provider.send("personal_unlockAccount", [
      this.address.toLowerCase(),
      e,
      null
    ]);
  }
  // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
  async _legacySignMessage(e) {
    const n = typeof e == "string" ? ln(e) : e;
    return await this.provider.send("eth_sign", [
      this.address.toLowerCase(),
      R(n)
    ]);
  }
}
var Er, Ds, on, Ue, we, ce, zt, Si, Wa;
class v0 extends h0 {
  constructor(e, n) {
    super(e, n);
    b(this, Si);
    b(this, Er);
    // The next ID to use for the JSON-RPC ID field
    b(this, Ds);
    // Payloads are queued and triggered in batches using the drainTimer
    b(this, on);
    b(this, Ue);
    b(this, we);
    b(this, ce);
    b(this, zt);
    d(this, Ds, 1), d(this, Er, Object.assign({}, Mf, n || {})), d(this, on, []), d(this, Ue, null), d(this, ce, null), d(this, zt, null);
    {
      let i = null;
      const o = new Promise((a) => {
        i = a;
      });
      d(this, we, { promise: o, resolve: i });
    }
    const s = this._getOption("staticNetwork");
    typeof s == "boolean" ? (m(!s || e !== "any", "staticNetwork cannot be used on special network 'any'", "options", n), s && e != null && d(this, ce, De.from(e))) : s && (m(e == null || s.matches(e), "staticNetwork MUST match network object", "options", n), d(this, ce, s));
  }
  /**
   *  Returns the value associated with the option %%key%%.
   *
   *  Sub-classes can use this to inquire about configuration options.
   */
  _getOption(e) {
    return l(this, Er)[e];
  }
  /**
   *  Gets the [[Network]] this provider has committed to. On each call, the network
   *  is detected, and if it has changed, the call will reject.
   */
  get _network() {
    return v(l(this, ce), "network is not available yet", "NETWORK_ERROR"), l(this, ce);
  }
  /**
   *  Resolves to the non-normalized value by performing %%req%%.
   *
   *  Sub-classes may override this to modify behavior of actions,
   *  and should generally call ``super._perform`` as a fallback.
   */
  async _perform(e) {
    if (e.method === "call" || e.method === "estimateGas") {
      let s = e.transaction;
      if (s && s.type != null && S(s.type) && s.maxFeePerGas == null && s.maxPriorityFeePerGas == null) {
        const i = await this.getFeeData();
        i.maxFeePerGas == null && i.maxPriorityFeePerGas == null && (e = Object.assign({}, e, {
          transaction: Object.assign({}, s, { type: void 0 })
        }));
      }
    }
    const n = this.getRpcRequest(e);
    return n != null ? await this.send(n.method, n.args) : super._perform(e);
  }
  /**
   *  Sub-classes may override this; it detects the *actual* network that
   *  we are **currently** connected to.
   *
   *  Keep in mind that [[send]] may only be used once [[ready]], otherwise the
   *  _send primitive must be used instead.
   */
  async _detectNetwork() {
    const e = this._getOption("staticNetwork");
    if (e)
      if (e === !0) {
        if (l(this, ce))
          return l(this, ce);
      } else
        return e;
    return l(this, zt) ? await l(this, zt) : this.ready ? (d(this, zt, (async () => {
      try {
        const n = De.from(S(await this.send("eth_chainId", [])));
        return d(this, zt, null), n;
      } catch (n) {
        throw d(this, zt, null), n;
      }
    })()), await l(this, zt)) : (d(this, zt, (async () => {
      const n = {
        id: qs(this, Ds)._++,
        method: "eth_chainId",
        params: [],
        jsonrpc: "2.0"
      };
      this.emit("debug", { action: "sendRpcPayload", payload: n });
      let s;
      try {
        s = (await this._send(n))[0], d(this, zt, null);
      } catch (i) {
        throw d(this, zt, null), this.emit("debug", { action: "receiveRpcError", error: i }), i;
      }
      if (this.emit("debug", { action: "receiveRpcResult", result: s }), "result" in s)
        return De.from(S(s.result));
      throw this.getRpcError(n, s);
    })()), await l(this, zt));
  }
  /**
   *  Sub-classes **MUST** call this. Until [[_start]] has been called, no calls
   *  will be passed to [[_send]] from [[send]]. If it is overridden, then
   *  ``super._start()`` **MUST** be called.
   *
   *  Calling it multiple times is safe and has no effect.
   */
  _start() {
    l(this, we) == null || l(this, we).resolve == null || (l(this, we).resolve(), d(this, we, null), (async () => {
      for (; l(this, ce) == null && !this.destroyed; )
        try {
          d(this, ce, await this._detectNetwork());
        } catch (e) {
          if (this.destroyed)
            break;
          console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", lt("failed to bootstrap network detection", "NETWORK_ERROR", { event: "initial-network-discovery", info: { error: e } })), await N0(1e3);
        }
      P(this, Si, Wa).call(this);
    })());
  }
  /**
   *  Resolves once the [[_start]] has been called. This can be used in
   *  sub-classes to defer sending data until the connection has been
   *  established.
   */
  async _waitUntilReady() {
    if (l(this, we) != null)
      return await l(this, we).promise;
  }
  /**
   *  Return a Subscriber that will manage the %%sub%%.
   *
   *  Sub-classes may override this to modify the behavior of
   *  subscription management.
   */
  _getSubscriber(e) {
    return e.type === "pending" ? new E0(this) : e.type === "event" ? this._getOption("polling") ? new Ac(this, e.filter) : new b0(this, e.filter) : e.type === "orphan" && e.filter.orphan === "drop-log" ? new Lf("orphan") : super._getSubscriber(e);
  }
  /**
   *  Returns true only if the [[_start]] has been called.
   */
  get ready() {
    return l(this, we) == null;
  }
  /**
   *  Returns %%tx%% as a normalized JSON-RPC transaction request,
   *  which has all values hexlified and any numeric values converted
   *  to Quantity values.
   */
  getRpcTransaction(e) {
    const n = {};
    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((s) => {
      if (e[s] == null)
        return;
      let i = s;
      s === "gasLimit" && (i = "gas"), n[i] = zr(S(e[s], `tx.${s}`));
    }), ["from", "to", "data"].forEach((s) => {
      e[s] != null && (n[s] = R(e[s]));
    }), e.accessList && (n.accessList = Tr(e.accessList)), e.blobVersionedHashes && (n.blobVersionedHashes = e.blobVersionedHashes.map((s) => s.toLowerCase())), n;
  }
  /**
   *  Returns the request method and arguments required to perform
   *  %%req%%.
   */
  getRpcRequest(e) {
    switch (e.method) {
      case "chainId":
        return { method: "eth_chainId", args: [] };
      case "getBlockNumber":
        return { method: "eth_blockNumber", args: [] };
      case "getGasPrice":
        return { method: "eth_gasPrice", args: [] };
      case "getPriorityFee":
        return { method: "eth_maxPriorityFeePerGas", args: [] };
      case "getBalance":
        return {
          method: "eth_getBalance",
          args: [Gr(e.address), e.blockTag]
        };
      case "getTransactionCount":
        return {
          method: "eth_getTransactionCount",
          args: [Gr(e.address), e.blockTag]
        };
      case "getCode":
        return {
          method: "eth_getCode",
          args: [Gr(e.address), e.blockTag]
        };
      case "getStorage":
        return {
          method: "eth_getStorageAt",
          args: [
            Gr(e.address),
            "0x" + e.position.toString(16),
            e.blockTag
          ]
        };
      case "broadcastTransaction":
        return {
          method: "eth_sendRawTransaction",
          args: [e.signedTransaction]
        };
      case "getBlock":
        if ("blockTag" in e)
          return {
            method: "eth_getBlockByNumber",
            args: [e.blockTag, !!e.includeTransactions]
          };
        if ("blockHash" in e)
          return {
            method: "eth_getBlockByHash",
            args: [e.blockHash, !!e.includeTransactions]
          };
        break;
      case "getTransaction":
        return {
          method: "eth_getTransactionByHash",
          args: [e.hash]
        };
      case "getTransactionReceipt":
        return {
          method: "eth_getTransactionReceipt",
          args: [e.hash]
        };
      case "call":
        return {
          method: "eth_call",
          args: [this.getRpcTransaction(e.transaction), e.blockTag]
        };
      case "estimateGas":
        return {
          method: "eth_estimateGas",
          args: [this.getRpcTransaction(e.transaction)]
        };
      case "getLogs":
        return e.filter && e.filter.address != null && (Array.isArray(e.filter.address) ? e.filter.address = e.filter.address.map(Gr) : e.filter.address = Gr(e.filter.address)), { method: "eth_getLogs", args: [e.filter] };
    }
    return null;
  }
  /**
   *  Returns an ethers-style Error for the given JSON-RPC error
   *  %%payload%%, coalescing the various strings and error shapes
   *  that different nodes return, coercing them into a machine-readable
   *  standardized error.
   */
  getRpcError(e, n) {
    const { method: s } = e, { error: i } = n;
    if (s === "eth_estimateGas" && i.message) {
      const c = i.message;
      if (!c.match(/revert/i) && c.match(/insufficient funds/i))
        return lt("insufficient funds", "INSUFFICIENT_FUNDS", {
          transaction: e.params[0],
          info: { payload: e, error: i }
        });
    }
    if (s === "eth_call" || s === "eth_estimateGas") {
      const c = Ya(i), u = bi.getBuiltinCallException(s === "eth_call" ? "call" : "estimateGas", e.params[0], c ? c.data : null);
      return u.info = { error: i, payload: e }, u;
    }
    const o = JSON.stringify(P0(i));
    if (typeof i.message == "string" && i.message.match(/user denied|ethers-user-denied/i))
      return lt("user rejected action", "ACTION_REJECTED", {
        action: {
          eth_sign: "signMessage",
          personal_sign: "signMessage",
          eth_signTypedData_v4: "signTypedData",
          eth_signTransaction: "signTransaction",
          eth_sendTransaction: "sendTransaction",
          eth_requestAccounts: "requestAccess",
          wallet_requestAccounts: "requestAccess"
        }[s] || "unknown",
        reason: "rejected",
        info: { payload: e, error: i }
      });
    if (s === "eth_sendRawTransaction" || s === "eth_sendTransaction") {
      const c = e.params[0];
      if (o.match(/insufficient funds|base fee exceeds gas limit/i))
        return lt("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
          transaction: c,
          info: { error: i }
        });
      if (o.match(/nonce/i) && o.match(/too low/i))
        return lt("nonce has already been used", "NONCE_EXPIRED", { transaction: c, info: { error: i } });
      if (o.match(/replacement transaction/i) && o.match(/underpriced/i))
        return lt("replacement fee too low", "REPLACEMENT_UNDERPRICED", { transaction: c, info: { error: i } });
      if (o.match(/only replay-protected/i))
        return lt("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
          operation: s,
          info: { transaction: c, info: { error: i } }
        });
    }
    let a = !!o.match(/the method .* does not exist/i);
    return a || i && i.details && i.details.startsWith("Unauthorized method:") && (a = !0), a ? lt("unsupported operation", "UNSUPPORTED_OPERATION", {
      operation: e.method,
      info: { error: i, payload: e }
    }) : lt("could not coalesce error", "UNKNOWN_ERROR", { error: i, payload: e });
  }
  /**
   *  Requests the %%method%% with %%params%% via the JSON-RPC protocol
   *  over the underlying channel. This can be used to call methods
   *  on the backend that do not have a high-level API within the Provider
   *  API.
   *
   *  This method queues requests according to the batch constraints
   *  in the options, assigns the request a unique ID.
   *
   *  **Do NOT override** this method in sub-classes; instead
   *  override [[_send]] or force the options values in the
   *  call to the constructor to modify this method's behavior.
   */
  send(e, n) {
    if (this.destroyed)
      return Promise.reject(lt("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: e }));
    const s = qs(this, Ds)._++, i = new Promise((o, a) => {
      l(this, on).push({
        resolve: o,
        reject: a,
        payload: { method: e, params: n, id: s, jsonrpc: "2.0" }
      });
    });
    return P(this, Si, Wa).call(this), i;
  }
  /**
   *  Resolves to the [[Signer]] account for  %%address%% managed by
   *  the client.
   *
   *  If the %%address%% is a number, it is used as an index in the
   *  the accounts from [[listAccounts]].
   *
   *  This can only be used on clients which manage accounts (such as
   *  Geth with imported account or MetaMask).
   *
   *  Throws if the account doesn't exist.
   */
  async getSigner(e) {
    e == null && (e = 0);
    const n = this.send("eth_accounts", []);
    if (typeof e == "number") {
      const i = await n;
      if (e >= i.length)
        throw new Error("no such account");
      return new fa(this, i[e]);
    }
    const { accounts: s } = await Ft({
      network: this.getNetwork(),
      accounts: n
    });
    e = nt(e);
    for (const i of s)
      if (nt(i) === e)
        return new fa(this, e);
    throw new Error("invalid account");
  }
  async listAccounts() {
    return (await this.send("eth_accounts", [])).map((n) => new fa(this, n));
  }
  destroy() {
    l(this, Ue) && (clearTimeout(l(this, Ue)), d(this, Ue, null));
    for (const { payload: e, reject: n } of l(this, on))
      n(lt("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: e.method }));
    d(this, on, []), super.destroy();
  }
}
Er = new WeakMap(), Ds = new WeakMap(), on = new WeakMap(), Ue = new WeakMap(), we = new WeakMap(), ce = new WeakMap(), zt = new WeakMap(), Si = new WeakSet(), Wa = function() {
  if (l(this, Ue))
    return;
  const e = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
  d(this, Ue, setTimeout(() => {
    d(this, Ue, null);
    const n = l(this, on);
    for (d(this, on, []); n.length; ) {
      const s = [n.shift()];
      for (; n.length && s.length !== l(this, Er).batchMaxCount; )
        if (s.push(n.shift()), JSON.stringify(s.map((o) => o.payload)).length > l(this, Er).batchMaxSize) {
          n.unshift(s.pop());
          break;
        }
      (async () => {
        const i = s.length === 1 ? s[0].payload : s.map((o) => o.payload);
        this.emit("debug", { action: "sendRpcPayload", payload: i });
        try {
          const o = await this._send(i);
          this.emit("debug", { action: "receiveRpcResult", result: o });
          for (const { resolve: a, reject: c, payload: u } of s) {
            if (this.destroyed) {
              c(lt("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: u.method }));
              continue;
            }
            const f = o.filter((h) => h.id === u.id)[0];
            if (f == null) {
              const h = lt("missing response for request", "BAD_DATA", {
                value: o,
                info: { payload: u }
              });
              this.emit("error", h), c(h);
              continue;
            }
            if ("error" in f) {
              c(this.getRpcError(u, f));
              continue;
            }
            a(f.result);
          }
        } catch (o) {
          this.emit("debug", { action: "receiveRpcError", error: o });
          for (const { reject: a } of s)
            a(o);
        }
      })();
    }
  }, e));
};
var Mn;
class Gf extends v0 {
  constructor(e, n) {
    super(e, n);
    b(this, Mn);
    let s = this._getOption("pollingInterval");
    s == null && (s = Mf.pollingInterval), d(this, Mn, s);
  }
  _getSubscriber(e) {
    const n = super._getSubscriber(e);
    return Gl(n) && (n.pollingInterval = l(this, Mn)), n;
  }
  /**
   *  The polling interval (default: 4000 ms)
   */
  get pollingInterval() {
    return l(this, Mn);
  }
  set pollingInterval(e) {
    if (!Number.isInteger(e) || e < 0)
      throw new Error("invalid interval");
    d(this, Mn, e), this._forEachSubscriber((n) => {
      Gl(n) && (n.pollingInterval = l(this, Mn));
    });
  }
}
Mn = new WeakMap();
var Ms;
class Hf extends Gf {
  constructor(e, n, s) {
    e == null && (e = "http://localhost:8545");
    super(n, s);
    b(this, Ms);
    typeof e == "string" ? d(this, Ms, new fn(e)) : d(this, Ms, e.clone());
  }
  _getConnection() {
    return l(this, Ms).clone();
  }
  async send(e, n) {
    return await this._start(), await super.send(e, n);
  }
  async _send(e) {
    const n = this._getConnection();
    n.body = JSON.stringify(e), n.setHeader("content-type", "application/json");
    const s = await n.send();
    s.assertOk();
    let i = s.bodyJson;
    return Array.isArray(i) || (i = [i]), i;
  }
}
Ms = new WeakMap();
function Ya(r) {
  if (r == null)
    return null;
  if (typeof r.message == "string" && r.message.match(/revert/i) && st(r.data))
    return { message: r.message, data: r.data };
  if (typeof r == "object") {
    for (const t in r) {
      const e = Ya(r[t]);
      if (e)
        return e;
    }
    return null;
  }
  if (typeof r == "string")
    try {
      return Ya(JSON.parse(r));
    } catch {
    }
  return null;
}
function Za(r, t) {
  if (r != null) {
    if (typeof r.message == "string" && t.push(r.message), typeof r == "object")
      for (const e in r)
        Za(r[e], t);
    if (typeof r == "string")
      try {
        return Za(JSON.parse(r), t);
      } catch {
      }
  }
}
function P0(r) {
  const t = [];
  return Za(r, t), t;
}
var Gs;
class C0 extends Gf {
  /**
   *  Connnect to the %%ethereum%% provider, optionally forcing the
   *  %%network%%.
   */
  constructor(e, n, s) {
    const i = Object.assign({}, s ?? {}, { batchMaxCount: 1 });
    m(e && e.request, "invalid EIP-1193 provider", "ethereum", e);
    super(n, i);
    b(this, Gs);
    d(this, Gs, async (o, a) => {
      const c = { method: o, params: a };
      this.emit("debug", { action: "sendEip1193Request", payload: c });
      try {
        const u = await e.request(c);
        return this.emit("debug", { action: "receiveEip1193Result", result: u }), u;
      } catch (u) {
        const f = new Error(u.message);
        throw f.code = u.code, f.data = u.data, f.payload = c, this.emit("debug", { action: "receiveEip1193Error", error: f }), f;
      }
    });
  }
  async send(e, n) {
    return await this._start(), await super.send(e, n);
  }
  async _send(e) {
    m(!Array.isArray(e), "EIP-1193 does not support batch request", "payload", e);
    try {
      const n = await l(this, Gs).call(this, e.method, e.params || []);
      return [{ id: e.id, result: n }];
    } catch (n) {
      return [{
        id: e.id,
        error: { code: n.code, data: n.data, message: n.message }
      }];
    }
  }
  getRpcError(e, n) {
    switch (n = JSON.parse(JSON.stringify(n)), n.error.code || -1) {
      case 4001:
        n.error.message = `ethers-user-denied: ${n.error.message}`;
        break;
      case 4200:
        n.error.message = `ethers-unsupported: ${n.error.message}`;
        break;
    }
    return super.getRpcError(e, n);
  }
  /**
   *  Resolves to ``true`` if the provider manages the %%address%%.
   */
  async hasSigner(e) {
    e == null && (e = 0);
    const n = await this.send("eth_accounts", []);
    return typeof e == "number" ? n.length > e : (e = e.toLowerCase(), n.filter((s) => s.toLowerCase() === e).length !== 0);
  }
  async getSigner(e) {
    if (e == null && (e = 0), !await this.hasSigner(e))
      try {
        await l(this, Gs).call(this, "eth_requestAccounts", []);
      } catch (n) {
        const s = n.payload;
        throw this.getRpcError(s, { id: s.id, error: n });
      }
    return await super.getSigner(e);
  }
}
Gs = new WeakMap();
const Ws = {};
function B0(r) {
  return typeof r == "string" ? r.startsWith("0x") ? parseInt(r, 16).toString() : r : r.toString();
}
function j0(r) {
  if (!r)
    return null;
  const t = Ws[B0(r)];
  return t || console.warn(`Chain config for ${r} not found`), t;
}
const ui = {}, O0 = new Promise((r) => {
  ui.WEB3_ONBOARD_INIT = { resolver: r, data: null };
});
function W0() {
  return ui.WEB3_ONBOARD_INIT.resolver;
}
async function Y0() {
  return ui.WEB3_ONBOARD_INIT.data || (ui.WEB3_ONBOARD_INIT.data = await O0), ui.WEB3_ONBOARD_INIT.data;
}
const I0 = () => {
  var n, s;
  const [{ wallet: r }] = Xa(), t = (n = ((r == null ? void 0 : r.accounts) || [])[0]) == null ? void 0 : n.address, e = (s = ((r == null ? void 0 : r.chains) || [])[0]) == null ? void 0 : s.id;
  return {
    address: t,
    chainId: e
  };
}, k0 = () => {
  const [{ wallet: r }] = Xa(), [t, e] = vr(null), n = co(
    async (i, o, a, c) => {
      e(null);
      try {
        const u = Ws[i];
        if (!u)
          return e(`Chain with ID ${i} not found in ChainConstants.`), null;
        const f = new Hf(u.rpcUrl), h = new Hn(o, [a], f), p = a.split("(")[0].trim();
        return p in h ? await h[p](...c) : (e(`Method ${p} not found in contract.`), null);
      } catch (u) {
        return console.error("Error calling method:", u), e(u.message), null;
      }
    },
    []
  ), s = co(
    async (i, o, a) => {
      e(null);
      try {
        if (!(r != null && r.provider))
          return e("No wallet connected. Please connect your wallet."), null;
        const u = await new C0(r.provider).getSigner(), f = new Hn(i, [o], u), h = o.split("(")[0].trim();
        if (!(h in f))
          return e(`Method ${h} not found in contract.`), null;
        const p = await f[h](...a);
        return await p.wait(), p;
      } catch (c) {
        return console.error("Error executing method:", c), e(c.message), null;
      }
    },
    [r]
  );
  return { callMethod: n, execute: s, error: t };
}, ha = {};
function R0(r, t) {
  const [e, n] = vr(null), [s, i] = vr(null);
  lo(() => {
    if (!r || !t) return;
    (async () => {
      try {
        if (ha[r]) {
          n(ha[r]);
          return;
        }
        const u = Ws[t];
        if (!u || !u.rpcUrl) {
          i("Invalid chain configuration");
          return;
        }
        const f = new Hf(u.rpcUrl), h = new Hn(r, [
          "function name() view returns (string)",
          "function symbol() view returns (string)",
          "function decimals() view returns (uint8)"
        ], f), [p, w, E] = await Promise.all([
          h.name(),
          h.symbol(),
          h.decimals()
        ]), y = { name: p, symbol: w, decimals: E };
        ha[r] = y, n(y);
      } catch (u) {
        console.error(u), i("Failed to fetch token data.");
      }
    })();
  }, [r, t]);
  const o = co(
    (c) => e ? Ah(c.toString(), e.decimals) : (console.warn("Token data is not loaded yet. Returning null."), null),
    [e]
  ), a = co(
    (c) => e ? wh(c.toString(), e.decimals) : (console.warn("Token data is not loaded yet. Returning null."), null),
    [e]
  );
  return { tokenData: e, error: s, toMachineReadable: o, toHumanReadable: a };
}
const da = {
  ALLOWANCE: "function allowance(address owner, address spender) view returns (uint256)",
  TRANSFER: "function transfer(address to, uint256 value) returns (bool)",
  TRANSFER_FROM: "function transferFrom(address from, address to, uint256 value) returns (bool)",
  APPROVE: "function approve(address spender, uint256 value) returns (bool)",
  DECIMALS: "function decimals() view returns (uint8)",
  NAME: "function name() view returns (string)",
  SYMBOL: "function symbol() view returns (string)"
}, Z0 = ({
  chainId: r,
  token: t,
  amount: e,
  spender: n,
  approveButton: s,
  actionButton: i,
  unknownState: o
}) => {
  const [a, c] = vr(null), [u, f] = vr(!1), [{ wallet: h }, p] = Xa(), { callMethod: w, execute: E } = k0(), { address: y } = I0(), { toMachineReadable: x } = R0(t, r), N = async () => {
    try {
      if (!r || !t || !e || !n || !y) {
        console.error("Invalid parameters provided or wallet not connected.");
        return;
      }
      const C = await w(r, t, da.ALLOWANCE, [y, n]), M = x(e);
      M && c(C < M);
    } catch (C) {
      console.error("Error checking approval:", C), c(null);
    }
  }, O = async () => {
    try {
      if (!h) {
        console.error("Wallet not connected."), await p();
        return;
      }
      f(!0);
      const C = x(e), M = await E(t, da.APPROVE, [n, C]);
      console.log("approve tx executed", M);
      const L = setInterval(async () => {
        try {
          const I = await w(r, t, da.ALLOWANCE, [y, n]);
          console.log("allowance received", I), I.gte(C) && (f(!1), c(!1), clearInterval(L));
        } catch (I) {
          console.error("Error while checking approval status:", I);
        }
      }, 3e3);
    } catch (C) {
      console.error("Error during approval:", C), f(!1);
    }
  };
  return lo(() => {
    N();
  }, [r, t, e, n, h]), a === null ? o : a ? s(O, u) : i;
};
var Xi = { exports: {} }, ni = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hl;
function T0() {
  if (Hl) return ni;
  Hl = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(n, s, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      i = {};
      for (var a in s)
        a !== "key" && (i[a] = s[a]);
    } else i = s;
    return s = i.ref, {
      $$typeof: r,
      type: n,
      key: o,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return ni.Fragment = t, ni.jsx = e, ni.jsxs = e, ni;
}
var ri = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ql;
function S0() {
  return Ql || (Ql = 1, process.env.NODE_ENV !== "production" && function() {
    function r(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === rt ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case I:
          return "Fragment";
        case L:
          return "Portal";
        case D:
          return "Profiler";
        case G:
          return "StrictMode";
        case ct:
          return "Suspense";
        case ft:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case j:
            return (g.displayName || "Context") + ".Provider";
          case X:
            return (g._context.displayName || "Context") + ".Consumer";
          case K:
            var U = g.render;
            return g = g.displayName, g || (g = U.displayName || U.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case Qt:
            return U = g.displayName || null, U !== null ? U : r(g.type) || "Memo";
          case B:
            U = g._payload, g = g._init;
            try {
              return r(g(U));
            } catch {
            }
        }
      return null;
    }
    function t(g) {
      return "" + g;
    }
    function e(g) {
      try {
        t(g);
        var U = !1;
      } catch {
        U = !0;
      }
      if (U) {
        U = console;
        var F = U.error, $ = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return F.call(
          U,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(g);
      }
    }
    function n() {
    }
    function s() {
      if (Vt === 0) {
        Ge = console.log, pn = console.info, ue = console.warn, Sr = console.error, Ne = console.group, He = console.groupCollapsed, Zs = console.groupEnd;
        var g = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: g,
          log: g,
          warn: g,
          error: g,
          group: g,
          groupCollapsed: g,
          groupEnd: g
        });
      }
      Vt++;
    }
    function i() {
      if (Vt--, Vt === 0) {
        var g = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: dt({}, g, { value: Ge }),
          info: dt({}, g, { value: pn }),
          warn: dt({}, g, { value: ue }),
          error: dt({}, g, { value: Sr }),
          group: dt({}, g, { value: Ne }),
          groupCollapsed: dt({}, g, { value: He }),
          groupEnd: dt({}, g, { value: Zs })
        });
      }
      0 > Vt && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function o(g) {
      if (ve === void 0)
        try {
          throw Error();
        } catch (F) {
          var U = F.stack.trim().match(/\n( *(at )?)/);
          ve = U && U[1] || "", Jt = -1 < F.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < F.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ve + g + Jt;
    }
    function a(g, U) {
      if (!g || Pe) return "";
      var F = Ur.get(g);
      if (F !== void 0) return F;
      Pe = !0, F = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var $ = null;
      $ = W.H, W.H = null, s();
      try {
        var Ct = {
          DetermineComponentFrameRoot: function() {
            try {
              if (U) {
                var gn = function() {
                  throw Error();
                };
                if (Object.defineProperty(gn.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(gn, []);
                  } catch (Ve) {
                    var Qi = Ve;
                  }
                  Reflect.construct(g, [], gn);
                } else {
                  try {
                    gn.call();
                  } catch (Ve) {
                    Qi = Ve;
                  }
                  g.call(gn.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Ve) {
                  Qi = Ve;
                }
                (gn = g()) && typeof gn.catch == "function" && gn.catch(function() {
                });
              }
            } catch (Ve) {
              if (Ve && Qi && typeof Ve.stack == "string")
                return [Ve.stack, Qi.stack];
            }
            return [null, null];
          }
        };
        Ct.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var ot = Object.getOwnPropertyDescriptor(
          Ct.DetermineComponentFrameRoot,
          "name"
        );
        ot && ot.configurable && Object.defineProperty(
          Ct.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var J = Ct.DetermineComponentFrameRoot(), Qe = J[0], Fr = J[1];
        if (Qe && Fr) {
          var Tt = Qe.split(`
`), _n = Fr.split(`
`);
          for (J = ot = 0; ot < Tt.length && !Tt[ot].includes(
            "DetermineComponentFrameRoot"
          ); )
            ot++;
          for (; J < _n.length && !_n[J].includes(
            "DetermineComponentFrameRoot"
          ); )
            J++;
          if (ot === Tt.length || J === _n.length)
            for (ot = Tt.length - 1, J = _n.length - 1; 1 <= ot && 0 <= J && Tt[ot] !== _n[J]; )
              J--;
          for (; 1 <= ot && 0 <= J; ot--, J--)
            if (Tt[ot] !== _n[J]) {
              if (ot !== 1 || J !== 1)
                do
                  if (ot--, J--, 0 > J || Tt[ot] !== _n[J]) {
                    var Xs = `
` + Tt[ot].replace(
                      " at new ",
                      " at "
                    );
                    return g.displayName && Xs.includes("<anonymous>") && (Xs = Xs.replace("<anonymous>", g.displayName)), typeof g == "function" && Ur.set(g, Xs), Xs;
                  }
                while (1 <= ot && 0 <= J);
              break;
            }
        }
      } finally {
        Pe = !1, W.H = $, i(), Error.prepareStackTrace = F;
      }
      return Tt = (Tt = g ? g.displayName || g.name : "") ? o(Tt) : "", typeof g == "function" && Ur.set(g, Tt), Tt;
    }
    function c(g) {
      if (g == null) return "";
      if (typeof g == "function") {
        var U = g.prototype;
        return a(
          g,
          !(!U || !U.isReactComponent)
        );
      }
      if (typeof g == "string") return o(g);
      switch (g) {
        case ct:
          return o("Suspense");
        case ft:
          return o("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case K:
            return g = a(g.render, !1), g;
          case Qt:
            return c(g.type);
          case B:
            U = g._payload, g = g._init;
            try {
              return c(g(U));
            } catch {
            }
        }
      return "";
    }
    function u() {
      var g = W.A;
      return g === null ? null : g.getOwner();
    }
    function f(g) {
      if (ht.call(g, "key")) {
        var U = Object.getOwnPropertyDescriptor(g, "key").get;
        if (U && U.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function h(g, U) {
      function F() {
        Nc || (Nc = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          U
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: F,
        configurable: !0
      });
    }
    function p() {
      var g = r(this.type);
      return vc[g] || (vc[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function w(g, U, F, $, Ct, ot) {
      return F = ot.ref, g = {
        $$typeof: M,
        type: g,
        key: U,
        props: ot,
        _owner: Ct
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function E(g, U, F, $, Ct, ot) {
      if (typeof g == "string" || typeof g == "function" || g === I || g === D || g === G || g === ct || g === ft || g === T || typeof g == "object" && g !== null && (g.$$typeof === B || g.$$typeof === Qt || g.$$typeof === j || g.$$typeof === X || g.$$typeof === K || g.$$typeof === Rt || g.getModuleId !== void 0)) {
        var J = U.children;
        if (J !== void 0)
          if ($)
            if (ee(J)) {
              for ($ = 0; $ < J.length; $++)
                y(J[$], g);
              Object.freeze && Object.freeze(J);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else y(J, g);
      } else
        J = "", (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), g === null ? $ = "null" : ee(g) ? $ = "array" : g !== void 0 && g.$$typeof === M ? ($ = "<" + (r(g.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof g, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          $,
          J
        );
      if (ht.call(U, "key")) {
        J = r(g);
        var Qe = Object.keys(U).filter(function(Tt) {
          return Tt !== "key";
        });
        $ = 0 < Qe.length ? "{key: someKey, " + Qe.join(": ..., ") + ": ...}" : "{key: someKey}", Pc[J + $] || (Qe = 0 < Qe.length ? "{" + Qe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          J,
          Qe,
          J
        ), Pc[J + $] = !0);
      }
      if (J = null, F !== void 0 && (e(F), J = "" + F), f(U) && (e(U.key), J = "" + U.key), "key" in U) {
        F = {};
        for (var Fr in U)
          Fr !== "key" && (F[Fr] = U[Fr]);
      } else F = U;
      return J && h(
        F,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), w(g, J, ot, Ct, u(), F);
    }
    function y(g, U) {
      if (typeof g == "object" && g && g.$$typeof !== Hi) {
        if (ee(g))
          for (var F = 0; F < g.length; F++) {
            var $ = g[F];
            x($) && N($, U);
          }
        else if (x(g))
          g._store && (g._store.validated = 1);
        else if (g === null || typeof g != "object" ? F = null : (F = V && g[V] || g["@@iterator"], F = typeof F == "function" ? F : null), typeof F == "function" && F !== g.entries && (F = F.call(g), F !== g))
          for (; !(g = F.next()).done; )
            x(g.value) && N(g.value, U);
      }
    }
    function x(g) {
      return typeof g == "object" && g !== null && g.$$typeof === M;
    }
    function N(g, U) {
      if (g._store && !g._store.validated && g.key == null && (g._store.validated = 1, U = O(U), !Cc[U])) {
        Cc[U] = !0;
        var F = "";
        g && g._owner != null && g._owner !== u() && (F = null, typeof g._owner.tag == "number" ? F = r(g._owner.type) : typeof g._owner.name == "string" && (F = g._owner.name), F = " It was passed a child from " + F + ".");
        var $ = W.getCurrentStack;
        W.getCurrentStack = function() {
          var Ct = c(g.type);
          return $ && (Ct += $() || ""), Ct;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          U,
          F
        ), W.getCurrentStack = $;
      }
    }
    function O(g) {
      var U = "", F = u();
      return F && (F = r(F.type)) && (U = `

Check the render method of \`` + F + "`."), U || (g = r(g)) && (U = `

Check the top-level render call using <` + g + ">."), U;
    }
    var C = Jf, M = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), j = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), ct = Symbol.for("react.suspense"), ft = Symbol.for("react.suspense_list"), Qt = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), V = Symbol.iterator, rt = Symbol.for("react.client.reference"), W = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ht = Object.prototype.hasOwnProperty, dt = Object.assign, Rt = Symbol.for("react.client.reference"), ee = Array.isArray, Vt = 0, Ge, pn, ue, Sr, Ne, He, Zs;
    n.__reactDisabledLog = !0;
    var ve, Jt, Pe = !1, Ur = new (typeof WeakMap == "function" ? WeakMap : Map)(), Hi = Symbol.for("react.client.reference"), Nc, vc = {}, Pc = {}, Cc = {};
    ri.Fragment = I, ri.jsx = function(g, U, F, $, Ct) {
      return E(g, U, F, !1, $, Ct);
    }, ri.jsxs = function(g, U, F, $, Ct) {
      return E(g, U, F, !0, $, Ct);
    };
  }()), ri;
}
var Vl;
function U0() {
  return Vl || (Vl = 1, process.env.NODE_ENV === "production" ? Xi.exports = T0() : Xi.exports = S0()), Xi.exports;
}
var pa = U0();
const Jl = {
  permStore: !0,
  timeoutSeconds: 3600
};
class F0 {
  constructor() {
    A(this, "cache", /* @__PURE__ */ new Map());
    A(this, "pendingPromises", /* @__PURE__ */ new Map());
    A(this, "defaultOptions", { ...Jl });
    A(this, "browserStorageSupported");
    this.browserStorageSupported = this.checkBrowserStorageSupport(), this.browserStorageSupported || console.warn("Browser storage is not supported or blocked. Falling back to in-memory cache.");
  }
  async getAsync(t, e, n = this.defaultOptions) {
    const s = this.get(t);
    if (s !== null)
      return s;
    if (this.pendingPromises.has(t))
      return this.pendingPromises.get(t);
    const i = (async () => {
      try {
        const o = await e();
        return this.set(t, o, n), o;
      } finally {
        this.pendingPromises.delete(t);
      }
    })();
    return this.pendingPromises.set(t, i), i;
  }
  get(t) {
    const e = this.cache.get(t);
    if (e) {
      if (!e.expiration || e.expiration > Date.now())
        return e.value;
      this.cache.delete(t);
    }
    if (this.defaultOptions.permStore && this.browserStorageSupported) {
      const n = localStorage.getItem(t);
      if (n) {
        const { value: s, expiration: i } = JSON.parse(n);
        if (!i || i > Date.now())
          return s;
        localStorage.removeItem(t);
      }
    }
    return null;
  }
  setDefaultOptions(t) {
    this.defaultOptions = { ...this.defaultOptions, ...t };
  }
  set(t, e, n = Jl) {
    const s = n.timeoutSeconds > 0 ? Date.now() + n.timeoutSeconds * 1e3 : null, i = { value: e, expiration: s };
    this.cache.set(t, i), n.permStore && this.browserStorageSupported && localStorage.setItem(t, JSON.stringify(i));
  }
  checkBrowserStorageSupport() {
    try {
      const t = "__localCacheTest__";
      return localStorage.setItem(t, "test"), localStorage.removeItem(t), !0;
    } catch {
      return !1;
    }
  }
}
const _l = new F0(), L0 = Kf(), D0 = jf(), M0 = Wf(), G0 = [
  L0,
  M0,
  D0
  // walletConnect,
], X0 = (r) => {
  const [t, e] = vr(null), [n, s] = vr(null);
  return lo(() => {
    if (t) {
      console.log("Chains loaded:", t);
      const i = {
        wallets: G0,
        chains: t,
        appMetadata: r.appMetadata,
        connect: {
          autoConnectLastWallet: !0
        },
        accountCenter: {
          desktop: {
            enabled: !1
          },
          mobile: {
            enabled: !1
          }
        }
      }, o = _f(i);
      s(o), r.onWeb3OnboardInit && r.onWeb3OnboardInit();
    }
  }, [t]), lo(() => {
    (async () => {
      try {
        if (r.providersConfigUrl) {
          const o = await _l.getAsync("URLS_" + r.providersConfigUrl, async () => await (await fetch(r.providersConfigUrl)).json());
          o && (e(o), (o || []).forEach((a) => {
            Ws[a.id.toString()] = a;
          }), r.onConfigLoaded && r.onConfigLoaded("providers", o));
        }
        for (const [o, a] of Object.entries(r.configUrlMaps || {})) {
          const c = await _l.getAsync("CONFIG_" + a, async () => await (await fetch(a)).json());
          c && r.onConfigLoaded && r.onConfigLoaded(o, c);
        }
      } catch (o) {
        console.error("Error loading configs", o), r.onError && r.onError(o);
      }
    })();
  }, [r.configUrlMaps, r.providersConfigUrl, r.onConfigLoaded]), n ? /* @__PURE__ */ pa.jsx(zf, { web3Onboard: n, children: r.children }) : /* @__PURE__ */ pa.jsx(pa.Fragment, { children: r.children });
};
class q0 {
  static addressLink(t, e) {
    const n = Ws[t];
    return n ? n.blockExplorerUrl + "/address/" + e : null;
  }
  static transactionLink(t, e) {
    const n = Ws[t];
    return n ? n.blockExplorerUrl + "/tx/" + e : null;
  }
}
export {
  X0 as AppWrapper,
  Z0 as ApprovableButton,
  Ws as ChainConstants,
  da as ERC20_ABI,
  _l as GlobalCache,
  F0 as LocalCache,
  q0 as Utils,
  B0 as canonicalChainId,
  j0 as getChain,
  Y0 as getWeb3OnboardInit,
  W0 as setWeb3OnboardInit,
  I0 as useConnectWalletSimple,
  k0 as useContracts,
  R0 as useErc20
};
//# sourceMappingURL=index.es.js.map
