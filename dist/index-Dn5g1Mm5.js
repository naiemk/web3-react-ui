var wy = Object.defineProperty;
var Gh = (t) => {
  throw TypeError(t);
};
var vy = (t, e, r) => e in t ? wy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var F = (t, e, r) => vy(t, typeof e != "symbol" ? e + "" : e, r), Iu = (t, e, r) => e.has(t) || Gh("Cannot " + r);
var O = (t, e, r) => (Iu(t, e, "read from private field"), r ? r.call(t) : e.get(t)), $ = (t, e, r) => e.has(t) ? Gh("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), k = (t, e, r, n) => (Iu(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), K = (t, e, r) => (Iu(t, e, "access private method"), r);
var al = (t, e, r, n) => ({
  set _(s) {
    k(t, e, s, r);
  },
  get _() {
    return O(t, e, n);
  }
});
import * as nh from "react";
import sh, { useCallback as Ws, useState as Vs, useEffect as Nc } from "react";
var cf = function(t, e) {
  return cf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s]);
  }, cf(t, e);
};
function Xr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  cf(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Ue = function() {
  return Ue = Object.assign || function(e) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ue.apply(this, arguments);
};
function Ay(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function Ey(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(a) {
      a(i);
    });
  }
  return new (r || (r = Promise))(function(i, a) {
    function o(d) {
      try {
        m(n.next(d));
      } catch (l) {
        a(l);
      }
    }
    function c(d) {
      try {
        m(n.throw(d));
      } catch (l) {
        a(l);
      }
    }
    function m(d) {
      d.done ? i(d.value) : s(d.value).then(o, c);
    }
    m((n = n.apply(t, e || [])).next());
  });
}
function Lp(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, s, i, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = o(0), a.throw = o(1), a.return = o(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(m) {
    return function(d) {
      return c([m, d]);
    };
  }
  function c(m) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, m[0] && (r = 0)), r; ) try {
      if (n = 1, s && (i = m[0] & 2 ? s.return : m[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, m[1])).done) return i;
      switch (s = 0, i && (m = [m[0] & 2, i.value]), m[0]) {
        case 0:
        case 1:
          i = m;
          break;
        case 4:
          return r.label++, { value: m[1], done: !1 };
        case 5:
          r.label++, s = m[1], m = [0];
          continue;
        case 7:
          m = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (m[0] === 6 || m[0] === 2)) {
            r = 0;
            continue;
          }
          if (m[0] === 3 && (!i || m[1] > i[0] && m[1] < i[3])) {
            r.label = m[1];
            break;
          }
          if (m[0] === 6 && r.label < i[1]) {
            r.label = i[1], i = m;
            break;
          }
          if (i && r.label < i[2]) {
            r.label = i[2], r.ops.push(m);
            break;
          }
          i[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      m = e.call(t, r);
    } catch (d) {
      m = [6, d], s = 0;
    } finally {
      n = i = 0;
    }
    if (m[0] & 5) throw m[1];
    return { value: m[0] ? m[1] : void 0, done: !0 };
  }
}
function ya(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ba(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var n = r.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; ) i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function Zn(t, e, r) {
  if (r || arguments.length === 2) for (var n = 0, s = e.length, i; n < s; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function So(t) {
  return this instanceof So ? (this.v = t, this) : new So(t);
}
function _y(t, e, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), s, i = [];
  return s = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", a), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function a(g) {
    return function(h) {
      return Promise.resolve(h).then(g, l);
    };
  }
  function o(g, h) {
    n[g] && (s[g] = function(u) {
      return new Promise(function(b, p) {
        i.push([g, u, b, p]) > 1 || c(g, u);
      });
    }, h && (s[g] = h(s[g])));
  }
  function c(g, h) {
    try {
      m(n[g](h));
    } catch (u) {
      f(i[0][3], u);
    }
  }
  function m(g) {
    g.value instanceof So ? Promise.resolve(g.value.v).then(d, l) : f(i[0][2], g);
  }
  function d(g) {
    c("next", g);
  }
  function l(g) {
    c("throw", g);
  }
  function f(g, h) {
    g(h), i.shift(), i.length && c(i[0][0], i[0][1]);
  }
}
function xy(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof ya == "function" ? ya(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(i) {
    r[i] = t[i] && function(a) {
      return new Promise(function(o, c) {
        a = t[i](a), s(o, c, a.done, a.value);
      });
    };
  }
  function s(i, a, o, c) {
    Promise.resolve(c).then(function(m) {
      i({ value: m, done: o });
    }, a);
  }
}
function Mt(t) {
  return typeof t == "function";
}
function Up(t) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = t(e);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Tu = Up(function(t) {
  return function(r) {
    t(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, s) {
      return s + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function uf(t, e) {
  if (t) {
    var r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var tu = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, r, n, s, i;
    if (!this.closed) {
      this.closed = !0;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var o = ya(a), c = o.next(); !c.done; c = o.next()) {
              var m = c.value;
              m.remove(this);
            }
          } catch (u) {
            e = { error: u };
          } finally {
            try {
              c && !c.done && (r = o.return) && r.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          a.remove(this);
      var d = this.initialTeardown;
      if (Mt(d))
        try {
          d();
        } catch (u) {
          i = u instanceof Tu ? u.errors : [u];
        }
      var l = this._finalizers;
      if (l) {
        this._finalizers = null;
        try {
          for (var f = ya(l), g = f.next(); !g.done; g = f.next()) {
            var h = g.value;
            try {
              $h(h);
            } catch (u) {
              i = i ?? [], u instanceof Tu ? i = Zn(Zn([], ba(i)), ba(u.errors)) : i.push(u);
            }
          }
        } catch (u) {
          n = { error: u };
        } finally {
          try {
            g && !g.done && (s = f.return) && s.call(f);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (i)
        throw new Tu(i);
    }
  }, t.prototype.add = function(e) {
    var r;
    if (e && e !== this)
      if (this.closed)
        $h(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var r = this._parentage;
    return r === e || Array.isArray(r) && r.includes(e);
  }, t.prototype._addParent = function(e) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
  }, t.prototype._removeParent = function(e) {
    var r = this._parentage;
    r === e ? this._parentage = null : Array.isArray(r) && uf(r, e);
  }, t.prototype.remove = function(e) {
    var r = this._finalizers;
    r && uf(r, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Fp = tu.EMPTY;
function jp(t) {
  return t instanceof tu || t && "closed" in t && Mt(t.remove) && Mt(t.add) && Mt(t.unsubscribe);
}
function $h(t) {
  Mt(t) ? t() : t.unsubscribe();
}
var Sy = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Hp = {
  setTimeout: function(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, Zn([t, e], ba(r)));
  },
  clearTimeout: function(t) {
    var e = Hp.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Gp(t) {
  Hp.setTimeout(function() {
    throw t;
  });
}
function ff() {
}
function yc(t) {
  t();
}
var ih = function(t) {
  Xr(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, jp(r) && r.add(n)) : n.destination = Ty, n;
  }
  return e.create = function(r, n, s) {
    return new Sl(r, n, s);
  }, e.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, e.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(r) {
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(tu), Oy = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(e);
      } catch (n) {
        sc(n);
      }
  }, t.prototype.error = function(e) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(e);
      } catch (n) {
        sc(n);
      }
    else
      sc(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (r) {
        sc(r);
      }
  }, t;
}(), Sl = function(t) {
  Xr(e, t);
  function e(r, n, s) {
    var i = t.call(this) || this, a;
    return Mt(r) || !r ? a = {
      next: r ?? void 0,
      error: n ?? void 0,
      complete: s ?? void 0
    } : a = r, i.destination = new Oy(a), i;
  }
  return e;
}(ih);
function sc(t) {
  Gp(t);
}
function Iy(t) {
  throw t;
}
var Ty = {
  closed: !0,
  next: ff,
  error: Iy,
  complete: ff
}, oh = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ah(t) {
  return t;
}
function Cy(t) {
  return t.length === 0 ? ah : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}
var zs = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var r = new t();
    return r.source = this, r.operator = e, r;
  }, t.prototype.subscribe = function(e, r, n) {
    var s = this, i = Ry(e) ? e : new Sl(e, r, n);
    return yc(function() {
      var a = s, o = a.operator, c = a.source;
      i.add(o ? o.call(i, c) : c ? s._subscribe(i) : s._trySubscribe(i));
    }), i;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      e.error(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = Wh(r), new r(function(s, i) {
      var a = new Sl({
        next: function(o) {
          try {
            e(o);
          } catch (c) {
            i(c), a.unsubscribe();
          }
        },
        error: i,
        complete: s
      });
      n.subscribe(a);
    });
  }, t.prototype._subscribe = function(e) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e);
  }, t.prototype[oh] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return Cy(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = Wh(e), new e(function(n, s) {
      var i;
      r.subscribe(function(a) {
        return i = a;
      }, function(a) {
        return s(a);
      }, function() {
        return n(i);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Wh(t) {
  var e;
  return (e = t ?? Sy.Promise) !== null && e !== void 0 ? e : Promise;
}
function Ny(t) {
  return t && Mt(t.next) && Mt(t.error) && Mt(t.complete);
}
function Ry(t) {
  return t && t instanceof ih || Ny(t) && jp(t);
}
function Py(t) {
  return Mt(t == null ? void 0 : t.lift);
}
function Kl(t) {
  return function(e) {
    if (Py(e))
      return e.lift(function(r) {
        try {
          return t(r, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Ol(t, e, r, n, s) {
  return new ky(t, e, r, n, s);
}
var ky = function(t) {
  Xr(e, t);
  function e(r, n, s, i, a, o) {
    var c = t.call(this, r) || this;
    return c.onFinalize = a, c.shouldUnsubscribe = o, c._next = n ? function(m) {
      try {
        n(m);
      } catch (d) {
        r.error(d);
      }
    } : t.prototype._next, c._error = i ? function(m) {
      try {
        i(m);
      } catch (d) {
        r.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, c._complete = s ? function() {
      try {
        s();
      } catch (m) {
        r.error(m);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, c;
  }
  return e.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      t.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, e;
}(ih), By = Up(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Ji = function(t) {
  Xr(e, t);
  function e() {
    var r = t.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return e.prototype.lift = function(r) {
    var n = new Vh(this, this);
    return n.operator = r, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new By();
  }, e.prototype.next = function(r) {
    var n = this;
    yc(function() {
      var s, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var a = ya(n.currentObservers), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            c.next(r);
          }
        } catch (m) {
          s = { error: m };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (s) throw s.error;
          }
        }
      }
    });
  }, e.prototype.error = function(r) {
    var n = this;
    yc(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = r;
        for (var s = n.observers; s.length; )
          s.shift().error(r);
      }
    });
  }, e.prototype.complete = function() {
    var r = this;
    yc(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var n = r.observers; n.length; )
          n.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, r);
  }, e.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, e.prototype._innerSubscribe = function(r) {
    var n = this, s = this, i = s.hasError, a = s.isStopped, o = s.observers;
    return i || a ? Fp : (this.currentObservers = null, o.push(r), new tu(function() {
      n.currentObservers = null, uf(o, r);
    }));
  }, e.prototype._checkFinalizedStatuses = function(r) {
    var n = this, s = n.hasError, i = n.thrownError, a = n.isStopped;
    s ? r.error(i) : a && r.complete();
  }, e.prototype.asObservable = function() {
    var r = new zs();
    return r.source = this, r;
  }, e.create = function(r, n) {
    return new Vh(r, n);
  }, e;
}(zs), Vh = function(t) {
  Xr(e, t);
  function e(r, n) {
    var s = t.call(this) || this;
    return s.destination = r, s.source = n, s;
  }
  return e.prototype.next = function(r) {
    var n, s;
    (s = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || s === void 0 || s.call(n, r);
  }, e.prototype.error = function(r) {
    var n, s;
    (s = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || s === void 0 || s.call(n, r);
  }, e.prototype.complete = function() {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
  }, e.prototype._subscribe = function(r) {
    var n, s;
    return (s = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && s !== void 0 ? s : Fp;
  }, e;
}(Ji), ru = function(t) {
  Xr(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n._value = r, n;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(r) {
    var n = t.prototype._subscribe.call(this, r);
    return !n.closed && r.next(this._value), n;
  }, e.prototype.getValue = function() {
    var r = this, n = r.hasError, s = r.thrownError, i = r._value;
    if (n)
      throw s;
    return this._throwIfClosed(), i;
  }, e.prototype.next = function(r) {
    t.prototype.next.call(this, this._value = r);
  }, e;
}(Ji), $p = {
  now: function() {
    return ($p.delegate || Date).now();
  },
  delegate: void 0
}, My = function(t) {
  Xr(e, t);
  function e(r, n, s) {
    r === void 0 && (r = 1 / 0), n === void 0 && (n = 1 / 0), s === void 0 && (s = $p);
    var i = t.call(this) || this;
    return i._bufferSize = r, i._windowTime = n, i._timestampProvider = s, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = n === 1 / 0, i._bufferSize = Math.max(1, r), i._windowTime = Math.max(1, n), i;
  }
  return e.prototype.next = function(r) {
    var n = this, s = n.isStopped, i = n._buffer, a = n._infiniteTimeWindow, o = n._timestampProvider, c = n._windowTime;
    s || (i.push(r), !a && i.push(o.now() + c)), this._trimBuffer(), t.prototype.next.call(this, r);
  }, e.prototype._subscribe = function(r) {
    this._throwIfClosed(), this._trimBuffer();
    for (var n = this._innerSubscribe(r), s = this, i = s._infiniteTimeWindow, a = s._buffer, o = a.slice(), c = 0; c < o.length && !r.closed; c += i ? 1 : 2)
      r.next(o[c]);
    return this._checkFinalizedStatuses(r), n;
  }, e.prototype._trimBuffer = function() {
    var r = this, n = r._bufferSize, s = r._timestampProvider, i = r._buffer, a = r._infiniteTimeWindow, o = (a ? 1 : 2) * n;
    if (n < 1 / 0 && o < i.length && i.splice(0, i.length - o), !a) {
      for (var c = s.now(), m = 0, d = 1; d < i.length && i[d] <= c; d += 2)
        m = d;
      m && i.splice(0, m + 1);
    }
  }, e;
}(Ji);
function Dy(t) {
  return t[t.length - 1];
}
function Ly(t) {
  return Mt(Dy(t)) ? t.pop() : void 0;
}
var Uy = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Fy(t) {
  return Mt(t == null ? void 0 : t.then);
}
function jy(t) {
  return Mt(t[oh]);
}
function Hy(t) {
  return Symbol.asyncIterator && Mt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Gy(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function $y() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Wy = $y();
function Vy(t) {
  return Mt(t == null ? void 0 : t[Wy]);
}
function zy(t) {
  return _y(this, arguments, function() {
    var r, n, s, i;
    return Lp(this, function(a) {
      switch (a.label) {
        case 0:
          r = t.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, So(r.read())];
        case 3:
          return n = a.sent(), s = n.value, i = n.done, i ? [4, So(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, So(s)];
        case 6:
          return [4, a.sent()];
        case 7:
          return a.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return r.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Qy(t) {
  return Mt(t == null ? void 0 : t.getReader);
}
function lh(t) {
  if (t instanceof zs)
    return t;
  if (t != null) {
    if (jy(t))
      return qy(t);
    if (Uy(t))
      return Jy(t);
    if (Fy(t))
      return Ky(t);
    if (Hy(t))
      return Wp(t);
    if (Vy(t))
      return Zy(t);
    if (Qy(t))
      return Xy(t);
  }
  throw Gy(t);
}
function qy(t) {
  return new zs(function(e) {
    var r = t[oh]();
    if (Mt(r.subscribe))
      return r.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Jy(t) {
  return new zs(function(e) {
    for (var r = 0; r < t.length && !e.closed; r++)
      e.next(t[r]);
    e.complete();
  });
}
function Ky(t) {
  return new zs(function(e) {
    t.then(function(r) {
      e.closed || (e.next(r), e.complete());
    }, function(r) {
      return e.error(r);
    }).then(null, Gp);
  });
}
function Zy(t) {
  return new zs(function(e) {
    var r, n;
    try {
      for (var s = ya(t), i = s.next(); !i.done; i = s.next()) {
        var a = i.value;
        if (e.next(a), e.closed)
          return;
      }
    } catch (o) {
      r = { error: o };
    } finally {
      try {
        i && !i.done && (n = s.return) && n.call(s);
      } finally {
        if (r) throw r.error;
      }
    }
    e.complete();
  });
}
function Wp(t) {
  return new zs(function(e) {
    Yy(t, e).catch(function(r) {
      return e.error(r);
    });
  });
}
function Xy(t) {
  return Wp(zy(t));
}
function Yy(t, e) {
  var r, n, s, i;
  return Ey(this, void 0, void 0, function() {
    var a, o;
    return Lp(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), r = xy(t), c.label = 1;
        case 1:
          return [4, r.next()];
        case 2:
          if (n = c.sent(), !!n.done) return [3, 4];
          if (a = n.value, e.next(a), e.closed)
            return [2];
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return o = c.sent(), s = { error: o }, [3, 11];
        case 6:
          return c.trys.push([6, , 9, 10]), n && !n.done && (i = r.return) ? [4, i.call(r)] : [3, 8];
        case 7:
          c.sent(), c.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (s) throw s.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function eb(t, e) {
  return Kl(function(r, n) {
    var s = 0;
    r.subscribe(Ol(n, function(i) {
      n.next(t.call(e, i, s++));
    }));
  });
}
function tb(t, e) {
  return Kl(function(r, n) {
    var s = 0;
    r.subscribe(Ol(n, function(i) {
      return t.call(e, i, s++) && n.next(i);
    }));
  });
}
function rb(t, e) {
  return e === void 0 && (e = ah), t = t ?? nb, Kl(function(r, n) {
    var s, i = !0;
    r.subscribe(Ol(n, function(a) {
      var o = e(a);
      (i || !t(s, o)) && (i = !1, s = o, n.next(a));
    }));
  });
}
function nb(t, e) {
  return t === e;
}
function sb(t, e) {
  return rb(function(r, n) {
    return r[t] === n[t];
  });
}
function Vp() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = t.length;
  if (r === 0)
    throw new Error("list of properties cannot be empty.");
  return eb(function(n) {
    for (var s = n, i = 0; i < r; i++) {
      var a = s == null ? void 0 : s[t[i]];
      if (typeof a < "u")
        s = a;
      else
        return;
    }
    return s;
  });
}
function ib(t) {
  t === void 0 && (t = {});
  var e = t.connector, r = e === void 0 ? function() {
    return new Ji();
  } : e, n = t.resetOnError, s = n === void 0 ? !0 : n, i = t.resetOnComplete, a = i === void 0 ? !0 : i, o = t.resetOnRefCountZero, c = o === void 0 ? !0 : o;
  return function(m) {
    var d, l, f, g = 0, h = !1, u = !1, b = function() {
      l == null || l.unsubscribe(), l = void 0;
    }, p = function() {
      b(), d = f = void 0, h = u = !1;
    }, y = function() {
      var v = d;
      p(), v == null || v.unsubscribe();
    };
    return Kl(function(v, E) {
      g++, !u && !h && b();
      var x = f = f ?? r();
      E.add(function() {
        g--, g === 0 && !u && !h && (l = Cu(y, c));
      }), x.subscribe(E), !d && g > 0 && (d = new Sl({
        next: function(C) {
          return x.next(C);
        },
        error: function(C) {
          u = !0, b(), l = Cu(p, s, C), x.error(C);
        },
        complete: function() {
          h = !0, b(), l = Cu(p, a), x.complete();
        }
      }), lh(v).subscribe(d));
    })(m);
  };
}
function Cu(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var s = new Sl({
      next: function() {
        s.unsubscribe(), t();
      }
    });
    return lh(e.apply(void 0, Zn([], ba(r)))).subscribe(s);
  }
}
function ob(t, e, r) {
  var n, s = !1;
  return n = t, ib({
    connector: function() {
      return new My(n, e, r);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: s
  });
}
function ab() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = Ly(t);
  return Kl(function(n, s) {
    for (var i = t.length, a = new Array(i), o = t.map(function() {
      return !1;
    }), c = !1, m = function(l) {
      lh(t[l]).subscribe(Ol(s, function(f) {
        a[l] = f, !c && !o[l] && (o[l] = !0, (c = o.every(ah)) && (o = null));
      }, ff));
    }, d = 0; d < i; d++)
      m(d);
    n.subscribe(Ol(s, function(l) {
      if (c) {
        var f = Zn([l], ba(a));
        s.next(r ? r.apply(void 0, Zn([], ba(f))) : f);
      }
    }));
  });
}
const lb = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku"
}, zp = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser"
}, ut = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv"
}, qt = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku"
}, As = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit"
};
let q = class po {
  /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getFirstMatch(e, r) {
    const n = r.match(e);
    return n && n.length > 0 && n[1] || "";
  }
  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(e, r) {
    const n = r.match(e);
    return n && n.length > 1 && n[2] || "";
  }
  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(e, r, n) {
    if (e.test(r))
      return n;
  }
  static getWindowsVersionName(e) {
    switch (e) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getMacOSVersionName(e) {
    const r = e.split(".").splice(0, 2).map((n) => parseInt(n, 10) || 0);
    if (r.push(0), r[0] === 10)
      switch (r[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getAndroidVersionName(e) {
    const r = e.split(".").splice(0, 2).map((n) => parseInt(n, 10) || 0);
    if (r.push(0), !(r[0] === 1 && r[1] < 5)) {
      if (r[0] === 1 && r[1] < 6) return "Cupcake";
      if (r[0] === 1 && r[1] >= 6) return "Donut";
      if (r[0] === 2 && r[1] < 2) return "Eclair";
      if (r[0] === 2 && r[1] === 2) return "Froyo";
      if (r[0] === 2 && r[1] > 2) return "Gingerbread";
      if (r[0] === 3) return "Honeycomb";
      if (r[0] === 4 && r[1] < 1) return "Ice Cream Sandwich";
      if (r[0] === 4 && r[1] < 4) return "Jelly Bean";
      if (r[0] === 4 && r[1] >= 4) return "KitKat";
      if (r[0] === 5) return "Lollipop";
      if (r[0] === 6) return "Marshmallow";
      if (r[0] === 7) return "Nougat";
      if (r[0] === 8) return "Oreo";
      if (r[0] === 9) return "Pie";
    }
  }
  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  static getVersionPrecision(e) {
    return e.split(".").length;
  }
  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */
  /* eslint consistent-return: 1 */
  static compareVersions(e, r, n = !1) {
    const s = po.getVersionPrecision(e), i = po.getVersionPrecision(r);
    let a = Math.max(s, i), o = 0;
    const c = po.map([e, r], (m) => {
      const d = a - po.getVersionPrecision(m), l = m + new Array(d + 1).join(".0");
      return po.map(l.split("."), (f) => new Array(20 - f.length).join("0") + f).reverse();
    });
    for (n && (o = a - Math.min(s, i)), a -= 1; a >= o; ) {
      if (c[0][a] > c[1][a])
        return 1;
      if (c[0][a] === c[1][a]) {
        if (a === o)
          return 0;
        a -= 1;
      } else if (c[0][a] < c[1][a])
        return -1;
    }
  }
  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  static map(e, r) {
    const n = [];
    let s;
    if (Array.prototype.map)
      return Array.prototype.map.call(e, r);
    for (s = 0; s < e.length; s += 1)
      n.push(r(e[s]));
    return n;
  }
  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(e, r) {
    let n, s;
    if (Array.prototype.find)
      return Array.prototype.find.call(e, r);
    for (n = 0, s = e.length; n < s; n += 1) {
      const i = e[n];
      if (r(i, n))
        return i;
    }
  }
  /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */
  static assign(e, ...r) {
    const n = e;
    let s, i;
    if (Object.assign)
      return Object.assign(e, ...r);
    for (s = 0, i = r.length; s < i; s += 1) {
      const a = r[s];
      typeof a == "object" && a !== null && Object.keys(a).forEach((c) => {
        n[c] = a[c];
      });
    }
    return e;
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */
  static getBrowserAlias(e) {
    return lb[e];
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */
  static getBrowserTypeByAlias(e) {
    return zp[e] || "";
  }
};
const ze = /version\/(\d+(\.?_?\d+)+)/i, cb = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(t) {
      const e = {
        name: "Googlebot"
      }, r = q.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(t) {
      const e = {
        name: "Opera"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(t) {
      const e = {
        name: "Opera"
      }, r = q.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/SamsungBrowser/i],
    describe(t) {
      const e = {
        name: "Samsung Internet for Android"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/Whale/i],
    describe(t) {
      const e = {
        name: "NAVER Whale Browser"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/MZBrowser/i],
    describe(t) {
      const e = {
        name: "MZ Browser"
      }, r = q.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/focus/i],
    describe(t) {
      const e = {
        name: "Focus"
      }, r = q.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/swing/i],
    describe(t) {
      const e = {
        name: "Swing"
      }, r = q.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/coast/i],
    describe(t) {
      const e = {
        name: "Opera Coast"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(t) {
      const e = {
        name: "Opera Touch"
      }, r = q.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/yabrowser/i],
    describe(t) {
      const e = {
        name: "Yandex Browser"
      }, r = q.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/ucbrowser/i],
    describe(t) {
      const e = {
        name: "UC Browser"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/Maxthon|mxios/i],
    describe(t) {
      const e = {
        name: "Maxthon"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/epiphany/i],
    describe(t) {
      const e = {
        name: "Epiphany"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/puffin/i],
    describe(t) {
      const e = {
        name: "Puffin"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/sleipnir/i],
    describe(t) {
      const e = {
        name: "Sleipnir"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/k-meleon/i],
    describe(t) {
      const e = {
        name: "K-Meleon"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/micromessenger/i],
    describe(t) {
      const e = {
        name: "WeChat"
      }, r = q.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/qqbrowser/i],
    describe(t) {
      const e = {
        name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser"
      }, r = q.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/msie|trident/i],
    describe(t) {
      const e = {
        name: "Internet Explorer"
      }, r = q.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/\sedg\//i],
    describe(t) {
      const e = {
        name: "Microsoft Edge"
      }, r = q.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(t) {
      const e = {
        name: "Microsoft Edge"
      }, r = q.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/vivaldi/i],
    describe(t) {
      const e = {
        name: "Vivaldi"
      }, r = q.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/seamonkey/i],
    describe(t) {
      const e = {
        name: "SeaMonkey"
      }, r = q.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/sailfish/i],
    describe(t) {
      const e = {
        name: "Sailfish"
      }, r = q.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/silk/i],
    describe(t) {
      const e = {
        name: "Amazon Silk"
      }, r = q.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/phantom/i],
    describe(t) {
      const e = {
        name: "PhantomJS"
      }, r = q.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/slimerjs/i],
    describe(t) {
      const e = {
        name: "SlimerJS"
      }, r = q.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(t) {
      const e = {
        name: "BlackBerry"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(t) {
      const e = {
        name: "WebOS Browser"
      }, r = q.getFirstMatch(ze, t) || q.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/bada/i],
    describe(t) {
      const e = {
        name: "Bada"
      }, r = q.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/tizen/i],
    describe(t) {
      const e = {
        name: "Tizen"
      }, r = q.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/qupzilla/i],
    describe(t) {
      const e = {
        name: "QupZilla"
      }, r = q.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(t) {
      const e = {
        name: "Firefox"
      }, r = q.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/electron/i],
    describe(t) {
      const e = {
        name: "Electron"
      }, r = q.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/MiuiBrowser/i],
    describe(t) {
      const e = {
        name: "Miui"
      }, r = q.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/chromium/i],
    describe(t) {
      const e = {
        name: "Chromium"
      }, r = q.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(t) {
      const e = {
        name: "Chrome"
      }, r = q.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  {
    test: [/GSA/i],
    describe(t) {
      const e = {
        name: "Google Search"
      }, r = q.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  /* Android Browser */
  {
    test(t) {
      const e = !t.test(/like android/i), r = t.test(/android/i);
      return e && r;
    },
    describe(t) {
      const e = {
        name: "Android Browser"
      }, r = q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(t) {
      const e = {
        name: "PlayStation 4"
      }, r = q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(t) {
      const e = {
        name: "Safari"
      }, r = q.getFirstMatch(ze, t);
      return r && (e.version = r), e;
    }
  },
  /* Something else */
  {
    test: [/.*/i],
    describe(t) {
      const e = /^(.*)\/(.*) /, r = /^(.*)\/(.*)[ \t]\((.*)/, s = t.search("\\(") !== -1 ? r : e;
      return {
        name: q.getFirstMatch(s, t),
        version: q.getSecondMatch(s, t)
      };
    }
  }
], ub = [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(t) {
      const e = q.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
      return {
        name: qt.Roku,
        version: e
      };
    }
  },
  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(t) {
      const e = q.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
      return {
        name: qt.WindowsPhone,
        version: e
      };
    }
  },
  /* Windows */
  {
    test: [/windows /i],
    describe(t) {
      const e = q.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t), r = q.getWindowsVersionName(e);
      return {
        name: qt.Windows,
        version: e,
        versionName: r
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(t) {
      const e = {
        name: qt.iOS
      }, r = q.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
      return r && (e.version = r), e;
    }
  },
  /* macOS */
  {
    test: [/macintosh/i],
    describe(t) {
      const e = q.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."), r = q.getMacOSVersionName(e), n = {
        name: qt.MacOS,
        version: e
      };
      return r && (n.versionName = r), n;
    }
  },
  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(t) {
      const e = q.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
      return {
        name: qt.iOS,
        version: e
      };
    }
  },
  /* Android */
  {
    test(t) {
      const e = !t.test(/like android/i), r = t.test(/android/i);
      return e && r;
    },
    describe(t) {
      const e = q.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t), r = q.getAndroidVersionName(e), n = {
        name: qt.Android,
        version: e
      };
      return r && (n.versionName = r), n;
    }
  },
  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(t) {
      const e = q.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t), r = {
        name: qt.WebOS
      };
      return e && e.length && (r.version = e), r;
    }
  },
  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(t) {
      const e = q.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || q.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || q.getFirstMatch(/\bbb(\d+)/i, t);
      return {
        name: qt.BlackBerry,
        version: e
      };
    }
  },
  /* Bada */
  {
    test: [/bada/i],
    describe(t) {
      const e = q.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
      return {
        name: qt.Bada,
        version: e
      };
    }
  },
  /* Tizen */
  {
    test: [/tizen/i],
    describe(t) {
      const e = q.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
      return {
        name: qt.Tizen,
        version: e
      };
    }
  },
  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: qt.Linux
      };
    }
  },
  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: qt.ChromeOS
      };
    }
  },
  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(t) {
      const e = q.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
      return {
        name: qt.PlayStation4,
        version: e
      };
    }
  }
], fb = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: "bot",
        vendor: "Google"
      };
    }
  },
  /* Huawei */
  {
    test: [/huawei/i],
    describe(t) {
      const e = q.getFirstMatch(/(can-l01)/i, t) && "Nova", r = {
        type: ut.mobile,
        vendor: "Huawei"
      };
      return e && (r.model = e), r;
    }
  },
  /* Nexus Tablet */
  {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: ut.tablet,
        vendor: "Nexus"
      };
    }
  },
  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: ut.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe() {
      return {
        type: ut.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: ut.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7"
      };
    }
  },
  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: ut.tablet,
        vendor: "Amazon"
      };
    }
  },
  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: ut.tablet
      };
    }
  },
  /* iPod/iPhone */
  {
    test(t) {
      const e = t.test(/ipod|iphone/i), r = t.test(/like (ipod|iphone)/i);
      return e && !r;
    },
    describe(t) {
      const e = q.getFirstMatch(/(ipod|iphone)/i, t);
      return {
        type: ut.mobile,
        vendor: "Apple",
        model: e
      };
    }
  },
  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: ut.mobile,
        vendor: "Nexus"
      };
    }
  },
  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: ut.mobile
      };
    }
  },
  /* BlackBerry */
  {
    test(t) {
      return t.getBrowserName(!0) === "blackberry";
    },
    describe() {
      return {
        type: ut.mobile,
        vendor: "BlackBerry"
      };
    }
  },
  /* Bada */
  {
    test(t) {
      return t.getBrowserName(!0) === "bada";
    },
    describe() {
      return {
        type: ut.mobile
      };
    }
  },
  /* Windows Phone */
  {
    test(t) {
      return t.getBrowserName() === "windows phone";
    },
    describe() {
      return {
        type: ut.mobile,
        vendor: "Microsoft"
      };
    }
  },
  /* Android Tablet */
  {
    test(t) {
      const e = Number(String(t.getOSVersion()).split(".")[0]);
      return t.getOSName(!0) === "android" && e >= 3;
    },
    describe() {
      return {
        type: ut.tablet
      };
    }
  },
  /* Android Mobile */
  {
    test(t) {
      return t.getOSName(!0) === "android";
    },
    describe() {
      return {
        type: ut.mobile
      };
    }
  },
  /* desktop */
  {
    test(t) {
      return t.getOSName(!0) === "macos";
    },
    describe() {
      return {
        type: ut.desktop,
        vendor: "Apple"
      };
    }
  },
  /* Windows */
  {
    test(t) {
      return t.getOSName(!0) === "windows";
    },
    describe() {
      return {
        type: ut.desktop
      };
    }
  },
  /* Linux */
  {
    test(t) {
      return t.getOSName(!0) === "linux";
    },
    describe() {
      return {
        type: ut.desktop
      };
    }
  },
  /* PlayStation 4 */
  {
    test(t) {
      return t.getOSName(!0) === "playstation 4";
    },
    describe() {
      return {
        type: ut.tv
      };
    }
  },
  /* Roku */
  {
    test(t) {
      return t.getOSName(!0) === "roku";
    },
    describe() {
      return {
        type: ut.tv
      };
    }
  }
], hb = [
  /* EdgeHTML */
  {
    test(t) {
      return t.getBrowserName(!0) === "microsoft edge";
    },
    describe(t) {
      if (/\sedg\//i.test(t))
        return {
          name: As.Blink
        };
      const r = q.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
      return {
        name: As.EdgeHTML,
        version: r
      };
    }
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(t) {
      const e = {
        name: As.Trident
      }, r = q.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  /* Presto */
  {
    test(t) {
      return t.test(/presto/i);
    },
    describe(t) {
      const e = {
        name: As.Presto
      }, r = q.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  /* Gecko */
  {
    test(t) {
      const e = t.test(/gecko/i), r = t.test(/like gecko/i);
      return e && !r;
    },
    describe(t) {
      const e = {
        name: As.Gecko
      }, r = q.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  },
  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: As.Blink
      };
    }
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(t) {
      const e = {
        name: As.WebKit
      }, r = q.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
      return r && (e.version = r), e;
    }
  }
];
let zh = class {
  /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */
  constructor(e, r = !1) {
    if (e == null || e === "")
      throw new Error("UserAgent parameter can't be empty");
    this._ua = e, this.parsedResult = {}, r !== !0 && this.parse();
  }
  /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */
  getUA() {
    return this._ua;
  }
  /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  test(e) {
    return e.test(this._ua);
  }
  /**
   * Get parsed browser object
   * @return {Object}
   */
  parseBrowser() {
    this.parsedResult.browser = {};
    const e = q.find(cb, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
  }
  /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */
  getBrowserName(e) {
    return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */
  parseOS() {
    this.parsedResult.os = {};
    const e = q.find(ub, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
  }
  /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */
  getOSName(e) {
    const { name: r } = this.getOS();
    return e ? String(r).toLowerCase() || "" : r || "";
  }
  /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */
  getOSVersion() {
    return this.getOS().version;
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */
  getPlatformType(e = !1) {
    const { type: r } = this.getPlatform();
    return e ? String(r).toLowerCase() || "" : r || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};
    const e = q.find(fb, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
  }
  /**
   * Get parsed engine
   * @return {{}}
   */
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */
  getEngineName(e) {
    return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parseEngine() {
    this.parsedResult.engine = {};
    const e = q.find(hb, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
  }
  /**
   * Parse full information about the browser
   * @returns {Parser}
   */
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  /**
   * Get parsed result
   * @return {ParsedResult}
   */
  getResult() {
    return q.assign({}, this.parsedResult);
  }
  /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */
  satisfies(e) {
    const r = {};
    let n = 0;
    const s = {};
    let i = 0;
    if (Object.keys(e).forEach((o) => {
      const c = e[o];
      typeof c == "string" ? (s[o] = c, i += 1) : typeof c == "object" && (r[o] = c, n += 1);
    }), n > 0) {
      const o = Object.keys(r), c = q.find(o, (d) => this.isOS(d));
      if (c) {
        const d = this.satisfies(r[c]);
        if (d !== void 0)
          return d;
      }
      const m = q.find(
        o,
        (d) => this.isPlatform(d)
      );
      if (m) {
        const d = this.satisfies(r[m]);
        if (d !== void 0)
          return d;
      }
    }
    if (i > 0) {
      const o = Object.keys(s), c = q.find(o, (m) => this.isBrowser(m, !0));
      if (c !== void 0)
        return this.compareVersion(s[c]);
    }
  }
  /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */
  isBrowser(e, r = !1) {
    const n = this.getBrowserName().toLowerCase();
    let s = e.toLowerCase();
    const i = q.getBrowserTypeByAlias(s);
    return r && i && (s = i.toLowerCase()), s === n;
  }
  compareVersion(e) {
    let r = [0], n = e, s = !1;
    const i = this.getBrowserVersion();
    if (typeof i == "string")
      return e[0] === ">" || e[0] === "<" ? (n = e.substr(1), e[1] === "=" ? (s = !0, n = e.substr(2)) : r = [], e[0] === ">" ? r.push(1) : r.push(-1)) : e[0] === "=" ? n = e.substr(1) : e[0] === "~" && (s = !0, n = e.substr(1)), r.indexOf(
        q.compareVersions(i, n, s)
      ) > -1;
  }
  isOS(e) {
    return this.getOSName(!0) === String(e).toLowerCase();
  }
  isPlatform(e) {
    return this.getPlatformType(!0) === String(e).toLowerCase();
  }
  isEngine(e) {
    return this.getEngineName(!0) === String(e).toLowerCase();
  }
  /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */
  is(e, r = !1) {
    return this.isBrowser(e, r) || this.isOS(e) || this.isPlatform(e);
  }
  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(e = []) {
    return e.some((r) => this.is(r));
  }
};
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class db {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */
  static getParser(e, r = !1) {
    if (typeof e != "string")
      throw new Error("UserAgent should be a string");
    return new zh(e, r);
  }
  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */
  static parse(e) {
    return new zh(e).getResult();
  }
  static get BROWSER_MAP() {
    return zp;
  }
  static get ENGINE_MAP() {
    return As;
  }
  static get OS_MAP() {
    return qt;
  }
  static get PLATFORMS_MAP() {
    return ut;
  }
}
function Oo() {
}
function pb(t) {
  return t();
}
function mb(t) {
  t.forEach(pb);
}
function gb(t) {
  return typeof t == "function";
}
function yb(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function bb(t, ...e) {
  if (t == null)
    return Oo;
  const r = t.subscribe(...e);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const lo = [];
function wb(t, e) {
  return {
    subscribe: nu(t, e).subscribe
  };
}
function nu(t, e = Oo) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function s(o) {
    if (yb(t, o) && (t = o, r)) {
      const c = !lo.length;
      for (const m of n)
        m[1](), lo.push(m, t);
      if (c) {
        for (let m = 0; m < lo.length; m += 2)
          lo[m][0](lo[m + 1]);
        lo.length = 0;
      }
    }
  }
  function i(o) {
    s(o(t));
  }
  function a(o, c = Oo) {
    const m = [o, c];
    return n.add(m), n.size === 1 && (r = e(s) || Oo), o(t), () => {
      n.delete(m), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: s, update: i, subscribe: a };
}
function Ra(t, e, r) {
  const n = !Array.isArray(t), s = n ? [t] : t, i = e.length < 2;
  return wb(r, (a) => {
    let o = !1;
    const c = [];
    let m = 0, d = Oo;
    const l = () => {
      if (m)
        return;
      d();
      const g = e(n ? c[0] : c, a);
      i ? a(g) : d = gb(g) ? g : Oo;
    }, f = s.map((g, h) => bb(g, (u) => {
      c[h] = u, m &= ~(1 << h), o && l();
    }, () => {
      m |= 1 << h;
    }));
    return o = !0, l(), function() {
      mb(f), d(), o = !1;
    };
  });
}
var Dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ch(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function bS(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Nu, Qh;
function vb() {
  if (Qh) return Nu;
  Qh = 1;
  var t = function(y) {
    return e(y) && !r(y);
  };
  function e(p) {
    return !!p && typeof p == "object";
  }
  function r(p) {
    var y = Object.prototype.toString.call(p);
    return y === "[object RegExp]" || y === "[object Date]" || i(p);
  }
  var n = typeof Symbol == "function" && Symbol.for, s = n ? Symbol.for("react.element") : 60103;
  function i(p) {
    return p.$$typeof === s;
  }
  function a(p) {
    return Array.isArray(p) ? [] : {};
  }
  function o(p, y) {
    return y.clone !== !1 && y.isMergeableObject(p) ? u(a(p), p, y) : p;
  }
  function c(p, y, v) {
    return p.concat(y).map(function(E) {
      return o(E, v);
    });
  }
  function m(p, y) {
    if (!y.customMerge)
      return u;
    var v = y.customMerge(p);
    return typeof v == "function" ? v : u;
  }
  function d(p) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(p).filter(function(y) {
      return Object.propertyIsEnumerable.call(p, y);
    }) : [];
  }
  function l(p) {
    return Object.keys(p).concat(d(p));
  }
  function f(p, y) {
    try {
      return y in p;
    } catch {
      return !1;
    }
  }
  function g(p, y) {
    return f(p, y) && !(Object.hasOwnProperty.call(p, y) && Object.propertyIsEnumerable.call(p, y));
  }
  function h(p, y, v) {
    var E = {};
    return v.isMergeableObject(p) && l(p).forEach(function(x) {
      E[x] = o(p[x], v);
    }), l(y).forEach(function(x) {
      g(p, x) || (f(p, x) && v.isMergeableObject(y[x]) ? E[x] = m(x, v)(p[x], y[x], v) : E[x] = o(y[x], v));
    }), E;
  }
  function u(p, y, v) {
    v = v || {}, v.arrayMerge = v.arrayMerge || c, v.isMergeableObject = v.isMergeableObject || t, v.cloneUnlessOtherwiseSpecified = o;
    var E = Array.isArray(y), x = Array.isArray(p), C = E === x;
    return C ? E ? v.arrayMerge(p, y, v) : h(p, y, v) : o(y, v);
  }
  u.all = function(y, v) {
    if (!Array.isArray(y))
      throw new Error("first argument should be an array");
    return y.reduce(function(E, x) {
      return u(E, x, v);
    }, {});
  };
  var b = u;
  return Nu = b, Nu;
}
var Ab = vb();
const Eb = /* @__PURE__ */ ch(Ab);
function Ru(t, e) {
  var r = e && e.cache ? e.cache : Cb, n = e && e.serializer ? e.serializer : Ib, s = e && e.strategy ? e.strategy : xb;
  return s(t, {
    cache: r,
    serializer: n
  });
}
function _b(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Qp(t, e, r, n) {
  var s = _b(n) ? n : r(n), i = e.get(s);
  return typeof i > "u" && (i = t.call(this, n), e.set(s, i)), i;
}
function qp(t, e, r) {
  var n = Array.prototype.slice.call(arguments, 3), s = r(n), i = e.get(s);
  return typeof i > "u" && (i = t.apply(this, n), e.set(s, i)), i;
}
function uh(t, e, r, n, s) {
  return r.bind(e, t, n, s);
}
function xb(t, e) {
  var r = t.length === 1 ? Qp : qp;
  return uh(t, this, r, e.cache.create(), e.serializer);
}
function Sb(t, e) {
  return uh(t, this, qp, e.cache.create(), e.serializer);
}
function Ob(t, e) {
  return uh(t, this, Qp, e.cache.create(), e.serializer);
}
var Ib = function() {
  return JSON.stringify(arguments);
}, Tb = (
  /** @class */
  function() {
    function t() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return t.prototype.get = function(e) {
      return this.cache[e];
    }, t.prototype.set = function(e, r) {
      this.cache[e] = r;
    }, t;
  }()
), Cb = {
  create: function() {
    return new Tb();
  }
}, Pu = {
  variadic: Sb,
  monadic: Ob
}, Re;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Re || (Re = {}));
var et;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(et || (et = {}));
var wa;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(wa || (wa = {}));
function qh(t) {
  return t.type === et.literal;
}
function Nb(t) {
  return t.type === et.argument;
}
function Jp(t) {
  return t.type === et.number;
}
function Kp(t) {
  return t.type === et.date;
}
function Zp(t) {
  return t.type === et.time;
}
function Xp(t) {
  return t.type === et.select;
}
function Yp(t) {
  return t.type === et.plural;
}
function Rb(t) {
  return t.type === et.pound;
}
function em(t) {
  return t.type === et.tag;
}
function tm(t) {
  return !!(t && typeof t == "object" && t.type === wa.number);
}
function hf(t) {
  return !!(t && typeof t == "object" && t.type === wa.dateTime);
}
var rm = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Pb = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function kb(t) {
  var e = {};
  return t.replace(Pb, function(r) {
    var n = r.length;
    switch (r[0]) {
      // Era
      case "G":
        e.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      // Year
      case "y":
        e.year = n === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      // Quarter
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      // Month
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
        break;
      // Week
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][n - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      // Weekday
      case "E":
        e.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "e":
        if (n < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "c":
        if (n < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      // Period
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      // am, pm, noon, midnight
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      // Hour
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      // Minute
      case "m":
        e.minute = ["numeric", "2-digit"][n - 1];
        break;
      // Second
      case "s":
        e.second = ["numeric", "2-digit"][n - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      // Zone
      case "z":
        e.timeZoneName = n < 4 ? "short" : "long";
        break;
      case "Z":
      // 1..3, 4, 5: The ISO8601 varios formats
      case "O":
      // 1, 4: milliseconds in day short, long
      case "v":
      // 1, 4: generic non-location format
      case "V":
      // 1, 2, 3, 4: time zone ID or city
      case "X":
      // 1, 2, 3, 4: The ISO8601 varios formats
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var Bb = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Mb(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Bb).filter(function(f) {
    return f.length > 0;
  }), r = [], n = 0, s = e; n < s.length; n++) {
    var i = s[n], a = i.split("/");
    if (a.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = a[0], c = a.slice(1), m = 0, d = c; m < d.length; m++) {
      var l = d[m];
      if (l.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: o, options: c });
  }
  return r;
}
function Db(t) {
  return t.replace(/^(.*?)-/, "");
}
var Jh = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, nm = /^(@+)?(\+|#+)?[rs]?$/g, Lb = /(\*)(0+)|(#+)(0+)|(0+)/g, sm = /^(0+)$/;
function Kh(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(nm, function(r, n, s) {
    return typeof s != "string" ? (e.minimumSignificantDigits = n.length, e.maximumSignificantDigits = n.length) : s === "+" ? e.minimumSignificantDigits = n.length : n[0] === "#" ? e.maximumSignificantDigits = n.length : (e.minimumSignificantDigits = n.length, e.maximumSignificantDigits = n.length + (typeof s == "string" ? s.length : 0)), "";
  }), e;
}
function im(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function Ub(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var r = t.slice(0, 2);
    if (r === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : r === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !sm.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Zh(t) {
  var e = {}, r = im(t);
  return r || e;
}
function Fb(t) {
  for (var e = {}, r = 0, n = t; r < n.length; r++) {
    var s = n[r];
    switch (s.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = s.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = Db(s.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = Ue(Ue(Ue({}, e), { notation: "scientific" }), s.options.reduce(function(c, m) {
          return Ue(Ue({}, c), Zh(m));
        }, {}));
        continue;
      case "engineering":
        e = Ue(Ue(Ue({}, e), { notation: "engineering" }), s.options.reduce(function(c, m) {
          return Ue(Ue({}, c), Zh(m));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(s.options[0]);
        continue;
      case "rounding-mode-floor":
        e.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        e.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        e.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        e.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        e.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        e.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        e.roundingMode = "halfExpand";
        continue;
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
      case "integer-width":
        if (s.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        s.options[0].replace(Lb, function(c, m, d, l, f, g) {
          if (m)
            e.minimumIntegerDigits = d.length;
          else {
            if (l && f)
              throw new Error("We currently do not support maximum integer digits");
            if (g)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (sm.test(s.stem)) {
      e.minimumIntegerDigits = s.stem.length;
      continue;
    }
    if (Jh.test(s.stem)) {
      if (s.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      s.stem.replace(Jh, function(c, m, d, l, f, g) {
        return d === "*" ? e.minimumFractionDigits = m.length : l && l[0] === "#" ? e.maximumFractionDigits = l.length : f && g ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + g.length) : (e.minimumFractionDigits = m.length, e.maximumFractionDigits = m.length), "";
      });
      var i = s.options[0];
      i === "w" ? e = Ue(Ue({}, e), { trailingZeroDisplay: "stripIfInteger" }) : i && (e = Ue(Ue({}, e), Kh(i)));
      continue;
    }
    if (nm.test(s.stem)) {
      e = Ue(Ue({}, e), Kh(s.stem));
      continue;
    }
    var a = im(s.stem);
    a && (e = Ue(Ue({}, e), a));
    var o = Ub(s.stem);
    o && (e = Ue(Ue({}, e), o));
  }
  return e;
}
var ic = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function jb(t, e) {
  for (var r = "", n = 0; n < t.length; n++) {
    var s = t.charAt(n);
    if (s === "j") {
      for (var i = 0; n + 1 < t.length && t.charAt(n + 1) === s; )
        i++, n++;
      var a = 1 + (i & 1), o = i < 2 ? 1 : 3 + (i >> 1), c = "a", m = Hb(e);
      for ((m == "H" || m == "k") && (o = 0); o-- > 0; )
        r += c;
      for (; a-- > 0; )
        r = m + r;
    } else s === "J" ? r += "H" : r += s;
  }
  return r;
}
function Hb(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var r = t.language, n;
  r !== "root" && (n = t.maximize().region);
  var s = ic[n || ""] || ic[r || ""] || ic["".concat(r, "-001")] || ic["001"];
  return s[0];
}
var ku, Gb = new RegExp("^".concat(rm.source, "*")), $b = new RegExp("".concat(rm.source, "*$"));
function Be(t, e) {
  return { start: t, end: e };
}
var Wb = !!String.prototype.startsWith && "_a".startsWith("a", 1), Vb = !!String.fromCodePoint, zb = !!Object.fromEntries, Qb = !!String.prototype.codePointAt, qb = !!String.prototype.trimStart, Jb = !!String.prototype.trimEnd, Kb = !!Number.isSafeInteger, Zb = Kb ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, df = !0;
try {
  var Xb = am("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  df = ((ku = Xb.exec("a")) === null || ku === void 0 ? void 0 : ku[0]) === "a";
} catch {
  df = !1;
}
var Xh = Wb ? (
  // Native
  function(e, r, n) {
    return e.startsWith(r, n);
  }
) : (
  // For IE11
  function(e, r, n) {
    return e.slice(n, n + r.length) === r;
  }
), pf = Vb ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    for (var n = "", s = e.length, i = 0, a; s > i; ) {
      if (a = e[i++], a > 1114111)
        throw RangeError(a + " is not a valid code point");
      n += a < 65536 ? String.fromCharCode(a) : String.fromCharCode(((a -= 65536) >> 10) + 55296, a % 1024 + 56320);
    }
    return n;
  }
), Yh = (
  // native
  zb ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var r = {}, n = 0, s = e; n < s.length; n++) {
        var i = s[n], a = i[0], o = i[1];
        r[a] = o;
      }
      return r;
    }
  )
), om = Qb ? (
  // Native
  function(e, r) {
    return e.codePointAt(r);
  }
) : (
  // IE 11
  function(e, r) {
    var n = e.length;
    if (!(r < 0 || r >= n)) {
      var s = e.charCodeAt(r), i;
      return s < 55296 || s > 56319 || r + 1 === n || (i = e.charCodeAt(r + 1)) < 56320 || i > 57343 ? s : (s - 55296 << 10) + (i - 56320) + 65536;
    }
  }
), Yb = qb ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Gb, "");
  }
), e0 = Jb ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace($b, "");
  }
);
function am(t, e) {
  return new RegExp(t, e);
}
var mf;
if (df) {
  var ed = am("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  mf = function(e, r) {
    var n;
    ed.lastIndex = r;
    var s = ed.exec(e);
    return (n = s[1]) !== null && n !== void 0 ? n : "";
  };
} else
  mf = function(e, r) {
    for (var n = []; ; ) {
      var s = om(e, r);
      if (s === void 0 || lm(s) || s0(s))
        break;
      n.push(s), r += s >= 65536 ? 2 : 1;
    }
    return pf.apply(void 0, n);
  };
var t0 = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, r, n) {
      for (var s = []; !this.isEOF(); ) {
        var i = this.char();
        if (i === 123) {
          var a = this.parseArgument(e, n);
          if (a.err)
            return a;
          s.push(a.val);
        } else {
          if (i === 125 && e > 0)
            break;
          if (i === 35 && (r === "plural" || r === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), s.push({
              type: et.pound,
              location: Be(o, this.clonePosition())
            });
          } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(Re.UNMATCHED_CLOSING_TAG, Be(this.clonePosition(), this.clonePosition()));
          } else if (i === 60 && !this.ignoreTag && gf(this.peek() || 0)) {
            var a = this.parseTag(e, r);
            if (a.err)
              return a;
            s.push(a.val);
          } else {
            var a = this.parseLiteral(e, r);
            if (a.err)
              return a;
            s.push(a.val);
          }
        }
      }
      return { val: s, err: null };
    }, t.prototype.parseTag = function(e, r) {
      var n = this.clonePosition();
      this.bump();
      var s = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: et.literal,
            value: "<".concat(s, "/>"),
            location: Be(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var i = this.parseMessage(e + 1, r, !0);
        if (i.err)
          return i;
        var a = i.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !gf(this.char()))
            return this.error(Re.INVALID_TAG, Be(o, this.clonePosition()));
          var c = this.clonePosition(), m = this.parseTagName();
          return s !== m ? this.error(Re.UNMATCHED_CLOSING_TAG, Be(c, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: et.tag,
              value: s,
              children: a,
              location: Be(n, this.clonePosition())
            },
            err: null
          } : this.error(Re.INVALID_TAG, Be(o, this.clonePosition())));
        } else
          return this.error(Re.UNCLOSED_TAG, Be(n, this.clonePosition()));
      } else
        return this.error(Re.INVALID_TAG, Be(n, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && n0(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, r) {
      for (var n = this.clonePosition(), s = ""; ; ) {
        var i = this.tryParseQuote(r);
        if (i) {
          s += i;
          continue;
        }
        var a = this.tryParseUnquoted(e, r);
        if (a) {
          s += a;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          s += o;
          continue;
        }
        break;
      }
      var c = Be(n, this.clonePosition());
      return {
        val: { type: et.literal, value: s, location: c },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !r0(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        // '{', '<', '>', '}'
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var r = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char();
        if (n === 39)
          if (this.peek() === 39)
            r.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          r.push(n);
        this.bump();
      }
      return pf.apply(void 0, r);
    }, t.prototype.tryParseUnquoted = function(e, r) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), pf(n));
    }, t.prototype.parseArgument = function(e, r) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, Be(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Re.EMPTY_ARGUMENT, Be(n, this.clonePosition()));
      var s = this.parseIdentifierIfPossible().value;
      if (!s)
        return this.error(Re.MALFORMED_ARGUMENT, Be(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, Be(n, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: et.argument,
              // value does not include the opening and closing braces.
              value: s,
              location: Be(n, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, Be(n, this.clonePosition())) : this.parseArgumentOptions(e, r, s, n);
        default:
          return this.error(Re.MALFORMED_ARGUMENT, Be(n, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), r = this.offset(), n = mf(this.message, r), s = r + n.length;
      this.bumpTo(s);
      var i = this.clonePosition(), a = Be(e, i);
      return { value: n, location: a };
    }, t.prototype.parseArgumentOptions = function(e, r, n, s) {
      var i, a = this.clonePosition(), o = this.parseIdentifierIfPossible().value, c = this.clonePosition();
      switch (o) {
        case "":
          return this.error(Re.EXPECT_ARGUMENT_TYPE, Be(a, c));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var m = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
            if (l.err)
              return l;
            var f = e0(l.val);
            if (f.length === 0)
              return this.error(Re.EXPECT_ARGUMENT_STYLE, Be(this.clonePosition(), this.clonePosition()));
            var g = Be(d, this.clonePosition());
            m = { style: f, styleLocation: g };
          }
          var h = this.tryParseArgumentClose(s);
          if (h.err)
            return h;
          var u = Be(s, this.clonePosition());
          if (m && Xh(m == null ? void 0 : m.style, "::", 0)) {
            var b = Yb(m.style.slice(2));
            if (o === "number") {
              var l = this.parseNumberSkeletonFromString(b, m.styleLocation);
              return l.err ? l : {
                val: { type: et.number, value: n, location: u, style: l.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(Re.EXPECT_DATE_TIME_SKELETON, u);
              var p = b;
              this.locale && (p = jb(b, this.locale));
              var f = {
                type: wa.dateTime,
                pattern: p,
                location: m.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? kb(p) : {}
              }, y = o === "date" ? et.date : et.time;
              return {
                val: { type: y, value: n, location: u, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? et.number : o === "date" ? et.date : et.time,
              value: n,
              location: u,
              style: (i = m == null ? void 0 : m.style) !== null && i !== void 0 ? i : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var v = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Re.EXPECT_SELECT_ARGUMENT_OPTIONS, Be(v, Ue({}, v)));
          this.bumpSpace();
          var E = this.parseIdentifierIfPossible(), x = 0;
          if (o !== "select" && E.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Be(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var l = this.tryParseDecimalInteger(Re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Re.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (l.err)
              return l;
            this.bumpSpace(), E = this.parseIdentifierIfPossible(), x = l.val;
          }
          var C = this.tryParsePluralOrSelectOptions(e, o, r, E);
          if (C.err)
            return C;
          var h = this.tryParseArgumentClose(s);
          if (h.err)
            return h;
          var T = Be(s, this.clonePosition());
          return o === "select" ? {
            val: {
              type: et.select,
              value: n,
              options: Yh(C.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: et.plural,
              value: n,
              options: Yh(C.val),
              offset: x,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(Re.INVALID_ARGUMENT_TYPE, Be(a, c));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, Be(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var s = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Re.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Be(s, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(r.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(r.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, r) {
      var n = [];
      try {
        n = Mb(e);
      } catch {
        return this.error(Re.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: wa.number,
          tokens: n,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? Fb(n) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, r, n, s) {
      for (var i, a = !1, o = [], c = /* @__PURE__ */ new Set(), m = s.value, d = s.location; ; ) {
        if (m.length === 0) {
          var l = this.clonePosition();
          if (r !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Re.EXPECT_PLURAL_ARGUMENT_SELECTOR, Re.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Be(l, this.clonePosition()), m = this.message.slice(l.offset, this.offset());
          } else
            break;
        }
        if (c.has(m))
          return this.error(r === "select" ? Re.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Re.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        m === "other" && (a = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? Re.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Re.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Be(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, r, n);
        if (h.err)
          return h;
        var u = this.tryParseArgumentClose(g);
        if (u.err)
          return u;
        o.push([
          m,
          {
            value: h.val,
            location: Be(g, this.clonePosition())
          }
        ]), c.add(m), this.bumpSpace(), i = this.parseIdentifierIfPossible(), m = i.value, d = i.location;
      }
      return o.length === 0 ? this.error(r === "select" ? Re.EXPECT_SELECT_ARGUMENT_SELECTOR : Re.EXPECT_PLURAL_ARGUMENT_SELECTOR, Be(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(Re.MISSING_OTHER_CLAUSE, Be(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, r) {
      var n = 1, s = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var i = !1, a = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          i = !0, a = a * 10 + (o - 48), this.bump();
        else
          break;
      }
      var c = Be(s, this.clonePosition());
      return i ? (a *= n, Zb(a) ? { val: a, err: null } : this.error(r, c)) : this.error(e, c);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var r = om(this.message, e);
      if (r === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return r;
    }, t.prototype.error = function(e, r) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: r
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (Xh(this.message, e, this.offset())) {
        for (var r = 0; r < e.length; r++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var r = this.offset(), n = this.message.indexOf(e, r);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var r = this.offset();
        if (r === e)
          break;
        if (r > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && lm(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), r = this.offset(), n = this.message.charCodeAt(r + (e >= 65536 ? 2 : 1));
      return n ?? null;
    }, t;
  }()
);
function gf(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function r0(t) {
  return gf(t) || t === 47;
}
function n0(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function lm(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function s0(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function yf(t) {
  t.forEach(function(e) {
    if (delete e.location, Xp(e) || Yp(e))
      for (var r in e.options)
        delete e.options[r].location, yf(e.options[r].value);
    else Jp(e) && tm(e.style) || (Kp(e) || Zp(e)) && hf(e.style) ? delete e.style.location : em(e) && yf(e.children);
  });
}
function i0(t, e) {
  e === void 0 && (e = {}), e = Ue({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var r = new t0(t, e).parse();
  if (r.err) {
    var n = SyntaxError(Re[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return e != null && e.captureLocation || yf(r.val), r.val;
}
var va;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(va || (va = {}));
var su = (
  /** @class */
  function(t) {
    Xr(e, t);
    function e(r, n, s) {
      var i = t.call(this, r) || this;
      return i.code = n, i.originalMessage = s, i;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), td = (
  /** @class */
  function(t) {
    Xr(e, t);
    function e(r, n, s, i) {
      return t.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(s).join('", "'), '"'), va.INVALID_VALUE, i) || this;
    }
    return e;
  }(su)
), o0 = (
  /** @class */
  function(t) {
    Xr(e, t);
    function e(r, n, s) {
      return t.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), va.INVALID_VALUE, s) || this;
    }
    return e;
  }(su)
), a0 = (
  /** @class */
  function(t) {
    Xr(e, t);
    function e(r, n) {
      return t.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), va.MISSING_VALUE, n) || this;
    }
    return e;
  }(su)
), Zt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Zt || (Zt = {}));
function l0(t) {
  return t.length < 2 ? t : t.reduce(function(e, r) {
    var n = e[e.length - 1];
    return !n || n.type !== Zt.literal || r.type !== Zt.literal ? e.push(r) : n.value += r.value, e;
  }, []);
}
function c0(t) {
  return typeof t == "function";
}
function bc(t, e, r, n, s, i, a) {
  if (t.length === 1 && qh(t[0]))
    return [
      {
        type: Zt.literal,
        value: t[0].value
      }
    ];
  for (var o = [], c = 0, m = t; c < m.length; c++) {
    var d = m[c];
    if (qh(d)) {
      o.push({
        type: Zt.literal,
        value: d.value
      });
      continue;
    }
    if (Rb(d)) {
      typeof i == "number" && o.push({
        type: Zt.literal,
        value: r.getNumberFormat(e).format(i)
      });
      continue;
    }
    var l = d.value;
    if (!(s && l in s))
      throw new a0(l, a);
    var f = s[l];
    if (Nb(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), o.push({
        type: typeof f == "string" ? Zt.literal : Zt.object,
        value: f
      });
      continue;
    }
    if (Kp(d)) {
      var g = typeof d.style == "string" ? n.date[d.style] : hf(d.style) ? d.style.parsedOptions : void 0;
      o.push({
        type: Zt.literal,
        value: r.getDateTimeFormat(e, g).format(f)
      });
      continue;
    }
    if (Zp(d)) {
      var g = typeof d.style == "string" ? n.time[d.style] : hf(d.style) ? d.style.parsedOptions : n.time.medium;
      o.push({
        type: Zt.literal,
        value: r.getDateTimeFormat(e, g).format(f)
      });
      continue;
    }
    if (Jp(d)) {
      var g = typeof d.style == "string" ? n.number[d.style] : tm(d.style) ? d.style.parsedOptions : void 0;
      g && g.scale && (f = f * (g.scale || 1)), o.push({
        type: Zt.literal,
        value: r.getNumberFormat(e, g).format(f)
      });
      continue;
    }
    if (em(d)) {
      var h = d.children, u = d.value, b = s[u];
      if (!c0(b))
        throw new o0(u, "function", a);
      var p = bc(h, e, r, n, s, i), y = b(p.map(function(x) {
        return x.value;
      }));
      Array.isArray(y) || (y = [y]), o.push.apply(o, y.map(function(x) {
        return {
          type: typeof x == "string" ? Zt.literal : Zt.object,
          value: x
        };
      }));
    }
    if (Xp(d)) {
      var v = d.options[f] || d.options.other;
      if (!v)
        throw new td(d.value, f, Object.keys(d.options), a);
      o.push.apply(o, bc(v.value, e, r, n, s));
      continue;
    }
    if (Yp(d)) {
      var v = d.options["=".concat(f)];
      if (!v) {
        if (!Intl.PluralRules)
          throw new su(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, va.MISSING_INTL_API, a);
        var E = r.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        v = d.options[E] || d.options.other;
      }
      if (!v)
        throw new td(d.value, f, Object.keys(d.options), a);
      o.push.apply(o, bc(v.value, e, r, n, s, f - (d.offset || 0)));
      continue;
    }
  }
  return l0(o);
}
function u0(t, e) {
  return e ? Ue(Ue(Ue({}, t || {}), e || {}), Object.keys(t).reduce(function(r, n) {
    return r[n] = Ue(Ue({}, t[n]), e[n] || {}), r;
  }, {})) : t;
}
function f0(t, e) {
  return e ? Object.keys(t).reduce(function(r, n) {
    return r[n] = u0(t[n], e[n]), r;
  }, Ue({}, t)) : t;
}
function Bu(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, r) {
          t[e] = r;
        }
      };
    }
  };
}
function h0(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ru(function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((e = Intl.NumberFormat).bind.apply(e, Zn([void 0], r, !1)))();
    }, {
      cache: Bu(t.number),
      strategy: Pu.variadic
    }),
    getDateTimeFormat: Ru(function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Zn([void 0], r, !1)))();
    }, {
      cache: Bu(t.dateTime),
      strategy: Pu.variadic
    }),
    getPluralRules: Ru(function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((e = Intl.PluralRules).bind.apply(e, Zn([void 0], r, !1)))();
    }, {
      cache: Bu(t.pluralRules),
      strategy: Pu.variadic
    })
  };
}
var d0 = (
  /** @class */
  function() {
    function t(e, r, n, s) {
      r === void 0 && (r = t.defaultLocale);
      var i = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(c) {
        var m = i.formatToParts(c);
        if (m.length === 1)
          return m[0].value;
        var d = m.reduce(function(l, f) {
          return !l.length || f.type !== Zt.literal || typeof l[l.length - 1] != "string" ? l.push(f.value) : l[l.length - 1] += f.value, l;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(c) {
        return bc(i.ast, i.locales, i.formatters, i.formats, c, void 0, i.message);
      }, this.resolvedOptions = function() {
        var c;
        return {
          locale: ((c = i.resolvedLocale) === null || c === void 0 ? void 0 : c.toString()) || Intl.NumberFormat.supportedLocalesOf(i.locales)[0]
        };
      }, this.getAst = function() {
        return i.ast;
      }, this.locales = r, this.resolvedLocale = t.resolveLocale(r), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var a = s || {};
        a.formatters;
        var o = Ay(a, ["formatters"]);
        this.ast = t.__parse(e, Ue(Ue({}, o), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = f0(t.formats, n), this.formatters = s && s.formatters || h0(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      if (!(typeof Intl.Locale > "u")) {
        var r = Intl.NumberFormat.supportedLocalesOf(e);
        return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
      }
    }, t.__parse = i0, t.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, t;
  }()
);
function p0(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const r = e.split(".");
  let n = t;
  for (let s = 0; s < r.length; s++)
    if (typeof n == "object") {
      if (s > 0) {
        const i = r.slice(s, r.length).join(".");
        if (i in n) {
          n = n[i];
          break;
        }
      }
      n = n[r[s]];
    } else
      n = void 0;
  return n;
}
const Hs = {}, m0 = (t, e, r) => r && (e in Hs || (Hs[e] = {}), t in Hs[e] || (Hs[e][t] = r), r), cm = (t, e) => {
  if (e == null)
    return;
  if (e in Hs && t in Hs[e])
    return Hs[e][t];
  const r = iu(e);
  for (let n = 0; n < r.length; n++) {
    const s = r[n], i = y0(s, t);
    if (i)
      return m0(t, e, i);
  }
};
let fh;
const Zl = nu({});
function g0(t) {
  return fh[t] || null;
}
function um(t) {
  return t in fh;
}
function y0(t, e) {
  if (!um(t))
    return null;
  const r = g0(t);
  return p0(r, e);
}
function b0(t) {
  if (t == null)
    return;
  const e = iu(t);
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    if (um(n))
      return n;
  }
}
function w0(t, ...e) {
  delete Hs[t], Zl.update((r) => (r[t] = Eb.all([r[t] || {}, ...e]), r));
}
Ra(
  [Zl],
  ([t]) => Object.keys(t)
);
Zl.subscribe((t) => fh = t);
const wc = {};
function v0(t, e) {
  wc[t].delete(e), wc[t].size === 0 && delete wc[t];
}
function fm(t) {
  return wc[t];
}
function A0(t) {
  return iu(t).map((e) => {
    const r = fm(e);
    return [e, r ? [...r] : []];
  }).filter(([, e]) => e.length > 0);
}
function bf(t) {
  return t == null ? !1 : iu(t).some(
    (e) => {
      var r;
      return (r = fm(e)) == null ? void 0 : r.size;
    }
  );
}
function E0(t, e) {
  return Promise.all(
    e.map((n) => (v0(t, n), n().then((s) => s.default || s)))
  ).then((n) => w0(t, ...n));
}
const ll = {};
function hm(t) {
  if (!bf(t))
    return t in ll ? ll[t] : Promise.resolve();
  const e = A0(t);
  return ll[t] = Promise.all(
    e.map(
      ([r, n]) => E0(r, n)
    )
  ).then(() => {
    if (bf(t))
      return hm(t);
    delete ll[t];
  }), ll[t];
}
const _0 = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, x0 = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: _0,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, S0 = x0;
function Aa() {
  return S0;
}
const Mu = nu(!1);
var O0 = Object.defineProperty, I0 = Object.defineProperties, T0 = Object.getOwnPropertyDescriptors, rd = Object.getOwnPropertySymbols, C0 = Object.prototype.hasOwnProperty, N0 = Object.prototype.propertyIsEnumerable, nd = (t, e, r) => e in t ? O0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, R0 = (t, e) => {
  for (var r in e)
    C0.call(e, r) && nd(t, r, e[r]);
  if (rd)
    for (var r of rd(e))
      N0.call(e, r) && nd(t, r, e[r]);
  return t;
}, P0 = (t, e) => I0(t, T0(e));
let wf;
const Rc = nu(null);
function sd(t) {
  return t.split("-").map((e, r, n) => n.slice(0, r + 1).join("-")).reverse();
}
function iu(t, e = Aa().fallbackLocale) {
  const r = sd(t);
  return e ? [.../* @__PURE__ */ new Set([...r, ...sd(e)])] : r;
}
function Ki() {
  return wf ?? void 0;
}
Rc.subscribe((t) => {
  wf = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const k0 = (t) => {
  if (t && b0(t) && bf(t)) {
    const { loadingDelay: e } = Aa();
    let r;
    return typeof window < "u" && Ki() != null && e ? r = window.setTimeout(
      () => Mu.set(!0),
      e
    ) : Mu.set(!0), hm(t).then(() => {
      Rc.set(t);
    }).finally(() => {
      clearTimeout(r), Mu.set(!1);
    });
  }
  return Rc.set(t);
}, Pa = P0(R0({}, Rc), {
  set: k0
}), ou = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => {
    const s = JSON.stringify(n);
    return s in e ? e[s] : e[s] = t(n);
  };
};
var B0 = Object.defineProperty, Pc = Object.getOwnPropertySymbols, dm = Object.prototype.hasOwnProperty, pm = Object.prototype.propertyIsEnumerable, id = (t, e, r) => e in t ? B0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, hh = (t, e) => {
  for (var r in e || (e = {}))
    dm.call(e, r) && id(t, r, e[r]);
  if (Pc)
    for (var r of Pc(e))
      pm.call(e, r) && id(t, r, e[r]);
  return t;
}, ka = (t, e) => {
  var r = {};
  for (var n in t)
    dm.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && Pc)
    for (var n of Pc(t))
      e.indexOf(n) < 0 && pm.call(t, n) && (r[n] = t[n]);
  return r;
};
const Il = (t, e) => {
  const { formats: r } = Aa();
  if (t in r && e in r[t])
    return r[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, M0 = ou(
  (t) => {
    var e = t, { locale: r, format: n } = e, s = ka(e, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return n && (s = Il("number", n)), new Intl.NumberFormat(r, s);
  }
), D0 = ou(
  (t) => {
    var e = t, { locale: r, format: n } = e, s = ka(e, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return n ? s = Il("date", n) : Object.keys(s).length === 0 && (s = Il("date", "short")), new Intl.DateTimeFormat(r, s);
  }
), L0 = ou(
  (t) => {
    var e = t, { locale: r, format: n } = e, s = ka(e, ["locale", "format"]);
    if (r == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return n ? s = Il("time", n) : Object.keys(s).length === 0 && (s = Il("time", "short")), new Intl.DateTimeFormat(r, s);
  }
), U0 = (t = {}) => {
  var e = t, {
    locale: r = Ki()
  } = e, n = ka(e, [
    "locale"
  ]);
  return M0(hh({ locale: r }, n));
}, F0 = (t = {}) => {
  var e = t, {
    locale: r = Ki()
  } = e, n = ka(e, [
    "locale"
  ]);
  return D0(hh({ locale: r }, n));
}, j0 = (t = {}) => {
  var e = t, {
    locale: r = Ki()
  } = e, n = ka(e, [
    "locale"
  ]);
  return L0(hh({ locale: r }, n));
}, H0 = ou(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Ki()) => new d0(t, e, Aa().formats, {
    ignoreTag: Aa().ignoreTag
  })
), G0 = (t, e = {}) => {
  var r, n, s, i;
  let a = e;
  typeof t == "object" && (a = t, t = a.id);
  const {
    values: o,
    locale: c = Ki(),
    default: m
  } = a;
  if (c == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = cm(t, c);
  if (!d)
    d = (i = (s = (n = (r = Aa()).handleMissingMessage) == null ? void 0 : n.call(r, { locale: c, id: t, defaultValue: m })) != null ? s : m) != null ? i : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!o)
    return d;
  let l = d;
  try {
    l = H0(d, c).format(o);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return l;
}, $0 = (t, e) => j0(e).format(t), W0 = (t, e) => F0(e).format(t), V0 = (t, e) => U0(e).format(t), z0 = (t, e = Ki()) => cm(t, e);
Ra([Pa, Zl], () => G0);
Ra([Pa], () => $0);
Ra([Pa], () => W0);
Ra([Pa], () => V0);
Ra([Pa, Zl], () => z0);
var Du = { exports: {} }, od;
function Q0() {
  return od || (od = 1, function(t, e) {
    (function(r, n) {
      t.exports = n();
    })(self, () => {
      return r = { 7629: (s, i, a) => {
        const o = a(375), c = a(8571), m = a(9474), d = a(1687), l = a(8652), f = a(8160), g = a(3292), h = a(6354), u = a(8901), b = a(9708), p = a(6914), y = a(2294), v = a(6133), E = a(1152), x = a(8863), C = a(2036), T = { Base: class {
          constructor(A) {
            this.type = A, this.$_root = null, this._definition = {}, this._reset();
          }
          _reset() {
            this._ids = new y.Ids(), this._preferences = null, this._refs = new v.Manager(), this._cache = null, this._valids = null, this._invalids = null, this._flags = {}, this._rules = [], this._singleRules = /* @__PURE__ */ new Map(), this.$_terms = {}, this.$_temp = { ruleset: null, whens: {} };
          }
          describe() {
            return o(typeof b.describe == "function", "Manifest functionality disabled"), b.describe(this);
          }
          allow() {
            for (var A = arguments.length, S = new Array(A), I = 0; I < A; I++) S[I] = arguments[I];
            return f.verifyFlat(S, "allow"), this._values(S, "_valids");
          }
          alter(A) {
            o(A && typeof A == "object" && !Array.isArray(A), "Invalid targets argument"), o(!this._inRuleset(), "Cannot set alterations inside a ruleset");
            const S = this.clone();
            S.$_terms.alterations = S.$_terms.alterations || [];
            for (const I in A) {
              const P = A[I];
              o(typeof P == "function", "Alteration adjuster for", I, "must be a function"), S.$_terms.alterations.push({ target: I, adjuster: P });
            }
            return S.$_temp.ruleset = !1, S;
          }
          artifact(A) {
            return o(A !== void 0, "Artifact cannot be undefined"), o(!this._cache, "Cannot set an artifact with a rule cache"), this.$_setFlag("artifact", A);
          }
          cast(A) {
            return o(A === !1 || typeof A == "string", "Invalid to value"), o(A === !1 || this._definition.cast[A], "Type", this.type, "does not support casting to", A), this.$_setFlag("cast", A === !1 ? void 0 : A);
          }
          default(A, S) {
            return this._default("default", A, S);
          }
          description(A) {
            return o(A && typeof A == "string", "Description must be a non-empty string"), this.$_setFlag("description", A);
          }
          empty(A) {
            const S = this.clone();
            return A !== void 0 && (A = S.$_compile(A, { override: !1 })), S.$_setFlag("empty", A, { clone: !1 });
          }
          error(A) {
            return o(A, "Missing error"), o(A instanceof Error || typeof A == "function", "Must provide a valid Error object or a function"), this.$_setFlag("error", A);
          }
          example(A) {
            let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return o(A !== void 0, "Missing example"), f.assertOptions(S, ["override"]), this._inner("examples", A, { single: !0, override: S.override });
          }
          external(A, S) {
            return typeof A == "object" && (o(!S, "Cannot combine options with description"), S = A.description, A = A.method), o(typeof A == "function", "Method must be a function"), o(S === void 0 || S && typeof S == "string", "Description must be a non-empty string"), this._inner("externals", { method: A, description: S }, { single: !0 });
          }
          failover(A, S) {
            return this._default("failover", A, S);
          }
          forbidden() {
            return this.presence("forbidden");
          }
          id(A) {
            return A ? (o(typeof A == "string", "id must be a non-empty string"), o(/^[^\.]+$/.test(A), "id cannot contain period character"), this.$_setFlag("id", A)) : this.$_setFlag("id", void 0);
          }
          invalid() {
            for (var A = arguments.length, S = new Array(A), I = 0; I < A; I++) S[I] = arguments[I];
            return this._values(S, "_invalids");
          }
          label(A) {
            return o(A && typeof A == "string", "Label name must be a non-empty string"), this.$_setFlag("label", A);
          }
          meta(A) {
            return o(A !== void 0, "Meta cannot be undefined"), this._inner("metas", A, { single: !0 });
          }
          note() {
            for (var A = arguments.length, S = new Array(A), I = 0; I < A; I++) S[I] = arguments[I];
            o(S.length, "Missing notes");
            for (const P of S) o(P && typeof P == "string", "Notes must be non-empty strings");
            return this._inner("notes", S);
          }
          only() {
            let A = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
            return o(typeof A == "boolean", "Invalid mode:", A), this.$_setFlag("only", A);
          }
          optional() {
            return this.presence("optional");
          }
          prefs(A) {
            o(A, "Missing preferences"), o(A.context === void 0, "Cannot override context"), o(A.externals === void 0, "Cannot override externals"), o(A.warnings === void 0, "Cannot override warnings"), o(A.debug === void 0, "Cannot override debug"), f.checkPreferences(A);
            const S = this.clone();
            return S._preferences = f.preferences(S._preferences, A), S;
          }
          presence(A) {
            return o(["optional", "required", "forbidden"].includes(A), "Unknown presence mode", A), this.$_setFlag("presence", A);
          }
          raw() {
            let A = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
            return this.$_setFlag("result", A ? "raw" : void 0);
          }
          result(A) {
            return o(["raw", "strip"].includes(A), "Unknown result mode", A), this.$_setFlag("result", A);
          }
          required() {
            return this.presence("required");
          }
          strict(A) {
            const S = this.clone(), I = A !== void 0 && !A;
            return S._preferences = f.preferences(S._preferences, { convert: I }), S;
          }
          strip() {
            let A = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
            return this.$_setFlag("result", A ? "strip" : void 0);
          }
          tag() {
            for (var A = arguments.length, S = new Array(A), I = 0; I < A; I++) S[I] = arguments[I];
            o(S.length, "Missing tags");
            for (const P of S) o(P && typeof P == "string", "Tags must be non-empty strings");
            return this._inner("tags", S);
          }
          unit(A) {
            return o(A && typeof A == "string", "Unit name must be a non-empty string"), this.$_setFlag("unit", A);
          }
          valid() {
            for (var A = arguments.length, S = new Array(A), I = 0; I < A; I++) S[I] = arguments[I];
            f.verifyFlat(S, "valid");
            const P = this.allow(...S);
            return P.$_setFlag("only", !!P._valids, { clone: !1 }), P;
          }
          when(A, S) {
            const I = this.clone();
            I.$_terms.whens || (I.$_terms.whens = []);
            const P = g.when(I, A, S);
            if (!["any", "link"].includes(I.type)) {
              const H = P.is ? [P] : P.switch;
              for (const W of H) o(!W.then || W.then.type === "any" || W.then.type === I.type, "Cannot combine", I.type, "with", W.then && W.then.type), o(!W.otherwise || W.otherwise.type === "any" || W.otherwise.type === I.type, "Cannot combine", I.type, "with", W.otherwise && W.otherwise.type);
            }
            return I.$_terms.whens.push(P), I.$_mutateRebuild();
          }
          cache(A) {
            o(!this._inRuleset(), "Cannot set caching inside a ruleset"), o(!this._cache, "Cannot override schema cache"), o(this._flags.artifact === void 0, "Cannot cache a rule with an artifact");
            const S = this.clone();
            return S._cache = A || l.provider.provision(), S.$_temp.ruleset = !1, S;
          }
          clone() {
            const A = Object.create(Object.getPrototypeOf(this));
            return this._assign(A);
          }
          concat(A) {
            o(f.isSchema(A), "Invalid schema object"), o(this.type === "any" || A.type === "any" || A.type === this.type, "Cannot merge type", this.type, "with another type:", A.type), o(!this._inRuleset(), "Cannot concatenate onto a schema with open ruleset"), o(!A._inRuleset(), "Cannot concatenate a schema with open ruleset");
            let S = this.clone();
            if (this.type === "any" && A.type !== "any") {
              const I = A.clone();
              for (const P of Object.keys(S)) P !== "type" && (I[P] = S[P]);
              S = I;
            }
            S._ids.concat(A._ids), S._refs.register(A, v.toSibling), S._preferences = S._preferences ? f.preferences(S._preferences, A._preferences) : A._preferences, S._valids = C.merge(S._valids, A._valids, A._invalids), S._invalids = C.merge(S._invalids, A._invalids, A._valids);
            for (const I of A._singleRules.keys()) S._singleRules.has(I) && (S._rules = S._rules.filter((P) => P.keep || P.name !== I), S._singleRules.delete(I));
            for (const I of A._rules) A._definition.rules[I.method].multi || S._singleRules.set(I.name, I), S._rules.push(I);
            if (S._flags.empty && A._flags.empty) {
              S._flags.empty = S._flags.empty.concat(A._flags.empty);
              const I = Object.assign({}, A._flags);
              delete I.empty, d(S._flags, I);
            } else if (A._flags.empty) {
              S._flags.empty = A._flags.empty;
              const I = Object.assign({}, A._flags);
              delete I.empty, d(S._flags, I);
            } else d(S._flags, A._flags);
            for (const I in A.$_terms) {
              const P = A.$_terms[I];
              P ? S.$_terms[I] ? S.$_terms[I] = S.$_terms[I].concat(P) : S.$_terms[I] = P.slice() : S.$_terms[I] || (S.$_terms[I] = P);
            }
            return this.$_root._tracer && this.$_root._tracer._combine(S, [this, A]), S.$_mutateRebuild();
          }
          extend(A) {
            return o(!A.base, "Cannot extend type with another base"), u.type(this, A);
          }
          extract(A) {
            return A = Array.isArray(A) ? A : A.split("."), this._ids.reach(A);
          }
          fork(A, S) {
            o(!this._inRuleset(), "Cannot fork inside a ruleset");
            let I = this;
            for (let P of [].concat(A)) P = Array.isArray(P) ? P : P.split("."), I = I._ids.fork(P, S, I);
            return I.$_temp.ruleset = !1, I;
          }
          rule(A) {
            const S = this._definition;
            f.assertOptions(A, Object.keys(S.modifiers)), o(this.$_temp.ruleset !== !1, "Cannot apply rules to empty ruleset or the last rule added does not support rule properties");
            const I = this.$_temp.ruleset === null ? this._rules.length - 1 : this.$_temp.ruleset;
            o(I >= 0 && I < this._rules.length, "Cannot apply rules to empty ruleset");
            const P = this.clone();
            for (let H = I; H < P._rules.length; ++H) {
              const W = P._rules[H], Z = c(W);
              for (const j in A) S.modifiers[j](Z, A[j]), o(Z.name === W.name, "Cannot change rule name");
              P._rules[H] = Z, P._singleRules.get(Z.name) === W && P._singleRules.set(Z.name, Z);
            }
            return P.$_temp.ruleset = !1, P.$_mutateRebuild();
          }
          get ruleset() {
            o(!this._inRuleset(), "Cannot start a new ruleset without closing the previous one");
            const A = this.clone();
            return A.$_temp.ruleset = A._rules.length, A;
          }
          get $() {
            return this.ruleset;
          }
          tailor(A) {
            A = [].concat(A), o(!this._inRuleset(), "Cannot tailor inside a ruleset");
            let S = this;
            if (this.$_terms.alterations) for (const { target: I, adjuster: P } of this.$_terms.alterations) A.includes(I) && (S = P(S), o(f.isSchema(S), "Alteration adjuster for", I, "failed to return a schema object"));
            return S = S.$_modify({ each: (I) => I.tailor(A), ref: !1 }), S.$_temp.ruleset = !1, S.$_mutateRebuild();
          }
          tracer() {
            return E.location ? E.location(this) : this;
          }
          validate(A, S) {
            return x.entry(A, this, S);
          }
          validateAsync(A, S) {
            return x.entryAsync(A, this, S);
          }
          $_addRule(A) {
            typeof A == "string" && (A = { name: A }), o(A && typeof A == "object", "Invalid options"), o(A.name && typeof A.name == "string", "Invalid rule name");
            for (const W in A) o(W[0] !== "_", "Cannot set private rule properties");
            const S = Object.assign({}, A);
            S._resolve = [], S.method = S.method || S.name;
            const I = this._definition.rules[S.method], P = S.args;
            o(I, "Unknown rule", S.method);
            const H = this.clone();
            if (P) {
              o(Object.keys(P).length === 1 || Object.keys(P).length === this._definition.rules[S.name].args.length, "Invalid rule definition for", this.type, S.name);
              for (const W in P) {
                let Z = P[W];
                if (I.argsByName) {
                  const j = I.argsByName.get(W);
                  if (j.ref && f.isResolvable(Z)) S._resolve.push(W), H.$_mutateRegister(Z);
                  else if (j.normalize && (Z = j.normalize(Z), P[W] = Z), j.assert) {
                    const z = f.validateArg(Z, W, j);
                    o(!z, z, "or reference");
                  }
                }
                Z !== void 0 ? P[W] = Z : delete P[W];
              }
            }
            return I.multi || (H._ruleRemove(S.name, { clone: !1 }), H._singleRules.set(S.name, S)), H.$_temp.ruleset === !1 && (H.$_temp.ruleset = null), I.priority ? H._rules.unshift(S) : H._rules.push(S), H;
          }
          $_compile(A, S) {
            return g.schema(this.$_root, A, S);
          }
          $_createError(A, S, I, P, H) {
            let W = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
            const Z = W.flags !== !1 ? this._flags : {}, j = W.messages ? p.merge(this._definition.messages, W.messages) : this._definition.messages;
            return new h.Report(A, S, I, Z, j, P, H);
          }
          $_getFlag(A) {
            return this._flags[A];
          }
          $_getRule(A) {
            return this._singleRules.get(A);
          }
          $_mapLabels(A) {
            return A = Array.isArray(A) ? A : A.split("."), this._ids.labels(A);
          }
          $_match(A, S, I, P) {
            (I = Object.assign({}, I)).abortEarly = !0, I._externals = !1, S.snapshot();
            const H = !x.validate(A, this, S, I, P).errors;
            return S.restore(), H;
          }
          $_modify(A) {
            return f.assertOptions(A, ["each", "once", "ref", "schema"]), y.schema(this, A) || this;
          }
          $_mutateRebuild() {
            return o(!this._inRuleset(), "Cannot add this rule inside a ruleset"), this._refs.reset(), this._ids.reset(), this.$_modify({ each: (A, S) => {
              let { source: I, name: P, path: H, key: W } = S;
              const Z = this._definition[I][P] && this._definition[I][P].register;
              Z !== !1 && this.$_mutateRegister(A, { family: Z, key: W });
            } }), this._definition.rebuild && this._definition.rebuild(this), this.$_temp.ruleset = !1, this;
          }
          $_mutateRegister(A) {
            let { family: S, key: I } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this._refs.register(A, S), this._ids.register(A, { key: I });
          }
          $_property(A) {
            return this._definition.properties[A];
          }
          $_reach(A) {
            return this._ids.reach(A);
          }
          $_rootReferences() {
            return this._refs.roots();
          }
          $_setFlag(A, S) {
            let I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            o(A[0] === "_" || !this._inRuleset(), "Cannot set flag inside a ruleset");
            const P = this._definition.flags[A] || {};
            if (m(S, P.default) && (S = void 0), m(S, this._flags[A])) return this;
            const H = I.clone !== !1 ? this.clone() : this;
            return S !== void 0 ? (H._flags[A] = S, H.$_mutateRegister(S)) : delete H._flags[A], A[0] !== "_" && (H.$_temp.ruleset = !1), H;
          }
          $_parent(A) {
            for (var S = arguments.length, I = new Array(S > 1 ? S - 1 : 0), P = 1; P < S; P++) I[P - 1] = arguments[P];
            return this[A][f.symbols.parent].call(this, ...I);
          }
          $_validate(A, S, I) {
            return x.validate(A, this, S, I);
          }
          _assign(A) {
            A.type = this.type, A.$_root = this.$_root, A.$_temp = Object.assign({}, this.$_temp), A.$_temp.whens = {}, A._ids = this._ids.clone(), A._preferences = this._preferences, A._valids = this._valids && this._valids.clone(), A._invalids = this._invalids && this._invalids.clone(), A._rules = this._rules.slice(), A._singleRules = c(this._singleRules, { shallow: !0 }), A._refs = this._refs.clone(), A._flags = Object.assign({}, this._flags), A._cache = null, A.$_terms = {};
            for (const S in this.$_terms) A.$_terms[S] = this.$_terms[S] ? this.$_terms[S].slice() : null;
            A.$_super = {};
            for (const S in this.$_super) A.$_super[S] = this._super[S].bind(A);
            return A;
          }
          _bare() {
            const A = this.clone();
            A._reset();
            const S = A._definition.terms;
            for (const I in S) {
              const P = S[I];
              A.$_terms[I] = P.init;
            }
            return A.$_mutateRebuild();
          }
          _default(A, S) {
            let I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return f.assertOptions(I, "literal"), o(S !== void 0, "Missing", A, "value"), o(typeof S == "function" || !I.literal, "Only function value supports literal option"), typeof S == "function" && I.literal && (S = { [f.symbols.literal]: !0, literal: S }), this.$_setFlag(A, S);
          }
          _generate(A, S, I) {
            if (!this.$_terms.whens) return { schema: this };
            const P = [], H = [];
            for (let j = 0; j < this.$_terms.whens.length; ++j) {
              const z = this.$_terms.whens[j];
              if (z.concat) {
                P.push(z.concat), H.push(`${j}.concat`);
                continue;
              }
              const Y = z.ref ? z.ref.resolve(A, S, I) : A, de = z.is ? [z] : z.switch, fe = H.length;
              for (let _e = 0; _e < de.length; ++_e) {
                const { is: ue, then: ye, otherwise: he } = de[_e], Pe = `${j}${z.switch ? "." + _e : ""}`;
                if (ue.$_match(Y, S.nest(ue, `${Pe}.is`), I)) {
                  if (ye) {
                    const lt = S.localize([...S.path, `${Pe}.then`], S.ancestors, S.schemas), { schema: nt, id: Ye } = ye._generate(A, lt, I);
                    P.push(nt), H.push(`${Pe}.then${Ye ? `(${Ye})` : ""}`);
                    break;
                  }
                } else if (he) {
                  const lt = S.localize([...S.path, `${Pe}.otherwise`], S.ancestors, S.schemas), { schema: nt, id: Ye } = he._generate(A, lt, I);
                  P.push(nt), H.push(`${Pe}.otherwise${Ye ? `(${Ye})` : ""}`);
                  break;
                }
              }
              if (z.break && H.length > fe) break;
            }
            const W = H.join(", ");
            if (S.mainstay.tracer.debug(S, "rule", "when", W), !W) return { schema: this };
            if (!S.mainstay.tracer.active && this.$_temp.whens[W]) return { schema: this.$_temp.whens[W], id: W };
            let Z = this;
            this._definition.generate && (Z = this._definition.generate(this, A, S, I));
            for (const j of P) Z = Z.concat(j);
            return this.$_root._tracer && this.$_root._tracer._combine(Z, [this, ...P]), this.$_temp.whens[W] = Z, { schema: Z, id: W };
          }
          _inner(A, S) {
            let I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            o(!this._inRuleset(), `Cannot set ${A} inside a ruleset`);
            const P = this.clone();
            return P.$_terms[A] && !I.override || (P.$_terms[A] = []), I.single ? P.$_terms[A].push(S) : P.$_terms[A].push(...S), P.$_temp.ruleset = !1, P;
          }
          _inRuleset() {
            return this.$_temp.ruleset !== null && this.$_temp.ruleset !== !1;
          }
          _ruleRemove(A) {
            let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (!this._singleRules.has(A)) return this;
            const I = S.clone !== !1 ? this.clone() : this;
            I._singleRules.delete(A);
            const P = [];
            for (let H = 0; H < I._rules.length; ++H) {
              const W = I._rules[H];
              W.name !== A || W.keep ? P.push(W) : I._inRuleset() && H < I.$_temp.ruleset && --I.$_temp.ruleset;
            }
            return I._rules = P, I;
          }
          _values(A, S) {
            f.verifyFlat(A, S.slice(1, -1));
            const I = this.clone(), P = A[0] === f.symbols.override;
            if (P && (A = A.slice(1)), !I[S] && A.length ? I[S] = new C() : P && (I[S] = A.length ? new C() : null, I.$_mutateRebuild()), !I[S]) return I;
            P && I[S].override();
            for (const H of A) {
              o(H !== void 0, "Cannot call allow/valid/invalid with undefined"), o(H !== f.symbols.override, "Override must be the first value");
              const W = S === "_invalids" ? "_valids" : "_invalids";
              I[W] && (I[W].remove(H), I[W].length || (o(S === "_valids" || !I._flags.only, "Setting invalid value", H, "leaves schema rejecting all values due to previous valid rule"), I[W] = null)), I[S].add(H, I._refs);
            }
            return I;
          }
        } };
        T.Base.prototype[f.symbols.any] = { version: f.version, compile: g.compile, root: "$_root" }, T.Base.prototype.isImmutable = !0, T.Base.prototype.deny = T.Base.prototype.invalid, T.Base.prototype.disallow = T.Base.prototype.invalid, T.Base.prototype.equal = T.Base.prototype.valid, T.Base.prototype.exist = T.Base.prototype.required, T.Base.prototype.not = T.Base.prototype.invalid, T.Base.prototype.options = T.Base.prototype.prefs, T.Base.prototype.preferences = T.Base.prototype.prefs, s.exports = new T.Base();
      }, 8652: (s, i, a) => {
        const o = a(375), c = a(8571), m = a(8160), d = { max: 1e3, supported: /* @__PURE__ */ new Set(["undefined", "boolean", "number", "string"]) };
        i.provider = { provision: (l) => new d.Cache(l) }, d.Cache = class {
          constructor() {
            let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            m.assertOptions(l, ["max"]), o(l.max === void 0 || l.max && l.max > 0 && isFinite(l.max), "Invalid max cache size"), this._max = l.max || d.max, this._map = /* @__PURE__ */ new Map(), this._list = new d.List();
          }
          get length() {
            return this._map.size;
          }
          set(l, f) {
            if (l !== null && !d.supported.has(typeof l)) return;
            let g = this._map.get(l);
            if (g) return g.value = f, void this._list.first(g);
            g = this._list.unshift({ key: l, value: f }), this._map.set(l, g), this._compact();
          }
          get(l) {
            const f = this._map.get(l);
            if (f) return this._list.first(f), c(f.value);
          }
          _compact() {
            if (this._map.size > this._max) {
              const l = this._list.pop();
              this._map.delete(l.key);
            }
          }
        }, d.List = class {
          constructor() {
            this.tail = null, this.head = null;
          }
          unshift(l) {
            return l.next = null, l.prev = this.head, this.head && (this.head.next = l), this.head = l, this.tail || (this.tail = l), l;
          }
          first(l) {
            l !== this.head && (this._remove(l), this.unshift(l));
          }
          pop() {
            return this._remove(this.tail);
          }
          _remove(l) {
            const { next: f, prev: g } = l;
            return f.prev = g, g && (g.next = f), l === this.tail && (this.tail = f), l.prev = null, l.next = null, l;
          }
        };
      }, 8160: (s, i, a) => {
        const o = a(375), c = a(7916), m = a(5934);
        let d, l;
        const f = { isoDate: /^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/ };
        i.version = m.version, i.defaults = { abortEarly: !0, allowUnknown: !1, artifacts: !1, cache: !0, context: null, convert: !0, dateFormat: "iso", errors: { escapeHtml: !1, label: "path", language: null, render: !0, stack: !1, wrap: { label: '"', array: "[]" } }, externals: !0, messages: {}, nonEnumerables: !1, noDefaults: !1, presence: "optional", skipFunctions: !1, stripUnknown: !1, warnings: !1 }, i.symbols = { any: Symbol.for("@hapi/joi/schema"), arraySingle: Symbol("arraySingle"), deepDefault: Symbol("deepDefault"), errors: Symbol("errors"), literal: Symbol("literal"), override: Symbol("override"), parent: Symbol("parent"), prefs: Symbol("prefs"), ref: Symbol("ref"), template: Symbol("template"), values: Symbol("values") }, i.assertOptions = function(g, h) {
          let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Options";
          o(g && typeof g == "object" && !Array.isArray(g), "Options must be of type object");
          const b = Object.keys(g).filter((p) => !h.includes(p));
          o(b.length === 0, `${u} contain unknown keys: ${b}`);
        }, i.checkPreferences = function(g) {
          l = l || a(3378);
          const h = l.preferences.validate(g);
          if (h.error) throw new c([h.error.details[0].message]);
        }, i.compare = function(g, h, u) {
          switch (u) {
            case "=":
              return g === h;
            case ">":
              return g > h;
            case "<":
              return g < h;
            case ">=":
              return g >= h;
            case "<=":
              return g <= h;
          }
        }, i.default = function(g, h) {
          return g === void 0 ? h : g;
        }, i.isIsoDate = function(g) {
          return f.isoDate.test(g);
        }, i.isNumber = function(g) {
          return typeof g == "number" && !isNaN(g);
        }, i.isResolvable = function(g) {
          return !!g && (g[i.symbols.ref] || g[i.symbols.template]);
        }, i.isSchema = function(g) {
          let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const u = g && g[i.symbols.any];
          return !!u && (o(h.legacy || u.version === i.version, "Cannot mix different versions of joi schemas"), !0);
        }, i.isValues = function(g) {
          return g[i.symbols.values];
        }, i.limit = function(g) {
          return Number.isSafeInteger(g) && g >= 0;
        }, i.preferences = function(g, h) {
          d = d || a(6914), g = g || {}, h = h || {};
          const u = Object.assign({}, g, h);
          return h.errors && g.errors && (u.errors = Object.assign({}, g.errors, h.errors), u.errors.wrap = Object.assign({}, g.errors.wrap, h.errors.wrap)), h.messages && (u.messages = d.compile(h.messages, g.messages)), delete u[i.symbols.prefs], u;
        }, i.tryWithPath = function(g, h) {
          let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          try {
            return g();
          } catch (b) {
            throw b.path !== void 0 ? b.path = h + "." + b.path : b.path = h, u.append && (b.message = `${b.message} (${b.path})`), b;
          }
        }, i.validateArg = function(g, h, u) {
          let { assert: b, message: p } = u;
          if (i.isSchema(b)) {
            const y = b.validate(g);
            return y.error ? y.error.message : void 0;
          }
          if (!b(g)) return h ? `${h} ${p}` : p;
        }, i.verifyFlat = function(g, h) {
          for (const u of g) o(!Array.isArray(u), "Method no longer accepts array arguments:", h);
        };
      }, 3292: (s, i, a) => {
        const o = a(375), c = a(8160), m = a(6133), d = {};
        i.schema = function(l, f) {
          let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          c.assertOptions(g, ["appendPath", "override"]);
          try {
            return d.schema(l, f, g);
          } catch (h) {
            throw g.appendPath && h.path !== void 0 && (h.message = `${h.message} (${h.path})`), h;
          }
        }, d.schema = function(l, f, g) {
          o(f !== void 0, "Invalid undefined schema"), Array.isArray(f) && (o(f.length, "Invalid empty array schema"), f.length === 1 && (f = f[0]));
          const h = function(u) {
            for (var b = arguments.length, p = new Array(b > 1 ? b - 1 : 0), y = 1; y < b; y++) p[y - 1] = arguments[y];
            return g.override !== !1 ? u.valid(l.override, ...p) : u.valid(...p);
          };
          if (d.simple(f)) return h(l, f);
          if (typeof f == "function") return l.custom(f);
          if (o(typeof f == "object", "Invalid schema content:", typeof f), c.isResolvable(f)) return h(l, f);
          if (c.isSchema(f)) return f;
          if (Array.isArray(f)) {
            for (const u of f) if (!d.simple(u)) return l.alternatives().try(...f);
            return h(l, ...f);
          }
          return f instanceof RegExp ? l.string().regex(f) : f instanceof Date ? h(l.date(), f) : (o(Object.getPrototypeOf(f) === Object.getPrototypeOf({}), "Schema can only contain plain objects"), l.object().keys(f));
        }, i.ref = function(l, f) {
          return m.isRef(l) ? l : m.create(l, f);
        }, i.compile = function(l, f) {
          let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          c.assertOptions(g, ["legacy"]);
          const h = f && f[c.symbols.any];
          if (h) return o(g.legacy || h.version === c.version, "Cannot mix different versions of joi schemas:", h.version, c.version), f;
          if (typeof f != "object" || !g.legacy) return i.schema(l, f, { appendPath: !0 });
          const u = d.walk(f);
          return u ? u.compile(u.root, f) : i.schema(l, f, { appendPath: !0 });
        }, d.walk = function(l) {
          if (typeof l != "object") return null;
          if (Array.isArray(l)) {
            for (const g of l) {
              const h = d.walk(g);
              if (h) return h;
            }
            return null;
          }
          const f = l[c.symbols.any];
          if (f) return { root: l[f.root], compile: f.compile };
          o(Object.getPrototypeOf(l) === Object.getPrototypeOf({}), "Schema can only contain plain objects");
          for (const g in l) {
            const h = d.walk(l[g]);
            if (h) return h;
          }
          return null;
        }, d.simple = function(l) {
          return l === null || ["boolean", "string", "number"].includes(typeof l);
        }, i.when = function(l, f, g) {
          if (g === void 0 && (o(f && typeof f == "object", "Missing options"), g = f, f = m.create(".")), Array.isArray(g) && (g = { switch: g }), c.assertOptions(g, ["is", "not", "then", "otherwise", "switch", "break"]), c.isSchema(f)) return o(g.is === void 0, '"is" can not be used with a schema condition'), o(g.not === void 0, '"not" can not be used with a schema condition'), o(g.switch === void 0, '"switch" can not be used with a schema condition'), d.condition(l, { is: f, then: g.then, otherwise: g.otherwise, break: g.break });
          if (o(m.isRef(f) || typeof f == "string", "Invalid condition:", f), o(g.not === void 0 || g.is === void 0, 'Cannot combine "is" with "not"'), g.switch === void 0) {
            let u = g;
            g.not !== void 0 && (u = { is: g.not, then: g.otherwise, otherwise: g.then, break: g.break });
            let b = u.is !== void 0 ? l.$_compile(u.is) : l.$_root.invalid(null, !1, 0, "").required();
            return o(u.then !== void 0 || u.otherwise !== void 0, 'options must have at least one of "then", "otherwise", or "switch"'), o(u.break === void 0 || u.then === void 0 || u.otherwise === void 0, "Cannot specify then, otherwise, and break all together"), g.is === void 0 || m.isRef(g.is) || c.isSchema(g.is) || (b = b.required()), d.condition(l, { ref: i.ref(f), is: b, then: u.then, otherwise: u.otherwise, break: u.break });
          }
          o(Array.isArray(g.switch), '"switch" must be an array'), o(g.is === void 0, 'Cannot combine "switch" with "is"'), o(g.not === void 0, 'Cannot combine "switch" with "not"'), o(g.then === void 0, 'Cannot combine "switch" with "then"');
          const h = { ref: i.ref(f), switch: [], break: g.break };
          for (let u = 0; u < g.switch.length; ++u) {
            const b = g.switch[u], p = u === g.switch.length - 1;
            c.assertOptions(b, p ? ["is", "then", "otherwise"] : ["is", "then"]), o(b.is !== void 0, 'Switch statement missing "is"'), o(b.then !== void 0, 'Switch statement missing "then"');
            const y = { is: l.$_compile(b.is), then: l.$_compile(b.then) };
            if (m.isRef(b.is) || c.isSchema(b.is) || (y.is = y.is.required()), p) {
              o(g.otherwise === void 0 || b.otherwise === void 0, 'Cannot specify "otherwise" inside and outside a "switch"');
              const v = g.otherwise !== void 0 ? g.otherwise : b.otherwise;
              v !== void 0 && (o(h.break === void 0, "Cannot specify both otherwise and break"), y.otherwise = l.$_compile(v));
            }
            h.switch.push(y);
          }
          return h;
        }, d.condition = function(l, f) {
          for (const g of ["then", "otherwise"]) f[g] === void 0 ? delete f[g] : f[g] = l.$_compile(f[g]);
          return f;
        };
      }, 6354: (s, i, a) => {
        const o = a(5688), c = a(8160), m = a(3328);
        i.Report = class {
          constructor(d, l, f, g, h, u, b) {
            if (this.code = d, this.flags = g, this.messages = h, this.path = u.path, this.prefs = b, this.state = u, this.value = l, this.message = null, this.template = null, this.local = f || {}, this.local.label = i.label(this.flags, this.state, this.prefs, this.messages), this.value === void 0 || this.local.hasOwnProperty("value") || (this.local.value = this.value), this.path.length) {
              const p = this.path[this.path.length - 1];
              typeof p != "object" && (this.local.key = p);
            }
          }
          _setTemplate(d) {
            if (this.template = d, !this.flags.label && this.path.length === 0) {
              const l = this._template(this.template, "root");
              l && (this.local.label = l);
            }
          }
          toString() {
            if (this.message) return this.message;
            const d = this.code;
            if (!this.prefs.errors.render) return this.code;
            const l = this._template(this.template) || this._template(this.prefs.messages) || this._template(this.messages);
            return l === void 0 ? `Error code "${d}" is not defined, your custom type is missing the correct messages definition` : (this.message = l.render(this.value, this.state, this.prefs, this.local, { errors: this.prefs.errors, messages: [this.prefs.messages, this.messages] }), this.prefs.errors.label || (this.message = this.message.replace(/^"" /, "").trim()), this.message);
          }
          _template(d, l) {
            return i.template(this.value, d, l || this.code, this.state, this.prefs);
          }
        }, i.path = function(d) {
          let l = "";
          for (const f of d) typeof f != "object" && (typeof f == "string" ? (l && (l += "."), l += f) : l += `[${f}]`);
          return l;
        }, i.template = function(d, l, f, g, h) {
          if (!l) return;
          if (m.isTemplate(l)) return f !== "root" ? l : null;
          let u = h.errors.language;
          if (c.isResolvable(u) && (u = u.resolve(d, g, h)), u && l[u]) {
            if (l[u][f] !== void 0) return l[u][f];
            if (l[u]["*"] !== void 0) return l[u]["*"];
          }
          return l[f] ? l[f] : l["*"];
        }, i.label = function(d, l, f, g) {
          if (d.label) return d.label;
          if (!f.errors.label) return "";
          let h = l.path;
          return f.errors.label === "key" && l.path.length > 1 && (h = l.path.slice(-1)), i.path(h) || i.template(null, f.messages, "root", l, f) || g && i.template(null, g, "root", l, f) || "value";
        }, i.process = function(d, l, f) {
          if (!d) return null;
          const { override: g, message: h, details: u } = i.details(d);
          if (g) return g;
          if (f.errors.stack) return new i.ValidationError(h, u, l);
          const b = Error.stackTraceLimit;
          Error.stackTraceLimit = 0;
          const p = new i.ValidationError(h, u, l);
          return Error.stackTraceLimit = b, p;
        }, i.details = function(d) {
          let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = [];
          const g = [];
          for (const h of d) {
            if (h instanceof Error) {
              if (l.override !== !1) return { override: h };
              const b = h.toString();
              f.push(b), g.push({ message: b, type: "override", context: { error: h } });
              continue;
            }
            const u = h.toString();
            f.push(u), g.push({ message: u, path: h.path.filter((b) => typeof b != "object"), type: h.code, context: h.local });
          }
          return f.length > 1 && (f = [...new Set(f)]), { message: f.join(". "), details: g };
        }, i.ValidationError = class extends Error {
          constructor(d, l, f) {
            super(d), this._original = f, this.details = l;
          }
          static isError(d) {
            return d instanceof i.ValidationError;
          }
        }, i.ValidationError.prototype.isJoi = !0, i.ValidationError.prototype.name = "ValidationError", i.ValidationError.prototype.annotate = o.error;
      }, 8901: (s, i, a) => {
        const o = a(375), c = a(8571), m = a(8160), d = a(6914), l = {};
        i.type = function(f, g) {
          const h = Object.getPrototypeOf(f), u = c(h), b = f._assign(Object.create(u)), p = Object.assign({}, g);
          delete p.base, u._definition = p;
          const y = h._definition || {};
          p.messages = d.merge(y.messages, p.messages), p.properties = Object.assign({}, y.properties, p.properties), b.type = p.type, p.flags = Object.assign({}, y.flags, p.flags);
          const v = Object.assign({}, y.terms);
          if (p.terms) for (const T in p.terms) {
            const A = p.terms[T];
            o(b.$_terms[T] === void 0, "Invalid term override for", p.type, T), b.$_terms[T] = A.init, v[T] = A;
          }
          p.terms = v, p.args || (p.args = y.args), p.prepare = l.prepare(p.prepare, y.prepare), p.coerce && (typeof p.coerce == "function" && (p.coerce = { method: p.coerce }), p.coerce.from && !Array.isArray(p.coerce.from) && (p.coerce = { method: p.coerce.method, from: [].concat(p.coerce.from) })), p.coerce = l.coerce(p.coerce, y.coerce), p.validate = l.validate(p.validate, y.validate);
          const E = Object.assign({}, y.rules);
          if (p.rules) for (const T in p.rules) {
            const A = p.rules[T];
            o(typeof A == "object", "Invalid rule definition for", p.type, T);
            let S = A.method;
            if (S === void 0 && (S = function() {
              return this.$_addRule(T);
            }), S && (o(!u[T], "Rule conflict in", p.type, T), u[T] = S), o(!E[T], "Rule conflict in", p.type, T), E[T] = A, A.alias) {
              const I = [].concat(A.alias);
              for (const P of I) u[P] = A.method;
            }
            A.args && (A.argsByName = /* @__PURE__ */ new Map(), A.args = A.args.map((I) => (typeof I == "string" && (I = { name: I }), o(!A.argsByName.has(I.name), "Duplicated argument name", I.name), m.isSchema(I.assert) && (I.assert = I.assert.strict().label(I.name)), A.argsByName.set(I.name, I), I)));
          }
          p.rules = E;
          const x = Object.assign({}, y.modifiers);
          if (p.modifiers) for (const T in p.modifiers) {
            o(!u[T], "Rule conflict in", p.type, T);
            const A = p.modifiers[T];
            o(typeof A == "function", "Invalid modifier definition for", p.type, T);
            const S = function(I) {
              return this.rule({ [T]: I });
            };
            u[T] = S, x[T] = A;
          }
          if (p.modifiers = x, p.overrides) {
            u._super = h, b.$_super = {};
            for (const T in p.overrides) o(h[T], "Cannot override missing", T), p.overrides[T][m.symbols.parent] = h[T], b.$_super[T] = h[T].bind(b);
            Object.assign(u, p.overrides);
          }
          p.cast = Object.assign({}, y.cast, p.cast);
          const C = Object.assign({}, y.manifest, p.manifest);
          return C.build = l.build(p.manifest && p.manifest.build, y.manifest && y.manifest.build), p.manifest = C, p.rebuild = l.rebuild(p.rebuild, y.rebuild), b;
        }, l.build = function(f, g) {
          return f && g ? function(h, u) {
            return g(f(h, u), u);
          } : f || g;
        }, l.coerce = function(f, g) {
          return f && g ? { from: f.from && g.from ? [.../* @__PURE__ */ new Set([...f.from, ...g.from])] : null, method(h, u) {
            let b;
            if ((!g.from || g.from.includes(typeof h)) && (b = g.method(h, u), b)) {
              if (b.errors || b.value === void 0) return b;
              h = b.value;
            }
            if (!f.from || f.from.includes(typeof h)) {
              const p = f.method(h, u);
              if (p) return p;
            }
            return b;
          } } : f || g;
        }, l.prepare = function(f, g) {
          return f && g ? function(h, u) {
            const b = f(h, u);
            if (b) {
              if (b.errors || b.value === void 0) return b;
              h = b.value;
            }
            return g(h, u) || b;
          } : f || g;
        }, l.rebuild = function(f, g) {
          return f && g ? function(h) {
            g(h), f(h);
          } : f || g;
        }, l.validate = function(f, g) {
          return f && g ? function(h, u) {
            const b = g(h, u);
            if (b) {
              if (b.errors && (!Array.isArray(b.errors) || b.errors.length)) return b;
              h = b.value;
            }
            return f(h, u) || b;
          } : f || g;
        };
      }, 5107: (s, i, a) => {
        const o = a(375), c = a(8571), m = a(8652), d = a(8160), l = a(3292), f = a(6354), g = a(8901), h = a(9708), u = a(6133), b = a(3328), p = a(1152);
        let y;
        const v = { types: { alternatives: a(4946), any: a(8068), array: a(546), boolean: a(4937), date: a(7500), function: a(390), link: a(8785), number: a(3832), object: a(8966), string: a(7417), symbol: a(8826) }, aliases: { alt: "alternatives", bool: "boolean", func: "function" }, root: function() {
          const E = { _types: new Set(Object.keys(v.types)) };
          for (const x of E._types) E[x] = function() {
            for (var C = arguments.length, T = new Array(C), A = 0; A < C; A++) T[A] = arguments[A];
            return o(!T.length || ["alternatives", "link", "object"].includes(x), "The", x, "type does not allow arguments"), v.generate(this, v.types[x], T);
          };
          for (const x of ["allow", "custom", "disallow", "equal", "exist", "forbidden", "invalid", "not", "only", "optional", "options", "prefs", "preferences", "required", "strip", "valid", "when"]) E[x] = function() {
            return this.any()[x](...arguments);
          };
          Object.assign(E, v.methods);
          for (const x in v.aliases) {
            const C = v.aliases[x];
            E[x] = E[C];
          }
          return E.x = E.expression, p.setup && p.setup(E), E;
        } };
        v.methods = { ValidationError: f.ValidationError, version: d.version, cache: m.provider, assert(E, x) {
          for (var C = arguments.length, T = new Array(C > 2 ? C - 2 : 0), A = 2; A < C; A++) T[A - 2] = arguments[A];
          v.assert(E, x, !0, T);
        }, attempt(E, x) {
          for (var C = arguments.length, T = new Array(C > 2 ? C - 2 : 0), A = 2; A < C; A++) T[A - 2] = arguments[A];
          return v.assert(E, x, !1, T);
        }, build(E) {
          return o(typeof h.build == "function", "Manifest functionality disabled"), h.build(this, E);
        }, checkPreferences(E) {
          d.checkPreferences(E);
        }, compile(E, x) {
          return l.compile(this, E, x);
        }, defaults(E) {
          o(typeof E == "function", "modifier must be a function");
          const x = Object.assign({}, this);
          for (const C of x._types) {
            const T = E(x[C]());
            o(d.isSchema(T), "modifier must return a valid schema object"), x[C] = function() {
              for (var A = arguments.length, S = new Array(A), I = 0; I < A; I++) S[I] = arguments[I];
              return v.generate(this, T, S);
            };
          }
          return x;
        }, expression() {
          for (var E = arguments.length, x = new Array(E), C = 0; C < E; C++) x[C] = arguments[C];
          return new b(...x);
        }, extend() {
          for (var E = arguments.length, x = new Array(E), C = 0; C < E; C++) x[C] = arguments[C];
          d.verifyFlat(x, "extend"), y = y || a(3378), o(x.length, "You need to provide at least one extension"), this.assert(x, y.extensions);
          const T = Object.assign({}, this);
          T._types = new Set(T._types);
          for (let A of x) {
            typeof A == "function" && (A = A(T)), this.assert(A, y.extension);
            const S = v.expandExtension(A, T);
            for (const I of S) {
              o(T[I.type] === void 0 || T._types.has(I.type), "Cannot override name", I.type);
              const P = I.base || this.any(), H = g.type(P, I);
              T._types.add(I.type), T[I.type] = function() {
                for (var W = arguments.length, Z = new Array(W), j = 0; j < W; j++) Z[j] = arguments[j];
                return v.generate(this, H, Z);
              };
            }
          }
          return T;
        }, isError: f.ValidationError.isError, isExpression: b.isTemplate, isRef: u.isRef, isSchema: d.isSchema, in() {
          return u.in(...arguments);
        }, override: d.symbols.override, ref() {
          return u.create(...arguments);
        }, types() {
          const E = {};
          for (const x of this._types) E[x] = this[x]();
          for (const x in v.aliases) E[x] = this[x]();
          return E;
        } }, v.assert = function(E, x, C, T) {
          const A = T[0] instanceof Error || typeof T[0] == "string" ? T[0] : null, S = A !== null ? T[1] : T[0], I = x.validate(E, d.preferences({ errors: { stack: !0 } }, S || {}));
          let P = I.error;
          if (!P) return I.value;
          if (A instanceof Error) throw A;
          const H = C && typeof P.annotate == "function" ? P.annotate() : P.message;
          throw P instanceof f.ValidationError == 0 && (P = c(P)), P.message = A ? `${A} ${H}` : H, P;
        }, v.generate = function(E, x, C) {
          return o(E, "Must be invoked on a Joi instance."), x.$_root = E, x._definition.args && C.length ? x._definition.args(x, ...C) : x;
        }, v.expandExtension = function(E, x) {
          if (typeof E.type == "string") return [E];
          const C = [];
          for (const T of x._types) if (E.type.test(T)) {
            const A = Object.assign({}, E);
            A.type = T, A.base = x[T](), C.push(A);
          }
          return C;
        }, s.exports = v.root();
      }, 6914: (s, i, a) => {
        const o = a(375), c = a(8571), m = a(3328);
        i.compile = function(d, l) {
          if (typeof d == "string") return o(!l, "Cannot set single message string"), new m(d);
          if (m.isTemplate(d)) return o(!l, "Cannot set single message template"), d;
          o(typeof d == "object" && !Array.isArray(d), "Invalid message options"), l = l ? c(l) : {};
          for (let f in d) {
            const g = d[f];
            if (f === "root" || m.isTemplate(g)) {
              l[f] = g;
              continue;
            }
            if (typeof g == "string") {
              l[f] = new m(g);
              continue;
            }
            o(typeof g == "object" && !Array.isArray(g), "Invalid message for", f);
            const h = f;
            for (f in l[h] = l[h] || {}, g) {
              const u = g[f];
              f === "root" || m.isTemplate(u) ? l[h][f] = u : (o(typeof u == "string", "Invalid message for", f, "in", h), l[h][f] = new m(u));
            }
          }
          return l;
        }, i.decompile = function(d) {
          const l = {};
          for (let f in d) {
            const g = d[f];
            if (f === "root") {
              l.root = g;
              continue;
            }
            if (m.isTemplate(g)) {
              l[f] = g.describe({ compact: !0 });
              continue;
            }
            const h = f;
            for (f in l[h] = {}, g) {
              const u = g[f];
              f !== "root" ? l[h][f] = u.describe({ compact: !0 }) : l[h].root = u;
            }
          }
          return l;
        }, i.merge = function(d, l) {
          if (!d) return i.compile(l);
          if (!l) return d;
          if (typeof l == "string") return new m(l);
          if (m.isTemplate(l)) return l;
          const f = c(d);
          for (let g in l) {
            const h = l[g];
            if (g === "root" || m.isTemplate(h)) {
              f[g] = h;
              continue;
            }
            if (typeof h == "string") {
              f[g] = new m(h);
              continue;
            }
            o(typeof h == "object" && !Array.isArray(h), "Invalid message for", g);
            const u = g;
            for (g in f[u] = f[u] || {}, h) {
              const b = h[g];
              g === "root" || m.isTemplate(b) ? f[u][g] = b : (o(typeof b == "string", "Invalid message for", g, "in", u), f[u][g] = new m(b));
            }
          }
          return f;
        };
      }, 2294: (s, i, a) => {
        const o = a(375), c = a(8160), m = a(6133), d = {};
        i.Ids = d.Ids = class {
          constructor() {
            this._byId = /* @__PURE__ */ new Map(), this._byKey = /* @__PURE__ */ new Map(), this._schemaChain = !1;
          }
          clone() {
            const l = new d.Ids();
            return l._byId = new Map(this._byId), l._byKey = new Map(this._byKey), l._schemaChain = this._schemaChain, l;
          }
          concat(l) {
            l._schemaChain && (this._schemaChain = !0);
            for (const [f, g] of l._byId.entries()) o(!this._byKey.has(f), "Schema id conflicts with existing key:", f), this._byId.set(f, g);
            for (const [f, g] of l._byKey.entries()) o(!this._byId.has(f), "Schema key conflicts with existing id:", f), this._byKey.set(f, g);
          }
          fork(l, f, g) {
            const h = this._collect(l);
            h.push({ schema: g });
            const u = h.shift();
            let b = { id: u.id, schema: f(u.schema) };
            o(c.isSchema(b.schema), "adjuster function failed to return a joi schema type");
            for (const p of h) b = { id: p.id, schema: d.fork(p.schema, b.id, b.schema) };
            return b.schema;
          }
          labels(l) {
            let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
            const g = l[0], h = this._get(g);
            if (!h) return [...f, ...l].join(".");
            const u = l.slice(1);
            return f = [...f, h.schema._flags.label || g], u.length ? h.schema._ids.labels(u, f) : f.join(".");
          }
          reach(l) {
            let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
            const g = l[0], h = this._get(g);
            o(h, "Schema does not contain path", [...f, ...l].join("."));
            const u = l.slice(1);
            return u.length ? h.schema._ids.reach(u, [...f, g]) : h.schema;
          }
          register(l) {
            let { key: f } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (!l || !c.isSchema(l)) return;
            (l.$_property("schemaChain") || l._ids._schemaChain) && (this._schemaChain = !0);
            const g = l._flags.id;
            if (g) {
              const h = this._byId.get(g);
              o(!h || h.schema === l, "Cannot add different schemas with the same id:", g), o(!this._byKey.has(g), "Schema id conflicts with existing key:", g), this._byId.set(g, { schema: l, id: g });
            }
            f && (o(!this._byKey.has(f), "Schema already contains key:", f), o(!this._byId.has(f), "Schema key conflicts with existing id:", f), this._byKey.set(f, { schema: l, id: f }));
          }
          reset() {
            this._byId = /* @__PURE__ */ new Map(), this._byKey = /* @__PURE__ */ new Map(), this._schemaChain = !1;
          }
          _collect(l) {
            let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
            const h = l[0], u = this._get(h);
            o(u, "Schema does not contain path", [...f, ...l].join(".")), g = [u, ...g];
            const b = l.slice(1);
            return b.length ? u.schema._ids._collect(b, [...f, h], g) : g;
          }
          _get(l) {
            return this._byId.get(l) || this._byKey.get(l);
          }
        }, d.fork = function(l, f, g) {
          const h = i.schema(l, { each: (u, b) => {
            let { key: p } = b;
            if (f === (u._flags.id || p)) return g;
          }, ref: !1 });
          return h ? h.$_mutateRebuild() : l;
        }, i.schema = function(l, f) {
          let g;
          for (const h in l._flags) {
            if (h[0] === "_") continue;
            const u = d.scan(l._flags[h], { source: "flags", name: h }, f);
            u !== void 0 && (g = g || l.clone(), g._flags[h] = u);
          }
          for (let h = 0; h < l._rules.length; ++h) {
            const u = l._rules[h], b = d.scan(u.args, { source: "rules", name: u.name }, f);
            if (b !== void 0) {
              g = g || l.clone();
              const p = Object.assign({}, u);
              p.args = b, g._rules[h] = p, g._singleRules.get(u.name) === u && g._singleRules.set(u.name, p);
            }
          }
          for (const h in l.$_terms) {
            if (h[0] === "_") continue;
            const u = d.scan(l.$_terms[h], { source: "terms", name: h }, f);
            u !== void 0 && (g = g || l.clone(), g.$_terms[h] = u);
          }
          return g;
        }, d.scan = function(l, f, g, h, u) {
          const b = h || [];
          if (l === null || typeof l != "object") return;
          let p;
          if (Array.isArray(l)) {
            for (let y = 0; y < l.length; ++y) {
              const v = f.source === "terms" && f.name === "keys" && l[y].key, E = d.scan(l[y], f, g, [y, ...b], v);
              E !== void 0 && (p = p || l.slice(), p[y] = E);
            }
            return p;
          }
          if (g.schema !== !1 && c.isSchema(l) || g.ref !== !1 && m.isRef(l)) {
            const y = g.each(l, { ...f, path: b, key: u });
            return y === l ? void 0 : y;
          }
          for (const y in l) {
            if (y[0] === "_") continue;
            const v = d.scan(l[y], f, g, [y, ...b], u);
            v !== void 0 && (p = p || Object.assign({}, l), p[y] = v);
          }
          return p;
        };
      }, 6133: (s, i, a) => {
        const o = a(375), c = a(8571), m = a(9621), d = a(8160);
        let l;
        const f = { symbol: Symbol("ref"), defaults: { adjust: null, in: !1, iterables: null, map: null, separator: ".", type: "value" } };
        i.create = function(g) {
          let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          o(typeof g == "string", "Invalid reference key:", g), d.assertOptions(h, ["adjust", "ancestor", "in", "iterables", "map", "prefix", "render", "separator"]), o(!h.prefix || typeof h.prefix == "object", "options.prefix must be of type object");
          const u = Object.assign({}, f.defaults, h);
          delete u.prefix;
          const b = u.separator, p = f.context(g, b, h.prefix);
          if (u.type = p.type, g = p.key, u.type === "value") if (p.root && (o(!b || g[0] !== b, "Cannot specify relative path with root prefix"), u.ancestor = "root", g || (g = null)), b && b === g) g = null, u.ancestor = 0;
          else if (u.ancestor !== void 0) o(!b || !g || g[0] !== b, "Cannot combine prefix with ancestor option");
          else {
            const [y, v] = f.ancestor(g, b);
            v && (g = g.slice(v)) === "" && (g = null), u.ancestor = y;
          }
          return u.path = b ? g === null ? [] : g.split(b) : [g], new f.Ref(u);
        }, i.in = function(g) {
          let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return i.create(g, { ...h, in: !0 });
        }, i.isRef = function(g) {
          return !!g && !!g[d.symbols.ref];
        }, f.Ref = class {
          constructor(g) {
            o(typeof g == "object", "Invalid reference construction"), d.assertOptions(g, ["adjust", "ancestor", "in", "iterables", "map", "path", "render", "separator", "type", "depth", "key", "root", "display"]), o([!1, void 0].includes(g.separator) || typeof g.separator == "string" && g.separator.length === 1, "Invalid separator"), o(!g.adjust || typeof g.adjust == "function", "options.adjust must be a function"), o(!g.map || Array.isArray(g.map), "options.map must be an array"), o(!g.map || !g.adjust, "Cannot set both map and adjust options"), Object.assign(this, f.defaults, g), o(this.type === "value" || this.ancestor === void 0, "Non-value references cannot reference ancestors"), Array.isArray(this.map) && (this.map = new Map(this.map)), this.depth = this.path.length, this.key = this.path.length ? this.path.join(this.separator) : null, this.root = this.path[0], this.updateDisplay();
          }
          resolve(g, h, u, b) {
            let p = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
            return o(!this.in || p.in, "Invalid in() reference usage"), this.type === "global" ? this._resolve(u.context, h, p) : this.type === "local" ? this._resolve(b, h, p) : this.ancestor ? this.ancestor === "root" ? this._resolve(h.ancestors[h.ancestors.length - 1], h, p) : (o(this.ancestor <= h.ancestors.length, "Invalid reference exceeds the schema root:", this.display), this._resolve(h.ancestors[this.ancestor - 1], h, p)) : this._resolve(g, h, p);
          }
          _resolve(g, h, u) {
            let b;
            if (this.type === "value" && h.mainstay.shadow && u.shadow !== !1 && (b = h.mainstay.shadow.get(this.absolute(h))), b === void 0 && (b = m(g, this.path, { iterables: this.iterables, functions: !0 })), this.adjust && (b = this.adjust(b)), this.map) {
              const p = this.map.get(b);
              p !== void 0 && (b = p);
            }
            return h.mainstay && h.mainstay.tracer.resolve(h, this, b), b;
          }
          toString() {
            return this.display;
          }
          absolute(g) {
            return [...g.path.slice(0, -this.ancestor), ...this.path];
          }
          clone() {
            return new f.Ref(this);
          }
          describe() {
            const g = { path: this.path };
            this.type !== "value" && (g.type = this.type), this.separator !== "." && (g.separator = this.separator), this.type === "value" && this.ancestor !== 1 && (g.ancestor = this.ancestor), this.map && (g.map = [...this.map]);
            for (const h of ["adjust", "iterables", "render"]) this[h] !== null && this[h] !== void 0 && (g[h] = this[h]);
            return this.in !== !1 && (g.in = !0), { ref: g };
          }
          updateDisplay() {
            const g = this.key !== null ? this.key : "";
            if (this.type !== "value") return void (this.display = `ref:${this.type}:${g}`);
            if (!this.separator) return void (this.display = `ref:${g}`);
            if (!this.ancestor) return void (this.display = `ref:${this.separator}${g}`);
            if (this.ancestor === "root") return void (this.display = `ref:root:${g}`);
            if (this.ancestor === 1) return void (this.display = `ref:${g || ".."}`);
            const h = new Array(this.ancestor + 1).fill(this.separator).join("");
            this.display = `ref:${h}${g || ""}`;
          }
        }, f.Ref.prototype[d.symbols.ref] = !0, i.build = function(g) {
          return (g = Object.assign({}, f.defaults, g)).type === "value" && g.ancestor === void 0 && (g.ancestor = 1), new f.Ref(g);
        }, f.context = function(g, h) {
          let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (g = g.trim(), u) {
            const b = u.global === void 0 ? "$" : u.global;
            if (b !== h && g.startsWith(b)) return { key: g.slice(b.length), type: "global" };
            const p = u.local === void 0 ? "#" : u.local;
            if (p !== h && g.startsWith(p)) return { key: g.slice(p.length), type: "local" };
            const y = u.root === void 0 ? "/" : u.root;
            if (y !== h && g.startsWith(y)) return { key: g.slice(y.length), type: "value", root: !0 };
          }
          return { key: g, type: "value" };
        }, f.ancestor = function(g, h) {
          if (!h) return [1, 0];
          if (g[0] !== h) return [1, 0];
          if (g[1] !== h) return [0, 1];
          let u = 2;
          for (; g[u] === h; ) ++u;
          return [u - 1, u];
        }, i.toSibling = 0, i.toParent = 1, i.Manager = class {
          constructor() {
            this.refs = [];
          }
          register(g, h) {
            if (g) if (h = h === void 0 ? i.toParent : h, Array.isArray(g)) for (const u of g) this.register(u, h);
            else if (d.isSchema(g)) for (const u of g._refs.refs) u.ancestor - h >= 0 && this.refs.push({ ancestor: u.ancestor - h, root: u.root });
            else i.isRef(g) && g.type === "value" && g.ancestor - h >= 0 && this.refs.push({ ancestor: g.ancestor - h, root: g.root }), l = l || a(3328), l.isTemplate(g) && this.register(g.refs(), h);
          }
          get length() {
            return this.refs.length;
          }
          clone() {
            const g = new i.Manager();
            return g.refs = c(this.refs), g;
          }
          reset() {
            this.refs = [];
          }
          roots() {
            return this.refs.filter((g) => !g.ancestor).map((g) => g.root);
          }
        };
      }, 3378: (s, i, a) => {
        const o = a(5107), c = {};
        c.wrap = o.string().min(1).max(2).allow(!1), i.preferences = o.object({ allowUnknown: o.boolean(), abortEarly: o.boolean(), artifacts: o.boolean(), cache: o.boolean(), context: o.object(), convert: o.boolean(), dateFormat: o.valid("date", "iso", "string", "time", "utc"), debug: o.boolean(), errors: { escapeHtml: o.boolean(), label: o.valid("path", "key", !1), language: [o.string(), o.object().ref()], render: o.boolean(), stack: o.boolean(), wrap: { label: c.wrap, array: c.wrap, string: c.wrap } }, externals: o.boolean(), messages: o.object(), noDefaults: o.boolean(), nonEnumerables: o.boolean(), presence: o.valid("required", "optional", "forbidden"), skipFunctions: o.boolean(), stripUnknown: o.object({ arrays: o.boolean(), objects: o.boolean() }).or("arrays", "objects").allow(!0, !1), warnings: o.boolean() }).strict(), c.nameRx = /^[a-zA-Z0-9]\w*$/, c.rule = o.object({ alias: o.array().items(o.string().pattern(c.nameRx)).single(), args: o.array().items(o.string(), o.object({ name: o.string().pattern(c.nameRx).required(), ref: o.boolean(), assert: o.alternatives([o.function(), o.object().schema()]).conditional("ref", { is: !0, then: o.required() }), normalize: o.function(), message: o.string().when("assert", { is: o.function(), then: o.required() }) })), convert: o.boolean(), manifest: o.boolean(), method: o.function().allow(!1), multi: o.boolean(), validate: o.function() }), i.extension = o.object({ type: o.alternatives([o.string(), o.object().regex()]).required(), args: o.function(), cast: o.object().pattern(c.nameRx, o.object({ from: o.function().maxArity(1).required(), to: o.function().minArity(1).maxArity(2).required() })), base: o.object().schema().when("type", { is: o.object().regex(), then: o.forbidden() }), coerce: [o.function().maxArity(3), o.object({ method: o.function().maxArity(3).required(), from: o.array().items(o.string()).single() })], flags: o.object().pattern(c.nameRx, o.object({ setter: o.string(), default: o.any() })), manifest: { build: o.function().arity(2) }, messages: [o.object(), o.string()], modifiers: o.object().pattern(c.nameRx, o.function().minArity(1).maxArity(2)), overrides: o.object().pattern(c.nameRx, o.function()), prepare: o.function().maxArity(3), rebuild: o.function().arity(1), rules: o.object().pattern(c.nameRx, c.rule), terms: o.object().pattern(c.nameRx, o.object({ init: o.array().allow(null).required(), manifest: o.object().pattern(/.+/, [o.valid("schema", "single"), o.object({ mapped: o.object({ from: o.string().required(), to: o.string().required() }).required() })]) })), validate: o.function().maxArity(3) }).strict(), i.extensions = o.array().items(o.object(), o.function().arity(1)).strict(), c.desc = { buffer: o.object({ buffer: o.string() }), func: o.object({ function: o.function().required(), options: { literal: !0 } }), override: o.object({ override: !0 }), ref: o.object({ ref: o.object({ type: o.valid("value", "global", "local"), path: o.array().required(), separator: o.string().length(1).allow(!1), ancestor: o.number().min(0).integer().allow("root"), map: o.array().items(o.array().length(2)).min(1), adjust: o.function(), iterables: o.boolean(), in: o.boolean(), render: o.boolean() }).required() }), regex: o.object({ regex: o.string().min(3) }), special: o.object({ special: o.valid("deep").required() }), template: o.object({ template: o.string().required(), options: o.object() }), value: o.object({ value: o.alternatives([o.object(), o.array()]).required() }) }, c.desc.entity = o.alternatives([o.array().items(o.link("...")), o.boolean(), o.function(), o.number(), o.string(), c.desc.buffer, c.desc.func, c.desc.ref, c.desc.regex, c.desc.special, c.desc.template, c.desc.value, o.link("/")]), c.desc.values = o.array().items(null, o.boolean(), o.function(), o.number().allow(1 / 0, -1 / 0), o.string().allow(""), o.symbol(), c.desc.buffer, c.desc.func, c.desc.override, c.desc.ref, c.desc.regex, c.desc.template, c.desc.value), c.desc.messages = o.object().pattern(/.+/, [o.string(), c.desc.template, o.object().pattern(/.+/, [o.string(), c.desc.template])]), i.description = o.object({ type: o.string().required(), flags: o.object({ cast: o.string(), default: o.any(), description: o.string(), empty: o.link("/"), failover: c.desc.entity, id: o.string(), label: o.string(), only: !0, presence: ["optional", "required", "forbidden"], result: ["raw", "strip"], strip: o.boolean(), unit: o.string() }).unknown(), preferences: { allowUnknown: o.boolean(), abortEarly: o.boolean(), artifacts: o.boolean(), cache: o.boolean(), convert: o.boolean(), dateFormat: ["date", "iso", "string", "time", "utc"], errors: { escapeHtml: o.boolean(), label: ["path", "key"], language: [o.string(), c.desc.ref], wrap: { label: c.wrap, array: c.wrap } }, externals: o.boolean(), messages: c.desc.messages, noDefaults: o.boolean(), nonEnumerables: o.boolean(), presence: ["required", "optional", "forbidden"], skipFunctions: o.boolean(), stripUnknown: o.object({ arrays: o.boolean(), objects: o.boolean() }).or("arrays", "objects").allow(!0, !1), warnings: o.boolean() }, allow: c.desc.values, invalid: c.desc.values, rules: o.array().min(1).items({ name: o.string().required(), args: o.object().min(1), keep: o.boolean(), message: [o.string(), c.desc.messages], warn: o.boolean() }), keys: o.object().pattern(/.*/, o.link("/")), link: c.desc.ref }).pattern(/^[a-z]\w*$/, o.any());
      }, 493: (s, i, a) => {
        const o = a(8571), c = a(9621), m = a(8160), d = { value: Symbol("value") };
        s.exports = d.State = class {
          constructor(l, f, g) {
            this.path = l, this.ancestors = f, this.mainstay = g.mainstay, this.schemas = g.schemas, this.debug = null;
          }
          localize(l) {
            let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            const h = new d.State(l, f, this);
            return g && h.schemas && (h.schemas = [d.schemas(g), ...h.schemas]), h;
          }
          nest(l, f) {
            const g = new d.State(this.path, this.ancestors, this);
            return g.schemas = g.schemas && [d.schemas(l), ...g.schemas], g.debug = f, g;
          }
          shadow(l, f) {
            this.mainstay.shadow = this.mainstay.shadow || new d.Shadow(), this.mainstay.shadow.set(this.path, l, f);
          }
          snapshot() {
            this.mainstay.shadow && (this._snapshot = o(this.mainstay.shadow.node(this.path))), this.mainstay.snapshot();
          }
          restore() {
            this.mainstay.shadow && (this.mainstay.shadow.override(this.path, this._snapshot), this._snapshot = void 0), this.mainstay.restore();
          }
        }, d.schemas = function(l) {
          return m.isSchema(l) ? { schema: l } : l;
        }, d.Shadow = class {
          constructor() {
            this._values = null;
          }
          set(l, f, g) {
            if (!l.length || g === "strip" && typeof l[l.length - 1] == "number") return;
            this._values = this._values || /* @__PURE__ */ new Map();
            let h = this._values;
            for (let u = 0; u < l.length; ++u) {
              const b = l[u];
              let p = h.get(b);
              p || (p = /* @__PURE__ */ new Map(), h.set(b, p)), h = p;
            }
            h[d.value] = f;
          }
          get(l) {
            const f = this.node(l);
            if (f) return f[d.value];
          }
          node(l) {
            if (this._values) return c(this._values, l, { iterables: !0 });
          }
          override(l, f) {
            if (!this._values) return;
            const g = l.slice(0, -1), h = l[l.length - 1], u = c(this._values, g, { iterables: !0 });
            f ? u.set(h, f) : u && u.delete(h);
          }
        };
      }, 3328: (s, i, a) => {
        const o = a(375), c = a(8571), m = a(5277), d = a(1447), l = a(8160), f = a(6354), g = a(6133), h = { symbol: Symbol("template"), opens: new Array(1e3).join("\0"), closes: new Array(1e3).join(""), dateFormat: { date: Date.prototype.toDateString, iso: Date.prototype.toISOString, string: Date.prototype.toString, time: Date.prototype.toTimeString, utc: Date.prototype.toUTCString } };
        s.exports = h.Template = class {
          constructor(u, b) {
            o(typeof u == "string", "Template source must be a string"), o(!u.includes("\0") && !u.includes(""), "Template source cannot contain reserved control characters"), this.source = u, this.rendered = u, this._template = null, this._settings = c(b), this._parse();
          }
          _parse() {
            if (!this.source.includes("{")) return;
            const u = h.encode(this.source), b = h.split(u);
            let p = !1;
            const y = [], v = b.shift();
            v && y.push(v);
            for (const E of b) {
              const x = E[0] !== "{", C = x ? "}" : "}}", T = E.indexOf(C);
              if (T === -1 || E[1] === "{") {
                y.push(`{${h.decode(E)}`);
                continue;
              }
              let A = E.slice(x ? 0 : 1, T);
              const S = A[0] === ":";
              S && (A = A.slice(1));
              const I = this._ref(h.decode(A), { raw: x, wrapped: S });
              y.push(I), typeof I != "string" && (p = !0);
              const P = E.slice(T + C.length);
              P && y.push(h.decode(P));
            }
            p ? this._template = y : this.rendered = y.join("");
          }
          static date(u, b) {
            return h.dateFormat[b.dateFormat].call(u);
          }
          describe() {
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!this._settings && u.compact) return this.source;
            const b = { template: this.source };
            return this._settings && (b.options = this._settings), b;
          }
          static build(u) {
            return new h.Template(u.template, u.options);
          }
          isDynamic() {
            return !!this._template;
          }
          static isTemplate(u) {
            return !!u && !!u[l.symbols.template];
          }
          refs() {
            if (!this._template) return;
            const u = [];
            for (const b of this._template) typeof b != "string" && u.push(...b.refs);
            return u;
          }
          resolve(u, b, p, y) {
            return this._template && this._template.length === 1 ? this._part(this._template[0], u, b, p, y, {}) : this.render(u, b, p, y);
          }
          _part(u) {
            for (var b = arguments.length, p = new Array(b > 1 ? b - 1 : 0), y = 1; y < b; y++) p[y - 1] = arguments[y];
            return u.ref ? u.ref.resolve(...p) : u.formula.evaluate(p);
          }
          render(u, b, p, y) {
            let v = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
            if (!this.isDynamic()) return this.rendered;
            const E = [];
            for (const x of this._template) if (typeof x == "string") E.push(x);
            else {
              const C = this._part(x, u, b, p, y, v), T = h.stringify(C, u, b, p, y, v);
              if (T !== void 0) {
                const A = x.raw || (v.errors && v.errors.escapeHtml) === !1 ? T : m(T);
                E.push(h.wrap(A, x.wrapped && p.errors.wrap.label));
              }
            }
            return E.join("");
          }
          _ref(u, b) {
            let { raw: p, wrapped: y } = b;
            const v = [], E = (C) => {
              const T = g.create(C, this._settings);
              return v.push(T), (A) => T.resolve(...A);
            };
            try {
              var x = new d.Parser(u, { reference: E, functions: h.functions, constants: h.constants });
            } catch (C) {
              throw C.message = `Invalid template variable "${u}" fails due to: ${C.message}`, C;
            }
            if (x.single) {
              if (x.single.type === "reference") {
                const C = v[0];
                return { ref: C, raw: p, refs: v, wrapped: y || C.type === "local" && C.key === "label" };
              }
              return h.stringify(x.single.value);
            }
            return { formula: x, raw: p, refs: v };
          }
          toString() {
            return this.source;
          }
        }, h.Template.prototype[l.symbols.template] = !0, h.Template.prototype.isImmutable = !0, h.encode = function(u) {
          return u.replace(/\\(\{+)/g, (b, p) => h.opens.slice(0, p.length)).replace(/\\(\}+)/g, (b, p) => h.closes.slice(0, p.length));
        }, h.decode = function(u) {
          return u.replace(/\u0000/g, "{").replace(/\u0001/g, "}");
        }, h.split = function(u) {
          const b = [];
          let p = "";
          for (let y = 0; y < u.length; ++y) {
            const v = u[y];
            if (v === "{") {
              let E = "";
              for (; y + 1 < u.length && u[y + 1] === "{"; ) E += "{", ++y;
              b.push(p), p = E;
            } else p += v;
          }
          return b.push(p), b;
        }, h.wrap = function(u, b) {
          return b ? b.length === 1 ? `${b}${u}${b}` : `${b[0]}${u}${b[1]}` : u;
        }, h.stringify = function(u, b, p, y, v) {
          let E = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
          const x = typeof u, C = y && y.errors && y.errors.wrap || {};
          let T = !1;
          if (g.isRef(u) && u.render && (T = u.in, u = u.resolve(b, p, y, v, { in: u.in, ...E })), u === null) return "null";
          if (x === "string") return h.wrap(u, E.arrayItems && C.string);
          if (x === "number" || x === "function" || x === "symbol") return u.toString();
          if (x !== "object") return JSON.stringify(u);
          if (u instanceof Date) return h.Template.date(u, y);
          if (u instanceof Map) {
            const S = [];
            for (const [I, P] of u.entries()) S.push(`${I.toString()} -> ${P.toString()}`);
            u = S;
          }
          if (!Array.isArray(u)) return u.toString();
          const A = [];
          for (const S of u) A.push(h.stringify(S, b, p, y, v, { arrayItems: !0, ...E }));
          return h.wrap(A.join(", "), !T && C.array);
        }, h.constants = { true: !0, false: !1, null: null, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5 }, h.functions = { if: (u, b, p) => u ? b : p, length: (u) => typeof u == "string" ? u.length : u && typeof u == "object" ? Array.isArray(u) ? u.length : Object.keys(u).length : null, msg(u) {
          const [b, p, y, v, E] = this, x = E.messages;
          if (!x) return "";
          const C = f.template(b, x[0], u, p, y) || f.template(b, x[1], u, p, y);
          return C ? C.render(b, p, y, v, E) : "";
        }, number: (u) => typeof u == "number" ? u : typeof u == "string" ? parseFloat(u) : typeof u == "boolean" ? u ? 1 : 0 : u instanceof Date ? u.getTime() : null };
      }, 4946: (s, i, a) => {
        const o = a(375), c = a(1687), m = a(8068), d = a(8160), l = a(3292), f = a(6354), g = a(6133), h = {};
        s.exports = m.extend({ type: "alternatives", flags: { match: { default: "any" } }, terms: { matches: { init: [], register: g.toSibling } }, args(u) {
          for (var b = arguments.length, p = new Array(b > 1 ? b - 1 : 0), y = 1; y < b; y++) p[y - 1] = arguments[y];
          return p.length === 1 && Array.isArray(p[0]) ? u.try(...p[0]) : u.try(...p);
        }, validate(u, b) {
          const { schema: p, error: y, state: v, prefs: E } = b;
          if (p._flags.match) {
            const C = [], T = [];
            for (let S = 0; S < p.$_terms.matches.length; ++S) {
              const I = p.$_terms.matches[S], P = v.nest(I.schema, `match.${S}`);
              P.snapshot();
              const H = I.schema.$_validate(u, P, E);
              H.errors ? (T.push(H.errors), P.restore()) : C.push(H.value);
            }
            if (C.length === 0) return { errors: y("alternatives.any", { details: T.map((S) => f.details(S, { override: !1 })) }) };
            if (p._flags.match === "one") return C.length === 1 ? { value: C[0] } : { errors: y("alternatives.one") };
            if (C.length !== p.$_terms.matches.length) return { errors: y("alternatives.all", { details: T.map((S) => f.details(S, { override: !1 })) }) };
            const A = (S) => S.$_terms.matches.some((I) => I.schema.type === "object" || I.schema.type === "alternatives" && A(I.schema));
            return A(p) ? { value: C.reduce((S, I) => c(S, I, { mergeArrays: !1 })) } : { value: C[C.length - 1] };
          }
          const x = [];
          for (let C = 0; C < p.$_terms.matches.length; ++C) {
            const T = p.$_terms.matches[C];
            if (T.schema) {
              const I = v.nest(T.schema, `match.${C}`);
              I.snapshot();
              const P = T.schema.$_validate(u, I, E);
              if (!P.errors) return P;
              I.restore(), x.push({ schema: T.schema, reports: P.errors });
              continue;
            }
            const A = T.ref ? T.ref.resolve(u, v, E) : u, S = T.is ? [T] : T.switch;
            for (let I = 0; I < S.length; ++I) {
              const P = S[I], { is: H, then: W, otherwise: Z } = P, j = `match.${C}${T.switch ? "." + I : ""}`;
              if (H.$_match(A, v.nest(H, `${j}.is`), E)) {
                if (W) return W.$_validate(u, v.nest(W, `${j}.then`), E);
              } else if (Z) return Z.$_validate(u, v.nest(Z, `${j}.otherwise`), E);
            }
          }
          return h.errors(x, b);
        }, rules: { conditional: { method(u, b) {
          o(!this._flags._endedSwitch, "Unreachable condition"), o(!this._flags.match, "Cannot combine match mode", this._flags.match, "with conditional rule"), o(b.break === void 0, "Cannot use break option with alternatives conditional");
          const p = this.clone(), y = l.when(p, u, b), v = y.is ? [y] : y.switch;
          for (const E of v) if (E.then && E.otherwise) {
            p.$_setFlag("_endedSwitch", !0, { clone: !1 });
            break;
          }
          return p.$_terms.matches.push(y), p.$_mutateRebuild();
        } }, match: { method(u) {
          if (o(["any", "one", "all"].includes(u), "Invalid alternatives match mode", u), u !== "any") for (const b of this.$_terms.matches) o(b.schema, "Cannot combine match mode", u, "with conditional rules");
          return this.$_setFlag("match", u);
        } }, try: { method() {
          for (var u = arguments.length, b = new Array(u), p = 0; p < u; p++) b[p] = arguments[p];
          o(b.length, "Missing alternative schemas"), d.verifyFlat(b, "try"), o(!this._flags._endedSwitch, "Unreachable condition");
          const y = this.clone();
          for (const v of b) y.$_terms.matches.push({ schema: y.$_compile(v) });
          return y.$_mutateRebuild();
        } } }, overrides: { label(u) {
          return this.$_parent("label", u).$_modify({ each: (b, p) => p.path[0] !== "is" ? b.label(u) : void 0, ref: !1 });
        } }, rebuild(u) {
          u.$_modify({ each: (b) => {
            d.isSchema(b) && b.type === "array" && u.$_setFlag("_arrayItems", !0, { clone: !1 });
          } });
        }, manifest: { build(u, b) {
          if (b.matches) for (const p of b.matches) {
            const { schema: y, ref: v, is: E, not: x, then: C, otherwise: T } = p;
            u = y ? u.try(y) : v ? u.conditional(v, { is: E, then: C, not: x, otherwise: T, switch: p.switch }) : u.conditional(E, { then: C, otherwise: T });
          }
          return u;
        } }, messages: { "alternatives.all": "{{#label}} does not match all of the required types", "alternatives.any": "{{#label}} does not match any of the allowed types", "alternatives.match": "{{#label}} does not match any of the allowed types", "alternatives.one": "{{#label}} matches more than one allowed type", "alternatives.types": "{{#label}} must be one of {{#types}}" } }), h.errors = function(u, b) {
          let { error: p, state: y } = b;
          if (!u.length) return { errors: p("alternatives.any") };
          if (u.length === 1) return { errors: u[0].reports };
          const v = /* @__PURE__ */ new Set(), E = [];
          for (const { reports: x, schema: C } of u) {
            if (x.length > 1) return h.unmatched(u, p);
            const T = x[0];
            if (T instanceof f.Report == 0) return h.unmatched(u, p);
            if (T.state.path.length !== y.path.length) {
              E.push({ type: C.type, report: T });
              continue;
            }
            if (T.code === "any.only") {
              for (const I of T.local.valids) v.add(I);
              continue;
            }
            const [A, S] = T.code.split(".");
            S === "base" ? v.add(A) : E.push({ type: C.type, report: T });
          }
          return E.length ? E.length === 1 ? { errors: E[0].report } : h.unmatched(u, p) : { errors: p("alternatives.types", { types: [...v] }) };
        }, h.unmatched = function(u, b) {
          const p = [];
          for (const y of u) p.push(...y.reports);
          return { errors: b("alternatives.match", f.details(p, { override: !1 })) };
        };
      }, 8068: (s, i, a) => {
        const o = a(375), c = a(7629), m = a(8160), d = a(6914);
        s.exports = c.extend({ type: "any", flags: { only: { default: !1 } }, terms: { alterations: { init: null }, examples: { init: null }, externals: { init: null }, metas: { init: [] }, notes: { init: [] }, shared: { init: null }, tags: { init: [] }, whens: { init: null } }, rules: { custom: { method(l, f) {
          return o(typeof l == "function", "Method must be a function"), o(f === void 0 || f && typeof f == "string", "Description must be a non-empty string"), this.$_addRule({ name: "custom", args: { method: l, description: f } });
        }, validate(l, f, g) {
          let { method: h } = g;
          try {
            return h(l, f);
          } catch (u) {
            return f.error("any.custom", { error: u });
          }
        }, args: ["method", "description"], multi: !0 }, messages: { method(l) {
          return this.prefs({ messages: l });
        } }, shared: { method(l) {
          o(m.isSchema(l) && l._flags.id, "Schema must be a schema with an id");
          const f = this.clone();
          return f.$_terms.shared = f.$_terms.shared || [], f.$_terms.shared.push(l), f.$_mutateRegister(l), f;
        } }, warning: { method(l, f) {
          return o(l && typeof l == "string", "Invalid warning code"), this.$_addRule({ name: "warning", args: { code: l, local: f }, warn: !0 });
        }, validate(l, f, g) {
          let { code: h, local: u } = g;
          return f.error(h, u);
        }, args: ["code", "local"], multi: !0 } }, modifiers: { keep(l) {
          let f = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          l.keep = f;
        }, message(l, f) {
          l.message = d.compile(f);
        }, warn(l) {
          let f = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          l.warn = f;
        } }, manifest: { build(l, f) {
          for (const g in f) {
            const h = f[g];
            if (["examples", "externals", "metas", "notes", "tags"].includes(g)) for (const u of h) l = l[g.slice(0, -1)](u);
            else if (g !== "alterations") if (g !== "whens") {
              if (g === "shared") for (const u of h) l = l.shared(u);
            } else for (const u of h) {
              const { ref: b, is: p, not: y, then: v, otherwise: E, concat: x } = u;
              l = x ? l.concat(x) : b ? l.when(b, { is: p, not: y, then: v, otherwise: E, switch: u.switch, break: u.break }) : l.when(p, { then: v, otherwise: E, break: u.break });
            }
            else {
              const u = {};
              for (const { target: b, adjuster: p } of h) u[b] = p;
              l = l.alter(u);
            }
          }
          return l;
        } }, messages: { "any.custom": "{{#label}} failed custom validation because {{#error.message}}", "any.default": "{{#label}} threw an error when running default method", "any.failover": "{{#label}} threw an error when running failover method", "any.invalid": "{{#label}} contains an invalid value", "any.only": '{{#label}} must be {if(#valids.length == 1, "", "one of ")}{{#valids}}', "any.ref": "{{#label}} {{#arg}} references {{:#ref}} which {{#reason}}", "any.required": "{{#label}} is required", "any.unknown": "{{#label}} is not allowed" } });
      }, 546: (s, i, a) => {
        const o = a(375), c = a(9474), m = a(9621), d = a(8068), l = a(8160), f = a(3292), g = {};
        s.exports = d.extend({ type: "array", flags: { single: { default: !1 }, sparse: { default: !1 } }, terms: { items: { init: [], manifest: "schema" }, ordered: { init: [], manifest: "schema" }, _exclusions: { init: [] }, _inclusions: { init: [] }, _requireds: { init: [] } }, coerce: { from: "object", method(h, u) {
          let { schema: b, state: p, prefs: y } = u;
          if (!Array.isArray(h)) return;
          const v = b.$_getRule("sort");
          return v ? g.sort(b, h, v.args.options, p, y) : void 0;
        } }, validate(h, u) {
          let { schema: b, error: p } = u;
          if (!Array.isArray(h)) {
            if (b._flags.single) {
              const y = [h];
              return y[l.symbols.arraySingle] = !0, { value: y };
            }
            return { errors: p("array.base") };
          }
          if (b.$_getRule("items") || b.$_terms.externals) return { value: h.slice() };
        }, rules: { has: { method(h) {
          h = this.$_compile(h, { appendPath: !0 });
          const u = this.$_addRule({ name: "has", args: { schema: h } });
          return u.$_mutateRegister(h), u;
        }, validate(h, u, b) {
          let { state: p, prefs: y, error: v } = u, { schema: E } = b;
          const x = [h, ...p.ancestors];
          for (let T = 0; T < h.length; ++T) {
            const A = p.localize([...p.path, T], x, E);
            if (E.$_match(h[T], A, y)) return h;
          }
          const C = E._flags.label;
          return C ? v("array.hasKnown", { patternLabel: C }) : v("array.hasUnknown", null);
        }, multi: !0 }, items: { method() {
          for (var h = arguments.length, u = new Array(h), b = 0; b < h; b++) u[b] = arguments[b];
          l.verifyFlat(u, "items");
          const p = this.$_addRule("items");
          for (let y = 0; y < u.length; ++y) {
            const v = l.tryWithPath(() => this.$_compile(u[y]), y, { append: !0 });
            p.$_terms.items.push(v);
          }
          return p.$_mutateRebuild();
        }, validate(h, u) {
          let { schema: b, error: p, state: y, prefs: v, errorsArray: E } = u;
          const x = b.$_terms._requireds.slice(), C = b.$_terms.ordered.slice(), T = [...b.$_terms._inclusions, ...x], A = !h[l.symbols.arraySingle];
          delete h[l.symbols.arraySingle];
          const S = E();
          let I = h.length;
          for (let P = 0; P < I; ++P) {
            const H = h[P];
            let W = !1, Z = !1;
            const j = A ? P : new Number(P), z = [...y.path, j];
            if (!b._flags.sparse && H === void 0) {
              if (S.push(p("array.sparse", { key: j, path: z, pos: P, value: void 0 }, y.localize(z))), v.abortEarly) return S;
              C.shift();
              continue;
            }
            const Y = [h, ...y.ancestors];
            for (const ue of b.$_terms._exclusions) if (ue.$_match(H, y.localize(z, Y, ue), v, { presence: "ignore" })) {
              if (S.push(p("array.excludes", { pos: P, value: H }, y.localize(z))), v.abortEarly) return S;
              W = !0, C.shift();
              break;
            }
            if (W) continue;
            if (b.$_terms.ordered.length) {
              if (C.length) {
                const ue = C.shift(), ye = ue.$_validate(H, y.localize(z, Y, ue), v);
                if (ye.errors) {
                  if (S.push(...ye.errors), v.abortEarly) return S;
                } else if (ue._flags.result === "strip") g.fastSplice(h, P), --P, --I;
                else {
                  if (!b._flags.sparse && ye.value === void 0) {
                    if (S.push(p("array.sparse", { key: j, path: z, pos: P, value: void 0 }, y.localize(z))), v.abortEarly) return S;
                    continue;
                  }
                  h[P] = ye.value;
                }
                continue;
              }
              if (!b.$_terms.items.length) {
                if (S.push(p("array.orderedLength", { pos: P, limit: b.$_terms.ordered.length })), v.abortEarly) return S;
                break;
              }
            }
            const de = [];
            let fe = x.length;
            for (let ue = 0; ue < fe; ++ue) {
              const ye = y.localize(z, Y, x[ue]);
              ye.snapshot();
              const he = x[ue].$_validate(H, ye, v);
              if (de[ue] = he, !he.errors) {
                if (h[P] = he.value, Z = !0, g.fastSplice(x, ue), --ue, --fe, !b._flags.sparse && he.value === void 0 && (S.push(p("array.sparse", { key: j, path: z, pos: P, value: void 0 }, y.localize(z))), v.abortEarly)) return S;
                break;
              }
              ye.restore();
            }
            if (Z) continue;
            const _e = v.stripUnknown && !!v.stripUnknown.arrays || !1;
            fe = T.length;
            for (const ue of T) {
              let ye;
              const he = x.indexOf(ue);
              if (he !== -1) ye = de[he];
              else {
                const Pe = y.localize(z, Y, ue);
                if (Pe.snapshot(), ye = ue.$_validate(H, Pe, v), !ye.errors) {
                  ue._flags.result === "strip" ? (g.fastSplice(h, P), --P, --I) : b._flags.sparse || ye.value !== void 0 ? h[P] = ye.value : (S.push(p("array.sparse", { key: j, path: z, pos: P, value: void 0 }, y.localize(z))), W = !0), Z = !0;
                  break;
                }
                Pe.restore();
              }
              if (fe === 1) {
                if (_e) {
                  g.fastSplice(h, P), --P, --I, Z = !0;
                  break;
                }
                if (S.push(...ye.errors), v.abortEarly) return S;
                W = !0;
                break;
              }
            }
            if (!W && (b.$_terms._inclusions.length || b.$_terms._requireds.length) && !Z) {
              if (_e) {
                g.fastSplice(h, P), --P, --I;
                continue;
              }
              if (S.push(p("array.includes", { pos: P, value: H }, y.localize(z))), v.abortEarly) return S;
            }
          }
          return x.length && g.fillMissedErrors(b, S, x, h, y, v), C.length && (g.fillOrderedErrors(b, S, C, h, y, v), S.length || g.fillDefault(C, h, y, v)), S.length ? S : h;
        }, priority: !0, manifest: !1 }, length: { method(h) {
          return this.$_addRule({ name: "length", args: { limit: h }, operator: "=" });
        }, validate(h, u, b, p) {
          let { limit: y } = b, { name: v, operator: E, args: x } = p;
          return l.compare(h.length, y, E) ? h : u.error("array." + v, { limit: x.limit, value: h });
        }, args: [{ name: "limit", ref: !0, assert: l.limit, message: "must be a positive integer" }] }, max: { method(h) {
          return this.$_addRule({ name: "max", method: "length", args: { limit: h }, operator: "<=" });
        } }, min: { method(h) {
          return this.$_addRule({ name: "min", method: "length", args: { limit: h }, operator: ">=" });
        } }, ordered: { method() {
          for (var h = arguments.length, u = new Array(h), b = 0; b < h; b++) u[b] = arguments[b];
          l.verifyFlat(u, "ordered");
          const p = this.$_addRule("items");
          for (let y = 0; y < u.length; ++y) {
            const v = l.tryWithPath(() => this.$_compile(u[y]), y, { append: !0 });
            g.validateSingle(v, p), p.$_mutateRegister(v), p.$_terms.ordered.push(v);
          }
          return p.$_mutateRebuild();
        } }, single: { method(h) {
          const u = h === void 0 || !!h;
          return o(!u || !this._flags._arrayItems, "Cannot specify single rule when array has array items"), this.$_setFlag("single", u);
        } }, sort: { method() {
          let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          l.assertOptions(h, ["by", "order"]);
          const u = { order: h.order || "ascending" };
          return h.by && (u.by = f.ref(h.by, { ancestor: 0 }), o(!u.by.ancestor, "Cannot sort by ancestor")), this.$_addRule({ name: "sort", args: { options: u } });
        }, validate(h, u, b) {
          let { error: p, state: y, prefs: v, schema: E } = u, { options: x } = b;
          const { value: C, errors: T } = g.sort(E, h, x, y, v);
          if (T) return T;
          for (let A = 0; A < h.length; ++A) if (h[A] !== C[A]) return p("array.sort", { order: x.order, by: x.by ? x.by.key : "value" });
          return h;
        }, convert: !0 }, sparse: { method(h) {
          const u = h === void 0 || !!h;
          return this._flags.sparse === u ? this : (u ? this.clone() : this.$_addRule("items")).$_setFlag("sparse", u, { clone: !1 });
        } }, unique: { method(h) {
          let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          o(!h || typeof h == "function" || typeof h == "string", "comparator must be a function or a string"), l.assertOptions(u, ["ignoreUndefined", "separator"]);
          const b = { name: "unique", args: { options: u, comparator: h } };
          if (h) if (typeof h == "string") {
            const p = l.default(u.separator, ".");
            b.path = p ? h.split(p) : [h];
          } else b.comparator = h;
          return this.$_addRule(b);
        }, validate(h, u, b, p) {
          let { state: y, error: v, schema: E } = u, { comparator: x, options: C } = b, { comparator: T, path: A } = p;
          const S = { string: /* @__PURE__ */ Object.create(null), number: /* @__PURE__ */ Object.create(null), undefined: /* @__PURE__ */ Object.create(null), boolean: /* @__PURE__ */ Object.create(null), object: /* @__PURE__ */ new Map(), function: /* @__PURE__ */ new Map(), custom: /* @__PURE__ */ new Map() }, I = T || c, P = C.ignoreUndefined;
          for (let H = 0; H < h.length; ++H) {
            const W = A ? m(h[H], A) : h[H], Z = T ? S.custom : S[typeof W];
            if (o(Z, "Failed to find unique map container for type", typeof W), Z instanceof Map) {
              const j = Z.entries();
              let z;
              for (; !(z = j.next()).done; ) if (I(z.value[0], W)) {
                const Y = y.localize([...y.path, H], [h, ...y.ancestors]), de = { pos: H, value: h[H], dupePos: z.value[1], dupeValue: h[z.value[1]] };
                return A && (de.path = x), v("array.unique", de, Y);
              }
              Z.set(W, H);
            } else {
              if ((!P || W !== void 0) && Z[W] !== void 0) {
                const j = { pos: H, value: h[H], dupePos: Z[W], dupeValue: h[Z[W]] };
                return A && (j.path = x), v("array.unique", j, y.localize([...y.path, H], [h, ...y.ancestors]));
              }
              Z[W] = H;
            }
          }
          return h;
        }, args: ["comparator", "options"], multi: !0 } }, cast: { set: { from: Array.isArray, to: (h, u) => new Set(h) } }, rebuild(h) {
          h.$_terms._inclusions = [], h.$_terms._exclusions = [], h.$_terms._requireds = [];
          for (const u of h.$_terms.items) g.validateSingle(u, h), u._flags.presence === "required" ? h.$_terms._requireds.push(u) : u._flags.presence === "forbidden" ? h.$_terms._exclusions.push(u) : h.$_terms._inclusions.push(u);
          for (const u of h.$_terms.ordered) g.validateSingle(u, h);
        }, manifest: { build: (h, u) => (u.items && (h = h.items(...u.items)), u.ordered && (h = h.ordered(...u.ordered)), h) }, messages: { "array.base": "{{#label}} must be an array", "array.excludes": "{{#label}} contains an excluded value", "array.hasKnown": "{{#label}} does not contain at least one required match for type {:#patternLabel}", "array.hasUnknown": "{{#label}} does not contain at least one required match", "array.includes": "{{#label}} does not match any of the allowed types", "array.includesRequiredBoth": "{{#label}} does not contain {{#knownMisses}} and {{#unknownMisses}} other required value(s)", "array.includesRequiredKnowns": "{{#label}} does not contain {{#knownMisses}}", "array.includesRequiredUnknowns": "{{#label}} does not contain {{#unknownMisses}} required value(s)", "array.length": "{{#label}} must contain {{#limit}} items", "array.max": "{{#label}} must contain less than or equal to {{#limit}} items", "array.min": "{{#label}} must contain at least {{#limit}} items", "array.orderedLength": "{{#label}} must contain at most {{#limit}} items", "array.sort": "{{#label}} must be sorted in {#order} order by {{#by}}", "array.sort.mismatching": "{{#label}} cannot be sorted due to mismatching types", "array.sort.unsupported": "{{#label}} cannot be sorted due to unsupported type {#type}", "array.sparse": "{{#label}} must not be a sparse array item", "array.unique": "{{#label}} contains a duplicate value" } }), g.fillMissedErrors = function(h, u, b, p, y, v) {
          const E = [];
          let x = 0;
          for (const C of b) {
            const T = C._flags.label;
            T ? E.push(T) : ++x;
          }
          E.length ? x ? u.push(h.$_createError("array.includesRequiredBoth", p, { knownMisses: E, unknownMisses: x }, y, v)) : u.push(h.$_createError("array.includesRequiredKnowns", p, { knownMisses: E }, y, v)) : u.push(h.$_createError("array.includesRequiredUnknowns", p, { unknownMisses: x }, y, v));
        }, g.fillOrderedErrors = function(h, u, b, p, y, v) {
          const E = [];
          for (const x of b) x._flags.presence === "required" && E.push(x);
          E.length && g.fillMissedErrors(h, u, E, p, y, v);
        }, g.fillDefault = function(h, u, b, p) {
          const y = [];
          let v = !0;
          for (let E = h.length - 1; E >= 0; --E) {
            const x = h[E], C = [u, ...b.ancestors], T = x.$_validate(void 0, b.localize(b.path, C, x), p).value;
            if (v) {
              if (T === void 0) continue;
              v = !1;
            }
            y.unshift(T);
          }
          y.length && u.push(...y);
        }, g.fastSplice = function(h, u) {
          let b = u;
          for (; b < h.length; ) h[b++] = h[b];
          --h.length;
        }, g.validateSingle = function(h, u) {
          (h.type === "array" || h._flags._arrayItems) && (o(!u._flags.single, "Cannot specify array item with single rule enabled"), u.$_setFlag("_arrayItems", !0, { clone: !1 }));
        }, g.sort = function(h, u, b, p, y) {
          const v = b.order === "ascending" ? 1 : -1, E = -1 * v, x = v, C = (T, A) => {
            let S = g.compare(T, A, E, x);
            if (S !== null || (b.by && (T = b.by.resolve(T, p, y), A = b.by.resolve(A, p, y)), S = g.compare(T, A, E, x), S !== null)) return S;
            const I = typeof T;
            if (I !== typeof A) throw h.$_createError("array.sort.mismatching", u, null, p, y);
            if (I !== "number" && I !== "string") throw h.$_createError("array.sort.unsupported", u, { type: I }, p, y);
            return I === "number" ? (T - A) * v : T < A ? E : x;
          };
          try {
            return { value: u.slice().sort(C) };
          } catch (T) {
            return { errors: T };
          }
        }, g.compare = function(h, u, b, p) {
          return h === u ? 0 : h === void 0 ? 1 : u === void 0 ? -1 : h === null ? p : u === null ? b : null;
        };
      }, 4937: (s, i, a) => {
        const o = a(375), c = a(8068), m = a(8160), d = a(2036), l = { isBool: function(f) {
          return typeof f == "boolean";
        } };
        s.exports = c.extend({ type: "boolean", flags: { sensitive: { default: !1 } }, terms: { falsy: { init: null, manifest: "values" }, truthy: { init: null, manifest: "values" } }, coerce(f, g) {
          let { schema: h } = g;
          if (typeof f != "boolean") {
            if (typeof f == "string") {
              const u = h._flags.sensitive ? f : f.toLowerCase();
              f = u === "true" || u !== "false" && f;
            }
            return typeof f != "boolean" && (f = h.$_terms.truthy && h.$_terms.truthy.has(f, null, null, !h._flags.sensitive) || (!h.$_terms.falsy || !h.$_terms.falsy.has(f, null, null, !h._flags.sensitive)) && f), { value: f };
          }
        }, validate(f, g) {
          let { error: h } = g;
          if (typeof f != "boolean") return { value: f, errors: h("boolean.base") };
        }, rules: { truthy: { method() {
          for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++) g[h] = arguments[h];
          m.verifyFlat(g, "truthy");
          const u = this.clone();
          u.$_terms.truthy = u.$_terms.truthy || new d();
          for (let b = 0; b < g.length; ++b) {
            const p = g[b];
            o(p !== void 0, "Cannot call truthy with undefined"), u.$_terms.truthy.add(p);
          }
          return u;
        } }, falsy: { method() {
          for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++) g[h] = arguments[h];
          m.verifyFlat(g, "falsy");
          const u = this.clone();
          u.$_terms.falsy = u.$_terms.falsy || new d();
          for (let b = 0; b < g.length; ++b) {
            const p = g[b];
            o(p !== void 0, "Cannot call falsy with undefined"), u.$_terms.falsy.add(p);
          }
          return u;
        } }, sensitive: { method() {
          let f = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          return this.$_setFlag("sensitive", f);
        } } }, cast: { number: { from: l.isBool, to: (f, g) => f ? 1 : 0 }, string: { from: l.isBool, to: (f, g) => f ? "true" : "false" } }, manifest: { build: (f, g) => (g.truthy && (f = f.truthy(...g.truthy)), g.falsy && (f = f.falsy(...g.falsy)), f) }, messages: { "boolean.base": "{{#label}} must be a boolean" } });
      }, 7500: (s, i, a) => {
        const o = a(375), c = a(8068), m = a(8160), d = a(3328), l = { isDate: function(f) {
          return f instanceof Date;
        } };
        s.exports = c.extend({ type: "date", coerce: { from: ["number", "string"], method(f, g) {
          let { schema: h } = g;
          return { value: l.parse(f, h._flags.format) || f };
        } }, validate(f, g) {
          let { schema: h, error: u, prefs: b } = g;
          if (f instanceof Date && !isNaN(f.getTime())) return;
          const p = h._flags.format;
          return b.convert && p && typeof f == "string" ? { value: f, errors: u("date.format", { format: p }) } : { value: f, errors: u("date.base") };
        }, rules: { compare: { method: !1, validate(f, g, h, u) {
          let { date: b } = h, { name: p, operator: y, args: v } = u;
          const E = b === "now" ? Date.now() : b.getTime();
          return m.compare(f.getTime(), E, y) ? f : g.error("date." + p, { limit: v.date, value: f });
        }, args: [{ name: "date", ref: !0, normalize: (f) => f === "now" ? f : l.parse(f), assert: (f) => f !== null, message: "must have a valid date format" }] }, format: { method(f) {
          return o(["iso", "javascript", "unix"].includes(f), "Unknown date format", f), this.$_setFlag("format", f);
        } }, greater: { method(f) {
          return this.$_addRule({ name: "greater", method: "compare", args: { date: f }, operator: ">" });
        } }, iso: { method() {
          return this.format("iso");
        } }, less: { method(f) {
          return this.$_addRule({ name: "less", method: "compare", args: { date: f }, operator: "<" });
        } }, max: { method(f) {
          return this.$_addRule({ name: "max", method: "compare", args: { date: f }, operator: "<=" });
        } }, min: { method(f) {
          return this.$_addRule({ name: "min", method: "compare", args: { date: f }, operator: ">=" });
        } }, timestamp: { method() {
          let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "javascript";
          return o(["javascript", "unix"].includes(f), '"type" must be one of "javascript, unix"'), this.format(f);
        } } }, cast: { number: { from: l.isDate, to: (f, g) => f.getTime() }, string: { from: l.isDate, to(f, g) {
          let { prefs: h } = g;
          return d.date(f, h);
        } } }, messages: { "date.base": "{{#label}} must be a valid date", "date.format": '{{#label}} must be in {msg("date.format." + #format) || #format} format', "date.greater": "{{#label}} must be greater than {{:#limit}}", "date.less": "{{#label}} must be less than {{:#limit}}", "date.max": "{{#label}} must be less than or equal to {{:#limit}}", "date.min": "{{#label}} must be greater than or equal to {{:#limit}}", "date.format.iso": "ISO 8601 date", "date.format.javascript": "timestamp or number of milliseconds", "date.format.unix": "timestamp or number of seconds" } }), l.parse = function(f, g) {
          if (f instanceof Date) return f;
          if (typeof f != "string" && (isNaN(f) || !isFinite(f)) || /^\s*$/.test(f)) return null;
          if (g === "iso") return m.isIsoDate(f) ? l.date(f.toString()) : null;
          const h = f;
          if (typeof f == "string" && /^[+-]?\d+(\.\d+)?$/.test(f) && (f = parseFloat(f)), g) {
            if (g === "javascript") return l.date(1 * f);
            if (g === "unix") return l.date(1e3 * f);
            if (typeof h == "string") return null;
          }
          return l.date(f);
        }, l.date = function(f) {
          const g = new Date(f);
          return isNaN(g.getTime()) ? null : g;
        };
      }, 390: (s, i, a) => {
        const o = a(375), c = a(7824);
        s.exports = c.extend({ type: "function", properties: { typeof: "function" }, rules: { arity: { method(m) {
          return o(Number.isSafeInteger(m) && m >= 0, "n must be a positive integer"), this.$_addRule({ name: "arity", args: { n: m } });
        }, validate(m, d, l) {
          let { n: f } = l;
          return m.length === f ? m : d.error("function.arity", { n: f });
        } }, class: { method() {
          return this.$_addRule("class");
        }, validate: (m, d) => /^\s*class\s/.test(m.toString()) ? m : d.error("function.class", { value: m }) }, minArity: { method(m) {
          return o(Number.isSafeInteger(m) && m > 0, "n must be a strict positive integer"), this.$_addRule({ name: "minArity", args: { n: m } });
        }, validate(m, d, l) {
          let { n: f } = l;
          return m.length >= f ? m : d.error("function.minArity", { n: f });
        } }, maxArity: { method(m) {
          return o(Number.isSafeInteger(m) && m >= 0, "n must be a positive integer"), this.$_addRule({ name: "maxArity", args: { n: m } });
        }, validate(m, d, l) {
          let { n: f } = l;
          return m.length <= f ? m : d.error("function.maxArity", { n: f });
        } } }, messages: { "function.arity": "{{#label}} must have an arity of {{#n}}", "function.class": "{{#label}} must be a class", "function.maxArity": "{{#label}} must have an arity lesser or equal to {{#n}}", "function.minArity": "{{#label}} must have an arity greater or equal to {{#n}}" } });
      }, 7824: (s, i, a) => {
        const o = a(978), c = a(375), m = a(8571), d = a(3652), l = a(8068), f = a(8160), g = a(3292), h = a(6354), u = a(6133), b = a(3328), p = { renameDefaults: { alias: !1, multiple: !1, override: !1 } };
        s.exports = l.extend({ type: "_keys", properties: { typeof: "object" }, flags: { unknown: { default: !1 } }, terms: { dependencies: { init: null }, keys: { init: null, manifest: { mapped: { from: "schema", to: "key" } } }, patterns: { init: null }, renames: { init: null } }, args: (y, v) => y.keys(v), validate(y, v) {
          let { schema: E, error: x, state: C, prefs: T } = v;
          if (!y || typeof y !== E.$_property("typeof") || Array.isArray(y)) return { value: y, errors: x("object.base", { type: E.$_property("typeof") }) };
          if (!(E.$_terms.renames || E.$_terms.dependencies || E.$_terms.keys || E.$_terms.patterns || E.$_terms.externals)) return;
          y = p.clone(y, T);
          const A = [];
          if (E.$_terms.renames && !p.rename(E, y, C, T, A)) return { value: y, errors: A };
          if (!E.$_terms.keys && !E.$_terms.patterns && !E.$_terms.dependencies) return { value: y, errors: A };
          const S = new Set(Object.keys(y));
          if (E.$_terms.keys) {
            const I = [y, ...C.ancestors];
            for (const P of E.$_terms.keys) {
              const H = P.key, W = y[H];
              S.delete(H);
              const Z = C.localize([...C.path, H], I, P), j = P.schema.$_validate(W, Z, T);
              if (j.errors) {
                if (T.abortEarly) return { value: y, errors: j.errors };
                j.value !== void 0 && (y[H] = j.value), A.push(...j.errors);
              } else P.schema._flags.result === "strip" || j.value === void 0 && W !== void 0 ? delete y[H] : j.value !== void 0 && (y[H] = j.value);
            }
          }
          if (S.size || E._flags._hasPatternMatch) {
            const I = p.unknown(E, y, S, A, C, T);
            if (I) return I;
          }
          if (E.$_terms.dependencies) for (const I of E.$_terms.dependencies) {
            if (I.key !== null && p.isPresent(I.options)(I.key.resolve(y, C, T, null, { shadow: !1 })) === !1) continue;
            const P = p.dependencies[I.rel](E, I, y, C, T);
            if (P) {
              const H = E.$_createError(P.code, y, P.context, C, T);
              if (T.abortEarly) return { value: y, errors: H };
              A.push(H);
            }
          }
          return { value: y, errors: A };
        }, rules: { and: { method() {
          for (var y = arguments.length, v = new Array(y), E = 0; E < y; E++) v[E] = arguments[E];
          return f.verifyFlat(v, "and"), p.dependency(this, "and", null, v);
        } }, append: { method(y) {
          return y == null || Object.keys(y).length === 0 ? this : this.keys(y);
        } }, assert: { method(y, v, E) {
          b.isTemplate(y) || (y = g.ref(y)), c(E === void 0 || typeof E == "string", "Message must be a string"), v = this.$_compile(v, { appendPath: !0 });
          const x = this.$_addRule({ name: "assert", args: { subject: y, schema: v, message: E } });
          return x.$_mutateRegister(y), x.$_mutateRegister(v), x;
        }, validate(y, v, E) {
          let { error: x, prefs: C, state: T } = v, { subject: A, schema: S, message: I } = E;
          const P = A.resolve(y, T, C), H = u.isRef(A) ? A.absolute(T) : [];
          return S.$_match(P, T.localize(H, [y, ...T.ancestors], S), C) ? y : x("object.assert", { subject: A, message: I });
        }, args: ["subject", "schema", "message"], multi: !0 }, instance: { method(y, v) {
          return c(typeof y == "function", "constructor must be a function"), v = v || y.name, this.$_addRule({ name: "instance", args: { constructor: y, name: v } });
        }, validate(y, v, E) {
          let { constructor: x, name: C } = E;
          return y instanceof x ? y : v.error("object.instance", { type: C, value: y });
        }, args: ["constructor", "name"] }, keys: { method(y) {
          c(y === void 0 || typeof y == "object", "Object schema must be a valid object"), c(!f.isSchema(y), "Object schema cannot be a joi schema");
          const v = this.clone();
          if (y) if (Object.keys(y).length) {
            v.$_terms.keys = v.$_terms.keys ? v.$_terms.keys.filter((E) => !y.hasOwnProperty(E.key)) : new p.Keys();
            for (const E in y) f.tryWithPath(() => v.$_terms.keys.push({ key: E, schema: this.$_compile(y[E]) }), E);
          } else v.$_terms.keys = new p.Keys();
          else v.$_terms.keys = null;
          return v.$_mutateRebuild();
        } }, length: { method(y) {
          return this.$_addRule({ name: "length", args: { limit: y }, operator: "=" });
        }, validate(y, v, E, x) {
          let { limit: C } = E, { name: T, operator: A, args: S } = x;
          return f.compare(Object.keys(y).length, C, A) ? y : v.error("object." + T, { limit: S.limit, value: y });
        }, args: [{ name: "limit", ref: !0, assert: f.limit, message: "must be a positive integer" }] }, max: { method(y) {
          return this.$_addRule({ name: "max", method: "length", args: { limit: y }, operator: "<=" });
        } }, min: { method(y) {
          return this.$_addRule({ name: "min", method: "length", args: { limit: y }, operator: ">=" });
        } }, nand: { method() {
          for (var y = arguments.length, v = new Array(y), E = 0; E < y; E++) v[E] = arguments[E];
          return f.verifyFlat(v, "nand"), p.dependency(this, "nand", null, v);
        } }, or: { method() {
          for (var y = arguments.length, v = new Array(y), E = 0; E < y; E++) v[E] = arguments[E];
          return f.verifyFlat(v, "or"), p.dependency(this, "or", null, v);
        } }, oxor: { method() {
          for (var y = arguments.length, v = new Array(y), E = 0; E < y; E++) v[E] = arguments[E];
          return p.dependency(this, "oxor", null, v);
        } }, pattern: { method(y, v) {
          let E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          const x = y instanceof RegExp;
          x || (y = this.$_compile(y, { appendPath: !0 })), c(v !== void 0, "Invalid rule"), f.assertOptions(E, ["fallthrough", "matches"]), x && c(!y.flags.includes("g") && !y.flags.includes("y"), "pattern should not use global or sticky mode"), v = this.$_compile(v, { appendPath: !0 });
          const C = this.clone();
          C.$_terms.patterns = C.$_terms.patterns || [];
          const T = { [x ? "regex" : "schema"]: y, rule: v };
          return E.matches && (T.matches = this.$_compile(E.matches), T.matches.type !== "array" && (T.matches = T.matches.$_root.array().items(T.matches)), C.$_mutateRegister(T.matches), C.$_setFlag("_hasPatternMatch", !0, { clone: !1 })), E.fallthrough && (T.fallthrough = !0), C.$_terms.patterns.push(T), C.$_mutateRegister(v), C;
        } }, ref: { method() {
          return this.$_addRule("ref");
        }, validate: (y, v) => u.isRef(y) ? y : v.error("object.refType", { value: y }) }, regex: { method() {
          return this.$_addRule("regex");
        }, validate: (y, v) => y instanceof RegExp ? y : v.error("object.regex", { value: y }) }, rename: { method(y, v) {
          let E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          c(typeof y == "string" || y instanceof RegExp, "Rename missing the from argument"), c(typeof v == "string" || v instanceof b, "Invalid rename to argument"), c(v !== y, "Cannot rename key to same name:", y), f.assertOptions(E, ["alias", "ignoreUndefined", "override", "multiple"]);
          const x = this.clone();
          x.$_terms.renames = x.$_terms.renames || [];
          for (const C of x.$_terms.renames) c(C.from !== y, "Cannot rename the same key multiple times");
          return v instanceof b && x.$_mutateRegister(v), x.$_terms.renames.push({ from: y, to: v, options: o(p.renameDefaults, E) }), x;
        } }, schema: { method() {
          let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "any";
          return this.$_addRule({ name: "schema", args: { type: y } });
        }, validate(y, v, E) {
          let { type: x } = E;
          return !f.isSchema(y) || x !== "any" && y.type !== x ? v.error("object.schema", { type: x }) : y;
        } }, unknown: { method(y) {
          return this.$_setFlag("unknown", y !== !1);
        } }, with: { method(y, v) {
          let E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return p.dependency(this, "with", y, v, E);
        } }, without: { method(y, v) {
          let E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return p.dependency(this, "without", y, v, E);
        } }, xor: { method() {
          for (var y = arguments.length, v = new Array(y), E = 0; E < y; E++) v[E] = arguments[E];
          return f.verifyFlat(v, "xor"), p.dependency(this, "xor", null, v);
        } } }, overrides: { default(y, v) {
          return y === void 0 && (y = f.symbols.deepDefault), this.$_parent("default", y, v);
        } }, rebuild(y) {
          if (y.$_terms.keys) {
            const v = new d.Sorter();
            for (const E of y.$_terms.keys) f.tryWithPath(() => v.add(E, { after: E.schema.$_rootReferences(), group: E.key }), E.key);
            y.$_terms.keys = new p.Keys(...v.nodes);
          }
        }, manifest: { build(y, v) {
          if (v.keys && (y = y.keys(v.keys)), v.dependencies) for (const { rel: E, key: x = null, peers: C, options: T } of v.dependencies) y = p.dependency(y, E, x, C, T);
          if (v.patterns) for (const { regex: E, schema: x, rule: C, fallthrough: T, matches: A } of v.patterns) y = y.pattern(E || x, C, { fallthrough: T, matches: A });
          if (v.renames) for (const { from: E, to: x, options: C } of v.renames) y = y.rename(E, x, C);
          return y;
        } }, messages: { "object.and": "{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}", "object.assert": '{{#label}} is invalid because {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}', "object.base": "{{#label}} must be of type {{#type}}", "object.instance": "{{#label}} must be an instance of {{:#type}}", "object.length": '{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}', "object.max": '{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}', "object.min": '{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}', "object.missing": "{{#label}} must contain at least one of {{#peersWithLabels}}", "object.nand": "{{:#mainWithLabel}} must not exist simultaneously with {{#peersWithLabels}}", "object.oxor": "{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}", "object.pattern.match": "{{#label}} keys failed to match pattern requirements", "object.refType": "{{#label}} must be a Joi reference", "object.regex": "{{#label}} must be a RegExp object", "object.rename.multiple": "{{#label}} cannot rename {{:#from}} because multiple renames are disabled and another key was already renamed to {{:#to}}", "object.rename.override": "{{#label}} cannot rename {{:#from}} because override is disabled and target {{:#to}} exists", "object.schema": "{{#label}} must be a Joi schema of {{#type}} type", "object.unknown": "{{#label}} is not allowed", "object.with": "{{:#mainWithLabel}} missing required peer {{:#peerWithLabel}}", "object.without": "{{:#mainWithLabel}} conflict with forbidden peer {{:#peerWithLabel}}", "object.xor": "{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}" } }), p.clone = function(y, v) {
          if (typeof y == "object") {
            if (v.nonEnumerables) return m(y, { shallow: !0 });
            const x = Object.create(Object.getPrototypeOf(y));
            return Object.assign(x, y), x;
          }
          const E = function() {
            for (var x = arguments.length, C = new Array(x), T = 0; T < x; T++) C[T] = arguments[T];
            return y.apply(this, C);
          };
          return E.prototype = m(y.prototype), Object.defineProperty(E, "name", { value: y.name, writable: !1 }), Object.defineProperty(E, "length", { value: y.length, writable: !1 }), Object.assign(E, y), E;
        }, p.dependency = function(y, v, E, x, C) {
          c(E === null || typeof E == "string", v, "key must be a strings"), C || (C = x.length > 1 && typeof x[x.length - 1] == "object" ? x.pop() : {}), f.assertOptions(C, ["separator", "isPresent"]), x = [].concat(x);
          const T = f.default(C.separator, "."), A = [];
          for (const I of x) c(typeof I == "string", v, "peers must be strings"), A.push(g.ref(I, { separator: T, ancestor: 0, prefix: !1 }));
          E !== null && (E = g.ref(E, { separator: T, ancestor: 0, prefix: !1 }));
          const S = y.clone();
          return S.$_terms.dependencies = S.$_terms.dependencies || [], S.$_terms.dependencies.push(new p.Dependency(v, E, A, x, C)), S;
        }, p.dependencies = { and(y, v, E, x, C) {
          const T = [], A = [], S = v.peers.length, I = p.isPresent(v.options);
          for (const P of v.peers) I(P.resolve(E, x, C, null, { shadow: !1 })) === !1 ? T.push(P.key) : A.push(P.key);
          if (T.length !== S && A.length !== S) return { code: "object.and", context: { present: A, presentWithLabels: p.keysToLabels(y, A), missing: T, missingWithLabels: p.keysToLabels(y, T) } };
        }, nand(y, v, E, x, C) {
          const T = [], A = p.isPresent(v.options);
          for (const P of v.peers) A(P.resolve(E, x, C, null, { shadow: !1 })) && T.push(P.key);
          if (T.length !== v.peers.length) return;
          const S = v.paths[0], I = v.paths.slice(1);
          return { code: "object.nand", context: { main: S, mainWithLabel: p.keysToLabels(y, S), peers: I, peersWithLabels: p.keysToLabels(y, I) } };
        }, or(y, v, E, x, C) {
          const T = p.isPresent(v.options);
          for (const A of v.peers) if (T(A.resolve(E, x, C, null, { shadow: !1 }))) return;
          return { code: "object.missing", context: { peers: v.paths, peersWithLabels: p.keysToLabels(y, v.paths) } };
        }, oxor(y, v, E, x, C) {
          const T = [], A = p.isPresent(v.options);
          for (const I of v.peers) A(I.resolve(E, x, C, null, { shadow: !1 })) && T.push(I.key);
          if (!T.length || T.length === 1) return;
          const S = { peers: v.paths, peersWithLabels: p.keysToLabels(y, v.paths) };
          return S.present = T, S.presentWithLabels = p.keysToLabels(y, T), { code: "object.oxor", context: S };
        }, with(y, v, E, x, C) {
          const T = p.isPresent(v.options);
          for (const A of v.peers) if (T(A.resolve(E, x, C, null, { shadow: !1 })) === !1) return { code: "object.with", context: { main: v.key.key, mainWithLabel: p.keysToLabels(y, v.key.key), peer: A.key, peerWithLabel: p.keysToLabels(y, A.key) } };
        }, without(y, v, E, x, C) {
          const T = p.isPresent(v.options);
          for (const A of v.peers) if (T(A.resolve(E, x, C, null, { shadow: !1 }))) return { code: "object.without", context: { main: v.key.key, mainWithLabel: p.keysToLabels(y, v.key.key), peer: A.key, peerWithLabel: p.keysToLabels(y, A.key) } };
        }, xor(y, v, E, x, C) {
          const T = [], A = p.isPresent(v.options);
          for (const I of v.peers) A(I.resolve(E, x, C, null, { shadow: !1 })) && T.push(I.key);
          if (T.length === 1) return;
          const S = { peers: v.paths, peersWithLabels: p.keysToLabels(y, v.paths) };
          return T.length === 0 ? { code: "object.missing", context: S } : (S.present = T, S.presentWithLabels = p.keysToLabels(y, T), { code: "object.xor", context: S });
        } }, p.keysToLabels = function(y, v) {
          return Array.isArray(v) ? v.map((E) => y.$_mapLabels(E)) : y.$_mapLabels(v);
        }, p.isPresent = function(y) {
          return typeof y.isPresent == "function" ? y.isPresent : (v) => v !== void 0;
        }, p.rename = function(y, v, E, x, C) {
          const T = {};
          for (const A of y.$_terms.renames) {
            const S = [], I = typeof A.from != "string";
            if (I) for (const P in v) {
              if (v[P] === void 0 && A.options.ignoreUndefined || P === A.to) continue;
              const H = A.from.exec(P);
              H && S.push({ from: P, to: A.to, match: H });
            }
            else !Object.prototype.hasOwnProperty.call(v, A.from) || v[A.from] === void 0 && A.options.ignoreUndefined || S.push(A);
            for (const P of S) {
              const H = P.from;
              let W = P.to;
              if (W instanceof b && (W = W.render(v, E, x, P.match)), H !== W) {
                if (!A.options.multiple && T[W] && (C.push(y.$_createError("object.rename.multiple", v, { from: H, to: W, pattern: I }, E, x)), x.abortEarly) || Object.prototype.hasOwnProperty.call(v, W) && !A.options.override && !T[W] && (C.push(y.$_createError("object.rename.override", v, { from: H, to: W, pattern: I }, E, x)), x.abortEarly)) return !1;
                v[H] === void 0 ? delete v[W] : v[W] = v[H], T[W] = !0, A.options.alias || delete v[H];
              }
            }
          }
          return !0;
        }, p.unknown = function(y, v, E, x, C, T) {
          if (y.$_terms.patterns) {
            let A = !1;
            const S = y.$_terms.patterns.map((P) => {
              if (P.matches) return A = !0, [];
            }), I = [v, ...C.ancestors];
            for (const P of E) {
              const H = v[P], W = [...C.path, P];
              for (let Z = 0; Z < y.$_terms.patterns.length; ++Z) {
                const j = y.$_terms.patterns[Z];
                if (j.regex) {
                  const de = j.regex.test(P);
                  if (C.mainstay.tracer.debug(C, "rule", `pattern.${Z}`, de ? "pass" : "error"), !de) continue;
                } else if (!j.schema.$_match(P, C.nest(j.schema, `pattern.${Z}`), T)) continue;
                E.delete(P);
                const z = C.localize(W, I, { schema: j.rule, key: P }), Y = j.rule.$_validate(H, z, T);
                if (Y.errors) {
                  if (T.abortEarly) return { value: v, errors: Y.errors };
                  x.push(...Y.errors);
                }
                if (j.matches && S[Z].push(P), v[P] = Y.value, !j.fallthrough) break;
              }
            }
            if (A) for (let P = 0; P < S.length; ++P) {
              const H = S[P];
              if (!H) continue;
              const W = y.$_terms.patterns[P].matches, Z = C.localize(C.path, I, W), j = W.$_validate(H, Z, T);
              if (j.errors) {
                const z = h.details(j.errors, { override: !1 });
                z.matches = H;
                const Y = y.$_createError("object.pattern.match", v, z, C, T);
                if (T.abortEarly) return { value: v, errors: Y };
                x.push(Y);
              }
            }
          }
          if (E.size && (y.$_terms.keys || y.$_terms.patterns)) {
            if (T.stripUnknown && !y._flags.unknown || T.skipFunctions) {
              const A = !(!T.stripUnknown || T.stripUnknown !== !0 && !T.stripUnknown.objects);
              for (const S of E) A ? (delete v[S], E.delete(S)) : typeof v[S] == "function" && E.delete(S);
            }
            if (!f.default(y._flags.unknown, T.allowUnknown)) for (const A of E) {
              const S = C.localize([...C.path, A], []), I = y.$_createError("object.unknown", v[A], { child: A }, S, T, { flags: !1 });
              if (T.abortEarly) return { value: v, errors: I };
              x.push(I);
            }
          }
        }, p.Dependency = class {
          constructor(y, v, E, x, C) {
            this.rel = y, this.key = v, this.peers = E, this.paths = x, this.options = C;
          }
          describe() {
            const y = { rel: this.rel, peers: this.paths };
            return this.key !== null && (y.key = this.key.key), this.peers[0].separator !== "." && (y.options = { ...y.options, separator: this.peers[0].separator }), this.options.isPresent && (y.options = { ...y.options, isPresent: this.options.isPresent }), y;
          }
        }, p.Keys = class extends Array {
          concat(y) {
            const v = this.slice(), E = /* @__PURE__ */ new Map();
            for (let x = 0; x < v.length; ++x) E.set(v[x].key, x);
            for (const x of y) {
              const C = x.key, T = E.get(C);
              T !== void 0 ? v[T] = { key: C, schema: v[T].schema.concat(x.schema) } : v.push(x);
            }
            return v;
          }
        };
      }, 8785: (s, i, a) => {
        const o = a(375), c = a(8068), m = a(8160), d = a(3292), l = a(6354), f = {};
        s.exports = c.extend({ type: "link", properties: { schemaChain: !0 }, terms: { link: { init: null, manifest: "single", register: !1 } }, args: (g, h) => g.ref(h), validate(g, h) {
          let { schema: u, state: b, prefs: p } = h;
          o(u.$_terms.link, "Uninitialized link schema");
          const y = f.generate(u, g, b, p), v = u.$_terms.link[0].ref;
          return y.$_validate(g, b.nest(y, `link:${v.display}:${y.type}`), p);
        }, generate: (g, h, u, b) => f.generate(g, h, u, b), rules: { ref: { method(g) {
          o(!this.$_terms.link, "Cannot reinitialize schema"), g = d.ref(g), o(g.type === "value" || g.type === "local", "Invalid reference type:", g.type), o(g.type === "local" || g.ancestor === "root" || g.ancestor > 0, "Link cannot reference itself");
          const h = this.clone();
          return h.$_terms.link = [{ ref: g }], h;
        } }, relative: { method() {
          let g = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          return this.$_setFlag("relative", g);
        } } }, overrides: { concat(g) {
          o(this.$_terms.link, "Uninitialized link schema"), o(m.isSchema(g), "Invalid schema object"), o(g.type !== "link", "Cannot merge type link with another link");
          const h = this.clone();
          return h.$_terms.whens || (h.$_terms.whens = []), h.$_terms.whens.push({ concat: g }), h.$_mutateRebuild();
        } }, manifest: { build: (g, h) => (o(h.link, "Invalid link description missing link"), g.ref(h.link)) } }), f.generate = function(g, h, u, b) {
          let p = u.mainstay.links.get(g);
          if (p) return p._generate(h, u, b).schema;
          const y = g.$_terms.link[0].ref, { perspective: v, path: E } = f.perspective(y, u);
          f.assert(v, "which is outside of schema boundaries", y, g, u, b);
          try {
            p = E.length ? v.$_reach(E) : v;
          } catch {
            f.assert(!1, "to non-existing schema", y, g, u, b);
          }
          return f.assert(p.type !== "link", "which is another link", y, g, u, b), g._flags.relative || u.mainstay.links.set(g, p), p._generate(h, u, b).schema;
        }, f.perspective = function(g, h) {
          if (g.type === "local") {
            for (const { schema: u, key: b } of h.schemas) {
              if ((u._flags.id || b) === g.path[0]) return { perspective: u, path: g.path.slice(1) };
              if (u.$_terms.shared) {
                for (const p of u.$_terms.shared) if (p._flags.id === g.path[0]) return { perspective: p, path: g.path.slice(1) };
              }
            }
            return { perspective: null, path: null };
          }
          return g.ancestor === "root" ? { perspective: h.schemas[h.schemas.length - 1].schema, path: g.path } : { perspective: h.schemas[g.ancestor] && h.schemas[g.ancestor].schema, path: g.path };
        }, f.assert = function(g, h, u, b, p, y) {
          g || o(!1, `"${l.label(b._flags, p, y)}" contains link reference "${u.display}" ${h}`);
        };
      }, 3832: (s, i, a) => {
        const o = a(375), c = a(8068), m = a(8160), d = { numberRx: /^\s*[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:e([+-]?\d+))?\s*$/i, precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/, exponentialPartRegex: /[eE][+-]?\d+$/, leadingSignAndZerosRegex: /^[+-]?(0*)?/, dotRegex: /\./, trailingZerosRegex: /0+$/ };
        s.exports = c.extend({ type: "number", flags: { unsafe: { default: !1 } }, coerce: { from: "string", method(l, f) {
          let { schema: g, error: h } = f;
          if (!l.match(d.numberRx)) return;
          l = l.trim();
          const u = { value: parseFloat(l) };
          if (u.value === 0 && (u.value = 0), !g._flags.unsafe) if (l.match(/e/i)) {
            if (d.extractSignificantDigits(l) !== d.extractSignificantDigits(String(u.value))) return u.errors = h("number.unsafe"), u;
          } else {
            const b = u.value.toString();
            if (b.match(/e/i)) return u;
            if (b !== d.normalizeDecimal(l)) return u.errors = h("number.unsafe"), u;
          }
          return u;
        } }, validate(l, f) {
          let { schema: g, error: h, prefs: u } = f;
          if (l === 1 / 0 || l === -1 / 0) return { value: l, errors: h("number.infinity") };
          if (!m.isNumber(l)) return { value: l, errors: h("number.base") };
          const b = { value: l };
          if (u.convert) {
            const p = g.$_getRule("precision");
            if (p) {
              const y = Math.pow(10, p.args.limit);
              b.value = Math.round(b.value * y) / y;
            }
          }
          return b.value === 0 && (b.value = 0), !g._flags.unsafe && (l > Number.MAX_SAFE_INTEGER || l < Number.MIN_SAFE_INTEGER) && (b.errors = h("number.unsafe")), b;
        }, rules: { compare: { method: !1, validate(l, f, g, h) {
          let { limit: u } = g, { name: b, operator: p, args: y } = h;
          return m.compare(l, u, p) ? l : f.error("number." + b, { limit: y.limit, value: l });
        }, args: [{ name: "limit", ref: !0, assert: m.isNumber, message: "must be a number" }] }, greater: { method(l) {
          return this.$_addRule({ name: "greater", method: "compare", args: { limit: l }, operator: ">" });
        } }, integer: { method() {
          return this.$_addRule("integer");
        }, validate: (l, f) => Math.trunc(l) - l == 0 ? l : f.error("number.integer") }, less: { method(l) {
          return this.$_addRule({ name: "less", method: "compare", args: { limit: l }, operator: "<" });
        } }, max: { method(l) {
          return this.$_addRule({ name: "max", method: "compare", args: { limit: l }, operator: "<=" });
        } }, min: { method(l) {
          return this.$_addRule({ name: "min", method: "compare", args: { limit: l }, operator: ">=" });
        } }, multiple: { method(l) {
          return this.$_addRule({ name: "multiple", args: { base: l } });
        }, validate(l, f, g, h) {
          let { base: u } = g;
          return l * (1 / u) % 1 == 0 ? l : f.error("number.multiple", { multiple: h.args.base, value: l });
        }, args: [{ name: "base", ref: !0, assert: (l) => typeof l == "number" && isFinite(l) && l > 0, message: "must be a positive number" }], multi: !0 }, negative: { method() {
          return this.sign("negative");
        } }, port: { method() {
          return this.$_addRule("port");
        }, validate: (l, f) => Number.isSafeInteger(l) && l >= 0 && l <= 65535 ? l : f.error("number.port") }, positive: { method() {
          return this.sign("positive");
        } }, precision: { method(l) {
          return o(Number.isSafeInteger(l), "limit must be an integer"), this.$_addRule({ name: "precision", args: { limit: l } });
        }, validate(l, f, g) {
          let { limit: h } = g;
          const u = l.toString().match(d.precisionRx);
          return Math.max((u[1] ? u[1].length : 0) - (u[2] ? parseInt(u[2], 10) : 0), 0) <= h ? l : f.error("number.precision", { limit: h, value: l });
        }, convert: !0 }, sign: { method(l) {
          return o(["negative", "positive"].includes(l), "Invalid sign", l), this.$_addRule({ name: "sign", args: { sign: l } });
        }, validate(l, f, g) {
          let { sign: h } = g;
          return h === "negative" && l < 0 || h === "positive" && l > 0 ? l : f.error(`number.${h}`);
        } }, unsafe: { method() {
          let l = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          return o(typeof l == "boolean", "enabled must be a boolean"), this.$_setFlag("unsafe", l);
        } } }, cast: { string: { from: (l) => typeof l == "number", to: (l, f) => l.toString() } }, messages: { "number.base": "{{#label}} must be a number", "number.greater": "{{#label}} must be greater than {{#limit}}", "number.infinity": "{{#label}} cannot be infinity", "number.integer": "{{#label}} must be an integer", "number.less": "{{#label}} must be less than {{#limit}}", "number.max": "{{#label}} must be less than or equal to {{#limit}}", "number.min": "{{#label}} must be greater than or equal to {{#limit}}", "number.multiple": "{{#label}} must be a multiple of {{#multiple}}", "number.negative": "{{#label}} must be a negative number", "number.port": "{{#label}} must be a valid port", "number.positive": "{{#label}} must be a positive number", "number.precision": "{{#label}} must have no more than {{#limit}} decimal places", "number.unsafe": "{{#label}} must be a safe number" } }), d.extractSignificantDigits = function(l) {
          return l.replace(d.exponentialPartRegex, "").replace(d.dotRegex, "").replace(d.trailingZerosRegex, "").replace(d.leadingSignAndZerosRegex, "");
        }, d.normalizeDecimal = function(l) {
          return (l = l.replace(/^\+/, "").replace(/\.0*$/, "").replace(/^(-?)\.([^\.]*)$/, "$10.$2").replace(/^(-?)0+([0-9])/, "$1$2")).includes(".") && l.endsWith("0") && (l = l.replace(/0+$/, "")), l === "-0" ? "0" : l;
        };
      }, 8966: (s, i, a) => {
        const o = a(7824);
        s.exports = o.extend({ type: "object", cast: { map: { from: (c) => c && typeof c == "object", to: (c, m) => new Map(Object.entries(c)) } } });
      }, 7417: (s, i, a) => {
        const o = a(375), c = a(5380), m = a(1745), d = a(9959), l = a(6064), f = a(9926), g = a(5752), h = a(8068), u = a(8160), b = { tlds: f instanceof Set && { tlds: { allow: f, deny: null } }, base64Regex: { true: { true: /^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}==|[\w\-]{3}=)?$/, false: /^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/ }, false: { true: /^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}(==)?|[\w\-]{3}=?)?$/, false: /^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/ } }, dataUriRegex: /^data:[\w+.-]+\/[\w+.-]+;((charset=[\w-]+|base64),)?(.*)$/, hexRegex: /^[a-f0-9]+$/i, ipRegex: d.regex({ cidr: "forbidden" }).regex, isoDurationRegex: /^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/, guidBrackets: { "{": "}", "[": "]", "(": ")", "": "" }, guidVersions: { uuidv1: "1", uuidv2: "2", uuidv3: "3", uuidv4: "4", uuidv5: "5" }, guidSeparators: /* @__PURE__ */ new Set([void 0, !0, !1, "-", ":"]), normalizationForms: ["NFC", "NFD", "NFKC", "NFKD"] };
        s.exports = h.extend({ type: "string", flags: { insensitive: { default: !1 }, truncate: { default: !1 } }, terms: { replacements: { init: null } }, coerce: { from: "string", method(p, y) {
          let { schema: v, state: E, prefs: x } = y;
          const C = v.$_getRule("normalize");
          C && (p = p.normalize(C.args.form));
          const T = v.$_getRule("case");
          T && (p = T.args.direction === "upper" ? p.toLocaleUpperCase() : p.toLocaleLowerCase());
          const A = v.$_getRule("trim");
          if (A && A.args.enabled && (p = p.trim()), v.$_terms.replacements) for (const I of v.$_terms.replacements) p = p.replace(I.pattern, I.replacement);
          const S = v.$_getRule("hex");
          if (S && S.args.options.byteAligned && p.length % 2 != 0 && (p = `0${p}`), v.$_getRule("isoDate")) {
            const I = b.isoDate(p);
            I && (p = I);
          }
          if (v._flags.truncate) {
            const I = v.$_getRule("max");
            if (I) {
              let P = I.args.limit;
              if (u.isResolvable(P) && (P = P.resolve(p, E, x), !u.limit(P))) return { value: p, errors: v.$_createError("any.ref", P, { ref: I.args.limit, arg: "limit", reason: "must be a positive integer" }, E, x) };
              p = p.slice(0, P);
            }
          }
          return { value: p };
        } }, validate(p, y) {
          let { schema: v, error: E } = y;
          if (typeof p != "string") return { value: p, errors: E("string.base") };
          if (p === "") {
            const x = v.$_getRule("min");
            return x && x.args.limit === 0 ? void 0 : { value: p, errors: E("string.empty") };
          }
        }, rules: { alphanum: { method() {
          return this.$_addRule("alphanum");
        }, validate: (p, y) => /^[a-zA-Z0-9]+$/.test(p) ? p : y.error("string.alphanum") }, base64: { method() {
          let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return u.assertOptions(p, ["paddingRequired", "urlSafe"]), p = { urlSafe: !1, paddingRequired: !0, ...p }, o(typeof p.paddingRequired == "boolean", "paddingRequired must be boolean"), o(typeof p.urlSafe == "boolean", "urlSafe must be boolean"), this.$_addRule({ name: "base64", args: { options: p } });
        }, validate(p, y, v) {
          let { options: E } = v;
          return b.base64Regex[E.paddingRequired][E.urlSafe].test(p) ? p : y.error("string.base64");
        } }, case: { method(p) {
          return o(["lower", "upper"].includes(p), "Invalid case:", p), this.$_addRule({ name: "case", args: { direction: p } });
        }, validate(p, y, v) {
          let { direction: E } = v;
          return E === "lower" && p === p.toLocaleLowerCase() || E === "upper" && p === p.toLocaleUpperCase() ? p : y.error(`string.${E}case`);
        }, convert: !0 }, creditCard: { method() {
          return this.$_addRule("creditCard");
        }, validate(p, y) {
          let v = p.length, E = 0, x = 1;
          for (; v--; ) {
            const C = p.charAt(v) * x;
            E += C - 9 * (C > 9), x ^= 3;
          }
          return E > 0 && E % 10 == 0 ? p : y.error("string.creditCard");
        } }, dataUri: { method() {
          let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return u.assertOptions(p, ["paddingRequired"]), p = { paddingRequired: !0, ...p }, o(typeof p.paddingRequired == "boolean", "paddingRequired must be boolean"), this.$_addRule({ name: "dataUri", args: { options: p } });
        }, validate(p, y, v) {
          let { options: E } = v;
          const x = p.match(b.dataUriRegex);
          return x && (!x[2] || x[2] !== "base64" || b.base64Regex[E.paddingRequired].false.test(x[3])) ? p : y.error("string.dataUri");
        } }, domain: { method(p) {
          p && u.assertOptions(p, ["allowFullyQualified", "allowUnicode", "maxDomainSegments", "minDomainSegments", "tlds"]);
          const y = b.addressOptions(p);
          return this.$_addRule({ name: "domain", args: { options: p }, address: y });
        }, validate(p, y, v, E) {
          let { address: x } = E;
          return c.isValid(p, x) ? p : y.error("string.domain");
        } }, email: { method() {
          let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          u.assertOptions(p, ["allowFullyQualified", "allowUnicode", "ignoreLength", "maxDomainSegments", "minDomainSegments", "multiple", "separator", "tlds"]), o(p.multiple === void 0 || typeof p.multiple == "boolean", "multiple option must be an boolean");
          const y = b.addressOptions(p), v = new RegExp(`\\s*[${p.separator ? l(p.separator) : ","}]\\s*`);
          return this.$_addRule({ name: "email", args: { options: p }, regex: v, address: y });
        }, validate(p, y, v, E) {
          let { options: x } = v, { regex: C, address: T } = E;
          const A = x.multiple ? p.split(C) : [p], S = [];
          for (const I of A) m.isValid(I, T) || S.push(I);
          return S.length ? y.error("string.email", { value: p, invalids: S }) : p;
        } }, guid: { alias: "uuid", method() {
          let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          u.assertOptions(p, ["version", "separator"]);
          let y = "";
          if (p.version) {
            const x = [].concat(p.version);
            o(x.length >= 1, "version must have at least 1 valid version specified");
            const C = /* @__PURE__ */ new Set();
            for (let T = 0; T < x.length; ++T) {
              const A = x[T];
              o(typeof A == "string", "version at position " + T + " must be a string");
              const S = b.guidVersions[A.toLowerCase()];
              o(S, "version at position " + T + " must be one of " + Object.keys(b.guidVersions).join(", ")), o(!C.has(S), "version at position " + T + " must not be a duplicate"), y += S, C.add(S);
            }
          }
          o(b.guidSeparators.has(p.separator), 'separator must be one of true, false, "-", or ":"');
          const v = p.separator === void 0 ? "[:-]?" : p.separator === !0 ? "[:-]" : p.separator === !1 ? "[]?" : `\\${p.separator}`, E = new RegExp(`^([\\[{\\(]?)[0-9A-F]{8}(${v})[0-9A-F]{4}\\2?[${y || "0-9A-F"}][0-9A-F]{3}\\2?[${y ? "89AB" : "0-9A-F"}][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$`, "i");
          return this.$_addRule({ name: "guid", args: { options: p }, regex: E });
        }, validate(p, y, v, E) {
          let { regex: x } = E;
          const C = x.exec(p);
          return C ? b.guidBrackets[C[1]] !== C[C.length - 1] ? y.error("string.guid") : p : y.error("string.guid");
        } }, hex: { method() {
          let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return u.assertOptions(p, ["byteAligned"]), p = { byteAligned: !1, ...p }, o(typeof p.byteAligned == "boolean", "byteAligned must be boolean"), this.$_addRule({ name: "hex", args: { options: p } });
        }, validate(p, y, v) {
          let { options: E } = v;
          return b.hexRegex.test(p) ? E.byteAligned && p.length % 2 != 0 ? y.error("string.hexAlign") : p : y.error("string.hex");
        } }, hostname: { method() {
          return this.$_addRule("hostname");
        }, validate: (p, y) => c.isValid(p, { minDomainSegments: 1 }) || b.ipRegex.test(p) ? p : y.error("string.hostname") }, insensitive: { method() {
          return this.$_setFlag("insensitive", !0);
        } }, ip: { method() {
          let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          u.assertOptions(p, ["cidr", "version"]);
          const { cidr: y, versions: v, regex: E } = d.regex(p), x = p.version ? v : void 0;
          return this.$_addRule({ name: "ip", args: { options: { cidr: y, version: x } }, regex: E });
        }, validate(p, y, v, E) {
          let { options: x } = v, { regex: C } = E;
          return C.test(p) ? p : x.version ? y.error("string.ipVersion", { value: p, cidr: x.cidr, version: x.version }) : y.error("string.ip", { value: p, cidr: x.cidr });
        } }, isoDate: { method() {
          return this.$_addRule("isoDate");
        }, validate(p, y) {
          let { error: v } = y;
          return b.isoDate(p) ? p : v("string.isoDate");
        } }, isoDuration: { method() {
          return this.$_addRule("isoDuration");
        }, validate: (p, y) => b.isoDurationRegex.test(p) ? p : y.error("string.isoDuration") }, length: { method(p, y) {
          return b.length(this, "length", p, "=", y);
        }, validate(p, y, v, E) {
          let { limit: x, encoding: C } = v, { name: T, operator: A, args: S } = E;
          const I = !C && p.length;
          return u.compare(I, x, A) ? p : y.error("string." + T, { limit: S.limit, value: p, encoding: C });
        }, args: [{ name: "limit", ref: !0, assert: u.limit, message: "must be a positive integer" }, "encoding"] }, lowercase: { method() {
          return this.case("lower");
        } }, max: { method(p, y) {
          return b.length(this, "max", p, "<=", y);
        }, args: ["limit", "encoding"] }, min: { method(p, y) {
          return b.length(this, "min", p, ">=", y);
        }, args: ["limit", "encoding"] }, normalize: { method() {
          let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "NFC";
          return o(b.normalizationForms.includes(p), "normalization form must be one of " + b.normalizationForms.join(", ")), this.$_addRule({ name: "normalize", args: { form: p } });
        }, validate(p, y, v) {
          let { error: E } = y, { form: x } = v;
          return p === p.normalize(x) ? p : E("string.normalize", { value: p, form: x });
        }, convert: !0 }, pattern: { alias: "regex", method(p) {
          let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          o(p instanceof RegExp, "regex must be a RegExp"), o(!p.flags.includes("g") && !p.flags.includes("y"), "regex should not use global or sticky mode"), typeof y == "string" && (y = { name: y }), u.assertOptions(y, ["invert", "name"]);
          const v = ["string.pattern", y.invert ? ".invert" : "", y.name ? ".name" : ".base"].join("");
          return this.$_addRule({ name: "pattern", args: { regex: p, options: y }, errorCode: v });
        }, validate(p, y, v, E) {
          let { regex: x, options: C } = v, { errorCode: T } = E;
          return x.test(p) ^ C.invert ? p : y.error(T, { name: C.name, regex: x, value: p });
        }, args: ["regex", "options"], multi: !0 }, replace: { method(p, y) {
          typeof p == "string" && (p = new RegExp(l(p), "g")), o(p instanceof RegExp, "pattern must be a RegExp"), o(typeof y == "string", "replacement must be a String");
          const v = this.clone();
          return v.$_terms.replacements || (v.$_terms.replacements = []), v.$_terms.replacements.push({ pattern: p, replacement: y }), v;
        } }, token: { method() {
          return this.$_addRule("token");
        }, validate: (p, y) => /^\w+$/.test(p) ? p : y.error("string.token") }, trim: { method() {
          let p = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          return o(typeof p == "boolean", "enabled must be a boolean"), this.$_addRule({ name: "trim", args: { enabled: p } });
        }, validate(p, y, v) {
          let { enabled: E } = v;
          return E && p !== p.trim() ? y.error("string.trim") : p;
        }, convert: !0 }, truncate: { method() {
          let p = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          return o(typeof p == "boolean", "enabled must be a boolean"), this.$_setFlag("truncate", p);
        } }, uppercase: { method() {
          return this.case("upper");
        } }, uri: { method() {
          let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          u.assertOptions(p, ["allowRelative", "allowQuerySquareBrackets", "domain", "relativeOnly", "scheme"]), p.domain && u.assertOptions(p.domain, ["allowFullyQualified", "allowUnicode", "maxDomainSegments", "minDomainSegments", "tlds"]);
          const { regex: y, scheme: v } = g.regex(p), E = p.domain ? b.addressOptions(p.domain) : null;
          return this.$_addRule({ name: "uri", args: { options: p }, regex: y, domain: E, scheme: v });
        }, validate(p, y, v, E) {
          let { options: x } = v, { regex: C, domain: T, scheme: A } = E;
          if (["http:/", "https:/"].includes(p)) return y.error("string.uri");
          const S = C.exec(p);
          if (S) {
            const I = S[1] || S[2];
            return !T || x.allowRelative && !I || c.isValid(I, T) ? p : y.error("string.domain", { value: I });
          }
          return x.relativeOnly ? y.error("string.uriRelativeOnly") : x.scheme ? y.error("string.uriCustomScheme", { scheme: A, value: p }) : y.error("string.uri");
        } } }, manifest: { build(p, y) {
          if (y.replacements) for (const { pattern: v, replacement: E } of y.replacements) p = p.replace(v, E);
          return p;
        } }, messages: { "string.alphanum": "{{#label}} must only contain alpha-numeric characters", "string.base": "{{#label}} must be a string", "string.base64": "{{#label}} must be a valid base64 string", "string.creditCard": "{{#label}} must be a credit card", "string.dataUri": "{{#label}} must be a valid dataUri string", "string.domain": "{{#label}} must contain a valid domain name", "string.email": "{{#label}} must be a valid email", "string.empty": "{{#label}} is not allowed to be empty", "string.guid": "{{#label}} must be a valid GUID", "string.hex": "{{#label}} must only contain hexadecimal characters", "string.hexAlign": "{{#label}} hex decoded representation must be byte aligned", "string.hostname": "{{#label}} must be a valid hostname", "string.ip": "{{#label}} must be a valid ip address with a {{#cidr}} CIDR", "string.ipVersion": "{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR", "string.isoDate": "{{#label}} must be in iso format", "string.isoDuration": "{{#label}} must be a valid ISO 8601 duration", "string.length": "{{#label}} length must be {{#limit}} characters long", "string.lowercase": "{{#label}} must only contain lowercase characters", "string.max": "{{#label}} length must be less than or equal to {{#limit}} characters long", "string.min": "{{#label}} length must be at least {{#limit}} characters long", "string.normalize": "{{#label}} must be unicode normalized in the {{#form}} form", "string.token": "{{#label}} must only contain alpha-numeric and underscore characters", "string.pattern.base": "{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}", "string.pattern.name": "{{#label}} with value {:[.]} fails to match the {{#name}} pattern", "string.pattern.invert.base": "{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}", "string.pattern.invert.name": "{{#label}} with value {:[.]} matches the inverted {{#name}} pattern", "string.trim": "{{#label}} must not have leading or trailing whitespace", "string.uri": "{{#label}} must be a valid uri", "string.uriCustomScheme": "{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern", "string.uriRelativeOnly": "{{#label}} must be a valid relative uri", "string.uppercase": "{{#label}} must only contain uppercase characters" } }), b.addressOptions = function(p) {
          if (!p || (o(p.minDomainSegments === void 0 || Number.isSafeInteger(p.minDomainSegments) && p.minDomainSegments > 0, "minDomainSegments must be a positive integer"), o(p.maxDomainSegments === void 0 || Number.isSafeInteger(p.maxDomainSegments) && p.maxDomainSegments > 0, "maxDomainSegments must be a positive integer"), p.tlds === !1)) return p;
          if (p.tlds === !0 || p.tlds === void 0) return o(b.tlds, "Built-in TLD list disabled"), Object.assign({}, p, b.tlds);
          o(typeof p.tlds == "object", "tlds must be true, false, or an object");
          const y = p.tlds.deny;
          if (y) return Array.isArray(y) && (p = Object.assign({}, p, { tlds: { deny: new Set(y) } })), o(p.tlds.deny instanceof Set, "tlds.deny must be an array, Set, or boolean"), o(!p.tlds.allow, "Cannot specify both tlds.allow and tlds.deny lists"), b.validateTlds(p.tlds.deny, "tlds.deny"), p;
          const v = p.tlds.allow;
          return v ? v === !0 ? (o(b.tlds, "Built-in TLD list disabled"), Object.assign({}, p, b.tlds)) : (Array.isArray(v) && (p = Object.assign({}, p, { tlds: { allow: new Set(v) } })), o(p.tlds.allow instanceof Set, "tlds.allow must be an array, Set, or boolean"), b.validateTlds(p.tlds.allow, "tlds.allow"), p) : p;
        }, b.validateTlds = function(p, y) {
          for (const v of p) o(c.isValid(v, { minDomainSegments: 1, maxDomainSegments: 1 }), `${y} must contain valid top level domain names`);
        }, b.isoDate = function(p) {
          if (!u.isIsoDate(p)) return null;
          /.*T.*[+-]\d\d$/.test(p) && (p += "00");
          const y = new Date(p);
          return isNaN(y.getTime()) ? null : y.toISOString();
        }, b.length = function(p, y, v, E, x) {
          return o(!x || !1, "Invalid encoding:", x), p.$_addRule({ name: y, method: "length", args: { limit: v, encoding: x }, operator: E });
        };
      }, 8826: (s, i, a) => {
        const o = a(375), c = a(8068), m = {};
        m.Map = class extends Map {
          slice() {
            return new m.Map(this);
          }
        }, s.exports = c.extend({ type: "symbol", terms: { map: { init: new m.Map() } }, coerce: { method(d, l) {
          let { schema: f, error: g } = l;
          const h = f.$_terms.map.get(d);
          return h && (d = h), f._flags.only && typeof d != "symbol" ? { value: d, errors: g("symbol.map", { map: f.$_terms.map }) } : { value: d };
        } }, validate(d, l) {
          let { error: f } = l;
          if (typeof d != "symbol") return { value: d, errors: f("symbol.base") };
        }, rules: { map: { method(d) {
          d && !d[Symbol.iterator] && typeof d == "object" && (d = Object.entries(d)), o(d && d[Symbol.iterator], "Iterable must be an iterable or object");
          const l = this.clone(), f = [];
          for (const g of d) {
            o(g && g[Symbol.iterator], "Entry must be an iterable");
            const [h, u] = g;
            o(typeof h != "object" && typeof h != "function" && typeof h != "symbol", "Key must not be of type object, function, or Symbol"), o(typeof u == "symbol", "Value must be a Symbol"), l.$_terms.map.set(h, u), f.push(u);
          }
          return l.valid(...f);
        } } }, manifest: { build: (d, l) => (l.map && (d = d.map(l.map)), d) }, messages: { "symbol.base": "{{#label}} must be a symbol", "symbol.map": "{{#label}} must be one of {{#map}}" } });
      }, 8863: (s, i, a) => {
        const o = a(375), c = a(8571), m = a(738), d = a(9621), l = a(8160), f = a(6354), g = a(493), h = { result: Symbol("result") };
        i.entry = function(u, b, p) {
          let y = l.defaults;
          p && (o(p.warnings === void 0, "Cannot override warnings preference in synchronous validation"), o(p.artifacts === void 0, "Cannot override artifacts preference in synchronous validation"), y = l.preferences(l.defaults, p));
          const v = h.entry(u, b, y);
          o(!v.mainstay.externals.length, "Schema with external rules must use validateAsync()");
          const E = { value: v.value };
          return v.error && (E.error = v.error), v.mainstay.warnings.length && (E.warning = f.details(v.mainstay.warnings)), v.mainstay.debug && (E.debug = v.mainstay.debug), v.mainstay.artifacts && (E.artifacts = v.mainstay.artifacts), E;
        }, i.entryAsync = async function(u, b, p) {
          let y = l.defaults;
          p && (y = l.preferences(l.defaults, p));
          const v = h.entry(u, b, y), E = v.mainstay;
          if (v.error) throw E.debug && (v.error.debug = E.debug), v.error;
          if (E.externals.length) {
            let C = v.value;
            const T = [];
            for (const A of E.externals) {
              const S = A.state.path, I = A.schema.type === "link" ? E.links.get(A.schema) : null;
              let P, H, W = C;
              const Z = S.length ? [C] : [], j = S.length ? d(u, S) : u;
              if (S.length) {
                P = S[S.length - 1];
                let z = C;
                for (const Y of S.slice(0, -1)) z = z[Y], Z.unshift(z);
                H = Z[0], W = H[P];
              }
              try {
                const z = (de, fe) => (I || A.schema).$_createError(de, W, fe, A.state, y), Y = await A.method(W, { schema: A.schema, linked: I, state: A.state, prefs: p, original: j, error: z, errorsArray: h.errorsArray, warn: (de, fe) => E.warnings.push((I || A.schema).$_createError(de, W, fe, A.state, y)), message: (de, fe) => (I || A.schema).$_createError("external", W, fe, A.state, y, { messages: de }) });
                if (Y === void 0 || Y === W) continue;
                if (Y instanceof f.Report) {
                  if (E.tracer.log(A.schema, A.state, "rule", "external", "error"), T.push(Y), y.abortEarly) break;
                  continue;
                }
                if (Array.isArray(Y) && Y[l.symbols.errors]) {
                  if (E.tracer.log(A.schema, A.state, "rule", "external", "error"), T.push(...Y), y.abortEarly) break;
                  continue;
                }
                H ? (E.tracer.value(A.state, "rule", W, Y, "external"), H[P] = Y) : (E.tracer.value(A.state, "rule", C, Y, "external"), C = Y);
              } catch (z) {
                throw y.errors.label && (z.message += ` (${A.label})`), z;
              }
            }
            if (v.value = C, T.length) throw v.error = f.process(T, u, y), E.debug && (v.error.debug = E.debug), v.error;
          }
          if (!y.warnings && !y.debug && !y.artifacts) return v.value;
          const x = { value: v.value };
          return E.warnings.length && (x.warning = f.details(E.warnings)), E.debug && (x.debug = E.debug), E.artifacts && (x.artifacts = E.artifacts), x;
        }, h.Mainstay = class {
          constructor(u, b, p) {
            this.externals = [], this.warnings = [], this.tracer = u, this.debug = b, this.links = p, this.shadow = null, this.artifacts = null, this._snapshots = [];
          }
          snapshot() {
            this._snapshots.push({ externals: this.externals.slice(), warnings: this.warnings.slice() });
          }
          restore() {
            const u = this._snapshots.pop();
            this.externals = u.externals, this.warnings = u.warnings;
          }
        }, h.entry = function(u, b, p) {
          const { tracer: y, cleanup: v } = h.tracer(b, p), E = p.debug ? [] : null, x = b._ids._schemaChain ? /* @__PURE__ */ new Map() : null, C = new h.Mainstay(y, E, x), T = b._ids._schemaChain ? [{ schema: b }] : null, A = new g([], [], { mainstay: C, schemas: T }), S = i.validate(u, b, A, p);
          v && b.$_root.untrace();
          const I = f.process(S.errors, u, p);
          return { value: S.value, error: I, mainstay: C };
        }, h.tracer = function(u, b) {
          return u.$_root._tracer ? { tracer: u.$_root._tracer._register(u) } : b.debug ? (o(u.$_root.trace, "Debug mode not supported"), { tracer: u.$_root.trace()._register(u), cleanup: !0 }) : { tracer: h.ignore };
        }, i.validate = function(u, b, p, y) {
          let v = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
          if (b.$_terms.whens && (b = b._generate(u, p, y).schema), b._preferences && (y = h.prefs(b, y)), b._cache && y.cache) {
            const I = b._cache.get(u);
            if (p.mainstay.tracer.debug(p, "validate", "cached", !!I), I) return I;
          }
          const E = (I, P, H) => b.$_createError(I, u, P, H || p, y), x = { original: u, prefs: y, schema: b, state: p, error: E, errorsArray: h.errorsArray, warn: (I, P, H) => p.mainstay.warnings.push(E(I, P, H)), message: (I, P) => b.$_createError("custom", u, P, p, y, { messages: I }) };
          p.mainstay.tracer.entry(b, p);
          const C = b._definition;
          if (C.prepare && u !== void 0 && y.convert) {
            const I = C.prepare(u, x);
            if (I) {
              if (p.mainstay.tracer.value(p, "prepare", u, I.value), I.errors) return h.finalize(I.value, [].concat(I.errors), x);
              u = I.value;
            }
          }
          if (C.coerce && u !== void 0 && y.convert && (!C.coerce.from || C.coerce.from.includes(typeof u))) {
            const I = C.coerce.method(u, x);
            if (I) {
              if (p.mainstay.tracer.value(p, "coerced", u, I.value), I.errors) return h.finalize(I.value, [].concat(I.errors), x);
              u = I.value;
            }
          }
          const T = b._flags.empty;
          T && T.$_match(h.trim(u, b), p.nest(T), l.defaults) && (p.mainstay.tracer.value(p, "empty", u, void 0), u = void 0);
          const A = v.presence || b._flags.presence || (b._flags._endedSwitch ? null : y.presence);
          if (u === void 0) {
            if (A === "forbidden") return h.finalize(u, null, x);
            if (A === "required") return h.finalize(u, [b.$_createError("any.required", u, null, p, y)], x);
            if (A === "optional") {
              if (b._flags.default !== l.symbols.deepDefault) return h.finalize(u, null, x);
              p.mainstay.tracer.value(p, "default", u, {}), u = {};
            }
          } else if (A === "forbidden") return h.finalize(u, [b.$_createError("any.unknown", u, null, p, y)], x);
          const S = [];
          if (b._valids) {
            const I = b._valids.get(u, p, y, b._flags.insensitive);
            if (I) return y.convert && (p.mainstay.tracer.value(p, "valids", u, I.value), u = I.value), p.mainstay.tracer.filter(b, p, "valid", I), h.finalize(u, null, x);
            if (b._flags.only) {
              const P = b.$_createError("any.only", u, { valids: b._valids.values({ display: !0 }) }, p, y);
              if (y.abortEarly) return h.finalize(u, [P], x);
              S.push(P);
            }
          }
          if (b._invalids) {
            const I = b._invalids.get(u, p, y, b._flags.insensitive);
            if (I) {
              p.mainstay.tracer.filter(b, p, "invalid", I);
              const P = b.$_createError("any.invalid", u, { invalids: b._invalids.values({ display: !0 }) }, p, y);
              if (y.abortEarly) return h.finalize(u, [P], x);
              S.push(P);
            }
          }
          if (C.validate) {
            const I = C.validate(u, x);
            if (I && (p.mainstay.tracer.value(p, "base", u, I.value), u = I.value, I.errors)) {
              if (!Array.isArray(I.errors)) return S.push(I.errors), h.finalize(u, S, x);
              if (I.errors.length) return S.push(...I.errors), h.finalize(u, S, x);
            }
          }
          return b._rules.length ? h.rules(u, S, x) : h.finalize(u, S, x);
        }, h.rules = function(u, b, p) {
          const { schema: y, state: v, prefs: E } = p;
          for (const x of y._rules) {
            const C = y._definition.rules[x.method];
            if (C.convert && E.convert) {
              v.mainstay.tracer.log(y, v, "rule", x.name, "full");
              continue;
            }
            let T, A = x.args;
            if (x._resolve.length) {
              A = Object.assign({}, A);
              for (const I of x._resolve) {
                const P = C.argsByName.get(I), H = A[I].resolve(u, v, E), W = P.normalize ? P.normalize(H) : H, Z = l.validateArg(W, null, P);
                if (Z) {
                  T = y.$_createError("any.ref", H, { arg: I, ref: A[I], reason: Z }, v, E);
                  break;
                }
                A[I] = W;
              }
            }
            T = T || C.validate(u, p, A, x);
            const S = h.rule(T, x);
            if (S.errors) {
              if (v.mainstay.tracer.log(y, v, "rule", x.name, "error"), x.warn) {
                v.mainstay.warnings.push(...S.errors);
                continue;
              }
              if (E.abortEarly) return h.finalize(u, S.errors, p);
              b.push(...S.errors);
            } else v.mainstay.tracer.log(y, v, "rule", x.name, "pass"), v.mainstay.tracer.value(v, "rule", u, S.value, x.name), u = S.value;
          }
          return h.finalize(u, b, p);
        }, h.rule = function(u, b) {
          return u instanceof f.Report ? (h.error(u, b), { errors: [u], value: null }) : Array.isArray(u) && u[l.symbols.errors] ? (u.forEach((p) => h.error(p, b)), { errors: u, value: null }) : { errors: null, value: u };
        }, h.error = function(u, b) {
          return b.message && u._setTemplate(b.message), u;
        }, h.finalize = function(u, b, p) {
          b = b || [];
          const { schema: y, state: v, prefs: E } = p;
          if (b.length) {
            const C = h.default("failover", void 0, b, p);
            C !== void 0 && (v.mainstay.tracer.value(v, "failover", u, C), u = C, b = []);
          }
          if (b.length && y._flags.error) if (typeof y._flags.error == "function") {
            b = y._flags.error(b), Array.isArray(b) || (b = [b]);
            for (const C of b) o(C instanceof Error || C instanceof f.Report, "error() must return an Error object");
          } else b = [y._flags.error];
          if (u === void 0) {
            const C = h.default("default", u, b, p);
            v.mainstay.tracer.value(v, "default", u, C), u = C;
          }
          if (y._flags.cast && u !== void 0) {
            const C = y._definition.cast[y._flags.cast];
            if (C.from(u)) {
              const T = C.to(u, p);
              v.mainstay.tracer.value(v, "cast", u, T, y._flags.cast), u = T;
            }
          }
          if (y.$_terms.externals && E.externals && E._externals !== !1) for (const { method: C } of y.$_terms.externals) v.mainstay.externals.push({ method: C, schema: y, state: v, label: f.label(y._flags, v, E) });
          const x = { value: u, errors: b.length ? b : null };
          return y._flags.result && (x.value = y._flags.result === "strip" ? void 0 : p.original, v.mainstay.tracer.value(v, y._flags.result, u, x.value), v.shadow(u, y._flags.result)), y._cache && E.cache !== !1 && !y._refs.length && y._cache.set(p.original, x), u === void 0 || x.errors || y._flags.artifact === void 0 || (v.mainstay.artifacts = v.mainstay.artifacts || /* @__PURE__ */ new Map(), v.mainstay.artifacts.has(y._flags.artifact) || v.mainstay.artifacts.set(y._flags.artifact, []), v.mainstay.artifacts.get(y._flags.artifact).push(v.path)), x;
        }, h.prefs = function(u, b) {
          const p = b === l.defaults;
          return p && u._preferences[l.symbols.prefs] ? u._preferences[l.symbols.prefs] : (b = l.preferences(b, u._preferences), p && (u._preferences[l.symbols.prefs] = b), b);
        }, h.default = function(u, b, p, y) {
          const { schema: v, state: E, prefs: x } = y, C = v._flags[u];
          if (x.noDefaults || C === void 0) return b;
          if (E.mainstay.tracer.log(v, E, "rule", u, "full"), !C) return C;
          if (typeof C == "function") {
            const T = C.length ? [c(E.ancestors[0]), y] : [];
            try {
              return C(...T);
            } catch (A) {
              return void p.push(v.$_createError(`any.${u}`, null, { error: A }, E, x));
            }
          }
          return typeof C != "object" ? C : C[l.symbols.literal] ? C.literal : l.isResolvable(C) ? C.resolve(b, E, x) : c(C);
        }, h.trim = function(u, b) {
          if (typeof u != "string") return u;
          const p = b.$_getRule("trim");
          return p && p.args.enabled ? u.trim() : u;
        }, h.ignore = { active: !1, debug: m, entry: m, filter: m, log: m, resolve: m, value: m }, h.errorsArray = function() {
          const u = [];
          return u[l.symbols.errors] = !0, u;
        };
      }, 2036: (s, i, a) => {
        const o = a(375), c = a(9474), m = a(8160), d = {};
        s.exports = d.Values = class {
          constructor(l, f) {
            this._values = new Set(l), this._refs = new Set(f), this._lowercase = d.lowercases(l), this._override = !1;
          }
          get length() {
            return this._values.size + this._refs.size;
          }
          add(l, f) {
            m.isResolvable(l) ? this._refs.has(l) || (this._refs.add(l), f && f.register(l)) : this.has(l, null, null, !1) || (this._values.add(l), typeof l == "string" && this._lowercase.set(l.toLowerCase(), l));
          }
          static merge(l, f, g) {
            if (l = l || new d.Values(), f) {
              if (f._override) return f.clone();
              for (const h of [...f._values, ...f._refs]) l.add(h);
            }
            if (g) for (const h of [...g._values, ...g._refs]) l.remove(h);
            return l.length ? l : null;
          }
          remove(l) {
            m.isResolvable(l) ? this._refs.delete(l) : (this._values.delete(l), typeof l == "string" && this._lowercase.delete(l.toLowerCase()));
          }
          has(l, f, g, h) {
            return !!this.get(l, f, g, h);
          }
          get(l, f, g, h) {
            if (!this.length) return !1;
            if (this._values.has(l)) return { value: l };
            if (typeof l == "string" && l && h) {
              const u = this._lowercase.get(l.toLowerCase());
              if (u) return { value: u };
            }
            if (!this._refs.size && typeof l != "object") return !1;
            if (typeof l == "object") {
              for (const u of this._values) if (c(u, l)) return { value: u };
            }
            if (f) for (const u of this._refs) {
              const b = u.resolve(l, f, g, null, { in: !0 });
              if (b === void 0) continue;
              const p = u.in && typeof b == "object" ? Array.isArray(b) ? b : Object.keys(b) : [b];
              for (const y of p) if (typeof y == typeof l) {
                if (h && l && typeof l == "string") {
                  if (y.toLowerCase() === l.toLowerCase()) return { value: y, ref: u };
                } else if (c(y, l)) return { value: y, ref: u };
              }
            }
            return !1;
          }
          override() {
            this._override = !0;
          }
          values(l) {
            if (l && l.display) {
              const f = [];
              for (const g of [...this._values, ...this._refs]) g !== void 0 && f.push(g);
              return f;
            }
            return Array.from([...this._values, ...this._refs]);
          }
          clone() {
            const l = new d.Values(this._values, this._refs);
            return l._override = this._override, l;
          }
          concat(l) {
            o(!l._override, "Cannot concat override set of values");
            const f = new d.Values([...this._values, ...l._values], [...this._refs, ...l._refs]);
            return f._override = this._override, f;
          }
          describe() {
            const l = [];
            this._override && l.push({ override: !0 });
            for (const f of this._values.values()) l.push(f && typeof f == "object" ? { value: f } : f);
            for (const f of this._refs.values()) l.push(f.describe());
            return l;
          }
        }, d.Values.prototype[m.symbols.values] = !0, d.Values.prototype.slice = d.Values.prototype.clone, d.lowercases = function(l) {
          const f = /* @__PURE__ */ new Map();
          if (l) for (const g of l) typeof g == "string" && f.set(g.toLowerCase(), g);
          return f;
        };
      }, 978: (s, i, a) => {
        const o = a(375), c = a(8571), m = a(1687), d = a(9621), l = {};
        s.exports = function(f, g) {
          let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (o(f && typeof f == "object", "Invalid defaults value: must be an object"), o(!g || g === !0 || typeof g == "object", "Invalid source value: must be true, falsy or an object"), o(typeof h == "object", "Invalid options: must be an object"), !g) return null;
          if (h.shallow) return l.applyToDefaultsWithShallow(f, g, h);
          const u = c(f);
          if (g === !0) return u;
          const b = h.nullOverride !== void 0 && h.nullOverride;
          return m(u, g, { nullOverride: b, mergeArrays: !1 });
        }, l.applyToDefaultsWithShallow = function(f, g, h) {
          const u = h.shallow;
          o(Array.isArray(u), "Invalid keys");
          const b = /* @__PURE__ */ new Map(), p = g === !0 ? null : /* @__PURE__ */ new Set();
          for (let E of u) {
            E = Array.isArray(E) ? E : E.split(".");
            const x = d(f, E);
            x && typeof x == "object" ? b.set(x, p && d(g, E) || x) : p && p.add(E);
          }
          const y = c(f, {}, b);
          if (!p) return y;
          for (const E of p) l.reachCopy(y, g, E);
          const v = h.nullOverride !== void 0 && h.nullOverride;
          return m(y, g, { nullOverride: v, mergeArrays: !1 });
        }, l.reachCopy = function(f, g, h) {
          for (const p of h) {
            if (!(p in g)) return;
            const y = g[p];
            if (typeof y != "object" || y === null) return;
            g = y;
          }
          const u = g;
          let b = f;
          for (let p = 0; p < h.length - 1; ++p) {
            const y = h[p];
            typeof b[y] != "object" && (b[y] = {}), b = b[y];
          }
          b[h[h.length - 1]] = u;
        };
      }, 375: (s, i, a) => {
        const o = a(7916);
        s.exports = function(c) {
          if (!c) {
            for (var m = arguments.length, d = new Array(m > 1 ? m - 1 : 0), l = 1; l < m; l++) d[l - 1] = arguments[l];
            throw d.length === 1 && d[0] instanceof Error ? d[0] : new o(d);
          }
        };
      }, 8571: (s, i, a) => {
        const o = a(9621), c = a(4277), m = a(7043), d = { needsProtoHack: /* @__PURE__ */ new Set([c.set, c.map, c.weakSet, c.weakMap]) };
        s.exports = d.clone = function(l) {
          let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          if (typeof l != "object" || l === null) return l;
          let h = d.clone, u = g;
          if (f.shallow) {
            if (f.shallow !== !0) return d.cloneWithShallow(l, f);
            h = (v) => v;
          } else if (u) {
            const v = u.get(l);
            if (v) return v;
          } else u = /* @__PURE__ */ new Map();
          const b = c.getInternalProto(l);
          if (b === c.buffer) return !1;
          if (b === c.date) return new Date(l.getTime());
          if (b === c.regex) return new RegExp(l);
          const p = d.base(l, b, f);
          if (p === l) return l;
          if (u && u.set(l, p), b === c.set) for (const v of l) p.add(h(v, f, u));
          else if (b === c.map) for (const [v, E] of l) p.set(v, h(E, f, u));
          const y = m.keys(l, f);
          for (const v of y) {
            if (v === "__proto__") continue;
            if (b === c.array && v === "length") {
              p.length = l.length;
              continue;
            }
            const E = Object.getOwnPropertyDescriptor(l, v);
            E ? E.get || E.set ? Object.defineProperty(p, v, E) : E.enumerable ? p[v] = h(l[v], f, u) : Object.defineProperty(p, v, { enumerable: !1, writable: !0, configurable: !0, value: h(l[v], f, u) }) : Object.defineProperty(p, v, { enumerable: !0, writable: !0, configurable: !0, value: h(l[v], f, u) });
          }
          return p;
        }, d.cloneWithShallow = function(l, f) {
          const g = f.shallow;
          (f = Object.assign({}, f)).shallow = !1;
          const h = /* @__PURE__ */ new Map();
          for (const u of g) {
            const b = o(l, u);
            typeof b != "object" && typeof b != "function" || h.set(b, b);
          }
          return d.clone(l, f, h);
        }, d.base = function(l, f, g) {
          if (g.prototype === !1) return d.needsProtoHack.has(f) ? new f.constructor() : f === c.array ? [] : {};
          const h = Object.getPrototypeOf(l);
          if (h && h.isImmutable) return l;
          if (f === c.array) {
            const u = [];
            return h !== f && Object.setPrototypeOf(u, h), u;
          }
          if (d.needsProtoHack.has(f)) {
            const u = new h.constructor();
            return h !== f && Object.setPrototypeOf(u, h), u;
          }
          return Object.create(h);
        };
      }, 9474: (s, i, a) => {
        const o = a(4277), c = { mismatched: null };
        s.exports = function(m, d, l) {
          return l = Object.assign({ prototype: !0 }, l), !!c.isDeepEqual(m, d, l, []);
        }, c.isDeepEqual = function(m, d, l, f) {
          if (m === d) return m !== 0 || 1 / m == 1 / d;
          const g = typeof m;
          if (g !== typeof d || m === null || d === null) return !1;
          if (g === "function") {
            if (!l.deepFunction || m.toString() !== d.toString()) return !1;
          } else if (g !== "object") return m != m && d != d;
          const h = c.getSharedType(m, d, !!l.prototype);
          switch (h) {
            case o.buffer:
              return !1;
            case o.promise:
              return m === d;
            case o.regex:
              return m.toString() === d.toString();
            case c.mismatched:
              return !1;
          }
          for (let u = f.length - 1; u >= 0; --u) if (f[u].isSame(m, d)) return !0;
          f.push(new c.SeenEntry(m, d));
          try {
            return !!c.isDeepEqualObj(h, m, d, l, f);
          } finally {
            f.pop();
          }
        }, c.getSharedType = function(m, d, l) {
          if (l) return Object.getPrototypeOf(m) !== Object.getPrototypeOf(d) ? c.mismatched : o.getInternalProto(m);
          const f = o.getInternalProto(m);
          return f !== o.getInternalProto(d) ? c.mismatched : f;
        }, c.valueOf = function(m) {
          const d = m.valueOf;
          if (d === void 0) return m;
          try {
            return d.call(m);
          } catch (l) {
            return l;
          }
        }, c.hasOwnEnumerableProperty = function(m, d) {
          return Object.prototype.propertyIsEnumerable.call(m, d);
        }, c.isSetSimpleEqual = function(m, d) {
          for (const l of Set.prototype.values.call(m)) if (!Set.prototype.has.call(d, l)) return !1;
          return !0;
        }, c.isDeepEqualObj = function(m, d, l, f, g) {
          const { isDeepEqual: h, valueOf: u, hasOwnEnumerableProperty: b } = c, { keys: p, getOwnPropertySymbols: y } = Object;
          if (m === o.array) {
            if (!f.part) {
              if (d.length !== l.length) return !1;
              for (let T = 0; T < d.length; ++T) if (!h(d[T], l[T], f, g)) return !1;
              return !0;
            }
            for (const T of d) for (const A of l) if (h(T, A, f, g)) return !0;
          } else if (m === o.set) {
            if (d.size !== l.size) return !1;
            if (!c.isSetSimpleEqual(d, l)) {
              const T = new Set(Set.prototype.values.call(l));
              for (const A of Set.prototype.values.call(d)) {
                if (T.delete(A)) continue;
                let S = !1;
                for (const I of T) if (h(A, I, f, g)) {
                  T.delete(I), S = !0;
                  break;
                }
                if (!S) return !1;
              }
            }
          } else if (m === o.map) {
            if (d.size !== l.size) return !1;
            for (const [T, A] of Map.prototype.entries.call(d))
              if (A === void 0 && !Map.prototype.has.call(l, T) || !h(A, Map.prototype.get.call(l, T), f, g)) return !1;
          } else if (m === o.error && (d.name !== l.name || d.message !== l.message)) return !1;
          const v = u(d), E = u(l);
          if ((d !== v || l !== E) && !h(v, E, f, g)) return !1;
          const x = p(d);
          if (!f.part && x.length !== p(l).length && !f.skip) return !1;
          let C = 0;
          for (const T of x) if (f.skip && f.skip.includes(T)) l[T] === void 0 && ++C;
          else if (!b(l, T) || !h(d[T], l[T], f, g)) return !1;
          if (!f.part && x.length - C !== p(l).length) return !1;
          if (f.symbols !== !1) {
            const T = y(d), A = new Set(y(l));
            for (const S of T) {
              if (!f.skip || !f.skip.includes(S)) {
                if (b(d, S)) {
                  if (!b(l, S) || !h(d[S], l[S], f, g)) return !1;
                } else if (b(l, S)) return !1;
              }
              A.delete(S);
            }
            for (const S of A) if (b(l, S)) return !1;
          }
          return !0;
        }, c.SeenEntry = class {
          constructor(m, d) {
            this.obj = m, this.ref = d;
          }
          isSame(m, d) {
            return this.obj === m && this.ref === d;
          }
        };
      }, 7916: (s, i, a) => {
        const o = a(8761);
        s.exports = class extends Error {
          constructor(c) {
            super(c.filter((m) => m !== "").map((m) => typeof m == "string" ? m : m instanceof Error ? m.message : o(m)).join(" ") || "Unknown error"), typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, i.assert);
          }
        };
      }, 5277: (s) => {
        const i = {};
        s.exports = function(a) {
          if (!a) return "";
          let o = "";
          for (let c = 0; c < a.length; ++c) {
            const m = a.charCodeAt(c);
            i.isSafe(m) ? o += a[c] : o += i.escapeHtmlChar(m);
          }
          return o;
        }, i.escapeHtmlChar = function(a) {
          return i.namedHtml.get(a) || (a >= 256 ? "&#" + a + ";" : `&#x${a.toString(16).padStart(2, "0")};`);
        }, i.isSafe = function(a) {
          return i.safeCharCodes.has(a);
        }, i.namedHtml = /* @__PURE__ */ new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [34, "&quot;"], [160, "&nbsp;"], [162, "&cent;"], [163, "&pound;"], [164, "&curren;"], [169, "&copy;"], [174, "&reg;"]]), i.safeCharCodes = function() {
          const a = /* @__PURE__ */ new Set();
          for (let o = 32; o < 123; ++o) (o >= 97 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 32 || o === 46 || o === 44 || o === 45 || o === 58 || o === 95) && a.add(o);
          return a;
        }();
      }, 6064: (s) => {
        s.exports = function(i) {
          return i.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, "\\$&");
        };
      }, 738: (s) => {
        s.exports = function() {
        };
      }, 1687: (s, i, a) => {
        const o = a(375), c = a(8571), m = a(7043), d = {};
        s.exports = d.merge = function(l, f, g) {
          if (o(l && typeof l == "object", "Invalid target value: must be an object"), o(f == null || typeof f == "object", "Invalid source value: must be null, undefined, or an object"), !f) return l;
          if (g = Object.assign({ nullOverride: !0, mergeArrays: !0 }, g), Array.isArray(f)) {
            o(Array.isArray(l), "Cannot merge array onto an object"), g.mergeArrays || (l.length = 0);
            for (let u = 0; u < f.length; ++u) l.push(c(f[u], { symbols: g.symbols }));
            return l;
          }
          const h = m.keys(f, g);
          for (let u = 0; u < h.length; ++u) {
            const b = h[u];
            if (b === "__proto__" || !Object.prototype.propertyIsEnumerable.call(f, b)) continue;
            const p = f[b];
            if (p && typeof p == "object") {
              if (l[b] === p) continue;
              !l[b] || typeof l[b] != "object" || Array.isArray(l[b]) !== Array.isArray(p) || p instanceof Date || p instanceof RegExp ? l[b] = c(p, { symbols: g.symbols }) : d.merge(l[b], p, g);
            } else (p != null || g.nullOverride) && (l[b] = p);
          }
          return l;
        };
      }, 9621: (s, i, a) => {
        const o = a(375), c = {};
        s.exports = function(m, d, l) {
          if (d === !1 || d == null) return m;
          typeof (l = l || {}) == "string" && (l = { separator: l });
          const f = Array.isArray(d);
          o(!f || !l.separator, "Separator option is not valid for array-based chain");
          const g = f ? d : d.split(l.separator || ".");
          let h = m;
          for (let u = 0; u < g.length; ++u) {
            let b = g[u];
            const p = l.iterables && c.iterables(h);
            if (Array.isArray(h) || p === "set") {
              const y = Number(b);
              Number.isInteger(y) && (b = y < 0 ? h.length + y : y);
            }
            if (!h || typeof h == "function" && l.functions === !1 || !p && h[b] === void 0) {
              o(!l.strict || u + 1 === g.length, "Missing segment", b, "in reach path ", d), o(typeof h == "object" || l.functions === !0 || typeof h != "function", "Invalid segment", b, "in reach path ", d), h = l.default;
              break;
            }
            h = p ? p === "set" ? [...h][b] : h.get(b) : h[b];
          }
          return h;
        }, c.iterables = function(m) {
          return m instanceof Set ? "set" : m instanceof Map ? "map" : void 0;
        };
      }, 8761: (s) => {
        s.exports = function() {
          try {
            return JSON.stringify(...arguments);
          } catch (i) {
            return "[Cannot display object: " + i.message + "]";
          }
        };
      }, 4277: (s, i) => {
        const a = {};
        i = s.exports = { array: Array.prototype, buffer: !1, date: Date.prototype, error: Error.prototype, generic: Object.prototype, map: Map.prototype, promise: Promise.prototype, regex: RegExp.prototype, set: Set.prototype, weakMap: WeakMap.prototype, weakSet: WeakSet.prototype }, a.typeMap = /* @__PURE__ */ new Map([["[object Error]", i.error], ["[object Map]", i.map], ["[object Promise]", i.promise], ["[object Set]", i.set], ["[object WeakMap]", i.weakMap], ["[object WeakSet]", i.weakSet]]), i.getInternalProto = function(o) {
          if (Array.isArray(o)) return i.array;
          if (o instanceof Date) return i.date;
          if (o instanceof RegExp) return i.regex;
          if (o instanceof Error) return i.error;
          const c = Object.prototype.toString.call(o);
          return a.typeMap.get(c) || i.generic;
        };
      }, 7043: (s, i) => {
        i.keys = function(a) {
          return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).symbols !== !1 ? Reflect.ownKeys(a) : Object.getOwnPropertyNames(a);
        };
      }, 3652: (s, i, a) => {
        const o = a(375), c = {};
        i.Sorter = class {
          constructor() {
            this._items = [], this.nodes = [];
          }
          add(m, d) {
            const l = [].concat((d = d || {}).before || []), f = [].concat(d.after || []), g = d.group || "?", h = d.sort || 0;
            o(!l.includes(g), `Item cannot come before itself: ${g}`), o(!l.includes("?"), "Item cannot come before unassociated items"), o(!f.includes(g), `Item cannot come after itself: ${g}`), o(!f.includes("?"), "Item cannot come after unassociated items"), Array.isArray(m) || (m = [m]);
            for (const u of m) {
              const b = { seq: this._items.length, sort: h, before: l, after: f, group: g, node: u };
              this._items.push(b);
            }
            if (!d.manual) {
              const u = this._sort();
              o(u, "item", g !== "?" ? `added into group ${g}` : "", "created a dependencies error");
            }
            return this.nodes;
          }
          merge(m) {
            Array.isArray(m) || (m = [m]);
            for (const l of m) if (l) for (const f of l._items) this._items.push(Object.assign({}, f));
            this._items.sort(c.mergeSort);
            for (let l = 0; l < this._items.length; ++l) this._items[l].seq = l;
            const d = this._sort();
            return o(d, "merge created a dependencies error"), this.nodes;
          }
          sort() {
            const m = this._sort();
            return o(m, "sort created a dependencies error"), this.nodes;
          }
          _sort() {
            const m = {}, d = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
            for (const b of this._items) {
              const p = b.seq, y = b.group;
              l[y] = l[y] || [], l[y].push(p), m[p] = b.before;
              for (const v of b.after) d[v] = d[v] || [], d[v].push(p);
            }
            for (const b in m) {
              const p = [];
              for (const y in m[b]) {
                const v = m[b][y];
                l[v] = l[v] || [], p.push(...l[v]);
              }
              m[b] = p;
            }
            for (const b in d) if (l[b]) for (const p of l[b]) m[p].push(...d[b]);
            const f = {};
            for (const b in m) {
              const p = m[b];
              for (const y of p) f[y] = f[y] || [], f[y].push(b);
            }
            const g = {}, h = [];
            for (let b = 0; b < this._items.length; ++b) {
              let p = b;
              if (f[b]) {
                p = null;
                for (let y = 0; y < this._items.length; ++y) {
                  if (g[y] === !0) continue;
                  f[y] || (f[y] = []);
                  const v = f[y].length;
                  let E = 0;
                  for (let x = 0; x < v; ++x) g[f[y][x]] && ++E;
                  if (E === v) {
                    p = y;
                    break;
                  }
                }
              }
              p !== null && (g[p] = !0, h.push(p));
            }
            if (h.length !== this._items.length) return !1;
            const u = {};
            for (const b of this._items) u[b.seq] = b;
            this._items = [], this.nodes = [];
            for (const b of h) {
              const p = u[b];
              this.nodes.push(p.node), this._items.push(p);
            }
            return !0;
          }
        }, c.mergeSort = (m, d) => m.sort === d.sort ? 0 : m.sort < d.sort ? -1 : 1;
      }, 5380: (s, i, a) => {
        const o = a(443), c = a(2178), m = { minDomainSegments: 2, nonAsciiRx: /[^\x00-\x7f]/, domainControlRx: /[\x00-\x20@\:\/\\#!\$&\'\(\)\*\+,;=\?]/, tldSegmentRx: /^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/, domainSegmentRx: /^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/, URL: o.URL || URL };
        i.analyze = function(d) {
          let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!d) return c.code("DOMAIN_NON_EMPTY_STRING");
          if (typeof d != "string") throw new Error("Invalid input: domain must be a string");
          if (d.length > 256) return c.code("DOMAIN_TOO_LONG");
          if (m.nonAsciiRx.test(d)) {
            if (l.allowUnicode === !1) return c.code("DOMAIN_INVALID_UNICODE_CHARS");
            d = d.normalize("NFC");
          }
          if (m.domainControlRx.test(d)) return c.code("DOMAIN_INVALID_CHARS");
          d = m.punycode(d), l.allowFullyQualified && d[d.length - 1] === "." && (d = d.slice(0, -1));
          const f = l.minDomainSegments || m.minDomainSegments, g = d.split(".");
          if (g.length < f) return c.code("DOMAIN_SEGMENTS_COUNT");
          if (l.maxDomainSegments && g.length > l.maxDomainSegments) return c.code("DOMAIN_SEGMENTS_COUNT_MAX");
          const h = l.tlds;
          if (h) {
            const u = g[g.length - 1].toLowerCase();
            if (h.deny && h.deny.has(u) || h.allow && !h.allow.has(u)) return c.code("DOMAIN_FORBIDDEN_TLDS");
          }
          for (let u = 0; u < g.length; ++u) {
            const b = g[u];
            if (!b.length) return c.code("DOMAIN_EMPTY_SEGMENT");
            if (b.length > 63) return c.code("DOMAIN_LONG_SEGMENT");
            if (u < g.length - 1) {
              if (!m.domainSegmentRx.test(b)) return c.code("DOMAIN_INVALID_CHARS");
            } else if (!m.tldSegmentRx.test(b)) return c.code("DOMAIN_INVALID_TLDS_CHARS");
          }
          return null;
        }, i.isValid = function(d, l) {
          return !i.analyze(d, l);
        }, m.punycode = function(d) {
          d.includes("%") && (d = d.replace(/%/g, "%25"));
          try {
            return new m.URL(`http://${d}`).host;
          } catch {
            return d;
          }
        };
      }, 1745: (s, i, a) => {
        const o = a(9848), c = a(5380), m = a(2178), d = { nonAsciiRx: /[^\x00-\x7f]/, encoder: new (o.TextEncoder || TextEncoder)() };
        i.analyze = function(l, f) {
          return d.email(l, f);
        }, i.isValid = function(l, f) {
          return !d.email(l, f);
        }, d.email = function(l) {
          let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (typeof l != "string") throw new Error("Invalid input: email must be a string");
          if (!l) return m.code("EMPTY_STRING");
          const g = !d.nonAsciiRx.test(l);
          if (!g) {
            if (f.allowUnicode === !1) return m.code("FORBIDDEN_UNICODE");
            l = l.normalize("NFC");
          }
          const h = l.split("@");
          if (h.length !== 2) return h.length > 2 ? m.code("MULTIPLE_AT_CHAR") : m.code("MISSING_AT_CHAR");
          const [u, b] = h;
          if (!u) return m.code("EMPTY_LOCAL");
          if (!f.ignoreLength) {
            if (l.length > 254) return m.code("ADDRESS_TOO_LONG");
            if (d.encoder.encode(u).length > 64) return m.code("LOCAL_TOO_LONG");
          }
          return d.local(u, g) || c.analyze(b, f);
        }, d.local = function(l, f) {
          const g = l.split(".");
          for (const h of g) {
            if (!h.length) return m.code("EMPTY_LOCAL_SEGMENT");
            if (f) {
              if (!d.atextRx.test(h)) return m.code("INVALID_LOCAL_CHARS");
            } else for (const u of h) {
              if (d.atextRx.test(u)) continue;
              const b = d.binary(u);
              if (!d.atomRx.test(b)) return m.code("INVALID_LOCAL_CHARS");
            }
          }
        }, d.binary = function(l) {
          return Array.from(d.encoder.encode(l)).map((f) => String.fromCharCode(f)).join("");
        }, d.atextRx = /^[\w!#\$%&'\*\+\-/=\?\^`\{\|\}~]+$/, d.atomRx = new RegExp(["(?:[\\xc2-\\xdf][\\x80-\\xbf])", "(?:\\xe0[\\xa0-\\xbf][\\x80-\\xbf])|(?:[\\xe1-\\xec][\\x80-\\xbf]{2})|(?:\\xed[\\x80-\\x9f][\\x80-\\xbf])|(?:[\\xee-\\xef][\\x80-\\xbf]{2})", "(?:\\xf0[\\x90-\\xbf][\\x80-\\xbf]{2})|(?:[\\xf1-\\xf3][\\x80-\\xbf]{3})|(?:\\xf4[\\x80-\\x8f][\\x80-\\xbf]{2})"].join("|"));
      }, 2178: (s, i) => {
        i.codes = { EMPTY_STRING: "Address must be a non-empty string", FORBIDDEN_UNICODE: "Address contains forbidden Unicode characters", MULTIPLE_AT_CHAR: "Address cannot contain more than one @ character", MISSING_AT_CHAR: "Address must contain one @ character", EMPTY_LOCAL: "Address local part cannot be empty", ADDRESS_TOO_LONG: "Address too long", LOCAL_TOO_LONG: "Address local part too long", EMPTY_LOCAL_SEGMENT: "Address local part contains empty dot-separated segment", INVALID_LOCAL_CHARS: "Address local part contains invalid character", DOMAIN_NON_EMPTY_STRING: "Domain must be a non-empty string", DOMAIN_TOO_LONG: "Domain too long", DOMAIN_INVALID_UNICODE_CHARS: "Domain contains forbidden Unicode characters", DOMAIN_INVALID_CHARS: "Domain contains invalid character", DOMAIN_INVALID_TLDS_CHARS: "Domain contains invalid tld character", DOMAIN_SEGMENTS_COUNT: "Domain lacks the minimum required number of segments", DOMAIN_SEGMENTS_COUNT_MAX: "Domain contains too many segments", DOMAIN_FORBIDDEN_TLDS: "Domain uses forbidden TLD", DOMAIN_EMPTY_SEGMENT: "Domain contains empty dot-separated segment", DOMAIN_LONG_SEGMENT: "Domain contains dot-separated segment that is too long" }, i.code = function(a) {
          return { code: a, error: i.codes[a] };
        };
      }, 9959: (s, i, a) => {
        const o = a(375), c = a(5752);
        i.regex = function() {
          let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          o(m.cidr === void 0 || typeof m.cidr == "string", "options.cidr must be a string");
          const d = m.cidr ? m.cidr.toLowerCase() : "optional";
          o(["required", "optional", "forbidden"].includes(d), "options.cidr must be one of required, optional, forbidden"), o(m.version === void 0 || typeof m.version == "string" || Array.isArray(m.version), "options.version must be a string or an array of string");
          let l = m.version || ["ipv4", "ipv6", "ipvfuture"];
          Array.isArray(l) || (l = [l]), o(l.length >= 1, "options.version must have at least 1 version specified");
          for (let h = 0; h < l.length; ++h) o(typeof l[h] == "string", "options.version must only contain strings"), l[h] = l[h].toLowerCase(), o(["ipv4", "ipv6", "ipvfuture"].includes(l[h]), "options.version contains unknown version " + l[h] + " - must be one of ipv4, ipv6, ipvfuture");
          l = Array.from(new Set(l));
          const f = `(?:${l.map((h) => {
            if (d === "forbidden") return c.ip[h];
            const u = `\\/${h === "ipv4" ? c.ip.v4Cidr : c.ip.v6Cidr}`;
            return d === "required" ? `${c.ip[h]}${u}` : `${c.ip[h]}(?:${u})?`;
          }).join("|")})`, g = new RegExp(`^${f}$`);
          return { cidr: d, versions: l, regex: g, raw: f };
        };
      }, 5752: (s, i, a) => {
        const o = a(375), c = a(6064), m = { generate: function() {
          const d = {}, l = "\\dA-Fa-f", f = "[" + l + "]", g = "\\w-\\.~", h = "!\\$&'\\(\\)\\*\\+,;=", u = "%" + l, b = g + u + h + ":@", p = "[" + b + "]", y = "(?:0{0,2}\\d|0?[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])";
          d.ipv4address = "(?:" + y + "\\.){3}" + y;
          const v = f + "{1,4}", E = "(?:" + v + ":" + v + "|" + d.ipv4address + ")", x = "(?:" + v + ":){6}" + E, C = "::(?:" + v + ":){5}" + E, T = "(?:" + v + ")?::(?:" + v + ":){4}" + E, A = "(?:(?:" + v + ":){0,1}" + v + ")?::(?:" + v + ":){3}" + E, S = "(?:(?:" + v + ":){0,2}" + v + ")?::(?:" + v + ":){2}" + E, I = "(?:(?:" + v + ":){0,3}" + v + ")?::" + v + ":" + E, P = "(?:(?:" + v + ":){0,4}" + v + ")?::" + E, H = "(?:(?:" + v + ":){0,5}" + v + ")?::" + v, W = "(?:(?:" + v + ":){0,6}" + v + ")?::";
          d.ipv4Cidr = "(?:\\d|[1-2]\\d|3[0-2])", d.ipv6Cidr = "(?:0{0,2}\\d|0?[1-9]\\d|1[01]\\d|12[0-8])", d.ipv6address = "(?:" + x + "|" + C + "|" + T + "|" + A + "|" + S + "|" + I + "|" + P + "|" + H + "|" + W + ")", d.ipvFuture = "v" + f + "+\\.[" + g + h + ":]+", d.scheme = "[a-zA-Z][a-zA-Z\\d+-\\.]*", d.schemeRegex = new RegExp(d.scheme);
          const Z = "[" + g + u + h + ":]*", j = "[" + g + u + h + "]{1,255}", z = "(?:\\[(?:" + d.ipv6address + "|" + d.ipvFuture + ")\\]|" + d.ipv4address + "|" + j + ")", Y = "(?:" + Z + "@)?" + z + "(?::\\d*)?", de = "(?:" + Z + "@)?(" + z + ")(?::\\d*)?", fe = p + "*", _e = p + "+", ue = "(?:\\/" + fe + ")*", ye = "\\/(?:" + _e + ue + ")?", he = _e + ue, Pe = "[" + g + u + h + "@]+" + ue, lt = "(?:\\/\\/\\/" + fe + ue + ")";
          return d.hierPart = "(?:(?:\\/\\/" + Y + ue + ")|" + ye + "|" + he + "|" + lt + ")", d.hierPartCapture = "(?:(?:\\/\\/" + de + ue + ")|" + ye + "|" + he + ")", d.relativeRef = "(?:(?:\\/\\/" + Y + ue + ")|" + ye + "|" + Pe + "|)", d.relativeRefCapture = "(?:(?:\\/\\/" + de + ue + ")|" + ye + "|" + Pe + "|)", d.query = "[" + b + "\\/\\?]*(?=#|$)", d.queryWithSquareBrackets = "[" + b + "\\[\\]\\/\\?]*(?=#|$)", d.fragment = "[" + b + "\\/\\?]*", d;
        } };
        m.rfc3986 = m.generate(), i.ip = { v4Cidr: m.rfc3986.ipv4Cidr, v6Cidr: m.rfc3986.ipv6Cidr, ipv4: m.rfc3986.ipv4address, ipv6: m.rfc3986.ipv6address, ipvfuture: m.rfc3986.ipvFuture }, m.createRegex = function(d) {
          const l = m.rfc3986, f = "(?:\\?" + (d.allowQuerySquareBrackets ? l.queryWithSquareBrackets : l.query) + ")?(?:#" + l.fragment + ")?", g = d.domain ? l.relativeRefCapture : l.relativeRef;
          if (d.relativeOnly) return m.wrap(g + f);
          let h = "";
          if (d.scheme) {
            o(d.scheme instanceof RegExp || typeof d.scheme == "string" || Array.isArray(d.scheme), "scheme must be a RegExp, String, or Array");
            const p = [].concat(d.scheme);
            o(p.length >= 1, "scheme must have at least 1 scheme specified");
            const y = [];
            for (let v = 0; v < p.length; ++v) {
              const E = p[v];
              o(E instanceof RegExp || typeof E == "string", "scheme at position " + v + " must be a RegExp or String"), E instanceof RegExp ? y.push(E.source.toString()) : (o(l.schemeRegex.test(E), "scheme at position " + v + " must be a valid scheme"), y.push(c(E)));
            }
            h = y.join("|");
          }
          const u = "(?:" + (h ? "(?:" + h + ")" : l.scheme) + ":" + (d.domain ? l.hierPartCapture : l.hierPart) + ")", b = d.allowRelative ? "(?:" + u + "|" + g + ")" : u;
          return m.wrap(b + f, h);
        }, m.wrap = function(d, l) {
          return { raw: d = `(?=.)(?!https?:/(?:$|[^/]))(?!https?:///)(?!https?:[^/])${d}`, regex: new RegExp(`^${d}$`), scheme: l };
        }, m.uriRegex = m.createRegex({}), i.regex = function() {
          let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return d.scheme || d.allowRelative || d.relativeOnly || d.allowQuerySquareBrackets || d.domain ? m.createRegex(d) : m.uriRegex;
        };
      }, 1447: (s, i) => {
        const a = { operators: ["!", "^", "*", "/", "%", "+", "-", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "??"], operatorCharacters: ["!", "^", "*", "/", "%", "+", "-", "<", "=", ">", "&", "|", "?"], operatorsOrder: [["^"], ["*", "/", "%"], ["+", "-"], ["<", "<=", ">", ">="], ["==", "!="], ["&&"], ["||", "??"]], operatorsPrefix: ["!", "n"], literals: { '"': '"', "`": "`", "'": "'", "[": "]" }, numberRx: /^(?:[0-9]*(\.[0-9]*)?){1}$/, tokenRx: /^[\w\$\#\.\@\:\{\}]+$/, symbol: Symbol("formula"), settings: Symbol("settings") };
        i.Parser = class {
          constructor(o) {
            let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (!c[a.settings] && c.constants) for (const m in c.constants) {
              const d = c.constants[m];
              if (d !== null && !["boolean", "number", "string"].includes(typeof d)) throw new Error(`Formula constant ${m} contains invalid ${typeof d} value type`);
            }
            this.settings = c[a.settings] ? c : Object.assign({ [a.settings]: !0, constants: {}, functions: {} }, c), this.single = null, this._parts = null, this._parse(o);
          }
          _parse(o) {
            let c = [], m = "", d = 0, l = !1;
            const f = (h) => {
              if (d) throw new Error("Formula missing closing parenthesis");
              const u = c.length ? c[c.length - 1] : null;
              if (l || m || h) {
                if (u && u.type === "reference" && h === ")") return u.type = "function", u.value = this._subFormula(m, u.value), void (m = "");
                if (h === ")") {
                  const b = new i.Parser(m, this.settings);
                  c.push({ type: "segment", value: b });
                } else if (l) {
                  if (l === "]") return c.push({ type: "reference", value: m }), void (m = "");
                  c.push({ type: "literal", value: m });
                } else if (a.operatorCharacters.includes(m)) u && u.type === "operator" && a.operators.includes(u.value + m) ? u.value += m : c.push({ type: "operator", value: m });
                else if (m.match(a.numberRx)) c.push({ type: "constant", value: parseFloat(m) });
                else if (this.settings.constants[m] !== void 0) c.push({ type: "constant", value: this.settings.constants[m] });
                else {
                  if (!m.match(a.tokenRx)) throw new Error(`Formula contains invalid token: ${m}`);
                  c.push({ type: "reference", value: m });
                }
                m = "";
              }
            };
            for (const h of o) l ? h === l ? (f(), l = !1) : m += h : d ? h === "(" ? (m += h, ++d) : h === ")" ? (--d, d ? m += h : f(h)) : m += h : h in a.literals ? l = a.literals[h] : h === "(" ? (f(), ++d) : a.operatorCharacters.includes(h) ? (f(), m = h, f()) : h !== " " ? m += h : f();
            f(), c = c.map((h, u) => h.type !== "operator" || h.value !== "-" || u && c[u - 1].type !== "operator" ? h : { type: "operator", value: "n" });
            let g = !1;
            for (const h of c) {
              if (h.type === "operator") {
                if (a.operatorsPrefix.includes(h.value)) continue;
                if (!g) throw new Error("Formula contains an operator in invalid position");
                if (!a.operators.includes(h.value)) throw new Error(`Formula contains an unknown operator ${h.value}`);
              } else if (g) throw new Error("Formula missing expected operator");
              g = !g;
            }
            if (!g) throw new Error("Formula contains invalid trailing operator");
            c.length === 1 && ["reference", "literal", "constant"].includes(c[0].type) && (this.single = { type: c[0].type === "reference" ? "reference" : "value", value: c[0].value }), this._parts = c.map((h) => {
              if (h.type === "operator") return a.operatorsPrefix.includes(h.value) ? h : h.value;
              if (h.type !== "reference") return h.value;
              if (this.settings.tokenRx && !this.settings.tokenRx.test(h.value)) throw new Error(`Formula contains invalid reference ${h.value}`);
              return this.settings.reference ? this.settings.reference(h.value) : a.reference(h.value);
            });
          }
          _subFormula(o, c) {
            const m = this.settings.functions[c];
            if (typeof m != "function") throw new Error(`Formula contains unknown function ${c}`);
            let d = [];
            if (o) {
              let l = "", f = 0, g = !1;
              const h = () => {
                if (!l) throw new Error(`Formula contains function ${c} with invalid arguments ${o}`);
                d.push(l), l = "";
              };
              for (let u = 0; u < o.length; ++u) {
                const b = o[u];
                g ? (l += b, b === g && (g = !1)) : b in a.literals && !f ? (l += b, g = a.literals[b]) : b !== "," || f ? (l += b, b === "(" ? ++f : b === ")" && --f) : h();
              }
              h();
            }
            return d = d.map((l) => new i.Parser(l, this.settings)), function(l) {
              const f = [];
              for (const g of d) f.push(g.evaluate(l));
              return m.call(l, ...f);
            };
          }
          evaluate(o) {
            const c = this._parts.slice();
            for (let m = c.length - 2; m >= 0; --m) {
              const d = c[m];
              if (d && d.type === "operator") {
                const l = c[m + 1];
                c.splice(m + 1, 1);
                const f = a.evaluate(l, o);
                c[m] = a.single(d.value, f);
              }
            }
            return a.operatorsOrder.forEach((m) => {
              for (let d = 1; d < c.length - 1; ) if (m.includes(c[d])) {
                const l = c[d], f = a.evaluate(c[d - 1], o), g = a.evaluate(c[d + 1], o);
                c.splice(d, 2);
                const h = a.calculate(l, f, g);
                c[d - 1] = h === 0 ? 0 : h;
              } else d += 2;
            }), a.evaluate(c[0], o);
          }
        }, i.Parser.prototype[a.symbol] = !0, a.reference = function(o) {
          return function(c) {
            return c && c[o] !== void 0 ? c[o] : null;
          };
        }, a.evaluate = function(o, c) {
          return o === null ? null : typeof o == "function" ? o(c) : o[a.symbol] ? o.evaluate(c) : o;
        }, a.single = function(o, c) {
          if (o === "!") return !c;
          const m = -c;
          return m === 0 ? 0 : m;
        }, a.calculate = function(o, c, m) {
          if (o === "??") return a.exists(c) ? c : m;
          if (typeof c == "string" || typeof m == "string") {
            if (o === "+") return (c = a.exists(c) ? c : "") + (a.exists(m) ? m : "");
          } else switch (o) {
            case "^":
              return Math.pow(c, m);
            case "*":
              return c * m;
            case "/":
              return c / m;
            case "%":
              return c % m;
            case "+":
              return c + m;
            case "-":
              return c - m;
          }
          switch (o) {
            case "<":
              return c < m;
            case "<=":
              return c <= m;
            case ">":
              return c > m;
            case ">=":
              return c >= m;
            case "==":
              return c === m;
            case "!=":
              return c !== m;
            case "&&":
              return c && m;
            case "||":
              return c || m;
          }
          return null;
        }, a.exists = function(o) {
          return o != null;
        };
      }, 9926: () => {
      }, 5688: () => {
      }, 9708: () => {
      }, 1152: () => {
      }, 443: () => {
      }, 9848: () => {
      }, 5934: (s) => {
        s.exports = { version: "17.9.1" };
      } }, n = {}, function s(i) {
        var a = n[i];
        if (a !== void 0) return a.exports;
        var o = n[i] = { exports: {} };
        return r[i](o, o.exports, s), o.exports;
      }(5107);
      var r, n;
    });
  }(Du)), Du.exports;
}
var q0 = Q0();
const B = /* @__PURE__ */ ch(q0);
class ad extends Error {
  constructor(e) {
    super(e.message), this.message = e.message, this.code = e.code, this.data = e.data;
  }
}
const Fe = (t, e) => {
  let r;
  t.request ? r = t.request.bind(t) : t.sendAsync && (r = J0(t));
  const n = async ({ method: s, params: i }) => {
    const a = s;
    if (e && e[a] === null)
      throw new ad({
        code: 4200,
        message: `The Provider does not support the requested method: ${s}`
      });
    if (e && e[a])
      return e[a]({ baseRequest: r, params: i });
    if (r)
      return r({ method: s, params: i });
    throw new ad({
      code: 4200,
      message: `The Provider does not support the requested method: ${s}`
    });
  };
  return t.request = n, t;
}, J0 = (t) => ({ method: e, params: r }) => new Promise((n, s) => {
  t.sendAsync({
    id: 0,
    jsonrpc: "2.0",
    method: e,
    params: r
  }, (i, { result: a }) => {
    i ? s(JSON.parse(i)) : n(a ?? null);
  });
});
function kc(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`Wrong positive integer: ${t}`);
}
function dh(t, ...e) {
  if (!(t instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
function K0(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  kc(t.outputLen), kc(t.blockLen);
}
function Ea(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function mm(t, e) {
  dh(t);
  const r = e.outputLen;
  if (t.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const oc = /* @__PURE__ */ BigInt(2 ** 32 - 1), vf = /* @__PURE__ */ BigInt(32);
function gm(t, e = !1) {
  return e ? { h: Number(t & oc), l: Number(t >> vf & oc) } : { h: Number(t >> vf & oc) | 0, l: Number(t & oc) | 0 };
}
function ym(t, e = !1) {
  let r = new Uint32Array(t.length), n = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: i, l: a } = gm(t[s], e);
    [r[s], n[s]] = [i, a];
  }
  return [r, n];
}
const Z0 = (t, e) => BigInt(t >>> 0) << vf | BigInt(e >>> 0), X0 = (t, e, r) => t >>> r, Y0 = (t, e, r) => t << 32 - r | e >>> r, ew = (t, e, r) => t >>> r | e << 32 - r, tw = (t, e, r) => t << 32 - r | e >>> r, rw = (t, e, r) => t << 64 - r | e >>> r - 32, nw = (t, e, r) => t >>> r - 32 | e << 64 - r, sw = (t, e) => e, iw = (t, e) => t, bm = (t, e, r) => t << r | e >>> 32 - r, wm = (t, e, r) => e << r | t >>> 32 - r, vm = (t, e, r) => e << r - 32 | t >>> 64 - r, Am = (t, e, r) => t << r - 32 | e >>> 64 - r;
function ow(t, e, r, n) {
  const s = (e >>> 0) + (n >>> 0);
  return { h: t + r + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const aw = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0), lw = (t, e, r, n) => e + r + n + (t / 2 ** 32 | 0) | 0, cw = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0), uw = (t, e, r, n, s) => e + r + n + s + (t / 2 ** 32 | 0) | 0, fw = (t, e, r, n, s) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0), hw = (t, e, r, n, s, i) => e + r + n + s + i + (t / 2 ** 32 | 0) | 0, Ee = {
  fromBig: gm,
  split: ym,
  toBig: Z0,
  shrSH: X0,
  shrSL: Y0,
  rotrSH: ew,
  rotrSL: tw,
  rotrBH: rw,
  rotrBL: nw,
  rotr32H: sw,
  rotr32L: iw,
  rotlSH: bm,
  rotlSL: wm,
  rotlBH: vm,
  rotlBL: Am,
  add: ow,
  add3L: aw,
  add3H: lw,
  add4L: cw,
  add4H: uw,
  add5H: hw,
  add5L: fw
}, Lu = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Em = (t) => t instanceof Uint8Array, dw = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)), Uu = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), ln = (t, e) => t << 32 - e | t >>> e, pw = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!pw)
  throw new Error("Non little-endian hardware is not supported");
function mw(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function au(t) {
  if (typeof t == "string" && (t = mw(t)), !Em(t))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
function gw(...t) {
  const e = new Uint8Array(t.reduce((n, s) => n + s.length, 0));
  let r = 0;
  return t.forEach((n) => {
    if (!Em(n))
      throw new Error("Uint8Array expected");
    e.set(n, r), r += n.length;
  }), e;
}
class ph {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function mh(t) {
  const e = (n) => t().update(au(n)).digest(), r = t();
  return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e;
}
function yw(t = 32) {
  if (Lu && typeof Lu.getRandomValues == "function")
    return Lu.getRandomValues(new Uint8Array(t));
  throw new Error("crypto.getRandomValues must be defined");
}
const [_m, xm, Sm] = [[], [], []], bw = /* @__PURE__ */ BigInt(0), cl = /* @__PURE__ */ BigInt(1), ww = /* @__PURE__ */ BigInt(2), vw = /* @__PURE__ */ BigInt(7), Aw = /* @__PURE__ */ BigInt(256), Ew = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = cl, r = 1, n = 0; t < 24; t++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], _m.push(2 * (5 * n + r)), xm.push((t + 1) * (t + 2) / 2 % 64);
  let s = bw;
  for (let i = 0; i < 7; i++)
    e = (e << cl ^ (e >> vw) * Ew) % Aw, e & ww && (s ^= cl << (cl << /* @__PURE__ */ BigInt(i)) - cl);
  Sm.push(s);
}
const [_w, xw] = /* @__PURE__ */ ym(Sm, !0), ld = (t, e, r) => r > 32 ? vm(t, e, r) : bm(t, e, r), cd = (t, e, r) => r > 32 ? Am(t, e, r) : wm(t, e, r);
function Sw(t, e = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let a = 0; a < 10; a++)
      r[a] = t[a] ^ t[a + 10] ^ t[a + 20] ^ t[a + 30] ^ t[a + 40];
    for (let a = 0; a < 10; a += 2) {
      const o = (a + 8) % 10, c = (a + 2) % 10, m = r[c], d = r[c + 1], l = ld(m, d, 1) ^ r[o], f = cd(m, d, 1) ^ r[o + 1];
      for (let g = 0; g < 50; g += 10)
        t[a + g] ^= l, t[a + g + 1] ^= f;
    }
    let s = t[2], i = t[3];
    for (let a = 0; a < 24; a++) {
      const o = xm[a], c = ld(s, i, o), m = cd(s, i, o), d = _m[a];
      s = t[d], i = t[d + 1], t[d] = c, t[d + 1] = m;
    }
    for (let a = 0; a < 50; a += 10) {
      for (let o = 0; o < 10; o++)
        r[o] = t[a + o];
      for (let o = 0; o < 10; o++)
        t[a + o] ^= ~r[(o + 2) % 10] & r[(o + 4) % 10];
    }
    t[0] ^= _w[n], t[1] ^= xw[n];
  }
  r.fill(0);
}
class gh extends ph {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, r, n, s = !1, i = 24) {
    if (super(), this.blockLen = e, this.suffix = r, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, kc(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = dw(this.state);
  }
  keccak() {
    Sw(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    Ea(this);
    const { blockLen: r, state: n } = this;
    e = au(e);
    const s = e.length;
    for (let i = 0; i < s; ) {
      const a = Math.min(r - this.pos, s - i);
      for (let o = 0; o < a; o++)
        n[this.pos++] ^= e[i++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: r, pos: n, blockLen: s } = this;
    e[n] ^= r, r & 128 && n === s - 1 && this.keccak(), e[s - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    Ea(this, !1), dh(e), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let s = 0, i = e.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const a = Math.min(n - this.posOut, i - s);
      e.set(r.subarray(this.posOut, this.posOut + a), s), this.posOut += a, s += a;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return kc(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (mm(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: r, suffix: n, outputLen: s, rounds: i, enableXOF: a } = this;
    return e || (e = new gh(r, n, s, a, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = s, e.enableXOF = a, e.destroyed = this.destroyed, e;
  }
}
const Ow = (t, e, r) => mh(() => new gh(e, t, r)), Iw = /* @__PURE__ */ Ow(1, 136, 256 / 8);
function Tw(t, e, r, n) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, r, n);
  const s = BigInt(32), i = BigInt(4294967295), a = Number(r >> s & i), o = Number(r & i), c = n ? 4 : 0, m = n ? 0 : 4;
  t.setUint32(e + c, a, n), t.setUint32(e + m, o, n);
}
class Om extends ph {
  constructor(e, r, n, s) {
    super(), this.blockLen = e, this.outputLen = r, this.padOffset = n, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Uu(this.buffer);
  }
  update(e) {
    Ea(this);
    const { view: r, buffer: n, blockLen: s } = this;
    e = au(e);
    const i = e.length;
    for (let a = 0; a < i; ) {
      const o = Math.min(s - this.pos, i - a);
      if (o === s) {
        const c = Uu(e);
        for (; s <= i - a; a += s)
          this.process(c, a);
        continue;
      }
      n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === s && (this.process(r, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Ea(this), mm(e, this), this.finished = !0;
    const { buffer: r, view: n, blockLen: s, isLE: i } = this;
    let { pos: a } = this;
    r[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > s - a && (this.process(n, 0), a = 0);
    for (let l = a; l < s; l++)
      r[l] = 0;
    Tw(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const o = Uu(e), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const m = c / 4, d = this.get();
    if (m > d.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let l = 0; l < m; l++)
      o.setUint32(4 * l, d[l], i);
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const n = e.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: r, buffer: n, length: s, finished: i, destroyed: a, pos: o } = this;
    return e.length = s, e.pos = o, e.finished = i, e.destroyed = a, s % r && e.buffer.set(n), e;
  }
}
const Cw = (t, e, r) => t & e ^ ~t & r, Nw = (t, e, r) => t & e ^ t & r ^ e & r, Rw = /* @__PURE__ */ new Uint32Array([
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
]), ys = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), bs = /* @__PURE__ */ new Uint32Array(64);
class Pw extends Om {
  constructor() {
    super(64, 32, 8, !1), this.A = ys[0] | 0, this.B = ys[1] | 0, this.C = ys[2] | 0, this.D = ys[3] | 0, this.E = ys[4] | 0, this.F = ys[5] | 0, this.G = ys[6] | 0, this.H = ys[7] | 0;
  }
  get() {
    const { A: e, B: r, C: n, D: s, E: i, F: a, G: o, H: c } = this;
    return [e, r, n, s, i, a, o, c];
  }
  // prettier-ignore
  set(e, r, n, s, i, a, o, c) {
    this.A = e | 0, this.B = r | 0, this.C = n | 0, this.D = s | 0, this.E = i | 0, this.F = a | 0, this.G = o | 0, this.H = c | 0;
  }
  process(e, r) {
    for (let l = 0; l < 16; l++, r += 4)
      bs[l] = e.getUint32(r, !1);
    for (let l = 16; l < 64; l++) {
      const f = bs[l - 15], g = bs[l - 2], h = ln(f, 7) ^ ln(f, 18) ^ f >>> 3, u = ln(g, 17) ^ ln(g, 19) ^ g >>> 10;
      bs[l] = u + bs[l - 7] + h + bs[l - 16] | 0;
    }
    let { A: n, B: s, C: i, D: a, E: o, F: c, G: m, H: d } = this;
    for (let l = 0; l < 64; l++) {
      const f = ln(o, 6) ^ ln(o, 11) ^ ln(o, 25), g = d + f + Cw(o, c, m) + Rw[l] + bs[l] | 0, u = (ln(n, 2) ^ ln(n, 13) ^ ln(n, 22)) + Nw(n, s, i) | 0;
      d = m, m = c, c = o, o = a + g | 0, a = i, i = s, s = n, n = g + u | 0;
    }
    n = n + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, c = c + this.F | 0, m = m + this.G | 0, d = d + this.H | 0, this.set(n, s, i, a, o, c, m, d);
  }
  roundClean() {
    bs.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Im = /* @__PURE__ */ mh(() => new Pw());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Tm = BigInt(0), lu = BigInt(1), kw = BigInt(2), cu = (t) => t instanceof Uint8Array, Bw = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function _a(t) {
  if (!cu(t))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let r = 0; r < t.length; r++)
    e += Bw[t[r]];
  return e;
}
function Cm(t) {
  const e = t.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function yh(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
function xa(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(e / 2);
  for (let n = 0; n < r.length; n++) {
    const s = n * 2, i = t.slice(s, s + 2), a = Number.parseInt(i, 16);
    if (Number.isNaN(a) || a < 0)
      throw new Error("Invalid byte sequence");
    r[n] = a;
  }
  return r;
}
function ji(t) {
  return yh(_a(t));
}
function bh(t) {
  if (!cu(t))
    throw new Error("Uint8Array expected");
  return yh(_a(Uint8Array.from(t).reverse()));
}
function Sa(t, e) {
  return xa(t.toString(16).padStart(e * 2, "0"));
}
function wh(t, e) {
  return Sa(t, e).reverse();
}
function Mw(t) {
  return xa(Cm(t));
}
function $r(t, e, r) {
  let n;
  if (typeof e == "string")
    try {
      n = xa(e);
    } catch (i) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${i}`);
    }
  else if (cu(e))
    n = Uint8Array.from(e);
  else
    throw new Error(`${t} must be hex string or Uint8Array`);
  const s = n.length;
  if (typeof r == "number" && s !== r)
    throw new Error(`${t} expected ${r} bytes, got ${s}`);
  return n;
}
function Tl(...t) {
  const e = new Uint8Array(t.reduce((n, s) => n + s.length, 0));
  let r = 0;
  return t.forEach((n) => {
    if (!cu(n))
      throw new Error("Uint8Array expected");
    e.set(n, r), r += n.length;
  }), e;
}
function Dw(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let r = 0; r < t.length; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Lw(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Uw(t) {
  let e;
  for (e = 0; t > Tm; t >>= lu, e += 1)
    ;
  return e;
}
function Fw(t, e) {
  return t >> BigInt(e) & lu;
}
const jw = (t, e, r) => t | (r ? lu : Tm) << BigInt(e), vh = (t) => (kw << BigInt(t - 1)) - lu, Fu = (t) => new Uint8Array(t), ud = (t) => Uint8Array.from(t);
function Nm(t, e, r) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof r != "function")
    throw new Error("hmacFn must be a function");
  let n = Fu(t), s = Fu(t), i = 0;
  const a = () => {
    n.fill(1), s.fill(0), i = 0;
  }, o = (...l) => r(s, n, ...l), c = (l = Fu()) => {
    s = o(ud([0]), l), n = o(), l.length !== 0 && (s = o(ud([1]), l), n = o());
  }, m = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let l = 0;
    const f = [];
    for (; l < e; ) {
      n = o();
      const g = n.slice();
      f.push(g), l += n.length;
    }
    return Tl(...f);
  };
  return (l, f) => {
    a(), c(l);
    let g;
    for (; !(g = f(m())); )
      c();
    return a(), g;
  };
}
const Hw = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || t instanceof Uint8Array,
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function Xl(t, e, r = {}) {
  const n = (s, i, a) => {
    const o = Hw[i];
    if (typeof o != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const c = t[s];
    if (!(a && c === void 0) && !o(c, t))
      throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${i}`);
  };
  for (const [s, i] of Object.entries(e))
    n(s, i, !1);
  for (const [s, i] of Object.entries(r))
    n(s, i, !0);
  return t;
}
const Gw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: Fw,
  bitLen: Uw,
  bitMask: vh,
  bitSet: jw,
  bytesToHex: _a,
  bytesToNumberBE: ji,
  bytesToNumberLE: bh,
  concatBytes: Tl,
  createHmacDrbg: Nm,
  ensureBytes: $r,
  equalBytes: Dw,
  hexToBytes: xa,
  hexToNumber: yh,
  numberToBytesBE: Sa,
  numberToBytesLE: wh,
  numberToHexUnpadded: Cm,
  numberToVarBytesBE: Mw,
  utf8ToBytes: Lw,
  validateObject: Xl
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Tt = BigInt(0), ht = BigInt(1), hi = BigInt(2), $w = BigInt(3), Af = BigInt(4), fd = BigInt(5), hd = BigInt(8);
BigInt(9);
BigInt(16);
function lr(t, e) {
  const r = t % e;
  return r >= Tt ? r : e + r;
}
function Ww(t, e, r) {
  if (r <= Tt || e < Tt)
    throw new Error("Expected power/modulo > 0");
  if (r === ht)
    return Tt;
  let n = ht;
  for (; e > Tt; )
    e & ht && (n = n * t % r), t = t * t % r, e >>= ht;
  return n;
}
function Tr(t, e, r) {
  let n = t;
  for (; e-- > Tt; )
    n *= n, n %= r;
  return n;
}
function Ef(t, e) {
  if (t === Tt || e <= Tt)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let r = lr(t, e), n = e, s = Tt, i = ht;
  for (; r !== Tt; ) {
    const o = n / r, c = n % r, m = s - i * o;
    n = r, r = c, s = i, i = m;
  }
  if (n !== ht)
    throw new Error("invert: does not exist");
  return lr(s, e);
}
function Vw(t) {
  const e = (t - ht) / hi;
  let r, n, s;
  for (r = t - ht, n = 0; r % hi === Tt; r /= hi, n++)
    ;
  for (s = hi; s < t && Ww(s, e, t) !== t - ht; s++)
    ;
  if (n === 1) {
    const a = (t + ht) / Af;
    return function(c, m) {
      const d = c.pow(m, a);
      if (!c.eql(c.sqr(d), m))
        throw new Error("Cannot find square root");
      return d;
    };
  }
  const i = (r + ht) / hi;
  return function(o, c) {
    if (o.pow(c, e) === o.neg(o.ONE))
      throw new Error("Cannot find square root");
    let m = n, d = o.pow(o.mul(o.ONE, s), r), l = o.pow(c, i), f = o.pow(c, r);
    for (; !o.eql(f, o.ONE); ) {
      if (o.eql(f, o.ZERO))
        return o.ZERO;
      let g = 1;
      for (let u = o.sqr(f); g < m && !o.eql(u, o.ONE); g++)
        u = o.sqr(u);
      const h = o.pow(d, ht << BigInt(m - g - 1));
      d = o.sqr(h), l = o.mul(l, h), f = o.mul(f, d), m = g;
    }
    return l;
  };
}
function zw(t) {
  if (t % Af === $w) {
    const e = (t + ht) / Af;
    return function(n, s) {
      const i = n.pow(s, e);
      if (!n.eql(n.sqr(i), s))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (t % hd === fd) {
    const e = (t - fd) / hd;
    return function(n, s) {
      const i = n.mul(s, hi), a = n.pow(i, e), o = n.mul(s, a), c = n.mul(n.mul(o, hi), a), m = n.mul(o, n.sub(c, n.ONE));
      if (!n.eql(n.sqr(m), s))
        throw new Error("Cannot find square root");
      return m;
    };
  }
  return Vw(t);
}
const Qw = [
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
function qw(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, r = Qw.reduce((n, s) => (n[s] = "function", n), e);
  return Xl(t, r);
}
function Jw(t, e, r) {
  if (r < Tt)
    throw new Error("Expected power > 0");
  if (r === Tt)
    return t.ONE;
  if (r === ht)
    return e;
  let n = t.ONE, s = e;
  for (; r > Tt; )
    r & ht && (n = t.mul(n, s)), s = t.sqr(s), r >>= ht;
  return n;
}
function Kw(t, e) {
  const r = new Array(e.length), n = e.reduce((i, a, o) => t.is0(a) ? i : (r[o] = i, t.mul(i, a)), t.ONE), s = t.inv(n);
  return e.reduceRight((i, a, o) => t.is0(a) ? i : (r[o] = t.mul(i, r[o]), t.mul(i, a)), s), r;
}
function Rm(t, e) {
  const r = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: n };
}
function Zw(t, e, r = !1, n = {}) {
  if (t <= Tt)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: s, nByteLength: i } = Rm(t, e);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const a = zw(t), o = Object.freeze({
    ORDER: t,
    BITS: s,
    BYTES: i,
    MASK: vh(s),
    ZERO: Tt,
    ONE: ht,
    create: (c) => lr(c, t),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return Tt <= c && c < t;
    },
    is0: (c) => c === Tt,
    isOdd: (c) => (c & ht) === ht,
    neg: (c) => lr(-c, t),
    eql: (c, m) => c === m,
    sqr: (c) => lr(c * c, t),
    add: (c, m) => lr(c + m, t),
    sub: (c, m) => lr(c - m, t),
    mul: (c, m) => lr(c * m, t),
    pow: (c, m) => Jw(o, c, m),
    div: (c, m) => lr(c * Ef(m, t), t),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, m) => c + m,
    subN: (c, m) => c - m,
    mulN: (c, m) => c * m,
    inv: (c) => Ef(c, t),
    sqrt: n.sqrt || ((c) => a(o, c)),
    invertBatch: (c) => Kw(o, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, m, d) => d ? m : c,
    toBytes: (c) => r ? wh(c, i) : Sa(c, i),
    fromBytes: (c) => {
      if (c.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);
      return r ? bh(c) : ji(c);
    }
  });
  return Object.freeze(o);
}
function Pm(t) {
  if (typeof t != "bigint")
    throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function km(t) {
  const e = Pm(t);
  return e + Math.ceil(e / 2);
}
function Xw(t, e, r = !1) {
  const n = t.length, s = Pm(e), i = km(e);
  if (n < 16 || n < i || n > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${n}`);
  const a = r ? ji(t) : bh(t), o = lr(a, e - ht) + ht;
  return r ? wh(o, s) : Sa(o, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Yw = BigInt(0), ju = BigInt(1);
function ev(t, e) {
  const r = (s, i) => {
    const a = i.negate();
    return s ? a : i;
  }, n = (s) => {
    const i = Math.ceil(e / s) + 1, a = 2 ** (s - 1);
    return { windows: i, windowSize: a };
  };
  return {
    constTimeNegate: r,
    // non-const time multiplication ladder
    unsafeLadder(s, i) {
      let a = t.ZERO, o = s;
      for (; i > Yw; )
        i & ju && (a = a.add(o)), o = o.double(), i >>= ju;
      return a;
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
      const { windows: a, windowSize: o } = n(i), c = [];
      let m = s, d = m;
      for (let l = 0; l < a; l++) {
        d = m, c.push(d);
        for (let f = 1; f < o; f++)
          d = d.add(m), c.push(d);
        m = d.double();
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
    wNAF(s, i, a) {
      const { windows: o, windowSize: c } = n(s);
      let m = t.ZERO, d = t.BASE;
      const l = BigInt(2 ** s - 1), f = 2 ** s, g = BigInt(s);
      for (let h = 0; h < o; h++) {
        const u = h * c;
        let b = Number(a & l);
        a >>= g, b > c && (b -= f, a += ju);
        const p = u, y = u + Math.abs(b) - 1, v = h % 2 !== 0, E = b < 0;
        b === 0 ? d = d.add(r(v, i[p])) : m = m.add(r(E, i[y]));
      }
      return { p: m, f: d };
    },
    wNAFCached(s, i, a, o) {
      const c = s._WINDOW_SIZE || 1;
      let m = i.get(s);
      return m || (m = this.precomputeWindow(s, c), c !== 1 && i.set(s, o(m))), this.wNAF(c, m, a);
    }
  };
}
function Bm(t) {
  return qw(t.Fp), Xl(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Rm(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function tv(t) {
  const e = Bm(t);
  Xl(e, {
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
  const { endo: r, Fp: n, a: s } = e;
  if (r) {
    if (!n.eql(s, n.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof r != "object" || typeof r.beta != "bigint" || typeof r.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: rv, hexToBytes: nv } = Gw, gi = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(e = "") {
      super(e);
    }
  },
  _parseInt(t) {
    const { Err: e } = gi;
    if (t.length < 2 || t[0] !== 2)
      throw new e("Invalid signature integer tag");
    const r = t[1], n = t.subarray(2, r + 2);
    if (!r || n.length !== r)
      throw new e("Invalid signature integer: wrong length");
    if (n[0] & 128)
      throw new e("Invalid signature integer: negative");
    if (n[0] === 0 && !(n[1] & 128))
      throw new e("Invalid signature integer: unnecessary leading zero");
    return { d: rv(n), l: t.subarray(r + 2) };
  },
  toSig(t) {
    const { Err: e } = gi, r = typeof t == "string" ? nv(t) : t;
    if (!(r instanceof Uint8Array))
      throw new Error("ui8a expected");
    let n = r.length;
    if (n < 2 || r[0] != 48)
      throw new e("Invalid signature tag");
    if (r[1] !== n - 2)
      throw new e("Invalid signature: incorrect length");
    const { d: s, l: i } = gi._parseInt(r.subarray(2)), { d: a, l: o } = gi._parseInt(i);
    if (o.length)
      throw new e("Invalid signature: left bytes after parsing");
    return { r: s, s: a };
  },
  hexFromSig(t) {
    const e = (m) => Number.parseInt(m[0], 16) & 8 ? "00" + m : m, r = (m) => {
      const d = m.toString(16);
      return d.length & 1 ? `0${d}` : d;
    }, n = e(r(t.s)), s = e(r(t.r)), i = n.length / 2, a = s.length / 2, o = r(i), c = r(a);
    return `30${r(a + i + 4)}02${c}${s}02${o}${n}`;
  }
}, Jn = BigInt(0), Mr = BigInt(1);
BigInt(2);
const dd = BigInt(3);
BigInt(4);
function sv(t) {
  const e = tv(t), { Fp: r } = e, n = e.toBytes || ((h, u, b) => {
    const p = u.toAffine();
    return Tl(Uint8Array.from([4]), r.toBytes(p.x), r.toBytes(p.y));
  }), s = e.fromBytes || ((h) => {
    const u = h.subarray(1), b = r.fromBytes(u.subarray(0, r.BYTES)), p = r.fromBytes(u.subarray(r.BYTES, 2 * r.BYTES));
    return { x: b, y: p };
  });
  function i(h) {
    const { a: u, b } = e, p = r.sqr(h), y = r.mul(p, h);
    return r.add(r.add(y, r.mul(h, u)), b);
  }
  if (!r.eql(r.sqr(e.Gy), i(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function a(h) {
    return typeof h == "bigint" && Jn < h && h < e.n;
  }
  function o(h) {
    if (!a(h))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(h) {
    const { allowedPrivateKeyLengths: u, nByteLength: b, wrapPrivateKey: p, n: y } = e;
    if (u && typeof h != "bigint") {
      if (h instanceof Uint8Array && (h = _a(h)), typeof h != "string" || !u.includes(h.length))
        throw new Error("Invalid key");
      h = h.padStart(b * 2, "0");
    }
    let v;
    try {
      v = typeof h == "bigint" ? h : ji($r("private key", h, b));
    } catch {
      throw new Error(`private key must be ${b} bytes, hex or bigint, not ${typeof h}`);
    }
    return p && (v = lr(v, y)), o(v), v;
  }
  const m = /* @__PURE__ */ new Map();
  function d(h) {
    if (!(h instanceof l))
      throw new Error("ProjectivePoint expected");
  }
  class l {
    constructor(u, b, p) {
      if (this.px = u, this.py = b, this.pz = p, u == null || !r.isValid(u))
        throw new Error("x required");
      if (b == null || !r.isValid(b))
        throw new Error("y required");
      if (p == null || !r.isValid(p))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(u) {
      const { x: b, y: p } = u || {};
      if (!u || !r.isValid(b) || !r.isValid(p))
        throw new Error("invalid affine point");
      if (u instanceof l)
        throw new Error("projective point not allowed");
      const y = (v) => r.eql(v, r.ZERO);
      return y(b) && y(p) ? l.ZERO : new l(b, p, r.ONE);
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
    static normalizeZ(u) {
      const b = r.invertBatch(u.map((p) => p.pz));
      return u.map((p, y) => p.toAffine(b[y])).map(l.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(u) {
      const b = l.fromAffine(s($r("pointHex", u)));
      return b.assertValidity(), b;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(u) {
      return l.BASE.multiply(c(u));
    }
    // "Private method", don't use it directly
    _setWindowSize(u) {
      this._WINDOW_SIZE = u, m.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (e.allowInfinityPoint && !r.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: u, y: b } = this.toAffine();
      if (!r.isValid(u) || !r.isValid(b))
        throw new Error("bad point: x or y not FE");
      const p = r.sqr(b), y = i(u);
      if (!r.eql(p, y))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: u } = this.toAffine();
      if (r.isOdd)
        return !r.isOdd(u);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(u) {
      d(u);
      const { px: b, py: p, pz: y } = this, { px: v, py: E, pz: x } = u, C = r.eql(r.mul(b, x), r.mul(v, y)), T = r.eql(r.mul(p, x), r.mul(E, y));
      return C && T;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new l(this.px, r.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: u, b } = e, p = r.mul(b, dd), { px: y, py: v, pz: E } = this;
      let x = r.ZERO, C = r.ZERO, T = r.ZERO, A = r.mul(y, y), S = r.mul(v, v), I = r.mul(E, E), P = r.mul(y, v);
      return P = r.add(P, P), T = r.mul(y, E), T = r.add(T, T), x = r.mul(u, T), C = r.mul(p, I), C = r.add(x, C), x = r.sub(S, C), C = r.add(S, C), C = r.mul(x, C), x = r.mul(P, x), T = r.mul(p, T), I = r.mul(u, I), P = r.sub(A, I), P = r.mul(u, P), P = r.add(P, T), T = r.add(A, A), A = r.add(T, A), A = r.add(A, I), A = r.mul(A, P), C = r.add(C, A), I = r.mul(v, E), I = r.add(I, I), A = r.mul(I, P), x = r.sub(x, A), T = r.mul(I, S), T = r.add(T, T), T = r.add(T, T), new l(x, C, T);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(u) {
      d(u);
      const { px: b, py: p, pz: y } = this, { px: v, py: E, pz: x } = u;
      let C = r.ZERO, T = r.ZERO, A = r.ZERO;
      const S = e.a, I = r.mul(e.b, dd);
      let P = r.mul(b, v), H = r.mul(p, E), W = r.mul(y, x), Z = r.add(b, p), j = r.add(v, E);
      Z = r.mul(Z, j), j = r.add(P, H), Z = r.sub(Z, j), j = r.add(b, y);
      let z = r.add(v, x);
      return j = r.mul(j, z), z = r.add(P, W), j = r.sub(j, z), z = r.add(p, y), C = r.add(E, x), z = r.mul(z, C), C = r.add(H, W), z = r.sub(z, C), A = r.mul(S, j), C = r.mul(I, W), A = r.add(C, A), C = r.sub(H, A), A = r.add(H, A), T = r.mul(C, A), H = r.add(P, P), H = r.add(H, P), W = r.mul(S, W), j = r.mul(I, j), H = r.add(H, W), W = r.sub(P, W), W = r.mul(S, W), j = r.add(j, W), P = r.mul(H, j), T = r.add(T, P), P = r.mul(z, j), C = r.mul(Z, C), C = r.sub(C, P), P = r.mul(Z, H), A = r.mul(z, A), A = r.add(A, P), new l(C, T, A);
    }
    subtract(u) {
      return this.add(u.negate());
    }
    is0() {
      return this.equals(l.ZERO);
    }
    wNAF(u) {
      return g.wNAFCached(this, m, u, (b) => {
        const p = r.invertBatch(b.map((y) => y.pz));
        return b.map((y, v) => y.toAffine(p[v])).map(l.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(u) {
      const b = l.ZERO;
      if (u === Jn)
        return b;
      if (o(u), u === Mr)
        return this;
      const { endo: p } = e;
      if (!p)
        return g.unsafeLadder(this, u);
      let { k1neg: y, k1: v, k2neg: E, k2: x } = p.splitScalar(u), C = b, T = b, A = this;
      for (; v > Jn || x > Jn; )
        v & Mr && (C = C.add(A)), x & Mr && (T = T.add(A)), A = A.double(), v >>= Mr, x >>= Mr;
      return y && (C = C.negate()), E && (T = T.negate()), T = new l(r.mul(T.px, p.beta), T.py, T.pz), C.add(T);
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
    multiply(u) {
      o(u);
      let b = u, p, y;
      const { endo: v } = e;
      if (v) {
        const { k1neg: E, k1: x, k2neg: C, k2: T } = v.splitScalar(b);
        let { p: A, f: S } = this.wNAF(x), { p: I, f: P } = this.wNAF(T);
        A = g.constTimeNegate(E, A), I = g.constTimeNegate(C, I), I = new l(r.mul(I.px, v.beta), I.py, I.pz), p = A.add(I), y = S.add(P);
      } else {
        const { p: E, f: x } = this.wNAF(b);
        p = E, y = x;
      }
      return l.normalizeZ([p, y])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(u, b, p) {
      const y = l.BASE, v = (x, C) => C === Jn || C === Mr || !x.equals(y) ? x.multiplyUnsafe(C) : x.multiply(C), E = v(this, b).add(v(u, p));
      return E.is0() ? void 0 : E;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(u) {
      const { px: b, py: p, pz: y } = this, v = this.is0();
      u == null && (u = v ? r.ONE : r.inv(y));
      const E = r.mul(b, u), x = r.mul(p, u), C = r.mul(y, u);
      if (v)
        return { x: r.ZERO, y: r.ZERO };
      if (!r.eql(C, r.ONE))
        throw new Error("invZ was invalid");
      return { x: E, y: x };
    }
    isTorsionFree() {
      const { h: u, isTorsionFree: b } = e;
      if (u === Mr)
        return !0;
      if (b)
        return b(l, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: u, clearCofactor: b } = e;
      return u === Mr ? this : b ? b(l, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(u = !0) {
      return this.assertValidity(), n(l, this, u);
    }
    toHex(u = !0) {
      return _a(this.toRawBytes(u));
    }
  }
  l.BASE = new l(e.Gx, e.Gy, r.ONE), l.ZERO = new l(r.ZERO, r.ONE, r.ZERO);
  const f = e.nBitLength, g = ev(l, e.endo ? Math.ceil(f / 2) : f);
  return {
    CURVE: e,
    ProjectivePoint: l,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: a
  };
}
function iv(t) {
  const e = Bm(t);
  return Xl(e, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...e });
}
function ov(t) {
  const e = iv(t), { Fp: r, n } = e, s = r.BYTES + 1, i = 2 * r.BYTES + 1;
  function a(j) {
    return Jn < j && j < r.ORDER;
  }
  function o(j) {
    return lr(j, n);
  }
  function c(j) {
    return Ef(j, n);
  }
  const { ProjectivePoint: m, normPrivateKeyToScalar: d, weierstrassEquation: l, isWithinCurveOrder: f } = sv({
    ...e,
    toBytes(j, z, Y) {
      const de = z.toAffine(), fe = r.toBytes(de.x), _e = Tl;
      return Y ? _e(Uint8Array.from([z.hasEvenY() ? 2 : 3]), fe) : _e(Uint8Array.from([4]), fe, r.toBytes(de.y));
    },
    fromBytes(j) {
      const z = j.length, Y = j[0], de = j.subarray(1);
      if (z === s && (Y === 2 || Y === 3)) {
        const fe = ji(de);
        if (!a(fe))
          throw new Error("Point is not on curve");
        const _e = l(fe);
        let ue = r.sqrt(_e);
        const ye = (ue & Mr) === Mr;
        return (Y & 1) === 1 !== ye && (ue = r.neg(ue)), { x: fe, y: ue };
      } else if (z === i && Y === 4) {
        const fe = r.fromBytes(de.subarray(0, r.BYTES)), _e = r.fromBytes(de.subarray(r.BYTES, 2 * r.BYTES));
        return { x: fe, y: _e };
      } else
        throw new Error(`Point of length ${z} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`);
    }
  }), g = (j) => _a(Sa(j, e.nByteLength));
  function h(j) {
    const z = n >> Mr;
    return j > z;
  }
  function u(j) {
    return h(j) ? o(-j) : j;
  }
  const b = (j, z, Y) => ji(j.slice(z, Y));
  class p {
    constructor(z, Y, de) {
      this.r = z, this.s = Y, this.recovery = de, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(z) {
      const Y = e.nByteLength;
      return z = $r("compactSignature", z, Y * 2), new p(b(z, 0, Y), b(z, Y, 2 * Y));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(z) {
      const { r: Y, s: de } = gi.toSig($r("DER", z));
      return new p(Y, de);
    }
    assertValidity() {
      if (!f(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!f(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(z) {
      return new p(this.r, this.s, z);
    }
    recoverPublicKey(z) {
      const { r: Y, s: de, recovery: fe } = this, _e = T($r("msgHash", z));
      if (fe == null || ![0, 1, 2, 3].includes(fe))
        throw new Error("recovery id invalid");
      const ue = fe === 2 || fe === 3 ? Y + e.n : Y;
      if (ue >= r.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const ye = fe & 1 ? "03" : "02", he = m.fromHex(ye + g(ue)), Pe = c(ue), lt = o(-_e * Pe), nt = o(de * Pe), Ye = m.BASE.multiplyAndAddUnsafe(he, lt, nt);
      if (!Ye)
        throw new Error("point at infinify");
      return Ye.assertValidity(), Ye;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return h(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new p(this.r, o(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return xa(this.toDERHex());
    }
    toDERHex() {
      return gi.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return xa(this.toCompactHex());
    }
    toCompactHex() {
      return g(this.r) + g(this.s);
    }
  }
  const y = {
    isValidPrivateKey(j) {
      try {
        return d(j), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: d,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const j = km(e.n);
      return Xw(e.randomBytes(j), e.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(j = 8, z = m.BASE) {
      return z._setWindowSize(j), z.multiply(BigInt(3)), z;
    }
  };
  function v(j, z = !0) {
    return m.fromPrivateKey(j).toRawBytes(z);
  }
  function E(j) {
    const z = j instanceof Uint8Array, Y = typeof j == "string", de = (z || Y) && j.length;
    return z ? de === s || de === i : Y ? de === 2 * s || de === 2 * i : j instanceof m;
  }
  function x(j, z, Y = !0) {
    if (E(j))
      throw new Error("first arg must be private key");
    if (!E(z))
      throw new Error("second arg must be public key");
    return m.fromHex(z).multiply(d(j)).toRawBytes(Y);
  }
  const C = e.bits2int || function(j) {
    const z = ji(j), Y = j.length * 8 - e.nBitLength;
    return Y > 0 ? z >> BigInt(Y) : z;
  }, T = e.bits2int_modN || function(j) {
    return o(C(j));
  }, A = vh(e.nBitLength);
  function S(j) {
    if (typeof j != "bigint")
      throw new Error("bigint expected");
    if (!(Jn <= j && j < A))
      throw new Error(`bigint expected < 2^${e.nBitLength}`);
    return Sa(j, e.nByteLength);
  }
  function I(j, z, Y = P) {
    if (["recovered", "canonical"].some((bt) => bt in Y))
      throw new Error("sign() legacy options not supported");
    const { hash: de, randomBytes: fe } = e;
    let { lowS: _e, prehash: ue, extraEntropy: ye } = Y;
    _e == null && (_e = !0), j = $r("msgHash", j), ue && (j = $r("prehashed msgHash", de(j)));
    const he = T(j), Pe = d(z), lt = [S(Pe), S(he)];
    if (ye != null) {
      const bt = ye === !0 ? fe(r.BYTES) : ye;
      lt.push($r("extraEntropy", bt));
    }
    const nt = Tl(...lt), Ye = he;
    function ae(bt) {
      const Nt = C(bt);
      if (!f(Nt))
        return;
      const Qe = c(Nt), wt = m.BASE.multiply(Nt).toAffine(), st = o(wt.x);
      if (st === Jn)
        return;
      const Lt = o(Qe * o(Ye + st * Pe));
      if (Lt === Jn)
        return;
      let ir = (wt.x === st ? 0 : 2) | Number(wt.y & Mr), Sr = Lt;
      return _e && h(Lt) && (Sr = u(Lt), ir ^= 1), new p(st, Sr, ir);
    }
    return { seed: nt, k2sig: ae };
  }
  const P = { lowS: e.lowS, prehash: !1 }, H = { lowS: e.lowS, prehash: !1 };
  function W(j, z, Y = P) {
    const { seed: de, k2sig: fe } = I(j, z, Y), _e = e;
    return Nm(_e.hash.outputLen, _e.nByteLength, _e.hmac)(de, fe);
  }
  m.BASE._setWindowSize(8);
  function Z(j, z, Y, de = H) {
    var wt;
    const fe = j;
    if (z = $r("msgHash", z), Y = $r("publicKey", Y), "strict" in de)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: _e, prehash: ue } = de;
    let ye, he;
    try {
      if (typeof fe == "string" || fe instanceof Uint8Array)
        try {
          ye = p.fromDER(fe);
        } catch (st) {
          if (!(st instanceof gi.Err))
            throw st;
          ye = p.fromCompact(fe);
        }
      else if (typeof fe == "object" && typeof fe.r == "bigint" && typeof fe.s == "bigint") {
        const { r: st, s: Lt } = fe;
        ye = new p(st, Lt);
      } else
        throw new Error("PARSE");
      he = m.fromHex(Y);
    } catch (st) {
      if (st.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (_e && ye.hasHighS())
      return !1;
    ue && (z = e.hash(z));
    const { r: Pe, s: lt } = ye, nt = T(z), Ye = c(lt), ae = o(nt * Ye), bt = o(Pe * Ye), Nt = (wt = m.BASE.multiplyAndAddUnsafe(he, ae, bt)) == null ? void 0 : wt.toAffine();
    return Nt ? o(Nt.x) === Pe : !1;
  }
  return {
    CURVE: e,
    getPublicKey: v,
    getSharedSecret: x,
    sign: W,
    verify: Z,
    ProjectivePoint: m,
    Signature: p,
    utils: y
  };
}
class Mm extends ph {
  constructor(e, r) {
    super(), this.finished = !1, this.destroyed = !1, K0(e);
    const n = au(r);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, i = new Uint8Array(s);
    i.set(n.length > s ? e.create().update(n).digest() : n);
    for (let a = 0; a < i.length; a++)
      i[a] ^= 54;
    this.iHash.update(i), this.oHash = e.create();
    for (let a = 0; a < i.length; a++)
      i[a] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(e) {
    return Ea(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Ea(this), dh(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: r, iHash: n, finished: s, destroyed: i, blockLen: a, outputLen: o } = this;
    return e = e, e.finished = s, e.destroyed = i, e.blockLen = a, e.outputLen = o, e.oHash = r._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const Dm = (t, e, r) => new Mm(t, e).update(r).digest();
Dm.create = (t, e) => new Mm(t, e);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function av(t) {
  return {
    hash: t,
    hmac: (e, ...r) => Dm(t, e, gw(...r)),
    randomBytes: yw
  };
}
function lv(t, e) {
  const r = (n) => ov({ ...t, ...av(n) });
  return Object.freeze({ ...r(e), create: r });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Lm = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), pd = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), cv = BigInt(1), _f = BigInt(2), md = (t, e) => (t + e / _f) / e;
function uv(t) {
  const e = Lm, r = BigInt(3), n = BigInt(6), s = BigInt(11), i = BigInt(22), a = BigInt(23), o = BigInt(44), c = BigInt(88), m = t * t * t % e, d = m * m * t % e, l = Tr(d, r, e) * d % e, f = Tr(l, r, e) * d % e, g = Tr(f, _f, e) * m % e, h = Tr(g, s, e) * g % e, u = Tr(h, i, e) * h % e, b = Tr(u, o, e) * u % e, p = Tr(b, c, e) * b % e, y = Tr(p, o, e) * u % e, v = Tr(y, r, e) * d % e, E = Tr(v, a, e) * h % e, x = Tr(E, n, e) * m % e, C = Tr(x, _f, e);
  if (!xf.eql(xf.sqr(C), t))
    throw new Error("Cannot find square root");
  return C;
}
const xf = Zw(Lm, void 0, void 0, { sqrt: uv }), Es = lv({
  a: BigInt(0),
  b: BigInt(7),
  Fp: xf,
  n: pd,
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
    splitScalar: (t) => {
      const e = pd, r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -cv * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = r, a = BigInt("0x100000000000000000000000000000000"), o = md(i * t, e), c = md(-n * t, e);
      let m = lr(t - o * r - c * s, e), d = lr(-o * n - c * i, e);
      const l = m > a, f = d > a;
      if (l && (m = e - m), f && (d = e - d), m > a || d > a)
        throw new Error("splitScalar: Endomorphism failed, k=" + t);
      return { k1neg: l, k1: m, k2neg: f, k2: d };
    }
  }
}, Im);
BigInt(0);
Es.ProjectivePoint;
const fv = (t, e) => `Please <a href="${e}" target="_blank">install</a> or enable to ${t} to continue`;
var gd;
(function(t) {
  t[t.ACCOUNT_ACCESS_REJECTED = 4001] = "ACCOUNT_ACCESS_REJECTED", t[t.ACCOUNT_ACCESS_ALREADY_REQUESTED = -32002] = "ACCOUNT_ACCESS_ALREADY_REQUESTED", t[t.UNAUTHORIZED = 4100] = "UNAUTHORIZED", t[t.INVALID_PARAMS = -32602] = "INVALID_PARAMS", t[t.UNSUPPORTED_METHOD = 4200] = "UNSUPPORTED_METHOD", t[t.DISCONNECTED = 4900] = "DISCONNECTED", t[t.CHAIN_DISCONNECTED = 4901] = "CHAIN_DISCONNECTED", t[t.CHAIN_NOT_ADDED = 4902] = "CHAIN_NOT_ADDED", t[t.DOES_NOT_EXIST = -32601] = "DOES_NOT_EXIST", t[t.UNRECOGNIZED_CHAIN_ID = -32603] = "UNRECOGNIZED_CHAIN_ID";
})(gd || (gd = {}));
function hv(t, e) {
  const r = t.validate(e);
  return r.error ? r : null;
}
const Ah = B.alternatives().try(B.string().pattern(/^0x[0-9a-fA-F]+$/), B.number().positive()), Eh = B.string().valid("evm"), dv = B.object({
  address: B.string().required(),
  icon: B.string().optional()
}), pv = B.object({
  namespace: Eh,
  id: Ah.required(),
  rpcUrl: B.string(),
  label: B.string(),
  token: B.string(),
  secondaryTokens: B.array().max(5).items(dv).optional(),
  icon: B.string(),
  color: B.string(),
  publicRpcUrl: B.string(),
  protectedRpcUrl: B.string(),
  blockExplorerUrl: B.string()
});
var pl = { exports: {} };
pl.exports;
var yd;
function mv() {
  return yd || (yd = 1, function(t, e) {
    var r = 200, n = "Expected a function", s = "__lodash_hash_undefined__", i = 1, a = 2, o = 1 / 0, c = 9007199254740991, m = "[object Arguments]", d = "[object Array]", l = "[object Boolean]", f = "[object Date]", g = "[object Error]", h = "[object Function]", u = "[object GeneratorFunction]", b = "[object Map]", p = "[object Number]", y = "[object Object]", v = "[object Promise]", E = "[object RegExp]", x = "[object Set]", C = "[object String]", T = "[object Symbol]", A = "[object WeakMap]", S = "[object ArrayBuffer]", I = "[object DataView]", P = "[object Float32Array]", H = "[object Float64Array]", W = "[object Int8Array]", Z = "[object Int16Array]", j = "[object Int32Array]", z = "[object Uint8Array]", Y = "[object Uint8ClampedArray]", de = "[object Uint16Array]", fe = "[object Uint32Array]", _e = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ue = /^\w*$/, ye = /^\./, he = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pe = /[\\^$.*+?()[\]{}|]/g, lt = /\\(\\)?/g, nt = /^\[object .+?Constructor\]$/, Ye = /^(?:0|[1-9]\d*)$/, ae = {};
    ae[P] = ae[H] = ae[W] = ae[Z] = ae[j] = ae[z] = ae[Y] = ae[de] = ae[fe] = !0, ae[m] = ae[d] = ae[S] = ae[l] = ae[I] = ae[f] = ae[g] = ae[h] = ae[b] = ae[p] = ae[y] = ae[E] = ae[x] = ae[C] = ae[A] = !1;
    var bt = typeof Dr == "object" && Dr && Dr.Object === Object && Dr, Nt = typeof self == "object" && self && self.Object === Object && self, Qe = bt || Nt || Function("return this")(), wt = e && !e.nodeType && e, st = wt && !0 && t && !t.nodeType && t, Lt = st && st.exports === wt, ir = Lt && bt.process, Sr = function() {
      try {
        return ir && ir.binding("util");
      } catch {
      }
    }(), en = Sr && Sr.isTypedArray;
    function ns(w, _, R, U) {
      for (var J = -1, V = w ? w.length : 0; ++J < V; ) {
        var X = w[J];
        _(U, X, R(X), w);
      }
      return U;
    }
    function ss(w, _) {
      for (var R = -1, U = w ? w.length : 0; ++R < U; )
        if (_(w[R], R, w))
          return !0;
      return !1;
    }
    function Lr(w) {
      return function(_) {
        return _ == null ? void 0 : _[w];
      };
    }
    function M(w, _) {
      for (var R = -1, U = Array(w); ++R < w; )
        U[R] = _(R);
      return U;
    }
    function ne(w) {
      return function(_) {
        return w(_);
      };
    }
    function te(w, _) {
      return w == null ? void 0 : w[_];
    }
    function ve(w) {
      var _ = !1;
      if (w != null && typeof w.toString != "function")
        try {
          _ = !!(w + "");
        } catch {
        }
      return _;
    }
    function tt(w) {
      var _ = -1, R = Array(w.size);
      return w.forEach(function(U, J) {
        R[++_] = [J, U];
      }), R;
    }
    function He(w, _) {
      return function(R) {
        return w(_(R));
      };
    }
    function ge(w) {
      var _ = -1, R = Array(w.size);
      return w.forEach(function(U) {
        R[++_] = U;
      }), R;
    }
    var mt = Array.prototype, fr = Function.prototype, Je = Object.prototype, At = Qe["__core-js_shared__"], hr = function() {
      var w = /[^.]+$/.exec(At && At.keys && At.keys.IE_PROTO || "");
      return w ? "Symbol(src)_1." + w : "";
    }(), Gt = fr.toString, ct = Je.hasOwnProperty, $e = Je.toString, An = RegExp(
      "^" + Gt.call(ct).replace(Pe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Ks = Qe.Symbol, $t = Qe.Uint8Array, tn = Je.propertyIsEnumerable, Xi = mt.splice, rn = He(Object.keys, Object), is = _t(Qe, "DataView"), Wt = _t(Qe, "Map"), Zs = _t(Qe, "Promise"), Xs = _t(Qe, "Set"), En = _t(Qe, "WeakMap"), dr = _t(Object, "create"), Ys = D(is), Et = D(Wt), ei = D(Zs), _n = D(Xs), Ma = D(En), os = Ks ? Ks.prototype : void 0, ti = os ? os.valueOf : void 0, Ur = os ? os.toString : void 0;
    function Fr(w) {
      var _ = -1, R = w ? w.length : 0;
      for (this.clear(); ++_ < R; ) {
        var U = w[_];
        this.set(U[0], U[1]);
      }
    }
    function as() {
      this.__data__ = dr ? dr(null) : {};
    }
    function ri(w) {
      return this.has(w) && delete this.__data__[w];
    }
    function Yi(w) {
      var _ = this.__data__;
      if (dr) {
        var R = _[w];
        return R === s ? void 0 : R;
      }
      return ct.call(_, w) ? _[w] : void 0;
    }
    function jr(w) {
      var _ = this.__data__;
      return dr ? _[w] !== void 0 : ct.call(_, w);
    }
    function nn(w, _) {
      var R = this.__data__;
      return R[w] = dr && _ === void 0 ? s : _, this;
    }
    Fr.prototype.clear = as, Fr.prototype.delete = ri, Fr.prototype.get = Yi, Fr.prototype.has = jr, Fr.prototype.set = nn;
    function pr(w) {
      var _ = -1, R = w ? w.length : 0;
      for (this.clear(); ++_ < R; ) {
        var U = w[_];
        this.set(U[0], U[1]);
      }
    }
    function Da() {
      this.__data__ = [];
    }
    function La(w) {
      var _ = this.__data__, R = us(_, w);
      if (R < 0)
        return !1;
      var U = _.length - 1;
      return R == U ? _.pop() : Xi.call(_, R, 1), !0;
    }
    function Ua(w) {
      var _ = this.__data__, R = us(_, w);
      return R < 0 ? void 0 : _[R][1];
    }
    function mr(w) {
      return us(this.__data__, w) > -1;
    }
    function Fa(w, _) {
      var R = this.__data__, U = us(R, w);
      return U < 0 ? R.push([w, _]) : R[U][1] = _, this;
    }
    pr.prototype.clear = Da, pr.prototype.delete = La, pr.prototype.get = Ua, pr.prototype.has = mr, pr.prototype.set = Fa;
    function Vt(w) {
      var _ = -1, R = w ? w.length : 0;
      for (this.clear(); ++_ < R; ) {
        var U = w[_];
        this.set(U[0], U[1]);
      }
    }
    function ja() {
      this.__data__ = {
        hash: new Fr(),
        map: new (Wt || pr)(),
        string: new Fr()
      };
    }
    function ls(w) {
      return On(this, w).delete(w);
    }
    function ni(w) {
      return On(this, w).get(w);
    }
    function gr(w) {
      return On(this, w).has(w);
    }
    function cs(w, _) {
      return On(this, w).set(w, _), this;
    }
    Vt.prototype.clear = ja, Vt.prototype.delete = ls, Vt.prototype.get = ni, Vt.prototype.has = gr, Vt.prototype.set = cs;
    function xn(w) {
      var _ = -1, R = w ? w.length : 0;
      for (this.__data__ = new Vt(); ++_ < R; )
        this.add(w[_]);
    }
    function Ha(w) {
      return this.__data__.set(w, s), this;
    }
    function Ga(w) {
      return this.__data__.has(w);
    }
    xn.prototype.add = xn.prototype.push = Ha, xn.prototype.has = Ga;
    function yr(w) {
      this.__data__ = new pr(w);
    }
    function sn() {
      this.__data__ = new pr();
    }
    function $a(w) {
      return this.__data__.delete(w);
    }
    function Wa(w) {
      return this.__data__.get(w);
    }
    function br(w) {
      return this.__data__.has(w);
    }
    function Va(w, _) {
      var R = this.__data__;
      if (R instanceof pr) {
        var U = R.__data__;
        if (!Wt || U.length < r - 1)
          return U.push([w, _]), this;
        R = this.__data__ = new Vt(U);
      }
      return R.set(w, _), this;
    }
    yr.prototype.clear = sn, yr.prototype.delete = $a, yr.prototype.get = Wa, yr.prototype.has = br, yr.prototype.set = Va;
    function za(w, _) {
      var R = Te(w) || xe(w) ? M(w.length, String) : [], U = R.length, J = !!U;
      for (var V in w)
        ct.call(w, V) && !(J && (V == "length" || In(V, U))) && R.push(V);
      return R;
    }
    function us(w, _) {
      for (var R = w.length; R--; )
        if (Ae(w[R][0], _))
          return R;
      return -1;
    }
    function Qa(w, _, R, U) {
      return qa(w, function(J, V, X) {
        _(U, J, R(J), X);
      }), U;
    }
    var qa = hs(fs), Ja = ds();
    function fs(w, _) {
      return w && Ja(w, _, ao);
    }
    function on(w, _) {
      _ = Tn(_, w) ? [_] : ro(_);
      for (var R = 0, U = _.length; w != null && R < U; )
        w = w[N(_[R++])];
      return R && R == U ? w : void 0;
    }
    function si(w) {
      return $e.call(w);
    }
    function Ka(w, _) {
      return w != null && _ in Object(w);
    }
    function Sn(w, _, R, U, J) {
      return w === _ ? !0 : w == null || _ == null || !zt(w) && !Ir(_) ? w !== w && _ !== _ : eo(w, _, Sn, R, U, J);
    }
    function eo(w, _, R, U, J, V) {
      var X = Te(w), be = Te(_), pe = d, Ce = d;
      X || (pe = xt(w), pe = pe == m ? y : pe), be || (Ce = xt(_), Ce = Ce == m ? y : Ce);
      var Ie = pe == y && !ve(w), Ne = Ce == y && !ve(_), ke = pe == Ce;
      if (ke && !Ie)
        return V || (V = new yr()), X || oo(w) ? ps(w, _, R, U, J, V) : oi(w, _, pe, R, U, J, V);
      if (!(J & a)) {
        var Ke = Ie && ct.call(w, "__wrapped__"), Ze = Ne && ct.call(_, "__wrapped__");
        if (Ke || Ze) {
          var Rt = Ke ? w.value() : w, vt = Ze ? _.value() : _;
          return V || (V = new yr()), R(Rt, vt, U, J, V);
        }
      }
      return ke ? (V || (V = new yr()), ms(w, _, R, U, J, V)) : !1;
    }
    function Za(w, _, R, U) {
      var J = R.length, V = J;
      if (w == null)
        return !V;
      for (w = Object(w); J--; ) {
        var X = R[J];
        if (X[2] ? X[1] !== w[X[0]] : !(X[0] in w))
          return !1;
      }
      for (; ++J < V; ) {
        X = R[J];
        var be = X[0], pe = w[be], Ce = X[1];
        if (X[2]) {
          if (pe === void 0 && !(be in w))
            return !1;
        } else {
          var Ie = new yr(), Ne;
          if (!(Ne === void 0 ? Sn(Ce, pe, U, i | a, Ie) : Ne))
            return !1;
        }
      }
      return !0;
    }
    function Xa(w) {
      if (!zt(w) || so(w))
        return !1;
      var _ = St(w) || ve(w) ? An : nt;
      return _.test(D(w));
    }
    function Ya(w) {
      return Ir(w) && it(w.length) && !!ae[$e.call(w)];
    }
    function to(w) {
      return typeof w == "function" ? w : w == null ? Su : typeof w == "object" ? Te(w) ? rl(w[0], w[1]) : tl(w) : Ou(w);
    }
    function el(w) {
      if (!io(w))
        return rn(w);
      var _ = [];
      for (var R in Object(w))
        ct.call(w, R) && R != "constructor" && _.push(R);
      return _;
    }
    function tl(w) {
      var _ = Or(w);
      return _.length == 1 && _[0][2] ? li(_[0][0], _[0][1]) : function(R) {
        return R === w || Za(R, w, _);
      };
    }
    function rl(w, _) {
      return Tn(w) && ai(_) ? li(N(w), _) : function(R) {
        var U = xu(R, w);
        return U === void 0 && U === _ ? il(R, w) : Sn(_, U, void 0, i | a);
      };
    }
    function ii(w) {
      return function(_) {
        return on(_, w);
      };
    }
    function nl(w) {
      if (typeof w == "string")
        return w;
      if (Cn(w))
        return Ur ? Ur.call(w) : "";
      var _ = w + "";
      return _ == "0" && 1 / w == -o ? "-0" : _;
    }
    function ro(w) {
      return Te(w) ? w : gs(w);
    }
    function no(w, _) {
      return function(R, U) {
        var J = Te(R) ? ns : Qa, V = _();
        return J(R, w, to(U), V);
      };
    }
    function hs(w, _) {
      return function(R, U) {
        if (R == null)
          return R;
        if (!Oe(R))
          return w(R, U);
        for (var J = R.length, V = -1, X = Object(R); ++V < J && U(X[V], V, X) !== !1; )
          ;
        return R;
      };
    }
    function ds(w) {
      return function(_, R, U) {
        for (var J = -1, V = Object(_), X = U(_), be = X.length; be--; ) {
          var pe = X[++J];
          if (R(V[pe], pe, V) === !1)
            break;
        }
        return _;
      };
    }
    function ps(w, _, R, U, J, V) {
      var X = J & a, be = w.length, pe = _.length;
      if (be != pe && !(X && pe > be))
        return !1;
      var Ce = V.get(w);
      if (Ce && V.get(_))
        return Ce == _;
      var Ie = -1, Ne = !0, ke = J & i ? new xn() : void 0;
      for (V.set(w, _), V.set(_, w); ++Ie < be; ) {
        var Ke = w[Ie], Ze = _[Ie];
        if (U)
          var Rt = X ? U(Ze, Ke, Ie, _, w, V) : U(Ke, Ze, Ie, w, _, V);
        if (Rt !== void 0) {
          if (Rt)
            continue;
          Ne = !1;
          break;
        }
        if (ke) {
          if (!ss(_, function(vt, Qt) {
            if (!ke.has(Qt) && (Ke === vt || R(Ke, vt, U, J, V)))
              return ke.add(Qt);
          })) {
            Ne = !1;
            break;
          }
        } else if (!(Ke === Ze || R(Ke, Ze, U, J, V))) {
          Ne = !1;
          break;
        }
      }
      return V.delete(w), V.delete(_), Ne;
    }
    function oi(w, _, R, U, J, V, X) {
      switch (R) {
        case I:
          if (w.byteLength != _.byteLength || w.byteOffset != _.byteOffset)
            return !1;
          w = w.buffer, _ = _.buffer;
        case S:
          return !(w.byteLength != _.byteLength || !U(new $t(w), new $t(_)));
        case l:
        case f:
        case p:
          return Ae(+w, +_);
        case g:
          return w.name == _.name && w.message == _.message;
        case E:
        case C:
          return w == _ + "";
        case b:
          var be = tt;
        case x:
          var pe = V & a;
          if (be || (be = ge), w.size != _.size && !pe)
            return !1;
          var Ce = X.get(w);
          if (Ce)
            return Ce == _;
          V |= i, X.set(w, _);
          var Ie = ps(be(w), be(_), U, J, V, X);
          return X.delete(w), Ie;
        case T:
          if (ti)
            return ti.call(w) == ti.call(_);
      }
      return !1;
    }
    function ms(w, _, R, U, J, V) {
      var X = J & a, be = ao(w), pe = be.length, Ce = ao(_), Ie = Ce.length;
      if (pe != Ie && !X)
        return !1;
      for (var Ne = pe; Ne--; ) {
        var ke = be[Ne];
        if (!(X ? ke in _ : ct.call(_, ke)))
          return !1;
      }
      var Ke = V.get(w);
      if (Ke && V.get(_))
        return Ke == _;
      var Ze = !0;
      V.set(w, _), V.set(_, w);
      for (var Rt = X; ++Ne < pe; ) {
        ke = be[Ne];
        var vt = w[ke], Qt = _[ke];
        if (U)
          var ol = X ? U(Qt, vt, ke, _, w, V) : U(vt, Qt, ke, w, _, V);
        if (!(ol === void 0 ? vt === Qt || R(vt, Qt, U, J, V) : ol)) {
          Ze = !1;
          break;
        }
        Rt || (Rt = ke == "constructor");
      }
      if (Ze && !Rt) {
        var Nn = w.constructor, Rn = _.constructor;
        Nn != Rn && "constructor" in w && "constructor" in _ && !(typeof Nn == "function" && Nn instanceof Nn && typeof Rn == "function" && Rn instanceof Rn) && (Ze = !1);
      }
      return V.delete(w), V.delete(_), Ze;
    }
    function On(w, _) {
      var R = w.__data__;
      return sl(_) ? R[typeof _ == "string" ? "string" : "hash"] : R.map;
    }
    function Or(w) {
      for (var _ = ao(w), R = _.length; R--; ) {
        var U = _[R], J = w[U];
        _[R] = [U, J, ai(J)];
      }
      return _;
    }
    function _t(w, _) {
      var R = te(w, _);
      return Xa(R) ? R : void 0;
    }
    var xt = si;
    (is && xt(new is(new ArrayBuffer(1))) != I || Wt && xt(new Wt()) != b || Zs && xt(Zs.resolve()) != v || Xs && xt(new Xs()) != x || En && xt(new En()) != A) && (xt = function(w) {
      var _ = $e.call(w), R = _ == y ? w.constructor : void 0, U = R ? D(R) : void 0;
      if (U)
        switch (U) {
          case Ys:
            return I;
          case Et:
            return b;
          case ei:
            return v;
          case _n:
            return x;
          case Ma:
            return A;
        }
      return _;
    });
    function an(w, _, R) {
      _ = Tn(_, w) ? [_] : ro(_);
      for (var U, J = -1, X = _.length; ++J < X; ) {
        var V = N(_[J]);
        if (!(U = w != null && R(w, V)))
          break;
        w = w[V];
      }
      if (U)
        return U;
      var X = w ? w.length : 0;
      return !!X && it(X) && In(V, X) && (Te(w) || xe(w));
    }
    function In(w, _) {
      return _ = _ ?? c, !!_ && (typeof w == "number" || Ye.test(w)) && w > -1 && w % 1 == 0 && w < _;
    }
    function Tn(w, _) {
      if (Te(w))
        return !1;
      var R = typeof w;
      return R == "number" || R == "symbol" || R == "boolean" || w == null || Cn(w) ? !0 : ue.test(w) || !_e.test(w) || _ != null && w in Object(_);
    }
    function sl(w) {
      var _ = typeof w;
      return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? w !== "__proto__" : w === null;
    }
    function so(w) {
      return !!hr && hr in w;
    }
    function io(w) {
      var _ = w && w.constructor, R = typeof _ == "function" && _.prototype || Je;
      return w === R;
    }
    function ai(w) {
      return w === w && !zt(w);
    }
    function li(w, _) {
      return function(R) {
        return R == null ? !1 : R[w] === _ && (_ !== void 0 || w in Object(R));
      };
    }
    var gs = se(function(w) {
      w = _u(w);
      var _ = [];
      return ye.test(w) && _.push(""), w.replace(he, function(R, U, J, V) {
        _.push(J ? V.replace(lt, "$1") : U || R);
      }), _;
    });
    function N(w) {
      if (typeof w == "string" || Cn(w))
        return w;
      var _ = w + "";
      return _ == "0" && 1 / w == -o ? "-0" : _;
    }
    function D(w) {
      if (w != null) {
        try {
          return Gt.call(w);
        } catch {
        }
        try {
          return w + "";
        } catch {
        }
      }
      return "";
    }
    var G = no(function(w, _, R) {
      w[R ? 0 : 1].push(_);
    }, function() {
      return [[], []];
    });
    function se(w, _) {
      if (typeof w != "function" || _ && typeof _ != "function")
        throw new TypeError(n);
      var R = function() {
        var U = arguments, J = _ ? _.apply(this, U) : U[0], V = R.cache;
        if (V.has(J))
          return V.get(J);
        var X = w.apply(this, U);
        return R.cache = V.set(J, X), X;
      };
      return R.cache = new (se.Cache || Vt)(), R;
    }
    se.Cache = Vt;
    function Ae(w, _) {
      return w === _ || w !== w && _ !== _;
    }
    function xe(w) {
      return Ge(w) && ct.call(w, "callee") && (!tn.call(w, "callee") || $e.call(w) == m);
    }
    var Te = Array.isArray;
    function Oe(w) {
      return w != null && it(w.length) && !St(w);
    }
    function Ge(w) {
      return Ir(w) && Oe(w);
    }
    function St(w) {
      var _ = zt(w) ? $e.call(w) : "";
      return _ == h || _ == u;
    }
    function it(w) {
      return typeof w == "number" && w > -1 && w % 1 == 0 && w <= c;
    }
    function zt(w) {
      var _ = typeof w;
      return !!w && (_ == "object" || _ == "function");
    }
    function Ir(w) {
      return !!w && typeof w == "object";
    }
    function Cn(w) {
      return typeof w == "symbol" || Ir(w) && $e.call(w) == T;
    }
    var oo = en ? ne(en) : Ya;
    function _u(w) {
      return w == null ? "" : nl(w);
    }
    function xu(w, _, R) {
      var U = w == null ? void 0 : on(w, _);
      return U === void 0 ? R : U;
    }
    function il(w, _) {
      return w != null && an(w, _, Ka);
    }
    function ao(w) {
      return Oe(w) ? za(w) : el(w);
    }
    function Su(w) {
      return w;
    }
    function Ou(w) {
      return Tn(w) ? Lr(N(w)) : ii(w);
    }
    t.exports = G;
  }(pl, pl.exports)), pl.exports;
}
mv();
var ml = { exports: {} };
ml.exports;
var bd;
function gv() {
  return bd || (bd = 1, function(t, e) {
    var r = 200, n = "__lodash_hash_undefined__", s = 800, i = 16, a = 9007199254740991, o = "[object Arguments]", c = "[object Array]", m = "[object AsyncFunction]", d = "[object Boolean]", l = "[object Date]", f = "[object Error]", g = "[object Function]", h = "[object GeneratorFunction]", u = "[object Map]", b = "[object Number]", p = "[object Null]", y = "[object Object]", v = "[object Proxy]", E = "[object RegExp]", x = "[object Set]", C = "[object String]", T = "[object Undefined]", A = "[object WeakMap]", S = "[object ArrayBuffer]", I = "[object DataView]", P = "[object Float32Array]", H = "[object Float64Array]", W = "[object Int8Array]", Z = "[object Int16Array]", j = "[object Int32Array]", z = "[object Uint8Array]", Y = "[object Uint8ClampedArray]", de = "[object Uint16Array]", fe = "[object Uint32Array]", _e = /[\\^$.*+?()[\]{}|]/g, ue = /^\[object .+?Constructor\]$/, ye = /^(?:0|[1-9]\d*)$/, he = {};
    he[P] = he[H] = he[W] = he[Z] = he[j] = he[z] = he[Y] = he[de] = he[fe] = !0, he[o] = he[c] = he[S] = he[d] = he[I] = he[l] = he[f] = he[g] = he[u] = he[b] = he[y] = he[E] = he[x] = he[C] = he[A] = !1;
    var Pe = typeof Dr == "object" && Dr && Dr.Object === Object && Dr, lt = typeof self == "object" && self && self.Object === Object && self, nt = Pe || lt || Function("return this")(), Ye = e && !e.nodeType && e, ae = Ye && !0 && t && !t.nodeType && t, bt = ae && ae.exports === Ye, Nt = bt && Pe.process, Qe = function() {
      try {
        var N = ae && ae.require && ae.require("util").types;
        return N || Nt && Nt.binding && Nt.binding("util");
      } catch {
      }
    }(), wt = Qe && Qe.isTypedArray;
    function st(N, D, G) {
      switch (G.length) {
        case 0:
          return N.call(D);
        case 1:
          return N.call(D, G[0]);
        case 2:
          return N.call(D, G[0], G[1]);
        case 3:
          return N.call(D, G[0], G[1], G[2]);
      }
      return N.apply(D, G);
    }
    function Lt(N, D) {
      for (var G = -1, se = Array(N); ++G < N; )
        se[G] = D(G);
      return se;
    }
    function ir(N) {
      return function(D) {
        return N(D);
      };
    }
    function Sr(N, D) {
      return N == null ? void 0 : N[D];
    }
    function en(N, D) {
      return function(G) {
        return N(D(G));
      };
    }
    var ns = Array.prototype, ss = Function.prototype, Lr = Object.prototype, M = nt["__core-js_shared__"], ne = ss.toString, te = Lr.hasOwnProperty, ve = function() {
      var N = /[^.]+$/.exec(M && M.keys && M.keys.IE_PROTO || "");
      return N ? "Symbol(src)_1." + N : "";
    }(), tt = Lr.toString, He = ne.call(Object), ge = RegExp(
      "^" + ne.call(te).replace(_e, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), mt = bt ? nt.Buffer : void 0, fr = nt.Symbol, Je = nt.Uint8Array;
    mt && mt.allocUnsafe;
    var At = en(Object.getPrototypeOf, Object), hr = Object.create, Gt = Lr.propertyIsEnumerable, ct = ns.splice, $e = fr ? fr.toStringTag : void 0, An = function() {
      try {
        var N = si(Object, "defineProperty");
        return N({}, "", {}), N;
      } catch {
      }
    }(), Ks = mt ? mt.isBuffer : void 0, $t = Math.max, tn = Date.now, Xi = si(nt, "Map"), rn = si(Object, "create"), is = /* @__PURE__ */ function() {
      function N() {
      }
      return function(D) {
        if (!xt(D))
          return {};
        if (hr)
          return hr(D);
        N.prototype = D;
        var G = new N();
        return N.prototype = void 0, G;
      };
    }();
    function Wt(N) {
      var D = -1, G = N == null ? 0 : N.length;
      for (this.clear(); ++D < G; ) {
        var se = N[D];
        this.set(se[0], se[1]);
      }
    }
    function Zs() {
      this.__data__ = rn ? rn(null) : {}, this.size = 0;
    }
    function Xs(N) {
      var D = this.has(N) && delete this.__data__[N];
      return this.size -= D ? 1 : 0, D;
    }
    function En(N) {
      var D = this.__data__;
      if (rn) {
        var G = D[N];
        return G === n ? void 0 : G;
      }
      return te.call(D, N) ? D[N] : void 0;
    }
    function dr(N) {
      var D = this.__data__;
      return rn ? D[N] !== void 0 : te.call(D, N);
    }
    function Ys(N, D) {
      var G = this.__data__;
      return this.size += this.has(N) ? 0 : 1, G[N] = rn && D === void 0 ? n : D, this;
    }
    Wt.prototype.clear = Zs, Wt.prototype.delete = Xs, Wt.prototype.get = En, Wt.prototype.has = dr, Wt.prototype.set = Ys;
    function Et(N) {
      var D = -1, G = N == null ? 0 : N.length;
      for (this.clear(); ++D < G; ) {
        var se = N[D];
        this.set(se[0], se[1]);
      }
    }
    function ei() {
      this.__data__ = [], this.size = 0;
    }
    function _n(N) {
      var D = this.__data__, G = ls(D, N);
      if (G < 0)
        return !1;
      var se = D.length - 1;
      return G == se ? D.pop() : ct.call(D, G, 1), --this.size, !0;
    }
    function Ma(N) {
      var D = this.__data__, G = ls(D, N);
      return G < 0 ? void 0 : D[G][1];
    }
    function os(N) {
      return ls(this.__data__, N) > -1;
    }
    function ti(N, D) {
      var G = this.__data__, se = ls(G, N);
      return se < 0 ? (++this.size, G.push([N, D])) : G[se][1] = D, this;
    }
    Et.prototype.clear = ei, Et.prototype.delete = _n, Et.prototype.get = Ma, Et.prototype.has = os, Et.prototype.set = ti;
    function Ur(N) {
      var D = -1, G = N == null ? 0 : N.length;
      for (this.clear(); ++D < G; ) {
        var se = N[D];
        this.set(se[0], se[1]);
      }
    }
    function Fr() {
      this.size = 0, this.__data__ = {
        hash: new Wt(),
        map: new (Xi || Et)(),
        string: new Wt()
      };
    }
    function as(N) {
      var D = on(this, N).delete(N);
      return this.size -= D ? 1 : 0, D;
    }
    function ri(N) {
      return on(this, N).get(N);
    }
    function Yi(N) {
      return on(this, N).has(N);
    }
    function jr(N, D) {
      var G = on(this, N), se = G.size;
      return G.set(N, D), this.size += G.size == se ? 0 : 1, this;
    }
    Ur.prototype.clear = Fr, Ur.prototype.delete = as, Ur.prototype.get = ri, Ur.prototype.has = Yi, Ur.prototype.set = jr;
    function nn(N) {
      var D = this.__data__ = new Et(N);
      this.size = D.size;
    }
    function pr() {
      this.__data__ = new Et(), this.size = 0;
    }
    function Da(N) {
      var D = this.__data__, G = D.delete(N);
      return this.size = D.size, G;
    }
    function La(N) {
      return this.__data__.get(N);
    }
    function Ua(N) {
      return this.__data__.has(N);
    }
    function mr(N, D) {
      var G = this.__data__;
      if (G instanceof Et) {
        var se = G.__data__;
        if (!Xi || se.length < r - 1)
          return se.push([N, D]), this.size = ++G.size, this;
        G = this.__data__ = new Ur(se);
      }
      return G.set(N, D), this.size = G.size, this;
    }
    nn.prototype.clear = pr, nn.prototype.delete = Da, nn.prototype.get = La, nn.prototype.has = Ua, nn.prototype.set = mr;
    function Fa(N, D) {
      var G = ps(N), se = !G && ds(N), Ae = !G && !se && On(N), xe = !G && !se && !Ae && Tn(N), Te = G || se || Ae || xe, Oe = Te ? Lt(N.length, String) : [], Ge = Oe.length;
      for (var St in N)
        Te && // Safari 9 has enumerable `arguments.length` in strict mode.
        (St == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        Ae && (St == "offset" || St == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        xe && (St == "buffer" || St == "byteLength" || St == "byteOffset") || // Skip index properties.
        eo(St, Ge)) || Oe.push(St);
      return Oe;
    }
    function Vt(N, D, G) {
      (G !== void 0 && !hs(N[D], G) || G === void 0 && !(D in N)) && ni(N, D, G);
    }
    function ja(N, D, G) {
      var se = N[D];
      (!(te.call(N, D) && hs(se, G)) || G === void 0 && !(D in N)) && ni(N, D, G);
    }
    function ls(N, D) {
      for (var G = N.length; G--; )
        if (hs(N[G][0], D))
          return G;
      return -1;
    }
    function ni(N, D, G) {
      D == "__proto__" && An ? An(N, D, {
        configurable: !0,
        enumerable: !0,
        value: G,
        writable: !0
      }) : N[D] = G;
    }
    var gr = fs();
    function cs(N) {
      return N == null ? N === void 0 ? T : p : $e && $e in Object(N) ? Ka(N) : tl(N);
    }
    function xn(N) {
      return an(N) && cs(N) == o;
    }
    function Ha(N) {
      if (!xt(N) || Ya(N))
        return !1;
      var D = Or(N) ? ge : ue;
      return D.test(no(N));
    }
    function Ga(N) {
      return an(N) && _t(N.length) && !!he[cs(N)];
    }
    function yr(N) {
      if (!xt(N))
        return el(N);
      var D = to(N), G = [];
      for (var se in N)
        se == "constructor" && (D || !te.call(N, se)) || G.push(se);
      return G;
    }
    function sn(N, D, G, se, Ae) {
      N !== D && gr(D, function(xe, Te) {
        if (Ae || (Ae = new nn()), xt(xe))
          $a(N, D, Te, G, sn, se, Ae);
        else {
          var Oe = se ? se(ii(N, Te), xe, Te + "", N, D, Ae) : void 0;
          Oe === void 0 && (Oe = xe), Vt(N, Te, Oe);
        }
      }, so);
    }
    function $a(N, D, G, se, Ae, xe, Te) {
      var Oe = ii(N, G), Ge = ii(D, G), St = Te.get(Ge);
      if (St) {
        Vt(N, G, St);
        return;
      }
      var it = xe ? xe(Oe, Ge, G + "", N, D, Te) : void 0, zt = it === void 0;
      if (zt) {
        var Ir = ps(Ge), Cn = !Ir && On(Ge), oo = !Ir && !Cn && Tn(Ge);
        it = Ge, Ir || Cn || oo ? ps(Oe) ? it = Oe : ms(Oe) ? it = Qa(Oe) : Cn ? (zt = !1, it = Va(Ge)) : oo ? (zt = !1, it = us(Ge)) : it = [] : In(Ge) || ds(Ge) ? (it = Oe, ds(Oe) ? it = sl(Oe) : (!xt(Oe) || Or(Oe)) && (it = Sn(Ge))) : zt = !1;
      }
      zt && (Te.set(Ge, it), Ae(it, Ge, se, xe, Te), Te.delete(Ge)), Vt(N, G, it);
    }
    function Wa(N, D) {
      return nl(rl(N, D, li), N + "");
    }
    var br = An ? function(N, D) {
      return An(N, "toString", {
        configurable: !0,
        enumerable: !1,
        value: ai(D),
        writable: !0
      });
    } : li;
    function Va(N, D) {
      return N.slice();
    }
    function za(N) {
      var D = new N.constructor(N.byteLength);
      return new Je(D).set(new Je(N)), D;
    }
    function us(N, D) {
      var G = za(N.buffer);
      return new N.constructor(G, N.byteOffset, N.length);
    }
    function Qa(N, D) {
      var G = -1, se = N.length;
      for (D || (D = Array(se)); ++G < se; )
        D[G] = N[G];
      return D;
    }
    function qa(N, D, G, se) {
      var Ae = !G;
      G || (G = {});
      for (var xe = -1, Te = D.length; ++xe < Te; ) {
        var Oe = D[xe], Ge = void 0;
        Ge === void 0 && (Ge = N[Oe]), Ae ? ni(G, Oe, Ge) : ja(G, Oe, Ge);
      }
      return G;
    }
    function Ja(N) {
      return Wa(function(D, G) {
        var se = -1, Ae = G.length, xe = Ae > 1 ? G[Ae - 1] : void 0, Te = Ae > 2 ? G[2] : void 0;
        for (xe = N.length > 3 && typeof xe == "function" ? (Ae--, xe) : void 0, Te && Za(G[0], G[1], Te) && (xe = Ae < 3 ? void 0 : xe, Ae = 1), D = Object(D); ++se < Ae; ) {
          var Oe = G[se];
          Oe && N(D, Oe, se, xe);
        }
        return D;
      });
    }
    function fs(N) {
      return function(D, G, se) {
        for (var Ae = -1, xe = Object(D), Te = se(D), Oe = Te.length; Oe--; ) {
          var Ge = Te[++Ae];
          if (G(xe[Ge], Ge, xe) === !1)
            break;
        }
        return D;
      };
    }
    function on(N, D) {
      var G = N.__data__;
      return Xa(D) ? G[typeof D == "string" ? "string" : "hash"] : G.map;
    }
    function si(N, D) {
      var G = Sr(N, D);
      return Ha(G) ? G : void 0;
    }
    function Ka(N) {
      var D = te.call(N, $e), G = N[$e];
      try {
        N[$e] = void 0;
        var se = !0;
      } catch {
      }
      var Ae = tt.call(N);
      return se && (D ? N[$e] = G : delete N[$e]), Ae;
    }
    function Sn(N) {
      return typeof N.constructor == "function" && !to(N) ? is(At(N)) : {};
    }
    function eo(N, D) {
      var G = typeof N;
      return D = D ?? a, !!D && (G == "number" || G != "symbol" && ye.test(N)) && N > -1 && N % 1 == 0 && N < D;
    }
    function Za(N, D, G) {
      if (!xt(G))
        return !1;
      var se = typeof D;
      return (se == "number" ? oi(G) && eo(D, G.length) : se == "string" && D in G) ? hs(G[D], N) : !1;
    }
    function Xa(N) {
      var D = typeof N;
      return D == "string" || D == "number" || D == "symbol" || D == "boolean" ? N !== "__proto__" : N === null;
    }
    function Ya(N) {
      return !!ve && ve in N;
    }
    function to(N) {
      var D = N && N.constructor, G = typeof D == "function" && D.prototype || Lr;
      return N === G;
    }
    function el(N) {
      var D = [];
      if (N != null)
        for (var G in Object(N))
          D.push(G);
      return D;
    }
    function tl(N) {
      return tt.call(N);
    }
    function rl(N, D, G) {
      return D = $t(D === void 0 ? N.length - 1 : D, 0), function() {
        for (var se = arguments, Ae = -1, xe = $t(se.length - D, 0), Te = Array(xe); ++Ae < xe; )
          Te[Ae] = se[D + Ae];
        Ae = -1;
        for (var Oe = Array(D + 1); ++Ae < D; )
          Oe[Ae] = se[Ae];
        return Oe[D] = G(Te), st(N, this, Oe);
      };
    }
    function ii(N, D) {
      if (!(D === "constructor" && typeof N[D] == "function") && D != "__proto__")
        return N[D];
    }
    var nl = ro(br);
    function ro(N) {
      var D = 0, G = 0;
      return function() {
        var se = tn(), Ae = i - (se - G);
        if (G = se, Ae > 0) {
          if (++D >= s)
            return arguments[0];
        } else
          D = 0;
        return N.apply(void 0, arguments);
      };
    }
    function no(N) {
      if (N != null) {
        try {
          return ne.call(N);
        } catch {
        }
        try {
          return N + "";
        } catch {
        }
      }
      return "";
    }
    function hs(N, D) {
      return N === D || N !== N && D !== D;
    }
    var ds = xn(/* @__PURE__ */ function() {
      return arguments;
    }()) ? xn : function(N) {
      return an(N) && te.call(N, "callee") && !Gt.call(N, "callee");
    }, ps = Array.isArray;
    function oi(N) {
      return N != null && _t(N.length) && !Or(N);
    }
    function ms(N) {
      return an(N) && oi(N);
    }
    var On = Ks || gs;
    function Or(N) {
      if (!xt(N))
        return !1;
      var D = cs(N);
      return D == g || D == h || D == m || D == v;
    }
    function _t(N) {
      return typeof N == "number" && N > -1 && N % 1 == 0 && N <= a;
    }
    function xt(N) {
      var D = typeof N;
      return N != null && (D == "object" || D == "function");
    }
    function an(N) {
      return N != null && typeof N == "object";
    }
    function In(N) {
      if (!an(N) || cs(N) != y)
        return !1;
      var D = At(N);
      if (D === null)
        return !0;
      var G = te.call(D, "constructor") && D.constructor;
      return typeof G == "function" && G instanceof G && ne.call(G) == He;
    }
    var Tn = wt ? ir(wt) : Ga;
    function sl(N) {
      return qa(N, so(N));
    }
    function so(N) {
      return oi(N) ? Fa(N) : yr(N);
    }
    var io = Ja(function(N, D, G) {
      sn(N, D, G);
    });
    function ai(N) {
      return function() {
        return N;
      };
    }
    function li(N) {
      return N;
    }
    function gs() {
      return !1;
    }
    t.exports = io;
  }(ml, ml.exports)), ml.exports;
}
gv();
var Hu = { exports: {} }, wd;
function yv() {
  return wd || (wd = 1, function(t) {
    var e = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function s(c, m, d) {
      this.fn = c, this.context = m, this.once = d || !1;
    }
    function i(c, m, d, l, f) {
      if (typeof d != "function")
        throw new TypeError("The listener must be a function");
      var g = new s(d, l || c, f), h = r ? r + m : m;
      return c._events[h] ? c._events[h].fn ? c._events[h] = [c._events[h], g] : c._events[h].push(g) : (c._events[h] = g, c._eventsCount++), c;
    }
    function a(c, m) {
      --c._eventsCount === 0 ? c._events = new n() : delete c._events[m];
    }
    function o() {
      this._events = new n(), this._eventsCount = 0;
    }
    o.prototype.eventNames = function() {
      var m = [], d, l;
      if (this._eventsCount === 0) return m;
      for (l in d = this._events)
        e.call(d, l) && m.push(r ? l.slice(1) : l);
      return Object.getOwnPropertySymbols ? m.concat(Object.getOwnPropertySymbols(d)) : m;
    }, o.prototype.listeners = function(m) {
      var d = r ? r + m : m, l = this._events[d];
      if (!l) return [];
      if (l.fn) return [l.fn];
      for (var f = 0, g = l.length, h = new Array(g); f < g; f++)
        h[f] = l[f].fn;
      return h;
    }, o.prototype.listenerCount = function(m) {
      var d = r ? r + m : m, l = this._events[d];
      return l ? l.fn ? 1 : l.length : 0;
    }, o.prototype.emit = function(m, d, l, f, g, h) {
      var u = r ? r + m : m;
      if (!this._events[u]) return !1;
      var b = this._events[u], p = arguments.length, y, v;
      if (b.fn) {
        switch (b.once && this.removeListener(m, b.fn, void 0, !0), p) {
          case 1:
            return b.fn.call(b.context), !0;
          case 2:
            return b.fn.call(b.context, d), !0;
          case 3:
            return b.fn.call(b.context, d, l), !0;
          case 4:
            return b.fn.call(b.context, d, l, f), !0;
          case 5:
            return b.fn.call(b.context, d, l, f, g), !0;
          case 6:
            return b.fn.call(b.context, d, l, f, g, h), !0;
        }
        for (v = 1, y = new Array(p - 1); v < p; v++)
          y[v - 1] = arguments[v];
        b.fn.apply(b.context, y);
      } else {
        var E = b.length, x;
        for (v = 0; v < E; v++)
          switch (b[v].once && this.removeListener(m, b[v].fn, void 0, !0), p) {
            case 1:
              b[v].fn.call(b[v].context);
              break;
            case 2:
              b[v].fn.call(b[v].context, d);
              break;
            case 3:
              b[v].fn.call(b[v].context, d, l);
              break;
            case 4:
              b[v].fn.call(b[v].context, d, l, f);
              break;
            default:
              if (!y) for (x = 1, y = new Array(p - 1); x < p; x++)
                y[x - 1] = arguments[x];
              b[v].fn.apply(b[v].context, y);
          }
      }
      return !0;
    }, o.prototype.on = function(m, d, l) {
      return i(this, m, d, l, !1);
    }, o.prototype.once = function(m, d, l) {
      return i(this, m, d, l, !0);
    }, o.prototype.removeListener = function(m, d, l, f) {
      var g = r ? r + m : m;
      if (!this._events[g]) return this;
      if (!d)
        return a(this, g), this;
      var h = this._events[g];
      if (h.fn)
        h.fn === d && (!f || h.once) && (!l || h.context === l) && a(this, g);
      else {
        for (var u = 0, b = [], p = h.length; u < p; u++)
          (h[u].fn !== d || f && !h[u].once || l && h[u].context !== l) && b.push(h[u]);
        b.length ? this._events[g] = b.length === 1 ? b[0] : b : a(this, g);
      }
      return this;
    }, o.prototype.removeAllListeners = function(m) {
      var d;
      return m ? (d = r ? r + m : m, this._events[d] && a(this, d)) : (this._events = new n(), this._eventsCount = 0), this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = r, o.EventEmitter = o, t.exports = o;
  }(Hu)), Hu.exports;
}
yv();
function vd(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function bv() {
  if (typeof window < "u") {
    const t = db.getParser(window.navigator.userAgent), e = t.getOS(), r = t.getBrowser(), { type: n } = t.getPlatform();
    return {
      type: n,
      os: e,
      browser: r
    };
  } else
    return {
      type: null,
      os: null,
      browser: null
    };
}
const wv = (t) => t != null;
bv();
const Um = {
  wallets: [],
  walletModules: [],
  chains: [],
  accountCenter: {
    enabled: !0,
    position: "bottomRight",
    expanded: !1,
    minimal: !0
  },
  notify: {
    enabled: !0,
    position: "topRight",
    replacement: {
      gasPriceProbability: {
        speedup: 80,
        cancel: 95
      }
    }
  },
  notifications: [],
  locale: "",
  connect: {
    showSidebar: !0,
    disableClose: !1
  },
  appMetadata: null,
  wagmiConfig: null
}, vv = "add_chains", Av = "update_chains", Fm = "reset_store", Ev = "add_wallet", _v = "update_wallet", xv = "remove_wallet", Sv = "update_account", Ov = "update_account_center", Iv = "update_connect_modal", Tv = "set_wallet_modules", Cv = "set_locale", Nv = "update_notify", Rv = "add_notification", Pv = "remove_notification", kv = "update_balance", Bv = "update_app_metadata", Mv = "update_wagmi_config";
function Dv(t, e) {
  const { type: r, payload: n } = e;
  switch (r) {
    case vv:
      return Object.assign(Object.assign({}, t), { chains: [...t.chains, ...n] });
    case Av: {
      const s = n, i = t.chains, a = i.findIndex((o) => o.id === s.id);
      return i[a] = s, Object.assign(Object.assign({}, t), { chains: i });
    }
    case Ev: {
      const s = n, i = t.wallets.find(({ label: a }) => a === s.label);
      return Object.assign(Object.assign({}, t), { wallets: [
        // add to front of wallets as it is now the primary wallet
        i || n,
        // filter out wallet if it already existed
        ...t.wallets.filter(({ label: a }) => a !== s.label)
      ] });
    }
    case _v: {
      const s = n, { id: i } = s, a = vd(s, ["id"]), o = t.wallets.map((c) => c.label === i ? Object.assign(Object.assign({}, c), a) : c);
      return Object.assign(Object.assign({}, t), { wallets: o });
    }
    case xv: {
      const s = n;
      return Object.assign(Object.assign({}, t), { wallets: t.wallets.filter(({ label: i }) => i !== s.id) });
    }
    case Sv: {
      const s = n, { id: i, address: a } = s, o = vd(s, ["id", "address"]), c = t.wallets.map((m) => (m.label === i && (m.accounts = m.accounts.map((d) => d.address === a ? Object.assign(Object.assign({}, d), o) : d)), m));
      return Object.assign(Object.assign({}, t), { wallets: c });
    }
    case kv: {
      const s = n;
      return Object.assign(Object.assign({}, t), { wallets: s });
    }
    case Iv: {
      const s = n;
      return Object.assign(Object.assign({}, t), { connect: Object.assign(Object.assign({}, t.connect), s) });
    }
    case Ov: {
      const s = n;
      return Object.assign(Object.assign({}, t), { accountCenter: Object.assign(Object.assign({}, t.accountCenter), s) });
    }
    case Nv: {
      const s = n;
      return Object.assign(Object.assign({}, t), { notify: Object.assign(Object.assign({}, t.notify), s) });
    }
    case Rv: {
      const s = n, i = [...t.notifications], a = i.findIndex(({ id: o }) => o === s.id);
      return a !== -1 ? i[a] = s : i.unshift(s), Object.assign(Object.assign({}, t), { notifications: i });
    }
    case Pv: {
      const s = n;
      return Object.assign(Object.assign({}, t), { notifications: t.notifications.filter((i) => i.id !== s) });
    }
    case Tv:
      return Object.assign(Object.assign({}, t), { walletModules: n });
    case Cv:
      return Pa.set(n), Object.assign(Object.assign({}, t), { locale: n });
    case Bv: {
      const s = n;
      return Object.assign(Object.assign({}, t), { appMetadata: Object.assign(Object.assign(Object.assign({}, t.appMetadata), s), { name: s.name || "" }) });
    }
    case Mv: {
      const s = n;
      return Object.assign(Object.assign({}, t), { wagmiConfig: s });
    }
    case Fm:
      return Um;
    default:
      throw new Error(`Unknown type: ${r} in appStore reducer`);
  }
}
const uu = new ru(Um), Bc = new Ji();
Bc.subscribe(uu);
function Lv(t) {
  const e = uu.getValue();
  Bc.next(Dv(e, t));
}
function Uv(t) {
  if (!t)
    return Bc.asObservable();
  if (!Object.keys(uu.getValue()).includes(String(t)))
    throw new Error(`key: ${t} does not exist on this store`);
  return Bc.asObservable().pipe(sb(t), Vp(t), tb(wv));
}
function Fv() {
  return uu.getValue();
}
const jv = {
  select: Uv,
  get: Fv
}, Hv = new Ji(), Gv = new Ji();
new ru({ inProgress: !1, actionRequired: "" });
new ru(null);
const $v = jv.select("wallets").pipe(ob(1));
Hv.pipe(ab($v), Vp("1")).subscribe((t) => {
  t.forEach(({ label: e }) => {
    Gv.next(e);
  }), lA();
});
new ru([]);
const Gu = B.object().unknown(), Wv = B.object({
  namespace: Eh.required(),
  id: Ah.required()
}), Vv = B.any().allow(B.object({
  name: B.string().required(),
  avatar: B.string(),
  contentHash: B.any().allow(B.string(), null),
  getText: B.function().arity(1).required()
}), null), zv = B.any().allow(B.object({
  name: B.string().required()
}), null), Qv = B.any().allow(B.object({
  eth: B.number()
}).unknown(), null), qv = B.any().allow(B.object({
  balance: B.string().required(),
  icon: B.string()
}), null), Jv = B.object({
  address: B.string().required(),
  ens: Vv,
  uns: zv,
  balance: Qv,
  secondaryTokens: qv
}), Kv = B.array().items(pv).unique((t, e) => t.id === e.id).error((t) => t[0].code === "array.unique" ? new Error(`There is a duplicate Chain ID in your Onboard Chains array: ${t}`) : new Error(`${t}`)), Zv = B.array().items(Jv), Xv = B.object({
  label: B.string(),
  icon: B.string(),
  provider: Gu,
  instance: Gu,
  accounts: Zv,
  chains: B.array().items(Wv),
  wagmiConnector: Gu
}).required().error(new Error("wallet must be defined"));
B.array().items(Xv);
const jm = B.object({
  name: B.string().required(),
  url: B.string().uri().required()
}), Hm = B.object({
  version: B.string().required(),
  termsUrl: B.string().uri(),
  privacyUrl: B.string().uri()
}), Yv = B.object({
  name: B.string().required(),
  description: B.string().required(),
  icon: B.string(),
  logo: B.string(),
  gettingStartedGuide: B.string(),
  email: B.string(),
  appUrl: B.string(),
  explore: B.string(),
  recommendedInjectedWallets: B.array().items(jm),
  agreement: Hm
});
B.object({
  name: B.string(),
  description: B.string(),
  icon: B.string(),
  logo: B.string(),
  gettingStartedGuide: B.string(),
  email: B.string(),
  appUrl: B.string(),
  explore: B.string(),
  recommendedInjectedWallets: B.array().items(jm),
  agreement: Hm
});
B.object({
  label: B.string().required(),
  getInfo: B.function().arity(1).required(),
  getInterface: B.function().arity(1).required()
});
const eA = B.array().items(B.function()).required();
B.string();
const _h = B.string().valid("topRight", "bottomRight", "bottomLeft", "topLeft"), Ad = [70, 80, 90, 95, 99], Sf = B.object({
  transactionHandler: B.function().optional(),
  enabled: B.boolean(),
  position: _h,
  replacement: B.object({
    gasPriceProbability: B.object({
      speedup: B.number().valid(...Ad),
      cancel: B.number().valid(...Ad)
    })
  })
}), tA = B.object({
  desktop: Sf,
  mobile: Sf
}), Ed = B.object({
  enabled: B.boolean(),
  position: _h,
  minimal: B.boolean(),
  containerElement: B.string(),
  hideTransactionProtectionBtn: B.boolean(),
  transactionProtectionInfoLink: B.string()
});
B.object({
  enabled: B.boolean(),
  position: _h,
  expanded: B.boolean(),
  minimal: B.boolean(),
  hideTransactionProtectionBtn: B.boolean(),
  transactionProtectionInfoLink: B.string(),
  containerElement: B.string()
});
const rA = B.object({
  showSidebar: B.boolean(),
  disableClose: B.boolean(),
  autoConnectLastWallet: B.boolean(),
  autoConnectAllPreviousWallet: B.boolean(),
  iDontHaveAWalletLink: B.string(),
  wheresMyWalletLink: B.string(),
  removeWhereIsMyWalletWarning: B.boolean(),
  removeIDontHaveAWalletInfoLink: B.boolean(),
  disableUDResolution: B.boolean()
}), nA = B.object({
  accountCenter: B.string(),
  connectModal: B.string()
}), sA = B.object({
  "--w3o-background-color": B.string(),
  "--w3o-font-family": B.string(),
  "--w3o-foreground-color": B.string(),
  "--w3o-text-color": B.string(),
  "--w3o-border-color": B.string(),
  "--w3o-action-color": B.string(),
  "--w3o-border-radius": B.string()
}), iA = B.string().valid("default", "dark", "light", "system"), oA = B.alternatives().try(sA, iA);
B.object({
  wallets: eA,
  chains: Kv.required(),
  appMetadata: Yv,
  i18n: B.object().unknown(),
  apiKey: B.string(),
  accountCenter: B.object({
    desktop: Ed,
    mobile: Ed,
    hideTransactionProtectionBtn: B.boolean(),
    transactionProtectionInfoLink: B.string()
  }),
  notify: [tA, Sf],
  gas: B.object({
    get: B.function().required(),
    stream: B.function().required()
  }),
  wagmi: B.function(),
  connect: rA,
  containerElements: nA,
  // transactionPreview is deprecated but is still allowed to 
  // avoid breaking dapps a console error is shown although 
  // transactionPreview functionality has been removed
  transactionPreview: B.any(),
  theme: oA,
  disableFontDownload: B.boolean(),
  unstoppableResolution: B.function()
});
B.object({
  autoSelect: B.alternatives().try(B.object({
    label: B.string().required(),
    disableModals: B.boolean()
  }), B.string())
});
B.object({
  label: B.string().required()
}).required();
const aA = B.object({
  address: B.string().required(),
  icon: B.string().optional()
});
B.object({
  chainId: Ah.required(),
  chainNamespace: Eh,
  wallet: B.string(),
  rpcUrl: B.string(),
  label: B.string(),
  token: B.string(),
  protectedRpcUrl: B.string(),
  secondaryTokens: B.array().max(5).items(aA).optional()
});
B.object({
  key: B.string().required(),
  type: B.string().allow("pending", "error", "success", "hint"),
  eventCode: B.string(),
  message: B.string().required(),
  id: B.string().required(),
  autoDismiss: B.number(),
  onClick: B.function(),
  link: B.string()
});
B.object({
  sendTransaction: B.function(),
  estimateGas: B.function(),
  gasPrice: B.function(),
  balance: B.alternatives(B.string(), B.number()),
  txDetails: B.object({
    value: B.alternatives(B.string(), B.number()),
    to: B.string(),
    from: B.string()
  }),
  txApproveReminderTimeout: B.number()
});
B.object({
  key: B.string(),
  type: B.string().allow("pending", "error", "success", "hint"),
  eventCode: B.string(),
  message: B.string(),
  id: B.string(),
  autoDismiss: B.number(),
  onClick: B.function(),
  link: B.string()
});
B.object({
  id: B.string().required(),
  key: B.string().required(),
  type: B.string().allow("pending", "error", "success", "hint").required(),
  eventCode: B.string().required(),
  message: B.string().required(),
  autoDismiss: B.number().required(),
  network: B.string().required(),
  startTime: B.number(),
  onClick: B.function(),
  link: B.string()
});
function lA() {
  Lv({
    type: Fm
  });
}
const cA = "Must call the provided initialization method`init` method before using hooks.";
let Gm, $m = !1;
const Wm = nh.createContext(void 0);
function uA({ children: t, web3Onboard: e }) {
  return $m = !0, Gm = void 0, nh.createElement(Wm.Provider, { value: e }, t);
}
function Vm() {
  const t = $m ? nh.useContext(Wm) : Gm;
  if (!t)
    throw new Error(cA);
  return t;
}
var ac = { exports: {} }, $u = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d;
function fA() {
  if (_d) return $u;
  _d = 1;
  var t = sh;
  function e(l, f) {
    return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, s = t.useEffect, i = t.useLayoutEffect, a = t.useDebugValue;
  function o(l, f) {
    var g = f(), h = n({ inst: { value: g, getSnapshot: f } }), u = h[0].inst, b = h[1];
    return i(function() {
      u.value = g, u.getSnapshot = f, c(u) && b({ inst: u });
    }, [l, g, f]), s(function() {
      return c(u) && b({ inst: u }), l(function() {
        c(u) && b({ inst: u });
      });
    }, [l]), a(g), g;
  }
  function c(l) {
    var f = l.getSnapshot;
    l = l.value;
    try {
      var g = f();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function m(l, f) {
    return f();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : o;
  return $u.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : d, $u;
}
var Wu = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xd;
function hA() {
  return xd || (xd = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = sh, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(v) {
      {
        for (var E = arguments.length, x = new Array(E > 1 ? E - 1 : 0), C = 1; C < E; C++)
          x[C - 1] = arguments[C];
        n("error", v, x);
      }
    }
    function n(v, E, x) {
      {
        var C = e.ReactDebugCurrentFrame, T = C.getStackAddendum();
        T !== "" && (E += "%s", x = x.concat([T]));
        var A = x.map(function(S) {
          return String(S);
        });
        A.unshift("Warning: " + E), Function.prototype.apply.call(console[v], console, A);
      }
    }
    function s(v, E) {
      return v === E && (v !== 0 || 1 / v === 1 / E) || v !== v && E !== E;
    }
    var i = typeof Object.is == "function" ? Object.is : s, a = t.useState, o = t.useEffect, c = t.useLayoutEffect, m = t.useDebugValue, d = !1, l = !1;
    function f(v, E, x) {
      d || t.startTransition !== void 0 && (d = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var C = E();
      if (!l) {
        var T = E();
        i(C, T) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var A = a({
        inst: {
          value: C,
          getSnapshot: E
        }
      }), S = A[0].inst, I = A[1];
      return c(function() {
        S.value = C, S.getSnapshot = E, g(S) && I({
          inst: S
        });
      }, [v, C, E]), o(function() {
        g(S) && I({
          inst: S
        });
        var P = function() {
          g(S) && I({
            inst: S
          });
        };
        return v(P);
      }, [v]), m(C), C;
    }
    function g(v) {
      var E = v.getSnapshot, x = v.value;
      try {
        var C = E();
        return !i(x, C);
      } catch {
        return !0;
      }
    }
    function h(v, E, x) {
      return E();
    }
    var u = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", b = !u, p = b ? h : f, y = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : p;
    Wu.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Wu;
}
var Sd;
function dA() {
  return Sd || (Sd = 1, process.env.NODE_ENV === "production" ? ac.exports = fA() : ac.exports = hA()), ac.exports;
}
var pA = dA();
const mA = (t = void 0) => {
  const e = Vm(), { select: r, get: n } = e.state, s = Ws((o) => {
    const { unsubscribe: c } = t ? r(t).subscribe(o) : r().subscribe(o);
    return () => c;
  }, [t]), i = Ws(() => {
    const o = n();
    return t ? o[t] : o;
  }, [t]), a = () => i();
  return pA.useSyncExternalStore(s, i, a);
}, xh = () => {
  const t = Vm(), { connectWallet: e, disconnectWallet: r } = t, s = mA("wallets")[0] || null, [i, a] = Vs(!1), o = Ws(async (f) => {
    a(!0);
    const g = await e(f);
    return a(!1), g;
  }, []), c = Ws(async ({ label: f }) => {
    a(!0);
    const g = await r({ label: f });
    return a(!1), g;
  }, []), m = t.state.actions.updateBalances, d = t.state.actions.setWalletModules, l = t.state.actions.setPrimaryWallet;
  return [
    { wallet: s, connecting: i },
    o,
    c,
    m,
    d,
    l
  ];
}, gA = "6.13.4";
function yA(t, e, r) {
  const n = e.split("|").map((i) => i.trim());
  for (let i = 0; i < n.length; i++)
    switch (e) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof t === e)
          return;
    }
  const s = new Error(`invalid value for type ${e}`);
  throw s.code = "INVALID_ARGUMENT", s.argument = `value.${r}`, s.value = t, s;
}
async function Xt(t) {
  const e = Object.keys(t);
  return (await Promise.all(e.map((n) => Promise.resolve(t[n])))).reduce((n, s, i) => (n[e[i]] = s, n), {});
}
function me(t, e, r) {
  for (let n in e) {
    let s = e[n];
    const i = r ? r[n] : null;
    i && yA(s, i, n), Object.defineProperty(t, n, { enumerable: !0, value: s, writable: !1 });
  }
}
function bo(t) {
  if (t == null)
    return "null";
  if (Array.isArray(t))
    return "[ " + t.map(bo).join(", ") + " ]";
  if (t instanceof Uint8Array) {
    const e = "0123456789abcdef";
    let r = "0x";
    for (let n = 0; n < t.length; n++)
      r += e[t[n] >> 4], r += e[t[n] & 15];
    return r;
  }
  if (typeof t == "object" && typeof t.toJSON == "function")
    return bo(t.toJSON());
  switch (typeof t) {
    case "boolean":
    case "symbol":
      return t.toString();
    case "bigint":
      return BigInt(t).toString();
    case "number":
      return t.toString();
    case "string":
      return JSON.stringify(t);
    case "object": {
      const e = Object.keys(t);
      return e.sort(), "{ " + e.map((r) => `${bo(r)}: ${bo(t[r])}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function Bt(t, e) {
  return t && t.code === e;
}
function Sh(t) {
  return Bt(t, "CALL_EXCEPTION");
}
function ot(t, e, r) {
  let n = t;
  {
    const i = [];
    if (r) {
      if ("message" in r || "code" in r || "name" in r)
        throw new Error(`value will overwrite populated values: ${bo(r)}`);
      for (const a in r) {
        if (a === "shortMessage")
          continue;
        const o = r[a];
        i.push(a + "=" + bo(o));
      }
    }
    i.push(`code=${e}`), i.push(`version=${gA}`), i.length && (t += " (" + i.join(", ") + ")");
  }
  let s;
  switch (e) {
    case "INVALID_ARGUMENT":
      s = new TypeError(t);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      s = new RangeError(t);
      break;
    default:
      s = new Error(t);
  }
  return me(s, { code: e }), r && Object.assign(s, r), s.shortMessage == null && me(s, { shortMessage: n }), s;
}
function Q(t, e, r, n) {
  if (!t)
    throw ot(e, r, n);
}
function L(t, e, r, n) {
  Q(t, e, "INVALID_ARGUMENT", { argument: r, value: n });
}
function zm(t, e, r) {
  r == null && (r = ""), r && (r = ": " + r), Q(t >= e, "missing arguemnt" + r, "MISSING_ARGUMENT", {
    count: t,
    expectedCount: e
  }), Q(t <= e, "too many arguments" + r, "UNEXPECTED_ARGUMENT", {
    count: t,
    expectedCount: e
  });
}
["NFD", "NFC", "NFKD", "NFKC"].reduce((t, e) => {
  try {
    if ("test".normalize(e) !== "test")
      throw new Error("bad");
    if (e === "NFD" && "é".normalize("NFD") !== "é")
      throw new Error("broken");
    t.push(e);
  } catch {
  }
  return t;
}, []);
function Yl(t, e, r) {
  if (r == null && (r = ""), t !== e) {
    let n = r, s = "new";
    r && (n += ".", s += " " + r), Q(!1, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
      operation: s
    });
  }
}
function Qm(t, e, r) {
  if (t instanceof Uint8Array)
    return r ? new Uint8Array(t) : t;
  if (typeof t == "string" && t.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
    const n = new Uint8Array((t.length - 2) / 2);
    let s = 2;
    for (let i = 0; i < n.length; i++)
      n[i] = parseInt(t.substring(s, s + 2), 16), s += 2;
    return n;
  }
  L(!1, "invalid BytesLike value", e || "value", t);
}
function De(t, e) {
  return Qm(t, e, !1);
}
function Yt(t, e) {
  return Qm(t, e, !0);
}
function qe(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || typeof e == "number" && t.length !== 2 + 2 * e || e === !0 && t.length % 2 !== 0);
}
function Oh(t) {
  return qe(t, !0) || t instanceof Uint8Array;
}
const Od = "0123456789abcdef";
function oe(t) {
  const e = De(t);
  let r = "0x";
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    r += Od[(s & 240) >> 4] + Od[s & 15];
  }
  return r;
}
function pt(t) {
  return "0x" + t.map((e) => oe(e).substring(2)).join("");
}
function Io(t) {
  return qe(t, !0) ? (t.length - 2) / 2 : De(t).length;
}
function at(t, e, r) {
  const n = De(t);
  return r != null && r > n.length && Q(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
    buffer: n,
    length: n.length,
    offset: r
  }), oe(n.slice(e ?? 0, r ?? n.length));
}
function qm(t, e, r) {
  const n = De(t);
  Q(e >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(n),
    length: e,
    offset: e + 1
  });
  const s = new Uint8Array(e);
  return s.fill(0), r ? s.set(n, e - n.length) : s.set(n, 0), oe(s);
}
function Gi(t, e) {
  return qm(t, e, !0);
}
function bA(t, e) {
  return qm(t, e, !1);
}
const fu = BigInt(0), Jr = BigInt(1), wo = 9007199254740991;
function Mc(t, e) {
  const r = hu(t, "value"), n = BigInt(we(e, "width"));
  if (Q(r >> n === fu, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: t
  }), r >> n - Jr) {
    const s = (Jr << n) - Jr;
    return -((~r & s) + Jr);
  }
  return r;
}
function Jm(t, e) {
  let r = le(t, "value");
  const n = BigInt(we(e, "width")), s = Jr << n - Jr;
  if (r < fu) {
    r = -r, Q(r <= s, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: t
    });
    const i = (Jr << n) - Jr;
    return (~r & i) + Jr;
  } else
    Q(r < s, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: t
    });
  return r;
}
function yi(t, e) {
  const r = hu(t, "value"), n = BigInt(we(e, "bits"));
  return r & (Jr << n) - Jr;
}
function le(t, e) {
  switch (typeof t) {
    case "bigint":
      return t;
    case "number":
      return L(Number.isInteger(t), "underflow", e || "value", t), L(t >= -wo && t <= wo, "overflow", e || "value", t), BigInt(t);
    case "string":
      try {
        if (t === "")
          throw new Error("empty string");
        return t[0] === "-" && t[1] !== "-" ? -BigInt(t.substring(1)) : BigInt(t);
      } catch (r) {
        L(!1, `invalid BigNumberish string: ${r.message}`, e || "value", t);
      }
  }
  L(!1, "invalid BigNumberish value", e || "value", t);
}
function hu(t, e) {
  const r = le(t, e);
  return Q(r >= fu, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value: t
  }), r;
}
const Id = "0123456789abcdef";
function du(t) {
  if (t instanceof Uint8Array) {
    let e = "0x0";
    for (const r of t)
      e += Id[r >> 4], e += Id[r & 15];
    return BigInt(e);
  }
  return le(t);
}
function we(t, e) {
  switch (typeof t) {
    case "bigint":
      return L(t >= -wo && t <= wo, "overflow", e || "value", t), Number(t);
    case "number":
      return L(Number.isInteger(t), "underflow", e || "value", t), L(t >= -wo && t <= wo, "overflow", e || "value", t), t;
    case "string":
      try {
        if (t === "")
          throw new Error("empty string");
        return we(BigInt(t), e);
      } catch (r) {
        L(!1, `invalid numeric string: ${r.message}`, e || "value", t);
      }
  }
  L(!1, "invalid numeric value", e || "value", t);
}
function wA(t) {
  return we(du(t));
}
function Qs(t, e) {
  let n = hu(t, "value").toString(16);
  if (e == null)
    n.length % 2 && (n = "0" + n);
  else {
    const s = we(e, "width");
    for (Q(s * 2 >= n.length, `value exceeds width (${s} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: t
    }); n.length < s * 2; )
      n = "0" + n;
  }
  return "0x" + n;
}
function er(t) {
  const e = hu(t, "value");
  if (e === fu)
    return new Uint8Array([]);
  let r = e.toString(16);
  r.length % 2 && (r = "0" + r);
  const n = new Uint8Array(r.length / 2);
  for (let s = 0; s < n.length; s++) {
    const i = s * 2;
    n[s] = parseInt(r.substring(i, i + 2), 16);
  }
  return n;
}
function vo(t) {
  let e = oe(Oh(t) ? t : er(t)).substring(2);
  for (; e.startsWith("0"); )
    e = e.substring(1);
  return e === "" && (e = "0"), "0x" + e;
}
const Td = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
BigInt(0);
const Cd = BigInt(58);
function vA(t) {
  const e = De(t);
  let r = du(e), n = "";
  for (; r; )
    n = Td[Number(r % Cd)] + n, r /= Cd;
  for (let s = 0; s < e.length && !e[s]; s++)
    n = Td[0] + n;
  return n;
}
function AA(t) {
  t = atob(t);
  const e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return De(e);
}
function EA(t) {
  const e = De(t);
  let r = "";
  for (let n = 0; n < e.length; n++)
    r += String.fromCharCode(e[n]);
  return btoa(r);
}
var Ro;
class Km {
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(e, r, n) {
    /**
     *  The event filter.
     */
    F(this, "filter");
    /**
     *  The **EventEmitterable**.
     */
    F(this, "emitter");
    $(this, Ro);
    k(this, Ro, r), me(this, { emitter: e, filter: n });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    O(this, Ro) != null && await this.emitter.off(this.filter, O(this, Ro));
  }
}
Ro = new WeakMap();
function _A(t, e, r, n, s) {
  L(!1, `invalid codepoint at offset ${e}; ${t}`, "bytes", r);
}
function Zm(t, e, r, n, s) {
  if (t === "BAD_PREFIX" || t === "UNEXPECTED_CONTINUE") {
    let i = 0;
    for (let a = e + 1; a < r.length && r[a] >> 6 === 2; a++)
      i++;
    return i;
  }
  return t === "OVERRUN" ? r.length - e - 1 : 0;
}
function xA(t, e, r, n, s) {
  return t === "OVERLONG" ? (L(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s), n.push(s), 0) : (n.push(65533), Zm(t, e, r));
}
const SA = Object.freeze({
  error: _A,
  ignore: Zm,
  replace: xA
});
function OA(t, e) {
  e == null && (e = SA.error);
  const r = De(t, "bytes"), n = [];
  let s = 0;
  for (; s < r.length; ) {
    const i = r[s++];
    if (!(i >> 7)) {
      n.push(i);
      continue;
    }
    let a = null, o = null;
    if ((i & 224) === 192)
      a = 1, o = 127;
    else if ((i & 240) === 224)
      a = 2, o = 2047;
    else if ((i & 248) === 240)
      a = 3, o = 65535;
    else {
      (i & 192) === 128 ? s += e("UNEXPECTED_CONTINUE", s - 1, r, n) : s += e("BAD_PREFIX", s - 1, r, n);
      continue;
    }
    if (s - 1 + a >= r.length) {
      s += e("OVERRUN", s - 1, r, n);
      continue;
    }
    let c = i & (1 << 8 - a - 1) - 1;
    for (let m = 0; m < a; m++) {
      let d = r[s];
      if ((d & 192) != 128) {
        s += e("MISSING_CONTINUE", s, r, n), c = null;
        break;
      }
      c = c << 6 | d & 63, s++;
    }
    if (c !== null) {
      if (c > 1114111) {
        s += e("OUT_OF_RANGE", s - 1 - a, r, n, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        s += e("UTF16_SURROGATE", s - 1 - a, r, n, c);
        continue;
      }
      if (c <= o) {
        s += e("OVERLONG", s - 1 - a, r, n, c);
        continue;
      }
      n.push(c);
    }
  }
  return n;
}
function Xn(t, e) {
  L(typeof t == "string", "invalid string value", "str", t);
  let r = [];
  for (let n = 0; n < t.length; n++) {
    const s = t.charCodeAt(n);
    if (s < 128)
      r.push(s);
    else if (s < 2048)
      r.push(s >> 6 | 192), r.push(s & 63 | 128);
    else if ((s & 64512) == 55296) {
      n++;
      const i = t.charCodeAt(n);
      L(n < t.length && (i & 64512) === 56320, "invalid surrogate pair", "str", t);
      const a = 65536 + ((s & 1023) << 10) + (i & 1023);
      r.push(a >> 18 | 240), r.push(a >> 12 & 63 | 128), r.push(a >> 6 & 63 | 128), r.push(a & 63 | 128);
    } else
      r.push(s >> 12 | 224), r.push(s >> 6 & 63 | 128), r.push(s & 63 | 128);
  }
  return new Uint8Array(r);
}
function IA(t) {
  return t.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
}
function Dc(t, e) {
  return IA(OA(t, e));
}
function Xm(t) {
  async function e(r, n) {
    Q(n == null || !n.cancelled, "request cancelled before sending", "CANCELLED");
    const s = r.url.split(":")[0].toLowerCase();
    Q(s === "http" || s === "https", `unsupported protocol ${s}`, "UNSUPPORTED_OPERATION", {
      info: { protocol: s },
      operation: "request"
    }), Q(s === "https" || !r.credentials || r.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
      operation: "request"
    });
    let i = null;
    const a = new AbortController(), o = setTimeout(() => {
      i = ot("request timeout", "TIMEOUT"), a.abort();
    }, r.timeout);
    n && n.addListener(() => {
      i = ot("request cancelled", "CANCELLED"), a.abort();
    });
    const c = {
      method: r.method,
      headers: new Headers(Array.from(r)),
      body: r.body || void 0,
      signal: a.signal
    };
    let m;
    try {
      m = await fetch(r.url, c);
    } catch (g) {
      throw clearTimeout(o), i || g;
    }
    clearTimeout(o);
    const d = {};
    m.headers.forEach((g, h) => {
      d[h.toLowerCase()] = g;
    });
    const l = await m.arrayBuffer(), f = l == null ? null : new Uint8Array(l);
    return {
      statusCode: m.status,
      statusMessage: m.statusText,
      headers: d,
      body: f
    };
  }
  return e;
}
const TA = 12, CA = 250;
let Nd = Xm();
const NA = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), RA = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
let Vu = !1;
async function Ym(t, e) {
  try {
    const r = t.match(NA);
    if (!r)
      throw new Error("invalid data");
    return new Gs(200, "OK", {
      "content-type": r[1] || "text/plain"
    }, r[2] ? AA(r[3]) : kA(r[3]));
  } catch {
    return new Gs(599, "BAD REQUEST (invalid data: URI)", {}, null, new es(t));
  }
}
function eg(t) {
  async function e(r, n) {
    try {
      const s = r.match(RA);
      if (!s)
        throw new Error("invalid link");
      return new es(`${t}${s[2]}`);
    } catch {
      return new Gs(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new es(r));
    }
  }
  return e;
}
const lc = {
  data: Ym,
  ipfs: eg("https://gateway.ipfs.io/ipfs/")
}, tg = /* @__PURE__ */ new WeakMap();
var vi, xs;
class PA {
  constructor(e) {
    $(this, vi);
    $(this, xs);
    k(this, vi, []), k(this, xs, !1), tg.set(e, () => {
      if (!O(this, xs)) {
        k(this, xs, !0);
        for (const r of O(this, vi))
          setTimeout(() => {
            r();
          }, 0);
        k(this, vi, []);
      }
    });
  }
  addListener(e) {
    Q(!O(this, xs), "singal already cancelled", "UNSUPPORTED_OPERATION", {
      operation: "fetchCancelSignal.addCancelListener"
    }), O(this, vi).push(e);
  }
  get cancelled() {
    return O(this, xs);
  }
  checkSignal() {
    Q(!this.cancelled, "cancelled", "CANCELLED", {});
  }
}
vi = new WeakMap(), xs = new WeakMap();
function cc(t) {
  if (t == null)
    throw new Error("missing signal; should not happen");
  return t.checkSignal(), t;
}
var Po, ko, Wr, Ln, Bo, Mo, Ot, Ar, Un, Ai, Ei, _i, cn, Vr, Ss, xi, gl;
const qc = class qc {
  /**
   *  Create a new FetchRequest instance with default values.
   *
   *  Once created, each property may be set before issuing a
   *  ``.send()`` to make the request.
   */
  constructor(e) {
    $(this, xi);
    $(this, Po);
    $(this, ko);
    $(this, Wr);
    $(this, Ln);
    $(this, Bo);
    $(this, Mo);
    $(this, Ot);
    $(this, Ar);
    $(this, Un);
    // Hooks
    $(this, Ai);
    $(this, Ei);
    $(this, _i);
    $(this, cn);
    $(this, Vr);
    $(this, Ss);
    k(this, Mo, String(e)), k(this, Po, !1), k(this, ko, !0), k(this, Wr, {}), k(this, Ln, ""), k(this, Bo, 3e5), k(this, Vr, {
      slotInterval: CA,
      maxAttempts: TA
    }), k(this, Ss, null);
  }
  /**
   *  The fetch URL to request.
   */
  get url() {
    return O(this, Mo);
  }
  set url(e) {
    k(this, Mo, String(e));
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
    return O(this, Ot) == null ? null : new Uint8Array(O(this, Ot));
  }
  set body(e) {
    if (e == null)
      k(this, Ot, void 0), k(this, Ar, void 0);
    else if (typeof e == "string")
      k(this, Ot, Xn(e)), k(this, Ar, "text/plain");
    else if (e instanceof Uint8Array)
      k(this, Ot, e), k(this, Ar, "application/octet-stream");
    else if (typeof e == "object")
      k(this, Ot, Xn(JSON.stringify(e))), k(this, Ar, "application/json");
    else
      throw new Error("invalid body");
  }
  /**
   *  Returns true if the request has a body.
   */
  hasBody() {
    return O(this, Ot) != null;
  }
  /**
   *  The HTTP method to use when requesting the URI. If no method
   *  has been explicitly set, then ``GET`` is used if the body is
   *  null and ``POST`` otherwise.
   */
  get method() {
    return O(this, Ln) ? O(this, Ln) : this.hasBody() ? "POST" : "GET";
  }
  set method(e) {
    e == null && (e = ""), k(this, Ln, String(e).toUpperCase());
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
    const e = Object.assign({}, O(this, Wr));
    return O(this, Un) && (e.authorization = `Basic ${EA(Xn(O(this, Un)))}`), this.allowGzip && (e["accept-encoding"] = "gzip"), e["content-type"] == null && O(this, Ar) && (e["content-type"] = O(this, Ar)), this.body && (e["content-length"] = String(this.body.length)), e;
  }
  /**
   *  Get the header for %%key%%, ignoring case.
   */
  getHeader(e) {
    return this.headers[e.toLowerCase()];
  }
  /**
   *  Set the header for %%key%% to %%value%%. All values are coerced
   *  to a string.
   */
  setHeader(e, r) {
    O(this, Wr)[String(e).toLowerCase()] = String(r);
  }
  /**
   *  Clear all headers, resetting all intrinsic headers.
   */
  clearHeaders() {
    k(this, Wr, {});
  }
  [Symbol.iterator]() {
    const e = this.headers, r = Object.keys(e);
    let n = 0;
    return {
      next: () => {
        if (n < r.length) {
          const s = r[n++];
          return {
            value: [s, e[s]],
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
    return O(this, Un) || null;
  }
  /**
   *  Sets an ``Authorization`` for %%username%% with %%password%%.
   */
  setCredentials(e, r) {
    L(!e.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), k(this, Un, `${e}:${r}`);
  }
  /**
   *  Enable and request gzip-encoded responses. The response will
   *  automatically be decompressed. //(default: true)//
   */
  get allowGzip() {
    return O(this, ko);
  }
  set allowGzip(e) {
    k(this, ko, !!e);
  }
  /**
   *  Allow ``Authentication`` credentials to be sent over insecure
   *  channels. //(default: false)//
   */
  get allowInsecureAuthentication() {
    return !!O(this, Po);
  }
  set allowInsecureAuthentication(e) {
    k(this, Po, !!e);
  }
  /**
   *  The timeout (in milliseconds) to wait for a complete response.
   *  //(default: 5 minutes)//
   */
  get timeout() {
    return O(this, Bo);
  }
  set timeout(e) {
    L(e >= 0, "timeout must be non-zero", "timeout", e), k(this, Bo, e);
  }
  /**
   *  This function is called prior to each request, for example
   *  during a redirection or retry in case of server throttling.
   *
   *  This offers an opportunity to populate headers or update
   *  content before sending a request.
   */
  get preflightFunc() {
    return O(this, Ai) || null;
  }
  set preflightFunc(e) {
    k(this, Ai, e);
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
    return O(this, Ei) || null;
  }
  set processFunc(e) {
    k(this, Ei, e);
  }
  /**
   *  This function is called on each retry attempt.
   */
  get retryFunc() {
    return O(this, _i) || null;
  }
  set retryFunc(e) {
    k(this, _i, e);
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
    return O(this, Ss) || Nd;
  }
  set getUrlFunc(e) {
    k(this, Ss, e);
  }
  toString() {
    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${O(this, Ot) ? oe(O(this, Ot)) : "null"}>`;
  }
  /**
   *  Update the throttle parameters used to determine maximum
   *  attempts and exponential-backoff properties.
   */
  setThrottleParams(e) {
    e.slotInterval != null && (O(this, Vr).slotInterval = e.slotInterval), e.maxAttempts != null && (O(this, Vr).maxAttempts = e.maxAttempts);
  }
  /**
   *  Resolves to the response by sending the request.
   */
  send() {
    return Q(O(this, cn) == null, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" }), k(this, cn, new PA(this)), K(this, xi, gl).call(this, 0, Rd() + this.timeout, 0, this, new Gs(0, "", {}, null, this));
  }
  /**
   *  Cancels the inflight response, causing a ``CANCELLED``
   *  error to be rejected from the [[send]].
   */
  cancel() {
    Q(O(this, cn) != null, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
    const e = tg.get(this);
    if (!e)
      throw new Error("missing signal; should not happen");
    e();
  }
  /**
   *  Returns a new [[FetchRequest]] that represents the redirection
   *  to %%location%%.
   */
  redirect(e) {
    const r = this.url.split(":")[0].toLowerCase(), n = e.split(":")[0].toLowerCase();
    Q(this.method === "GET" && (r !== "https" || n !== "http") && e.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
      operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(e)})`
    });
    const s = new qc(e);
    return s.method = "GET", s.allowGzip = this.allowGzip, s.timeout = this.timeout, k(s, Wr, Object.assign({}, O(this, Wr))), O(this, Ot) && k(s, Ot, new Uint8Array(O(this, Ot))), k(s, Ar, O(this, Ar)), s;
  }
  /**
   *  Create a new copy of this request.
   */
  clone() {
    const e = new qc(this.url);
    return k(e, Ln, O(this, Ln)), O(this, Ot) && k(e, Ot, O(this, Ot)), k(e, Ar, O(this, Ar)), k(e, Wr, Object.assign({}, O(this, Wr))), k(e, Un, O(this, Un)), this.allowGzip && (e.allowGzip = !0), e.timeout = this.timeout, this.allowInsecureAuthentication && (e.allowInsecureAuthentication = !0), k(e, Ai, O(this, Ai)), k(e, Ei, O(this, Ei)), k(e, _i, O(this, _i)), k(e, Vr, Object.assign({}, O(this, Vr))), k(e, Ss, O(this, Ss)), e;
  }
  /**
   *  Locks all static configuration for gateways and FetchGetUrlFunc
   *  registration.
   */
  static lockConfig() {
    Vu = !0;
  }
  /**
   *  Get the current Gateway function for %%scheme%%.
   */
  static getGateway(e) {
    return lc[e.toLowerCase()] || null;
  }
  /**
   *  Use the %%func%% when fetching URIs using %%scheme%%.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGateway(e, r) {
    if (e = e.toLowerCase(), e === "http" || e === "https")
      throw new Error(`cannot intercept ${e}; use registerGetUrl`);
    if (Vu)
      throw new Error("gateways locked");
    lc[e] = r;
  }
  /**
   *  Use %%getUrl%% when fetching URIs over HTTP and HTTPS requests.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGetUrl(e) {
    if (Vu)
      throw new Error("gateways locked");
    Nd = e;
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
  static createGetUrlFunc(e) {
    return Xm();
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
    return Ym;
  }
  /**
   *  Creates a function that will fetch IPFS (unvalidated) from
   *  a custom gateway baseUrl.
   *
   *  The default IPFS gateway used internally is
   *  ``"https:/\/gateway.ipfs.io/ipfs/"``.
   */
  static createIpfsGatewayFunc(e) {
    return eg(e);
  }
};
Po = new WeakMap(), ko = new WeakMap(), Wr = new WeakMap(), Ln = new WeakMap(), Bo = new WeakMap(), Mo = new WeakMap(), Ot = new WeakMap(), Ar = new WeakMap(), Un = new WeakMap(), Ai = new WeakMap(), Ei = new WeakMap(), _i = new WeakMap(), cn = new WeakMap(), Vr = new WeakMap(), Ss = new WeakMap(), xi = new WeakSet(), gl = async function(e, r, n, s, i) {
  var d, l, f;
  if (e >= O(this, Vr).maxAttempts)
    return i.makeServerError("exceeded maximum retry limit");
  Q(Rd() <= r, "timeout", "TIMEOUT", {
    operation: "request.send",
    reason: "timeout",
    request: s
  }), n > 0 && await BA(n);
  let a = this.clone();
  const o = (a.url.split(":")[0] || "").toLowerCase();
  if (o in lc) {
    const g = await lc[o](a.url, cc(O(s, cn)));
    if (g instanceof Gs) {
      let h = g;
      if (this.processFunc) {
        cc(O(s, cn));
        try {
          h = await this.processFunc(a, h);
        } catch (u) {
          (u.throttle == null || typeof u.stall != "number") && h.makeServerError("error in post-processing function", u).assertOk();
        }
      }
      return h;
    }
    a = g;
  }
  this.preflightFunc && (a = await this.preflightFunc(a));
  const c = await this.getUrlFunc(a, cc(O(s, cn)));
  let m = new Gs(c.statusCode, c.statusMessage, c.headers, c.body, s);
  if (m.statusCode === 301 || m.statusCode === 302) {
    try {
      const g = m.headers.location || "";
      return K(d = a.redirect(g), xi, gl).call(d, e + 1, r, 0, s, m);
    } catch {
    }
    return m;
  } else if (m.statusCode === 429 && (this.retryFunc == null || await this.retryFunc(a, m, e))) {
    const g = m.headers["retry-after"];
    let h = O(this, Vr).slotInterval * Math.trunc(Math.random() * Math.pow(2, e));
    return typeof g == "string" && g.match(/^[1-9][0-9]*$/) && (h = parseInt(g)), K(l = a.clone(), xi, gl).call(l, e + 1, r, h, s, m);
  }
  if (this.processFunc) {
    cc(O(s, cn));
    try {
      m = await this.processFunc(a, m);
    } catch (g) {
      (g.throttle == null || typeof g.stall != "number") && m.makeServerError("error in post-processing function", g).assertOk();
      let h = O(this, Vr).slotInterval * Math.trunc(Math.random() * Math.pow(2, e));
      return g.stall >= 0 && (h = g.stall), K(f = a.clone(), xi, gl).call(f, e + 1, r, h, s, m);
    }
  }
  return m;
};
let es = qc;
var Ul, Fl, jl, Er, Do, Si;
const Fh = class Fh {
  constructor(e, r, n, s, i) {
    $(this, Ul);
    $(this, Fl);
    $(this, jl);
    $(this, Er);
    $(this, Do);
    $(this, Si);
    k(this, Ul, e), k(this, Fl, r), k(this, jl, Object.keys(n).reduce((a, o) => (a[o.toLowerCase()] = String(n[o]), a), {})), k(this, Er, s == null ? null : new Uint8Array(s)), k(this, Do, i || null), k(this, Si, { message: "" });
  }
  toString() {
    return `<FetchResponse status=${this.statusCode} body=${O(this, Er) ? oe(O(this, Er)) : "null"}>`;
  }
  /**
   *  The response status code.
   */
  get statusCode() {
    return O(this, Ul);
  }
  /**
   *  The response status message.
   */
  get statusMessage() {
    return O(this, Fl);
  }
  /**
   *  The response headers. All keys are lower-case.
   */
  get headers() {
    return Object.assign({}, O(this, jl));
  }
  /**
   *  The response body, or ``null`` if there was no body.
   */
  get body() {
    return O(this, Er) == null ? null : new Uint8Array(O(this, Er));
  }
  /**
   *  The response body as a UTF-8 encoded string, or the empty
   *  string (i.e. ``""``) if there was no body.
   *
   *  An error is thrown if the body is invalid UTF-8 data.
   */
  get bodyText() {
    try {
      return O(this, Er) == null ? "" : Dc(O(this, Er));
    } catch {
      Q(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
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
      Q(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
        operation: "bodyJson",
        info: { response: this }
      });
    }
  }
  [Symbol.iterator]() {
    const e = this.headers, r = Object.keys(e);
    let n = 0;
    return {
      next: () => {
        if (n < r.length) {
          const s = r[n++];
          return {
            value: [s, e[s]],
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
  makeServerError(e, r) {
    let n;
    e ? n = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${e})` : (e = `${this.statusCode} ${this.statusMessage}`, n = `CLIENT ESCALATED SERVER ERROR (${e})`);
    const s = new Fh(599, n, this.headers, this.body, O(this, Do) || void 0);
    return k(s, Si, { message: e, error: r }), s;
  }
  /**
   *  If called within a [request.processFunc](FetchRequest-processFunc)
   *  call, causes the request to retry as if throttled for %%stall%%
   *  milliseconds.
   */
  throwThrottleError(e, r) {
    r == null ? r = -1 : L(Number.isInteger(r) && r >= 0, "invalid stall timeout", "stall", r);
    const n = new Error(e || "throttling requests");
    throw me(n, { stall: r, throttle: !0 }), n;
  }
  /**
   *  Get the header value for %%key%%, ignoring case.
   */
  getHeader(e) {
    return this.headers[e.toLowerCase()];
  }
  /**
   *  Returns true if the response has a body.
   */
  hasBody() {
    return O(this, Er) != null;
  }
  /**
   *  The request made for this response.
   */
  get request() {
    return O(this, Do);
  }
  /**
   *  Returns true if this response was a success statusCode.
   */
  ok() {
    return O(this, Si).message === "" && this.statusCode >= 200 && this.statusCode < 300;
  }
  /**
   *  Throws a ``SERVER_ERROR`` if this response is not ok.
   */
  assertOk() {
    if (this.ok())
      return;
    let { message: e, error: r } = O(this, Si);
    e === "" && (e = `server response ${this.statusCode} ${this.statusMessage}`);
    let n = null;
    this.request && (n = this.request.url);
    let s = null;
    try {
      O(this, Er) && (s = Dc(O(this, Er)));
    } catch {
    }
    Q(!1, e, "SERVER_ERROR", {
      request: this.request || "unknown request",
      response: this,
      error: r,
      info: {
        requestUrl: n,
        responseBody: s,
        responseStatus: `${this.statusCode} ${this.statusMessage}`
      }
    });
  }
};
Ul = new WeakMap(), Fl = new WeakMap(), jl = new WeakMap(), Er = new WeakMap(), Do = new WeakMap(), Si = new WeakMap();
let Gs = Fh;
function Rd() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function kA(t) {
  return Xn(t.replace(/%([0-9a-f][0-9a-f])/gi, (e, r) => String.fromCharCode(parseInt(r, 16))));
}
function BA(t) {
  return new Promise((e) => setTimeout(e, t));
}
const MA = BigInt(-1), Hr = BigInt(0), Ao = BigInt(1), DA = BigInt(5), co = {};
let To = "0000";
for (; To.length < 80; )
  To += To;
function ci(t) {
  let e = To;
  for (; e.length < t; )
    e += e;
  return BigInt("1" + e.substring(0, t));
}
function ul(t, e, r) {
  const n = BigInt(e.width);
  if (e.signed) {
    const s = Ao << n - Ao;
    Q(r == null || t >= -s && t < s, "overflow", "NUMERIC_FAULT", {
      operation: r,
      fault: "overflow",
      value: t
    }), t > Hr ? t = Mc(yi(t, n), n) : t = -Mc(yi(-t, n), n);
  } else {
    const s = Ao << n;
    Q(r == null || t >= 0 && t < s, "overflow", "NUMERIC_FAULT", {
      operation: r,
      fault: "overflow",
      value: t
    }), t = (t % s + s) % s & s - Ao;
  }
  return t;
}
function zu(t) {
  typeof t == "number" && (t = `fixed128x${t}`);
  let e = !0, r = 128, n = 18;
  if (typeof t == "string") {
    if (t !== "fixed") if (t === "ufixed")
      e = !1;
    else {
      const i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
      L(i, "invalid fixed format", "format", t), e = i[1] !== "u", r = parseInt(i[2]), n = parseInt(i[3]);
    }
  } else if (t) {
    const i = t, a = (o, c, m) => i[o] == null ? m : (L(typeof i[o] === c, "invalid fixed format (" + o + " not " + c + ")", "format." + o, i[o]), i[o]);
    e = a("signed", "boolean", e), r = a("width", "number", r), n = a("decimals", "number", n);
  }
  L(r % 8 === 0, "invalid FixedNumber width (not byte aligned)", "format.width", r), L(n <= 80, "invalid FixedNumber decimals (too large)", "format.decimals", n);
  const s = (e ? "" : "u") + "fixed" + String(r) + "x" + String(n);
  return { signed: e, width: r, decimals: n, name: s };
}
function LA(t, e) {
  let r = "";
  t < Hr && (r = "-", t *= MA);
  let n = t.toString();
  if (e === 0)
    return r + n;
  for (; n.length <= e; )
    n = To + n;
  const s = n.length - e;
  for (n = n.substring(0, s) + "." + n.substring(s); n[0] === "0" && n[1] !== "."; )
    n = n.substring(1);
  for (; n[n.length - 1] === "0" && n[n.length - 2] !== "."; )
    n = n.substring(0, n.length - 1);
  return r + n;
}
var zr, We, Jt, je, ui, Pn, Of, If, Tf, Cf;
const _s = class _s {
  // Use this when changing this file to get some typing info,
  // but then switch to any to mask the internal type
  //constructor(guard: any, value: bigint, format: _FixedFormat) {
  /**
   *  @private
   */
  constructor(e, r, n) {
    $(this, je);
    /**
     *  The specific fixed-point arithmetic field for this value.
     */
    F(this, "format");
    $(this, zr);
    // The actual value (accounting for decimals)
    $(this, We);
    // A base-10 value to multiple values by to maintain the magnitude
    $(this, Jt);
    /**
     *  This is a property so console.log shows a human-meaningful value.
     *
     *  @private
     */
    F(this, "_value");
    Yl(e, co, "FixedNumber"), k(this, We, r), k(this, zr, n);
    const s = LA(r, n.decimals);
    me(this, { format: n.name, _value: s }), k(this, Jt, ci(n.decimals));
  }
  /**
   *  If true, negative values are permitted, otherwise only
   *  positive values and zero are allowed.
   */
  get signed() {
    return O(this, zr).signed;
  }
  /**
   *  The number of bits available to store the value.
   */
  get width() {
    return O(this, zr).width;
  }
  /**
   *  The number of decimal places in the fixed-point arithment field.
   */
  get decimals() {
    return O(this, zr).decimals;
  }
  /**
   *  The value as an integer, based on the smallest unit the
   *  [[decimals]] allow.
   */
  get value() {
    return O(this, We);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% added
   *  to %%other%%, ignoring overflow.
   */
  addUnsafe(e) {
    return K(this, je, Of).call(this, e);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% added
   *  to %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  add(e) {
    return K(this, je, Of).call(this, e, "add");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
   *  from %%this%%, ignoring overflow.
   */
  subUnsafe(e) {
    return K(this, je, If).call(this, e);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
   *  from %%this%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  sub(e) {
    return K(this, je, If).call(this, e, "sub");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%, ignoring overflow and underflow (precision loss).
   */
  mulUnsafe(e) {
    return K(this, je, Tf).call(this, e);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  mul(e) {
    return K(this, je, Tf).call(this, e, "mul");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs or if underflow (precision loss) occurs.
   */
  mulSignal(e) {
    K(this, je, ui).call(this, e);
    const r = O(this, We) * O(e, We);
    return Q(r % O(this, Jt) === Hr, "precision lost during signalling mul", "NUMERIC_FAULT", {
      operation: "mulSignal",
      fault: "underflow",
      value: this
    }), K(this, je, Pn).call(this, r / O(this, Jt), "mulSignal");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%, ignoring underflow (precision loss). A
   *  [[NumericFaultError]] is thrown if overflow occurs.
   */
  divUnsafe(e) {
    return K(this, je, Cf).call(this, e);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%, ignoring underflow (precision loss). A
   *  [[NumericFaultError]] is thrown if overflow occurs.
   */
  div(e) {
    return K(this, je, Cf).call(this, e, "div");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%. A [[NumericFaultError]] is thrown if underflow
   *  (precision loss) occurs.
   */
  divSignal(e) {
    Q(O(e, We) !== Hr, "division by zero", "NUMERIC_FAULT", {
      operation: "div",
      fault: "divide-by-zero",
      value: this
    }), K(this, je, ui).call(this, e);
    const r = O(this, We) * O(this, Jt);
    return Q(r % O(e, We) === Hr, "precision lost during signalling div", "NUMERIC_FAULT", {
      operation: "divSignal",
      fault: "underflow",
      value: this
    }), K(this, je, Pn).call(this, r / O(e, We), "divSignal");
  }
  /**
   *  Returns a comparison result between %%this%% and %%other%%.
   *
   *  This is suitable for use in sorting, where ``-1`` implies %%this%%
   *  is smaller, ``1`` implies %%this%% is larger and ``0`` implies
   *  both are equal.
   */
  cmp(e) {
    let r = this.value, n = e.value;
    const s = this.decimals - e.decimals;
    return s > 0 ? n *= ci(s) : s < 0 && (r *= ci(-s)), r < n ? -1 : r > n ? 1 : 0;
  }
  /**
   *  Returns true if %%other%% is equal to %%this%%.
   */
  eq(e) {
    return this.cmp(e) === 0;
  }
  /**
   *  Returns true if %%other%% is less than to %%this%%.
   */
  lt(e) {
    return this.cmp(e) < 0;
  }
  /**
   *  Returns true if %%other%% is less than or equal to %%this%%.
   */
  lte(e) {
    return this.cmp(e) <= 0;
  }
  /**
   *  Returns true if %%other%% is greater than to %%this%%.
   */
  gt(e) {
    return this.cmp(e) > 0;
  }
  /**
   *  Returns true if %%other%% is greater than or equal to %%this%%.
   */
  gte(e) {
    return this.cmp(e) >= 0;
  }
  /**
   *  Returns a new [[FixedNumber]] which is the largest **integer**
   *  that is less than or equal to %%this%%.
   *
   *  The decimal component of the result will always be ``0``.
   */
  floor() {
    let e = O(this, We);
    return O(this, We) < Hr && (e -= O(this, Jt) - Ao), e = O(this, We) / O(this, Jt) * O(this, Jt), K(this, je, Pn).call(this, e, "floor");
  }
  /**
   *  Returns a new [[FixedNumber]] which is the smallest **integer**
   *  that is greater than or equal to %%this%%.
   *
   *  The decimal component of the result will always be ``0``.
   */
  ceiling() {
    let e = O(this, We);
    return O(this, We) > Hr && (e += O(this, Jt) - Ao), e = O(this, We) / O(this, Jt) * O(this, Jt), K(this, je, Pn).call(this, e, "ceiling");
  }
  /**
   *  Returns a new [[FixedNumber]] with the decimal component
   *  rounded up on ties at %%decimals%% places.
   */
  round(e) {
    if (e == null && (e = 0), e >= this.decimals)
      return this;
    const r = this.decimals - e, n = DA * ci(r - 1);
    let s = this.value + n;
    const i = ci(r);
    return s = s / i * i, ul(s, O(this, zr), "round"), new _s(co, s, O(this, zr));
  }
  /**
   *  Returns true if %%this%% is equal to ``0``.
   */
  isZero() {
    return O(this, We) === Hr;
  }
  /**
   *  Returns true if %%this%% is less than ``0``.
   */
  isNegative() {
    return O(this, We) < Hr;
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
  toFormat(e) {
    return _s.fromString(this.toString(), e);
  }
  /**
   *  Creates a new [[FixedNumber]] for %%value%% divided by
   *  %%decimal%% places with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% (once adjusted
   *  for %%decimals%%) cannot fit in %%format%%, either due to overflow
   *  or underflow (precision loss).
   */
  static fromValue(e, r, n) {
    const s = r == null ? 0 : we(r), i = zu(n);
    let a = le(e, "value");
    const o = s - i.decimals;
    if (o > 0) {
      const c = ci(o);
      Q(a % c === Hr, "value loses precision for format", "NUMERIC_FAULT", {
        operation: "fromValue",
        fault: "underflow",
        value: e
      }), a /= c;
    } else o < 0 && (a *= ci(-o));
    return ul(a, i, "fromValue"), new _s(co, a, i);
  }
  /**
   *  Creates a new [[FixedNumber]] for %%value%% with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
   *  in %%format%%, either due to overflow or underflow (precision loss).
   */
  static fromString(e, r) {
    const n = e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
    L(n && n[2].length + n[3].length > 0, "invalid FixedNumber string value", "value", e);
    const s = zu(r);
    let i = n[2] || "0", a = n[3] || "";
    for (; a.length < s.decimals; )
      a += To;
    Q(a.substring(s.decimals).match(/^0*$/), "too many decimals for format", "NUMERIC_FAULT", {
      operation: "fromString",
      fault: "underflow",
      value: e
    }), a = a.substring(0, s.decimals);
    const o = BigInt(n[1] + i + a);
    return ul(o, s, "fromString"), new _s(co, o, s);
  }
  /**
   *  Creates a new [[FixedNumber]] with the big-endian representation
   *  %%value%% with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
   *  in %%format%% due to overflow.
   */
  static fromBytes(e, r) {
    let n = du(De(e, "value"));
    const s = zu(r);
    return s.signed && (n = Mc(n, s.width)), ul(n, s, "fromBytes"), new _s(co, n, s);
  }
};
zr = new WeakMap(), We = new WeakMap(), Jt = new WeakMap(), je = new WeakSet(), ui = function(e) {
  L(this.format === e.format, "incompatible format; use fixedNumber.toFormat", "other", e);
}, Pn = function(e, r) {
  return e = ul(e, O(this, zr), r), new _s(co, e, O(this, zr));
}, Of = function(e, r) {
  return K(this, je, ui).call(this, e), K(this, je, Pn).call(this, O(this, We) + O(e, We), r);
}, If = function(e, r) {
  return K(this, je, ui).call(this, e), K(this, je, Pn).call(this, O(this, We) - O(e, We), r);
}, Tf = function(e, r) {
  return K(this, je, ui).call(this, e), K(this, je, Pn).call(this, O(this, We) * O(e, We) / O(this, Jt), r);
}, Cf = function(e, r) {
  return Q(O(e, We) !== Hr, "division by zero", "NUMERIC_FAULT", {
    operation: "div",
    fault: "divide-by-zero",
    value: this
  }), K(this, je, ui).call(this, e), K(this, je, Pn).call(this, O(this, We) * O(this, Jt) / O(e, We), r);
};
let Lc = _s;
function UA(t) {
  let e = t.toString(16);
  for (; e.length < 2; )
    e = "0" + e;
  return "0x" + e;
}
function Pd(t, e, r) {
  let n = 0;
  for (let s = 0; s < r; s++)
    n = n * 256 + t[e + s];
  return n;
}
function kd(t, e, r, n) {
  const s = [];
  for (; r < e + 1 + n; ) {
    const i = rg(t, r);
    s.push(i.result), r += i.consumed, Q(r <= e + 1 + n, "child data too short", "BUFFER_OVERRUN", {
      buffer: t,
      length: n,
      offset: e
    });
  }
  return { consumed: 1 + n, result: s };
}
function rg(t, e) {
  Q(t.length !== 0, "data too short", "BUFFER_OVERRUN", {
    buffer: t,
    length: 0,
    offset: 1
  });
  const r = (n) => {
    Q(n <= t.length, "data short segment too short", "BUFFER_OVERRUN", {
      buffer: t,
      length: t.length,
      offset: n
    });
  };
  if (t[e] >= 248) {
    const n = t[e] - 247;
    r(e + 1 + n);
    const s = Pd(t, e + 1, n);
    return r(e + 1 + n + s), kd(t, e, e + 1 + n, n + s);
  } else if (t[e] >= 192) {
    const n = t[e] - 192;
    return r(e + 1 + n), kd(t, e, e + 1, n);
  } else if (t[e] >= 184) {
    const n = t[e] - 183;
    r(e + 1 + n);
    const s = Pd(t, e + 1, n);
    r(e + 1 + n + s);
    const i = oe(t.slice(e + 1 + n, e + 1 + n + s));
    return { consumed: 1 + n + s, result: i };
  } else if (t[e] >= 128) {
    const n = t[e] - 128;
    r(e + 1 + n);
    const s = oe(t.slice(e + 1, e + 1 + n));
    return { consumed: 1 + n, result: s };
  }
  return { consumed: 1, result: UA(t[e]) };
}
function pu(t) {
  const e = De(t, "data"), r = rg(e, 0);
  return L(r.consumed === e.length, "unexpected junk after rlp payload", "data", t), r.result;
}
function Bd(t) {
  const e = [];
  for (; t; )
    e.unshift(t & 255), t >>= 8;
  return e;
}
function ng(t) {
  if (Array.isArray(t)) {
    let n = [];
    if (t.forEach(function(i) {
      n = n.concat(ng(i));
    }), n.length <= 55)
      return n.unshift(192 + n.length), n;
    const s = Bd(n.length);
    return s.unshift(247 + s.length), s.concat(n);
  }
  const e = Array.prototype.slice.call(De(t, "object"));
  if (e.length === 1 && e[0] <= 127)
    return e;
  if (e.length <= 55)
    return e.unshift(128 + e.length), e;
  const r = Bd(e.length);
  return r.unshift(183 + r.length), r.concat(e);
}
const Md = "0123456789abcdef";
function $i(t) {
  let e = "0x";
  for (const r of ng(t))
    e += Md[r >> 4], e += Md[r & 15];
  return e;
}
const sg = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];
function FA(t, e) {
  let r = 18;
  if (typeof e == "string") {
    const n = sg.indexOf(e);
    L(n >= 0, "invalid unit", "unit", e), r = 3 * n;
  } else e != null && (r = we(e, "unit"));
  return Lc.fromValue(t, r, { decimals: r, width: 512 }).toString();
}
function jA(t, e) {
  L(typeof t == "string", "value must be a string", "value", t);
  let r = 18;
  if (typeof e == "string") {
    const n = sg.indexOf(e);
    L(n >= 0, "invalid unit", "unit", e), r = 3 * n;
  } else e != null && (r = we(e, "unit"));
  return Lc.fromString(t, { decimals: r, width: 512 }).value;
}
const tr = 32, Nf = new Uint8Array(tr), HA = ["then"], uc = {}, ig = /* @__PURE__ */ new WeakMap();
function di(t) {
  return ig.get(t);
}
function Dd(t, e) {
  ig.set(t, e);
}
function fl(t, e) {
  const r = new Error(`deferred error during ABI decoding triggered accessing ${t}`);
  throw r.error = e, r;
}
function Rf(t, e, r) {
  return t.indexOf(null) >= 0 ? e.map((n, s) => n instanceof Oa ? Rf(di(n), n, r) : n) : t.reduce((n, s, i) => {
    let a = e.getValue(s);
    return s in n || (r && a instanceof Oa && (a = Rf(di(a), a, r)), n[s] = a), n;
  }, {});
}
var Lo;
const Eo = class Eo extends Array {
  /**
   *  @private
   */
  constructor(...r) {
    const n = r[0];
    let s = r[1], i = (r[2] || []).slice(), a = !0;
    n !== uc && (s = r, i = [], a = !1);
    super(s.length);
    // No longer used; but cannot be removed as it will remove the
    // #private field from the .d.ts which may break backwards
    // compatibility
    $(this, Lo);
    s.forEach((m, d) => {
      this[d] = m;
    });
    const o = i.reduce((m, d) => (typeof d == "string" && m.set(d, (m.get(d) || 0) + 1), m), /* @__PURE__ */ new Map());
    if (Dd(this, Object.freeze(s.map((m, d) => {
      const l = i[d];
      return l != null && o.get(l) === 1 ? l : null;
    }))), k(this, Lo, []), O(this, Lo) == null && O(this, Lo), !a)
      return;
    Object.freeze(this);
    const c = new Proxy(this, {
      get: (m, d, l) => {
        if (typeof d == "string") {
          if (d.match(/^[0-9]+$/)) {
            const g = we(d, "%index");
            if (g < 0 || g >= this.length)
              throw new RangeError("out of result range");
            const h = m[g];
            return h instanceof Error && fl(`index ${g}`, h), h;
          }
          if (HA.indexOf(d) >= 0)
            return Reflect.get(m, d, l);
          const f = m[d];
          if (f instanceof Function)
            return function(...g) {
              return f.apply(this === l ? m : this, g);
            };
          if (!(d in m))
            return m.getValue.apply(this === l ? m : this, [d]);
        }
        return Reflect.get(m, d, l);
      }
    });
    return Dd(c, di(this)), c;
  }
  /**
   *  Returns the Result as a normal Array. If %%deep%%, any children
   *  which are Result objects are also converted to a normal Array.
   *
   *  This will throw if there are any outstanding deferred
   *  errors.
   */
  toArray(r) {
    const n = [];
    return this.forEach((s, i) => {
      s instanceof Error && fl(`index ${i}`, s), r && s instanceof Eo && (s = s.toArray(r)), n.push(s);
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
  toObject(r) {
    const n = di(this);
    return n.reduce((s, i, a) => (Q(i != null, `value at index ${a} unnamed`, "UNSUPPORTED_OPERATION", {
      operation: "toObject()"
    }), Rf(n, this, r)), {});
  }
  /**
   *  @_ignore
   */
  slice(r, n) {
    r == null && (r = 0), r < 0 && (r += this.length, r < 0 && (r = 0)), n == null && (n = this.length), n < 0 && (n += this.length, n < 0 && (n = 0)), n > this.length && (n = this.length);
    const s = di(this), i = [], a = [];
    for (let o = r; o < n; o++)
      i.push(this[o]), a.push(s[o]);
    return new Eo(uc, i, a);
  }
  /**
   *  @_ignore
   */
  filter(r, n) {
    const s = di(this), i = [], a = [];
    for (let o = 0; o < this.length; o++) {
      const c = this[o];
      c instanceof Error && fl(`index ${o}`, c), r.call(n, c, o, this) && (i.push(c), a.push(s[o]));
    }
    return new Eo(uc, i, a);
  }
  /**
   *  @_ignore
   */
  map(r, n) {
    const s = [];
    for (let i = 0; i < this.length; i++) {
      const a = this[i];
      a instanceof Error && fl(`index ${i}`, a), s.push(r.call(n, a, i, this));
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
  getValue(r) {
    const n = di(this).indexOf(r);
    if (n === -1)
      return;
    const s = this[n];
    return s instanceof Error && fl(`property ${JSON.stringify(r)}`, s.error), s;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(r, n) {
    return new Eo(uc, r, n);
  }
};
Lo = new WeakMap();
let Oa = Eo;
function Ld(t) {
  let e = er(t);
  return Q(e.length <= tr, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: e, length: tr, offset: e.length }), e.length !== tr && (e = Yt(pt([Nf.slice(e.length % tr), e]))), e;
}
class rs {
  constructor(e, r, n, s) {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    F(this, "name");
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    F(this, "type");
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    F(this, "localName");
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    F(this, "dynamic");
    me(this, { name: e, type: r, localName: n, dynamic: s }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(e, r) {
    L(!1, e, this.localName, r);
  }
}
var Fn, Oi, Uo, vc;
class Pf {
  constructor() {
    $(this, Uo);
    // An array of WordSize lengthed objects to concatenation
    $(this, Fn);
    $(this, Oi);
    k(this, Fn, []), k(this, Oi, 0);
  }
  get data() {
    return pt(O(this, Fn));
  }
  get length() {
    return O(this, Oi);
  }
  appendWriter(e) {
    return K(this, Uo, vc).call(this, Yt(e.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(e) {
    let r = Yt(e);
    const n = r.length % tr;
    return n && (r = Yt(pt([r, Nf.slice(n)]))), K(this, Uo, vc).call(this, r);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(e) {
    return K(this, Uo, vc).call(this, Ld(e));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const e = O(this, Fn).length;
    return O(this, Fn).push(Nf), k(this, Oi, O(this, Oi) + tr), (r) => {
      O(this, Fn)[e] = Ld(r);
    };
  }
}
Fn = new WeakMap(), Oi = new WeakMap(), Uo = new WeakSet(), vc = function(e) {
  return O(this, Fn).push(e), k(this, Oi, O(this, Oi) + e.length), e.length;
};
var or, _r, Ii, Ti, Os, qi, Bf, og;
const jh = class jh {
  constructor(e, r, n) {
    $(this, qi);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    F(this, "allowLoose");
    $(this, or);
    $(this, _r);
    $(this, Ii);
    $(this, Ti);
    $(this, Os);
    me(this, { allowLoose: !!r }), k(this, or, Yt(e)), k(this, Ii, 0), k(this, Ti, null), k(this, Os, n ?? 1024), k(this, _r, 0);
  }
  get data() {
    return oe(O(this, or));
  }
  get dataLength() {
    return O(this, or).length;
  }
  get consumed() {
    return O(this, _r);
  }
  get bytes() {
    return new Uint8Array(O(this, or));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(e) {
    const r = new jh(O(this, or).slice(O(this, _r) + e), this.allowLoose, O(this, Os));
    return k(r, Ti, this), r;
  }
  // Read bytes
  readBytes(e, r) {
    let n = K(this, qi, og).call(this, 0, e, !!r);
    return K(this, qi, Bf).call(this, e), k(this, _r, O(this, _r) + n.length), n.slice(0, e);
  }
  // Read a numeric values
  readValue() {
    return du(this.readBytes(tr));
  }
  readIndex() {
    return wA(this.readBytes(tr));
  }
};
or = new WeakMap(), _r = new WeakMap(), Ii = new WeakMap(), Ti = new WeakMap(), Os = new WeakMap(), qi = new WeakSet(), Bf = function(e) {
  var r;
  if (O(this, Ti))
    return K(r = O(this, Ti), qi, Bf).call(r, e);
  k(this, Ii, O(this, Ii) + e), Q(O(this, Os) < 1 || O(this, Ii) <= O(this, Os) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${O(this, Os)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
    buffer: Yt(O(this, or)),
    offset: O(this, _r),
    length: e,
    info: {
      bytesRead: O(this, Ii),
      dataLength: this.dataLength
    }
  });
}, og = function(e, r, n) {
  let s = Math.ceil(r / tr) * tr;
  return O(this, _r) + s > O(this, or).length && (this.allowLoose && n && O(this, _r) + r <= O(this, or).length ? s = r : Q(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
    buffer: Yt(O(this, or)),
    length: O(this, or).length,
    offset: O(this, _r) + s
  })), O(this, or).slice(O(this, _r), O(this, _r) + s);
};
let kf = jh;
const [GA, $A] = Ee.split([
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
].map((t) => BigInt(t))), ws = /* @__PURE__ */ new Uint32Array(80), vs = /* @__PURE__ */ new Uint32Array(80);
class WA extends Om {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: r, Bh: n, Bl: s, Ch: i, Cl: a, Dh: o, Dl: c, Eh: m, El: d, Fh: l, Fl: f, Gh: g, Gl: h, Hh: u, Hl: b } = this;
    return [e, r, n, s, i, a, o, c, m, d, l, f, g, h, u, b];
  }
  // prettier-ignore
  set(e, r, n, s, i, a, o, c, m, d, l, f, g, h, u, b) {
    this.Ah = e | 0, this.Al = r | 0, this.Bh = n | 0, this.Bl = s | 0, this.Ch = i | 0, this.Cl = a | 0, this.Dh = o | 0, this.Dl = c | 0, this.Eh = m | 0, this.El = d | 0, this.Fh = l | 0, this.Fl = f | 0, this.Gh = g | 0, this.Gl = h | 0, this.Hh = u | 0, this.Hl = b | 0;
  }
  process(e, r) {
    for (let v = 0; v < 16; v++, r += 4)
      ws[v] = e.getUint32(r), vs[v] = e.getUint32(r += 4);
    for (let v = 16; v < 80; v++) {
      const E = ws[v - 15] | 0, x = vs[v - 15] | 0, C = Ee.rotrSH(E, x, 1) ^ Ee.rotrSH(E, x, 8) ^ Ee.shrSH(E, x, 7), T = Ee.rotrSL(E, x, 1) ^ Ee.rotrSL(E, x, 8) ^ Ee.shrSL(E, x, 7), A = ws[v - 2] | 0, S = vs[v - 2] | 0, I = Ee.rotrSH(A, S, 19) ^ Ee.rotrBH(A, S, 61) ^ Ee.shrSH(A, S, 6), P = Ee.rotrSL(A, S, 19) ^ Ee.rotrBL(A, S, 61) ^ Ee.shrSL(A, S, 6), H = Ee.add4L(T, P, vs[v - 7], vs[v - 16]), W = Ee.add4H(H, C, I, ws[v - 7], ws[v - 16]);
      ws[v] = W | 0, vs[v] = H | 0;
    }
    let { Ah: n, Al: s, Bh: i, Bl: a, Ch: o, Cl: c, Dh: m, Dl: d, Eh: l, El: f, Fh: g, Fl: h, Gh: u, Gl: b, Hh: p, Hl: y } = this;
    for (let v = 0; v < 80; v++) {
      const E = Ee.rotrSH(l, f, 14) ^ Ee.rotrSH(l, f, 18) ^ Ee.rotrBH(l, f, 41), x = Ee.rotrSL(l, f, 14) ^ Ee.rotrSL(l, f, 18) ^ Ee.rotrBL(l, f, 41), C = l & g ^ ~l & u, T = f & h ^ ~f & b, A = Ee.add5L(y, x, T, $A[v], vs[v]), S = Ee.add5H(A, p, E, C, GA[v], ws[v]), I = A | 0, P = Ee.rotrSH(n, s, 28) ^ Ee.rotrBH(n, s, 34) ^ Ee.rotrBH(n, s, 39), H = Ee.rotrSL(n, s, 28) ^ Ee.rotrBL(n, s, 34) ^ Ee.rotrBL(n, s, 39), W = n & i ^ n & o ^ i & o, Z = s & a ^ s & c ^ a & c;
      p = u | 0, y = b | 0, u = g | 0, b = h | 0, g = l | 0, h = f | 0, { h: l, l: f } = Ee.add(m | 0, d | 0, S | 0, I | 0), m = o | 0, d = c | 0, o = i | 0, c = a | 0, i = n | 0, a = s | 0;
      const j = Ee.add3L(I, H, Z);
      n = Ee.add3H(j, S, P, W), s = j | 0;
    }
    ({ h: n, l: s } = Ee.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)), { h: i, l: a } = Ee.add(this.Bh | 0, this.Bl | 0, i | 0, a | 0), { h: o, l: c } = Ee.add(this.Ch | 0, this.Cl | 0, o | 0, c | 0), { h: m, l: d } = Ee.add(this.Dh | 0, this.Dl | 0, m | 0, d | 0), { h: l, l: f } = Ee.add(this.Eh | 0, this.El | 0, l | 0, f | 0), { h: g, l: h } = Ee.add(this.Fh | 0, this.Fl | 0, g | 0, h | 0), { h: u, l: b } = Ee.add(this.Gh | 0, this.Gl | 0, u | 0, b | 0), { h: p, l: y } = Ee.add(this.Hh | 0, this.Hl | 0, p | 0, y | 0), this.set(n, s, i, a, o, c, m, d, l, f, g, h, u, b, p, y);
  }
  roundClean() {
    ws.fill(0), vs.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const VA = /* @__PURE__ */ mh(() => new WA());
function zA() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
const Ud = zA();
Ud.crypto || Ud.msCrypto;
function QA(t) {
  switch (t) {
    case "sha256":
      return Im.create();
    case "sha512":
      return VA.create();
  }
  L(!1, "invalid hashing algorithm name", "algorithm", t);
}
let ag = !1;
const lg = function(t) {
  return Iw(t);
};
let cg = lg;
function gt(t) {
  const e = De(t, "data");
  return oe(cg(e));
}
gt._ = lg;
gt.lock = function() {
  ag = !0;
};
gt.register = function(t) {
  if (ag)
    throw new TypeError("keccak256 is locked");
  cg = t;
};
Object.freeze(gt);
const ug = function(t) {
  return QA("sha256").update(t).digest();
};
let fg = ug, hg = !1;
function Ba(t) {
  const e = De(t, "data");
  return oe(fg(e));
}
Ba._ = ug;
Ba.lock = function() {
  hg = !0;
};
Ba.register = function(t) {
  if (hg)
    throw new Error("sha256 is locked");
  fg = t;
};
Object.freeze(Ba);
Object.freeze(Ba);
const Cl = "0x0000000000000000000000000000000000000000", Fd = "0x0000000000000000000000000000000000000000000000000000000000000000", jd = BigInt(0), Hd = BigInt(1), Gd = BigInt(2), $d = BigInt(27), Wd = BigInt(28), fc = BigInt(35), uo = {};
function Vd(t) {
  return Gi(er(t), 32);
}
var Fo, jo, Ho, Ci;
const Gr = class Gr {
  /**
   *  @private
   */
  constructor(e, r, n, s) {
    $(this, Fo);
    $(this, jo);
    $(this, Ho);
    $(this, Ci);
    Yl(e, uo, "Signature"), k(this, Fo, r), k(this, jo, n), k(this, Ho, s), k(this, Ci, null);
  }
  /**
   *  The ``r`` value for a signautre.
   *
   *  This represents the ``x`` coordinate of a "reference" or
   *  challenge point, from which the ``y`` can be computed.
   */
  get r() {
    return O(this, Fo);
  }
  set r(e) {
    L(Io(e) === 32, "invalid r", "value", e), k(this, Fo, oe(e));
  }
  /**
   *  The ``s`` value for a signature.
   */
  get s() {
    return O(this, jo);
  }
  set s(e) {
    L(Io(e) === 32, "invalid s", "value", e);
    const r = oe(e);
    L(parseInt(r.substring(0, 3)) < 8, "non-canonical s", "value", r), k(this, jo, r);
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
    return O(this, Ho);
  }
  set v(e) {
    const r = we(e, "value");
    L(r === 27 || r === 28, "invalid v", "v", e), k(this, Ho, r);
  }
  /**
   *  The EIP-155 ``v`` for legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get networkV() {
    return O(this, Ci);
  }
  /**
   *  The chain ID for EIP-155 legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get legacyChainId() {
    const e = this.networkV;
    return e == null ? null : Gr.getChainId(e);
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
    const e = De(this.s);
    return this.yParity && (e[0] |= 128), oe(e);
  }
  /**
   *  The [[link-eip-2098]] compact representation.
   */
  get compactSerialized() {
    return pt([this.r, this.yParityAndS]);
  }
  /**
   *  The serialized representation.
   */
  get serialized() {
    return pt([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
  }
  /**
   *  Returns a new identical [[Signature]].
   */
  clone() {
    const e = new Gr(uo, this.r, this.s, this.v);
    return this.networkV && k(e, Ci, this.networkV), e;
  }
  /**
   *  Returns a representation that is compatible with ``JSON.stringify``.
   */
  toJSON() {
    const e = this.networkV;
    return {
      _type: "signature",
      networkV: e != null ? e.toString() : null,
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
  static getChainId(e) {
    const r = le(e, "v");
    return r == $d || r == Wd ? jd : (L(r >= fc, "invalid EIP-155 v", "v", e), (r - fc) / Gd);
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
  static getChainIdV(e, r) {
    return le(e) * Gd + BigInt(35 + r - 27);
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
  static getNormalizedV(e) {
    const r = le(e);
    return r === jd || r === $d ? 27 : r === Hd || r === Wd ? 28 : (L(r >= fc, "invalid v", "v", e), r & Hd ? 27 : 28);
  }
  /**
   *  Creates a new [[Signature]].
   *
   *  If no %%sig%% is provided, a new [[Signature]] is created
   *  with default values.
   *
   *  If %%sig%% is a string, it is parsed.
   */
  static from(e) {
    function r(m, d) {
      L(m, d, "signature", e);
    }
    if (e == null)
      return new Gr(uo, Fd, Fd, 27);
    if (typeof e == "string") {
      const m = De(e, "signature");
      if (m.length === 64) {
        const d = oe(m.slice(0, 32)), l = m.slice(32, 64), f = l[0] & 128 ? 28 : 27;
        return l[0] &= 127, new Gr(uo, d, oe(l), f);
      }
      if (m.length === 65) {
        const d = oe(m.slice(0, 32)), l = m.slice(32, 64);
        r((l[0] & 128) === 0, "non-canonical s");
        const f = Gr.getNormalizedV(m[64]);
        return new Gr(uo, d, oe(l), f);
      }
      r(!1, "invalid raw signature length");
    }
    if (e instanceof Gr)
      return e.clone();
    const n = e.r;
    r(n != null, "missing r");
    const s = Vd(n), i = function(m, d) {
      if (m != null)
        return Vd(m);
      if (d != null) {
        r(qe(d, 32), "invalid yParityAndS");
        const l = De(d);
        return l[0] &= 127, oe(l);
      }
      r(!1, "missing s");
    }(e.s, e.yParityAndS);
    r((De(i)[0] & 128) == 0, "non-canonical s");
    const { networkV: a, v: o } = function(m, d, l) {
      if (m != null) {
        const f = le(m);
        return {
          networkV: f >= fc ? f : void 0,
          v: Gr.getNormalizedV(f)
        };
      }
      if (d != null)
        return r(qe(d, 32), "invalid yParityAndS"), { v: De(d)[0] & 128 ? 28 : 27 };
      if (l != null) {
        switch (we(l, "sig.yParity")) {
          case 0:
            return { v: 27 };
          case 1:
            return { v: 28 };
        }
        r(!1, "invalid yParity");
      }
      r(!1, "missing v");
    }(e.v, e.yParityAndS, e.yParity), c = new Gr(uo, s, i, o);
    return a && k(c, Ci, a), r(e.yParity == null || we(e.yParity, "sig.yParity") === c.yParity, "yParity mismatch"), r(e.yParityAndS == null || e.yParityAndS === c.yParityAndS, "yParityAndS mismatch"), c;
  }
};
Fo = new WeakMap(), jo = new WeakMap(), Ho = new WeakMap(), Ci = new WeakMap();
let Kr = Gr;
var jn;
const pi = class pi {
  /**
   *  Creates a new **SigningKey** for %%privateKey%%.
   */
  constructor(e) {
    $(this, jn);
    L(Io(e) === 32, "invalid private key", "privateKey", "[REDACTED]"), k(this, jn, oe(e));
  }
  /**
   *  The private key.
   */
  get privateKey() {
    return O(this, jn);
  }
  /**
   *  The uncompressed public key.
   *
   * This will always begin with the prefix ``0x04`` and be 132
   * characters long (the ``0x`` prefix and 130 hexadecimal nibbles).
   */
  get publicKey() {
    return pi.computePublicKey(O(this, jn));
  }
  /**
   *  The compressed public key.
   *
   *  This will always begin with either the prefix ``0x02`` or ``0x03``
   *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
   *  nibbles)
   */
  get compressedPublicKey() {
    return pi.computePublicKey(O(this, jn), !0);
  }
  /**
   *  Return the signature of the signed %%digest%%.
   */
  sign(e) {
    L(Io(e) === 32, "invalid digest length", "digest", e);
    const r = Es.sign(Yt(e), Yt(O(this, jn)), {
      lowS: !0
    });
    return Kr.from({
      r: Qs(r.r, 32),
      s: Qs(r.s, 32),
      v: r.recovery ? 28 : 27
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
  computeSharedSecret(e) {
    const r = pi.computePublicKey(e);
    return oe(Es.getSharedSecret(Yt(O(this, jn)), De(r), !1));
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
  static computePublicKey(e, r) {
    let n = De(e, "key");
    if (n.length === 32) {
      const i = Es.getPublicKey(n, !!r);
      return oe(i);
    }
    if (n.length === 64) {
      const i = new Uint8Array(65);
      i[0] = 4, i.set(n, 1), n = i;
    }
    const s = Es.ProjectivePoint.fromHex(n);
    return oe(s.toRawBytes(r));
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
  static recoverPublicKey(e, r) {
    L(Io(e) === 32, "invalid digest length", "digest", e);
    const n = Kr.from(r);
    let s = Es.Signature.fromCompact(Yt(pt([n.r, n.s])));
    s = s.addRecoveryBit(n.yParity);
    const i = s.recoverPublicKey(Yt(e));
    return L(i != null, "invalid signautre for digest", "signature", r), "0x" + i.toHex(!1);
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
  static addPoints(e, r, n) {
    const s = Es.ProjectivePoint.fromHex(pi.computePublicKey(e).substring(2)), i = Es.ProjectivePoint.fromHex(pi.computePublicKey(r).substring(2));
    return "0x" + s.add(i).toHex(!!n);
  }
};
jn = new WeakMap();
let Nl = pi;
const qA = BigInt(0), JA = BigInt(36);
function zd(t) {
  t = t.toLowerCase();
  const e = t.substring(2).split(""), r = new Uint8Array(40);
  for (let s = 0; s < 40; s++)
    r[s] = e[s].charCodeAt(0);
  const n = De(gt(r));
  for (let s = 0; s < 40; s += 2)
    n[s >> 1] >> 4 >= 8 && (e[s] = e[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && (e[s + 1] = e[s + 1].toUpperCase());
  return "0x" + e.join("");
}
const Ih = {};
for (let t = 0; t < 10; t++)
  Ih[String(t)] = String(t);
for (let t = 0; t < 26; t++)
  Ih[String.fromCharCode(65 + t)] = String(10 + t);
const Qd = 15;
function KA(t) {
  t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
  let e = t.split("").map((n) => Ih[n]).join("");
  for (; e.length >= Qd; ) {
    let n = e.substring(0, Qd);
    e = parseInt(n, 10) % 97 + e.substring(n.length);
  }
  let r = String(98 - parseInt(e, 10) % 97);
  for (; r.length < 2; )
    r = "0" + r;
  return r;
}
const ZA = function() {
  const t = {};
  for (let e = 0; e < 36; e++) {
    const r = "0123456789abcdefghijklmnopqrstuvwxyz"[e];
    t[r] = BigInt(e);
  }
  return t;
}();
function XA(t) {
  t = t.toLowerCase();
  let e = qA;
  for (let r = 0; r < t.length; r++)
    e = e * JA + ZA[t[r]];
  return e;
}
function Ve(t) {
  if (L(typeof t == "string", "invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    t.startsWith("0x") || (t = "0x" + t);
    const e = zd(t);
    return L(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t, "bad address checksum", "address", t), e;
  }
  if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    L(t.substring(2, 4) === KA(t), "bad icap checksum", "address", t);
    let e = XA(t.substring(4)).toString(16);
    for (; e.length < 40; )
      e = "0" + e;
    return zd("0x" + e);
  }
  L(!1, "invalid address", "address", t);
}
function YA(t) {
  const e = Ve(t.from);
  let n = le(t.nonce, "tx.nonce").toString(16);
  return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, Ve(at(gt($i([e, n])), 12));
}
function dg(t) {
  return t && typeof t.getAddress == "function";
}
async function Qu(t, e) {
  const r = await e;
  return (r == null || r === "0x0000000000000000000000000000000000000000") && (Q(typeof t != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: t }), L(!1, "invalid AddressLike value; did not resolve to a value address", "target", t)), Ve(r);
}
function rr(t, e) {
  if (typeof t == "string")
    return t.match(/^0x[0-9a-f]{40}$/i) ? Ve(t) : (Q(e != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), Qu(t, e.resolveName(t)));
  if (dg(t))
    return Qu(t, t.getAddress());
  if (t && typeof t.then == "function")
    return Qu(t, t);
  L(!1, "unsupported addressable value", "target", t);
}
const kn = {};
function ie(t, e) {
  let r = !1;
  return e < 0 && (r = !0, e *= -1), new Ht(kn, `${r ? "" : "u"}int${e}`, t, { signed: r, width: e });
}
function Le(t, e) {
  return new Ht(kn, `bytes${e || ""}`, t, { size: e });
}
const qd = Symbol.for("_ethers_typed");
var Ni;
const Bn = class Bn {
  /**
   *  @_ignore:
   */
  constructor(e, r, n, s) {
    /**
     *  The type, as a Solidity-compatible type.
     */
    F(this, "type");
    /**
     *  The actual value.
     */
    F(this, "value");
    $(this, Ni);
    /**
     *  @_ignore:
     */
    F(this, "_typedSymbol");
    s == null && (s = null), Yl(kn, e, "Typed"), me(this, { _typedSymbol: qd, type: r, value: n }), k(this, Ni, s), this.format();
  }
  /**
   *  Format the type as a Human-Readable type.
   */
  format() {
    if (this.type === "array")
      throw new Error("");
    if (this.type === "dynamicArray")
      throw new Error("");
    return this.type === "tuple" ? `tuple(${this.value.map((e) => e.format()).join(",")})` : this.type;
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
    return O(this, Ni);
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
    return O(this, Ni) === !0 ? -1 : O(this, Ni) === !1 ? this.value.length : null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(e, r) {
    return new Bn(kn, e, r);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(e) {
    return ie(e, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(e) {
    return ie(e, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(e) {
    return ie(e, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(e) {
    return ie(e, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(e) {
    return ie(e, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(e) {
    return ie(e, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(e) {
    return ie(e, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(e) {
    return ie(e, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(e) {
    return ie(e, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(e) {
    return ie(e, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(e) {
    return ie(e, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(e) {
    return ie(e, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(e) {
    return ie(e, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(e) {
    return ie(e, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(e) {
    return ie(e, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(e) {
    return ie(e, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(e) {
    return ie(e, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(e) {
    return ie(e, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(e) {
    return ie(e, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(e) {
    return ie(e, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(e) {
    return ie(e, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(e) {
    return ie(e, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(e) {
    return ie(e, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(e) {
    return ie(e, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(e) {
    return ie(e, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(e) {
    return ie(e, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(e) {
    return ie(e, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(e) {
    return ie(e, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(e) {
    return ie(e, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(e) {
    return ie(e, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(e) {
    return ie(e, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(e) {
    return ie(e, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(e) {
    return ie(e, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(e) {
    return ie(e, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(e) {
    return ie(e, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(e) {
    return ie(e, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(e) {
    return ie(e, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(e) {
    return ie(e, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(e) {
    return ie(e, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(e) {
    return ie(e, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(e) {
    return ie(e, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(e) {
    return ie(e, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(e) {
    return ie(e, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(e) {
    return ie(e, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(e) {
    return ie(e, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(e) {
    return ie(e, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(e) {
    return ie(e, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(e) {
    return ie(e, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(e) {
    return ie(e, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(e) {
    return ie(e, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(e) {
    return ie(e, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(e) {
    return ie(e, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(e) {
    return ie(e, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(e) {
    return ie(e, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(e) {
    return ie(e, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(e) {
    return ie(e, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(e) {
    return ie(e, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(e) {
    return ie(e, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(e) {
    return ie(e, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(e) {
    return ie(e, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(e) {
    return ie(e, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(e) {
    return ie(e, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(e) {
    return ie(e, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(e) {
    return ie(e, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(e) {
    return ie(e, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(e) {
    return ie(e, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(e) {
    return Le(e, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(e) {
    return Le(e, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(e) {
    return Le(e, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(e) {
    return Le(e, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(e) {
    return Le(e, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(e) {
    return Le(e, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(e) {
    return Le(e, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(e) {
    return Le(e, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(e) {
    return Le(e, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(e) {
    return Le(e, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(e) {
    return Le(e, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(e) {
    return Le(e, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(e) {
    return Le(e, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(e) {
    return Le(e, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(e) {
    return Le(e, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(e) {
    return Le(e, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(e) {
    return Le(e, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(e) {
    return Le(e, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(e) {
    return Le(e, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(e) {
    return Le(e, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(e) {
    return Le(e, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(e) {
    return Le(e, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(e) {
    return Le(e, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(e) {
    return Le(e, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(e) {
    return Le(e, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(e) {
    return Le(e, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(e) {
    return Le(e, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(e) {
    return Le(e, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(e) {
    return Le(e, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(e) {
    return Le(e, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(e) {
    return Le(e, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(e) {
    return Le(e, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(e) {
    return new Bn(kn, "address", e);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(e) {
    return new Bn(kn, "bool", !!e);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(e) {
    return new Bn(kn, "bytes", e);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(e) {
    return new Bn(kn, "string", e);
  }
  /**
   *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
   */
  static array(e, r) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
   */
  static tuple(e, r) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static overrides(e) {
    return new Bn(kn, "overrides", Object.assign({}, e));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(e) {
    return e && typeof e == "object" && "_typedSymbol" in e && e._typedSymbol === qd;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(e, r) {
    if (Bn.isTyped(e)) {
      if (e.type !== r)
        throw new Error(`invalid type: expecetd ${r}, got ${e.type}`);
      return e.value;
    }
    return e;
  }
};
Ni = new WeakMap();
let Ht = Bn;
class eE extends rs {
  constructor(e) {
    super("address", "address", e, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(e, r) {
    let n = Ht.dereference(r, "string");
    try {
      n = Ve(n);
    } catch (s) {
      return this._throwError(s.message, r);
    }
    return e.writeValue(n);
  }
  decode(e) {
    return Ve(Qs(e.readValue(), 20));
  }
}
class tE extends rs {
  constructor(r) {
    super(r.name, r.type, "_", r.dynamic);
    F(this, "coder");
    this.coder = r;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(r, n) {
    return this.coder.encode(r, n);
  }
  decode(r) {
    return this.coder.decode(r);
  }
}
function pg(t, e, r) {
  let n = [];
  if (Array.isArray(r))
    n = r;
  else if (r && typeof r == "object") {
    let c = {};
    n = e.map((m) => {
      const d = m.localName;
      return Q(d, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder: m }, value: r }), Q(!c[d], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder: m }, value: r }), c[d] = !0, r[d];
    });
  } else
    L(!1, "invalid tuple value", "tuple", r);
  L(e.length === n.length, "types/value length mismatch", "tuple", r);
  let s = new Pf(), i = new Pf(), a = [];
  e.forEach((c, m) => {
    let d = n[m];
    if (c.dynamic) {
      let l = i.length;
      c.encode(i, d);
      let f = s.writeUpdatableValue();
      a.push((g) => {
        f(g + l);
      });
    } else
      c.encode(s, d);
  }), a.forEach((c) => {
    c(s.length);
  });
  let o = t.appendWriter(s);
  return o += t.appendWriter(i), o;
}
function mg(t, e) {
  let r = [], n = [], s = t.subReader(0);
  return e.forEach((i) => {
    let a = null;
    if (i.dynamic) {
      let o = t.readIndex(), c = s.subReader(o);
      try {
        a = i.decode(c);
      } catch (m) {
        if (Bt(m, "BUFFER_OVERRUN"))
          throw m;
        a = m, a.baseType = i.name, a.name = i.localName, a.type = i.type;
      }
    } else
      try {
        a = i.decode(t);
      } catch (o) {
        if (Bt(o, "BUFFER_OVERRUN"))
          throw o;
        a = o, a.baseType = i.name, a.name = i.localName, a.type = i.type;
      }
    if (a == null)
      throw new Error("investigate");
    r.push(a), n.push(i.localName || null);
  }), Oa.fromItems(r, n);
}
class rE extends rs {
  constructor(r, n, s) {
    const i = r.type + "[" + (n >= 0 ? n : "") + "]", a = n === -1 || r.dynamic;
    super("array", i, s, a);
    F(this, "coder");
    F(this, "length");
    me(this, { coder: r, length: n });
  }
  defaultValue() {
    const r = this.coder.defaultValue(), n = [];
    for (let s = 0; s < this.length; s++)
      n.push(r);
    return n;
  }
  encode(r, n) {
    const s = Ht.dereference(n, "array");
    Array.isArray(s) || this._throwError("expected array value", s);
    let i = this.length;
    i === -1 && (i = s.length, r.writeValue(s.length)), zm(s.length, i, "coder array" + (this.localName ? " " + this.localName : ""));
    let a = [];
    for (let o = 0; o < s.length; o++)
      a.push(this.coder);
    return pg(r, a, s);
  }
  decode(r) {
    let n = this.length;
    n === -1 && (n = r.readIndex(), Q(n * tr <= r.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: r.bytes, offset: n * tr, length: r.dataLength }));
    let s = [];
    for (let i = 0; i < n; i++)
      s.push(new tE(this.coder));
    return mg(r, s);
  }
}
class nE extends rs {
  constructor(e) {
    super("bool", "bool", e, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(e, r) {
    const n = Ht.dereference(r, "bool");
    return e.writeValue(n ? 1 : 0);
  }
  decode(e) {
    return !!e.readValue();
  }
}
class gg extends rs {
  constructor(e, r) {
    super(e, e, r, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(e, r) {
    r = Yt(r);
    let n = e.writeValue(r.length);
    return n += e.writeBytes(r), n;
  }
  decode(e) {
    return e.readBytes(e.readIndex(), !0);
  }
}
class sE extends gg {
  constructor(e) {
    super("bytes", e);
  }
  decode(e) {
    return oe(super.decode(e));
  }
}
class iE extends rs {
  constructor(r, n) {
    let s = "bytes" + String(r);
    super(s, s, n, !1);
    F(this, "size");
    me(this, { size: r }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(r, n) {
    let s = Yt(Ht.dereference(n, this.type));
    return s.length !== this.size && this._throwError("incorrect data length", n), r.writeBytes(s);
  }
  decode(r) {
    return oe(r.readBytes(this.size));
  }
}
const oE = new Uint8Array([]);
class aE extends rs {
  constructor(e) {
    super("null", "", e, !1);
  }
  defaultValue() {
    return null;
  }
  encode(e, r) {
    return r != null && this._throwError("not null", r), e.writeBytes(oE);
  }
  decode(e) {
    return e.readBytes(0), null;
  }
}
const lE = BigInt(0), cE = BigInt(1), uE = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class fE extends rs {
  constructor(r, n, s) {
    const i = (n ? "int" : "uint") + r * 8;
    super(i, i, s, !1);
    F(this, "size");
    F(this, "signed");
    me(this, { size: r, signed: n }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(r, n) {
    let s = le(Ht.dereference(n, this.type)), i = yi(uE, tr * 8);
    if (this.signed) {
      let a = yi(i, this.size * 8 - 1);
      (s > a || s < -(a + cE)) && this._throwError("value out-of-bounds", n), s = Jm(s, 8 * tr);
    } else (s < lE || s > yi(i, this.size * 8)) && this._throwError("value out-of-bounds", n);
    return r.writeValue(s);
  }
  decode(r) {
    let n = yi(r.readValue(), this.size * 8);
    return this.signed && (n = Mc(n, this.size * 8)), n;
  }
}
class hE extends gg {
  constructor(e) {
    super("string", e);
  }
  defaultValue() {
    return "";
  }
  encode(e, r) {
    return super.encode(e, Xn(Ht.dereference(r, "string")));
  }
  decode(e) {
    return Dc(super.decode(e));
  }
}
class hc extends rs {
  constructor(r, n) {
    let s = !1;
    const i = [];
    r.forEach((o) => {
      o.dynamic && (s = !0), i.push(o.type);
    });
    const a = "tuple(" + i.join(",") + ")";
    super("tuple", a, n, s);
    F(this, "coders");
    me(this, { coders: Object.freeze(r.slice()) });
  }
  defaultValue() {
    const r = [];
    this.coders.forEach((s) => {
      r.push(s.defaultValue());
    });
    const n = this.coders.reduce((s, i) => {
      const a = i.localName;
      return a && (s[a] || (s[a] = 0), s[a]++), s;
    }, {});
    return this.coders.forEach((s, i) => {
      let a = s.localName;
      !a || n[a] !== 1 || (a === "length" && (a = "_length"), r[a] == null && (r[a] = r[i]));
    }), Object.freeze(r);
  }
  encode(r, n) {
    const s = Ht.dereference(n, "tuple");
    return pg(r, this.coders, s);
  }
  decode(r) {
    return mg(r, this.coders);
  }
}
function Wi(t) {
  return gt(Xn(t));
}
var dE = "AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI";
const Jd = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]), Kd = 4;
function pE(t) {
  let e = 0;
  function r() {
    return t[e++] << 8 | t[e++];
  }
  let n = r(), s = 1, i = [0, 1];
  for (let x = 1; x < n; x++)
    i.push(s += r());
  let a = r(), o = e;
  e += a;
  let c = 0, m = 0;
  function d() {
    return c == 0 && (m = m << 8 | t[e++], c = 8), m >> --c & 1;
  }
  const l = 31, f = 2 ** l, g = f >>> 1, h = g >> 1, u = f - 1;
  let b = 0;
  for (let x = 0; x < l; x++) b = b << 1 | d();
  let p = [], y = 0, v = f;
  for (; ; ) {
    let x = Math.floor(((b - y + 1) * s - 1) / v), C = 0, T = n;
    for (; T - C > 1; ) {
      let I = C + T >>> 1;
      x < i[I] ? T = I : C = I;
    }
    if (C == 0) break;
    p.push(C);
    let A = y + Math.floor(v * i[C] / s), S = y + Math.floor(v * i[C + 1] / s) - 1;
    for (; !((A ^ S) & g); )
      b = b << 1 & u | d(), A = A << 1 & u, S = S << 1 & u | 1;
    for (; A & ~S & h; )
      b = b & g | b << 1 & u >>> 1 | d(), A = A << 1 ^ g, S = (S ^ g) << 1 | g | 1;
    y = A, v = 1 + S - A;
  }
  let E = n - 4;
  return p.map((x) => {
    switch (x - E) {
      case 3:
        return E + 65792 + (t[o++] << 16 | t[o++] << 8 | t[o++]);
      case 2:
        return E + 256 + (t[o++] << 8 | t[o++]);
      case 1:
        return E + t[o++];
      default:
        return x - 1;
    }
  });
}
function mE(t) {
  let e = 0;
  return () => t[e++];
}
function yg(t) {
  return mE(pE(gE(t)));
}
function gE(t) {
  let e = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((s, i) => e[s.charCodeAt(0)] = i);
  let r = t.length, n = new Uint8Array(6 * r >> 3);
  for (let s = 0, i = 0, a = 0, o = 0; s < r; s++)
    o = o << 6 | e[t.charCodeAt(s)], a += 6, a >= 8 && (n[i++] = o >> (a -= 8));
  return n;
}
function yE(t) {
  return t & 1 ? ~t >> 1 : t >> 1;
}
function bE(t, e) {
  let r = Array(t);
  for (let n = 0, s = 0; n < t; n++) r[n] = s += yE(e());
  return r;
}
function Rl(t, e = 0) {
  let r = [];
  for (; ; ) {
    let n = t(), s = t();
    if (!s) break;
    e += n;
    for (let i = 0; i < s; i++)
      r.push(e + i);
    e += s + 1;
  }
  return r;
}
function bg(t) {
  return Pl(() => {
    let e = Rl(t);
    if (e.length) return e;
  });
}
function wg(t) {
  let e = [];
  for (; ; ) {
    let r = t();
    if (r == 0) break;
    e.push(wE(r, t));
  }
  for (; ; ) {
    let r = t() - 1;
    if (r < 0) break;
    e.push(vE(r, t));
  }
  return e.flat();
}
function Pl(t) {
  let e = [];
  for (; ; ) {
    let r = t(e.length);
    if (!r) break;
    e.push(r);
  }
  return e;
}
function vg(t, e, r) {
  let n = Array(t).fill().map(() => []);
  for (let s = 0; s < e; s++)
    bE(t, r).forEach((i, a) => n[a].push(i));
  return n;
}
function wE(t, e) {
  let r = 1 + e(), n = e(), s = Pl(e);
  return vg(s.length, 1 + t, e).flatMap((a, o) => {
    let [c, ...m] = a;
    return Array(s[o]).fill().map((d, l) => {
      let f = l * n;
      return [c + l * r, m.map((g) => g + f)];
    });
  });
}
function vE(t, e) {
  let r = 1 + e();
  return vg(r, 1 + t, e).map((s) => [s[0], s.slice(1)]);
}
function AE(t) {
  let e = [], r = Rl(t);
  return s(n([]), []), e;
  function n(i) {
    let a = t(), o = Pl(() => {
      let c = Rl(t).map((m) => r[m]);
      if (c.length) return n(c);
    });
    return { S: a, B: o, Q: i };
  }
  function s({ S: i, B: a }, o, c) {
    if (!(i & 4 && c === o[o.length - 1])) {
      i & 2 && (c = o[o.length - 1]), i & 1 && e.push(o);
      for (let m of a)
        for (let d of m.Q)
          s(m, [...o, d], c);
    }
  }
}
function EE(t) {
  return t.toString(16).toUpperCase().padStart(2, "0");
}
function Ag(t) {
  return `{${EE(t)}}`;
}
function _E(t) {
  let e = [];
  for (let r = 0, n = t.length; r < n; ) {
    let s = t.codePointAt(r);
    r += s < 65536 ? 1 : 2, e.push(s);
  }
  return e;
}
function Ia(t) {
  let r = t.length;
  if (r < 4096) return String.fromCodePoint(...t);
  let n = [];
  for (let s = 0; s < r; )
    n.push(String.fromCodePoint(...t.slice(s, s += 4096)));
  return n.join("");
}
function xE(t, e) {
  let r = t.length, n = r - e.length;
  for (let s = 0; n == 0 && s < r; s++) n = t[s] - e[s];
  return n;
}
var SE = "AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g";
const kl = 44032, Uc = 4352, Fc = 4449, jc = 4519, Eg = 19, _g = 21, Ta = 28, Hc = _g * Ta, OE = Eg * Hc, IE = kl + OE, TE = Uc + Eg, CE = Fc + _g, NE = jc + Ta;
function yl(t) {
  return t >> 24 & 255;
}
function xg(t) {
  return t & 16777215;
}
let Mf, Zd, Df, Ac;
function RE() {
  let t = yg(SE);
  Mf = new Map(bg(t).flatMap((e, r) => e.map((n) => [n, r + 1 << 24]))), Zd = new Set(Rl(t)), Df = /* @__PURE__ */ new Map(), Ac = /* @__PURE__ */ new Map();
  for (let [e, r] of wg(t)) {
    if (!Zd.has(e) && r.length == 2) {
      let [n, s] = r, i = Ac.get(n);
      i || (i = /* @__PURE__ */ new Map(), Ac.set(n, i)), i.set(s, e);
    }
    Df.set(e, r.reverse());
  }
}
function Sg(t) {
  return t >= kl && t < IE;
}
function PE(t, e) {
  if (t >= Uc && t < TE && e >= Fc && e < CE)
    return kl + (t - Uc) * Hc + (e - Fc) * Ta;
  if (Sg(t) && e > jc && e < NE && (t - kl) % Ta == 0)
    return t + (e - jc);
  {
    let r = Ac.get(t);
    return r && (r = r.get(e), r) ? r : -1;
  }
}
function Og(t) {
  Mf || RE();
  let e = [], r = [], n = !1;
  function s(i) {
    let a = Mf.get(i);
    a && (n = !0, i |= a), e.push(i);
  }
  for (let i of t)
    for (; ; ) {
      if (i < 128)
        e.push(i);
      else if (Sg(i)) {
        let a = i - kl, o = a / Hc | 0, c = a % Hc / Ta | 0, m = a % Ta;
        s(Uc + o), s(Fc + c), m > 0 && s(jc + m);
      } else {
        let a = Df.get(i);
        a ? r.push(...a) : s(i);
      }
      if (!r.length) break;
      i = r.pop();
    }
  if (n && e.length > 1) {
    let i = yl(e[0]);
    for (let a = 1; a < e.length; a++) {
      let o = yl(e[a]);
      if (o == 0 || i <= o) {
        i = o;
        continue;
      }
      let c = a - 1;
      for (; ; ) {
        let m = e[c + 1];
        if (e[c + 1] = e[c], e[c] = m, !c || (i = yl(e[--c]), i <= o)) break;
      }
      i = yl(e[a]);
    }
  }
  return e;
}
function kE(t) {
  let e = [], r = [], n = -1, s = 0;
  for (let i of t) {
    let a = yl(i), o = xg(i);
    if (n == -1)
      a == 0 ? n = o : e.push(o);
    else if (s > 0 && s >= a)
      a == 0 ? (e.push(n, ...r), r.length = 0, n = o) : r.push(o), s = a;
    else {
      let c = PE(n, o);
      c >= 0 ? n = c : s == 0 && a == 0 ? (e.push(n), n = o) : (r.push(o), s = a);
    }
  }
  return n >= 0 && e.push(n, ...r), e;
}
function Ig(t) {
  return Og(t).map(xg);
}
function BE(t) {
  return kE(Og(t));
}
const Xd = 45, Tg = ".", Cg = 65039, Ng = 1, Gc = (t) => Array.from(t);
function Bl(t, e) {
  return t.P.has(e) || t.Q.has(e);
}
class ME extends Array {
  get is_emoji() {
    return !0;
  }
  // free tagging system
}
let Lf, Rg, bi, Uf, Pg, Co, qu, mo, fi, Yd, Ff;
function Th() {
  if (Lf) return;
  let t = yg(dE);
  const e = () => Rl(t), r = () => new Set(e()), n = (d, l) => l.forEach((f) => d.add(f));
  Lf = new Map(wg(t)), Rg = r(), bi = e(), Uf = new Set(e().map((d) => bi[d])), bi = new Set(bi), Pg = r(), r();
  let s = bg(t), i = t();
  const a = () => {
    let d = /* @__PURE__ */ new Set();
    return e().forEach((l) => n(d, s[l])), n(d, e()), d;
  };
  Co = Pl((d) => {
    let l = Pl(t).map((f) => f + 96);
    if (l.length) {
      let f = d >= i;
      l[0] -= 32, l = Ia(l), f && (l = `Restricted[${l}]`);
      let g = a(), h = a(), u = !t();
      return { N: l, P: g, Q: h, M: u, R: f };
    }
  }), qu = r(), mo = /* @__PURE__ */ new Map();
  let o = e().concat(Gc(qu)).sort((d, l) => d - l);
  o.forEach((d, l) => {
    let f = t(), g = o[l] = f ? o[l - f] : { V: [], M: /* @__PURE__ */ new Map() };
    g.V.push(d), qu.has(d) || mo.set(d, g);
  });
  for (let { V: d, M: l } of new Set(mo.values())) {
    let f = [];
    for (let h of d) {
      let u = Co.filter((p) => Bl(p, h)), b = f.find(({ G: p }) => u.some((y) => p.has(y)));
      b || (b = { G: /* @__PURE__ */ new Set(), V: [] }, f.push(b)), b.V.push(h), n(b.G, u);
    }
    let g = f.flatMap((h) => Gc(h.G));
    for (let { G: h, V: u } of f) {
      let b = new Set(g.filter((p) => !h.has(p)));
      for (let p of u)
        l.set(p, b);
    }
  }
  fi = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set();
  const m = (d) => fi.has(d) ? c.add(d) : fi.add(d);
  for (let d of Co) {
    for (let l of d.P) m(l);
    for (let l of d.Q) m(l);
  }
  for (let d of fi)
    !mo.has(d) && !c.has(d) && mo.set(d, Ng);
  n(fi, Ig(fi)), Yd = AE(t).map((d) => ME.from(d)).sort(xE), Ff = /* @__PURE__ */ new Map();
  for (let d of Yd) {
    let l = [Ff];
    for (let f of d) {
      let g = l.map((h) => {
        let u = h.get(f);
        return u || (u = /* @__PURE__ */ new Map(), h.set(f, u)), u;
      });
      f === Cg ? l.push(...g) : l = g;
    }
    for (let f of l)
      f.V = d;
  }
}
function Ch(t) {
  return (kg(t) ? "" : `${Nh(mu([t]))} `) + Ag(t);
}
function Nh(t) {
  return `"${t}"‎`;
}
function DE(t) {
  if (t.length >= 4 && t[2] == Xd && t[3] == Xd)
    throw new Error(`invalid label extension: "${Ia(t.slice(0, 4))}"`);
}
function LE(t) {
  for (let r = t.lastIndexOf(95); r > 0; )
    if (t[--r] !== 95)
      throw new Error("underscore allowed only at start");
}
function UE(t) {
  let e = t[0], r = Jd.get(e);
  if (r) throw El(`leading ${r}`);
  let n = t.length, s = -1;
  for (let i = 1; i < n; i++) {
    e = t[i];
    let a = Jd.get(e);
    if (a) {
      if (s == i) throw El(`${r} + ${a}`);
      s = i + 1, r = a;
    }
  }
  if (s == n) throw El(`trailing ${r}`);
}
function mu(t, e = 1 / 0, r = Ag) {
  let n = [];
  FE(t[0]) && n.push("◌"), t.length > e && (e >>= 1, t = [...t.slice(0, e), 8230, ...t.slice(-e)]);
  let s = 0, i = t.length;
  for (let a = 0; a < i; a++) {
    let o = t[a];
    kg(o) && (n.push(Ia(t.slice(s, a))), n.push(r(o)), s = a + 1);
  }
  return n.push(Ia(t.slice(s, i))), n.join("");
}
function FE(t) {
  return Th(), bi.has(t);
}
function kg(t) {
  return Th(), Pg.has(t);
}
function jE(t) {
  return WE(HE(t, BE, QE));
}
function HE(t, e, r) {
  if (!t) return [];
  Th();
  let n = 0;
  return t.split(Tg).map((s) => {
    let i = _E(s), a = {
      input: i,
      offset: n
      // codepoint, not substring!
    };
    n += i.length + 1;
    try {
      let o = a.tokens = zE(i, e, r), c = o.length, m;
      if (!c)
        throw new Error("empty label");
      let d = a.output = o.flat();
      if (LE(d), !(a.emoji = c > 1 || o[0].is_emoji) && d.every((f) => f < 128))
        DE(d), m = "ASCII";
      else {
        let f = o.flatMap((g) => g.is_emoji ? [] : g);
        if (!f.length)
          m = "Emoji";
        else {
          if (bi.has(d[0])) throw El("leading combining mark");
          for (let u = 1; u < c; u++) {
            let b = o[u];
            if (!b.is_emoji && bi.has(b[0]))
              throw El(`emoji + combining mark: "${Ia(o[u - 1])} + ${mu([b[0]])}"`);
          }
          UE(d);
          let g = Gc(new Set(f)), [h] = $E(g);
          VE(h, f), GE(h, g), m = h.N;
        }
      }
      a.type = m;
    } catch (o) {
      a.error = o;
    }
    return a;
  });
}
function GE(t, e) {
  let r, n = [];
  for (let s of e) {
    let i = mo.get(s);
    if (i === Ng) return;
    if (i) {
      let a = i.M.get(s);
      if (r = r ? r.filter((o) => a.has(o)) : Gc(a), !r.length) return;
    } else
      n.push(s);
  }
  if (r) {
    for (let s of r)
      if (n.every((i) => Bl(s, i)))
        throw new Error(`whole-script confusable: ${t.N}/${s.N}`);
  }
}
function $E(t) {
  let e = Co;
  for (let r of t) {
    let n = e.filter((s) => Bl(s, r));
    if (!n.length)
      throw Co.some((s) => Bl(s, r)) ? Mg(e[0], r) : Bg(r);
    if (e = n, n.length == 1) break;
  }
  return e;
}
function WE(t) {
  return t.map(({ input: e, error: r, output: n }) => {
    if (r) {
      let s = r.message;
      throw new Error(t.length == 1 ? s : `Invalid label ${Nh(mu(e, 63))}: ${s}`);
    }
    return Ia(n);
  }).join(Tg);
}
function Bg(t) {
  return new Error(`disallowed character: ${Ch(t)}`);
}
function Mg(t, e) {
  let r = Ch(e), n = Co.find((s) => s.P.has(e));
  return n && (r = `${n.N} ${r}`), new Error(`illegal mixture: ${t.N} + ${r}`);
}
function El(t) {
  return new Error(`illegal placement: ${t}`);
}
function VE(t, e) {
  for (let r of e)
    if (!Bl(t, r))
      throw Mg(t, r);
  if (t.M) {
    let r = Ig(e);
    for (let n = 1, s = r.length; n < s; n++)
      if (Uf.has(r[n])) {
        let i = n + 1;
        for (let a; i < s && Uf.has(a = r[i]); i++)
          for (let o = n; o < i; o++)
            if (r[o] == a)
              throw new Error(`duplicate non-spacing marks: ${Ch(a)}`);
        if (i - n > Kd)
          throw new Error(`excessive non-spacing marks: ${Nh(mu(r.slice(n - 1, i)))} (${i - n}/${Kd})`);
        n = i;
      }
  }
}
function zE(t, e, r) {
  let n = [], s = [];
  for (t = t.slice().reverse(); t.length; ) {
    let i = qE(t);
    if (i)
      s.length && (n.push(e(s)), s = []), n.push(r(i));
    else {
      let a = t.pop();
      if (fi.has(a))
        s.push(a);
      else {
        let o = Lf.get(a);
        if (o)
          s.push(...o);
        else if (!Rg.has(a))
          throw Bg(a);
      }
    }
  }
  return s.length && n.push(e(s)), n;
}
function QE(t) {
  return t.filter((e) => e != Cg);
}
function qE(t, e) {
  let r = Ff, n, s = t.length;
  for (; s && (r = r.get(t[--s]), !!r); ) {
    let { V: i } = r;
    i && (n = i, t.length = s);
  }
  return n;
}
const Dg = new Uint8Array(32);
Dg.fill(0);
function ep(t) {
  return L(t.length !== 0, "invalid ENS name; empty component", "comp", t), t;
}
function Lg(t) {
  const e = Xn(JE(t)), r = [];
  if (t.length === 0)
    return r;
  let n = 0;
  for (let s = 0; s < e.length; s++)
    e[s] === 46 && (r.push(ep(e.slice(n, s))), n = s + 1);
  return L(n < e.length, "invalid ENS name; empty component", "name", t), r.push(ep(e.slice(n))), r;
}
function JE(t) {
  try {
    if (t.length === 0)
      throw new Error("empty label");
    return jE(t);
  } catch (e) {
    L(!1, `invalid ENS name (${e.message})`, "name", t);
  }
}
function jf(t) {
  L(typeof t == "string", "invalid ENS name; not a string", "name", t), L(t.length, "invalid ENS name (empty label)", "name", t);
  let e = Dg;
  const r = Lg(t);
  for (; r.length; )
    e = gt(pt([e, gt(r.pop())]));
  return oe(e);
}
function KE(t, e) {
  const r = e;
  return L(r <= 255, "DNS encoded label cannot exceed 255", "length", r), oe(pt(Lg(t).map((n) => {
    L(n.length <= r, `label ${JSON.stringify(t)} exceeds ${r} bytes`, "name", t);
    const s = new Uint8Array(n.length + 1);
    return s.set(n, 1), s[0] = s.length - 1, s;
  }))) + "00";
}
function Ju(t, e) {
  return {
    address: Ve(t),
    storageKeys: e.map((r, n) => (L(qe(r, 32), "invalid slot", `storageKeys[${n}]`, r), r.toLowerCase()))
  };
}
function Zi(t) {
  if (Array.isArray(t))
    return t.map((r, n) => Array.isArray(r) ? (L(r.length === 2, "invalid slot set", `value[${n}]`, r), Ju(r[0], r[1])) : (L(r != null && typeof r == "object", "invalid address-slot set", "value", t), Ju(r.address, r.storageKeys)));
  L(t != null && typeof t == "object", "invalid access list", "value", t);
  const e = Object.keys(t).map((r) => {
    const n = t[r].reduce((s, i) => (s[i] = !0, s), {});
    return Ju(r, Object.keys(n).sort());
  });
  return e.sort((r, n) => r.address.localeCompare(n.address)), e;
}
function ZE(t) {
  let e;
  return typeof t == "string" ? e = Nl.computePublicKey(t, !1) : e = t.publicKey, Ve(gt("0x" + e.substring(4)).substring(26));
}
function XE(t, e) {
  return ZE(Nl.recoverPublicKey(t, e));
}
const It = BigInt(0), YE = BigInt(2), e_ = BigInt(27), t_ = BigInt(28), r_ = BigInt(35), n_ = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), Ku = 4096 * 32;
function tp(t, e) {
  let r = t.toString(16);
  for (; r.length < 2; )
    r = "0" + r;
  return r += Ba(e).substring(4), "0x" + r;
}
function gu(t) {
  return t === "0x" ? null : Ve(t);
}
function Rh(t, e) {
  try {
    return Zi(t);
  } catch (r) {
    L(!1, r.message, e, t);
  }
}
function ec(t, e) {
  return t === "0x" ? 0 : we(t, e);
}
function dt(t, e) {
  if (t === "0x")
    return It;
  const r = le(t, e);
  return L(r <= n_, "value exceeds uint size", e, r), r;
}
function Xe(t, e) {
  const r = le(t, "value"), n = er(r);
  return L(n.length <= 32, "value too large", `tx.${e}`, r), n;
}
function Ph(t) {
  return Zi(t).map((e) => [e.address, e.storageKeys]);
}
function s_(t, e) {
  L(Array.isArray(t), `invalid ${e}`, "value", t);
  for (let r = 0; r < t.length; r++)
    L(qe(t[r], 32), "invalid ${ param } hash", `value[${r}]`, t[r]);
  return t;
}
function i_(t) {
  const e = pu(t);
  L(Array.isArray(e) && (e.length === 9 || e.length === 6), "invalid field count for legacy transaction", "data", t);
  const r = {
    type: 0,
    nonce: ec(e[0], "nonce"),
    gasPrice: dt(e[1], "gasPrice"),
    gasLimit: dt(e[2], "gasLimit"),
    to: gu(e[3]),
    value: dt(e[4], "value"),
    data: oe(e[5]),
    chainId: It
  };
  if (e.length === 6)
    return r;
  const n = dt(e[6], "v"), s = dt(e[7], "r"), i = dt(e[8], "s");
  if (s === It && i === It)
    r.chainId = n;
  else {
    let a = (n - r_) / YE;
    a < It && (a = It), r.chainId = a, L(a !== It || n === e_ || n === t_, "non-canonical legacy v", "v", e[6]), r.signature = Kr.from({
      r: Gi(e[7], 32),
      s: Gi(e[8], 32),
      v: n
    });
  }
  return r;
}
function o_(t, e) {
  const r = [
    Xe(t.nonce, "nonce"),
    Xe(t.gasPrice || 0, "gasPrice"),
    Xe(t.gasLimit, "gasLimit"),
    t.to || "0x",
    Xe(t.value, "value"),
    t.data
  ];
  let n = It;
  if (t.chainId != It)
    n = le(t.chainId, "tx.chainId"), L(!e || e.networkV == null || e.legacyChainId === n, "tx.chainId/sig.v mismatch", "sig", e);
  else if (t.signature) {
    const i = t.signature.legacyChainId;
    i != null && (n = i);
  }
  if (!e)
    return n !== It && (r.push(er(n)), r.push("0x"), r.push("0x")), $i(r);
  let s = BigInt(27 + e.yParity);
  return n !== It ? s = Kr.getChainIdV(n, e.v) : BigInt(e.v) !== s && L(!1, "tx.chainId/sig.v mismatch", "sig", e), r.push(er(s)), r.push(er(e.r)), r.push(er(e.s)), $i(r);
}
function kh(t, e) {
  let r;
  try {
    if (r = ec(e[0], "yParity"), r !== 0 && r !== 1)
      throw new Error("bad yParity");
  } catch {
    L(!1, "invalid yParity", "yParity", e[0]);
  }
  const n = Gi(e[1], 32), s = Gi(e[2], 32), i = Kr.from({ r: n, s, yParity: r });
  t.signature = i;
}
function a_(t) {
  const e = pu(De(t).slice(1));
  L(Array.isArray(e) && (e.length === 9 || e.length === 12), "invalid field count for transaction type: 2", "data", oe(t));
  const r = {
    type: 2,
    chainId: dt(e[0], "chainId"),
    nonce: ec(e[1], "nonce"),
    maxPriorityFeePerGas: dt(e[2], "maxPriorityFeePerGas"),
    maxFeePerGas: dt(e[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: dt(e[4], "gasLimit"),
    to: gu(e[5]),
    value: dt(e[6], "value"),
    data: oe(e[7]),
    accessList: Rh(e[8], "accessList")
  };
  return e.length === 9 || kh(r, e.slice(9)), r;
}
function l_(t, e) {
  const r = [
    Xe(t.chainId, "chainId"),
    Xe(t.nonce, "nonce"),
    Xe(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    Xe(t.maxFeePerGas || 0, "maxFeePerGas"),
    Xe(t.gasLimit, "gasLimit"),
    t.to || "0x",
    Xe(t.value, "value"),
    t.data,
    Ph(t.accessList || [])
  ];
  return e && (r.push(Xe(e.yParity, "yParity")), r.push(er(e.r)), r.push(er(e.s))), pt(["0x02", $i(r)]);
}
function c_(t) {
  const e = pu(De(t).slice(1));
  L(Array.isArray(e) && (e.length === 8 || e.length === 11), "invalid field count for transaction type: 1", "data", oe(t));
  const r = {
    type: 1,
    chainId: dt(e[0], "chainId"),
    nonce: ec(e[1], "nonce"),
    gasPrice: dt(e[2], "gasPrice"),
    gasLimit: dt(e[3], "gasLimit"),
    to: gu(e[4]),
    value: dt(e[5], "value"),
    data: oe(e[6]),
    accessList: Rh(e[7], "accessList")
  };
  return e.length === 8 || kh(r, e.slice(8)), r;
}
function u_(t, e) {
  const r = [
    Xe(t.chainId, "chainId"),
    Xe(t.nonce, "nonce"),
    Xe(t.gasPrice || 0, "gasPrice"),
    Xe(t.gasLimit, "gasLimit"),
    t.to || "0x",
    Xe(t.value, "value"),
    t.data,
    Ph(t.accessList || [])
  ];
  return e && (r.push(Xe(e.yParity, "recoveryParam")), r.push(er(e.r)), r.push(er(e.s))), pt(["0x01", $i(r)]);
}
function f_(t) {
  let e = pu(De(t).slice(1)), r = "3", n = null;
  if (e.length === 4 && Array.isArray(e[0])) {
    r = "3 (network format)";
    const i = e[1], a = e[2], o = e[3];
    L(Array.isArray(i), "invalid network format: blobs not an array", "fields[1]", i), L(Array.isArray(a), "invalid network format: commitments not an array", "fields[2]", a), L(Array.isArray(o), "invalid network format: proofs not an array", "fields[3]", o), L(i.length === a.length, "invalid network format: blobs/commitments length mismatch", "fields", e), L(i.length === o.length, "invalid network format: blobs/proofs length mismatch", "fields", e), n = [];
    for (let c = 0; c < e[1].length; c++)
      n.push({
        data: i[c],
        commitment: a[c],
        proof: o[c]
      });
    e = e[0];
  }
  L(Array.isArray(e) && (e.length === 11 || e.length === 14), `invalid field count for transaction type: ${r}`, "data", oe(t));
  const s = {
    type: 3,
    chainId: dt(e[0], "chainId"),
    nonce: ec(e[1], "nonce"),
    maxPriorityFeePerGas: dt(e[2], "maxPriorityFeePerGas"),
    maxFeePerGas: dt(e[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: dt(e[4], "gasLimit"),
    to: gu(e[5]),
    value: dt(e[6], "value"),
    data: oe(e[7]),
    accessList: Rh(e[8], "accessList"),
    maxFeePerBlobGas: dt(e[9], "maxFeePerBlobGas"),
    blobVersionedHashes: e[10]
  };
  n && (s.blobs = n), L(s.to != null, `invalid address for transaction type: ${r}`, "data", t), L(Array.isArray(s.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", t);
  for (let i = 0; i < s.blobVersionedHashes.length; i++)
    L(qe(s.blobVersionedHashes[i], 32), `invalid blobVersionedHash at index ${i}: must be length 32`, "data", t);
  return e.length === 11 || kh(s, e.slice(11)), s;
}
function h_(t, e, r) {
  const n = [
    Xe(t.chainId, "chainId"),
    Xe(t.nonce, "nonce"),
    Xe(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    Xe(t.maxFeePerGas || 0, "maxFeePerGas"),
    Xe(t.gasLimit, "gasLimit"),
    t.to || Cl,
    Xe(t.value, "value"),
    t.data,
    Ph(t.accessList || []),
    Xe(t.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
    s_(t.blobVersionedHashes || [], "blobVersionedHashes")
  ];
  return e && (n.push(Xe(e.yParity, "yParity")), n.push(er(e.r)), n.push(er(e.s)), r) ? pt([
    "0x03",
    $i([
      n,
      r.map((s) => s.data),
      r.map((s) => s.commitment),
      r.map((s) => s.proof)
    ])
  ]) : pt(["0x03", $i(n)]);
}
var un, Go, $o, Wo, Vo, zo, Qo, qo, Jo, Ko, Zo, Xo, Ri, Is, Hn, Ts, Yo, Ec;
const Mn = class Mn {
  /**
   *  Creates a new Transaction with default values.
   */
  constructor() {
    $(this, Yo);
    $(this, un);
    $(this, Go);
    $(this, $o);
    $(this, Wo);
    $(this, Vo);
    $(this, zo);
    $(this, Qo);
    $(this, qo);
    $(this, Jo);
    $(this, Ko);
    $(this, Zo);
    $(this, Xo);
    $(this, Ri);
    $(this, Is);
    $(this, Hn);
    $(this, Ts);
    k(this, un, null), k(this, Go, null), k(this, Wo, 0), k(this, Vo, It), k(this, zo, null), k(this, Qo, null), k(this, qo, null), k(this, $o, "0x"), k(this, Jo, It), k(this, Ko, It), k(this, Zo, null), k(this, Xo, null), k(this, Ri, null), k(this, Is, null), k(this, Ts, null), k(this, Hn, null);
  }
  /**
   *  The transaction type.
   *
   *  If null, the type will be automatically inferred based on
   *  explicit properties.
   */
  get type() {
    return O(this, un);
  }
  set type(e) {
    switch (e) {
      case null:
        k(this, un, null);
        break;
      case 0:
      case "legacy":
        k(this, un, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        k(this, un, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        k(this, un, 2);
        break;
      case 3:
      case "cancun":
      case "eip-4844":
        k(this, un, 3);
        break;
      default:
        L(!1, "unsupported transaction type", "type", e);
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
    const e = O(this, Go);
    return e == null && this.type === 3 ? Cl : e;
  }
  set to(e) {
    k(this, Go, e == null ? null : Ve(e));
  }
  /**
   *  The transaction nonce.
   */
  get nonce() {
    return O(this, Wo);
  }
  set nonce(e) {
    k(this, Wo, we(e, "value"));
  }
  /**
   *  The gas limit.
   */
  get gasLimit() {
    return O(this, Vo);
  }
  set gasLimit(e) {
    k(this, Vo, le(e));
  }
  /**
   *  The gas price.
   *
   *  On legacy networks this defines the fee that will be paid. On
   *  EIP-1559 networks, this should be ``null``.
   */
  get gasPrice() {
    const e = O(this, zo);
    return e == null && (this.type === 0 || this.type === 1) ? It : e;
  }
  set gasPrice(e) {
    k(this, zo, e == null ? null : le(e, "gasPrice"));
  }
  /**
   *  The maximum priority fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxPriorityFeePerGas() {
    const e = O(this, Qo);
    return e ?? (this.type === 2 || this.type === 3 ? It : null);
  }
  set maxPriorityFeePerGas(e) {
    k(this, Qo, e == null ? null : le(e, "maxPriorityFeePerGas"));
  }
  /**
   *  The maximum total fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxFeePerGas() {
    const e = O(this, qo);
    return e ?? (this.type === 2 || this.type === 3 ? It : null);
  }
  set maxFeePerGas(e) {
    k(this, qo, e == null ? null : le(e, "maxFeePerGas"));
  }
  /**
   *  The transaction data. For ``init`` transactions this is the
   *  deployment code.
   */
  get data() {
    return O(this, $o);
  }
  set data(e) {
    k(this, $o, oe(e));
  }
  /**
   *  The amount of ether (in wei) to send in this transactions.
   */
  get value() {
    return O(this, Jo);
  }
  set value(e) {
    k(this, Jo, le(e, "value"));
  }
  /**
   *  The chain ID this transaction is valid on.
   */
  get chainId() {
    return O(this, Ko);
  }
  set chainId(e) {
    k(this, Ko, le(e));
  }
  /**
   *  If signed, the signature for this transaction.
   */
  get signature() {
    return O(this, Zo) || null;
  }
  set signature(e) {
    k(this, Zo, e == null ? null : Kr.from(e));
  }
  /**
   *  The access list.
   *
   *  An access list permits discounted (but pre-paid) access to
   *  bytecode and state variable access within contract execution.
   */
  get accessList() {
    const e = O(this, Xo) || null;
    return e ?? (this.type === 1 || this.type === 2 || this.type === 3 ? [] : null);
  }
  set accessList(e) {
    k(this, Xo, e == null ? null : Zi(e));
  }
  /**
   *  The max fee per blob gas for Cancun transactions.
   */
  get maxFeePerBlobGas() {
    const e = O(this, Ri);
    return e == null && this.type === 3 ? It : e;
  }
  set maxFeePerBlobGas(e) {
    k(this, Ri, e == null ? null : le(e, "maxFeePerBlobGas"));
  }
  /**
   *  The BLOb versioned hashes for Cancun transactions.
   */
  get blobVersionedHashes() {
    let e = O(this, Is);
    return e == null && this.type === 3 ? [] : e;
  }
  set blobVersionedHashes(e) {
    if (e != null) {
      L(Array.isArray(e), "blobVersionedHashes must be an Array", "value", e), e = e.slice();
      for (let r = 0; r < e.length; r++)
        L(qe(e[r], 32), "invalid blobVersionedHash", `value[${r}]`, e[r]);
    }
    k(this, Is, e);
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
    return O(this, Ts) == null ? null : O(this, Ts).map((e) => Object.assign({}, e));
  }
  set blobs(e) {
    if (e == null) {
      k(this, Ts, null);
      return;
    }
    const r = [], n = [];
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      if (Oh(i)) {
        Q(O(this, Hn), "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
          operation: "set blobs()"
        });
        let a = De(i);
        if (L(a.length <= Ku, "blob is too large", `blobs[${s}]`, i), a.length !== Ku) {
          const m = new Uint8Array(Ku);
          m.set(a), a = m;
        }
        const o = O(this, Hn).blobToKzgCommitment(a), c = oe(O(this, Hn).computeBlobKzgProof(a, o));
        r.push({
          data: oe(a),
          commitment: oe(o),
          proof: c
        }), n.push(tp(1, o));
      } else {
        const a = oe(i.commitment);
        r.push({
          data: oe(i.data),
          commitment: a,
          proof: oe(i.proof)
        }), n.push(tp(1, a));
      }
    }
    k(this, Ts, r), k(this, Is, n);
  }
  get kzg() {
    return O(this, Hn);
  }
  set kzg(e) {
    k(this, Hn, e);
  }
  /**
   *  The transaction hash, if signed. Otherwise, ``null``.
   */
  get hash() {
    return this.signature == null ? null : gt(K(this, Yo, Ec).call(this, !0, !1));
  }
  /**
   *  The pre-image hash of this transaction.
   *
   *  This is the digest that a [[Signer]] must sign to authorize
   *  this transaction.
   */
  get unsignedHash() {
    return gt(this.unsignedSerialized);
  }
  /**
   *  The sending address, if signed. Otherwise, ``null``.
   */
  get from() {
    return this.signature == null ? null : XE(this.unsignedHash, this.signature);
  }
  /**
   *  The public key of the sender, if signed. Otherwise, ``null``.
   */
  get fromPublicKey() {
    return this.signature == null ? null : Nl.recoverPublicKey(this.unsignedHash, this.signature);
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
    return K(this, Yo, Ec).call(this, !0, !0);
  }
  /**
   *  The transaction pre-image.
   *
   *  The hash of this is the digest which needs to be signed to
   *  authorize this transaction.
   */
  get unsignedSerialized() {
    return K(this, Yo, Ec).call(this, !1, !1);
  }
  /**
   *  Return the most "likely" type; currently the highest
   *  supported transaction type.
   */
  inferType() {
    const e = this.inferTypes();
    return e.indexOf(2) >= 0 ? 2 : e.pop();
  }
  /**
   *  Validates the explicit properties and returns a list of compatible
   *  transaction types.
   */
  inferTypes() {
    const e = this.gasPrice != null, r = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null, n = this.accessList != null, s = O(this, Ri) != null || O(this, Is);
    this.maxFeePerGas != null && this.maxPriorityFeePerGas != null && Q(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this }), Q(!r || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this }), Q(this.type !== 0 || !n, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
    const i = [];
    return this.type != null ? i.push(this.type) : r ? i.push(2) : e ? (i.push(1), n || i.push(0)) : n ? (i.push(1), i.push(2)) : (s && this.to || (i.push(0), i.push(1), i.push(2)), i.push(3)), i.sort(), i;
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
    return Mn.from(this);
  }
  /**
   *  Return a JSON-friendly object.
   */
  toJSON() {
    const e = (r) => r == null ? null : r.toString();
    return {
      type: this.type,
      to: this.to,
      //            from: this.from,
      data: this.data,
      nonce: this.nonce,
      gasLimit: e(this.gasLimit),
      gasPrice: e(this.gasPrice),
      maxPriorityFeePerGas: e(this.maxPriorityFeePerGas),
      maxFeePerGas: e(this.maxFeePerGas),
      value: e(this.value),
      chainId: e(this.chainId),
      sig: this.signature ? this.signature.toJSON() : null,
      accessList: this.accessList
    };
  }
  /**
   *  Create a **Transaction** from a serialized transaction or a
   *  Transaction-like object.
   */
  static from(e) {
    if (e == null)
      return new Mn();
    if (typeof e == "string") {
      const n = De(e);
      if (n[0] >= 127)
        return Mn.from(i_(n));
      switch (n[0]) {
        case 1:
          return Mn.from(c_(n));
        case 2:
          return Mn.from(a_(n));
        case 3:
          return Mn.from(f_(n));
      }
      Q(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
    }
    const r = new Mn();
    return e.type != null && (r.type = e.type), e.to != null && (r.to = e.to), e.nonce != null && (r.nonce = e.nonce), e.gasLimit != null && (r.gasLimit = e.gasLimit), e.gasPrice != null && (r.gasPrice = e.gasPrice), e.maxPriorityFeePerGas != null && (r.maxPriorityFeePerGas = e.maxPriorityFeePerGas), e.maxFeePerGas != null && (r.maxFeePerGas = e.maxFeePerGas), e.maxFeePerBlobGas != null && (r.maxFeePerBlobGas = e.maxFeePerBlobGas), e.data != null && (r.data = e.data), e.value != null && (r.value = e.value), e.chainId != null && (r.chainId = e.chainId), e.signature != null && (r.signature = Kr.from(e.signature)), e.accessList != null && (r.accessList = e.accessList), e.blobVersionedHashes != null && (r.blobVersionedHashes = e.blobVersionedHashes), e.kzg != null && (r.kzg = e.kzg), e.blobs != null && (r.blobs = e.blobs), e.hash != null && (L(r.isSigned(), "unsigned transaction cannot define '.hash'", "tx", e), L(r.hash === e.hash, "hash mismatch", "tx", e)), e.from != null && (L(r.isSigned(), "unsigned transaction cannot define '.from'", "tx", e), L(r.from.toLowerCase() === (e.from || "").toLowerCase(), "from mismatch", "tx", e)), r;
  }
};
un = new WeakMap(), Go = new WeakMap(), $o = new WeakMap(), Wo = new WeakMap(), Vo = new WeakMap(), zo = new WeakMap(), Qo = new WeakMap(), qo = new WeakMap(), Jo = new WeakMap(), Ko = new WeakMap(), Zo = new WeakMap(), Xo = new WeakMap(), Ri = new WeakMap(), Is = new WeakMap(), Hn = new WeakMap(), Ts = new WeakMap(), Yo = new WeakSet(), Ec = function(e, r) {
  Q(!e || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  const n = e ? this.signature : null;
  switch (this.inferType()) {
    case 0:
      return o_(this, n);
    case 1:
      return u_(this, n);
    case 2:
      return l_(this, n);
    case 3:
      return h_(this, n, r ? this.blobs : null);
  }
  Q(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
};
let $c = Mn;
const Ug = new Uint8Array(32);
Ug.fill(0);
const d_ = BigInt(-1), Fg = BigInt(0), jg = BigInt(1), p_ = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function m_(t) {
  const e = De(t), r = e.length % 32;
  return r ? pt([e, Ug.slice(r)]) : oe(e);
}
const g_ = Qs(jg, 32), y_ = Qs(Fg, 32), rp = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, Zu = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function np(t) {
  return function(e) {
    return L(typeof e == "string", `invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e;
  };
}
const b_ = {
  name: np("name"),
  version: np("version"),
  chainId: function(t) {
    const e = le(t, "domain.chainId");
    return L(e >= 0, "invalid chain ID", "domain.chainId", t), Number.isSafeInteger(e) ? Number(e) : vo(e);
  },
  verifyingContract: function(t) {
    try {
      return Ve(t).toLowerCase();
    } catch {
    }
    L(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", t);
  },
  salt: function(t) {
    const e = De(t, "domain.salt");
    return L(e.length === 32, 'invalid domain value "salt"', "domain.salt", t), oe(e);
  }
};
function Xu(t) {
  {
    const e = t.match(/^(u?)int(\d+)$/);
    if (e) {
      const r = e[1] === "", n = parseInt(e[2]);
      L(n % 8 === 0 && n !== 0 && n <= 256 && e[2] === String(n), "invalid numeric width", "type", t);
      const s = yi(p_, r ? n - 1 : n), i = r ? (s + jg) * d_ : Fg;
      return function(a) {
        const o = le(a, "value");
        return L(o >= i && o <= s, `value out-of-bounds for ${t}`, "value", o), Qs(r ? Jm(o, 256) : o, 32);
      };
    }
  }
  {
    const e = t.match(/^bytes(\d+)$/);
    if (e) {
      const r = parseInt(e[1]);
      return L(r !== 0 && r <= 32 && e[1] === String(r), "invalid bytes width", "type", t), function(n) {
        const s = De(n);
        return L(s.length === r, `invalid length for ${t}`, "value", n), m_(n);
      };
    }
  }
  switch (t) {
    case "address":
      return function(e) {
        return Gi(Ve(e), 32);
      };
    case "bool":
      return function(e) {
        return e ? g_ : y_;
      };
    case "bytes":
      return function(e) {
        return gt(e);
      };
    case "string":
      return function(e) {
        return Wi(e);
      };
  }
  return null;
}
function sp(t, e) {
  return `${t}(${e.map(({ name: r, type: n }) => n + " " + r).join(",")})`;
}
function dc(t) {
  const e = t.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
  return e ? {
    base: e[1],
    index: e[2] + e[4],
    array: {
      base: e[1],
      prefix: e[1] + e[2],
      count: e[5] ? parseInt(e[5]) : -1
    }
  } : { base: t };
}
var Hl, Gn, ea, Jc, Hg;
const Cr = class Cr {
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   *
   *  This performs all necessary checking that types are valid and
   *  do not violate the [[link-eip-712]] structural constraints as
   *  well as computes the [[primaryType]].
   */
  constructor(e) {
    $(this, Jc);
    /**
     *  The primary type for the structured [[types]].
     *
     *  This is derived automatically from the [[types]], since no
     *  recursion is possible, once the DAG for the types is consturcted
     *  internally, the primary type must be the only remaining type with
     *  no parent nodes.
     */
    F(this, "primaryType");
    $(this, Hl);
    $(this, Gn);
    $(this, ea);
    k(this, Gn, /* @__PURE__ */ new Map()), k(this, ea, /* @__PURE__ */ new Map());
    const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = {};
    Object.keys(e).forEach((c) => {
      i[c] = e[c].map(({ name: m, type: d }) => {
        let { base: l, index: f } = dc(d);
        return l === "int" && !e.int && (l = "int256"), l === "uint" && !e.uint && (l = "uint256"), { name: m, type: l + (f || "") };
      }), r.set(c, /* @__PURE__ */ new Set()), n.set(c, []), s.set(c, /* @__PURE__ */ new Set());
    }), k(this, Hl, JSON.stringify(i));
    for (const c in i) {
      const m = /* @__PURE__ */ new Set();
      for (const d of i[c]) {
        L(!m.has(d.name), `duplicate variable name ${JSON.stringify(d.name)} in ${JSON.stringify(c)}`, "types", e), m.add(d.name);
        const l = dc(d.type).base;
        L(l !== c, `circular type reference to ${JSON.stringify(l)}`, "types", e), !Xu(l) && (L(n.has(l), `unknown type ${JSON.stringify(l)}`, "types", e), n.get(l).push(c), r.get(c).add(l));
      }
    }
    const a = Array.from(n.keys()).filter((c) => n.get(c).length === 0);
    L(a.length !== 0, "missing primary type", "types", e), L(a.length === 1, `ambiguous primary types or unused types: ${a.map((c) => JSON.stringify(c)).join(", ")}`, "types", e), me(this, { primaryType: a[0] });
    function o(c, m) {
      L(!m.has(c), `circular type reference to ${JSON.stringify(c)}`, "types", e), m.add(c);
      for (const d of r.get(c))
        if (n.has(d)) {
          o(d, m);
          for (const l of m)
            s.get(l).add(d);
        }
      m.delete(c);
    }
    o(this.primaryType, /* @__PURE__ */ new Set());
    for (const [c, m] of s) {
      const d = Array.from(m);
      d.sort(), O(this, Gn).set(c, sp(c, i[c]) + d.map((l) => sp(l, i[l])).join(""));
    }
  }
  /**
   *  The types.
   */
  get types() {
    return JSON.parse(O(this, Hl));
  }
  /**
   *  Returnthe encoder for the specific %%type%%.
   */
  getEncoder(e) {
    let r = O(this, ea).get(e);
    return r || (r = K(this, Jc, Hg).call(this, e), O(this, ea).set(e, r)), r;
  }
  /**
   *  Return the full type for %%name%%.
   */
  encodeType(e) {
    const r = O(this, Gn).get(e);
    return L(r, `unknown type: ${JSON.stringify(e)}`, "name", e), r;
  }
  /**
   *  Return the encoded %%value%% for the %%type%%.
   */
  encodeData(e, r) {
    return this.getEncoder(e)(r);
  }
  /**
   *  Returns the hash of %%value%% for the type of %%name%%.
   */
  hashStruct(e, r) {
    return gt(this.encodeData(e, r));
  }
  /**
   *  Return the fulled encoded %%value%% for the [[types]].
   */
  encode(e) {
    return this.encodeData(this.primaryType, e);
  }
  /**
   *  Return the hash of the fully encoded %%value%% for the [[types]].
   */
  hash(e) {
    return this.hashStruct(this.primaryType, e);
  }
  /**
   *  @_ignore:
   */
  _visit(e, r, n) {
    if (Xu(e))
      return n(e, r);
    const s = dc(e).array;
    if (s)
      return L(s.count === -1 || s.count === r.length, `array length mismatch; expected length ${s.count}`, "value", r), r.map((a) => this._visit(s.prefix, a, n));
    const i = this.types[e];
    if (i)
      return i.reduce((a, { name: o, type: c }) => (a[o] = this._visit(c, r[o], n), a), {});
    L(!1, `unknown type: ${e}`, "type", e);
  }
  /**
   *  Call %%calback%% for each value in %%value%%, passing the type and
   *  component within %%value%%.
   *
   *  This is useful for replacing addresses or other transformation that
   *  may be desired on each component, based on its type.
   */
  visit(e, r) {
    return this._visit(this.primaryType, e, r);
  }
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   */
  static from(e) {
    return new Cr(e);
  }
  /**
   *  Return the primary type for %%types%%.
   */
  static getPrimaryType(e) {
    return Cr.from(e).primaryType;
  }
  /**
   *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
   */
  static hashStruct(e, r, n) {
    return Cr.from(r).hashStruct(e, n);
  }
  /**
   *  Return the domain hash for %%domain%%.
   */
  static hashDomain(e) {
    const r = [];
    for (const n in e) {
      if (e[n] == null)
        continue;
      const s = rp[n];
      L(s, `invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", e), r.push({ name: n, type: s });
    }
    return r.sort((n, s) => Zu.indexOf(n.name) - Zu.indexOf(s.name)), Cr.hashStruct("EIP712Domain", { EIP712Domain: r }, e);
  }
  /**
   *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static encode(e, r, n) {
    return pt([
      "0x1901",
      Cr.hashDomain(e),
      Cr.from(r).hash(n)
    ]);
  }
  /**
   *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static hash(e, r, n) {
    return gt(Cr.encode(e, r, n));
  }
  // Replaces all address types with ENS names with their looked up address
  /**
   * Resolves to the value from resolving all addresses in %%value%% for
   * %%types%% and the %%domain%%.
   */
  static async resolveNames(e, r, n, s) {
    e = Object.assign({}, e);
    for (const o in e)
      e[o] == null && delete e[o];
    const i = {};
    e.verifyingContract && !qe(e.verifyingContract, 20) && (i[e.verifyingContract] = "0x");
    const a = Cr.from(r);
    a.visit(n, (o, c) => (o === "address" && !qe(c, 20) && (i[c] = "0x"), c));
    for (const o in i)
      i[o] = await s(o);
    return e.verifyingContract && i[e.verifyingContract] && (e.verifyingContract = i[e.verifyingContract]), n = a.visit(n, (o, c) => o === "address" && i[c] ? i[c] : c), { domain: e, value: n };
  }
  /**
   *  Returns the JSON-encoded payload expected by nodes which implement
   *  the JSON-RPC [[link-eip-712]] method.
   */
  static getPayload(e, r, n) {
    Cr.hashDomain(e);
    const s = {}, i = [];
    Zu.forEach((c) => {
      const m = e[c];
      m != null && (s[c] = b_[c](m), i.push({ name: c, type: rp[c] }));
    });
    const a = Cr.from(r);
    r = a.types;
    const o = Object.assign({}, r);
    return L(o.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", r), o.EIP712Domain = i, a.encode(n), {
      types: o,
      domain: s,
      primaryType: a.primaryType,
      message: a.visit(n, (c, m) => {
        if (c.match(/^bytes(\d*)/))
          return oe(De(m));
        if (c.match(/^u?int/))
          return le(m).toString();
        switch (c) {
          case "address":
            return m.toLowerCase();
          case "bool":
            return !!m;
          case "string":
            return L(typeof m == "string", "invalid string", "value", m), m;
        }
        L(!1, "unsupported type", "type", c);
      })
    };
  }
};
Hl = new WeakMap(), Gn = new WeakMap(), ea = new WeakMap(), Jc = new WeakSet(), Hg = function(e) {
  {
    const s = Xu(e);
    if (s)
      return s;
  }
  const r = dc(e).array;
  if (r) {
    const s = r.prefix, i = this.getEncoder(s);
    return (a) => {
      L(r.count === -1 || r.count === a.length, `array length mismatch; expected length ${r.count}`, "value", a);
      let o = a.map(i);
      return O(this, Gn).has(s) && (o = o.map(gt)), gt(pt(o));
    };
  }
  const n = this.types[e];
  if (n) {
    const s = Wi(O(this, Gn).get(e));
    return (i) => {
      const a = n.map(({ name: o, type: c }) => {
        const m = this.getEncoder(c)(i[o]);
        return O(this, Gn).has(c) ? gt(m) : m;
      });
      return a.unshift(s), pt(a);
    };
  }
  L(!1, `unknown type: ${e}`, "type", e);
};
let Wc = Cr;
function nr(t) {
  const e = /* @__PURE__ */ new Set();
  return t.forEach((r) => e.add(r)), Object.freeze(e);
}
const w_ = "external public payable override", v_ = nr(w_.split(" ")), Gg = "constant external internal payable private public pure view override", A_ = nr(Gg.split(" ")), $g = "constructor error event fallback function receive struct", Wg = nr($g.split(" ")), Vg = "calldata memory storage payable indexed", E_ = nr(Vg.split(" ")), __ = "tuple returns", x_ = [$g, Vg, __, Gg].join(" "), S_ = nr(x_.split(" ")), O_ = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
}, I_ = new RegExp("^(\\s*)"), T_ = new RegExp("^([0-9]+)"), C_ = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), zg = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), Qg = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var Pt, Qr, Gl, Hf;
const Kc = class Kc {
  constructor(e) {
    $(this, Gl);
    $(this, Pt);
    $(this, Qr);
    k(this, Pt, 0), k(this, Qr, e.slice());
  }
  get offset() {
    return O(this, Pt);
  }
  get length() {
    return O(this, Qr).length - O(this, Pt);
  }
  clone() {
    return new Kc(O(this, Qr));
  }
  reset() {
    k(this, Pt, 0);
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(e) {
    const r = this.peek();
    if (r.type !== "KEYWORD" || !e.has(r.text))
      throw new Error(`expected keyword ${r.text}`);
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(e) {
    if (this.peek().type !== e) {
      const r = this.peek();
      throw new Error(`expected ${e}; got ${r.type} ${JSON.stringify(r.text)}`);
    }
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const e = this.peek();
    if (e.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const r = K(this, Gl, Hf).call(this, O(this, Pt) + 1, e.match + 1);
    return k(this, Pt, e.match + 1), r;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const e = this.peek();
    if (e.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const r = [];
    for (; O(this, Pt) < e.match - 1; ) {
      const n = this.peek().linkNext;
      r.push(K(this, Gl, Hf).call(this, O(this, Pt) + 1, n)), k(this, Pt, n);
    }
    return k(this, Pt, e.match + 1), r;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (O(this, Pt) >= O(this, Qr).length)
      throw new Error("out-of-bounds");
    return O(this, Qr)[O(this, Pt)];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(e) {
    const r = this.peekType("KEYWORD");
    return r != null && e.has(r) ? r : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(e) {
    if (this.length === 0)
      return null;
    const r = this.peek();
    return r.type === e ? r.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const e = this.peek();
    return al(this, Pt)._++, e;
  }
  toString() {
    const e = [];
    for (let r = O(this, Pt); r < O(this, Qr).length; r++) {
      const n = O(this, Qr)[r];
      e.push(`${n.type}:${n.text}`);
    }
    return `<TokenString ${e.join(" ")}>`;
  }
};
Pt = new WeakMap(), Qr = new WeakMap(), Gl = new WeakSet(), Hf = function(e = 0, r = 0) {
  return new Kc(O(this, Qr).slice(e, r).map((n) => Object.freeze(Object.assign({}, n, {
    match: n.match - e,
    linkBack: n.linkBack - e,
    linkNext: n.linkNext - e
  }))));
};
let Zr = Kc;
function Js(t) {
  const e = [], r = (a) => {
    const o = i < t.length ? JSON.stringify(t[i]) : "$EOI";
    throw new Error(`invalid token ${o} at ${i}: ${a}`);
  };
  let n = [], s = [], i = 0;
  for (; i < t.length; ) {
    let a = t.substring(i), o = a.match(I_);
    o && (i += o[1].length, a = t.substring(i));
    const c = { depth: n.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: i, value: -1 };
    e.push(c);
    let m = O_[a[0]] || "";
    if (m) {
      if (c.type = m, c.text = a[0], i++, m === "OPEN_PAREN")
        n.push(e.length - 1), s.push(e.length - 1);
      else if (m == "CLOSE_PAREN")
        n.length === 0 && r("no matching open bracket"), c.match = n.pop(), e[c.match].match = e.length - 1, c.depth--, c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1;
      else if (m === "COMMA")
        c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1, s.push(e.length - 1);
      else if (m === "OPEN_BRACKET")
        c.type = "BRACKET";
      else if (m === "CLOSE_BRACKET") {
        let d = e.pop().text;
        if (e.length > 0 && e[e.length - 1].type === "NUMBER") {
          const l = e.pop().text;
          d = l + d, e[e.length - 1].value = we(l);
        }
        if (e.length === 0 || e[e.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        e[e.length - 1].text += d;
      }
      continue;
    }
    if (o = a.match(C_), o) {
      if (c.text = o[1], i += c.text.length, S_.has(c.text)) {
        c.type = "KEYWORD";
        continue;
      }
      if (c.text.match(Qg)) {
        c.type = "TYPE";
        continue;
      }
      c.type = "ID";
      continue;
    }
    if (o = a.match(T_), o) {
      c.text = o[1], c.type = "NUMBER", i += c.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(a[0])} at position ${i}`);
  }
  return new Zr(e.map((a) => Object.freeze(a)));
}
function ip(t, e) {
  let r = [];
  for (const n in e.keys())
    t.has(n) && r.push(n);
  if (r.length > 1)
    throw new Error(`conflicting types: ${r.join(", ")}`);
}
function yu(t, e) {
  if (e.peekKeyword(Wg)) {
    const r = e.pop().text;
    if (r !== t)
      throw new Error(`expected ${t}, got ${r}`);
  }
  return e.popType("ID");
}
function ts(t, e) {
  const r = /* @__PURE__ */ new Set();
  for (; ; ) {
    const n = t.peekType("KEYWORD");
    if (n == null || e && !e.has(n))
      break;
    if (t.pop(), r.has(n))
      throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
    r.add(n);
  }
  return Object.freeze(r);
}
function qg(t) {
  let e = ts(t, A_);
  return ip(e, nr("constant payable nonpayable".split(" "))), ip(e, nr("pure view payable nonpayable".split(" "))), e.has("view") ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable";
}
function Yn(t, e) {
  return t.popParams().map((r) => Dt.from(r, e));
}
function Jg(t) {
  if (t.peekType("AT")) {
    if (t.pop(), t.peekType("NUMBER"))
      return le(t.pop().text);
    throw new Error("invalid gas");
  }
  return null;
}
function Vi(t) {
  if (t.length)
    throw new Error(`unexpected tokens at offset ${t.offset}: ${t.toString()}`);
}
const N_ = new RegExp(/^(.*)\[([0-9]*)\]$/);
function op(t) {
  const e = t.match(Qg);
  if (L(e, "invalid type", "type", t), t === "uint")
    return "uint256";
  if (t === "int")
    return "int256";
  if (e[2]) {
    const r = parseInt(e[2]);
    L(r !== 0 && r <= 32, "invalid bytes length", "type", t);
  } else if (e[3]) {
    const r = parseInt(e[3]);
    L(r !== 0 && r <= 256 && r % 8 === 0, "invalid numeric width", "type", t);
  }
  return t;
}
const rt = {}, ur = Symbol.for("_ethers_internal"), ap = "_ParamTypeInternal", lp = "_ErrorInternal", cp = "_EventInternal", up = "_ConstructorInternal", fp = "_FallbackInternal", hp = "_FunctionInternal", dp = "_StructInternal";
var ta, _c;
const Nr = class Nr {
  /**
   *  @private
   */
  constructor(e, r, n, s, i, a, o, c) {
    $(this, ta);
    /**
     *  The local name of the parameter (or ``""`` if unbound)
     */
    F(this, "name");
    /**
     *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
     *  ``"uint256[3][]"``)
     */
    F(this, "type");
    /**
     *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
     */
    F(this, "baseType");
    /**
     *  True if the parameters is indexed.
     *
     *  For non-indexable types this is ``null``.
     */
    F(this, "indexed");
    /**
     *  The components for the tuple.
     *
     *  For non-tuple types this is ``null``.
     */
    F(this, "components");
    /**
     *  The array length, or ``-1`` for dynamic-lengthed arrays.
     *
     *  For non-array types this is ``null``.
     */
    F(this, "arrayLength");
    /**
     *  The type of each child in the array.
     *
     *  For non-array types this is ``null``.
     */
    F(this, "arrayChildren");
    if (Yl(e, rt, "ParamType"), Object.defineProperty(this, ur, { value: ap }), a && (a = Object.freeze(a.slice())), s === "array") {
      if (o == null || c == null)
        throw new Error("");
    } else if (o != null || c != null)
      throw new Error("");
    if (s === "tuple") {
      if (a == null)
        throw new Error("");
    } else if (a != null)
      throw new Error("");
    me(this, {
      name: r,
      type: n,
      baseType: s,
      indexed: i,
      components: a,
      arrayLength: o,
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
  format(e) {
    if (e == null && (e = "sighash"), e === "json") {
      const n = this.name || "";
      if (this.isArray()) {
        const i = JSON.parse(this.arrayChildren.format("json"));
        return i.name = n, i.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(i);
      }
      const s = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: n
      };
      return typeof this.indexed == "boolean" && (s.indexed = this.indexed), this.isTuple() && (s.components = this.components.map((i) => JSON.parse(i.format(e)))), JSON.stringify(s);
    }
    let r = "";
    return this.isArray() ? (r += this.arrayChildren.format(e), r += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? r += "(" + this.components.map((n) => n.format(e)).join(e === "full" ? ", " : ",") + ")" : r += this.type, e !== "sighash" && (this.indexed === !0 && (r += " indexed"), e === "full" && this.name && (r += " " + this.name)), r;
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
  walk(e, r) {
    if (this.isArray()) {
      if (!Array.isArray(e))
        throw new Error("invalid array value");
      if (this.arrayLength !== -1 && e.length !== this.arrayLength)
        throw new Error("array is wrong length");
      const n = this;
      return e.map((s) => n.arrayChildren.walk(s, r));
    }
    if (this.isTuple()) {
      if (!Array.isArray(e))
        throw new Error("invalid tuple value");
      if (e.length !== this.components.length)
        throw new Error("array is wrong length");
      const n = this;
      return e.map((s, i) => n.components[i].walk(s, r));
    }
    return r(this.type, e);
  }
  /**
   *  Walks the **ParamType** with %%value%%, asynchronously calling
   *  %%process%% on each type, destructing the %%value%% recursively.
   *
   *  This can be used to resolve ENS names by walking and resolving each
   *  ``"address"`` type.
   */
  async walkAsync(e, r) {
    const n = [], s = [e];
    return K(this, ta, _c).call(this, n, e, r, (i) => {
      s[0] = i;
    }), n.length && await Promise.all(n), s[0];
  }
  /**
   *  Creates a new **ParamType** for %%obj%%.
   *
   *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
   *  otherwise the ``indexed`` keyword will throw an error.
   */
  static from(e, r) {
    if (Nr.isParamType(e))
      return e;
    if (typeof e == "string")
      try {
        return Nr.from(Js(e), r);
      } catch {
        L(!1, "invalid param type", "obj", e);
      }
    else if (e instanceof Zr) {
      let o = "", c = "", m = null;
      ts(e, nr(["tuple"])).has("tuple") || e.peekType("OPEN_PAREN") ? (c = "tuple", m = e.popParams().map((u) => Nr.from(u)), o = `tuple(${m.map((u) => u.format()).join(",")})`) : (o = op(e.popType("TYPE")), c = o);
      let d = null, l = null;
      for (; e.length && e.peekType("BRACKET"); ) {
        const u = e.pop();
        d = new Nr(rt, "", o, c, null, m, l, d), l = u.value, o += u.text, c = "array", m = null;
      }
      let f = null;
      if (ts(e, E_).has("indexed")) {
        if (!r)
          throw new Error("");
        f = !0;
      }
      const h = e.peekType("ID") ? e.pop().text : "";
      if (e.length)
        throw new Error("leftover tokens");
      return new Nr(rt, h, o, c, f, m, l, d);
    }
    const n = e.name;
    L(!n || typeof n == "string" && n.match(zg), "invalid name", "obj.name", n);
    let s = e.indexed;
    s != null && (L(r, "parameter cannot be indexed", "obj.indexed", e.indexed), s = !!s);
    let i = e.type, a = i.match(N_);
    if (a) {
      const o = parseInt(a[2] || "-1"), c = Nr.from({
        type: a[1],
        components: e.components
      });
      return new Nr(rt, n || "", i, "array", s, null, o, c);
    }
    if (i === "tuple" || i.startsWith(
      "tuple("
      /* fix: ) */
    ) || i.startsWith(
      "("
      /* fix: ) */
    )) {
      const o = e.components != null ? e.components.map((m) => Nr.from(m)) : null;
      return new Nr(rt, n || "", i, "tuple", s, o, null, null);
    }
    return i = op(e.type), new Nr(rt, n || "", i, i, s, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(e) {
    return e && e[ur] === ap;
  }
};
ta = new WeakSet(), _c = function(e, r, n, s) {
  if (this.isArray()) {
    if (!Array.isArray(r))
      throw new Error("invalid array value");
    if (this.arrayLength !== -1 && r.length !== this.arrayLength)
      throw new Error("array is wrong length");
    const a = this.arrayChildren, o = r.slice();
    o.forEach((c, m) => {
      var d;
      K(d = a, ta, _c).call(d, e, c, n, (l) => {
        o[m] = l;
      });
    }), s(o);
    return;
  }
  if (this.isTuple()) {
    const a = this.components;
    let o;
    if (Array.isArray(r))
      o = r.slice();
    else {
      if (r == null || typeof r != "object")
        throw new Error("invalid tuple value");
      o = a.map((c) => {
        if (!c.name)
          throw new Error("cannot use object value with unnamed components");
        if (!(c.name in r))
          throw new Error(`missing value for component ${c.name}`);
        return r[c.name];
      });
    }
    if (o.length !== this.components.length)
      throw new Error("array is wrong length");
    o.forEach((c, m) => {
      var d;
      K(d = a[m], ta, _c).call(d, e, c, n, (l) => {
        o[m] = l;
      });
    }), s(o);
    return;
  }
  const i = n(this.type, r);
  i.then ? e.push(async function() {
    s(await i);
  }()) : s(i);
};
let Dt = Nr;
class zi {
  /**
   *  @private
   */
  constructor(e, r, n) {
    /**
     *  The type of the fragment.
     */
    F(this, "type");
    /**
     *  The inputs for the fragment.
     */
    F(this, "inputs");
    Yl(e, rt, "Fragment"), n = Object.freeze(n.slice()), me(this, { type: r, inputs: n });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(e) {
    if (typeof e == "string") {
      try {
        zi.from(JSON.parse(e));
      } catch {
      }
      return zi.from(Js(e));
    }
    if (e instanceof Zr)
      switch (e.peekKeyword(Wg)) {
        case "constructor":
          return Kn.from(e);
        case "error":
          return cr.from(e);
        case "event":
          return yn.from(e);
        case "fallback":
        case "receive":
          return Dn.from(e);
        case "function":
          return bn.from(e);
        case "struct":
          return Hi.from(e);
      }
    else if (typeof e == "object") {
      switch (e.type) {
        case "constructor":
          return Kn.from(e);
        case "error":
          return cr.from(e);
        case "event":
          return yn.from(e);
        case "fallback":
        case "receive":
          return Dn.from(e);
        case "function":
          return bn.from(e);
        case "struct":
          return Hi.from(e);
      }
      Q(!1, `unsupported type: ${e.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    L(!1, "unsupported frgament object", "obj", e);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(e) {
    return Kn.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(e) {
    return cr.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(e) {
    return yn.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(e) {
    return bn.isFragment(e);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(e) {
    return Hi.isFragment(e);
  }
}
class bu extends zi {
  /**
   *  @private
   */
  constructor(r, n, s, i) {
    super(r, n, i);
    /**
     *  The name of the fragment.
     */
    F(this, "name");
    L(typeof s == "string" && s.match(zg), "invalid identifier", "name", s), i = Object.freeze(i.slice()), me(this, { name: s });
  }
}
function Ml(t, e) {
  return "(" + e.map((r) => r.format(t)).join(t === "full" ? ", " : ",") + ")";
}
class cr extends bu {
  /**
   *  @private
   */
  constructor(e, r, n) {
    super(e, "error", r, n), Object.defineProperty(this, ur, { value: lp });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return Wi(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this fragment as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
    const r = [];
    return e !== "sighash" && r.push("error"), r.push(this.name + Ml(e, this.inputs)), r.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(e) {
    if (cr.isFragment(e))
      return e;
    if (typeof e == "string")
      return cr.from(Js(e));
    if (e instanceof Zr) {
      const r = yu("error", e), n = Yn(e);
      return Vi(e), new cr(rt, r, n);
    }
    return new cr(rt, e.name, e.inputs ? e.inputs.map(Dt.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(e) {
    return e && e[ur] === lp;
  }
}
class yn extends bu {
  /**
   *  @private
   */
  constructor(r, n, s, i) {
    super(r, "event", n, s);
    /**
     *  Whether this event is anonymous.
     */
    F(this, "anonymous");
    Object.defineProperty(this, ur, { value: cp }), me(this, { anonymous: i });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return Wi(this.format("sighash"));
  }
  /**
   *  Returns a string representation of this event as %%format%%.
   */
  format(r) {
    if (r == null && (r = "sighash"), r === "json")
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((s) => JSON.parse(s.format(r)))
      });
    const n = [];
    return r !== "sighash" && n.push("event"), n.push(this.name + Ml(r, this.inputs)), r !== "sighash" && this.anonymous && n.push("anonymous"), n.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(r, n) {
    return n = (n || []).map((i) => Dt.from(i)), new yn(rt, r, n, !1).topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(r) {
    if (yn.isFragment(r))
      return r;
    if (typeof r == "string")
      try {
        return yn.from(Js(r));
      } catch {
        L(!1, "invalid event fragment", "obj", r);
      }
    else if (r instanceof Zr) {
      const n = yu("event", r), s = Yn(r, !0), i = !!ts(r, nr(["anonymous"])).has("anonymous");
      return Vi(r), new yn(rt, n, s, i);
    }
    return new yn(rt, r.name, r.inputs ? r.inputs.map((n) => Dt.from(n, !0)) : [], !!r.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(r) {
    return r && r[ur] === cp;
  }
}
class Kn extends zi {
  /**
   *  @private
   */
  constructor(r, n, s, i, a) {
    super(r, n, s);
    /**
     *  Whether the constructor can receive an endowment.
     */
    F(this, "payable");
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    F(this, "gas");
    Object.defineProperty(this, ur, { value: up }), me(this, { payable: i, gas: a });
  }
  /**
   *  Returns a string representation of this constructor as %%format%%.
   */
  format(r) {
    if (Q(r != null && r !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" }), r === "json")
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(r)))
      });
    const n = [`constructor${Ml(r, this.inputs)}`];
    return this.payable && n.push("payable"), this.gas != null && n.push(`@${this.gas.toString()}`), n.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(r) {
    if (Kn.isFragment(r))
      return r;
    if (typeof r == "string")
      try {
        return Kn.from(Js(r));
      } catch {
        L(!1, "invalid constuctor fragment", "obj", r);
      }
    else if (r instanceof Zr) {
      ts(r, nr(["constructor"]));
      const n = Yn(r), s = !!ts(r, v_).has("payable"), i = Jg(r);
      return Vi(r), new Kn(rt, "constructor", n, s, i);
    }
    return new Kn(rt, "constructor", r.inputs ? r.inputs.map(Dt.from) : [], !!r.payable, r.gas != null ? r.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(r) {
    return r && r[ur] === up;
  }
}
class Dn extends zi {
  constructor(r, n, s) {
    super(r, "fallback", n);
    /**
     *  If the function can be sent value during invocation.
     */
    F(this, "payable");
    Object.defineProperty(this, ur, { value: fp }), me(this, { payable: s });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(r) {
    const n = this.inputs.length === 0 ? "receive" : "fallback";
    if (r === "json") {
      const s = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type: n, stateMutability: s });
    }
    return `${n}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(r) {
    if (Dn.isFragment(r))
      return r;
    if (typeof r == "string")
      try {
        return Dn.from(Js(r));
      } catch {
        L(!1, "invalid fallback fragment", "obj", r);
      }
    else if (r instanceof Zr) {
      const n = r.toString(), s = r.peekKeyword(nr(["fallback", "receive"]));
      if (L(s, "type must be fallback or receive", "obj", n), r.popKeyword(nr(["fallback", "receive"])) === "receive") {
        const c = Yn(r);
        return L(c.length === 0, "receive cannot have arguments", "obj.inputs", c), ts(r, nr(["payable"])), Vi(r), new Dn(rt, [], !0);
      }
      let a = Yn(r);
      a.length ? L(a.length === 1 && a[0].type === "bytes", "invalid fallback inputs", "obj.inputs", a.map((c) => c.format("minimal")).join(", ")) : a = [Dt.from("bytes")];
      const o = qg(r);
      if (L(o === "nonpayable" || o === "payable", "fallback cannot be constants", "obj.stateMutability", o), ts(r, nr(["returns"])).has("returns")) {
        const c = Yn(r);
        L(c.length === 1 && c[0].type === "bytes", "invalid fallback outputs", "obj.outputs", c.map((m) => m.format("minimal")).join(", "));
      }
      return Vi(r), new Dn(rt, a, o === "payable");
    }
    if (r.type === "receive")
      return new Dn(rt, [], !0);
    if (r.type === "fallback") {
      const n = [Dt.from("bytes")], s = r.stateMutability === "payable";
      return new Dn(rt, n, s);
    }
    L(!1, "invalid fallback description", "obj", r);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(r) {
    return r && r[ur] === fp;
  }
}
class bn extends bu {
  /**
   *  @private
   */
  constructor(r, n, s, i, a, o) {
    super(r, "function", n, i);
    /**
     *  If the function is constant (e.g. ``pure`` or ``view`` functions).
     */
    F(this, "constant");
    /**
     *  The returned types for the result of calling this function.
     */
    F(this, "outputs");
    /**
     *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
     *  or ``pure``)
     */
    F(this, "stateMutability");
    /**
     *  If the function can be sent value during invocation.
     */
    F(this, "payable");
    /**
     *  The recommended gas limit to send when calling this function.
     */
    F(this, "gas");
    Object.defineProperty(this, ur, { value: hp }), a = Object.freeze(a.slice()), me(this, { constant: s === "view" || s === "pure", gas: o, outputs: a, payable: s === "payable", stateMutability: s });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return Wi(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this function as %%format%%.
   */
  format(r) {
    if (r == null && (r = "sighash"), r === "json")
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(r))),
        outputs: this.outputs.map((s) => JSON.parse(s.format(r)))
      });
    const n = [];
    return r !== "sighash" && n.push("function"), n.push(this.name + Ml(r, this.inputs)), r !== "sighash" && (this.stateMutability !== "nonpayable" && n.push(this.stateMutability), this.outputs && this.outputs.length && (n.push("returns"), n.push(Ml(r, this.outputs))), this.gas != null && n.push(`@${this.gas.toString()}`)), n.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(r, n) {
    return n = (n || []).map((i) => Dt.from(i)), new bn(rt, r, "view", n, [], null).selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(r) {
    if (bn.isFragment(r))
      return r;
    if (typeof r == "string")
      try {
        return bn.from(Js(r));
      } catch {
        L(!1, "invalid function fragment", "obj", r);
      }
    else if (r instanceof Zr) {
      const s = yu("function", r), i = Yn(r), a = qg(r);
      let o = [];
      ts(r, nr(["returns"])).has("returns") && (o = Yn(r));
      const c = Jg(r);
      return Vi(r), new bn(rt, s, a, i, o, c);
    }
    let n = r.stateMutability;
    return n == null && (n = "payable", typeof r.constant == "boolean" ? (n = "view", r.constant || (n = "payable", typeof r.payable == "boolean" && !r.payable && (n = "nonpayable"))) : typeof r.payable == "boolean" && !r.payable && (n = "nonpayable")), new bn(rt, r.name, n, r.inputs ? r.inputs.map(Dt.from) : [], r.outputs ? r.outputs.map(Dt.from) : [], r.gas != null ? r.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(r) {
    return r && r[ur] === hp;
  }
}
class Hi extends bu {
  /**
   *  @private
   */
  constructor(e, r, n) {
    super(e, "struct", r, n), Object.defineProperty(this, ur, { value: dp });
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
  static from(e) {
    if (typeof e == "string")
      try {
        return Hi.from(Js(e));
      } catch {
        L(!1, "invalid struct fragment", "obj", e);
      }
    else if (e instanceof Zr) {
      const r = yu("struct", e), n = Yn(e);
      return Vi(e), new Hi(rt, r, n);
    }
    return new Hi(rt, e.name, e.inputs ? e.inputs.map(Dt.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(e) {
    return e && e[ur] === dp;
  }
}
const Yr = /* @__PURE__ */ new Map();
Yr.set(0, "GENERIC_PANIC");
Yr.set(1, "ASSERT_FALSE");
Yr.set(17, "OVERFLOW");
Yr.set(18, "DIVIDE_BY_ZERO");
Yr.set(33, "ENUM_RANGE_ERROR");
Yr.set(34, "BAD_STORAGE_DATA");
Yr.set(49, "STACK_UNDERFLOW");
Yr.set(50, "ARRAY_RANGE_ERROR");
Yr.set(65, "OUT_OF_MEMORY");
Yr.set(81, "UNINITIALIZED_FUNCTION_CALL");
const R_ = new RegExp(/^bytes([0-9]*)$/), P_ = new RegExp(/^(u?int)([0-9]*)$/);
let Yu = null, pp = 1024;
function k_(t, e, r, n) {
  let s = "missing revert data", i = null;
  const a = null;
  let o = null;
  if (r) {
    s = "execution reverted";
    const m = De(r);
    if (r = oe(r), m.length === 0)
      s += " (no data present; likely require(false) occurred", i = "require(false)";
    else if (m.length % 32 !== 4)
      s += " (could not decode reason; invalid data length)";
    else if (oe(m.slice(0, 4)) === "0x08c379a0")
      try {
        i = n.decode(["string"], m.slice(4))[0], o = {
          signature: "Error(string)",
          name: "Error",
          args: [i]
        }, s += `: ${JSON.stringify(i)}`;
      } catch {
        s += " (could not decode reason; invalid string data)";
      }
    else if (oe(m.slice(0, 4)) === "0x4e487b71")
      try {
        const d = Number(n.decode(["uint256"], m.slice(4))[0]);
        o = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [d]
        }, i = `Panic due to ${Yr.get(d) || "UNKNOWN"}(${d})`, s += `: ${i}`;
      } catch {
        s += " (could not decode panic code)";
      }
    else
      s += " (unknown custom error)";
  }
  const c = {
    to: e.to ? Ve(e.to) : null,
    data: e.data || "0x"
  };
  return e.from && (c.from = Ve(e.from)), ot(s, "CALL_EXCEPTION", {
    action: t,
    data: r,
    reason: i,
    transaction: c,
    invocation: a,
    revert: o
  });
}
var Cs, go;
const Zc = class Zc {
  constructor() {
    $(this, Cs);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(e) {
    const r = e.map((s) => K(this, Cs, go).call(this, Dt.from(s)));
    return new hc(r, "_").defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(e, r) {
    zm(r.length, e.length, "types/values length mismatch");
    const n = e.map((a) => K(this, Cs, go).call(this, Dt.from(a))), s = new hc(n, "_"), i = new Pf();
    return s.encode(i, r), i.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(e, r, n) {
    const s = e.map((a) => K(this, Cs, go).call(this, Dt.from(a)));
    return new hc(s, "_").decode(new kf(r, n, pp));
  }
  static _setDefaultMaxInflation(e) {
    L(typeof e == "number" && Number.isInteger(e), "invalid defaultMaxInflation factor", "value", e), pp = e;
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    return Yu == null && (Yu = new Zc()), Yu;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(e, r, n) {
    return k_(e, r, n, Zc.defaultAbiCoder());
  }
};
Cs = new WeakSet(), go = function(e) {
  if (e.isArray())
    return new rE(K(this, Cs, go).call(this, e.arrayChildren), e.arrayLength, e.name);
  if (e.isTuple())
    return new hc(e.components.map((n) => K(this, Cs, go).call(this, n)), e.name);
  switch (e.baseType) {
    case "address":
      return new eE(e.name);
    case "bool":
      return new nE(e.name);
    case "string":
      return new hE(e.name);
    case "bytes":
      return new sE(e.name);
    case "":
      return new aE(e.name);
  }
  let r = e.type.match(P_);
  if (r) {
    let n = parseInt(r[2] || "256");
    return L(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + r[1] + " bit length", "param", e), new fE(n / 8, r[1] === "int", e.name);
  }
  if (r = e.type.match(R_), r) {
    let n = parseInt(r[1]);
    return L(n !== 0 && n <= 32, "invalid bytes length", "param", e), new iE(n, e.name);
  }
  L(!1, "invalid type", "type", e.type);
};
let Dl = Zc;
class B_ {
  /**
   *  @_ignore:
   */
  constructor(e, r, n) {
    /**
     *  The matching fragment for the ``topic0``.
     */
    F(this, "fragment");
    /**
     *  The name of the Event.
     */
    F(this, "name");
    /**
     *  The full Event signature.
     */
    F(this, "signature");
    /**
     *  The topic hash for the Event.
     */
    F(this, "topic");
    /**
     *  The arguments passed into the Event with ``emit``.
     */
    F(this, "args");
    const s = e.name, i = e.format();
    me(this, {
      fragment: e,
      name: s,
      signature: i,
      topic: r,
      args: n
    });
  }
}
class M_ {
  /**
   *  @_ignore:
   */
  constructor(e, r, n, s) {
    /**
     *  The matching fragment from the transaction ``data``.
     */
    F(this, "fragment");
    /**
     *  The name of the Function from the transaction ``data``.
     */
    F(this, "name");
    /**
     *  The arguments passed to the Function from the transaction ``data``.
     */
    F(this, "args");
    /**
     *  The full Function signature from the transaction ``data``.
     */
    F(this, "signature");
    /**
     *  The selector for the Function from the transaction ``data``.
     */
    F(this, "selector");
    /**
     *  The ``value`` (in wei) from the transaction.
     */
    F(this, "value");
    const i = e.name, a = e.format();
    me(this, {
      fragment: e,
      name: i,
      args: n,
      signature: a,
      selector: r,
      value: s
    });
  }
}
class D_ {
  /**
   *  @_ignore:
   */
  constructor(e, r, n) {
    /**
     *  The matching fragment.
     */
    F(this, "fragment");
    /**
     *  The name of the Error.
     */
    F(this, "name");
    /**
     *  The arguments passed to the Error with ``revert``.
     */
    F(this, "args");
    /**
     *  The full Error signature.
     */
    F(this, "signature");
    /**
     *  The selector for the Error.
     */
    F(this, "selector");
    const s = e.name, i = e.format();
    me(this, {
      fragment: e,
      name: s,
      args: n,
      signature: i,
      selector: r
    });
  }
}
class mp {
  /**
   *  @_ignore:
   */
  constructor(e) {
    /**
     *  The ``keccak256`` of the value logged.
     */
    F(this, "hash");
    /**
     *  @_ignore:
     */
    F(this, "_isIndexed");
    me(this, { hash: e, _isIndexed: !0 });
  }
  /**
   *  Returns ``true`` if %%value%% is an **Indexed**.
   *
   *  This provides a Type Guard for property access.
   */
  static isIndexed(e) {
    return !!(e && e._isIndexed);
  }
}
const gp = {
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
}, yp = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (t) => `reverted with reason string ${JSON.stringify(t)}`
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (t) => {
      let e = "unknown panic code";
      return t >= 0 && t <= 255 && gp[t.toString()] && (e = gp[t.toString()]), `reverted with panic code 0x${t.toString(16)} (${e})`;
    }
  }
};
var fn, hn, dn, Ut, vn, xc, Sc;
const mi = class mi {
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(e) {
    $(this, vn);
    /**
     *  All the Contract ABI members (i.e. methods, events, errors, etc).
     */
    F(this, "fragments");
    /**
     *  The Contract constructor.
     */
    F(this, "deploy");
    /**
     *  The Fallback method, if any.
     */
    F(this, "fallback");
    /**
     *  If receiving ether is supported.
     */
    F(this, "receive");
    $(this, fn);
    $(this, hn);
    $(this, dn);
    //    #structs: Map<string, StructFragment>;
    $(this, Ut);
    let r = [];
    typeof e == "string" ? r = JSON.parse(e) : r = e, k(this, dn, /* @__PURE__ */ new Map()), k(this, fn, /* @__PURE__ */ new Map()), k(this, hn, /* @__PURE__ */ new Map());
    const n = [];
    for (const a of r)
      try {
        n.push(zi.from(a));
      } catch (o) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(a)}:`, o.message);
      }
    me(this, {
      fragments: Object.freeze(n)
    });
    let s = null, i = !1;
    k(this, Ut, this.getAbiCoder()), this.fragments.forEach((a, o) => {
      let c;
      switch (a.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          me(this, { deploy: a });
          return;
        case "fallback":
          a.inputs.length === 0 ? i = !0 : (L(!s || a.payable !== s.payable, "conflicting fallback fragments", `fragments[${o}]`, a), s = a, i = s.payable);
          return;
        case "function":
          c = O(this, dn);
          break;
        case "event":
          c = O(this, hn);
          break;
        case "error":
          c = O(this, fn);
          break;
        default:
          return;
      }
      const m = a.format();
      c.has(m) || c.set(m, a);
    }), this.deploy || me(this, {
      deploy: Kn.from("constructor()")
    }), me(this, { fallback: s, receive: i });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(e) {
    const r = e ? "minimal" : "full";
    return this.fragments.map((s) => s.format(r));
  }
  /**
   *  Return the JSON-encoded ABI. This is the format Solidiy
   *  returns.
   */
  formatJson() {
    const e = this.fragments.map((r) => r.format("json"));
    return JSON.stringify(e.map((r) => JSON.parse(r)));
  }
  /**
   *  The ABI coder that will be used to encode and decode binary
   *  data.
   */
  getAbiCoder() {
    return Dl.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(e) {
    const r = K(this, vn, xc).call(this, e, null, !1);
    return L(r, "no matching function", "key", e), r.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(e) {
    return !!K(this, vn, xc).call(this, e, null, !1);
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
  getFunction(e, r) {
    return K(this, vn, xc).call(this, e, r || null, !0);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(e) {
    const r = Array.from(O(this, dn).keys());
    r.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < r.length; n++) {
      const s = r[n];
      e(O(this, dn).get(s), n);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(e) {
    const r = K(this, vn, Sc).call(this, e, null, !1);
    return L(r, "no matching event", "key", e), r.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(e) {
    return !!K(this, vn, Sc).call(this, e, null, !1);
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
  getEvent(e, r) {
    return K(this, vn, Sc).call(this, e, r || null, !0);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(e) {
    const r = Array.from(O(this, hn).keys());
    r.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < r.length; n++) {
      const s = r[n];
      e(O(this, hn).get(s), n);
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
  getError(e, r) {
    if (qe(e)) {
      const s = e.toLowerCase();
      if (yp[s])
        return cr.from(yp[s].signature);
      for (const i of O(this, fn).values())
        if (s === i.selector)
          return i;
      return null;
    }
    if (e.indexOf("(") === -1) {
      const s = [];
      for (const [i, a] of O(this, fn))
        i.split(
          "("
          /* fix:) */
        )[0] === e && s.push(a);
      if (s.length === 0)
        return e === "Error" ? cr.from("error Error(string)") : e === "Panic" ? cr.from("error Panic(uint256)") : null;
      if (s.length > 1) {
        const i = s.map((a) => JSON.stringify(a.format())).join(", ");
        L(!1, `ambiguous error description (i.e. ${i})`, "name", e);
      }
      return s[0];
    }
    if (e = cr.from(e).format(), e === "Error(string)")
      return cr.from("error Error(string)");
    if (e === "Panic(uint256)")
      return cr.from("error Panic(uint256)");
    const n = O(this, fn).get(e);
    return n || null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(e) {
    const r = Array.from(O(this, fn).keys());
    r.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < r.length; n++) {
      const s = r[n];
      e(O(this, fn).get(s), n);
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
  _decodeParams(e, r) {
    return O(this, Ut).decode(e, r);
  }
  _encodeParams(e, r) {
    return O(this, Ut).encode(e, r);
  }
  /**
   *  Encodes a ``tx.data`` object for deploying the Contract with
   *  the %%values%% as the constructor arguments.
   */
  encodeDeploy(e) {
    return this._encodeParams(this.deploy.inputs, e || []);
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
  decodeErrorResult(e, r) {
    if (typeof e == "string") {
      const n = this.getError(e);
      L(n, "unknown error", "fragment", e), e = n;
    }
    return L(at(r, 0, 4) === e.selector, `data signature does not match error ${e.name}.`, "data", r), this._decodeParams(e.inputs, at(r, 4));
  }
  /**
   *  Encodes the transaction revert data for a call result that
   *  reverted from the the Contract with the sepcified %%error%%
   *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeErrorResult(e, r) {
    if (typeof e == "string") {
      const n = this.getError(e);
      L(n, "unknown error", "fragment", e), e = n;
    }
    return pt([
      e.selector,
      this._encodeParams(e.inputs, r || [])
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
  decodeFunctionData(e, r) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      L(n, "unknown function", "fragment", e), e = n;
    }
    return L(at(r, 0, 4) === e.selector, `data signature does not match function ${e.name}.`, "data", r), this._decodeParams(e.inputs, at(r, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(e, r) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      L(n, "unknown function", "fragment", e), e = n;
    }
    return pt([
      e.selector,
      this._encodeParams(e.inputs, r || [])
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
  decodeFunctionResult(e, r) {
    if (typeof e == "string") {
      const i = this.getFunction(e);
      L(i, "unknown function", "fragment", e), e = i;
    }
    let n = "invalid length for result data";
    const s = Yt(r);
    if (s.length % 32 === 0)
      try {
        return O(this, Ut).decode(e.outputs, s);
      } catch {
        n = "could not decode result data";
      }
    Q(!1, n, "BAD_DATA", {
      value: oe(s),
      info: { method: e.name, signature: e.format() }
    });
  }
  makeError(e, r) {
    const n = De(e, "data"), s = Dl.getBuiltinCallException("call", r, n);
    if (s.message.startsWith("execution reverted (unknown custom error)")) {
      const o = oe(n.slice(0, 4)), c = this.getError(o);
      if (c)
        try {
          const m = O(this, Ut).decode(c.inputs, n.slice(4));
          s.revert = {
            name: c.name,
            signature: c.format(),
            args: m
          }, s.reason = s.revert.signature, s.message = `execution reverted: ${s.reason}`;
        } catch {
          s.message = "execution reverted (coult not decode custom error)";
        }
    }
    const a = this.parseTransaction(r);
    return a && (s.invocation = {
      method: a.name,
      signature: a.signature,
      args: a.args
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
  encodeFunctionResult(e, r) {
    if (typeof e == "string") {
      const n = this.getFunction(e);
      L(n, "unknown function", "fragment", e), e = n;
    }
    return oe(O(this, Ut).encode(e.outputs, r || []));
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
  encodeFilterTopics(e, r) {
    if (typeof e == "string") {
      const i = this.getEvent(e);
      L(i, "unknown event", "eventFragment", e), e = i;
    }
    Q(r.length <= e.inputs.length, `too many arguments for ${e.format()}`, "UNEXPECTED_ARGUMENT", { count: r.length, expectedCount: e.inputs.length });
    const n = [];
    e.anonymous || n.push(e.topicHash);
    const s = (i, a) => i.type === "string" ? Wi(a) : i.type === "bytes" ? gt(oe(a)) : (i.type === "bool" && typeof a == "boolean" ? a = a ? "0x01" : "0x00" : i.type.match(/^u?int/) ? a = Qs(a) : i.type.match(/^bytes/) ? a = bA(a, 32) : i.type === "address" && O(this, Ut).encode(["address"], [a]), Gi(oe(a), 32));
    for (r.forEach((i, a) => {
      const o = e.inputs[a];
      if (!o.indexed) {
        L(i == null, "cannot filter non-indexed parameters; must be null", "contract." + o.name, i);
        return;
      }
      i == null ? n.push(null) : o.baseType === "array" || o.baseType === "tuple" ? L(!1, "filtering with tuples or arrays not supported", "contract." + o.name, i) : Array.isArray(i) ? n.push(i.map((c) => s(o, c))) : n.push(s(o, i));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(e, r) {
    if (typeof e == "string") {
      const a = this.getEvent(e);
      L(a, "unknown event", "eventFragment", e), e = a;
    }
    const n = [], s = [], i = [];
    return e.anonymous || n.push(e.topicHash), L(r.length === e.inputs.length, "event arguments/values mismatch", "values", r), e.inputs.forEach((a, o) => {
      const c = r[o];
      if (a.indexed)
        if (a.type === "string")
          n.push(Wi(c));
        else if (a.type === "bytes")
          n.push(gt(c));
        else {
          if (a.baseType === "tuple" || a.baseType === "array")
            throw new Error("not implemented");
          n.push(O(this, Ut).encode([a.type], [c]));
        }
      else
        s.push(a), i.push(c);
    }), {
      data: O(this, Ut).encode(s, i),
      topics: n
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(e, r, n) {
    if (typeof e == "string") {
      const g = this.getEvent(e);
      L(g, "unknown event", "eventFragment", e), e = g;
    }
    if (n != null && !e.anonymous) {
      const g = e.topicHash;
      L(qe(n[0], 32) && n[0].toLowerCase() === g, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
    }
    const s = [], i = [], a = [];
    e.inputs.forEach((g, h) => {
      g.indexed ? g.type === "string" || g.type === "bytes" || g.baseType === "tuple" || g.baseType === "array" ? (s.push(Dt.from({ type: "bytes32", name: g.name })), a.push(!0)) : (s.push(g), a.push(!1)) : (i.push(g), a.push(!1));
    });
    const o = n != null ? O(this, Ut).decode(s, pt(n)) : null, c = O(this, Ut).decode(i, r, !0), m = [], d = [];
    let l = 0, f = 0;
    return e.inputs.forEach((g, h) => {
      let u = null;
      if (g.indexed)
        if (o == null)
          u = new mp(null);
        else if (a[h])
          u = new mp(o[f++]);
        else
          try {
            u = o[f++];
          } catch (b) {
            u = b;
          }
      else
        try {
          u = c[l++];
        } catch (b) {
          u = b;
        }
      m.push(u), d.push(g.name || null);
    }), Oa.fromItems(m, d);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(e) {
    const r = De(e.data, "tx.data"), n = le(e.value != null ? e.value : 0, "tx.value"), s = this.getFunction(oe(r.slice(0, 4)));
    if (!s)
      return null;
    const i = O(this, Ut).decode(s.inputs, r.slice(4));
    return new M_(s, s.selector, i, n);
  }
  parseCallResult(e) {
    throw new Error("@TODO");
  }
  /**
   *  Parses a receipt log, finding the matching event and extracts
   *  the parameter values along with other useful event details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseLog(e) {
    const r = this.getEvent(e.topics[0]);
    return !r || r.anonymous ? null : new B_(r, r.topicHash, this.decodeEventLog(r, e.data, e.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(e) {
    const r = oe(e), n = this.getError(at(r, 0, 4));
    if (!n)
      return null;
    const s = O(this, Ut).decode(n.inputs, at(r, 4));
    return new D_(n, n.selector, s);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(e) {
    return e instanceof mi ? e : typeof e == "string" ? new mi(JSON.parse(e)) : typeof e.formatJson == "function" ? new mi(e.formatJson()) : typeof e.format == "function" ? new mi(e.format("json")) : new mi(e);
  }
};
fn = new WeakMap(), hn = new WeakMap(), dn = new WeakMap(), Ut = new WeakMap(), vn = new WeakSet(), // Find a function definition by any means necessary (unless it is ambiguous)
xc = function(e, r, n) {
  if (qe(e)) {
    const i = e.toLowerCase();
    for (const a of O(this, dn).values())
      if (i === a.selector)
        return a;
    return null;
  }
  if (e.indexOf("(") === -1) {
    const i = [];
    for (const [a, o] of O(this, dn))
      a.split(
        "("
        /* fix:) */
      )[0] === e && i.push(o);
    if (r) {
      const a = r.length > 0 ? r[r.length - 1] : null;
      let o = r.length, c = !0;
      Ht.isTyped(a) && a.type === "overrides" && (c = !1, o--);
      for (let m = i.length - 1; m >= 0; m--) {
        const d = i[m].inputs.length;
        d !== o && (!c || d !== o - 1) && i.splice(m, 1);
      }
      for (let m = i.length - 1; m >= 0; m--) {
        const d = i[m].inputs;
        for (let l = 0; l < r.length; l++)
          if (Ht.isTyped(r[l])) {
            if (l >= d.length) {
              if (r[l].type === "overrides")
                continue;
              i.splice(m, 1);
              break;
            }
            if (r[l].type !== d[l].baseType) {
              i.splice(m, 1);
              break;
            }
          }
      }
    }
    if (i.length === 1 && r && r.length !== i[0].inputs.length) {
      const a = r[r.length - 1];
      (a == null || Array.isArray(a) || typeof a != "object") && i.splice(0, 1);
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const a = i.map((o) => JSON.stringify(o.format())).join(", ");
      L(!1, `ambiguous function description (i.e. matches ${a})`, "key", e);
    }
    return i[0];
  }
  const s = O(this, dn).get(bn.from(e).format());
  return s || null;
}, // Find an event definition by any means necessary (unless it is ambiguous)
Sc = function(e, r, n) {
  if (qe(e)) {
    const i = e.toLowerCase();
    for (const a of O(this, hn).values())
      if (i === a.topicHash)
        return a;
    return null;
  }
  if (e.indexOf("(") === -1) {
    const i = [];
    for (const [a, o] of O(this, hn))
      a.split(
        "("
        /* fix:) */
      )[0] === e && i.push(o);
    if (r) {
      for (let a = i.length - 1; a >= 0; a--)
        i[a].inputs.length < r.length && i.splice(a, 1);
      for (let a = i.length - 1; a >= 0; a--) {
        const o = i[a].inputs;
        for (let c = 0; c < r.length; c++)
          if (Ht.isTyped(r[c]) && r[c].type !== o[c].baseType) {
            i.splice(a, 1);
            break;
          }
      }
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const a = i.map((o) => JSON.stringify(o.format())).join(", ");
      L(!1, `ambiguous event description (i.e. matches ${a})`, "key", e);
    }
    return i[0];
  }
  const s = O(this, hn).get(yn.from(e).format());
  return s || null;
};
let Gf = mi;
const Kg = BigInt(0);
function No(t) {
  return t ?? null;
}
function ft(t) {
  return t == null ? null : t.toString();
}
class bp {
  /**
   *  Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
   *  %%maxPriorityFeePerGas%%.
   */
  constructor(e, r, n) {
    /**
     *  The gas price for legacy networks.
     */
    F(this, "gasPrice");
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
    F(this, "maxFeePerGas");
    /**
     *  The additional amout to pay per gas to encourage a validator
     *  to include the transaction.
     *
     *  The purpose of this is to compensate the validator for the
     *  adjusted risk for including a given transaction.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    F(this, "maxPriorityFeePerGas");
    me(this, {
      gasPrice: No(e),
      maxFeePerGas: No(r),
      maxPriorityFeePerGas: No(n)
    });
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { gasPrice: e, maxFeePerGas: r, maxPriorityFeePerGas: n } = this;
    return {
      _type: "FeeData",
      gasPrice: ft(e),
      maxFeePerGas: ft(r),
      maxPriorityFeePerGas: ft(n)
    };
  }
}
function Vc(t) {
  const e = {};
  t.to && (e.to = t.to), t.from && (e.from = t.from), t.data && (e.data = oe(t.data));
  const r = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const s of r)
    !(s in t) || t[s] == null || (e[s] = le(t[s], `request.${s}`));
  const n = "type,nonce".split(/,/);
  for (const s of n)
    !(s in t) || t[s] == null || (e[s] = we(t[s], `request.${s}`));
  return t.accessList && (e.accessList = Zi(t.accessList)), "blockTag" in t && (e.blockTag = t.blockTag), "enableCcipRead" in t && (e.enableCcipRead = !!t.enableCcipRead), "customData" in t && (e.customData = t.customData), "blobVersionedHashes" in t && t.blobVersionedHashes && (e.blobVersionedHashes = t.blobVersionedHashes.slice()), "kzg" in t && (e.kzg = t.kzg), "blobs" in t && t.blobs && (e.blobs = t.blobs.map((s) => Oh(s) ? oe(s) : Object.assign({}, s))), e;
}
var $n;
class L_ {
  /**
   *  Create a new **Block** object.
   *
   *  This should generally not be necessary as the unless implementing a
   *  low-level library.
   */
  constructor(e, r) {
    /**
     *  The provider connected to the block used to fetch additional details
     *  if necessary.
     */
    F(this, "provider");
    /**
     *  The block number, sometimes called the block height. This is a
     *  sequential number that is one higher than the parent block.
     */
    F(this, "number");
    /**
     *  The block hash.
     *
     *  This hash includes all properties, so can be safely used to identify
     *  an exact set of block properties.
     */
    F(this, "hash");
    /**
     *  The timestamp for this block, which is the number of seconds since
     *  epoch that this block was included.
     */
    F(this, "timestamp");
    /**
     *  The block hash of the parent block.
     */
    F(this, "parentHash");
    /**
     *  The hash tree root of the parent beacon block for the given
     *  execution block. See [[link-eip-4788]].
     */
    F(this, "parentBeaconBlockRoot");
    /**
     *  The nonce.
     *
     *  On legacy networks, this is the random number inserted which
     *  permitted the difficulty target to be reached.
     */
    F(this, "nonce");
    /**
     *  The difficulty target.
     *
     *  On legacy networks, this is the proof-of-work target required
     *  for a block to meet the protocol rules to be included.
     *
     *  On modern networks, this is a random number arrived at using
     *  randao.  @TODO: Find links?
     */
    F(this, "difficulty");
    /**
     *  The total gas limit for this block.
     */
    F(this, "gasLimit");
    /**
     *  The total gas used in this block.
     */
    F(this, "gasUsed");
    /**
     *  The root hash for the global state after applying changes
     *  in this block.
     */
    F(this, "stateRoot");
    /**
     *  The hash of the transaction receipts trie.
     */
    F(this, "receiptsRoot");
    /**
     *  The total amount of blob gas consumed by the transactions
     *  within the block. See [[link-eip-4844]].
     */
    F(this, "blobGasUsed");
    /**
     *  The running total of blob gas consumed in excess of the
     *  target, prior to the block. See [[link-eip-4844]].
     */
    F(this, "excessBlobGas");
    /**
     *  The miner coinbase address, wihch receives any subsidies for
     *  including this block.
     */
    F(this, "miner");
    /**
     *  The latest RANDAO mix of the post beacon state of
     *  the previous block.
     */
    F(this, "prevRandao");
    /**
     *  Any extra data the validator wished to include.
     */
    F(this, "extraData");
    /**
     *  The base fee per gas that all transactions in this block were
     *  charged.
     *
     *  This adjusts after each block, depending on how congested the network
     *  is.
     */
    F(this, "baseFeePerGas");
    $(this, $n);
    k(this, $n, e.transactions.map((n) => typeof n != "string" ? new Ll(n, r) : n)), me(this, {
      provider: r,
      hash: No(e.hash),
      number: e.number,
      timestamp: e.timestamp,
      parentHash: e.parentHash,
      parentBeaconBlockRoot: e.parentBeaconBlockRoot,
      nonce: e.nonce,
      difficulty: e.difficulty,
      gasLimit: e.gasLimit,
      gasUsed: e.gasUsed,
      blobGasUsed: e.blobGasUsed,
      excessBlobGas: e.excessBlobGas,
      miner: e.miner,
      prevRandao: No(e.prevRandao),
      extraData: e.extraData,
      baseFeePerGas: No(e.baseFeePerGas),
      stateRoot: e.stateRoot,
      receiptsRoot: e.receiptsRoot
    });
  }
  /**
   *  Returns the list of transaction hashes, in the order
   *  they were executed within the block.
   */
  get transactions() {
    return O(this, $n).map((e) => typeof e == "string" ? e : e.hash);
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
    const e = O(this, $n).slice();
    return e.length === 0 ? [] : (Q(typeof e[0] == "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
      operation: "transactionResponses()"
    }), e);
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { baseFeePerGas: e, difficulty: r, extraData: n, gasLimit: s, gasUsed: i, hash: a, miner: o, prevRandao: c, nonce: m, number: d, parentHash: l, parentBeaconBlockRoot: f, stateRoot: g, receiptsRoot: h, timestamp: u, transactions: b } = this;
    return {
      _type: "Block",
      baseFeePerGas: ft(e),
      difficulty: ft(r),
      extraData: n,
      gasLimit: ft(s),
      gasUsed: ft(i),
      blobGasUsed: ft(this.blobGasUsed),
      excessBlobGas: ft(this.excessBlobGas),
      hash: a,
      miner: o,
      prevRandao: c,
      nonce: m,
      number: d,
      parentHash: l,
      timestamp: u,
      parentBeaconBlockRoot: f,
      stateRoot: g,
      receiptsRoot: h,
      transactions: b
    };
  }
  [Symbol.iterator]() {
    let e = 0;
    const r = this.transactions;
    return {
      next: () => e < this.length ? {
        value: r[e++],
        done: !1
      } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The number of transactions in this block.
   */
  get length() {
    return O(this, $n).length;
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
  async getTransaction(e) {
    let r;
    if (typeof e == "number")
      r = O(this, $n)[e];
    else {
      const n = e.toLowerCase();
      for (const s of O(this, $n))
        if (typeof s == "string") {
          if (s !== n)
            continue;
          r = s;
          break;
        } else {
          if (s.hash === n)
            continue;
          r = s;
          break;
        }
    }
    if (r == null)
      throw new Error("no such tx");
    return typeof r == "string" ? await this.provider.getTransaction(r) : r;
  }
  /**
   *  If a **Block** was fetched with a request to include the transactions
   *  this will allow synchronous access to those transactions.
   *
   *  If the transactions were not prefetched, this will throw.
   */
  getPrefetchedTransaction(e) {
    const r = this.prefetchedTransactions;
    if (typeof e == "number")
      return r[e];
    e = e.toLowerCase();
    for (const n of r)
      if (n.hash === e)
        return n;
    L(!1, "no matching transaction", "indexOrHash", e);
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
    return U_(this);
  }
}
$n = new WeakMap();
class tc {
  /**
   *  @_ignore:
   */
  constructor(e, r) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    F(this, "provider");
    /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */
    F(this, "transactionHash");
    /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */
    F(this, "blockHash");
    /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */
    F(this, "blockNumber");
    /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */
    F(this, "removed");
    /**
     *  The address of the contract that emitted this log.
     */
    F(this, "address");
    /**
     *  The data included in this log when it was emitted.
     */
    F(this, "data");
    /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */
    F(this, "topics");
    /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */
    F(this, "index");
    /**
     *  The index within the transaction of this log.
     */
    F(this, "transactionIndex");
    this.provider = r;
    const n = Object.freeze(e.topics.slice());
    me(this, {
      transactionHash: e.transactionHash,
      blockHash: e.blockHash,
      blockNumber: e.blockNumber,
      removed: e.removed,
      address: e.address,
      data: e.data,
      topics: n,
      index: e.index,
      transactionIndex: e.transactionIndex
    });
  }
  /**
   *  Returns a JSON-compatible object.
   */
  toJSON() {
    const { address: e, blockHash: r, blockNumber: n, data: s, index: i, removed: a, topics: o, transactionHash: c, transactionIndex: m } = this;
    return {
      _type: "log",
      address: e,
      blockHash: r,
      blockNumber: n,
      data: s,
      index: i,
      removed: a,
      topics: o,
      transactionHash: c,
      transactionIndex: m
    };
  }
  /**
   *  Returns the block that this log occurred in.
   */
  async getBlock() {
    const e = await this.provider.getBlock(this.blockHash);
    return Q(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  Returns the transaction that this log occurred in.
   */
  async getTransaction() {
    const e = await this.provider.getTransaction(this.transactionHash);
    return Q(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  Returns the transaction receipt fot the transaction that this
   *  log occurred in.
   */
  async getTransactionReceipt() {
    const e = await this.provider.getTransactionReceipt(this.transactionHash);
    return Q(!!e, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), e;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return F_(this);
  }
}
var $l;
class Zg {
  /**
   *  @_ignore:
   */
  constructor(e, r) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    F(this, "provider");
    /**
     *  The address the transaction was sent to.
     */
    F(this, "to");
    /**
     *  The sender of the transaction.
     */
    F(this, "from");
    /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */
    F(this, "contractAddress");
    /**
     *  The transaction hash.
     */
    F(this, "hash");
    /**
     *  The index of this transaction within the block transactions.
     */
    F(this, "index");
    /**
     *  The block hash of the [[Block]] this transaction was included in.
     */
    F(this, "blockHash");
    /**
     *  The block number of the [[Block]] this transaction was included in.
     */
    F(this, "blockNumber");
    /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */
    F(this, "logsBloom");
    /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */
    F(this, "gasUsed");
    /**
     *  The gas used for BLObs. See [[link-eip-4844]].
     */
    F(this, "blobGasUsed");
    /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */
    F(this, "cumulativeGasUsed");
    /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */
    F(this, "gasPrice");
    /**
     *  The price paid per BLOB in gas. See [[link-eip-4844]].
     */
    F(this, "blobGasPrice");
    /**
     *  The [[link-eip-2718]] transaction type.
     */
    F(this, "type");
    //readonly byzantium!: boolean;
    /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */
    F(this, "status");
    /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */
    F(this, "root");
    $(this, $l);
    k(this, $l, Object.freeze(e.logs.map((s) => new tc(s, r))));
    let n = Kg;
    e.effectiveGasPrice != null ? n = e.effectiveGasPrice : e.gasPrice != null && (n = e.gasPrice), me(this, {
      provider: r,
      to: e.to,
      from: e.from,
      contractAddress: e.contractAddress,
      hash: e.hash,
      index: e.index,
      blockHash: e.blockHash,
      blockNumber: e.blockNumber,
      logsBloom: e.logsBloom,
      gasUsed: e.gasUsed,
      cumulativeGasUsed: e.cumulativeGasUsed,
      blobGasUsed: e.blobGasUsed,
      gasPrice: n,
      blobGasPrice: e.blobGasPrice,
      type: e.type,
      //byzantium: tx.byzantium,
      status: e.status,
      root: e.root
    });
  }
  /**
   *  The logs for this transaction.
   */
  get logs() {
    return O(this, $l);
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to: e,
      from: r,
      contractAddress: n,
      hash: s,
      index: i,
      blockHash: a,
      blockNumber: o,
      logsBloom: c,
      logs: m,
      //byzantium, 
      status: d,
      root: l
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash: a,
      blockNumber: o,
      //byzantium, 
      contractAddress: n,
      cumulativeGasUsed: ft(this.cumulativeGasUsed),
      from: r,
      gasPrice: ft(this.gasPrice),
      blobGasUsed: ft(this.blobGasUsed),
      blobGasPrice: ft(this.blobGasPrice),
      gasUsed: ft(this.gasUsed),
      hash: s,
      index: i,
      logs: m,
      logsBloom: c,
      root: l,
      status: d,
      to: e
    };
  }
  /**
   *  @_ignore:
   */
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.length ? { value: this.logs[e++], done: !1 } : { value: void 0, done: !0 }
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
    const e = await this.provider.getBlock(this.blockHash);
    if (e == null)
      throw new Error("TODO");
    return e;
  }
  /**
   *  Resolves to the transaction this transaction occurred in.
   */
  async getTransaction() {
    const e = await this.provider.getTransaction(this.hash);
    if (e == null)
      throw new Error("TODO");
    return e;
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
    return Yg(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(e) {
    return Q(!e || e.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), Xg(this, e);
  }
}
$l = new WeakMap();
var Ns;
const Hh = class Hh {
  /**
   *  @_ignore:
   */
  constructor(e, r) {
    /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */
    F(this, "provider");
    /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    F(this, "blockNumber");
    /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    F(this, "blockHash");
    /**
     *  The index within the block that this transaction resides at.
     */
    F(this, "index");
    /**
     *  The transaction hash.
     */
    F(this, "hash");
    /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */
    F(this, "type");
    /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */
    F(this, "to");
    /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */
    F(this, "from");
    /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */
    F(this, "nonce");
    /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */
    F(this, "gasLimit");
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
    F(this, "gasPrice");
    /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */
    F(this, "maxPriorityFeePerGas");
    /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */
    F(this, "maxFeePerGas");
    /**
     *  The [[link-eip-4844]] max fee per BLOb gas.
     */
    F(this, "maxFeePerBlobGas");
    /**
     *  The data.
     */
    F(this, "data");
    /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */
    F(this, "value");
    /**
     *  The chain ID.
     */
    F(this, "chainId");
    /**
     *  The signature.
     */
    F(this, "signature");
    /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */
    F(this, "accessList");
    /**
     *  The [[link-eip-4844]] BLOb versioned hashes.
     */
    F(this, "blobVersionedHashes");
    $(this, Ns);
    this.provider = r, this.blockNumber = e.blockNumber != null ? e.blockNumber : null, this.blockHash = e.blockHash != null ? e.blockHash : null, this.hash = e.hash, this.index = e.index, this.type = e.type, this.from = e.from, this.to = e.to || null, this.gasLimit = e.gasLimit, this.nonce = e.nonce, this.data = e.data, this.value = e.value, this.gasPrice = e.gasPrice, this.maxPriorityFeePerGas = e.maxPriorityFeePerGas != null ? e.maxPriorityFeePerGas : null, this.maxFeePerGas = e.maxFeePerGas != null ? e.maxFeePerGas : null, this.maxFeePerBlobGas = e.maxFeePerBlobGas != null ? e.maxFeePerBlobGas : null, this.chainId = e.chainId, this.signature = e.signature, this.accessList = e.accessList != null ? e.accessList : null, this.blobVersionedHashes = e.blobVersionedHashes != null ? e.blobVersionedHashes : null, k(this, Ns, -1);
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber: e, blockHash: r, index: n, hash: s, type: i, to: a, from: o, nonce: c, data: m, signature: d, accessList: l, blobVersionedHashes: f } = this;
    return {
      _type: "TransactionResponse",
      accessList: l,
      blockNumber: e,
      blockHash: r,
      blobVersionedHashes: f,
      chainId: ft(this.chainId),
      data: m,
      from: o,
      gasLimit: ft(this.gasLimit),
      gasPrice: ft(this.gasPrice),
      hash: s,
      maxFeePerGas: ft(this.maxFeePerGas),
      maxPriorityFeePerGas: ft(this.maxPriorityFeePerGas),
      maxFeePerBlobGas: ft(this.maxFeePerBlobGas),
      nonce: c,
      signature: d,
      to: a,
      index: n,
      type: i,
      value: ft(this.value)
    };
  }
  /**
   *  Resolves to the Block that this transaction was included in.
   *
   *  This will return null if the transaction has not been included yet.
   */
  async getBlock() {
    let e = this.blockNumber;
    if (e == null) {
      const n = await this.getTransaction();
      n && (e = n.blockNumber);
    }
    if (e == null)
      return null;
    const r = this.provider.getBlock(e);
    if (r == null)
      throw new Error("TODO");
    return r;
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
      const { tx: r, blockNumber: n } = await Xt({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber()
      });
      return r == null || r.blockNumber == null ? 0 : n - r.blockNumber + 1;
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
  async wait(e, r) {
    const n = e ?? 1, s = r ?? 0;
    let i = O(this, Ns), a = -1, o = i === -1;
    const c = async () => {
      if (o)
        return null;
      const { blockNumber: f, nonce: g } = await Xt({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (g < this.nonce) {
        i = f;
        return;
      }
      if (o)
        return null;
      const h = await this.getTransaction();
      if (!(h && h.blockNumber != null))
        for (a === -1 && (a = i - 3, a < O(this, Ns) && (a = O(this, Ns))); a <= f; ) {
          if (o)
            return null;
          const u = await this.provider.getBlock(a, !0);
          if (u == null)
            return;
          for (const b of u)
            if (b === this.hash)
              return;
          for (let b = 0; b < u.length; b++) {
            const p = await u.getTransaction(b);
            if (p.from === this.from && p.nonce === this.nonce) {
              if (o)
                return null;
              const y = await this.provider.getTransactionReceipt(p.hash);
              if (y == null || f - y.blockNumber + 1 < n)
                return;
              let v = "replaced";
              p.data === this.data && p.to === this.to && p.value === this.value ? v = "repriced" : p.data === "0x" && p.from === p.to && p.value === Kg && (v = "cancelled"), Q(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: v === "replaced" || v === "cancelled",
                reason: v,
                replacement: p.replaceableTransaction(i),
                hash: p.hash,
                receipt: y
              });
            }
          }
          a++;
        }
    }, m = (f) => {
      if (f == null || f.status !== 0)
        return f;
      Q(!1, "transaction execution reverted", "CALL_EXCEPTION", {
        action: "sendTransaction",
        data: null,
        reason: null,
        invocation: null,
        revert: null,
        transaction: {
          to: f.to,
          from: f.from,
          data: ""
          // @TODO: in v7, split out sendTransaction properties
        },
        receipt: f
      });
    }, d = await this.provider.getTransactionReceipt(this.hash);
    if (n === 0)
      return m(d);
    if (d) {
      if (await d.confirmations() >= n)
        return m(d);
    } else if (await c(), n === 0)
      return null;
    return await new Promise((f, g) => {
      const h = [], u = () => {
        h.forEach((p) => p());
      };
      if (h.push(() => {
        o = !0;
      }), s > 0) {
        const p = setTimeout(() => {
          u(), g(ot("wait for transaction timeout", "TIMEOUT"));
        }, s);
        h.push(() => {
          clearTimeout(p);
        });
      }
      const b = async (p) => {
        if (await p.confirmations() >= n) {
          u();
          try {
            f(m(p));
          } catch (y) {
            g(y);
          }
        }
      };
      if (h.push(() => {
        this.provider.off(this.hash, b);
      }), this.provider.on(this.hash, b), i >= 0) {
        const p = async () => {
          try {
            await c();
          } catch (y) {
            if (Bt(y, "TRANSACTION_REPLACED")) {
              u(), g(y);
              return;
            }
          }
          o || this.provider.once("block", p);
        };
        h.push(() => {
          this.provider.off("block", p);
        }), this.provider.once("block", p);
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
    return Q(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Yg(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(e) {
    return Q(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Q(!e || e.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), Xg(this, e);
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
  replaceableTransaction(e) {
    L(Number.isInteger(e) && e >= 0, "invalid startBlock", "startBlock", e);
    const r = new Hh(this, this.provider);
    return k(r, Ns, e), r;
  }
};
Ns = new WeakMap();
let Ll = Hh;
function U_(t) {
  return { orphan: "drop-block", hash: t.hash, number: t.number };
}
function Xg(t, e) {
  return { orphan: "reorder-transaction", tx: t, other: e };
}
function Yg(t) {
  return { orphan: "drop-transaction", tx: t };
}
function F_(t) {
  return { orphan: "drop-log", log: {
    transactionHash: t.transactionHash,
    blockHash: t.blockHash,
    blockNumber: t.blockNumber,
    address: t.address,
    data: t.data,
    topics: Object.freeze(t.topics.slice()),
    index: t.index
  } };
}
class Bh extends tc {
  /**
   * @_ignore:
   */
  constructor(r, n, s) {
    super(r, r.provider);
    /**
     *  The Contract Interface.
     */
    F(this, "interface");
    /**
     *  The matching event.
     */
    F(this, "fragment");
    /**
     *  The parsed arguments passed to the event by ``emit``.
     */
    F(this, "args");
    const i = n.decodeEventLog(s, r.data, r.topics);
    me(this, { args: i, fragment: s, interface: n });
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
class ey extends tc {
  /**
   * @_ignore:
   */
  constructor(r, n) {
    super(r, r.provider);
    /**
     *  The error encounted when trying to decode the log.
     */
    F(this, "error");
    me(this, { error: n });
  }
}
var ra;
class j_ extends Zg {
  /**
   *  @_ignore:
   */
  constructor(r, n, s) {
    super(s, n);
    $(this, ra);
    k(this, ra, r);
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((r) => {
      const n = r.topics.length ? O(this, ra).getEvent(r.topics[0]) : null;
      if (n)
        try {
          return new Bh(r, O(this, ra), n);
        } catch (s) {
          return new ey(r, s);
        }
      return r;
    });
  }
}
ra = new WeakMap();
var Wl;
class Mh extends Ll {
  /**
   *  @_ignore:
   */
  constructor(r, n, s) {
    super(s, n);
    $(this, Wl);
    k(this, Wl, r);
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
  async wait(r, n) {
    const s = await super.wait(r, n);
    return s == null ? null : new j_(O(this, Wl), this.provider, s);
  }
}
Wl = new WeakMap();
class ty extends Km {
  /**
   *  @_event:
   */
  constructor(r, n, s, i) {
    super(r, n, s);
    /**
     *  The log with no matching events.
     */
    F(this, "log");
    me(this, { log: i });
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
class H_ extends ty {
  /**
   *  @_ignore:
   */
  constructor(e, r, n, s, i) {
    super(e, r, n, new Bh(i, e.interface, s));
    const a = e.interface.decodeEventLog(s, this.log.data, this.log.topics);
    me(this, { args: a, fragment: s });
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
const wp = BigInt(0);
function ry(t) {
  return t && typeof t.call == "function";
}
function ny(t) {
  return t && typeof t.estimateGas == "function";
}
function wu(t) {
  return t && typeof t.resolveName == "function";
}
function sy(t) {
  return t && typeof t.sendTransaction == "function";
}
function iy(t) {
  if (t != null) {
    if (wu(t))
      return t;
    if (t.provider)
      return t.provider;
  }
}
var Vl;
class G_ {
  constructor(e, r, n) {
    $(this, Vl);
    F(this, "fragment");
    if (me(this, { fragment: r }), r.inputs.length < n.length)
      throw new Error("too many arguments");
    const s = Qi(e.runner, "resolveName"), i = wu(s) ? s : null;
    k(this, Vl, async function() {
      const a = await Promise.all(r.inputs.map((o, c) => n[c] == null ? null : o.walkAsync(n[c], (d, l) => d === "address" ? Array.isArray(l) ? Promise.all(l.map((f) => rr(f, i))) : rr(l, i) : l)));
      return e.interface.encodeFilterTopics(r, a);
    }());
  }
  getTopicFilter() {
    return O(this, Vl);
  }
}
Vl = new WeakMap();
function Qi(t, e) {
  return t == null ? null : typeof t[e] == "function" ? t : t.provider && typeof t.provider[e] == "function" ? t.provider : null;
}
function wi(t) {
  return t == null ? null : t.provider || null;
}
async function oy(t, e) {
  const r = Ht.dereference(t, "overrides");
  L(typeof r == "object", "invalid overrides parameter", "overrides", t);
  const n = Vc(r);
  return L(n.to == null || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), L(n.data == null || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
}
async function $_(t, e, r) {
  const n = Qi(t, "resolveName"), s = wu(n) ? n : null;
  return await Promise.all(e.map((i, a) => i.walkAsync(r[a], (o, c) => (c = Ht.dereference(c, o), o === "address" ? rr(c, s) : c))));
}
function W_(t) {
  const e = async function(a) {
    const o = await oy(a, ["data"]);
    o.to = await t.getAddress(), o.from && (o.from = await rr(o.from, iy(t.runner)));
    const c = t.interface, m = le(o.value || wp, "overrides.value") === wp, d = (o.data || "0x") === "0x";
    c.fallback && !c.fallback.payable && c.receive && !d && !m && L(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", a), L(c.fallback || d, "cannot send data to receive-only contract", "overrides.data", o.data);
    const l = c.receive || c.fallback && c.fallback.payable;
    return L(l || m, "cannot send value to non-payable fallback", "overrides.value", o.value), L(c.fallback || d, "cannot send data to receive-only contract", "overrides.data", o.data), o;
  }, r = async function(a) {
    const o = Qi(t.runner, "call");
    Q(ry(o), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const c = await e(a);
    try {
      return await o.call(c);
    } catch (m) {
      throw Sh(m) && m.data ? t.interface.makeError(m.data, c) : m;
    }
  }, n = async function(a) {
    const o = t.runner;
    Q(sy(o), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const c = await o.sendTransaction(await e(a)), m = wi(t.runner);
    return new Mh(t.interface, m, c);
  }, s = async function(a) {
    const o = Qi(t.runner, "estimateGas");
    return Q(ny(o), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await o.estimateGas(await e(a));
  }, i = async (a) => await n(a);
  return me(i, {
    _contract: t,
    estimateGas: s,
    populateTransaction: e,
    send: n,
    staticCall: r
  }), i;
}
function V_(t, e) {
  const r = function(...m) {
    const d = t.interface.getFunction(e, m);
    return Q(d, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: e, args: m }
    }), d;
  }, n = async function(...m) {
    const d = r(...m);
    let l = {};
    if (d.inputs.length + 1 === m.length && (l = await oy(m.pop()), l.from && (l.from = await rr(l.from, iy(t.runner)))), d.inputs.length !== m.length)
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    const f = await $_(t.runner, d.inputs, m);
    return Object.assign({}, l, await Xt({
      to: t.getAddress(),
      data: t.interface.encodeFunctionData(d, f)
    }));
  }, s = async function(...m) {
    const d = await o(...m);
    return d.length === 1 ? d[0] : d;
  }, i = async function(...m) {
    const d = t.runner;
    Q(sy(d), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const l = await d.sendTransaction(await n(...m)), f = wi(t.runner);
    return new Mh(t.interface, f, l);
  }, a = async function(...m) {
    const d = Qi(t.runner, "estimateGas");
    return Q(ny(d), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await d.estimateGas(await n(...m));
  }, o = async function(...m) {
    const d = Qi(t.runner, "call");
    Q(ry(d), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const l = await n(...m);
    let f = "0x";
    try {
      f = await d.call(l);
    } catch (h) {
      throw Sh(h) && h.data ? t.interface.makeError(h.data, l) : h;
    }
    const g = r(...m);
    return t.interface.decodeFunctionResult(g, f);
  }, c = async (...m) => r(...m).constant ? await s(...m) : await i(...m);
  return me(c, {
    name: t.interface.getFunctionName(e),
    _contract: t,
    _key: e,
    getFragment: r,
    estimateGas: a,
    populateTransaction: n,
    send: i,
    staticCall: s,
    staticCallResult: o
  }), Object.defineProperty(c, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const m = t.interface.getFunction(e);
      return Q(m, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: e }
      }), m;
    }
  }), c;
}
function z_(t, e) {
  const r = function(...s) {
    const i = t.interface.getEvent(e, s);
    return Q(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: e, args: s }
    }), i;
  }, n = function(...s) {
    return new G_(t, r(...s), s);
  };
  return me(n, {
    name: t.interface.getEventName(e),
    _contract: t,
    _key: e,
    getFragment: r
  }), Object.defineProperty(n, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const s = t.interface.getEvent(e);
      return Q(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: e }
      }), s;
    }
  }), n;
}
const zc = Symbol.for("_ethersInternal_contract"), ay = /* @__PURE__ */ new WeakMap();
function Q_(t, e) {
  ay.set(t[zc], e);
}
function vr(t) {
  return ay.get(t[zc]);
}
function q_(t) {
  return t && typeof t == "object" && "getTopicFilter" in t && typeof t.getTopicFilter == "function" && t.fragment;
}
async function Dh(t, e) {
  let r, n = null;
  if (Array.isArray(e)) {
    const i = function(a) {
      if (qe(a, 32))
        return a;
      const o = t.interface.getEvent(a);
      return L(o, "unknown fragment", "name", a), o.topicHash;
    };
    r = e.map((a) => a == null ? null : Array.isArray(a) ? a.map(i) : i(a));
  } else e === "*" ? r = [null] : typeof e == "string" ? qe(e, 32) ? r = [e] : (n = t.interface.getEvent(e), L(n, "unknown fragment", "event", e), r = [n.topicHash]) : q_(e) ? r = await e.getTopicFilter() : "fragment" in e ? (n = e.fragment, r = [n.topicHash]) : L(!1, "unknown event name", "event", e);
  r = r.map((i) => {
    if (i == null)
      return null;
    if (Array.isArray(i)) {
      const a = Array.from(new Set(i.map((o) => o.toLowerCase())).values());
      return a.length === 1 ? a[0] : (a.sort(), a);
    }
    return i.toLowerCase();
  });
  const s = r.map((i) => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
  return { fragment: n, tag: s, topics: r };
}
async function bl(t, e) {
  const { subs: r } = vr(t);
  return r.get((await Dh(t, e)).tag) || null;
}
async function vp(t, e, r) {
  const n = wi(t.runner);
  Q(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: e });
  const { fragment: s, tag: i, topics: a } = await Dh(t, r), { addr: o, subs: c } = vr(t);
  let m = c.get(i);
  if (!m) {
    const l = { address: o || t, topics: a }, f = (b) => {
      let p = s;
      if (p == null)
        try {
          p = t.interface.getEvent(b.topics[0]);
        } catch {
        }
      if (p) {
        const y = p, v = s ? t.interface.decodeEventLog(s, b.data, b.topics) : [];
        Wf(t, r, v, (E) => new H_(t, E, r, y, b));
      } else
        Wf(t, r, [], (y) => new ty(t, y, r, b));
    };
    let g = [];
    m = { tag: i, listeners: [], start: () => {
      g.length || g.push(n.on(l, f));
    }, stop: async () => {
      if (g.length == 0)
        return;
      let b = g;
      g = [], await Promise.all(b), n.off(l, f);
    } }, c.set(i, m);
  }
  return m;
}
let $f = Promise.resolve();
async function J_(t, e, r, n) {
  await $f;
  const s = await bl(t, e);
  if (!s)
    return !1;
  const i = s.listeners.length;
  return s.listeners = s.listeners.filter(({ listener: a, once: o }) => {
    const c = Array.from(r);
    n && c.push(n(o ? null : a));
    try {
      a.call(t, ...c);
    } catch {
    }
    return !o;
  }), s.listeners.length === 0 && (s.stop(), vr(t).subs.delete(s.tag)), i > 0;
}
async function Wf(t, e, r, n) {
  try {
    await $f;
  } catch {
  }
  const s = J_(t, e, r, n);
  return $f = s, await s;
}
const pc = ["then"];
var Dp;
Dp = zc;
const xl = class xl {
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(e, r, n, s) {
    /**
     *  The target to connect to.
     *
     *  This can be an address, ENS name or any [[Addressable]], such as
     *  another contract. To get the resovled address, use the ``getAddress``
     *  method.
     */
    F(this, "target");
    /**
     *  The contract Interface.
     */
    F(this, "interface");
    /**
     *  The connected runner. This is generally a [[Provider]] or a
     *  [[Signer]], which dictates what operations are supported.
     *
     *  For example, a **Contract** connected to a [[Provider]] may
     *  only execute read-only operations.
     */
    F(this, "runner");
    /**
     *  All the Events available on this contract.
     */
    F(this, "filters");
    /**
     *  @_ignore:
     */
    F(this, Dp);
    /**
     *  The fallback or receive function if any.
     */
    F(this, "fallback");
    L(typeof e == "string" || dg(e), "invalid value for Contract target", "target", e), n == null && (n = null);
    const i = Gf.from(r);
    me(this, { target: e, runner: n, interface: i }), Object.defineProperty(this, zc, { value: {} });
    let a, o = null, c = null;
    if (s) {
      const l = wi(n);
      c = new Mh(this.interface, l, s);
    }
    let m = /* @__PURE__ */ new Map();
    if (typeof e == "string")
      if (qe(e))
        o = e, a = Promise.resolve(e);
      else {
        const l = Qi(n, "resolveName");
        if (!wu(l))
          throw ot("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        a = l.resolveName(e).then((f) => {
          if (f == null)
            throw ot("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: e
            });
          return vr(this).addr = f, f;
        });
      }
    else
      a = e.getAddress().then((l) => {
        if (l == null)
          throw new Error("TODO");
        return vr(this).addr = l, l;
      });
    Q_(this, { addrPromise: a, addr: o, deployTx: c, subs: m });
    const d = new Proxy({}, {
      get: (l, f, g) => {
        if (typeof f == "symbol" || pc.indexOf(f) >= 0)
          return Reflect.get(l, f, g);
        try {
          return this.getEvent(f);
        } catch (h) {
          if (!Bt(h, "INVALID_ARGUMENT") || h.argument !== "key")
            throw h;
        }
      },
      has: (l, f) => pc.indexOf(f) >= 0 ? Reflect.has(l, f) : Reflect.has(l, f) || this.interface.hasEvent(String(f))
    });
    return me(this, { filters: d }), me(this, {
      fallback: i.receive || i.fallback ? W_(this) : null
    }), new Proxy(this, {
      get: (l, f, g) => {
        if (typeof f == "symbol" || f in l || pc.indexOf(f) >= 0)
          return Reflect.get(l, f, g);
        try {
          return l.getFunction(f);
        } catch (h) {
          if (!Bt(h, "INVALID_ARGUMENT") || h.argument !== "key")
            throw h;
        }
      },
      has: (l, f) => typeof f == "symbol" || f in l || pc.indexOf(f) >= 0 ? Reflect.has(l, f) : l.interface.hasFunction(f)
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(e) {
    return new xl(this.target, this.interface, e);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(e) {
    return new xl(e, this.interface, this.runner);
  }
  /**
   *  Return the resolved address of this Contract.
   */
  async getAddress() {
    return await vr(this).addrPromise;
  }
  /**
   *  Return the deployed bytecode or null if no bytecode is found.
   */
  async getDeployedCode() {
    const e = wi(this.runner);
    Q(e, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const r = await e.getCode(await this.getAddress());
    return r === "0x" ? null : r;
  }
  /**
   *  Resolve to this Contract once the bytecode has been deployed, or
   *  resolve immediately if already deployed.
   */
  async waitForDeployment() {
    const e = this.deploymentTransaction();
    if (e)
      return await e.wait(), this;
    if (await this.getDeployedCode() != null)
      return this;
    const n = wi(this.runner);
    return Q(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" }), new Promise((s, i) => {
      const a = async () => {
        try {
          if (await this.getDeployedCode() != null)
            return s(this);
          n.once("block", a);
        } catch (o) {
          i(o);
        }
      };
      a();
    });
  }
  /**
   *  Return the transaction used to deploy this contract.
   *
   *  This is only available if this instance was returned from a
   *  [[ContractFactory]].
   */
  deploymentTransaction() {
    return vr(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getFunction(e) {
    return typeof e != "string" && (e = e.format()), V_(this, e);
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(e) {
    return typeof e != "string" && (e = e.format()), z_(this, e);
  }
  /**
   *  @_ignore:
   */
  async queryTransaction(e) {
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
  async queryFilter(e, r, n) {
    r == null && (r = 0), n == null && (n = "latest");
    const { addr: s, addrPromise: i } = vr(this), a = s || await i, { fragment: o, topics: c } = await Dh(this, e), m = { address: a, topics: c, fromBlock: r, toBlock: n }, d = wi(this.runner);
    return Q(d, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await d.getLogs(m)).map((l) => {
      let f = o;
      if (f == null)
        try {
          f = this.interface.getEvent(l.topics[0]);
        } catch {
        }
      if (f)
        try {
          return new Bh(l, this.interface, f);
        } catch (g) {
          return new ey(l, g);
        }
      return new tc(l, d);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(e, r) {
    const n = await vp(this, "on", e);
    return n.listeners.push({ listener: r, once: !1 }), n.start(), this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(e, r) {
    const n = await vp(this, "once", e);
    return n.listeners.push({ listener: r, once: !0 }), n.start(), this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(e, ...r) {
    return await Wf(this, e, r, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(e) {
    if (e) {
      const s = await bl(this, e);
      return s ? s.listeners.length : 0;
    }
    const { subs: r } = vr(this);
    let n = 0;
    for (const { listeners: s } of r.values())
      n += s.length;
    return n;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(e) {
    if (e) {
      const s = await bl(this, e);
      return s ? s.listeners.map(({ listener: i }) => i) : [];
    }
    const { subs: r } = vr(this);
    let n = [];
    for (const { listeners: s } of r.values())
      n = n.concat(s.map(({ listener: i }) => i));
    return n;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(e, r) {
    const n = await bl(this, e);
    if (!n)
      return this;
    if (r) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(r);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (r == null || n.listeners.length === 0) && (n.stop(), vr(this).subs.delete(n.tag)), this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(e) {
    if (e) {
      const r = await bl(this, e);
      if (!r)
        return this;
      r.stop(), vr(this).subs.delete(r.tag);
    } else {
      const { subs: r } = vr(this);
      for (const { tag: n, stop: s } of r.values())
        s(), r.delete(n);
    }
    return this;
  }
  /**
   *  Alias for [on].
   */
  async addListener(e, r) {
    return await this.on(e, r);
  }
  /**
   *  Alias for [off].
   */
  async removeListener(e, r) {
    return await this.off(e, r);
  }
  /**
   *  Create a new Class for the %%abi%%.
   */
  static buildClass(e) {
    class r extends xl {
      constructor(s, i = null) {
        super(s, e, i);
      }
    }
    return r;
  }
  /**
   *  Create a new BaseContract with a specified Interface.
   */
  static from(e, r, n) {
    return n == null && (n = null), new this(e, r, n);
  }
};
let Vf = xl;
function K_() {
  return Vf;
}
class $s extends K_() {
}
function ef(t) {
  return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : L(!1, "unsupported IPFS format", "link", t), `https://gateway.ipfs.io/ipfs/${t}`;
}
class Z_ {
  /**
   *  Creates a new **MulticoinProviderPluing** for %%name%%.
   */
  constructor(e) {
    /**
     *  The name.
     */
    F(this, "name");
    me(this, { name: e });
  }
  connect(e) {
    return this;
  }
  /**
   *  Returns ``true`` if %%coinType%% is supported by this plugin.
   */
  supportsCoinType(e) {
    return !1;
  }
  /**
   *  Resolves to the encoded %%address%% for %%coinType%%.
   */
  async encodeAddress(e, r) {
    throw new Error("unsupported coin");
  }
  /**
   *  Resolves to the decoded %%data%% for %%coinType%%.
   */
  async decodeAddress(e, r) {
    throw new Error("unsupported coin");
  }
}
const ly = new RegExp("^(ipfs)://(.*)$", "i"), Ap = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  ly,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
var Rs, Pi, Ps, yo, Xc, cy;
const _o = class _o {
  constructor(e, r, n) {
    $(this, Ps);
    /**
     *  The connected provider.
     */
    F(this, "provider");
    /**
     *  The address of the resolver.
     */
    F(this, "address");
    /**
     *  The name this resolver was resolved against.
     */
    F(this, "name");
    // For EIP-2544 names, the ancestor that provided the resolver
    $(this, Rs);
    $(this, Pi);
    me(this, { provider: e, address: r, name: n }), k(this, Rs, null), k(this, Pi, new $s(r, [
      "function supportsInterface(bytes4) view returns (bool)",
      "function resolve(bytes, bytes) view returns (bytes)",
      "function addr(bytes32) view returns (address)",
      "function addr(bytes32, uint) view returns (bytes)",
      "function text(bytes32, string) view returns (string)",
      "function contenthash(bytes32) view returns (bytes)"
    ], e));
  }
  /**
   *  Resolves to true if the resolver supports wildcard resolution.
   */
  async supportsWildcard() {
    return O(this, Rs) == null && k(this, Rs, (async () => {
      try {
        return await O(this, Pi).supportsInterface("0x9061b923");
      } catch (e) {
        if (Bt(e, "CALL_EXCEPTION"))
          return !1;
        throw k(this, Rs, null), e;
      }
    })()), await O(this, Rs);
  }
  /**
   *  Resolves to the address for %%coinType%% or null if the
   *  provided %%coinType%% has not been configured.
   */
  async getAddress(e) {
    if (e == null && (e = 60), e === 60)
      try {
        const i = await K(this, Ps, yo).call(this, "addr(bytes32)");
        return i == null || i === Cl ? null : i;
      } catch (i) {
        if (Bt(i, "CALL_EXCEPTION"))
          return null;
        throw i;
      }
    if (e >= 0 && e < 2147483648) {
      let i = e + 2147483648;
      const a = await K(this, Ps, yo).call(this, "addr(bytes32,uint)", [i]);
      if (qe(a, 20))
        return Ve(a);
    }
    let r = null;
    for (const i of this.provider.plugins)
      if (i instanceof Z_ && i.supportsCoinType(e)) {
        r = i;
        break;
      }
    if (r == null)
      return null;
    const n = await K(this, Ps, yo).call(this, "addr(bytes32,uint)", [e]);
    if (n == null || n === "0x")
      return null;
    const s = await r.decodeAddress(e, n);
    if (s != null)
      return s;
    Q(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
      operation: `getAddress(${e})`,
      info: { coinType: e, data: n }
    });
  }
  /**
   *  Resolves to the EIP-634 text record for %%key%%, or ``null``
   *  if unconfigured.
   */
  async getText(e) {
    const r = await K(this, Ps, yo).call(this, "text(bytes32,string)", [e]);
    return r == null || r === "0x" ? null : r;
  }
  /**
   *  Rsolves to the content-hash or ``null`` if unconfigured.
   */
  async getContentHash() {
    const e = await K(this, Ps, yo).call(this, "contenthash(bytes32)");
    if (e == null || e === "0x")
      return null;
    const r = e.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
    if (r) {
      const s = r[1] === "e3010170" ? "ipfs" : "ipns", i = parseInt(r[4], 16);
      if (r[5].length === i * 2)
        return `${s}://${vA("0x" + r[2])}`;
    }
    const n = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
    if (n && n[1].length === 64)
      return `bzz://${n[1]}`;
    Q(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
      operation: "getContentHash()",
      info: { data: e }
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
    const e = [{ type: "name", value: this.name }];
    try {
      const r = await this.getText("avatar");
      if (r == null)
        return e.push({ type: "!avatar", value: "" }), { url: null, linkage: e };
      e.push({ type: "avatar", value: r });
      for (let n = 0; n < Ap.length; n++) {
        const s = r.match(Ap[n]);
        if (s == null)
          continue;
        const i = s[1].toLowerCase();
        switch (i) {
          case "https":
          case "data":
            return e.push({ type: "url", value: r }), { linkage: e, url: r };
          case "ipfs": {
            const a = ef(r);
            return e.push({ type: "ipfs", value: r }), e.push({ type: "url", value: a }), { linkage: e, url: a };
          }
          case "erc721":
          case "erc1155": {
            const a = i === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
            e.push({ type: i, value: r });
            const o = await this.getAddress();
            if (o == null)
              return e.push({ type: "!owner", value: "" }), { url: null, linkage: e };
            const c = (s[2] || "").split("/");
            if (c.length !== 2)
              return e.push({ type: `!${i}caip`, value: s[2] || "" }), { url: null, linkage: e };
            const m = c[1], d = new $s(c[0], [
              // ERC-721
              "function tokenURI(uint) view returns (string)",
              "function ownerOf(uint) view returns (address)",
              // ERC-1155
              "function uri(uint) view returns (string)",
              "function balanceOf(address, uint256) view returns (uint)"
            ], this.provider);
            if (i === "erc721") {
              const u = await d.ownerOf(m);
              if (o !== u)
                return e.push({ type: "!owner", value: u }), { url: null, linkage: e };
              e.push({ type: "owner", value: u });
            } else if (i === "erc1155") {
              const u = await d.balanceOf(o, m);
              if (!u)
                return e.push({ type: "!balance", value: "0" }), { url: null, linkage: e };
              e.push({ type: "balance", value: u.toString() });
            }
            let l = await d[a](m);
            if (l == null || l === "0x")
              return e.push({ type: "!metadata-url", value: "" }), { url: null, linkage: e };
            e.push({ type: "metadata-url-base", value: l }), i === "erc1155" && (l = l.replace("{id}", Qs(m, 32).substring(2)), e.push({ type: "metadata-url-expanded", value: l })), l.match(/^ipfs:/i) && (l = ef(l)), e.push({ type: "metadata-url", value: l });
            let f = {};
            const g = await new es(l).send();
            g.assertOk();
            try {
              f = g.bodyJson;
            } catch {
              try {
                e.push({ type: "!metadata", value: g.bodyText });
              } catch {
                const p = g.body;
                return p && e.push({ type: "!metadata", value: oe(p) }), { url: null, linkage: e };
              }
              return { url: null, linkage: e };
            }
            if (!f)
              return e.push({ type: "!metadata", value: "" }), { url: null, linkage: e };
            e.push({ type: "metadata", value: JSON.stringify(f) });
            let h = f.image;
            if (typeof h != "string")
              return e.push({ type: "!imageUrl", value: "" }), { url: null, linkage: e };
            if (!h.match(/^(https:\/\/|data:)/i)) {
              if (h.match(ly) == null)
                return e.push({ type: "!imageUrl-ipfs", value: h }), { url: null, linkage: e };
              e.push({ type: "imageUrl-ipfs", value: h }), h = ef(h);
            }
            return e.push({ type: "url", value: h }), { linkage: e, url: h };
          }
        }
      }
    } catch {
    }
    return { linkage: e, url: null };
  }
  static async getEnsAddress(e) {
    const r = await e.getNetwork(), n = r.getPlugin("org.ethers.plugins.network.Ens");
    return Q(n, "network does not support ENS", "UNSUPPORTED_OPERATION", {
      operation: "getEnsAddress",
      info: { network: r }
    }), n.address;
  }
  /**
   *  Resolve to the ENS resolver for %%name%% using %%provider%% or
   *  ``null`` if unconfigured.
   */
  static async fromName(e, r) {
    var s;
    let n = r;
    for (; ; ) {
      if (n === "" || n === "." || r !== "eth" && n === "eth")
        return null;
      const i = await K(s = _o, Xc, cy).call(s, e, n);
      if (i != null) {
        const a = new _o(e, i, r);
        return n !== r && !await a.supportsWildcard() ? null : a;
      }
      n = n.split(".").slice(1).join(".");
    }
  }
};
Rs = new WeakMap(), Pi = new WeakMap(), Ps = new WeakSet(), yo = async function(e, r) {
  r = (r || []).slice();
  const n = O(this, Pi).interface;
  r.unshift(jf(this.name));
  let s = null;
  await this.supportsWildcard() && (s = n.getFunction(e), Q(s, "missing fragment", "UNKNOWN_ERROR", {
    info: { funcName: e }
  }), r = [
    KE(this.name, 255),
    n.encodeFunctionData(s, r)
  ], e = "resolve(bytes,bytes)"), r.push({
    enableCcipRead: !0
  });
  try {
    const i = await O(this, Pi)[e](...r);
    return s ? n.decodeFunctionResult(s, i)[0] : i;
  } catch (i) {
    if (!Bt(i, "CALL_EXCEPTION"))
      throw i;
  }
  return null;
}, Xc = new WeakSet(), cy = async function(e, r) {
  const n = await _o.getEnsAddress(e);
  try {
    const i = await new $s(n, [
      "function resolver(bytes32) view returns (address)"
    ], e).resolver(jf(r), {
      enableCcipRead: !0
    });
    return i === Cl ? null : i;
  } catch (s) {
    throw s;
  }
  return null;
}, $(_o, Xc);
let Qc = _o;
const Ep = BigInt(0);
function Me(t, e) {
  return function(r) {
    return r == null ? e : t(r);
  };
}
function vu(t, e) {
  return (r) => {
    if (e && r == null)
      return null;
    if (!Array.isArray(r))
      throw new Error("not an array");
    return r.map((n) => t(n));
  };
}
function rc(t, e) {
  return (r) => {
    const n = {};
    for (const s in t) {
      let i = s;
      if (e && s in e && !(i in r)) {
        for (const a of e[s])
          if (a in r) {
            i = a;
            break;
          }
      }
      try {
        const a = t[s](r[i]);
        a !== void 0 && (n[s] = a);
      } catch (a) {
        const o = a instanceof Error ? a.message : "not-an-error";
        Q(!1, `invalid value for value.${s} (${o})`, "BAD_DATA", { value: r });
      }
    }
    return n;
  };
}
function X_(t) {
  switch (t) {
    case !0:
    case "true":
      return !0;
    case !1:
    case "false":
      return !1;
  }
  L(!1, `invalid boolean; ${JSON.stringify(t)}`, "value", t);
}
function Ca(t) {
  return L(qe(t, !0), "invalid data", "value", t), t;
}
function kt(t) {
  return L(qe(t, 32), "invalid hash", "value", t), t;
}
const Y_ = rc({
  address: Ve,
  blockHash: kt,
  blockNumber: we,
  data: Ca,
  index: we,
  removed: Me(X_, !1),
  topics: vu(kt),
  transactionHash: kt,
  transactionIndex: we
}, {
  index: ["logIndex"]
});
function ex(t) {
  return Y_(t);
}
const tx = rc({
  hash: Me(kt),
  parentHash: kt,
  parentBeaconBlockRoot: Me(kt, null),
  number: we,
  timestamp: we,
  nonce: Me(Ca),
  difficulty: le,
  gasLimit: le,
  gasUsed: le,
  stateRoot: Me(kt, null),
  receiptsRoot: Me(kt, null),
  blobGasUsed: Me(le, null),
  excessBlobGas: Me(le, null),
  miner: Me(Ve),
  prevRandao: Me(kt, null),
  extraData: Ca,
  baseFeePerGas: Me(le)
}, {
  prevRandao: ["mixHash"]
});
function rx(t) {
  const e = tx(t);
  return e.transactions = t.transactions.map((r) => typeof r == "string" ? r : uy(r)), e;
}
const nx = rc({
  transactionIndex: we,
  blockNumber: we,
  transactionHash: kt,
  address: Ve,
  topics: vu(kt),
  data: Ca,
  index: we,
  blockHash: kt
}, {
  index: ["logIndex"]
});
function sx(t) {
  return nx(t);
}
const ix = rc({
  to: Me(Ve, null),
  from: Me(Ve, null),
  contractAddress: Me(Ve, null),
  // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
  index: we,
  root: Me(oe),
  gasUsed: le,
  blobGasUsed: Me(le, null),
  logsBloom: Me(Ca),
  blockHash: kt,
  hash: kt,
  logs: vu(sx),
  blockNumber: we,
  //confirmations: allowNull(getNumber, null),
  cumulativeGasUsed: le,
  effectiveGasPrice: Me(le),
  blobGasPrice: Me(le, null),
  status: Me(we),
  type: Me(we, 0)
}, {
  effectiveGasPrice: ["gasPrice"],
  hash: ["transactionHash"],
  index: ["transactionIndex"]
});
function ox(t) {
  return ix(t);
}
function uy(t) {
  t.to && le(t.to) === Ep && (t.to = "0x0000000000000000000000000000000000000000");
  const e = rc({
    hash: kt,
    // Some nodes do not return this, usually test nodes (like Ganache)
    index: Me(we, void 0),
    type: (r) => r === "0x" || r == null ? 0 : we(r),
    accessList: Me(Zi, null),
    blobVersionedHashes: Me(vu(kt, !0), null),
    blockHash: Me(kt, null),
    blockNumber: Me(we, null),
    transactionIndex: Me(we, null),
    from: Ve,
    // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
    gasPrice: Me(le),
    maxPriorityFeePerGas: Me(le),
    maxFeePerGas: Me(le),
    maxFeePerBlobGas: Me(le, null),
    gasLimit: le,
    to: Me(Ve, null),
    value: le,
    nonce: we,
    data: Ca,
    creates: Me(Ve, null),
    chainId: Me(le, null)
  }, {
    data: ["input"],
    gasLimit: ["gas"],
    index: ["transactionIndex"]
  })(t);
  if (e.to == null && e.creates == null && (e.creates = YA(e)), (t.type === 1 || t.type === 2) && t.accessList == null && (e.accessList = []), t.signature ? e.signature = Kr.from(t.signature) : e.signature = Kr.from(t), e.chainId == null) {
    const r = e.signature.legacyChainId;
    r != null && (e.chainId = r);
  }
  return e.blockHash && le(e.blockHash) === Ep && (e.blockHash = null), e;
}
const ax = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class nc {
  /**
   *  Creates a new **NetworkPlugin**.
   */
  constructor(e) {
    /**
     *  The name of the plugin.
     *
     *  It is recommended to use reverse-domain-notation, which permits
     *  unique names with a known authority as well as hierarchal entries.
     */
    F(this, "name");
    me(this, { name: e });
  }
  /**
   *  Creates a copy of this plugin.
   */
  clone() {
    return new nc(this.name);
  }
}
class Au extends nc {
  /**
   *  Creates a new GasCostPlugin from %%effectiveBlock%% until the
   *  latest block or another GasCostPlugin supercedes that block number,
   *  with the associated %%costs%%.
   */
  constructor(r, n) {
    r == null && (r = 0);
    super(`org.ethers.network.plugins.GasCost#${r || 0}`);
    /**
     *  The block number to treat these values as valid from.
     *
     *  This allows a hardfork to have updated values included as well as
     *  mulutiple hardforks to be supported.
     */
    F(this, "effectiveBlock");
    /**
     *  The transactions base fee.
     */
    F(this, "txBase");
    /**
     *  The fee for creating a new account.
     */
    F(this, "txCreate");
    /**
     *  The fee per zero-byte in the data.
     */
    F(this, "txDataZero");
    /**
     *  The fee per non-zero-byte in the data.
     */
    F(this, "txDataNonzero");
    /**
     *  The fee per storage key in the [[link-eip-2930]] access list.
     */
    F(this, "txAccessListStorageKey");
    /**
     *  The fee per address in the [[link-eip-2930]] access list.
     */
    F(this, "txAccessListAddress");
    const s = { effectiveBlock: r };
    function i(a, o) {
      let c = (n || {})[a];
      c == null && (c = o), L(typeof c == "number", `invalud value for ${a}`, "costs", n), s[a] = c;
    }
    i("txBase", 21e3), i("txCreate", 32e3), i("txDataZero", 4), i("txDataNonzero", 16), i("txAccessListStorageKey", 1900), i("txAccessListAddress", 2400), me(this, s);
  }
  clone() {
    return new Au(this.effectiveBlock, this);
  }
}
class Eu extends nc {
  /**
   *  Creates a new **EnsPlugin** connected to %%address%% on the
   *  %%targetNetwork%%. The default ENS address and mainnet is used
   *  if unspecified.
   */
  constructor(r, n) {
    super("org.ethers.plugins.network.Ens");
    /**
     *  The ENS Registrty Contract address.
     */
    F(this, "address");
    /**
     *  The chain ID that the ENS contract lives on.
     */
    F(this, "targetNetwork");
    me(this, {
      address: r || ax,
      targetNetwork: n ?? 1
    });
  }
  clone() {
    return new Eu(this.address, this.targetNetwork);
  }
}
var zl, Ql;
class lx extends nc {
  /**
   *  Creates a new **FetchUrlFeeDataNetworkPlugin** which will
   *  be used when computing the fee data for the network.
   */
  constructor(r, n) {
    super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    $(this, zl);
    $(this, Ql);
    k(this, zl, r), k(this, Ql, n);
  }
  /**
   *  The URL to initialize the FetchRequest with in %%processFunc%%.
   */
  get url() {
    return O(this, zl);
  }
  /**
   *  The callback to use when computing the FeeData.
   */
  get processFunc() {
    return O(this, Ql);
  }
  // We are immutable, so we can serve as our own clone
  clone() {
    return this;
  }
}
zl = new WeakMap(), Ql = new WeakMap();
const tf = /* @__PURE__ */ new Map();
var na, sa, ks;
const xo = class xo {
  /**
   *  Creates a new **Network** for %%name%% and %%chainId%%.
   */
  constructor(e, r) {
    $(this, na);
    $(this, sa);
    $(this, ks);
    k(this, na, e), k(this, sa, le(r)), k(this, ks, /* @__PURE__ */ new Map());
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
    return O(this, na);
  }
  set name(e) {
    k(this, na, e);
  }
  /**
   *  The network chain ID.
   */
  get chainId() {
    return O(this, sa);
  }
  set chainId(e) {
    k(this, sa, le(e, "chainId"));
  }
  /**
   *  Returns true if %%other%% matches this network. Any chain ID
   *  must match, and if no chain ID is present, the name must match.
   *
   *  This method does not currently check for additional properties,
   *  such as ENS address or plug-in compatibility.
   */
  matches(e) {
    if (e == null)
      return !1;
    if (typeof e == "string") {
      try {
        return this.chainId === le(e);
      } catch {
      }
      return this.name === e;
    }
    if (typeof e == "number" || typeof e == "bigint") {
      try {
        return this.chainId === le(e);
      } catch {
      }
      return !1;
    }
    if (typeof e == "object") {
      if (e.chainId != null) {
        try {
          return this.chainId === le(e.chainId);
        } catch {
        }
        return !1;
      }
      return e.name != null ? this.name === e.name : !1;
    }
    return !1;
  }
  /**
   *  Returns the list of plugins currently attached to this Network.
   */
  get plugins() {
    return Array.from(O(this, ks).values());
  }
  /**
   *  Attach a new %%plugin%% to this Network. The network name
   *  must be unique, excluding any fragment.
   */
  attachPlugin(e) {
    if (O(this, ks).get(e.name))
      throw new Error(`cannot replace existing plugin: ${e.name} `);
    return O(this, ks).set(e.name, e.clone()), this;
  }
  /**
   *  Return the plugin, if any, matching %%name%% exactly. Plugins
   *  with fragments will not be returned unless %%name%% includes
   *  a fragment.
   */
  getPlugin(e) {
    return O(this, ks).get(e) || null;
  }
  /**
   *  Gets a list of all plugins that match %%name%%, with otr without
   *  a fragment.
   */
  getPlugins(e) {
    return this.plugins.filter((r) => r.name.split("#")[0] === e);
  }
  /**
   *  Create a copy of this Network.
   */
  clone() {
    const e = new xo(this.name, this.chainId);
    return this.plugins.forEach((r) => {
      e.attachPlugin(r.clone());
    }), e;
  }
  /**
   *  Compute the intrinsic gas required for a transaction.
   *
   *  A GasCostPlugin can be attached to override the default
   *  values.
   */
  computeIntrinsicGas(e) {
    const r = this.getPlugin("org.ethers.plugins.network.GasCost") || new Au();
    let n = r.txBase;
    if (e.to == null && (n += r.txCreate), e.data)
      for (let s = 2; s < e.data.length; s += 2)
        e.data.substring(s, s + 2) === "00" ? n += r.txDataZero : n += r.txDataNonzero;
    if (e.accessList) {
      const s = Zi(e.accessList);
      for (const i in s)
        n += r.txAccessListAddress + r.txAccessListStorageKey * s[i].storageKeys.length;
    }
    return n;
  }
  /**
   *  Returns a new Network for the %%network%% name or chainId.
   */
  static from(e) {
    if (cx(), e == null)
      return xo.from("mainnet");
    if (typeof e == "number" && (e = BigInt(e)), typeof e == "string" || typeof e == "bigint") {
      const r = tf.get(e);
      if (r)
        return r();
      if (typeof e == "bigint")
        return new xo("unknown", e);
      L(!1, "unknown network", "network", e);
    }
    if (typeof e.clone == "function")
      return e.clone();
    if (typeof e == "object") {
      L(typeof e.name == "string" && typeof e.chainId == "number", "invalid network object name or chainId", "network", e);
      const r = new xo(e.name, e.chainId);
      return (e.ensAddress || e.ensNetwork != null) && r.attachPlugin(new Eu(e.ensAddress, e.ensNetwork)), r;
    }
    L(!1, "invalid network", "network", e);
  }
  /**
   *  Register %%nameOrChainId%% with a function which returns
   *  an instance of a Network representing that chain.
   */
  static register(e, r) {
    typeof e == "number" && (e = BigInt(e));
    const n = tf.get(e);
    n && L(!1, `conflicting network for ${JSON.stringify(n.name)}`, "nameOrChainId", e), tf.set(e, r);
  }
};
na = new WeakMap(), sa = new WeakMap(), ks = new WeakMap();
let wn = xo;
function _p(t, e) {
  const r = String(t);
  if (!r.match(/^[0-9.]+$/))
    throw new Error(`invalid gwei value: ${t}`);
  const n = r.split(".");
  if (n.length === 1 && n.push(""), n.length !== 2)
    throw new Error(`invalid gwei value: ${t}`);
  for (; n[1].length < e; )
    n[1] += "0";
  if (n[1].length > 9) {
    let s = BigInt(n[1].substring(0, 9));
    n[1].substring(9).match(/^0+$/) || s++, n[1] = s.toString();
  }
  return BigInt(n[0] + n[1]);
}
function xp(t) {
  return new lx(t, async (e, r, n) => {
    n.setHeader("User-Agent", "ethers");
    let s;
    try {
      const [i, a] = await Promise.all([
        n.send(),
        e()
      ]);
      s = i;
      const o = s.bodyJson.standard;
      return {
        gasPrice: a.gasPrice,
        maxFeePerGas: _p(o.maxFee, 9),
        maxPriorityFeePerGas: _p(o.maxPriorityFee, 9)
      };
    } catch (i) {
      Q(!1, `error encountered with polygon gas station (${JSON.stringify(n.url)})`, "SERVER_ERROR", { request: n, response: s, error: i });
    }
  });
}
let Sp = !1;
function cx() {
  if (Sp)
    return;
  Sp = !0;
  function t(e, r, n) {
    const s = function() {
      const i = new wn(e, r);
      return n.ensNetwork != null && i.attachPlugin(new Eu(null, n.ensNetwork)), i.attachPlugin(new Au()), (n.plugins || []).forEach((a) => {
        i.attachPlugin(a);
      }), i;
    };
    wn.register(e, s), wn.register(r, s), n.altNames && n.altNames.forEach((i) => {
      wn.register(i, s);
    });
  }
  t("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }), t("ropsten", 3, { ensNetwork: 3 }), t("rinkeby", 4, { ensNetwork: 4 }), t("goerli", 5, { ensNetwork: 5 }), t("kovan", 42, { ensNetwork: 42 }), t("sepolia", 11155111, { ensNetwork: 11155111 }), t("holesky", 17e3, { ensNetwork: 17e3 }), t("classic", 61, {}), t("classicKotti", 6, {}), t("arbitrum", 42161, {
    ensNetwork: 1
  }), t("arbitrum-goerli", 421613, {}), t("arbitrum-sepolia", 421614, {}), t("base", 8453, { ensNetwork: 1 }), t("base-goerli", 84531, {}), t("base-sepolia", 84532, {}), t("bnb", 56, { ensNetwork: 1 }), t("bnbt", 97, {}), t("linea", 59144, { ensNetwork: 1 }), t("linea-goerli", 59140, {}), t("linea-sepolia", 59141, {}), t("matic", 137, {
    ensNetwork: 1,
    plugins: [
      xp("https://gasstation.polygon.technology/v2")
    ]
  }), t("matic-amoy", 80002, {}), t("matic-mumbai", 80001, {
    altNames: ["maticMumbai", "maticmum"],
    plugins: [
      xp("https://gasstation-testnet.polygon.technology/v2")
    ]
  }), t("optimism", 10, {
    ensNetwork: 1,
    plugins: []
  }), t("optimism-goerli", 420, {}), t("optimism-sepolia", 11155420, {}), t("xdai", 100, { ensNetwork: 1 });
}
function zf(t) {
  return JSON.parse(JSON.stringify(t));
}
var Wn, Rr, Bs, pn, ia, Oc;
class ux {
  /**
   *  Create a new **PollingBlockSubscriber** attached to %%provider%%.
   */
  constructor(e) {
    $(this, ia);
    $(this, Wn);
    $(this, Rr);
    $(this, Bs);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    $(this, pn);
    k(this, Wn, e), k(this, Rr, null), k(this, Bs, 4e3), k(this, pn, -2);
  }
  /**
   *  The polling interval.
   */
  get pollingInterval() {
    return O(this, Bs);
  }
  set pollingInterval(e) {
    k(this, Bs, e);
  }
  start() {
    O(this, Rr) || (k(this, Rr, O(this, Wn)._setTimeout(K(this, ia, Oc).bind(this), O(this, Bs))), K(this, ia, Oc).call(this));
  }
  stop() {
    O(this, Rr) && (O(this, Wn)._clearTimeout(O(this, Rr)), k(this, Rr, null));
  }
  pause(e) {
    this.stop(), e && k(this, pn, -2);
  }
  resume() {
    this.start();
  }
}
Wn = new WeakMap(), Rr = new WeakMap(), Bs = new WeakMap(), pn = new WeakMap(), ia = new WeakSet(), Oc = async function() {
  try {
    const e = await O(this, Wn).getBlockNumber();
    if (O(this, pn) === -2) {
      k(this, pn, e);
      return;
    }
    if (e !== O(this, pn)) {
      for (let r = O(this, pn) + 1; r <= e; r++) {
        if (O(this, Rr) == null)
          return;
        await O(this, Wn).emit("block", r);
      }
      k(this, pn, e);
    }
  } catch {
  }
  O(this, Rr) != null && k(this, Rr, O(this, Wn)._setTimeout(K(this, ia, Oc).bind(this), O(this, Bs)));
};
var ki, Bi, Ms;
class Lh {
  /**
   *  Create a new **OnBlockSubscriber** attached to %%provider%%.
   */
  constructor(e) {
    $(this, ki);
    $(this, Bi);
    $(this, Ms);
    k(this, ki, e), k(this, Ms, !1), k(this, Bi, (r) => {
      this._poll(r, O(this, ki));
    });
  }
  /**
   *  Called on every new block.
   */
  async _poll(e, r) {
    throw new Error("sub-classes must override this");
  }
  start() {
    O(this, Ms) || (k(this, Ms, !0), O(this, Bi).call(this, -2), O(this, ki).on("block", O(this, Bi)));
  }
  stop() {
    O(this, Ms) && (k(this, Ms, !1), O(this, ki).off("block", O(this, Bi)));
  }
  pause(e) {
    this.stop();
  }
  resume() {
    this.start();
  }
}
ki = new WeakMap(), Bi = new WeakMap(), Ms = new WeakMap();
var oa, Vn;
class fx extends Lh {
  constructor(r, n) {
    super(r);
    $(this, oa);
    $(this, Vn);
    k(this, oa, n), k(this, Vn, -2);
  }
  pause(r) {
    r && k(this, Vn, -2), super.pause(r);
  }
  async _poll(r, n) {
    const s = await n.getBlock(O(this, oa));
    s != null && (O(this, Vn) === -2 ? k(this, Vn, s.number) : s.number > O(this, Vn) && (n.emit(O(this, oa), s.number), k(this, Vn, s.number)));
  }
}
oa = new WeakMap(), Vn = new WeakMap();
var Yc;
class hx extends Lh {
  constructor(r, n) {
    super(r);
    $(this, Yc);
    k(this, Yc, zf(n));
  }
  async _poll(r, n) {
    throw new Error("@TODO");
  }
}
Yc = new WeakMap();
var aa;
class dx extends Lh {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%hash%%.
   */
  constructor(r, n) {
    super(r);
    $(this, aa);
    k(this, aa, n);
  }
  async _poll(r, n) {
    const s = await n.getTransactionReceipt(O(this, aa));
    s && n.emit(O(this, aa), s);
  }
}
aa = new WeakMap();
var zn, la, ca, Ds, Pr, eu, fy;
class Uh {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%filter%%.
   */
  constructor(e, r) {
    $(this, eu);
    $(this, zn);
    $(this, la);
    $(this, ca);
    $(this, Ds);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    $(this, Pr);
    k(this, zn, e), k(this, la, zf(r)), k(this, ca, K(this, eu, fy).bind(this)), k(this, Ds, !1), k(this, Pr, -2);
  }
  start() {
    O(this, Ds) || (k(this, Ds, !0), O(this, Pr) === -2 && O(this, zn).getBlockNumber().then((e) => {
      k(this, Pr, e);
    }), O(this, zn).on("block", O(this, ca)));
  }
  stop() {
    O(this, Ds) && (k(this, Ds, !1), O(this, zn).off("block", O(this, ca)));
  }
  pause(e) {
    this.stop(), e && k(this, Pr, -2);
  }
  resume() {
    this.start();
  }
}
zn = new WeakMap(), la = new WeakMap(), ca = new WeakMap(), Ds = new WeakMap(), Pr = new WeakMap(), eu = new WeakSet(), fy = async function(e) {
  if (O(this, Pr) === -2)
    return;
  const r = zf(O(this, la));
  r.fromBlock = O(this, Pr) + 1, r.toBlock = e;
  const n = await O(this, zn).getLogs(r);
  if (n.length === 0) {
    O(this, Pr) < e - 60 && k(this, Pr, e - 60);
    return;
  }
  for (const s of n)
    O(this, zn).emit(O(this, la), s), k(this, Pr, s.blockNumber);
};
const px = BigInt(2), mx = 10;
function mc(t) {
  return t && typeof t.then == "function";
}
function Ic(t, e) {
  return t + ":" + JSON.stringify(e, (r, n) => {
    if (n == null)
      return "null";
    if (typeof n == "bigint")
      return `bigint:${n.toString()}`;
    if (typeof n == "string")
      return n.toLowerCase();
    if (typeof n == "object" && !Array.isArray(n)) {
      const s = Object.keys(n);
      return s.sort(), s.reduce((i, a) => (i[a] = n[a], i), {});
    }
    return n;
  });
}
class hy {
  /**
   *  Create a new UnmanagedSubscriber with %%name%%.
   */
  constructor(e) {
    /**
     *  The name fof the event.
     */
    F(this, "name");
    me(this, { name: e });
  }
  start() {
  }
  stop() {
  }
  pause(e) {
  }
  resume() {
  }
}
function gx(t) {
  return JSON.parse(JSON.stringify(t));
}
function Qf(t) {
  return t = Array.from(new Set(t).values()), t.sort(), t;
}
async function rf(t, e) {
  if (t == null)
    throw new Error("invalid event");
  if (Array.isArray(t) && (t = { topics: t }), typeof t == "string")
    switch (t) {
      case "block":
      case "debug":
      case "error":
      case "finalized":
      case "network":
      case "pending":
      case "safe":
        return { type: t, tag: t };
    }
  if (qe(t, 32)) {
    const r = t.toLowerCase();
    return { type: "transaction", tag: Ic("tx", { hash: r }), hash: r };
  }
  if (t.orphan) {
    const r = t;
    return { type: "orphan", tag: Ic("orphan", r), filter: gx(r) };
  }
  if (t.address || t.topics) {
    const r = t, n = {
      topics: (r.topics || []).map((s) => s == null ? null : Array.isArray(s) ? Qf(s.map((i) => i.toLowerCase())) : s.toLowerCase())
    };
    if (r.address) {
      const s = [], i = [], a = (o) => {
        qe(o) ? s.push(o) : i.push((async () => {
          s.push(await rr(o, e));
        })());
      };
      Array.isArray(r.address) ? r.address.forEach(a) : a(r.address), i.length && await Promise.all(i), n.address = Qf(s.map((o) => o.toLowerCase()));
    }
    return { filter: n, tag: Ic("event", n), type: "event" };
  }
  L(!1, "unknown ProviderEvent", "event", t);
}
function nf() {
  return (/* @__PURE__ */ new Date()).getTime();
}
const yx = {
  cacheTimeout: 250,
  pollingInterval: 4e3
};
var Ft, Ls, jt, ua, xr, Mi, Us, Qn, ql, kr, fa, ha, Se, wr, qf, Jf, wl, Kf, vl, Tc;
class bx {
  /**
   *  Create a new **AbstractProvider** connected to %%network%%, or
   *  use the various network detection capabilities to discover the
   *  [[Network]] if necessary.
   */
  constructor(e, r) {
    $(this, Se);
    $(this, Ft);
    $(this, Ls);
    // null=unpaused, true=paused+dropWhilePaused, false=paused
    $(this, jt);
    $(this, ua);
    $(this, xr);
    $(this, Mi);
    $(this, Us);
    // The most recent block number if running an event or -1 if no "block" event
    $(this, Qn);
    $(this, ql);
    $(this, kr);
    $(this, fa);
    $(this, ha);
    if (k(this, ha, Object.assign({}, yx, r || {})), e === "any")
      k(this, Mi, !0), k(this, xr, null);
    else if (e) {
      const n = wn.from(e);
      k(this, Mi, !1), k(this, xr, Promise.resolve(n)), setTimeout(() => {
        this.emit("network", n, null);
      }, 0);
    } else
      k(this, Mi, !1), k(this, xr, null);
    k(this, Qn, -1), k(this, Us, /* @__PURE__ */ new Map()), k(this, Ft, /* @__PURE__ */ new Map()), k(this, Ls, /* @__PURE__ */ new Map()), k(this, jt, null), k(this, ua, !1), k(this, ql, 1), k(this, kr, /* @__PURE__ */ new Map()), k(this, fa, !1);
  }
  get pollingInterval() {
    return O(this, ha).pollingInterval;
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
    return Array.from(O(this, Ls).values());
  }
  /**
   *  Attach a new plug-in.
   */
  attachPlugin(e) {
    if (O(this, Ls).get(e.name))
      throw new Error(`cannot replace existing plugin: ${e.name} `);
    return O(this, Ls).set(e.name, e.connect(this)), this;
  }
  /**
   *  Get a plugin by name.
   */
  getPlugin(e) {
    return O(this, Ls).get(e) || null;
  }
  /**
   *  Prevent any CCIP-read operation, regardless of whether requested
   *  in a [[call]] using ``enableCcipRead``.
   */
  get disableCcipRead() {
    return O(this, fa);
  }
  set disableCcipRead(e) {
    k(this, fa, !!e);
  }
  /**
   *  Resolves to the data for executing the CCIP-read operations.
   */
  async ccipReadFetch(e, r, n) {
    if (this.disableCcipRead || n.length === 0 || e.to == null)
      return null;
    const s = e.to.toLowerCase(), i = r.toLowerCase(), a = [];
    for (let o = 0; o < n.length; o++) {
      const c = n[o], m = c.replace("{sender}", s).replace("{data}", i), d = new es(m);
      c.indexOf("{data}") === -1 && (d.body = { data: i, sender: s }), this.emit("debug", { action: "sendCcipReadFetchRequest", request: d, index: o, urls: n });
      let l = "unknown error", f;
      try {
        f = await d.send();
      } catch (g) {
        a.push(g.message), this.emit("debug", { action: "receiveCcipReadFetchError", request: d, result: { error: g } });
        continue;
      }
      try {
        const g = f.bodyJson;
        if (g.data)
          return this.emit("debug", { action: "receiveCcipReadFetchResult", request: d, result: g }), g.data;
        g.message && (l = g.message), this.emit("debug", { action: "receiveCcipReadFetchError", request: d, result: g });
      } catch {
      }
      Q(f.statusCode < 400 || f.statusCode >= 500, `response not found during CCIP fetch: ${l}`, "OFFCHAIN_FAULT", { reason: "404_MISSING_RESOURCE", transaction: e, info: { url: c, errorMessage: l } }), a.push(l);
    }
    Q(!1, `error encountered during CCIP fetch: ${a.map((o) => JSON.stringify(o)).join(", ")}`, "OFFCHAIN_FAULT", {
      reason: "500_SERVER_ERROR",
      transaction: e,
      info: { urls: n, errorMessages: a }
    });
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a block before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Block]].
   */
  _wrapBlock(e, r) {
    return new L_(rx(e), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a log before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Log]].
   */
  _wrapLog(e, r) {
    return new tc(ex(e), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  receipt before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionReceipt]].
   */
  _wrapTransactionReceipt(e, r) {
    return new Zg(ox(e), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  response before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionResponse]].
   */
  _wrapTransactionResponse(e, r) {
    return new Ll(uy(e), this);
  }
  /**
   *  Resolves to the Network, forcing a network detection using whatever
   *  technique the sub-class requires.
   *
   *  Sub-classes **must** override this.
   */
  _detectNetwork() {
    Q(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
      operation: "_detectNetwork"
    });
  }
  /**
   *  Sub-classes should use this to perform all built-in operations. All
   *  methods sanitizes and normalizes the values passed into this.
   *
   *  Sub-classes **must** override this.
   */
  async _perform(e) {
    Q(!1, `unsupported method: ${e.method}`, "UNSUPPORTED_OPERATION", {
      operation: e.method,
      info: e
    });
  }
  // State
  async getBlockNumber() {
    const e = we(await K(this, Se, wr).call(this, { method: "getBlockNumber" }), "%response");
    return O(this, Qn) >= 0 && k(this, Qn, e), e;
  }
  /**
   *  Returns or resolves to the address for %%address%%, resolving ENS
   *  names and [[Addressable]] objects and returning if already an
   *  address.
   */
  _getAddress(e) {
    return rr(e, this);
  }
  /**
   *  Returns or resolves to a valid block tag for %%blockTag%%, resolving
   *  negative values and returning if already a valid block tag.
   */
  _getBlockTag(e) {
    if (e == null)
      return "latest";
    switch (e) {
      case "earliest":
        return "0x0";
      case "finalized":
      case "latest":
      case "pending":
      case "safe":
        return e;
    }
    if (qe(e))
      return qe(e, 32) ? e : vo(e);
    if (typeof e == "bigint" && (e = we(e, "blockTag")), typeof e == "number")
      return e >= 0 ? vo(e) : O(this, Qn) >= 0 ? vo(O(this, Qn) + e) : this.getBlockNumber().then((r) => vo(r + e));
    L(!1, "invalid blockTag", "blockTag", e);
  }
  /**
   *  Returns or resolves to a filter for %%filter%%, resolving any ENS
   *  names or [[Addressable]] object and returning if already a valid
   *  filter.
   */
  _getFilter(e) {
    const r = (e.topics || []).map((c) => c == null ? null : Array.isArray(c) ? Qf(c.map((m) => m.toLowerCase())) : c.toLowerCase()), n = "blockHash" in e ? e.blockHash : void 0, s = (c, m, d) => {
      let l;
      switch (c.length) {
        case 0:
          break;
        case 1:
          l = c[0];
          break;
        default:
          c.sort(), l = c;
      }
      if (n && (m != null || d != null))
        throw new Error("invalid filter");
      const f = {};
      return l && (f.address = l), r.length && (f.topics = r), m && (f.fromBlock = m), d && (f.toBlock = d), n && (f.blockHash = n), f;
    };
    let i = [];
    if (e.address)
      if (Array.isArray(e.address))
        for (const c of e.address)
          i.push(this._getAddress(c));
      else
        i.push(this._getAddress(e.address));
    let a;
    "fromBlock" in e && (a = this._getBlockTag(e.fromBlock));
    let o;
    return "toBlock" in e && (o = this._getBlockTag(e.toBlock)), i.filter((c) => typeof c != "string").length || a != null && typeof a != "string" || o != null && typeof o != "string" ? Promise.all([Promise.all(i), a, o]).then((c) => s(c[0], c[1], c[2])) : s(i, a, o);
  }
  /**
   *  Returns or resolves to a transaction for %%request%%, resolving
   *  any ENS names or [[Addressable]] and returning if already a valid
   *  transaction.
   */
  _getTransactionRequest(e) {
    const r = Vc(e), n = [];
    if (["to", "from"].forEach((s) => {
      if (r[s] == null)
        return;
      const i = rr(r[s], this);
      mc(i) ? n.push(async function() {
        r[s] = await i;
      }()) : r[s] = i;
    }), r.blockTag != null) {
      const s = this._getBlockTag(r.blockTag);
      mc(s) ? n.push(async function() {
        r.blockTag = await s;
      }()) : r.blockTag = s;
    }
    return n.length ? async function() {
      return await Promise.all(n), r;
    }() : r;
  }
  async getNetwork() {
    if (O(this, xr) == null) {
      const s = (async () => {
        try {
          const i = await this._detectNetwork();
          return this.emit("network", i, null), i;
        } catch (i) {
          throw O(this, xr) === s && k(this, xr, null), i;
        }
      })();
      return k(this, xr, s), (await s).clone();
    }
    const e = O(this, xr), [r, n] = await Promise.all([
      e,
      this._detectNetwork()
      // The actual connected network
    ]);
    return r.chainId !== n.chainId && (O(this, Mi) ? (this.emit("network", n, r), O(this, xr) === e && k(this, xr, Promise.resolve(n))) : Q(!1, `network changed: ${r.chainId} => ${n.chainId} `, "NETWORK_ERROR", {
      event: "changed"
    })), r.clone();
  }
  async getFeeData() {
    const e = await this.getNetwork(), r = async () => {
      const { _block: s, gasPrice: i, priorityFee: a } = await Xt({
        _block: K(this, Se, Kf).call(this, "latest", !1),
        gasPrice: (async () => {
          try {
            const d = await K(this, Se, wr).call(this, { method: "getGasPrice" });
            return le(d, "%response");
          } catch {
          }
          return null;
        })(),
        priorityFee: (async () => {
          try {
            const d = await K(this, Se, wr).call(this, { method: "getPriorityFee" });
            return le(d, "%response");
          } catch {
          }
          return null;
        })()
      });
      let o = null, c = null;
      const m = this._wrapBlock(s, e);
      return m && m.baseFeePerGas && (c = a ?? BigInt("1000000000"), o = m.baseFeePerGas * px + c), new bp(i, o, c);
    }, n = e.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    if (n) {
      const s = new es(n.url), i = await n.processFunc(r, this, s);
      return new bp(i.gasPrice, i.maxFeePerGas, i.maxPriorityFeePerGas);
    }
    return await r();
  }
  async estimateGas(e) {
    let r = this._getTransactionRequest(e);
    return mc(r) && (r = await r), le(await K(this, Se, wr).call(this, {
      method: "estimateGas",
      transaction: r
    }), "%response");
  }
  async call(e) {
    const { tx: r, blockTag: n } = await Xt({
      tx: this._getTransactionRequest(e),
      blockTag: this._getBlockTag(e.blockTag)
    });
    return await K(this, Se, Jf).call(this, K(this, Se, qf).call(this, r, n, e.enableCcipRead ? 0 : -1));
  }
  async getBalance(e, r) {
    return le(await K(this, Se, wl).call(this, { method: "getBalance" }, e, r), "%response");
  }
  async getTransactionCount(e, r) {
    return we(await K(this, Se, wl).call(this, { method: "getTransactionCount" }, e, r), "%response");
  }
  async getCode(e, r) {
    return oe(await K(this, Se, wl).call(this, { method: "getCode" }, e, r));
  }
  async getStorage(e, r, n) {
    const s = le(r, "position");
    return oe(await K(this, Se, wl).call(this, { method: "getStorage", position: s }, e, n));
  }
  // Write
  async broadcastTransaction(e) {
    const { blockNumber: r, hash: n, network: s } = await Xt({
      blockNumber: this.getBlockNumber(),
      hash: this._perform({
        method: "broadcastTransaction",
        signedTransaction: e
      }),
      network: this.getNetwork()
    }), i = $c.from(e);
    if (i.hash !== n)
      throw new Error("@TODO: the returned hash did not match");
    return this._wrapTransactionResponse(i, s).replaceableTransaction(r);
  }
  // Queries
  async getBlock(e, r) {
    const { network: n, params: s } = await Xt({
      network: this.getNetwork(),
      params: K(this, Se, Kf).call(this, e, !!r)
    });
    return s == null ? null : this._wrapBlock(s, n);
  }
  async getTransaction(e) {
    const { network: r, params: n } = await Xt({
      network: this.getNetwork(),
      params: K(this, Se, wr).call(this, { method: "getTransaction", hash: e })
    });
    return n == null ? null : this._wrapTransactionResponse(n, r);
  }
  async getTransactionReceipt(e) {
    const { network: r, params: n } = await Xt({
      network: this.getNetwork(),
      params: K(this, Se, wr).call(this, { method: "getTransactionReceipt", hash: e })
    });
    if (n == null)
      return null;
    if (n.gasPrice == null && n.effectiveGasPrice == null) {
      const s = await K(this, Se, wr).call(this, { method: "getTransaction", hash: e });
      if (s == null)
        throw new Error("report this; could not find tx or effectiveGasPrice");
      n.effectiveGasPrice = s.gasPrice;
    }
    return this._wrapTransactionReceipt(n, r);
  }
  async getTransactionResult(e) {
    const { result: r } = await Xt({
      network: this.getNetwork(),
      result: K(this, Se, wr).call(this, { method: "getTransactionResult", hash: e })
    });
    return r == null ? null : oe(r);
  }
  // Bloom-filter Queries
  async getLogs(e) {
    let r = this._getFilter(e);
    mc(r) && (r = await r);
    const { network: n, params: s } = await Xt({
      network: this.getNetwork(),
      params: K(this, Se, wr).call(this, { method: "getLogs", filter: r })
    });
    return s.map((i) => this._wrapLog(i, n));
  }
  // ENS
  _getProvider(e) {
    Q(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
      operation: "_getProvider()"
    });
  }
  async getResolver(e) {
    return await Qc.fromName(this, e);
  }
  async getAvatar(e) {
    const r = await this.getResolver(e);
    return r ? await r.getAvatar() : null;
  }
  async resolveName(e) {
    const r = await this.getResolver(e);
    return r ? await r.getAddress() : null;
  }
  async lookupAddress(e) {
    e = Ve(e);
    const r = jf(e.substring(2).toLowerCase() + ".addr.reverse");
    try {
      const n = await Qc.getEnsAddress(this), i = await new $s(n, [
        "function resolver(bytes32) view returns (address)"
      ], this).resolver(r);
      if (i == null || i === Cl)
        return null;
      const o = await new $s(i, [
        "function name(bytes32) view returns (string)"
      ], this).name(r);
      return await this.resolveName(o) !== e ? null : o;
    } catch (n) {
      if (Bt(n, "BAD_DATA") && n.value === "0x" || Bt(n, "CALL_EXCEPTION"))
        return null;
      throw n;
    }
    return null;
  }
  async waitForTransaction(e, r, n) {
    const s = r ?? 1;
    return s === 0 ? this.getTransactionReceipt(e) : new Promise(async (i, a) => {
      let o = null;
      const c = async (m) => {
        try {
          const d = await this.getTransactionReceipt(e);
          if (d != null && m - d.blockNumber + 1 >= s) {
            i(d), o && (clearTimeout(o), o = null);
            return;
          }
        } catch (d) {
          console.log("EEE", d);
        }
        this.once("block", c);
      };
      n != null && (o = setTimeout(() => {
        o != null && (o = null, this.off("block", c), a(ot("timeout", "TIMEOUT", { reason: "timeout" })));
      }, n)), c(await this.getBlockNumber());
    });
  }
  async waitForBlock(e) {
    Q(!1, "not implemented yet", "NOT_IMPLEMENTED", {
      operation: "waitForBlock"
    });
  }
  /**
   *  Clear a timer created using the [[_setTimeout]] method.
   */
  _clearTimeout(e) {
    const r = O(this, kr).get(e);
    r && (r.timer && clearTimeout(r.timer), O(this, kr).delete(e));
  }
  /**
   *  Create a timer that will execute %%func%% after at least %%timeout%%
   *  (in ms). If %%timeout%% is unspecified, then %%func%% will execute
   *  in the next event loop.
   *
   *  [Pausing](AbstractProvider-paused) the provider will pause any
   *  associated timers.
   */
  _setTimeout(e, r) {
    r == null && (r = 0);
    const n = al(this, ql)._++, s = () => {
      O(this, kr).delete(n), e();
    };
    if (this.paused)
      O(this, kr).set(n, { timer: null, func: s, time: r });
    else {
      const i = setTimeout(s, r);
      O(this, kr).set(n, { timer: i, func: s, time: nf() });
    }
    return n;
  }
  /**
   *  Perform %%func%% on each subscriber.
   */
  _forEachSubscriber(e) {
    for (const r of O(this, Ft).values())
      e(r.subscriber);
  }
  /**
   *  Sub-classes may override this to customize subscription
   *  implementations.
   */
  _getSubscriber(e) {
    switch (e.type) {
      case "debug":
      case "error":
      case "network":
        return new hy(e.type);
      case "block": {
        const r = new ux(this);
        return r.pollingInterval = this.pollingInterval, r;
      }
      case "safe":
      case "finalized":
        return new fx(this, e.type);
      case "event":
        return new Uh(this, e.filter);
      case "transaction":
        return new dx(this, e.hash);
      case "orphan":
        return new hx(this, e.filter);
    }
    throw new Error(`unsupported event: ${e.type}`);
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
  _recoverSubscriber(e, r) {
    for (const n of O(this, Ft).values())
      if (n.subscriber === e) {
        n.started && n.subscriber.stop(), n.subscriber = r, n.started && r.start(), O(this, jt) != null && r.pause(O(this, jt));
        break;
      }
  }
  async on(e, r) {
    const n = await K(this, Se, Tc).call(this, e);
    return n.listeners.push({ listener: r, once: !1 }), n.started || (n.subscriber.start(), n.started = !0, O(this, jt) != null && n.subscriber.pause(O(this, jt))), this;
  }
  async once(e, r) {
    const n = await K(this, Se, Tc).call(this, e);
    return n.listeners.push({ listener: r, once: !0 }), n.started || (n.subscriber.start(), n.started = !0, O(this, jt) != null && n.subscriber.pause(O(this, jt))), this;
  }
  async emit(e, ...r) {
    const n = await K(this, Se, vl).call(this, e, r);
    if (!n || n.listeners.length === 0)
      return !1;
    const s = n.listeners.length;
    return n.listeners = n.listeners.filter(({ listener: i, once: a }) => {
      const o = new Km(this, a ? null : i, e);
      try {
        i.call(this, ...r, o);
      } catch {
      }
      return !a;
    }), n.listeners.length === 0 && (n.started && n.subscriber.stop(), O(this, Ft).delete(n.tag)), s > 0;
  }
  async listenerCount(e) {
    if (e) {
      const n = await K(this, Se, vl).call(this, e);
      return n ? n.listeners.length : 0;
    }
    let r = 0;
    for (const { listeners: n } of O(this, Ft).values())
      r += n.length;
    return r;
  }
  async listeners(e) {
    if (e) {
      const n = await K(this, Se, vl).call(this, e);
      return n ? n.listeners.map(({ listener: s }) => s) : [];
    }
    let r = [];
    for (const { listeners: n } of O(this, Ft).values())
      r = r.concat(n.map(({ listener: s }) => s));
    return r;
  }
  async off(e, r) {
    const n = await K(this, Se, vl).call(this, e);
    if (!n)
      return this;
    if (r) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(r);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (!r || n.listeners.length === 0) && (n.started && n.subscriber.stop(), O(this, Ft).delete(n.tag)), this;
  }
  async removeAllListeners(e) {
    if (e) {
      const { tag: r, started: n, subscriber: s } = await K(this, Se, Tc).call(this, e);
      n && s.stop(), O(this, Ft).delete(r);
    } else
      for (const [r, { started: n, subscriber: s }] of O(this, Ft))
        n && s.stop(), O(this, Ft).delete(r);
    return this;
  }
  // Alias for "on"
  async addListener(e, r) {
    return await this.on(e, r);
  }
  // Alias for "off"
  async removeListener(e, r) {
    return this.off(e, r);
  }
  /**
   *  If this provider has been destroyed using the [[destroy]] method.
   *
   *  Once destroyed, all resources are reclaimed, internal event loops
   *  and timers are cleaned up and no further requests may be sent to
   *  the provider.
   */
  get destroyed() {
    return O(this, ua);
  }
  /**
   *  Sub-classes may use this to shutdown any sockets or release their
   *  resources and reject any pending requests.
   *
   *  Sub-classes **must** call ``super.destroy()``.
   */
  destroy() {
    this.removeAllListeners();
    for (const e of O(this, kr).keys())
      this._clearTimeout(e);
    k(this, ua, !0);
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
    return O(this, jt) != null;
  }
  set paused(e) {
    !!e !== this.paused && (this.paused ? this.resume() : this.pause(!1));
  }
  /**
   *  Pause the provider. If %%dropWhilePaused%%, any events that occur
   *  while paused are dropped, otherwise all events will be emitted once
   *  the provider is unpaused.
   */
  pause(e) {
    if (k(this, Qn, -1), O(this, jt) != null) {
      if (O(this, jt) == !!e)
        return;
      Q(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
        operation: "pause"
      });
    }
    this._forEachSubscriber((r) => r.pause(e)), k(this, jt, !!e);
    for (const r of O(this, kr).values())
      r.timer && clearTimeout(r.timer), r.time = nf() - r.time;
  }
  /**
   *  Resume the provider.
   */
  resume() {
    if (O(this, jt) != null) {
      this._forEachSubscriber((e) => e.resume()), k(this, jt, null);
      for (const e of O(this, kr).values()) {
        let r = e.time;
        r < 0 && (r = 0), e.time = nf(), setTimeout(e.func, r);
      }
    }
  }
}
Ft = new WeakMap(), Ls = new WeakMap(), jt = new WeakMap(), ua = new WeakMap(), xr = new WeakMap(), Mi = new WeakMap(), Us = new WeakMap(), Qn = new WeakMap(), ql = new WeakMap(), kr = new WeakMap(), fa = new WeakMap(), ha = new WeakMap(), Se = new WeakSet(), wr = async function(e) {
  const r = O(this, ha).cacheTimeout;
  if (r < 0)
    return await this._perform(e);
  const n = Ic(e.method, e);
  let s = O(this, Us).get(n);
  return s || (s = this._perform(e), O(this, Us).set(n, s), setTimeout(() => {
    O(this, Us).get(n) === s && O(this, Us).delete(n);
  }, r)), await s;
}, qf = async function(e, r, n) {
  Q(n < mx, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
    reason: "TOO_MANY_REDIRECTS",
    transaction: Object.assign({}, e, { blockTag: r, enableCcipRead: !0 })
  });
  const s = Vc(e);
  try {
    return oe(await this._perform({ method: "call", transaction: s, blockTag: r }));
  } catch (i) {
    if (!this.disableCcipRead && Sh(i) && i.data && n >= 0 && r === "latest" && s.to != null && at(i.data, 0, 4) === "0x556f1830") {
      const a = i.data, o = await rr(s.to, this);
      let c;
      try {
        c = _x(at(i.data, 4));
      } catch (l) {
        Q(!1, l.message, "OFFCHAIN_FAULT", {
          reason: "BAD_DATA",
          transaction: s,
          info: { data: a }
        });
      }
      Q(c.sender.toLowerCase() === o.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
        action: "call",
        data: a,
        reason: "OffchainLookup",
        transaction: s,
        invocation: null,
        revert: {
          signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
          name: "OffchainLookup",
          args: c.errorArgs
        }
      });
      const m = await this.ccipReadFetch(s, c.calldata, c.urls);
      Q(m != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
        reason: "FETCH_FAILED",
        transaction: s,
        info: { data: i.data, errorArgs: c.errorArgs }
      });
      const d = {
        to: o,
        data: pt([c.selector, Ex([m, c.extraData])])
      };
      this.emit("debug", { action: "sendCcipReadCall", transaction: d });
      try {
        const l = await K(this, Se, qf).call(this, d, r, n + 1);
        return this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, d), result: l }), l;
      } catch (l) {
        throw this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, d), error: l }), l;
      }
    }
    throw i;
  }
}, Jf = async function(e) {
  const { value: r } = await Xt({
    network: this.getNetwork(),
    value: e
  });
  return r;
}, wl = async function(e, r, n) {
  let s = this._getAddress(r), i = this._getBlockTag(n);
  return (typeof s != "string" || typeof i != "string") && ([s, i] = await Promise.all([s, i])), await K(this, Se, Jf).call(this, K(this, Se, wr).call(this, Object.assign(e, { address: s, blockTag: i })));
}, Kf = async function(e, r) {
  if (qe(e, 32))
    return await K(this, Se, wr).call(this, {
      method: "getBlock",
      blockHash: e,
      includeTransactions: r
    });
  let n = this._getBlockTag(e);
  return typeof n != "string" && (n = await n), await K(this, Se, wr).call(this, {
    method: "getBlock",
    blockTag: n,
    includeTransactions: r
  });
}, vl = async function(e, r) {
  let n = await rf(e, this);
  return n.type === "event" && r && r.length > 0 && r[0].removed === !0 && (n = await rf({ orphan: "drop-log", log: r[0] }, this)), O(this, Ft).get(n.tag) || null;
}, Tc = async function(e) {
  const r = await rf(e, this), n = r.tag;
  let s = O(this, Ft).get(n);
  return s || (s = { subscriber: this._getSubscriber(r), tag: n, addressableMap: /* @__PURE__ */ new WeakMap(), nameMap: /* @__PURE__ */ new Map(), started: !1, listeners: [] }, O(this, Ft).set(n, s)), s;
};
function wx(t, e) {
  try {
    const r = Zf(t, e);
    if (r)
      return Dc(r);
  } catch {
  }
  return null;
}
function Zf(t, e) {
  if (t === "0x")
    return null;
  try {
    const r = we(at(t, e, e + 32)), n = we(at(t, r, r + 32));
    return at(t, r + 32, r + 32 + n);
  } catch {
  }
  return null;
}
function Op(t) {
  const e = er(t);
  if (e.length > 32)
    throw new Error("internal; should not happen");
  const r = new Uint8Array(32);
  return r.set(e, 32 - e.length), r;
}
function vx(t) {
  if (t.length % 32 === 0)
    return t;
  const e = new Uint8Array(Math.ceil(t.length / 32) * 32);
  return e.set(t), e;
}
const Ax = new Uint8Array([]);
function Ex(t) {
  const e = [];
  let r = 0;
  for (let n = 0; n < t.length; n++)
    e.push(Ax), r += 32;
  for (let n = 0; n < t.length; n++) {
    const s = De(t[n]);
    e[n] = Op(r), e.push(Op(s.length)), e.push(vx(s)), r += 32 + Math.ceil(s.length / 32) * 32;
  }
  return pt(e);
}
const Ip = "0x0000000000000000000000000000000000000000000000000000000000000000";
function _x(t) {
  const e = {
    sender: "",
    urls: [],
    calldata: "",
    selector: "",
    extraData: "",
    errorArgs: []
  };
  Q(Io(t) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
    reason: "insufficient OffchainLookup data"
  });
  const r = at(t, 0, 32);
  Q(at(r, 0, 12) === at(Ip, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup sender"
  }), e.sender = at(r, 12);
  try {
    const n = [], s = we(at(t, 32, 64)), i = we(at(t, s, s + 32)), a = at(t, s + 32);
    for (let o = 0; o < i; o++) {
      const c = wx(a, o * 32);
      if (c == null)
        throw new Error("abort");
      n.push(c);
    }
    e.urls = n;
  } catch {
    Q(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup urls"
    });
  }
  try {
    const n = Zf(t, 64);
    if (n == null)
      throw new Error("abort");
    e.calldata = n;
  } catch {
    Q(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup calldata"
    });
  }
  Q(at(t, 100, 128) === at(Ip, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup callbaackSelector"
  }), e.selector = at(t, 96, 100);
  try {
    const n = Zf(t, 128);
    if (n == null)
      throw new Error("abort");
    e.extraData = n;
  } catch {
    Q(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup extraData"
    });
  }
  return e.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((n) => e[n]), e;
}
function fo(t, e) {
  if (t.provider)
    return t.provider;
  Q(!1, "missing provider", "UNSUPPORTED_OPERATION", { operation: e });
}
async function Tp(t, e) {
  let r = Vc(e);
  if (r.to != null && (r.to = rr(r.to, t)), r.from != null) {
    const n = r.from;
    r.from = Promise.all([
      t.getAddress(),
      rr(n, t)
    ]).then(([s, i]) => (L(s.toLowerCase() === i.toLowerCase(), "transaction from mismatch", "tx.from", i), s));
  } else
    r.from = t.getAddress();
  return await Xt(r);
}
class xx {
  /**
   *  Creates a new Signer connected to %%provider%%.
   */
  constructor(e) {
    /**
     *  The provider this signer is connected to.
     */
    F(this, "provider");
    me(this, { provider: e || null });
  }
  async getNonce(e) {
    return fo(this, "getTransactionCount").getTransactionCount(await this.getAddress(), e);
  }
  async populateCall(e) {
    return await Tp(this, e);
  }
  async populateTransaction(e) {
    const r = fo(this, "populateTransaction"), n = await Tp(this, e);
    n.nonce == null && (n.nonce = await this.getNonce("pending")), n.gasLimit == null && (n.gasLimit = await this.estimateGas(n));
    const s = await this.provider.getNetwork();
    if (n.chainId != null) {
      const a = le(n.chainId);
      L(a === s.chainId, "transaction chainId mismatch", "tx.chainId", e.chainId);
    } else
      n.chainId = s.chainId;
    const i = n.maxFeePerGas != null || n.maxPriorityFeePerGas != null;
    if (n.gasPrice != null && (n.type === 2 || i) ? L(!1, "eip-1559 transaction do not support gasPrice", "tx", e) : (n.type === 0 || n.type === 1) && i && L(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", e), (n.type === 2 || n.type == null) && n.maxFeePerGas != null && n.maxPriorityFeePerGas != null)
      n.type = 2;
    else if (n.type === 0 || n.type === 1) {
      const a = await r.getFeeData();
      Q(a.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
        operation: "getGasPrice"
      }), n.gasPrice == null && (n.gasPrice = a.gasPrice);
    } else {
      const a = await r.getFeeData();
      if (n.type == null)
        if (a.maxFeePerGas != null && a.maxPriorityFeePerGas != null)
          if (n.type = 2, n.gasPrice != null) {
            const o = n.gasPrice;
            delete n.gasPrice, n.maxFeePerGas = o, n.maxPriorityFeePerGas = o;
          } else
            n.maxFeePerGas == null && (n.maxFeePerGas = a.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = a.maxPriorityFeePerGas);
        else a.gasPrice != null ? (Q(!i, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
          operation: "populateTransaction"
        }), n.gasPrice == null && (n.gasPrice = a.gasPrice), n.type = 0) : Q(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
          operation: "signer.getFeeData"
        });
      else (n.type === 2 || n.type === 3) && (n.maxFeePerGas == null && (n.maxFeePerGas = a.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = a.maxPriorityFeePerGas));
    }
    return await Xt(n);
  }
  async estimateGas(e) {
    return fo(this, "estimateGas").estimateGas(await this.populateCall(e));
  }
  async call(e) {
    return fo(this, "call").call(await this.populateCall(e));
  }
  async resolveName(e) {
    return await fo(this, "resolveName").resolveName(e);
  }
  async sendTransaction(e) {
    const r = fo(this, "sendTransaction"), n = await this.populateTransaction(e);
    delete n.from;
    const s = $c.from(n);
    return await r.broadcastTransaction(await this.signTransaction(s));
  }
}
function Sx(t) {
  return JSON.parse(JSON.stringify(t));
}
var Kt, mn, Di, Fs, Li, da, qs, Xf, Yf;
class dy {
  /**
   *  Creates a new **FilterIdSubscriber** which will used [[_subscribe]]
   *  and [[_emitResults]] to setup the subscription and provide the event
   *  to the %%provider%%.
   */
  constructor(e) {
    $(this, qs);
    $(this, Kt);
    $(this, mn);
    $(this, Di);
    $(this, Fs);
    $(this, Li);
    $(this, da);
    k(this, Kt, e), k(this, mn, null), k(this, Di, K(this, qs, Xf).bind(this)), k(this, Fs, !1), k(this, Li, null), k(this, da, !1);
  }
  /**
   *  Sub-classes **must** override this to begin the subscription.
   */
  _subscribe(e) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle the events.
   */
  _emitResults(e, r) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle recovery on errors.
   */
  _recover(e) {
    throw new Error("subclasses must override this");
  }
  start() {
    O(this, Fs) || (k(this, Fs, !0), K(this, qs, Xf).call(this, -2));
  }
  stop() {
    O(this, Fs) && (k(this, Fs, !1), k(this, da, !0), K(this, qs, Yf).call(this), O(this, Kt).off("block", O(this, Di)));
  }
  pause(e) {
    e && K(this, qs, Yf).call(this), O(this, Kt).off("block", O(this, Di));
  }
  resume() {
    this.start();
  }
}
Kt = new WeakMap(), mn = new WeakMap(), Di = new WeakMap(), Fs = new WeakMap(), Li = new WeakMap(), da = new WeakMap(), qs = new WeakSet(), Xf = async function(e) {
  try {
    O(this, mn) == null && k(this, mn, this._subscribe(O(this, Kt)));
    let r = null;
    try {
      r = await O(this, mn);
    } catch (i) {
      if (!Bt(i, "UNSUPPORTED_OPERATION") || i.operation !== "eth_newFilter")
        throw i;
    }
    if (r == null) {
      k(this, mn, null), O(this, Kt)._recoverSubscriber(this, this._recover(O(this, Kt)));
      return;
    }
    const n = await O(this, Kt).getNetwork();
    if (O(this, Li) || k(this, Li, n), O(this, Li).chainId !== n.chainId)
      throw new Error("chaid changed");
    if (O(this, da))
      return;
    const s = await O(this, Kt).send("eth_getFilterChanges", [r]);
    await this._emitResults(O(this, Kt), s);
  } catch (r) {
    console.log("@TODO", r);
  }
  O(this, Kt).once("block", O(this, Di));
}, Yf = function() {
  const e = O(this, mn);
  e && (k(this, mn, null), e.then((r) => {
    O(this, Kt).destroyed || O(this, Kt).send("eth_uninstallFilter", [r]);
  }));
};
var Ui;
class Ox extends dy {
  /**
   *  Creates a new **FilterIdEventSubscriber** attached to %%provider%%
   *  listening for %%filter%%.
   */
  constructor(r, n) {
    super(r);
    $(this, Ui);
    k(this, Ui, Sx(n));
  }
  _recover(r) {
    return new Uh(r, O(this, Ui));
  }
  async _subscribe(r) {
    return await r.send("eth_newFilter", [O(this, Ui)]);
  }
  async _emitResults(r, n) {
    for (const s of n)
      r.emit(O(this, Ui), r._wrapLog(s, r._network));
  }
}
Ui = new WeakMap();
class Ix extends dy {
  async _subscribe(e) {
    return await e.send("eth_newPendingTransactionFilter", []);
  }
  async _emitResults(e, r) {
    for (const n of r)
      e.emit("pending", n);
  }
}
const Tx = "bigint,boolean,function,number,string,symbol".split(/,/g);
function Cc(t) {
  if (t == null || Tx.indexOf(typeof t) >= 0 || typeof t.getAddress == "function")
    return t;
  if (Array.isArray(t))
    return t.map(Cc);
  if (typeof t == "object")
    return Object.keys(t).reduce((e, r) => (e[r] = t[r], e), {});
  throw new Error(`should not happen: ${t} (${typeof t})`);
}
function Cx(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function ho(t) {
  return t && t.toLowerCase();
}
function Cp(t) {
  return t && typeof t.pollingInterval == "number";
}
const py = {
  polling: !1,
  staticNetwork: null,
  batchStallTime: 10,
  batchMaxSize: 1 << 20,
  batchMaxCount: 100,
  cacheTimeout: 250,
  pollingInterval: 4e3
};
class sf extends xx {
  constructor(r, n) {
    super(r);
    F(this, "address");
    n = Ve(n), me(this, { address: n });
  }
  connect(r) {
    Q(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
      operation: "signer.connect"
    });
  }
  async getAddress() {
    return this.address;
  }
  // JSON-RPC will automatially fill in nonce, etc. so we just check from
  async populateTransaction(r) {
    return await this.populateCall(r);
  }
  // Returns just the hash of the transaction after sent, which is what
  // the bare JSON-RPC API does;
  async sendUncheckedTransaction(r) {
    const n = Cc(r), s = [];
    if (n.from) {
      const a = n.from;
      s.push((async () => {
        const o = await rr(a, this.provider);
        L(o != null && o.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", r), n.from = o;
      })());
    } else
      n.from = this.address;
    if (n.gasLimit == null && s.push((async () => {
      n.gasLimit = await this.provider.estimateGas({ ...n, from: this.address });
    })()), n.to != null) {
      const a = n.to;
      s.push((async () => {
        n.to = await rr(a, this.provider);
      })());
    }
    s.length && await Promise.all(s);
    const i = this.provider.getRpcTransaction(n);
    return this.provider.send("eth_sendTransaction", [i]);
  }
  async sendTransaction(r) {
    const n = await this.provider.getBlockNumber(), s = await this.sendUncheckedTransaction(r);
    return await new Promise((i, a) => {
      const o = [1e3, 100];
      let c = 0;
      const m = async () => {
        try {
          const d = await this.provider.getTransaction(s);
          if (d != null) {
            i(d.replaceableTransaction(n));
            return;
          }
        } catch (d) {
          if (Bt(d, "CANCELLED") || Bt(d, "BAD_DATA") || Bt(d, "NETWORK_ERROR") || Bt(d, "UNSUPPORTED_OPERATION")) {
            d.info == null && (d.info = {}), d.info.sendTransactionHash = s, a(d);
            return;
          }
          if (Bt(d, "INVALID_ARGUMENT") && (c++, d.info == null && (d.info = {}), d.info.sendTransactionHash = s, c > 10)) {
            a(d);
            return;
          }
          this.provider.emit("error", ot("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", { error: d }));
        }
        this.provider._setTimeout(() => {
          m();
        }, o.pop() || 4e3);
      };
      m();
    });
  }
  async signTransaction(r) {
    const n = Cc(r);
    if (n.from) {
      const i = await rr(n.from, this.provider);
      L(i != null && i.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", r), n.from = i;
    } else
      n.from = this.address;
    const s = this.provider.getRpcTransaction(n);
    return await this.provider.send("eth_signTransaction", [s]);
  }
  async signMessage(r) {
    const n = typeof r == "string" ? Xn(r) : r;
    return await this.provider.send("personal_sign", [
      oe(n),
      this.address.toLowerCase()
    ]);
  }
  async signTypedData(r, n, s) {
    const i = Cc(s), a = await Wc.resolveNames(r, n, i, async (o) => {
      const c = await rr(o);
      return L(c != null, "TypedData does not support null address", "value", o), c;
    });
    return await this.provider.send("eth_signTypedData_v4", [
      this.address.toLowerCase(),
      JSON.stringify(Wc.getPayload(a.domain, n, a.value))
    ]);
  }
  async unlock(r) {
    return this.provider.send("personal_unlockAccount", [
      this.address.toLowerCase(),
      r,
      null
    ]);
  }
  // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
  async _legacySignMessage(r) {
    const n = typeof r == "string" ? Xn(r) : r;
    return await this.provider.send("eth_sign", [
      this.address.toLowerCase(),
      oe(n)
    ]);
  }
}
var Fi, pa, qn, gn, qr, Br, ar, Jl, eh;
class Nx extends bx {
  constructor(r, n) {
    super(r, n);
    $(this, Jl);
    $(this, Fi);
    // The next ID to use for the JSON-RPC ID field
    $(this, pa);
    // Payloads are queued and triggered in batches using the drainTimer
    $(this, qn);
    $(this, gn);
    $(this, qr);
    $(this, Br);
    $(this, ar);
    k(this, pa, 1), k(this, Fi, Object.assign({}, py, n || {})), k(this, qn, []), k(this, gn, null), k(this, Br, null), k(this, ar, null);
    {
      let i = null;
      const a = new Promise((o) => {
        i = o;
      });
      k(this, qr, { promise: a, resolve: i });
    }
    const s = this._getOption("staticNetwork");
    typeof s == "boolean" ? (L(!s || r !== "any", "staticNetwork cannot be used on special network 'any'", "options", n), s && r != null && k(this, Br, wn.from(r))) : s && (L(r == null || s.matches(r), "staticNetwork MUST match network object", "options", n), k(this, Br, s));
  }
  /**
   *  Returns the value associated with the option %%key%%.
   *
   *  Sub-classes can use this to inquire about configuration options.
   */
  _getOption(r) {
    return O(this, Fi)[r];
  }
  /**
   *  Gets the [[Network]] this provider has committed to. On each call, the network
   *  is detected, and if it has changed, the call will reject.
   */
  get _network() {
    return Q(O(this, Br), "network is not available yet", "NETWORK_ERROR"), O(this, Br);
  }
  /**
   *  Resolves to the non-normalized value by performing %%req%%.
   *
   *  Sub-classes may override this to modify behavior of actions,
   *  and should generally call ``super._perform`` as a fallback.
   */
  async _perform(r) {
    if (r.method === "call" || r.method === "estimateGas") {
      let s = r.transaction;
      if (s && s.type != null && le(s.type) && s.maxFeePerGas == null && s.maxPriorityFeePerGas == null) {
        const i = await this.getFeeData();
        i.maxFeePerGas == null && i.maxPriorityFeePerGas == null && (r = Object.assign({}, r, {
          transaction: Object.assign({}, s, { type: void 0 })
        }));
      }
    }
    const n = this.getRpcRequest(r);
    return n != null ? await this.send(n.method, n.args) : super._perform(r);
  }
  /**
   *  Sub-classes may override this; it detects the *actual* network that
   *  we are **currently** connected to.
   *
   *  Keep in mind that [[send]] may only be used once [[ready]], otherwise the
   *  _send primitive must be used instead.
   */
  async _detectNetwork() {
    const r = this._getOption("staticNetwork");
    if (r)
      if (r === !0) {
        if (O(this, Br))
          return O(this, Br);
      } else
        return r;
    return O(this, ar) ? await O(this, ar) : this.ready ? (k(this, ar, (async () => {
      try {
        const n = wn.from(le(await this.send("eth_chainId", [])));
        return k(this, ar, null), n;
      } catch (n) {
        throw k(this, ar, null), n;
      }
    })()), await O(this, ar)) : (k(this, ar, (async () => {
      const n = {
        id: al(this, pa)._++,
        method: "eth_chainId",
        params: [],
        jsonrpc: "2.0"
      };
      this.emit("debug", { action: "sendRpcPayload", payload: n });
      let s;
      try {
        s = (await this._send(n))[0], k(this, ar, null);
      } catch (i) {
        throw k(this, ar, null), this.emit("debug", { action: "receiveRpcError", error: i }), i;
      }
      if (this.emit("debug", { action: "receiveRpcResult", result: s }), "result" in s)
        return wn.from(le(s.result));
      throw this.getRpcError(n, s);
    })()), await O(this, ar));
  }
  /**
   *  Sub-classes **MUST** call this. Until [[_start]] has been called, no calls
   *  will be passed to [[_send]] from [[send]]. If it is overridden, then
   *  ``super._start()`` **MUST** be called.
   *
   *  Calling it multiple times is safe and has no effect.
   */
  _start() {
    O(this, qr) == null || O(this, qr).resolve == null || (O(this, qr).resolve(), k(this, qr, null), (async () => {
      for (; O(this, Br) == null && !this.destroyed; )
        try {
          k(this, Br, await this._detectNetwork());
        } catch (r) {
          if (this.destroyed)
            break;
          console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", ot("failed to bootstrap network detection", "NETWORK_ERROR", { event: "initial-network-discovery", info: { error: r } })), await Cx(1e3);
        }
      K(this, Jl, eh).call(this);
    })());
  }
  /**
   *  Resolves once the [[_start]] has been called. This can be used in
   *  sub-classes to defer sending data until the connection has been
   *  established.
   */
  async _waitUntilReady() {
    if (O(this, qr) != null)
      return await O(this, qr).promise;
  }
  /**
   *  Return a Subscriber that will manage the %%sub%%.
   *
   *  Sub-classes may override this to modify the behavior of
   *  subscription management.
   */
  _getSubscriber(r) {
    return r.type === "pending" ? new Ix(this) : r.type === "event" ? this._getOption("polling") ? new Uh(this, r.filter) : new Ox(this, r.filter) : r.type === "orphan" && r.filter.orphan === "drop-log" ? new hy("orphan") : super._getSubscriber(r);
  }
  /**
   *  Returns true only if the [[_start]] has been called.
   */
  get ready() {
    return O(this, qr) == null;
  }
  /**
   *  Returns %%tx%% as a normalized JSON-RPC transaction request,
   *  which has all values hexlified and any numeric values converted
   *  to Quantity values.
   */
  getRpcTransaction(r) {
    const n = {};
    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((s) => {
      if (r[s] == null)
        return;
      let i = s;
      s === "gasLimit" && (i = "gas"), n[i] = vo(le(r[s], `tx.${s}`));
    }), ["from", "to", "data"].forEach((s) => {
      r[s] != null && (n[s] = oe(r[s]));
    }), r.accessList && (n.accessList = Zi(r.accessList)), r.blobVersionedHashes && (n.blobVersionedHashes = r.blobVersionedHashes.map((s) => s.toLowerCase())), n;
  }
  /**
   *  Returns the request method and arguments required to perform
   *  %%req%%.
   */
  getRpcRequest(r) {
    switch (r.method) {
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
          args: [ho(r.address), r.blockTag]
        };
      case "getTransactionCount":
        return {
          method: "eth_getTransactionCount",
          args: [ho(r.address), r.blockTag]
        };
      case "getCode":
        return {
          method: "eth_getCode",
          args: [ho(r.address), r.blockTag]
        };
      case "getStorage":
        return {
          method: "eth_getStorageAt",
          args: [
            ho(r.address),
            "0x" + r.position.toString(16),
            r.blockTag
          ]
        };
      case "broadcastTransaction":
        return {
          method: "eth_sendRawTransaction",
          args: [r.signedTransaction]
        };
      case "getBlock":
        if ("blockTag" in r)
          return {
            method: "eth_getBlockByNumber",
            args: [r.blockTag, !!r.includeTransactions]
          };
        if ("blockHash" in r)
          return {
            method: "eth_getBlockByHash",
            args: [r.blockHash, !!r.includeTransactions]
          };
        break;
      case "getTransaction":
        return {
          method: "eth_getTransactionByHash",
          args: [r.hash]
        };
      case "getTransactionReceipt":
        return {
          method: "eth_getTransactionReceipt",
          args: [r.hash]
        };
      case "call":
        return {
          method: "eth_call",
          args: [this.getRpcTransaction(r.transaction), r.blockTag]
        };
      case "estimateGas":
        return {
          method: "eth_estimateGas",
          args: [this.getRpcTransaction(r.transaction)]
        };
      case "getLogs":
        return r.filter && r.filter.address != null && (Array.isArray(r.filter.address) ? r.filter.address = r.filter.address.map(ho) : r.filter.address = ho(r.filter.address)), { method: "eth_getLogs", args: [r.filter] };
    }
    return null;
  }
  /**
   *  Returns an ethers-style Error for the given JSON-RPC error
   *  %%payload%%, coalescing the various strings and error shapes
   *  that different nodes return, coercing them into a machine-readable
   *  standardized error.
   */
  getRpcError(r, n) {
    const { method: s } = r, { error: i } = n;
    if (s === "eth_estimateGas" && i.message) {
      const c = i.message;
      if (!c.match(/revert/i) && c.match(/insufficient funds/i))
        return ot("insufficient funds", "INSUFFICIENT_FUNDS", {
          transaction: r.params[0],
          info: { payload: r, error: i }
        });
    }
    if (s === "eth_call" || s === "eth_estimateGas") {
      const c = th(i), m = Dl.getBuiltinCallException(s === "eth_call" ? "call" : "estimateGas", r.params[0], c ? c.data : null);
      return m.info = { error: i, payload: r }, m;
    }
    const a = JSON.stringify(Rx(i));
    if (typeof i.message == "string" && i.message.match(/user denied|ethers-user-denied/i))
      return ot("user rejected action", "ACTION_REJECTED", {
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
        info: { payload: r, error: i }
      });
    if (s === "eth_sendRawTransaction" || s === "eth_sendTransaction") {
      const c = r.params[0];
      if (a.match(/insufficient funds|base fee exceeds gas limit/i))
        return ot("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
          transaction: c,
          info: { error: i }
        });
      if (a.match(/nonce/i) && a.match(/too low/i))
        return ot("nonce has already been used", "NONCE_EXPIRED", { transaction: c, info: { error: i } });
      if (a.match(/replacement transaction/i) && a.match(/underpriced/i))
        return ot("replacement fee too low", "REPLACEMENT_UNDERPRICED", { transaction: c, info: { error: i } });
      if (a.match(/only replay-protected/i))
        return ot("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
          operation: s,
          info: { transaction: c, info: { error: i } }
        });
    }
    let o = !!a.match(/the method .* does not exist/i);
    return o || i && i.details && i.details.startsWith("Unauthorized method:") && (o = !0), o ? ot("unsupported operation", "UNSUPPORTED_OPERATION", {
      operation: r.method,
      info: { error: i, payload: r }
    }) : ot("could not coalesce error", "UNKNOWN_ERROR", { error: i, payload: r });
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
  send(r, n) {
    if (this.destroyed)
      return Promise.reject(ot("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: r }));
    const s = al(this, pa)._++, i = new Promise((a, o) => {
      O(this, qn).push({
        resolve: a,
        reject: o,
        payload: { method: r, params: n, id: s, jsonrpc: "2.0" }
      });
    });
    return K(this, Jl, eh).call(this), i;
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
  async getSigner(r) {
    r == null && (r = 0);
    const n = this.send("eth_accounts", []);
    if (typeof r == "number") {
      const i = await n;
      if (r >= i.length)
        throw new Error("no such account");
      return new sf(this, i[r]);
    }
    const { accounts: s } = await Xt({
      network: this.getNetwork(),
      accounts: n
    });
    r = Ve(r);
    for (const i of s)
      if (Ve(i) === r)
        return new sf(this, r);
    throw new Error("invalid account");
  }
  async listAccounts() {
    return (await this.send("eth_accounts", [])).map((n) => new sf(this, n));
  }
  destroy() {
    O(this, gn) && (clearTimeout(O(this, gn)), k(this, gn, null));
    for (const { payload: r, reject: n } of O(this, qn))
      n(ot("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: r.method }));
    k(this, qn, []), super.destroy();
  }
}
Fi = new WeakMap(), pa = new WeakMap(), qn = new WeakMap(), gn = new WeakMap(), qr = new WeakMap(), Br = new WeakMap(), ar = new WeakMap(), Jl = new WeakSet(), eh = function() {
  if (O(this, gn))
    return;
  const r = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
  k(this, gn, setTimeout(() => {
    k(this, gn, null);
    const n = O(this, qn);
    for (k(this, qn, []); n.length; ) {
      const s = [n.shift()];
      for (; n.length && s.length !== O(this, Fi).batchMaxCount; )
        if (s.push(n.shift()), JSON.stringify(s.map((a) => a.payload)).length > O(this, Fi).batchMaxSize) {
          n.unshift(s.pop());
          break;
        }
      (async () => {
        const i = s.length === 1 ? s[0].payload : s.map((a) => a.payload);
        this.emit("debug", { action: "sendRpcPayload", payload: i });
        try {
          const a = await this._send(i);
          this.emit("debug", { action: "receiveRpcResult", result: a });
          for (const { resolve: o, reject: c, payload: m } of s) {
            if (this.destroyed) {
              c(ot("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: m.method }));
              continue;
            }
            const d = a.filter((l) => l.id === m.id)[0];
            if (d == null) {
              const l = ot("missing response for request", "BAD_DATA", {
                value: a,
                info: { payload: m }
              });
              this.emit("error", l), c(l);
              continue;
            }
            if ("error" in d) {
              c(this.getRpcError(m, d));
              continue;
            }
            o(d.result);
          }
        } catch (a) {
          this.emit("debug", { action: "receiveRpcError", error: a });
          for (const { reject: o } of s)
            o(a);
        }
      })();
    }
  }, r));
};
var js;
class my extends Nx {
  constructor(r, n) {
    super(r, n);
    $(this, js);
    let s = this._getOption("pollingInterval");
    s == null && (s = py.pollingInterval), k(this, js, s);
  }
  _getSubscriber(r) {
    const n = super._getSubscriber(r);
    return Cp(n) && (n.pollingInterval = O(this, js)), n;
  }
  /**
   *  The polling interval (default: 4000 ms)
   */
  get pollingInterval() {
    return O(this, js);
  }
  set pollingInterval(r) {
    if (!Number.isInteger(r) || r < 0)
      throw new Error("invalid interval");
    k(this, js, r), this._forEachSubscriber((n) => {
      Cp(n) && (n.pollingInterval = O(this, js));
    });
  }
}
js = new WeakMap();
var ma;
class gy extends my {
  constructor(r, n, s) {
    r == null && (r = "http://localhost:8545");
    super(n, s);
    $(this, ma);
    typeof r == "string" ? k(this, ma, new es(r)) : k(this, ma, r.clone());
  }
  _getConnection() {
    return O(this, ma).clone();
  }
  async send(r, n) {
    return await this._start(), await super.send(r, n);
  }
  async _send(r) {
    const n = this._getConnection();
    n.body = JSON.stringify(r), n.setHeader("content-type", "application/json");
    const s = await n.send();
    s.assertOk();
    let i = s.bodyJson;
    return Array.isArray(i) || (i = [i]), i;
  }
}
ma = new WeakMap();
function th(t) {
  if (t == null)
    return null;
  if (typeof t.message == "string" && t.message.match(/revert/i) && qe(t.data))
    return { message: t.message, data: t.data };
  if (typeof t == "object") {
    for (const e in t) {
      const r = th(t[e]);
      if (r)
        return r;
    }
    return null;
  }
  if (typeof t == "string")
    try {
      return th(JSON.parse(t));
    } catch {
    }
  return null;
}
function rh(t, e) {
  if (t != null) {
    if (typeof t.message == "string" && e.push(t.message), typeof t == "object")
      for (const r in t)
        rh(t[r], e);
    if (typeof t == "string")
      try {
        return rh(JSON.parse(t), e);
      } catch {
      }
  }
}
function Rx(t) {
  const e = [];
  return rh(t, e), e;
}
var ga;
class Px extends my {
  /**
   *  Connnect to the %%ethereum%% provider, optionally forcing the
   *  %%network%%.
   */
  constructor(r, n, s) {
    const i = Object.assign({}, s ?? {}, { batchMaxCount: 1 });
    L(r && r.request, "invalid EIP-1193 provider", "ethereum", r);
    super(n, i);
    $(this, ga);
    k(this, ga, async (a, o) => {
      const c = { method: a, params: o };
      this.emit("debug", { action: "sendEip1193Request", payload: c });
      try {
        const m = await r.request(c);
        return this.emit("debug", { action: "receiveEip1193Result", result: m }), m;
      } catch (m) {
        const d = new Error(m.message);
        throw d.code = m.code, d.data = m.data, d.payload = c, this.emit("debug", { action: "receiveEip1193Error", error: d }), d;
      }
    });
  }
  async send(r, n) {
    return await this._start(), await super.send(r, n);
  }
  async _send(r) {
    L(!Array.isArray(r), "EIP-1193 does not support batch request", "payload", r);
    try {
      const n = await O(this, ga).call(this, r.method, r.params || []);
      return [{ id: r.id, result: n }];
    } catch (n) {
      return [{
        id: r.id,
        error: { code: n.code, data: n.data, message: n.message }
      }];
    }
  }
  getRpcError(r, n) {
    switch (n = JSON.parse(JSON.stringify(n)), n.error.code || -1) {
      case 4001:
        n.error.message = `ethers-user-denied: ${n.error.message}`;
        break;
      case 4200:
        n.error.message = `ethers-unsupported: ${n.error.message}`;
        break;
    }
    return super.getRpcError(r, n);
  }
  /**
   *  Resolves to ``true`` if the provider manages the %%address%%.
   */
  async hasSigner(r) {
    r == null && (r = 0);
    const n = await this.send("eth_accounts", []);
    return typeof r == "number" ? n.length > r : (r = r.toLowerCase(), n.filter((s) => s.toLowerCase() === r).length !== 0);
  }
  async getSigner(r) {
    if (r == null && (r = 0), !await this.hasSigner(r))
      try {
        await O(this, ga).call(this, "eth_requestAccounts", []);
      } catch (n) {
        const s = n.payload;
        throw this.getRpcError(s, { id: s.id, error: n });
      }
    return await super.getSigner(r);
  }
}
ga = new WeakMap();
const Na = {};
function vS(t) {
  const e = Na[t];
  return e || console.error(`Chain config for ${t} not found`), e;
}
const _l = {}, kx = new Promise((t) => {
  _l.WEB3_ONBOARD_INIT = { resolver: t, data: null };
});
function Bx() {
  return _l.WEB3_ONBOARD_INIT.resolver;
}
async function AS() {
  return _l.WEB3_ONBOARD_INIT.data || (_l.WEB3_ONBOARD_INIT.data = await kx), _l.WEB3_ONBOARD_INIT.data;
}
const Mx = () => {
  var n, s;
  const [{ wallet: t }] = xh(), e = (n = ((t == null ? void 0 : t.accounts) || [])[0]) == null ? void 0 : n.address, r = (s = ((t == null ? void 0 : t.chains) || [])[0]) == null ? void 0 : s.id;
  return {
    address: e,
    chainId: r
  };
}, Dx = () => {
  const [{ wallet: t }] = xh(), [e, r] = Vs(null), n = Ws(
    async (i, a, o, c) => {
      r(null);
      try {
        const m = Na[i];
        if (!m)
          return r(`Chain with ID ${i} not found in ChainConstants.`), null;
        const d = new gy(m.rpcUrl), l = new $s(a, [o], d), f = o.split("(")[0].trim();
        return f in l ? await l[f](...c) : (r(`Method ${f} not found in contract.`), null);
      } catch (m) {
        return console.error("Error calling method:", m), r(m.message), null;
      }
    },
    []
  ), s = Ws(
    async (i, a, o) => {
      r(null);
      try {
        if (!(t != null && t.provider))
          return r("No wallet connected. Please connect your wallet."), null;
        const m = await new Px(t.provider).getSigner(), d = new $s(i, [a], m), l = a.split("(")[0].trim();
        if (!(l in d))
          return r(`Method ${l} not found in contract.`), null;
        const f = await d[l](...o);
        return await f.wait(), f;
      } catch (c) {
        return console.error("Error executing method:", c), r(c.message), null;
      }
    },
    [t]
  );
  return { callMethod: n, execute: s, error: e };
}, of = {};
function Lx(t, e) {
  const [r, n] = Vs(null), [s, i] = Vs(null);
  Nc(() => {
    if (!t || !e) return;
    (async () => {
      try {
        if (of[t]) {
          n(of[t]);
          return;
        }
        const m = Na[e];
        if (!m || !m.rpcUrl) {
          i("Invalid chain configuration");
          return;
        }
        const d = new gy(m.rpcUrl), l = new $s(t, [
          "function name() view returns (string)",
          "function symbol() view returns (string)",
          "function decimals() view returns (uint8)"
        ], d), [f, g, h] = await Promise.all([
          l.name(),
          l.symbol(),
          l.decimals()
        ]), u = { name: f, symbol: g, decimals: h };
        of[t] = u, n(u);
      } catch (m) {
        console.error(m), i("Failed to fetch token data.");
      }
    })();
  }, [t, e]);
  const a = Ws(
    (c) => r ? jA(c.toString(), r.decimals) : (console.warn("Token data is not loaded yet. Returning null."), null),
    [r]
  ), o = Ws(
    (c) => r ? FA(c.toString(), r.decimals) : (console.warn("Token data is not loaded yet. Returning null."), null),
    [r]
  );
  return { tokenData: r, error: s, toMachineReadable: a, toHumanReadable: o };
}
const af = {
  ALLOWANCE: "function allowance(address owner, address spender) view returns (uint256)",
  TRANSFER: "function transfer(address to, uint256 value) returns (bool)",
  TRANSFER_FROM: "function transferFrom(address from, address to, uint256 value) returns (bool)",
  APPROVE: "function approve(address spender, uint256 value) returns (bool)",
  DECIMALS: "function decimals() view returns (uint8)",
  NAME: "function name() view returns (string)",
  SYMBOL: "function symbol() view returns (string)"
}, ES = ({
  chainId: t,
  token: e,
  amount: r,
  spender: n,
  approveButton: s,
  actionButton: i,
  unknownState: a
}) => {
  const [o, c] = Vs(null), [m, d] = Vs(!1), [{ wallet: l }, f] = xh(), { callMethod: g, execute: h } = Dx(), { address: u } = Mx(), { toMachineReadable: b } = Lx(e, t), p = async () => {
    try {
      if (!t || !e || !r || !n || !u) {
        console.error("Invalid parameters provided or wallet not connected.");
        return;
      }
      const v = await g(t, e, af.ALLOWANCE, [u, n]), E = b(r);
      E && c(v < E);
    } catch (v) {
      console.error("Error checking approval:", v), c(null);
    }
  }, y = async () => {
    try {
      if (!l) {
        console.error("Wallet not connected."), await f();
        return;
      }
      d(!0);
      const v = b(r), E = await h(e, af.APPROVE, [n, v]);
      console.log("approve tx executed", E);
      const x = setInterval(async () => {
        try {
          const C = await g(t, e, af.ALLOWANCE, [u, n]);
          console.log("allowance received", C), C.gte(v) && (d(!1), c(!1), clearInterval(x));
        } catch (C) {
          console.error("Error while checking approval status:", C);
        }
      }, 3e3);
    } catch (v) {
      console.error("Error during approval:", v), d(!1);
    }
  };
  return Nc(() => {
    p();
  }, [t, e, r, n, l]), o === null ? a : o ? s(y, m) : i;
};
var gc = { exports: {} }, hl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Np;
function Ux() {
  if (Np) return hl;
  Np = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function r(n, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var o in s)
        o !== "key" && (i[o] = s[o]);
    } else i = s;
    return s = i.ref, {
      $$typeof: t,
      type: n,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return hl.Fragment = e, hl.jsx = r, hl.jsxs = r, hl;
}
var dl = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rp;
function Fx() {
  return Rp || (Rp = 1, process.env.NODE_ENV !== "production" && function() {
    function t(M) {
      if (M == null) return null;
      if (typeof M == "function")
        return M.$$typeof === de ? null : M.displayName || M.name || null;
      if (typeof M == "string") return M;
      switch (M) {
        case C:
          return "Fragment";
        case x:
          return "Portal";
        case A:
          return "Profiler";
        case T:
          return "StrictMode";
        case H:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (typeof M.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), M.$$typeof) {
          case I:
            return (M.displayName || "Context") + ".Provider";
          case S:
            return (M._context.displayName || "Context") + ".Consumer";
          case P:
            var ne = M.render;
            return M = M.displayName, M || (M = ne.displayName || ne.name || "", M = M !== "" ? "ForwardRef(" + M + ")" : "ForwardRef"), M;
          case Z:
            return ne = M.displayName || null, ne !== null ? ne : t(M.type) || "Memo";
          case j:
            ne = M._payload, M = M._init;
            try {
              return t(M(ne));
            } catch {
            }
        }
      return null;
    }
    function e(M) {
      return "" + M;
    }
    function r(M) {
      try {
        e(M);
        var ne = !1;
      } catch {
        ne = !0;
      }
      if (ne) {
        ne = console;
        var te = ne.error, ve = typeof Symbol == "function" && Symbol.toStringTag && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return te.call(
          ne,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ve
        ), e(M);
      }
    }
    function n() {
    }
    function s() {
      if (Pe === 0) {
        lt = console.log, nt = console.info, Ye = console.warn, ae = console.error, bt = console.group, Nt = console.groupCollapsed, Qe = console.groupEnd;
        var M = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: M,
          log: M,
          warn: M,
          error: M,
          group: M,
          groupCollapsed: M,
          groupEnd: M
        });
      }
      Pe++;
    }
    function i() {
      if (Pe--, Pe === 0) {
        var M = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ue({}, M, { value: lt }),
          info: ue({}, M, { value: nt }),
          warn: ue({}, M, { value: Ye }),
          error: ue({}, M, { value: ae }),
          group: ue({}, M, { value: bt }),
          groupCollapsed: ue({}, M, { value: Nt }),
          groupEnd: ue({}, M, { value: Qe })
        });
      }
      0 > Pe && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function a(M) {
      if (wt === void 0)
        try {
          throw Error();
        } catch (te) {
          var ne = te.stack.trim().match(/\n( *(at )?)/);
          wt = ne && ne[1] || "", st = -1 < te.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < te.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + wt + M + st;
    }
    function o(M, ne) {
      if (!M || Lt) return "";
      var te = ir.get(M);
      if (te !== void 0) return te;
      Lt = !0, te = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var ve = null;
      ve = fe.H, fe.H = null, s();
      try {
        var tt = {
          DetermineComponentFrameRoot: function() {
            try {
              if (ne) {
                var Gt = function() {
                  throw Error();
                };
                if (Object.defineProperty(Gt.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Gt, []);
                  } catch ($e) {
                    var ct = $e;
                  }
                  Reflect.construct(M, [], Gt);
                } else {
                  try {
                    Gt.call();
                  } catch ($e) {
                    ct = $e;
                  }
                  M.call(Gt.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch ($e) {
                  ct = $e;
                }
                (Gt = M()) && typeof Gt.catch == "function" && Gt.catch(function() {
                });
              }
            } catch ($e) {
              if ($e && ct && typeof $e.stack == "string")
                return [$e.stack, ct.stack];
            }
            return [null, null];
          }
        };
        tt.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var He = Object.getOwnPropertyDescriptor(
          tt.DetermineComponentFrameRoot,
          "name"
        );
        He && He.configurable && Object.defineProperty(
          tt.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var ge = tt.DetermineComponentFrameRoot(), mt = ge[0], fr = ge[1];
        if (mt && fr) {
          var Je = mt.split(`
`), At = fr.split(`
`);
          for (ge = He = 0; He < Je.length && !Je[He].includes(
            "DetermineComponentFrameRoot"
          ); )
            He++;
          for (; ge < At.length && !At[ge].includes(
            "DetermineComponentFrameRoot"
          ); )
            ge++;
          if (He === Je.length || ge === At.length)
            for (He = Je.length - 1, ge = At.length - 1; 1 <= He && 0 <= ge && Je[He] !== At[ge]; )
              ge--;
          for (; 1 <= He && 0 <= ge; He--, ge--)
            if (Je[He] !== At[ge]) {
              if (He !== 1 || ge !== 1)
                do
                  if (He--, ge--, 0 > ge || Je[He] !== At[ge]) {
                    var hr = `
` + Je[He].replace(
                      " at new ",
                      " at "
                    );
                    return M.displayName && hr.includes("<anonymous>") && (hr = hr.replace("<anonymous>", M.displayName)), typeof M == "function" && ir.set(M, hr), hr;
                  }
                while (1 <= He && 0 <= ge);
              break;
            }
        }
      } finally {
        Lt = !1, fe.H = ve, i(), Error.prepareStackTrace = te;
      }
      return Je = (Je = M ? M.displayName || M.name : "") ? a(Je) : "", typeof M == "function" && ir.set(M, Je), Je;
    }
    function c(M) {
      if (M == null) return "";
      if (typeof M == "function") {
        var ne = M.prototype;
        return o(
          M,
          !(!ne || !ne.isReactComponent)
        );
      }
      if (typeof M == "string") return a(M);
      switch (M) {
        case H:
          return a("Suspense");
        case W:
          return a("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case P:
            return M = o(M.render, !1), M;
          case Z:
            return c(M.type);
          case j:
            ne = M._payload, M = M._init;
            try {
              return c(M(ne));
            } catch {
            }
        }
      return "";
    }
    function m() {
      var M = fe.A;
      return M === null ? null : M.getOwner();
    }
    function d(M) {
      if (_e.call(M, "key")) {
        var ne = Object.getOwnPropertyDescriptor(M, "key").get;
        if (ne && ne.isReactWarning) return !1;
      }
      return M.key !== void 0;
    }
    function l(M, ne) {
      function te() {
        en || (en = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ne
        ));
      }
      te.isReactWarning = !0, Object.defineProperty(M, "key", {
        get: te,
        configurable: !0
      });
    }
    function f() {
      var M = t(this.type);
      return ns[M] || (ns[M] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), M = this.props.ref, M !== void 0 ? M : null;
    }
    function g(M, ne, te, ve, tt, He) {
      return te = He.ref, M = {
        $$typeof: E,
        type: M,
        key: ne,
        props: He,
        _owner: tt
      }, (te !== void 0 ? te : null) !== null ? Object.defineProperty(M, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(M, "ref", { enumerable: !1, value: null }), M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(M, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    }
    function h(M, ne, te, ve, tt, He) {
      if (typeof M == "string" || typeof M == "function" || M === C || M === A || M === T || M === H || M === W || M === z || typeof M == "object" && M !== null && (M.$$typeof === j || M.$$typeof === Z || M.$$typeof === I || M.$$typeof === S || M.$$typeof === P || M.$$typeof === ye || M.getModuleId !== void 0)) {
        var ge = ne.children;
        if (ge !== void 0)
          if (ve)
            if (he(ge)) {
              for (ve = 0; ve < ge.length; ve++)
                u(ge[ve], M);
              Object.freeze && Object.freeze(ge);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else u(ge, M);
      } else
        ge = "", (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), M === null ? ve = "null" : he(M) ? ve = "array" : M !== void 0 && M.$$typeof === E ? (ve = "<" + (t(M.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof M, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          ve,
          ge
        );
      if (_e.call(ne, "key")) {
        ge = t(M);
        var mt = Object.keys(ne).filter(function(Je) {
          return Je !== "key";
        });
        ve = 0 < mt.length ? "{key: someKey, " + mt.join(": ..., ") + ": ...}" : "{key: someKey}", ss[ge + ve] || (mt = 0 < mt.length ? "{" + mt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ve,
          ge,
          mt,
          ge
        ), ss[ge + ve] = !0);
      }
      if (ge = null, te !== void 0 && (r(te), ge = "" + te), d(ne) && (r(ne.key), ge = "" + ne.key), "key" in ne) {
        te = {};
        for (var fr in ne)
          fr !== "key" && (te[fr] = ne[fr]);
      } else te = ne;
      return ge && l(
        te,
        typeof M == "function" ? M.displayName || M.name || "Unknown" : M
      ), g(M, ge, He, tt, m(), te);
    }
    function u(M, ne) {
      if (typeof M == "object" && M && M.$$typeof !== Sr) {
        if (he(M))
          for (var te = 0; te < M.length; te++) {
            var ve = M[te];
            b(ve) && p(ve, ne);
          }
        else if (b(M))
          M._store && (M._store.validated = 1);
        else if (M === null || typeof M != "object" ? te = null : (te = Y && M[Y] || M["@@iterator"], te = typeof te == "function" ? te : null), typeof te == "function" && te !== M.entries && (te = te.call(M), te !== M))
          for (; !(M = te.next()).done; )
            b(M.value) && p(M.value, ne);
      }
    }
    function b(M) {
      return typeof M == "object" && M !== null && M.$$typeof === E;
    }
    function p(M, ne) {
      if (M._store && !M._store.validated && M.key == null && (M._store.validated = 1, ne = y(ne), !Lr[ne])) {
        Lr[ne] = !0;
        var te = "";
        M && M._owner != null && M._owner !== m() && (te = null, typeof M._owner.tag == "number" ? te = t(M._owner.type) : typeof M._owner.name == "string" && (te = M._owner.name), te = " It was passed a child from " + te + ".");
        var ve = fe.getCurrentStack;
        fe.getCurrentStack = function() {
          var tt = c(M.type);
          return ve && (tt += ve() || ""), tt;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          ne,
          te
        ), fe.getCurrentStack = ve;
      }
    }
    function y(M) {
      var ne = "", te = m();
      return te && (te = t(te.type)) && (ne = `

Check the render method of \`` + te + "`."), ne || (M = t(M)) && (ne = `

Check the top-level render call using <` + M + ">."), ne;
    }
    var v = sh, E = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), I = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), Y = Symbol.iterator, de = Symbol.for("react.client.reference"), fe = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _e = Object.prototype.hasOwnProperty, ue = Object.assign, ye = Symbol.for("react.client.reference"), he = Array.isArray, Pe = 0, lt, nt, Ye, ae, bt, Nt, Qe;
    n.__reactDisabledLog = !0;
    var wt, st, Lt = !1, ir = new (typeof WeakMap == "function" ? WeakMap : Map)(), Sr = Symbol.for("react.client.reference"), en, ns = {}, ss = {}, Lr = {};
    dl.Fragment = C, dl.jsx = function(M, ne, te, ve, tt) {
      return h(M, ne, te, !1, ve, tt);
    }, dl.jsxs = function(M, ne, te, ve, tt) {
      return h(M, ne, te, !0, ve, tt);
    };
  }()), dl;
}
var Pp;
function jx() {
  return Pp || (Pp = 1, process.env.NODE_ENV === "production" ? gc.exports = Ux() : gc.exports = Fx()), gc.exports;
}
var lf = jx(), Al = { exports: {} };
Al.exports;
var kp;
function Hx() {
  return kp || (kp = 1, function(t, e) {
    var r = 200, n = "Expected a function", s = "__lodash_hash_undefined__", i = 1, a = 2, o = 1 / 0, c = 9007199254740991, m = "[object Arguments]", d = "[object Array]", l = "[object Boolean]", f = "[object Date]", g = "[object Error]", h = "[object Function]", u = "[object GeneratorFunction]", b = "[object Map]", p = "[object Number]", y = "[object Object]", v = "[object Promise]", E = "[object RegExp]", x = "[object Set]", C = "[object String]", T = "[object Symbol]", A = "[object WeakMap]", S = "[object ArrayBuffer]", I = "[object DataView]", P = "[object Float32Array]", H = "[object Float64Array]", W = "[object Int8Array]", Z = "[object Int16Array]", j = "[object Int32Array]", z = "[object Uint8Array]", Y = "[object Uint8ClampedArray]", de = "[object Uint16Array]", fe = "[object Uint32Array]", _e = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ue = /^\w*$/, ye = /^\./, he = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pe = /[\\^$.*+?()[\]{}|]/g, lt = /\\(\\)?/g, nt = /^\[object .+?Constructor\]$/, Ye = /^(?:0|[1-9]\d*)$/, ae = {};
    ae[P] = ae[H] = ae[W] = ae[Z] = ae[j] = ae[z] = ae[Y] = ae[de] = ae[fe] = !0, ae[m] = ae[d] = ae[S] = ae[l] = ae[I] = ae[f] = ae[g] = ae[h] = ae[b] = ae[p] = ae[y] = ae[E] = ae[x] = ae[C] = ae[A] = !1;
    var bt = typeof Dr == "object" && Dr && Dr.Object === Object && Dr, Nt = typeof self == "object" && self && self.Object === Object && self, Qe = bt || Nt || Function("return this")(), wt = e && !e.nodeType && e, st = wt && !0 && t && !t.nodeType && t, Lt = st && st.exports === wt, ir = Lt && bt.process, Sr = function() {
      try {
        return ir && ir.binding("util");
      } catch {
      }
    }(), en = Sr && Sr.isTypedArray;
    function ns(w, _) {
      var R = w ? w.length : 0;
      return !!R && M(w, _, 0) > -1;
    }
    function ss(w, _) {
      for (var R = -1, U = w ? w.length : 0; ++R < U; )
        if (_(w[R], R, w))
          return !0;
      return !1;
    }
    function Lr(w, _, R, U) {
      for (var J = w.length, V = R + -1; ++V < J; )
        if (_(w[V], V, w))
          return V;
      return -1;
    }
    function M(w, _, R) {
      if (_ !== _)
        return Lr(w, ne, R);
      for (var U = R - 1, J = w.length; ++U < J; )
        if (w[U] === _)
          return U;
      return -1;
    }
    function ne(w) {
      return w !== w;
    }
    function te(w) {
      return function(_) {
        return _ == null ? void 0 : _[w];
      };
    }
    function ve(w, _) {
      for (var R = -1, U = Array(w); ++R < w; )
        U[R] = _(R);
      return U;
    }
    function tt(w) {
      return function(_) {
        return w(_);
      };
    }
    function He(w, _) {
      return w.has(_);
    }
    function ge(w, _) {
      return w == null ? void 0 : w[_];
    }
    function mt(w) {
      var _ = !1;
      if (w != null && typeof w.toString != "function")
        try {
          _ = !!(w + "");
        } catch {
        }
      return _;
    }
    function fr(w) {
      var _ = -1, R = Array(w.size);
      return w.forEach(function(U, J) {
        R[++_] = [J, U];
      }), R;
    }
    function Je(w, _) {
      return function(R) {
        return w(_(R));
      };
    }
    function At(w) {
      var _ = -1, R = Array(w.size);
      return w.forEach(function(U) {
        R[++_] = U;
      }), R;
    }
    var hr = Array.prototype, Gt = Function.prototype, ct = Object.prototype, $e = Qe["__core-js_shared__"], An = function() {
      var w = /[^.]+$/.exec($e && $e.keys && $e.keys.IE_PROTO || "");
      return w ? "Symbol(src)_1." + w : "";
    }(), Ks = Gt.toString, $t = ct.hasOwnProperty, tn = ct.toString, Xi = RegExp(
      "^" + Ks.call($t).replace(Pe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), rn = Qe.Symbol, is = Qe.Uint8Array, Wt = ct.propertyIsEnumerable, Zs = hr.splice, Xs = Je(Object.keys, Object), En = Or(Qe, "DataView"), dr = Or(Qe, "Map"), Ys = Or(Qe, "Promise"), Et = Or(Qe, "Set"), ei = Or(Qe, "WeakMap"), _n = Or(Object, "create"), Ma = N(En), os = N(dr), ti = N(Ys), Ur = N(Et), Fr = N(ei), as = rn ? rn.prototype : void 0, ri = as ? as.valueOf : void 0, Yi = as ? as.toString : void 0;
    function jr(w) {
      var _ = -1, R = w ? w.length : 0;
      for (this.clear(); ++_ < R; ) {
        var U = w[_];
        this.set(U[0], U[1]);
      }
    }
    function nn() {
      this.__data__ = _n ? _n(null) : {};
    }
    function pr(w) {
      return this.has(w) && delete this.__data__[w];
    }
    function Da(w) {
      var _ = this.__data__;
      if (_n) {
        var R = _[w];
        return R === s ? void 0 : R;
      }
      return $t.call(_, w) ? _[w] : void 0;
    }
    function La(w) {
      var _ = this.__data__;
      return _n ? _[w] !== void 0 : $t.call(_, w);
    }
    function Ua(w, _) {
      var R = this.__data__;
      return R[w] = _n && _ === void 0 ? s : _, this;
    }
    jr.prototype.clear = nn, jr.prototype.delete = pr, jr.prototype.get = Da, jr.prototype.has = La, jr.prototype.set = Ua;
    function mr(w) {
      var _ = -1, R = w ? w.length : 0;
      for (this.clear(); ++_ < R; ) {
        var U = w[_];
        this.set(U[0], U[1]);
      }
    }
    function Fa() {
      this.__data__ = [];
    }
    function Vt(w) {
      var _ = this.__data__, R = fs(_, w);
      if (R < 0)
        return !1;
      var U = _.length - 1;
      return R == U ? _.pop() : Zs.call(_, R, 1), !0;
    }
    function ja(w) {
      var _ = this.__data__, R = fs(_, w);
      return R < 0 ? void 0 : _[R][1];
    }
    function ls(w) {
      return fs(this.__data__, w) > -1;
    }
    function ni(w, _) {
      var R = this.__data__, U = fs(R, w);
      return U < 0 ? R.push([w, _]) : R[U][1] = _, this;
    }
    mr.prototype.clear = Fa, mr.prototype.delete = Vt, mr.prototype.get = ja, mr.prototype.has = ls, mr.prototype.set = ni;
    function gr(w) {
      var _ = -1, R = w ? w.length : 0;
      for (this.clear(); ++_ < R; ) {
        var U = w[_];
        this.set(U[0], U[1]);
      }
    }
    function cs() {
      this.__data__ = {
        hash: new jr(),
        map: new (dr || mr)(),
        string: new jr()
      };
    }
    function xn(w) {
      return ms(this, w).delete(w);
    }
    function Ha(w) {
      return ms(this, w).get(w);
    }
    function Ga(w) {
      return ms(this, w).has(w);
    }
    function yr(w, _) {
      return ms(this, w).set(w, _), this;
    }
    gr.prototype.clear = cs, gr.prototype.delete = xn, gr.prototype.get = Ha, gr.prototype.has = Ga, gr.prototype.set = yr;
    function sn(w) {
      var _ = -1, R = w ? w.length : 0;
      for (this.__data__ = new gr(); ++_ < R; )
        this.add(w[_]);
    }
    function $a(w) {
      return this.__data__.set(w, s), this;
    }
    function Wa(w) {
      return this.__data__.has(w);
    }
    sn.prototype.add = sn.prototype.push = $a, sn.prototype.has = Wa;
    function br(w) {
      this.__data__ = new mr(w);
    }
    function Va() {
      this.__data__ = new mr();
    }
    function za(w) {
      return this.__data__.delete(w);
    }
    function us(w) {
      return this.__data__.get(w);
    }
    function Qa(w) {
      return this.__data__.has(w);
    }
    function qa(w, _) {
      var R = this.__data__;
      if (R instanceof mr) {
        var U = R.__data__;
        if (!dr || U.length < r - 1)
          return U.push([w, _]), this;
        R = this.__data__ = new gr(U);
      }
      return R.set(w, _), this;
    }
    br.prototype.clear = Va, br.prototype.delete = za, br.prototype.get = us, br.prototype.has = Qa, br.prototype.set = qa;
    function Ja(w, _) {
      var R = xe(w) || Ae(w) ? ve(w.length, String) : [], U = R.length, J = !!U;
      for (var V in w)
        $t.call(w, V) && !(J && (V == "length" || an(V, U))) && R.push(V);
      return R;
    }
    function fs(w, _) {
      for (var R = w.length; R--; )
        if (se(w[R][0], _))
          return R;
      return -1;
    }
    function on(w, _) {
      _ = In(_, w) ? [_] : no(_);
      for (var R = 0, U = _.length; w != null && R < U; )
        w = w[gs(_[R++])];
      return R && R == U ? w : void 0;
    }
    function si(w) {
      return tn.call(w);
    }
    function Ka(w, _) {
      return w != null && _ in Object(w);
    }
    function Sn(w, _, R, U, J) {
      return w === _ ? !0 : w == null || _ == null || !it(w) && !zt(_) ? w !== w && _ !== _ : eo(w, _, Sn, R, U, J);
    }
    function eo(w, _, R, U, J, V) {
      var X = xe(w), be = xe(_), pe = d, Ce = d;
      X || (pe = _t(w), pe = pe == m ? y : pe), be || (Ce = _t(_), Ce = Ce == m ? y : Ce);
      var Ie = pe == y && !mt(w), Ne = Ce == y && !mt(_), ke = pe == Ce;
      if (ke && !Ie)
        return V || (V = new br()), X || Cn(w) ? ds(w, _, R, U, J, V) : ps(w, _, pe, R, U, J, V);
      if (!(J & a)) {
        var Ke = Ie && $t.call(w, "__wrapped__"), Ze = Ne && $t.call(_, "__wrapped__");
        if (Ke || Ze) {
          var Rt = Ke ? w.value() : w, vt = Ze ? _.value() : _;
          return V || (V = new br()), R(Rt, vt, U, J, V);
        }
      }
      return ke ? (V || (V = new br()), oi(w, _, R, U, J, V)) : !1;
    }
    function Za(w, _, R, U) {
      var J = R.length, V = J;
      if (w == null)
        return !V;
      for (w = Object(w); J--; ) {
        var X = R[J];
        if (X[2] ? X[1] !== w[X[0]] : !(X[0] in w))
          return !1;
      }
      for (; ++J < V; ) {
        X = R[J];
        var be = X[0], pe = w[be], Ce = X[1];
        if (X[2]) {
          if (pe === void 0 && !(be in w))
            return !1;
        } else {
          var Ie = new br(), Ne;
          if (!(Ne === void 0 ? Sn(Ce, pe, U, i | a, Ie) : Ne))
            return !1;
        }
      }
      return !0;
    }
    function Xa(w) {
      if (!it(w) || sl(w))
        return !1;
      var _ = Ge(w) || mt(w) ? Xi : nt;
      return _.test(N(w));
    }
    function Ya(w) {
      return zt(w) && St(w.length) && !!ae[tn.call(w)];
    }
    function to(w) {
      return typeof w == "function" ? w : w == null ? ao : typeof w == "object" ? xe(w) ? rl(w[0], w[1]) : tl(w) : Ou(w);
    }
    function el(w) {
      if (!so(w))
        return Xs(w);
      var _ = [];
      for (var R in Object(w))
        $t.call(w, R) && R != "constructor" && _.push(R);
      return _;
    }
    function tl(w) {
      var _ = On(w);
      return _.length == 1 && _[0][2] ? ai(_[0][0], _[0][1]) : function(R) {
        return R === w || Za(R, w, _);
      };
    }
    function rl(w, _) {
      return In(w) && io(_) ? ai(gs(w), _) : function(R) {
        var U = _u(R, w);
        return U === void 0 && U === _ ? xu(R, w) : Sn(_, U, void 0, i | a);
      };
    }
    function ii(w) {
      return function(_) {
        return on(_, w);
      };
    }
    function nl(w) {
      if (typeof w == "string")
        return w;
      if (Ir(w))
        return Yi ? Yi.call(w) : "";
      var _ = w + "";
      return _ == "0" && 1 / w == -o ? "-0" : _;
    }
    function ro(w, _, R) {
      var U = -1, J = ns, V = w.length, X = !0, be = [], pe = be;
      if (V >= r) {
        var Ce = _ ? null : hs(w);
        if (Ce)
          return At(Ce);
        X = !1, J = He, pe = new sn();
      } else
        pe = _ ? [] : be;
      e:
        for (; ++U < V; ) {
          var Ie = w[U], Ne = _ ? _(Ie) : Ie;
          if (Ie = Ie !== 0 ? Ie : 0, X && Ne === Ne) {
            for (var ke = pe.length; ke--; )
              if (pe[ke] === Ne)
                continue e;
            _ && pe.push(Ne), be.push(Ie);
          } else J(pe, Ne, R) || (pe !== be && pe.push(Ne), be.push(Ie));
        }
      return be;
    }
    function no(w) {
      return xe(w) ? w : li(w);
    }
    var hs = Et && 1 / At(new Et([, -0]))[1] == o ? function(w) {
      return new Et(w);
    } : Su;
    function ds(w, _, R, U, J, V) {
      var X = J & a, be = w.length, pe = _.length;
      if (be != pe && !(X && pe > be))
        return !1;
      var Ce = V.get(w);
      if (Ce && V.get(_))
        return Ce == _;
      var Ie = -1, Ne = !0, ke = J & i ? new sn() : void 0;
      for (V.set(w, _), V.set(_, w); ++Ie < be; ) {
        var Ke = w[Ie], Ze = _[Ie];
        if (U)
          var Rt = X ? U(Ze, Ke, Ie, _, w, V) : U(Ke, Ze, Ie, w, _, V);
        if (Rt !== void 0) {
          if (Rt)
            continue;
          Ne = !1;
          break;
        }
        if (ke) {
          if (!ss(_, function(vt, Qt) {
            if (!ke.has(Qt) && (Ke === vt || R(Ke, vt, U, J, V)))
              return ke.add(Qt);
          })) {
            Ne = !1;
            break;
          }
        } else if (!(Ke === Ze || R(Ke, Ze, U, J, V))) {
          Ne = !1;
          break;
        }
      }
      return V.delete(w), V.delete(_), Ne;
    }
    function ps(w, _, R, U, J, V, X) {
      switch (R) {
        case I:
          if (w.byteLength != _.byteLength || w.byteOffset != _.byteOffset)
            return !1;
          w = w.buffer, _ = _.buffer;
        case S:
          return !(w.byteLength != _.byteLength || !U(new is(w), new is(_)));
        case l:
        case f:
        case p:
          return se(+w, +_);
        case g:
          return w.name == _.name && w.message == _.message;
        case E:
        case C:
          return w == _ + "";
        case b:
          var be = fr;
        case x:
          var pe = V & a;
          if (be || (be = At), w.size != _.size && !pe)
            return !1;
          var Ce = X.get(w);
          if (Ce)
            return Ce == _;
          V |= i, X.set(w, _);
          var Ie = ds(be(w), be(_), U, J, V, X);
          return X.delete(w), Ie;
        case T:
          if (ri)
            return ri.call(w) == ri.call(_);
      }
      return !1;
    }
    function oi(w, _, R, U, J, V) {
      var X = J & a, be = il(w), pe = be.length, Ce = il(_), Ie = Ce.length;
      if (pe != Ie && !X)
        return !1;
      for (var Ne = pe; Ne--; ) {
        var ke = be[Ne];
        if (!(X ? ke in _ : $t.call(_, ke)))
          return !1;
      }
      var Ke = V.get(w);
      if (Ke && V.get(_))
        return Ke == _;
      var Ze = !0;
      V.set(w, _), V.set(_, w);
      for (var Rt = X; ++Ne < pe; ) {
        ke = be[Ne];
        var vt = w[ke], Qt = _[ke];
        if (U)
          var ol = X ? U(Qt, vt, ke, _, w, V) : U(vt, Qt, ke, w, _, V);
        if (!(ol === void 0 ? vt === Qt || R(vt, Qt, U, J, V) : ol)) {
          Ze = !1;
          break;
        }
        Rt || (Rt = ke == "constructor");
      }
      if (Ze && !Rt) {
        var Nn = w.constructor, Rn = _.constructor;
        Nn != Rn && "constructor" in w && "constructor" in _ && !(typeof Nn == "function" && Nn instanceof Nn && typeof Rn == "function" && Rn instanceof Rn) && (Ze = !1);
      }
      return V.delete(w), V.delete(_), Ze;
    }
    function ms(w, _) {
      var R = w.__data__;
      return Tn(_) ? R[typeof _ == "string" ? "string" : "hash"] : R.map;
    }
    function On(w) {
      for (var _ = il(w), R = _.length; R--; ) {
        var U = _[R], J = w[U];
        _[R] = [U, J, io(J)];
      }
      return _;
    }
    function Or(w, _) {
      var R = ge(w, _);
      return Xa(R) ? R : void 0;
    }
    var _t = si;
    (En && _t(new En(new ArrayBuffer(1))) != I || dr && _t(new dr()) != b || Ys && _t(Ys.resolve()) != v || Et && _t(new Et()) != x || ei && _t(new ei()) != A) && (_t = function(w) {
      var _ = tn.call(w), R = _ == y ? w.constructor : void 0, U = R ? N(R) : void 0;
      if (U)
        switch (U) {
          case Ma:
            return I;
          case os:
            return b;
          case ti:
            return v;
          case Ur:
            return x;
          case Fr:
            return A;
        }
      return _;
    });
    function xt(w, _, R) {
      _ = In(_, w) ? [_] : no(_);
      for (var U, J = -1, X = _.length; ++J < X; ) {
        var V = gs(_[J]);
        if (!(U = w != null && R(w, V)))
          break;
        w = w[V];
      }
      if (U)
        return U;
      var X = w ? w.length : 0;
      return !!X && St(X) && an(V, X) && (xe(w) || Ae(w));
    }
    function an(w, _) {
      return _ = _ ?? c, !!_ && (typeof w == "number" || Ye.test(w)) && w > -1 && w % 1 == 0 && w < _;
    }
    function In(w, _) {
      if (xe(w))
        return !1;
      var R = typeof w;
      return R == "number" || R == "symbol" || R == "boolean" || w == null || Ir(w) ? !0 : ue.test(w) || !_e.test(w) || _ != null && w in Object(_);
    }
    function Tn(w) {
      var _ = typeof w;
      return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? w !== "__proto__" : w === null;
    }
    function sl(w) {
      return !!An && An in w;
    }
    function so(w) {
      var _ = w && w.constructor, R = typeof _ == "function" && _.prototype || ct;
      return w === R;
    }
    function io(w) {
      return w === w && !it(w);
    }
    function ai(w, _) {
      return function(R) {
        return R == null ? !1 : R[w] === _ && (_ !== void 0 || w in Object(R));
      };
    }
    var li = G(function(w) {
      w = oo(w);
      var _ = [];
      return ye.test(w) && _.push(""), w.replace(he, function(R, U, J, V) {
        _.push(J ? V.replace(lt, "$1") : U || R);
      }), _;
    });
    function gs(w) {
      if (typeof w == "string" || Ir(w))
        return w;
      var _ = w + "";
      return _ == "0" && 1 / w == -o ? "-0" : _;
    }
    function N(w) {
      if (w != null) {
        try {
          return Ks.call(w);
        } catch {
        }
        try {
          return w + "";
        } catch {
        }
      }
      return "";
    }
    function D(w, _) {
      return w && w.length ? ro(w, to(_)) : [];
    }
    function G(w, _) {
      if (typeof w != "function" || _ && typeof _ != "function")
        throw new TypeError(n);
      var R = function() {
        var U = arguments, J = _ ? _.apply(this, U) : U[0], V = R.cache;
        if (V.has(J))
          return V.get(J);
        var X = w.apply(this, U);
        return R.cache = V.set(J, X), X;
      };
      return R.cache = new (G.Cache || gr)(), R;
    }
    G.Cache = gr;
    function se(w, _) {
      return w === _ || w !== w && _ !== _;
    }
    function Ae(w) {
      return Oe(w) && $t.call(w, "callee") && (!Wt.call(w, "callee") || tn.call(w) == m);
    }
    var xe = Array.isArray;
    function Te(w) {
      return w != null && St(w.length) && !Ge(w);
    }
    function Oe(w) {
      return zt(w) && Te(w);
    }
    function Ge(w) {
      var _ = it(w) ? tn.call(w) : "";
      return _ == h || _ == u;
    }
    function St(w) {
      return typeof w == "number" && w > -1 && w % 1 == 0 && w <= c;
    }
    function it(w) {
      var _ = typeof w;
      return !!w && (_ == "object" || _ == "function");
    }
    function zt(w) {
      return !!w && typeof w == "object";
    }
    function Ir(w) {
      return typeof w == "symbol" || zt(w) && tn.call(w) == T;
    }
    var Cn = en ? tt(en) : Ya;
    function oo(w) {
      return w == null ? "" : nl(w);
    }
    function _u(w, _, R) {
      var U = w == null ? void 0 : on(w, _);
      return U === void 0 ? R : U;
    }
    function xu(w, _) {
      return w != null && xt(w, _, Ka);
    }
    function il(w) {
      return Te(w) ? Ja(w) : el(w);
    }
    function ao(w) {
      return w;
    }
    function Su() {
    }
    function Ou(w) {
      return In(w) ? te(gs(w)) : ii(w);
    }
    t.exports = D;
  }(Al, Al.exports)), Al.exports;
}
var Gx = Hx();
const $x = /* @__PURE__ */ ch(Gx);
var ee;
(function(t) {
  t.AlphaWallet = "isAlphaWallet", t.ApexWallet = "isApexWallet", t.AToken = "isAToken", t.BifrostWallet = "isBifrost", t.Binance = "bbcSignTx", t.Bitpie = "isBitpie", t.BlockWallet = "isBlockWallet", t.Coinbase = "isToshi", t.CoinbaseExtension = "isCoinbaseWallet", t.Detected = "request", t.Dcent = "isDcentWallet", t.Exodus = "isExodus", t.Frontier = "isFrontier", t.Frame = "isFrame", t.HuobiWallet = "isHbWallet", t.HyperPay = "isHyperPay", t.ImToken = "isImToken", t.InfinityWallet = "isInfinityWallet", t.Liquality = "isLiquality", t.MeetOne = "wallet", t.MetaMask = "isMetaMask", t.MyKey = "isMYKEY", t.OwnBit = "isOwnbit", t.Status = "isStatus", t.Trust = "isTrust", t.TokenPocket = "isTokenPocket", t.TP = "isTp", t.WalletIo = "isWalletIO", t.XDEFI = "isXDEFI", t.OneInch = "isOneInchIOSWallet", t.Tokenary = "isTokenary", t.Tally = "isTally", t.BraveWallet = "isBraveWallet", t.Rabby = "isRabby", t.MathWallet = "isMathWallet", t.Bitget = "isBitKeep", t.Sequence = "isSequence", t.Core = "isAvalanche", t.Opera = "isOpera", t.Bitski = "isBitski", t.Enkrypt = "isEnkrypt", t.Phantom = "isPhantom", t.OKXWallet = "isOkxWallet", t.Zeal = "isZeal", t.Zerion = "isZerion", t.Rainbow = "isRainbow", t.SafePal = "isSafePal", t.DeFiWallet = "isDeficonnectProvider", t.Safeheron = "isSafeheron", t.Talisman = "isTalisman", t.OneKey = "isOneKey", t.Fordefi = "isFordefi", t.Coin98Wallet = "isCoin98", t.SubWallet = "isSubWallet", t.Kayros = "isKayros", t.FoxWallet = "isFoxWallet", t.Lif3Wallet = "isLif3Wallet", t.ZodiacPilot = "isZodiacPilot", t.StableWallet = "isStableWallet", t.Echooo = "isEchooo", t.Keplr = "keplr";
})(ee || (ee = {}));
var Ct;
(function(t) {
  t.Binance = "https://www.bnbchain.org/ru/blog/binance-extension-wallet/", t.Bitget = "https://web3.bitget.com/en/wallet-download", t.Coinbase = "https://www.coinbase.com/wallet/downloads", t.MetaMask = "https://metamask.io/download/", t.OKXWallet = "https://okx.com/download", t.Phantom = "https://phantom.app/ul/v1/connect", t.Talisman = "https://www.talisman.xyz/", t.Trust = "https://link.trustwallet.com", t.OneKey = "https://onekey.so/download/", t.RoninWallet = "https://wallet.skymavis.com/", t.Coin98Wallet = "https://coin98.com/wallet/", t.SubWallet = "https://www.subwallet.app/", t.Kayros = "https://www.kayros.games/wallet/", t.XDEFI = "https://xdefi.io/", t.FoxWallet = "https://foxwallet.com/download", t.Lif3Wallet = "https://lif3.com", t.Rabby = "https://rabby.io", t.ZodiacPilot = "https://pilot.gnosisguild.org/", t.Echooo = "https://www.echooo.xyz", t.Keplr = "https://www.keplr.app/download";
})(Ct || (Ct = {}));
var ce;
(function(t) {
  t.AlphaWallet = "AlphaWallet", t.ApexWallet = "Apex Wallet", t.AToken = "AToken", t.BifrostWallet = "Bifrost Wallet", t.Binance = "Binance Smart Wallet", t.Bitpie = "Bitpie", t.Bitski = "Bitski", t.BlockWallet = "BlockWallet", t.Brave = "Brave Wallet", t.Coinbase = "Coinbase Wallet", t.Dcent = "D'CENT", t.Detected = "Detected Wallet", t.Exodus = "Exodus", t.Frame = "Frame", t.Frontier = "Frontier", t.HuobiWallet = "Huobi Wallet", t.HyperPay = "HyperPay", t.ImToken = "imToken", t.InfinityWallet = "Infinity Wallet", t.Liquality = "Liquality", t.MeetOne = "MeetOne", t.MetaMask = "MetaMask", t.MyKey = "MyKey", t.Opera = "Opera Wallet", t.OwnBit = "OwnBit", t.Status = "Status Wallet", t.Trust = "Trust Wallet", t.TokenPocket = "TokenPocket", t.TP = "TP Wallet", t.WalletIo = "Wallet.io", t.XDEFI = "XDEFI Wallet", t.OneInch = "1inch Wallet", t.Tokenary = "Tokenary Wallet", t.Tally = "Taho", t.Rabby = "Rabby Wallet", t.MathWallet = "MathWallet", t.Bitget = "Bitget Wallet", t.Sequence = "Sequence", t.Core = "Core", t.Enkrypt = "Enkrypt", t.Zeal = "Zeal", t.Phantom = "Phantom", t.OKXWallet = "OKX Wallet", t.Zerion = "Zerion", t.Rainbow = "Rainbow", t.SafePal = "SafePal", t.DeFiWallet = "DeFi Wallet", t.Safeheron = "Safeheron", t.Talisman = "Talisman", t.OneKey = "OneKey", t.Fordefi = "Fordefi", t.RoninWallet = "Ronin Wallet", t.Coin98Wallet = "Coin98 Wallet", t.SubWallet = "SubWallet", t.Kayros = "Kayros", t.FoxWallet = "FoxWallet", t.Lif3Wallet = "Lif3 Wallet", t.ZodiacPilot = "Zodiac Pilot", t.StableWallet = "StableWallet", t.Echooo = "Echooo", t.Keplr = "Keplr";
})(ce || (ce = {}));
var re;
(function(t) {
  t.Ethereum = "ethereum", t.Binance = "BinanceChain", t.Tally = "tally", t.Web3 = "web3", t.Arbitrum = "arbitrum", t.XFI = "xfi", t.Bitget = "bitkeep", t.Avalanche = "avalanche", t.Bitski = "Bitski", t.Enkrypt = "enkrypt", t.Zeal = "zeal", t.Phantom = "phantom", t.OKXWallet = "okxwallet", t.Trust = "trustwallet", t.Frontier = "frontier", t.DeFiConnectProvider = "deficonnectProvider", t.Safeheron = "safeheron", t.Talisman = "talismanEth", t.OneKey = "$onekey", t.RoninWallet = "ronin", t.Coin98Wallet = "coin98", t.SubWallet = "SubWallet", t.Kayros = "kayros", t.FoxWallet = "foxwallet", t.Echooo = "echooo";
})(re || (re = {}));
const yt = null;
function sr(t, e) {
  return async () => ({
    provider: window.ethereum.providers && Array.isArray(window.ethereum.providers) ? Wx(t, e) : window.ethereum
  });
}
function Wx(t, e) {
  return window.ethereum.providers.find((r) => e ? !!r[t] && !yy(t, r) : !!r[t]);
}
function yy(t, e) {
  return Object.values(ee).filter((n) => n !== t && n !== ee.Detected).some((n) => !!e[n]);
}
const Vx = {
  label: ce.MetaMask,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.MetaMask] && !yy(ee.MetaMask, t),
  getIcon: async () => (await import("./metamask-BN7yiDV1.js")).default,
  getInterface: sr(ee.MetaMask, !0),
  platforms: ["all"],
  externalUrl: Ct.MetaMask
}, zx = {
  label: ce.InfinityWallet,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.InfinityWallet],
  getIcon: async () => (await import("./infinitywallet-C8J4FUYw.js")).default,
  getInterface: sr(ee.InfinityWallet),
  platforms: ["desktop"]
}, Qx = {
  label: ce.Exodus,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Exodus],
  getIcon: async () => (await import("./exodus-BxzkDWWP.js")).default,
  getInterface: sr(ee.Exodus),
  platforms: ["all"]
}, qx = {
  label: ce.Frontier,
  injectedNamespace: re.Frontier,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t.ethereum && !!t.ethereum[ee.Frontier],
  getIcon: async () => (await import("./frontier-DqKNSj2z.js")).default,
  getInterface: async () => ({
    provider: Fe(window.frontier.ethereum)
  }),
  platforms: ["all"]
}, Jx = {
  label: ce.Brave,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.BraveWallet],
  getIcon: async () => (await import("./brave-DnRzMQYW.js")).default,
  getInterface: sr(ee.BraveWallet),
  platforms: ["all"]
}, Kx = {
  label: ce.Binance,
  injectedNamespace: re.Binance,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Binance],
  getIcon: async () => (await import("./binance-DvPgAzCw.js")).default,
  getInterface: async () => {
    let t = {
      ...window.BinanceChain
    };
    window.BinanceChain = t;
    const e = window.BinanceChain.on.bind(window.BinanceChain);
    window.BinanceChain.on = (n, s) => {
      n === "chainChanged" ? e(n, (i) => {
        s(`0x${parseInt(i).toString(16)}`);
      }) : e(n, s);
    };
    const r = Fe(window.BinanceChain, {
      eth_chainId: ({ baseRequest: n }) => n({ method: "eth_chainId" }).then((s) => `0x${parseInt(s).toString(16)}`),
      // Unsupported method -- will throw error
      eth_selectAccounts: yt,
      wallet_switchEthereumChain: yt
    });
    return r.removeListener = (n, s) => {
    }, {
      provider: r
    };
  },
  platforms: ["desktop"],
  externalUrl: Ct.Binance
}, Zx = {
  label: ce.Coinbase,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Coinbase] || !!t && !!t[ee.CoinbaseExtension],
  getIcon: async () => (await import("./coinbase-CaGNx5if.js")).default,
  getInterface: async () => {
    const { provider: t } = await sr(ee.CoinbaseExtension)(), e = t.on.bind(t);
    return t.on = (r, n) => {
      r === "chainChanged" ? e(r, (s) => {
        n(`0x${parseInt(s).toString(16)}`);
      }) : e(r, n);
    }, { provider: t };
  },
  platforms: ["all"],
  externalUrl: Ct.Coinbase
}, Xx = {
  label: ce.Detected,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Detected],
  getIcon: async () => (await import("./detected-CX_JZaUk.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["all"]
}, Yx = {
  label: ce.Trust,
  injectedNamespace: re.Trust,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Trust],
  getIcon: async () => (await import("./trust-SgHubMq7.js")).default,
  getInterface: async () => {
    const t = window.hasOwnProperty(re.Ethereum);
    let e;
    return t && window[re.Ethereum].isTrust ? e = window[re.Ethereum] : e = window[re.Trust], {
      provider: e
    };
  },
  platforms: ["all"],
  externalUrl: Ct.Trust
}, e1 = {
  label: ce.Opera,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Opera],
  getIcon: async () => (await import("./opera-DnKg-TJU.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum, {
      eth_requestAccounts: async ({ baseRequest: t }) => t({ method: "eth_accounts" }),
      eth_selectAccounts: yt
    })
  }),
  platforms: ["all"]
}, t1 = {
  label: ce.Status,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Status],
  getIcon: async () => (await import("./status-FrAvQjfn.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["mobile"]
}, r1 = {
  label: ce.AlphaWallet,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.AlphaWallet],
  getIcon: async () => (await import("./alphawallet-B7eovdf-.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum, {
      wallet_switchEthereumChain: yt,
      eth_selectAccounts: yt
    })
  }),
  platforms: ["mobile"]
}, n1 = {
  label: ce.ApexWallet,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.ApexWallet],
  getIcon: async () => (await import("./apexwallet-ysP20G9D.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["desktop", "Chrome", "Chromium", "Microsoft Edge"]
}, s1 = {
  label: ce.AToken,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.AToken],
  getIcon: async () => (await import("./atoken-BBnNTzcz.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["mobile"]
}, i1 = {
  label: ce.BifrostWallet,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.BifrostWallet],
  getIcon: async () => (await import("./bifrostwallet-CNNBO92h.js")).default,
  getInterface: sr(ee.BifrostWallet),
  platforms: ["all"]
}, o1 = {
  label: ce.Bitpie,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: () => !!window.Bitpie,
  getIcon: async () => (await import("./bitpie-C_uxmEzw.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum, {
      wallet_switchEthereumChain: yt,
      eth_selectAccounts: yt
    })
  }),
  platforms: ["mobile"]
}, a1 = {
  label: ce.BlockWallet,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.BlockWallet],
  getIcon: async () => (await import("./blockwallet-BL69cqkA.js")).default,
  getInterface: sr(ee.BlockWallet),
  platforms: ["desktop"]
}, l1 = {
  label: ce.Frame,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Frame],
  getIcon: async () => (await import("./frame-CDfNmjUy.js")).default,
  getInterface: async () => {
    const t = window.ethereum;
    if (!t || !t.connected)
      throw new Error("Frame App must be open with a hot wallet connected. If not installed first download the Frame App.");
    return { provider: t };
  },
  platforms: ["desktop"]
}, c1 = {
  label: ce.HuobiWallet,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.HuobiWallet],
  getIcon: async () => (await import("./huobiwallet-CxSwqa5L.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum, {
      wallet_switchEthereumChain: yt,
      eth_selectAccounts: yt
    })
  }),
  platforms: ["mobile"]
}, u1 = {
  label: ce.HyperPay,
  injectedNamespace: re.Ethereum,
  // Note: The property `hiWallet` is as of now the only known way of identifying hyperpay
  // wallet as it is a direct clone of metamask. `checkProviderIdentity` implementation is subject to
  // future changes
  checkProviderIdentity: () => !!window.hiWallet,
  getIcon: async () => (await import("./hyperpay-nmHE3WqM.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum, {
      wallet_switchEthereumChain: yt,
      eth_selectAccounts: yt
    })
  }),
  platforms: ["mobile"]
}, f1 = {
  label: ce.ImToken,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.ImToken],
  getIcon: async () => (await import("./imtoken-yENtOTS3.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum, {
      eth_selectAccounts: yt
    })
  }),
  platforms: ["mobile"]
}, h1 = {
  label: ce.Liquality,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Liquality],
  getIcon: async () => (await import("./liquality-nbCtErVq.js")).default,
  getInterface: async () => {
    const t = Fe(window.ethereum, {
      wallet_switchEthereumChain: yt,
      eth_selectAccounts: yt
    });
    return t.removeListener = (e, r) => {
    }, { provider: t };
  },
  platforms: ["desktop"]
}, d1 = {
  label: ce.MeetOne,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && t[ee.MeetOne] === "MEETONE",
  getIcon: async () => (await import("./meetone-kKmvI8md.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["mobile"]
}, p1 = {
  label: ce.MyKey,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.MyKey],
  getIcon: async () => (await import("./mykey-CQZ6UcLH.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["mobile"]
}, m1 = {
  label: ce.OwnBit,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.OwnBit],
  getIcon: async () => (await import("./ownbit-BshJUVuW.js")).default,
  getInterface: async () => {
    const t = Fe(window.ethereum, {
      eth_chainId: ({ baseRequest: e }) => e({ method: "eth_chainId" }).then((r) => `0x${parseInt(r).toString(16)}`),
      wallet_switchEthereumChain: yt,
      eth_selectAccounts: yt
    });
    return t.removeListener = (e, r) => {
    }, t.on = (e, r) => {
    }, { provider: t };
  },
  platforms: ["mobile"]
}, g1 = {
  label: ce.TokenPocket,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.TokenPocket] && !t[ee.TP],
  getIcon: async () => (await import("./tokenpocket-9ZRPmAFA.js")).default,
  getInterface: sr(ee.TokenPocket),
  platforms: ["all"]
}, y1 = {
  label: ce.TP,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.TP],
  getIcon: async () => (await import("./tp-V2em5bdl.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum, {
      wallet_switchEthereumChain: yt,
      eth_selectAccounts: yt
    })
  }),
  platforms: ["mobile"]
}, b1 = {
  label: ce.XDEFI,
  injectedNamespace: re.XFI,
  checkProviderIdentity: ({ provider: t }) => t && t.ethereum && t.ethereum[ee.XDEFI],
  getIcon: async () => (await import("./xdefi-COVIyGz4.js")).default,
  getInterface: async () => ({
    provider: window.xfi && window.xfi.ethereum
  }),
  platforms: ["all"],
  externalUrl: Ct.XDEFI
}, w1 = {
  label: ce.OneInch,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.OneInch],
  getIcon: async () => (await import("./oneInch-CciyZ4Pz.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum)
  }),
  platforms: ["mobile"]
}, v1 = {
  label: ce.Tokenary,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Tokenary],
  getIcon: async () => (await import("./tokenary-C7jjcbQa.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum)
  }),
  platforms: ["all"]
}, A1 = {
  label: ce.Tally,
  injectedNamespace: re.Tally,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Tally],
  getIcon: async () => (await import("./tallywallet-B4OS9nIr.js")).default,
  getInterface: async () => ({
    provider: Fe(window.tally)
  }),
  platforms: ["desktop"]
}, E1 = {
  label: ce.Zeal,
  injectedNamespace: re.Zeal,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Zeal],
  getIcon: async () => (await import("./zeal-DxHbDqm0.js")).default,
  getInterface: async () => ({
    provider: Fe(window.zeal)
  }),
  platforms: ["desktop"]
}, _1 = {
  label: ce.Rabby,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Rabby],
  getIcon: async () => (await import("./rabby-D4thTcd6.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum)
  }),
  platforms: ["desktop", "mobile"]
}, x1 = {
  label: ce.MathWallet,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.MathWallet],
  getIcon: async () => (await import("./mathwallet-CWkivCXo.js")).default,
  getInterface: sr(ee.MathWallet),
  platforms: ["all"]
}, S1 = {
  label: ce.Bitget,
  injectedNamespace: re.Bitget,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t.ethereum && !!t.ethereum[ee.Bitget],
  getIcon: async () => (await import("./bitget-DZOUrwgy.js")).default,
  getInterface: async () => ({
    provider: window.bitkeep && window.bitkeep.ethereum
  }),
  platforms: ["all"],
  externalUrl: Ct.Bitget
}, O1 = {
  label: ce.Sequence,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Sequence],
  getIcon: async () => (await import("./sequence-BS2IbtDg.js")).default,
  getInterface: async () => ({
    provider: window.ethereum
  }),
  platforms: ["all"]
}, I1 = {
  label: ce.Core,
  injectedNamespace: re.Avalanche,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Core],
  getIcon: async () => (await import("./core-9rK8tWud.js")).default,
  getInterface: sr(ee.Core),
  // Core wallet is only tested in chrome or chromium browser
  platforms: ["desktop", "Chrome", "Chromium", "Microsoft Edge"]
}, T1 = {
  label: ce.Bitski,
  injectedNamespace: re.Bitski,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t.getProvider && !!t.getProvider().isBitski,
  getIcon: async () => (await import("./bitski-DpzkHNkv.js")).default,
  getInterface: async () => ({
    provider: window.Bitski && window.Bitski.getProvider && window.Bitski.getProvider()
  }),
  platforms: ["all"]
}, C1 = {
  label: ce.Zerion,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Zerion],
  getIcon: async () => (await import("./zerion-BfW0UElc.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum)
  }),
  platforms: ["all"]
}, N1 = {
  label: ce.Enkrypt,
  injectedNamespace: re.Enkrypt,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t.providers && !!t.providers.ethereum,
  getIcon: async () => (await import("./enkrypt-BibtwvK7.js")).default,
  getInterface: async () => {
    const t = window.enkrypt.providers.ethereum.on.bind(window.enkrypt.providers.ethereum);
    window.enkrypt.providers.ethereum.on = (r, n) => {
      r === "chainChanged" ? t(r, (s) => {
        n(`0x${parseInt(s).toString(16)}`);
      }) : t(r, n);
    };
    const e = Fe(window.enkrypt.providers.ethereum, {
      eth_chainId: ({ baseRequest: r }) => r({ method: "eth_chainId" }).then((n) => `0x${parseInt(n).toString(16)}`)
    });
    return e.removeListener = (r, n) => {
    }, {
      provider: e
    };
  },
  platforms: ["all"]
}, R1 = {
  label: ce.Phantom,
  injectedNamespace: re.Phantom,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t.ethereum && !!t.ethereum[ee.Phantom],
  getIcon: async () => (await import("./phantom-CJ8dIcov.js")).default,
  getInterface: async () => ({
    provider: Fe(window.phantom.ethereum)
  }),
  platforms: ["all"],
  externalUrl: Ct.Phantom
}, P1 = {
  label: ce.SafePal,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.SafePal],
  getIcon: async () => (await import("./safepal-DVIKy94N.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum)
  }),
  platforms: ["all"]
}, k1 = {
  label: ce.Rainbow,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Rainbow],
  getIcon: async () => (await import("./rainbow-mXld6yWV.js")).default,
  getInterface: sr(ee.Rainbow),
  platforms: ["all"]
}, B1 = {
  label: ce.OKXWallet,
  injectedNamespace: re.OKXWallet,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.OKXWallet],
  getIcon: async () => (await import("./okxwallet-CJLVogh2.js")).default,
  getInterface: async () => ({
    provider: Fe(window.okxwallet)
  }),
  platforms: ["all"],
  externalUrl: Ct.OKXWallet
}, M1 = {
  label: ce.DeFiWallet,
  injectedNamespace: re.DeFiConnectProvider,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.DeFiWallet],
  getIcon: async () => (await import("./defiwallet-0AsgJBSy.js")).default,
  getInterface: async () => ({
    provider: Fe(window.deficonnectProvider)
  }),
  platforms: ["all"]
}, D1 = {
  label: ce.Safeheron,
  injectedNamespace: re.Safeheron,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Safeheron],
  getIcon: async () => (await import("./safeheron-Eg1Jb29V.js")).default,
  getInterface: async () => ({
    provider: Fe(window.safeheron)
  }),
  platforms: ["desktop", "Chrome", "Chromium", "Microsoft Edge"]
}, L1 = {
  label: ce.Talisman,
  injectedNamespace: re.Talisman,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Talisman],
  getIcon: async () => (await import("./talisman-Bp8zUXqB.js")).default,
  getInterface: async () => ({
    provider: Fe(window.talismanEth)
  }),
  platforms: ["desktop"],
  externalUrl: Ct.Talisman
}, U1 = {
  label: ce.RoninWallet,
  injectedNamespace: re.RoninWallet,
  checkProviderIdentity: ({ provider: t }) => !!t,
  getIcon: async () => (await import("./roninwallet-ZyYrd-D1.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ronin.provider)
  }),
  platforms: ["all"],
  externalUrl: Ct.RoninWallet
}, F1 = {
  label: ce.OneKey,
  injectedNamespace: re.OneKey,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t.ethereum && !!t.ethereum[ee.OneKey],
  getIcon: async () => (await import("./onekey-Dal8kYjU.js")).default,
  getInterface: async () => ({
    provider: Fe(window.$onekey.ethereum)
  }),
  platforms: ["all"],
  externalUrl: Ct.OneKey
}, j1 = {
  label: ce.Fordefi,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Fordefi],
  getIcon: async () => (await import("./fordefi-CvKyVwhI.js")).default,
  getInterface: sr(ee.Fordefi, !0),
  platforms: ["desktop"]
}, H1 = {
  label: ce.Coin98Wallet,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Coin98Wallet],
  getIcon: async () => (await import("./coin98wallet-CkFdOvXt.js")).default,
  getInterface: async () => {
    const t = window.hasOwnProperty(re.Ethereum);
    let e;
    return t && window[re.Ethereum].isCoin98 ? e = window[re.Ethereum] : e = window[re.Coin98Wallet].provider, {
      provider: e
    };
  },
  platforms: ["all"],
  externalUrl: Ct.Coin98Wallet
}, G1 = {
  label: ce.SubWallet,
  injectedNamespace: re.SubWallet,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.SubWallet],
  getIcon: async () => (await import("./subwallet-DMvFqKyY.js")).default,
  getInterface: async () => ({
    provider: Fe(window.SubWallet)
  }),
  platforms: ["all"],
  externalUrl: Ct.SubWallet
}, $1 = {
  label: ce.Kayros,
  injectedNamespace: re.Kayros,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Kayros],
  getIcon: async () => (await import("./kayros-AIrUK1za.js")).default,
  getInterface: async () => ({
    provider: Fe(window.kayros)
  }),
  platforms: ["desktop"]
}, W1 = {
  label: ce.FoxWallet,
  injectedNamespace: re.FoxWallet,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.FoxWallet],
  getIcon: async () => (await import("./foxwallet-D7c_LDTf.js")).default,
  getInterface: async () => ({
    provider: Fe(window.foxwallet)
  }),
  platforms: ["mobile"]
}, V1 = {
  label: ce.Lif3Wallet,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Lif3Wallet],
  getIcon: async () => (await import("./lif3wallet-C5D6r8pg.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum, {
      wallet_switchEthereumChain: yt,
      eth_selectAccounts: yt
    })
  }),
  platforms: ["mobile"]
}, z1 = {
  label: ce.ZodiacPilot,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.ZodiacPilot],
  getIcon: async () => (await import("./zodiacpilot-CrId6F4w.js")).default,
  getInterface: async () => ({
    provider: Fe(window.ethereum)
  }),
  platforms: ["desktop"],
  externalUrl: Ct.ZodiacPilot
}, Q1 = {
  label: ce.StableWallet,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.StableWallet],
  getIcon: async () => (await import("./stablewallet-jyB079Wb.js")).default,
  getInterface: sr(ee.StableWallet),
  platforms: ["mobile"]
}, q1 = {
  label: ce.Echooo,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Echooo],
  getIcon: async () => (await import("./echooo-CmaetT_Z.js")).default,
  getInterface: sr(ee.Echooo),
  platforms: ["all"],
  externalUrl: Ct.Echooo
}, J1 = {
  label: ce.Keplr,
  injectedNamespace: re.Ethereum,
  checkProviderIdentity: ({ provider: t }) => !!t && !!t[ee.Keplr],
  getIcon: async () => (await import("./keplr-CyLTca9B.js")).default,
  getInterface: sr(ee.Keplr),
  platforms: ["all"],
  externalUrl: Ct.Keplr
}, K1 = [
  E1,
  Qx,
  qx,
  Vx,
  i1,
  Kx,
  Zx,
  Xx,
  Yx,
  e1,
  t1,
  r1,
  n1,
  s1,
  S1,
  o1,
  a1,
  Jx,
  l1,
  c1,
  u1,
  f1,
  h1,
  d1,
  p1,
  m1,
  g1,
  y1,
  b1,
  w1,
  v1,
  A1,
  _1,
  x1,
  O1,
  I1,
  T1,
  N1,
  R1,
  B1,
  C1,
  k1,
  P1,
  M1,
  zx,
  D1,
  L1,
  F1,
  j1,
  U1,
  H1,
  G1,
  $1,
  W1,
  V1,
  z1,
  Q1,
  q1,
  J1
], Z1 = B.object({
  label: B.string().required(),
  getIcon: B.function().arity(0).required(),
  getInterface: B.function().maxArity(1).required(),
  injectedNamespace: B.string().required(),
  checkProviderIdentity: B.function().arity(1).required(),
  platforms: B.array().items(B.string()),
  externalUrl: B.string()
}), X1 = B.array().items(Z1), Y1 = B.object().pattern(/\w+/, B.any().allow(B.boolean(), B.array().items(B.string())));
B.object({
  custom: X1,
  filter: Y1,
  displayUnavailable: [B.boolean(), B.array().items(B.string())],
  walletUnavailableMessage: B.function(),
  sort: B.function(),
  externalUrl: B.string(),
  disable6963Support: B.boolean()
});
const eS = B.object({
  uuid: B.string().required(),
  name: B.string().required(),
  icon: B.string().required(),
  rdns: B.string().required()
}), tS = B.object({
  info: eS.required(),
  provider: B.object().required()
}), rS = (t) => hv(tS, t), nS = ({ label: t, externalUrl: e }) => e ? `Please <a href="${e}" target="_blank">install or switch to</a> ${t} to continue` : `Please install or enable ${t} to continue`, sS = (t, e, r) => {
  var n;
  return t ? e({ provider: t, device: r }) ? !0 : Array.isArray(t.providers) && !!((n = t.providers) != null && n.some((s) => e({ provider: s, device: r }))) : !1;
};
function iS(t) {
  if (!t)
    return !1;
  const e = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, r = /\bon[a-z]+\s*=\s*["']?(?:javascript:)?/gi, n = /\b(href|xlink:href)\s*=\s*["']?javascript:/gi;
  return !!(e.test(t) || r.test(t) || n.test(t));
}
const by = [];
function oS() {
  window.addEventListener("eip6963:announceProvider", (t) => {
    const e = t, { detail: r } = e;
    if (!r)
      return;
    if (e) {
      const o = rS(r);
      if (o && o.error)
        throw o.error;
    }
    const { info: n, provider: s } = r, { name: i, icon: a } = n;
    if (iS(a)) {
      console.error(`The icon for injected wallet: ${i} contains executable JavaScript and has been blocked.`);
      return;
    }
    by.push({
      label: i,
      getIcon: async () => a,
      getInterface: async () => ({
        provider: s
      }),
      platforms: ["all"],
      eip6963Provider: s,
      checkProviderIdentity: ({ provider: o }) => !!o
    });
  }), window.dispatchEvent(new CustomEvent("eip6963:requestProvider"));
}
function aS(t) {
  return typeof window > "u" ? () => null : (oS(), (e) => {
    const { device: r } = e, { custom: n = [], filter: s = {}, displayUnavailable: i, sort: a, walletUnavailableMessage: o } = {}, m = $x([...n, ...by, ...K1], ({ label: d }) => d).reduce((d, l) => {
      const { label: f, platforms: g, injectedNamespace: h, checkProviderIdentity: u, eip6963Provider: b } = l, p = s[f], y = p === !1, v = b || window[h], E = sS(v, u, r);
      let x = !1;
      Array.isArray(p) && (p.includes(r.type) || r.os && p.includes(r.os.name)) && (x = !0), p === "unavailable" && !E && (x = !0);
      const C = !g.includes("all") && r.type !== null && !g.includes(r.type) && !g.includes(r.os.name);
      return !y && !x && !C && (E || i === !0 || Array.isArray(i) && i.length && i.includes(l.label)) && d.push(
        // modify wallet to display error if unavailable but displayUnavailable is set
        (i === !0 || Array.isArray(i) && i.length && i.includes(l.label)) && !E ? {
          ...l,
          getInterface: async () => {
            throw new Error(o ? o(l) : nS(l));
          }
        } : (
          // otherwise add wallet to list as is
          l
        )
      ), d;
    }, []);
    if (m.length) {
      const d = m.length > 1, l = m.filter((f) => {
        const { label: g } = f;
        return !(g === ce.Detected && d);
      }).map(({ label: f, getIcon: g, getInterface: h }) => ({
        label: f,
        getIcon: g,
        getInterface: h
      })).sort((f, g) => f.label < g.label ? -1 : f.label > g.label ? 1 : 0);
      return a ? a(l) : l;
    }
    return [];
  });
}
function lS({ supportedWalletType: t = "all", darkMode: e = !1, enableMobileWalletLink: r = !1, reloadOnDisconnect: n = !0 } = {}) {
  return () => ({
    label: "Coinbase Wallet",
    getIcon: async () => (await import("./icon-DbgmZCnU.js")).default,
    getInterface: async ({ chains: s, appMetadata: i }) => {
      (r || n || e) && console.warn("darkMode, enableMobileWalletLink and reloadOnDisconnect init props are deprecated after version 2.2.7 of @web3-onboard/coinbase");
      const { name: a, icon: o } = i || {}, { default: c } = await import("./index-WVSPNOtI.js").then((x) => x.i), m = c.default ? c.default : c, { isHex: d, toHex: l, createEIP1193Provider: f, fromHex: g } = await import("./index-C38Xa293.js"), u = `data:image/svg+xml;base64,${window.btoa(o || "")}`, b = s.map(({ id: x }) => g(x, "number")), p = new m({
        appName: a || "",
        appLogoUrl: u,
        appChainIds: b
      }), y = p.makeWeb3Provider({
        options: t
      }), v = y.on.bind(y);
      y.on = (x, C) => (v(x, (T) => {
        if (x === "chainChanged") {
          let A;
          d(T) ? A = T : A = l(T), C(A);
          return;
        }
        C(T);
      }), y);
      const E = f(y);
      return E.removeListener = (x, C) => {
      }, {
        provider: E,
        instance: p
      };
    }
  });
}
function cS() {
  return typeof window > "u" ? () => null : () => ({
    label: "Trust Wallet",
    getIcon: async () => (await import("./icon-Dbjb6jc5.js")).default,
    getInterface: async () => {
      const t = window.hasOwnProperty("ethereum");
      let e;
      if (t && window.ethereum.isTrust)
        e = window.ethereum;
      else if (window.trustwallet)
        e = window.trustwallet;
      else
        throw new Error(fv("Trust Wallet", "https://trustwallet.com/browser-extension"));
      return {
        provider: e
      };
    }
  });
}
const Bp = {
  permStore: !0,
  timeoutSeconds: 3600
};
class uS {
  constructor() {
    F(this, "cache", /* @__PURE__ */ new Map());
    F(this, "pendingPromises", /* @__PURE__ */ new Map());
    F(this, "defaultOptions", { ...Bp });
    F(this, "browserStorageSupported");
    this.browserStorageSupported = this.checkBrowserStorageSupport(), this.browserStorageSupported || console.warn("Browser storage is not supported or blocked. Falling back to in-memory cache.");
  }
  async getAsync(e, r, n = this.defaultOptions) {
    const s = this.get(e);
    if (s !== null)
      return s;
    if (this.pendingPromises.has(e))
      return this.pendingPromises.get(e);
    const i = (async () => {
      try {
        const a = await r();
        return this.set(e, a, n), a;
      } finally {
        this.pendingPromises.delete(e);
      }
    })();
    return this.pendingPromises.set(e, i), i;
  }
  get(e) {
    const r = this.cache.get(e);
    if (r) {
      if (!r.expiration || r.expiration > Date.now())
        return r.value;
      this.cache.delete(e);
    }
    if (this.defaultOptions.permStore && this.browserStorageSupported) {
      const n = localStorage.getItem(e);
      if (n) {
        const { value: s, expiration: i } = JSON.parse(n);
        if (!i || i > Date.now())
          return s;
        localStorage.removeItem(e);
      }
    }
    return null;
  }
  setDefaultOptions(e) {
    this.defaultOptions = { ...this.defaultOptions, ...e };
  }
  set(e, r, n = Bp) {
    const s = n.timeoutSeconds > 0 ? Date.now() + n.timeoutSeconds * 1e3 : null, i = { value: r, expiration: s };
    this.cache.set(e, i), n.permStore && this.browserStorageSupported && localStorage.setItem(e, JSON.stringify(i));
  }
  checkBrowserStorageSupport() {
    try {
      const e = "__localCacheTest__";
      return localStorage.setItem(e, "test"), localStorage.removeItem(e), !0;
    } catch {
      return !1;
    }
  }
}
const Mp = new uS(), fS = aS(), hS = lS(), dS = cS(), pS = [
  fS,
  dS,
  hS
  // walletConnect,
], _S = (t) => {
  const [e, r] = Vs(null), [n, s] = Vs(null);
  return Nc(() => {
    if (e) {
      console.log("Chains loaded:", e);
      const i = {
        wallets: pS,
        chains: e,
        appMetadata: t.appMetadata,
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
      };
      Bx()(i), s(i);
    }
  }, [e]), Nc(() => {
    (async () => {
      try {
        if (t.providersConfigUrl) {
          const a = await Mp.getAsync("URLS_" + t.providersConfigUrl, async () => await (await fetch(t.providersConfigUrl)).json());
          a && (r(a), (a || []).forEach((o) => {
            Na[o.id.toString()] = o;
          }), t.onConfigLoaded && t.onConfigLoaded("providers", a));
        }
        for (const [a, o] of Object.entries(t.configUrlMaps || {})) {
          const c = await Mp.getAsync("CONFIG_" + o, async () => await (await fetch(o)).json());
          c && t.onConfigLoaded && t.onConfigLoaded(a, c);
        }
      } catch (a) {
        console.error("Error loading configs", a), t.onError && t.onError(a);
      }
    })();
  }, [t.configUrlMaps, t.providersConfigUrl, t.onConfigLoaded]), n ? /* @__PURE__ */ lf.jsx(uA, { web3Onboard: t.web3OnboardInitializer(n), children: t.children }) : /* @__PURE__ */ lf.jsx(lf.Fragment, { children: t.children });
};
class xS {
  static addressLink(e, r) {
    const n = Na[e];
    return n ? n.blockExplorerUrl + "/address/" + r : null;
  }
  static transactionLink(e, r) {
    const n = Na[e];
    return n ? n.blockExplorerUrl + "/tx/" + r : null;
  }
}
export {
  ES as A,
  Na as C,
  af as E,
  Mp as G,
  uS as L,
  ad as P,
  xS as U,
  ch as a,
  Fe as b,
  Dr as c,
  fv as d,
  gd as e,
  Ah as f,
  bS as g,
  Eh as h,
  pv as i,
  _S as j,
  Dx as k,
  Lx as l,
  vS as m,
  AS as n,
  Bx as s,
  Mx as u,
  hv as v
};
//# sourceMappingURL=index-Dn5g1Mm5.js.map
