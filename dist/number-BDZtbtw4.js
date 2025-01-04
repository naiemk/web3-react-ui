import { bM as he, j as C, p as Y, t as u, B as a, K as be, s as x, U as W, X as pe, O as me, z as g, q as y, D as B, E as v, bN as ye, C as R } from "./index-D9ITzUBb.js";
function ge(e, t) {
  const n = t || "hex", s = he(C(e, { strict: !1 }) ? Y(e) : e);
  return n === "bytes" ? s : u(s);
}
class G extends a {
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
class X extends Map {
  constructor(t) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = t;
  }
  set(t, n) {
    return super.set(t, n), this.maxSize && this.size > this.maxSize && this.delete(this.keys().next().value), this;
  }
}
const z = /* @__PURE__ */ new X(8192);
function xe(e, t) {
  if (z.has(`${e}.${t}`))
    return z.get(`${e}.${t}`);
  const n = e.substring(2).toLowerCase(), s = ge(be(n), "bytes"), r = n.split("");
  for (let o = 0; o < 40; o += 2)
    s[o >> 1] >> 4 >= 8 && r[o] && (r[o] = r[o].toUpperCase()), (s[o >> 1] & 15) >= 8 && r[o + 1] && (r[o + 1] = r[o + 1].toUpperCase());
  const i = `0x${r.join("")}`;
  return z.set(`${e}.${t}`, i), i;
}
const Pe = /^0x[a-fA-F0-9]{40}$/, L = /* @__PURE__ */ new X(8192);
function F(e, t) {
  const { strict: n = !0 } = t ?? {};
  if (L.has(e))
    return L.get(e);
  const s = Pe.test(e) ? e.toLowerCase() === e ? !0 : n ? xe(e) === e : !0 : !1;
  return L.set(e, s), s;
}
function ft(e) {
  return typeof e[0] == "string" ? $(e) : we(e);
}
function we(e) {
  let t = 0;
  for (const r of e)
    t += r.length;
  const n = new Uint8Array(t);
  let s = 0;
  for (const r of e)
    n.set(r, s), s += r.length;
  return n;
}
function $(e) {
  return `0x${e.reduce((t, n) => t + n.replace("0x", ""), "")}`;
}
function ve(e, t, n, { strict: s } = {}) {
  return C(e, { strict: !1 }) ? Ie(e, t, n, {
    strict: s
  }) : Te(e, t, n, {
    strict: s
  });
}
function J(e, t) {
  if (typeof t == "number" && t > 0 && t > x(e) - 1)
    throw new W({
      offset: t,
      position: "start",
      size: x(e)
    });
}
function Q(e, t, n) {
  if (typeof t == "number" && typeof n == "number" && x(e) !== n - t)
    throw new W({
      offset: n,
      position: "end",
      size: x(e)
    });
}
function Te(e, t, n, { strict: s } = {}) {
  J(e, t);
  const r = e.slice(t, n);
  return s && Q(r, t, n), r;
}
function Ie(e, t, n, { strict: s } = {}) {
  J(e, t);
  const r = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return s && Q(r, t, n), r;
}
class D extends a {
  constructor({ offset: t }) {
    super(`Offset \`${t}\` cannot be negative.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NegativeOffsetError"
    });
  }
}
class Be extends a {
  constructor({ length: t, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "PositionOutOfBoundsError"
    });
  }
}
class Ee extends a {
  constructor({ count: t, limit: n }) {
    super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RecursiveReadLimitExceededError"
    });
  }
}
const Ge = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new Ee({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new Be({
        length: this.bytes.length,
        position: e
      });
  },
  decrementPosition(e) {
    if (e < 0)
      throw new D({ offset: e });
    const t = this.position - e;
    this.assertPosition(t), this.position = t;
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0;
  },
  incrementPosition(e) {
    if (e < 0)
      throw new D({ offset: e });
    const t = this.position + e;
    this.assertPosition(t), this.position = t;
  },
  inspectByte(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    const n = t ?? this.position;
    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
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
    const n = this.inspectBytes(e);
    return this.position += t ?? e, n;
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
function Z(e, { recursiveReadLimit: t = 8192 } = {}) {
  const n = Object.create(Ge);
  return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = /* @__PURE__ */ new Map(), n.recursiveReadLimit = t, n;
}
function E(e, t = "wei") {
  return pe(e, me[t]);
}
function Fe(e) {
  const t = Object.entries(e).map(([s, r]) => r === void 0 || r === !1 ? null : [s, r]).filter(Boolean), n = t.reduce((s, [r]) => Math.max(s, r.length), 0);
  return t.map(([s, r]) => `  ${`${s}:`.padEnd(n + 1)}  ${r}`).join(`
`);
}
class dt extends a {
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
class $e extends a {
  constructor({ v: t }) {
    super(`Invalid \`v\` value "${t}". Expected 27 or 28.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidLegacyVError"
    });
  }
}
class Oe extends a {
  constructor({ transaction: t }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        Fe(t),
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
class Ue extends a {
  constructor({ storageKey: t }) {
    super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length - 2) / 2)} bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidStorageKeySizeError"
    });
  }
}
class ht extends a {
  constructor({ blockHash: t, blockNumber: n, blockTag: s, hash: r, index: i }) {
    let o = "Transaction";
    s && i !== void 0 && (o = `Transaction at block time "${s}" at index "${i}"`), t && i !== void 0 && (o = `Transaction at block hash "${t}" at index "${i}"`), n && i !== void 0 && (o = `Transaction at block number "${n}" at index "${i}"`), r && (o = `Transaction with hash "${r}"`), super(`${o} could not be found.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionNotFoundError"
    });
  }
}
class bt extends a {
  constructor({ hash: t }) {
    super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionReceiptNotFoundError"
    });
  }
}
class pt extends a {
  constructor({ hash: t }) {
    super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "WaitForTransactionReceiptTimeoutError"
    });
  }
}
class q extends a {
  constructor({ cause: t, message: n } = {}) {
    var r;
    const s = (r = n == null ? void 0 : n.replace("execution reverted: ", "")) == null ? void 0 : r.replace("execution reverted", "");
    super(`Execution reverted ${s ? `with reason: ${s}` : "for an unknown reason"}.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ExecutionRevertedError"
    });
  }
}
Object.defineProperty(q, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3
});
Object.defineProperty(q, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/
});
class O extends a {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${E(n)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FeeCapTooHigh"
    });
  }
}
Object.defineProperty(O, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class ze extends a {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${E(n)}` : ""} gwei) cannot be lower than the block base fee.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FeeCapTooLow"
    });
  }
}
Object.defineProperty(ze, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class Le extends a {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is higher than the next one expected.`, { cause: t }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonceTooHighError"
    });
  }
}
Object.defineProperty(Le, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/
});
class Ce extends a {
  constructor({ cause: t, nonce: n } = {}) {
    super([
      `Nonce provided for the transaction ${n ? `(${n}) ` : ""}is lower than the current nonce of the account.`,
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
Object.defineProperty(Ce, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/
});
class je extends a {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}exceeds the maximum allowed nonce.`, { cause: t }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonceMaxValueError"
    });
  }
}
Object.defineProperty(je, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/
});
class Ne extends a {
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
Object.defineProperty(Ne, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds/
});
class Ve extends a {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntrinsicGasTooHighError"
    });
  }
}
Object.defineProperty(Ve, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/
});
class He extends a {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction is too low.`, {
      cause: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntrinsicGasTooLowError"
    });
  }
}
Object.defineProperty(He, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/
});
class Ae extends a {
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
Object.defineProperty(Ae, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/
});
class ee extends a {
  constructor({ cause: t, maxPriorityFeePerGas: n, maxFeePerGas: s } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${n ? ` = ${E(n)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${s ? ` = ${E(s)} gwei` : ""}).`
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
Object.defineProperty(ee, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class mt extends a {
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
function U(e, t) {
  return ({ exclude: n, format: s }) => ({
    exclude: n,
    format: (r) => {
      const i = t(r);
      if (n)
        for (const o of n)
          delete i[o];
      return {
        ...i,
        ...s(r)
      };
    },
    type: e
  });
}
const Me = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3"
};
function Se(e) {
  const t = {};
  return typeof e.accessList < "u" && (t.accessList = e.accessList), typeof e.blobVersionedHashes < "u" && (t.blobVersionedHashes = e.blobVersionedHashes), typeof e.blobs < "u" && (typeof e.blobs[0] != "string" ? t.blobs = e.blobs.map((n) => g(n)) : t.blobs = e.blobs), typeof e.data < "u" && (t.data = e.data), typeof e.from < "u" && (t.from = e.from), typeof e.gas < "u" && (t.gas = y(e.gas)), typeof e.gasPrice < "u" && (t.gasPrice = y(e.gasPrice)), typeof e.maxFeePerBlobGas < "u" && (t.maxFeePerBlobGas = y(e.maxFeePerBlobGas)), typeof e.maxFeePerGas < "u" && (t.maxFeePerGas = y(e.maxFeePerGas)), typeof e.maxPriorityFeePerGas < "u" && (t.maxPriorityFeePerGas = y(e.maxPriorityFeePerGas)), typeof e.nonce < "u" && (t.nonce = y(e.nonce)), typeof e.to < "u" && (t.to = e.to), typeof e.type < "u" && (t.type = Me[e.type]), typeof e.value < "u" && (t.value = y(e.value)), t;
}
const yt = /* @__PURE__ */ U("transactionRequest", Se), te = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844"
};
function ne(e) {
  const t = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? B(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
    nonce: e.nonce ? B(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? te[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0
  };
  return t.yParity = (() => {
    if (e.yParity)
      return Number(e.yParity);
    if (typeof t.v == "bigint") {
      if (t.v === 0n || t.v === 27n)
        return 0;
      if (t.v === 1n || t.v === 28n)
        return 1;
      if (t.v >= 35n)
        return t.v % 2n === 0n ? 1 : 0;
    }
  })(), t.type === "legacy" && (delete t.accessList, delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), t.type === "eip2930" && (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), t.type === "eip1559" && delete t.maxFeePerBlobGas, t;
}
const gt = /* @__PURE__ */ U("transaction", ne);
function ke(e) {
  var n;
  const t = (n = e.transactions) == null ? void 0 : n.map((s) => typeof s == "string" ? s : ne(s));
  return {
    ...e,
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: t,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
  };
}
const xt = /* @__PURE__ */ U("block", ke);
function se(e) {
  const { kzg: t } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), s = typeof e.blobs[0] == "string" ? e.blobs.map((i) => v(i)) : e.blobs, r = [];
  for (const i of s)
    r.push(Uint8Array.from(t.blobToKzgCommitment(i)));
  return n === "bytes" ? r : r.map((i) => g(i));
}
function re(e) {
  const { kzg: t } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), s = typeof e.blobs[0] == "string" ? e.blobs.map((o) => v(o)) : e.blobs, r = typeof e.commitments[0] == "string" ? e.commitments.map((o) => v(o)) : e.commitments, i = [];
  for (let o = 0; o < s.length; o++) {
    const c = s[o], l = r[o];
    i.push(Uint8Array.from(t.computeBlobKzgProof(c, l)));
  }
  return n === "bytes" ? i : i.map((o) => g(o));
}
function Re(e, t) {
  const n = t || "hex", s = ye(C(e, { strict: !1 }) ? Y(e) : e);
  return n === "bytes" ? s : u(s);
}
function De(e) {
  const { commitment: t, version: n = 1 } = e, s = e.to ?? (typeof t == "string" ? "hex" : "bytes"), r = Re(t, "bytes");
  return r.set([n], 0), s === "bytes" ? r : g(r);
}
function _e(e) {
  const { commitments: t, version: n } = e, s = e.to ?? (typeof t[0] == "string" ? "hex" : "bytes"), r = [];
  for (const i of t)
    r.push(De({
      commitment: i,
      to: s,
      version: n
    }));
  return r;
}
const _ = 6, ie = 32, j = 4096, oe = ie * j, K = oe * _ - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * j * _, ae = 1;
class Ke extends a {
  constructor({ maxSize: t, size: n }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${t} bytes`, `Given: ${n} bytes`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BlobSizeTooLargeError"
    });
  }
}
class ue extends a {
  constructor() {
    super("Blob data must not be empty."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EmptyBlobError"
    });
  }
}
class Ye extends a {
  constructor({ hash: t, size: n }) {
    super(`Versioned hash "${t}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${n}`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidVersionedHashSizeError"
    });
  }
}
class We extends a {
  constructor({ hash: t, version: n }) {
    super(`Versioned hash "${t}" version is invalid.`, {
      metaMessages: [
        `Expected: ${ae}`,
        `Received: ${n}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidVersionedHashVersionError"
    });
  }
}
function Xe(e) {
  const t = e.to ?? (typeof e.data == "string" ? "hex" : "bytes"), n = typeof e.data == "string" ? v(e.data) : e.data, s = x(n);
  if (!s)
    throw new ue();
  if (s > K)
    throw new Ke({
      maxSize: K,
      size: s
    });
  const r = [];
  let i = !0, o = 0;
  for (; i; ) {
    const c = Z(new Uint8Array(oe));
    let l = 0;
    for (; l < j; ) {
      const f = n.slice(o, o + (ie - 1));
      if (c.pushByte(0), c.pushBytes(f), f.length < 31) {
        c.pushByte(128), i = !1;
        break;
      }
      l++, o += 31;
    }
    r.push(c);
  }
  return t === "bytes" ? r.map((c) => c.bytes) : r.map((c) => g(c.bytes));
}
function Je(e) {
  const { data: t, kzg: n, to: s } = e, r = e.blobs ?? Xe({ data: t, to: s }), i = e.commitments ?? se({ blobs: r, kzg: n, to: s }), o = e.proofs ?? re({ blobs: r, commitments: i, kzg: n, to: s }), c = [];
  for (let l = 0; l < r.length; l++)
    c.push({
      blob: r[l],
      commitment: i[l],
      proof: o[l]
    });
  return c;
}
function Qe(e) {
  if (e.type)
    return e.type;
  if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u")
    return "eip4844";
  if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof e.gasPrice < "u")
    return typeof e.accessList < "u" ? "eip2930" : "legacy";
  throw new Oe({ transaction: e });
}
function Ze(e, { args: t, eventName: n } = {}) {
  return {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    logIndex: e.logIndex ? Number(e.logIndex) : null,
    transactionHash: e.transactionHash ? e.transactionHash : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    ...n ? { args: t, eventName: n } : {}
  };
}
class Pt extends a {
  constructor({ blockNumber: t, chain: n, contract: s }) {
    super(`Chain "${n.name}" does not support contract "${s.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...t && s.blockCreated && s.blockCreated > t ? [
          `- The contract "${s.name}" was not deployed until block ${s.blockCreated} (current block ${t}).`
        ] : [
          `- The chain does not have the contract "${s.name}" configured.`
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
class wt extends a {
  constructor() {
    super("No chain was provided to the Client."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ClientChainNotConfiguredError"
    });
  }
}
class N extends a {
  constructor({ chainId: t }) {
    super(typeof t == "number" ? `Chain ID "${t}" is invalid.` : "Chain ID is invalid."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidChainIdError"
    });
  }
}
function vt(e) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...e
  };
}
function T(e, t = "hex") {
  const n = ce(e), s = Z(new Uint8Array(n.length));
  return n.encode(s), t === "hex" ? g(s.bytes) : s.bytes;
}
function ce(e) {
  return Array.isArray(e) ? qe(e.map((t) => ce(t))) : et(e);
}
function qe(e) {
  const t = e.reduce((r, i) => r + i.length, 0), n = le(t);
  return {
    length: t <= 55 ? 1 + t : 1 + n + t,
    encode(r) {
      t <= 55 ? r.pushByte(192 + t) : (r.pushByte(247 + n), n === 1 ? r.pushUint8(t) : n === 2 ? r.pushUint16(t) : n === 3 ? r.pushUint24(t) : r.pushUint32(t));
      for (const { encode: i } of e)
        i(r);
    }
  };
}
function et(e) {
  const t = typeof e == "string" ? v(e) : e, n = le(t.length);
  return {
    length: t.length === 1 && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + n + t.length,
    encode(r) {
      t.length === 1 && t[0] < 128 ? r.pushBytes(t) : t.length <= 55 ? (r.pushByte(128 + t.length), r.pushBytes(t)) : (r.pushByte(183 + n), n === 1 ? r.pushUint8(t.length) : n === 2 ? r.pushUint16(t.length) : n === 3 ? r.pushUint24(t.length) : r.pushUint32(t.length), r.pushBytes(t));
    }
  };
}
function le(e) {
  if (e < 2 ** 8)
    return 1;
  if (e < 2 ** 16)
    return 2;
  if (e < 2 ** 24)
    return 3;
  if (e < 2 ** 32)
    return 4;
  throw new a("Length is too large.");
}
const tt = {
  "0x0": "reverted",
  "0x1": "success"
};
function nt(e) {
  const t = {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((n) => Ze(n)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? B(e.transactionIndex) : null,
    status: e.status ? tt[e.status] : null,
    type: e.type ? te[e.type] || e.type : null
  };
  return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)), t;
}
const Tt = /* @__PURE__ */ U("transactionReceipt", nt);
function st(e) {
  const { blobVersionedHashes: t } = e;
  if (t) {
    if (t.length === 0)
      throw new ue();
    for (const n of t) {
      const s = x(n), r = B(ve(n, 0, 1));
      if (s !== 32)
        throw new Ye({ hash: n, size: s });
      if (r !== ae)
        throw new We({
          hash: n,
          version: r
        });
    }
  }
  fe(e);
}
function fe(e) {
  const { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: s, to: r } = e;
  if (t <= 0)
    throw new N({ chainId: t });
  if (r && !F(r))
    throw new G({ address: r });
  if (s && s > 2n ** 256n - 1n)
    throw new O({ maxFeePerGas: s });
  if (n && s && n > s)
    throw new ee({ maxFeePerGas: s, maxPriorityFeePerGas: n });
}
function rt(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: s, maxFeePerGas: r, to: i } = e;
  if (t <= 0)
    throw new N({ chainId: t });
  if (i && !F(i))
    throw new G({ address: i });
  if (n || r)
    throw new a("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (s && s > 2n ** 256n - 1n)
    throw new O({ maxFeePerGas: s });
}
function it(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: s, maxFeePerGas: r, to: i, accessList: o } = e;
  if (i && !F(i))
    throw new G({ address: i });
  if (typeof t < "u" && t <= 0)
    throw new N({ chainId: t });
  if (n || r)
    throw new a("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (s && s > 2n ** 256n - 1n)
    throw new O({ maxFeePerGas: s });
  if (o)
    throw new a("`accessList` is not a valid Legacy Transaction attribute.");
}
function V(e) {
  if (!e || e.length === 0)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const { address: s, storageKeys: r } = e[n];
    for (let i = 0; i < r.length; i++)
      if (r[i].length - 2 !== 64)
        throw new Ue({ storageKey: r[i] });
    if (!F(s, { strict: !1 }))
      throw new G({ address: s });
    t.push([s, r]);
  }
  return t;
}
function It(e, t) {
  const n = Qe(e);
  return n === "eip1559" ? at(e, t) : n === "eip2930" ? ut(e, t) : n === "eip4844" ? ot(e, t) : ct(e, t);
}
function ot(e, t) {
  const { chainId: n, gas: s, nonce: r, to: i, value: o, maxFeePerBlobGas: c, maxFeePerGas: l, maxPriorityFeePerGas: f, accessList: h, data: d } = e;
  st(e);
  let b = e.blobVersionedHashes, p = e.sidecars;
  if (e.blobs && (typeof b > "u" || typeof p > "u")) {
    const m = typeof e.blobs[0] == "string" ? e.blobs : e.blobs.map((w) => g(w)), I = e.kzg, P = se({
      blobs: m,
      kzg: I
    });
    if (typeof b > "u" && (b = _e({
      commitments: P
    })), typeof p > "u") {
      const w = re({ blobs: m, commitments: P, kzg: I });
      p = Je({ blobs: m, commitments: P, proofs: w });
    }
  }
  const de = V(h), A = [
    u(n),
    r ? u(r) : "0x",
    f ? u(f) : "0x",
    l ? u(l) : "0x",
    s ? u(s) : "0x",
    i ?? "0x",
    o ? u(o) : "0x",
    d ?? "0x",
    de,
    c ? u(c) : "0x",
    b ?? [],
    ...H(e, t)
  ], M = [], S = [], k = [];
  if (p)
    for (let m = 0; m < p.length; m++) {
      const { blob: I, commitment: P, proof: w } = p[m];
      M.push(I), S.push(P), k.push(w);
    }
  return $([
    "0x03",
    // If sidecars are enabled, envelope turns into a "wrapper":
    T(p ? [A, M, S, k] : A)
  ]);
}
function at(e, t) {
  const { chainId: n, gas: s, nonce: r, to: i, value: o, maxFeePerGas: c, maxPriorityFeePerGas: l, accessList: f, data: h } = e;
  fe(e);
  const d = V(f), b = [
    u(n),
    r ? u(r) : "0x",
    l ? u(l) : "0x",
    c ? u(c) : "0x",
    s ? u(s) : "0x",
    i ?? "0x",
    o ? u(o) : "0x",
    h ?? "0x",
    d,
    ...H(e, t)
  ];
  return $([
    "0x02",
    T(b)
  ]);
}
function ut(e, t) {
  const { chainId: n, gas: s, data: r, nonce: i, to: o, value: c, accessList: l, gasPrice: f } = e;
  rt(e);
  const h = V(l), d = [
    u(n),
    i ? u(i) : "0x",
    f ? u(f) : "0x",
    s ? u(s) : "0x",
    o ?? "0x",
    c ? u(c) : "0x",
    r ?? "0x",
    h,
    ...H(e, t)
  ];
  return $([
    "0x01",
    T(d)
  ]);
}
function ct(e, t) {
  const { chainId: n = 0, gas: s, data: r, nonce: i, to: o, value: c, gasPrice: l } = e;
  it(e);
  let f = [
    i ? u(i) : "0x",
    l ? u(l) : "0x",
    s ? u(s) : "0x",
    o ?? "0x",
    c ? u(c) : "0x",
    r ?? "0x"
  ];
  if (t) {
    const h = (() => {
      if (t.v >= 35n)
        return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n);
      if (n > 0)
        return BigInt(n * 2) + BigInt(35n + t.v - 27n);
      const d = 27n + (t.v === 27n ? 0n : 1n);
      if (t.v !== d)
        throw new $e({ v: t.v });
      return d;
    })();
    f = [
      ...f,
      u(h),
      t.r,
      t.s
    ];
  } else n > 0 && (f = [
    ...f,
    u(n),
    "0x",
    "0x"
  ]);
  return T(f);
}
function H(e, t) {
  const { r: n, s, v: r, yParity: i } = t ?? e;
  return typeof n > "u" ? [] : typeof s > "u" ? [] : typeof r > "u" && typeof i > "u" ? [] : [typeof i == "number" ? i ? u(1) : "0x" : r === 0n ? "0x" : r === 1n ? u(1) : r === 27n ? "0x" : u(1), R(n), R(s)];
}
const Bt = 2n ** 16n - 1n;
export {
  rt as $,
  wt as A,
  ht as B,
  Pt as C,
  ne as D,
  q as E,
  O as F,
  bt as G,
  nt as H,
  G as I,
  Bt as J,
  N as K,
  $e as L,
  Oe as M,
  Le as N,
  Ue as O,
  Be as P,
  xt as Q,
  gt as R,
  te as S,
  Ae as T,
  mt as U,
  Tt as V,
  pt as W,
  yt as X,
  Me as Y,
  T as Z,
  fe as _,
  $ as a,
  it as a0,
  De as a1,
  Xe as a2,
  we as a3,
  vt as a4,
  Re as a5,
  V as a6,
  It as a7,
  Ie as a8,
  H as a9,
  Z as b,
  ft as c,
  xe as d,
  Te as e,
  E as f,
  ze as g,
  Ce as h,
  F as i,
  je as j,
  ge as k,
  Ne as l,
  Ve as m,
  He as n,
  ee as o,
  Fe as p,
  dt as q,
  ke as r,
  ve as s,
  se as t,
  _e as u,
  re as v,
  Je as w,
  Qe as x,
  Se as y,
  Ze as z
};
//# sourceMappingURL=number-BDZtbtw4.js.map
