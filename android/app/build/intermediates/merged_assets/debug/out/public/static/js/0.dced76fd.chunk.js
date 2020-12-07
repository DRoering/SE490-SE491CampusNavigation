(this.webpackJsonpcampusnavigation =
  this.webpackJsonpcampusnavigation || []).push([
  [0],
  {
    261: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "createSwipeBackGesture", function () {
          return i;
        });
      var a = n(30),
        r = n(70),
        i = function (t, e, n, i, c) {
          var o = t.ownerDocument.defaultView;
          return Object(r.createGesture)({
            el: t,
            gestureName: "goback-swipe",
            gesturePriority: 40,
            threshold: 10,
            canStart: function (t) {
              return t.startX <= 50 && e();
            },
            onStart: n,
            onMove: function (t) {
              var e = t.deltaX / o.innerWidth;
              i(e);
            },
            onEnd: function (t) {
              var e = t.deltaX,
                n = o.innerWidth,
                r = e / n,
                i = t.velocityX,
                u = n / 2,
                s = i >= 0 && (i > 0.2 || t.deltaX > u),
                d = (s ? 1 - r : r) * n,
                h = 0;
              if (d > 5) {
                var p = d / Math.abs(i);
                h = Math.min(p, 540);
              }
              c(s, r <= 0 ? 0.01 : Object(a.c)(0, r, 0.9999), h);
            },
          });
        };
    },
  },
]);
//# sourceMappingURL=0.dced76fd.chunk.js.map
