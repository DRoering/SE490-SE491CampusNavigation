(this.webpackJsonpcampusnavigation =
  this.webpackJsonpcampusnavigation || []).push([
  [4],
  {
    266: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, "Swiper", function () {
          return A;
        });
      var s = i(107),
        a = i(15),
        n = i(19),
        r = i(20),
        o = i(10),
        l = i(9),
        d =
          "undefined" === typeof document
            ? {
                body: {},
                addEventListener: function () {},
                removeEventListener: function () {},
                activeElement: { blur: function () {}, nodeName: "" },
                querySelector: function () {
                  return null;
                },
                querySelectorAll: function () {
                  return [];
                },
                getElementById: function () {
                  return null;
                },
                createEvent: function () {
                  return { initEvent: function () {} };
                },
                createElement: function () {
                  return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                      return [];
                    },
                  };
                },
                location: { hash: "" },
              }
            : document,
        h =
          "undefined" === typeof window
            ? {
                document: d,
                navigator: { userAgent: "" },
                location: {},
                history: {},
                CustomEvent: function () {
                  return this;
                },
                addEventListener: function () {},
                removeEventListener: function () {},
                getComputedStyle: function () {
                  return {
                    getPropertyValue: function () {
                      return "";
                    },
                  };
                },
                Image: function () {},
                Date: function () {},
                screen: {},
                setTimeout: function () {},
                clearTimeout: function () {},
              }
            : window,
        c = function e(t) {
          Object(l.a)(this, e);
          for (var i = 0; i < t.length; i += 1) this[i] = t[i];
          return (this.length = t.length), this;
        };
      function u(e, t) {
        var i = [],
          s = 0;
        if (e && !t && e instanceof c) return e;
        if (e)
          if ("string" === typeof e) {
            var a,
              n,
              r = e.trim();
            if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
              var o = "div";
              for (
                0 === r.indexOf("<li") && (o = "ul"),
                  0 === r.indexOf("<tr") && (o = "tbody"),
                  (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) ||
                    (o = "tr"),
                  0 === r.indexOf("<tbody") && (o = "table"),
                  0 === r.indexOf("<option") && (o = "select"),
                  (n = d.createElement(o)).innerHTML = r,
                  s = 0;
                s < n.childNodes.length;
                s += 1
              )
                i.push(n.childNodes[s]);
            } else
              for (
                a =
                  t || "#" !== e[0] || e.match(/[ .<>:~]/)
                    ? (t || d).querySelectorAll(e.trim())
                    : [d.getElementById(e.trim().split("#")[1])],
                  s = 0;
                s < a.length;
                s += 1
              )
                a[s] && i.push(a[s]);
          } else if (e.nodeType || e === h || e === d) i.push(e);
          else if (e.length > 0 && e[0].nodeType)
            for (s = 0; s < e.length; s += 1) i.push(e[s]);
        return new c(i);
      }
      function p(e) {
        for (var t = [], i = 0; i < e.length; i += 1)
          -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
      }
      (u.fn = c.prototype), (u.Class = c), (u.Dom7 = c);
      var v = {
        addClass: function (e) {
          if ("undefined" === typeof e) return this;
          for (var t = e.split(" "), i = 0; i < t.length; i += 1)
            for (var s = 0; s < this.length; s += 1)
              "undefined" !== typeof this[s] &&
                "undefined" !== typeof this[s].classList &&
                this[s].classList.add(t[i]);
          return this;
        },
        removeClass: function (e) {
          for (var t = e.split(" "), i = 0; i < t.length; i += 1)
            for (var s = 0; s < this.length; s += 1)
              "undefined" !== typeof this[s] &&
                "undefined" !== typeof this[s].classList &&
                this[s].classList.remove(t[i]);
          return this;
        },
        hasClass: function (e) {
          return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
          for (var t = e.split(" "), i = 0; i < t.length; i += 1)
            for (var s = 0; s < this.length; s += 1)
              "undefined" !== typeof this[s] &&
                "undefined" !== typeof this[s].classList &&
                this[s].classList.toggle(t[i]);
          return this;
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var i = 0; i < this.length; i += 1)
            if (2 === arguments.length) this[i].setAttribute(e, t);
            else
              for (var s in e)
                (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        data: function (e, t) {
          var i;
          if ("undefined" !== typeof t) {
            for (var s = 0; s < this.length; s += 1)
              (i = this[s]).dom7ElementDataStorage ||
                (i.dom7ElementDataStorage = {}),
                (i.dom7ElementDataStorage[e] = t);
            return this;
          }
          if ((i = this[0])) {
            if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
              return i.dom7ElementDataStorage[e];
            var a = i.getAttribute("data-".concat(e));
            return a || void 0;
          }
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) {
            var i = this[t].style;
            (i.webkitTransform = e), (i.transform = e);
          }
          return this;
        },
        transition: function (e) {
          "string" !== typeof e && (e = "".concat(e, "ms"));
          for (var t = 0; t < this.length; t += 1) {
            var i = this[t].style;
            (i.webkitTransitionDuration = e), (i.transitionDuration = e);
          }
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          var s = t[0],
            a = t[1],
            n = t[2],
            r = t[3];
          function o(e) {
            var t = e.target;
            if (t) {
              var i = e.target.dom7EventData || [];
              if ((i.indexOf(e) < 0 && i.unshift(e), u(t).is(a))) n.apply(t, i);
              else
                for (var s = u(t).parents(), r = 0; r < s.length; r += 1)
                  u(s[r]).is(a) && n.apply(s[r], i);
            }
          }
          function l(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
          }
          "function" === typeof t[1] &&
            ((s = t[0]), (n = t[1]), (r = t[2]), (a = void 0)),
            r || (r = !1);
          for (var d, h = s.split(" "), c = 0; c < this.length; c += 1) {
            var p = this[c];
            if (a)
              for (d = 0; d < h.length; d += 1) {
                var v = h[d];
                p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                  p.dom7LiveListeners[v] || (p.dom7LiveListeners[v] = []),
                  p.dom7LiveListeners[v].push({
                    listener: n,
                    proxyListener: o,
                  }),
                  p.addEventListener(v, o, r);
              }
            else
              for (d = 0; d < h.length; d += 1) {
                var f = h[d];
                p.dom7Listeners || (p.dom7Listeners = {}),
                  p.dom7Listeners[f] || (p.dom7Listeners[f] = []),
                  p.dom7Listeners[f].push({ listener: n, proxyListener: l }),
                  p.addEventListener(f, l, r);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          var s = t[0],
            a = t[1],
            n = t[2],
            r = t[3];
          "function" === typeof t[1] &&
            ((s = t[0]), (n = t[1]), (r = t[2]), (a = void 0)),
            r || (r = !1);
          for (var o = s.split(" "), l = 0; l < o.length; l += 1)
            for (var d = o[l], h = 0; h < this.length; h += 1) {
              var c = this[h],
                u = void 0;
              if (
                (!a && c.dom7Listeners
                  ? (u = c.dom7Listeners[d])
                  : a && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]),
                u && u.length)
              )
                for (var p = u.length - 1; p >= 0; p -= 1) {
                  var v = u[p];
                  (n && v.listener === n) ||
                  (n &&
                    v.listener &&
                    v.listener.dom7proxy &&
                    v.listener.dom7proxy === n)
                    ? (c.removeEventListener(d, v.proxyListener, r),
                      u.splice(p, 1))
                    : n ||
                      (c.removeEventListener(d, v.proxyListener, r),
                      u.splice(p, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          for (var s = t[0].split(" "), a = t[1], n = 0; n < s.length; n += 1)
            for (var r = s[n], o = 0; o < this.length; o += 1) {
              var l = this[o],
                c = void 0;
              try {
                c = new h.CustomEvent(r, {
                  detail: a,
                  bubbles: !0,
                  cancelable: !0,
                });
              } catch (u) {
                (c = d.createEvent("Event")).initEvent(r, !0, !0),
                  (c.detail = a);
              }
              (l.dom7EventData = t.filter(function (e, t) {
                return t > 0;
              })),
                l.dispatchEvent(c),
                (l.dom7EventData = []),
                delete l.dom7EventData;
            }
          return this;
        },
        transitionEnd: function (e) {
          var t,
            i = ["webkitTransitionEnd", "transitionend"],
            s = this;
          function a(n) {
            if (n.target === this)
              for (e.call(this, n), t = 0; t < i.length; t += 1) s.off(i[t], a);
          }
          if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
          return this;
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        offset: function () {
          if (this.length > 0) {
            var e = this[0],
              t = e.getBoundingClientRect(),
              i = d.body,
              s = e.clientTop || i.clientTop || 0,
              a = e.clientLeft || i.clientLeft || 0,
              n = e === h ? h.scrollY : e.scrollTop,
              r = e === h ? h.scrollX : e.scrollLeft;
            return { top: t.top + n - s, left: t.left + r - a };
          }
          return null;
        },
        css: function (e, t) {
          var i;
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (var s in e) this[i].style[s] = e[s];
              return this;
            }
            if (this[0])
              return h.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          if (!e) return this;
          for (var t = 0; t < this.length; t += 1)
            if (!1 === e.call(this[t], t, this[t])) return this;
          return this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : void 0;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            i,
            s = this[0];
          if (!s || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (s.matches) return s.matches(e);
            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
            if (s.msMatchesSelector) return s.msMatchesSelector(e);
            for (t = u(e), i = 0; i < t.length; i += 1)
              if (t[i] === s) return !0;
            return !1;
          }
          if (e === d) return s === d;
          if (e === h) return s === h;
          if (e.nodeType || e instanceof c) {
            for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
              if (t[i] === s) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          var t,
            i = this.length;
          return new c(
            e > i - 1
              ? []
              : e < 0
              ? (t = i + e) < 0
                ? []
                : [this[t]]
              : [this[e]]
          );
        },
        append: function () {
          for (var e, t = 0; t < arguments.length; t += 1) {
            e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            for (var i = 0; i < this.length; i += 1)
              if ("string" === typeof e) {
                var s = d.createElement("div");
                for (s.innerHTML = e; s.firstChild; )
                  this[i].appendChild(s.firstChild);
              } else if (e instanceof c)
                for (var a = 0; a < e.length; a += 1) this[i].appendChild(e[a]);
              else this[i].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t, i;
          for (t = 0; t < this.length; t += 1)
            if ("string" === typeof e) {
              var s = d.createElement("div");
              for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
                this[t].insertBefore(s.childNodes[i], this[t].childNodes[0]);
            } else if (e instanceof c)
              for (i = 0; i < e.length; i += 1)
                this[t].insertBefore(e[i], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                u(this[0].nextElementSibling).is(e)
                ? new c([this[0].nextElementSibling])
                : new c([])
              : this[0].nextElementSibling
              ? new c([this[0].nextElementSibling])
              : new c([])
            : new c([]);
        },
        nextAll: function (e) {
          var t = [],
            i = this[0];
          if (!i) return new c([]);
          for (; i.nextElementSibling; ) {
            var s = i.nextElementSibling;
            e ? u(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return new c(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && u(t.previousElementSibling).is(e)
                ? new c([t.previousElementSibling])
                : new c([])
              : t.previousElementSibling
              ? new c([t.previousElementSibling])
              : new c([]);
          }
          return new c([]);
        },
        prevAll: function (e) {
          var t = [],
            i = this[0];
          if (!i) return new c([]);
          for (; i.previousElementSibling; ) {
            var s = i.previousElementSibling;
            e ? u(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return new c(t);
        },
        parent: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            null !== this[i].parentNode &&
              (e
                ? u(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                : t.push(this[i].parentNode));
          return u(p(t));
        },
        parents: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            for (var s = this[i].parentNode; s; )
              e ? u(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
          return u(p(t));
        },
        closest: function (e) {
          var t = this;
          return "undefined" === typeof e
            ? new c([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            for (
              var s = this[i].querySelectorAll(e), a = 0;
              a < s.length;
              a += 1
            )
              t.push(s[a]);
          return new c(t);
        },
        children: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            for (var s = this[i].childNodes, a = 0; a < s.length; a += 1)
              e
                ? 1 === s[a].nodeType && u(s[a]).is(e) && t.push(s[a])
                : 1 === s[a].nodeType && t.push(s[a]);
          return new c(p(t));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
        add: function () {
          for (
            var e, t, i = this, s = arguments.length, a = new Array(s), n = 0;
            n < s;
            n++
          )
            a[n] = arguments[n];
          for (e = 0; e < a.length; e += 1) {
            var r = u(a[e]);
            for (t = 0; t < r.length; t += 1)
              (i[i.length] = r[t]), (i.length += 1);
          }
          return i;
        },
        styles: function () {
          return this[0] ? h.getComputedStyle(this[0], null) : {};
        },
      };
      Object.keys(v).forEach(function (e) {
        u.fn[e] = u.fn[e] || v[e];
      });
      var f = {
          deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
              try {
                t[e] = null;
              } catch (i) {}
              try {
                delete t[e];
              } catch (i) {}
            });
          },
          nextTick: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return setTimeout(e, t);
          },
          now: function () {
            return Date.now();
          },
          getTranslate: function (e) {
            var t,
              i,
              s,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "x",
              n = h.getComputedStyle(e, null);
            return (
              h.WebKitCSSMatrix
                ? ((i = n.transform || n.webkitTransform).split(",").length >
                    6 &&
                    (i = i
                      .split(", ")
                      .map(function (e) {
                        return e.replace(",", ".");
                      })
                      .join(", ")),
                  (s = new h.WebKitCSSMatrix("none" === i ? "" : i)))
                : (t = (s =
                    n.MozTransform ||
                    n.OTransform ||
                    n.MsTransform ||
                    n.msTransform ||
                    n.transform ||
                    n
                      .getPropertyValue("transform")
                      .replace("translate(", "matrix(1, 0, 0, 1,"))
                    .toString()
                    .split(",")),
              "x" === a &&
                (i = h.WebKitCSSMatrix
                  ? s.m41
                  : 16 === t.length
                  ? parseFloat(t[12])
                  : parseFloat(t[4])),
              "y" === a &&
                (i = h.WebKitCSSMatrix
                  ? s.m42
                  : 16 === t.length
                  ? parseFloat(t[13])
                  : parseFloat(t[5])),
              i || 0
            );
          },
          parseUrlQuery: function (e) {
            var t,
              i,
              s,
              a,
              n = {},
              r = e || h.location.href;
            if ("string" === typeof r && r.length)
              for (
                a = (i = (r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "")
                  .split("&")
                  .filter(function (e) {
                    return "" !== e;
                  })).length,
                  t = 0;
                t < a;
                t += 1
              )
                (s = i[t].replace(/#\S+/g, "").split("=")),
                  (n[decodeURIComponent(s[0])] =
                    "undefined" === typeof s[1]
                      ? void 0
                      : decodeURIComponent(s[1]) || "");
            return n;
          },
          isObject: function (e) {
            return (
              "object" === typeof e &&
              null !== e &&
              e.constructor &&
              e.constructor === Object
            );
          },
          extend: function () {
            for (
              var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = 1;
              t < arguments.length;
              t += 1
            ) {
              var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
              if (void 0 !== i && null !== i)
                for (
                  var s = Object.keys(Object(i)), a = 0, n = s.length;
                  a < n;
                  a += 1
                ) {
                  var r = s[a],
                    o = Object.getOwnPropertyDescriptor(i, r);
                  void 0 !== o &&
                    o.enumerable &&
                    (f.isObject(e[r]) && f.isObject(i[r])
                      ? f.extend(e[r], i[r])
                      : !f.isObject(e[r]) && f.isObject(i[r])
                      ? ((e[r] = {}), f.extend(e[r], i[r]))
                      : (e[r] = i[r]));
                }
            }
            return e;
          },
        },
        m = (function () {
          var e = d.createElement("div");
          return {
            touch:
              (h.Modernizr && !0 === h.Modernizr.touch) ||
              !!(
                h.navigator.maxTouchPoints > 0 ||
                "ontouchstart" in h ||
                (h.DocumentTouch && d instanceof h.DocumentTouch)
              ),
            pointerEvents: !!(
              h.navigator.pointerEnabled ||
              h.PointerEvent ||
              ("maxTouchPoints" in h.navigator &&
                h.navigator.maxTouchPoints > 0)
            ),
            prefixedPointerEvents: !!h.navigator.msPointerEnabled,
            transition: (function () {
              var t = e.style;
              return (
                "transition" in t ||
                "webkitTransition" in t ||
                "MozTransition" in t
              );
            })(),
            transforms3d:
              (h.Modernizr && !0 === h.Modernizr.csstransforms3d) ||
              (function () {
                var t = e.style;
                return (
                  "webkitPerspective" in t ||
                  "MozPerspective" in t ||
                  "OPerspective" in t ||
                  "MsPerspective" in t ||
                  "perspective" in t
                );
              })(),
            flexbox: (function () {
              for (
                var t = e.style,
                  i = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                    " "
                  ),
                  s = 0;
                s < i.length;
                s += 1
              )
                if (i[s] in t) return !0;
              return !1;
            })(),
            observer: "MutationObserver" in h || "WebkitMutationObserver" in h,
            passiveListener: (function () {
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                });
                h.addEventListener("testPassiveListener", null, t);
              } catch (i) {}
              return e;
            })(),
            gestures: "ongesturestart" in h,
          };
        })(),
        g = {
          isIE:
            !!h.navigator.userAgent.match(/Trident/g) ||
            !!h.navigator.userAgent.match(/MSIE/g),
          isEdge: !!h.navigator.userAgent.match(/Edge/g),
          isSafari: (function () {
            var e = h.navigator.userAgent.toLowerCase();
            return (
              e.indexOf("safari") >= 0 &&
              e.indexOf("chrome") < 0 &&
              e.indexOf("android") < 0
            );
          })(),
          isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            h.navigator.userAgent
          ),
        },
        b = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            Object(l.a)(this, e);
            var i = this;
            (i.params = t),
              (i.eventsListeners = {}),
              i.params &&
                i.params.on &&
                Object.keys(i.params.on).forEach(function (e) {
                  i.on(e, i.params.on[e]);
                });
          }
          return (
            Object(o.a)(
              e,
              [
                {
                  key: "on",
                  value: function (e, t, i) {
                    var s = this;
                    if ("function" !== typeof t) return s;
                    var a = i ? "unshift" : "push";
                    return (
                      e.split(" ").forEach(function (e) {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []),
                          s.eventsListeners[e][a](t);
                      }),
                      s
                    );
                  },
                },
                {
                  key: "once",
                  value: function (e, t, i) {
                    var s = this;
                    if ("function" !== typeof t) return s;
                    function a() {
                      for (
                        var i = arguments.length, n = new Array(i), r = 0;
                        r < i;
                        r++
                      )
                        n[r] = arguments[r];
                      t.apply(s, n), s.off(e, a), a.f7proxy && delete a.f7proxy;
                    }
                    return (a.f7proxy = t), s.on(e, a, i);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    var i = this;
                    return i.eventsListeners
                      ? (e.split(" ").forEach(function (e) {
                          "undefined" === typeof t
                            ? (i.eventsListeners[e] = [])
                            : i.eventsListeners[e] &&
                              i.eventsListeners[e].length &&
                              i.eventsListeners[e].forEach(function (s, a) {
                                (s === t || (s.f7proxy && s.f7proxy === t)) &&
                                  i.eventsListeners[e].splice(a, 1);
                              });
                        }),
                        i)
                      : i;
                  },
                },
                {
                  key: "emit",
                  value: function () {
                    var e,
                      t,
                      i,
                      s = this;
                    if (!s.eventsListeners) return s;
                    for (
                      var a = arguments.length, n = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      n[r] = arguments[r];
                    "string" === typeof n[0] || Array.isArray(n[0])
                      ? ((e = n[0]), (t = n.slice(1, n.length)), (i = s))
                      : ((e = n[0].events),
                        (t = n[0].data),
                        (i = n[0].context || s));
                    var o = Array.isArray(e) ? e : e.split(" ");
                    return (
                      o.forEach(function (e) {
                        if (s.eventsListeners && s.eventsListeners[e]) {
                          var a = [];
                          s.eventsListeners[e].forEach(function (e) {
                            a.push(e);
                          }),
                            a.forEach(function (e) {
                              e.apply(i, t);
                            });
                        }
                      }),
                      s
                    );
                  },
                },
                {
                  key: "useModulesParams",
                  value: function (e) {
                    var t = this;
                    t.modules &&
                      Object.keys(t.modules).forEach(function (i) {
                        var s = t.modules[i];
                        s.params && f.extend(e, s.params);
                      });
                  },
                },
                {
                  key: "useModules",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = this;
                    t.modules &&
                      Object.keys(t.modules).forEach(function (i) {
                        var s = t.modules[i],
                          a = e[i] || {};
                        s.instance &&
                          Object.keys(s.instance).forEach(function (e) {
                            var i = s.instance[e];
                            t[e] = "function" === typeof i ? i.bind(t) : i;
                          }),
                          s.on &&
                            t.on &&
                            Object.keys(s.on).forEach(function (e) {
                              t.on(e, s.on[e]);
                            }),
                          s.create && s.create.bind(t)(a);
                      });
                  },
                },
              ],
              [
                {
                  key: "installModule",
                  value: function (e) {
                    var t = this;
                    t.prototype.modules || (t.prototype.modules = {});
                    var i =
                      e.name ||
                      ""
                        .concat(Object.keys(t.prototype.modules).length, "_")
                        .concat(f.now());
                    if (
                      ((t.prototype.modules[i] = e),
                      e.proto &&
                        Object.keys(e.proto).forEach(function (i) {
                          t.prototype[i] = e.proto[i];
                        }),
                      e.static &&
                        Object.keys(e.static).forEach(function (i) {
                          t[i] = e.static[i];
                        }),
                      e.install)
                    ) {
                      for (
                        var s = arguments.length,
                          a = new Array(s > 1 ? s - 1 : 0),
                          n = 1;
                        n < s;
                        n++
                      )
                        a[n - 1] = arguments[n];
                      e.install.apply(t, a);
                    }
                    return t;
                  },
                },
                {
                  key: "use",
                  value: function (e) {
                    var t = this;
                    if (Array.isArray(e))
                      return (
                        e.forEach(function (e) {
                          return t.installModule(e);
                        }),
                        t
                      );
                    for (
                      var i = arguments.length,
                        s = new Array(i > 1 ? i - 1 : 0),
                        a = 1;
                      a < i;
                      a++
                    )
                      s[a - 1] = arguments[a];
                    return t.installModule.apply(t, [e].concat(s));
                  },
                },
                {
                  key: "components",
                  set: function (e) {
                    this.use && this.use(e);
                  },
                },
              ]
            ),
            e
          );
        })();
      var w = {
        updateSize: function () {
          var e,
            t,
            i = this.$el;
          (e =
            "undefined" !== typeof this.params.width
              ? this.params.width
              : i[0].clientWidth),
            (t =
              "undefined" !== typeof this.params.height
                ? this.params.height
                : i[0].clientHeight),
            (0 === e && this.isHorizontal()) ||
              (0 === t && this.isVertical()) ||
              ((e =
                e -
                parseInt(i.css("padding-left"), 10) -
                parseInt(i.css("padding-right"), 10)),
              (t =
                t -
                parseInt(i.css("padding-top"), 10) -
                parseInt(i.css("padding-bottom"), 10)),
              f.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = this.params,
            t = this.$wrapperEl,
            i = this.size,
            s = this.rtlTranslate,
            a = this.wrongRTL,
            n = this.virtual && e.virtual.enabled,
            r = n ? this.virtual.slides.length : this.slides.length,
            o = t.children(".".concat(this.params.slideClass)),
            l = n ? this.virtual.slides.length : o.length,
            d = [],
            c = [],
            u = [],
            p = e.slidesOffsetBefore;
          "function" === typeof p && (p = e.slidesOffsetBefore.call(this));
          var v = e.slidesOffsetAfter;
          "function" === typeof v && (v = e.slidesOffsetAfter.call(this));
          var b = this.snapGrid.length,
            w = this.snapGrid.length,
            y = e.spaceBetween,
            T = -p,
            E = 0,
            x = 0;
          if ("undefined" !== typeof i) {
            var S, C;
            "string" === typeof y &&
              y.indexOf("%") >= 0 &&
              (y = (parseFloat(y.replace("%", "")) / 100) * i),
              (this.virtualSize = -y),
              s
                ? o.css({ marginLeft: "", marginTop: "" })
                : o.css({ marginRight: "", marginBottom: "" }),
              e.slidesPerColumn > 1 &&
                ((S =
                  Math.floor(l / e.slidesPerColumn) ===
                  l / this.params.slidesPerColumn
                    ? l
                    : Math.ceil(l / e.slidesPerColumn) * e.slidesPerColumn),
                "auto" !== e.slidesPerView &&
                  "row" === e.slidesPerColumnFill &&
                  (S = Math.max(S, e.slidesPerView * e.slidesPerColumn)));
            for (
              var M,
                P = e.slidesPerColumn,
                k = S / P,
                z = Math.floor(l / e.slidesPerColumn),
                L = 0;
              L < l;
              L += 1
            ) {
              C = 0;
              var $ = o.eq(L);
              if (e.slidesPerColumn > 1) {
                var D = void 0,
                  O = void 0,
                  I = void 0;
                if (
                  "column" === e.slidesPerColumnFill ||
                  ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1)
                ) {
                  if ("column" === e.slidesPerColumnFill)
                    (I = L - (O = Math.floor(L / P)) * P),
                      (O > z || (O === z && I === P - 1)) &&
                        (I += 1) >= P &&
                        ((I = 0), (O += 1));
                  else {
                    var A = Math.floor(L / e.slidesPerGroup);
                    O =
                      L -
                      (I =
                        Math.floor(L / e.slidesPerView) -
                        A * e.slidesPerColumn) *
                        e.slidesPerView -
                      A * e.slidesPerView;
                  }
                  (D = O + (I * S) / P),
                    $.css({
                      "-webkit-box-ordinal-group": D,
                      "-moz-box-ordinal-group": D,
                      "-ms-flex-order": D,
                      "-webkit-order": D,
                      order: D,
                    });
                } else O = L - (I = Math.floor(L / k)) * k;
                $.css(
                  "margin-".concat(this.isHorizontal() ? "top" : "left"),
                  0 !== I && e.spaceBetween && "".concat(e.spaceBetween, "px")
                )
                  .attr("data-swiper-column", O)
                  .attr("data-swiper-row", I);
              }
              if ("none" !== $.css("display")) {
                if ("auto" === e.slidesPerView) {
                  var B = h.getComputedStyle($[0], null),
                    X = $[0].style.transform,
                    Y = $[0].style.webkitTransform;
                  if (
                    (X && ($[0].style.transform = "none"),
                    Y && ($[0].style.webkitTransform = "none"),
                    e.roundLengths)
                  )
                    C = this.isHorizontal()
                      ? $.outerWidth(!0)
                      : $.outerHeight(!0);
                  else if (this.isHorizontal()) {
                    var G = parseFloat(B.getPropertyValue("width")),
                      V = parseFloat(B.getPropertyValue("padding-left")),
                      H = parseFloat(B.getPropertyValue("padding-right")),
                      F = parseFloat(B.getPropertyValue("margin-left")),
                      N = parseFloat(B.getPropertyValue("margin-right")),
                      W = B.getPropertyValue("box-sizing");
                    C =
                      W && "border-box" === W && !g.isIE
                        ? G + F + N
                        : G + V + H + F + N;
                  } else {
                    var R = parseFloat(B.getPropertyValue("height")),
                      j = parseFloat(B.getPropertyValue("padding-top")),
                      q = parseFloat(B.getPropertyValue("padding-bottom")),
                      U = parseFloat(B.getPropertyValue("margin-top")),
                      _ = parseFloat(B.getPropertyValue("margin-bottom")),
                      K = B.getPropertyValue("box-sizing");
                    C =
                      K && "border-box" === K && !g.isIE
                        ? R + U + _
                        : R + j + q + U + _;
                  }
                  X && ($[0].style.transform = X),
                    Y && ($[0].style.webkitTransform = Y),
                    e.roundLengths && (C = Math.floor(C));
                } else
                  (C = (i - (e.slidesPerView - 1) * y) / e.slidesPerView),
                    e.roundLengths && (C = Math.floor(C)),
                    o[L] &&
                      (this.isHorizontal()
                        ? (o[L].style.width = "".concat(C, "px"))
                        : (o[L].style.height = "".concat(C, "px")));
                o[L] && (o[L].swiperSlideSize = C),
                  u.push(C),
                  e.centeredSlides
                    ? ((T = T + C / 2 + E / 2 + y),
                      0 === E && 0 !== L && (T = T - i / 2 - y),
                      0 === L && (T = T - i / 2 - y),
                      Math.abs(T) < 0.001 && (T = 0),
                      e.roundLengths && (T = Math.floor(T)),
                      x % e.slidesPerGroup === 0 && d.push(T),
                      c.push(T))
                    : (e.roundLengths && (T = Math.floor(T)),
                      x % e.slidesPerGroup === 0 && d.push(T),
                      c.push(T),
                      (T = T + C + y)),
                  (this.virtualSize += C + y),
                  (E = C),
                  (x += 1);
              }
            }
            if (
              ((this.virtualSize = Math.max(this.virtualSize, i) + v),
              s &&
                a &&
                ("slide" === e.effect || "coverflow" === e.effect) &&
                t.css({
                  width: "".concat(this.virtualSize + e.spaceBetween, "px"),
                }),
              (m.flexbox && !e.setWrapperSize) ||
                (this.isHorizontal()
                  ? t.css({
                      width: "".concat(this.virtualSize + e.spaceBetween, "px"),
                    })
                  : t.css({
                      height: "".concat(
                        this.virtualSize + e.spaceBetween,
                        "px"
                      ),
                    })),
              e.slidesPerColumn > 1 &&
                ((this.virtualSize = (C + e.spaceBetween) * S),
                (this.virtualSize =
                  Math.ceil(this.virtualSize / e.slidesPerColumn) -
                  e.spaceBetween),
                this.isHorizontal()
                  ? t.css({
                      width: "".concat(this.virtualSize + e.spaceBetween, "px"),
                    })
                  : t.css({
                      height: "".concat(
                        this.virtualSize + e.spaceBetween,
                        "px"
                      ),
                    }),
                e.centeredSlides))
            ) {
              M = [];
              for (var J = 0; J < d.length; J += 1) {
                var Q = d[J];
                e.roundLengths && (Q = Math.floor(Q)),
                  d[J] < this.virtualSize + d[0] && M.push(Q);
              }
              d = M;
            }
            if (!e.centeredSlides) {
              M = [];
              for (var Z = 0; Z < d.length; Z += 1) {
                var ee = d[Z];
                e.roundLengths && (ee = Math.floor(ee)),
                  d[Z] <= this.virtualSize - i && M.push(ee);
              }
              (d = M),
                Math.floor(this.virtualSize - i) - Math.floor(d[d.length - 1]) >
                  1 && d.push(this.virtualSize - i);
            }
            if (
              (0 === d.length && (d = [0]),
              0 !== e.spaceBetween &&
                (this.isHorizontal()
                  ? s
                    ? o.css({ marginLeft: "".concat(y, "px") })
                    : o.css({ marginRight: "".concat(y, "px") })
                  : o.css({ marginBottom: "".concat(y, "px") })),
              e.centerInsufficientSlides)
            ) {
              var te = 0;
              if (
                (u.forEach(function (t) {
                  te += t + (e.spaceBetween ? e.spaceBetween : 0);
                }),
                (te -= e.spaceBetween) < i)
              ) {
                var ie = (i - te) / 2;
                d.forEach(function (e, t) {
                  d[t] = e - ie;
                }),
                  c.forEach(function (e, t) {
                    c[t] = e + ie;
                  });
              }
            }
            f.extend(this, {
              slides: o,
              snapGrid: d,
              slidesGrid: c,
              slidesSizesGrid: u,
            }),
              l !== r && this.emit("slidesLengthChange"),
              d.length !== b &&
                (this.params.watchOverflow && this.checkOverflow(),
                this.emit("snapGridLengthChange")),
              c.length !== w && this.emit("slidesGridLengthChange"),
              (e.watchSlidesProgress || e.watchSlidesVisibility) &&
                this.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            i = [],
            s = 0;
          if (
            ("number" === typeof e
              ? this.setTransition(e)
              : !0 === e && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView &&
              this.params.slidesPerView > 1)
          )
            for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
              var a = this.activeIndex + t;
              if (a > this.slides.length) break;
              i.push(this.slides.eq(a)[0]);
            }
          else i.push(this.slides.eq(this.activeIndex)[0]);
          for (t = 0; t < i.length; t += 1)
            if ("undefined" !== typeof i[t]) {
              var n = i[t].offsetHeight;
              s = n > s ? n : s;
            }
          s && this.$wrapperEl.css("height", "".concat(s, "px"));
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (this && this.translate) || 0,
            t = this,
            i = t.params,
            s = t.slides,
            a = t.rtlTranslate;
          if (0 !== s.length) {
            "undefined" === typeof s[0].swiperSlideOffset &&
              t.updateSlidesOffset();
            var n = -e;
            a && (n = e),
              s.removeClass(i.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var r = 0; r < s.length; r += 1) {
              var o = s[r],
                l =
                  (n +
                    (i.centeredSlides ? t.minTranslate() : 0) -
                    o.swiperSlideOffset) /
                  (o.swiperSlideSize + i.spaceBetween);
              if (i.watchSlidesVisibility) {
                var d = -(n - o.swiperSlideOffset),
                  h = d + t.slidesSizesGrid[r],
                  c =
                    (d >= 0 && d < t.size - 1) ||
                    (h > 1 && h <= t.size) ||
                    (d <= 0 && h >= t.size);
                c &&
                  (t.visibleSlides.push(o),
                  t.visibleSlidesIndexes.push(r),
                  s.eq(r).addClass(i.slideVisibleClass));
              }
              o.progress = a ? -l : l;
            }
            t.visibleSlides = u(t.visibleSlides);
          }
        },
        updateProgress: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (this && this.translate) || 0,
            t = this,
            i = t.params,
            s = t.maxTranslate() - t.minTranslate(),
            a = t.progress,
            n = t.isBeginning,
            r = t.isEnd,
            o = n,
            l = r;
          0 === s
            ? ((a = 0), (n = !0), (r = !0))
            : ((n = (a = (e - t.minTranslate()) / s) <= 0), (r = a >= 1)),
            f.extend(t, { progress: a, isBeginning: n, isEnd: r }),
            (i.watchSlidesProgress || i.watchSlidesVisibility) &&
              t.updateSlidesProgress(e),
            n && !o && t.emit("reachBeginning toEdge"),
            r && !l && t.emit("reachEnd toEdge"),
            ((o && !n) || (l && !r)) && t.emit("fromEdge"),
            t.emit("progress", a);
        },
        updateSlidesClasses: function () {
          var e,
            t = this.slides,
            i = this.params,
            s = this.$wrapperEl,
            a = this.activeIndex,
            n = this.realIndex,
            r = this.virtual && i.virtual.enabled;
          t.removeClass(
            ""
              .concat(i.slideActiveClass, " ")
              .concat(i.slideNextClass, " ")
              .concat(i.slidePrevClass, " ")
              .concat(i.slideDuplicateActiveClass, " ")
              .concat(i.slideDuplicateNextClass, " ")
              .concat(i.slideDuplicatePrevClass)
          ),
            (e = r
              ? this.$wrapperEl.find(
                  "."
                    .concat(i.slideClass, '[data-swiper-slide-index="')
                    .concat(a, '"]')
                )
              : t.eq(a)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "."
                        .concat(i.slideClass, ":not(.")
                        .concat(
                          i.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(n, '"]')
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      "."
                        .concat(i.slideClass, ".")
                        .concat(
                          i.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(n, '"]')
                    )
                    .addClass(i.slideDuplicateActiveClass));
          var o = e
            .nextAll(".".concat(i.slideClass))
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
          var l = e
            .prevAll(".".concat(i.slideClass))
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (o.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "."
                        .concat(i.slideClass, ":not(.")
                        .concat(
                          i.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(o.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      "."
                        .concat(i.slideClass, ".")
                        .concat(
                          i.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(o.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(i.slideDuplicateNextClass),
              l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "."
                        .concat(i.slideClass, ":not(.")
                        .concat(
                          i.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(l.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      "."
                        .concat(i.slideClass, ".")
                        .concat(
                          i.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(l.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
          var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            s = this.slidesGrid,
            a = this.snapGrid,
            n = this.params,
            r = this.activeIndex,
            o = this.realIndex,
            l = this.snapIndex,
            d = e;
          if ("undefined" === typeof d) {
            for (var h = 0; h < s.length; h += 1)
              "undefined" !== typeof s[h + 1]
                ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2
                  ? (d = h)
                  : i >= s[h] && i < s[h + 1] && (d = h + 1)
                : i >= s[h] && (d = h);
            n.normalizeSlideIndex &&
              (d < 0 || "undefined" === typeof d) &&
              (d = 0);
          }
          if (
            ((t =
              a.indexOf(i) >= 0
                ? a.indexOf(i)
                : Math.floor(d / n.slidesPerGroup)) >= a.length &&
              (t = a.length - 1),
            d !== r)
          ) {
            var c = parseInt(
              this.slides.eq(d).attr("data-swiper-slide-index") || d,
              10
            );
            f.extend(this, {
              snapIndex: t,
              realIndex: c,
              previousIndex: r,
              activeIndex: d,
            }),
              this.emit("activeIndexChange"),
              this.emit("snapIndexChange"),
              o !== c && this.emit("realIndexChange"),
              (this.initialized || this.runCallbacksOnInit) &&
                this.emit("slideChange");
          } else
            t !== l && ((this.snapIndex = t), this.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t = this.params,
            i = u(e.target).closest(".".concat(t.slideClass))[0],
            s = !1;
          if (i)
            for (var a = 0; a < this.slides.length; a += 1)
              this.slides[a] === i && (s = !0);
          if (!i || !s)
            return (
              (this.clickedSlide = void 0), void (this.clickedIndex = void 0)
            );
          (this.clickedSlide = i),
            this.virtual && this.params.virtual.enabled
              ? (this.clickedIndex = parseInt(
                  u(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (this.clickedIndex = u(i).index()),
            t.slideToClickedSlide &&
              void 0 !== this.clickedIndex &&
              this.clickedIndex !== this.activeIndex &&
              this.slideToClickedSlide();
        },
      };
      var y = {
        getTranslate: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.isHorizontal()
                ? "x"
                : "y",
            t = this,
            i = t.params,
            s = t.rtlTranslate,
            a = t.translate,
            n = t.$wrapperEl;
          if (i.virtualTranslate) return s ? -a : a;
          var r = f.getTranslate(n[0], e);
          return s && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          var i = this.rtlTranslate,
            s = this.params,
            a = this.$wrapperEl,
            n = this.progress,
            r = 0,
            o = 0;
          this.isHorizontal() ? (r = i ? -e : e) : (o = e),
            s.roundLengths && ((r = Math.floor(r)), (o = Math.floor(o))),
            s.virtualTranslate ||
              (m.transforms3d
                ? a.transform(
                    "translate3d("
                      .concat(r, "px, ")
                      .concat(o, "px, ")
                      .concat(0, "px)")
                  )
                : a.transform("translate(".concat(r, "px, ").concat(o, "px)"))),
            (this.previousTranslate = this.translate),
            (this.translate = this.isHorizontal() ? r : o);
          var l = this.maxTranslate() - this.minTranslate();
          (0 === l ? 0 : (e - this.minTranslate()) / l) !== n &&
            this.updateProgress(e),
            this.emit("setTranslate", this.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
      };
      var T = {
        setTransition: function (e, t) {
          this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
        },
        transitionStart: function () {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0,
            i = this,
            s = i.activeIndex,
            a = i.params,
            n = i.previousIndex;
          a.autoHeight && i.updateAutoHeight();
          var r = t;
          if (
            (r || (r = s > n ? "next" : s < n ? "prev" : "reset"),
            i.emit("transitionStart"),
            e && s !== n)
          ) {
            if ("reset" === r) return void i.emit("slideResetTransitionStart");
            i.emit("slideChangeTransitionStart"),
              "next" === r
                ? i.emit("slideNextTransitionStart")
                : i.emit("slidePrevTransitionStart");
          }
        },
        transitionEnd: function () {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0,
            i = this,
            s = i.activeIndex,
            a = i.previousIndex;
          (i.animating = !1), i.setTransition(0);
          var n = t;
          if (
            (n || (n = s > a ? "next" : s < a ? "prev" : "reset"),
            i.emit("transitionEnd"),
            e && s !== a)
          ) {
            if ("reset" === n) return void i.emit("slideResetTransitionEnd");
            i.emit("slideChangeTransitionEnd"),
              "next" === n
                ? i.emit("slideNextTransitionEnd")
                : i.emit("slidePrevTransitionEnd");
          }
        },
      };
      var E = {
        slideTo: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.params.speed,
            i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            s = arguments.length > 3 ? arguments[3] : void 0,
            a = this,
            n = e;
          n < 0 && (n = 0);
          var r = a.params,
            o = a.snapGrid,
            l = a.slidesGrid,
            d = a.previousIndex,
            h = a.activeIndex,
            c = a.rtlTranslate;
          if (a.animating && r.preventInteractionOnTransition) return !1;
          var u = Math.floor(n / r.slidesPerGroup);
          u >= o.length && (u = o.length - 1),
            (h || r.initialSlide || 0) === (d || 0) &&
              i &&
              a.emit("beforeSlideChangeStart");
          var p,
            v = -o[u];
          if ((a.updateProgress(v), r.normalizeSlideIndex))
            for (var f = 0; f < l.length; f += 1)
              -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (n = f);
          if (a.initialized && n !== h) {
            if (!a.allowSlideNext && v < a.translate && v < a.minTranslate())
              return !1;
            if (
              !a.allowSlidePrev &&
              v > a.translate &&
              v > a.maxTranslate() &&
              (h || 0) !== n
            )
              return !1;
          }
          return (
            (p = n > h ? "next" : n < h ? "prev" : "reset"),
            (c && -v === a.translate) || (!c && v === a.translate)
              ? (a.updateActiveIndex(n),
                r.autoHeight && a.updateAutoHeight(),
                a.updateSlidesClasses(),
                "slide" !== r.effect && a.setTranslate(v),
                "reset" !== p &&
                  (a.transitionStart(i, p), a.transitionEnd(i, p)),
                !1)
              : (0 !== t && m.transition
                  ? (a.setTransition(t),
                    a.setTranslate(v),
                    a.updateActiveIndex(n),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, s),
                    a.transitionStart(i, p),
                    a.animating ||
                      ((a.animating = !0),
                      a.onSlideToWrapperTransitionEnd ||
                        (a.onSlideToWrapperTransitionEnd = function (e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              a.onSlideToWrapperTransitionEnd
                            ),
                            a.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              a.onSlideToWrapperTransitionEnd
                            ),
                            (a.onSlideToWrapperTransitionEnd = null),
                            delete a.onSlideToWrapperTransitionEnd,
                            a.transitionEnd(i, p));
                        }),
                      a.$wrapperEl[0].addEventListener(
                        "transitionend",
                        a.onSlideToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        a.onSlideToWrapperTransitionEnd
                      )))
                  : (a.setTransition(0),
                    a.setTranslate(v),
                    a.updateActiveIndex(n),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, s),
                    a.transitionStart(i, p),
                    a.transitionEnd(i, p)),
                !0)
          );
        },
        slideToLoop: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.params.speed,
            i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            s = arguments.length > 3 ? arguments[3] : void 0,
            a = this,
            n = e;
          return a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, i, s);
        },
        slideNext: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0,
            s = this,
            a = s.params,
            n = s.animating;
          return a.loop
            ? !n &&
                (s.loopFix(),
                (s._clientLeft = s.$wrapperEl[0].clientLeft),
                s.slideTo(s.activeIndex + a.slidesPerGroup, e, t, i))
            : s.slideTo(s.activeIndex + a.slidesPerGroup, e, t, i);
        },
        slidePrev: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0,
            s = this,
            a = s.params,
            n = s.animating,
            r = s.snapGrid,
            o = s.slidesGrid,
            l = s.rtlTranslate;
          if (a.loop) {
            if (n) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          var d = l ? s.translate : -s.translate;
          function h(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var c,
            u = h(d),
            p = r.map(function (e) {
              return h(e);
            }),
            v =
              (o.map(function (e) {
                return h(e);
              }),
              r[p.indexOf(u)],
              r[p.indexOf(u) - 1]);
          return (
            "undefined" !== typeof v &&
              (c = o.indexOf(v)) < 0 &&
              (c = s.activeIndex - 1),
            s.slideTo(c, e, t, i)
          );
        },
        slideReset: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0,
            s = this;
          return s.slideTo(s.activeIndex, e, t, i);
        },
        slideToClosest: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0,
            s = this,
            a = s.activeIndex,
            n = Math.floor(a / s.params.slidesPerGroup);
          if (n < s.snapGrid.length - 1) {
            var r = s.rtlTranslate ? s.translate : -s.translate,
              o = s.snapGrid[n],
              l = s.snapGrid[n + 1];
            r - o > (l - o) / 2 && (a = s.params.slidesPerGroup);
          }
          return s.slideTo(a, e, t, i);
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            i = t.params,
            s = t.$wrapperEl,
            a =
              "auto" === i.slidesPerView
                ? t.slidesPerViewDynamic()
                : i.slidesPerView,
            n = t.clickedIndex;
          if (i.loop) {
            if (t.animating) return;
            (e = parseInt(
              u(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              i.centeredSlides
                ? n < t.loopedSlides - a / 2 ||
                  n > t.slides.length - t.loopedSlides + a / 2
                  ? (t.loopFix(),
                    (n = s
                      .children(
                        "."
                          .concat(i.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(i.slideDuplicateClass, ")")
                      )
                      .eq(0)
                      .index()),
                    f.nextTick(function () {
                      t.slideTo(n);
                    }))
                  : t.slideTo(n)
                : n > t.slides.length - a
                ? (t.loopFix(),
                  (n = s
                    .children(
                      "."
                        .concat(i.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]:not(.')
                        .concat(i.slideDuplicateClass, ")")
                    )
                    .eq(0)
                    .index()),
                  f.nextTick(function () {
                    t.slideTo(n);
                  }))
                : t.slideTo(n);
          } else t.slideTo(n);
        },
      };
      var x = {
        loopCreate: function () {
          var e = this,
            t = e.params,
            i = e.$wrapperEl;
          i.children(
            ".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)
          ).remove();
          var s = i.children(".".concat(t.slideClass));
          if (t.loopFillGroupWithBlank) {
            var a = t.slidesPerGroup - (s.length % t.slidesPerGroup);
            if (a !== t.slidesPerGroup) {
              for (var n = 0; n < a; n += 1) {
                var r = u(d.createElement("div")).addClass(
                  "".concat(t.slideClass, " ").concat(t.slideBlankClass)
                );
                i.append(r);
              }
              s = i.children(".".concat(t.slideClass));
            }
          }
          "auto" !== t.slidesPerView ||
            t.loopedSlides ||
            (t.loopedSlides = s.length),
            (e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10)),
            (e.loopedSlides += t.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length);
          var o = [],
            l = [];
          s.each(function (t, i) {
            var a = u(i);
            t < e.loopedSlides && l.push(i),
              t < s.length && t >= s.length - e.loopedSlides && o.push(i),
              a.attr("data-swiper-slide-index", t);
          });
          for (var h = 0; h < l.length; h += 1)
            i.append(u(l[h].cloneNode(!0)).addClass(t.slideDuplicateClass));
          for (var c = o.length - 1; c >= 0; c -= 1)
            i.prepend(u(o[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
        },
        loopFix: function () {
          var e,
            t = this.params,
            i = this.activeIndex,
            s = this.slides,
            a = this.loopedSlides,
            n = this.allowSlidePrev,
            r = this.allowSlideNext,
            o = this.snapGrid,
            l = this.rtlTranslate;
          (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
          var d = -o[i] - this.getTranslate();
          if (i < a)
            (e = s.length - 3 * a + i),
              (e += a),
              this.slideTo(e, 0, !1, !0) &&
                0 !== d &&
                this.setTranslate((l ? -this.translate : this.translate) - d);
          else if (
            ("auto" === t.slidesPerView && i >= 2 * a) ||
            i >= s.length - a
          ) {
            (e = -s.length + i + a),
              (e += a),
              this.slideTo(e, 0, !1, !0) &&
                0 !== d &&
                this.setTranslate((l ? -this.translate : this.translate) - d);
          }
          (this.allowSlidePrev = n), (this.allowSlideNext = r);
        },
        loopDestroy: function () {
          var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
          e
            .children(
              "."
                .concat(t.slideClass, ".")
                .concat(t.slideDuplicateClass, ",.")
                .concat(t.slideClass, ".")
                .concat(t.slideBlankClass)
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      };
      var S = {
        setGrabCursor: function (e) {
          if (
            !(
              m.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked)
            )
          ) {
            var t = this.el;
            (t.style.cursor = "move"),
              (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (t.style.cursor = e ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function () {
          m.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            (this.el.style.cursor = "");
        },
      };
      var C = {
          appendSlide: function (e) {
            var t = this.$wrapperEl,
              i = this.params;
            if (
              (i.loop && this.loopDestroy(),
              "object" === typeof e && "length" in e)
            )
              for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
            else t.append(e);
            i.loop && this.loopCreate(),
              (i.observer && m.observer) || this.update();
          },
          prependSlide: function (e) {
            var t = this.params,
              i = this.$wrapperEl,
              s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" === typeof e && "length" in e) {
              for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
              a = s + e.length;
            } else i.prepend(e);
            t.loop && this.loopCreate(),
              (t.observer && m.observer) || this.update(),
              this.slideTo(a, 0, !1);
          },
          addSlide: function (e, t) {
            var i = this.$wrapperEl,
              s = this.params,
              a = this.activeIndex;
            s.loop &&
              ((a -= this.loopedSlides),
              this.loopDestroy(),
              (this.slides = i.children(".".concat(s.slideClass))));
            var n = this.slides.length;
            if (e <= 0) this.prependSlide(t);
            else if (e >= n) this.appendSlide(t);
            else {
              for (
                var r = a > e ? a + 1 : a, o = [], l = n - 1;
                l >= e;
                l -= 1
              ) {
                var d = this.slides.eq(l);
                d.remove(), o.unshift(d);
              }
              if ("object" === typeof t && "length" in t) {
                for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
                r = a > e ? a + t.length : a;
              } else i.append(t);
              for (var c = 0; c < o.length; c += 1) i.append(o[c]);
              s.loop && this.loopCreate(),
                (s.observer && m.observer) || this.update(),
                s.loop
                  ? this.slideTo(r + this.loopedSlides, 0, !1)
                  : this.slideTo(r, 0, !1);
            }
          },
          removeSlide: function (e) {
            var t = this.params,
              i = this.$wrapperEl,
              s = this.activeIndex;
            t.loop &&
              ((s -= this.loopedSlides),
              this.loopDestroy(),
              (this.slides = i.children(".".concat(t.slideClass))));
            var a,
              n = s;
            if ("object" === typeof e && "length" in e) {
              for (var r = 0; r < e.length; r += 1)
                (a = e[r]),
                  this.slides[a] && this.slides.eq(a).remove(),
                  a < n && (n -= 1);
              n = Math.max(n, 0);
            } else
              (a = e),
                this.slides[a] && this.slides.eq(a).remove(),
                a < n && (n -= 1),
                (n = Math.max(n, 0));
            t.loop && this.loopCreate(),
              (t.observer && m.observer) || this.update(),
              t.loop
                ? this.slideTo(n + this.loopedSlides, 0, !1)
                : this.slideTo(n, 0, !1);
          },
          removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
          },
        },
        M = (function () {
          var e = h.navigator.userAgent,
            t = {
              ios: !1,
              android: !1,
              androidChrome: !1,
              desktop: !1,
              windows: !1,
              iphone: !1,
              ipod: !1,
              ipad: !1,
              cordova: h.cordova || h.phonegap,
              phonegap: h.cordova || h.phonegap,
            },
            i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
            s = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            a = e.match(/(iPad).*OS\s([\d_]+)/),
            n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            r = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
          if (
            (i && ((t.os = "windows"), (t.osVersion = i[2]), (t.windows = !0)),
            s &&
              !i &&
              ((t.os = "android"),
              (t.osVersion = s[2]),
              (t.android = !0),
              (t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0)),
            (a || r || n) && ((t.os = "ios"), (t.ios = !0)),
            r &&
              !n &&
              ((t.osVersion = r[2].replace(/_/g, ".")), (t.iphone = !0)),
            a && ((t.osVersion = a[2].replace(/_/g, ".")), (t.ipad = !0)),
            n &&
              ((t.osVersion = n[3] ? n[3].replace(/_/g, ".") : null),
              (t.iphone = !0)),
            t.ios &&
              t.osVersion &&
              e.indexOf("Version/") >= 0 &&
              "10" === t.osVersion.split(".")[0] &&
              (t.osVersion = e
                .toLowerCase()
                .split("version/")[1]
                .split(" ")[0]),
            (t.desktop = !(t.os || t.android || t.webView)),
            (t.webView =
              (r || a || n) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
            t.os && "ios" === t.os)
          ) {
            var o = t.osVersion.split("."),
              l = d.querySelector('meta[name="viewport"]');
            t.minimalUi =
              !t.webView &&
              (n || r) &&
              (1 * o[0] === 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) &&
              l &&
              l.getAttribute("content").indexOf("minimal-ui") >= 0;
          }
          return (t.pixelRatio = h.devicePixelRatio || 1), t;
        })();
      function P(e) {
        var t = this.touchEventsData,
          i = this.params,
          s = this.touches;
        if (!this.animating || !i.preventInteractionOnTransition) {
          var a = e;
          if (
            (a.originalEvent && (a = a.originalEvent),
            (t.isTouchEvent = "touchstart" === a.type),
            (t.isTouchEvent || !("which" in a) || 3 !== a.which) &&
              !(!t.isTouchEvent && "button" in a && a.button > 0) &&
              (!t.isTouched || !t.isMoved))
          )
            if (
              i.noSwiping &&
              u(a.target).closest(
                i.noSwipingSelector
                  ? i.noSwipingSelector
                  : ".".concat(i.noSwipingClass)
              )[0]
            )
              this.allowClick = !0;
            else if (!i.swipeHandler || u(a).closest(i.swipeHandler)[0]) {
              (s.currentX =
                "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX),
                (s.currentY =
                  "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY);
              var n = s.currentX,
                r = s.currentY,
                o = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                l = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
              if (!o || !(n <= l || n >= h.screen.width - l)) {
                if (
                  (f.extend(t, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                  }),
                  (s.startX = n),
                  (s.startY = r),
                  (t.touchStartTime = f.now()),
                  (this.allowClick = !0),
                  this.updateSize(),
                  (this.swipeDirection = void 0),
                  i.threshold > 0 && (t.allowThresholdMove = !1),
                  "touchstart" !== a.type)
                ) {
                  var c = !0;
                  u(a.target).is(t.formElements) && (c = !1),
                    d.activeElement &&
                      u(d.activeElement).is(t.formElements) &&
                      d.activeElement !== a.target &&
                      d.activeElement.blur();
                  var p =
                    c && this.allowTouchMove && i.touchStartPreventDefault;
                  (i.touchStartForcePreventDefault || p) && a.preventDefault();
                }
                this.emit("touchStart", a);
              }
            }
        }
      }
      function k(e) {
        var t = this.touchEventsData,
          i = this.params,
          s = this.touches,
          a = this.rtlTranslate,
          n = e;
        if ((n.originalEvent && (n = n.originalEvent), t.isTouched)) {
          if (!t.isTouchEvent || "mousemove" !== n.type) {
            var r = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
              o = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
            if (n.preventedByNestedSwiper)
              return (s.startX = r), void (s.startY = o);
            if (!this.allowTouchMove)
              return (
                (this.allowClick = !1),
                void (
                  t.isTouched &&
                  (f.extend(s, {
                    startX: r,
                    startY: o,
                    currentX: r,
                    currentY: o,
                  }),
                  (t.touchStartTime = f.now()))
                )
              );
            if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
              if (this.isVertical()) {
                if (
                  (o < s.startY && this.translate <= this.maxTranslate()) ||
                  (o > s.startY && this.translate >= this.minTranslate())
                )
                  return (t.isTouched = !1), void (t.isMoved = !1);
              } else if (
                (r < s.startX && this.translate <= this.maxTranslate()) ||
                (r > s.startX && this.translate >= this.minTranslate())
              )
                return;
            if (
              t.isTouchEvent &&
              d.activeElement &&
              n.target === d.activeElement &&
              u(n.target).is(t.formElements)
            )
              return (t.isMoved = !0), void (this.allowClick = !1);
            if (
              (t.allowTouchCallbacks && this.emit("touchMove", n),
              !(n.targetTouches && n.targetTouches.length > 1))
            ) {
              (s.currentX = r), (s.currentY = o);
              var l = s.currentX - s.startX,
                h = s.currentY - s.startY;
              if (
                !(
                  this.params.threshold &&
                  Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2)) <
                    this.params.threshold
                )
              ) {
                var c;
                if ("undefined" === typeof t.isScrolling)
                  (this.isHorizontal() && s.currentY === s.startY) ||
                  (this.isVertical() && s.currentX === s.startX)
                    ? (t.isScrolling = !1)
                    : l * l + h * h >= 25 &&
                      ((c =
                        (180 * Math.atan2(Math.abs(h), Math.abs(l))) / Math.PI),
                      (t.isScrolling = this.isHorizontal()
                        ? c > i.touchAngle
                        : 90 - c > i.touchAngle));
                if (
                  (t.isScrolling && this.emit("touchMoveOpposite", n),
                  "undefined" === typeof t.startMoving &&
                    ((s.currentX === s.startX && s.currentY === s.startY) ||
                      (t.startMoving = !0)),
                  t.isScrolling)
                )
                  t.isTouched = !1;
                else if (t.startMoving) {
                  (this.allowClick = !1),
                    n.preventDefault(),
                    i.touchMoveStopPropagation &&
                      !i.nested &&
                      n.stopPropagation(),
                    t.isMoved ||
                      (i.loop && this.loopFix(),
                      (t.startTranslate = this.getTranslate()),
                      this.setTransition(0),
                      this.animating &&
                        this.$wrapperEl.trigger(
                          "webkitTransitionEnd transitionend"
                        ),
                      (t.allowMomentumBounce = !1),
                      !i.grabCursor ||
                        (!0 !== this.allowSlideNext &&
                          !0 !== this.allowSlidePrev) ||
                        this.setGrabCursor(!0),
                      this.emit("sliderFirstMove", n)),
                    this.emit("sliderMove", n),
                    (t.isMoved = !0);
                  var p = this.isHorizontal() ? l : h;
                  (s.diff = p),
                    (p *= i.touchRatio),
                    a && (p = -p),
                    (this.swipeDirection = p > 0 ? "prev" : "next"),
                    (t.currentTranslate = p + t.startTranslate);
                  var v = !0,
                    m = i.resistanceRatio;
                  if (
                    (i.touchReleaseOnEdges && (m = 0),
                    p > 0 && t.currentTranslate > this.minTranslate()
                      ? ((v = !1),
                        i.resistance &&
                          (t.currentTranslate =
                            this.minTranslate() -
                            1 +
                            Math.pow(
                              -this.minTranslate() + t.startTranslate + p,
                              m
                            )))
                      : p < 0 &&
                        t.currentTranslate < this.maxTranslate() &&
                        ((v = !1),
                        i.resistance &&
                          (t.currentTranslate =
                            this.maxTranslate() +
                            1 -
                            Math.pow(
                              this.maxTranslate() - t.startTranslate - p,
                              m
                            ))),
                    v && (n.preventedByNestedSwiper = !0),
                    !this.allowSlideNext &&
                      "next" === this.swipeDirection &&
                      t.currentTranslate < t.startTranslate &&
                      (t.currentTranslate = t.startTranslate),
                    !this.allowSlidePrev &&
                      "prev" === this.swipeDirection &&
                      t.currentTranslate > t.startTranslate &&
                      (t.currentTranslate = t.startTranslate),
                    i.threshold > 0)
                  ) {
                    if (!(Math.abs(p) > i.threshold || t.allowThresholdMove))
                      return void (t.currentTranslate = t.startTranslate);
                    if (!t.allowThresholdMove)
                      return (
                        (t.allowThresholdMove = !0),
                        (s.startX = s.currentX),
                        (s.startY = s.currentY),
                        (t.currentTranslate = t.startTranslate),
                        void (s.diff = this.isHorizontal()
                          ? s.currentX - s.startX
                          : s.currentY - s.startY)
                      );
                  }
                  i.followFinger &&
                    ((i.freeMode ||
                      i.watchSlidesProgress ||
                      i.watchSlidesVisibility) &&
                      (this.updateActiveIndex(), this.updateSlidesClasses()),
                    i.freeMode &&
                      (0 === t.velocities.length &&
                        t.velocities.push({
                          position:
                            s[this.isHorizontal() ? "startX" : "startY"],
                          time: t.touchStartTime,
                        }),
                      t.velocities.push({
                        position:
                          s[this.isHorizontal() ? "currentX" : "currentY"],
                        time: f.now(),
                      })),
                    this.updateProgress(t.currentTranslate),
                    this.setTranslate(t.currentTranslate));
                }
              }
            }
          }
        } else
          t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", n);
      }
      function z(e) {
        var t = this,
          i = t.touchEventsData,
          s = t.params,
          a = t.touches,
          n = t.rtlTranslate,
          r = t.$wrapperEl,
          o = t.slidesGrid,
          l = t.snapGrid,
          d = e;
        if (
          (d.originalEvent && (d = d.originalEvent),
          i.allowTouchCallbacks && t.emit("touchEnd", d),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        s.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        var h,
          c = f.now(),
          u = c - i.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(d),
            t.emit("tap", d),
            u < 300 &&
              c - i.lastClickTime > 300 &&
              (i.clickTimeout && clearTimeout(i.clickTimeout),
              (i.clickTimeout = f.nextTick(function () {
                t && !t.destroyed && t.emit("click", d);
              }, 300))),
            u < 300 &&
              c - i.lastClickTime < 300 &&
              (i.clickTimeout && clearTimeout(i.clickTimeout),
              t.emit("doubleTap", d))),
          (i.lastClickTime = f.now()),
          f.nextTick(function () {
            t.destroyed || (t.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !t.swipeDirection ||
            0 === a.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (
            (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
          );
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (h = s.followFinger
            ? n
              ? t.translate
              : -t.translate
            : -i.currentTranslate),
          s.freeMode)
        ) {
          if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (h > -t.maxTranslate())
            return void (t.slides.length < l.length
              ? t.slideTo(l.length - 1)
              : t.slideTo(t.slides.length - 1));
          if (s.freeModeMomentum) {
            if (i.velocities.length > 1) {
              var p = i.velocities.pop(),
                v = i.velocities.pop(),
                m = p.position - v.position,
                g = p.time - v.time;
              (t.velocity = m / g),
                (t.velocity /= 2),
                Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                  (t.velocity = 0),
                (g > 150 || f.now() - p.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;
            (t.velocity *= s.freeModeMomentumVelocityRatio),
              (i.velocities.length = 0);
            var b = 1e3 * s.freeModeMomentumRatio,
              w = t.velocity * b,
              y = t.translate + w;
            n && (y = -y);
            var T,
              E,
              x = !1,
              S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
            if (y < t.maxTranslate())
              s.freeModeMomentumBounce
                ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                  (T = t.maxTranslate()),
                  (x = !0),
                  (i.allowMomentumBounce = !0))
                : (y = t.maxTranslate()),
                s.loop && s.centeredSlides && (E = !0);
            else if (y > t.minTranslate())
              s.freeModeMomentumBounce
                ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                  (T = t.minTranslate()),
                  (x = !0),
                  (i.allowMomentumBounce = !0))
                : (y = t.minTranslate()),
                s.loop && s.centeredSlides && (E = !0);
            else if (s.freeModeSticky) {
              for (var C, M = 0; M < l.length; M += 1)
                if (l[M] > -y) {
                  C = M;
                  break;
                }
              y = -(y =
                Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) ||
                "next" === t.swipeDirection
                  ? l[C]
                  : l[C - 1]);
            }
            if (
              (E &&
                t.once("transitionEnd", function () {
                  t.loopFix();
                }),
              0 !== t.velocity)
            )
              b = n
                ? Math.abs((-y - t.translate) / t.velocity)
                : Math.abs((y - t.translate) / t.velocity);
            else if (s.freeModeSticky) return void t.slideToClosest();
            s.freeModeMomentumBounce && x
              ? (t.updateProgress(T),
                t.setTransition(b),
                t.setTranslate(y),
                t.transitionStart(!0, t.swipeDirection),
                (t.animating = !0),
                r.transitionEnd(function () {
                  t &&
                    !t.destroyed &&
                    i.allowMomentumBounce &&
                    (t.emit("momentumBounce"),
                    t.setTransition(s.speed),
                    t.setTranslate(T),
                    r.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd();
                    }));
                }))
              : t.velocity
              ? (t.updateProgress(y),
                t.setTransition(b),
                t.setTranslate(y),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  r.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  })))
              : t.updateProgress(y),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          } else if (s.freeModeSticky) return void t.slideToClosest();
          (!s.freeModeMomentum || u >= s.longSwipesMs) &&
            (t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses());
        } else {
          for (
            var P = 0, k = t.slidesSizesGrid[0], z = 0;
            z < o.length;
            z += s.slidesPerGroup
          )
            "undefined" !== typeof o[z + s.slidesPerGroup]
              ? h >= o[z] &&
                h < o[z + s.slidesPerGroup] &&
                ((P = z), (k = o[z + s.slidesPerGroup] - o[z]))
              : h >= o[z] && ((P = z), (k = o[o.length - 1] - o[o.length - 2]));
          var L = (h - o[P]) / k;
          if (u > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
              (L >= s.longSwipesRatio
                ? t.slideTo(P + s.slidesPerGroup)
                : t.slideTo(P)),
              "prev" === t.swipeDirection &&
                (L > 1 - s.longSwipesRatio
                  ? t.slideTo(P + s.slidesPerGroup)
                  : t.slideTo(P));
          } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(P + s.slidesPerGroup),
              "prev" === t.swipeDirection && t.slideTo(P);
          }
        }
      }
      function L() {
        var e = this.params,
          t = this.el;
        if (!t || 0 !== t.offsetWidth) {
          e.breakpoints && this.setBreakpoint();
          var i = this.allowSlideNext,
            s = this.allowSlidePrev,
            a = this.snapGrid;
          if (
            ((this.allowSlideNext = !0),
            (this.allowSlidePrev = !0),
            this.updateSize(),
            this.updateSlides(),
            e.freeMode)
          ) {
            var n = Math.min(
              Math.max(this.translate, this.maxTranslate()),
              this.minTranslate()
            );
            this.setTranslate(n),
              this.updateActiveIndex(),
              this.updateSlidesClasses(),
              e.autoHeight && this.updateAutoHeight();
          } else
            this.updateSlidesClasses(),
              ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
              this.isEnd &&
              !this.params.centeredSlides
                ? this.slideTo(this.slides.length - 1, 0, !1, !0)
                : this.slideTo(this.activeIndex, 0, !1, !0);
          this.autoplay &&
            this.autoplay.running &&
            this.autoplay.paused &&
            this.autoplay.run(),
            (this.allowSlidePrev = s),
            (this.allowSlideNext = i),
            this.params.watchOverflow &&
              a !== this.snapGrid &&
              this.checkOverflow();
        }
      }
      function $(e) {
        this.allowClick ||
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      var D = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          preventInteractionOnTransition: !1,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsInverse: !1,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          centeredSlides: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !1,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !0,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-container-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
        },
        O = {
          update: w,
          translate: y,
          transition: T,
          slide: E,
          loop: x,
          grabCursor: S,
          manipulation: C,
          events: {
            attachEvents: function () {
              var e = this.params,
                t = this.touchEvents,
                i = this.el,
                s = this.wrapperEl;
              (this.onTouchStart = P.bind(this)),
                (this.onTouchMove = k.bind(this)),
                (this.onTouchEnd = z.bind(this)),
                (this.onClick = $.bind(this));
              var a = "container" === e.touchEventsTarget ? i : s,
                n = !!e.nested;
              if (m.touch || (!m.pointerEvents && !m.prefixedPointerEvents)) {
                if (m.touch) {
                  var r = !(
                    "touchstart" !== t.start ||
                    !m.passiveListener ||
                    !e.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  a.addEventListener(t.start, this.onTouchStart, r),
                    a.addEventListener(
                      t.move,
                      this.onTouchMove,
                      m.passiveListener ? { passive: !1, capture: n } : n
                    ),
                    a.addEventListener(t.end, this.onTouchEnd, r);
                }
                ((e.simulateTouch && !M.ios && !M.android) ||
                  (e.simulateTouch && !m.touch && M.ios)) &&
                  (a.addEventListener("mousedown", this.onTouchStart, !1),
                  d.addEventListener("mousemove", this.onTouchMove, n),
                  d.addEventListener("mouseup", this.onTouchEnd, !1));
              } else
                a.addEventListener(t.start, this.onTouchStart, !1),
                  d.addEventListener(t.move, this.onTouchMove, n),
                  d.addEventListener(t.end, this.onTouchEnd, !1);
              (e.preventClicks || e.preventClicksPropagation) &&
                a.addEventListener("click", this.onClick, !0),
                this.on(
                  M.ios || M.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  L,
                  !0
                );
            },
            detachEvents: function () {
              var e = this.params,
                t = this.touchEvents,
                i = this.el,
                s = this.wrapperEl,
                a = "container" === e.touchEventsTarget ? i : s,
                n = !!e.nested;
              if (m.touch || (!m.pointerEvents && !m.prefixedPointerEvents)) {
                if (m.touch) {
                  var r = !(
                    "onTouchStart" !== t.start ||
                    !m.passiveListener ||
                    !e.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  a.removeEventListener(t.start, this.onTouchStart, r),
                    a.removeEventListener(t.move, this.onTouchMove, n),
                    a.removeEventListener(t.end, this.onTouchEnd, r);
                }
                ((e.simulateTouch && !M.ios && !M.android) ||
                  (e.simulateTouch && !m.touch && M.ios)) &&
                  (a.removeEventListener("mousedown", this.onTouchStart, !1),
                  d.removeEventListener("mousemove", this.onTouchMove, n),
                  d.removeEventListener("mouseup", this.onTouchEnd, !1));
              } else
                a.removeEventListener(t.start, this.onTouchStart, !1),
                  d.removeEventListener(t.move, this.onTouchMove, n),
                  d.removeEventListener(t.end, this.onTouchEnd, !1);
              (e.preventClicks || e.preventClicksPropagation) &&
                a.removeEventListener("click", this.onClick, !0),
                this.off(
                  M.ios || M.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  L
                );
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              var e = this.activeIndex,
                t = this.initialized,
                i = this.loopedSlides,
                s = void 0 === i ? 0 : i,
                a = this.params,
                n = a.breakpoints;
              if (n && (!n || 0 !== Object.keys(n).length)) {
                var r = this.getBreakpoint(n);
                if (r && this.currentBreakpoint !== r) {
                  var o = r in n ? n[r] : void 0;
                  o &&
                    ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(
                      function (e) {
                        var t = o[e];
                        "undefined" !== typeof t &&
                          (o[e] =
                            "slidesPerView" !== e ||
                            ("AUTO" !== t && "auto" !== t)
                              ? "slidesPerView" === e
                                ? parseFloat(t)
                                : parseInt(t, 10)
                              : "auto");
                      }
                    );
                  var l = o || this.originalParams,
                    d = l.direction && l.direction !== a.direction,
                    h = a.loop && (l.slidesPerView !== a.slidesPerView || d);
                  d && t && this.changeDirection(),
                    f.extend(this.params, l),
                    f.extend(this, {
                      allowTouchMove: this.params.allowTouchMove,
                      allowSlideNext: this.params.allowSlideNext,
                      allowSlidePrev: this.params.allowSlidePrev,
                    }),
                    (this.currentBreakpoint = r),
                    h &&
                      t &&
                      (this.loopDestroy(),
                      this.loopCreate(),
                      this.updateSlides(),
                      this.slideTo(e - s + this.loopedSlides, 0, !1)),
                    this.emit("breakpoint", l);
                }
              }
            },
            getBreakpoint: function (e) {
              if (e) {
                var t = !1,
                  i = [];
                Object.keys(e).forEach(function (e) {
                  i.push(e);
                }),
                  i.sort(function (e, t) {
                    return parseInt(e, 10) - parseInt(t, 10);
                  });
                for (var s = 0; s < i.length; s += 1) {
                  var a = i[s];
                  this.params.breakpointsInverse
                    ? a <= h.innerWidth && (t = a)
                    : a >= h.innerWidth && !t && (t = a);
                }
                return t || "max";
              }
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              var e = this.isLocked;
              (this.isLocked = 1 === this.snapGrid.length),
                (this.allowSlideNext = !this.isLocked),
                (this.allowSlidePrev = !this.isLocked),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock"),
                e &&
                  e !== this.isLocked &&
                  ((this.isEnd = !1), this.navigation.update());
            },
          },
          classes: {
            addClasses: function () {
              var e = this.classNames,
                t = this.params,
                i = this.rtl,
                s = this.$el,
                a = [];
              a.push("initialized"),
                a.push(t.direction),
                t.freeMode && a.push("free-mode"),
                m.flexbox || a.push("no-flexbox"),
                t.autoHeight && a.push("autoheight"),
                i && a.push("rtl"),
                t.slidesPerColumn > 1 && a.push("multirow"),
                M.android && a.push("android"),
                M.ios && a.push("ios"),
                (g.isIE || g.isEdge) &&
                  (m.pointerEvents || m.prefixedPointerEvents) &&
                  a.push("wp8-".concat(t.direction)),
                a.forEach(function (i) {
                  e.push(t.containerModifierClass + i);
                }),
                s.addClass(e.join(" "));
            },
            removeClasses: function () {
              var e = this.$el,
                t = this.classNames;
              e.removeClass(t.join(" "));
            },
          },
          images: {
            loadImage: function (e, t, i, s, a, n) {
              var r;
              function o() {
                n && n();
              }
              e.complete && a
                ? o()
                : t
                ? (((r = new h.Image()).onload = o),
                  (r.onerror = o),
                  s && (r.sizes = s),
                  i && (r.srcset = i),
                  t && (r.src = t))
                : o();
            },
            preloadImages: function () {
              var e = this;
              function t() {
                "undefined" !== typeof e &&
                  null !== e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                var s = e.imagesToLoad[i];
                e.loadImage(
                  s,
                  s.currentSrc || s.getAttribute("src"),
                  s.srcset || s.getAttribute("srcset"),
                  s.sizes || s.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        I = {},
        A = (function (e) {
          Object(n.a)(i, e);
          var t = Object(r.a)(i);
          function i() {
            var e, n, r;
            Object(l.a)(this, i);
            for (var o = arguments.length, d = new Array(o), h = 0; h < o; h++)
              d[h] = arguments[h];
            1 === d.length && d[0].constructor && d[0].constructor === Object
              ? (r = d[0])
              : ((n = d[0]), (r = d[1])),
              r || (r = {}),
              (r = f.extend({}, r)),
              n && !r.el && (r.el = n),
              (e = t.call(this, r)),
              Object.keys(O).forEach(function (e) {
                Object.keys(O[e]).forEach(function (t) {
                  i.prototype[t] || (i.prototype[t] = O[e][t]);
                });
              });
            var c = Object(a.a)(e);
            "undefined" === typeof c.modules && (c.modules = {}),
              Object.keys(c.modules).forEach(function (e) {
                var t = c.modules[e];
                if (t.params) {
                  var i = Object.keys(t.params)[0],
                    s = t.params[i];
                  if ("object" !== typeof s || null === s) return;
                  if (!(i in r) || !("enabled" in s)) return;
                  !0 === r[i] && (r[i] = { enabled: !0 }),
                    "object" !== typeof r[i] ||
                      "enabled" in r[i] ||
                      (r[i].enabled = !0),
                    r[i] || (r[i] = { enabled: !1 });
                }
              });
            var p = f.extend({}, D);
            c.useModulesParams(p),
              (c.params = f.extend({}, p, I, r)),
              (c.originalParams = f.extend({}, c.params)),
              (c.passedParams = f.extend({}, r)),
              (c.$ = u);
            var v = u(c.params.el);
            if (!(n = v[0])) return Object(s.a)(e, void 0);
            if (v.length > 1) {
              var g = [];
              return (
                v.each(function (e, t) {
                  var s = f.extend({}, r, { el: t });
                  g.push(new i(s));
                }),
                Object(s.a)(e, g)
              );
            }
            (n.swiper = c), v.data("swiper", c);
            var b = v.children(".".concat(c.params.wrapperClass));
            return (
              f.extend(c, {
                $el: v,
                el: n,
                $wrapperEl: b,
                wrapperEl: b[0],
                classNames: [],
                slides: u(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === c.params.direction;
                },
                isVertical: function () {
                  return "vertical" === c.params.direction;
                },
                rtl:
                  "rtl" === n.dir.toLowerCase() || "rtl" === v.css("direction"),
                rtlTranslate:
                  "horizontal" === c.params.direction &&
                  ("rtl" === n.dir.toLowerCase() ||
                    "rtl" === v.css("direction")),
                wrongRTL: "-webkit-box" === b.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: c.params.allowSlideNext,
                allowSlidePrev: c.params.allowSlidePrev,
                touchEvents: (function () {
                  var e = ["touchstart", "touchmove", "touchend"],
                    t = ["mousedown", "mousemove", "mouseup"];
                  return (
                    m.pointerEvents
                      ? (t = ["pointerdown", "pointermove", "pointerup"])
                      : m.prefixedPointerEvents &&
                        (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    (c.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                    }),
                    (c.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    m.touch || !c.params.simulateTouch
                      ? c.touchEventsTouch
                      : c.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements:
                    "input, select, option, textarea, button, video",
                  lastClickTime: f.now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: c.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              c.useModules(),
              c.params.init && c.init(),
              Object(s.a)(e, c)
            );
          }
          return (
            Object(o.a)(
              i,
              [
                {
                  key: "slidesPerViewDynamic",
                  value: function () {
                    var e = this.params,
                      t = this.slides,
                      i = this.slidesGrid,
                      s = this.size,
                      a = this.activeIndex,
                      n = 1;
                    if (e.centeredSlides) {
                      for (
                        var r, o = t[a].swiperSlideSize, l = a + 1;
                        l < t.length;
                        l += 1
                      )
                        t[l] &&
                          !r &&
                          ((n += 1),
                          (o += t[l].swiperSlideSize) > s && (r = !0));
                      for (var d = a - 1; d >= 0; d -= 1)
                        t[d] &&
                          !r &&
                          ((n += 1),
                          (o += t[d].swiperSlideSize) > s && (r = !0));
                    } else
                      for (var h = a + 1; h < t.length; h += 1)
                        i[h] - i[a] < s && (n += 1);
                    return n;
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this;
                    if (e && !e.destroyed) {
                      var t = e.snapGrid,
                        i = e.params;
                      i.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode
                          ? (s(), e.params.autoHeight && e.updateAutoHeight())
                          : (("auto" === e.params.slidesPerView ||
                              e.params.slidesPerView > 1) &&
                            e.isEnd &&
                            !e.params.centeredSlides
                              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                              : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                        i.watchOverflow &&
                          t !== e.snapGrid &&
                          e.checkOverflow(),
                        e.emit("update");
                    }
                    function s() {
                      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(
                          Math.max(t, e.maxTranslate()),
                          e.minTranslate()
                        );
                      e.setTranslate(i),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                    }
                  },
                },
                {
                  key: "changeDirection",
                  value: function (e) {
                    var t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                      i = this,
                      s = i.params.direction;
                    return (
                      e || (e = "horizontal" === s ? "vertical" : "horizontal"),
                      e === s ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (i.$el
                          .removeClass(
                            ""
                              .concat(i.params.containerModifierClass)
                              .concat(s, " wp8-")
                              .concat(s)
                          )
                          .addClass(
                            "".concat(i.params.containerModifierClass).concat(e)
                          ),
                        (g.isIE || g.isEdge) &&
                          (m.pointerEvents || m.prefixedPointerEvents) &&
                          i.$el.addClass(
                            ""
                              .concat(i.params.containerModifierClass, "wp8-")
                              .concat(e)
                          ),
                        (i.params.direction = e),
                        i.slides.each(function (t, i) {
                          "vertical" === e
                            ? (i.style.width = "")
                            : (i.style.height = "");
                        }),
                        i.emit("changeDirection"),
                        t && i.update()),
                      i
                    );
                  },
                },
                {
                  key: "init",
                  value: function () {
                    this.initialized ||
                      (this.emit("beforeInit"),
                      this.params.breakpoints && this.setBreakpoint(),
                      this.addClasses(),
                      this.params.loop && this.loopCreate(),
                      this.updateSize(),
                      this.updateSlides(),
                      this.params.watchOverflow && this.checkOverflow(),
                      this.params.grabCursor && this.setGrabCursor(),
                      this.params.preloadImages && this.preloadImages(),
                      this.params.loop
                        ? this.slideTo(
                            this.params.initialSlide + this.loopedSlides,
                            0,
                            this.params.runCallbacksOnInit
                          )
                        : this.slideTo(
                            this.params.initialSlide,
                            0,
                            this.params.runCallbacksOnInit
                          ),
                      this.attachEvents(),
                      (this.initialized = !0),
                      this.emit("init"));
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                      i = this,
                      s = i.params,
                      a = i.$el,
                      n = i.$wrapperEl,
                      r = i.slides;
                    return (
                      "undefined" === typeof i.params ||
                        i.destroyed ||
                        (i.emit("beforeDestroy"),
                        (i.initialized = !1),
                        i.detachEvents(),
                        s.loop && i.loopDestroy(),
                        t &&
                          (i.removeClasses(),
                          a.removeAttr("style"),
                          n.removeAttr("style"),
                          r &&
                            r.length &&
                            r
                              .removeClass(
                                [
                                  s.slideVisibleClass,
                                  s.slideActiveClass,
                                  s.slideNextClass,
                                  s.slidePrevClass,
                                ].join(" ")
                              )
                              .removeAttr("style")
                              .removeAttr("data-swiper-slide-index")
                              .removeAttr("data-swiper-column")
                              .removeAttr("data-swiper-row")),
                        i.emit("destroy"),
                        Object.keys(i.eventsListeners).forEach(function (e) {
                          i.off(e);
                        }),
                        !1 !== e &&
                          ((i.$el[0].swiper = null),
                          i.$el.data("swiper", null),
                          f.deleteProps(i)),
                        (i.destroyed = !0)),
                      null
                    );
                  },
                },
              ],
              [
                {
                  key: "extendDefaults",
                  value: function (e) {
                    f.extend(I, e);
                  },
                },
                {
                  key: "extendedDefaults",
                  get: function () {
                    return I;
                  },
                },
                {
                  key: "defaults",
                  get: function () {
                    return D;
                  },
                },
                {
                  key: "Class",
                  get: function () {
                    return b;
                  },
                },
                {
                  key: "$",
                  get: function () {
                    return u;
                  },
                },
              ]
            ),
            i
          );
        })(b),
        B = { name: "device", proto: { device: M }, static: { device: M } },
        X = { name: "support", proto: { support: m }, static: { support: m } },
        Y = { name: "browser", proto: { browser: g }, static: { browser: g } },
        G = {
          name: "resize",
          create: function () {
            var e = this;
            f.extend(e, {
              resize: {
                resizeHandler: function () {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    (e.emit("beforeResize"), e.emit("resize"));
                },
                orientationChangeHandler: function () {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    e.emit("orientationchange");
                },
              },
            });
          },
          on: {
            init: function () {
              h.addEventListener("resize", this.resize.resizeHandler),
                h.addEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            },
            destroy: function () {
              h.removeEventListener("resize", this.resize.resizeHandler),
                h.removeEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            },
          },
        },
        V = {
          func: h.MutationObserver || h.WebkitMutationObserver,
          attach: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = this,
              s = V.func,
              a = new s(function (e) {
                if (1 !== e.length) {
                  var t = function () {
                    i.emit("observerUpdate", e[0]);
                  };
                  h.requestAnimationFrame
                    ? h.requestAnimationFrame(t)
                    : h.setTimeout(t, 0);
                } else i.emit("observerUpdate", e[0]);
              });
            a.observe(e, {
              attributes: "undefined" === typeof t.attributes || t.attributes,
              childList: "undefined" === typeof t.childList || t.childList,
              characterData:
                "undefined" === typeof t.characterData || t.characterData,
            }),
              i.observer.observers.push(a);
          },
          init: function () {
            if (m.observer && this.params.observer) {
              if (this.params.observeParents)
                for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                  this.observer.attach(e[t]);
              this.observer.attach(this.$el[0], {
                childList: this.params.observeSlideChildren,
              }),
                this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
            }
          },
          destroy: function () {
            this.observer.observers.forEach(function (e) {
              e.disconnect();
            }),
              (this.observer.observers = []);
          },
        },
        H = {
          name: "observer",
          params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1,
          },
          create: function () {
            f.extend(this, {
              observer: {
                init: V.init.bind(this),
                attach: V.attach.bind(this),
                destroy: V.destroy.bind(this),
                observers: [],
              },
            });
          },
          on: {
            init: function () {
              this.observer.init();
            },
            destroy: function () {
              this.observer.destroy();
            },
          },
        };
      var F = {
          lastScrollTime: f.now(),
          event:
            h.navigator.userAgent.indexOf("firefox") > -1
              ? "DOMMouseScroll"
              : (function () {
                  var e = "onwheel" in d;
                  if (!e) {
                    var t = d.createElement("div");
                    t.setAttribute("onwheel", "return;"),
                      (e = "function" === typeof t.onwheel);
                  }
                  return (
                    !e &&
                      d.implementation &&
                      d.implementation.hasFeature &&
                      !0 !== d.implementation.hasFeature("", "") &&
                      (e = d.implementation.hasFeature("Events.wheel", "3.0")),
                    e
                  );
                })()
              ? "wheel"
              : "mousewheel",
          normalize: function (e) {
            var t = 0,
              i = 0,
              s = 0,
              a = 0;
            return (
              "detail" in e && (i = e.detail),
              "wheelDelta" in e && (i = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
              (s = 10 * t),
              (a = 10 * i),
              "deltaY" in e && (a = e.deltaY),
              "deltaX" in e && (s = e.deltaX),
              (s || a) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((s *= 40), (a *= 40))
                  : ((s *= 800), (a *= 800))),
              s && !t && (t = s < 1 ? -1 : 1),
              a && !i && (i = a < 1 ? -1 : 1),
              { spinX: t, spinY: i, pixelX: s, pixelY: a }
            );
          },
          handleMouseEnter: function () {
            this.mouseEntered = !0;
          },
          handleMouseLeave: function () {
            this.mouseEntered = !1;
          },
          handle: function (e) {
            var t = e,
              i = this,
              s = i.params.mousewheel;
            if (!i.mouseEntered && !s.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var a = 0,
              n = i.rtlTranslate ? -1 : 1,
              r = F.normalize(t);
            if (s.forceToAxis)
              if (i.isHorizontal()) {
                if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
                a = r.pixelX * n;
              } else {
                if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
                a = r.pixelY;
              }
            else
              a =
                Math.abs(r.pixelX) > Math.abs(r.pixelY)
                  ? -r.pixelX * n
                  : -r.pixelY;
            if (0 === a) return !0;
            if ((s.invert && (a = -a), i.params.freeMode)) {
              i.params.loop && i.loopFix();
              var o = i.getTranslate() + a * s.sensitivity,
                l = i.isBeginning,
                d = i.isEnd;
              if (
                (o >= i.minTranslate() && (o = i.minTranslate()),
                o <= i.maxTranslate() && (o = i.maxTranslate()),
                i.setTransition(0),
                i.setTranslate(o),
                i.updateProgress(),
                i.updateActiveIndex(),
                i.updateSlidesClasses(),
                ((!l && i.isBeginning) || (!d && i.isEnd)) &&
                  i.updateSlidesClasses(),
                i.params.freeModeSticky &&
                  (clearTimeout(i.mousewheel.timeout),
                  (i.mousewheel.timeout = f.nextTick(function () {
                    i.slideToClosest();
                  }, 300))),
                i.emit("scroll", t),
                i.params.autoplay &&
                  i.params.autoplayDisableOnInteraction &&
                  i.autoplay.stop(),
                o === i.minTranslate() || o === i.maxTranslate())
              )
                return !0;
            } else {
              if (f.now() - i.mousewheel.lastScrollTime > 60)
                if (a < 0)
                  if ((i.isEnd && !i.params.loop) || i.animating) {
                    if (s.releaseOnEdges) return !0;
                  } else i.slideNext(), i.emit("scroll", t);
                else if ((i.isBeginning && !i.params.loop) || i.animating) {
                  if (s.releaseOnEdges) return !0;
                } else i.slidePrev(), i.emit("scroll", t);
              i.mousewheel.lastScrollTime = new h.Date().getTime();
            }
            return (
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
            );
          },
          enable: function () {
            if (!F.event) return !1;
            if (this.mousewheel.enabled) return !1;
            var e = this.$el;
            return (
              "container" !== this.params.mousewheel.eventsTarged &&
                (e = u(this.params.mousewheel.eventsTarged)),
              e.on("mouseenter", this.mousewheel.handleMouseEnter),
              e.on("mouseleave", this.mousewheel.handleMouseLeave),
              e.on(F.event, this.mousewheel.handle),
              (this.mousewheel.enabled = !0),
              !0
            );
          },
          disable: function () {
            if (!F.event) return !1;
            if (!this.mousewheel.enabled) return !1;
            var e = this.$el;
            return (
              "container" !== this.params.mousewheel.eventsTarged &&
                (e = u(this.params.mousewheel.eventsTarged)),
              e.off(F.event, this.mousewheel.handle),
              (this.mousewheel.enabled = !1),
              !0
            );
          },
        },
        N = {
          update: function () {
            var e = this.rtl,
              t = this.params.pagination;
            if (
              t.el &&
              this.pagination.el &&
              this.pagination.$el &&
              0 !== this.pagination.$el.length
            ) {
              var i,
                s =
                  this.virtual && this.params.virtual.enabled
                    ? this.virtual.slides.length
                    : this.slides.length,
                a = this.pagination.$el,
                n = this.params.loop
                  ? Math.ceil(
                      (s - 2 * this.loopedSlides) / this.params.slidesPerGroup
                    )
                  : this.snapGrid.length;
              if (
                (this.params.loop
                  ? ((i = Math.ceil(
                      (this.activeIndex - this.loopedSlides) /
                        this.params.slidesPerGroup
                    )) >
                      s - 1 - 2 * this.loopedSlides &&
                      (i -= s - 2 * this.loopedSlides),
                    i > n - 1 && (i -= n),
                    i < 0 &&
                      "bullets" !== this.params.paginationType &&
                      (i = n + i))
                  : (i =
                      "undefined" !== typeof this.snapIndex
                        ? this.snapIndex
                        : this.activeIndex || 0),
                "bullets" === t.type &&
                  this.pagination.bullets &&
                  this.pagination.bullets.length > 0)
              ) {
                var r,
                  o,
                  l,
                  d = this.pagination.bullets;
                if (
                  (t.dynamicBullets &&
                    ((this.pagination.bulletSize = d
                      .eq(0)
                      [this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    a.css(
                      this.isHorizontal() ? "width" : "height",
                      "".concat(
                        this.pagination.bulletSize * (t.dynamicMainBullets + 4),
                        "px"
                      )
                    ),
                    t.dynamicMainBullets > 1 &&
                      void 0 !== this.previousIndex &&
                      ((this.pagination.dynamicBulletIndex +=
                        i - this.previousIndex),
                      this.pagination.dynamicBulletIndex >
                      t.dynamicMainBullets - 1
                        ? (this.pagination.dynamicBulletIndex =
                            t.dynamicMainBullets - 1)
                        : this.pagination.dynamicBulletIndex < 0 &&
                          (this.pagination.dynamicBulletIndex = 0)),
                    (r = i - this.pagination.dynamicBulletIndex),
                    (l =
                      ((o =
                        r + (Math.min(d.length, t.dynamicMainBullets) - 1)) +
                        r) /
                      2)),
                  d.removeClass(
                    ""
                      .concat(t.bulletActiveClass, " ")
                      .concat(t.bulletActiveClass, "-next ")
                      .concat(t.bulletActiveClass, "-next-next ")
                      .concat(t.bulletActiveClass, "-prev ")
                      .concat(t.bulletActiveClass, "-prev-prev ")
                      .concat(t.bulletActiveClass, "-main")
                  ),
                  a.length > 1)
                )
                  d.each(function (e, s) {
                    var a = u(s),
                      n = a.index();
                    n === i && a.addClass(t.bulletActiveClass),
                      t.dynamicBullets &&
                        (n >= r &&
                          n <= o &&
                          a.addClass("".concat(t.bulletActiveClass, "-main")),
                        n === r &&
                          a
                            .prev()
                            .addClass("".concat(t.bulletActiveClass, "-prev"))
                            .prev()
                            .addClass(
                              "".concat(t.bulletActiveClass, "-prev-prev")
                            ),
                        n === o &&
                          a
                            .next()
                            .addClass("".concat(t.bulletActiveClass, "-next"))
                            .next()
                            .addClass(
                              "".concat(t.bulletActiveClass, "-next-next")
                            ));
                  });
                else if (
                  (d.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets)
                ) {
                  for (var h = d.eq(r), c = d.eq(o), p = r; p <= o; p += 1)
                    d.eq(p).addClass("".concat(t.bulletActiveClass, "-main"));
                  h
                    .prev()
                    .addClass("".concat(t.bulletActiveClass, "-prev"))
                    .prev()
                    .addClass("".concat(t.bulletActiveClass, "-prev-prev")),
                    c
                      .next()
                      .addClass("".concat(t.bulletActiveClass, "-next"))
                      .next()
                      .addClass("".concat(t.bulletActiveClass, "-next-next"));
                }
                if (t.dynamicBullets) {
                  var v = Math.min(d.length, t.dynamicMainBullets + 4),
                    f =
                      (this.pagination.bulletSize * v -
                        this.pagination.bulletSize) /
                        2 -
                      l * this.pagination.bulletSize,
                    m = e ? "right" : "left";
                  d.css(this.isHorizontal() ? m : "top", "".concat(f, "px"));
                }
              }
              if (
                ("fraction" === t.type &&
                  (a
                    .find(".".concat(t.currentClass))
                    .text(t.formatFractionCurrent(i + 1)),
                  a
                    .find(".".concat(t.totalClass))
                    .text(t.formatFractionTotal(n))),
                "progressbar" === t.type)
              ) {
                var g;
                g = t.progressbarOpposite
                  ? this.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : this.isHorizontal()
                  ? "horizontal"
                  : "vertical";
                var b = (i + 1) / n,
                  w = 1,
                  y = 1;
                "horizontal" === g ? (w = b) : (y = b),
                  a
                    .find(".".concat(t.progressbarFillClass))
                    .transform(
                      "translate3d(0,0,0) scaleX("
                        .concat(w, ") scaleY(")
                        .concat(y, ")")
                    )
                    .transition(this.params.speed);
              }
              "custom" === t.type && t.renderCustom
                ? (a.html(t.renderCustom(this, i + 1, n)),
                  this.emit("paginationRender", this, a[0]))
                : this.emit("paginationUpdate", this, a[0]),
                a[
                  this.params.watchOverflow && this.isLocked
                    ? "addClass"
                    : "removeClass"
                ](t.lockClass);
            }
          },
          render: function () {
            var e = this.params.pagination;
            if (
              e.el &&
              this.pagination.el &&
              this.pagination.$el &&
              0 !== this.pagination.$el.length
            ) {
              var t =
                  this.virtual && this.params.virtual.enabled
                    ? this.virtual.slides.length
                    : this.slides.length,
                i = this.pagination.$el,
                s = "";
              if ("bullets" === e.type) {
                for (
                  var a = this.params.loop
                      ? Math.ceil(
                          (t - 2 * this.loopedSlides) /
                            this.params.slidesPerGroup
                        )
                      : this.snapGrid.length,
                    n = 0;
                  n < a;
                  n += 1
                )
                  e.renderBullet
                    ? (s += e.renderBullet.call(this, n, e.bulletClass))
                    : (s += "<"
                        .concat(e.bulletElement, ' class="')
                        .concat(e.bulletClass, '"></')
                        .concat(e.bulletElement, ">"));
                i.html(s),
                  (this.pagination.bullets = i.find(".".concat(e.bulletClass)));
              }
              "fraction" === e.type &&
                ((s = e.renderFraction
                  ? e.renderFraction.call(this, e.currentClass, e.totalClass)
                  : '<span class="'.concat(e.currentClass, '"></span>') +
                    " / " +
                    '<span class="'.concat(e.totalClass, '"></span>')),
                i.html(s)),
                "progressbar" === e.type &&
                  ((s = e.renderProgressbar
                    ? e.renderProgressbar.call(this, e.progressbarFillClass)
                    : '<span class="'.concat(
                        e.progressbarFillClass,
                        '"></span>'
                      )),
                  i.html(s)),
                "custom" !== e.type &&
                  this.emit("paginationRender", this.pagination.$el[0]);
            }
          },
          init: function () {
            var e = this,
              t = e.params.pagination;
            if (t.el) {
              var i = u(t.el);
              0 !== i.length &&
                (e.params.uniqueNavElements &&
                  "string" === typeof t.el &&
                  i.length > 1 &&
                  1 === e.$el.find(t.el).length &&
                  (i = e.$el.find(t.el)),
                "bullets" === t.type &&
                  t.clickable &&
                  i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (i.addClass(
                    "".concat(t.modifierClass).concat(t.type, "-dynamic")
                  ),
                  (e.pagination.dynamicBulletIndex = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  i.addClass(t.progressbarOppositeClass),
                t.clickable &&
                  i.on("click", ".".concat(t.bulletClass), function (t) {
                    t.preventDefault();
                    var i = u(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                  }),
                f.extend(e.pagination, { $el: i, el: i[0] }));
            }
          },
          destroy: function () {
            var e = this.params.pagination;
            if (
              e.el &&
              this.pagination.el &&
              this.pagination.$el &&
              0 !== this.pagination.$el.length
            ) {
              var t = this.pagination.$el;
              t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets &&
                  this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", ".".concat(e.bulletClass));
            }
          },
        },
        W = {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (e) {
                return e;
              },
              formatFractionTotal: function (e) {
                return e;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass:
                "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create: function () {
            f.extend(this, {
              pagination: {
                init: N.init.bind(this),
                render: N.render.bind(this),
                update: N.update.bind(this),
                destroy: N.destroy.bind(this),
                dynamicBulletIndex: 0,
              },
            });
          },
          on: {
            init: function () {
              this.pagination.init(),
                this.pagination.render(),
                this.pagination.update();
            },
            activeIndexChange: function () {
              (this.params.loop || "undefined" === typeof this.snapIndex) &&
                this.pagination.update();
            },
            snapIndexChange: function () {
              this.params.loop || this.pagination.update();
            },
            slidesLengthChange: function () {
              this.params.loop &&
                (this.pagination.render(), this.pagination.update());
            },
            snapGridLengthChange: function () {
              this.params.loop ||
                (this.pagination.render(), this.pagination.update());
            },
            destroy: function () {
              this.pagination.destroy();
            },
            click: function (e) {
              this.params.pagination.el &&
                this.params.pagination.hideOnClick &&
                this.pagination.$el.length > 0 &&
                !u(e.target).hasClass(this.params.pagination.bulletClass) &&
                (!0 ===
                this.pagination.$el.hasClass(this.params.pagination.hiddenClass)
                  ? this.emit("paginationShow", this)
                  : this.emit("paginationHide", this),
                this.pagination.$el.toggleClass(
                  this.params.pagination.hiddenClass
                ));
            },
          },
        },
        R = {
          setTranslate: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
              var e = this.scrollbar,
                t = this.rtlTranslate,
                i = this.progress,
                s = e.dragSize,
                a = e.trackSize,
                n = e.$dragEl,
                r = e.$el,
                o = this.params.scrollbar,
                l = s,
                d = (a - s) * i;
              t
                ? (d = -d) > 0
                  ? ((l = s - d), (d = 0))
                  : -d + s > a && (l = a + d)
                : d < 0
                ? ((l = s + d), (d = 0))
                : d + s > a && (l = a - d),
                this.isHorizontal()
                  ? (m.transforms3d
                      ? n.transform("translate3d(".concat(d, "px, 0, 0)"))
                      : n.transform("translateX(".concat(d, "px)")),
                    (n[0].style.width = "".concat(l, "px")))
                  : (m.transforms3d
                      ? n.transform("translate3d(0px, ".concat(d, "px, 0)"))
                      : n.transform("translateY(".concat(d, "px)")),
                    (n[0].style.height = "".concat(l, "px"))),
                o.hide &&
                  (clearTimeout(this.scrollbar.timeout),
                  (r[0].style.opacity = 1),
                  (this.scrollbar.timeout = setTimeout(function () {
                    (r[0].style.opacity = 0), r.transition(400);
                  }, 1e3)));
            }
          },
          setTransition: function (e) {
            this.params.scrollbar.el &&
              this.scrollbar.el &&
              this.scrollbar.$dragEl.transition(e);
          },
          updateSize: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
              var e = this.scrollbar,
                t = e.$dragEl,
                i = e.$el;
              (t[0].style.width = ""), (t[0].style.height = "");
              var s,
                a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                n = this.size / this.virtualSize,
                r = n * (a / this.size);
              (s =
                "auto" === this.params.scrollbar.dragSize
                  ? a * n
                  : parseInt(this.params.scrollbar.dragSize, 10)),
                this.isHorizontal()
                  ? (t[0].style.width = "".concat(s, "px"))
                  : (t[0].style.height = "".concat(s, "px")),
                (i[0].style.display = n >= 1 ? "none" : ""),
                this.params.scrollbar.hide && (i[0].style.opacity = 0),
                f.extend(e, {
                  trackSize: a,
                  divider: n,
                  moveDivider: r,
                  dragSize: s,
                }),
                e.$el[
                  this.params.watchOverflow && this.isLocked
                    ? "addClass"
                    : "removeClass"
                ](this.params.scrollbar.lockClass);
            }
          },
          getPointerPosition: function (e) {
            return this.isHorizontal()
              ? "touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0].pageX
                : e.pageX || e.clientX
              : "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].pageY
              : e.pageY || e.clientY;
          },
          setDragPosition: function (e) {
            var t,
              i = this.scrollbar,
              s = this.rtlTranslate,
              a = i.$el,
              n = i.dragSize,
              r = i.trackSize,
              o = i.dragStartPos;
            (t =
              (i.getPointerPosition(e) -
                a.offset()[this.isHorizontal() ? "left" : "top"] -
                (null !== o ? o : n / 2)) /
              (r - n)),
              (t = Math.max(Math.min(t, 1), 0)),
              s && (t = 1 - t);
            var l =
              this.minTranslate() +
              (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(l),
              this.setTranslate(l),
              this.updateActiveIndex(),
              this.updateSlidesClasses();
          },
          onDragStart: function (e) {
            var t = this.params.scrollbar,
              i = this.scrollbar,
              s = this.$wrapperEl,
              a = i.$el,
              n = i.$dragEl;
            (this.scrollbar.isTouched = !0),
              (this.scrollbar.dragStartPos =
                e.target === n[0] || e.target === n
                  ? i.getPointerPosition(e) -
                    e.target.getBoundingClientRect()[
                      this.isHorizontal() ? "left" : "top"
                    ]
                  : null),
              e.preventDefault(),
              e.stopPropagation(),
              s.transition(100),
              n.transition(100),
              i.setDragPosition(e),
              clearTimeout(this.scrollbar.dragTimeout),
              a.transition(0),
              t.hide && a.css("opacity", 1),
              this.emit("scrollbarDragStart", e);
          },
          onDragMove: function (e) {
            var t = this.scrollbar,
              i = this.$wrapperEl,
              s = t.$el,
              a = t.$dragEl;
            this.scrollbar.isTouched &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              t.setDragPosition(e),
              i.transition(0),
              s.transition(0),
              a.transition(0),
              this.emit("scrollbarDragMove", e));
          },
          onDragEnd: function (e) {
            var t = this.params.scrollbar,
              i = this.scrollbar.$el;
            this.scrollbar.isTouched &&
              ((this.scrollbar.isTouched = !1),
              t.hide &&
                (clearTimeout(this.scrollbar.dragTimeout),
                (this.scrollbar.dragTimeout = f.nextTick(function () {
                  i.css("opacity", 0), i.transition(400);
                }, 1e3))),
              this.emit("scrollbarDragEnd", e),
              t.snapOnRelease && this.slideToClosest());
          },
          enableDraggable: function () {
            if (this.params.scrollbar.el) {
              var e = this.scrollbar,
                t = this.touchEventsTouch,
                i = this.touchEventsDesktop,
                s = this.params,
                a = e.$el[0],
                n = !(!m.passiveListener || !s.passiveListeners) && {
                  passive: !1,
                  capture: !1,
                },
                r = !(!m.passiveListener || !s.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                };
              m.touch
                ? (a.addEventListener(t.start, this.scrollbar.onDragStart, n),
                  a.addEventListener(t.move, this.scrollbar.onDragMove, n),
                  a.addEventListener(t.end, this.scrollbar.onDragEnd, r))
                : (a.addEventListener(i.start, this.scrollbar.onDragStart, n),
                  d.addEventListener(i.move, this.scrollbar.onDragMove, n),
                  d.addEventListener(i.end, this.scrollbar.onDragEnd, r));
            }
          },
          disableDraggable: function () {
            if (this.params.scrollbar.el) {
              var e = this.scrollbar,
                t = this.touchEventsTouch,
                i = this.touchEventsDesktop,
                s = this.params,
                a = e.$el[0],
                n = !(!m.passiveListener || !s.passiveListeners) && {
                  passive: !1,
                  capture: !1,
                },
                r = !(!m.passiveListener || !s.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                };
              m.touch
                ? (a.removeEventListener(
                    t.start,
                    this.scrollbar.onDragStart,
                    n
                  ),
                  a.removeEventListener(t.move, this.scrollbar.onDragMove, n),
                  a.removeEventListener(t.end, this.scrollbar.onDragEnd, r))
                : (a.removeEventListener(
                    i.start,
                    this.scrollbar.onDragStart,
                    n
                  ),
                  d.removeEventListener(i.move, this.scrollbar.onDragMove, n),
                  d.removeEventListener(i.end, this.scrollbar.onDragEnd, r));
            }
          },
          init: function () {
            if (this.params.scrollbar.el) {
              var e = this.scrollbar,
                t = this.$el,
                i = this.params.scrollbar,
                s = u(i.el);
              this.params.uniqueNavElements &&
                "string" === typeof i.el &&
                s.length > 1 &&
                1 === t.find(i.el).length &&
                (s = t.find(i.el));
              var a = s.find(".".concat(this.params.scrollbar.dragClass));
              0 === a.length &&
                ((a = u(
                  '<div class="'.concat(
                    this.params.scrollbar.dragClass,
                    '"></div>'
                  )
                )),
                s.append(a)),
                f.extend(e, { $el: s, el: s[0], $dragEl: a, dragEl: a[0] }),
                i.draggable && e.enableDraggable();
            }
          },
          destroy: function () {
            this.scrollbar.disableDraggable();
          },
        },
        j = {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
            },
          },
          create: function () {
            f.extend(this, {
              scrollbar: {
                init: R.init.bind(this),
                destroy: R.destroy.bind(this),
                updateSize: R.updateSize.bind(this),
                setTranslate: R.setTranslate.bind(this),
                setTransition: R.setTransition.bind(this),
                enableDraggable: R.enableDraggable.bind(this),
                disableDraggable: R.disableDraggable.bind(this),
                setDragPosition: R.setDragPosition.bind(this),
                getPointerPosition: R.getPointerPosition.bind(this),
                onDragStart: R.onDragStart.bind(this),
                onDragMove: R.onDragMove.bind(this),
                onDragEnd: R.onDragEnd.bind(this),
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
            });
          },
          on: {
            init: function () {
              this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate();
            },
            update: function () {
              this.scrollbar.updateSize();
            },
            resize: function () {
              this.scrollbar.updateSize();
            },
            observerUpdate: function () {
              this.scrollbar.updateSize();
            },
            setTranslate: function () {
              this.scrollbar.setTranslate();
            },
            setTransition: function (e) {
              this.scrollbar.setTransition(e);
            },
            destroy: function () {
              this.scrollbar.destroy();
            },
          },
        },
        q = {
          getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX,
              i = e.targetTouches[0].pageY,
              s = e.targetTouches[1].pageX,
              a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
          },
          onGestureStart: function (e) {
            var t = this.params.zoom,
              i = this.zoom,
              s = i.gesture;
            if (
              ((i.fakeGestureTouched = !1),
              (i.fakeGestureMoved = !1),
              !m.gestures)
            ) {
              if (
                "touchstart" !== e.type ||
                ("touchstart" === e.type && e.targetTouches.length < 2)
              )
                return;
              (i.fakeGestureTouched = !0),
                (s.scaleStart = q.getDistanceBetweenTouches(e));
            }
            (s.$slideEl && s.$slideEl.length) ||
            ((s.$slideEl = u(e.target).closest(".swiper-slide")),
            0 === s.$slideEl.length &&
              (s.$slideEl = this.slides.eq(this.activeIndex)),
            (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
            (s.$imageWrapEl = s.$imageEl.parent(".".concat(t.containerClass))),
            (s.maxRatio =
              s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
            0 !== s.$imageWrapEl.length)
              ? (s.$imageEl.transition(0), (this.zoom.isScaling = !0))
              : (s.$imageEl = void 0);
          },
          onGestureChange: function (e) {
            var t = this.params.zoom,
              i = this.zoom,
              s = i.gesture;
            if (!m.gestures) {
              if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
              )
                return;
              (i.fakeGestureMoved = !0),
                (s.scaleMove = q.getDistanceBetweenTouches(e));
            }
            s.$imageEl &&
              0 !== s.$imageEl.length &&
              (m.gestures
                ? (i.scale = e.scale * i.currentScale)
                : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
              i.scale > s.maxRatio &&
                (i.scale =
                  s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
              i.scale < t.minRatio &&
                (i.scale =
                  t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
              s.$imageEl.transform(
                "translate3d(0,0,0) scale(".concat(i.scale, ")")
              ));
          },
          onGestureEnd: function (e) {
            var t = this.params.zoom,
              i = this.zoom,
              s = i.gesture;
            if (!m.gestures) {
              if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
              if (
                "touchend" !== e.type ||
                ("touchend" === e.type &&
                  e.changedTouches.length < 2 &&
                  !M.android)
              )
                return;
              (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
            }
            s.$imageEl &&
              0 !== s.$imageEl.length &&
              ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
              s.$imageEl
                .transition(this.params.speed)
                .transform("translate3d(0,0,0) scale(".concat(i.scale, ")")),
              (i.currentScale = i.scale),
              (i.isScaling = !1),
              1 === i.scale && (s.$slideEl = void 0));
          },
          onTouchStart: function (e) {
            var t = this.zoom,
              i = t.gesture,
              s = t.image;
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              (s.isTouched ||
                (M.android && e.preventDefault(),
                (s.isTouched = !0),
                (s.touchesStart.x =
                  "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (s.touchesStart.y =
                  "touchstart" === e.type
                    ? e.targetTouches[0].pageY
                    : e.pageY)));
          },
          onTouchMove: function (e) {
            var t = this.zoom,
              i = t.gesture,
              s = t.image,
              a = t.velocity;
            if (
              i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((this.allowClick = !1), s.isTouched && i.$slideEl)
            ) {
              s.isMoved ||
                ((s.width = i.$imageEl[0].offsetWidth),
                (s.height = i.$imageEl[0].offsetHeight),
                (s.startX = f.getTranslate(i.$imageWrapEl[0], "x") || 0),
                (s.startY = f.getTranslate(i.$imageWrapEl[0], "y") || 0),
                (i.slideWidth = i.$slideEl[0].offsetWidth),
                (i.slideHeight = i.$slideEl[0].offsetHeight),
                i.$imageWrapEl.transition(0),
                this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
              var n = s.width * t.scale,
                r = s.height * t.scale;
              if (!(n < i.slideWidth && r < i.slideHeight)) {
                if (
                  ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                  (s.maxX = -s.minX),
                  (s.minY = Math.min(i.slideHeight / 2 - r / 2, 0)),
                  (s.maxY = -s.minY),
                  (s.touchesCurrent.x =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (s.touchesCurrent.y =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY),
                  !s.isMoved && !t.isScaling)
                ) {
                  if (
                    this.isHorizontal() &&
                    ((Math.floor(s.minX) === Math.floor(s.startX) &&
                      s.touchesCurrent.x < s.touchesStart.x) ||
                      (Math.floor(s.maxX) === Math.floor(s.startX) &&
                        s.touchesCurrent.x > s.touchesStart.x))
                  )
                    return void (s.isTouched = !1);
                  if (
                    !this.isHorizontal() &&
                    ((Math.floor(s.minY) === Math.floor(s.startY) &&
                      s.touchesCurrent.y < s.touchesStart.y) ||
                      (Math.floor(s.maxY) === Math.floor(s.startY) &&
                        s.touchesCurrent.y > s.touchesStart.y))
                  )
                    return void (s.isTouched = !1);
                }
                e.preventDefault(),
                  e.stopPropagation(),
                  (s.isMoved = !0),
                  (s.currentX =
                    s.touchesCurrent.x - s.touchesStart.x + s.startX),
                  (s.currentY =
                    s.touchesCurrent.y - s.touchesStart.y + s.startY),
                  s.currentX < s.minX &&
                    (s.currentX =
                      s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                  s.currentX > s.maxX &&
                    (s.currentX =
                      s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                  s.currentY < s.minY &&
                    (s.currentY =
                      s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                  s.currentY > s.maxY &&
                    (s.currentY =
                      s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                  a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                  a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                  a.prevTime || (a.prevTime = Date.now()),
                  (a.x =
                    (s.touchesCurrent.x - a.prevPositionX) /
                    (Date.now() - a.prevTime) /
                    2),
                  (a.y =
                    (s.touchesCurrent.y - a.prevPositionY) /
                    (Date.now() - a.prevTime) /
                    2),
                  Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 &&
                    (a.x = 0),
                  Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 &&
                    (a.y = 0),
                  (a.prevPositionX = s.touchesCurrent.x),
                  (a.prevPositionY = s.touchesCurrent.y),
                  (a.prevTime = Date.now()),
                  i.$imageWrapEl.transform(
                    "translate3d("
                      .concat(s.currentX, "px, ")
                      .concat(s.currentY, "px,0)")
                  );
              }
            }
          },
          onTouchEnd: function () {
            var e = this.zoom,
              t = e.gesture,
              i = e.image,
              s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
              if (!i.isTouched || !i.isMoved)
                return (i.isTouched = !1), void (i.isMoved = !1);
              (i.isTouched = !1), (i.isMoved = !1);
              var a = 300,
                n = 300,
                r = s.x * a,
                o = i.currentX + r,
                l = s.y * n,
                d = i.currentY + l;
              0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
                0 !== s.y && (n = Math.abs((d - i.currentY) / s.y));
              var h = Math.max(a, n);
              (i.currentX = o), (i.currentY = d);
              var c = i.width * e.scale,
                u = i.height * e.scale;
              (i.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
                (i.maxX = -i.minX),
                (i.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
                (i.maxY = -i.minY),
                (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                t.$imageWrapEl
                  .transition(h)
                  .transform(
                    "translate3d("
                      .concat(i.currentX, "px, ")
                      .concat(i.currentY, "px,0)")
                  );
            }
          },
          onTransitionEnd: function () {
            var e = this.zoom,
              t = e.gesture;
            t.$slideEl &&
              this.previousIndex !== this.activeIndex &&
              (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
              t.$imageWrapEl.transform("translate3d(0,0,0)"),
              (e.scale = 1),
              (e.currentScale = 1),
              (t.$slideEl = void 0),
              (t.$imageEl = void 0),
              (t.$imageWrapEl = void 0));
          },
          toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e);
          },
          in: function (e) {
            var t,
              i,
              s,
              a,
              n,
              r,
              o,
              l,
              d,
              h,
              c,
              p,
              v,
              f,
              m,
              g,
              b = this.zoom,
              w = this.params.zoom,
              y = b.gesture,
              T = b.image;
            (y.$slideEl ||
              ((y.$slideEl = this.clickedSlide
                ? u(this.clickedSlide)
                : this.slides.eq(this.activeIndex)),
              (y.$imageEl = y.$slideEl.find("img, svg, canvas")),
              (y.$imageWrapEl = y.$imageEl.parent(
                ".".concat(w.containerClass)
              ))),
            y.$imageEl && 0 !== y.$imageEl.length) &&
              (y.$slideEl.addClass("".concat(w.zoomedSlideClass)),
              "undefined" === typeof T.touchesStart.x && e
                ? ((t =
                    "touchend" === e.type
                      ? e.changedTouches[0].pageX
                      : e.pageX),
                  (i =
                    "touchend" === e.type
                      ? e.changedTouches[0].pageY
                      : e.pageY))
                : ((t = T.touchesStart.x), (i = T.touchesStart.y)),
              (b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
              (b.currentScale =
                y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
              e
                ? ((m = y.$slideEl[0].offsetWidth),
                  (g = y.$slideEl[0].offsetHeight),
                  (s = y.$slideEl.offset().left + m / 2 - t),
                  (a = y.$slideEl.offset().top + g / 2 - i),
                  (o = y.$imageEl[0].offsetWidth),
                  (l = y.$imageEl[0].offsetHeight),
                  (d = o * b.scale),
                  (h = l * b.scale),
                  (v = -(c = Math.min(m / 2 - d / 2, 0))),
                  (f = -(p = Math.min(g / 2 - h / 2, 0))),
                  (n = s * b.scale) < c && (n = c),
                  n > v && (n = v),
                  (r = a * b.scale) < p && (r = p),
                  r > f && (r = f))
                : ((n = 0), (r = 0)),
              y.$imageWrapEl
                .transition(300)
                .transform("translate3d(".concat(n, "px, ").concat(r, "px,0)")),
              y.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(".concat(b.scale, ")")));
          },
          out: function () {
            var e = this.zoom,
              t = this.params.zoom,
              i = e.gesture;
            i.$slideEl ||
              ((i.$slideEl = this.clickedSlide
                ? u(this.clickedSlide)
                : this.slides.eq(this.activeIndex)),
              (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
              (i.$imageWrapEl = i.$imageEl.parent(
                ".".concat(t.containerClass)
              ))),
              i.$imageEl &&
                0 !== i.$imageEl.length &&
                ((e.scale = 1),
                (e.currentScale = 1),
                i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                i.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(1)"),
                i.$slideEl.removeClass("".concat(t.zoomedSlideClass)),
                (i.$slideEl = void 0));
          },
          enable: function () {
            var e = this.zoom;
            if (!e.enabled) {
              e.enabled = !0;
              var t = !(
                "touchstart" !== this.touchEvents.start ||
                !m.passiveListener ||
                !this.params.passiveListeners
              ) && { passive: !0, capture: !1 };
              m.gestures
                ? (this.$wrapperEl.on(
                    "gesturestart",
                    ".swiper-slide",
                    e.onGestureStart,
                    t
                  ),
                  this.$wrapperEl.on(
                    "gesturechange",
                    ".swiper-slide",
                    e.onGestureChange,
                    t
                  ),
                  this.$wrapperEl.on(
                    "gestureend",
                    ".swiper-slide",
                    e.onGestureEnd,
                    t
                  ))
                : "touchstart" === this.touchEvents.start &&
                  (this.$wrapperEl.on(
                    this.touchEvents.start,
                    ".swiper-slide",
                    e.onGestureStart,
                    t
                  ),
                  this.$wrapperEl.on(
                    this.touchEvents.move,
                    ".swiper-slide",
                    e.onGestureChange,
                    t
                  ),
                  this.$wrapperEl.on(
                    this.touchEvents.end,
                    ".swiper-slide",
                    e.onGestureEnd,
                    t
                  )),
                this.$wrapperEl.on(
                  this.touchEvents.move,
                  ".".concat(this.params.zoom.containerClass),
                  e.onTouchMove
                );
            }
          },
          disable: function () {
            var e = this.zoom;
            if (e.enabled) {
              this.zoom.enabled = !1;
              var t = !(
                "touchstart" !== this.touchEvents.start ||
                !m.passiveListener ||
                !this.params.passiveListeners
              ) && { passive: !0, capture: !1 };
              m.gestures
                ? (this.$wrapperEl.off(
                    "gesturestart",
                    ".swiper-slide",
                    e.onGestureStart,
                    t
                  ),
                  this.$wrapperEl.off(
                    "gesturechange",
                    ".swiper-slide",
                    e.onGestureChange,
                    t
                  ),
                  this.$wrapperEl.off(
                    "gestureend",
                    ".swiper-slide",
                    e.onGestureEnd,
                    t
                  ))
                : "touchstart" === this.touchEvents.start &&
                  (this.$wrapperEl.off(
                    this.touchEvents.start,
                    ".swiper-slide",
                    e.onGestureStart,
                    t
                  ),
                  this.$wrapperEl.off(
                    this.touchEvents.move,
                    ".swiper-slide",
                    e.onGestureChange,
                    t
                  ),
                  this.$wrapperEl.off(
                    this.touchEvents.end,
                    ".swiper-slide",
                    e.onGestureEnd,
                    t
                  )),
                this.$wrapperEl.off(
                  this.touchEvents.move,
                  ".".concat(this.params.zoom.containerClass),
                  e.onTouchMove
                );
            }
          },
        },
        U = {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          },
          create: function () {
            var e = this,
              t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
              .split(" ")
              .forEach(function (i) {
                t[i] = q[i].bind(e);
              }),
              f.extend(e, { zoom: t });
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
              get: function () {
                return i;
              },
              set: function (t) {
                if (i !== t) {
                  var s = e.zoom.gesture.$imageEl
                      ? e.zoom.gesture.$imageEl[0]
                      : void 0,
                    a = e.zoom.gesture.$slideEl
                      ? e.zoom.gesture.$slideEl[0]
                      : void 0;
                  e.emit("zoomChange", t, s, a);
                }
                i = t;
              },
            });
          },
          on: {
            init: function () {
              this.params.zoom.enabled && this.zoom.enable();
            },
            destroy: function () {
              this.zoom.disable();
            },
            touchStart: function (e) {
              this.zoom.enabled && this.zoom.onTouchStart(e);
            },
            touchEnd: function (e) {
              this.zoom.enabled && this.zoom.onTouchEnd(e);
            },
            doubleTap: function (e) {
              this.params.zoom.enabled &&
                this.zoom.enabled &&
                this.params.zoom.toggle &&
                this.zoom.toggle(e);
            },
            transitionEnd: function () {
              this.zoom.enabled &&
                this.params.zoom.enabled &&
                this.zoom.onTransitionEnd();
            },
          },
        },
        _ = {
          run: function () {
            var e = this,
              t = e.slides.eq(e.activeIndex),
              i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") &&
              (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
              clearTimeout(e.autoplay.timeout),
              (e.autoplay.timeout = f.nextTick(function () {
                e.params.autoplay.reverseDirection
                  ? e.params.loop
                    ? (e.loopFix(),
                      e.slidePrev(e.params.speed, !0, !0),
                      e.emit("autoplay"))
                    : e.isBeginning
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                  : e.params.loop
                  ? (e.loopFix(),
                    e.slideNext(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isEnd
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                  : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
              }, i));
          },
          start: function () {
            return (
              "undefined" === typeof this.autoplay.timeout &&
              !this.autoplay.running &&
              ((this.autoplay.running = !0),
              this.emit("autoplayStart"),
              this.autoplay.run(),
              !0)
            );
          },
          stop: function () {
            return (
              !!this.autoplay.running &&
              "undefined" !== typeof this.autoplay.timeout &&
              (this.autoplay.timeout &&
                (clearTimeout(this.autoplay.timeout),
                (this.autoplay.timeout = void 0)),
              (this.autoplay.running = !1),
              this.emit("autoplayStop"),
              !0)
            );
          },
          pause: function (e) {
            this.autoplay.running &&
              (this.autoplay.paused ||
                (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                (this.autoplay.paused = !0),
                0 !== e && this.params.autoplay.waitForTransition
                  ? (this.$wrapperEl[0].addEventListener(
                      "transitionend",
                      this.autoplay.onTransitionEnd
                    ),
                    this.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      this.autoplay.onTransitionEnd
                    ))
                  : ((this.autoplay.paused = !1), this.autoplay.run())));
          },
        },
        K = {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create: function () {
            var e = this;
            f.extend(e, {
              autoplay: {
                running: !1,
                paused: !1,
                run: _.run.bind(e),
                start: _.start.bind(e),
                stop: _.stop.bind(e),
                pause: _.pause.bind(e),
                onTransitionEnd: function (t) {
                  e &&
                    !e.destroyed &&
                    e.$wrapperEl &&
                    t.target === this &&
                    (e.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      e.autoplay.onTransitionEnd
                    ),
                    e.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      e.autoplay.onTransitionEnd
                    ),
                    (e.autoplay.paused = !1),
                    e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                },
              },
            });
          },
          on: {
            init: function () {
              this.params.autoplay.enabled && this.autoplay.start();
            },
            beforeTransitionStart: function (e, t) {
              this.autoplay.running &&
                (t || !this.params.autoplay.disableOnInteraction
                  ? this.autoplay.pause(e)
                  : this.autoplay.stop());
            },
            sliderFirstMove: function () {
              this.autoplay.running &&
                (this.params.autoplay.disableOnInteraction
                  ? this.autoplay.stop()
                  : this.autoplay.pause());
            },
            destroy: function () {
              this.autoplay.running && this.autoplay.stop();
            },
          },
        },
        J = [B, X, Y, G, H];
      "undefined" === typeof A.use &&
        ((A.use = A.Class.use), (A.installModule = A.Class.installModule)),
        A.use(J),
        A.use([W, j, K, U]);
    },
  },
]);
//# sourceMappingURL=4.3248f5a3.chunk.js.map
