(this.webpackJsonpcampusnavigation =
  this.webpackJsonpcampusnavigation || []).push([
  [3],
  {
    263: function (n, t, i) {
      "use strict";
      i.r(t),
        i.d(t, "startStatusTap", function () {
          return e;
        });
      var o = i(25),
        e = function () {
          var n = window;
          n.addEventListener("statusTap", function () {
            Object(o.h)(function () {
              var t = n.innerWidth,
                i = n.innerHeight,
                e = document.elementFromPoint(t / 2, i / 2);
              if (e) {
                var a = e.closest("ion-content");
                a &&
                  a.componentOnReady().then(function () {
                    Object(o.n)(function () {
                      return a.scrollToTop(300);
                    });
                  });
              }
            });
          });
        };
    },
  },
]);
//# sourceMappingURL=3.b443c9ff.chunk.js.map
