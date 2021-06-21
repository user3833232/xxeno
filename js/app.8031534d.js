(function(e) {
    function t(t) {
        for (var a, r, c = t[0], o = t[1], l = t[2], f = 0, d = []; f < c.length; f++) r = c[f], Object.prototype.hasOwnProperty.call(s, r) && s[r] && d.push(s[r][0]), s[r] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
        u && u(t);
        while (d.length) d.shift()();
        return i.push.apply(i, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, c = 1; c < n.length; c++) {
                var o = n[c];
                0 !== s[o] && (a = !1)
            }
            a && (i.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }
    var a = {},
        s = {
            app: 0
        },
        i = [];

    function r(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = a, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) r.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        o = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var l = 0; l < c.length; l++) t(c[l]);
    var u = o;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "034f": function(e, t, n) {
        "use strict";
        n("64a9")
    },
    "147a": function(e, t, n) {},
    "1c54": function(e, t, n) {
        e.exports = n.p + "https://xeno.finance/img/wind-power.f29f01b8.svg"
    },
    "33ff": function(e, t, n) {
        "use strict";
        n("696a")
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var a = n("2b0e"),
            s = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("Home")], 1)
            },
            i = [],
            r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("main", [e.src ? n("video", {
                    attrs: {
                        playsinline: "",
                        autoplay: "",
                        muted: "",
                        loop: "",
                        id: "bgvid",
                        src: e.src
                    },
                    domProps: {
                        muted: !0
                    }
                }) : e._e(), n("Header"), n("Hero"), n("SectionMiningEmissions")], 1)
            },
            c = [],
            o = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("header", {
                    staticClass: "nav"
                }, [n("nav", {
                    staticClass: "cfe-header"
                }, [n("div", {
                    staticClass: "flex-header container"
                }, [n("div", {
                    staticClass: "cfe-menu menu--left"
                }, [e._m(0), n("div", {
                    staticClass: "mobile-menu align-icon"
                }, [n("span", {
                    staticClass: "toggle-menu"
                }, [n("unicon", {
                    attrs: {
                        name: "draggabledots",
                        fill: "white"
                    }
                })], 1), n("span", {
                    staticClass: "toggle-close"
                }, [n("unicon", {
                    attrs: {
                        name: "angle-left",
                        fill: "white"
                    }
                })], 1)])]), e._m(1), n("div", {
                    staticClass: "cfe-menu menu--right"
                }, [e._m(2), n("div", {
                    staticClass: "mobile-connect align-icon"
                }, [n("unicon", {
                    attrs: {
                        name: "unlock",
                        fill: "white"
                    }
                })], 1)])])]), e._m(3)])
            },
            l = [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("ul", {
                    staticClass: "desktop-menu"
                }, [n("li", [n("a", {
                    attrs: {
                        href: "https://docs.xeno.finance"
                    }
                }, [e._v("Learn")])]), n("li", [n("a", {
                    attrs: {
                        href: "https://docs.xeno.finance"
                    }
                }, [e._v("Tokenomics")])]), n("li", [n("a", {
                    attrs: {
                        href: "https://docs.xeno.finance"
                    }
                }, [e._v("Contribute")])])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "cfe-menu menu--center"
                }, [a("img", {
                    attrs: {
                        src: n("f1e7")
                    }
                })])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "desktop-connect"
                }, [n("a", {
                    staticClass: "cfe-btn",
                    attrs: {
                        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa0676eb8abc30ce01e054f768a69308e4bf0d578"
                    }
                }, [e._v("Buy XENO")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "mobile-menu-container"
                }, [n("div", {
                    staticClass: "mobile-menu-inner"
                }, [n("ul", {
                    staticClass: "mob-menu-items"
                }, [n("li", [n("a", {
                    attrs: {
                        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa0676eb8abc30ce01e054f768a69308e4bf0d578"
                    }
                }, [e._v("Purchase")])]), n("li", [n("a", [e._v("Tokenomics")])]), n("li", [n("a", [e._v("Contribute")])])])])])
            }],
            u = (n("ac6a"), {
                name: "Header",
                props: {
                    msg: String
                },
                data: function() {
                    return {}
                },
                mounted: function() {
                    document.querySelector(".mobile-menu").addEventListener("click", (function() {
                        var e = 0;
                        document.querySelector(".mobile-menu-container").classList.toggle("open-menu"), setTimeout((function() {
                            var t = document.querySelectorAll(".mobile-menu-container ul li");
                            t.forEach((function(t) {
                                setTimeout((function() {
                                    t.classList.toggle("show-item")
                                }), e), e += 100
                            }))
                        }), 100)
                    }), !1)
                },
                methods: {
                    handleMenu: function() {}
                }
            }),
            f = u,
            d = (n("33ff"), n("2877")),
            m = Object(d["a"])(f, o, l, !1, null, "df2ce9b4", null),
            v = m.exports,
            p = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", {
                    staticClass: "cfe-hero"
                }, [n("div", {
                    staticClass: "container"
                }, [n("div", {
                    staticClass: "cfe-entry-hero"
                }, [n("h1", {
                    directives: [{
                        name: "scroll-reveal",
                        rawName: "v-scroll-reveal",
                        value: {
                            delay: 0
                        },
                        expression: "{ delay: 0 }"
                    }]
                }, [e._v("Yield farm, give back")]), n("h2", {
                    directives: [{
                        name: "scroll-reveal",
                        rawName: "v-scroll-reveal",
                        value: {
                            delay: 250
                        },
                        expression: "{ delay: 250 }"
                    }]
                }, [e._v("\n        A distributed charity and eco initiative\n      ")]), n("div", {
                    directives: [{
                        name: "scroll-reveal",
                        rawName: "v-scroll-reveal",
                        value: {
                            delay: 500
                        },
                        expression: "{ delay: 500 }"
                    }],
                    staticClass: "cfe-entry-ctas"
                }, [n("a", {
                    staticClass: "cfe-btn",
                    attrs: {
                        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa0676eb8abc30ce01e054f768a69308e4bf0d578"
                    }
                }, [e._v("Get Started")]), n("a", {
                    directives: [{
                        name: "smooth-scroll",
                        rawName: "v-smooth-scroll"
                    }],
                    staticClass: "cfe-btn-secondary",
                    attrs: {
                        href: "#sec-1"
                    }
                }, [n("div", {
                    staticClass: "text-icon"
                }, [n("span", {
                    staticClass: "align-icon"
                }, [e._v("Learn more below")]), n("span", {
                    staticClass: "align-icon"
                }, [n("unicon", {
                    attrs: {
                        name: "arrow-up-right",
                        fill: "white"
                    }
                })], 1)])]), n("div", {
                    staticClass: "socials-entry"
                }, [n("div", {
                    staticClass: "text-icon"
                }, [n("span", {
                    staticClass: "align-icon"
                }, [n("a", {
                    attrs: {
                        href: "https://t.me/xenofinance"
                    }
                }, [n("unicon", {
                    attrs: {
                        name: "telegram",
                        fill: "white"
                    }
                })], 1)])])])])])])])
            },
            h = [],
            b = {
                name: "Hero",
                props: {},
                mounted: function() {
                    document.querySelector(".cfe-btn-secondary").addEventListener("click", (function() {
                        document.querySelector(".cfe-btn-secondary .unicon").classList.add("learn-more-click"), setTimeout((function() {
                            document.querySelector(".cfe-btn-secondary .unicon").classList.remove("learn-more-click")
                        }), 1e3)
                    })), window.addEventListener("scroll", (function() {
                        var e = window.scrollY;
                        document.querySelector("video").style.filter = "blur(".concat(e / 60, "px)")
                    }))
                }
            },
            g = b,
            y = (n("c475"), Object(d["a"])(g, p, h, !1, null, null, null)),
            _ = y.exports,
            w = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", {
                    staticClass: "cfe-emissions",
                    attrs: {
                        id: "sec-1"
                    }
                }, [n("div", {
                    staticClass: "container"
                }, [n("div", {
                    directives: [{
                        name: "scroll-reveal",
                        rawName: "v-scroll-reveal.reset",
                        value: {
                            delay: 800
                        },
                        expression: "{ delay: 800 }",
                        modifiers: {
                            reset: !0
                        }
                    }],
                    staticClass: "content-wrapper"
                }, [e._m(0), e._m(1)]), n("div", {
                    directives: [{
                        name: "scroll-reveal",
                        rawName: "v-scroll-reveal.reset",
                        value: {
                            delay: 800
                        },
                        expression: "{ delay: 800 }",
                        modifiers: {
                            reset: !0
                        }
                    }],
                    staticClass: "content-wrapper"
                }, [e._m(2), e._m(3)]), n("div", {
                    directives: [{
                        name: "scroll-reveal",
                        rawName: "v-scroll-reveal",
                        value: {
                            delay: 800
                        },
                        expression: "{ delay: 800 }"
                    }],
                    staticClass: "content-wrapper"
                }, [e._m(4), e._m(5)])])])
            },
            C = [function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "image-content"
                }, [a("img", {
                    attrs: {
                        src: n("aefa")
                    }
                })])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "text-content"
                }, [n("div", {
                    staticClass: "text-block"
                }, [n("h3", [e._v("Blockchain technology has revolutionized how we do business")]), n("h4", [e._v("\n            This has come at a great cost. Carbon emissions related to bitcoin\n            mining operations are reaching a tipping point, which further\n            endangers our already compromised ecosystem. A single bitcoin\n            transaction has a carbon footprint of 359.04 kgCO2 – equivalent to\n            the carbon footprint of 795,752 VISA transactions or 59,840 hours\n            of watching YouTube.\n          ")])]), n("a", {
                    staticClass: "cfe-btn",
                    attrs: {
                        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa0676eb8abc30ce01e054f768a69308e4bf0d578"
                    }
                }, [e._v("Purchase")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "text-content"
                }, [n("div", {
                    staticClass: "text-block"
                }, [n("h3", [e._v("\n            You can make a difference, while saving our beautiful planet\n          ")]), n("h4", [e._v("\n            Stake your coins in our innovative yield-farming protocol and\n            receive returns, all while at the same time, giving a tiny, small,\n            fraction of them to charitative and ecological organizations. Earn\n            profit while neutralizing your carbon footprint!\n          ")])]), n("a", {
                    staticClass: "cfe-btn",
                    attrs: {
                        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa0676eb8abc30ce01e054f768a69308e4bf0d578"
                    }
                }, [e._v("Purchase")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "image-content"
                }, [a("img", {
                    attrs: {
                        src: n("e507")
                    }
                })])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "image-content"
                }, [a("img", {
                    attrs: {
                        src: n("1c54")
                    }
                })])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "text-content"
                }, [n("div", {
                    staticClass: "text-block"
                }, [n("h3", [e._v("It doesn't have to be bad ")]), n("h4", [e._v("\n            Most charity tokens or yield farming\n            protocols follow a very predictable pattern - they either include\n            a more than questionable transaction fee on their tokenomics or\n            they include some ghastly, shady feature that makes the coin\n            unsustainable. With Xeno, all you have to do is farm your coins,\n            get profits, and help those around you (and yourself)\n          ")])]), n("a", {
                    staticClass: "cfe-btn",
                    attrs: {
                        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa0676eb8abc30ce01e054f768a69308e4bf0d578"
                    }
                }, [e._v("Purchase")])])
            }],
            x = {
                name: "SectionMiningEmissions",
                props: {},
                data: function() {
                    return {}
                },
                mounted: function() {}
            },
            k = x,
            E = (n("e003"), Object(d["a"])(k, w, C, !1, null, null, null)),
            S = E.exports,
            O = {
                name: "Home",
                components: {
                    Header: v,
                    Hero: _,
                    SectionMiningEmissions: S
                },
                props: {},
                data: function() {
                    return {
                        src: "",
                        videos: ["https://xeno.finance/assets/tropical.mp4"]
                    }
                },
                mounted: function() {
                    this.src = this.videos[Math.floor(Math.random() * this.videos.length)]
                }
            },
            $ = O,
            j = (n("707a"), Object(d["a"])($, r, c, !1, null, null, null)),
            P = j.exports,
            M = {
                name: "cfe-main",
                components: {
                    Home: P
                }
            },
            H = M,
            L = (n("034f"), Object(d["a"])(H, s, i, !1, null, null, null)),
            T = L.exports,
            q = n("cb81"),
            N = n.n(q),
            z = n("d327"),
            A = n("45e3"),
            Y = n("4c95"),
            B = n.n(Y);
        N.a.add([z["e"], z["f"], z["g"], z["d"], z["b"], z["a"], z["c"], z["m"], z["h"], z["l"], z["i"], z["k"], z["j"]]), a["a"].use(N.a), a["a"].use(A["a"], {
            duration: 1200,
            updateHistory: !1
        }), a["a"].use(B.a, {
            class: "v-scroll-reveal",
            duration: 800,
            scale: 1.05,
            distance: "10px",
            mobile: !0,
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            afterReveal: function(e) {
                e.classList.remove("v-scroll-reveal")
            }
        }), a["a"].config.productionTip = !1, new a["a"]({
            render: function(e) {
                return e(T)
            }
        }).$mount("#app")
    },
    "64a9": function(e, t, n) {},
    "696a": function(e, t, n) {},
    "707a": function(e, t, n) {
        "use strict";
        n("e739")
    },
    aefa: function(e, t, n) {
        e.exports = n.p + "https://xeno.finance/img/save-energy.24def589.svg"
    },
    c475: function(e, t, n) {
        "use strict";
        n("f460")
    },
    e003: function(e, t, n) {
        "use strict";
        n("147a")
    },
    e507: function(e, t, n) {
        e.exports = n.p + "https://xeno.finance/img/tree.24dfdc48.svg"
    },
    e739: function(e, t, n) {},
    f1e7: function(e, t, n) {
        e.exports = n.p + "https://xeno.finance/img/xeno-white.05138cc7.svg"
    },
    f460: function(e, t, n) {}
});
//# sourceMappingURL=app.8031534d.js.map
