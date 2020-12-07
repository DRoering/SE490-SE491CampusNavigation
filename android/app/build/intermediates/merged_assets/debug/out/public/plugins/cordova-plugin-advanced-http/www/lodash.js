cordova.define("cordova-plugin-advanced-http.lodash", function (
  require,
  exports,
  module
) {
  /**
   * @license
   * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
   * Build: `lodash include="get,set,unset,values" exports="node"`
   */
  (function () {
    function t(t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n; )
        o[r] = e(t[r], r, t);
      return o;
    }
    function e(t) {
      return function (e) {
        return t(e);
      };
    }
    function r(e, r) {
      return t(r, function (t) {
        return e[t];
      });
    }
    function n() {}
    function o(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function u(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function i(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function c(t, e) {
      for (var r = t.length; r--; ) if (m(t[r][0], e)) return r;
      return -1;
    }
    function a(t, e) {
      e = h(e, t);
      for (var r = 0, n = e.length; null != t && r < n; ) t = t[j(e[r++])];
      return r && r == n ? t : E;
    }
    function l(t) {
      if (null == t) return t === E ? "[object Undefined]" : "[object Null]";
      t = Object(t);
      var e;
      if (nt && nt in t) {
        var r = Q.call(t, nt),
          n = t[nt];
        try {
          (t[nt] = E), (e = true);
        } catch (t) {}
        var o = Y.call(t);
        e && (r ? (t[nt] = n) : delete t[nt]), (e = o);
      } else e = Y.call(t);
      return e;
    }
    function s(t) {
      return w(t) && "[object Arguments]" == l(t);
    }
    function f(t) {
      return w(t) && z(t.length) && !!M[l(t)];
    }
    function p(e) {
      if (typeof e == "string") return e;
      if (ft(e)) return t(e, p) + "";
      if (x(e)) return at ? at.call(e) : "";
      var r = e + "";
      return "0" == r && 1 / e == -T ? "-0" : r;
    }
    function h(t, e) {
      var r;
      return (
        ft(t)
          ? (r = t)
          : (ft(t)
              ? (r = false)
              : ((r = typeof t),
                (r =
                  !(
                    "number" != r &&
                    "symbol" != r &&
                    "boolean" != r &&
                    null != t &&
                    !x(t)
                  ) ||
                  B.test(t) ||
                  !I.test(t) ||
                  (null != e && t in Object(e)))),
            (r = r ? [t] : lt(F(t)))),
        r
      );
    }
    function y(t, e) {
      var r = t.__data__,
        n = typeof e;
      return (
        "string" == n || "number" == n || "symbol" == n || "boolean" == n
          ? "__proto__" !== e
          : null === e
      )
        ? r[typeof e == "string" ? "string" : "hash"]
        : r.map;
    }
    function b(t, e) {
      var r = null == t ? E : t[e];
      return (!S(r) || (X && X in r) ? 0 : (O(r) ? Z : L).test(g(r))) ? r : E;
    }
    function _(t, e) {
      return (
        (e = null == e ? 9007199254740991 : e),
        !!e &&
          (typeof t == "number" || R.test(t)) &&
          -1 < t &&
          0 == t % 1 &&
          t < e
      );
    }
    function j(t) {
      if (typeof t == "string" || x(t)) return t;
      var e = t + "";
      return "0" == e && 1 / t == -T ? "-0" : e;
    }
    function g(t) {
      if (null != t) {
        try {
          return K.call(t);
        } catch (t) {}
        return t + "";
      }
      return "";
    }
    function v(t) {
      var e = null == t ? 0 : t.length;
      return e ? t[e - 1] : E;
    }
    function d(t, e) {
      function r() {
        var n = arguments,
          o = e ? e.apply(this, n) : n[0],
          u = r.cache;
        return u.has(o)
          ? u.get(o)
          : ((n = t.apply(this, n)), (r.cache = u.set(o, n) || u), n);
      }
      if (typeof t != "function" || (null != e && typeof e != "function"))
        throw new TypeError("Expected a function");
      return (r.cache = new (d.Cache || i)()), r;
    }
    function m(t, e) {
      return t === e || (t !== t && e !== e);
    }
    function A(t) {
      return null != t && z(t.length) && !O(t);
    }
    function O(t) {
      return (
        !!S(t) &&
        ((t = l(t)),
        "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t)
      );
    }
    function z(t) {
      return (
        typeof t == "number" && -1 < t && 0 == t % 1 && 9007199254740991 >= t
      );
    }
    function S(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    }
    function w(t) {
      return null != t && typeof t == "object";
    }
    function x(t) {
      return typeof t == "symbol" || (w(t) && "[object Symbol]" == l(t));
    }
    function F(t) {
      return null == t ? "" : p(t);
    }
    function $(t) {
      if (A(t)) {
        var e = ft(t),
          r = !e && st(t),
          n = !e && !r && pt(t),
          o = !e && !r && !n && ht(t);
        if ((e = e || r || n || o)) {
          for (var r = t.length, u = String, i = -1, c = Array(r); ++i < r; )
            c[i] = u(i);
          r = c;
        } else r = [];
        var a,
          u = r.length;
        for (a in t)
          !Q.call(t, a) ||
            (e &&
              ("length" == a ||
                (n && ("offset" == a || "parent" == a)) ||
                (o &&
                  ("buffer" == a || "byteLength" == a || "byteOffset" == a)) ||
                _(a, u))) ||
            r.push(a);
        t = r;
      } else if (
        ((a = t && t.constructor),
        t === ((typeof a == "function" && a.prototype) || H))
      ) {
        a = [];
        for (n in Object(t)) Q.call(t, n) && "constructor" != n && a.push(n);
        t = a;
      } else t = ut(t);
      return t;
    }
    function k() {
      return false;
    }
    var E,
      T = 1 / 0,
      I = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      B = /^\w*$/,
      P = /^\./,
      U = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      C = /\\(\\)?/g,
      L = /^\[object .+?Constructor\]$/,
      R = /^(?:0|[1-9]\d*)$/,
      M = {};
    (M["[object Float32Array]"] = M["[object Float64Array]"] = M[
      "[object Int8Array]"
    ] = M["[object Int16Array]"] = M["[object Int32Array]"] = M[
      "[object Uint8Array]"
    ] = M["[object Uint8ClampedArray]"] = M["[object Uint16Array]"] = M[
      "[object Uint32Array]"
    ] = true),
      (M["[object Arguments]"] = M["[object Array]"] = M[
        "[object ArrayBuffer]"
      ] = M["[object Boolean]"] = M["[object DataView]"] = M[
        "[object Date]"
      ] = M["[object Error]"] = M["[object Function]"] = M["[object Map]"] = M[
        "[object Number]"
      ] = M["[object Object]"] = M["[object RegExp]"] = M["[object Set]"] = M[
        "[object String]"
      ] = M["[object WeakMap]"] = false);
    var N,
      D =
        typeof global == "object" &&
        global &&
        global.Object === Object &&
        global,
      V = typeof self == "object" && self && self.Object === Object && self,
      q = D || V || Function("return this")(),
      G =
        (V =
          typeof exports == "object" &&
          exports &&
          !exports.nodeType &&
          exports) &&
        typeof module == "object" &&
        module &&
        !module.nodeType &&
        module,
      W = G && G.exports === V,
      D = W && D.process;
    t: {
      try {
        N = D && D.binding && D.binding("util");
        break t;
      } catch (t) {}
      N = void 0;
    }
    N = N && N.isTypedArray;
    var D = Array.prototype,
      H = Object.prototype,
      J = q["__core-js_shared__"],
      K = Function.prototype.toString,
      Q = H.hasOwnProperty,
      X = (function () {
        var t = /[^.]+$/.exec((J && J.keys && J.keys.IE_PROTO) || "");
        return t ? "Symbol(src)_1." + t : "";
      })(),
      Y = H.toString,
      Z = RegExp(
        "^" +
          K.call(Q)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      ),
      tt = W ? q.Buffer : E,
      W = q.Symbol,
      et = H.propertyIsEnumerable,
      rt = D.splice,
      nt = W ? W.toStringTag : E,
      ot = (function () {
        try {
          var t = b(Object, "defineProperty");
          return t({}, "", {}), t;
        } catch (t) {}
      })(),
      D = tt ? tt.isBuffer : E,
      ut = (function (t, e) {
        return function (r) {
          return t(e(r));
        };
      })(Object.keys, Object),
      it = b(q, "Map"),
      ct = b(Object, "create"),
      at = (q = W ? W.prototype : E) ? q.toString : E;
    (o.prototype.clear = function () {
      (this.__data__ = ct ? ct(null) : {}), (this.size = 0);
    }),
      (o.prototype.delete = function (t) {
        return (
          (t = this.has(t) && delete this.__data__[t]),
          (this.size -= t ? 1 : 0),
          t
        );
      }),
      (o.prototype.get = function (t) {
        var e = this.__data__;
        return ct
          ? ((t = e[t]), "__lodash_hash_undefined__" === t ? E : t)
          : Q.call(e, t)
          ? e[t]
          : E;
      }),
      (o.prototype.has = function (t) {
        var e = this.__data__;
        return ct ? e[t] !== E : Q.call(e, t);
      }),
      (o.prototype.set = function (t, e) {
        var r = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (r[t] = ct && e === E ? "__lodash_hash_undefined__" : e),
          this
        );
      }),
      (u.prototype.clear = function () {
        (this.__data__ = []), (this.size = 0);
      }),
      (u.prototype.delete = function (t) {
        var e = this.__data__;
        return (
          (t = c(e, t)),
          !(0 > t) &&
            (t == e.length - 1 ? e.pop() : rt.call(e, t, 1), --this.size, true)
        );
      }),
      (u.prototype.get = function (t) {
        var e = this.__data__;
        return (t = c(e, t)), 0 > t ? E : e[t][1];
      }),
      (u.prototype.has = function (t) {
        return -1 < c(this.__data__, t);
      }),
      (u.prototype.set = function (t, e) {
        var r = this.__data__,
          n = c(r, t);
        return 0 > n ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
      }),
      (i.prototype.clear = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new o(),
            map: new (it || u)(),
            string: new o(),
          });
      }),
      (i.prototype.delete = function (t) {
        return (t = y(this, t).delete(t)), (this.size -= t ? 1 : 0), t;
      }),
      (i.prototype.get = function (t) {
        return y(this, t).get(t);
      }),
      (i.prototype.has = function (t) {
        return y(this, t).has(t);
      }),
      (i.prototype.set = function (t, e) {
        var r = y(this, t),
          n = r.size;
        return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
      });
    var lt = (function (t) {
      t = d(t, function (t) {
        return 500 === e.size && e.clear(), t;
      });
      var e = t.cache;
      return t;
    })(function (t) {
      var e = [];
      return (
        P.test(t) && e.push(""),
        t.replace(U, function (t, r, n, o) {
          e.push(n ? o.replace(C, "$1") : r || t);
        }),
        e
      );
    });
    d.Cache = i;
    var st = s(
        (function () {
          return arguments;
        })()
      )
        ? s
        : function (t) {
            return w(t) && Q.call(t, "callee") && !et.call(t, "callee");
          },
      ft = Array.isArray,
      pt = D || k,
      ht = N ? e(N) : f;
    (n.keys = $),
      (n.memoize = d),
      (n.set = function (t, e, r) {
        if (null != t && S(t)) {
          e = h(e, t);
          for (
            var n = -1, o = e.length, u = o - 1, i = t;
            null != i && ++n < o;

          ) {
            var c = j(e[n]),
              a = r;
            if (n != u) {
              var l = i[c],
                a = E;
              a === E && (a = S(l) ? l : _(e[n + 1]) ? [] : {});
            }
            var s = i,
              l = c,
              f = s[l];
            (Q.call(s, l) && m(f, a) && (a !== E || l in s)) ||
              ("__proto__" == l && ot
                ? ot(s, l, {
                    configurable: true,
                    enumerable: true,
                    value: a,
                    writable: true,
                  })
                : (s[l] = a)),
              (i = i[c]);
          }
        }
        return t;
      }),
      (n.unset = function (t, e) {
        var r;
        if (null == t) r = true;
        else {
          var n = t,
            o = (r = h(e, n));
          if (!(2 > o.length)) {
            var u = 0,
              i = -1,
              c = -1,
              l = o.length;
            for (
              0 > u && (u = -u > l ? 0 : l + u),
                i = i > l ? l : i,
                0 > i && (i += l),
                l = u > i ? 0 : (i - u) >>> 0,
                u >>>= 0,
                i = Array(l);
              ++c < l;

            )
              i[c] = o[c + u];
            n = a(n, i);
          }
          (r = j(v(r))), (r = !(null != n && Q.call(n, r)) || delete n[r]);
        }
        return r;
      }),
      (n.values = function (t) {
        return null == t ? [] : r(t, $(t));
      }),
      (n.eq = m),
      (n.get = function (t, e, r) {
        return (t = null == t ? E : a(t, e)), t === E ? r : t;
      }),
      (n.isArguments = st),
      (n.isArray = ft),
      (n.isArrayLike = A),
      (n.isBuffer = pt),
      (n.isFunction = O),
      (n.isLength = z),
      (n.isObject = S),
      (n.isObjectLike = w),
      (n.isSymbol = x),
      (n.isTypedArray = ht),
      (n.last = v),
      (n.stubFalse = k),
      (n.toString = F),
      (n.VERSION = "4.17.1"),
      G && (((G.exports = n)._ = n), (V._ = n));
  }.call(this));
});
