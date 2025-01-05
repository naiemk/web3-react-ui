import { P as L, e as U, f as G, h as q, i as W, d as X, b as J, v as K } from "./index-Dn5g1Mm5.js";
function y(t, { strict: n = !0 } = {}) {
  return !t || typeof t != "string" ? !1 : n ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x");
}
function h(t) {
  return y(t, { strict: !1 }) ? Math.ceil((t.length - 2) / 2) : t.length;
}
const v = "2.12.0", P = () => `viem@${v}`;
class u extends Error {
  constructor(n, e = {}) {
    var o;
    super(), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ViemError"
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: P()
    });
    const r = e.cause instanceof u ? e.cause.details : (o = e.cause) != null && o.message ? e.cause.message : e.details, i = e.cause instanceof u && e.cause.docsPath || e.docsPath;
    this.message = [
      n || "An error occurred.",
      "",
      ...e.metaMessages ? [...e.metaMessages, ""] : [],
      ...i ? [
        `Docs: https://viem.sh${i}${e.docsSlug ? `#${e.docsSlug}` : ""}`
      ] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: ${this.version}`
    ].join(`
`), e.cause && (this.cause = e.cause), this.details = r, this.docsPath = i, this.metaMessages = e.metaMessages, this.shortMessage = n;
  }
  walk(n) {
    return x(this, n);
  }
}
function x(t, n) {
  return n != null && n(t) ? t : t && typeof t == "object" && "cause" in t ? x(t.cause, n) : n ? null : t;
}
class $ extends u {
  constructor({ size: n, targetSize: e, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${n}) exceeds padding size (${e}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SizeExceedsPaddingSizeError"
    });
  }
}
function g(t, { dir: n, size: e = 32 } = {}) {
  return typeof t == "string" ? S(t, { dir: n, size: e }) : E(t, { dir: n, size: e });
}
function S(t, { dir: n, size: e = 32 } = {}) {
  if (e === null)
    return t;
  const r = t.replace("0x", "");
  if (r.length > e * 2)
    throw new $({
      size: Math.ceil(r.length / 2),
      targetSize: e,
      type: "hex"
    });
  return `0x${r[n === "right" ? "padEnd" : "padStart"](e * 2, "0")}`;
}
function E(t, { dir: n, size: e = 32 } = {}) {
  if (e === null)
    return t;
  if (t.length > e)
    throw new $({
      size: t.length,
      targetSize: e,
      type: "bytes"
    });
  const r = new Uint8Array(e);
  for (let i = 0; i < e; i++) {
    const o = n === "right";
    r[o ? i : e - i - 1] = t[o ? i : t.length - i - 1];
  }
  return r;
}
class I extends u {
  constructor({ max: n, min: e, signed: r, size: i, value: o }) {
    super(`Number "${o}" is not in safe ${i ? `${i * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${n ? `(${e} to ${n})` : `(above ${e})`}`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntegerOutOfRangeError"
    });
  }
}
class T extends u {
  constructor(n) {
    super(`Hex value "${n}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidHexBooleanError"
    });
  }
}
class j extends u {
  constructor({ givenSize: n, maxSize: e }) {
    super(`Size cannot exceed ${e} bytes. Given size: ${n} bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SizeOverflowError"
    });
  }
}
function d(t, { dir: n = "left" } = {}) {
  let e = typeof t == "string" ? t.replace("0x", "") : t, r = 0;
  for (let i = 0; i < e.length - 1 && e[n === "left" ? i : e.length - i - 1].toString() === "0"; i++)
    r++;
  return e = n === "left" ? e.slice(r) : e.slice(0, e.length - r), typeof t == "string" ? (e.length === 1 && n === "right" && (e = `${e}0`), `0x${e.length % 2 === 1 ? `0${e}` : e}`) : e;
}
function l(t, { size: n }) {
  if (h(t) > n)
    throw new j({
      givenSize: h(t),
      maxSize: n
    });
}
function R(t, n) {
  const e = typeof n == "string" ? { to: n } : n, r = e.to;
  return r === "number" ? H(t, e) : r === "bigint" ? p(t, e) : r === "string" ? M(t, e) : r === "boolean" ? A(t, e) : w(t, e);
}
function p(t, n = {}) {
  const { signed: e } = n;
  n.size && l(t, { size: n.size });
  const r = BigInt(t);
  if (!e)
    return r;
  const i = (t.length - 2) / 2, o = (1n << BigInt(i) * 8n - 1n) - 1n;
  return r <= o ? r : r - BigInt(`0x${"f".padStart(i * 2, "f")}`) - 1n;
}
function A(t, n = {}) {
  let e = t;
  if (n.size && (l(e, { size: n.size }), e = d(e)), d(e) === "0x00")
    return !1;
  if (d(e) === "0x01")
    return !0;
  throw new T(e);
}
function H(t, n = {}) {
  return Number(p(t, n));
}
function M(t, n = {}) {
  let e = w(t);
  return n.size && (l(e, { size: n.size }), e = d(e, { dir: "right" })), new TextDecoder().decode(e);
}
const B = /* @__PURE__ */ Array.from({ length: 256 }, (t, n) => n.toString(16).padStart(2, "0"));
function D(t, n = {}) {
  return typeof t == "number" || typeof t == "bigint" ? C(t, n) : typeof t == "string" ? O(t, n) : typeof t == "boolean" ? V(t, n) : z(t, n);
}
function V(t, n = {}) {
  const e = `0x${Number(t)}`;
  return typeof n.size == "number" ? (l(e, { size: n.size }), g(e, { size: n.size })) : e;
}
function z(t, n = {}) {
  let e = "";
  for (let i = 0; i < t.length; i++)
    e += B[t[i]];
  const r = `0x${e}`;
  return typeof n.size == "number" ? (l(r, { size: n.size }), g(r, { dir: "right", size: n.size })) : r;
}
function C(t, n = {}) {
  const { signed: e, size: r } = n, i = BigInt(t);
  let o;
  r ? e ? o = (1n << BigInt(r) * 8n - 1n) - 1n : o = 2n ** (BigInt(r) * 8n) - 1n : typeof t == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const c = typeof o == "bigint" && e ? -o - 1n : 0;
  if (o && i > o || i < c) {
    const f = typeof t == "bigint" ? "n" : "";
    throw new I({
      max: o ? `${o}${f}` : void 0,
      min: `${c}${f}`,
      signed: e,
      size: r,
      value: `${t}${f}`
    });
  }
  const a = `0x${(e && i < 0 ? (1n << BigInt(r * 8)) + BigInt(i) : i).toString(16)}`;
  return r ? g(a, { size: r }) : a;
}
const N = /* @__PURE__ */ new TextEncoder();
function O(t, n = {}) {
  const e = N.encode(t);
  return z(e, n);
}
const s = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function m(t) {
  if (t >= s.zero && t <= s.nine)
    return t - s.zero;
  if (t >= s.A && t <= s.F)
    return t - (s.A - 10);
  if (t >= s.a && t <= s.f)
    return t - (s.a - 10);
}
function w(t, n = {}) {
  let e = t;
  n.size && (l(e, { size: n.size }), e = g(e, { dir: "right", size: n.size }));
  let r = e.slice(2);
  r.length % 2 && (r = `0${r}`);
  const i = r.length / 2, o = new Uint8Array(i);
  for (let c = 0, a = 0; c < i; c++) {
    const f = m(r.charCodeAt(a++)), b = m(r.charCodeAt(a++));
    if (f === void 0 || b === void 0)
      throw new u(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`);
    o[c] = f * 16 + b;
  }
  return o;
}
export {
  L as ProviderRpcError,
  U as ProviderRpcErrorCode,
  G as chainIdValidation,
  q as chainNamespaceValidation,
  W as chainValidation,
  X as createDownloadMessage,
  J as createEIP1193Provider,
  R as fromHex,
  y as isHex,
  D as toHex,
  K as validate
};
//# sourceMappingURL=index-C38Xa293.js.map
