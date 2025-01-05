import { a0 as He, a1 as Ht, a2 as Bt, a3 as Dt, a4 as Wt, a5 as Nt, a6 as Et, a7 as Ft, a8 as Ot, a9 as Zt, aa as Gt, ab as Rt, ac as Ut, ad as Xt, ae as Yt, af as pe, ag as ve, ah as me, ai as he, aj as h, ak as z, al as p, am as M, an as c, ao as Y, ap as y, aq as ae, ar as A, as as ie, at as S, au as te, av as ye, aw as Ce, ax as ee, ay as Jt, az as F, aA as O, aB as Z, aC as Be, aD as G, aE as ue, aF as Me, aG as qe, aH as $t, aI as De, aJ as P, aK as ge, aL as be, aM as L, aN as _e, aO as ce, aP as Kt, aQ as fe, aR as we, aS as At, aT as Qt, aU as V, aV as Ae, aW as We, aX as Ne, aY as Ee, aZ as ke, a_ as Tt, a$ as xt, b0 as en, b1 as je, b2 as ze, b3 as Mt, b4 as tn, b5 as nn, b6 as rn, b7 as St, b8 as on, b9 as de, ba as Ie, bb as $e, bc as ln, bd as Ve, be as an, bf as sn, bg as It, bh as Pt, bi as cn, bj as dn, l as Fe, bk as un, bl as Oe, bm as fn, bn as Ze, bo as Pe, bp as Ge, bq as pn, br as Le, bs as Re, bt as vn, bu as mn, bv as Ue, bw as hn } from "./index-BujnRWDh.js";
var bn = function(e) {
  He(t, e);
  function t(n, r) {
    return e.call(this) || this;
  }
  return t.prototype.schedule = function(n, r) {
    return this;
  }, t;
}(Ht), Xe = {
  setInterval: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Bt([e, t], Dt(n)));
  },
  clearInterval: function(e) {
    return clearInterval(e);
  },
  delegate: void 0
}, gn = function(e) {
  He(t, e);
  function t(n, r) {
    var o = e.call(this, n, r) || this;
    return o.scheduler = n, o.work = r, o.pending = !1, o;
  }
  return t.prototype.schedule = function(n, r) {
    var o;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var l = this.id, a = this.scheduler;
    return l != null && (this.id = this.recycleAsyncId(a, l, r)), this.pending = !0, this.delay = r, this.id = (o = this.id) !== null && o !== void 0 ? o : this.requestAsyncId(a, this.id, r), this;
  }, t.prototype.requestAsyncId = function(n, r, o) {
    return o === void 0 && (o = 0), Xe.setInterval(n.flush.bind(n, this), o);
  }, t.prototype.recycleAsyncId = function(n, r, o) {
    if (o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1)
      return r;
    r != null && Xe.clearInterval(r);
  }, t.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var o = this._execute(n, r);
    if (o)
      return o;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(n, r) {
    var o = !1, l;
    try {
      this.work(n);
    } catch (a) {
      o = !0, l = a || new Error("Scheduled action threw falsy error");
    }
    if (o)
      return this.unsubscribe(), l;
  }, t.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, o = n.scheduler, l = o.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Wt(l, this), r != null && (this.id = this.recycleAsyncId(o, r, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, t;
}(bn), Ye = function() {
  function e(t, n) {
    n === void 0 && (n = e.now), this.schedulerActionCtor = t, this.now = n;
  }
  return e.prototype.schedule = function(t, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, t).schedule(r, n);
  }, e.now = Nt.now, e;
}(), _n = function(e) {
  He(t, e);
  function t(n, r) {
    r === void 0 && (r = Ye.now);
    var o = e.call(this, n, r) || this;
    return o.actions = [], o._active = !1, o;
  }
  return t.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var o;
    this._active = !0;
    do
      if (o = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = !1, o) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw o;
    }
  }, t;
}(Ye), wn = new _n(gn);
function kn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = Et(e), r = Ft(e, 1 / 0), o = e;
  return o.length ? o.length === 1 ? Zt(o[0]) : Gt(r)(Rt(o, n)) : Ot;
}
function yn(e, t) {
  return t === void 0 && (t = wn), Ut(function(n, r) {
    var o = null, l = null, a = null, s = function() {
      if (o) {
        o.unsubscribe(), o = null;
        var f = l;
        l = null, r.next(f);
      }
    };
    function i() {
      var f = a + e, d = t.now();
      if (d < f) {
        o = this.schedule(void 0, f - d), r.add(o);
        return;
      }
      s();
    }
    n.subscribe(Xt(r, function(f) {
      l = f, a = t.now(), o || (o = t.schedule(i, e), r.add(o));
    }, function() {
      s(), r.complete();
    }, void 0, function() {
      l = o = null;
    }));
  });
}
function Cn(e) {
  return Yt(function(t, n) {
    return e <= n;
  });
}
var Lt = '<svg width="100%" height="24" viewBox="0 5 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10H7Z" fill="currentColor"/></svg>', Se = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="currentColor"/>
  </svg>
