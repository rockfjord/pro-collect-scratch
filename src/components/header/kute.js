/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
// KUTE.js v1.6.5 | © dnp_theme | Core Engine | MIT-License
! function (t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.KUTE = e()
}(this, function () {
    "use strict";
    for (var t, e = "undefined" != typeof global ? global : window, n = e.performance, i = document.body, r = [], s = null, a = "length", o = "split", u = "indexOf", h = "options", c = "valuesStart", l = "valuesEnd", f = "element", p = "delay", v = "repeat", g = "yoyo", m = "style", w = ["color", "backgroundColor"], y = ["top", "left", "width", "height"], I = ["translate3d", "translateX", "translateY", "translateZ", "rotate", "translate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "scale"], b = ["opacity"], M = w.concat(b, y, I), O = {}, k = 0, T = M[a]; k < T; k++) t = M[k], -1 !== w[u](t) ? O[t] = "rgba(0,0,0,0)" : -1 !== y[u](t) ? O[t] = 0 : "translate3d" === t ? O[t] = [0, 0, 0] : "translate" === t ? O[t] = [0, 0] : "rotate" === t || /X|Y|Z/.test(t) ? O[t] = 0 : "scale" !== t && "opacity" !== t || (O[t] = 1);
    var x = {
            duration: 900,
            delay: 0,
            offset: 0,
            repeat: 0,
            repeatDelay: 0,
            yoyo: !2,
            easing: "linear",
            keepHex: !5
        },
        E = function () {
            for (var t, e = ["Moz", "moz", "Webkit", "webkit", "O", "o", "Ms", "ms"], n = 0, r = e[a]; n < r; n++)
                if (e[n] + "Transform" in i[m]) {
                    t = e[n];
                    break
                }
            return t
        },
        P = function (t) {
            var e = !(t in i[m]),
                n = E();
            return e ? n + (t.charAt(0).toUpperCase() + t.slice(1)) : t
        },
        Y = function (t, e) {
            var n;
            if (null === (n = e ? t instanceof Object || "object" == typeof t ? t : document.querySelectorAll(t) : "object" == typeof t ? t : document.querySelector(t)) && "window" !== t) throw new TypeError("Element not found or incorrect selector: " + t);
            return n
        },
        C = function (t) {
            return 180 * t / Math.PI
        },
        X = function (t, e) {
            for (var n, i = parseInt(t) || 0, r = ["px", "%", "deg", "rad", "em", "rem", "vh", "vw"], s = 0; s < r[a]; s++)
                if ("string" == typeof t && -1 !== t[u](r[s])) {
                    n = r[s];
                    break
                }
            return n = void 0 !== n ? n : e ? "deg" : "px", {
                v: i,
                u: n
            }
        },
        F = function (t) {
            if (/rgb|rgba/.test(t)) {
                var n = t.replace(/\s|\)/, "")[o]("(")[1][o](","),
                    i = n[3] ? n[3] : null;
                return i ? {
                    r: parseInt(n[0]),
                    g: parseInt(n[1]),
                    b: parseInt(n[2]),
                    a: parseFloat(i)
                } : {
                    r: parseInt(n[0]),
                    g: parseInt(n[1]),
                    b: parseInt(n[2])
                }
            }
            if (/^#/.test(t)) {
                var r = A(t);
                return {
                    r: r.r,
                    g: r.g,
                    b: r.b
                }
            }
            if (/transparent|none|initial|inherit/.test(t)) return {
                r: 0,
                g: 0,
                b: 0,
                a: 0
            };
            if (!/^#|^rgb/.test(t)) {
                var s = document.getElementsByTagName("head")[0];
                s[m].color = t;
                var a = e.getComputedStyle(s, null).color;
                return a = /rgb/.test(a) ? a.replace(/[^\d,]/g, "")[o](",") : [0, 0, 0], s[m].color = "", {
                    r: parseInt(a[0]),
                    g: parseInt(a[1]),
                    b: parseInt(a[2])
                }
            }
        },
        _ = function (t, e, n) {
            return "#" + ((1 << 24) + (t << 16) + (e << 8) + n).toString(16).slice(1)
        },
        A = function (t) {
            var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            t = t.replace(e, function (t, e, n, i) {
                return e + e + n + n + i + i
            });
            var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return n ? {
                r: parseInt(n[1], 16),
                g: parseInt(n[2], 16),
                b: parseInt(n[3], 16)
            } : null
        },
        S = function (t) {
            if (t) {
                for (var e = t[m].cssText.replace(/\s/g, "")[o](";"), n = {}, i = 0, r = e[a]; i < r; i++)
                    if (/transform/i.test(e[i]))
                        for (var s = e[i][o](":")[1][o](")"), h = 0, c = s[a] - 1; h < c; h++) {
                            var l = s[h][o]("("),
                                f = l[0],
                                p = l[1]; - 1 !== I[u](f) && (n[f] = /translate3d/.test(f) ? p[o](",") : p)
                        }
                return n
            }
        },
        Z = function (t, n) {
            var i = t[m],
                r = e.getComputedStyle(t, null) || t.currentStyle,
                s = P(n),
                a = i[n] && !/auto|initial|none|unset/.test(i[n]) ? i[n] : r[s];
            if ("transform" !== n && (s in r || s in i)) {
                if (a) {
                    if ("filter" === s) {
                        var u = parseInt(a[o]("=")[1].replace(")", ""));
                        return parseFloat(u / 100)
                    }
                    return a
                }
                return O[n]
            }
        },
        B = function (t) {
            r.push(t)
        },
        $ = function (t) {
            var e = r[u](t); - 1 !== e && r.splice(e, 1)
        },
        q = function () {
            s && (W(s), s = null)
        },
        H = "ontouchstart" in e || navigator && navigator.msMaxTouchPoints || !1,
        Q = H ? "touchstart" : "mousewheel",
        R = e.requestAnimationFrame || e.webkitRequestAnimationFrame || function (t) {
            return setTimeout(t, 16)
        },
        W = e.cancelAnimationFrame || e.webkitCancelRequestAnimationFrame || function (t) {
            return clearTimeout(t)
        },
        D = P("transform"),
        z = document.getElementsByTagName("HTML")[0],
        j = "BackCompat" == document.compatMode ? i : z,
        N = !(!navigator || null === new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent)) && parseFloat(RegExp.$1),
        L = 8 === N,
        U = e.Interpolate = {},
        K = U.number = function (t, e, n) {
            return t = +t, e -= t, t + e * n
        },
        G = (U.unit = function (t, e, n, i) {
            return t = +t, e -= t, t + e * i + n
        }, U.color = function (t, e, n, i) {
            var r, s = {};
            for (r in e) s[r] = "a" !== r ? K(t[r], e[r], n) >> 0 || 0 : t[r] && e[r] ? (100 * K(t[r], e[r], n) >> 0) / 100 : null;
            return i ? _(s.r, s.g, s.b) : s.a ? "rgba(" + s.r + "," + s.g + "," + s.b + "," + s.a + ")" : "rgb(" + s.r + "," + s.g + "," + s.b + ")"
        }),
        J = U.translate = function (t, e, n, i) {
            var r = {};
            for (var s in e) r[s] = (t[s] === e[s] ? e[s] : (1e3 * (t[s] + (e[s] - t[s]) * i) >> 0) / 1e3) + n;
            return r.x || r.y ? "translate(" + r.x + "," + r.y + ")" : "translate3d(" + r.translateX + "," + r.translateY + "," + r.translateZ + ")"
        },
        V = U.rotate = function (t, e, n, i) {
            var r = {};
            for (var s in e) r[s] = "z" === s ? "rotate(" + (1e3 * (t[s] + (e[s] - t[s]) * i) >> 0) / 1e3 + n + ")" : s + "(" + (1e3 * (t[s] + (e[s] - t[s]) * i) >> 0) / 1e3 + n + ")";
            return r.z ? r.z : (r.rotateX || "") + (r.rotateY || "") + (r.rotateZ || "")
        },
        tt = U.skew = function (t, e, n, i) {
            var r = {};
            for (var s in e) r[s] = s + "(" + (1e3 * (t[s] + (e[s] - t[s]) * i) >> 0) / 1e3 + n + ")";
            return (r.skewX || "") + (r.skewY || "")
        },
        et = U.scale = function (t, e, n) {
            return "scale(" + (1e3 * (t + (e - t) * n) >> 0) / 1e3 + ")"
        },
        nt = {},
        it = function (t) {
            for (var e = 0; e < r[a];) rt.call(r[e], t) ? e++ : r.splice(e, 1);
            s = R(it)
        },
        rt = function (t) {
            if ((t = t || n.now()) < this._startTime && this.playing) return !0;
            var e = Math.min((t - this._startTime) / this[h].duration, 1),
                i = this[h].easing(e);
            for (var r in this[l]) nt[r](this[f], r, this[c][r], this[l][r], i, this[h]);
            if (this[h].update && this[h].update.call(), 1 === e) {
                if (this[h][v] > 0) return isFinite(this[h][v]) && this[h][v]--, this[h][g] && (this.reversed = !this.reversed, ct.call(this)), this._startTime = this[h][g] && !this.reversed ? t + this[h].repeatDelay : t, !0;
                this[h].complete && this[h].complete.call(), pt.call(this);
                for (var s = 0, o = this[h].chain[a]; s < o; s++) this[h].chain[s].start();
                return lt.call(this), !1
            }
            return !0
        },
        st = function () {
            var t = this[f],
                e = this[h];
            void 0 !== e.perspective && D in this[l] && (this[c][D].perspective = this[l][D].perspective), void 0 === e.transformOrigin || "svgTransform" in this[l] || (t[m][P("transformOrigin")] = e.transformOrigin), void 0 !== e.perspectiveOrigin && (t[m][P("perspectiveOrigin")] = e.perspectiveOrigin), void 0 !== e.parentPerspective && (t.parentNode[m][P("perspective")] = e.parentPerspective + "px"), void 0 !== e.parentPerspectiveOrigin && (t.parentNode[m][P("perspectiveOrigin")] = e.parentPerspectiveOrigin)
        },
        at = {},
        ot = {},
        ut = {
            boxModel: function (t, e) {
                t in nt || (nt[t] = function (t, e, n, i, r) {
                    t[m][e] = (r > .99 || r < .01 ? (10 * K(n, i, r) >> 0) / 10 : K(n, i, r) >> 0) + "px"
                });
                var n = X(e),
                    i = "height" === t ? "offsetHeight" : "offsetWidth";
                return "%" === n.u ? n.v * this[f][i] / 100 : n.v
            },
            transform: function (t, e) {
                if (D in nt || (nt[D] = function (t, e, n, i, r, s) {
                        t[m][e] = (n.perspective || "") + ("translate" in n ? J(n.translate, i.translate, "px", r) : "") + ("rotate" in n ? V(n.rotate, i.rotate, "deg", r) : "") + ("skew" in n ? tt(n.skew, i.skew, "deg", r) : "") + ("scale" in n ? et(n.scale, i.scale, r) : "")
                    }), /translate/.test(t)) {
                    if ("translate3d" === t) {
                        var n = e[o](","),
                            i = X(n[0]),
                            r = X(n[1], t3d2 = X(n[2]));
                        return {
                            translateX: "%" === i.u ? i.v * this[f].offsetWidth / 100 : i.v,
                            translateY: "%" === r.u ? r.v * this[f].offsetHeight / 100 : r.v,
                            translateZ: "%" === t3d2.u ? t3d2.v * (this[f].offsetHeight + this[f].offsetWidth) / 200 : t3d2.v
                        }
                    }
                    if (/^translate(?:[XYZ])$/.test(t)) {
                        var s = X(e),
                            u = /X/.test(t) ? this[f].offsetWidth / 100 : /Y/.test(t) ? this[f].offsetHeight / 100 : (this[f].offsetWidth + this[f].offsetHeight) / 200;
                        return "%" === s.u ? s.v * u : s.v
                    }
                    if ("translate" === t) {
                        var h, c = "string" == typeof e ? e[o](",") : e,
                            l = {},
                            p = X(c[0]),
                            v = c[a] ? X(c[1]) : {
                                v: 0,
                                u: "px"
                            };
                        return c instanceof Array ? (l.x = "%" === p.u ? p.v * this[f].offsetWidth / 100 : p.v, l.y = "%" === v.u ? v.v * this[f].offsetHeight / 100 : v.v) : (h = X(c), l.x = "%" === h.u ? h.v * this[f].offsetWidth / 100 : h.v, l.y = 0), l
                    }
                } else if (/rotate|skew/.test(t)) {
                    if (/^rotate(?:[XYZ])$|skew(?:[XY])$/.test(t)) {
                        var d = X(e, !0);
                        return "rad" === d.u ? C(d.v) : d.v
                    }
                    if ("rotate" === t) {
                        var g = {},
                            w = X(e, !0);
                        return g.z = "rad" === w.u ? C(w.v) : w.v, g
                    }
                } else if ("scale" === t) return parseFloat(e)
            },
            unitless: function (t, e) {
                return !/scroll/.test(t) || t in nt ? "opacity" === t && (t in nt || (nt[t] = L ? function (t, e, n, i, r) {
                    t[m].filter = "alpha(opacity=" + (100 * K(n, i, r) >> 0) + ")"
                } : function (t, e, n, i, r) {
                    t[m].opacity = (100 * K(n, i, r) >> 0) / 100
                })) : nt[t] = function (t, e, n, i, r) {
                    t.scrollTop = K(n, i, r) >> 0
                }, parseFloat(e)
            },
            colors: function (t, e) {
                return t in nt || (nt[t] = function (t, e, n, i, r, s) {
                    t[m][e] = G(n, i, r, s.keepHex)
                }), F(e)
            }
        },
        ht = function (t, e) {
            var n = "start" === e ? this[c] : this[l],
                i = {},
                r = {},
                s = {},
                a = {};
            for (var o in t)
                if (-1 !== I[u](o)) {
                    var h = ["X", "Y", "Z"];
                    if (/^translate(?:[XYZ]|3d)$/.test(o)) {
                        for (var f = 0; f < 3; f++) {
                            var p = h[f];
                            /3d/.test(o) ? s["translate" + p] = ut.transform.call(this, "translate" + p, t[o][f]) : s["translate" + p] = "translate" + p in t ? ut.transform.call(this, "translate" + p, t["translate" + p]) : 0
                        }
                        a.translate = s
                    } else if (/^rotate(?:[XYZ])$|^skew(?:[XY])$/.test(o)) {
                        for (var v = /rotate/.test(o) ? "rotate" : "skew", d = "rotate" === v ? r : i, g = 0; g < 3; g++) {
                            var m = h[g];
                            void 0 !== t[v + m] && "skewZ" !== o && (d[v + m] = ut.transform.call(this, v + m, t[v + m]))
                        }
                        a[v] = d
                    } else /(rotate|translate|scale)$/.test(o) && (a[o] = ut.transform.call(this, o, t[o]));
                    n[D] = a
                } else -1 !== y[u](o) ? n[o] = ut.boxModel.call(this, o, t[o]) : -1 !== b[u](o) || "scroll" === o ? n[o] = ut.unitless.call(this, o, t[o]) : -1 !== w[u](o) ? n[o] = ut.colors.call(this, o, t[o]) : o in ut && (n[o] = ut[o].call(this, o, t[o]))
        },
        ct = function () {
            if (this[h][g])
                for (var t in this[l]) {
                    var e = this.valuesRepeat[t];
                    this.valuesRepeat[t] = this[l][t], this[l][t] = e, this[c][t] = this.valuesRepeat[t]
                }
        },
        lt = function () {
            this[v] > 0 && (this[h][v] = this[v]), this[h][g] && !0 === this.reversed && (ct.call(this), this.reversed = !1), this.playing = !1, !r[a] && q()
        },
        ft = function (t) {
            var e = i.getAttribute("data-tweening");
            e && "scroll" === e && t.preventDefault()
        },
        pt = function () {
            "scroll" in this[l] && i.getAttribute("data-tweening") && i.removeAttribute("data-tweening")
        },
        vt = function () {
            "scroll" in this[l] && !i.getAttribute("data-tweening") && i.setAttribute("data-tweening", "scroll")
        },
        dt = function (t) {
            return "function" == typeof t ? t : "string" == typeof t ? mt[t] : void 0
        },
        gt = function () {
            var t = {},
                n = S(this[f]),
                i = ["rotate", "skew"],
                r = ["X", "Y", "Z"];
            for (var s in this[c])
                if (-1 !== I[u](s)) {
                    var a = /(rotate|translate|scale)$/.test(s);
                    if (/translate/.test(s) && "translate" !== s) t.translate3d = n.translate3d || O[s];
                    else if (a) t[s] = n[s] || O[s];
                    else if (!a && /rotate|skew/.test(s))
                        for (var o = 0; o < 2; o++)
                            for (var h = 0; h < 3; h++) {
                                var p = i[o] + r[h]; - 1 !== I[u](p) && p in this[c] && (t[p] = n[p] || O[p])
                            }
                } else if ("scroll" !== s)
                if ("opacity" === s && L) {
                    var v = Z(this[f], "filter");
                    t.opacity = "number" == typeof v ? v : O.opacity
                } else -1 !== M[u](s) ? t[s] = Z(this[f], s) || d[s] : t[s] = s in at ? at[s].call(this, s, this[c][s]) : 0;
            else t[s] = this[f] === j ? e.pageYOffset || j.scrollTop : this[f].scrollTop;
            for (var g in n) - 1 === I[u](g) || g in this[c] || (t[g] = n[g] || O[g]);
            if (this[c] = {}, ht.call(this, t, "start"), D in this[l])
                for (var m in this[c][D])
                    if ("perspective" !== m)
                        if ("object" == typeof this[c][D][m])
                            for (var w in this[c][D][m]) void 0 === this[l][D][m] && (this[l][D][m] = {}), "number" == typeof this[c][D][m][w] && void 0 === this[l][D][m][w] && (this[l][D][m][w] = this[c][D][m][w]);
                        else "number" == typeof this[c][D][m] && void 0 === this[l][D][m] && (this[l][D][m] = this[c][D][m])
        },
        mt = e.Easing = {};
    mt.linear = function (t) {
        return t
    }, mt.easingSinusoidalIn = function (t) {
        return 1 - Math.cos(t * Math.PI / 2)
    }, mt.easingSinusoidalOut = function (t) {
        return Math.sin(t * Math.PI / 2)
    }, mt.easingSinusoidalInOut = function (t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, mt.easingQuadraticIn = function (t) {
        return t * t
    }, mt.easingQuadraticOut = function (t) {
        return t * (2 - t)
    }, mt.easingQuadraticInOut = function (t) {
        return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
    }, mt.easingCubicIn = function (t) {
        return t * t * t
    }, mt.easingCubicOut = function (t) {
        return --t * t * t + 1
    }, mt.easingCubicInOut = function (t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }, mt.easingQuarticIn = function (t) {
        return t * t * t * t
    }, mt.easingQuarticOut = function (t) {
        return 1 - --t * t * t * t
    }, mt.easingQuarticInOut = function (t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
    }, mt.easingQuinticIn = function (t) {
        return t * t * t * t * t
    }, mt.easingQuinticOut = function (t) {
        return 1 + --t * t * t * t * t
    }, mt.easingQuinticInOut = function (t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    }, mt.easingCircularIn = function (t) {
        return -(Math.sqrt(1 - t * t) - 1)
    }, mt.easingCircularOut = function (t) {
        return Math.sqrt(1 - (t -= 1) * t)
    }, mt.easingCircularInOut = function (t) {
        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, mt.easingExponentialIn = function (t) {
        return Math.pow(2, 10 * (t - 1)) - .001
    }, mt.easingExponentialOut = function (t) {
        return 1 - Math.pow(2, -10 * t)
    }, mt.easingExponentialInOut = function (t) {
        return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
    }, mt.easingBackIn = function (t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e)
    }, mt.easingBackOut = function (t) {
        var e = 1.70158;
        return --t * t * ((e + 1) * t + e) + 1
    }, mt.easingBackInOut = function (t) {
        var e = 2.5949095;
        return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
    }, mt.easingElasticIn = function (t) {
        var e, n = .1;
        return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / Math.PI * 2, -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * Math.PI * 2 / .4))
    }, mt.easingElasticOut = function (t) {
        var e, n = .1;
        return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / Math.PI * 2, n * Math.pow(2, -10 * t) * Math.sin((t - e) * Math.PI * 2 / .4) + 1)
    }, mt.easingElasticInOut = function (t) {
        var e, n = .1;
        return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / Math.PI * 2, (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * Math.PI * 2 / .4) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * Math.PI * 2 / .4) * .5 + 1)
    }, mt.easingBounceIn = function (t) {
        return 1 - mt.easingBounceOut(1 - t)
    }, mt.easingBounceOut = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, mt.easingBounceInOut = function (t) {
        return t < .5 ? .5 * mt.easingBounceIn(2 * t) : .5 * mt.easingBounceOut(2 * t - 1) + .5
    };
    var wt = function (t, e, n, i) {
            this[f] = "scroll" in n && (void 0 === t || null === t) ? j : t, this.playing = !1, this.reversed = !1, this.paused = !1, this._startTime = null, this._pauseTime = null, this._startFired = !1, this[h] = {};
            for (var r in i) this[h][r] = i[r];
            if (this[h].rpr = i.rpr || !1, this.valuesRepeat = {}, this[l] = {}, this[c] = {}, ht.call(this, n, "end"), this[h].rpr ? this[c] = e : ht.call(this, e, "start"), void 0 !== this[h].perspective && D in this[l]) {
                var s = "perspective(" + parseInt(this[h].perspective) + "px)";
                this[l][D].perspective = s
            }
            for (var a in this[l]) a in ot && !this[h].rpr && ot[a].call(this);
            this[h].chain = [], this[h].easing = dt(i.easing) || mt[x.easing] || mt.linear, this[h][v] = i[v] || x[v], this[h].repeatDelay = i.repeatDelay || x.repeatDelay, this[h][g] = i[g] || x[g], this[h].duration = i.duration || x.duration, this[h][p] = i[p] || x[p], this[v] = this[h][v]
        },
        yt = (wt.prototype = {
            start: function (t) {
                vt.call(this), this[h].rpr && gt.apply(this), st.apply(this);
                for (var e in this[l]) e in ot && this[h].rpr && ot[e].call(this), this.valuesRepeat[e] = this[c][e];
                return r.push(this), this.playing = !0, this.paused = !1, this._startFired = !1, this._startTime = t || n.now(), this._startTime += this[h][p], this._startFired || (this[h].start && this[h].start.call(), this._startFired = !0), !s && it(), this
            },
            play: function () {
                return this.paused && this.playing && (this.paused = !1, this[h].resume && this[h].resume.call(), this._startTime += n.now() - this._pauseTime, B(this), !s && it()), this
            },
            resume: function () {
                return this.play()
            },
            pause: function () {
                return !this.paused && this.playing && ($(this), this.paused = !0, this._pauseTime = n.now(), this[h].pause && this[h].pause.call()), this
            },
            stop: function () {
                return !this.paused && this.playing && ($(this), this.playing = !1, this.paused = !1, pt.call(this), this[h].stop && this[h].stop.call(), this.stopChainedTweens(), lt.call(this)), this
            },
            chain: function () {
                return this[h].chain = arguments, this
            },
            stopChainedTweens: function () {
                for (var t = 0, e = this[h].chain[a]; t < e; t++) this[h].chain[t].stop()
            }
        }, function (t, e, n) {
            this.tweens = [];
            for (var i = [], r = 0, s = t[a]; r < s; r++) i[r] = n || {}, n[p] = n[p] || x[p], i[r][p] = r > 0 ? n[p] + (n.offset || x.offset) : n[p], this.tweens.push(bt(t[r], e, i[r]))
        }),
        It = function (t, e, n, i) {
            this.tweens = [];
            for (var r = [], s = 0, o = t[a]; s < o; s++) r[s] = i || {}, i[p] = i[p] || x[p], r[s][p] = s > 0 ? i[p] + (i.offset || x.offset) : i[p], this.tweens.push(Mt(t[s], e, n, r[s]))
        },
        bt = (yt.prototype = It.prototype = {
            start: function (t) {
                t = t || n.now();
                for (var e = 0, i = this.tweens[a]; e < i; e++) this.tweens[e].start(t);
                return this
            },
            stop: function () {
                for (var t = 0, e = this.tweens[a]; t < e; t++) this.tweens[t].stop();
                return this
            },
            pause: function () {
                for (var t = 0, e = this.tweens[a]; t < e; t++) this.tweens[t].pause();
                return this
            },
            chain: function () {
                return this.tweens[this.tweens[a] - 1][h].chain = arguments, this
            },
            play: function () {
                for (var t = 0, e = this.tweens[a]; t < e; t++) this.tweens[t].play();
                return this
            },
            resume: function () {
                return this.play()
            }
        }, function (t, e, n) {
            return n = n || {}, n.rpr = !0, new wt(Y(t), e, e, n)
        }),
        Mt = function (t, e, n, i) {
            return i = i || {}, new wt(Y(t), e, n, i)
        },
        Ot = function (t, e, n) {
            return new yt(Y(t, !0), e, n)
        },
        kt = function (t, e, n, i) {
            return new It(Y(t, !0), e, n, i)
        };
    return document.addEventListener(Q, ft, !1), document.addEventListener("mouseenter", ft, !1), {
        property: P,
        getPrefix: E,
        selector: Y,
        processEasing: dt,
        defaultOptions: x,
        to: bt,
        fromTo: Mt,
        allTo: Ot,
        allFromTo: kt,
        ticker: it,
        tick: s,
        tweens: r,
        update: rt,
        dom: nt,
        parseProperty: ut,
        prepareStart: at,
        crossCheck: ot,
        Tween: wt,
        truD: X,
        truC: F,
        rth: _,
        htr: A,
        getCurrentStyle: Z
    }
});
