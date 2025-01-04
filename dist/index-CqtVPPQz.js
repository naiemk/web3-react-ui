import { B as v, s as I, p as se, q as F, r as W, u as rn, x as nn, j as ae, y as We, z as M, A as pe, C as Ve, I as sn, D as je, E as an, F as lr, G as on, H as Ce, J as Dt, K as V, t as ie, L as cn, M as un } from "./index-D9ITzUBb.js";
import { Q as ho, R as mo, T as yo, S as go, U as wo, V as vo, N as Po, X as xo, k as Eo, O as Ao, Y as To, Z as ko, W as Oo, _ as Fo, $ as Ro } from "./index-D9ITzUBb.js";
import { k as S, c as q, i as D, I as Y, s as He, a as fr, b as dn, d as ln, e as fn, p as wt, f as J, E as ze, F as ot, g as zt, N as Gt, h as Lt, j as _t, l as Ht, m as Ut, n as Wt, T as Vt, o as it, U as vt, q as bn, r as br, t as pn, u as hn, v as mn, w as yn, x as gn, y as pr, P as wn, z as Q, C as ct, A as hr, B as mr, D as vn, G as yr, H as Pn, W as Jt } from "./number-BDZtbtw4.js";
import { K as No, L as jo, M as Co, O as $o, _ as Io, $ as So, a0 as Mo, a1 as qo, a3 as Do, Q as zo, a4 as Go, R as Lo, V as _o, X as Ho, J as Uo, Y as Wo, a6 as Vo, a7 as Jo, a5 as Zo, a8 as Yo, a2 as Qo, Z as Xo, S as Ko } from "./number-BDZtbtw4.js";
function xn(e, t) {
  const r = e.exec(t);
  return r == null ? void 0 : r.groups;
}
const Zt = /^tuple(?<array>(\[(\d*)\])*)$/;
function ut(e) {
  let t = e.type;
  if (Zt.test(e.type) && "components" in e) {
    t = "(";
    const r = e.components.length;
    for (let s = 0; s < r; s++) {
      const a = e.components[s];
      t += ut(a), s < r - 1 && (t += ", ");
    }
    const n = xn(Zt, e.type);
    return t += `)${(n == null ? void 0 : n.array) ?? ""}`, ut({
      ...e,
      type: t
    });
  }
  return "indexed" in e && e.indexed && (t = `${t} indexed`), e.name ? `${t} ${e.name}` : t;
}
function fe(e) {
  let t = "";
  const r = e.length;
  for (let n = 0; n < r; n++) {
    const s = e[n];
    t += ut(s), n !== r - 1 && (t += ", ");
  }
  return t;
}
function En(e) {
  return e.type === "function" ? `function ${e.name}(${fe(e.inputs)})${e.stateMutability && e.stateMutability !== "nonpayable" ? ` ${e.stateMutability}` : ""}${e.outputs.length ? ` returns (${fe(e.outputs)})` : ""}` : e.type === "event" ? `event ${e.name}(${fe(e.inputs)})` : e.type === "error" ? `error ${e.name}(${fe(e.inputs)})` : e.type === "constructor" ? `constructor(${fe(e.inputs)})${e.stateMutability === "payable" ? " payable" : ""}` : e.type === "fallback" ? "fallback()" : "receive() external payable";
}
function A(e, t, r) {
  return (n) => {
    var s, a;
    return ((s = e[t.name]) == null ? void 0 : s.call(e, n)) ?? ((a = e[r]) == null ? void 0 : a.call(e, n)) ?? t(e, n);
  };
}
function G(e, { includeName: t = !1 } = {}) {
  if (e.type !== "function" && e.type !== "event" && e.type !== "error")
    throw new Sn(e.type);
  return `${e.name}(${Je(e.inputs, { includeName: t })})`;
}
function Je(e, { includeName: t = !1 } = {}) {
  return e ? e.map((r) => An(r, { includeName: t })).join(t ? ", " : ",") : "";
}
function An(e, { includeName: t }) {
  return e.type.startsWith("tuple") ? `(${Je(e.components, { includeName: t })})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "");
}
class Tn extends v {
  constructor({ docsPath: t }) {
    super([
      "A constructor was not found on the ABI.",
      "Make sure you are using the correct ABI and that the constructor exists on it."
    ].join(`
`), {
      docsPath: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiConstructorNotFoundError"
    });
  }
}
class Yt extends v {
  constructor({ docsPath: t }) {
    super([
      "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
      "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
    ].join(`
`), {
      docsPath: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiConstructorParamsNotFoundError"
    });
  }
}
class gr extends v {
  constructor({ data: t, params: r, size: n }) {
    super([`Data size of ${n} bytes is too small for given parameters.`].join(`
`), {
      metaMessages: [
        `Params: (${Je(r, { includeName: !0 })})`,
        `Data:   ${t} (${n} bytes)`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiDecodingDataSizeTooSmallError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = t, this.params = r, this.size = n;
  }
}
class Ze extends v {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiDecodingZeroDataError"
    });
  }
}
class kn extends v {
  constructor({ expectedLength: t, givenLength: r, type: n }) {
    super([
      `ABI encoding array length mismatch for type ${n}.`,
      `Expected length: ${t}`,
      `Given length: ${r}`
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEncodingArrayLengthMismatchError"
    });
  }
}
class On extends v {
  constructor({ expectedSize: t, value: r }) {
    super(`Size of bytes "${r}" (bytes${I(r)}) does not match expected size (bytes${t}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEncodingBytesSizeMismatchError"
    });
  }
}
class Fn extends v {
  constructor({ expectedLength: t, givenLength: r }) {
    super([
      "ABI encoding params/values length mismatch.",
      `Expected length (params): ${t}`,
      `Given length (values): ${r}`
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEncodingLengthMismatchError"
    });
  }
}
class wr extends v {
  constructor(t, { docsPath: r }) {
    super([
      `Encoded error signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`
    ].join(`
`), {
      docsPath: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiErrorSignatureNotFoundError"
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.signature = t;
  }
}
class Rn extends v {
  constructor({ docsPath: t }) {
    super("Cannot extract event signature from empty topics.", {
      docsPath: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEventSignatureEmptyTopicsError"
    });
  }
}
class vr extends v {
  constructor(t, { docsPath: r }) {
    super([
      `Encoded event signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it.",
      `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`
    ].join(`
`), {
      docsPath: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEventSignatureNotFoundError"
    });
  }
}
class Qt extends v {
  constructor(t, { docsPath: r } = {}) {
    super([
      `Event ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it."
    ].join(`
`), {
      docsPath: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEventNotFoundError"
    });
  }
}
class Ue extends v {
  constructor(t, { docsPath: r } = {}) {
    super([
      `Function ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiFunctionNotFoundError"
    });
  }
}
class Bn extends v {
  constructor(t, { docsPath: r }) {
    super([
      `Function "${t}" does not contain any \`outputs\` on ABI.`,
      "Cannot decode function result without knowing what the parameter types are.",
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiFunctionOutputsNotFoundError"
    });
  }
}
class Nn extends v {
  constructor(t, r) {
    super("Found ambiguous types in overloaded ABI items.", {
      metaMessages: [
        `\`${t.type}\` in \`${G(t.abiItem)}\`, and`,
        `\`${r.type}\` in \`${G(r.abiItem)}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiItemAmbiguityError"
    });
  }
}
class jn extends v {
  constructor({ expectedSize: t, givenSize: r }) {
    super(`Expected bytes${t}, got bytes${r}.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BytesSizeMismatchError"
    });
  }
}
class he extends v {
  constructor({ abiItem: t, data: r, params: n, size: s }) {
    super([
      `Data size of ${s} bytes is too small for non-indexed event parameters.`
    ].join(`
`), {
      metaMessages: [
        `Params: (${Je(n, { includeName: !0 })})`,
        `Data:   ${r} (${s} bytes)`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "DecodeLogDataMismatch"
    }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = t, this.data = r, this.params = n, this.size = s;
  }
}
class Ye extends v {
  constructor({ abiItem: t, param: r }) {
    super([
      `Expected a topic for indexed event parameter${r.name ? ` "${r.name}"` : ""} on event "${G(t, { includeName: !0 })}".`
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "DecodeLogTopicsMismatch"
    }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = t;
  }
}
class Cn extends v {
  constructor(t, { docsPath: r }) {
    super([
      `Type "${t}" is not a valid encoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: r }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiEncodingType"
    });
  }
}
class $n extends v {
  constructor(t, { docsPath: r }) {
    super([
      `Type "${t}" is not a valid decoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: r }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiDecodingType"
    });
  }
}
class In extends v {
  constructor(t) {
    super([`Value "${t}" is not a valid array.`].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidArrayError"
    });
  }
}
class Sn extends v {
  constructor(t) {
    super([
      `"${t}" is not a valid definition type.`,
      'Valid types: "function", "event", "error"'
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidDefinitionTypeError"
    });
  }
}
class Mn extends v {
  constructor(t) {
    super(`Filter type "${t}" is not supported.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FilterTypeNotSupportedError"
    });
  }
}
const qn = (e) => S(se(e));
function Dn(e) {
  return qn(e);
}
function zn(e) {
  let t = !0, r = "", n = 0, s = "", a = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (["(", ")", ","].includes(i) && (t = !0), i === "(" && n++, i === ")" && n--, !!t) {
      if (n === 0) {
        if (i === " " && ["event", "function", ""].includes(s))
          s = "";
        else if (s += i, i === ")") {
          a = !0;
          break;
        }
        continue;
      }
      if (i === " ") {
        e[o - 1] !== "," && r !== "," && r !== ",(" && (r = "", t = !1);
        continue;
      }
      s += i, r += i;
    }
  }
  if (!a)
    throw new v("Unable to normalize signature.");
  return s;
}
const Gn = (e) => {
  const t = typeof e == "string" ? e : En(e);
  return zn(t);
};
function Pr(e) {
  return Dn(Gn(e));
}
const Pt = Pr;
function ce(e, t) {
  if (e.length !== t.length)
    throw new Fn({
      expectedLength: e.length,
      givenLength: t.length
    });
  const r = Ln({
    params: e,
    values: t
  }), n = Et(r);
  return n.length === 0 ? "0x" : n;
}
function Ln({ params: e, values: t }) {
  const r = [];
  for (let n = 0; n < e.length; n++)
    r.push(xt({ param: e[n], value: t[n] }));
  return r;
}
function xt({ param: e, value: t }) {
  const r = At(e.type);
  if (r) {
    const [n, s] = r;
    return Hn(t, { length: n, param: { ...e, type: s } });
  }
  if (e.type === "tuple")
    return Zn(t, {
      param: e
    });
  if (e.type === "address")
    return _n(t);
  if (e.type === "bool")
    return Wn(t);
  if (e.type.startsWith("uint") || e.type.startsWith("int")) {
    const n = e.type.startsWith("int");
    return Vn(t, { signed: n });
  }
  if (e.type.startsWith("bytes"))
    return Un(t, { param: e });
  if (e.type === "string")
    return Jn(t);
  throw new Cn(e.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function Et(e) {
  let t = 0;
  for (let a = 0; a < e.length; a++) {
    const { dynamic: o, encoded: i } = e[a];
    o ? t += 32 : t += I(i);
  }
  const r = [], n = [];
  let s = 0;
  for (let a = 0; a < e.length; a++) {
    const { dynamic: o, encoded: i } = e[a];
    o ? (r.push(F(t + s, { size: 32 })), n.push(i), s += I(i)) : r.push(i);
  }
  return q([...r, ...n]);
}
function _n(e) {
  if (!D(e))
    throw new Y({ address: e });
  return { dynamic: !1, encoded: W(e.toLowerCase()) };
}
function Hn(e, { length: t, param: r }) {
  const n = t === null;
  if (!Array.isArray(e))
    throw new In(e);
  if (!n && e.length !== t)
    throw new kn({
      expectedLength: t,
      givenLength: e.length,
      type: `${r.type}[${t}]`
    });
  let s = !1;
  const a = [];
  for (let o = 0; o < e.length; o++) {
    const i = xt({ param: r, value: e[o] });
    i.dynamic && (s = !0), a.push(i);
  }
  if (n || s) {
    const o = Et(a);
    if (n) {
      const i = F(a.length, { size: 32 });
      return {
        dynamic: !0,
        encoded: a.length > 0 ? q([i, o]) : i
      };
    }
    if (s)
      return { dynamic: !0, encoded: o };
  }
  return {
    dynamic: !1,
    encoded: q(a.map(({ encoded: o }) => o))
  };
}
function Un(e, { param: t }) {
  const [, r] = t.type.split("bytes"), n = I(e);
  if (!r) {
    let s = e;
    return n % 32 !== 0 && (s = W(s, {
      dir: "right",
      size: Math.ceil((e.length - 2) / 2 / 32) * 32
    })), {
      dynamic: !0,
      encoded: q([W(F(n, { size: 32 })), s])
    };
  }
  if (n !== Number.parseInt(r))
    throw new On({
      expectedSize: Number.parseInt(r),
      value: e
    });
  return { dynamic: !1, encoded: W(e, { dir: "right" }) };
}
function Wn(e) {
  if (typeof e != "boolean")
    throw new v(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
  return { dynamic: !1, encoded: W(rn(e)) };
}
function Vn(e, { signed: t }) {
  return {
    dynamic: !1,
    encoded: F(e, {
      size: 32,
      signed: t
    })
  };
}
function Jn(e) {
  const t = nn(e), r = Math.ceil(I(t) / 32), n = [];
  for (let s = 0; s < r; s++)
    n.push(W(He(t, s * 32, (s + 1) * 32), {
      dir: "right"
    }));
  return {
    dynamic: !0,
    encoded: q([
      W(F(I(t), { size: 32 })),
      ...n
    ])
  };
}
function Zn(e, { param: t }) {
  let r = !1;
  const n = [];
  for (let s = 0; s < t.components.length; s++) {
    const a = t.components[s], o = Array.isArray(e) ? s : a.name, i = xt({
      param: a,
      value: e[o]
    });
    n.push(i), i.dynamic && (r = !0);
  }
  return {
    dynamic: r,
    encoded: r ? Et(n) : q(n.map(({ encoded: s }) => s))
  };
}
function At(e) {
  const t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? (
    // Return `null` if the array is dynamic.
    [t[2] ? Number(t[2]) : null, t[1]]
  ) : void 0;
}
const Tt = (e) => He(Pr(e), 0, 4);
function $e(e) {
  const { abi: t, args: r = [], name: n } = e, s = ae(n, { strict: !1 }), a = t.filter((i) => s ? i.type === "function" ? Tt(i) === n : i.type === "event" ? Pt(i) === n : !1 : "name" in i && i.name === n);
  if (a.length === 0)
    return;
  if (a.length === 1)
    return a[0];
  let o;
  for (const i of a) {
    if (!("inputs" in i))
      continue;
    if (!r || r.length === 0) {
      if (!i.inputs || i.inputs.length === 0)
        return i;
      continue;
    }
    if (!i.inputs || i.inputs.length === 0 || i.inputs.length !== r.length)
      continue;
    if (r.every((u, l) => {
      const f = "inputs" in i && i.inputs[l];
      return f ? dt(u, f) : !1;
    })) {
      if (o && "inputs" in o && o.inputs) {
        const u = xr(i.inputs, o.inputs, r);
        if (u)
          throw new Nn({
            abiItem: i,
            type: u[0]
          }, {
            abiItem: o,
            type: u[1]
          });
      }
      o = i;
    }
  }
  return o || a[0];
}
function dt(e, t) {
  const r = typeof e, n = t.type;
  switch (n) {
    case "address":
      return D(e, { strict: !1 });
    case "bool":
      return r === "boolean";
    case "function":
      return r === "string";
    case "string":
      return r === "string";
    default:
      return n === "tuple" && "components" in t ? Object.values(t.components).every((s, a) => dt(Object.values(e)[a], s)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n) ? r === "number" || r === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n) ? r === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n) ? Array.isArray(e) && e.every((s) => dt(s, {
        ...t,
        // Pop off `[]` or `[M]` from end of type
        type: n.replace(/(\[[0-9]{0,}\])$/, "")
      })) : !1;
  }
}
function xr(e, t, r) {
  for (const n in e) {
    const s = e[n], a = t[n];
    if (s.type === "tuple" && a.type === "tuple" && "components" in s && "components" in a)
      return xr(s.components, a.components, r[n]);
    const o = [s.type, a.type];
    if (o.includes("address") && o.includes("bytes20") ? !0 : o.includes("address") && o.includes("string") ? D(r[n], { strict: !1 }) : o.includes("address") && o.includes("bytes") ? D(r[n], { strict: !1 }) : !1)
      return o;
  }
}
const Xt = "/docs/contract/encodeEventTopics";
function Ie(e) {
  var c;
  const { abi: t, eventName: r, args: n } = e;
  let s = t[0];
  if (r) {
    const u = $e({ abi: t, name: r });
    if (!u)
      throw new Qt(r, { docsPath: Xt });
    s = u;
  }
  if (s.type !== "event")
    throw new Qt(void 0, { docsPath: Xt });
  const a = G(s), o = Pt(a);
  let i = [];
  if (n && "inputs" in s) {
    const u = (c = s.inputs) == null ? void 0 : c.filter((f) => "indexed" in f && f.indexed), l = Array.isArray(n) ? n : Object.values(n).length > 0 ? (u == null ? void 0 : u.map((f) => n[f.name])) ?? [] : [];
    l.length > 0 && (i = (u == null ? void 0 : u.map((f, d) => Array.isArray(l[d]) ? l[d].map((p, h) => Kt({ param: f, value: l[d][h] })) : l[d] ? Kt({ param: f, value: l[d] }) : null)) ?? []);
  }
  return [o, ...i];
}
function Kt({ param: e, value: t }) {
  if (e.type === "string" || e.type === "bytes")
    return S(se(t));
  if (e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/))
    throw new Mn(e.type);
  return ce([e], [t]);
}
function Qe(e, { method: t }) {
  var n, s;
  const r = {};
  return e.transport.type === "fallback" && ((s = (n = e.transport).onResponse) == null || s.call(n, ({ method: a, response: o, status: i, transport: c }) => {
    i === "success" && t === a && (r[o] = c.request);
  })), (a) => r[a] || e.request;
}
async function Er(e, t) {
  const { address: r, abi: n, args: s, eventName: a, fromBlock: o, strict: i, toBlock: c } = t, u = Qe(e, {
    method: "eth_newFilter"
  }), l = a ? Ie({
    abi: n,
    args: s,
    eventName: a
  }) : void 0, f = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: r,
        fromBlock: typeof o == "bigint" ? F(o) : o,
        toBlock: typeof c == "bigint" ? F(c) : c,
        topics: l
      }
    ]
  });
  return {
    abi: n,
    args: s,
    eventName: a,
    id: f,
    request: u(f),
    strict: !!i,
    type: "event"
  };
}
function U(e) {
  return typeof e == "string" ? { address: e, type: "json-rpc" } : e;
}
const er = "/docs/contract/encodeFunctionData";
function Yn(e) {
  const { abi: t, args: r, functionName: n } = e;
  let s = t[0];
  if (n) {
    const a = $e({
      abi: t,
      args: r,
      name: n
    });
    if (!a)
      throw new Ue(n, { docsPath: er });
    s = a;
  }
  if (s.type !== "function")
    throw new Ue(void 0, { docsPath: er });
  return {
    abi: [s],
    functionName: Tt(G(s))
  };
}
function ee(e) {
  const { args: t } = e, { abi: r, functionName: n } = (() => {
    var i;
    return e.abi.length === 1 && ((i = e.functionName) != null && i.startsWith("0x")) ? e : Yn(e);
  })(), s = r[0], a = n, o = "inputs" in s && s.inputs ? ce(s.inputs, t ?? []) : void 0;
  return fr([a, o ?? "0x"]);
}
const Ar = {
  1: "An `assert` condition failed.",
  17: "Arithmetic operation resulted in underflow or overflow.",
  18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
  33: "Attempted to convert to an invalid type.",
  34: "Attempted to access a storage byte array that is incorrectly encoded.",
  49: "Performed `.pop()` on an empty array",
  50: "Array index is out of bounds.",
  65: "Allocated too much memory or created an array which is too large.",
  81: "Attempted to call a zero-initialized variable of internal function type."
}, Qn = {
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
}, Xn = {
  inputs: [
    {
      name: "reason",
      type: "uint256"
    }
  ],
  name: "Panic",
  type: "error"
};
function Kn(e, t = {}) {
  typeof t.size < "u" && We(e, { size: t.size });
  const r = M(e, t);
  return pe(r, t);
}
function es(e, t = {}) {
  let r = e;
  if (typeof t.size < "u" && (We(r, { size: t.size }), r = Ve(r)), r.length > 1 || r[0] > 1)
    throw new sn(r);
  return !!r[0];
}
function z(e, t = {}) {
  typeof t.size < "u" && We(e, { size: t.size });
  const r = M(e, t);
  return je(r, t);
}
function ts(e, t = {}) {
  let r = e;
  return typeof t.size < "u" && (We(r, { size: t.size }), r = Ve(r, { dir: "right" })), new TextDecoder().decode(r);
}
function Xe(e, t) {
  const r = typeof t == "string" ? an(t) : t, n = dn(r);
  if (I(r) === 0 && e.length > 0)
    throw new Ze();
  if (I(t) && I(t) < 32)
    throw new gr({
      data: typeof t == "string" ? t : M(t),
      params: e,
      size: I(t)
    });
  let s = 0;
  const a = [];
  for (let o = 0; o < e.length; ++o) {
    const i = e[o];
    n.setPosition(s);
    const [c, u] = re(n, i, {
      staticPosition: 0
    });
    s += u, a.push(c);
  }
  return a;
}
function re(e, t, { staticPosition: r }) {
  const n = At(t.type);
  if (n) {
    const [s, a] = n;
    return ns(e, { ...t, type: a }, { length: s, staticPosition: r });
  }
  if (t.type === "tuple")
    return is(e, t, { staticPosition: r });
  if (t.type === "address")
    return rs(e);
  if (t.type === "bool")
    return ss(e);
  if (t.type.startsWith("bytes"))
    return as(e, t, { staticPosition: r });
  if (t.type.startsWith("uint") || t.type.startsWith("int"))
    return os(e, t);
  if (t.type === "string")
    return cs(e, { staticPosition: r });
  throw new $n(t.type, {
    docsPath: "/docs/contract/decodeAbiParameters"
  });
}
const tr = 32, lt = 32;
function rs(e) {
  const t = e.readBytes(32);
  return [ln(M(fn(t, -20))), 32];
}
function ns(e, t, { length: r, staticPosition: n }) {
  if (!r) {
    const o = z(e.readBytes(lt)), i = n + o, c = i + tr;
    e.setPosition(i);
    const u = z(e.readBytes(tr)), l = me(t);
    let f = 0;
    const d = [];
    for (let p = 0; p < u; ++p) {
      e.setPosition(c + (l ? p * 32 : f));
      const [h, b] = re(e, t, {
        staticPosition: c
      });
      f += b, d.push(h);
    }
    return e.setPosition(n + 32), [d, 32];
  }
  if (me(t)) {
    const o = z(e.readBytes(lt)), i = n + o, c = [];
    for (let u = 0; u < r; ++u) {
      e.setPosition(i + u * 32);
      const [l] = re(e, t, {
        staticPosition: i
      });
      c.push(l);
    }
    return e.setPosition(n + 32), [c, 32];
  }
  let s = 0;
  const a = [];
  for (let o = 0; o < r; ++o) {
    const [i, c] = re(e, t, {
      staticPosition: n + s
    });
    s += c, a.push(i);
  }
  return [a, s];
}
function ss(e) {
  return [es(e.readBytes(32), { size: 32 }), 32];
}
function as(e, t, { staticPosition: r }) {
  const [n, s] = t.type.split("bytes");
  if (!s) {
    const o = z(e.readBytes(32));
    e.setPosition(r + o);
    const i = z(e.readBytes(32));
    if (i === 0)
      return e.setPosition(r + 32), ["0x", 32];
    const c = e.readBytes(i);
    return e.setPosition(r + 32), [M(c), 32];
  }
  return [M(e.readBytes(Number.parseInt(s), 32)), 32];
}
function os(e, t) {
  const r = t.type.startsWith("int"), n = Number.parseInt(t.type.split("int")[1] || "256"), s = e.readBytes(32);
  return [
    n > 48 ? Kn(s, { signed: r }) : z(s, { signed: r }),
    32
  ];
}
function is(e, t, { staticPosition: r }) {
  const n = t.components.length === 0 || t.components.some(({ name: o }) => !o), s = n ? [] : {};
  let a = 0;
  if (me(t)) {
    const o = z(e.readBytes(lt)), i = r + o;
    for (let c = 0; c < t.components.length; ++c) {
      const u = t.components[c];
      e.setPosition(i + a);
      const [l, f] = re(e, u, {
        staticPosition: i
      });
      a += f, s[n ? c : u == null ? void 0 : u.name] = l;
    }
    return e.setPosition(r + 32), [s, 32];
  }
  for (let o = 0; o < t.components.length; ++o) {
    const i = t.components[o], [c, u] = re(e, i, {
      staticPosition: r
    });
    s[n ? o : i == null ? void 0 : i.name] = c, a += u;
  }
  return [s, a];
}
function cs(e, { staticPosition: t }) {
  const r = z(e.readBytes(32)), n = t + r;
  e.setPosition(n);
  const s = z(e.readBytes(32));
  if (s === 0)
    return e.setPosition(t + 32), ["", 32];
  const a = e.readBytes(s, 32), o = ts(Ve(a));
  return e.setPosition(t + 32), [o, 32];
}
function me(e) {
  var n;
  const { type: t } = e;
  if (t === "string" || t === "bytes" || t.endsWith("[]"))
    return !0;
  if (t === "tuple")
    return (n = e.components) == null ? void 0 : n.some(me);
  const r = At(e.type);
  return !!(r && me({ ...e, type: r[1] }));
}
function Tr(e) {
  const { abi: t, data: r } = e, n = He(r, 0, 4);
  if (n === "0x")
    throw new Ze();
  const a = [...t || [], Qn, Xn].find((o) => o.type === "error" && n === Tt(G(o)));
  if (!a)
    throw new wr(n, {
      docsPath: "/docs/contract/decodeErrorResult"
    });
  return {
    abiItem: a,
    args: "inputs" in a && a.inputs && a.inputs.length > 0 ? Xe(a.inputs, He(r, 4)) : void 0,
    errorName: a.name
  };
}
const j = (e, t, r) => JSON.stringify(e, (n, s) => typeof s == "bigint" ? s.toString() : s, r);
function kr({ abiItem: e, args: t, includeFunctionName: r = !0, includeName: n = !1 }) {
  if ("name" in e && "inputs" in e && e.inputs)
    return `${r ? e.name : ""}(${e.inputs.map((s, a) => `${n && s.name ? `${s.name}: ` : ""}${typeof t[a] == "object" ? j(t[a]) : t[a]}`).join(", ")})`;
}
class us extends v {
  constructor({ address: t }) {
    super(`State for account "${t}" is set multiple times.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AccountStateConflictError"
    });
  }
}
class ds extends v {
  constructor() {
    super("state and stateDiff are set on the same account."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "StateAssignmentConflictError"
    });
  }
}
function rr(e) {
  return e.reduce((t, { slot: r, value: n }) => `${t}        ${r}: ${n}
`, "");
}
function ls(e) {
  return e.reduce((t, { address: r, ...n }) => {
    let s = `${t}    ${r}:
`;
    return n.nonce && (s += `      nonce: ${n.nonce}
`), n.balance && (s += `      balance: ${n.balance}
`), n.code && (s += `      code: ${n.code}
`), n.state && (s += `      state:
`, s += rr(n.state)), n.stateDiff && (s += `      stateDiff:
`, s += rr(n.stateDiff)), s;
  }, `  State Override:
`).slice(0, -1);
}
class Or extends v {
  constructor(t, { account: r, docsPath: n, chain: s, data: a, gas: o, gasPrice: i, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: l, to: f, value: d, stateOverride: p }) {
    var y;
    const h = r ? U(r) : void 0;
    let b = wt({
      from: h == null ? void 0 : h.address,
      to: f,
      value: typeof d < "u" && `${lr(d)} ${((y = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : y.symbol) || "ETH"}`,
      data: a,
      gas: o,
      gasPrice: typeof i < "u" && `${J(i)} gwei`,
      maxFeePerGas: typeof c < "u" && `${J(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${J(u)} gwei`,
      nonce: l
    });
    p && (b += `
${ls(p)}`), super(t.shortMessage, {
      cause: t,
      docsPath: n,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Raw Call Arguments:",
        b
      ].filter(Boolean)
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "CallExecutionError"
    }), this.cause = t;
  }
}
class fs extends v {
  constructor(t, { abi: r, args: n, contractAddress: s, docsPath: a, functionName: o, sender: i }) {
    const c = $e({ abi: r, args: n, name: o }), u = c ? kr({
      abiItem: c,
      args: n,
      includeFunctionName: !1,
      includeName: !1
    }) : void 0, l = c ? G(c, { includeName: !0 }) : void 0, f = wt({
      address: s && on(s),
      function: l,
      args: u && u !== "()" && `${[...Array((o == null ? void 0 : o.length) ?? 0).keys()].map(() => " ").join("")}${u}`,
      sender: i
    });
    super(t.shortMessage || `An unknown error occurred while executing the contract function "${o}".`, {
      cause: t,
      docsPath: a,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Contract Call:",
        f
      ].filter(Boolean)
    }), Object.defineProperty(this, "abi", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "contractAddress", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "formattedArgs", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "functionName", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "sender", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ContractFunctionExecutionError"
    }), this.abi = r, this.args = n, this.cause = t, this.contractAddress = s, this.functionName = o, this.sender = i;
  }
}
class ft extends v {
  constructor({ abi: t, data: r, functionName: n, message: s }) {
    let a, o, i, c;
    if (r && r !== "0x")
      try {
        o = Tr({ abi: t, data: r });
        const { abiItem: l, errorName: f, args: d } = o;
        if (f === "Error")
          c = d[0];
        else if (f === "Panic") {
          const [p] = d;
          c = Ar[p];
        } else {
          const p = l ? G(l, { includeName: !0 }) : void 0, h = l && d ? kr({
            abiItem: l,
            args: d,
            includeFunctionName: !1,
            includeName: !1
          }) : void 0;
          i = [
            p ? `Error: ${p}` : "",
            h && h !== "()" ? `       ${[...Array((f == null ? void 0 : f.length) ?? 0).keys()].map(() => " ").join("")}${h}` : ""
          ];
        }
      } catch (l) {
        a = l;
      }
    else s && (c = s);
    let u;
    a instanceof wr && (u = a.signature, i = [
      `Unable to decode signature "${u}" as it was not found on the provided ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${u}.`
    ]), super(c && c !== "execution reverted" || u ? [
      `The contract function "${n}" reverted with the following ${u ? "signature" : "reason"}:`,
      c || u
    ].join(`
`) : `The contract function "${n}" reverted.`, {
      cause: a,
      metaMessages: i
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ContractFunctionRevertedError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "reason", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = o, this.reason = c, this.signature = u;
  }
}
class bs extends v {
  constructor({ functionName: t }) {
    super(`The contract function "${t}" returned no data ("0x").`, {
      metaMessages: [
        "This could be due to any of the following:",
        `  - The contract does not have the function "${t}",`,
        "  - The parameters passed to the contract function may be invalid, or",
        "  - The address is not a contract."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ContractFunctionZeroDataError"
    });
  }
}
class kt extends v {
  constructor({ data: t, message: r }) {
    super(r || ""), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RawContractError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = t;
  }
}
class Z extends v {
  constructor({ body: t, details: r, headers: n, status: s, url: a }) {
    super("HTTP request failed.", {
      details: r,
      metaMessages: [
        s && `Status: ${s}`,
        `URL: ${Ce(a)}`,
        t && `Request body: ${j(t)}`
      ].filter(Boolean)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "HttpRequestError"
    }), Object.defineProperty(this, "body", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "headers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "status", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.body = t, this.headers = n, this.status = s, this.url = a;
  }
}
class Fr extends v {
  constructor({ body: t, error: r, url: n }) {
    super("RPC Request failed.", {
      cause: r,
      details: r.message,
      metaMessages: [`URL: ${Ce(n)}`, `Request body: ${j(t)}`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RpcRequestError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.code = r.code;
  }
}
class nr extends v {
  constructor({ body: t, url: r }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${Ce(r)}`, `Request body: ${j(t)}`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TimeoutError"
    });
  }
}
const ps = -1;
class $ extends v {
  constructor(t, { code: r, docsPath: n, metaMessages: s, shortMessage: a }) {
    super(a, {
      cause: t,
      docsPath: n,
      metaMessages: s || (t == null ? void 0 : t.metaMessages)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RpcError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = t.name, this.code = t instanceof Fr ? t.code : r ?? ps;
  }
}
class ue extends $ {
  constructor(t, r) {
    super(t, r), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ProviderRpcError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = r.data;
  }
}
class ye extends $ {
  constructor(t) {
    super(t, {
      code: ye.code,
      shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ParseRpcError"
    });
  }
}
Object.defineProperty(ye, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700
});
class ge extends $ {
  constructor(t) {
    super(t, {
      code: ge.code,
      shortMessage: "JSON is not a valid request object."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidRequestRpcError"
    });
  }
}
Object.defineProperty(ge, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600
});
class we extends $ {
  constructor(t) {
    super(t, {
      code: we.code,
      shortMessage: "The method does not exist / is not available."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "MethodNotFoundRpcError"
    });
  }
}
Object.defineProperty(we, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601
});
class ve extends $ {
  constructor(t) {
    super(t, {
      code: ve.code,
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParamsRpcError"
    });
  }
}
Object.defineProperty(ve, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602
});
class X extends $ {
  constructor(t) {
    super(t, {
      code: X.code,
      shortMessage: "An internal error was received."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InternalRpcError"
    });
  }
}
Object.defineProperty(X, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603
});
class K extends $ {
  constructor(t) {
    super(t, {
      code: K.code,
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidInputRpcError"
    });
  }
}
Object.defineProperty(K, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3
});
class Pe extends $ {
  constructor(t) {
    super(t, {
      code: Pe.code,
      shortMessage: "Requested resource not found."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceNotFoundRpcError"
    });
  }
}
Object.defineProperty(Pe, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001
});
class xe extends $ {
  constructor(t) {
    super(t, {
      code: xe.code,
      shortMessage: "Requested resource not available."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceUnavailableRpcError"
    });
  }
}
Object.defineProperty(xe, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002
});
class Ee extends $ {
  constructor(t) {
    super(t, {
      code: Ee.code,
      shortMessage: "Transaction creation failed."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionRejectedRpcError"
    });
  }
}
Object.defineProperty(Ee, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003
});
class Ae extends $ {
  constructor(t) {
    super(t, {
      code: Ae.code,
      shortMessage: "Method is not implemented."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "MethodNotSupportedRpcError"
    });
  }
}
Object.defineProperty(Ae, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004
});
class oe extends $ {
  constructor(t) {
    super(t, {
      code: oe.code,
      shortMessage: "Request exceeds defined limit."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "LimitExceededRpcError"
    });
  }
}
Object.defineProperty(oe, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005
});
class Te extends $ {
  constructor(t) {
    super(t, {
      code: Te.code,
      shortMessage: "Version of JSON-RPC protocol is not supported."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "JsonRpcVersionUnsupportedError"
    });
  }
}
Object.defineProperty(Te, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006
});
class ne extends ue {
  constructor(t) {
    super(t, {
      code: ne.code,
      shortMessage: "User rejected the request."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UserRejectedRequestError"
    });
  }
}
Object.defineProperty(ne, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001
});
class ke extends ue {
  constructor(t) {
    super(t, {
      code: ke.code,
      shortMessage: "The requested method and/or account has not been authorized by the user."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnauthorizedProviderError"
    });
  }
}
Object.defineProperty(ke, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100
});
class Oe extends ue {
  constructor(t) {
    super(t, {
      code: Oe.code,
      shortMessage: "The Provider does not support the requested method."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnsupportedProviderMethodError"
    });
  }
}
Object.defineProperty(Oe, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200
});
class Fe extends ue {
  constructor(t) {
    super(t, {
      code: Fe.code,
      shortMessage: "The Provider is disconnected from all chains."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ProviderDisconnectedError"
    });
  }
}
Object.defineProperty(Fe, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900
});
class Re extends ue {
  constructor(t) {
    super(t, {
      code: Re.code,
      shortMessage: "The Provider is not connected to the requested chain."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainDisconnectedError"
    });
  }
}
Object.defineProperty(Re, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901
});
class Be extends ue {
  constructor(t) {
    super(t, {
      code: Be.code,
      shortMessage: "An error occurred when attempting to switch chain."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SwitchChainError"
    });
  }
}
Object.defineProperty(Be, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902
});
class hs extends $ {
  constructor(t) {
    super(t, {
      shortMessage: "An unknown RPC error occurred."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownRpcError"
    });
  }
}
const ms = 3;
function Ne(e, { abi: t, address: r, args: n, docsPath: s, functionName: a, sender: o }) {
  const { code: i, data: c, message: u, shortMessage: l } = e instanceof kt ? e : e instanceof v ? e.walk((d) => "data" in d) || e.walk() : {}, f = e instanceof Ze ? new bs({ functionName: a }) : [ms, X.code].includes(i) && (c || u || l) ? new ft({
    abi: t,
    data: typeof c == "object" ? c.data : c,
    functionName: a,
    message: l ?? u
  }) : e;
  return new fs(f, {
    abi: t,
    args: n,
    contractAddress: r,
    docsPath: s,
    functionName: a,
    sender: o
  });
}
class ys extends v {
  constructor(t, { account: r, docsPath: n, chain: s, data: a, gas: o, gasPrice: i, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: l, to: f, value: d }) {
    var h;
    const p = wt({
      from: r == null ? void 0 : r.address,
      to: f,
      value: typeof d < "u" && `${lr(d)} ${((h = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : h.symbol) || "ETH"}`,
      data: a,
      gas: o,
      gasPrice: typeof i < "u" && `${J(i)} gwei`,
      maxFeePerGas: typeof c < "u" && `${J(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${J(u)} gwei`,
      nonce: l
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: n,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        p
      ].filter(Boolean)
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EstimateGasExecutionError"
    }), this.cause = t;
  }
}
function Rr(e, t) {
  const r = (e.details || "").toLowerCase(), n = e instanceof v ? e.walk((s) => s.code === ze.code) : e;
  return n instanceof v ? new ze({
    cause: e,
    message: n.details
  }) : ze.nodeMessage.test(r) ? new ze({
    cause: e,
    message: e.details
  }) : ot.nodeMessage.test(r) ? new ot({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : zt.nodeMessage.test(r) ? new zt({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : Gt.nodeMessage.test(r) ? new Gt({ cause: e, nonce: t == null ? void 0 : t.nonce }) : Lt.nodeMessage.test(r) ? new Lt({ cause: e, nonce: t == null ? void 0 : t.nonce }) : _t.nodeMessage.test(r) ? new _t({ cause: e, nonce: t == null ? void 0 : t.nonce }) : Ht.nodeMessage.test(r) ? new Ht({ cause: e }) : Ut.nodeMessage.test(r) ? new Ut({ cause: e, gas: t == null ? void 0 : t.gas }) : Wt.nodeMessage.test(r) ? new Wt({ cause: e, gas: t == null ? void 0 : t.gas }) : Vt.nodeMessage.test(r) ? new Vt({ cause: e }) : it.nodeMessage.test(r) ? new it({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
    maxPriorityFeePerGas: t == null ? void 0 : t.maxPriorityFeePerGas
  }) : new vt({
    cause: e
  });
}
function gs(e, { docsPath: t, ...r }) {
  const n = (() => {
    const s = Rr(e, r);
    return s instanceof vt ? e : s;
  })();
  return new ys(n, {
    docsPath: t,
    ...r
  });
}
function Br(e, { format: t }) {
  if (!t)
    return {};
  const r = {};
  function n(a) {
    const o = Object.keys(a);
    for (const i of o)
      i in e && (r[i] = e[i]), a[i] && typeof a[i] == "object" && !Array.isArray(a[i]) && n(a[i]);
  }
  const s = t(e || {});
  return n(s), r;
}
function sr(e) {
  if (!(!e || e.length === 0))
    return e.reduce((t, { slot: r, value: n }) => {
      if (r.length !== 66)
        throw new Dt({
          size: r.length,
          targetSize: 66,
          type: "hex"
        });
      if (n.length !== 66)
        throw new Dt({
          size: n.length,
          targetSize: 66,
          type: "hex"
        });
      return t[r] = n, t;
    }, {});
}
function ws(e) {
  const { balance: t, nonce: r, state: n, stateDiff: s, code: a } = e, o = {};
  if (a !== void 0 && (o.code = a), t !== void 0 && (o.balance = F(t)), r !== void 0 && (o.nonce = F(r)), n !== void 0 && (o.state = sr(n)), s !== void 0) {
    if (o.state)
      throw new ds();
    o.stateDiff = sr(s);
  }
  return o;
}
function Nr(e) {
  if (!e)
    return;
  const t = {};
  for (const { address: r, ...n } of e) {
    if (!D(r, { strict: !1 }))
      throw new Y({ address: r });
    if (t[r])
      throw new us({ address: r });
    t[r] = ws(n);
  }
  return t;
}
function Ot(e) {
  const { account: t, gasPrice: r, maxFeePerGas: n, maxPriorityFeePerGas: s, to: a } = e, o = t ? U(t) : void 0;
  if (o && !D(o.address))
    throw new Y({ address: o.address });
  if (a && !D(a))
    throw new Y({ address: a });
  if (typeof r < "u" && (typeof n < "u" || typeof s < "u"))
    throw new bn();
  if (n && n > 2n ** 256n - 1n)
    throw new ot({ maxFeePerGas: n });
  if (s && n && s > n)
    throw new it({ maxFeePerGas: n, maxPriorityFeePerGas: s });
}
class vs extends v {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BaseFeeScalarError"
    });
  }
}
class Ft extends v {
  constructor() {
    super("Chain does not support EIP-1559 fees."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Eip1559FeesNotSupportedError"
    });
  }
}
class Ps extends v {
  constructor({ maxPriorityFeePerGas: t }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${J(t)} gwei).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "MaxFeePerGasTooLowError"
    });
  }
}
class jr extends v {
  constructor({ blockHash: t, blockNumber: r }) {
    let n = "Block";
    t && (n = `Block at hash "${t}"`), r && (n = `Block at number "${r}"`), super(`${n} could not be found.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BlockNotFoundError"
    });
  }
}
async function L(e, { blockHash: t, blockNumber: r, blockTag: n, includeTransactions: s } = {}) {
  var l, f, d;
  const a = n ?? "latest", o = s ?? !1, i = r !== void 0 ? F(r) : void 0;
  let c = null;
  if (t ? c = await e.request({
    method: "eth_getBlockByHash",
    params: [t, o]
  }) : c = await e.request({
    method: "eth_getBlockByNumber",
    params: [i || a, o]
  }), !c)
    throw new jr({ blockHash: t, blockNumber: r });
  return (((d = (f = (l = e.chain) == null ? void 0 : l.formatters) == null ? void 0 : f.block) == null ? void 0 : d.format) || br)(c);
}
async function Rt(e) {
  const t = await e.request({
    method: "eth_gasPrice"
  });
  return BigInt(t);
}
async function xs(e, t) {
  return Cr(e, t);
}
async function Cr(e, t) {
  var a, o, i;
  const { block: r, chain: n = e.chain, request: s } = t || {};
  if (typeof ((a = n == null ? void 0 : n.fees) == null ? void 0 : a.defaultPriorityFee) == "function") {
    const c = r || await A(e, L, "getBlock")({});
    return n.fees.defaultPriorityFee({
      block: c,
      client: e,
      request: s
    });
  }
  if (typeof ((o = n == null ? void 0 : n.fees) == null ? void 0 : o.defaultPriorityFee) < "u")
    return (i = n == null ? void 0 : n.fees) == null ? void 0 : i.defaultPriorityFee;
  try {
    const c = await e.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return pe(c);
  } catch {
    const [c, u] = await Promise.all([
      r ? Promise.resolve(r) : A(e, L, "getBlock")({}),
      A(e, Rt, "getGasPrice")({})
    ]);
    if (typeof c.baseFeePerGas != "bigint")
      throw new Ft();
    const l = u - c.baseFeePerGas;
    return l < 0n ? 0n : l;
  }
}
async function Es(e, t) {
  return bt(e, t);
}
async function bt(e, t) {
  var d, p;
  const { block: r, chain: n = e.chain, request: s, type: a = "eip1559" } = t || {}, o = await (async () => {
    var h, b;
    return typeof ((h = n == null ? void 0 : n.fees) == null ? void 0 : h.baseFeeMultiplier) == "function" ? n.fees.baseFeeMultiplier({
      block: r,
      client: e,
      request: s
    }) : ((b = n == null ? void 0 : n.fees) == null ? void 0 : b.baseFeeMultiplier) ?? 1.2;
  })();
  if (o < 1)
    throw new vs();
  const c = 10 ** (((d = o.toString().split(".")[1]) == null ? void 0 : d.length) ?? 0), u = (h) => h * BigInt(Math.ceil(o * c)) / BigInt(c), l = r || await A(e, L, "getBlock")({});
  if (typeof ((p = n == null ? void 0 : n.fees) == null ? void 0 : p.estimateFeesPerGas) == "function") {
    const h = await n.fees.estimateFeesPerGas({
      block: r,
      client: e,
      multiply: u,
      request: s,
      type: a
    });
    if (h !== null)
      return h;
  }
  if (a === "eip1559") {
    if (typeof l.baseFeePerGas != "bigint")
      throw new Ft();
    const h = typeof (s == null ? void 0 : s.maxPriorityFeePerGas) == "bigint" ? s.maxPriorityFeePerGas : await Cr(e, {
      block: l,
      chain: n,
      request: s
    }), b = u(l.baseFeePerGas);
    return {
      maxFeePerGas: (s == null ? void 0 : s.maxFeePerGas) ?? b + h,
      maxPriorityFeePerGas: h
    };
  }
  return {
    gasPrice: (s == null ? void 0 : s.gasPrice) ?? u(await A(e, Rt, "getGasPrice")({}))
  };
}
async function $r(e, { address: t, blockTag: r = "latest", blockNumber: n }) {
  const s = await e.request({
    method: "eth_getTransactionCount",
    params: [t, n ? F(n) : r]
  });
  return je(s);
}
async function Ir(e) {
  const t = await e.request({
    method: "eth_chainId"
  });
  return je(t);
}
const As = [
  "blobVersionedHashes",
  "chainId",
  "fees",
  "gas",
  "nonce",
  "type"
];
async function Sr(e, t) {
  const { account: r = e.account, blobs: n, chain: s, chainId: a, gas: o, kzg: i, nonce: c, parameters: u = As, type: l } = t, f = r ? U(r) : void 0, d = { ...t, ...f ? { from: f == null ? void 0 : f.address } : {} };
  let p;
  async function h() {
    return p || (p = await A(e, L, "getBlock")({ blockTag: "latest" }), p);
  }
  if ((u.includes("blobVersionedHashes") || u.includes("sidecars")) && n && i) {
    const b = pn({ blobs: n, kzg: i });
    if (u.includes("blobVersionedHashes")) {
      const y = hn({
        commitments: b,
        to: "hex"
      });
      d.blobVersionedHashes = y;
    }
    if (u.includes("sidecars")) {
      const y = mn({ blobs: n, commitments: b, kzg: i }), m = yn({
        blobs: n,
        commitments: b,
        proofs: y,
        to: "hex"
      });
      d.sidecars = m;
    }
  }
  if (u.includes("chainId") && (s ? d.chainId = s.id : typeof a < "u" ? d.chainId = a : d.chainId = await A(e, Ir, "getChainId")({})), u.includes("nonce") && typeof c > "u" && f && (d.nonce = await A(e, $r, "getTransactionCount")({
    address: f.address,
    blockTag: "pending"
  })), (u.includes("fees") || u.includes("type")) && typeof l > "u")
    try {
      d.type = gn(d);
    } catch {
      const b = await h();
      d.type = typeof (b == null ? void 0 : b.baseFeePerGas) == "bigint" ? "eip1559" : "legacy";
    }
  if (u.includes("fees"))
    if (d.type !== "legacy" && d.type !== "eip2930") {
      if (typeof d.maxFeePerGas > "u" || typeof d.maxPriorityFeePerGas > "u") {
        const b = await h(), { maxFeePerGas: y, maxPriorityFeePerGas: m } = await bt(e, {
          block: b,
          chain: s,
          request: d
        });
        if (typeof t.maxPriorityFeePerGas > "u" && t.maxFeePerGas && t.maxFeePerGas < m)
          throw new Ps({
            maxPriorityFeePerGas: m
          });
        d.maxPriorityFeePerGas = m, d.maxFeePerGas = y;
      }
    } else {
      if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u")
        throw new Ft();
      const b = await h(), { gasPrice: y } = await bt(e, {
        block: b,
        chain: s,
        request: d,
        type: "legacy"
      });
      d.gasPrice = y;
    }
  return u.includes("gas") && typeof o > "u" && (d.gas = await A(e, Bt, "estimateGas")({
    ...d,
    account: f ? { address: f.address, type: "json-rpc" } : void 0
  })), Ot(d), delete d.parameters, d;
}
async function Bt(e, t) {
  var s, a, o;
  const r = t.account ?? e.account, n = r ? U(r) : void 0;
  try {
    const { accessList: i, blobs: c, blobVersionedHashes: u, blockNumber: l, blockTag: f, data: d, gas: p, gasPrice: h, maxFeePerBlobGas: b, maxFeePerGas: y, maxPriorityFeePerGas: m, nonce: g, to: P, value: w, stateOverride: O, ...T } = await Sr(e, {
      ...t,
      parameters: (
        // Some RPC Providers do not compute versioned hashes from blobs. We will need
        // to compute them.
        (n == null ? void 0 : n.type) === "local" ? void 0 : ["blobVersionedHashes"]
      )
    }), E = (l ? F(l) : void 0) || f, x = Nr(O);
    Ot(t);
    const R = (o = (a = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : a.transactionRequest) == null ? void 0 : o.format, C = (R || pr)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...Br(T, { format: R }),
      from: n == null ? void 0 : n.address,
      accessList: i,
      blobs: c,
      blobVersionedHashes: u,
      data: d,
      gas: p,
      gasPrice: h,
      maxFeePerBlobGas: b,
      maxFeePerGas: y,
      maxPriorityFeePerGas: m,
      nonce: g,
      to: P,
      value: w
    }), N = await e.request({
      method: "eth_estimateGas",
      params: x ? [C, E ?? "latest", x] : E ? [C, E] : [C]
    });
    return BigInt(N);
  } catch (i) {
    throw gs(i, {
      ...t,
      account: n,
      chain: e.chain
    });
  }
}
async function Ts(e, t) {
  const { abi: r, address: n, args: s, functionName: a, ...o } = t, i = ee({
    abi: r,
    args: s,
    functionName: a
  });
  try {
    return await A(e, Bt, "estimateGas")({
      data: i,
      to: n,
      ...o
    });
  } catch (c) {
    const u = o.account ? U(o.account) : void 0;
    throw Ne(c, {
      abi: r,
      address: n,
      args: s,
      docsPath: "/docs/contract/estimateContractGas",
      functionName: a,
      sender: u == null ? void 0 : u.address
    });
  }
}
const ar = "/docs/contract/decodeEventLog";
function Nt(e) {
  const { abi: t, data: r, strict: n, topics: s } = e, a = n ?? !0, [o, ...i] = s;
  if (!o)
    throw new Rn({ docsPath: ar });
  const c = t.find((b) => b.type === "event" && o === Pt(G(b)));
  if (!(c && "name" in c) || c.type !== "event")
    throw new vr(o, { docsPath: ar });
  const { name: u, inputs: l } = c, f = l == null ? void 0 : l.some((b) => !("name" in b && b.name));
  let d = f ? [] : {};
  const p = l.filter((b) => "indexed" in b && b.indexed);
  for (let b = 0; b < p.length; b++) {
    const y = p[b], m = i[b];
    if (!m)
      throw new Ye({
        abiItem: c,
        param: y
      });
    d[f ? b : y.name || b] = ks({ param: y, value: m });
  }
  const h = l.filter((b) => !("indexed" in b && b.indexed));
  if (h.length > 0) {
    if (r && r !== "0x")
      try {
        const b = Xe(h, r);
        if (b)
          if (f)
            d = [...d, ...b];
          else
            for (let y = 0; y < h.length; y++)
              d[h[y].name] = b[y];
      } catch (b) {
        if (a)
          throw b instanceof gr || b instanceof wn ? new he({
            abiItem: c,
            data: r,
            params: h,
            size: I(r)
          }) : b;
      }
    else if (a)
      throw new he({
        abiItem: c,
        data: "0x",
        params: h,
        size: 0
      });
  }
  return {
    eventName: u,
    args: Object.values(d).length > 0 ? d : void 0
  };
}
function ks({ param: e, value: t }) {
  return e.type === "string" || e.type === "bytes" || e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/) ? t : Xe([e], t)[0];
}
function jt({ abi: e, eventName: t, logs: r, strict: n = !0 }) {
  return r.map((s) => {
    var a;
    try {
      const o = Nt({
        ...s,
        abi: e,
        strict: n
      });
      return t && !t.includes(o.eventName) ? null : { ...o, ...s };
    } catch (o) {
      let i, c;
      if (o instanceof vr)
        return null;
      if (o instanceof he || o instanceof Ye) {
        if (n)
          return null;
        i = o.abiItem.name, c = (a = o.abiItem.inputs) == null ? void 0 : a.some((u) => !("name" in u && u.name));
      }
      return { ...s, args: c ? [] : {}, eventName: i };
    }
  }).filter(Boolean);
}
async function Ct(e, { address: t, blockHash: r, fromBlock: n, toBlock: s, event: a, events: o, args: i, strict: c } = {}) {
  const u = c ?? !1, l = o ?? (a ? [a] : void 0);
  let f = [];
  l && (f = [
    l.flatMap((h) => Ie({
      abi: [h],
      eventName: h.name,
      args: i
    }))
  ], a && (f = f[0]));
  let d;
  r ? d = await e.request({
    method: "eth_getLogs",
    params: [{ address: t, topics: f, blockHash: r }]
  }) : d = await e.request({
    method: "eth_getLogs",
    params: [
      {
        address: t,
        topics: f,
        fromBlock: typeof n == "bigint" ? F(n) : n,
        toBlock: typeof s == "bigint" ? F(s) : s
      }
    ]
  });
  const p = d.map((h) => Q(h));
  return l ? jt({
    abi: l,
    logs: p,
    strict: u
  }) : p;
}
async function Mr(e, t) {
  const { abi: r, address: n, args: s, blockHash: a, eventName: o, fromBlock: i, toBlock: c, strict: u } = t, l = o ? $e({ abi: r, name: o }) : void 0, f = l ? void 0 : r.filter((d) => d.type === "event");
  return A(e, Ct, "getLogs")({
    address: n,
    args: s,
    blockHash: a,
    event: l,
    events: f,
    fromBlock: i,
    toBlock: c,
    strict: u
  });
}
const rt = "/docs/contract/decodeFunctionResult";
function de(e) {
  const { abi: t, args: r, functionName: n, data: s } = e;
  let a = t[0];
  if (n) {
    const i = $e({ abi: t, args: r, name: n });
    if (!i)
      throw new Ue(n, { docsPath: rt });
    a = i;
  }
  if (a.type !== "function")
    throw new Ue(void 0, { docsPath: rt });
  if (!a.outputs)
    throw new Bn(a.name, { docsPath: rt });
  const o = Xe(a.outputs, s);
  if (o.length > 1)
    return o;
  if (o.length === 1)
    return o[0];
}
const pt = [
  {
    inputs: [
      {
        components: [
          {
            name: "target",
            type: "address"
          },
          {
            name: "allowFailure",
            type: "bool"
          },
          {
            name: "callData",
            type: "bytes"
          }
        ],
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            name: "success",
            type: "bool"
          },
          {
            name: "returnData",
            type: "bytes"
          }
        ],
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], qr = [
  {
    inputs: [],
    name: "ResolverNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverWildcardNotSupported",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverNotContract",
    type: "error"
  },
  {
    inputs: [
      {
        name: "returnData",
        type: "bytes"
      }
    ],
    name: "ResolverError",
    type: "error"
  },
  {
    inputs: [
      {
        components: [
          {
            name: "status",
            type: "uint16"
          },
          {
            name: "message",
            type: "string"
          }
        ],
        name: "errors",
        type: "tuple[]"
      }
    ],
    name: "HttpError",
    type: "error"
  }
], Dr = [
  ...qr,
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  },
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" },
      { name: "gateways", type: "string[]" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  }
], Os = [
  ...qr,
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [{ type: "bytes", name: "reverseName" }],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  },
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [
      { type: "bytes", name: "reverseName" },
      { type: "string[]", name: "gateways" }
    ],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  }
], or = [
  {
    name: "text",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "key", type: "string" }
    ],
    outputs: [{ name: "", type: "string" }]
  }
], ir = [
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "name", type: "bytes32" }],
    outputs: [{ name: "", type: "address" }]
  },
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "coinType", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bytes" }]
  }
], Fs = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  }
], Rs = "0x82ad56cb";
function le({ blockNumber: e, chain: t, contract: r }) {
  var s;
  const n = (s = t == null ? void 0 : t.contracts) == null ? void 0 : s[r];
  if (!n)
    throw new ct({
      chain: t,
      contract: { name: r }
    });
  if (e && n.blockCreated && n.blockCreated > e)
    throw new ct({
      blockNumber: e,
      chain: t,
      contract: {
        name: r,
        blockCreated: n.blockCreated
      }
    });
  return n.address;
}
function Bs(e, { docsPath: t, ...r }) {
  const n = (() => {
    const s = Rr(e, r);
    return s instanceof vt ? e : s;
  })();
  return new Or(n, {
    docsPath: t,
    ...r
  });
}
const nt = /* @__PURE__ */ new Map();
function zr({ fn: e, id: t, shouldSplitBatch: r, wait: n = 0, sort: s }) {
  const a = async () => {
    const l = c();
    o();
    const f = l.map(({ args: d }) => d);
    f.length !== 0 && e(f).then((d) => {
      var p;
      s && Array.isArray(d) && d.sort(s);
      for (let h = 0; h < l.length; h++) {
        const { pendingPromise: b } = l[h];
        (p = b.resolve) == null || p.call(b, [d[h], d]);
      }
    }).catch((d) => {
      var p;
      for (let h = 0; h < l.length; h++) {
        const { pendingPromise: b } = l[h];
        (p = b.reject) == null || p.call(b, d);
      }
    });
  }, o = () => nt.delete(t), i = () => c().map(({ args: l }) => l), c = () => nt.get(t) || [], u = (l) => nt.set(t, [...c(), l]);
  return {
    flush: o,
    async schedule(l) {
      const f = {}, d = new Promise((b, y) => {
        f.resolve = b, f.reject = y;
      });
      return (r == null ? void 0 : r([...i(), l])) && a(), c().length > 0 ? (u({ args: l, pendingPromise: f }), d) : (u({ args: l, pendingPromise: f }), setTimeout(a, n), d);
    }
  };
}
async function Se(e, t) {
  var w, O, T, k;
  const { account: r = e.account, batch: n = !!((w = e.batch) != null && w.multicall), blockNumber: s, blockTag: a = "latest", accessList: o, blobs: i, data: c, gas: u, gasPrice: l, maxFeePerBlobGas: f, maxFeePerGas: d, maxPriorityFeePerGas: p, nonce: h, to: b, value: y, stateOverride: m, ...g } = t, P = r ? U(r) : void 0;
  try {
    Ot(t);
    const x = (s ? F(s) : void 0) || a, R = Nr(m), B = (k = (T = (O = e.chain) == null ? void 0 : O.formatters) == null ? void 0 : T.transactionRequest) == null ? void 0 : k.format, N = (B || pr)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...Br(g, { format: B }),
      from: P == null ? void 0 : P.address,
      accessList: o,
      blobs: i,
      data: c,
      gas: u,
      gasPrice: l,
      maxFeePerBlobGas: f,
      maxFeePerGas: d,
      maxPriorityFeePerGas: p,
      nonce: h,
      to: b,
      value: y
    });
    if (n && Ns({ request: N }) && !R)
      try {
        return await js(e, {
          ...N,
          blockNumber: s,
          blockTag: a
        });
      } catch (te) {
        if (!(te instanceof hr) && !(te instanceof ct))
          throw te;
      }
    const De = await e.request({
      method: "eth_call",
      params: R ? [
        N,
        x,
        R
      ] : [N, x]
    });
    return De === "0x" ? { data: void 0 } : { data: De };
  } catch (E) {
    const x = Cs(E), { offchainLookup: R, offchainLookupSignature: B } = await Promise.resolve().then(() => Ra);
    if (e.ccipRead !== !1 && (x == null ? void 0 : x.slice(0, 10)) === B && b)
      return { data: await R(e, { data: x, to: b }) };
    throw Bs(E, {
      ...t,
      account: P,
      chain: e.chain
    });
  }
}
function Ns({ request: e }) {
  const { data: t, to: r, ...n } = e;
  return !(!t || t.startsWith(Rs) || !r || Object.values(n).filter((s) => typeof s < "u").length > 0);
}
async function js(e, t) {
  var b;
  const { batchSize: r = 1024, wait: n = 0 } = typeof ((b = e.batch) == null ? void 0 : b.multicall) == "object" ? e.batch.multicall : {}, { blockNumber: s, blockTag: a = "latest", data: o, multicallAddress: i, to: c } = t;
  let u = i;
  if (!u) {
    if (!e.chain)
      throw new hr();
    u = le({
      blockNumber: s,
      chain: e.chain,
      contract: "multicall3"
    });
  }
  const f = (s ? F(s) : void 0) || a, { schedule: d } = zr({
    id: `${e.uid}.${f}`,
    wait: n,
    shouldSplitBatch(y) {
      return y.reduce((g, { data: P }) => g + (P.length - 2), 0) > r * 2;
    },
    fn: async (y) => {
      const m = y.map((w) => ({
        allowFailure: !0,
        callData: w.data,
        target: w.to
      })), g = ee({
        abi: pt,
        args: [m],
        functionName: "aggregate3"
      }), P = await e.request({
        method: "eth_call",
        params: [
          {
            data: g,
            to: u
          },
          f
        ]
      });
      return de({
        abi: pt,
        args: [m],
        functionName: "aggregate3",
        data: P || "0x"
      });
    }
  }), [{ returnData: p, success: h }] = await d({ data: o, to: c });
  if (!h)
    throw new kt({ data: p });
  return p === "0x" ? { data: void 0 } : { data: p };
}
function Cs(e) {
  var r;
  if (!(e instanceof v))
    return;
  const t = e.walk();
  return typeof (t == null ? void 0 : t.data) == "object" ? (r = t.data) == null ? void 0 : r.data : t.data;
}
async function _(e, t) {
  const { abi: r, address: n, args: s, functionName: a, ...o } = t, i = ee({
    abi: r,
    args: s,
    functionName: a
  });
  try {
    const { data: c } = await A(e, Se, "call")({
      ...o,
      data: i,
      to: n
    });
    return de({
      abi: r,
      args: s,
      functionName: a,
      data: c || "0x"
    });
  } catch (c) {
    throw Ne(c, {
      abi: r,
      address: n,
      args: s,
      docsPath: "/docs/contract/readContract",
      functionName: a
    });
  }
}
async function $s(e, t) {
  const { abi: r, address: n, args: s, dataSuffix: a, functionName: o, ...i } = t, c = i.account ? U(i.account) : e.account, u = ee({ abi: r, args: s, functionName: o });
  try {
    const { data: l } = await A(e, Se, "call")({
      batch: !1,
      data: `${u}${a ? a.replace("0x", "") : ""}`,
      to: n,
      ...i,
      account: c
    }), f = de({
      abi: r,
      args: s,
      functionName: o,
      data: l || "0x"
    }), d = r.filter((p) => "name" in p && p.name === t.functionName);
    return {
      result: f,
      request: {
        abi: d,
        address: n,
        args: s,
        dataSuffix: a,
        functionName: o,
        ...i,
        account: c
      }
    };
  } catch (l) {
    throw Ne(l, {
      abi: r,
      address: n,
      args: s,
      docsPath: "/docs/contract/simulateContract",
      functionName: o,
      sender: c == null ? void 0 : c.address
    });
  }
}
const st = /* @__PURE__ */ new Map(), cr = /* @__PURE__ */ new Map();
let Is = 0;
function H(e, t, r) {
  const n = ++Is, s = () => st.get(e) || [], a = () => {
    const l = s();
    st.set(e, l.filter((f) => f.id !== n));
  }, o = () => {
    const l = cr.get(e);
    s().length === 1 && l && l(), a();
  }, i = s();
  if (st.set(e, [
    ...i,
    { id: n, fns: t }
  ]), i.length > 0)
    return o;
  const c = {};
  for (const l in t)
    c[l] = (...f) => {
      var p, h;
      const d = s();
      if (d.length !== 0)
        for (const b of d)
          (h = (p = b.fns)[l]) == null || h.call(p, ...f);
    };
  const u = r(c);
  return typeof u == "function" && cr.set(e, u), o;
}
async function ht(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Me(e, { emitOnBegin: t, initialWaitTime: r, interval: n }) {
  let s = !0;
  const a = () => s = !1;
  return (async () => {
    let i;
    t && (i = await e({ unpoll: a }));
    const c = await (r == null ? void 0 : r(i)) ?? n;
    await ht(c);
    const u = async () => {
      s && (await e({ unpoll: a }), await ht(n), u());
    };
    u();
  })(), a;
}
const Ss = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map();
function qs(e) {
  const t = (s, a) => ({
    clear: () => a.delete(s),
    get: () => a.get(s),
    set: (o) => a.set(s, o)
  }), r = t(e, Ss), n = t(e, Ms);
  return {
    clear: () => {
      r.clear(), n.clear();
    },
    promise: r,
    response: n
  };
}
async function Ds(e, { cacheKey: t, cacheTime: r = Number.POSITIVE_INFINITY }) {
  const n = qs(t), s = n.response.get();
  if (s && r > 0 && (/* @__PURE__ */ new Date()).getTime() - s.created.getTime() < r)
    return s.data;
  let a = n.promise.get();
  a || (a = e(), n.promise.set(a));
  try {
    const o = await a;
    return n.response.set({ created: /* @__PURE__ */ new Date(), data: o }), o;
  } finally {
    n.promise.clear();
  }
}
const zs = (e) => `blockNumber.${e}`;
async function qe(e, { cacheTime: t = e.cacheTime } = {}) {
  const r = await Ds(() => e.request({
    method: "eth_blockNumber"
  }), { cacheKey: zs(e.uid), cacheTime: t });
  return BigInt(r);
}
async function Ke(e, { filter: t }) {
  const r = "strict" in t && t.strict, n = await t.request({
    method: "eth_getFilterChanges",
    params: [t.id]
  });
  if (typeof n[0] == "string")
    return n;
  const s = n.map((a) => Q(a));
  return !("abi" in t) || !t.abi ? s : jt({
    abi: t.abi,
    logs: s,
    strict: r
  });
}
async function et(e, { filter: t }) {
  return t.request({
    method: "eth_uninstallFilter",
    params: [t.id]
  });
}
function Gs(e, t) {
  const { abi: r, address: n, args: s, batch: a = !0, eventName: o, fromBlock: i, onError: c, onLogs: u, poll: l, pollingInterval: f = e.pollingInterval, strict: d } = t;
  return (typeof l < "u" ? l : typeof i == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket")) ? (() => {
    const y = d ?? !1, m = j([
      "watchContractEvent",
      n,
      s,
      a,
      e.uid,
      o,
      f,
      y,
      i
    ]);
    return H(m, { onLogs: u, onError: c }, (g) => {
      let P;
      i !== void 0 && (P = i - 1n);
      let w, O = !1;
      const T = Me(async () => {
        var k;
        if (!O) {
          try {
            w = await A(e, Er, "createContractEventFilter")({
              abi: r,
              address: n,
              args: s,
              eventName: o,
              strict: y,
              fromBlock: i
            });
          } catch {
          }
          O = !0;
          return;
        }
        try {
          let E;
          if (w)
            E = await A(e, Ke, "getFilterChanges")({ filter: w });
          else {
            const x = await A(e, qe, "getBlockNumber")({});
            P && P !== x ? E = await A(e, Mr, "getContractEvents")({
              abi: r,
              address: n,
              args: s,
              eventName: o,
              fromBlock: P + 1n,
              toBlock: x,
              strict: y
            }) : E = [], P = x;
          }
          if (E.length === 0)
            return;
          if (a)
            g.onLogs(E);
          else
            for (const x of E)
              g.onLogs([x]);
        } catch (E) {
          w && E instanceof K && (O = !1), (k = g.onError) == null || k.call(g, E);
        }
      }, {
        emitOnBegin: !0,
        interval: f
      });
      return async () => {
        w && await A(e, et, "uninstallFilter")({ filter: w }), T();
      };
    });
  })() : (() => {
    const y = d ?? !1, m = j([
      "watchContractEvent",
      n,
      s,
      a,
      e.uid,
      o,
      f,
      y
    ]);
    let g = !0, P = () => g = !1;
    return H(m, { onLogs: u, onError: c }, (w) => ((async () => {
      try {
        const O = (() => {
          if (e.transport.type === "fallback") {
            const E = e.transport.transports.find((x) => x.config.type === "webSocket");
            return E ? E.value : e.transport;
          }
          return e.transport;
        })(), T = o ? Ie({
          abi: r,
          eventName: o,
          args: s
        }) : [], { unsubscribe: k } = await O.subscribe({
          params: ["logs", { address: n, topics: T }],
          onData(E) {
            var R;
            if (!g)
              return;
            const x = E.result;
            try {
              const { eventName: B, args: C } = Nt({
                abi: r,
                data: x.data,
                topics: x.topics,
                strict: d
              }), N = Q(x, {
                args: C,
                eventName: B
              });
              w.onLogs([N]);
            } catch (B) {
              let C, N;
              if (B instanceof he || B instanceof Ye) {
                if (d)
                  return;
                C = B.abiItem.name, N = (R = B.abiItem.inputs) == null ? void 0 : R.some((te) => !("name" in te && te.name));
              }
              const De = Q(x, {
                args: N ? [] : {},
                eventName: C
              });
              w.onLogs([De]);
            }
          },
          onError(E) {
            var x;
            (x = w.onError) == null || x.call(w, E);
          }
        });
        P = k, g || P();
      } catch (O) {
        c == null || c(O);
      }
    })(), () => P()));
  })();
}
async function Ls(e, { serializedTransaction: t }) {
  return e.request({
    method: "eth_sendRawTransaction",
    params: [t]
  }, { retryCount: 0 });
}
const mt = 256;
let Ge = mt, Le;
function _s(e = 11) {
  if (!Le || Ge + e > mt * 2) {
    Le = "", Ge = 0;
    for (let t = 0; t < mt; t++)
      Le += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return Le.substring(Ge, Ge++ + e);
}
function Hs(e) {
  const { batch: t, cacheTime: r = e.pollingInterval ?? 4e3, ccipRead: n, key: s = "base", name: a = "Base Client", pollingInterval: o = 4e3, type: i = "base" } = e, c = e.chain, u = e.account ? U(e.account) : void 0, { config: l, request: f, value: d } = e.transport({
    chain: c,
    pollingInterval: o
  }), p = { ...l, ...d }, h = {
    account: u,
    batch: t,
    cacheTime: r,
    ccipRead: n,
    chain: c,
    key: s,
    name: a,
    pollingInterval: o,
    request: f,
    transport: p,
    type: i,
    uid: _s()
  };
  function b(y) {
    return (m) => {
      const g = m(y);
      for (const w in h)
        delete g[w];
      const P = { ...y, ...g };
      return Object.assign(P, { extend: b(P) });
    };
  }
  return Object.assign(h, { extend: b(h) });
}
function yt(e, { delay: t = 100, retryCount: r = 2, shouldRetry: n = () => !0 } = {}) {
  return new Promise((s, a) => {
    const o = async ({ count: i = 0 } = {}) => {
      const c = async ({ error: u }) => {
        const l = typeof t == "function" ? t({ count: i, error: u }) : t;
        l && await ht(l), o({ count: i + 1 });
      };
      try {
        const u = await e();
        s(u);
      } catch (u) {
        if (i < r && await n({ count: i, error: u }))
          return c({ error: u });
        a(u);
      }
    };
    o();
  });
}
function Us(e, t = {}) {
  return async (r, n = {}) => {
    const { retryDelay: s = 150, retryCount: a = 3 } = {
      ...t,
      ...n
    };
    return yt(async () => {
      try {
        return await e(r);
      } catch (o) {
        const i = o;
        switch (i.code) {
          // -32700
          case ye.code:
            throw new ye(i);
          // -32600
          case ge.code:
            throw new ge(i);
          // -32601
          case we.code:
            throw new we(i);
          // -32602
          case ve.code:
            throw new ve(i);
          // -32603
          case X.code:
            throw new X(i);
          // -32000
          case K.code:
            throw new K(i);
          // -32001
          case Pe.code:
            throw new Pe(i);
          // -32002
          case xe.code:
            throw new xe(i);
          // -32003
          case Ee.code:
            throw new Ee(i);
          // -32004
          case Ae.code:
            throw new Ae(i);
          // -32005
          case oe.code:
            throw new oe(i);
          // -32006
          case Te.code:
            throw new Te(i);
          // 4001
          case ne.code:
            throw new ne(i);
          // 4100
          case ke.code:
            throw new ke(i);
          // 4200
          case Oe.code:
            throw new Oe(i);
          // 4900
          case Fe.code:
            throw new Fe(i);
          // 4901
          case Re.code:
            throw new Re(i);
          // 4902
          case Be.code:
            throw new Be(i);
          // CAIP-25: User Rejected Error
          // https://docs.walletconnect.com/2.0/specs/clients/sign/error-codes#rejected-caip-25
          case 5e3:
            throw new ne(i);
          default:
            throw o instanceof v ? o : new hs(i);
        }
      }
    }, {
      delay: ({ count: o, error: i }) => {
        var c;
        if (i && i instanceof Z) {
          const u = (c = i == null ? void 0 : i.headers) == null ? void 0 : c.get("Retry-After");
          if (u != null && u.match(/\d/))
            return Number.parseInt(u) * 1e3;
        }
        return ~~(1 << o) * s;
      },
      retryCount: a,
      shouldRetry: ({ error: o }) => Ws(o)
    });
  };
}
function Ws(e) {
  return "code" in e && typeof e.code == "number" ? e.code === -1 || e.code === oe.code || e.code === X.code : e instanceof Z && e.status ? e.status === 403 || e.status === 408 || e.status === 413 || e.status === 429 || e.status === 500 || e.status === 502 || e.status === 503 || e.status === 504 : !0;
}
function Vs({ key: e, name: t, request: r, retryCount: n = 3, retryDelay: s = 150, timeout: a, type: o }, i) {
  return {
    config: { key: e, name: t, request: r, retryCount: n, retryDelay: s, timeout: a, type: o },
    request: Us(r, { retryCount: n, retryDelay: s }),
    value: i
  };
}
class Js extends v {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro"
    });
  }
}
function Zs(e, { errorInstance: t = new Error("timed out"), timeout: r, signal: n }) {
  return new Promise((s, a) => {
    (async () => {
      let o;
      try {
        const i = new AbortController();
        r > 0 && (o = setTimeout(() => {
          n ? i.abort() : a(t);
        }, r)), s(await e({ signal: (i == null ? void 0 : i.signal) || null }));
      } catch (i) {
        i.name === "AbortError" && a(t), a(i);
      } finally {
        clearTimeout(o);
      }
    })();
  });
}
function Ys() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    }
  };
}
const ur = /* @__PURE__ */ Ys();
function Qs(e, t = {}) {
  return {
    async request(r) {
      var f;
      const { body: n, onRequest: s = t.onRequest, onResponse: a = t.onResponse, timeout: o = t.timeout ?? 1e4 } = r, i = {
        ...t.fetchOptions ?? {},
        ...r.fetchOptions ?? {}
      }, { headers: c, method: u, signal: l } = i;
      try {
        const d = await Zs(async ({ signal: h }) => {
          const b = {
            ...i,
            body: Array.isArray(n) ? j(n.map((g) => ({
              jsonrpc: "2.0",
              id: g.id ?? ur.take(),
              ...g
            }))) : j({
              jsonrpc: "2.0",
              id: n.id ?? ur.take(),
              ...n
            }),
            headers: {
              ...c,
              "Content-Type": "application/json"
            },
            method: u || "POST",
            signal: l || (o > 0 ? h : null)
          }, y = new Request(e, b);
          return s && await s(y), await fetch(e, b);
        }, {
          errorInstance: new nr({ body: n, url: e }),
          timeout: o,
          signal: !0
        });
        a && await a(d);
        let p;
        if ((f = d.headers.get("Content-Type")) != null && f.startsWith("application/json") ? p = await d.json() : (p = await d.text(), p = JSON.parse(p || "{}")), !d.ok)
          throw new Z({
            body: n,
            details: j(p.error) || d.statusText,
            headers: d.headers,
            status: d.status,
            url: e
          });
        return p;
      } catch (d) {
        throw d instanceof Z || d instanceof nr ? d : new Z({
          body: n,
          details: d.message,
          url: e
        });
      }
    }
  };
}
function uo(e, t = {}) {
  const { batch: r, fetchOptions: n, key: s = "http", name: a = "HTTP JSON-RPC", onFetchRequest: o, onFetchResponse: i, retryDelay: c } = t;
  return ({ chain: u, retryCount: l, timeout: f }) => {
    const { batchSize: d = 1e3, wait: p = 0 } = typeof r == "object" ? r : {}, h = t.retryCount ?? l, b = f ?? t.timeout ?? 1e4, y = e || (u == null ? void 0 : u.rpcUrls.default.http[0]);
    if (!y)
      throw new Js();
    const m = Qs(y, {
      fetchOptions: n,
      onRequest: o,
      onResponse: i,
      timeout: b
    });
    return Vs({
      key: s,
      name: a,
      async request({ method: g, params: P }) {
        const w = { method: g, params: P }, { schedule: O } = zr({
          id: y,
          wait: p,
          shouldSplitBatch(x) {
            return x.length > d;
          },
          fn: (x) => m.request({
            body: x
          }),
          sort: (x, R) => x.id - R.id
        }), T = async (x) => r ? O(x) : [
          await m.request({
            body: x
          })
        ], [{ error: k, result: E }] = await T(w);
        if (k)
          throw new Fr({
            body: w,
            error: k,
            url: y
          });
        return E;
      },
      retryCount: h,
      retryDelay: c,
      timeout: b,
      type: "http"
    }, {
      fetchOptions: n,
      url: y
    });
  };
}
function $t(e, t) {
  var n, s, a, o, i, c;
  if (!(e instanceof v))
    return !1;
  const r = e.walk((u) => u instanceof ft);
  return r instanceof ft ? !!(((n = r.data) == null ? void 0 : n.errorName) === "ResolverNotFound" || ((s = r.data) == null ? void 0 : s.errorName) === "ResolverWildcardNotSupported" || ((a = r.data) == null ? void 0 : a.errorName) === "ResolverNotContract" || ((o = r.data) == null ? void 0 : o.errorName) === "ResolverError" || ((i = r.data) == null ? void 0 : i.errorName) === "HttpError" || (c = r.reason) != null && c.includes("Wildcard on non-extended resolvers is not supported") || t === "reverse" && r.reason === Ar[50]) : !1;
}
function Gr(e) {
  if (e.length !== 66 || e.indexOf("[") !== 0 || e.indexOf("]") !== 65)
    return null;
  const t = `0x${e.slice(1, 65)}`;
  return ae(t) ? t : null;
}
function _e(e) {
  let t = new Uint8Array(32).fill(0);
  if (!e)
    return M(t);
  const r = e.split(".");
  for (let n = r.length - 1; n >= 0; n -= 1) {
    const s = Gr(r[n]), a = s ? se(s) : S(V(r[n]), "bytes");
    t = S(q([t, a]), "bytes");
  }
  return M(t);
}
function Xs(e) {
  return `[${e.slice(2)}]`;
}
function Ks(e) {
  const t = new Uint8Array(32).fill(0);
  return e ? Gr(e) || S(V(e)) : M(t);
}
function tt(e) {
  const t = e.replace(/^\.|\.$/gm, "");
  if (t.length === 0)
    return new Uint8Array(1);
  const r = new Uint8Array(V(t).byteLength + 2);
  let n = 0;
  const s = t.split(".");
  for (let a = 0; a < s.length; a++) {
    let o = V(s[a]);
    o.byteLength > 255 && (o = V(Xs(Ks(s[a])))), r[n] = o.length, r.set(o, n + 1), n += o.length + 1;
  }
  return r.byteLength !== n + 1 ? r.slice(0, n + 1) : r;
}
async function ea(e, { blockNumber: t, blockTag: r, coinType: n, name: s, gatewayUrls: a, strict: o, universalResolverAddress: i }) {
  let c = i;
  if (!c) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = le({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const u = ee({
      abi: ir,
      functionName: "addr",
      ...n != null ? { args: [_e(s), BigInt(n)] } : { args: [_e(s)] }
    }), l = {
      address: c,
      abi: Dr,
      functionName: "resolve",
      args: [ie(tt(s)), u],
      blockNumber: t,
      blockTag: r
    }, f = A(e, _, "readContract"), d = a ? await f({
      ...l,
      args: [...l.args, a]
    }) : await f(l);
    if (d[0] === "0x")
      return null;
    const p = de({
      abi: ir,
      args: n != null ? [_e(s), BigInt(n)] : void 0,
      functionName: "addr",
      data: d[0]
    });
    return p === "0x" || Ve(p) === "0x00" ? null : p;
  } catch (u) {
    if (o)
      throw u;
    if ($t(u, "resolve"))
      return null;
    throw u;
  }
}
class ta extends v {
  constructor({ data: t }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(t)}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarInvalidMetadataError"
    });
  }
}
class be extends v {
  constructor({ reason: t }) {
    super(`ENS NFT avatar URI is invalid. ${t}`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarInvalidNftUriError"
    });
  }
}
class It extends v {
  constructor({ uri: t }) {
    super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarUriResolutionError"
    });
  }
}
class ra extends v {
  constructor({ namespace: t }) {
    super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarUnsupportedNamespaceError"
    });
  }
}
const na = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/, sa = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/, aa = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/, oa = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function ia(e) {
  try {
    const t = await fetch(e, { method: "HEAD" });
    if (t.status === 200) {
      const r = t.headers.get("content-type");
      return r == null ? void 0 : r.startsWith("image/");
    }
    return !1;
  } catch (t) {
    return typeof t == "object" && typeof t.response < "u" || !globalThis.hasOwnProperty("Image") ? !1 : new Promise((r) => {
      const n = new Image();
      n.onload = () => {
        r(!0);
      }, n.onerror = () => {
        r(!1);
      }, n.src = e;
    });
  }
}
function dr(e, t) {
  return e ? e.endsWith("/") ? e.slice(0, -1) : e : t;
}
function Lr({ uri: e, gatewayUrls: t }) {
  const r = aa.test(e);
  if (r)
    return { uri: e, isOnChain: !0, isEncoded: r };
  const n = dr(t == null ? void 0 : t.ipfs, "https://ipfs.io"), s = dr(t == null ? void 0 : t.arweave, "https://arweave.net"), a = e.match(na), { protocol: o, subpath: i, target: c, subtarget: u = "" } = (a == null ? void 0 : a.groups) || {}, l = o === "ipns:/" || i === "ipns/", f = o === "ipfs:/" || i === "ipfs/" || sa.test(e);
  if (e.startsWith("http") && !l && !f) {
    let p = e;
    return t != null && t.arweave && (p = e.replace(/https:\/\/arweave.net/g, t == null ? void 0 : t.arweave)), { uri: p, isOnChain: !1, isEncoded: !1 };
  }
  if ((l || f) && c)
    return {
      uri: `${n}/${l ? "ipns" : "ipfs"}/${c}${u}`,
      isOnChain: !1,
      isEncoded: !1
    };
  if (o === "ar:/" && c)
    return {
      uri: `${s}/${c}${u || ""}`,
      isOnChain: !1,
      isEncoded: !1
    };
  let d = e.replace(oa, "");
  if (d.startsWith("<svg") && (d = `data:image/svg+xml;base64,${btoa(d)}`), d.startsWith("data:") || d.startsWith("{"))
    return {
      uri: d,
      isOnChain: !0,
      isEncoded: !1
    };
  throw new It({ uri: e });
}
function _r(e) {
  if (typeof e != "object" || !("image" in e) && !("image_url" in e) && !("image_data" in e))
    throw new ta({ data: e });
  return e.image || e.image_url || e.image_data;
}
async function ca({ gatewayUrls: e, uri: t }) {
  try {
    const r = await fetch(t).then((s) => s.json());
    return await St({
      gatewayUrls: e,
      uri: _r(r)
    });
  } catch {
    throw new It({ uri: t });
  }
}
async function St({ gatewayUrls: e, uri: t }) {
  const { uri: r, isOnChain: n } = Lr({ uri: t, gatewayUrls: e });
  if (n || await ia(r))
    return r;
  throw new It({ uri: t });
}
function ua(e) {
  let t = e;
  t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
  const [r, n, s] = t.split("/"), [a, o] = r.split(":"), [i, c] = n.split(":");
  if (!a || a.toLowerCase() !== "eip155")
    throw new be({ reason: "Only EIP-155 supported" });
  if (!o)
    throw new be({ reason: "Chain ID not found" });
  if (!c)
    throw new be({
      reason: "Contract address not found"
    });
  if (!s)
    throw new be({ reason: "Token ID not found" });
  if (!i)
    throw new be({ reason: "ERC namespace not found" });
  return {
    chainID: Number.parseInt(o),
    namespace: i.toLowerCase(),
    contractAddress: c,
    tokenID: s
  };
}
async function da(e, { nft: t }) {
  if (t.namespace === "erc721")
    return _(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(t.tokenID)]
    });
  if (t.namespace === "erc1155")
    return _(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(t.tokenID)]
    });
  throw new ra({ namespace: t.namespace });
}
async function la(e, { gatewayUrls: t, record: r }) {
  return /eip155:/i.test(r) ? fa(e, { gatewayUrls: t, record: r }) : St({ uri: r, gatewayUrls: t });
}
async function fa(e, { gatewayUrls: t, record: r }) {
  const n = ua(r), s = await da(e, { nft: n }), { uri: a, isOnChain: o, isEncoded: i } = Lr({ uri: s, gatewayUrls: t });
  if (o && (a.includes("data:application/json;base64,") || a.startsWith("{"))) {
    const u = i ? (
      // if it is encoded, decode it
      atob(a.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      a
    ), l = JSON.parse(u);
    return St({ uri: _r(l), gatewayUrls: t });
  }
  let c = n.tokenID;
  return n.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), ca({
    gatewayUrls: t,
    uri: a.replace(/(?:0x)?{id}/, c)
  });
}
async function Hr(e, { blockNumber: t, blockTag: r, name: n, key: s, gatewayUrls: a, strict: o, universalResolverAddress: i }) {
  let c = i;
  if (!c) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = le({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const u = {
      address: c,
      abi: Dr,
      functionName: "resolve",
      args: [
        ie(tt(n)),
        ee({
          abi: or,
          functionName: "text",
          args: [_e(n), s]
        })
      ],
      blockNumber: t,
      blockTag: r
    }, l = A(e, _, "readContract"), f = a ? await l({
      ...u,
      args: [...u.args, a]
    }) : await l(u);
    if (f[0] === "0x")
      return null;
    const d = de({
      abi: or,
      functionName: "text",
      data: f[0]
    });
    return d === "" ? null : d;
  } catch (u) {
    if (o)
      throw u;
    if ($t(u, "resolve"))
      return null;
    throw u;
  }
}
async function ba(e, { blockNumber: t, blockTag: r, assetGatewayUrls: n, name: s, gatewayUrls: a, strict: o, universalResolverAddress: i }) {
  const c = await A(e, Hr, "getEnsText")({
    blockNumber: t,
    blockTag: r,
    key: "avatar",
    name: s,
    universalResolverAddress: i,
    gatewayUrls: a,
    strict: o
  });
  if (!c)
    return null;
  try {
    return await la(e, {
      record: c,
      gatewayUrls: n
    });
  } catch {
    return null;
  }
}
async function pa(e, { address: t, blockNumber: r, blockTag: n, gatewayUrls: s, strict: a, universalResolverAddress: o }) {
  let i = o;
  if (!i) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    i = le({
      blockNumber: r,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  const c = `${t.toLowerCase().substring(2)}.addr.reverse`;
  try {
    const u = {
      address: i,
      abi: Os,
      functionName: "reverse",
      args: [ie(tt(c))],
      blockNumber: r,
      blockTag: n
    }, l = A(e, _, "readContract"), [f, d] = s ? await l({
      ...u,
      args: [...u.args, s]
    }) : await l(u);
    return t.toLowerCase() !== d.toLowerCase() ? null : f;
  } catch (u) {
    if (a)
      throw u;
    if ($t(u, "reverse"))
      return null;
    throw u;
  }
}
async function ha(e, { blockNumber: t, blockTag: r, name: n, universalResolverAddress: s }) {
  let a = s;
  if (!a) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    a = le({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  const [o] = await A(e, _, "readContract")({
    address: a,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [{ type: "address" }, { type: "bytes32" }],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [ie(tt(n))],
    blockNumber: t,
    blockTag: r
  });
  return o;
}
async function ma(e) {
  const t = Qe(e, {
    method: "eth_newBlockFilter"
  }), r = await e.request({
    method: "eth_newBlockFilter"
  });
  return { id: r, request: t(r), type: "block" };
}
async function Ur(e, { address: t, args: r, event: n, events: s, fromBlock: a, strict: o, toBlock: i } = {}) {
  const c = s ?? (n ? [n] : void 0), u = Qe(e, {
    method: "eth_newFilter"
  });
  let l = [];
  c && (l = [
    c.flatMap((d) => Ie({
      abi: [d],
      eventName: d.name,
      args: r
    }))
  ], n && (l = l[0]));
  const f = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: t,
        fromBlock: typeof a == "bigint" ? F(a) : a,
        toBlock: typeof i == "bigint" ? F(i) : i,
        ...l.length ? { topics: l } : {}
      }
    ]
  });
  return {
    abi: c,
    args: r,
    eventName: n ? n.name : void 0,
    fromBlock: a,
    id: f,
    request: u(f),
    strict: !!o,
    toBlock: i,
    type: "event"
  };
}
async function Wr(e) {
  const t = Qe(e, {
    method: "eth_newPendingTransactionFilter"
  }), r = await e.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id: r, request: t(r), type: "transaction" };
}
async function ya(e, { address: t, blockNumber: r, blockTag: n = "latest" }) {
  const s = r ? F(r) : void 0, a = await e.request({
    method: "eth_getBalance",
    params: [t, s || n]
  });
  return BigInt(a);
}
async function ga(e) {
  const t = await e.request({
    method: "eth_blobBaseFee"
  });
  return BigInt(t);
}
async function wa(e, { blockHash: t, blockNumber: r, blockTag: n = "latest" } = {}) {
  const s = r !== void 0 ? F(r) : void 0;
  let a;
  return t ? a = await e.request({
    method: "eth_getBlockTransactionCountByHash",
    params: [t]
  }) : a = await e.request({
    method: "eth_getBlockTransactionCountByNumber",
    params: [s || n]
  }), je(a);
}
async function va(e, { address: t, blockNumber: r, blockTag: n = "latest" }) {
  const s = r !== void 0 ? F(r) : void 0, a = await e.request({
    method: "eth_getCode",
    params: [t, s || n]
  });
  if (a !== "0x")
    return a;
}
function Pa(e) {
  var t;
  return {
    baseFeePerGas: e.baseFeePerGas.map((r) => BigInt(r)),
    gasUsedRatio: e.gasUsedRatio,
    oldestBlock: BigInt(e.oldestBlock),
    reward: (t = e.reward) == null ? void 0 : t.map((r) => r.map((n) => BigInt(n)))
  };
}
async function xa(e, { blockCount: t, blockNumber: r, blockTag: n = "latest", rewardPercentiles: s }) {
  const a = r ? F(r) : void 0, o = await e.request({
    method: "eth_feeHistory",
    params: [
      F(t),
      a || n,
      s
    ]
  });
  return Pa(o);
}
async function Ea(e, { filter: t }) {
  const r = t.strict ?? !1, s = (await t.request({
    method: "eth_getFilterLogs",
    params: [t.id]
  })).map((a) => Q(a));
  return t.abi ? jt({
    abi: t.abi,
    logs: s,
    strict: r
  }) : s;
}
class Aa extends v {
  constructor({ callbackSelector: t, cause: r, data: n, extraData: s, sender: a, urls: o }) {
    var i;
    super(r.shortMessage || "An error occurred while fetching for an offchain result.", {
      cause: r,
      metaMessages: [
        ...r.metaMessages || [],
        (i = r.metaMessages) != null && i.length ? "" : [],
        "Offchain Gateway Call:",
        o && [
          "  Gateway URL(s):",
          ...o.map((c) => `    ${Ce(c)}`)
        ],
        `  Sender: ${a}`,
        `  Data: ${n}`,
        `  Callback selector: ${t}`,
        `  Extra data: ${s}`
      ].flat()
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupError"
    });
  }
}
class Ta extends v {
  constructor({ result: t, url: r }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", {
      metaMessages: [
        `Gateway URL: ${Ce(r)}`,
        `Response: ${j(t)}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupResponseMalformedError"
    });
  }
}
class ka extends v {
  constructor({ sender: t, to: r }) {
    super("Reverted sender address does not match target contract address (`to`).", {
      metaMessages: [
        `Contract address: ${r}`,
        `OffchainLookup sender address: ${t}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupSenderMismatchError"
    });
  }
}
function Vr(e, t) {
  if (!D(e, { strict: !1 }))
    throw new Y({ address: e });
  if (!D(t, { strict: !1 }))
    throw new Y({ address: t });
  return e.toLowerCase() === t.toLowerCase();
}
const Oa = "0x556f1830", Jr = {
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
async function Fa(e, { blockNumber: t, blockTag: r, data: n, to: s }) {
  const { args: a } = Tr({
    data: n,
    abi: [Jr]
  }), [o, i, c, u, l] = a, { ccipRead: f } = e, d = f && typeof (f == null ? void 0 : f.request) == "function" ? f.request : Zr;
  try {
    if (!Vr(s, o))
      throw new ka({ sender: o, to: s });
    const p = await d({ data: c, sender: o, urls: i }), { data: h } = await Se(e, {
      blockNumber: t,
      blockTag: r,
      data: q([
        u,
        ce([{ type: "bytes" }, { type: "bytes" }], [p, l])
      ]),
      to: s
    });
    return h;
  } catch (p) {
    throw new Aa({
      callbackSelector: u,
      cause: p,
      data: n,
      extraData: l,
      sender: o,
      urls: i
    });
  }
}
async function Zr({ data: e, sender: t, urls: r }) {
  var s;
  let n = new Error("An unknown error occurred.");
  for (let a = 0; a < r.length; a++) {
    const o = r[a], i = o.includes("{data}") ? "GET" : "POST", c = i === "POST" ? { data: e, sender: t } : void 0;
    try {
      const u = await fetch(o.replace("{sender}", t).replace("{data}", e), {
        body: JSON.stringify(c),
        method: i
      });
      let l;
      if ((s = u.headers.get("Content-Type")) != null && s.startsWith("application/json") ? l = (await u.json()).data : l = await u.text(), !u.ok) {
        n = new Z({
          body: c,
          details: l != null && l.error ? j(l.error) : u.statusText,
          headers: u.headers,
          status: u.status,
          url: o
        });
        continue;
      }
      if (!ae(l)) {
        n = new Ta({
          result: l,
          url: o
        });
        continue;
      }
      return l;
    } catch (u) {
      n = new Z({
        body: c,
        details: u.message,
        url: o
      });
    }
  }
  throw n;
}
const Ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ccipRequest: Zr,
  offchainLookup: Fa,
  offchainLookupAbiItem: Jr,
  offchainLookupSignature: Oa
}, Symbol.toStringTag, { value: "Module" }));
function lo({ chains: e, id: t }) {
  return e.find((r) => r.id === t);
}
const Ba = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, Na = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function ja(e) {
  const { domain: t = {}, message: r, primaryType: n } = e, s = {
    EIP712Domain: Ma({ domain: t }),
    ...e.types
  };
  Sa({
    domain: t,
    message: r,
    primaryType: n,
    types: s
  });
  const a = ["0x1901"];
  return t && a.push(Ca({
    domain: t,
    types: s
  })), n !== "EIP712Domain" && a.push(Yr({
    data: r,
    primaryType: n,
    types: s
  })), S(q(a));
}
function Ca({ domain: e, types: t }) {
  return Yr({
    data: e,
    primaryType: "EIP712Domain",
    types: t
  });
}
function Yr({ data: e, primaryType: t, types: r }) {
  const n = Qr({
    data: e,
    primaryType: t,
    types: r
  });
  return S(n);
}
function Qr({ data: e, primaryType: t, types: r }) {
  const n = [{ type: "bytes32" }], s = [$a({ primaryType: t, types: r })];
  for (const a of r[t]) {
    const [o, i] = Kr({
      types: r,
      name: a.name,
      type: a.type,
      value: e[a.name]
    });
    n.push(o), s.push(i);
  }
  return ce(n, s);
}
function $a({ primaryType: e, types: t }) {
  const r = ie(Ia({ primaryType: e, types: t }));
  return S(r);
}
function Ia({ primaryType: e, types: t }) {
  let r = "";
  const n = Xr({ primaryType: e, types: t });
  n.delete(e);
  const s = [e, ...Array.from(n).sort()];
  for (const a of s)
    r += `${a}(${t[a].map(({ name: o, type: i }) => `${i} ${o}`).join(",")})`;
  return r;
}
function Xr({ primaryType: e, types: t }, r = /* @__PURE__ */ new Set()) {
  const n = e.match(/^\w*/u), s = n == null ? void 0 : n[0];
  if (r.has(s) || t[s] === void 0)
    return r;
  r.add(s);
  for (const a of t[s])
    Xr({ primaryType: a.type, types: t }, r);
  return r;
}
function Kr({ types: e, name: t, type: r, value: n }) {
  if (e[r] !== void 0)
    return [
      { type: "bytes32" },
      S(Qr({ data: n, primaryType: r, types: e }))
    ];
  if (r === "bytes")
    return n = `0x${(n.length % 2 ? "0" : "") + n.slice(2)}`, [{ type: "bytes32" }, S(n)];
  if (r === "string")
    return [{ type: "bytes32" }, S(ie(n))];
  if (r.lastIndexOf("]") === r.length - 1) {
    const s = r.slice(0, r.lastIndexOf("[")), a = n.map((o) => Kr({
      name: t,
      type: s,
      types: e,
      value: o
    }));
    return [
      { type: "bytes32" },
      S(ce(a.map(([o]) => o), a.map(([, o]) => o)))
    ];
  }
  return [{ type: r }, n];
}
function Sa(e) {
  const { domain: t, message: r, primaryType: n, types: s } = e, a = (o, i) => {
    for (const c of o) {
      const { name: u, type: l } = c, f = i[u], d = l.match(Na);
      if (d && (typeof f == "number" || typeof f == "bigint")) {
        const [b, y, m] = d;
        F(f, {
          signed: y === "int",
          size: Number.parseInt(m) / 8
        });
      }
      if (l === "address" && typeof f == "string" && !D(f))
        throw new Y({ address: f });
      const p = l.match(Ba);
      if (p) {
        const [b, y] = p;
        if (y && I(f) !== Number.parseInt(y))
          throw new jn({
            expectedSize: Number.parseInt(y),
            givenSize: I(f)
          });
      }
      const h = s[l];
      h && a(h, f);
    }
  };
  if (s.EIP712Domain && t && a(s.EIP712Domain, t), n !== "EIP712Domain") {
    const o = s[n];
    a(o, r);
  }
}
function Ma({ domain: e }) {
  return [
    typeof (e == null ? void 0 : e.name) == "string" && { name: "name", type: "string" },
    (e == null ? void 0 : e.version) && { name: "version", type: "string" },
    typeof (e == null ? void 0 : e.chainId) == "number" && {
      name: "chainId",
      type: "uint256"
    },
    (e == null ? void 0 : e.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (e == null ? void 0 : e.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
const at = "/docs/contract/encodeDeployData";
function qa(e) {
  const { abi: t, args: r, bytecode: n } = e;
  if (!r || r.length === 0)
    return n;
  const s = t.find((o) => "type" in o && o.type === "constructor");
  if (!s)
    throw new Tn({ docsPath: at });
  if (!("inputs" in s))
    throw new Yt({ docsPath: at });
  if (!s.inputs || s.inputs.length === 0)
    throw new Yt({ docsPath: at });
  const a = ce(s.inputs, r);
  return fr([n, a]);
}
const Da = `Ethereum Signed Message:
`;
function en(e, t) {
  const r = typeof e == "string" ? V(e) : e.raw instanceof Uint8Array ? e.raw : se(e.raw), n = V(`${Da}${r.length}`);
  return S(q([n, r]), t);
}
function za(e) {
  return e.map((t) => ({
    ...t,
    value: BigInt(t.value)
  }));
}
function Ga(e) {
  return {
    ...e,
    balance: e.balance ? BigInt(e.balance) : void 0,
    nonce: e.nonce ? je(e.nonce) : void 0,
    storageProof: e.storageProof ? za(e.storageProof) : void 0
  };
}
async function La(e, { address: t, blockNumber: r, blockTag: n, storageKeys: s }) {
  const a = n ?? "latest", o = r !== void 0 ? F(r) : void 0, i = await e.request({
    method: "eth_getProof",
    params: [t, s, o || a]
  });
  return Ga(i);
}
async function _a(e, { address: t, blockNumber: r, blockTag: n = "latest", slot: s }) {
  const a = r !== void 0 ? F(r) : void 0;
  return await e.request({
    method: "eth_getStorageAt",
    params: [t, s, a || n]
  });
}
async function Mt(e, { blockHash: t, blockNumber: r, blockTag: n, hash: s, index: a }) {
  var l, f, d;
  const o = n || "latest", i = r !== void 0 ? F(r) : void 0;
  let c = null;
  if (s ? c = await e.request({
    method: "eth_getTransactionByHash",
    params: [s]
  }) : t ? c = await e.request({
    method: "eth_getTransactionByBlockHashAndIndex",
    params: [t, F(a)]
  }) : (i || o) && (c = await e.request({
    method: "eth_getTransactionByBlockNumberAndIndex",
    params: [i || o, F(a)]
  })), !c)
    throw new mr({
      blockHash: t,
      blockNumber: r,
      blockTag: o,
      hash: s,
      index: a
    });
  return (((d = (f = (l = e.chain) == null ? void 0 : l.formatters) == null ? void 0 : f.transaction) == null ? void 0 : d.format) || vn)(c);
}
async function Ha(e, { hash: t, transactionReceipt: r }) {
  const [n, s] = await Promise.all([
    A(e, qe, "getBlockNumber")({}),
    t ? A(e, Mt, "getBlockNumber")({ hash: t }) : void 0
  ]), a = (r == null ? void 0 : r.blockNumber) || (s == null ? void 0 : s.blockNumber);
  return a ? n - a + 1n : 0n;
}
async function gt(e, { hash: t }) {
  var s, a, o;
  const r = await e.request({
    method: "eth_getTransactionReceipt",
    params: [t]
  });
  if (!r)
    throw new yr({ hash: t });
  return (((o = (a = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : a.transactionReceipt) == null ? void 0 : o.format) || Pn)(r);
}
async function Ua(e, t) {
  var y;
  const { allowFailure: r = !0, batchSize: n, blockNumber: s, blockTag: a, multicallAddress: o, stateOverride: i } = t, c = t.contracts, u = n ?? (typeof ((y = e.batch) == null ? void 0 : y.multicall) == "object" && e.batch.multicall.batchSize || 1024);
  let l = o;
  if (!l) {
    if (!e.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    l = le({
      blockNumber: s,
      chain: e.chain,
      contract: "multicall3"
    });
  }
  const f = [[]];
  let d = 0, p = 0;
  for (let m = 0; m < c.length; m++) {
    const { abi: g, address: P, args: w, functionName: O } = c[m];
    try {
      const T = ee({ abi: g, args: w, functionName: O });
      p += (T.length - 2) / 2, // Check if batching is enabled.
      u > 0 && // Check if the current size of the batch exceeds the size limit.
      p > u && // Check if the current chunk is not already empty.
      f[d].length > 0 && (d++, p = (T.length - 2) / 2, f[d] = []), f[d] = [
        ...f[d],
        {
          allowFailure: !0,
          callData: T,
          target: P
        }
      ];
    } catch (T) {
      const k = Ne(T, {
        abi: g,
        address: P,
        args: w,
        docsPath: "/docs/contract/multicall",
        functionName: O
      });
      if (!r)
        throw k;
      f[d] = [
        ...f[d],
        {
          allowFailure: !0,
          callData: "0x",
          target: P
        }
      ];
    }
  }
  const h = await Promise.allSettled(f.map((m) => A(e, _, "readContract")({
    abi: pt,
    address: l,
    args: [m],
    blockNumber: s,
    blockTag: a,
    functionName: "aggregate3",
    stateOverride: i
  }))), b = [];
  for (let m = 0; m < h.length; m++) {
    const g = h[m];
    if (g.status === "rejected") {
      if (!r)
        throw g.reason;
      for (let w = 0; w < f[m].length; w++)
        b.push({
          status: "failure",
          error: g.reason,
          result: void 0
        });
      continue;
    }
    const P = g.value;
    for (let w = 0; w < P.length; w++) {
      const { returnData: O, success: T } = P[w], { callData: k } = f[m][w], { abi: E, address: x, functionName: R, args: B } = c[b.length];
      try {
        if (k === "0x")
          throw new Ze();
        if (!T)
          throw new kt({ data: O });
        const C = de({
          abi: E,
          args: B,
          data: O,
          functionName: R
        });
        b.push(r ? { result: C, status: "success" } : C);
      } catch (C) {
        const N = Ne(C, {
          abi: E,
          address: x,
          args: B,
          docsPath: "/docs/contract/multicall",
          functionName: R
        });
        if (!r)
          throw N;
        b.push({ error: N, result: void 0, status: "failure" });
      }
    }
  }
  if (b.length !== c.length)
    throw new v("multicall results mismatch");
  return b;
}
const Wa = "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
function Va(e, t) {
  const r = ae(e) ? se(e) : e, n = ae(t) ? se(t) : t;
  return cn(r, n);
}
function Ja({ r: e, s: t, v: r, yParity: n }) {
  const s = (() => {
    if (n === 0 || n === 1)
      return n;
    if (r && (r === 27n || r === 28n || r >= 35n))
      return r % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })();
  return `0x${new un.Signature(pe(e), pe(t)).toCompactHex()}${s === 0 ? "1b" : "1c"}`;
}
async function qt(e, { address: t, hash: r, signature: n, ...s }) {
  const a = ae(n) ? n : typeof n == "object" && "r" in n && "s" in n ? Ja(n) : M(n);
  try {
    const { data: o } = await A(e, Se, "call")({
      data: qa({
        abi: Fs,
        args: [t, r, a],
        bytecode: Wa
      }),
      ...s
    });
    return Va(o ?? "0x0", "0x1");
  } catch (o) {
    if (o instanceof Or)
      return !1;
    throw o;
  }
}
async function Za(e, { address: t, message: r, signature: n, ...s }) {
  const a = en(r);
  return qt(e, {
    address: t,
    hash: a,
    signature: n,
    ...s
  });
}
async function Ya(e, t) {
  const { address: r, signature: n, message: s, primaryType: a, types: o, domain: i, ...c } = t, u = ja({ message: s, primaryType: a, types: o, domain: i });
  return qt(e, {
    address: r,
    hash: u,
    signature: n,
    ...c
  });
}
function tn(e, { emitOnBegin: t = !1, emitMissed: r = !1, onBlockNumber: n, onError: s, poll: a, pollingInterval: o = e.pollingInterval }) {
  const i = typeof a < "u" ? a : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket");
  let c;
  return i ? (() => {
    const f = j([
      "watchBlockNumber",
      e.uid,
      t,
      r,
      o
    ]);
    return H(f, { onBlockNumber: n, onError: s }, (d) => Me(async () => {
      var p;
      try {
        const h = await A(e, qe, "getBlockNumber")({ cacheTime: 0 });
        if (c) {
          if (h === c)
            return;
          if (h - c > 1 && r)
            for (let b = c + 1n; b < h; b++)
              d.onBlockNumber(b, c), c = b;
        }
        (!c || h > c) && (d.onBlockNumber(h, c), c = h);
      } catch (h) {
        (p = d.onError) == null || p.call(d, h);
      }
    }, {
      emitOnBegin: t,
      interval: o
    }));
  })() : (() => {
    const f = j([
      "watchBlockNumber",
      e.uid,
      t,
      r
    ]);
    return H(f, { onBlockNumber: n, onError: s }, (d) => {
      let p = !0, h = () => p = !1;
      return (async () => {
        try {
          const b = (() => {
            if (e.transport.type === "fallback") {
              const m = e.transport.transports.find((g) => g.config.type === "webSocket");
              return m ? m.value : e.transport;
            }
            return e.transport;
          })(), { unsubscribe: y } = await b.subscribe({
            params: ["newHeads"],
            onData(m) {
              var P;
              if (!p)
                return;
              const g = pe((P = m.result) == null ? void 0 : P.number);
              d.onBlockNumber(g, c), c = g;
            },
            onError(m) {
              var g;
              (g = d.onError) == null || g.call(d, m);
            }
          });
          h = y, p || h();
        } catch (b) {
          s == null || s(b);
        }
      })(), () => h();
    });
  })();
}
async function Qa(e, {
  confirmations: t = 1,
  hash: r,
  onReplaced: n,
  pollingInterval: s = e.pollingInterval,
  retryCount: a = 6,
  retryDelay: o = ({ count: c }) => ~~(1 << c) * 200,
  // exponential backoff
  timeout: i
}) {
  const c = j(["waitForTransactionReceipt", e.uid, r]);
  let u = 0, l, f, d, p = !1;
  return new Promise((h, b) => {
    i && setTimeout(() => b(new Jt({ hash: r })), i);
    const y = H(c, { onReplaced: n, resolve: h, reject: b }, (m) => {
      const g = A(e, tn, "watchBlockNumber")({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: s,
        async onBlockNumber(P) {
          const w = (T) => {
            g(), T(), y();
          };
          let O = P;
          if (!p) {
            u > a && w(() => m.reject(new Jt({ hash: r })));
            try {
              if (d) {
                if (t > 1 && (!d.blockNumber || O - d.blockNumber + 1n < t))
                  return;
                w(() => m.resolve(d));
                return;
              }
              if (l || (p = !0, await yt(async () => {
                l = await A(e, Mt, "getTransaction")({ hash: r }), l.blockNumber && (O = l.blockNumber);
              }, {
                delay: o,
                retryCount: a
              }), p = !1), d = await A(e, gt, "getTransactionReceipt")({ hash: r }), t > 1 && (!d.blockNumber || O - d.blockNumber + 1n < t))
                return;
              w(() => m.resolve(d));
            } catch (T) {
              if (T instanceof mr || T instanceof yr) {
                if (!l) {
                  p = !1;
                  return;
                }
                try {
                  f = l, p = !0;
                  const k = await yt(() => A(e, L, "getBlock")({
                    blockNumber: O,
                    includeTransactions: !0
                  }), {
                    delay: o,
                    retryCount: a,
                    shouldRetry: ({ error: R }) => R instanceof jr
                  });
                  p = !1;
                  const E = k.transactions.find(({ from: R, nonce: B }) => R === f.from && B === f.nonce);
                  if (!E || (d = await A(e, gt, "getTransactionReceipt")({
                    hash: E.hash
                  }), t > 1 && (!d.blockNumber || O - d.blockNumber + 1n < t)))
                    return;
                  let x = "replaced";
                  E.to === f.to && E.value === f.value ? x = "repriced" : E.from === E.to && E.value === 0n && (x = "cancelled"), w(() => {
                    var R;
                    (R = m.onReplaced) == null || R.call(m, {
                      reason: x,
                      replacedTransaction: f,
                      transaction: E,
                      transactionReceipt: d
                    }), m.resolve(d);
                  });
                } catch (k) {
                  w(() => m.reject(k));
                }
              } else
                w(() => m.reject(T));
            } finally {
              u++;
            }
          }
        }
      });
    });
  });
}
function Xa(e, { blockTag: t = "latest", emitMissed: r = !1, emitOnBegin: n = !1, onBlock: s, onError: a, includeTransactions: o, poll: i, pollingInterval: c = e.pollingInterval }) {
  const u = typeof i < "u" ? i : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"), l = o ?? !1;
  let f;
  return u ? (() => {
    const h = j([
      "watchBlocks",
      e.uid,
      t,
      r,
      n,
      l,
      c
    ]);
    return H(h, { onBlock: s, onError: a }, (b) => Me(async () => {
      var y;
      try {
        const m = await A(e, L, "getBlock")({
          blockTag: t,
          includeTransactions: l
        });
        if (m.number && (f != null && f.number)) {
          if (m.number === f.number)
            return;
          if (m.number - f.number > 1 && r)
            for (let g = (f == null ? void 0 : f.number) + 1n; g < m.number; g++) {
              const P = await A(e, L, "getBlock")({
                blockNumber: g,
                includeTransactions: l
              });
              b.onBlock(P, f), f = P;
            }
        }
        // If no previous block exists, emit.
        (!(f != null && f.number) || // If the block tag is "pending" with no block number, emit.
        t === "pending" && !(m != null && m.number) || // If the next block number is greater than the previous block number, emit.
        // We don't want to emit blocks in the past.
        m.number && m.number > f.number) && (b.onBlock(m, f), f = m);
      } catch (m) {
        (y = b.onError) == null || y.call(b, m);
      }
    }, {
      emitOnBegin: n,
      interval: c
    }));
  })() : (() => {
    let h = !0, b = () => h = !1;
    return (async () => {
      try {
        const y = (() => {
          if (e.transport.type === "fallback") {
            const g = e.transport.transports.find((P) => P.config.type === "webSocket");
            return g ? g.value : e.transport;
          }
          return e.transport;
        })(), { unsubscribe: m } = await y.subscribe({
          params: ["newHeads"],
          onData(g) {
            var O, T, k;
            if (!h)
              return;
            const w = (((k = (T = (O = e.chain) == null ? void 0 : O.formatters) == null ? void 0 : T.block) == null ? void 0 : k.format) || br)(g.result);
            s(w, f), f = w;
          },
          onError(g) {
            a == null || a(g);
          }
        });
        b = m, h || b();
      } catch (y) {
        a == null || a(y);
      }
    })(), () => b();
  })();
}
function Ka(e, { address: t, args: r, batch: n = !0, event: s, events: a, fromBlock: o, onError: i, onLogs: c, poll: u, pollingInterval: l = e.pollingInterval, strict: f }) {
  const d = typeof u < "u" ? u : typeof o == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"), p = f ?? !1;
  return d ? (() => {
    const y = j([
      "watchEvent",
      t,
      r,
      n,
      e.uid,
      s,
      l,
      o
    ]);
    return H(y, { onLogs: c, onError: i }, (m) => {
      let g;
      o !== void 0 && (g = o - 1n);
      let P, w = !1;
      const O = Me(async () => {
        var T;
        if (!w) {
          try {
            P = await A(e, Ur, "createEventFilter")({
              address: t,
              args: r,
              event: s,
              events: a,
              strict: p,
              fromBlock: o
            });
          } catch {
          }
          w = !0;
          return;
        }
        try {
          let k;
          if (P)
            k = await A(e, Ke, "getFilterChanges")({ filter: P });
          else {
            const E = await A(e, qe, "getBlockNumber")({});
            g && g !== E ? k = await A(e, Ct, "getLogs")({
              address: t,
              args: r,
              event: s,
              events: a,
              fromBlock: g + 1n,
              toBlock: E
            }) : k = [], g = E;
          }
          if (k.length === 0)
            return;
          if (n)
            m.onLogs(k);
          else
            for (const E of k)
              m.onLogs([E]);
        } catch (k) {
          P && k instanceof K && (w = !1), (T = m.onError) == null || T.call(m, k);
        }
      }, {
        emitOnBegin: !0,
        interval: l
      });
      return async () => {
        P && await A(e, et, "uninstallFilter")({ filter: P }), O();
      };
    });
  })() : (() => {
    let y = !0, m = () => y = !1;
    return (async () => {
      try {
        const g = (() => {
          if (e.transport.type === "fallback") {
            const T = e.transport.transports.find((k) => k.config.type === "webSocket");
            return T ? T.value : e.transport;
          }
          return e.transport;
        })(), P = a ?? (s ? [s] : void 0);
        let w = [];
        P && (w = [
          P.flatMap((T) => Ie({
            abi: [T],
            eventName: T.name,
            args: r
          }))
        ], s && (w = w[0]));
        const { unsubscribe: O } = await g.subscribe({
          params: ["logs", { address: t, topics: w }],
          onData(T) {
            var E;
            if (!y)
              return;
            const k = T.result;
            try {
              const { eventName: x, args: R } = Nt({
                abi: P ?? [],
                data: k.data,
                topics: k.topics,
                strict: p
              }), B = Q(k, { args: R, eventName: x });
              c([B]);
            } catch (x) {
              let R, B;
              if (x instanceof he || x instanceof Ye) {
                if (f)
                  return;
                R = x.abiItem.name, B = (E = x.abiItem.inputs) == null ? void 0 : E.some((N) => !("name" in N && N.name));
              }
              const C = Q(k, {
                args: B ? [] : {},
                eventName: R
              });
              c([C]);
            }
          },
          onError(T) {
            i == null || i(T);
          }
        });
        m = O, y || m();
      } catch (g) {
        i == null || i(g);
      }
    })(), () => m();
  })();
}
function eo(e, { batch: t = !0, onError: r, onTransactions: n, poll: s, pollingInterval: a = e.pollingInterval }) {
  return (typeof s < "u" ? s : e.transport.type !== "webSocket") ? (() => {
    const u = j([
      "watchPendingTransactions",
      e.uid,
      t,
      a
    ]);
    return H(u, { onTransactions: n, onError: r }, (l) => {
      let f;
      const d = Me(async () => {
        var p;
        try {
          if (!f)
            try {
              f = await A(e, Wr, "createPendingTransactionFilter")({});
              return;
            } catch (b) {
              throw d(), b;
            }
          const h = await A(e, Ke, "getFilterChanges")({ filter: f });
          if (h.length === 0)
            return;
          if (t)
            l.onTransactions(h);
          else
            for (const b of h)
              l.onTransactions([b]);
        } catch (h) {
          (p = l.onError) == null || p.call(l, h);
        }
      }, {
        emitOnBegin: !0,
        interval: a
      });
      return async () => {
        f && await A(e, et, "uninstallFilter")({ filter: f }), d();
      };
    });
  })() : (() => {
    let u = !0, l = () => u = !1;
    return (async () => {
      try {
        const { unsubscribe: f } = await e.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(d) {
            if (!u)
              return;
            const p = d.result;
            n([p]);
          },
          onError(d) {
            r == null || r(d);
          }
        });
        l = f, u || l();
      } catch (f) {
        r == null || r(f);
      }
    })(), () => l();
  })();
}
function to(e) {
  var f, d, p;
  const { scheme: t, statement: r, ...n } = ((f = e.match(ro)) == null ? void 0 : f.groups) ?? {}, { chainId: s, expirationTime: a, issuedAt: o, notBefore: i, requestId: c, ...u } = ((d = e.match(no)) == null ? void 0 : d.groups) ?? {}, l = (p = e.split("Resources:")[1]) == null ? void 0 : p.split(`
- `).slice(1);
  return {
    ...n,
    ...u,
    ...s ? { chainId: Number(s) } : {},
    ...a ? { expirationTime: new Date(a) } : {},
    ...o ? { issuedAt: new Date(o) } : {},
    ...i ? { notBefore: new Date(i) } : {},
    ...c ? { requestId: c } : {},
    ...l ? { resources: l } : {},
    ...t ? { scheme: t } : {},
    ...r ? { statement: r } : {}
  };
}
const ro = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/, no = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function so(e) {
  const { address: t, domain: r, message: n, nonce: s, scheme: a, time: o = /* @__PURE__ */ new Date() } = e;
  if (r && n.domain !== r || s && n.nonce !== s || a && n.scheme !== a || n.expirationTime && o >= n.expirationTime || n.notBefore && o < n.notBefore)
    return !1;
  try {
    if (!n.address || t && !Vr(n.address, t))
      return !1;
  } catch {
    return !1;
  }
  return !0;
}
async function ao(e, t) {
  const { address: r, domain: n, message: s, nonce: a, scheme: o, signature: i, time: c = /* @__PURE__ */ new Date(), ...u } = t, l = to(s);
  if (!l.address || !so({
    address: r,
    domain: n,
    message: l,
    nonce: a,
    scheme: o,
    time: c
  }))
    return !1;
  const d = en(s);
  return qt(e, {
    address: l.address,
    hash: d,
    signature: i,
    ...u
  });
}
function oo(e) {
  return {
    call: (t) => Se(e, t),
    createBlockFilter: () => ma(e),
    createContractEventFilter: (t) => Er(e, t),
    createEventFilter: (t) => Ur(e, t),
    createPendingTransactionFilter: () => Wr(e),
    estimateContractGas: (t) => Ts(e, t),
    estimateGas: (t) => Bt(e, t),
    getBalance: (t) => ya(e, t),
    getBlobBaseFee: () => ga(e),
    getBlock: (t) => L(e, t),
    getBlockNumber: (t) => qe(e, t),
    getBlockTransactionCount: (t) => wa(e, t),
    getBytecode: (t) => va(e, t),
    getChainId: () => Ir(e),
    getContractEvents: (t) => Mr(e, t),
    getEnsAddress: (t) => ea(e, t),
    getEnsAvatar: (t) => ba(e, t),
    getEnsName: (t) => pa(e, t),
    getEnsResolver: (t) => ha(e, t),
    getEnsText: (t) => Hr(e, t),
    getFeeHistory: (t) => xa(e, t),
    estimateFeesPerGas: (t) => Es(e, t),
    getFilterChanges: (t) => Ke(e, t),
    getFilterLogs: (t) => Ea(e, t),
    getGasPrice: () => Rt(e),
    getLogs: (t) => Ct(e, t),
    getProof: (t) => La(e, t),
    estimateMaxPriorityFeePerGas: (t) => xs(e, t),
    getStorageAt: (t) => _a(e, t),
    getTransaction: (t) => Mt(e, t),
    getTransactionConfirmations: (t) => Ha(e, t),
    getTransactionCount: (t) => $r(e, t),
    getTransactionReceipt: (t) => gt(e, t),
    multicall: (t) => Ua(e, t),
    prepareTransactionRequest: (t) => Sr(e, t),
    readContract: (t) => _(e, t),
    sendRawTransaction: (t) => Ls(e, t),
    simulateContract: (t) => $s(e, t),
    verifyMessage: (t) => Za(e, t),
    verifySiweMessage: (t) => ao(e, t),
    verifyTypedData: (t) => Ya(e, t),
    uninstallFilter: (t) => et(e, t),
    waitForTransactionReceipt: (t) => Qa(e, t),
    watchBlocks: (t) => Xa(e, t),
    watchBlockNumber: (t) => tn(e, t),
    watchContractEvent: (t) => Gs(e, t),
    watchEvent: (t) => Ka(e, t),
    watchPendingTransactions: (t) => eo(e, t)
  };
}
function fo(e) {
  const { key: t = "public", name: r = "Public Client" } = e;
  return Hs({
    ...e,
    key: t,
    name: r,
    type: "publicClient"
  }).extend(oo);
}
export {
  Tn as AbiConstructorNotFoundError,
  Yt as AbiConstructorParamsNotFoundError,
  gr as AbiDecodingDataSizeTooSmallError,
  Ze as AbiDecodingZeroDataError,
  kn as AbiEncodingArrayLengthMismatchError,
  On as AbiEncodingBytesSizeMismatchError,
  Fn as AbiEncodingLengthMismatchError,
  wr as AbiErrorSignatureNotFoundError,
  Qt as AbiEventNotFoundError,
  Rn as AbiEventSignatureEmptyTopicsError,
  vr as AbiEventSignatureNotFoundError,
  Ue as AbiFunctionNotFoundError,
  Bn as AbiFunctionOutputsNotFoundError,
  us as AccountStateConflictError,
  v as BaseError,
  vs as BaseFeeScalarError,
  jr as BlockNotFoundError,
  jn as BytesSizeMismatchError,
  Or as CallExecutionError,
  Re as ChainDisconnectedError,
  ct as ChainDoesNotSupportContract,
  hr as ClientChainNotConfiguredError,
  fs as ContractFunctionExecutionError,
  ft as ContractFunctionRevertedError,
  bs as ContractFunctionZeroDataError,
  he as DecodeLogDataMismatch,
  Ye as DecodeLogTopicsMismatch,
  Ft as Eip1559FeesNotSupportedError,
  be as EnsAvatarInvalidNftUriError,
  ra as EnsAvatarUnsupportedNamespaceError,
  It as EnsAvatarUriResolutionError,
  ys as EstimateGasExecutionError,
  ze as ExecutionRevertedError,
  ot as FeeCapTooHighError,
  zt as FeeCapTooLowError,
  bn as FeeConflictError,
  Mn as FilterTypeNotSupportedError,
  Z as HttpRequestError,
  Ht as InsufficientFundsError,
  ho as IntegerOutOfRangeError,
  X as InternalRpcError,
  Ut as IntrinsicGasTooHighError,
  Wt as IntrinsicGasTooLowError,
  $n as InvalidAbiDecodingTypeError,
  Cn as InvalidAbiEncodingTypeError,
  Y as InvalidAddressError,
  In as InvalidArrayError,
  sn as InvalidBytesBooleanError,
  No as InvalidChainIdError,
  Sn as InvalidDefinitionTypeError,
  mo as InvalidHexBooleanError,
  K as InvalidInputRpcError,
  jo as InvalidLegacyVError,
  ve as InvalidParamsRpcError,
  ge as InvalidRequestRpcError,
  Co as InvalidSerializableTransactionError,
  $o as InvalidStorageKeySizeError,
  Te as JsonRpcVersionUnsupportedError,
  oe as LimitExceededRpcError,
  Ps as MaxFeePerGasTooLowError,
  we as MethodNotFoundRpcError,
  Ae as MethodNotSupportedRpcError,
  _t as NonceMaxValueError,
  Gt as NonceTooHighError,
  Lt as NonceTooLowError,
  ye as ParseRpcError,
  Fe as ProviderDisconnectedError,
  ue as ProviderRpcError,
  kt as RawContractError,
  Pe as ResourceNotFoundRpcError,
  xe as ResourceUnavailableRpcError,
  $ as RpcError,
  Fr as RpcRequestError,
  yo as SizeExceedsPaddingSizeError,
  go as SizeOverflowError,
  wo as SliceOffsetOutOfBoundsError,
  ds as StateAssignmentConflictError,
  Be as SwitchChainError,
  nr as TimeoutError,
  it as TipAboveFeeCapError,
  mr as TransactionNotFoundError,
  yr as TransactionReceiptNotFoundError,
  Ee as TransactionRejectedRpcError,
  Vt as TransactionTypeNotSupportedError,
  ke as UnauthorizedProviderError,
  vt as UnknownNodeError,
  hs as UnknownRpcError,
  Oe as UnsupportedProviderMethodError,
  Js as UrlRequiredError,
  ne as UserRejectedRequestError,
  Jt as WaitForTransactionReceiptTimeoutError,
  Ot as assertRequest,
  Io as assertTransactionEIP1559,
  So as assertTransactionEIP2930,
  Mo as assertTransactionLegacy,
  pn as blobsToCommitments,
  mn as blobsToProofs,
  vo as boolToBytes,
  rn as boolToHex,
  Kn as bytesToBigInt,
  es as bytesToBool,
  M as bytesToHex,
  z as bytesToNumber,
  ts as bytesToString,
  Zr as ccipFetch,
  Zr as ccipRequest,
  ln as checksumAddress,
  qo as commitmentToVersionedHash,
  hn as commitmentsToVersionedHashes,
  q as concat,
  Do as concatBytes,
  fr as concatHex,
  Hs as createClient,
  fo as createPublicClient,
  Vs as createTransport,
  Xe as decodeAbiParameters,
  Tr as decodeErrorResult,
  Nt as decodeEventLog,
  de as decodeFunctionResult,
  zo as defineBlock,
  Go as defineChain,
  Lo as defineTransaction,
  _o as defineTransactionReceipt,
  Ho as defineTransactionRequest,
  ce as encodeAbiParameters,
  qa as encodeDeployData,
  Ie as encodeEventTopics,
  ee as encodeFunctionData,
  Po as etherUnits,
  lo as extractChain,
  br as formatBlock,
  lr as formatEther,
  J as formatGwei,
  Q as formatLog,
  vn as formatTransaction,
  Pn as formatTransactionReceipt,
  pr as formatTransactionRequest,
  xo as formatUnits,
  Eo as fromHex,
  $e as getAbiItem,
  le as getChainContractAddress,
  Ne as getContractError,
  Pt as getEventSelector,
  Gn as getEventSignature,
  Tt as getFunctionSelector,
  Gn as getFunctionSignature,
  gn as getTransactionType,
  Ma as getTypesForEIP712Domain,
  Ao as gweiUnits,
  Ca as hashDomain,
  en as hashMessage,
  ja as hashTypedData,
  pe as hexToBigInt,
  To as hexToBool,
  an as hexToBytes,
  je as hexToNumber,
  ko as hexToString,
  uo as http,
  D as isAddress,
  Vr as isAddressEqual,
  ae as isHex,
  S as keccak256,
  Ks as labelhash,
  Uo as maxUint16,
  pt as multicall3Abi,
  _e as namehash,
  Oo as numberToBytes,
  F as numberToHex,
  Fa as offchainLookup,
  Jr as offchainLookupAbiItem,
  Oa as offchainLookupSignature,
  Fo as pad,
  Ro as padBytes,
  W as padHex,
  jt as parseEventLogs,
  Yn as prepareEncodeFunctionData,
  Da as presignMessagePrefix,
  oo as publicActions,
  Wo as rpcTransactionType,
  Vo as serializeAccessList,
  Ja as serializeSignature,
  Jo as serializeTransaction,
  Zo as sha256,
  Ja as signatureToHex,
  I as size,
  He as slice,
  fn as sliceBytes,
  Yo as sliceHex,
  V as stringToBytes,
  nn as stringToHex,
  j as stringify,
  yn as toBlobSidecars,
  Qo as toBlobs,
  se as toBytes,
  Pr as toEventHash,
  Pt as toEventSelector,
  Gn as toEventSignature,
  Pr as toFunctionHash,
  Tt as toFunctionSelector,
  Gn as toFunctionSignature,
  ie as toHex,
  Xo as toRlp,
  Ko as transactionType,
  Ve as trim,
  Sa as validateTypedData,
  yt as withRetry,
  Zs as withTimeout
};
//# sourceMappingURL=index-CqtVPPQz.js.map