`;
function zn(e) {
  he(e, "svelte-1uqued6", "select.svelte-1uqued6{border:none;background-image:none;background-color:transparent;-webkit-appearance:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;appearance:none;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));transition:width 250ms ease-in-out;background-repeat:no-repeat, repeat;background-position:right 0px top 0px, 0 0;scrollbar-width:none;-ms-overflow-style:none;padding:0 14px 0 0;white-space:nowrap;text-overflow:ellipsis}select.minimized_ac.svelte-1uqued6{min-width:80px;max-width:80px}select.maximized_ac.svelte-1uqued6{width:auto !important}select.svelte-1uqued6:focus{outline:none}span.switching-placeholder.svelte-1uqued6{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));min-width:80px;max-width:80px;padding:0 8px 0 4px}");
}
function Je(e, t, n) {
  const r = e.slice();
  return r[15] = t[n], r;
}
function Ke(e) {
  let t;
  function n(l, a) {
    return (
      /*$switching$*/
      l[7] ? An : $n
    );
  }
  let r = n(e), o = r(e);
  return {
    c() {
      o.c(), t = ue();
    },
    m(l, a) {
      o.m(l, a), M(l, t, a);
    },
    p(l, a) {
      r === (r = n(l)) && o ? o.p(l, a) : (o.d(1), o = r(l), o && (o.c(), o.m(t.parentNode, t)));
    },
    d(l) {
      o.d(l), l && S(t);
    }
  };
}
function $n(e) {
  let t, n = !Ze(
    /*wallet*/
    e[6].chains[0],
    /*chains*/
    e[2]
  ), r, o = [], l = /* @__PURE__ */ new Map(), a, s, i, f, d, v = n && Qe(e), k = (
    /*chains*/
    e[2]
  );
  const g = (b) => (
    /*chain*/
    b[15].id
  );
  for (let b = 0; b < k.length; b += 1) {
    let m = Je(e, k, b), u = g(m);
    l.set(u, o[b] = xe(u, m));
  }
  return {
    c() {
      t = h("select"), v && v.c(), r = ue();
      for (let b = 0; b < o.length; b += 1)
        o[b].c();
      p(t, "class", a = Pe(`flex justify-center items-center pointer ${/*parentCSSId*/
      e[4]}`) + " svelte-1uqued6"), p(t, "style", i = `
        color: var(${/*colorVar*/
      e[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
        background-image: url('data:image/svg+xml;utf8,${/*selectIcon*/
      e[0]}'); ${/*bold*/
      e[3] ? "font-weight: 600;" : ""}`);
    },
    m(b, m) {
      M(b, t, m), v && v.m(t, null), c(t, r);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(t, null);
      Ge(
        t,
        /*wallet*/
        e[6].chains[0].id
      ), e[13](t), f || (d = Y(
        t,
        "change",
        /*handleSelect*/
        e[10]
      ), f = !0);
    },
    p(b, m) {
      m & /*wallet, chains*/
      68 && (n = !Ze(
        /*wallet*/
        b[6].chains[0],
        /*chains*/
        b[2]
      )), n ? v ? v.p(b, m) : (v = Qe(b), v.c(), v.m(t, r)) : v && (v.d(1), v = null), m & /*chains, chainIdToLabel*/
      4 && (k = /*chains*/
      b[2], o = At(o, m, g, 1, b, k, l, t, pn, xe, null, Je)), m & /*parentCSSId*/
      16 && a !== (a = Pe(`flex justify-center items-center pointer ${/*parentCSSId*/
      b[4]}`) + " svelte-1uqued6") && p(t, "class", a), m & /*wallet*/
      64 && s !== (s = /*wallet*/
      b[6].chains[0].id) && Ge(
        t,
        /*wallet*/
        b[6].chains[0].id
      ), m & /*colorVar, selectIcon, bold*/
      11 && i !== (i = `
        color: var(${/*colorVar*/
      b[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
        background-image: url('data:image/svg+xml;utf8,${/*selectIcon*/
      b[0]}'); ${/*bold*/
      b[3] ? "font-weight: 600;" : ""}`) && p(t, "style", i);
    },
    d(b) {
      b && S(t), v && v.d();
      for (let m = 0; m < o.length; m += 1)
        o[m].d();
      e[13](null), f = !1, d();
    }
  };
}
function An(e) {
  let t, n, r, o;
  return {
    c() {
      t = h("span"), n = L("switching..."), p(t, "class", r = Pe(`switching-placeholder ${/*parentCSSId*/
      e[4]}`) + " svelte-1uqued6"), p(t, "style", o = `
        color: var(${/*colorVar*/
      e[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
      `);
    },
    m(l, a) {
      M(l, t, a), c(t, n);
    },
    p(l, a) {
      a & /*parentCSSId*/
      16 && r !== (r = Pe(`switching-placeholder ${/*parentCSSId*/
      l[4]}`) + " svelte-1uqued6") && p(t, "class", r), a & /*colorVar*/
      2 && o !== (o = `
        color: var(${/*colorVar*/
      l[1]},
        var(--account-center-network-selector-color, var(--gray-500)));
      `) && p(t, "style", o);
    },
    d(l) {
      l && S(t);
    }
  };
}
function Qe(e) {
  let t, n = (Le[
    /*wallet*/
    e[6].chains[0].id
  ] || "unrecognized") + "", r, o;
  return {
    c() {
      t = h("option"), r = L(n), t.__value = o = /*wallet*/
      e[6].chains[0].id, t.value = t.__value;
    },
    m(l, a) {
      M(l, t, a), c(t, r);
    },
    p(l, a) {
      a & /*wallet*/
      64 && n !== (n = (Le[
        /*wallet*/
        l[6].chains[0].id
      ] || "unrecognized") + "") && V(r, n), a & /*wallet*/
      64 && o !== (o = /*wallet*/
      l[6].chains[0].id) && (t.__value = o, t.value = t.__value);
    },
    d(l) {
      l && S(t);
    }
  };
}
function xe(e, t) {
  let n, r = (
    /*chain*/
    (t[15].label || Le[
      /*chain*/
      t[15].id
    ] || /*chain*/
    t[15].id) + ""
  ), o, l;
  return {
    key: e,
    first: null,
    c() {
      n = h("option"), o = L(r), n.__value = l = /*chain*/
      t[15].id, n.value = n.__value, this.first = n;
    },
    m(a, s) {
      M(a, n, s), c(n, o);
    },
    p(a, s) {
      t = a, s & /*chains*/
      4 && r !== (r = /*chain*/
      (t[15].label || Le[
        /*chain*/
        t[15].id
      ] || /*chain*/
      t[15].id) + "") && V(o, r), s & /*chains*/
      4 && l !== (l = /*chain*/
      t[15].id) && (n.__value = l, n.value = n.__value);
    },
    d(a) {
      a && S(n);
    }
  };
}
function Tn(e) {
  let t, n = (
    /*wallet*/
    e[6] && Ke(e)
  );
  return {
    c() {
      n && n.c(), t = ue();
    },
    m(r, o) {
      n && n.m(r, o), M(r, t, o);
    },
    p(r, [o]) {
      /*wallet*/
      r[6] ? n ? n.p(r, o) : (n = Ke(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: G,
    o: G,
    d(r) {
      n && n.d(r), r && S(t);
    }
  };
}
function Mn(e, t, n) {
  let r, o, l, a;
  ee(e, Me, (w) => n(12, l = w));
  let { selectIcon: s = Lt } = t, { colorVar: i } = t, { chains: f } = t, { bold: d = !1 } = t, { parentCSSId: v = "" } = t;
  const k = new an(!1);
  ee(e, k, (w) => n(7, a = w));
  let g;
  const b = kn(Me, k.pipe(Cn(1))).pipe(yn(50), sn((w, C) => typeof w == "boolean" || typeof C == "boolean" ? !1 : w[0] && C[0] && w[0].chains[0].id === C[0].chains[0].id));
  ee(e, b, (w) => n(11, o = w));
  async function m() {
    const w = g.selectedOptions[0].value;
    w !== r.chains[0].id && (k.next(!0), await cn({
      chainId: w,
      chainNamespace: "evm",
      wallet: r.label
    }), k.next(!1));
  }
  function u() {
    if (!g) return;
    let w = document.createElement("option");
    w.textContent = g.selectedOptions[0].textContent;
    let C = document.createElement("select");
    C.style.visibility = "hidden", C.style.position = "fixed", C.appendChild(w), g.after(C), n(5, g.style.width = `${C.clientWidth - 22}px`, g), C.remove();
  }
  function _(w) {
    Tt[w ? "unshift" : "push"](() => {
      g = w, n(5, g), n(2, f), n(6, r), n(12, l);
    });
  }
  return e.$$set = (w) => {
    "selectIcon" in w && n(0, s = w.selectIcon), "colorVar" in w && n(1, i = w.colorVar), "chains" in w && n(2, f = w.chains), "bold" in w && n(3, d = w.bold), "parentCSSId" in w && n(4, v = w.parentCSSId);
  }, e.$$.update = () => {
    e.$$.dirty & /*$wallets$*/
    4096 && n(6, [r] = l, r), e.$$.dirty & /*$resize$*/
    2048 && o && u();
  }, [
    s,
    i,
    f,
    d,
    v,
    g,
    r,
    a,
    k,
    b,
    m,
    o,
    l,
    _
  ];
}
class qt extends pe {
  constructor(t) {
    super(), ve(
      this,
      t,
      Mn,
      Tn,
      me,
      {
        selectIcon: 0,
        colorVar: 1,
        chains: 2,
        bold: 3,
        parentCSSId: 4
      },
      zn
    );
  }
}
var Sn = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="currentColor"/>
  </svg>
`;
function In(e) {
  he(e, "svelte-hb2n95", `.container.svelte-hb2n95.svelte-hb2n95{display:flex;align-items:center;gap:0.5rem;cursor:pointer;position:relative;z-index:0;width:100%;padding:0.25rem;margin-bottom:0.25rem;border-radius:12px;transition:background-color 150ms ease-in-out}.container.svelte-hb2n95.svelte-hb2n95::before{content:'';display:block;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;background:var(--action-color);border-radius:12px;z-index:-1;opacity:0}.container.svelte-hb2n95.svelte-hb2n95:hover::before{opacity:0.2}.container.svelte-hb2n95:hover .balance.svelte-hb2n95,.container.svelte-hb2n95:hover .elipsis-container.svelte-hb2n95{opacity:1}.container.svelte-hb2n95:hover .balance.svelte-hb2n95{color:var(--account-center-maximized-balance-color, inherit)}.container.primary.svelte-hb2n95.svelte-hb2n95:hover{background-color:var(
      --account-center-maximized-account-section-background-hover
    )}.account-details.svelte-hb2n95.svelte-hb2n95{flex:1 1;display:flex;gap:inherit;overflow:hidden}.address-domain.svelte-hb2n95.svelte-hb2n95{flex:1 0 auto;max-width:70%;white-space:nowrap;font-weight:600;color:var(--account-center-maximized-address-color, inherit);overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.address-domain.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.balance.svelte-hb2n95.svelte-hb2n95{flex:1 1 auto;max-width:70%;white-space:nowrap;text-align:end;opacity:0.4;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.balance.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.elipsis-container.svelte-hb2n95.svelte-hb2n95{flex:0;padding:0.25rem;border-radius:24px;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;background-color:transparent;opacity:0.4}.elipsis-container.svelte-hb2n95.svelte-hb2n95:hover{color:var(--text-color)}.elipsis-container.active.svelte-hb2n95.svelte-hb2n95{color:var(--text-color)}.elipsis.svelte-hb2n95.svelte-hb2n95{width:24px}.menu.svelte-hb2n95.svelte-hb2n95{background:var(--onboard-white, var(--white));border:1px solid var(--onboard-gray-100, var(--gray-100));border-radius:8px;list-style-type:none;right:0.25rem;top:2.25rem;margin:0;padding:0;border:none;overflow:hidden;z-index:1}.menu.svelte-hb2n95 li.svelte-hb2n95{color:var(--onboard-primary-500, var(--primary-500));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));padding:12px 16px;background:var(--onboard-white, var(--white));transition:background-color 150ms ease-in-out;cursor:pointer}.menu.svelte-hb2n95 li.svelte-hb2n95:hover{background:var(--onboard-primary-200, var(--primary-200))}`);
}
function et(e, t, n) {
  const r = e.slice();
  return r[14] = t[n].address, r[15] = t[n].ens, r[16] = t[n].uns, r[17] = t[n].balance, r[19] = n, r;
}
function tt(e) {
  let t, n, r;
  return n = new je({ props: { size: 14 } }), {
    c() {
      t = h("div"), F(n.$$.fragment), _e(t, "right", "-5px"), _e(t, "bottom", "-5px"), p(t, "class", "drop-shadow absolute");
    },
    m(o, l) {
      M(o, t, l), O(n, t, null), r = !0;
    },
    i(o) {
      r || (y(n.$$.fragment, o), r = !0);
    },
    o(o) {
      A(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && S(t), Z(n);
    }
  };
}
function nt(e) {
  let t, n = at(
    /*balance*/
    e[17]
  ) + "", r, o;
  return {
    c() {
      t = h("div"), r = L(n), p(t, "class", "balance svelte-hb2n95");
    },
    m(l, a) {
      M(l, t, a), c(t, r);
    },
    p(l, a) {
      a & /*wallet*/
      1 && n !== (n = at(
        /*balance*/
        l[17]
      ) + "") && V(r, n);
    },
    i(l) {
      l && (o || Ae(() => {
        o = Ie(t, $e, {}), o.start();
      }));
    },
    o: G,
    d(l) {
      l && S(t);
    }
  };
}
function rt(e) {
  let t, n, r = (
    /*$_*/
    e[4]("accountCenter.addAccount", {
      default: (
        /*en*/
        e[2].accountCenter.addAccount
      )
    }) + ""
  ), o, l, a, s, i = (
    /*$_*/
    e[4]("accountCenter.disconnectWallet", {
      default: (
        /*en*/
        e[2].accountCenter.disconnectWallet
      )
    }) + ""
  ), f, d, v, k = (
    /*en*/
    e[2].accountCenter.copyAddress + ""
  ), g, b, m, u, _ = !/*primary*/
  (e[1] && /*i*/
  e[19] === 0) && ot(e);
  function w() {
    return (
      /*click_handler_5*/
      e[13](
        /*ens*/
        e[15],
        /*uns*/
        e[16],
        /*address*/
        e[14]
      )
    );
  }
  return {
    c() {
      t = h("ul"), n = h("li"), o = L(r), l = z(), _ && _.c(), a = z(), s = h("li"), f = L(i), d = z(), v = h("li"), g = L(k), p(n, "class", "svelte-hb2n95"), p(s, "class", "svelte-hb2n95"), p(v, "class", "svelte-hb2n95"), p(t, "class", "menu absolute svelte-hb2n95");
    },
    m(C, $) {
      M(C, t, $), c(t, n), c(n, o), c(t, l), _ && _.m(t, null), c(t, a), c(t, s), c(s, f), c(t, d), c(t, v), c(v, g), m || (u = [
        Y(n, "click", fe(
          /*click_handler_2*/
          e[10]
        )),
        Y(s, "click", fe(
          /*click_handler_4*/
          e[12]
        )),
        Y(v, "click", fe(w))
      ], m = !0);
    },
    p(C, $) {
      e = C, $ & /*$_, en*/
      20 && r !== (r = /*$_*/
      e[4]("accountCenter.addAccount", {
        default: (
          /*en*/
          e[2].accountCenter.addAccount
        )
      }) + "") && V(o, r), /*primary*/
      e[1] && /*i*/
      e[19] === 0 ? _ && (_.d(1), _ = null) : _ ? _.p(e, $) : (_ = ot(e), _.c(), _.m(t, a)), $ & /*$_, en*/
      20 && i !== (i = /*$_*/
      e[4]("accountCenter.disconnectWallet", {
        default: (
          /*en*/
          e[2].accountCenter.disconnectWallet
        )
      }) + "") && V(f, i), $ & /*en*/
      4 && k !== (k = /*en*/
      e[2].accountCenter.copyAddress + "") && V(g, k);
    },
    i(C) {
      C && (b || Ae(() => {
        b = Ie(t, $e, {}), b.start();
      }));
    },
    o: G,
    d(C) {
      C && S(t), _ && _.d(), m = !1, ke(u);
    }
  };
}
function ot(e) {
  let t, n = (
    /*$_*/
    e[4]("accountCenter.setPrimaryAccount", {
      default: (
        /*en*/
        e[2].accountCenter.setPrimaryAccount
      )
    }) + ""
  ), r, o, l;
  function a() {
    return (
      /*click_handler_3*/
      e[11](
        /*address*/
        e[14]
      )
    );
  }
  return {
    c() {
      t = h("li"), r = L(n), p(t, "class", "svelte-hb2n95");
    },
    m(s, i) {
      M(s, t, i), c(t, r), o || (l = Y(t, "click", fe(a)), o = !0);
    },
    p(s, i) {
      e = s, i & /*$_, en*/
      20 && n !== (n = /*$_*/
      e[4]("accountCenter.setPrimaryAccount", {
        default: (
          /*en*/
          e[2].accountCenter.setPrimaryAccount
        )
      }) + "") && V(r, n);
    },
    d(s) {
      s && S(t), o = !1, l();
    }
  };
}
function lt(e) {
  let t, n, r, o, l, a, s, i, f = (
    /*ens*/
    (e[15] ? de(
      /*ens*/
      e[15].name
    ) : (
      /*uns*/
      e[16] ? de(
        /*uns*/
        e[16].name
      ) : Ve(
        /*address*/
        e[14]
      )
    )) + ""
  ), d, v, k, g, b, m, u, _, w, C;
  o = new ge({
    props: {
      size: 32,
      padding: 4,
      background: "custom",
      color: "#EFF1FC",
      customBackgroundColor: (
        /*primary*/
        e[1] && /*i*/
        e[19] === 0 ? "rgba(24, 206, 102, 0.2)" : "rgba(235, 235, 237, 0.1)"
      ),
      border: (
        /*primary*/
        e[1] && /*i*/
        e[19] === 0 ? "green" : "gray"
      ),
      radius: 8,
      icon: (
        /*wallet*/
        e[0].icon
      )
    }
  });
  let $ = (
    /*primary*/
    e[1] && /*i*/
    e[19] === 0 && tt()
  ), I = (
    /*balance*/
    e[17] && nt(e)
  );
  function B() {
    return (
      /*click_handler*/
      e[8](
        /*address*/
        e[14]
      )
    );
  }
  function D() {
    return (
      /*click_handler_1*/
      e[9](
        /*address*/
        e[14]
      )
    );
  }
  let H = (
    /*showMenu*/
    e[3] === /*address*/
    e[14] && rt(e)
  );
  return {
    c() {
      t = h("div"), n = h("div"), r = h("div"), F(o.$$.fragment), l = z(), $ && $.c(), a = z(), s = h("div"), i = h("div"), d = L(f), v = z(), I && I.c(), k = z(), g = h("div"), b = h("div"), m = z(), H && H.c(), u = z(), p(r, "class", "flex items-center relative"), p(i, "class", "address-domain svelte-hb2n95"), p(s, "class", "account-details svelte-hb2n95"), p(b, "class", "elipsis pointer flex items-center justify-center relative svelte-hb2n95"), p(g, "class", "elipsis-container svelte-hb2n95"), ce(
        g,
        "active",
        /*showMenu*/
        e[3] === /*address*/
        e[14]
      ), p(n, "class", "container svelte-hb2n95"), ce(
        n,
        "primary",
        /*primary*/
        e[1] && /*i*/
        e[19] === 0
      ), p(t, "class", "relative");
    },
    m(q, W) {
      M(q, t, W), c(t, n), c(n, r), O(o, r, null), c(r, l), $ && $.m(r, null), c(n, a), c(n, s), c(s, i), c(i, d), c(s, v), I && I.m(s, null), c(n, k), c(n, g), c(g, b), b.innerHTML = Sn, c(t, m), H && H.m(t, null), c(t, u), _ = !0, w || (C = [
        Y(b, "click", fe(B)),
        Y(n, "click", D)
      ], w = !0);
    },
    p(q, W) {
      e = q;
      const U = {};
      W & /*primary*/
      2 && (U.customBackgroundColor = /*primary*/
      e[1] && /*i*/
      e[19] === 0 ? "rgba(24, 206, 102, 0.2)" : "rgba(235, 235, 237, 0.1)"), W & /*primary*/
      2 && (U.border = /*primary*/
      e[1] && /*i*/
      e[19] === 0 ? "green" : "gray"), W & /*wallet*/
      1 && (U.icon = /*wallet*/
      e[0].icon), o.$set(U), /*primary*/
      e[1] && /*i*/
      e[19] === 0 ? $ ? W & /*primary*/
      2 && y($, 1) : ($ = tt(), $.c(), y($, 1), $.m(r, null)) : $ && (ae(), A($, 1, 1, () => {
        $ = null;
      }), ie()), (!_ || W & /*wallet*/
      1) && f !== (f = /*ens*/
      (e[15] ? de(
        /*ens*/
        e[15].name
      ) : (
        /*uns*/
        e[16] ? de(
          /*uns*/
          e[16].name
        ) : Ve(
          /*address*/
          e[14]
        )
      )) + "") && V(d, f), /*balance*/
      e[17] ? I ? (I.p(e, W), W & /*wallet*/
      1 && y(I, 1)) : (I = nt(e), I.c(), y(I, 1), I.m(s, null)) : I && (I.d(1), I = null), (!_ || W & /*showMenu, wallet*/
      9) && ce(
        g,
        "active",
        /*showMenu*/
        e[3] === /*address*/
        e[14]
      ), (!_ || W & /*primary*/
      2) && ce(
        n,
        "primary",
        /*primary*/
        e[1] && /*i*/
        e[19] === 0
      ), /*showMenu*/
      e[3] === /*address*/
      e[14] ? H ? (H.p(e, W), W & /*showMenu, wallet*/
      9 && y(H, 1)) : (H = rt(e), H.c(), y(H, 1), H.m(t, u)) : H && (H.d(1), H = null);
    },
    i(q) {
      _ || (y(o.$$.fragment, q), y($), y(I), y(H), _ = !0);
    },
    o(q) {
      A(o.$$.fragment, q), A($), _ = !1;
    },
    d(q) {
      q && S(t), Z(o), $ && $.d(), I && I.d(), H && H.d(), w = !1, ke(C);
    }
  };
}
function Pn(e) {
  let t, n, r = (
    /*wallet*/
    e[0].accounts
  ), o = [];
  for (let a = 0; a < r.length; a += 1)
    o[a] = lt(et(e, r, a));
  const l = (a) => A(o[a], 1, 1, () => {
    o[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < o.length; a += 1)
        o[a].c();
      t = ue();
    },
    m(a, s) {
      for (let i = 0; i < o.length; i += 1)
        o[i] && o[i].m(a, s);
      M(a, t, s), n = !0;
    },
    p(a, [s]) {
      if (s & /*copyWalletAddress, wallet, changeText, en, showMenu, disconnect, $_, setPrimaryWallet, primary, selectAnotherAccount, elipsisIcon, formatBalance, shortenDomain, shortenAddress*/
      127) {
        r = /*wallet*/
        a[0].accounts;
        let i;
        for (i = 0; i < r.length; i += 1) {
          const f = et(a, r, i);
          o[i] ? (o[i].p(f, s), y(o[i], 1)) : (o[i] = lt(f), o[i].c(), y(o[i], 1), o[i].m(t.parentNode, t));
        }
        for (ae(), i = r.length; i < o.length; i += 1)
          l(i);
        ie();
      }
    },
    i(a) {
      if (!n) {
        for (let s = 0; s < r.length; s += 1)
          y(o[s]);
        n = !0;
      }
    },
    o(a) {
      o = o.filter(Boolean);
      for (let s = 0; s < o.length; s += 1)
        A(o[s]);
      n = !1;
    },
    d(a) {
      It(o, a), a && S(t);
    }
  };
}
function at(e) {
  const [t] = Object.keys(e);
  return `${e[t].length > 7 ? e[t].slice(0, 7) : e[t]} ${t}`;
}
function Ln(e, t, n) {
  let r;
  ee(e, qe, (u) => n(4, r = u));
  let { wallet: o } = t, { primary: l } = t;
  function a() {
    n(3, s = "");
  }
  let s = "";
  async function i(u) {
    try {
      await dn(u.provider);
    } catch (_) {
      const { code: w } = _;
      (w === Fe.UNSUPPORTED_METHOD || w === Fe.DOES_NOT_EXIST) && un.next({
        inProgress: !1,
        actionRequired: u.label
      });
    }
  }
  function f() {
    n(2, P.accountCenter.copyAddress = "Copied Successfully", P), setTimeout(a, 500), setTimeout(
      () => {
        n(2, P.accountCenter.copyAddress = "Copy Wallet address", P);
      },
      700
    );
  }
  const d = (u) => n(3, s = s === u ? "" : u), v = (u) => Oe(o, u), k = () => {
    n(3, s = ""), i(o);
  }, g = (u) => {
    n(3, s = ""), Oe(o, u);
  }, b = () => {
    n(3, s = ""), Mt({ label: o.label });
  }, m = (u, _, w) => {
    fn(u ? u.name : _ ? _.name : w).then(() => {
      f();
    });
  };
  return e.$$set = (u) => {
    "wallet" in u && n(0, o = u.wallet), "primary" in u && n(1, l = u.primary);
  }, [
    o,
    l,
    P,
    s,
    r,
    i,
    f,
    a,
    d,
    v,
    k,
    g,
    b,
    m
  ];
}
class qn extends pe {
  constructor(t) {
    super(), ve(this, t, Ln, Pn, me, { wallet: 0, primary: 1, hideMenu: 7 }, In);
  }
  get hideMenu() {
    return this.$$.ctx[7];
  }
}
var jn = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
  </svg>
`, Vn = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor"/>
  </svg>
`, Hn = '<svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="grey"/></svg>', jt = `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99998 17.3125C5.05553 16.8264 3.45831 15.6979 2.20831 13.9271C0.958313 12.1562 0.333313 10.2153 0.333313 8.10417V3.14583L6.99998 0.645833L13.6666 3.14583V8.10417C13.6666 10.2153 13.0416 12.1562 11.7916 13.9271C10.5416 15.6979 8.94442 16.8264 6.99998 17.3125ZM5.12498 12.3333H8.87498C9.05553 12.3333 9.20484 12.2743 9.3229 12.1562C9.44095 12.0382 9.49998 11.8889 9.49998 11.7083V8.79167C9.49998 8.61111 9.44095 8.46181 9.3229 8.34375C9.20484 8.22569 9.05553 8.16667 8.87498 8.16667H8.66665V7.33333C8.66665 6.875 8.50345 6.48264 8.17706 6.15625C7.85067 5.82986 7.45831 5.66667 6.99998 5.66667C6.54165 5.66667 6.14928 5.82986 5.8229 6.15625C5.49651 6.48264 5.33331 6.875 5.33331 7.33333V8.16667H5.12498C4.94442 8.16667 4.79512 8.22569 4.67706 8.34375C4.55901 8.46181 4.49998 8.61111 4.49998 8.79167V11.7083C4.49998 11.8889 4.55901 12.0382 4.67706 12.1562C4.79512 12.2743 4.94442 12.3333 5.12498 12.3333ZM5.95831 8.16667V7.33333C5.95831 7.05556 6.06248 6.82292 6.27081 6.63542C6.47915 6.44792 6.7222 6.35417 6.99998 6.35417C7.27776 6.35417 7.52081 6.44792 7.72915 6.63542C7.93748 6.82292 8.04165 7.05556 8.04165 7.33333V8.16667H5.95831Z" fill="#929BED"/>
</svg>
`;
function Bn(e) {
  he(e, "svelte-1ubxcdp", ".content.svelte-1ubxcdp{padding:1rem;width:300px;font-family:var(--onboard-font-family-normal, var(--font-family-normal));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:24px}.icon-container.svelte-1ubxcdp{width:3rem;height:3rem;background:var(--onboard-warning-100, var(--warning-100));border-radius:24px;padding:12px;color:var(--onboard-warning-500, var(--warning-500))}h4.svelte-1ubxcdp{margin:1.5rem 0 0.5rem 0;font-weight:600}p.svelte-1ubxcdp{margin:0;font-weight:400}button.svelte-1ubxcdp{margin-top:1.5rem;width:50%;font-weight:600}.right.svelte-1ubxcdp{margin-left:0.5rem;width:60%}");
}
function Dn(e) {
  let t, n, r, o, l = (
    /*$_*/
    e[2]("modals.confirmDisconnectAll.heading", {
      default: P.modals.confirmDisconnectAll.heading
    }) + ""
  ), a, s, i, f = (
    /*$_*/
    e[2]("modals.confirmDisconnectAll.description") + ""
  ), d, v, k, g, b = (
    /*$_*/
    e[2]("modals.confirmDisconnectAll.cancel", {
      default: P.modals.confirmDisconnectAll.cancel
    }) + ""
  ), m, u, _, w = (
    /*$_*/
    e[2]("modals.confirmDisconnectAll.confirm", {
      default: P.modals.confirmDisconnectAll.confirm
    }) + ""
  ), C, $, I;
  return {
    c() {
      t = h("div"), n = h("div"), r = z(), o = h("h4"), a = L(l), s = z(), i = h("p"), d = L(f), v = z(), k = h("div"), g = h("button"), m = L(b), u = z(), _ = h("button"), C = L(w), p(n, "class", "icon-container flex justify-center items-center svelte-1ubxcdp"), p(o, "class", "svelte-1ubxcdp"), p(i, "class", "svelte-1ubxcdp"), p(g, "class", "button-neutral-solid-b rounded svelte-1ubxcdp"), p(_, "class", "right button-neutral-solid rounded svelte-1ubxcdp"), p(k, "class", "flex justify-between items-center w-100"), p(t, "class", "content svelte-1ubxcdp");
    },
    m(B, D) {
      M(B, t, D), c(t, n), n.innerHTML = Se, c(t, r), c(t, o), c(o, a), c(t, s), c(t, i), c(i, d), c(t, v), c(t, k), c(k, g), c(g, m), c(k, u), c(k, _), c(_, C), $ || (I = [
        Y(g, "click", function() {
          we(
            /*onClose*/
            e[1]
          ) && e[1].apply(this, arguments);
        }),
        Y(_, "click", function() {
          we(
            /*onConfirm*/
            e[0]
          ) && e[0].apply(this, arguments);
        })
      ], $ = !0);
    },
    p(B, D) {
      e = B, D & /*$_*/
      4 && l !== (l = /*$_*/
      e[2]("modals.confirmDisconnectAll.heading", {
        default: P.modals.confirmDisconnectAll.heading
      }) + "") && V(a, l), D & /*$_*/
      4 && f !== (f = /*$_*/
      e[2]("modals.confirmDisconnectAll.description") + "") && V(d, f), D & /*$_*/
      4 && b !== (b = /*$_*/
      e[2]("modals.confirmDisconnectAll.cancel", {
        default: P.modals.confirmDisconnectAll.cancel
      }) + "") && V(m, b), D & /*$_*/
      4 && w !== (w = /*$_*/
      e[2]("modals.confirmDisconnectAll.confirm", {
        default: P.modals.confirmDisconnectAll.confirm
      }) + "") && V(C, w);
    },
    d(B) {
      B && S(t), $ = !1, ke(I);
    }
  };
}
function Wn(e) {
  let t, n;
  return t = new Pt({
    props: {
      close: (
        /*onClose*/
        e[1]
      ),
      $$slots: { default: [Dn] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      F(t.$$.fragment);
    },
    m(r, o) {
      O(t, r, o), n = !0;
    },
    p(r, [o]) {
      const l = {};
      o & /*onClose*/
      2 && (l.close = /*onClose*/
      r[1]), o & /*$$scope, onConfirm, $_, onClose*/
      15 && (l.$$scope = { dirty: o, ctx: r }), t.$set(l);
    },
    i(r) {
      n || (y(t.$$.fragment, r), n = !0);
    },
    o(r) {
      A(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Z(t, r);
    }
  };
}
function Nn(e, t, n) {
  let r;
  ee(e, qe, (a) => n(2, r = a));
  let { onConfirm: o } = t, { onClose: l } = t;
  return e.$$set = (a) => {
    "onConfirm" in a && n(0, o = a.onConfirm), "onClose" in a && n(1, l = a.onClose);
  }, [o, l, r];
}
class En extends pe {
  constructor(t) {
    super(), ve(this, t, Nn, Wn, me, { onConfirm: 0, onClose: 1 }, Bn);
  }
}
function Fn(e) {
  he(e, "svelte-ruodf3", ".content.svelte-ruodf3{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--action-color:var(--w3o-action-color, var(--primary-500));font-size:1rem;line-height:1.5rem;display:flex;flex-flow:column;gap:1.5rem;padding:1rem;max-width:320px;background:var(--background-color);color:var(--text-color)}.icon-container.svelte-ruodf3{position:relative;overflow:hidden;width:3rem;height:3rem;border-radius:24px;padding:0.75rem;background:none}.icon-container.svelte-ruodf3::before{content:'';position:absolute;height:100%;width:100%;opacity:0.2;background:var(--action-color)}.text-container.svelte-ruodf3{display:flex;flex-flow:column;gap:0.5rem;padding:0 0.5rem}.actions-container.svelte-ruodf3{display:flex;flex-flow:row nowrap;gap:1rem}.heading.svelte-ruodf3{font-weight:600}button.svelte-ruodf3{font-weight:600}button.primary.svelte-ruodf3{background:var(--action-color)}");
}
function On(e) {
  let t, n, r, o, l, a = (
    /*$_*/
    e[3]("modals.confirmTransactionProtection.heading", {
      default: P.modals.confirmTransactionProtection.heading
    }) + ""
  ), s, i, f, d = (
    /*$_*/
    e[3]("modals.confirmTransactionProtection.description") + ""
  ), v, k, g, b = (
    /*$_*/
    e[3]("modals.confirmTransactionProtection.link", {
      default: P.modals.confirmTransactionProtection.link
    }) + ""
  ), m, u, _, w, C = (
    /*$_*/
    e[3]("modals.confirmTransactionProtection.dismiss", {
      default: P.modals.confirmTransactionProtection.dismiss
    }) + ""
  ), $, I, B, D = (
    /*$_*/
    e[3]("modals.confirmTransactionProtection.enable", {
      default: P.modals.confirmTransactionProtection.enable
    }) + ""
  ), H, q, W;
  return {
    c() {
      t = h("div"), n = h("div"), r = z(), o = h("div"), l = h("div"), s = L(a), i = z(), f = h("div"), v = L(d), k = z(), g = h("a"), m = L(b), u = z(), _ = h("div"), w = h("button"), $ = L(C), I = z(), B = h("button"), H = L(D), p(n, "class", "icon-container flex justify-center items-center svelte-ruodf3"), p(l, "class", "heading svelte-ruodf3"), p(
        g,
        "href",
        /*infoLink*/
        e[2]
      ), p(g, "target", "_blank"), p(g, "rel", "noreferrer noopener"), p(g, "class", "no-link"), p(o, "class", "text-container svelte-ruodf3"), p(w, "class", "button-neutral-solid-b svelte-ruodf3"), p(B, "class", "button-neutral-solid rounded primary svelte-ruodf3"), p(_, "class", "actions-container svelte-ruodf3"), p(t, "class", "content svelte-ruodf3");
    },
    m(U, X) {
      M(U, t, X), c(t, n), n.innerHTML = jt, c(t, r), c(t, o), c(o, l), c(l, s), c(o, i), c(o, f), c(f, v), c(o, k), c(o, g), c(g, m), c(t, u), c(t, _), c(_, w), c(w, $), c(_, I), c(_, B), c(B, H), q || (W = [
        Y(w, "click", function() {
          we(
            /*onDismiss*/
            e[1]
          ) && e[1].apply(this, arguments);
        }),
        Y(B, "click", function() {
          we(
            /*onEnable*/
            e[0]
          ) && e[0].apply(this, arguments);
        })
      ], q = !0);
    },
    p(U, X) {
      e = U, X & /*$_*/
      8 && a !== (a = /*$_*/
      e[3]("modals.confirmTransactionProtection.heading", {
        default: P.modals.confirmTransactionProtection.heading
      }) + "") && V(s, a), X & /*$_*/
      8 && d !== (d = /*$_*/
      e[3]("modals.confirmTransactionProtection.description") + "") && V(v, d), X & /*$_*/
      8 && b !== (b = /*$_*/
      e[3]("modals.confirmTransactionProtection.link", {
        default: P.modals.confirmTransactionProtection.link
      }) + "") && V(m, b), X & /*infoLink*/
      4 && p(
        g,
        "href",
        /*infoLink*/
        e[2]
      ), X & /*$_*/
      8 && C !== (C = /*$_*/
      e[3]("modals.confirmTransactionProtection.dismiss", {
        default: P.modals.confirmTransactionProtection.dismiss
      }) + "") && V($, C), X & /*$_*/
      8 && D !== (D = /*$_*/
      e[3]("modals.confirmTransactionProtection.enable", {
        default: P.modals.confirmTransactionProtection.enable
      }) + "") && V(H, D);
    },
    d(U) {
      U && S(t), q = !1, ke(W);
    }
  };
}
function Zn(e) {
  let t, n;
  return t = new Pt({
    props: {
      close: (
        /*onDismiss*/
        e[1]
      ),
      $$slots: { default: [On] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      F(t.$$.fragment);
    },
    m(r, o) {
      O(t, r, o), n = !0;
    },
    p(r, [o]) {
      const l = {};
      o & /*onDismiss*/
      2 && (l.close = /*onDismiss*/
      r[1]), o & /*$$scope, onEnable, $_, onDismiss, infoLink*/
      31 && (l.$$scope = { dirty: o, ctx: r }), t.$set(l);
    },
    i(r) {
      n || (y(t.$$.fragment, r), n = !0);
    },
    o(r) {
      A(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Z(t, r);
    }
  };
}
function Gn(e, t, n) {
  let r;
  ee(e, qe, (s) => n(3, r = s));
  let { onEnable: o } = t, { onDismiss: l } = t, { infoLink: a } = t;
  return e.$$set = (s) => {
    "onEnable" in s && n(0, o = s.onEnable), "onDismiss" in s && n(1, l = s.onDismiss), "infoLink" in s && n(2, a = s.infoLink);
  }, [o, l, a, r];
}
class Rn extends pe {
  constructor(t) {
    super(), ve(this, t, Gn, Zn, me, { onEnable: 0, onDismiss: 1, infoLink: 2 }, Fn);
  }
}
function Un(e) {
  he(e, "svelte-b848yl", ".secondary-token-container.svelte-b848yl.svelte-b848yl{width:100%}table.svelte-b848yl.svelte-b848yl{width:100%}tr.svelte-b848yl.svelte-b848yl{padding:0.25rem 1rem;line-height:1rem;border-bottom:1px solid var(--border-color);display:flex;flex-direction:row;align-items:flex-start;gap:1rem}thead.svelte-b848yl .secondary-token-table-header.svelte-b848yl{text-align:inherit;font-size:var(--onboard-font-size-7, var(--font-size-7))}.token-icon.svelte-b848yl.svelte-b848yl{width:30%;font-weight:700;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}.icon-name-container.svelte-b848yl.svelte-b848yl{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:0.5rem}.icon.svelte-b848yl.svelte-b848yl{width:1rem;height:1rem}img.svelte-b848yl.svelte-b848yl{height:100%;width:100%}.token-balance.svelte-b848yl.svelte-b848yl{width:70%;font-weight:200;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}");
}
function it(e, t, n) {
  const r = e.slice();
  return r[1] = t[n], r;
}
function st(e) {
  let t, n, r, o, l = (
    /*token*/
    e[1].name.toUpperCase() + ""
  ), a, s, i, f = (
    /*token*/
    (e[1].balance.length > 7 ? (
      /*token*/
      e[1].balance.slice(0, 7)
    ) : (
      /*token*/
      e[1].balance
    )) + ""
  ), d, v;
  function k(m, u) {
    return (
      /*token*/
      m[1].icon ? Yn : Xn
    );
  }
  let g = k(e), b = g(e);
  return {
    c() {
      t = h("tr"), n = h("td"), r = h("div"), b.c(), o = z(), a = L(l), s = z(), i = h("td"), d = L(f), v = z(), p(r, "class", "icon-name-container svelte-b848yl"), p(n, "class", "token-icon svelte-b848yl"), p(i, "class", "token-balance svelte-b848yl"), p(t, "class", "token-row svelte-b848yl");
    },
    m(m, u) {
      M(m, t, u), c(t, n), c(n, r), b.m(r, null), c(r, o), c(r, a), c(t, s), c(t, i), c(i, d), c(t, v);
    },
    p(m, u) {
      g === (g = k(m)) && b ? b.p(m, u) : (b.d(1), b = g(m), b && (b.c(), b.m(r, o))), u & /*secondaryTokens*/
      1 && l !== (l = /*token*/
      m[1].name.toUpperCase() + "") && V(a, l), u & /*secondaryTokens*/
      1 && f !== (f = /*token*/
      (m[1].balance.length > 7 ? (
        /*token*/
        m[1].balance.slice(0, 7)
      ) : (
        /*token*/
        m[1].balance
      )) + "") && V(d, f);
    },
    d(m) {
      m && S(t), b.d();
    }
  };
}
function Xn(e) {
  let t;
  return {
    c() {
      t = h("div"), p(t, "class", "icon svelte-b848yl");
    },
    m(n, r) {
      M(n, t, r);
    },
    p: G,
    d(n) {
      n && S(t);
    }
  };
}
function Yn(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: er,
    then: Kn,
    catch: Jn,
    value: 4
  };
  return Re(n = /*token*/
  e[1].icon, r), {
    c() {
      t = ue(), r.block.c();
    },
    m(o, l) {
      M(o, t, l), r.block.m(o, r.anchor = l), r.mount = () => t.parentNode, r.anchor = t;
    },
    p(o, l) {
      e = o, r.ctx = e, l & /*secondaryTokens*/
      1 && n !== (n = /*token*/
      e[1].icon) && Re(n, r) || vn(r, e, l);
    },
    d(o) {
      o && S(t), r.block.d(o), r.token = null, r = null;
    }
  };
}
function Jn(e) {
  return {
    c: G,
    m: G,
    p: G,
    i: G,
    o: G,
    d: G
  };
}
function Kn(e) {
  let t, n, r;
  function o(s, i) {
    return i & /*secondaryTokens*/
    1 && (n = null), n == null && (n = !!mn(
      /*iconLoaded*/
      s[4]
    )), n ? xn : Qn;
  }
  let l = o(e, -1), a = l(e);
  return {
    c() {
      t = h("div"), a.c(), p(t, "class", "icon svelte-b848yl");
    },
    m(s, i) {
      M(s, t, i), a.m(t, null);
    },
    p(s, i) {
      l === (l = o(s, i)) && a ? a.p(s, i) : (a.d(1), a = l(s), a && (a.c(), a.m(t, null)));
    },
    i(s) {
      s && (r || Ae(() => {
        r = Ie(t, $e, {}), r.start();
      }));
    },
    o: G,
    d(s) {
      s && S(t), a.d();
    }
  };
}
function Qn(e) {
  let t, n;
  return {
    c() {
      t = h("img"), Ue(t.src, n = /*iconLoaded*/
      e[4]) || p(t, "src", n), p(t, "alt", "logo"), p(t, "class", "svelte-b848yl");
    },
    m(r, o) {
      M(r, t, o);
    },
    p(r, o) {
      o & /*secondaryTokens*/
      1 && !Ue(t.src, n = /*iconLoaded*/
      r[4]) && p(t, "src", n);
    },
    d(r) {
      r && S(t);
    }
  };
}
function xn(e) {
  let t, n = (
    /*iconLoaded*/
    e[4] + ""
  ), r;
  return {
    c() {
      t = new hn(!1), r = ue(), t.a = r;
    },
    m(o, l) {
      t.m(n, o, l), M(o, r, l);
    },
    p(o, l) {
      l & /*secondaryTokens*/
      1 && n !== (n = /*iconLoaded*/
      o[4] + "") && t.p(n);
    },
    d(o) {
      o && S(r), o && t.d();
    }
  };
}
function er(e) {
  return {
    c: G,
    m: G,
    p: G,
    i: G,
    o: G,
    d: G
  };
}
function ct(e) {
  let t, n = (
    /*token*/
    e[1] && /*token*/
    e[1].name && /*token*/
    e[1].balance && st(e)
  );
  return {
    c() {
      n && n.c(), t = ue();
    },
    m(r, o) {
      n && n.m(r, o), M(r, t, o);
    },
    p(r, o) {
      /*token*/
      r[1] && /*token*/
      r[1].name && /*token*/
      r[1].balance ? n ? n.p(r, o) : (n = st(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(r) {
      n && n.d(r), r && S(t);
    }
  };
}
function tr(e) {
  let t, n, r, o, l, a = (
    /*secondaryTokens*/
    e[0]
  ), s = [];
  for (let i = 0; i < a.length; i += 1)
    s[i] = ct(it(e, a, i));
  return {
    c() {
      t = h("div"), n = h("table"), r = h("thead"), r.innerHTML = '<tr class="svelte-b848yl"><th colspan="3" class="secondary-token-table-header svelte-b848yl">Token Balances:</th></tr>', o = z(), l = h("tbody");
      for (let i = 0; i < s.length; i += 1)
        s[i].c();
      p(r, "class", "svelte-b848yl"), p(n, "class", "balance-change-table table-radius svelte-b848yl"), p(t, "class", "secondary-token-container svelte-b848yl");
    },
    m(i, f) {
      M(i, t, f), c(t, n), c(n, r), c(n, o), c(n, l);
      for (let d = 0; d < s.length; d += 1)
        s[d] && s[d].m(l, null);
    },
    p(i, [f]) {
      if (f & /*secondaryTokens, isSVG*/
      1) {
        a = /*secondaryTokens*/
        i[0];
        let d;
        for (d = 0; d < a.length; d += 1) {
          const v = it(i, a, d);
          s[d] ? s[d].p(v, f) : (s[d] = ct(v), s[d].c(), s[d].m(l, null));
        }
        for (; d < s.length; d += 1)
          s[d].d(1);
        s.length = a.length;
      }
    },
    i: G,
    o: G,
    d(i) {
      i && S(t), It(s, i);
    }
  };
}
function nr(e, t, n) {
  let { secondaryTokens: r } = t;
  return e.$$set = (o) => {
    "secondaryTokens" in o && n(0, r = o.secondaryTokens);
  }, [r];
}
class rr extends pe {
  constructor(t) {
    super(), ve(this, t, nr, tr, me, { secondaryTokens: 0 }, Un);
  }
}
function or(e) {
  he(e, "svelte-177u10y", `.outer-container.svelte-177u10y{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--border-color:var(--w3o-border-color, var(--gray-500));--action-color:var(--w3o-action-color, var(--primary-500));--border-radius:var(--w3o-border-radius, 1rem);--account-center-network-selector-color:var(--text-color, white);width:100%;overflow:hidden;pointer-events:auto;border:1px solid transparent;background:var(
      --account-center-maximized-upper-background,
      var(--background-color)
    );border-color:var(--border-color);border-radius:var(--account-center-border-radius, var(--border-radius))}.wallets-section.svelte-177u10y{width:100%;color:var(--text-color, var(--gray-100));background:var(--background-color, var(--gray-700))}.p5.svelte-177u10y{padding:var(--onboard-spacing-5, var(--spacing-5))}.wallets.svelte-177u10y{width:100%;margin-bottom:0.5rem}.actions.svelte-177u10y{color:var(
      --account-center-maximized-upper-action-color,
      var(--action-color)
    );padding-left:2px}.action-container.svelte-177u10y{padding:0.25rem 12px 0.25rem 0.5rem;border-radius:0.5rem;transition:background-color 150ms ease-in-out}.action-container.svelte-177u10y:hover{background-color:var(
      --account-center-maximized-upper-action-background-hover,
      rgba(146, 155, 237, 0.2)
    )}.plus-icon.svelte-177u10y{width:20px}.arrow-forward.svelte-177u10y{width:20px}.mt.svelte-177u10y{margin-top:0.25rem}.action-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));margin-left:0.5rem}.background-blue.svelte-177u10y{background:var(
      --account-center-maximized-network-section-background,
      var(--onboard-primary-100, var(--primary-100))
    )}.background-gray.svelte-177u10y{background:var(--onboard-gray-100, var(--gray-100))}.background-yellow.svelte-177u10y{background:var(--onboard-warning-100, var(--warning-100))}.network-container.svelte-177u10y{background:var(--background-color);border-top:1px solid var(--border-color);width:100%;display:flex;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-radius:var(
      --account-center-border-radius,
      var(--onboard-border-radius-3, var(--border-radius-3))
    );color:var(
      --account-center-maximized-network-text-color,
      var(--account-center-maximized-network-section, inherit)
    )}.network-section.svelte-177u10y{flex-direction:row;align-items:flex-start;padding:0px;gap:16px}.network-selector-container.svelte-177u10y{width:100%}.protect.svelte-177u10y{flex-direction:row;padding:0.25rem 0.375rem 0;gap:0.375rem;width:100%}.shield.svelte-177u10y{width:20px;height:20px;display:flex;justify-content:center}.protect-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(
      --account-center-maximized-upper-action-color,
      var(--action-color)
    );line-height:1.75rem;display:flex;align-items:center}.network-selector-container.svelte-177u10y{margin-left:1rem;width:100%}.network-selector-label.svelte-177u10y{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3))}.app-info-container.svelte-177u10y{color:var(--text-color, var(--gray-700));background:var(
      --account-center-maximized-info-section-background-color,
      var(
        --account-center-maximized-info-section,
        var(--background-color, #fff)
      )
    );border-top:1px solid var(--border-color);border-radius:var(--account-center-border-radius, inherit);display:flex;flex-direction:column;align-items:flex-start;padding:0px}.app-info-header.svelte-177u10y{width:100%;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-bottom:1px solid var(--border-color)}.app-icon-name.svelte-177u10y{display:flex;align-items:center;flex-direction:row;gap:0.75rem}.app-name.svelte-177u10y{font-size:1rem;font-weight:600;line-height:1rem;margin-bottom:0.25rem;color:var(--account-center-maximized-app-name-color, inherit)}.app-description.svelte-177u10y{margin:0;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);display:flex;flex-direction:row;align-items:flex-start;padding:0px 0.25rem;gap:1rem}.app-info.svelte-177u10y{width:100%;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);border-bottom:1px solid var(--border-color);display:flex;flex-direction:column;align-items:flex-start;padding:0.5rem 1rem;gap:0.25rem}.app-info-heading.svelte-177u10y{font-weight:700;color:var(--account-center-maximized-app-info-color, inherit)}.w100.svelte-177u10y{width:100%}a.svelte-177u10y{font-weight:700}.powered-by-container.svelte-177u10y{color:var(--text-color);padding:0.75rem}`);
}
function dt(e, t, n) {
  const r = e.slice();
  return r[29] = t[n], r[31] = n, r;
}
function ut(e) {
  let t, n;
  return t = new En({
    props: {
      onClose: (
        /*func*/
        e[22]
      ),
      onConfirm: (
        /*disconnectAllWallets*/
        e[13]
      )
    }
  }), {
    c() {
      F(t.$$.fragment);
    },
    m(r, o) {
      O(t, r, o), n = !0;
    },
    p(r, o) {
      const l = {};
      o[0] & /*disconnectConfirmModal*/
      4 && (l.onClose = /*func*/
      r[22]), t.$set(l);
    },
    i(r) {
      n || (y(t.$$.fragment, r), n = !0);
    },
    o(r) {
      A(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Z(t, r);
    }
  };
}
function ft(e) {
  let t, n;
  return t = new Rn({
    props: {
      onDismiss: (
        /*func_1*/
        e[23]
      ),
      onEnable: (
        /*func_2*/
        e[24]
      ),
      infoLink: (
        /*$accountCenter$*/
        e[9].transactionProtectionInfoLink || De
      )
    }
  }), {
    c() {
      F(t.$$.fragment);
    },
    m(r, o) {
      O(t, r, o), n = !0;
    },
    p(r, o) {
      const l = {};
      o[0] & /*enableTransactionProtection*/
      16 && (l.onDismiss = /*func_1*/
      r[23]), o[0] & /*$accountCenter$*/
      512 && (l.infoLink = /*$accountCenter$*/
      r[9].transactionProtectionInfoLink || De), t.$set(l);
    },
    i(r) {
      n || (y(t.$$.fragment, r), n = !0);
    },
    o(r) {
      A(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Z(t, r);
    }
  };
}
function pt(e) {
  let t, n, r, o, l = [], a = /* @__PURE__ */ new Map(), s, i, f, d, v, k, g, b, m, u, _, w = (
    /*$_*/
    e[10]("accountCenter.currentNetwork", { default: P.accountCenter.currentNetwork }) + ""
  ), C, $, I, B, D, H, q, W, U, X, Q, ne, re, T, N, x = (
    /*$wallets$*/
    e[1]
  );
  const Te = (E) => (
    /*wallet*/
    E[29].label
  );
  for (let E = 0; E < x.length; E += 1) {
    let j = dt(e, x, E), le = Te(j);
    a.set(le, l[E] = vt(le, j));
  }
  let se = (
    /*device*/
    e[17].type === "desktop" && lr(e)
  );
  g = new ge({
    props: {
      size: 32,
      padding: 4,
      background: "custom",
      color: /*validAppChain*/ e[5] ? /*validAppChain*/ e[5].icon ? void 0 : "#EFF1FC" : "#FFAF00",
      customBackgroundColor: (
        /*validAppChain*/
        e[5] ? (
          /*validAppChain*/
          e[5].color || /*defaultChainStyles*/
          e[7] && /*defaultChainStyles*/
          e[7].color || be.color
        ) : "#FFE7B3"
      ),
      border: "transparent",
      radius: 8,
      icon: (
        /*validAppChain*/
        e[5] ? (
          /*validAppChain*/
          e[5].icon || /*defaultChainStyles*/
          e[7] && /*defaultChainStyles*/
          e[7].icon || be.icon
        ) : Se
      )
    }
  });
  let R = (
    /*validAppChain*/
    e[5] && mt()
  );
  B = new qt({
    props: {
      chains: (
        /*appChains*/
        e[14]
      ),
      colorVar: "--account-center-maximized-network-selector-color",
      bold: !0,
      selectIcon: Hn,
      parentCSSId: "maximized_ac"
    }
  });
  let oe = !/*$accountCenter$*/
  e[9].hideTransactionProtectionBtn && /*primaryWalletOnMainnet*/
  (e[6] || /*validAppChain*/
  e[5] && /*validAppChain*/
  e[5].protectedRpcUrl) && ht(e), J = (
    /*$appMetadata$*/
    e[11] && bt(e)
  ), K = (
    /*secondaryTokens*/
    e[8] && /*secondaryTokens*/
    e[8].length && kt(e)
  );
  return {
    c() {
      t = h("div"), n = h("div"), r = h("div"), o = h("div");
      for (let E = 0; E < l.length; E += 1)
        l[E].c();
      s = z(), i = h("div"), se && se.c(), f = z(), d = h("div"), v = h("div"), k = h("div"), F(g.$$.fragment), b = z(), R && R.c(), m = z(), u = h("div"), _ = h("div"), C = L(w), $ = z(), I = h("div"), F(B.$$.fragment), D = z(), oe && oe.c(), H = z(), q = h("div"), J && J.c(), W = z(), K && K.c(), U = z(), X = h("div"), Q = h("a"), p(o, "class", "wallets svelte-177u10y"), p(i, "class", "actions flex flex-column items-start svelte-177u10y"), p(r, "class", "p5 svelte-177u10y"), p(k, "class", "relative flex"), p(_, "class", "network-selector-label svelte-177u10y"), p(I, "class", "flex items-center"), _e(I, "width", "100%"), p(u, "class", "network-selector-container svelte-177u10y"), p(v, "class", "network-section flex items-center svelte-177u10y"), p(d, "class", "network-container svelte-177u10y"), ce(
        d,
        "background-blue",
        /*validAppChain*/
        e[5] && /*validAppChain*/
        e[5].icon || /*defaultChainStyles*/
        e[7]
      ), ce(d, "background-yellow", !/*validAppChain*/
      e[5]), ce(
        d,
        "background-gray",
        /*validAppChain*/
        e[5] && !/*defaultChainStyles*/
        e[7]
      ), p(Q, "href", "https://blocknative.com"), p(Q, "target", "_blank"), p(Q, "rel", "noopener noreferrer"), p(Q, "class", "flex justify-center items-center powered-by-container svelte-177u10y"), p(X, "class", "w100 svelte-177u10y"), p(q, "class", "app-info-container svelte-177u10y"), p(n, "class", "wallets-section svelte-177u10y"), p(t, "class", "outer-container svelte-177u10y");
    },
    m(E, j) {
      M(E, t, j), c(t, n), c(n, r), c(r, o);
      for (let le = 0; le < l.length; le += 1)
        l[le] && l[le].m(o, null);
      c(r, s), c(r, i), se && se.m(i, null), c(n, f), c(n, d), c(d, v), c(v, k), O(g, k, null), c(k, b), R && R.m(k, null), c(v, m), c(v, u), c(u, _), c(_, C), c(u, $), c(u, I), O(B, I, null), c(d, D), oe && oe.m(d, null), c(n, H), c(n, q), J && J.m(q, null), c(q, W), K && K.m(q, null), c(q, U), c(q, X), c(X, Q), Q.innerHTML = Kt, re = !0, T || (N = [
        Y(
          I,
          "click",
          /*click_handler*/
          e[21]
        ),
        Y(t, "click", fe(function() {
          we(
            /*hideWalletRowMenu*/
            e[3]
          ) && e[3].apply(this, arguments);
        }))
      ], T = !0);
    },
    p(E, j) {
      e = E, j[0] & /*$wallets$, hideWalletRowMenu*/
      10 && (x = /*$wallets$*/
      e[1], ae(), l = At(l, j, Te, 1, e, x, a, o, Qt, vt, null, dt), ie()), /*device*/
      e[17].type === "desktop" && se.p(e, j);
      const le = {};
      j[0] & /*validAppChain*/
      32 && (le.color = /*validAppChain*/
      e[5] ? /*validAppChain*/ e[5].icon ? void 0 : "#EFF1FC" : "#FFAF00"), j[0] & /*validAppChain, defaultChainStyles*/
      160 && (le.customBackgroundColor = /*validAppChain*/
      e[5] ? (
        /*validAppChain*/
        e[5].color || /*defaultChainStyles*/
        e[7] && /*defaultChainStyles*/
        e[7].color || be.color
      ) : "#FFE7B3"), j[0] & /*validAppChain, defaultChainStyles*/
      160 && (le.icon = /*validAppChain*/
      e[5] ? (
        /*validAppChain*/
        e[5].icon || /*defaultChainStyles*/
        e[7] && /*defaultChainStyles*/
        e[7].icon || be.icon
      ) : Se), g.$set(le), /*validAppChain*/
      e[5] ? R ? j[0] & /*validAppChain*/
      32 && y(R, 1) : (R = mt(), R.c(), y(R, 1), R.m(k, null)) : R && (ae(), A(R, 1, 1, () => {
        R = null;
      }), ie()), (!re || j[0] & /*$_*/
      1024) && w !== (w = /*$_*/
      e[10]("accountCenter.currentNetwork", { default: P.accountCenter.currentNetwork }) + "") && V(C, w), !/*$accountCenter$*/
      e[9].hideTransactionProtectionBtn && /*primaryWalletOnMainnet*/
      (e[6] || /*validAppChain*/
      e[5] && /*validAppChain*/
      e[5].protectedRpcUrl) ? oe ? oe.p(e, j) : (oe = ht(e), oe.c(), oe.m(d, null)) : oe && (oe.d(1), oe = null), (!re || j[0] & /*validAppChain, defaultChainStyles*/
      160) && ce(
        d,
        "background-blue",
        /*validAppChain*/
        e[5] && /*validAppChain*/
        e[5].icon || /*defaultChainStyles*/
        e[7]
      ), (!re || j[0] & /*validAppChain*/
      32) && ce(d, "background-yellow", !/*validAppChain*/
      e[5]), (!re || j[0] & /*validAppChain, defaultChainStyles*/
      160) && ce(
        d,
        "background-gray",
        /*validAppChain*/
        e[5] && !/*defaultChainStyles*/
        e[7]
      ), /*$appMetadata$*/
      e[11] ? J ? (J.p(e, j), j[0] & /*$appMetadata$*/
      2048 && y(J, 1)) : (J = bt(e), J.c(), y(J, 1), J.m(q, W)) : J && (ae(), A(J, 1, 1, () => {
        J = null;
      }), ie()), /*secondaryTokens*/
      e[8] && /*secondaryTokens*/
      e[8].length ? K ? (K.p(e, j), j[0] & /*secondaryTokens*/
      256 && y(K, 1)) : (K = kt(e), K.c(), y(K, 1), K.m(q, U)) : K && (ae(), A(K, 1, 1, () => {
        K = null;
      }), ie());
    },
    i(E) {
      if (!re) {
        for (let j = 0; j < x.length; j += 1)
          y(l[j]);
        y(g.$$.fragment, E), y(R), y(B.$$.fragment, E), y(J), y(K), E && Ae(() => {
          re && (ne || (ne = We(
            t,
            Ee,
            {
              duration: 600,
              y: (
                /*position*/
                e[16].includes("bottom") ? 56 : -76
              ),
              easing: Ne,
              opacity: 0
            },
            !0
          )), ne.run(1));
        }), re = !0;
      }
    },
    o(E) {
      for (let j = 0; j < l.length; j += 1)
        A(l[j]);
      A(g.$$.fragment, E), A(R), A(B.$$.fragment, E), A(J), A(K), E && (ne || (ne = We(
        t,
        Ee,
        {
          duration: 600,
          y: (
            /*position*/
            e[16].includes("bottom") ? 56 : -76
          ),
          easing: Ne,
          opacity: 0
        },
        !1
      )), ne.run(0)), re = !1;
    },
    d(E) {
      E && S(t);
      for (let j = 0; j < l.length; j += 1)
        l[j].d();
      se && se.d(), Z(g), R && R.d(), Z(B), oe && oe.d(), J && J.d(), K && K.d(), E && ne && ne.end(), T = !1, ke(N);
    }
  };
}
function vt(e, t) {
  let n, r, o, l;
  function a(i) {
    t[25](i);
  }
  let s = {
    wallet: (
      /*wallet*/
      t[29]
    ),
    primary: (
      /*i*/
      t[31] === 0
    )
  };
  return (
    /*hideWalletRowMenu*/
    t[3] !== void 0 && (s.hideMenu = /*hideWalletRowMenu*/
    t[3]), r = new qn({ props: s }), Tt.push(() => xt(r, "hideMenu", a)), {
      key: e,
      first: null,
      c() {
        n = ue(), F(r.$$.fragment), this.first = n;
      },
      m(i, f) {
        M(i, n, f), O(r, i, f), l = !0;
      },
      p(i, f) {
        t = i;
        const d = {};
        f[0] & /*$wallets$*/
        2 && (d.wallet = /*wallet*/
        t[29]), f[0] & /*$wallets$*/
        2 && (d.primary = /*i*/
        t[31] === 0), !o && f[0] & /*hideWalletRowMenu*/
        8 && (o = !0, d.hideMenu = /*hideWalletRowMenu*/
        t[3], en(() => o = !1)), r.$set(d);
      },
      i(i) {
        l || (y(r.$$.fragment, i), l = !0);
      },
      o(i) {
        A(r.$$.fragment, i), l = !1;
      },
      d(i) {
        i && S(n), Z(r, i);
      }
    }
  );
}
function lr(e) {
  let t, n, r, o, l = (
    /*$_*/
    e[10]("accountCenter.connectAnotherWallet", {
      default: P.accountCenter.connectAnotherWallet
    }) + ""
  ), a, s, i, f, d, v, k = (
    /*$_*/
    e[10]("accountCenter.disconnectAllWallets", {
      default: P.accountCenter.disconnectAllWallets
    }) + ""
  ), g, b, m;
  return {
    c() {
      t = h("div"), n = h("div"), r = z(), o = h("span"), a = L(l), s = z(), i = h("div"), f = h("div"), d = z(), v = h("span"), g = L(k), p(n, "class", "plus-icon flex items-center justify-center svelte-177u10y"), p(o, "class", "action-text svelte-177u10y"), p(t, "class", "action-container flex items-center pointer svelte-177u10y"), p(f, "class", "arrow-forward flex items-center justify-center svelte-177u10y"), p(v, "class", "action-text svelte-177u10y"), p(i, "class", "action-container flex items-center mt pointer svelte-177u10y");
    },
    m(u, _) {
      M(u, t, _), c(t, n), n.innerHTML = jn, c(t, r), c(t, o), c(o, a), M(u, s, _), M(u, i, _), c(i, f), f.innerHTML = Vn, c(i, d), c(i, v), c(v, g), b || (m = [
        Y(
          t,
          "click",
          /*click_handler_1*/
          e[26]
        ),
        Y(
          i,
          "click",
          /*click_handler_2*/
          e[27]
        )
      ], b = !0);
    },
    p(u, _) {
      _[0] & /*$_*/
      1024 && l !== (l = /*$_*/
      u[10]("accountCenter.connectAnotherWallet", {
        default: P.accountCenter.connectAnotherWallet
      }) + "") && V(a, l), _[0] & /*$_*/
      1024 && k !== (k = /*$_*/
      u[10]("accountCenter.disconnectAllWallets", {
        default: P.accountCenter.disconnectAllWallets
      }) + "") && V(g, k);
    },
    d(u) {
      u && S(t), u && S(s), u && S(i), b = !1, ke(m);
    }
  };
}
function mt(e) {
  let t, n, r;
  return n = new je({ props: { size: 14 } }), {
    c() {
      t = h("div"), F(n.$$.fragment), _e(t, "right", "-5px"), _e(t, "bottom", "-5px"), p(t, "class", "drop-shadow absolute");
    },
    m(o, l) {
      M(o, t, l), O(n, t, null), r = !0;
    },
    i(o) {
      r || (y(n.$$.fragment, o), r = !0);
    },
    o(o) {
      A(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && S(t), Z(n);
    }
  };
}
function ht(e) {
  let t, n, r, o, l = (
    /*$_*/
    e[10]("accountCenter.enableTransactionProtection", {
      default: P.accountCenter.enableTransactionProtection
    }) + ""
  ), a, s, i;
  return {
    c() {
      t = h("div"), n = h("div"), r = z(), o = h("span"), a = L(l), p(n, "class", "shield svelte-177u10y"), p(o, "class", "protect-text svelte-177u10y"), p(t, "class", "protect action-container flex items-center pointer svelte-177u10y");
    },
    m(f, d) {
      M(f, t, d), c(t, n), n.innerHTML = jt, c(t, r), c(t, o), c(o, a), s || (i = Y(
        t,
        "click",
        /*click_handler_3*/
        e[28]
      ), s = !0);
    },
    p(f, d) {
      d[0] & /*$_*/
      1024 && l !== (l = /*$_*/
      f[10]("accountCenter.enableTransactionProtection", {
        default: P.accountCenter.enableTransactionProtection
      }) + "") && V(a, l);
    },
    d(f) {
      f && S(t), s = !1, i();
    }
  };
}
function bt(e) {
  let t, n, r, o, l, a = (
    /*$appMetadata$*/
    (e[11] && /*$appMetadata$*/
    e[11].name || "App Name") + ""
  ), s, i, f, d = (
    /*$appMetadata$*/
    (e[11] && /*$appMetadata$*/
    e[11].description || "This app has not added a description.") + ""
  ), v, k, g, b;
  r = new ge({
    props: {
      size: 32,
      padding: 4,
      background: "white",
      border: "black",
      radius: 8,
      icon: (
        /*$appMetadata$*/
        e[11] && /*$appMetadata$*/
        e[11].icon || ze
      )
    }
  });
  let m = (
    /*$appMetadata$*/
    (e[11].gettingStartedGuide || /*$appMetadata$*/
    e[11].explore) && gt(e)
  );
  return {
    c() {
      t = h("div"), n = h("div"), F(r.$$.fragment), o = z(), l = h("div"), s = L(a), i = z(), f = h("div"), v = L(d), k = z(), m && m.c(), g = ue(), p(l, "class", "app-name svelte-177u10y"), p(n, "class", "relative flex app-icon-name svelte-177u10y"), p(f, "class", "app-description svelte-177u10y"), p(t, "class", "flex items-start app-info-header svelte-177u10y");
    },
    m(u, _) {
      M(u, t, _), c(t, n), O(r, n, null), c(n, o), c(n, l), c(l, s), c(t, i), c(t, f), c(f, v), M(u, k, _), m && m.m(u, _), M(u, g, _), b = !0;
    },
    p(u, _) {
      const w = {};
      _[0] & /*$appMetadata$*/
      2048 && (w.icon = /*$appMetadata$*/
      u[11] && /*$appMetadata$*/
      u[11].icon || ze), r.$set(w), (!b || _[0] & /*$appMetadata$*/
      2048) && a !== (a = /*$appMetadata$*/
      (u[11] && /*$appMetadata$*/
      u[11].name || "App Name") + "") && V(s, a), (!b || _[0] & /*$appMetadata$*/
      2048) && d !== (d = /*$appMetadata$*/
      (u[11] && /*$appMetadata$*/
      u[11].description || "This app has not added a description.") + "") && V(v, d), /*$appMetadata$*/
      u[11].gettingStartedGuide || /*$appMetadata$*/
      u[11].explore ? m ? m.p(u, _) : (m = gt(u), m.c(), m.m(g.parentNode, g)) : m && (m.d(1), m = null);
    },
    i(u) {
      b || (y(r.$$.fragment, u), b = !0);
    },
    o(u) {
      A(r.$$.fragment, u), b = !1;
    },
    d(u) {
      u && S(t), Z(r), u && S(k), m && m.d(u), u && S(g);
    }
  };
}
function gt(e) {
  let t, n, r = (
    /*$_*/
    e[10]("accountCenter.appInfo", { default: P.accountCenter.appInfo }) + ""
  ), o, l, a, s = (
    /*$appMetadata$*/
    e[11].gettingStartedGuide && _t(e)
  ), i = (
    /*$appMetadata$*/
    e[11].explore && wt(e)
  );
  return {
    c() {
      t = h("div"), n = h("div"), o = L(r), l = z(), s && s.c(), a = z(), i && i.c(), p(n, "class", "app-info-heading svelte-177u10y"), p(t, "class", "app-info svelte-177u10y");
    },
    m(f, d) {
      M(f, t, d), c(t, n), c(n, o), c(t, l), s && s.m(t, null), c(t, a), i && i.m(t, null);
    },
    p(f, d) {
      d[0] & /*$_*/
      1024 && r !== (r = /*$_*/
      f[10]("accountCenter.appInfo", { default: P.accountCenter.appInfo }) + "") && V(o, r), /*$appMetadata$*/
      f[11].gettingStartedGuide ? s ? s.p(f, d) : (s = _t(f), s.c(), s.m(t, a)) : s && (s.d(1), s = null), /*$appMetadata$*/
      f[11].explore ? i ? i.p(f, d) : (i = wt(f), i.c(), i.m(t, null)) : i && (i.d(1), i = null);
    },
    d(f) {
      f && S(t), s && s.d(), i && i.d();
    }
  };
}
function _t(e) {
  let t, n, r = (
    /*$_*/
    e[10]("accountCenter.learnMore", { default: P.accountCenter.learnMore }) + ""
  ), o, l, a, s = (
    /*$_*/
    e[10]("accountCenter.gettingStartedGuide", {
      default: P.accountCenter.gettingStartedGuide
    }) + ""
  ), i, f;
  return {
    c() {
      t = h("div"), n = h("div"), o = L(r), l = z(), a = h("a"), i = L(s), p(a, "href", f = /*$appMetadata$*/
      e[11].gettingStartedGuide), p(a, "target", "_blank"), p(a, "rel", "noreferrer noopener"), p(a, "class", "svelte-177u10y"), p(t, "class", "flex justify-between items-center w100 svelte-177u10y");
    },
    m(d, v) {
      M(d, t, v), c(t, n), c(n, o), c(t, l), c(t, a), c(a, i);
    },
    p(d, v) {
      v[0] & /*$_*/
      1024 && r !== (r = /*$_*/
      d[10]("accountCenter.learnMore", { default: P.accountCenter.learnMore }) + "") && V(o, r), v[0] & /*$_*/
      1024 && s !== (s = /*$_*/
      d[10]("accountCenter.gettingStartedGuide", {
        default: P.accountCenter.gettingStartedGuide
      }) + "") && V(i, s), v[0] & /*$appMetadata$*/
      2048 && f !== (f = /*$appMetadata$*/
      d[11].gettingStartedGuide) && p(a, "href", f);
    },
    d(d) {
      d && S(t);
    }
  };
}
function wt(e) {
  let t, n, r = (
    /*$_*/
    e[10]("accountCenter.smartContracts", { default: P.accountCenter.smartContracts }) + ""
  ), o, l, a, s = (
    /*$_*/
    e[10]("accountCenter.explore", { default: P.accountCenter.explore }) + ""
  ), i, f;
  return {
    c() {
      t = h("div"), n = h("div"), o = L(r), l = z(), a = h("a"), i = L(s), p(a, "href", f = /*$appMetadata$*/
      e[11].explore), p(a, "target", "_blank"), p(a, "rel", "noreferrer noopener"), p(a, "class", "svelte-177u10y"), p(t, "class", "flex justify-between items-center w100 svelte-177u10y");
    },
    m(d, v) {
      M(d, t, v), c(t, n), c(n, o), c(t, l), c(t, a), c(a, i);
    },
    p(d, v) {
      v[0] & /*$_*/
      1024 && r !== (r = /*$_*/
      d[10]("accountCenter.smartContracts", { default: P.accountCenter.smartContracts }) + "") && V(o, r), v[0] & /*$_*/
      1024 && s !== (s = /*$_*/
      d[10]("accountCenter.explore", { default: P.accountCenter.explore }) + "") && V(i, s), v[0] & /*$appMetadata$*/
      2048 && f !== (f = /*$appMetadata$*/
      d[11].explore) && p(a, "href", f);
    },
    d(d) {
      d && S(t);
    }
  };
}
function kt(e) {
  let t, n;
  return t = new rr({
    props: {
      secondaryTokens: (
        /*secondaryTokens*/
        e[8]
      )
    }
  }), {
    c() {
      F(t.$$.fragment);
    },
    m(r, o) {
      O(t, r, o), n = !0;
    },
    p(r, o) {
      const l = {};
      o[0] & /*secondaryTokens*/
      256 && (l.secondaryTokens = /*secondaryTokens*/
      r[8]), t.$set(l);
    },
    i(r) {
      n || (y(t.$$.fragment, r), n = !0);
    },
    o(r) {
      A(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Z(t, r);
    }
  };
}
function ar(e) {
  let t, n, r, o, l = (
    /*disconnectConfirmModal*/
    e[2] && ut(e)
  ), a = (
    /*enableTransactionProtection*/
    e[4] && ft(e)
  ), s = (
    /*expanded*/
    e[0] && pt(e)
  );
  return {
    c() {
      l && l.c(), t = z(), a && a.c(), n = z(), s && s.c(), r = ue();
    },
    m(i, f) {
      l && l.m(i, f), M(i, t, f), a && a.m(i, f), M(i, n, f), s && s.m(i, f), M(i, r, f), o = !0;
    },
    p(i, f) {
      /*disconnectConfirmModal*/
      i[2] ? l ? (l.p(i, f), f[0] & /*disconnectConfirmModal*/
      4 && y(l, 1)) : (l = ut(i), l.c(), y(l, 1), l.m(t.parentNode, t)) : l && (ae(), A(l, 1, 1, () => {
        l = null;
      }), ie()), /*enableTransactionProtection*/
      i[4] ? a ? (a.p(i, f), f[0] & /*enableTransactionProtection*/
      16 && y(a, 1)) : (a = ft(i), a.c(), y(a, 1), a.m(n.parentNode, n)) : a && (ae(), A(a, 1, 1, () => {
        a = null;
      }), ie()), /*expanded*/
      i[0] ? s ? (s.p(i, f), f[0] & /*expanded*/
      1 && y(s, 1)) : (s = pt(i), s.c(), y(s, 1), s.m(r.parentNode, r)) : s && (ae(), A(s, 1, 1, () => {
        s = null;
      }), ie());
    },
    i(i) {
      o || (y(l), y(a), y(s), o = !0);
    },
    o(i) {
      A(l), A(a), A(s), o = !1;
    },
    d(i) {
      l && l.d(i), i && S(t), a && a.d(i), i && S(n), s && s.d(i), i && S(r);
    }
  };
}
function ir(e, t, n) {
  let r, o, l, a, s, i, f, d, v, k;
  ee(e, Me, (T) => n(1, f = T)), ee(e, qe, (T) => n(10, v = T));
  let { expanded: g } = t;
  const b = te.select("accountCenter").pipe(ye(te.get().accountCenter), Ce(1));
  ee(e, b, (T) => n(9, d = T));
  function m() {
    f.forEach(({ label: T }) => Mt({ label: T }));
  }
  const { chains: u } = te.get();
  let _ = !1, w, C = !1;
  const $ = te.select("appMetadata").pipe(ye(te.get().appMetadata), Ce(1));
  ee(e, $, (T) => n(11, k = T));
  const { position: I } = te.get().accountCenter, { device: B } = tn, D = async () => {
    if (a)
      try {
        await nn(r.provider, a, a.protectedRpcUrl || rn), n(4, C = !1);
      } catch (T) {
        const { code: N } = T;
        console.log(T, N);
      }
  };
  function H(T) {
    St.call(this, e, T);
  }
  const q = () => n(2, _ = !1), W = () => n(4, C = !1), U = () => D();
  function X(T) {
    w = T, n(3, w);
  }
  const Q = () => on(), ne = () => n(2, _ = !0), re = () => n(4, C = !0);
  return e.$$set = (T) => {
    "expanded" in T && n(0, g = T.expanded);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$wallets$*/
    2 && n(19, [r] = f, r), e.$$.dirty[0] & /*primaryWallet*/
    524288 && n(20, [o] = r ? r.chains : [], o), e.$$.dirty[0] & /*primaryWallet*/
    524288 && n(8, l = r && r.accounts.length && r.accounts[0].secondaryTokens), e.$$.dirty[0] & /*connectedChain*/
    1048576 && n(5, a = u.find(({ id: T, namespace: N }) => o ? T === o.id && N === o.namespace : !1)), e.$$.dirty[0] & /*connectedChain*/
    1048576 && n(7, s = $t(o && o.id)), e.$$.dirty[0] & /*connectedChain*/
    1048576 && n(6, i = o && o.id === "0x1");
  }, [
    g,
    f,
    _,
    w,
    C,
    a,
    i,
    s,
    l,
    d,
    v,
    k,
    b,
    m,
    u,
    $,
    I,
    B,
    D,
    r,
    o,
    H,
    q,
    W,
    U,
    X,
    Q,
    ne,
    re
  ];
}
class Vt extends pe {
  constructor(t) {
    super(), ve(this, t, ir, ar, me, { expanded: 0 }, or, [-1, -1]);
  }
}
function sr(e) {
  he(e, "svelte-1xsvwqj", `.ac-trigger.svelte-1xsvwqj{--background-color:var(
      --account-center-minimized-background,
      var(--w3o-background-color, white)
    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(
      --account-center-border,
      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))
    );--border-radius:var(
      --account-center-border-radius,
      var(--w3o-border-radius, 1rem)
    );cursor:pointer;pointer-events:auto;width:100%;padding:0.5rem;border:1px solid;background:var(--background-color);color:var(--text-color);border-color:var(--border-color);border-radius:var(--border-radius);box-shadow:var(
      --account-center-box-shadow,
      var(--onboard-shadow-3, var(--shadow-3))
    );z-index:var(--account-center-z-index, 1)}.inner-row.svelte-1xsvwqj{display:flex;flex-flow:row nowrap;align-items:center;gap:0.5rem;padding:0 0.25rem}.wallet-info.svelte-1xsvwqj{display:flex;flex:1;flex-flow:column;height:2.5rem;overflow:hidden}.address.svelte-1xsvwqj{font-weight:600;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--account-center-minimized-address-color, inherit)}.balance.svelte-1xsvwqj{font-weight:400;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:0.6;color:var(--account-center-minimized-balance-color, inherit)}.chain-icon-container.svelte-1xsvwqj{margin-right:4px}.container.svelte-1xsvwqj{border:1px solid transparent;border-radius:16px;padding:1px;transition:border-color 250ms ease-in-out, backround 250ms ease-in-out;max-width:128px;cursor:default}.drop-shadow.svelte-1xsvwqj{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}`);
}
function yt(e) {
  let t, n = (
    /*firstAddressBalance*/
    (e[5].length > 7 ? (
      /*firstAddressBalance*/
      e[5].slice(0, 7)
    ) : (
      /*firstAddressBalance*/
      e[5]
    )) + ""
  ), r, o, l, a;
  return {
    c() {
      t = h("div"), r = L(n), o = z(), l = L(
        /*firstAddressAsset*/
        e[2]
      ), p(t, "class", "balance svelte-1xsvwqj");
    },
    m(s, i) {
      M(s, t, i), c(t, r), c(t, o), c(t, l);
    },
    p(s, i) {
      i & /*firstAddressBalance*/
      32 && n !== (n = /*firstAddressBalance*/
      (s[5].length > 7 ? (
        /*firstAddressBalance*/
        s[5].slice(0, 7)
      ) : (
        /*firstAddressBalance*/
        s[5]
      )) + "") && V(r, n), i & /*firstAddressAsset*/
      4 && V(
        l,
        /*firstAddressAsset*/
        s[2]
      );
    },
    i(s) {
      s && (a || Ae(() => {
        a = Ie(t, $e, {}), a.start();
      }));
    },
    o: G,
    d(s) {
      s && S(t);
    }
  };
}
function cr(e) {
  let t, n, r, o, l, a, s, i, f, d, v, k, g, b, m = (
    /*ensName*/
    (e[8] ? de(
      /*ensName*/
      e[8]
    ) : (
      /*unsName*/
      e[7] ? de(
        /*unsName*/
        e[7]
      ) : (
        /*shortenedFirstAddress*/
        e[6]
      )
    )) + ""
  ), u, _, w, C, $, I, B, D, H, q, W, U, X, Q, ne, re;
  l = new ge({
    props: {
      size: 32,
      padding: 4,
      background: "white",
      border: "darkGreen",
      radius: 8,
      icon: (
        /*$appMetadata$*/
        e[9] && /*$appMetadata$*/
        e[9].icon || ze
      )
    }
  }), i = new ge({
    props: {
      size: 32,
      padding: 4,
      background: "green",
      border: "darkGreen",
      radius: 8,
      icon: (
        /*primaryWallet*/
        e[1] ? (
          /*primaryWallet*/
          e[1].icon
        ) : ""
      )
    }
  }), v = new je({ props: { size: 14 } });
  let T = (
    /*firstAddressBalance*/
    e[5] && yt(e)
  );
  return D = new ge({
    props: {
      size: 22,
      padding: 4,
      background: "custom",
      color: /*validAppChain*/ e[4] ? /*validAppChain*/ e[4].icon ? void 0 : "var(--onboard-primary-100, var(--primary-100))" : `var(
                    --account-center-chain-warning,
                    var(--onboard-warning-500, var(--warning-500))
                  )`,
      customBackgroundColor: (
        /*validAppChain*/
        e[4] ? (
          /*validAppChain*/
          e[4].color || /*defaultChainStyles*/
          e[3] && /*defaultChainStyles*/
          e[3].color || be.color
        ) : "var(--onboard-warning-200, var(--warning-200))"
      ),
      border: "transparent",
      radius: 25,
      icon: (
        /*validAppChain*/
        e[4] ? (
          /*validAppChain*/
          e[4].icon || /*defaultChainStyles*/
          e[3] && /*defaultChainStyles*/
          e[3].icon || be.icon
        ) : Se
      )
    }
  }), q = new qt({
    props: {
      chains: (
        /*chains*/
        e[11]
      ),
      colorVar: "--account-center-minimized-network-selector-color",
      selectIcon: Lt,
      parentCSSId: "minimized_ac"
    }
  }), {
    c() {
      t = h("div"), n = h("div"), r = h("div"), o = h("div"), F(l.$$.fragment), a = z(), s = h("div"), F(i.$$.fragment), f = z(), d = h("div"), F(v.$$.fragment), k = z(), g = h("div"), b = h("div"), u = L(m), _ = z(), T && T.c(), w = z(), C = h("div"), $ = h("div"), I = h("div"), B = h("div"), F(D.$$.fragment), H = z(), F(q.$$.fragment), p(o, "class", "drop-shadow svelte-1xsvwqj"), _e(s, "margin-left", "-0.5rem"), p(s, "class", "drop-shadow svelte-1xsvwqj"), _e(d, "right", "-4px"), _e(d, "bottom", "-4px"), p(d, "class", "drop-shadow absolute svelte-1xsvwqj"), p(r, "class", "flex relative"), p(b, "class", "address svelte-1xsvwqj"), p(g, "class", "wallet-info svelte-1xsvwqj"), p(B, "class", "chain-icon-container svelte-1xsvwqj"), p(I, "class", "flex items-center"), p($, "class", "container shadow-1 flex items-center svelte-1xsvwqj"), p($, "style", W = `border-color: var(${/*validAppChain*/
      e[4] ? "--onboard-primary-200, var(--primary-200)" : "--onboard-warning-500, var(--warning-500)"}); background-color: var(${/*validAppChain*/
      e[4] ? "--account-center-minimized-chain-select-background, var(--primary-100)" : "--account-center-minimized-chain-select-background-warning, var(--warning-100)"})`), p(C, "class", "network"), p(n, "class", "inner-row svelte-1xsvwqj"), p(t, "class", "ac-trigger svelte-1xsvwqj");
    },
    m(N, x) {
      M(N, t, x), c(t, n), c(n, r), c(r, o), O(l, o, null), c(r, a), c(r, s), O(i, s, null), c(r, f), c(r, d), O(v, d, null), c(n, k), c(n, g), c(g, b), c(b, u), c(g, _), T && T.m(g, null), c(n, w), c(n, C), c(C, $), c($, I), c(I, B), O(D, B, null), c(I, H), O(q, I, null), Q = !0, ne || (re = [
        Y($, "click", fe(
          /*click_handler*/
          e[15]
        )),
        Y(t, "click", fe(function() {
          we(
            /*toggle*/
            e[0]
          ) && e[0].apply(this, arguments);
        }))
      ], ne = !0);
    },
    p(N, [x]) {
      e = N;
      const Te = {};
      x & /*$appMetadata$*/
      512 && (Te.icon = /*$appMetadata$*/
      e[9] && /*$appMetadata$*/
      e[9].icon || ze), l.$set(Te);
      const se = {};
      x & /*primaryWallet*/
      2 && (se.icon = /*primaryWallet*/
      e[1] ? (
        /*primaryWallet*/
        e[1].icon
      ) : ""), i.$set(se), (!Q || x & /*ensName, unsName, shortenedFirstAddress*/
      448) && m !== (m = /*ensName*/
      (e[8] ? de(
        /*ensName*/
        e[8]
      ) : (
        /*unsName*/
        e[7] ? de(
          /*unsName*/
          e[7]
        ) : (
          /*shortenedFirstAddress*/
          e[6]
        )
      )) + "") && V(u, m), /*firstAddressBalance*/
      e[5] ? T ? (T.p(e, x), x & /*firstAddressBalance*/
      32 && y(T, 1)) : (T = yt(e), T.c(), y(T, 1), T.m(g, null)) : T && (T.d(1), T = null);
      const R = {};
      x & /*validAppChain*/
      16 && (R.color = /*validAppChain*/
      e[4] ? /*validAppChain*/ e[4].icon ? void 0 : "var(--onboard-primary-100, var(--primary-100))" : `var(
                    --account-center-chain-warning,
                    var(--onboard-warning-500, var(--warning-500))
                  )`), x & /*validAppChain, defaultChainStyles*/
      24 && (R.customBackgroundColor = /*validAppChain*/
      e[4] ? (
        /*validAppChain*/
        e[4].color || /*defaultChainStyles*/
        e[3] && /*defaultChainStyles*/
        e[3].color || be.color
      ) : "var(--onboard-warning-200, var(--warning-200))"), x & /*validAppChain, defaultChainStyles*/
      24 && (R.icon = /*validAppChain*/
      e[4] ? (
        /*validAppChain*/
        e[4].icon || /*defaultChainStyles*/
        e[3] && /*defaultChainStyles*/
        e[3].icon || be.icon
      ) : Se), D.$set(R), (!Q || x & /*validAppChain*/
      16 && W !== (W = `border-color: var(${/*validAppChain*/
      e[4] ? "--onboard-primary-200, var(--primary-200)" : "--onboard-warning-500, var(--warning-500)"}); background-color: var(${/*validAppChain*/
      e[4] ? "--account-center-minimized-chain-select-background, var(--primary-100)" : "--account-center-minimized-chain-select-background-warning, var(--warning-100)"})`)) && p($, "style", W);
    },
    i(N) {
      Q || (y(l.$$.fragment, N), y(i.$$.fragment, N), y(v.$$.fragment, N), y(T), y(D.$$.fragment, N), y(q.$$.fragment, N), N && Ae(() => {
        Q && (X && X.end(1), U = Ie(t, $e, { duration: 250 }), U.start());
      }), Q = !0);
    },
    o(N) {
      A(l.$$.fragment, N), A(i.$$.fragment, N), A(v.$$.fragment, N), A(D.$$.fragment, N), A(q.$$.fragment, N), U && U.invalidate(), X = ln(t, $e, { duration: 100 }), Q = !1;
    },
    d(N) {
      N && S(t), Z(l), Z(i), Z(v), T && T.d(), Z(D), Z(q), N && X && X.end(), ne = !1, ke(re);
    }
  };
}
function dr(e, t, n) {
  let r, o, l, a, s, i, f, d, v, k, g, b;
  ee(e, Me, (C) => n(14, g = C));
  let { toggle: m } = t;
  const u = te.select("appMetadata").pipe(ye(te.get().appMetadata), Ce(1));
  ee(e, u, (C) => n(9, b = C));
  const _ = te.get().chains;
  function w(C) {
    St.call(this, e, C);
  }
  return e.$$set = (C) => {
    "toggle" in C && n(0, m = C.toggle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$wallets$*/
    16384 && n(1, [r] = g, r), e.$$.dirty & /*primaryWallet*/
    2 && n(13, [o] = r ? r.accounts : [], o), e.$$.dirty & /*firstAccount*/
    8192 && n(8, l = o && o.ens && de(o.ens.name)), e.$$.dirty & /*firstAccount*/
    8192 && n(7, a = o && o.uns && de(o.uns.name)), e.$$.dirty & /*firstAccount*/
    8192 && n(6, s = o ? Ve(o.address) : ""), e.$$.dirty & /*firstAccount*/
    8192 && n(
      2,
      [i] = o && o.balance ? Object.keys(o.balance) : [],
      i
    ), e.$$.dirty & /*firstAccount, firstAddressAsset*/
    8196 && n(5, f = o && o.balance ? o.balance[i] : null), e.$$.dirty & /*primaryWallet*/
    2 && n(12, d = r && r.chains[0]), e.$$.dirty & /*primaryChain*/
    4096 && n(4, v = _.find(({ id: C, namespace: $ }) => d ? C === d.id && $ === d.namespace : !1)), e.$$.dirty & /*primaryChain*/
    4096 && n(3, k = $t(d && d.id));
  }, [
    m,
    r,
    i,
    k,
    v,
    f,
    s,
    a,
    l,
    b,
    u,
    _,
    d,
    o,
    g,
    w
  ];
}
class ur extends pe {
  constructor(t) {
    super(), ve(this, t, dr, cr, me, { toggle: 0 }, sr);
  }
}
function fr(e) {
  he(e, "svelte-1o9vinu", `.ac-trigger.svelte-1o9vinu{--background-color:var(
      --account-center-minimized-background,
      var(--w3o-background-color, white)
    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(
      --account-center-border,
      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))
    );--border-radius:var(
      --account-center-border-radius,
      var(--w3o-border-radius, 1rem)
    );position:relative;cursor:pointer;pointer-events:auto;min-width:80px;background:var(--background-color);color:var(--text-color);border:1px solid var(--border-color);border-radius:var(--border-radius);box-shadow:var(
      --account-center-box-shadow,
      var(--onboard-shadow-3, var(--shadow-3))
    );z-index:var(--account-center-z-index, 1)}.wallet-square-wrapper.svelte-1o9vinu{position:relative;margin-left:-8px}.check-icon-wrapper.svelte-1o9vinu{position:absolute;right:-4px;bottom:-4px}.inner-row.svelte-1o9vinu{display:flex;flex-flow:row nowrap;width:80px;padding:0.75rem}.drop-shadow.svelte-1o9vinu{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}`);
}
function pr(e) {
  let t, n, r, o, l, a, s, i, f, d, v, k, g, b, m;
  return o = new ge({
    props: {
      size: 32,
      padding: 4,
      background: "white",
      border: "darkGreen",
      radius: 8,
      icon: (
        /*$appMetadata$*/
        e[3] && /*$appMetadata$*/
        e[3].icon || ze
      )
    }
  }), i = new ge({
    props: {
      size: 32,
      padding: 4,
      background: "green",
      border: "darkGreen",
      radius: 8,
      icon: (
        /*primaryWallet*/
        e[1] ? (
          /*primaryWallet*/
          e[1].icon
        ) : ""
      )
    }
  }), v = new je({ props: { size: 14 } }), {
    c() {
      t = h("div"), n = h("div"), r = h("div"), F(o.$$.fragment), l = z(), a = h("div"), s = h("div"), F(i.$$.fragment), f = z(), d = h("div"), F(v.$$.fragment), p(r, "class", "drop-shadow svelte-1o9vinu"), p(s, "class", "drop-shadow svelte-1o9vinu"), p(d, "class", "check-icon-wrapper drop-shadow svelte-1o9vinu"), p(a, "class", "wallet-square-wrapper svelte-1o9vinu"), p(n, "class", "inner-row svelte-1o9vinu"), p(t, "class", "ac-trigger svelte-1o9vinu"), p(t, "style", k = /*$accountCenter$*/
      e[2].position.includes("Left") ? "align-self: flex-start" : null);
    },
    m(u, _) {
      M(u, t, _), c(t, n), c(n, r), O(o, r, null), c(n, l), c(n, a), c(a, s), O(i, s, null), c(a, f), c(a, d), O(v, d, null), g = !0, b || (m = Y(t, "click", fe(function() {
        we(
          /*toggle*/
          e[0]
        ) && e[0].apply(this, arguments);
      })), b = !0);
    },
    p(u, [_]) {
      e = u;
      const w = {};
      _ & /*$appMetadata$*/
      8 && (w.icon = /*$appMetadata$*/
      e[3] && /*$appMetadata$*/
      e[3].icon || ze), o.$set(w);
      const C = {};
      _ & /*primaryWallet*/
      2 && (C.icon = /*primaryWallet*/
      e[1] ? (
        /*primaryWallet*/
        e[1].icon
      ) : ""), i.$set(C), (!g || _ & /*$accountCenter$*/
      4 && k !== (k = /*$accountCenter$*/
      e[2].position.includes("Left") ? "align-self: flex-start" : null)) && p(t, "style", k);
    },
    i(u) {
      g || (y(o.$$.fragment, u), y(i.$$.fragment, u), y(v.$$.fragment, u), g = !0);
    },
    o(u) {
      A(o.$$.fragment, u), A(i.$$.fragment, u), A(v.$$.fragment, u), g = !1;
    },
    d(u) {
      u && S(t), Z(o), Z(i), Z(v), b = !1, m();
    }
  };
}
function vr(e, t, n) {
  let r, o, l, a;
  ee(e, Me, (d) => n(6, o = d));
  let { toggle: s } = t;
  const i = te.select("appMetadata").pipe(ye(te.get().appMetadata), Ce(1));
  ee(e, i, (d) => n(3, a = d));
  const f = te.select("accountCenter").pipe(ye(te.get().accountCenter), Ce(1));
  return ee(e, f, (d) => n(2, l = d)), e.$$set = (d) => {
    "toggle" in d && n(0, s = d.toggle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$wallets$*/
    64 && n(1, [r] = o, r);
  }, [
    s,
    r,
    l,
    a,
    i,
    f,
    o
  ];
}
class mr extends pe {
  constructor(t) {
    super(), ve(this, t, vr, pr, me, { toggle: 0 }, fr);
  }
}
function hr(e) {
  he(e, "svelte-1nua59o", ".ac-container.svelte-1nua59o{display:flex;flex-flow:column;align-items:flex-end;gap:0.5rem}");
}
function Ct(e) {
  let t, n;
  return t = new Vt({ props: { expanded: (
    /*expanded*/
    e[0]
  ) } }), {
    c() {
      F(t.$$.fragment);
    },
    m(r, o) {
      O(t, r, o), n = !0;
    },
    p(r, o) {
      const l = {};
      o & /*expanded*/
      1 && (l.expanded = /*expanded*/
      r[0]), t.$set(l);
    },
    i(r) {
      n || (y(t.$$.fragment, r), n = !0);
    },
    o(r) {
      A(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Z(t, r);
    }
  };
}
function br(e) {
  let t, n;
  return t = new ur({ props: { toggle: (
    /*toggle*/
    e[4]
  ) } }), {
    c() {
      F(t.$$.fragment);
    },
    m(r, o) {
      O(t, r, o), n = !0;
    },
    p: G,
    i(r) {
      n || (y(t.$$.fragment, r), n = !0);
    },
    o(r) {
      A(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Z(t, r);
    }
  };
}
function gr(e) {
  let t, n;
  return t = new mr({ props: { toggle: (
    /*toggle*/
    e[4]
  ) } }), {
    c() {
      F(t.$$.fragment);
    },
    m(r, o) {
      O(t, r, o), n = !0;
    },
    p: G,
    i(r) {
      n || (y(t.$$.fragment, r), n = !0);
    },
    o(r) {
      A(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Z(t, r);
    }
  };
}
function zt(e) {
  let t, n;
  return t = new Vt({ props: { expanded: (
    /*expanded*/
    e[0]
  ) } }), {
    c() {
      F(t.$$.fragment);
    },
    m(r, o) {
      O(t, r, o), n = !0;
    },
    p(r, o) {
      const l = {};
      o & /*expanded*/
      1 && (l.expanded = /*expanded*/
      r[0]), t.$set(l);
    },
    i(r) {
      n || (y(t.$$.fragment, r), n = !0);
    },
    o(r) {
      A(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Z(t, r);
    }
  };
}
function _r(e) {
  let t, n = (
    /*$accountCenter$*/
    e[1].position.includes("bottom")
  ), r, o, l, a, s = (
    /*$accountCenter$*/
    e[1].position.includes("top")
  ), i, f, d, v = n && Ct(e);
  const k = [gr, br], g = [];
  function b(u, _) {
    return (
      /*$accountCenter$*/
      u[1].minimal ? 0 : 1
    );
  }
  o = b(e), l = g[o] = k[o](e);
  let m = s && zt(e);
  return {
    c() {
      t = h("div"), v && v.c(), r = z(), l.c(), a = z(), m && m.c(), p(t, "class", "ac-container svelte-1nua59o");
    },
    m(u, _) {
      M(u, t, _), v && v.m(t, null), c(t, r), g[o].m(t, null), c(t, a), m && m.m(t, null), i = !0, f || (d = Y(
        window,
        "click",
        /*minimize*/
        e[3]
      ), f = !0);
    },
    p(u, [_]) {
      _ & /*$accountCenter$*/
      2 && (n = /*$accountCenter$*/
      u[1].position.includes("bottom")), n ? v ? (v.p(u, _), _ & /*$accountCenter$*/
      2 && y(v, 1)) : (v = Ct(u), v.c(), y(v, 1), v.m(t, r)) : v && (ae(), A(v, 1, 1, () => {
        v = null;
      }), ie());
      let w = o;
      o = b(u), o === w ? g[o].p(u, _) : (ae(), A(g[w], 1, 1, () => {
        g[w] = null;
      }), ie(), l = g[o], l ? l.p(u, _) : (l = g[o] = k[o](u), l.c()), y(l, 1), l.m(t, a)), _ & /*$accountCenter$*/
      2 && (s = /*$accountCenter$*/
      u[1].position.includes("top")), s ? m ? (m.p(u, _), _ & /*$accountCenter$*/
      2 && y(m, 1)) : (m = zt(u), m.c(), y(m, 1), m.m(t, null)) : m && (ae(), A(m, 1, 1, () => {
        m = null;
      }), ie());
    },
    i(u) {
      i || (y(v), y(l), y(m), i = !0);
    },
    o(u) {
      A(v), A(l), A(m), i = !1;
    },
    d(u) {
      u && S(t), v && v.d(), g[o].d(), m && m.d(), f = !1, d();
    }
  };
}
function wr(e, t, n) {
  let r, o = !1;
  const l = te.select("accountCenter").pipe(ye(te.get().accountCenter), Ce(1));
  ee(e, l, (i) => n(1, r = i)), Jt(a);
  function a() {
    r.expanded && (Be({ expanded: !1 }), n(0, o = !1));
  }
  function s() {
    Be({ expanded: !r.expanded }), n(0, o = !o);
  }
  return [o, r, l, a, s];
}
class yr extends pe {
  constructor(t) {
    super(), ve(this, t, wr, _r, me, {}, hr);
  }
}
export {
  yr as default
};
//# sourceMappingURL=Index-838ea599-CkVxQacD.js.map
