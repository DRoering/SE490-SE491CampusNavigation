(this.webpackJsonpcampusnavigation =
  this.webpackJsonpcampusnavigation || []).push([
  [5],
  {
    262: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "startTapClick", function () {
          return o;
        });
      var i = n(30),
        o = function (t) {
          var e,
            n,
            o,
            f,
            l = 10 * -v,
            p = 0,
            m =
              t.getBoolean("animated", !0) && t.getBoolean("rippleEffect", !0),
            L = new WeakMap(),
            h = function (t) {
              (l = Object(i.i)(t)), w(t);
            },
            E = function () {
              clearTimeout(f), (f = void 0), n && (O(!1), (n = void 0));
            },
            b = function (t) {
              n ||
                (void 0 !== e && null !== e.parentElement) ||
                ((e = void 0), g(a(t), t));
            },
            w = function (t) {
              g(void 0, t);
            },
            g = function (t, e) {
              if (!t || t !== n) {
                clearTimeout(f), (f = void 0);
                var o = Object(i.j)(e),
                  a = o.x,
                  c = o.y;
                if (n) {
                  if (L.has(n)) throw new Error("internal error");
                  n.classList.contains(s) || j(n, a, c), O(!0);
                }
                if (t) {
                  var d = L.get(t);
                  d && (clearTimeout(d), L.delete(t));
                  var v = r(t) ? 0 : u;
                  t.classList.remove(s),
                    (f = setTimeout(function () {
                      j(t, a, c), (f = void 0);
                    }, v));
                }
                n = t;
              }
            },
            j = function (t, e, n) {
              (p = Date.now()), t.classList.add(s);
              var i = m && c(t);
              i && i.addRipple && (T(), (o = i.addRipple(e, n)));
            },
            T = function () {
              void 0 !== o &&
                (o.then(function (t) {
                  return t();
                }),
                (o = void 0));
            },
            O = function (t) {
              T();
              var e = n;
              if (e) {
                var i = d - Date.now() + p;
                if (t && i > 0 && !r(e)) {
                  var o = setTimeout(function () {
                    e.classList.remove(s), L.delete(e);
                  }, d);
                  L.set(e, o);
                } else e.classList.remove(s);
              }
            },
            S = document;
          S.addEventListener("ionScrollStart", function (t) {
            (e = t.target), E();
          }),
            S.addEventListener("ionScrollEnd", function () {
              e = void 0;
            }),
            S.addEventListener("ionGestureCaptured", E),
            S.addEventListener(
              "touchstart",
              function (t) {
                (l = Object(i.i)(t)), b(t);
              },
              !0
            ),
            S.addEventListener("touchcancel", h, !0),
            S.addEventListener("touchend", h, !0),
            S.addEventListener(
              "mousedown",
              function (t) {
                var e = Object(i.i)(t) - v;
                l < e && b(t);
              },
              !0
            ),
            S.addEventListener(
              "mouseup",
              function (t) {
                var e = Object(i.i)(t) - v;
                l < e && w(t);
              },
              !0
            );
        },
        a = function (t) {
          if (!t.composedPath) return t.target.closest(".ion-activatable");
          for (var e = t.composedPath(), n = 0; n < e.length - 2; n++) {
            var i = e[n];
            if (i.classList && i.classList.contains("ion-activatable"))
              return i;
          }
        },
        r = function (t) {
          return t.classList.contains("ion-activatable-instant");
        },
        c = function (t) {
          if (t.shadowRoot) {
            var e = t.shadowRoot.querySelector("ion-ripple-effect");
            if (e) return e;
          }
          return t.querySelector("ion-ripple-effect");
        },
        s = "ion-activated",
        u = 200,
        d = 200,
        v = 2500;
    },
  },
]);
//# sourceMappingURL=5.5fafdf80.chunk.js.map
