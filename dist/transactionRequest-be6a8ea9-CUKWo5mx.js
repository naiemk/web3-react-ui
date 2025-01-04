const Y = "2.12.0", it = (e) => e, st = (e) => e, J = () => `viem@${Y}`;
class a extends Error {
  constructor(t, r = {}) {
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
      value: J()
    });
    const n = r.cause instanceof a ? r.cause.details : (o = r.cause) != null && o.message ? r.cause.message : r.details, i = r.cause instanceof a && r.cause.docsPath || r.docsPath;
    this.message = [
      t || "An error occurred.",
      "",
      ...r.metaMessages ? [...r.metaMessages, ""] : [],
      ...i ? [
        `Docs: https://viem.sh${i}${r.docsSlug ? `#${r.docsSlug}` : ""}`
      ] : [],
      ...n ? [`Details: ${n}`] : [],
      `Version: ${this.version}`
    ].join(`
`), r.cause && (this.cause = r.cause), this.details = n, this.docsPath = i, this.metaMessages = r.metaMessages, this.shortMessage = t;
  }
  walk(t) {
    return B(this, t);
  }
}
function B(e, t) {
  return t != null && t(e) ? e : e && typeof e == "object" && "cause" in e ? B(e.cause, t) : t ? null : e;
}
class Q extends a {
  constructor({ max: t, min: r, signed: n, size: i, value: o }) {
    super(`Number "${o}" is not in safe ${i ? `${i * 8}-bit ${n ? "signed" : "unsigned"} ` : ""}integer range ${t ? `(${r} to ${t})` : `(above ${r})`}`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntegerOutOfRangeError"
    });
  }
}
class ot extends a {
  constructor(t) {
    super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidBytesBooleanError"
    });
  }
}
class Z extends a {
  constructor({ givenSize: t, maxSize: r }) {
    super(`Size cannot exceed ${r} bytes. Given size: ${t} bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SizeOverflowError"
    });
  }
}
function P(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x");
}
function b(e) {
  return P(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
function at(e, { dir: t = "left" } = {}) {
  let r = typeof e == "string" ? e.replace("0x", "") : e, n = 0;
  for (let i = 0; i < r.length - 1 && r[t === "left" ? i : r.length - i - 1].toString() === "0"; i++)
    n++;
  return r = t === "left" ? r.slice(n) : r.slice(0, r.length - n), typeof e == "string" ? (r.length === 1 && t === "right" && (r = `${r}0`), `0x${r.length % 2 === 1 ? `0${r}` : r}`) : r;
}
class S extends a {
  constructor({ offset: t, position: r, size: n }) {
    super(`Slice ${r === "start" ? "starting" : "ending"} at offset "${t}" is out-of-bounds (size: ${n}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SliceOffsetOutOfBoundsError"
    });
  }
}
class z extends a {
  constructor({ size: t, targetSize: r, type: n }) {
    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${t}) exceeds padding size (${r}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SizeExceedsPaddingSizeError"
    });
  }
}
class ut extends a {
  constructor({ size: t, targetSize: r, type: n }) {
    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} is expected to be ${r} ${n} long, but is ${t} ${n} long.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidBytesLengthError"
    });
  }
}
function p(e, { dir: t, size: r = 32 } = {}) {
  return typeof e == "string" ? q(e, { dir: t, size: r }) : ee(e, { dir: t, size: r });
}
function q(e, { dir: t, size: r = 32 } = {}) {
  if (r === null)
    return e;
  const n = e.replace("0x", "");
  if (n.length > r * 2)
    throw new z({
      size: Math.ceil(n.length / 2),
      targetSize: r,
      type: "hex"
    });
  return `0x${n[t === "right" ? "padEnd" : "padStart"](r * 2, "0")}`;
}
function ee(e, { dir: t, size: r = 32 } = {}) {
  if (r === null)
    return e;
  if (e.length > r)
    throw new z({
      size: e.length,
      targetSize: r,
      type: "bytes"
    });
  const n = new Uint8Array(r);
  for (let i = 0; i < r; i++) {
    const o = t === "right";
    n[o ? i : r - i - 1] = e[o ? i : e.length - i - 1];
  }
  return n;
}
const te = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function re(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? l(e, t) : typeof e == "string" ? se(e, t) : typeof e == "boolean" ? ne(e, t) : E(e, t);
}
function ne(e, t = {}) {
  const r = `0x${Number(e)}`;
  return typeof t.size == "number" ? (g(r, { size: t.size }), p(r, { size: t.size })) : r;
}
function E(e, t = {}) {
  let r = "";
  for (let i = 0; i < e.length; i++)
    r += te[e[i]];
  const n = `0x${r}`;
  return typeof t.size == "number" ? (g(n, { size: t.size }), p(n, { dir: "right", size: t.size })) : n;
}
function l(e, t = {}) {
  const { signed: r, size: n } = t, i = BigInt(e);
  let o;
  n ? r ? o = (1n << BigInt(n) * 8n - 1n) - 1n : o = 2n ** (BigInt(n) * 8n) - 1n : typeof e == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const s = typeof o == "bigint" && r ? -o - 1n : 0;
  if (o && i > o || i < s) {
    const c = typeof e == "bigint" ? "n" : "";
    throw new Q({
      max: o ? `${o}${c}` : void 0,
      min: `${s}${c}`,
      signed: r,
      size: n,
      value: `${e}${c}`
    });
  }
  const u = `0x${(r && i < 0 ? (1n << BigInt(n * 8)) + BigInt(i) : i).toString(16)}`;
  return n ? p(u, { size: n }) : u;
}
const ie = /* @__PURE__ */ new TextEncoder();
function se(e, t = {}) {
  const r = ie.encode(e);
  return E(r, t);
}
const oe = /* @__PURE__ */ new TextEncoder();
function ae(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? ce(e, t) : typeof e == "boolean" ? ue(e, t) : P(e) ? k(e, t) : M(e, t);
}
function ue(e, t = {}) {
  const r = new Uint8Array(1);
  return r[0] = Number(e), typeof t.size == "number" ? (g(r, { size: t.size }), p(r, { size: t.size })) : r;
}
const f = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function I(e) {
  if (e >= f.zero && e <= f.nine)
    return e - f.zero;
  if (e >= f.A && e <= f.F)
    return e - (f.A - 10);
  if (e >= f.a && e <= f.f)
    return e - (f.a - 10);
}
function k(e, t = {}) {
  let r = e;
  t.size && (g(r, { size: t.size }), r = p(r, { dir: "right", size: t.size }));
  let n = r.slice(2);
  n.length % 2 && (n = `0${n}`);
  const i = n.length / 2, o = new Uint8Array(i);
  for (let s = 0, u = 0; s < i; s++) {
    const c = I(n.charCodeAt(u++)), h = I(n.charCodeAt(u++));
    if (c === void 0 || h === void 0)
      throw new a(`Invalid byte sequence ("${n[u - 2]}${n[u - 1]}" in "${n}").`);
    o[s] = c * 16 + h;
  }
  return o;
}
function ce(e, t) {
  const r = l(e, t);
  return k(r);
}
function M(e, t = {}) {
  const r = oe.encode(e);
  return typeof t.size == "number" ? (g(r, { size: t.size }), p(r, { dir: "right", size: t.size })) : r;
}
function g(e, { size: t }) {
  if (b(e) > t)
    throw new Z({
      givenSize: b(e),
      maxSize: t
    });
}
function fe(e, t = {}) {
  const { signed: r } = t;
  t.size && g(e, { size: t.size });
  const n = BigInt(e);
  if (!r)
    return n;
  const i = (e.length - 2) / 2, o = (1n << BigInt(i) * 8n - 1n) - 1n;
  return n <= o ? n : n - BigInt(`0x${"f".padStart(i * 2, "f")}`) - 1n;
}
function ct(e, t = {}) {
  return Number(fe(e, t));
}
function ft(e, t) {
  return ({ exclude: r, format: n }) => ({
    exclude: r,
    format: (i) => {
      const o = t(i);
      if (r)
        for (const s of r)
          delete o[s];
      return {
        ...o,
        ...n(i)
      };
    },
    type: e
  });
}
class lt extends a {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAddressError"
    });
  }
}
class R extends Map {
  constructor(t) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = t;
  }
  set(t, r) {
    return super.set(t, r), this.maxSize && this.size > this.maxSize && this.delete(this.keys().next().value), this;
  }
}
function T(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
function F(e, ...t) {
  if (!(e instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function L(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function le(e, t) {
  F(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const w = /* @__PURE__ */ BigInt(2 ** 32 - 1), j = /* @__PURE__ */ BigInt(32);
function he(e, t = !1) {
  return t ? { h: Number(e & w), l: Number(e >> j & w) } : { h: Number(e >> j & w) | 0, l: Number(e & w) | 0 };
}
function de(e, t = !1) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let i = 0; i < e.length; i++) {
    const { h: o, l: s } = he(e[i], t);
    [r[i], n[i]] = [o, s];
  }
  return [r, n];
}
const be = (e, t, r) => e << r | t >>> 32 - r, pe = (e, t, r) => t << r | e >>> 32 - r, ge = (e, t, r) => t << r - 32 | e >>> 64 - r, me = (e, t, r) => e << r - 32 | t >>> 64 - r;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ye = (e) => e instanceof Uint8Array, we = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), ht = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), dt = (e, t) => e << 32 - t | e >>> t, xe = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!xe)
  throw new Error("Non little-endian hardware is not supported");
function Pe(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function N(e) {
  if (typeof e == "string" && (e = Pe(e)), !ye(e))
    throw new Error(`expected Uint8Array, got ${typeof e}`);
  return e;
}
class ve {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function $e(e) {
  const t = (n) => e().update(N(n)).digest(), r = e();
  return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
}
const [H, V, G] = [[], [], []], Ee = /* @__PURE__ */ BigInt(0), m = /* @__PURE__ */ BigInt(1), Oe = /* @__PURE__ */ BigInt(2), Ie = /* @__PURE__ */ BigInt(7), Te = /* @__PURE__ */ BigInt(256), Le = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = m, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], H.push(2 * (5 * n + r)), V.push((e + 1) * (e + 2) / 2 % 64);
  let i = Ee;
  for (let o = 0; o < 7; o++)
    t = (t << m ^ (t >> Ie) * Le) % Te, t & Oe && (i ^= m << (m << /* @__PURE__ */ BigInt(o)) - m);
  G.push(i);
}
const [je, Ae] = /* @__PURE__ */ de(G, !0), A = (e, t, r) => r > 32 ? ge(e, t, r) : be(e, t, r), C = (e, t, r) => r > 32 ? me(e, t, r) : pe(e, t, r);
function Ce(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let s = 0; s < 10; s++)
      r[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
    for (let s = 0; s < 10; s += 2) {
      const u = (s + 8) % 10, c = (s + 2) % 10, h = r[c], d = r[c + 1], W = A(h, d, 1) ^ r[u], K = C(h, d, 1) ^ r[u + 1];
      for (let y = 0; y < 50; y += 10)
        e[s + y] ^= W, e[s + y + 1] ^= K;
    }
    let i = e[2], o = e[3];
    for (let s = 0; s < 24; s++) {
      const u = V[s], c = A(i, o, u), h = C(i, o, u), d = H[s];
      i = e[d], o = e[d + 1], e[d] = c, e[d + 1] = h;
    }
    for (let s = 0; s < 50; s += 10) {
      for (let u = 0; u < 10; u++)
        r[u] = e[s + u];
      for (let u = 0; u < 10; u++)
        e[s + u] ^= ~r[(u + 2) % 10] & r[(u + 4) % 10];
    }
    e[0] ^= je[n], e[1] ^= Ae[n];
  }
  r.fill(0);
}
class O extends ve {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, n, i = !1, o = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = i, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, T(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = we(this.state);
  }
  keccak() {
    Ce(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    L(this);
    const { blockLen: r, state: n } = this;
    t = N(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const s = Math.min(r - this.pos, i - o);
      for (let u = 0; u < s; u++)
        n[this.pos++] ^= t[o++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: r, pos: n, blockLen: i } = this;
    t[n] ^= r, r & 128 && n === i - 1 && this.keccak(), t[i - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    L(this, !1), F(t), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let i = 0, o = t.length; i < o; ) {
      this.posOut >= n && this.keccak();
      const s = Math.min(n - this.posOut, o - i);
      t.set(r.subarray(this.posOut, this.posOut + s), i), this.posOut += s, i += s;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return T(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (le(t, this), this.finished)
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
    const { blockLen: r, suffix: n, outputLen: i, rounds: o, enableXOF: s } = this;
    return t || (t = new O(r, n, i, s, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, t.outputLen = i, t.enableXOF = s, t.destroyed = this.destroyed, t;
  }
}
const Ue = (e, t, r) => $e(() => new O(t, e, r)), Be = /* @__PURE__ */ Ue(1, 136, 256 / 8);
function Se(e, t) {
  const r = t || "hex", n = Be(P(e, { strict: !1 }) ? ae(e) : e);
  return r === "bytes" ? n : re(n);
}
const v = /* @__PURE__ */ new R(8192);
function ze(e, t) {
  if (v.has(`${e}.${t}`))
    return v.get(`${e}.${t}`);
  const r = e.substring(2).toLowerCase(), n = Se(M(r), "bytes"), i = r.split("");
  for (let s = 0; s < 40; s += 2)
    n[s >> 1] >> 4 >= 8 && i[s] && (i[s] = i[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && i[s + 1] && (i[s + 1] = i[s + 1].toUpperCase());
  const o = `0x${i.join("")}`;
  return v.set(`${e}.${t}`, o), o;
}
const ke = /^0x[a-fA-F0-9]{40}$/, $ = /* @__PURE__ */ new R(8192);
function bt(e, t) {
  const { strict: r = !0 } = t ?? {};
  if ($.has(e))
    return $.get(e);
  const n = ke.test(e) ? e.toLowerCase() === e ? !0 : r ? ze(e) === e : !0 : !1;
  return $.set(e, n), n;
}
function pt(e) {
  return typeof e[0] == "string" ? Re(e) : Me(e);
}
function Me(e) {
  let t = 0;
  for (const i of e)
    t += i.length;
  const r = new Uint8Array(t);
  let n = 0;
  for (const i of e)
    r.set(i, n), n += i.length;
  return r;
}
function Re(e) {
  return `0x${e.reduce((t, r) => t + r.replace("0x", ""), "")}`;
}
class U extends a {
  constructor({ offset: t }) {
    super(`Offset \`${t}\` cannot be negative.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NegativeOffsetError"
    });
  }
}
class Fe extends a {
  constructor({ length: t, position: r }) {
    super(`Position \`${r}\` is out of bounds (\`0 < position < ${t}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "PositionOutOfBoundsError"
    });
  }
}
class Ne extends a {
  constructor({ count: t, limit: r }) {
    super(`Recursive read limit of \`${r}\` exceeded (recursive read count: \`${t}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RecursiveReadLimitExceededError"
    });
  }
}
const He = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new Ne({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new Fe({
        length: this.bytes.length,
        position: e
      });
  },
  decrementPosition(e) {
    if (e < 0)
      throw new U({ offset: e });
    const t = this.position - e;
    this.assertPosition(t), this.position = t;
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0;
  },
  incrementPosition(e) {
    if (e < 0)
      throw new U({ offset: e });
    const t = this.position + e;
    this.assertPosition(t), this.position = t;
  },
  inspectByte(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    const r = t ?? this.position;
    return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
  },
  inspectUint8(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2);
  },
  inspectUint32(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length;
  },
  pushUint8(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2;
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3;
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4;
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e, t) {
    this.assertReadLimit(), this._touch();
    const r = this.inspectBytes(e);
    return this.position += t ?? e, r;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint8();
    return this.position += 1, e;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint16();
    return this.position += 2, e;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint24();
    return this.position += 3, e;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint32();
    return this.position += 4, e;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(e) {
    const t = this.position;
    return this.assertPosition(e), this.position = e, () => this.position = t;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const e = this.getReadCount();
    this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++;
  }
};
function gt(e, { recursiveReadLimit: t = 8192 } = {}) {
  const r = Object.create(He);
  return r.bytes = e, r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), r.positionReadCount = /* @__PURE__ */ new Map(), r.recursiveReadLimit = t, r;
}
const mt = {
  gwei: 9,
  wei: 18
}, Ve = {
  ether: -9,
  wei: 9
};
function Ge(e, t) {
  let r = e.toString();
  const n = r.startsWith("-");
  n && (r = r.slice(1)), r = r.padStart(t, "0");
  let [i, o] = [
    r.slice(0, r.length - t),
    r.slice(r.length - t)
  ];
  return o = o.replace(/(0+)$/, ""), `${n ? "-" : ""}${i || "0"}${o ? `.${o}` : ""}`;
}
function x(e, t = "wei") {
  return Ge(e, Ve[t]);
}
function _e(e) {
  const t = Object.entries(e).map(([n, i]) => i === void 0 || i === !1 ? null : [n, i]).filter(Boolean), r = t.reduce((n, [i]) => Math.max(n, i.length), 0);
  return t.map(([n, i]) => `  ${`${n}:`.padEnd(r + 1)}  ${i}`).join(`
`);
}
class yt extends a {
  constructor() {
    super([
      "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
      "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FeeConflictError"
    });
  }
}
class wt extends a {
  constructor({ v: t }) {
    super(`Invalid \`v\` value "${t}". Expected 27 or 28.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidLegacyVError"
    });
  }
}
class xt extends a {
  constructor({ transaction: t }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        _e(t),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
        "- a Legacy Transaction with `gasPrice`"
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidSerializableTransactionError"
    });
  }
}
class Pt extends a {
  constructor({ storageKey: t }) {
    super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length - 2) / 2)} bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidStorageKeySizeError"
    });
  }
}
class vt extends a {
  constructor({ blockNumber: t, chain: r, contract: n }) {
    super(`Chain "${r.name}" does not support contract "${n.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...t && n.blockCreated && n.blockCreated > t ? [
          `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${t}).`
        ] : [
          `- The chain does not have the contract "${n.name}" configured.`
        ]
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainDoesNotSupportContract"
    });
  }
}
class $t extends a {
  constructor() {
    super("No chain was provided to the Client."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ClientChainNotConfiguredError"
    });
  }
}
class Et extends a {
  constructor({ chainId: t }) {
    super(typeof t == "number" ? `Chain ID "${t}" is invalid.` : "Chain ID is invalid."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidChainIdError"
    });
  }
}
class _ extends a {
  constructor({ cause: t, message: r } = {}) {
    var i;
    const n = (i = r == null ? void 0 : r.replace("execution reverted: ", "")) == null ? void 0 : i.replace("execution reverted", "");
    super(`Execution reverted ${n ? `with reason: ${n}` : "for an unknown reason"}.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ExecutionRevertedError"
    });
  }
}
Object.defineProperty(_, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3
});
Object.defineProperty(_, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/
});
class De extends a {
  constructor({ cause: t, maxFeePerGas: r } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${r ? ` = ${x(r)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FeeCapTooHigh"
    });
  }
}
Object.defineProperty(De, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class Xe extends a {
  constructor({ cause: t, maxFeePerGas: r } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${r ? ` = ${x(r)}` : ""} gwei) cannot be lower than the block base fee.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FeeCapTooLow"
    });
  }
}
Object.defineProperty(Xe, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class We extends a {
  constructor({ cause: t, nonce: r } = {}) {
    super(`Nonce provided for the transaction ${r ? `(${r}) ` : ""}is higher than the next one expected.`, { cause: t }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonceTooHighError"
    });
  }
}
Object.defineProperty(We, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/
});
class Ke extends a {
  constructor({ cause: t, nonce: r } = {}) {
    super([
      `Nonce provided for the transaction ${r ? `(${r}) ` : ""}is lower than the current nonce of the account.`,
      "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
    ].join(`
`), { cause: t }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonceTooLowError"
    });
  }
}
Object.defineProperty(Ke, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/
});
class Ye extends a {
  constructor({ cause: t, nonce: r } = {}) {
    super(`Nonce provided for the transaction ${r ? `(${r}) ` : ""}exceeds the maximum allowed nonce.`, { cause: t }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonceMaxValueError"
    });
  }
}
Object.defineProperty(Ye, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/
});
class Je extends a {
  constructor({ cause: t } = {}) {
    super([
      "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
    ].join(`
`), {
      cause: t,
      metaMessages: [
        "This error could arise when the account does not have enough funds to:",
        " - pay for the total gas fee,",
        " - pay for the value to send.",
        " ",
        "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
        " - `gas` is the amount of gas needed for transaction to execute,",
        " - `gas fee` is the gas fee,",
        " - `value` is the amount of ether to send to the recipient."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InsufficientFundsError"
    });
  }
}
Object.defineProperty(Je, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds/
});
class Qe extends a {
  constructor({ cause: t, gas: r } = {}) {
    super(`The amount of gas ${r ? `(${r}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntrinsicGasTooHighError"
    });
  }
}
Object.defineProperty(Qe, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/
});
class Ze extends a {
  constructor({ cause: t, gas: r } = {}) {
    super(`The amount of gas ${r ? `(${r}) ` : ""}provided for the transaction is too low.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntrinsicGasTooLowError"
    });
  }
}
Object.defineProperty(Ze, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/
});
class qe extends a {
  constructor({ cause: t }) {
    super("The transaction type is not supported for this chain.", {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionTypeNotSupportedError"
    });
  }
}
Object.defineProperty(qe, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/
});
class et extends a {
  constructor({ cause: t, maxPriorityFeePerGas: r, maxFeePerGas: n } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${r ? ` = ${x(r)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n ? ` = ${x(n)} gwei` : ""}).`
    ].join(`
`), {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TipAboveFeeCapError"
    });
  }
}
Object.defineProperty(et, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class Ot extends a {
  constructor({ cause: t }) {
    super(`An error occurred while executing: ${t == null ? void 0 : t.shortMessage}`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownNodeError"
    });
  }
}
function It(e, t, r, { strict: n } = {}) {
  return P(e, { strict: !1 }) ? rt(e, t, r, {
    strict: n
  }) : tt(e, t, r, {
    strict: n
  });
}
function D(e, t) {
  if (typeof t == "number" && t > 0 && t > b(e) - 1)
    throw new S({
      offset: t,
      position: "start",
      size: b(e)
    });
}
function X(e, t, r) {
  if (typeof t == "number" && typeof r == "number" && b(e) !== r - t)
    throw new S({
      offset: r,
      position: "end",
      size: b(e)
    });
}
function tt(e, t, r, { strict: n } = {}) {
  D(e, t);
  const i = e.slice(t, r);
  return n && X(i, t, r), i;
}
function rt(e, t, r, { strict: n } = {}) {
  D(e, t);
  const i = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
  return n && X(i, t, r), i;
}
const nt = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3"
};
function Tt(e) {
  const t = {};
  return typeof e.accessList < "u" && (t.accessList = e.accessList), typeof e.blobVersionedHashes < "u" && (t.blobVersionedHashes = e.blobVersionedHashes), typeof e.blobs < "u" && (typeof e.blobs[0] != "string" ? t.blobs = e.blobs.map((r) => E(r)) : t.blobs = e.blobs), typeof e.data < "u" && (t.data = e.data), typeof e.from < "u" && (t.from = e.from), typeof e.gas < "u" && (t.gas = l(e.gas)), typeof e.gasPrice < "u" && (t.gasPrice = l(e.gasPrice)), typeof e.maxFeePerBlobGas < "u" && (t.maxFeePerBlobGas = l(e.maxFeePerBlobGas)), typeof e.maxFeePerGas < "u" && (t.maxFeePerGas = l(e.maxFeePerGas)), typeof e.maxPriorityFeePerGas < "u" && (t.maxPriorityFeePerGas = l(e.maxPriorityFeePerGas)), typeof e.nonce < "u" && (t.nonce = l(e.nonce)), typeof e.to < "u" && (t.to = e.to), typeof e.type < "u" && (t.type = nt[e.type]), typeof e.value < "u" && (t.value = l(e.value)), t;
}
export {
  Je as $,
  q as A,
  a as B,
  ne as C,
  se as D,
  st as E,
  De as F,
  Tt as G,
  ve as H,
  lt as I,
  $t as J,
  vt as K,
  ze as L,
  tt as M,
  Se as N,
  M as O,
  yt as P,
  g as Q,
  ot as R,
  _e as S,
  et as T,
  Ot as U,
  x as V,
  _ as W,
  Xe as X,
  We as Y,
  Ke as Z,
  Ye as _,
  ct as a,
  Qe as a0,
  Ze as a1,
  qe as a2,
  Ge as a3,
  ut as a4,
  mt as a5,
  it as a6,
  gt as b,
  Re as c,
  ft as d,
  E as e,
  k as f,
  wt as g,
  fe as h,
  bt as i,
  at as j,
  It as k,
  Et as l,
  xt as m,
  Pt as n,
  P as o,
  ae as p,
  ht as q,
  L as r,
  b as s,
  re as t,
  N as u,
  le as v,
  $e as w,
  dt as x,
  l as y,
  pt as z
};
//# sourceMappingURL=transactionRequest-be6a8ea9-CUKWo5mx.js.map
