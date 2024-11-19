!function() {

	"use strict";
    function t() {}
    function e(t) {
        return t()
    }
    function n() {
        return Object.create(null)
    }
    function i(t) {
        t.forEach(e)
    }
    function I(t) {
        return "function" == typeof t
    }
    let l, c;
    function o(t, e) {
        return l || (l = document.createElement("a")),
        l.href = e,
        t === l.href
    }
    function g(t, e) {
        return t != t ? e == e : t !== e
    }
    function a(e, n, i) {
        e.$$.on_destroy.push(function(e, ...n) {
            if (null == e)
                return t;
            const i = e.subscribe(...n);
            return i.unsubscribe ? ()=>i.unsubscribe() : i
        }(n, i))
    }
    function r(t, e, n, i) {
        return t[1] && i ? function(t, e) {
            for (const n in e)
                t[n] = e[n];
            return t
        }(n.ctx.slice(), t[1](i(e))) : n.ctx
    }
    function u(e) {
        return e && I(e.destroy) ? e.destroy : t
    }
    function d(t, e) {
        t.appendChild(e)
    }
    function s(t, e, n) {
        t.insertBefore(e, n || null)
    }
    function p(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }
    function C(t, e) {
        for (let n = 0; n < t.length; n += 1)
            t[n] && t[n].d(e)
    }
    function A(t) {
        return document.createElement(t)
    }
    function m(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }
    function N(t) {
        return document.createTextNode(t)
    }
    function b() {
        return N(" ")
    }
    function Z() {
        return N("")
    }
    function y(t, e, n, i) {
        return t.addEventListener(e, n, i),
        ()=>t.removeEventListener(e, n, i)
    }
    function D(t, e, n) {
        null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
    }
    function M(t, e) {
        e = "" + e,
        t.data !== e && (t.data = e)
    }
    function v(t, e, n, i) {
        null == n ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "")
    }
    function h(t, e, n) {
        t.classList[n ? "add" : "remove"](e)
    }
    function j(t, e) {
        return new t(e)
    }
    function f(t) {
        c = t
    }
    function G() {
        if (!c)
            throw new Error("Function called outside component initialization");
        return c
    }
    function T(t) {
        G().$$.after_update.push(t)
    }
    function w() {
        const t = G();
        return (e,n,{cancelable: i=!1}={})=>{
            const I = t.$$.callbacks[e];
            if (I) {
                const l = function(t, e, {bubbles: n=!1, cancelable: i=!1}={}) {
                    const I = document.createEvent("CustomEvent");
                    return I.initCustomEvent(t, n, i, e),
                    I
                }(e, n, {
                    cancelable: i
                });
                return I.slice().forEach((e=>{
                    e.call(t, l)
                }
                )),
                !l.defaultPrevented
            }
            return !0
        }
    }
    function W(t, e) {
        return G().$$.context.set(t, e),
        e
    }
    function z(t) {
        return G().$$.context.get(t)
    }
    const S = []
      , O = [];
    let Y = [];
    const x = []
      , k = Promise.resolve();
    let P = !1;
    function L(t) {
        Y.push(t)
    }
    const R = new Set;
    let Q = 0;
    function B() {
        if (0 !== Q)
            return;
        const t = c;
        do {
            try {
                for (; Q < S.length; ) {
                    const t = S[Q];
                    Q++,
                    f(t),
                    U(t.$$)
                }
            } catch (t) {
                throw S.length = 0,
                Q = 0,
                t
            }
            for (f(null),
            S.length = 0,
            Q = 0; O.length; )
                O.pop()();
            for (let t = 0; t < Y.length; t += 1) {
                const e = Y[t];
                R.has(e) || (R.add(e),
                e())
            }
            Y.length = 0
        } while (S.length);
        for (; x.length; )
            x.pop()();
        P = !1,
        R.clear(),
        f(t)
    }
    function U(t) {
        if (null !== t.fragment) {
            t.update(),
            i(t.before_update);
            const e = t.dirty;
            t.dirty = [-1],
            t.fragment && t.fragment.p(t.ctx, e),
            t.after_update.forEach(L)
        }
    }
    const $ = new Set;
    let E;
    function X() {
        E = {
            r: 0,
            c: [],
            p: E
        }
    }
    function F() {
        E.r || i(E.c),
        E = E.p
    }
    function H(t, e) {
        t && t.i && ($.delete(t),
        t.i(e))
    }
    function J(t, e, n, i) {
        if (t && t.o) {
            if ($.has(t))
                return;
            $.add(t),
            E.c.push((()=>{
                $.delete(t),
                i && (n && t.d(1),
                i())
            }
            )),
            t.o(e)
        } else
            i && i()
    }
    function V(t, e) {
        t.d(1),
        e.delete(t.key)
    }
    function K(t, e) {
        J(t, 1, 1, (()=>{
            e.delete(t.key)
        }
        ))
    }
    function _(t, e, n, I, l, c, o, g, a, r, u, d) {
        let s = t.length
          , p = c.length
          , C = s;
        const A = {};
        for (; C--; )
            A[t[C].key] = C;
        const m = []
          , N = new Map
          , b = new Map
          , Z = [];
        for (C = p; C--; ) {
            const t = d(l, c, C)
              , i = n(t);
            let g = o.get(i);
            g ? I && Z.push((()=>g.p(t, e))) : (g = r(i, t),
            g.c()),
            N.set(i, m[C] = g),
            i in A && b.set(i, Math.abs(C - A[i]))
        }
        const y = new Set
          , D = new Set;
        function M(t) {
            H(t, 1),
            t.m(g, u),
            o.set(t.key, t),
            u = t.first,
            p--
        }
        for (; s && p; ) {
            const e = m[p - 1]
              , n = t[s - 1]
              , i = e.key
              , I = n.key;
            e === n ? (u = e.first,
            s--,
            p--) : N.has(I) ? !o.has(i) || y.has(i) ? M(e) : D.has(I) ? s-- : b.get(i) > b.get(I) ? (D.add(i),
            M(e)) : (y.add(I),
            s--) : (a(n, o),
            s--)
        }
        for (; s--; ) {
            const e = t[s];
            N.has(e.key) || a(e, o)
        }
        for (; p; )
            M(m[p - 1]);
        return i(Z),
        m
    }
    function q(t) {
        t && t.c()
    }
    function tt(t, n, l, c) {
        const {fragment: o, after_update: g} = t.$$;
        o && o.m(n, l),
        c || L((()=>{
            const n = t.$$.on_mount.map(e).filter(I);
            t.$$.on_destroy ? t.$$.on_destroy.push(...n) : i(n),
            t.$$.on_mount = []
        }
        )),
        g.forEach(L)
    }
    function et(t, e) {
        const n = t.$$;
        null !== n.fragment && (!function(t) {
            const e = []
              , n = [];
            Y.forEach((i=>-1 === t.indexOf(i) ? e.push(i) : n.push(i))),
            n.forEach((t=>t())),
            Y = e
        }(n.after_update),
        i(n.on_destroy),
        n.fragment && n.fragment.d(e),
        n.on_destroy = n.fragment = null,
        n.ctx = [])
    }
    function nt(t, e) {
        -1 === t.$$.dirty[0] && (S.push(t),
        P || (P = !0,
        k.then(B)),
        t.$$.dirty.fill(0)),
        t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }
    function it(e, I, l, o, g, a, r, u=[-1]) {
        const d = c;
        f(e);
        const s = e.$$ = {
            fragment: null,
            ctx: [],
            props: a,
            update: t,
            not_equal: g,
            bound: n(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(I.context || (d ? d.$$.context : [])),
            callbacks: n(),
            dirty: u,
            skip_bound: !1,
            root: I.target || d.$$.root
        };
        r && r(s.root);
        let C = !1;
        if (s.ctx = l ? l(e, I.props || {}, ((t,n,...i)=>{
            const I = i.length ? i[0] : n;
            return s.ctx && g(s.ctx[t], s.ctx[t] = I) && (!s.skip_bound && s.bound[t] && s.bound[t](I),
            C && nt(e, t)),
            n
        }
        )) : [],
        s.update(),
        C = !0,
        i(s.before_update),
        s.fragment = !!o && o(s.ctx),
        I.target) {
            if (I.hydrate) {
                const t = function(t) {
                    return Array.from(t.childNodes)
                }(I.target);
                s.fragment && s.fragment.l(t),
                t.forEach(p)
            } else
                s.fragment && s.fragment.c();
            I.intro && H(e.$$.fragment),
            tt(e, I.target, I.anchor, I.customElement),
            B()
        }
        f(d)
    }
    class It {
        $destroy() {
            et(this, 1),
            this.$destroy = t
        }
        $on(e, n) {
            if (!I(n))
                return t;
            const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return i.push(n),
            ()=>{
                const t = i.indexOf(n);
                -1 !== t && i.splice(t, 1)
            }
        }
        $set(t) {
            var e;
            this.$$set && (e = t,
            0 !== Object.keys(e).length) && (this.$$.skip_bound = !0,
            this.$$set(t),
            this.$$.skip_bound = !1)
        }
    }
    var lt, ct, ot;
    function gt(t) {
        return t.rotation ? t.rotation : t.pinType === ct.INPUT ? ot.LEFT : t.pinType === ct.OUTPUT ? ot.RIGHT : void 0
    }
    function at(t, e) {
        if (t.x)
            return t.x;
        {
            const n = gt(t);
            if (n === ot.LEFT)
                return 0;
            if (n === ot.RIGHT)
                return e
        }
    }
    function rt(t, e) {
        if (t.y)
            return t.y;
        {
            const n = gt(t);
            if (n === ot.UP)
                return 0;
            if (n === ot.DOWN)
                return e
        }
    }
    function ut(t, e) {
        return [...t.slice(0, e - 1), t[e], t[e - 1], ...t.slice(e + 1)]
    }
    !function(t) {
        t.AND = "AND",
        t.OR = "OR",
        t.NOT = "NOT",
        t.NAND = "NAND",
        t.NOR = "NOR",
        t.XOR = "XOR",
        t.SWITCH = "SWITCH",
        t.LED = "LED",
        t.CONST_0 = "CONST_0",
        t.CONST_1 = "CONST_1",
        t.SEVEN_SEGMENT = "SEVEN_SEGMENT",
        t.BINARY_INPUT = "BINARY_INPUT",
        t.BINARY_DISPLAY = "BINARY_DISPLAY",
        t.HA = "HA",
        t.VA = "VA",
        t.SEVEN_SEGMENT_DECODER = "SEVEN_SEGMENT_DECODER",
        t.MUX = "MUX",
        t.DEMUX = "DEMUX",
        t.RS_ASYNC = "RS_ASYNC",
        t.RS_POS_TAKT_ZUSTAND = "RS_POS_TAKT_ZUSTAND",
        t.RS_POS_TAKT_FLANKE = "RS_POS_CLOCK_FLANKE",
        t.D_MS_1FLANKE = "D_MS_1FLANKE",
        t.D_MS_2FLANKEN = "D_POS_TAKT_FLANKE",
        t.REG_4BIT = "REG_4BIT",
        t.SHIFT_REG_4BIT = "SHIFT_REG_4BIT",
        t.CLOCK = "CLOCK",
        t.MODULE = "Module"
    }(lt || (lt = {})),
    function(t) {
        t.INPUT = "INPUT",
        t.OUTPUT = "OUTPUT"
    }(ct || (ct = {})),
    function(t) {
        t[t.RIGHT = 0] = "RIGHT",
        t[t.DOWN = 90] = "DOWN",
        t[t.LEFT = 180] = "LEFT",
        t[t.UP = 270] = "UP"
    }(ot || (ot = {}));
    const dt = t=>t.slice(0, t.length - 1)
      , st = t=>t[t.length - 1]
      , pt = t=>e=>{
        const n = {};
        for (let i of Object.getOwnPropertyNames(e)) {
            n[t(e[i], i)] = e[i]
        }
        return n
    }
      , Ct = {
        2: [{
            pinType: ct.INPUT,
            y: 10
        }, {
            pinType: ct.INPUT,
            y: 30
        }],
        3: [{
            pinType: ct.INPUT,
            y: 10
        }, {
            pinType: ct.INPUT,
            y: 20
        }, {
            pinType: ct.INPUT,
            y: 30
        }],
        4: [{
            pinType: ct.INPUT,
            y: 10
        }, {
            pinType: ct.INPUT,
            y: 20
        }, {
            pinType: ct.INPUT,
            y: 30
        }, {
            pinType: ct.INPUT,
            y: 40
        }],
        5: [{
            pinType: ct.INPUT,
            y: 10
        }, {
            pinType: ct.INPUT,
            y: 20
        }, {
            pinType: ct.INPUT,
            y: 30
        }, {
            pinType: ct.INPUT,
            y: 40
        }, {
            pinType: ct.INPUT,
            y: 50
        }]
    }
      , At = [{
        pinType: ct.OUTPUT,
        y: 20
    }]
      , mt = [{
        pinType: ct.OUTPUT,
        y: 20,
        inverted: !0
    }]
      , Nt = t=>void 0 !== t.defaultState
      , bt = {
        [lt.AND]: {
            name: "AND",
            label: "&",
            outputPins: At,
            eval: t=>[t.reduce(((t,e)=>t && e))],
            width: 30,
            minHeight: 40
        },
        [lt.OR]: {
            name: "OR",
            label: "≥1",
            outputPins: At,
            eval: t=>[t.reduce(((t,e)=>t || e))],
            width: 30,
            minHeight: 40
        },
        [lt.NOT]: {
            name: "NOT",
            label: "1",
            inputPins: [{
                pinType: ct.INPUT,
                y: 20
            }],
            outputPins: mt,
            eval: t=>[!t[0]],
            width: 30,
            minHeight: 40
        },
        [lt.NOR]: {
            name: "NOR",
            label: "≥1",
            outputPins: mt,
            eval: t=>[!t.reduce(((t,e)=>t || e))],
            width: 30,
            minHeight: 40
        },
        [lt.NAND]: {
            name: "NAND",
            label: "&",
            outputPins: mt,
            eval: t=>[!t.reduce(((t,e)=>t && e))],
            width: 30,
            minHeight: 40
        },
        [lt.XOR]: {
            name: "XOR",
            label: "=1",
            outputPins: At,
            eval: t=>{
                return [(e = t.reduce(((t,e)=>e ? t + 1 : t), 0),
                e % 2 == 1)];
                var e
            }
            ,
            width: 30,
            minHeight: 40
        },
        [lt.SWITCH]: {
            name: "Schalter",
            inputPins: [],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 30
            }],
            width: 50,
            minHeight: 60
        },
        [lt.LED]: {
            name: "LED",
            inputPins: [{
                pinType: ct.INPUT,
                y: 30
            }],
            outputPins: [],
            width: 50,
            minHeight: 60
        },
        [lt.CONST_0]: {
            name: "0 konstant",
            label: "0",
            inputPins: [],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 10
            }],
            eval: ()=>[!1],
            width: 20,
            minHeight: 20,
            drawRect: !1
        },
        [lt.CONST_1]: {
            name: "1 konstant",
            label: "1",
            inputPins: [],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 10
            }],
            eval: ()=>[!0],
            width: 20,
            minHeight: 20,
            drawRect: !1
        },
        [lt.SEVEN_SEGMENT]: {
            name: "7-Segmentanzeige",
            inputPins: [{
                pinType: ct.INPUT,
                y: 10,
                label: "0"
            }, {
                pinType: ct.INPUT,
                y: 20,
                label: "1"
            }, {
                pinType: ct.INPUT,
                y: 30,
                label: "2"
            }, {
                pinType: ct.INPUT,
                y: 40,
                label: "3"
            }, {
                pinType: ct.INPUT,
                y: 50,
                label: "4"
            }, {
                pinType: ct.INPUT,
                y: 60,
                label: "5"
            }, {
                pinType: ct.INPUT,
                y: 70,
                label: "6"
            }],
            outputPins: [],
            width: 60,
            minHeight: 80
        },
        [lt.BINARY_INPUT]: {
            name: "Binäreingabe",
            inputPins: [],
            outputPins: [{
                y: 10,
                pinType: ct.OUTPUT,
                label: "0"
            }, {
                y: 20,
                pinType: ct.OUTPUT,
                label: "1"
            }, {
                y: 30,
                pinType: ct.OUTPUT,
                label: "2"
            }, {
                y: 40,
                pinType: ct.OUTPUT,
                label: "3"
            }, {
                y: 50,
                pinType: ct.OUTPUT,
                label: "4"
            }, {
                y: 60,
                pinType: ct.OUTPUT,
                label: "5"
            }, {
                y: 70,
                pinType: ct.OUTPUT,
                label: "6"
            }, {
                y: 80,
                pinType: ct.OUTPUT,
                label: "7"
            }],
            width: 70,
            minHeight: 90
        },
        [lt.BINARY_DISPLAY]: {
            name: "Binärdisplay",
            inputPins: [{
                y: 10,
                pinType: ct.INPUT,
                label: "0"
            }, {
                y: 20,
                pinType: ct.INPUT,
                label: "1"
            }, {
                y: 30,
                pinType: ct.INPUT,
                label: "2"
            }, {
                y: 40,
                pinType: ct.INPUT,
                label: "3"
            }, {
                y: 50,
                pinType: ct.INPUT,
                label: "4"
            }, {
                y: 60,
                pinType: ct.INPUT,
                label: "5"
            }, {
                y: 70,
                pinType: ct.INPUT,
                label: "6"
            }, {
                y: 80,
                pinType: ct.INPUT,
                label: "7"
            }],
            outputPins: [],
            width: 60,
            minHeight: 90
        },
        [lt.HA]: {
            name: "Halbaddierer",
            label: "HA",
            inputPins: [{
                pinType: ct.INPUT,
                y: 10,
                label: "a"
            }, {
                pinType: ct.INPUT,
                y: 30,
                label: "b"
            }],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 10,
                label: "s"
            }, {
                pinType: ct.OUTPUT,
                y: 50,
                label: "ü"
            }],
            eval: ([t,e])=>[t != e, t && e],
            width: 50,
            minHeight: 60
        },
        [lt.VA]: {
            name: "Volladdierer",
            label: "VA",
            inputPins: [{
                pinType: ct.INPUT,
                y: 10,
                label: "a"
            }, {
                pinType: ct.INPUT,
                y: 30,
                label: "b"
            }, {
                pinType: ct.INPUT,
                y: 50,
                label: "ü"
            }],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 10,
                label: "s"
            }, {
                pinType: ct.OUTPUT,
                y: 50,
                label: "ü"
            }],
            eval: ([t,e,n])=>[!t && !e && n || !t && e && !n || t && !e && !n || t && e && n, e && n || t && n || t && e],
            width: 50,
            minHeight: 60
        },
        [lt.SEVEN_SEGMENT_DECODER]: {
            name: "7-Segmentdecoder",
            label: "7Seg",
            inputPins: [{
                pinType: ct.INPUT,
                y: 10,
                label: "0"
            }, {
                pinType: ct.INPUT,
                y: 20,
                label: "1"
            }, {
                pinType: ct.INPUT,
                y: 30,
                label: "2"
            }, {
                pinType: ct.INPUT,
                y: 40,
                label: "3"
            }],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 10,
                label: "0"
            }, {
                pinType: ct.OUTPUT,
                y: 20,
                label: "1"
            }, {
                pinType: ct.OUTPUT,
                y: 30,
                label: "2"
            }, {
                pinType: ct.OUTPUT,
                y: 40,
                label: "3"
            }, {
                pinType: ct.OUTPUT,
                y: 50,
                label: "4"
            }, {
                pinType: ct.OUTPUT,
                y: 60,
                label: "5"
            }, {
                pinType: ct.OUTPUT,
                y: 70,
                label: "6"
            }],
            eval: ([t,e,n,i])=>[!i && e || !i && n && t || i && !n && !e || !i && !n && !t, !i && !n || !i && !e && !t || !i && e && t || !n && !e, !i && t || !i && n || !n && !e, !i && !n && e || !i && n && !e && t || !i && e && !t || i && !n && !e || !i && !n && !t, !i && e && !t || !n && !e && !t, !i && n && !e || !i && n && !t || i && !n && !e || !i && !e && !t, !i && !n && e || !i && n && !e || i && !n && !e || !i && n && !t],
            width: 60,
            minHeight: 80
        },
        [lt.MUX]: {
            name: "Multiplexer",
            label: "MUX",
            inputPins: [{
                pinType: ct.INPUT,
                y: 20,
                label: "d0"
            }, {
                pinType: ct.INPUT,
                y: 40,
                label: "d1"
            }, {
                pinType: ct.INPUT,
                x: 20,
                y: 55,
                label: "s",
                rotation: ot.DOWN
            }],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 30,
                label: "Y"
            }],
            width: 40,
            minHeight: 50,
            eval: ([t,e,n])=>[!n && t || n && e]
        },
        [lt.DEMUX]: {
            name: "Demultiplexer",
            label: "DEMUX",
            inputPins: [{
                pinType: ct.INPUT,
                y: 30,
                label: "l"
            }, {
                pinType: ct.INPUT,
                x: 20,
                y: 55,
                label: "s",
                rotation: ot.DOWN
            }],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 20,
                label: "D0"
            }, {
                pinType: ct.OUTPUT,
                y: 40,
                label: "D1"
            }],
            width: 40,
            minHeight: 40,
            eval: ([t,e])=>[t && !e, t && e]
        },
        [lt.RS_ASYNC]: {
            name: "RS async",
            label: "",
            inputPins: [{
                pinType: ct.INPUT,
                y: 10,
                label: "1S"
            }, {
                pinType: ct.INPUT,
                y: 30,
                label: "1R"
            }],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 10
            }, {
                pinType: ct.OUTPUT,
                y: 30,
                inverted: !0
            }],
            eval: ([t,e],n)=>e || t ? !e && t ? [[!0, !1], {
                savedValue: !0
            }] : e && !t ? [[!1, !0], {
                savedValue: !1
            }] : e && t ? [[!1, !1], {
                savedValue: !1
            }] : void 0 : [[n.savedValue, !n.savedValue], n],
            defaultState: {
                savedValue: !1
            },
            width: 40,
            minHeight: 40
        },
        [lt.RS_POS_TAKT_ZUSTAND]: {
            name: "RS Taktzustand",
            label: "",
            inputPins: [{
                pinType: ct.INPUT,
                y: 10,
                label: "1S"
            }, {
                pinType: ct.INPUT,
                y: 20,
                label: "C1"
            }, {
                pinType: ct.INPUT,
                y: 30,
                label: "1R"
            }],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 10
            }, {
                pinType: ct.OUTPUT,
                y: 30
            }],
            eval: ([t,e,n],i)=>e && (n || t) ? !n && t ? [[!0, !1], {
                savedValue: !0
            }] : n && !t ? [[!1, !0], {
                savedValue: !1
            }] : n && t ? [[!1, !1], {
                savedValue: !1
            }] : void 0 : [[i.savedValue, !i.savedValue], i],
            defaultState: {
                savedValue: !1
            },
            width: 40,
            minHeight: 40
        },
        [lt.D_MS_1FLANKE]: {
            name: "D MS 1 Flanke",
            label: "",
            inputPins: [{
                pinType: ct.INPUT,
                y: 10,
                label: "1D"
            }, {
                pinType: ct.INPUT,
                y: 20,
                label: "C1"
            }],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 10
            }, {
                pinType: ct.OUTPUT,
                y: 30,
                inverted: !0
            }],
            eval: ([t,e],n)=>{
                if (e) {
                    const i = Object.assign(Object.assign({}, n), {
                        savedValueMaster: t,
                        cOld: e
                    });
                    return [[n.savedValueSlave, !n.savedValueSlave], i]
                }
                if (n.cOld && !e) {
                    const t = Object.assign(Object.assign({}, n), {
                        savedValueSlave: n.savedValueMaster,
                        cOld: e
                    });
                    return [[t.savedValueSlave, !t.savedValueSlave], t]
                }
                return [[n.savedValueSlave, !n.savedValueSlave], Object.assign(Object.assign({}, n), {
                    cOld: e
                })]
            }
            ,
            defaultState: {
                savedValueSlave: !1,
                savedValueMaster: !1,
                cOld: !1
            },
            width: 40,
            minHeight: 40
        },
        [lt.D_MS_2FLANKEN]: {
            name: "D MS 2 Flanken",
            label: "",
            inputPins: [{
                pinType: ct.INPUT,
                y: 10,
                label: "1D"
            }, {
                pinType: ct.INPUT,
                y: 20,
                label: "C1",
                triangle: !0
            }],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 10
            }, {
                pinType: ct.OUTPUT,
                y: 30,
                inverted: !0
            }],
            eval: ([t,e],n)=>{
                if (!n.cOld && e) {
                    const i = Object.assign(Object.assign({}, n), {
                        savedValueMaster: t,
                        cOld: e
                    });
                    return [[n.savedValueSlave, !n.savedValueSlave], i]
                }
                if (n.cOld && !e) {
                    const t = Object.assign(Object.assign({}, n), {
                        savedValueSlave: n.savedValueMaster,
                        cOld: e
                    });
                    return [[t.savedValueSlave, !t.savedValueSlave], t]
                }
                return [[n.savedValueSlave, !n.savedValueSlave], Object.assign(Object.assign({}, n), {
                    cOld: e
                })]
            }
            ,
            defaultState: {
                savedValueSlave: !1,
                savedValueMaster: !1,
                cOld: !1
            },
            width: 40,
            minHeight: 40
        },
        [lt.SHIFT_REG_4BIT]: {
            name: "Schieberegister 4 Bit",
            label: "",
            inputPins: [{
                pinType: ct.INPUT,
                y: 10,
                label: "D"
            }, {
                pinType: ct.INPUT,
                y: 20,
                label: "C"
            }, {
                pinType: ct.INPUT,
                y: 30,
                label: "S/L̅"
            }, {
                pinType: ct.INPUT,
                y: 40,
                label: "R"
            }, {
                pinType: ct.INPUT,
                y: 60,
                label: "D0"
            }, {
                pinType: ct.INPUT,
                y: 70,
                label: "D1"
            }, {
                pinType: ct.INPUT,
                y: 80,
                label: "D2"
            }, {
                pinType: ct.INPUT,
                y: 90,
                label: "D3"
            }],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 60,
                label: "0"
            }, {
                pinType: ct.OUTPUT,
                y: 70,
                label: "1"
            }, {
                pinType: ct.OUTPUT,
                y: 80,
                label: "2"
            }, {
                pinType: ct.OUTPUT,
                y: 90,
                label: "3"
            }],
            eval: ([t,e,n,i,I,l,c,o],g)=>{
                if (!g.cOld && e) {
                    let a;
                    return a = i ? Object.assign(Object.assign({}, g), {
                        master3: !1,
                        master2: !1,
                        master1: !1,
                        master0: !1,
                        cOld: e
                    }) : n ? Object.assign(Object.assign({}, g), {
                        master3: t,
                        master2: g.slave3,
                        master1: g.slave2,
                        master0: g.slave1,
                        cOld: e
                    }) : Object.assign(Object.assign({}, g), {
                        master3: o,
                        master2: c,
                        master1: l,
                        master0: I,
                        cOld: e
                    }),
                    [[a.slave0, a.slave1, a.slave2, a.slave3], a]
                }
                if (g.cOld && !e) {
                    const t = Object.assign(Object.assign({}, g), {
                        slave3: g.master3,
                        slave2: g.master2,
                        slave1: g.master1,
                        slave0: g.master0,
                        cOld: e
                    });
                    return [[t.slave0, t.slave1, t.slave2, t.slave3], t]
                }
                return [[g.slave0, g.slave1, g.slave2, g.slave3], Object.assign(Object.assign({}, g), {
                    cOld: e
                })]
            }
            ,
            defaultState: {
                savedValue: !1,
                cOld: !1
            },
            width: 60,
            minHeight: 100
        },
        [lt.REG_4BIT]: {
            name: "Register 4 Bit",
            label: "",
            inputPins: [{
                pinType: ct.INPUT,
                y: 10,
                label: "C"
            }, {
                pinType: ct.INPUT,
                y: 20,
                label: "R"
            }, {
                pinType: ct.INPUT,
                y: 40,
                label: "D0"
            }, {
                pinType: ct.INPUT,
                y: 50,
                label: "D1"
            }, {
                pinType: ct.INPUT,
                y: 60,
                label: "D2"
            }, {
                pinType: ct.INPUT,
                y: 70,
                label: "D3"
            }],
            outputPins: [{
                pinType: ct.OUTPUT,
                y: 40,
                label: "0"
            }, {
                pinType: ct.OUTPUT,
                y: 50,
                label: "1"
            }, {
                pinType: ct.OUTPUT,
                y: 60,
                label: "2"
            }, {
                pinType: ct.OUTPUT,
                y: 70,
                label: "3"
            }],
            eval: ([t,e,n,i,I,l],c)=>{
                if (!c.cOld && t) {
                    let o;
                    return o = e ? Object.assign(Object.assign({}, c), {
                        master3: !1,
                        master2: !1,
                        master1: !1,
                        master0: !1,
                        cOld: t
                    }) : Object.assign(Object.assign({}, c), {
                        master3: l,
                        master2: I,
                        master1: i,
                        master0: n,
                        cOld: t
                    }),
                    [[o.slave0, o.slave1, o.slave2, o.slave3], o]
                }
                if (c.cOld && !t) {
                    const e = Object.assign(Object.assign({}, c), {
                        slave3: c.master3,
                        slave2: c.master2,
                        slave1: c.master1,
                        slave0: c.master0,
                        cOld: t
                    });
                    return [[e.slave0, e.slave1, e.slave2, e.slave3], e]
                }
                return [[c.slave0, c.slave1, c.slave2, c.slave3], Object.assign(Object.assign({}, c), {
                    cOld: t
                })]
            }
            ,
            defaultState: {
                savedValue: !1,
                cOld: !1
            },
            width: 60,
            minHeight: 80
        },
        [lt.CLOCK]: {
            name: "Taktgeber",
            width: 40,
            minHeight: 40,
            inputPins: [],
            outputPins: At
        },
        [lt.MODULE]: {
            name: "Modul",
            width: 50,
            minHeight: 50,
            defaultState: {
                value: !1
            }
        }
    }
      , Zt = [{
        name: "Gatter",
        partTypes: [lt.AND, lt.OR, lt.NOT, lt.NAND, lt.NOR, lt.XOR]
    }, {
        name: "Ein- und Ausgabe",
        partTypes: [lt.SWITCH, lt.LED, lt.CONST_0, lt.CONST_1, lt.SEVEN_SEGMENT, lt.BINARY_INPUT, lt.BINARY_DISPLAY]
    }, {
        name: "Schaltnetze",
        partTypes: [lt.HA, lt.VA, lt.SEVEN_SEGMENT_DECODER, lt.MUX, lt.DEMUX]
    }, {
        name: "Flipflops",
        partTypes: [lt.RS_ASYNC, lt.RS_POS_TAKT_ZUSTAND, lt.D_MS_1FLANKE, lt.D_MS_2FLANKEN]
    }, {
        name: "Speicher",
        partTypes: [lt.REG_4BIT, lt.SHIFT_REG_4BIT]
    }, {
        name: "Zeit",
        partTypes: [lt.CLOCK]
    }];
    var yt = function(t, e, n) {
        if (n || 2 === arguments.length)
            for (var i, I = 0, l = e.length; I < l; I++)
                !i && I in e || (i || (i = Array.prototype.slice.call(e, 0, I)),
                i[I] = e[I]);
        return t.concat(i || Array.prototype.slice.call(e))
    };
    function Dt(t) {
        return t
    }
    function Mt(t, e, n, i, I, l, c, o, g) {
        switch (arguments.length) {
        case 1:
            return t;
        case 2:
            return e(t);
        case 3:
            return n(e(t));
        case 4:
            return i(n(e(t)));
        case 5:
            return I(i(n(e(t))));
        case 6:
            return l(I(i(n(e(t)))));
        case 7:
            return c(l(I(i(n(e(t))))));
        case 8:
            return o(c(l(I(i(n(e(t)))))));
        case 9:
            return g(o(c(l(I(i(n(e(t))))))));
        default:
            for (var a = arguments[0], r = 1; r < arguments.length; r++)
                a = arguments[r](a);
            return a
        }
    }
    var vt = function(t, e) {
        var n = "number" == typeof t ? function(e) {
            return e.length >= t
        }
        : t;
        return function() {
            var t = Array.from(arguments);
            return n(arguments) ? e.apply(this, t) : function(n) {
                return e.apply(void 0, yt([n], t, !1))
            }
        }
    }
      , ht = function(t, e, n) {
        if (n || 2 === arguments.length)
            for (var i, I = 0, l = e.length; I < l; I++)
                !i && I in e || (i || (i = Array.prototype.slice.call(e, 0, I)),
                i[I] = e[I]);
        return t.concat(i || Array.prototype.slice.call(e))
    }
      , jt = Object.prototype.hasOwnProperty
      , ft = []
      , Gt = function(t) {
        return t.length > 0
    }
      , Tt = function(t) {
        return t[0]
    }
      , wt = Tt
      , Wt = function(t) {
        return t.slice(1)
    }
      , zt = function(t) {
        return ht([t[0]], t.slice(1), !0)
    }
      , St = function(t) {
        return function(e) {
            for (var n = Math.max(0, Math.floor(e)), i = [t(0)], I = 1; I < n; I++)
                i.push(t(I));
            return i
        }
    }
      , Ot = zt
      , Yt = function(t) {
        return function(e) {
            for (var n = [t(0, xt(e))], i = 1; i < e.length; i++)
                n.push(t(i, e[i]));
            return n
        }
    }
      , xt = wt
      , kt = function(t) {
        return t.slice(1)
    }
      , Pt = Gt;
    var Lt = function(t) {
        var e = function(t) {
            return function(e) {
                if (1 === e.length)
                    return e;
                for (var n = [wt(e)], i = function(e) {
                    n.every((function(n) {
                        return !t.equals(n, e)
                    }
                    )) && n.push(e)
                }, I = 0, l = Wt(e); I < l.length; I++)
                    i(l[I]);
                return n
            }
        }(t);
        return function(t) {
            return Pt(t) ? e(t) : t
        }
    }
      , Rt = vt(2, (function(t, e) {
        return Mt(t, function(t) {
            return function(e) {
                if (function(t) {
                    return 0 === t.length
                }(e))
                    return Et;
                for (var n = [], i = 0; i < e.length; i++)
                    n.push.apply(n, t(i, e[i]));
                return n
            }
        }((function(t, n) {
            return e(n, t)
        }
        )))
    }
    ))
      , Qt = Rt(Dt)
      , Bt = function(t) {
        return function(e) {
            return e.map((function(e) {
                return t(e)
            }
            ))
        }
    }
      , Ut = function(t) {
        return function(e) {
            return e.map((function(e, n) {
                return t(n, e)
            }
            ))
        }
    }
      , $t = function(t) {
        return function(e) {
            return e.filter(t)
        }
    }
      , Et = ft
      , Xt = function(t) {
        return 0 === t.length
    }
      , Ft = function(t) {
        return t.length > 0
    }
      , Ht = function(t) {
        return t.slice()
    }
      , Jt = function(t) {
        var e = function(t) {
            return function(e) {
                if (1 === e.length)
                    return Ot(e);
                for (var n = [xt(e)], i = function(e) {
                    n.every((function(n) {
                        return !t.equals(n, e)
                    }
                    )) && n.push(e)
                }, I = 0, l = kt(e); I < l.length; I++)
                    i(l[I]);
                return n
            }
        }(t);
        return function(t) {
            return Ft(t) ? e(t) : Ht(t)
        }
    }
      , Vt = function(t) {
        return function(e) {
            return e.map((function(e) {
                return t(e)
            }
            ))
        }
    }
      , Kt = vt(2, (function(t, e) {
        return Mt(t, function(t) {
            return function(e) {
                for (var n = [], i = 0; i < e.length; i++)
                    n.push.apply(n, t(i, e[i]));
                return n
            }
        }((function(t, n) {
            return e(n, t)
        }
        )))
    }
    ))
      , _t = Kt(Dt)
      , qt = function(t) {
        return function(e) {
            return e.filter(t)
        }
    }
      , te = function(t, e) {
        return function(n) {
            for (var i = n.length, I = t, l = 0; l < i; l++)
                I = e(l, I, n[l]);
            return I
        }
    }
      , ee = {
        equals: function(t, e) {
            return t === e
        }
    }
      , ne = {
        equals: ee.equals,
        compare: function(t, e) {
            return t < e ? -1 : t > e ? 1 : 0
        }
    }
      , ie = function(t) {
        return function(e) {
            return Object.keys(e).sort(t.compare)
        }
    };
    function Ie(t) {
        return function(t) {
            return function(e) {
                var n = {};
                for (var i in e)
                    jt.call(e, i) && (n[i] = t(i, e[i]));
                return n
            }
        }((function(e, n) {
            return t(n)
        }
        ))
    }
    function le() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (2 === t.length)
            return le(ne).apply(void 0, t);
        var n = ie(t[0]);
        return function(t, e) {
            return function(i) {
                for (var I = t, l = n(i), c = l.length, o = 0; o < c; o++) {
                    var g = l[o];
                    I = e(g, I, i[g])
                }
                return I
            }
        }
    }
    function ce() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (1 === t.length) {
            var n = le(t[0]);
            return function(t, e) {
                return n(t, (function(t, n, i) {
                    return e(n, i)
                }
                ))
            }
        }
        return ce(ne).apply(void 0, t)
    }
    function oe(t) {
        if ("function" == typeof t)
            return oe(ne)(t);
        var e = function(t) {
            return function(e) {
                return Object.keys(e).sort(t.compare)
            }
        }(t);
        return function(t) {
            return function(n) {
                for (var i = [], I = 0, l = e(n); I < l.length; I++) {
                    var c = l[I];
                    i.push(t(c, n[c]))
                }
                return i
            }
        }
    }
    var ge = oe(ne)((function(t, e) {
        return [t, e]
    }
    ))
      , ae = Ie
      , re = function(t) {
        return e = function(e, n) {
            return t(n)
        }
        ,
        function(t) {
            var n = {}
              , i = !1;
            for (var I in t)
                if (jt.call(t, I)) {
                    var l = t[I];
                    e(I, l) ? n[I] = l : i = !0
                }
            return i ? n : t
        }
        ;
        var e
    };
    let ue = {
        name: "neues Modul",
        abbreviation: "M1",
        id: "1",
        parts: {},
        nextPartId: 1,
        connections: {},
        nextConnectionId: 1,
        textFields: {},
        nextTextFieldId: 1,
        rects: {},
        nextRectId: 1,
        inputIds: [],
        outputIds: []
    }
      , de = {
        name: "Projektname",
        modules: {
            1: ue
        },
        nextModuleId: 2,
        activeModuleId: "1",
        fileName: "project"
    };
    const se = (t,e)=>n=>n.fromPartId === t && n.fromOutputPinNr === e;
    var pe;
    function Ce(t) {
        const e = Ie((e=>function(t, e) {
            const n = re((n=>{
                const i = t.parts[n.fromPartId]
                  , I = t.parts[n.toPartId];
                if (i.type === lt.MODULE) {
                    const t = e[i.moduleId];
                    if (n.fromOutputPinNr >= t.outputIds.length)
                        return !1
                }
                if (I.type === lt.MODULE) {
                    const t = e[I.moduleId];
                    if (n.toInputPinNr >= t.inputIds.length)
                        return !1
                }
                return !0
            }
            ))(t.connections);
            return Object.assign(Object.assign({}, t), {
                connections: n
            })
        }(e, t.modules)))(t.modules);
        return Object.assign(Object.assign({}, t), {
            modules: e
        })
    }
    !function(t) {
        t.NEUTRAL = "NEUTRAL",
        t.ADD_PART = "ADD_PART",
        t.DRAGGING_PART = "DRAGGING_PART",
        t.DRAGGING_POINT = "DRAGGING_POINT",
        t.DRAGGING_TEXTFIELD = "DRAGGING_TEXTFIELD",
        t.DRAGGING_HANDLE = "DRAGGING_HANDLE",
        t.ADD_POINT = "ADD_POINT",
        t.ADD_CONNECTION = "ADD_CONNECTION",
        t.ADD_TEXTFIELD = "ADD_TEXTFIELD",
        t.ADD_RECT = "ADD_RECT",
        t.SIMULATION_RUNNING = "SIMULATION_RUNNING",
        t.DELETE = "DELETE",
        t.MULTI_SELCECT = "MULTI_SELCECT",
        t.SIMULATION_PAUSED = "SIMULATION_PAUSED"
    }(pe || (pe = {}));
    const Ae = {
        resumeSimulation: {
            isOpen: !1
        },
        deleteModuleNotPossible: {
            isOpen: !1,
            moduleUsedInModuleNames: new Array
        },
        cyclicModuleDependencies: {
            isOpen: !1,
            cycles: []
        },
        importModules: {
            isOpen1: !1,
            isOpen2: !1,
            availableModules: [],
            selectedModules: {},
            projectToImport: de
        },
        saveAs: {
            isOpen: !1
        },
        load: {
            isOpen: !1
        },
        newProject: {
            isOpen: !1
        }
    };
    var me;
    !function(t) {
        t.TEXTFIELD = "TEXTFIELD",
        t.PART = "PART",
        t.CONNECTION = "CONNECTION",
        t.RECT = "rect"
    }(me || (me = {}));
    let Ne = {
        editMode: pe.NEUTRAL,
        partTypeToAdd: lt.AND,
        moduleIdToAdd: "",
        dragPart: {
            partIdToDrag: "",
            dragMousePositionOffset: {
                x: 0,
                y: 0
            },
            dragOffset: {
                x: 0,
                y: 0
            },
            partHasBeenMoved: !1
        },
        dragPoint: {
            connectionId: "",
            pointId: "",
            dragOffset: {
                x: 0,
                y: 0
            },
            pointHasBeenMoved: !1
        },
        pinchZoom: {
            pos1: {
                x: 0,
                y: 0
            },
            pos2: {
                x: 0,
                y: 0
            },
            initialScale: 0,
            initialTranslate: {
                x: 0,
                y: 0
            }
        },
        dragTextField: {
            textFieldId: "",
            dragOffset: {
                x: 0,
                y: 0
            },
            textFieldHasBeenMoved: !1
        },
        addConnection: {
            fromPartId: "",
            fromOutputPinNr: 0
        },
        dragPane: {
            active: !1,
            dragTranslateOffset: {
                x: 0,
                y: 0
            }
        },
        translate: {
            x: 20,
            y: 20
        },
        scale: 100,
        fullscreen: !1,
        select: {
            selectedPartIds: [],
            selectedTextFields: [],
            selectedRects: [],
            selectedConnectionPoints: {},
            selectionRect: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0
            },
            mouseDown: !1
        }
    };
    function be(t) {
        return "number" == typeof t.gateDelay ? t.gateDelay : 5
    }
    function Ze(t) {
        return "number" == typeof t.period ? t.period : 1
    }
    function ye(t) {
        return "function" == typeof bt[t.partTypeName].eval
    }
    function De(t) {
        return t.partTypeName === lt.CLOCK
    }
    function Me(t) {
        const e = {
            timestamp: t.timestamp,
            parts: t.parts,
            connections: t.connections,
            queue: t.queue
        }
          , n = [...t.history, e];
        return n.length > 1e4 && n.shift(),
        Object.assign(Object.assign({}, t), {
            history: n
        })
    }
    const ve = 10;
    function he(t, e) {
        return Math.floor((t + e / 2) / e) * e
    }
    function je(t, e) {
        return {
            x: he(t.x, e),
            y: he(t.y, e)
        }
    }
    let fe = Symbol("positionInPane");
    function Ge() {
        return z(fe)
    }
    let Te = Symbol("uiMousePosition")
      , we = Symbol("project")
      , We = Symbol("lastSavedProjectSymbol")
      , ze = Symbol("stateSymbol");
    function Se() {
        return z(We)
    }
    function Oe() {
        return z(Te)
    }
    function Ye() {
        return z(ze)
    }
    const xe = "red"
      , ke = "black"
      , Pe = "white"
      , Le = "14px"
      , Re = "11px";
    function Qe(t, e) {
        const n = e[t.moduleId];
        return Ut(((t,e)=>{
            const i = n.parts[e];
            if (i.type === lt.SWITCH)
                return {
                    pinType: ct.INPUT,
                    y: 10 + 10 * t,
                    label: i.name
                }
        }
        ))(n.inputIds)
    }
    function Be(t) {
        const e = t.type;
        if (void 0 !== t.numberOfInputPins && null !== t.numberOfInputPins) {
            const e = t.numberOfInputPins;
            return Ct[e.toString()]
        }
        return bt[e].inputPins
    }
    function Ue(t, e) {
        if (t.type === lt.MODULE) {
            const n = e[t.moduleId];
            return Ut(((t,e)=>({
                pinType: ct.OUTPUT,
                y: 10 + 10 * t,
                label: n.parts[e].name
            })))(n.outputIds)
        }
        {
            const e = t.type;
            return bt[e].outputPins
        }
    }
    function $e(t, e) {
        const n = t.type;
        return t.type === lt.MODULE ? e[t.moduleId].inputIds.length : bt[n].inputPins ? bt[n].inputPins.length : t.numberOfInputPins
    }
    function Ee(t, e) {
        const n = t.type;
        return t.type === lt.MODULE ? e[t.moduleId].outputIds.length : bt[n].outputPins.length
    }
    function Xe(t, e) {
        const n = 10 * ($e(t, e) + 1)
          , i = 10 * (Ee(t, e) + 1)
          , I = bt[t.type];
        return Math.max(n, i, I.minHeight)
    }
    function Fe(t) {
        return bt[t.type].width
    }
    const He = t=>t.type === lt.MODULE;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    function Je(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    var Ve, Ke, _e, qe = (Ve = function(t, e) {
        !function(t) {
            function e(t) {
                for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                throw Error("[Immer] minified error nr: " + t + (n.length ? " " + n.map((function(t) {
                    return "'" + t + "'"
                }
                )).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
            }
            function n(t) {
                return !!t && !!t[F]
            }
            function i(t) {
                var e;
                return !!t && (function(t) {
                    if (!t || "object" != typeof t)
                        return !1;
                    var e = Object.getPrototypeOf(t);
                    if (null === e)
                        return !0;
                    var n = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
                    return n === Object || "function" == typeof n && Function.toString.call(n) === J
                }(t) || Array.isArray(t) || !!t[X] || !!(null === (e = t.constructor) || void 0 === e ? void 0 : e[X]) || r(t) || u(t))
            }
            function I(t, e, n) {
                void 0 === n && (n = !1),
                0 === l(t) ? (n ? Object.keys : V)(t).forEach((function(i) {
                    n && "symbol" == typeof i || e(i, t[i], t)
                }
                )) : t.forEach((function(n, i) {
                    return e(i, n, t)
                }
                ))
            }
            function l(t) {
                var e = t[F];
                return e ? e.t > 3 ? e.t - 4 : e.t : Array.isArray(t) ? 1 : r(t) ? 2 : u(t) ? 3 : 0
            }
            function c(t, e) {
                return 2 === l(t) ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e)
            }
            function o(t, e) {
                return 2 === l(t) ? t.get(e) : t[e]
            }
            function g(t, e, n) {
                var i = l(t);
                2 === i ? t.set(e, n) : 3 === i ? t.add(n) : t[e] = n
            }
            function a(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
            }
            function r(t) {
                return B && t instanceof Map
            }
            function u(t) {
                return U && t instanceof Set
            }
            function d(t) {
                return t.i || t.u
            }
            function s(t) {
                if (Array.isArray(t))
                    return Array.prototype.slice.call(t);
                var e = K(t);
                delete e[F];
                for (var n = V(e), i = 0; i < n.length; i++) {
                    var I = n[i]
                      , l = e[I];
                    !1 === l.writable && (l.writable = !0,
                    l.configurable = !0),
                    (l.get || l.set) && (e[I] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: l.enumerable,
                        value: t[I]
                    })
                }
                return Object.create(Object.getPrototypeOf(t), e)
            }
            function p(t, e) {
                return void 0 === e && (e = !1),
                A(t) || n(t) || !i(t) || (l(t) > 1 && (t.set = t.add = t.clear = t.delete = C),
                Object.freeze(t),
                e && I(t, (function(t, e) {
                    return p(e, !0)
                }
                ), !0)),
                t
            }
            function C() {
                e(2)
            }
            function A(t) {
                return null == t || "object" != typeof t || Object.isFrozen(t)
            }
            function m(t) {
                var n = _[t];
                return n || e(18, t),
                n
            }
            function N(t, e) {
                _[t] || (_[t] = e)
            }
            function b() {
                return R
            }
            function Z(t, e) {
                e && (m("Patches"),
                t.o = [],
                t.v = [],
                t.s = e)
            }
            function y(t) {
                D(t),
                t.l.forEach(v),
                t.l = null
            }
            function D(t) {
                t === R && (R = t.p)
            }
            function M(t) {
                return R = {
                    l: [],
                    p: R,
                    h: t,
                    _: !0,
                    m: 0
                }
            }
            function v(t) {
                var e = t[F];
                0 === e.t || 1 === e.t ? e.j() : e.O = !0
            }
            function h(t, n) {
                n.m = n.l.length;
                var I = n.l[0]
                  , l = void 0 !== t && t !== I;
                return n.h.S || m("ES5").P(n, t, l),
                l ? (I[F].g && (y(n),
                e(4)),
                i(t) && (t = j(n, t),
                n.p || G(n, t)),
                n.o && m("Patches").M(I[F].u, t, n.o, n.v)) : t = j(n, I, []),
                y(n),
                n.o && n.s(n.o, n.v),
                t !== E ? t : void 0
            }
            function j(t, e, n) {
                if (A(e))
                    return e;
                var i = e[F];
                if (!i)
                    return I(e, (function(I, l) {
                        return f(t, i, e, I, l, n)
                    }
                    ), !0),
                    e;
                if (i.A !== t)
                    return e;
                if (!i.g)
                    return G(t, i.u, !0),
                    i.u;
                if (!i.R) {
                    i.R = !0,
                    i.A.m--;
                    var l = 4 === i.t || 5 === i.t ? i.i = s(i.k) : i.i
                      , c = l
                      , o = !1;
                    3 === i.t && (c = new Set(l),
                    l.clear(),
                    o = !0),
                    I(c, (function(e, I) {
                        return f(t, i, l, e, I, n, o)
                    }
                    )),
                    G(t, l, !1),
                    n && t.o && m("Patches").F(i, n, t.o, t.v)
                }
                return i.i
            }
            function f(t, e, I, l, o, a, r) {
                if (n(o)) {
                    var u = j(t, o, a && e && 3 !== e.t && !c(e.N, l) ? a.concat(l) : void 0);
                    if (g(I, l, u),
                    !n(u))
                        return;
                    t._ = !1
                } else
                    r && I.add(o);
                if (i(o) && !A(o)) {
                    if (!t.h.D && t.m < 1)
                        return;
                    j(t, o),
                    e && e.A.p || G(t, o)
                }
            }
            function G(t, e, n) {
                void 0 === n && (n = !1),
                !t.p && t.h.D && t._ && p(e, n)
            }
            function T(t, e) {
                var n = t[F];
                return (n ? d(n) : t)[e]
            }
            function w(t, e) {
                if (e in t)
                    for (var n = Object.getPrototypeOf(t); n; ) {
                        var i = Object.getOwnPropertyDescriptor(n, e);
                        if (i)
                            return i;
                        n = Object.getPrototypeOf(n)
                    }
            }
            function W(t) {
                t.g || (t.g = !0,
                t.p && W(t.p))
            }
            function z(t) {
                t.i || (t.i = s(t.u))
            }
            function S(t, e, n) {
                var i = r(e) ? m("MapSet").K(e, n) : u(e) ? m("MapSet").$(e, n) : t.S ? function(t, e) {
                    var n = Array.isArray(t)
                      , i = {
                        t: n ? 1 : 0,
                        A: e ? e.A : b(),
                        g: !1,
                        R: !1,
                        N: {},
                        p: e,
                        u: t,
                        k: null,
                        i: null,
                        j: null,
                        C: !1
                    }
                      , I = i
                      , l = q;
                    n && (I = [i],
                    l = tt);
                    var c = Proxy.revocable(I, l)
                      , o = c.revoke
                      , g = c.proxy;
                    return i.k = g,
                    i.j = o,
                    g
                }(e, n) : m("ES5").I(e, n);
                return (n ? n.A : b()).l.push(i),
                i
            }
            function O(t) {
                return n(t) || e(22, t),
                function t(e) {
                    if (!i(e))
                        return e;
                    var n, c = e[F], a = l(e);
                    if (c) {
                        if (!c.g && (c.t < 4 || !m("ES5").J(c)))
                            return c.u;
                        c.R = !0,
                        n = Y(e, a),
                        c.R = !1
                    } else
                        n = Y(e, a);
                    return I(n, (function(e, i) {
                        c && o(c.u, e) === i || g(n, e, t(i))
                    }
                    )),
                    3 === a ? new Set(n) : n
                }(t)
            }
            function Y(t, e) {
                switch (e) {
                case 2:
                    return new Map(t);
                case 3:
                    return Array.from(t)
                }
                return s(t)
            }
            function x() {
                function t(t, e) {
                    var n = o[t];
                    return n ? n.enumerable = e : o[t] = n = {
                        configurable: !0,
                        enumerable: e,
                        get: function() {
                            return q.get(this[F], t)
                        },
                        set: function(e) {
                            q.set(this[F], t, e)
                        }
                    },
                    n
                }
                function e(t) {
                    for (var e = t.length - 1; e >= 0; e--) {
                        var n = t[e][F];
                        if (!n.g)
                            switch (n.t) {
                            case 5:
                                l(n) && W(n);
                                break;
                            case 4:
                                i(n) && W(n)
                            }
                    }
                }
                function i(t) {
                    for (var e = t.u, n = t.k, i = V(n), I = i.length - 1; I >= 0; I--) {
                        var l = i[I];
                        if (l !== F) {
                            var o = e[l];
                            if (void 0 === o && !c(e, l))
                                return !0;
                            var g = n[l]
                              , r = g && g[F];
                            if (r ? r.u !== o : !a(g, o))
                                return !0
                        }
                    }
                    var u = !!e[F];
                    return i.length !== V(e).length + (u ? 0 : 1)
                }
                function l(t) {
                    var e = t.k;
                    if (e.length !== t.u.length)
                        return !0;
                    var n = Object.getOwnPropertyDescriptor(e, e.length - 1);
                    if (n && !n.get)
                        return !0;
                    for (var i = 0; i < e.length; i++)
                        if (!e.hasOwnProperty(i))
                            return !0;
                    return !1
                }
                var o = {};
                N("ES5", {
                    I: function(e, n) {
                        var i = Array.isArray(e)
                          , I = function(e, n) {
                            if (e) {
                                for (var i = Array(n.length), I = 0; I < n.length; I++)
                                    Object.defineProperty(i, "" + I, t(I, !0));
                                return i
                            }
                            var l = K(n);
                            delete l[F];
                            for (var c = V(l), o = 0; o < c.length; o++) {
                                var g = c[o];
                                l[g] = t(g, e || !!l[g].enumerable)
                            }
                            return Object.create(Object.getPrototypeOf(n), l)
                        }(i, e)
                          , l = {
                            t: i ? 5 : 4,
                            A: n ? n.A : b(),
                            g: !1,
                            R: !1,
                            N: {},
                            p: n,
                            u: e,
                            k: I,
                            i: null,
                            O: !1,
                            C: !1
                        };
                        return Object.defineProperty(I, F, {
                            value: l,
                            writable: !0
                        }),
                        I
                    },
                    P: function(t, i, o) {
                        o ? n(i) && i[F].A === t && e(t.l) : (t.o && function t(e) {
                            if (e && "object" == typeof e) {
                                var n = e[F];
                                if (n) {
                                    var i = n.u
                                      , o = n.k
                                      , g = n.N
                                      , a = n.t;
                                    if (4 === a)
                                        I(o, (function(e) {
                                            e !== F && (void 0 !== i[e] || c(i, e) ? g[e] || t(o[e]) : (g[e] = !0,
                                            W(n)))
                                        }
                                        )),
                                        I(i, (function(t) {
                                            void 0 !== o[t] || c(o, t) || (g[t] = !1,
                                            W(n))
                                        }
                                        ));
                                    else if (5 === a) {
                                        if (l(n) && (W(n),
                                        g.length = !0),
                                        o.length < i.length)
                                            for (var r = o.length; r < i.length; r++)
                                                g[r] = !1;
                                        else
                                            for (var u = i.length; u < o.length; u++)
                                                g[u] = !0;
                                        for (var d = Math.min(o.length, i.length), s = 0; s < d; s++)
                                            o.hasOwnProperty(s) || (g[s] = !0),
                                            void 0 === g[s] && t(o[s])
                                    }
                                }
                            }
                        }(t.l[0]),
                        e(t.l))
                    },
                    J: function(t) {
                        return 4 === t.t ? i(t) : l(t)
                    }
                })
            }
            function k() {
                function t(e) {
                    if (!i(e))
                        return e;
                    if (Array.isArray(e))
                        return e.map(t);
                    if (r(e))
                        return new Map(Array.from(e.entries()).map((function(e) {
                            return [e[0], t(e[1])]
                        }
                        )));
                    if (u(e))
                        return new Set(Array.from(e).map(t));
                    var n = Object.create(Object.getPrototypeOf(e));
                    for (var I in e)
                        n[I] = t(e[I]);
                    return c(e, X) && (n[X] = e[X]),
                    n
                }
                function g(e) {
                    return n(e) ? t(e) : e
                }
                var a = "add";
                N("Patches", {
                    W: function(n, i) {
                        return i.forEach((function(i) {
                            for (var I = i.path, c = i.op, g = n, r = 0; r < I.length - 1; r++) {
                                var u = l(g)
                                  , d = I[r];
                                "string" != typeof d && "number" != typeof d && (d = "" + d),
                                0 !== u && 1 !== u || "__proto__" !== d && "constructor" !== d || e(24),
                                "function" == typeof g && "prototype" === d && e(24),
                                "object" != typeof (g = o(g, d)) && e(15, I.join("/"))
                            }
                            var s = l(g)
                              , p = t(i.value)
                              , C = I[I.length - 1];
                            switch (c) {
                            case "replace":
                                switch (s) {
                                case 2:
                                    return g.set(C, p);
                                case 3:
                                    e(16);
                                default:
                                    return g[C] = p
                                }
                            case a:
                                switch (s) {
                                case 1:
                                    return "-" === C ? g.push(p) : g.splice(C, 0, p);
                                case 2:
                                    return g.set(C, p);
                                case 3:
                                    return g.add(p);
                                default:
                                    return g[C] = p
                                }
                            case "remove":
                                switch (s) {
                                case 1:
                                    return g.splice(C, 1);
                                case 2:
                                    return g.delete(C);
                                case 3:
                                    return g.delete(i.value);
                                default:
                                    return delete g[C]
                                }
                            default:
                                e(17, c)
                            }
                        }
                        )),
                        n
                    },
                    F: function(t, e, n, i) {
                        switch (t.t) {
                        case 0:
                        case 4:
                        case 2:
                            return function(t, e, n, i) {
                                var l = t.u
                                  , r = t.i;
                                I(t.N, (function(t, I) {
                                    var u = o(l, t)
                                      , d = o(r, t)
                                      , s = I ? c(l, t) ? "replace" : a : "remove";
                                    if (u !== d || "replace" !== s) {
                                        var p = e.concat(t);
                                        n.push("remove" === s ? {
                                            op: s,
                                            path: p
                                        } : {
                                            op: s,
                                            path: p,
                                            value: d
                                        }),
                                        i.push(s === a ? {
                                            op: "remove",
                                            path: p
                                        } : "remove" === s ? {
                                            op: a,
                                            path: p,
                                            value: g(u)
                                        } : {
                                            op: "replace",
                                            path: p,
                                            value: g(u)
                                        })
                                    }
                                }
                                ))
                            }(t, e, n, i);
                        case 5:
                        case 1:
                            return function(t, e, n, i) {
                                var I = t.u
                                  , l = t.N
                                  , c = t.i;
                                if (c.length < I.length) {
                                    var o = [c, I];
                                    I = o[0],
                                    c = o[1];
                                    var r = [i, n];
                                    n = r[0],
                                    i = r[1]
                                }
                                for (var u = 0; u < I.length; u++)
                                    if (l[u] && c[u] !== I[u]) {
                                        var d = e.concat([u]);
                                        n.push({
                                            op: "replace",
                                            path: d,
                                            value: g(c[u])
                                        }),
                                        i.push({
                                            op: "replace",
                                            path: d,
                                            value: g(I[u])
                                        })
                                    }
                                for (var s = I.length; s < c.length; s++) {
                                    var p = e.concat([s]);
                                    n.push({
                                        op: a,
                                        path: p,
                                        value: g(c[s])
                                    })
                                }
                                I.length < c.length && i.push({
                                    op: "replace",
                                    path: e.concat(["length"]),
                                    value: I.length
                                })
                            }(t, e, n, i);
                        case 3:
                            return function(t, e, n, i) {
                                var I = t.u
                                  , l = t.i
                                  , c = 0;
                                I.forEach((function(t) {
                                    if (!l.has(t)) {
                                        var I = e.concat([c]);
                                        n.push({
                                            op: "remove",
                                            path: I,
                                            value: t
                                        }),
                                        i.unshift({
                                            op: a,
                                            path: I,
                                            value: t
                                        })
                                    }
                                    c++
                                }
                                )),
                                c = 0,
                                l.forEach((function(t) {
                                    if (!I.has(t)) {
                                        var l = e.concat([c]);
                                        n.push({
                                            op: a,
                                            path: l,
                                            value: t
                                        }),
                                        i.unshift({
                                            op: "remove",
                                            path: l,
                                            value: t
                                        })
                                    }
                                    c++
                                }
                                ))
                            }(t, e, n, i)
                        }
                    },
                    M: function(t, e, n, i) {
                        n.push({
                            op: "replace",
                            path: [],
                            value: e === E ? void 0 : e
                        }),
                        i.push({
                            op: "replace",
                            path: [],
                            value: t
                        })
                    }
                })
            }
            function P() {
                function t(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    o(t, e),
                    t.prototype = (n.prototype = e.prototype,
                    new n)
                }
                function n(t) {
                    t.i || (t.N = new Map,
                    t.i = new Map(t.u))
                }
                function l(t) {
                    t.i || (t.i = new Set,
                    t.u.forEach((function(e) {
                        if (i(e)) {
                            var n = S(t.A.h, e, t);
                            t.l.set(e, n),
                            t.i.add(n)
                        } else
                            t.i.add(e)
                    }
                    )))
                }
                function c(t) {
                    t.O && e(3, JSON.stringify(d(t)))
                }
                var o = function(t, e) {
                    return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(t, e) {
                        t.__proto__ = e
                    }
                    || function(t, e) {
                        for (var n in e)
                            e.hasOwnProperty(n) && (t[n] = e[n])
                    }
                    )(t, e)
                }
                  , g = function() {
                    function e(t, e) {
                        return this[F] = {
                            t: 2,
                            p: e,
                            A: e ? e.A : b(),
                            g: !1,
                            R: !1,
                            i: void 0,
                            N: void 0,
                            u: t,
                            k: this,
                            C: !1,
                            O: !1
                        },
                        this
                    }
                    t(e, Map);
                    var l = e.prototype;
                    return Object.defineProperty(l, "size", {
                        get: function() {
                            return d(this[F]).size
                        }
                    }),
                    l.has = function(t) {
                        return d(this[F]).has(t)
                    }
                    ,
                    l.set = function(t, e) {
                        var i = this[F];
                        return c(i),
                        d(i).has(t) && d(i).get(t) === e || (n(i),
                        W(i),
                        i.N.set(t, !0),
                        i.i.set(t, e),
                        i.N.set(t, !0)),
                        this
                    }
                    ,
                    l.delete = function(t) {
                        if (!this.has(t))
                            return !1;
                        var e = this[F];
                        return c(e),
                        n(e),
                        W(e),
                        e.u.has(t) ? e.N.set(t, !1) : e.N.delete(t),
                        e.i.delete(t),
                        !0
                    }
                    ,
                    l.clear = function() {
                        var t = this[F];
                        c(t),
                        d(t).size && (n(t),
                        W(t),
                        t.N = new Map,
                        I(t.u, (function(e) {
                            t.N.set(e, !1)
                        }
                        )),
                        t.i.clear())
                    }
                    ,
                    l.forEach = function(t, e) {
                        var n = this;
                        d(this[F]).forEach((function(i, I) {
                            t.call(e, n.get(I), I, n)
                        }
                        ))
                    }
                    ,
                    l.get = function(t) {
                        var e = this[F];
                        c(e);
                        var I = d(e).get(t);
                        if (e.R || !i(I))
                            return I;
                        if (I !== e.u.get(t))
                            return I;
                        var l = S(e.A.h, I, e);
                        return n(e),
                        e.i.set(t, l),
                        l
                    }
                    ,
                    l.keys = function() {
                        return d(this[F]).keys()
                    }
                    ,
                    l.values = function() {
                        var t, e = this, n = this.keys();
                        return (t = {})[H] = function() {
                            return e.values()
                        }
                        ,
                        t.next = function() {
                            var t = n.next();
                            return t.done ? t : {
                                done: !1,
                                value: e.get(t.value)
                            }
                        }
                        ,
                        t
                    }
                    ,
                    l.entries = function() {
                        var t, e = this, n = this.keys();
                        return (t = {})[H] = function() {
                            return e.entries()
                        }
                        ,
                        t.next = function() {
                            var t = n.next();
                            if (t.done)
                                return t;
                            var i = e.get(t.value);
                            return {
                                done: !1,
                                value: [t.value, i]
                            }
                        }
                        ,
                        t
                    }
                    ,
                    l[H] = function() {
                        return this.entries()
                    }
                    ,
                    e
                }()
                  , a = function() {
                    function e(t, e) {
                        return this[F] = {
                            t: 3,
                            p: e,
                            A: e ? e.A : b(),
                            g: !1,
                            R: !1,
                            i: void 0,
                            u: t,
                            k: this,
                            l: new Map,
                            O: !1,
                            C: !1
                        },
                        this
                    }
                    t(e, Set);
                    var n = e.prototype;
                    return Object.defineProperty(n, "size", {
                        get: function() {
                            return d(this[F]).size
                        }
                    }),
                    n.has = function(t) {
                        var e = this[F];
                        return c(e),
                        e.i ? !!e.i.has(t) || !(!e.l.has(t) || !e.i.has(e.l.get(t))) : e.u.has(t)
                    }
                    ,
                    n.add = function(t) {
                        var e = this[F];
                        return c(e),
                        this.has(t) || (l(e),
                        W(e),
                        e.i.add(t)),
                        this
                    }
                    ,
                    n.delete = function(t) {
                        if (!this.has(t))
                            return !1;
                        var e = this[F];
                        return c(e),
                        l(e),
                        W(e),
                        e.i.delete(t) || !!e.l.has(t) && e.i.delete(e.l.get(t))
                    }
                    ,
                    n.clear = function() {
                        var t = this[F];
                        c(t),
                        d(t).size && (l(t),
                        W(t),
                        t.i.clear())
                    }
                    ,
                    n.values = function() {
                        var t = this[F];
                        return c(t),
                        l(t),
                        t.i.values()
                    }
                    ,
                    n.entries = function() {
                        var t = this[F];
                        return c(t),
                        l(t),
                        t.i.entries()
                    }
                    ,
                    n.keys = function() {
                        return this.values()
                    }
                    ,
                    n[H] = function() {
                        return this.values()
                    }
                    ,
                    n.forEach = function(t, e) {
                        for (var n = this.values(), i = n.next(); !i.done; )
                            t.call(e, i.value, i.value, this),
                            i = n.next()
                    }
                    ,
                    e
                }();
                N("MapSet", {
                    K: function(t, e) {
                        return new g(t,e)
                    },
                    $: function(t, e) {
                        return new a(t,e)
                    }
                })
            }
            var L, R, Q = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), B = "undefined" != typeof Map, U = "undefined" != typeof Set, $ = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, E = Q ? Symbol.for("immer-nothing") : ((L = {})["immer-nothing"] = !0,
            L), X = Q ? Symbol.for("immer-draftable") : "__$immer_draftable", F = Q ? Symbol.for("immer-state") : "__$immer_state", H = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator", J = "" + Object.prototype.constructor, V = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            }
            : Object.getOwnPropertyNames, K = Object.getOwnPropertyDescriptors || function(t) {
                var e = {};
                return V(t).forEach((function(n) {
                    e[n] = Object.getOwnPropertyDescriptor(t, n)
                }
                )),
                e
            }
            , _ = {}, q = {
                get: function(t, e) {
                    if (e === F)
                        return t;
                    var n = d(t);
                    if (!c(n, e))
                        return function(t, e, n) {
                            var i, I = w(e, n);
                            return I ? "value"in I ? I.value : null === (i = I.get) || void 0 === i ? void 0 : i.call(t.k) : void 0
                        }(t, n, e);
                    var I = n[e];
                    return t.R || !i(I) ? I : I === T(t.u, e) ? (z(t),
                    t.i[e] = S(t.A.h, I, t)) : I
                },
                has: function(t, e) {
                    return e in d(t)
                },
                ownKeys: function(t) {
                    return Reflect.ownKeys(d(t))
                },
                set: function(t, e, n) {
                    var i = w(d(t), e);
                    if (null == i ? void 0 : i.set)
                        return i.set.call(t.k, n),
                        !0;
                    if (!t.g) {
                        var I = T(d(t), e)
                          , l = null == I ? void 0 : I[F];
                        if (l && l.u === n)
                            return t.i[e] = n,
                            t.N[e] = !1,
                            !0;
                        if (a(n, I) && (void 0 !== n || c(t.u, e)))
                            return !0;
                        z(t),
                        W(t)
                    }
                    return t.i[e] === n && (void 0 !== n || e in t.i) || Number.isNaN(n) && Number.isNaN(t.i[e]) || (t.i[e] = n,
                    t.N[e] = !0),
                    !0
                },
                deleteProperty: function(t, e) {
                    return void 0 !== T(t.u, e) || e in t.u ? (t.N[e] = !1,
                    z(t),
                    W(t)) : delete t.N[e],
                    t.i && delete t.i[e],
                    !0
                },
                getOwnPropertyDescriptor: function(t, e) {
                    var n = d(t)
                      , i = Reflect.getOwnPropertyDescriptor(n, e);
                    return i ? {
                        writable: !0,
                        configurable: 1 !== t.t || "length" !== e,
                        enumerable: i.enumerable,
                        value: n[e]
                    } : i
                },
                defineProperty: function() {
                    e(11)
                },
                getPrototypeOf: function(t) {
                    return Object.getPrototypeOf(t.u)
                },
                setPrototypeOf: function() {
                    e(12)
                }
            }, tt = {};
            I(q, (function(t, e) {
                tt[t] = function() {
                    return arguments[0] = arguments[0][0],
                    e.apply(this, arguments)
                }
            }
            )),
            tt.deleteProperty = function(t, e) {
                return tt.set.call(this, t, e, void 0)
            }
            ,
            tt.set = function(t, e, n) {
                return q.set.call(this, t[0], e, n, t[0])
            }
            ;
            var et = function() {
                function t(t) {
                    var n = this;
                    this.S = $,
                    this.D = !0,
                    this.produce = function(t, I, l) {
                        if ("function" == typeof t && "function" != typeof I) {
                            var c = I;
                            I = t;
                            var o = n;
                            return function(t) {
                                var e = this;
                                void 0 === t && (t = c);
                                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
                                    i[l - 1] = arguments[l];
                                return o.produce(t, (function(t) {
                                    var n;
                                    return (n = I).call.apply(n, [e, t].concat(i))
                                }
                                ))
                            }
                        }
                        var g;
                        if ("function" != typeof I && e(6),
                        void 0 !== l && "function" != typeof l && e(7),
                        i(t)) {
                            var a = M(n)
                              , r = S(n, t, void 0)
                              , u = !0;
                            try {
                                g = I(r),
                                u = !1
                            } finally {
                                u ? y(a) : D(a)
                            }
                            return "undefined" != typeof Promise && g instanceof Promise ? g.then((function(t) {
                                return Z(a, l),
                                h(t, a)
                            }
                            ), (function(t) {
                                throw y(a),
                                t
                            }
                            )) : (Z(a, l),
                            h(g, a))
                        }
                        if (!t || "object" != typeof t) {
                            if (void 0 === (g = I(t)) && (g = t),
                            g === E && (g = void 0),
                            n.D && p(g, !0),
                            l) {
                                var d = []
                                  , s = [];
                                m("Patches").M(t, g, d, s),
                                l(d, s)
                            }
                            return g
                        }
                        e(21, t)
                    }
                    ,
                    this.produceWithPatches = function(t, e) {
                        if ("function" == typeof t)
                            return function(e) {
                                for (var i = arguments.length, I = Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
                                    I[l - 1] = arguments[l];
                                return n.produceWithPatches(e, (function(e) {
                                    return t.apply(void 0, [e].concat(I))
                                }
                                ))
                            }
                            ;
                        var i, I, l = n.produce(t, e, (function(t, e) {
                            i = t,
                            I = e
                        }
                        ));
                        return "undefined" != typeof Promise && l instanceof Promise ? l.then((function(t) {
                            return [t, i, I]
                        }
                        )) : [l, i, I]
                    }
                    ,
                    "boolean" == typeof (null == t ? void 0 : t.useProxies) && this.setUseProxies(t.useProxies),
                    "boolean" == typeof (null == t ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze)
                }
                var I = t.prototype;
                return I.createDraft = function(t) {
                    i(t) || e(8),
                    n(t) && (t = O(t));
                    var I = M(this)
                      , l = S(this, t, void 0);
                    return l[F].C = !0,
                    D(I),
                    l
                }
                ,
                I.finishDraft = function(t, e) {
                    var n = (t && t[F]).A;
                    return Z(n, e),
                    h(void 0, n)
                }
                ,
                I.setAutoFreeze = function(t) {
                    this.D = t
                }
                ,
                I.setUseProxies = function(t) {
                    t && !$ && e(20),
                    this.S = t
                }
                ,
                I.applyPatches = function(t, e) {
                    var i;
                    for (i = e.length - 1; i >= 0; i--) {
                        var I = e[i];
                        if (0 === I.path.length && "replace" === I.op) {
                            t = I.value;
                            break
                        }
                    }
                    i > -1 && (e = e.slice(i + 1));
                    var l = m("Patches").W;
                    return n(t) ? l(t, e) : this.produce(t, (function(t) {
                        return l(t, e)
                    }
                    ))
                }
                ,
                t
            }()
              , nt = new et
              , it = nt.produce
              , It = nt.produceWithPatches.bind(nt)
              , lt = nt.setAutoFreeze.bind(nt)
              , ct = nt.setUseProxies.bind(nt)
              , ot = nt.applyPatches.bind(nt)
              , gt = nt.createDraft.bind(nt)
              , at = nt.finishDraft.bind(nt);
            t.Immer = et,
            t.applyPatches = ot,
            t.castDraft = function(t) {
                return t
            }
            ,
            t.castImmutable = function(t) {
                return t
            }
            ,
            t.createDraft = gt,
            t.current = O,
            t.default = it,
            t.enableAllPlugins = function() {
                x(),
                P(),
                k()
            }
            ,
            t.enableES5 = x,
            t.enableMapSet = P,
            t.enablePatches = k,
            t.finishDraft = at,
            t.freeze = p,
            t.immerable = X,
            t.isDraft = n,
            t.isDraftable = i,
            t.nothing = E,
            t.original = function(t) {
                return n(t) || e(23, t),
                t[F].u
            }
            ,
            t.produce = it,
            t.produceWithPatches = It,
            t.setAutoFreeze = lt,
            t.setUseProxies = ct,
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }(e)
    }
    ,
    Ve(Ke = {
        exports: {}
    }, Ke.exports),
    Ke.exports), tn = Je(qe);
    function en(t, e) {
        const n = t.undoStack;
        e && n.length > 0 && n[n.length - 1].undoAction && function(t, e) {
            const n = Object.keys(t)
              , i = Object.keys(e);
            if (n.length !== i.length)
                return !1;
            for (let i of n)
                if (t[i] !== e[i])
                    return !1;
            return !0
        }(e, n[n.length - 1].undoAction) && n.pop(),
        n.push({
            project: t.project,
            undoAction: e
        }),
        n.length > 1e3 && n.shift(),
        t.redoStack = qe.castDraft(Array())
    }
    function nn(t) {
        t.undoStack = qe.castDraft(Array())
    }
    function In(t) {
        t.redoStack = qe.castDraft(Array())
    }
    !function(t) {
        t[t.OTHER = 0] = "OTHER",
        t[t.PART_CHANGE_NAME = 1] = "PART_CHANGE_NAME",
        t[t.TEXTFIELD_CHANGE_TEXT = 2] = "TEXTFIELD_CHANGE_TEXT",
        t[t.RECT_CHANGE_FILL = 3] = "RECT_CHANGE_FILL",
        t[t.MODULE_SET_NAME = 4] = "MODULE_SET_NAME",
        t[t.MODULE_SET_ABBREVIATION = 5] = "MODULE_SET_ABBREVIATION",
        t[t.PART_SET_PERIOD = 6] = "PART_SET_PERIOD"
    }(_e || (_e = {}));
    const ln = t=>e=>Object.keys(t.parts).includes(e)
      , cn = t=>e=>Object.keys(t.rects).includes(e)
      , on = t=>e=>Object.keys(t.textFields).includes(e);
    function gn(t) {
        return tn(t, (t=>{
            if (t.undoStack.length >= 2) {
                t.uiState.editMode = pe.NEUTRAL;
                let e = t.undoStack.pop();
                t.redoStack.push(e.project);
                const n = t.undoStack[t.undoStack.length - 1].project;
                !function(t, e) {
                    const n = e.modules[e.activeModuleId];
                    t.select.selectedPartIds = t.select.selectedPartIds.filter(ln(n)),
                    t.select.selectedRects = t.select.selectedRects.filter(cn(n)),
                    t.select.selectedTextFields = t.select.selectedTextFields.filter(on(n)),
                    t.select.selectedConnectionPoints = {}
                }(t.uiState, n),
                t.project = n
            }
        }
        ))
    }
    function an(t, e) {
        t.parts[e].type === lt.SWITCH && (t.inputIds = t.inputIds.filter((t=>t !== e))),
        t.parts[e].type === lt.LED && (t.outputIds = t.outputIds.filter((t=>t !== e))),
        delete t.parts[e];
        let n = Object.values(t.connections).filter((t=>t.fromPartId === e || t.toPartId === e));
        for (let e of n)
            delete t.connections[e.id]
    }
    function rn(t, e, n) {
        const i = t.slice();
        return i[14] = e[n],
        i
    }
    function un(t, e) {
        let n, I, l, c, o, g, a, r, u, d, C, A, N;
        function Z(...t) {
            return e[10](e[14], ...t)
        }
        return {
            key: t,
            first: null,
            c() {
                n = m("line"),
                g = b(),
                a = m("line"),
                D(n, "x1", I = e[14].x1),
                D(n, "y1", l = e[14].y1),
                D(n, "x2", c = e[14].x2),
                D(n, "y2", o = e[14].y2),
                D(n, "fill", "none"),
                D(n, "stroke", e[3]),
                D(n, "class", "svelte-q8h8dx"),
                h(n, "dragPoint", e[4].dragPoint.connectionId === e[0] && e[2] === pe.DRAGGING_POINT && !e[4].select.selectedConnectionPoints[e[0]]?.[e[4].dragPoint.pointId]),
                D(a, "x1", r = e[14].x1),
                D(a, "y1", u = e[14].y1),
                D(a, "x2", d = e[14].x2),
                D(a, "y2", C = e[14].y2),
                D(a, "stroke-width", "20px"),
                D(a, "class", "clickAreaConnection svelte-q8h8dx"),
                this.first = n
            },
            m(t, e) {
                s(t, n, e),
                s(t, g, e),
                s(t, a, e),
                A || (N = [y(a, "click", Z), y(a, "pointerdown", sn)],
                A = !0)
            },
            p(t, i) {
                e = t,
                2 & i && I !== (I = e[14].x1) && D(n, "x1", I),
                2 & i && l !== (l = e[14].y1) && D(n, "y1", l),
                2 & i && c !== (c = e[14].x2) && D(n, "x2", c),
                2 & i && o !== (o = e[14].y2) && D(n, "y2", o),
                8 & i && D(n, "stroke", e[3]),
                21 & i && h(n, "dragPoint", e[4].dragPoint.connectionId === e[0] && e[2] === pe.DRAGGING_POINT && !e[4].select.selectedConnectionPoints[e[0]]?.[e[4].dragPoint.pointId]),
                2 & i && r !== (r = e[14].x1) && D(a, "x1", r),
                2 & i && u !== (u = e[14].y1) && D(a, "y1", u),
                2 & i && d !== (d = e[14].x2) && D(a, "x2", d),
                2 & i && C !== (C = e[14].y2) && D(a, "y2", C)
            },
            d(t) {
                t && p(n),
                t && p(g),
                t && p(a),
                A = !1,
                i(N)
            }
        }
    }
    function dn(e) {
        let n, i = [], I = new Map, l = e[1];
        const c = t=>t[14].pointId1 + t[14].pointId2;
        for (let t = 0; t < l.length; t += 1) {
            let n = rn(e, l, t)
              , o = c(n);
            I.set(o, i[t] = un(o, n))
        }
        return {
            c() {
                for (let t = 0; t < i.length; t += 1)
                    i[t].c();
                n = Z()
            },
            m(t, e) {
                for (let n = 0; n < i.length; n += 1)
                    i[n] && i[n].m(t, e);
                s(t, n, e)
            },
            p(t, [e]) {
                95 & e && (l = t[1],
                i = _(i, e, c, 1, t, l, I, n.parentNode, V, un, n, rn))
            },
            i: t,
            o: t,
            d(t) {
                for (let e = 0; e < i.length; e += 1)
                    i[e].d(t);
                t && p(n)
            }
        }
    }
    function sn(t) {
        t.stopImmediatePropagation()
    }
    function pn(t, e, n) {
        let i, I, l, c, o;
        const g = Ye();
        a(t, g, (t=>n(9, o = t)));
        let {connectionId: r} = e
          , u = Ge();
        let d = ke
          , s = [];
        function p(t, e) {
            if (I === pe.DELETE)
                g.set(function(t, e) {
                    return tn(t, (n=>{
                        delete n.project.modules[t.project.activeModuleId].connections[e],
                        en(n)
                    }
                    ))
                }(o, r));
            else if (I === pe.ADD_POINT) {
                const n = u(t.clientX, t.clientY);
                g.set(function(t, e, n, i) {
                    return tn(t, (t=>{
                        const I = t.project.modules[t.project.activeModuleId]
                          , l = I.connections[e].nextPointId.toString();
                        if (I.connections[e].points[l] = {
                            id: l,
                            point: i
                        },
                        "first" === n)
                            I.connections[e].pointOrder.unshift(l);
                        else {
                            const t = I.connections[e].pointOrder.findIndex((t=>t === n));
                            I.connections[e].pointOrder.splice(t + 1, 0, l)
                        }
                        I.connections[e].nextPointId++,
                        en(t)
                    }
                    ))
                }(o, r, e, je(n, ve)))
            }
        }
        return t.$$set = t=>{
            "connectionId"in t && n(0, r = t.connectionId)
        }
        ,
        t.$$.update = ()=>{
            if (512 & t.$$.dirty && n(8, i = o.simState),
            512 & t.$$.dirty && n(2, I = o.uiState.editMode),
            512 & t.$$.dirty && n(4, l = o.uiState),
            512 & t.$$.dirty && n(7, c = o.project),
            261 & t.$$.dirty)
                if (I === pe.SIMULATION_RUNNING) {
                    const t = i.connections[r].value;
                    n(3, d = t ? xe : ke)
                } else if (I === pe.SIMULATION_PAUSED) {
                    const t = i.history[i.activeHistoryEntry].connections[r].value;
                    n(3, d = t ? xe : ke)
                } else
                    n(3, d = ke);
            if (131 & t.$$.dirty) {
                n(1, s = []);
                let t = c.modules[c.activeModuleId].connections[r]
                  , e = function(t, e, n) {
                    const i = e[n].parts[t.fromPartId]
                      , I = Ue(i, c.modules)[t.fromOutputPinNr]
                      , l = i.position.x + at(I, Fe(i))
                      , o = i.position.y + rt(I, Xe(i, e))
                      , g = gt(I);
                    return g === ot.RIGHT ? {
                        x: l + 10,
                        y: o
                    } : g === ot.DOWN ? {
                        x: l,
                        y: o + 10
                    } : g === ot.LEFT ? {
                        x: l - 10,
                        y: o
                    } : g === ot.UP ? {
                        x: l,
                        y: o - 10
                    } : void 0
                }(t, c.modules, c.activeModuleId)
                  , i = e.x
                  , I = e.y
                  , l = function(t, e, n) {
                    const i = e[n].parts[t.toPartId]
                      , I = ("string" == typeof i.moduleId ? Qe(i, c.modules) : Be(i))[t.toInputPinNr]
                      , l = i.position.x + at(I, Fe(i))
                      , o = i.position.y + rt(I, Xe(i, e))
                      , g = gt(I);
                    return g === ot.RIGHT ? {
                        x: l + 10,
                        y: o
                    } : g === ot.DOWN ? {
                        x: l,
                        y: o + 10
                    } : g === ot.LEFT ? {
                        x: l - 10,
                        y: o
                    } : g === ot.UP ? {
                        x: l,
                        y: o - 10
                    } : void 0
                }(t, c.modules, c.activeModuleId)
                  , g = l.x
                  , a = l.y
                  , u = t.pointOrder.map((e=>t.points[e]));
                u.unshift({
                    id: "start",
                    point: {
                        x: i,
                        y: I
                    }
                }),
                u.push({
                    id: "end",
                    point: {
                        x: g,
                        y: a
                    }
                });
                for (let t = 0; t < u.length - 1; t++)
                    s.push({
                        x1: u[t].point.x,
                        y1: u[t].point.y,
                        x2: u[t + 1].point.x,
                        y2: u[t + 1].point.y,
                        pointId1: u[t].id,
                        pointId2: u[t + 1].id
                    });
                n(1, s),
                n(7, c),
                n(0, r),
                n(9, o)
            }
        }
        ,
        [r, s, I, d, l, g, p, c, i, o, (t,e)=>p(e, t.pointId1)]
    }
    class Cn extends It {
        constructor(t) {
            super(),
            it(this, t, pn, dn, g, {
                connectionId: 0
            })
        }
    }
    let An = Object.freeze({
        full: Object.freeze({
            showBottomMenu: !0,
            showSimulationMenu: !0,
            showTopMenu: !0,
            showPartsMenu: !0,
            showTopMenuElements: Object.freeze({
                simulieren: !0,
                editModeNeutral: !0,
                loeschen: !0,
                knotenEinfuegen: !0,
                undo: !0,
                redo: !0,
                speichern: !0,
                laden: !0
            }),
            startEditMode: pe.NEUTRAL,
            debug: !1,
            maxNumOfSimSteps: 1e3,
            modules: !0,
            screenShot: !0
        }),
        fullWithoutModules: Object.freeze({
            showBottomMenu: !0,
            showSimulationMenu: !1,
            showTopMenu: !0,
            showPartsMenu: !0,
            showTopMenuElements: Object.freeze({
                simulieren: !0,
                editModeNeutral: !0,
                loeschen: !0,
                knotenEinfuegen: !0,
                undo: !0,
                redo: !0,
                speichern: !0,
                laden: !0
            }),
            startEditMode: pe.NEUTRAL,
            debug: !1,
            maxNumOfSimSteps: 1e3,
            modules: !1,
            screenShot: !0
        }),
        simulation: Object.freeze({
            showBottomMenu: !1,
            showSimulationMenu: !1,
            showTopMenu: !1,
            showPartsMenu: !1,
            startEditMode: pe.SIMULATION_RUNNING,
            debug: !1,
            maxNumOfSimSteps: 1e3,
            modules: !1,
            screenShot: !1
        }),
        verbindungenHinzufuegen: Object.freeze({
            showBottomMenu: !1,
            showSimulationMenu: !1,
            showTopMenu: !0,
            showPartsMenu: !1,
            showTopMenuElements: {
                simulieren: !0,
                editModeNeutral: !0,
                loeschen: !0,
                knotenEinfuegen: !0,
                undo: !0,
                redo: !0,
                speichern: !0,
                laden: !0
            },
            startEditMode: pe.NEUTRAL,
            debug: !1,
            maxNumOfSimSteps: 1e3,
            modules: !1,
            screenShot: !0
        })
    })
      , mn = Symbol("configuration");
    function Nn() {
        return z(mn)
    }
    function bn(t, e, n) {
        return tn(t, (t=>{
            const i = t.uiState;
            i.editMode = pe.ADD_CONNECTION,
            i.addConnection.fromPartId = e,
            i.addConnection.fromOutputPinNr = n,
            i.addConnection.points = {},
            i.addConnection.pointOrder = [],
            i.addConnection.nextPointId = 0
        }
        ))
    }
    function Zn(t) {
        const e = t.x1 < t.x2 ? t.x1 : t.x2
          , n = t.x1 < t.x2 ? t.x2 : t.x1
          , i = t.y1 < t.y2 ? t.y1 : t.y2
          , I = t.y1 < t.y2 ? t.y2 : t.y1;
        return function(t) {
            return e <= t.x && t.x <= n && i <= t.y && t.y <= I
        }
    }
    function yn(t) {
        t.select.selectedPartIds = [],
        t.select.selectedRects = [],
        t.select.selectedTextFields = [],
        t.select.selectedConnectionPoints = {}
    }
    function Dn(t, e, n) {
        return tn(t, (t=>{
            const i = t.uiState;
            yn(i),
            e === me.PART ? i.select.selectedPartIds = [n] : e === me.TEXTFIELD ? i.select.selectedTextFields = [n] : e === me.RECT && (i.select.selectedRects = [n])
        }
        ))
    }
    function Mn(t) {
        return tn(t, (t=>{
            yn(t.uiState)
        }
        ))
    }
    function vn(t, e, n) {
        const i = t.project.modules[t.project.activeModuleId]
          , I = t.uiState;
        for (let t of I.select.selectedPartIds)
            i.parts[t].position.x += e,
            i.parts[t].position.y += n;
        for (let[t,l] of Object.entries(I.select.selectedConnectionPoints))
            for (let I of Object.keys(l))
                i.connections[t].points[I].point.x += e,
                i.connections[t].points[I].point.y += n;
        for (let t of I.select.selectedTextFields)
            i.textFields[t].position.x += e,
            i.textFields[t].position.y += n
    }
    function hn(t) {
        return tn(t, (t=>{
            t.uiState.select.mouseDown = !1
        }
        ))
    }
    function jn(t) {
        const e = t.project.modules[t.project.activeModuleId]
          , n = t.uiState
          , i = Mt(e.parts, re(function(t) {
            const e = Zn(t);
            return t=>e(t.position)
        }(n.select.selectionRect)), ge, Vt((([t,e])=>e.id)))
          , I = Mt(e.connections, ae((t=>Mt(t.points, re((t=>Zn(n.select.selectionRect)(t.point))), ae((t=>!0))))), re((t=>Object.keys(t).length >= 1)))
          , l = Mt(e.textFields, re(function(t) {
            const e = Zn(t);
            return t=>e(t.position)
        }(n.select.selectionRect)), ge, Vt((([t,e])=>e.id)));
        return tn(t, (t=>{
            const e = t.uiState;
            e.select.mouseDown = !1,
            e.select.selectedPartIds = i,
            e.select.selectedConnectionPoints = I,
            e.select.selectedTextFields = l,
            e.select.selectedRects = [],
            e.editMode = pe.NEUTRAL
        }
        ))
    }
    function fn(e) {
        let n, I, l, c, o, g, a = e[7].debug && function(t) {
            let e, n, i, I, l, c;
            return {
                c() {
                    e = m("text"),
                    n = N(t[0]),
                    i = N("/"),
                    I = N(t[1]),
                    D(e, "x", l = t[4].modules[t[4].activeModuleId].connections[t[0]].points[t[1]].point.x),
                    D(e, "y", c = t[4].modules[t[4].activeModuleId].connections[t[0]].points[t[1]].point.y),
                    D(e, "class", "svelte-125gr7l")
                },
                m(t, l) {
                    s(t, e, l),
                    d(e, n),
                    d(e, i),
                    d(e, I)
                },
                p(t, i) {
                    1 & i && M(n, t[0]),
                    2 & i && M(I, t[1]),
                    19 & i && l !== (l = t[4].modules[t[4].activeModuleId].connections[t[0]].points[t[1]].point.x) && D(e, "x", l),
                    19 & i && c !== (c = t[4].modules[t[4].activeModuleId].connections[t[0]].points[t[1]].point.y) && D(e, "y", c)
                },
                d(t) {
                    t && p(e)
                }
            }
        }(e);
        return {
            c() {
                a && a.c(),
                n = b(),
                I = m("circle"),
                D(I, "cx", l = e[4].modules[e[4].activeModuleId].connections[e[0]].points[e[1]].point.x),
                D(I, "cy", c = e[4].modules[e[4].activeModuleId].connections[e[0]].points[e[1]].point.y),
                D(I, "r", "4"),
                D(I, "fill", e[5]),
                D(I, "class", "svelte-125gr7l"),
                h(I, "selected", !0 === e[3].select.selectedConnectionPoints[e[0]]?.[e[1]])
            },
            m(t, i) {
                a && a.m(t, i),
                s(t, n, i),
                s(t, I, i),
                e[14](I),
                o || (g = [y(I, "pointerdown", e[8]), y(I, "pointermove", e[9]), y(I, "pointerup", e[10]), y(I, "click", e[11])],
                o = !0)
            },
            p(t, [e]) {
                t[7].debug && a.p(t, e),
                19 & e && l !== (l = t[4].modules[t[4].activeModuleId].connections[t[0]].points[t[1]].point.x) && D(I, "cx", l),
                19 & e && c !== (c = t[4].modules[t[4].activeModuleId].connections[t[0]].points[t[1]].point.y) && D(I, "cy", c),
                32 & e && D(I, "fill", t[5]),
                11 & e && h(I, "selected", !0 === t[3].select.selectedConnectionPoints[t[0]]?.[t[1]])
            },
            i: t,
            o: t,
            d(t) {
                a && a.d(t),
                t && p(n),
                t && p(I),
                e[14](null),
                o = !1,
                i(g)
            }
        }
    }
    function Gn(t, e, n) {
        let i, I, l, c, o, {connectionId: g} = e, {pointId: r} = e, {simValue: u} = e;
        const d = Ye();
        a(t, d, (t=>n(13, o = t)));
        let s, p = Ge(), C = Nn();
        return t.$$set = t=>{
            "connectionId"in t && n(0, g = t.connectionId),
            "pointId"in t && n(1, r = t.pointId),
            "simValue"in t && n(12, u = t.simValue)
        }
        ,
        t.$$.update = ()=>{
            4096 & t.$$.dirty && n(5, i = u ? xe : ke),
            8192 & t.$$.dirty && (I = o.uiState.editMode),
            8192 & t.$$.dirty && n(3, l = o.uiState),
            8192 & t.$$.dirty && n(4, c = o.project)
        }
        ,
        [g, r, s, l, c, i, d, C, function(t) {
            if (t.stopImmediatePropagation(),
            t.isPrimary && I === pe.NEUTRAL) {
                let e = c.modules[c.activeModuleId].connections[g].points[r];
                const n = p(t.clientX, t.clientY)
                  , i = {
                    x: n.x - e.point.x,
                    y: n.y - e.point.y
                };
                d.set(function(t, e, n, i) {
                    return tn(t, (t=>{
                        const I = t.uiState;
                        I.editMode = pe.DRAGGING_POINT,
                        I.dragPoint.connectionId = e,
                        I.dragPoint.pointId = n,
                        I.dragPoint.dragOffset = i,
                        I.dragPoint.pointHasBeenMoved = !1
                    }
                    ))
                }(o, g, r, i)),
                s.setPointerCapture(t.pointerId)
            }
        }
        , function(t) {
            if (t.isPrimary && I === pe.DRAGGING_POINT) {
                let {x: e, y: n} = p(t.clientX, t.clientY);
                const i = t.ctrlKey ? 1 : ve;
                let I = {
                    x: he(e - l.dragPoint.dragOffset.x, i),
                    y: he(n - l.dragPoint.dragOffset.y, i)
                };
                d.set(function(t, e, n, i) {
                    return tn(t, (I=>{
                        var l;
                        const c = t.project.modules[t.project.activeModuleId]
                          , o = I.project.modules[t.project.activeModuleId];
                        if (i.x !== c.connections[e].points[n].point.x || i.y !== c.connections[e].points[n].point.y) {
                            if (null === (l = t.uiState.select.selectedConnectionPoints[e]) || void 0 === l ? void 0 : l[n]) {
                                const t = c.connections[e].points[n];
                                vn(I, i.x - t.point.x, i.y - t.point.y)
                            } else
                                o.connections[e].points[n].point = i;
                            I.uiState.dragPoint.pointHasBeenMoved = !0
                        }
                    }
                    ))
                }(o, l.dragPoint.connectionId, l.dragPoint.pointId, I))
            }
        }
        , function(t) {
            t.isPrimary && I === pe.DRAGGING_POINT && (l.dragPoint.pointHasBeenMoved ? d.set(function(t) {
                return tn(t, (t=>{
                    t.uiState.editMode = pe.NEUTRAL,
                    en(t)
                }
                ))
            }(o)) : d.set(function(t, e, n) {
                const i = t.project.modules[t.project.activeModuleId];
                return tn(t, (t=>{
                    const I = t.uiState;
                    I.editMode = pe.ADD_CONNECTION;
                    const l = i.connections[e];
                    I.addConnection.fromPartId = l.fromPartId,
                    I.addConnection.fromOutputPinNr = l.fromOutputPinNr;
                    const c = l.pointOrder.findIndex((t=>t === n))
                      , o = l.pointOrder.slice(0, c + 1);
                    I.addConnection.pointOrder = o,
                    I.addConnection.points = re((t=>o.includes(t.id)))(l.points),
                    I.addConnection.nextPointId = l.nextPointId
                }
                ))
            }(o, l.dragPoint.connectionId, l.dragPoint.pointId)),
            t.stopImmediatePropagation())
        }
        , function(t) {
            t.stopImmediatePropagation(),
            I === pe.DELETE && d.set(function(t, e, n) {
                return tn(t, (i=>{
                    const I = i.project.modules[t.project.activeModuleId];
                    delete I.connections[e].points[n];
                    const l = I.connections[e].pointOrder.findIndex((t=>t === n));
                    I.connections[e].pointOrder.splice(l, 1),
                    en(i)
                }
                ))
            }(o, g, r))
        }
        , u, o, function(t) {
            O[t ? "unshift" : "push"]((()=>{
                s = t,
                n(2, s)
            }
            ))
        }
        ]
    }
    class Tn extends It {
        constructor(t) {
            super(),
            it(this, t, Gn, fn, g, {
                connectionId: 0,
                pointId: 1,
                simValue: 12
            })
        }
    }
    function wn(t, e, n) {
        const i = t.slice();
        return i[8] = e[n],
        i
    }
    function Wn(t) {
        let e, n;
        return e = new Tn({
            props: {
                connectionId: t[0],
                pointId: t[8],
                simValue: t[1]
            }
        }),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, n) {
                const i = {};
                1 & n && (i.connectionId = t[0]),
                4 & n && (i.pointId = t[8]),
                2 & n && (i.simValue = t[1]),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function zn(t) {
        let e, n, i = t[2], I = [];
        for (let e = 0; e < i.length; e += 1)
            I[e] = Wn(wn(t, i, e));
        const l = t=>J(I[t], 1, 1, (()=>{
            I[t] = null
        }
        ));
        return {
            c() {
                for (let t = 0; t < I.length; t += 1)
                    I[t].c();
                e = Z()
            },
            m(t, i) {
                for (let e = 0; e < I.length; e += 1)
                    I[e] && I[e].m(t, i);
                s(t, e, i),
                n = !0
            },
            p(t, [n]) {
                if (7 & n) {
                    let c;
                    for (i = t[2],
                    c = 0; c < i.length; c += 1) {
                        const l = wn(t, i, c);
                        I[c] ? (I[c].p(l, n),
                        H(I[c], 1)) : (I[c] = Wn(l),
                        I[c].c(),
                        H(I[c], 1),
                        I[c].m(e.parentNode, e))
                    }
                    for (X(),
                    c = i.length; c < I.length; c += 1)
                        l(c);
                    F()
                }
            },
            i(t) {
                if (!n) {
                    for (let t = 0; t < i.length; t += 1)
                        H(I[t]);
                    n = !0
                }
            },
            o(t) {
                I = I.filter(Boolean);
                for (let t = 0; t < I.length; t += 1)
                    J(I[t]);
                n = !1
            },
            d(t) {
                C(I, t),
                t && p(e)
            }
        }
    }
    function Sn(t, e, n) {
        let i, I, l, c, o, {connectionId: g} = e;
        const r = Ye();
        a(t, r, (t=>n(7, o = t)));
        let u = !1;
        return t.$$set = t=>{
            "connectionId"in t && n(0, g = t.connectionId)
        }
        ,
        t.$$.update = ()=>{
            128 & t.$$.dirty && n(4, i = o.simState),
            128 & t.$$.dirty && n(5, I = o.uiState.editMode),
            128 & t.$$.dirty && n(6, l = o.project),
            65 & t.$$.dirty && n(2, c = l.modules[l.activeModuleId].connections[g].pointOrder),
            49 & t.$$.dirty && (I === pe.SIMULATION_RUNNING ? n(1, u = i.connections[g].value) : I === pe.SIMULATION_PAUSED ? n(1, u = i.history[i.activeHistoryEntry].connections[g].value) : n(1, u = !1))
        }
        ,
        [g, u, c, r, i, I, l, o]
    }
    class On extends It {
        constructor(t) {
            super(),
            it(this, t, Sn, zn, g, {
                connectionId: 0
            })
        }
    }
    function Yn(t, e, n) {
        const i = t.slice();
        i[8] = e[n];
        const I = i[0].addConnection.points[i[8]];
        return i[9] = I,
        i
    }
    function xn(t) {
        let e, n, i;
        return {
            c() {
                e = m("circle"),
                D(e, "cx", n = t[9].point.x),
                D(e, "cy", i = t[9].point.y),
                D(e, "r", "4"),
                D(e, "fill", "red"),
                D(e, "class", "svelte-emkhet")
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, I) {
                1 & I && n !== (n = t[9].point.x) && D(e, "cx", n),
                1 & I && i !== (i = t[9].point.y) && D(e, "cy", i)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function kn(e) {
        let n, i, I, l = e[0].addConnection.pointOrder, c = [];
        for (let t = 0; t < l.length; t += 1)
            c[t] = xn(Yn(e, l, t));
        return {
            c() {
                n = m("polyline"),
                i = b();
                for (let t = 0; t < c.length; t += 1)
                    c[t].c();
                I = Z(),
                D(n, "points", e[1]),
                D(n, "fill", "none"),
                D(n, "stroke", "red"),
                D(n, "class", "svelte-emkhet")
            },
            m(t, e) {
                s(t, n, e),
                s(t, i, e);
                for (let n = 0; n < c.length; n += 1)
                    c[n] && c[n].m(t, e);
                s(t, I, e)
            },
            p(t, [e]) {
                if (2 & e && D(n, "points", t[1]),
                1 & e) {
                    let n;
                    for (l = t[0].addConnection.pointOrder,
                    n = 0; n < l.length; n += 1) {
                        const i = Yn(t, l, n);
                        c[n] ? c[n].p(i, e) : (c[n] = xn(i),
                        c[n].c(),
                        c[n].m(I.parentNode, I))
                    }
                    for (; n < c.length; n += 1)
                        c[n].d(1);
                    c.length = l.length
                }
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                t && p(i),
                C(c, t),
                t && p(I)
            }
        }
    }
    function Pn(t, e, n) {
        let i, I, l, c;
        const o = Ye();
        a(t, o, (t=>n(6, c = t)));
        const g = Oe();
        a(t, g, (t=>n(5, l = t)));
        let r = "";
        return t.$$.update = ()=>{
            if (64 & t.$$.dirty && n(0, i = c.uiState),
            64 & t.$$.dirty && n(4, I = c.project),
            49 & t.$$.dirty) {
                let t = I.modules[I.activeModuleId].parts[i.addConnection.fromPartId]
                  , c = i.addConnection.fromOutputPinNr
                  , g = t.position.x + Fe(t) + 10
                  , a = t.position.y + (e = t.type,
                o = c,
                e === lt.MODULE ? 10 + 10 * o : bt[e].outputPins[o].y)
                  , u = l.x
                  , d = l.y
                  , s = "";
                for (let t of i.addConnection.pointOrder) {
                    const e = i.addConnection.points[t].point;
                    s = s + e.x + " " + e.y + " "
                }
                window.matchMedia("(any-hover: hover)").matches ? n(1, r = g + "," + a + " " + s + u + "," + d) : n(1, r = g + "," + a + " " + s)
            }
            var e, o
        }
        ,
        [i, r, o, g, I, l, c]
    }
    class Ln extends It {
        constructor(t) {
            super(),
            it(this, t, Pn, kn, g, {})
        }
    }
    function Rn(e) {
        let n, i, I;
        return {
            c() {
                n = m("rect"),
                D(n, "x", -5),
                D(n, "y", -5),
                D(n, "width", i = e[0] + 10),
                D(n, "height", I = e[1] + 10),
                D(n, "stroke", "blue"),
                D(n, "fill", "none")
            },
            m(t, e) {
                s(t, n, e)
            },
            p(t, [e]) {
                1 & e && i !== (i = t[0] + 10) && D(n, "width", i),
                2 & e && I !== (I = t[1] + 10) && D(n, "height", I)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n)
            }
        }
    }
    function Qn(t, e, n) {
        let {width: i=0} = e
          , {height: I=0} = e;
        return t.$$set = t=>{
            "width"in t && n(0, i = t.width),
            "height"in t && n(1, I = t.height)
        }
        ,
        [i, I]
    }
    class Bn extends It {
        constructor(t) {
            super(),
            it(this, t, Qn, Rn, g, {
                width: 0,
                height: 1
            })
        }
    }
    function Un(t) {
        return tn(t, (t=>{
            t.uiState.editMode = pe.NEUTRAL
        }
        ))
    }
    function $n(t) {
        let e;
        return {
            c() {
                e = N("TEXTFELD OHNE TEXT")
            },
            m(t, n) {
                s(t, e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function En(t) {
        let e, n = t[0].text + "";
        return {
            c() {
                e = N(n)
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, i) {
                1 & i && n !== (n = t[0].text + "") && M(e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Xn(t) {
        let e, n, i, I;
        return n = new Bn({
            props: {
                width: t[1].width,
                height: t[1].height
            }
        }),
        {
            c() {
                e = m("g"),
                q(n.$$.fragment),
                D(e, "transform", i = "translate(" + t[2].x + " " + t[2].y + ")")
            },
            m(t, i) {
                s(t, e, i),
                tt(n, e, null),
                I = !0
            },
            p(t, l) {
                const c = {};
                2 & l && (c.width = t[1].width),
                2 & l && (c.height = t[1].height),
                n.$set(c),
                (!I || 4 & l && i !== (i = "translate(" + t[2].x + " " + t[2].y + ")")) && D(e, "transform", i)
            },
            i(t) {
                I || (H(n.$$.fragment, t),
                I = !0)
            },
            o(t) {
                J(n.$$.fragment, t),
                I = !1
            },
            d(t) {
                t && p(e),
                et(n)
            }
        }
    }
    function Fn(t) {
        let e, n, I, l, c, o, g, a = t[4].select.selectedTextFields.includes(t[0].id), r = 0 === t[0].text.length && $n(), u = t[0].text.length > 0 && En(t), C = a && Xn(t);
        return {
            c() {
                e = m("g"),
                n = m("text"),
                r && r.c(),
                I = Z(),
                u && u.c(),
                C && C.c(),
                v(n, "user-select", "none"),
                v(n, "font-family", "sans-serif"),
                v(n, "text-anchor", "start"),
                D(n, "x", 0),
                D(n, "y", 0),
                D(n, "font-size", Le),
                D(n, "class", "svelte-1h3j6go"),
                D(e, "transform", l = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(i, l) {
                s(i, e, l),
                d(e, n),
                r && r.m(n, null),
                d(n, I),
                u && u.m(n, null),
                t[11](n),
                C && C.m(e, null),
                c = !0,
                o || (g = [y(n, "pointerdown", t[6]), y(n, "pointermove", t[7]), y(n, "pointerup", t[8]), y(n, "click", t[9])],
                o = !0)
            },
            p(t, [i]) {
                0 === t[0].text.length ? r || (r = $n(),
                r.c(),
                r.m(n, I)) : r && (r.d(1),
                r = null),
                t[0].text.length > 0 ? u ? u.p(t, i) : (u = En(t),
                u.c(),
                u.m(n, null)) : u && (u.d(1),
                u = null),
                17 & i && (a = t[4].select.selectedTextFields.includes(t[0].id)),
                a ? C ? (C.p(t, i),
                17 & i && H(C, 1)) : (C = Xn(t),
                C.c(),
                H(C, 1),
                C.m(e, null)) : C && (X(),
                J(C, 1, 1, (()=>{
                    C = null
                }
                )),
                F()),
                (!c || 1 & i && l !== (l = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", l)
            },
            i(t) {
                c || (H(C),
                c = !0)
            },
            o(t) {
                J(C),
                c = !1
            },
            d(n) {
                n && p(e),
                r && r.d(),
                u && u.d(),
                t[11](null),
                C && C.d(),
                o = !1,
                i(g)
            }
        }
    }
    function Hn(t, e, n) {
        let i, I, l, c = {
            width: 0,
            height: 0
        }, o = {
            x: 0,
            y: 0
        };
        T((()=>{
            if (null != r) {
                const t = r.getBoundingClientRect();
                let e = d(t.left, t.top)
                  , i = d(t.right, t.bottom);
                n(1, c = {
                    width: i.x - e.x,
                    height: i.y - e.y
                });
                const I = r.getBBox();
                n(2, o = {
                    x: I.x,
                    y: I.y
                })
            }
        }
        ));
        const g = Ye();
        a(t, g, (t=>n(10, l = t)));
        let r, {textField: u} = e, d = Ge();
        return t.$$set = t=>{
            "textField"in t && n(0, u = t.textField)
        }
        ,
        t.$$.update = ()=>{
            1024 & t.$$.dirty && (i = l.uiState.editMode),
            1024 & t.$$.dirty && n(4, I = l.uiState)
        }
        ,
        [u, c, o, r, I, g, function(t) {
            if (t.stopImmediatePropagation(),
            t.isPrimary && (i === pe.ADD_TEXTFIELD && g.set(Un(l)),
            i === pe.NEUTRAL)) {
                const e = d(t.clientX, t.clientY)
                  , n = {
                    x: e.x - u.position.x,
                    y: e.y - u.position.y
                };
                g.set(function(t, e, n) {
                    return tn(t, (t=>{
                        t.uiState.editMode = pe.DRAGGING_TEXTFIELD,
                        t.uiState.dragTextField.textFieldId = e,
                        t.uiState.dragTextField.dragOffset = n,
                        t.uiState.dragTextField.textFieldHasBeenMoved = !1
                    }
                    ))
                }(l, u.id, n)),
                r.setPointerCapture(t.pointerId)
            }
        }
        , function(t) {
            if (t.isPrimary && i === pe.DRAGGING_TEXTFIELD) {
                let {x: e, y: n} = d(t.clientX, t.clientY);
                const i = t.ctrlKey ? 1 : ve
                  , c = {
                    x: he(e - I.dragTextField.dragOffset.x, i),
                    y: he(n - I.dragTextField.dragOffset.y, i)
                };
                g.set(function(t, e, n) {
                    return tn(t, (i=>{
                        const I = t.project.modules[t.project.activeModuleId]
                          , l = i.project.modules[t.project.activeModuleId];
                        if (n.x !== I.textFields[e].position.x || n.y !== I.textFields[e].position.y) {
                            if (t.uiState.select.selectedTextFields.includes(e)) {
                                const t = I.textFields[e];
                                vn(i, n.x - t.position.x, n.y - t.position.y)
                            } else
                                l.textFields[e].position = n;
                            i.uiState.dragTextField.textFieldHasBeenMoved = !0
                        }
                    }
                    ))
                }(l, u.id, c))
            }
        }
        , function(t) {
            t.isPrimary && i === pe.DRAGGING_TEXTFIELD && (I.dragTextField.textFieldHasBeenMoved ? g.set(function(t) {
                return tn(t, (t=>{
                    t.uiState.editMode = pe.NEUTRAL,
                    en(t)
                }
                ))
            }(l)) : (g.set(Dn(l, me.TEXTFIELD, I.dragTextField.textFieldId)),
            g.set(Un(l))),
            t.stopImmediatePropagation())
        }
        , function(t) {
            t.stopPropagation(),
            i === pe.DELETE && (g.set(Mn(l)),
            g.set(function(t, e) {
                return tn(t, (n=>{
                    delete n.project.modules[t.project.activeModuleId].textFields[e],
                    en(n)
                }
                ))
            }(l, u.id)))
        }
        , l, function(t) {
            O[t ? "unshift" : "push"]((()=>{
                r = t,
                n(3, r)
            }
            ))
        }
        ]
    }
    class Jn extends It {
        constructor(t) {
            super(),
            it(this, t, Hn, Fn, g, {
                textField: 0
            })
        }
    }
    function Vn(e) {
        let n, I, l, c, o;
        return {
            c() {
                n = m("g"),
                I = m("polyline"),
                D(I, "points", "-3,-3 -3,0 -2,-1 1,2 0,3 3,3 3,0 2,1 -1,-2 0,-3"),
                D(I, "fill", "blue"),
                D(I, "stroke", "none"),
                D(n, "transform", l = "translate(" + e[0].x + " " + e[0].y + ") scale(5 5)")
            },
            m(t, i) {
                s(t, n, i),
                d(n, I),
                e[5](I),
                c || (o = [y(I, "pointerdown", e[2]), y(I, "pointermove", e[3]), y(I, "pointerup", e[4]), y(I, "click", Kn)],
                c = !0)
            },
            p(t, [e]) {
                1 & e && l !== (l = "translate(" + t[0].x + " " + t[0].y + ") scale(5 5)") && D(n, "transform", l)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                e[5](null),
                c = !1,
                i(o)
            }
        }
    }
    function Kn(t) {
        t.preventDefault(),
        t.stopImmediatePropagation()
    }
    function _n(t, e, n) {
        let {position: i} = e
          , I = Ge();
        const l = w();
        let c, o = {
            x: 0,
            y: 0
        }, g = !1;
        return t.$$set = t=>{
            "position"in t && n(0, i = t.position)
        }
        ,
        [i, c, function(t) {
            t.stopImmediatePropagation(),
            t.preventDefault(),
            c.setPointerCapture(t.pointerId),
            o = I(t.clientX, t.clientY),
            l("dragStart"),
            g = !0
        }
        , function(t) {
            g && l("dragMove", {
                initialPosition: o,
                newPosition: I(t.clientX, t.clientY),
                ctrlKey: t.ctrlKey
            })
        }
        , function(t) {
            t.preventDefault(),
            t.stopImmediatePropagation(),
            c.releasePointerCapture(t.pointerId),
            l("dragStop"),
            g = !1
        }
        , function(t) {
            O[t ? "unshift" : "push"]((()=>{
                c = t,
                n(1, c)
            }
            ))
        }
        ]
    }
    class qn extends It {
        constructor(t) {
            super(),
            it(this, t, _n, Vn, g, {
                position: 0
            })
        }
    }
    function ti(t) {
        return tn(t, (t=>{
            t.uiState.editMode = pe.DRAGGING_HANDLE
        }
        ))
    }
    function ei(t, e) {
        return tn(t, (t=>{
            t.uiState.editMode = e,
            en(t)
        }
        ))
    }
    function ni(t) {
        let e, n;
        return e = new Bn({
            props: {
                width: t[1].width,
                height: t[1].height
            }
        }),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, n) {
                const i = {};
                2 & n && (i.width = t[1].width),
                2 & n && (i.height = t[1].height),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function ii(t) {
        let e, n, i, I;
        return e = new qn({
            props: {
                position: t[0].position
            }
        }),
        e.$on("dragStart", t[7]),
        e.$on("dragMove", t[8]),
        e.$on("dragStop", t[9]),
        i = new qn({
            props: {
                position: {
                    x: t[0].position.x + t[0].width,
                    y: t[0].position.y + t[0].height
                }
            }
        }),
        i.$on("dragStart", t[10]),
        i.$on("dragMove", t[11]),
        i.$on("dragStop", t[12]),
        {
            c() {
                q(e.$$.fragment),
                n = b(),
                q(i.$$.fragment)
            },
            m(t, l) {
                tt(e, t, l),
                s(t, n, l),
                tt(i, t, l),
                I = !0
            },
            p(t, n) {
                const I = {};
                1 & n && (I.position = t[0].position),
                e.$set(I);
                const l = {};
                1 & n && (l.position = {
                    x: t[0].position.x + t[0].width,
                    y: t[0].position.y + t[0].height
                }),
                i.$set(l)
            },
            i(t) {
                I || (H(e.$$.fragment, t),
                H(i.$$.fragment, t),
                I = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                J(i.$$.fragment, t),
                I = !1
            },
            d(t) {
                et(e, t),
                t && p(n),
                et(i, t)
            }
        }
    }
    function Ii(t) {
        let e, n, I, l, c, o, g, a, r, u, C, A, N = t[3].select.selectedRects.includes(t[0].id), M = t[3].select.selectedRects.includes(t[0].id), v = N && ni(t), h = M && ii(t);
        return {
            c() {
                e = m("g"),
                n = m("rect"),
                v && v.c(),
                a = b(),
                h && h.c(),
                r = Z(),
                D(n, "x", 0),
                D(n, "y", 0),
                D(n, "width", I = t[0].width),
                D(n, "height", l = t[0].height),
                D(n, "stroke", c = t[0].stroke),
                D(n, "fill", o = t[0].fill),
                D(e, "transform", g = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(i, I) {
                s(i, e, I),
                d(e, n),
                t[14](n),
                v && v.m(e, null),
                s(i, a, I),
                h && h.m(i, I),
                s(i, r, I),
                u = !0,
                C || (A = [y(n, "click", t[6]), y(n, "pointerdown", t[5])],
                C = !0)
            },
            p(t, [i]) {
                (!u || 1 & i && I !== (I = t[0].width)) && D(n, "width", I),
                (!u || 1 & i && l !== (l = t[0].height)) && D(n, "height", l),
                (!u || 1 & i && c !== (c = t[0].stroke)) && D(n, "stroke", c),
                (!u || 1 & i && o !== (o = t[0].fill)) && D(n, "fill", o),
                9 & i && (N = t[3].select.selectedRects.includes(t[0].id)),
                N ? v ? (v.p(t, i),
                9 & i && H(v, 1)) : (v = ni(t),
                v.c(),
                H(v, 1),
                v.m(e, null)) : v && (X(),
                J(v, 1, 1, (()=>{
                    v = null
                }
                )),
                F()),
                (!u || 1 & i && g !== (g = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", g),
                9 & i && (M = t[3].select.selectedRects.includes(t[0].id)),
                M ? h ? (h.p(t, i),
                9 & i && H(h, 1)) : (h = ii(t),
                h.c(),
                H(h, 1),
                h.m(r.parentNode, r)) : h && (X(),
                J(h, 1, 1, (()=>{
                    h = null
                }
                )),
                F())
            },
            i(t) {
                u || (H(v),
                H(h),
                u = !0)
            },
            o(t) {
                J(v),
                J(h),
                u = !1
            },
            d(n) {
                n && p(e),
                t[14](null),
                v && v.d(),
                n && p(a),
                h && h.d(n),
                n && p(r),
                C = !1,
                i(A)
            }
        }
    }
    function li(t, e, n) {
        let i, I, l, {rect: c} = e;
        const o = Ye();
        a(t, o, (t=>n(13, l = t)));
        let g, r = Ge(), u = {
            width: 0,
            height: 0
        };
        T((()=>{
            if (null != g) {
                const t = g.getBoundingClientRect();
                let e = r(t.left, t.top)
                  , i = r(t.right, t.bottom);
                n(1, u = {
                    width: i.x - e.x,
                    height: i.y - e.y
                })
            }
        }
        ));
        let d = {
            x: 0,
            y: 0
        }
          , s = 0
          , p = 0;
        return t.$$set = t=>{
            "rect"in t && n(0, c = t.rect)
        }
        ,
        t.$$.update = ()=>{
            8192 & t.$$.dirty && (i = l.uiState.editMode),
            8192 & t.$$.dirty && n(3, I = l.uiState)
        }
        ,
        [c, u, g, I, o, function(t) {
            (i === pe.NEUTRAL && t.ctrlKey || i === pe.DELETE && t.ctrlKey) && t.stopPropagation()
        }
        , function(t) {
            i === pe.NEUTRAL && t.ctrlKey ? (t.stopPropagation(),
            o.set(Dn(l, me.RECT, c.id))) : i === pe.DELETE && t.ctrlKey && (o.set(Mn(l)),
            o.set(function(t, e) {
                return tn(t, (n=>{
                    delete n.project.modules[t.project.activeModuleId].rects[e],
                    en(n)
                }
                ))
            }(l, c.id)))
        }
        , function() {
            o.set(ti(l)),
            d = c.position
        }
        , function(t) {
            const e = t.detail.ctrlKey ? 1 : ve
              , n = je({
                x: d.x + (t.detail.newPosition.x - t.detail.initialPosition.x),
                y: d.y + (t.detail.newPosition.y - t.detail.initialPosition.y)
            }, e);
            o.set(function(t, e, n) {
                return tn(t, (t=>{
                    t.project.modules[t.project.activeModuleId].rects[e].position = n
                }
                ))
            }(l, c.id, n))
        }
        , function() {
            o.set(ei(l, pe.NEUTRAL))
        }
        , function() {
            o.set(ti(l)),
            d = c.position,
            s = c.width,
            p = c.height
        }
        , function(t) {
            const e = t.detail.ctrlKey ? 1 : ve
              , n = he(s + (t.detail.newPosition.x - t.detail.initialPosition.x), e)
              , i = he(p + (t.detail.newPosition.y - t.detail.initialPosition.y), e)
              , I = i >= 10 ? i : 10
              , g = n >= 10 ? n : 10;
            o.set(function(t, e, n, i) {
                return tn(t, (t=>{
                    const I = t.project.modules[t.project.activeModuleId];
                    I.rects[e].height = i,
                    I.rects[e].width = n
                }
                ))
            }(l, c.id, g, I))
        }
        , function() {
            o.set(ei(l, pe.NEUTRAL))
        }
        , l, function(t) {
            O[t ? "unshift" : "push"]((()=>{
                g = t,
                n(2, g)
            }
            ))
        }
        ]
    }
    class ci extends It {
        constructor(t) {
            super(),
            it(this, t, li, Ii, g, {
                rect: 0
            })
        }
    }
    function oi(e) {
        let n;
        return {
            c() {
                n = m("rect"),
                D(n, "x", e[0]),
                D(n, "y", e[1]),
                D(n, "width", e[2]),
                D(n, "height", e[3]),
                D(n, "style", 'fill:none; stroke:blue; stroke-width:1; stroke-dasharray="5,10,5"'),
                D(n, "pointer-events", "none")
            },
            m(t, e) {
                s(t, n, e)
            },
            p(t, [e]) {
                1 & e && D(n, "x", t[0]),
                2 & e && D(n, "y", t[1]),
                4 & e && D(n, "width", t[2]),
                8 & e && D(n, "height", t[3])
            },
            i: t,
            o: t,
            d(t) {
                t && p(n)
            }
        }
    }
    function gi(t, e, n) {
        let {x1: i=0} = e
          , {y1: I=0} = e
          , {x2: l=0} = e
          , {y2: c=0} = e
          , o = 0
          , g = 0
          , a = 0
          , r = 0;
        return t.$$set = t=>{
            "x1"in t && n(4, i = t.x1),
            "y1"in t && n(5, I = t.y1),
            "x2"in t && n(6, l = t.x2),
            "y2"in t && n(7, c = t.y2)
        }
        ,
        t.$$.update = ()=>{
            240 & t.$$.dirty && (n(0, o = l > i ? i : l),
            n(1, g = c > I ? I : c),
            n(2, a = l > i ? l - i : i - l),
            n(3, r = c > I ? c - I : I - c))
        }
        ,
        [o, g, a, r, i, I, l, c]
    }
    class ai extends It {
        constructor(t) {
            super(),
            it(this, t, gi, oi, g, {
                x1: 4,
                y1: 5,
                x2: 6,
                y2: 7
            })
        }
    }
    const ri = [];
    function ui(t, e, n) {
        return tn(t, (t=>{
            t.project.modules[t.project.activeModuleId].parts[e].name = n,
            en(t, {
                undoActionType: _e.PART_CHANGE_NAME,
                partId: e
            })
        }
        ))
    }
    function di(t, e, n) {
        return tn(t, (t=>{
            t.project.modules[t.project.activeModuleId].textFields[e].text = n,
            en(t, {
                undoActionType: _e.TEXTFIELD_CHANGE_TEXT,
                textFieldId: e
            })
        }
        ))
    }
    function si(t, e) {
        const n = e.x - t.x
          , i = e.y - t.y;
        return Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2))
    }
    function pi(t, e) {
        return {
            x: (t.x + e.x) / 2,
            y: (t.y + e.y) / 2
        }
    }
    const Ci = [25, 50, 75, 100, 125, 150, 175, 200]
      , Ai = Xt(mi = Ci) ? [] : mi.slice().reverse();
    var mi;
    function Ni(t) {
        return tn(t, (t=>{
            t.uiState.dragPane.active = !1
        }
        ))
    }
    function bi(t, e, n) {
        return tn(t, (t=>{
            const i = t.uiState.translate;
            i.x += e,
            i.y += n
        }
        ))
    }
    function Zi(t) {
        return tn(t, (t=>{
            const e = t.uiState;
            let n = Ai.find((t=>t < e.scale));
            void 0 !== n ? (e.scale = n,
            e.translate.x = e.translate.x,
            e.translate.y = e.translate.y) : e.scale = 25
        }
        ))
    }
    function yi(t) {
        return tn(t, (t=>{
            const e = t.uiState;
            let n = Ci.find((t=>t > e.scale));
            e.scale = void 0 !== n ? n : 200
        }
        ))
    }
    function Di(t) {
        return tn(t, (t=>{
            t.uiState.pinchZoom.active = !1
        }
        ))
    }
    function Mi(t) {
        return Object.assign(Object.assign({}, t), {
            project: Ce(t.project)
        })
    }
    const vi = t=>e=>{
        for (let n of Object.values(e.parts))
            if (n.moduleId === t)
                return !0;
        return !1
    }
    ;
    function hi(t, e) {
        const n = function(t, e) {
            return Mt(e, re(vi(t)), ae((t=>t.name)), ge, Vt((([t,e])=>e)))
        }(e, t.project.modules);
        return tn(t, (t=>{
            if (0 === n.length) {
                t.uiState.editMode = pe.NEUTRAL;
                const n = t.project;
                if (delete n.modules[e],
                Object.keys(n.modules).length < 1) {
                    let t = n.nextModuleId.toString();
                    n.modules[t] = qe.castDraft(Object.assign(Object.assign({}, ue), {
                        id: t,
                        name: "Modul-" + t,
                        abbreviation: "M" + t
                    })),
                    n.nextModuleId++
                }
                n.activeModuleId = Object.keys(n.modules)[0],
                en(t)
            } else {
                const e = t.dialogState;
                e.deleteModuleNotPossible.isOpen = !0,
                e.deleteModuleNotPossible.moduleUsedInModuleNames = n
            }
        }
        ))
    }
    function ji(t, e) {
        return (t + e).toString()
    }
    function fi(t, e, n) {
        const i = n.findIndex((t=>t.id === e));
        return ji(t, i)
    }
    function Gi(e) {
        let n, I, l;
        return {
            c() {
                n = m("rect"),
                D(n, "x", "0"),
                D(n, "y", -5),
                D(n, "width", "20"),
                D(n, "height", "10"),
                D(n, "class", "clickArea svelte-13a8vxg")
            },
            m(t, i) {
                s(t, n, i),
                e[17](n),
                I || (l = [y(n, "click", e[11]), y(n, "pointerdown", Fi)],
                I = !0)
            },
            p: t,
            d(t) {
                t && p(n),
                e[17](null),
                I = !1,
                i(l)
            }
        }
    }
    function Ti(t) {
        let e;
        return {
            c() {
                e = m("polyline"),
                D(e, "points", "10,4 6,0 10,-4"),
                D(e, "fill", "none"),
                D(e, "pointer-events", "none"),
                D(e, "stroke", t[8])
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, n) {
                256 & n && D(e, "stroke", t[8])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function wi(t) {
        let e;
        return {
            c() {
                e = m("polyline"),
                D(e, "points", "6,-4 10,0 6,4"),
                D(e, "fill", "none"),
                D(e, "pointer-events", "none"),
                D(e, "stroke", t[8])
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, n) {
                256 & n && D(e, "stroke", t[8])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Wi(t) {
        let e;
        return {
            c() {
                e = m("line"),
                D(e, "x1", "0"),
                D(e, "y1", "0"),
                D(e, "x2", "10"),
                D(e, "y2", "0"),
                D(e, "stroke", t[8]),
                D(e, "pointer-events", "none")
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, n) {
                256 & n && D(e, "stroke", t[8])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function zi(t) {
        let e, n;
        return {
            c() {
                e = m("line"),
                n = m("circle"),
                D(e, "x1", "7"),
                D(e, "y1", "0"),
                D(e, "x2", "10"),
                D(e, "y2", "0"),
                D(e, "stroke", t[8]),
                D(e, "pointer-events", "none"),
                D(n, "cx", "3.5"),
                D(n, "cy", "0"),
                D(n, "r", "3"),
                D(n, "fill", "none"),
                D(n, "stroke", t[8]),
                D(n, "pointer-events", "none")
            },
            m(t, i) {
                s(t, e, i),
                s(t, n, i)
            },
            p(t, i) {
                256 & i && D(e, "stroke", t[8]),
                256 & i && D(n, "stroke", t[8])
            },
            d(t) {
                t && p(e),
                t && p(n)
            }
        }
    }
    function Si(t) {
        let e;
        return {
            c() {
                e = m("polyline"),
                D(e, "points", "0,-4 -6,0 0,4"),
                D(e, "stroke", "black"),
                D(e, "fill", "none")
            },
            m(t, n) {
                s(t, e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Oi(t) {
        let e, n, i = t[6] && Yi(t), I = !t[6] && xi(t);
        return {
            c() {
                i && i.c(),
                e = Z(),
                I && I.c(),
                n = Z()
            },
            m(t, l) {
                i && i.m(t, l),
                s(t, e, l),
                I && I.m(t, l),
                s(t, n, l)
            },
            p(t, l) {
                t[6] ? i ? i.p(t, l) : (i = Yi(t),
                i.c(),
                i.m(e.parentNode, e)) : i && (i.d(1),
                i = null),
                t[6] ? I && (I.d(1),
                I = null) : I ? I.p(t, l) : (I = xi(t),
                I.c(),
                I.m(n.parentNode, n))
            },
            d(t) {
                i && i.d(t),
                t && p(e),
                I && I.d(t),
                t && p(n)
            }
        }
    }
    function Yi(t) {
        let e, n;
        return {
            c() {
                e = m("text"),
                n = N(t[0]),
                D(e, "x", -8),
                D(e, "y", 0),
                D(e, "font-size", Re),
                D(e, "text-anchor", "end"),
                D(e, "alignment-baseline", "middle"),
                D(e, "class", "svelte-13a8vxg")
            },
            m(t, i) {
                s(t, e, i),
                d(e, n)
            },
            p(t, e) {
                1 & e && M(n, t[0])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function xi(t) {
        let e, n;
        return {
            c() {
                e = m("text"),
                n = N(t[0]),
                D(e, "x", -3),
                D(e, "y", 0),
                D(e, "font-size", Re),
                D(e, "text-anchor", "end"),
                D(e, "alignment-baseline", "middle"),
                D(e, "class", "svelte-13a8vxg")
            },
            m(t, i) {
                s(t, e, i),
                d(e, n)
            },
            p(t, e) {
                1 & e && M(n, t[0])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function ki(t) {
        let e, n, i = t[6] && Pi(t), I = !t[6] && Li(t);
        return {
            c() {
                i && i.c(),
                e = Z(),
                I && I.c(),
                n = Z()
            },
            m(t, l) {
                i && i.m(t, l),
                s(t, e, l),
                I && I.m(t, l),
                s(t, n, l)
            },
            p(t, l) {
                t[6] ? i ? i.p(t, l) : (i = Pi(t),
                i.c(),
                i.m(e.parentNode, e)) : i && (i.d(1),
                i = null),
                t[6] ? I && (I.d(1),
                I = null) : I ? I.p(t, l) : (I = Li(t),
                I.c(),
                I.m(n.parentNode, n))
            },
            d(t) {
                i && i.d(t),
                t && p(e),
                I && I.d(t),
                t && p(n)
            }
        }
    }
    function Pi(t) {
        let e, n;
        return {
            c() {
                e = m("text"),
                n = N(t[0]),
                D(e, "x", 0),
                D(e, "y", -8),
                D(e, "font-size", Re),
                D(e, "text-anchor", "middle"),
                D(e, "alignment-baseline", "baseline"),
                D(e, "class", "svelte-13a8vxg")
            },
            m(t, i) {
                s(t, e, i),
                d(e, n)
            },
            p(t, e) {
                1 & e && M(n, t[0])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Li(t) {
        let e, n;
        return {
            c() {
                e = m("text"),
                n = N(t[0]),
                D(e, "x", 0),
                D(e, "y", -3),
                D(e, "font-size", Re),
                D(e, "text-anchor", "middle"),
                D(e, "alignment-baseline", "baseline"),
                D(e, "class", "svelte-13a8vxg")
            },
            m(t, i) {
                s(t, e, i),
                d(e, n)
            },
            p(t, e) {
                1 & e && M(n, t[0])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Ri(t) {
        let e, n, i = t[6] && Qi(t), I = !t[6] && Bi(t);
        return {
            c() {
                i && i.c(),
                e = Z(),
                I && I.c(),
                n = Z()
            },
            m(t, l) {
                i && i.m(t, l),
                s(t, e, l),
                I && I.m(t, l),
                s(t, n, l)
            },
            p(t, l) {
                t[6] ? i ? i.p(t, l) : (i = Qi(t),
                i.c(),
                i.m(e.parentNode, e)) : i && (i.d(1),
                i = null),
                t[6] ? I && (I.d(1),
                I = null) : I ? I.p(t, l) : (I = Bi(t),
                I.c(),
                I.m(n.parentNode, n))
            },
            d(t) {
                i && i.d(t),
                t && p(e),
                I && I.d(t),
                t && p(n)
            }
        }
    }
    function Qi(t) {
        let e, n;
        return {
            c() {
                e = m("text"),
                n = N(t[0]),
                D(e, "x", 8),
                D(e, "y", 0),
                D(e, "font-size", Re),
                D(e, "text-anchor", "start"),
                D(e, "alignment-baseline", "middle"),
                D(e, "class", "svelte-13a8vxg")
            },
            m(t, i) {
                s(t, e, i),
                d(e, n)
            },
            p(t, e) {
                1 & e && M(n, t[0])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Bi(t) {
        let e, n;
        return {
            c() {
                e = m("text"),
                n = N(t[0]),
                D(e, "x", 3),
                D(e, "y", 0),
                D(e, "font-size", Re),
                D(e, "text-anchor", "start"),
                D(e, "alignment-baseline", "middle"),
                D(e, "class", "svelte-13a8vxg")
            },
            m(t, i) {
                s(t, e, i),
                d(e, n)
            },
            p(t, e) {
                1 & e && M(n, t[0])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Ui(t) {
        let e, n, i = t[6] && $i(t), I = !t[6] && Ei(t);
        return {
            c() {
                i && i.c(),
                e = Z(),
                I && I.c(),
                n = Z()
            },
            m(t, l) {
                i && i.m(t, l),
                s(t, e, l),
                I && I.m(t, l),
                s(t, n, l)
            },
            p(t, l) {
                t[6] ? i ? i.p(t, l) : (i = $i(t),
                i.c(),
                i.m(e.parentNode, e)) : i && (i.d(1),
                i = null),
                t[6] ? I && (I.d(1),
                I = null) : I ? I.p(t, l) : (I = Ei(t),
                I.c(),
                I.m(n.parentNode, n))
            },
            d(t) {
                i && i.d(t),
                t && p(e),
                I && I.d(t),
                t && p(n)
            }
        }
    }
    function $i(t) {
        let e, n;
        return {
            c() {
                e = m("text"),
                n = N(t[0]),
                D(e, "x", 0),
                D(e, "y", 8),
                D(e, "font-size", Re),
                D(e, "text-anchor", "middle"),
                D(e, "alignment-baseline", "hanging"),
                D(e, "class", "svelte-13a8vxg")
            },
            m(t, i) {
                s(t, e, i),
                d(e, n)
            },
            p(t, e) {
                1 & e && M(n, t[0])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Ei(t) {
        let e, n;
        return {
            c() {
                e = m("text"),
                n = N(t[0]),
                D(e, "x", 0),
                D(e, "y", 3),
                D(e, "font-size", Re),
                D(e, "text-anchor", "middle"),
                D(e, "alignment-baseline", "hanging"),
                D(e, "class", "svelte-13a8vxg")
            },
            m(t, i) {
                s(t, e, i),
                d(e, n)
            },
            p(t, e) {
                1 & e && M(n, t[0])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Xi(e) {
        let n, i, I, l, c, o, g, a, r, u, C, A, N = (e[1] === ct.OUTPUT && (e[7] === pe.NEUTRAL || e[7] === pe.ADD_PART) || e[1] === ct.INPUT && e[7] === pe.ADD_CONNECTION) && Gi(e), b = e[1] === ct.INPUT && Ti(e), y = e[1] === ct.OUTPUT && wi(e), M = !e[5] && Wi(e), v = e[5] && zi(e), h = e[6] && Si(), j = e[4] === ot.RIGHT && Oi(e), f = e[4] === ot.DOWN && ki(e), G = e[4] === ot.LEFT && Ri(e), T = e[4] === ot.UP && Ui(e);
        return {
            c() {
                n = m("g"),
                i = m("g"),
                N && N.c(),
                I = Z(),
                b && b.c(),
                l = Z(),
                y && y.c(),
                c = Z(),
                M && M.c(),
                o = Z(),
                v && v.c(),
                g = Z(),
                h && h.c(),
                j && j.c(),
                r = Z(),
                f && f.c(),
                u = Z(),
                G && G.c(),
                C = Z(),
                T && T.c(),
                D(i, "transform", a = "rotate(" + e[4] + ")"),
                D(n, "transform", A = "translate(" + e[2] + " " + e[3] + ")")
            },
            m(t, e) {
                s(t, n, e),
                d(n, i),
                N && N.m(i, null),
                d(i, I),
                b && b.m(i, null),
                d(i, l),
                y && y.m(i, null),
                d(i, c),
                M && M.m(i, null),
                d(i, o),
                v && v.m(i, null),
                d(i, g),
                h && h.m(i, null),
                j && j.m(n, null),
                d(n, r),
                f && f.m(n, null),
                d(n, u),
                G && G.m(n, null),
                d(n, C),
                T && T.m(n, null)
            },
            p(t, [e]) {
                t[1] === ct.OUTPUT && (t[7] === pe.NEUTRAL || t[7] === pe.ADD_PART) || t[1] === ct.INPUT && t[7] === pe.ADD_CONNECTION ? N ? N.p(t, e) : (N = Gi(t),
                N.c(),
                N.m(i, I)) : N && (N.d(1),
                N = null),
                t[1] === ct.INPUT ? b ? b.p(t, e) : (b = Ti(t),
                b.c(),
                b.m(i, l)) : b && (b.d(1),
                b = null),
                t[1] === ct.OUTPUT ? y ? y.p(t, e) : (y = wi(t),
                y.c(),
                y.m(i, c)) : y && (y.d(1),
                y = null),
                t[5] ? M && (M.d(1),
                M = null) : M ? M.p(t, e) : (M = Wi(t),
                M.c(),
                M.m(i, o)),
                t[5] ? v ? v.p(t, e) : (v = zi(t),
                v.c(),
                v.m(i, g)) : v && (v.d(1),
                v = null),
                t[6] ? h || (h = Si(),
                h.c(),
                h.m(i, null)) : h && (h.d(1),
                h = null),
                16 & e && a !== (a = "rotate(" + t[4] + ")") && D(i, "transform", a),
                t[4] === ot.RIGHT ? j ? j.p(t, e) : (j = Oi(t),
                j.c(),
                j.m(n, r)) : j && (j.d(1),
                j = null),
                t[4] === ot.DOWN ? f ? f.p(t, e) : (f = ki(t),
                f.c(),
                f.m(n, u)) : f && (f.d(1),
                f = null),
                t[4] === ot.LEFT ? G ? G.p(t, e) : (G = Ri(t),
                G.c(),
                G.m(n, C)) : G && (G.d(1),
                G = null),
                t[4] === ot.UP ? T ? T.p(t, e) : (T = Ui(t),
                T.c(),
                T.m(n, null)) : T && (T.d(1),
                T = null),
                12 & e && A !== (A = "translate(" + t[2] + " " + t[3] + ")") && D(n, "transform", A)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                N && N.d(),
                b && b.d(),
                y && y.d(),
                M && M.d(),
                v && v.d(),
                h && h.d(),
                j && j.d(),
                f && f.d(),
                G && G.d(),
                T && T.d()
            }
        }
    }
    function Fi(t) {
        t.stopImmediatePropagation()
    }
    function Hi(t, e, n) {
        let i, I, l, c;
        const o = Ye();
        a(t, o, (t=>n(16, c = t)));
        let {pinType: g} = e
          , {partId: r} = e
          , {pinNr: u} = e
          , {x: d} = e
          , {y: s} = e
          , {rotate: p} = e
          , {inverted: C} = e
          , {label: A} = e
          , {triangle: m} = e;
        let N, b = ke;
        return t.$$set = t=>{
            "pinType"in t && n(1, g = t.pinType),
            "partId"in t && n(12, r = t.partId),
            "pinNr"in t && n(13, u = t.pinNr),
            "x"in t && n(2, d = t.x),
            "y"in t && n(3, s = t.y),
            "rotate"in t && n(4, p = t.rotate),
            "inverted"in t && n(5, C = t.inverted),
            "label"in t && n(0, A = t.label),
            "triangle"in t && n(6, m = t.triangle)
        }
        ,
        t.$$.update = ()=>{
            if (65536 & t.$$.dirty && n(15, i = c.simState),
            65536 & t.$$.dirty && n(7, I = c.uiState.editMode),
            65536 & t.$$.dirty && n(14, l = c.uiState),
            1 & t.$$.dirty && "string" != typeof A && n(0, A = ""),
            61570 & t.$$.dirty)
                if (I === pe.SIMULATION_RUNNING && g === ct.OUTPUT) {
                    const t = i.parts[r].outputPins[u].value;
                    n(8, b = t ? xe : ke)
                } else if (I === pe.SIMULATION_RUNNING && g === ct.INPUT) {
                    const t = i.parts[r].inputPinValues[u];
                    n(8, b = t ? xe : ke)
                } else if (I === pe.SIMULATION_PAUSED && g === ct.OUTPUT) {
                    const t = i.history[i.activeHistoryEntry].parts[r].outputPins[u].value;
                    n(8, b = t ? xe : ke)
                } else if (I === pe.SIMULATION_PAUSED && g === ct.INPUT) {
                    const t = i.history[i.activeHistoryEntry].parts[r].inputPinValues[u];
                    n(8, b = t ? xe : ke)
                } else
                    g === ct.OUTPUT && I === pe.ADD_CONNECTION && l.addConnection.fromPartId === r && l.addConnection.fromOutputPinNr === u ? n(8, b = "red") : n(8, b = ke)
        }
        ,
        [A, g, d, s, p, C, m, I, b, N, o, function(t) {
            t.stopImmediatePropagation(),
            g === ct.OUTPUT ? I === pe.ADD_PART ? (o.set(Un(c)),
            o.set(bn(c, r, u))) : I === pe.NEUTRAL && o.set(bn(c, r, u)) : g === ct.INPUT && I === pe.ADD_CONNECTION && o.set(function(t, e, n) {
                const i = t.project.modules[t.project.activeModuleId]
                  , I = t.uiState;
                return void 0 === Object.values(i.connections).find((t=>t.toPartId === e && t.toInputPinNr === n)) ? tn(t, (t=>{
                    const i = t.project.modules[t.project.activeModuleId]
                      , l = i.nextConnectionId.toString();
                    i.connections[l] = {
                        id: l,
                        points: I.addConnection.points,
                        pointOrder: I.addConnection.pointOrder,
                        nextPointId: I.addConnection.nextPointId,
                        fromPartId: I.addConnection.fromPartId,
                        fromOutputPinNr: I.addConnection.fromOutputPinNr,
                        toPartId: e,
                        toInputPinNr: n
                    },
                    i.nextConnectionId++,
                    t.uiState.editMode = pe.NEUTRAL,
                    en(t)
                }
                )) : t
            }(c, r, u))
        }
        , r, u, l, i, c, function(t) {
            O[t ? "unshift" : "push"]((()=>{
                N = t,
                n(9, N)
            }
            ))
        }
        ]
    }
    class Ji extends It {
        constructor(t) {
            super(),
            it(this, t, Hi, Xi, g, {
                pinType: 1,
                partId: 12,
                pinNr: 13,
                x: 2,
                y: 3,
                rotate: 4,
                inverted: 5,
                label: 0,
                triangle: 6
            })
        }
    }
    function Vi(t, e, n) {
        const i = t.slice();
        return i[7] = e[n],
        i[9] = n,
        i
    }
    function Ki(t) {
        let e, n;
        return e = new Ji({
            props: {
                x: at(t[7], t[4]),
                y: rt(t[7], t[2]),
                rotate: gt(t[7]),
                pinNr: t[9],
                pinType: t[7].pinType,
                partId: t[1].id,
                inverted: t[7].inverted,
                label: t[7].label,
                triangle: t[7].triangle
            }
        }),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, n) {
                const i = {};
                1 & n && (i.x = at(t[7], t[4])),
                5 & n && (i.y = rt(t[7], t[2])),
                1 & n && (i.rotate = gt(t[7])),
                1 & n && (i.pinType = t[7].pinType),
                2 & n && (i.partId = t[1].id),
                1 & n && (i.inverted = t[7].inverted),
                1 & n && (i.label = t[7].label),
                1 & n && (i.triangle = t[7].triangle),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function _i(t) {
        let e, n, i = t[0], I = [];
        for (let e = 0; e < i.length; e += 1)
            I[e] = Ki(Vi(t, i, e));
        const l = t=>J(I[t], 1, 1, (()=>{
            I[t] = null
        }
        ));
        return {
            c() {
                for (let t = 0; t < I.length; t += 1)
                    I[t].c();
                e = Z()
            },
            m(t, i) {
                for (let e = 0; e < I.length; e += 1)
                    I[e] && I[e].m(t, i);
                s(t, e, i),
                n = !0
            },
            p(t, [n]) {
                if (23 & n) {
                    let c;
                    for (i = t[0],
                    c = 0; c < i.length; c += 1) {
                        const l = Vi(t, i, c);
                        I[c] ? (I[c].p(l, n),
                        H(I[c], 1)) : (I[c] = Ki(l),
                        I[c].c(),
                        H(I[c], 1),
                        I[c].m(e.parentNode, e))
                    }
                    for (X(),
                    c = i.length; c < I.length; c += 1)
                        l(c);
                    F()
                }
            },
            i(t) {
                if (!n) {
                    for (let t = 0; t < i.length; t += 1)
                        H(I[t]);
                    n = !0
                }
            },
            o(t) {
                I = I.filter(Boolean);
                for (let t = 0; t < I.length; t += 1)
                    J(I[t]);
                n = !1
            },
            d(t) {
                C(I, t),
                t && p(e)
            }
        }
    }
    function qi(t, e, n) {
        let i, I, l;
        const c = Ye();
        a(t, c, (t=>n(6, l = t)));
        let {pins: o} = e
          , {part: g} = e
          , r = Fe(g);
        return t.$$set = t=>{
            "pins"in t && n(0, o = t.pins),
            "part"in t && n(1, g = t.part)
        }
        ,
        t.$$.update = ()=>{
            64 & t.$$.dirty && n(5, i = l.project),
            34 & t.$$.dirty && n(2, I = Xe(g, i.modules))
        }
        ,
        [o, g, I, c, r, i, l]
    }
    class tI extends It {
        constructor(t) {
            super(),
            it(this, t, qi, _i, g, {
                pins: 0,
                part: 1
            })
        }
    }
    function eI(t) {
        if (0 === t.length)
            return [];
        const e = t[0].timestamp;
        return (n = t=>t.timestamp === e,
        function(t) {
            for (var e = [], i = 0, I = t; i < I.length; i++) {
                var l = I[i];
                if (!n(l))
                    break;
                e.push(l)
            }
            var c = e.length;
            return c === t.length ? t : 0 === c ? Et : e
        }
        )(t);
        var n
    }
    function nI(t, e, n) {
        return [...$t((t=>{
            const i = e.find((e=>e.partId === t.partId));
            return void 0 === i || t.timestamp < n + i.gateDelay / 2
        }
        ))(t), ...e].sort(((t,e)=>t.timestamp - e.timestamp))
    }
    const iI = (t,e)=>t.some((t=>t.partId === e));
    function II(e) {
        let n, i, I, l, c, o, g, a, r, u, C, A, N, b, Z, y, M, h, j, f;
        return {
            c() {
                n = m("svg"),
                i = m("defs"),
                I = m("g"),
                l = m("circle"),
                c = m("path"),
                o = m("path"),
                g = m("path"),
                a = m("path"),
                r = m("path"),
                u = m("path"),
                C = m("path"),
                A = m("path"),
                N = m("path"),
                b = m("path"),
                Z = m("path"),
                y = m("path"),
                M = m("path"),
                h = m("path"),
                j = m("path"),
                f = m("path"),
                D(i, "id", "defs2"),
                v(l, "fill", "none"),
                v(l, "fill-opacity", "1"),
                v(l, "stroke", "#919191"),
                v(l, "stroke-width", "0.75302"),
                v(l, "stroke-linecap", "round"),
                v(l, "stroke-linejoin", "round"),
                v(l, "stroke-dasharray", "none"),
                v(l, "stroke-opacity", "1"),
                v(l, "stop-color", "#000000"),
                D(l, "id", "path287"),
                D(l, "cx", "7.1921268"),
                D(l, "cy", "17.514103"),
                D(l, "r", "2.2706189"),
                v(c, "fill", "#919191"),
                v(c, "fill-opacity", "1"),
                v(c, "stroke", "#919191"),
                v(c, "stroke-width", "0.094127"),
                v(c, "stroke-linecap", "round"),
                v(c, "stroke-linejoin", "round"),
                v(c, "stroke-dasharray", "none"),
                v(c, "stroke-opacity", "1"),
                v(c, "stop-color", "#000000"),
                D(c, "d", "m 6.7214895,15.160914 0.188255,-0.941274 h 0.5647646 l 0.188255,0.941274 z"),
                D(c, "id", "path2424"),
                v(o, "fill", "#919191"),
                v(o, "fill-opacity", "1"),
                v(o, "stroke", "#919191"),
                v(o, "stroke-width", "0.094127"),
                v(o, "stroke-linecap", "round"),
                v(o, "stroke-linejoin", "round"),
                v(o, "stroke-dasharray", "none"),
                v(o, "stroke-opacity", "1"),
                v(o, "stop-color", "#000000"),
                D(o, "d", "m 4.9179613,16.746476 -0.7210404,-0.633671 0.2823822,-0.4891 0.9092954,0.307603 z"),
                D(o, "id", "path2424-5"),
                v(g, "fill", "#919191"),
                v(g, "fill-opacity", "1"),
                v(g, "stroke", "#919191"),
                v(g, "stroke-width", "0.094127"),
                v(g, "stroke-linecap", "round"),
                v(g, "stroke-linejoin", "round"),
                v(g, "stroke-dasharray", "none"),
                v(g, "stroke-opacity", "1"),
                v(g, "stop-color", "#000000"),
                D(g, "d", "m 5.5266169,15.758514 -0.307604,-0.909294 0.4891004,-0.282383 0.6336709,0.72104 z"),
                D(g, "id", "path2424-2"),
                v(a, "fill", "#919191"),
                v(a, "fill-opacity", "1"),
                v(a, "stroke", "#919191"),
                v(a, "stroke-width", "0.094127"),
                v(a, "stroke-linecap", "round"),
                v(a, "stroke-linejoin", "round"),
                v(a, "stroke-dasharray", "none"),
                v(a, "stroke-opacity", "1"),
                v(a, "stop-color", "#000000"),
                D(a, "d", "m 6.7214895,15.160914 0.188255,-0.941274 h 0.5647646 l 0.188255,0.941274 z"),
                D(a, "id", "path2424-3"),
                v(r, "fill", "#919191"),
                v(r, "fill-opacity", "1"),
                v(r, "stroke", "#919191"),
                v(r, "stroke-width", "0.094127"),
                v(r, "stroke-linecap", "round"),
                v(r, "stroke-linejoin", "round"),
                v(r, "stroke-dasharray", "none"),
                v(r, "stroke-opacity", "1"),
                v(r, "stop-color", "#000000"),
                D(r, "d", "M 4.9179614,16.746476 4.1969208,16.112805 4.4793033,15.623706 5.3885986,15.931309 Z"),
                D(r, "id", "path2424-5-7"),
                v(u, "fill", "#919191"),
                v(u, "fill-opacity", "1"),
                v(u, "stroke", "#919191"),
                v(u, "stroke-width", "0.094127"),
                v(u, "stroke-linecap", "round"),
                v(u, "stroke-linejoin", "round"),
                v(u, "stroke-dasharray", "none"),
                v(u, "stroke-opacity", "1"),
                v(u, "stop-color", "#000000"),
                D(u, "d", "M 5.5264341,15.756754 5.2188298,14.847458 5.7079305,14.565077 6.341601,15.286117 Z"),
                D(u, "id", "path2424-2-2"),
                v(C, "fill", "#919191"),
                v(C, "fill-opacity", "1"),
                v(C, "stroke", "#919191"),
                v(C, "stroke-width", "0.094127"),
                v(C, "stroke-linecap", "round"),
                v(C, "stroke-linejoin", "round"),
                v(C, "stroke-dasharray", "none"),
                v(C, "stroke-opacity", "1"),
                v(C, "stop-color", "#000000"),
                D(C, "d", "m 9.4508478,17.043166 0.9412752,0.188255 v 0.564765 l -0.9412752,0.188255 z"),
                D(C, "id", "path2424-3-4"),
                v(A, "fill", "#919191"),
                v(A, "fill-opacity", "1"),
                v(A, "stroke", "#919191"),
                v(A, "stroke-width", "0.094127"),
                v(A, "stroke-linecap", "round"),
                v(A, "stroke-linejoin", "round"),
                v(A, "stroke-dasharray", "none"),
                v(A, "stroke-opacity", "1"),
                v(A, "stop-color", "#000000"),
                D(A, "d", "M 7.8652865,15.239638 8.4989573,14.518598 8.9880576,14.80098 8.680454,15.710276 Z"),
                D(A, "id", "path2424-5-7-0"),
                v(N, "fill", "#919191"),
                v(N, "fill-opacity", "1"),
                v(N, "stroke", "#919191"),
                v(N, "stroke-width", "0.094127"),
                v(N, "stroke-linecap", "round"),
                v(N, "stroke-linejoin", "round"),
                v(N, "stroke-dasharray", "none"),
                v(N, "stroke-opacity", "1"),
                v(N, "stop-color", "#000000"),
                D(N, "d", "m 8.8532478,15.848294 0.9092956,-0.307605 0.2823816,0.489101 -0.72104,0.633671 z"),
                D(N, "id", "path2424-2-2-4"),
                v(b, "fill", "#919191"),
                v(b, "fill-opacity", "1"),
                v(b, "stroke", "#919191"),
                v(b, "stroke-width", "0.094127"),
                v(b, "stroke-linecap", "round"),
                v(b, "stroke-linejoin", "round"),
                v(b, "stroke-dasharray", "none"),
                v(b, "stroke-opacity", "1"),
                v(b, "stop-color", "#000000"),
                D(b, "d", "M 4.9341998,17.985705 3.9929248,17.797449 V 17.232684 L 4.9341998,17.04443 Z"),
                D(b, "id", "path2424-3-4-9"),
                v(Z, "fill", "#919191"),
                v(Z, "fill-opacity", "1"),
                v(Z, "stroke", "#919191"),
                v(Z, "stroke-width", "0.094127"),
                v(Z, "stroke-linecap", "round"),
                v(Z, "stroke-linejoin", "round"),
                v(Z, "stroke-dasharray", "none"),
                v(Z, "stroke-opacity", "1"),
                v(Z, "stop-color", "#000000"),
                D(Z, "d", "M 6.5197615,19.789232 5.8860907,20.510273 5.3969905,20.227891 5.704594,19.318595 Z"),
                D(Z, "id", "path2424-5-7-0-6"),
                v(y, "fill", "#919191"),
                v(y, "fill-opacity", "1"),
                v(y, "stroke", "#919191"),
                v(y, "stroke-width", "0.094127"),
                v(y, "stroke-linecap", "round"),
                v(y, "stroke-linejoin", "round"),
                v(y, "stroke-dasharray", "none"),
                v(y, "stroke-opacity", "1"),
                v(y, "stop-color", "#000000"),
                D(y, "d", "M 5.5318001,19.180577 4.6225048,19.488181 4.3401227,18.99908 5.0611629,18.365409 Z"),
                D(y, "id", "path2424-2-2-4-0"),
                v(M, "fill", "#919191"),
                v(M, "fill-opacity", "1"),
                v(M, "stroke", "#919191"),
                v(M, "stroke-width", "0.094127"),
                v(M, "stroke-linecap", "round"),
                v(M, "stroke-linejoin", "round"),
                v(M, "stroke-dasharray", "none"),
                v(M, "stroke-opacity", "1"),
                v(M, "stop-color", "#000000"),
                D(M, "d", "M 7.757941,19.773078 7.5696859,20.714352 H 7.004921 L 6.816666,19.773078 Z"),
                D(M, "id", "path2424-3-4-9-2"),
                v(h, "fill", "#919191"),
                v(h, "fill-opacity", "1"),
                v(h, "stroke", "#919191"),
                v(h, "stroke-width", "0.094127"),
                v(h, "stroke-linecap", "round"),
                v(h, "stroke-linejoin", "round"),
                v(h, "stroke-dasharray", "none"),
                v(h, "stroke-opacity", "1"),
                v(h, "stop-color", "#000000"),
                D(h, "d", "m 9.5614686,18.187516 0.7210414,0.633671 -0.282383,0.4891 -0.9092956,-0.307604 z"),
                D(h, "id", "path2424-5-7-0-6-3"),
                v(j, "fill", "#919191"),
                v(j, "fill-opacity", "1"),
                v(j, "stroke", "#919191"),
                v(j, "stroke-width", "0.094127"),
                v(j, "stroke-linecap", "round"),
                v(j, "stroke-linejoin", "round"),
                v(j, "stroke-dasharray", "none"),
                v(j, "stroke-opacity", "1"),
                v(j, "stop-color", "#000000"),
                D(j, "d", "m 8.9528132,19.175477 0.3076037,0.909296 -0.4891003,0.282381 -0.6336708,-0.72104 z"),
                D(j, "id", "path2424-2-2-4-0-1"),
                v(f, "fill", "#919191"),
                v(f, "fill-opacity", "1"),
                v(f, "stroke", "#919191"),
                v(f, "stroke-width", "0.094127"),
                v(f, "stroke-linecap", "round"),
                v(f, "stroke-linejoin", "round"),
                v(f, "stroke-dasharray", "none"),
                v(f, "stroke-opacity", "1"),
                v(f, "stop-color", "#000000"),
                D(f, "d", "M 4.8404105,17.98621 3.8991358,17.797954 V 17.23319 l 0.9412747,-0.188255 z"),
                D(f, "id", "path2424-3-9-0"),
                D(I, "id", "layer1"),
                D(I, "transform", "translate(-3.8405928,-14.161097)"),
                D(n, "width", "25"),
                D(n, "height", "25"),
                D(n, "viewBox", "0 0 6.6145832 6.6145832"),
                D(n, "version", "1.1"),
                D(n, "id", "svg5"),
                D(n, "xmlns", "http://www.w3.org/2000/svg"),
                D(n, "xmlns:svg", "http://www.w3.org/2000/svg")
            },
            m(t, e) {
                s(t, n, e),
                d(n, i),
                d(n, I),
                d(I, l),
                d(I, c),
                d(I, o),
                d(I, g),
                d(I, a),
                d(I, r),
                d(I, u),
                d(I, C),
                d(I, A),
                d(I, N),
                d(I, b),
                d(I, Z),
                d(I, y),
                d(I, M),
                d(I, h),
                d(I, j),
                d(I, f)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && p(n)
            }
        }
    }
    class lI extends It {
        constructor(t) {
            super(),
            it(this, t, null, II, g, {})
        }
    }
    function cI(t) {
        let e, n, i, I;
        return i = new lI({}),
        {
            c() {
                e = m("g"),
                n = m("g"),
                q(i.$$.fragment),
                D(n, "class", "gear svelte-qnawbq"),
                D(e, "transform", "translate(-10 -10)")
            },
            m(t, l) {
                s(t, e, l),
                d(e, n),
                tt(i, n, null),
                I = !0
            },
            i(t) {
                I || (H(i.$$.fragment, t),
                I = !0)
            },
            o(t) {
                J(i.$$.fragment, t),
                I = !1
            },
            d(t) {
                t && p(e),
                et(i)
            }
        }
    }
    function oI(t) {
        let e, n, i = t[0] && cI();
        return {
            c() {
                i && i.c(),
                e = Z()
            },
            m(t, I) {
                i && i.m(t, I),
                s(t, e, I),
                n = !0
            },
            p(t, [n]) {
                t[0] ? i ? 1 & n && H(i, 1) : (i = cI(),
                i.c(),
                H(i, 1),
                i.m(e.parentNode, e)) : i && (X(),
                J(i, 1, 1, (()=>{
                    i = null
                }
                )),
                F())
            },
            i(t) {
                n || (H(i),
                n = !0)
            },
            o(t) {
                J(i),
                n = !1
            },
            d(t) {
                i && i.d(t),
                t && p(e)
            }
        }
    }
    function gI(t, e, n) {
        let i, I, l, {partId: c=""} = e, {show: o=!1} = e;
        const g = Ye();
        a(t, g, (t=>n(6, l = t)));
        let r = !1;
        return t.$$set = t=>{
            "partId"in t && n(2, c = t.partId),
            "show"in t && n(3, o = t.show)
        }
        ,
        t.$$.update = ()=>{
            64 & t.$$.dirty && n(5, i = l.uiState.editMode),
            64 & t.$$.dirty && n(4, I = l.simState),
            60 & t.$$.dirty && n(0, r = "" === c ? o : i === pe.SIMULATION_PAUSED && iI(I.history[I.activeHistoryEntry].queue, c))
        }
        ,
        [r, g, c, o, I, i, l]
    }
    class aI extends It {
        constructor(t) {
            super(),
            it(this, t, gI, oI, g, {
                partId: 2,
                show: 3
            })
        }
    }
    function rI(t) {
        let e, n;
        return e = new Bn({
            props: {
                width: t[2].width,
                height: t[2].height
            }
        }),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, n) {
                const i = {};
                4 & n && (i.width = t[2].width),
                4 & n && (i.height = t[2].height),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function uI(t) {
        let e, n, I, l, c, o = t[4].select.selectedPartIds.includes(t[0].id), g = t[8] && function(t) {
            let e, n, I, l, c;
            return {
                c() {
                    e = m("polyline"),
                    D(e, "points", t[5]),
                    D(e, "width", n = Fe(t[0])),
                    D(e, "height", I = Xe(t[0], t[1].modules)),
                    D(e, "fill", "white"),
                    D(e, "stroke", "black"),
                    D(e, "fill-opacity", "0")
                },
                m(n, i) {
                    s(n, e, i),
                    t[18](e),
                    l || (c = [y(e, "pointerdown", t[9]), y(e, "pointermove", t[10]), y(e, "pointerup", t[11]), y(e, "click", t[12])],
                    l = !0)
                },
                p(t, i) {
                    32 & i && D(e, "points", t[5]),
                    1 & i && n !== (n = Fe(t[0])) && D(e, "width", n),
                    3 & i && I !== (I = Xe(t[0], t[1].modules)) && D(e, "height", I)
                },
                d(n) {
                    n && p(e),
                    t[18](null),
                    l = !1,
                    i(c)
                }
            }
        }(t), a = !t[8] && function(t) {
            let e, n, I, l, c;
            return {
                c() {
                    e = m("rect"),
                    D(e, "x", 0),
                    D(e, "y", 0),
                    D(e, "width", n = Fe(t[0])),
                    D(e, "height", I = Xe(t[0], t[1].modules)),
                    D(e, "fill", "white"),
                    D(e, "stroke", "none"),
                    D(e, "fill-opacity", "0")
                },
                m(n, i) {
                    s(n, e, i),
                    t[19](e),
                    l || (c = [y(e, "pointerdown", t[9]), y(e, "pointermove", t[10]), y(e, "pointerup", t[11]), y(e, "click", t[12])],
                    l = !0)
                },
                p(t, i) {
                    1 & i && n !== (n = Fe(t[0])) && D(e, "width", n),
                    3 & i && I !== (I = Xe(t[0], t[1].modules)) && D(e, "height", I)
                },
                d(n) {
                    n && p(e),
                    t[19](null),
                    l = !1,
                    i(c)
                }
            }
        }(t), r = t[7].debug && function(t) {
            let e, n, i = t[0].id + "";
            return {
                c() {
                    e = m("text"),
                    n = N(i),
                    D(e, "text-anchor", "middle"),
                    D(e, "class", "no-select svelte-1h3j6go"),
                    D(e, "x", 5),
                    D(e, "y", -5)
                },
                m(t, i) {
                    s(t, e, i),
                    d(e, n)
                },
                p(t, e) {
                    1 & e && i !== (i = t[0].id + "") && M(n, i)
                },
                d(t) {
                    t && p(e)
                }
            }
        }(t), u = o && rI(t);
        return {
            c() {
                g && g.c(),
                e = b(),
                a && a.c(),
                n = b(),
                r && r.c(),
                I = b(),
                u && u.c(),
                l = Z()
            },
            m(t, i) {
                g && g.m(t, i),
                s(t, e, i),
                a && a.m(t, i),
                s(t, n, i),
                r && r.m(t, i),
                s(t, I, i),
                u && u.m(t, i),
                s(t, l, i),
                c = !0
            },
            p(t, [e]) {
                t[8] && g.p(t, e),
                t[8] || a.p(t, e),
                t[7].debug && r.p(t, e),
                17 & e && (o = t[4].select.selectedPartIds.includes(t[0].id)),
                o ? u ? (u.p(t, e),
                17 & e && H(u, 1)) : (u = rI(t),
                u.c(),
                H(u, 1),
                u.m(l.parentNode, l)) : u && (X(),
                J(u, 1, 1, (()=>{
                    u = null
                }
                )),
                F())
            },
            i(t) {
                c || (H(u),
                c = !0)
            },
            o(t) {
                J(u),
                c = !1
            },
            d(t) {
                g && g.d(t),
                t && p(e),
                a && a.d(t),
                t && p(n),
                r && r.d(t),
                t && p(I),
                u && u.d(t),
                t && p(l)
            }
        }
    }
    function dI(t, e, n) {
        let i, I, l, c, o, g, r, u = {
            width: 0,
            height: 0
        }, d = Ge();
        const s = Ye();
        a(t, s, (t=>n(17, r = t)));
        let p, C = Nn(), {part: A} = e, {points: m=null} = e, N = bt[A.type], b = null === N.drawRect || void 0 === N.drawRect || N.drawRect, {onClick: Z=(()=>{}
        )} = e;
        return T((()=>{
            if (null != p) {
                const t = p.getBoundingClientRect();
                let e = d(t.left, t.top)
                  , i = d(t.right, t.bottom);
                n(2, u = {
                    width: i.x - e.x,
                    height: i.y - e.y
                })
            }
        }
        )),
        t.$$set = t=>{
            "part"in t && n(0, A = t.part),
            "points"in t && n(13, m = t.points),
            "onClick"in t && n(14, Z = t.onClick)
        }
        ,
        t.$$.update = ()=>{
            131072 & t.$$.dirty && (i = r.uiState.editMode),
            131072 & t.$$.dirty && n(4, I = r.uiState),
            131072 & t.$$.dirty && n(1, l = r.project),
            3 & t.$$.dirty && n(15, c = Xe(A, l.modules).toString()),
            1 & t.$$.dirty && n(16, o = Fe(A).toString()),
            106496 & t.$$.dirty && n(5, g = null === m ? `0,0 ${o},0 ${o},${c} 0,${c} 0,0` : m)
        }
        ,
        [A, l, u, p, I, g, s, C, b, function(t) {
            if (t.stopImmediatePropagation(),
            t.isPrimary && (i === pe.ADD_PART && s.set(Un(r)),
            i === pe.NEUTRAL)) {
                const e = d(t.clientX, t.clientY)
                  , n = {
                    x: e.x - A.position.x,
                    y: e.y - A.position.y
                };
                s.set(function(t, e, n) {
                    return tn(t, (t=>{
                        t.uiState.editMode = pe.DRAGGING_PART,
                        t.uiState.dragPart.partIdToDrag = e,
                        t.uiState.dragPart.dragOffset = n,
                        t.uiState.dragPart.partHasBeenMoved = !1
                    }
                    ))
                }(r, A.id, n)),
                p.setPointerCapture(t.pointerId)
            }
        }
        , function(t) {
            if (t.isPrimary && i === pe.DRAGGING_PART) {
                let {x: e, y: n} = d(t.clientX, t.clientY);
                const i = t.ctrlKey ? 1 : ve;
                let l = {
                    x: he(e - I.dragPart.dragOffset.x, i),
                    y: he(n - I.dragPart.dragOffset.y, i)
                };
                s.set(function(t, e, n) {
                    return tn(t, (i=>{
                        const I = t.project.modules[t.project.activeModuleId]
                          , l = i.project.modules[t.project.activeModuleId];
                        if (n.x !== I.parts[e].position.x || n.y !== I.parts[e].position.y) {
                            if (t.uiState.select.selectedPartIds.includes(e)) {
                                const t = I.parts[e];
                                vn(i, n.x - t.position.x, n.y - t.position.y)
                            } else
                                l.parts[e].position = n;
                            i.uiState.dragPart.partHasBeenMoved = !0
                        }
                    }
                    ))
                }(r, I.dragPart.partIdToDrag, l))
            }
        }
        , function(t) {
            t.isPrimary && i === pe.DRAGGING_PART && (I.dragPart.partHasBeenMoved ? s.set(function(t) {
                return tn(t, (t=>{
                    t.uiState.editMode = pe.NEUTRAL,
                    en(t)
                }
                ))
            }(r)) : (s.set(Dn(r, me.PART, I.dragPart.partIdToDrag)),
            s.set(Un(r))),
            t.stopImmediatePropagation())
        }
        , function(t) {
            t.stopPropagation(),
            i === pe.DELETE ? (s.set(Mn(r)),
            s.set(function(t, e) {
                return tn(t, (n=>{
                    an(n.project.modules[t.project.activeModuleId], e),
                    en(n)
                }
                ))
            }(r, A.id))) : i === pe.ADD_PART && (s.set(Un(r)),
            s.set(Dn(r, me.PART, A.id))),
            Z()
        }
        , m, Z, c, o, r, function(t) {
            O[t ? "unshift" : "push"]((()=>{
                p = t,
                n(3, p)
            }
            ))
        }
        , function(t) {
            O[t ? "unshift" : "push"]((()=>{
                p = t,
                n(3, p)
            }
            ))
        }
        ]
    }
    class sI extends It {
        constructor(t) {
            super(),
            it(this, t, dI, uI, g, {
                part: 0,
                points: 13,
                onClick: 14
            })
        }
    }
    function pI(t) {
        let e, n, i, I, l, c, o, g, a, r, u;
        return c = new tI({
            props: {
                pins: Be(t[0]),
                part: t[0]
            }
        }),
        o = new tI({
            props: {
                pins: Ue(t[0]),
                part: t[0]
            }
        }),
        g = new sI({
            props: {
                part: t[0]
            }
        }),
        a = new aI({
            props: {
                partId: t[0].id
            }
        }),
        {
            c() {
                e = m("g"),
                n = m("text"),
                i = N(t[1]),
                q(c.$$.fragment),
                q(o.$$.fragment),
                q(g.$$.fragment),
                q(a.$$.fragment),
                D(n, "text-anchor", "middle"),
                D(n, "alignment-baseline", "central"),
                D(n, "class", "no-select svelte-91vx5z"),
                D(n, "x", I = Fe(t[0]) / 2),
                D(n, "y", l = Xe(t[0], t[3].modules) / 2),
                D(n, "font-size", Le),
                D(e, "transform", r = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(t, I) {
                s(t, e, I),
                d(e, n),
                d(n, i),
                tt(c, e, null),
                tt(o, e, null),
                tt(g, e, null),
                tt(a, e, null),
                u = !0
            },
            p(t, [d]) {
                (!u || 2 & d) && M(i, t[1]),
                (!u || 1 & d && I !== (I = Fe(t[0]) / 2)) && D(n, "x", I),
                (!u || 1 & d && l !== (l = Xe(t[0], t[3].modules) / 2)) && D(n, "y", l);
                const s = {};
                1 & d && (s.pins = Be(t[0])),
                1 & d && (s.part = t[0]),
                c.$set(s);
                const p = {};
                1 & d && (p.pins = Ue(t[0])),
                1 & d && (p.part = t[0]),
                o.$set(p);
                const C = {};
                1 & d && (C.part = t[0]),
                g.$set(C);
                const A = {};
                1 & d && (A.partId = t[0].id),
                a.$set(A),
                (!u || 1 & d && r !== (r = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", r)
            },
            i(t) {
                u || (H(c.$$.fragment, t),
                H(o.$$.fragment, t),
                H(g.$$.fragment, t),
                H(a.$$.fragment, t),
                u = !0)
            },
            o(t) {
                J(c.$$.fragment, t),
                J(o.$$.fragment, t),
                J(g.$$.fragment, t),
                J(a.$$.fragment, t),
                u = !1
            },
            d(t) {
                t && p(e),
                et(c),
                et(o),
                et(g),
                et(a)
            }
        }
    }
    function CI(t, e, n) {
        let i, I, l, {part: c} = e;
        const o = Ye();
        a(t, o, (t=>n(5, l = t)));
        let g = l.project;
        return t.$$set = t=>{
            "part"in t && n(0, c = t.part)
        }
        ,
        t.$$.update = ()=>{
            1 & t.$$.dirty && n(4, i = bt[c.type]),
            16 & t.$$.dirty && n(1, I = i.label)
        }
        ,
        [c, I, o, g, i]
    }
    class AI extends It {
        constructor(t) {
            super(),
            it(this, t, CI, pI, g, {
                part: 0
            })
        }
    }
    const mI = te("", ((t,e,n)=>0 === t ? e + n.partId : e + n.partId + "-"))
      , NI = t=>t.length > 1;
    function bI(t) {
        return Mt(t.connections, ae((t=>({
            id: t.id,
            value: !1,
            fromPartId: t.fromPartId,
            fromOutputPinNr: t.fromOutputPinNr
        }))))
    }
    const ZI = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return 1 === t.length ? ce(t[0]) : ce(ne).apply(void 0, t)
    }(ne)({}, ((t,e)=>Object.assign(Object.assign({}, e), t)));
    const yI = t=>e=>({
        partId: t + e.toPartId,
        inputPinNr: e.toInputPinNr,
        connectionId: e.id
    });
    function DI(t, e, n, i, I) {
        const l = re(se(t, e))(n.connections)
          , c = mI(I)
          , o = ae(yI(c))(l)
          , g = Mt(re((t=>n.parts[t.toPartId].type === lt.MODULE))(l), ae((t=>{
            const e = i[n.parts[t.toPartId].moduleId]
              , l = function(t, e) {
                return t.inputIds[e]
            }(e, t.toInputPinNr);
            return DI(l, 0, e, i, [...I, {
                partId: t.toPartId,
                moduleId: e.id
            }])
        }
        )), ge, Vt((([t,e])=>e)), _t)
          , a = re((t=>n.outputIds.includes(t.toPartId)))(l)
          , r = NI(I) ? Mt(a, ae((t=>{
            const e = dt(I)
              , l = i[st(e).moduleId]
              , c = st(I).partId
              , o = n.outputIds.findIndex((e=>e === t.toPartId));
            return DI(c, o, l, i, e)
        }
        )), ge, Vt((([t,e])=>e)), _t) : [];
        return [...Object.values(o), ...g, ...r]
    }
    function MI(t, e, n, i) {
        const I = Ee(t, n);
        return Mt((c = 0) <= (o = I - 1) ? St((function(t) {
            return c + t
        }
        ))(o - c + 1) : [c], (l = I=>({
            connectedTo: DI(t.id, I, e, n, i),
            value: !1
        }),
        Yt((function(t, e) {
            return l(e)
        }
        ))));
        var l, c, o
    }
    const vI = (t,e,n)=>i=>{
        return {
            id: mI(n) + i.id,
            inputPinValues: (I = $e(i, e),
            Array(I).fill(!1)),
            outputPins: MI(i, t, e, n),
            value: !1,
            state: i.state,
            partTypeName: i.type,
            gateDelay: i.gateDelay,
            period: i.period
        };
        var I
    }
      , hI = t=>{
        const e = bt[t.partTypeName]
          , [n,i] = Nt(e) ? e.eval(t.inputPinValues, t.state) : [e.eval(t.inputPinValues), void 0]
          , I = 10 + 2 * Math.random();
        return {
            timestamp: I,
            partId: t.id,
            gateDelay: I,
            newOutputValues: n,
            newState: i
        }
    }
      , jI = t=>({
        partId: t.id,
        timestamp: 1e9 * Ze(t) / 2,
        newState: {
            value: !0
        },
        newOutputValues: [!0]
    })
      , fI = t=>{
        const e = Mt(t, ge, Vt((([t,e])=>e)));
        return [...Mt(e, qt(ye), Vt(hI)), ...Mt(e, qt(De), Vt(jI))].sort(((t,e)=>t.timestamp - e.timestamp))
    }
    ;
    function GI(t, e, n) {
        const i = Mt(t.parts, re(He), ae((t=>GI(e[t.moduleId], e, [...n, {
            partId: t.id,
            moduleId: t.moduleId
        }]))), ZI)
          , I = mI(n)
          , l = Mt(t.parts, ae(vI(t, e, n)), pt(((t,e)=>I + e)));
        return Object.assign(Object.assign({}, l), i)
    }
    function TI(t, e, n, i) {
        const I = i ? function(t) {
            let e = 0;
            return ae((t=>{
                const n = Object.assign(Object.assign({}, t), {
                    gateDelay: 5 + e / 10
                });
                return e++,
                n
            }
            ))(t)
        }(GI(t, e, [{
            moduleId: t.id,
            partId: ""
        }])) : GI(t, e, [{
            moduleId: t.id,
            partId: ""
        }]);
        return Me({
            parts: I,
            connections: bI(t),
            queue: fI(I),
            timestamp: 0,
            stepCounter: 0,
            activeHistoryEntry: 0,
            history: [],
            systemTimestampPreviousTask: 0,
            intervalId: -1
        })
    }
    const wI = t=>(e,n)=>{
        const i = t.parts[e];
        return Mt(n, Ut(((t,e)=>{
            return e === i.outputPins[t].value ? [] : (n = i.outputPins[t],
            Bt((t=>t.partId))(n.connectedTo));
            var n
        }
        )), Qt)
    }
    ;
    function WI(t, e, n, i) {
        const I = t.parts[e];
        I.state = i;
        for (let e = 0; e < n.length; e++) {
            let i = n[e];
            if (i !== I.outputPins[e].value) {
                I.outputPins[e].value = i;
                for (let n of I.outputPins[e].connectedTo)
                    t.parts[n.partId].inputPinValues[n.inputPinNr] = i
            }
        }
    }
    function zI(t, e) {
        const n = e[t];
        return "function" == typeof bt[n.partTypeName].eval
    }
    function SI(t) {
        const e = eI(t.queue)
          , n = e[0].timestamp
          , i = Mt(e, Bt((t=>e=>wI(t)(e.partId, e.newOutputValues))(t)), Qt, Lt(ee), $t((e=>zI(e, t.parts))))
          , I = function(t, e) {
            return tn(t, (t=>{
                for (const n of e)
                    WI(t, n.partId, n.newOutputValues, n.newState)
            }
            ))
        }(t, e)
          , l = Bt((t=>{
            const e = I.parts[t]
              , i = bt[e.partTypeName]
              , [l,c] = Nt(i) ? i.eval(e.inputPinValues, e.state) : [i.eval(e.inputPinValues), void 0]
              , o = 10 + 2 * Math.random();
            return {
                partId: t,
                timestamp: n + o,
                gateDelay: o,
                newState: c,
                newOutputValues: l
            }
        }
        ))(i)
          , c = Mt(e, $t((t=>I.parts[t.partId].partTypeName === lt.CLOCK)), Bt((t=>{
            const e = I.parts[t.partId];
            return {
                partId: t.partId,
                timestamp: n + 1e9 * Ze(e) / 2,
                newState: {
                    value: !e.state.value
                },
                newOutputValues: [!e.state.value]
            }
        }
        )))
          , o = (g = e.length,
        function(t) {
            return g <= 0 || Xt(t) ? Ht(t) : g >= t.length ? [] : t.slice(g, t.length)
        }
        )(t.queue);
        var g;
        return Object.assign(Object.assign({}, I), {
            timestamp: n,
            queue: nI(o, [...l, ...c], n)
        })
    }
    const OI = (t,e)=>n=>{
        const i = ae((t=>{
            const i = n.parts[t.id];
            if (He(t)) {
                const l = (I = ((t,e,n)=>(i,I)=>{
                    const l = n[e.moduleId].outputIds[i]
                      , c = t.parts[e.id + "-" + l];
                    return Object.assign(Object.assign({}, I), {
                        value: c.inputPinValues[0]
                    })
                }
                )(n, t, e),
                function(t) {
                    return t.map((function(t, e) {
                        return I(e, t)
                    }
                    ))
                }
                )(i.outputPins);
                return Object.assign(Object.assign({}, i), {
                    outputPins: l
                })
            }
            return i;
            var I
        }
        ))(t.parts);
        return Object.assign(Object.assign({}, n), {
            parts: Object.assign(Object.assign({}, n.parts), i)
        })
    }
    ;
    function YI(t) {
        const e = t.parts
          , n = ae((t=>Object.assign(Object.assign({}, t), {
            value: e[t.fromPartId].outputPins[t.fromOutputPinNr].value
        })))(t.connections);
        return Object.assign(Object.assign({}, t), {
            connections: n
        })
    }
    const xI = (t,e,n)=>!(t=>0 === t.length)(t) && (t=>t[0].timestamp)(t) < e && n < 100
      , kI = (t,e,n,i)=>n=>{
        let I = n;
        if (0 === n.queue.length || n.queue[0].timestamp > i)
            return Object.assign(Object.assign({}, n), {
                timestamp: i
            });
        let l = 0;
        for (; xI(I.queue, i, l); )
            I = SI(I),
            I = OI(t, e)(I),
            I = YI(I),
            I = Me(I),
            l++;
        return I
    }
    ;
    function PI(t, e, n) {
        let i;
        const I = t.subscribe((t=>{
            i && i.uiState.editMode === pe.SIMULATION_RUNNING && t.uiState.editMode !== pe.SIMULATION_RUNNING && (!function(t) {
                window.clearInterval(t)
            }(t.simState.intervalId),
            I()),
            i = t
        }
        ));
        return {
            systemTimestampStart: performance.now(),
            intervalId: window.setInterval((function() {
                const I = performance.now()
                  , l = 1e6 * (I - i.simState.systemTimestampPreviousTask)
                  , c = i.simState.timestamp + l
                  , o = kI(e, n, !1, c)(i.simState);
                t.set(Object.assign(Object.assign({}, i), {
                    simState: Object.assign(Object.assign({}, o), {
                        systemTimestampPreviousTask: I
                    })
                }))
            }
            ), 1)
        }
    }
    const LI = (t,e)=>n=>tn(n, (n=>{
        WI(n, t, e)
    }
    ))
      , RI = t=>e=>{
        const n = Bt((t=>{
            const n = e.parts[t]
              , i = bt[n.partTypeName]
              , [I,l] = Nt(i) ? i.eval(n.inputPinValues, n.state) : [i.eval(n.inputPinValues), void 0];
            return {
                partId: t,
                timestamp: e.timestamp + be(n),
                gateDelay: be(n),
                newOutputValues: I,
                newState: l
            }
        }
        ))(t);
        return Object.assign(Object.assign({}, e), {
            queue: nI(e.queue, n, e.timestamp)
        })
    }
    ;
    function QI(t, e, n, i, I) {
        const l = Mt(wI(t)(e, n), Lt(ee), $t((e=>zI(e, t.parts))));
        return Mt(t, LI(e, n), RI(l), OI(i, I), YI, Me)
    }
    function BI(t, e, n) {
        const i = Mt(e[t].parts, re((t=>"string" == typeof t.moduleId)), ge, Vt((([t,e])=>e.moduleId)));
        return n.includes(t) ? [[...n, t]] : 0 === i.length ? [] : Mt(i, Vt((i=>BI(i, e, [...n, t]))), _t, qt((t=>0 !== t.length)))
    }
    function UI(t, e, n) {
        const i = t.project.modules[t.project.activeModuleId]
          , I = t.project
          , l = BI(i.id, I.modules, []);
        return tn(t, (t=>{
            if (0 === l.length) {
                t.uiState.editMode = pe.SIMULATION_RUNNING;
                const e = TI(i, I.modules, 0, !1);
                t.simState = qe.castDraft(e);
                let {systemTimestampStart: l, intervalId: c} = PI(n, i, I.modules);
                t.simState.intervalId = c,
                t.simState.systemTimestampPreviousTask = l,
                yn(t.uiState)
            } else
                t.dialogState.cyclicModuleDependencies.isOpen = !0,
                t.dialogState.cyclicModuleDependencies.cycles = l
        }
        ))
    }
    function $I(t) {
        return tn(t, (t=>{
            t.uiState.editMode = pe.NEUTRAL
        }
        ))
    }
    function EI(t, e, n, i, I) {
        return Object.assign(Object.assign({}, t), {
            simState: QI(t.simState, e, n, i, I)
        })
    }
    function XI(e) {
        let n, i;
        return {
            c() {
                n = m("text"),
                i = N("In"),
                D(n, "font-size", Le),
                D(n, "text-anchor", "middle"),
                D(n, "x", 25),
                D(n, "y", 15),
                D(n, "class", "svelte-1h3j6go")
            },
            m(t, e) {
                s(t, n, e),
                d(n, i)
            },
            p: t,
            d(t) {
                t && p(n)
            }
        }
    }
    function FI(t) {
        let e, n, i, I, l, c, o, g, a = t[0].name + "";
        n = new tI({
            props: {
                pins: Ue(t[0]),
                part: t[0]
            }
        });
        let r = t[2] && XI();
        return c = new sI({
            props: {
                part: t[0],
                onClick: t[4]
            }
        }),
        {
            c() {
                e = m("g"),
                q(n.$$.fragment),
                r && r.c(),
                i = m("text"),
                I = N(a),
                l = m("rect"),
                q(c.$$.fragment),
                D(i, "font-size", Le),
                D(i, "text-anchor", "middle"),
                D(i, "x", 25),
                D(i, "y", 54),
                D(i, "class", "svelte-1h3j6go"),
                D(l, "x", 15),
                D(l, "y", 20),
                D(l, "width", 20),
                D(l, "height", 20),
                D(l, "fill", t[1]),
                D(l, "stroke", "black"),
                D(e, "transform", o = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(t, o) {
                s(t, e, o),
                tt(n, e, null),
                r && r.m(e, null),
                d(e, i),
                d(i, I),
                d(e, l),
                tt(c, e, null),
                g = !0
            },
            p(t, [u]) {
                const d = {};
                1 & u && (d.pins = Ue(t[0])),
                1 & u && (d.part = t[0]),
                n.$set(d),
                t[2] ? r ? r.p(t, u) : (r = XI(),
                r.c(),
                r.m(e, i)) : r && (r.d(1),
                r = null),
                (!g || 1 & u) && a !== (a = t[0].name + "") && M(I, a),
                (!g || 2 & u) && D(l, "fill", t[1]);
                const s = {};
                1 & u && (s.part = t[0]),
                c.$set(s),
                (!g || 1 & u && o !== (o = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", o)
            },
            i(t) {
                g || (H(n.$$.fragment, t),
                H(c.$$.fragment, t),
                g = !0)
            },
            o(t) {
                J(n.$$.fragment, t),
                J(c.$$.fragment, t),
                g = !1
            },
            d(t) {
                t && p(e),
                et(n),
                r && r.d(),
                et(c)
            }
        }
    }
    function HI(t, e, n) {
        let i, I, l, c, o;
        const g = Ye();
        a(t, g, (t=>n(8, o = t)));
        let {part: r} = e;
        let u = Pe;
        return t.$$set = t=>{
            "part"in t && n(0, r = t.part)
        }
        ,
        t.$$.update = ()=>{
            if (256 & t.$$.dirty && n(6, i = o.simState),
            256 & t.$$.dirty && n(7, I = o.uiState.editMode),
            256 & t.$$.dirty && n(5, l = o.project),
            193 & t.$$.dirty)
                if (I === pe.SIMULATION_RUNNING) {
                    const t = i.parts[r.id].outputPins[0].value;
                    n(1, u = t ? xe : Pe)
                } else if (I === pe.SIMULATION_PAUSED) {
                    const t = i.history[i.activeHistoryEntry].parts[r.id].outputPins[0].value;
                    n(1, u = t ? xe : Pe)
                } else
                    n(1, u = Pe);
            33 & t.$$.dirty && n(2, c = l.modules[l.activeModuleId].inputIds.includes(r.id))
        }
        ,
        [r, u, c, g, function() {
            if (I === pe.SIMULATION_RUNNING) {
                let t = i.parts[r.id].outputPins[0].value;
                const e = o.project.modules[o.project.activeModuleId]
                  , n = [!t];
                g.set(EI(o, r.id, n, e, o.project.modules))
            }
        }
        , l, i, I, o]
    }
    function JI(e) {
        let n, i;
        return {
            c() {
                n = m("text"),
                i = N("Out"),
                D(n, "font-size", Le),
                D(n, "text-anchor", "middle"),
                D(n, "x", 25),
                D(n, "y", 15),
                D(n, "class", "svelte-uzxbbj")
            },
            m(t, e) {
                s(t, n, e),
                d(n, i)
            },
            p: t,
            d(t) {
                t && p(n)
            }
        }
    }
    function VI(t) {
        let e, n, i, I, l, c, o, g, a = t[0].name + "";
        n = new tI({
            props: {
                pins: Be(t[0]),
                part: t[0]
            }
        });
        let r = t[3] && JI();
        return c = new sI({
            props: {
                part: t[0]
            }
        }),
        {
            c() {
                e = m("g"),
                q(n.$$.fragment),
                i = m("circle"),
                r && r.c(),
                I = m("text"),
                l = N(a),
                q(c.$$.fragment),
                D(i, "cx", 25),
                D(i, "cy", 30),
                D(i, "r", 10),
                D(i, "stroke", t[1]),
                D(i, "fill", t[2]),
                D(I, "font-size", Le),
                D(I, "text-anchor", "middle"),
                D(I, "x", 25),
                D(I, "y", 54),
                D(I, "class", "svelte-uzxbbj"),
                D(e, "transform", o = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(t, o) {
                s(t, e, o),
                tt(n, e, null),
                d(e, i),
                r && r.m(e, null),
                d(e, I),
                d(I, l),
                tt(c, e, null),
                g = !0
            },
            p(t, [u]) {
                const d = {};
                1 & u && (d.pins = Be(t[0])),
                1 & u && (d.part = t[0]),
                n.$set(d),
                (!g || 2 & u) && D(i, "stroke", t[1]),
                (!g || 4 & u) && D(i, "fill", t[2]),
                t[3] ? r ? r.p(t, u) : (r = JI(),
                r.c(),
                r.m(e, I)) : r && (r.d(1),
                r = null),
                (!g || 1 & u) && a !== (a = t[0].name + "") && M(l, a);
                const s = {};
                1 & u && (s.part = t[0]),
                c.$set(s),
                (!g || 1 & u && o !== (o = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", o)
            },
            i(t) {
                g || (H(n.$$.fragment, t),
                H(c.$$.fragment, t),
                g = !0)
            },
            o(t) {
                J(n.$$.fragment, t),
                J(c.$$.fragment, t),
                g = !1
            },
            d(t) {
                t && p(e),
                et(n),
                r && r.d(),
                et(c)
            }
        }
    }
    function KI(t) {
        return void 0 === t.color || null === t.color ? "red" : t.color
    }
    function _I(t, e, n) {
        let i, I, l, c, o, g, r, u;
        const d = Ye();
        a(t, d, (t=>n(9, u = t)));
        let {part: s} = e;
        return t.$$set = t=>{
            "part"in t && n(0, s = t.part)
        }
        ,
        t.$$.update = ()=>{
            512 & t.$$.dirty && n(7, i = u.simState),
            512 & t.$$.dirty && n(8, I = u.uiState.editMode),
            512 & t.$$.dirty && n(6, l = u.project),
            385 & t.$$.dirty && n(5, c = I === pe.SIMULATION_RUNNING ? i.parts[s.id].inputPinValues[0] : I === pe.SIMULATION_PAUSED && i.history[i.activeHistoryEntry].parts[s.id].inputPinValues[0]),
            65 & t.$$.dirty && n(3, o = l.modules[l.activeModuleId].outputIds.includes(s.id)),
            33 & t.$$.dirty && n(2, g = c ? KI(s) : "white"),
            1 & t.$$.dirty && n(1, r = KI(s))
        }
        ,
        [s, r, g, o, d, c, l, i, I, u]
    }
    function qI(t) {
        let e, n, i, I, l, c, o, g, a, r = t[3].abbreviation + "";
        return n = new tI({
            props: {
                pins: Qe(t[0], t[1].modules),
                part: t[0]
            }
        }),
        i = new tI({
            props: {
                pins: Ue(t[0], t[1].modules),
                part: t[0]
            }
        }),
        c = new sI({
            props: {
                part: t[0]
            }
        }),
        o = new aI({
            props: {
                show: t[2]
            }
        }),
        {
            c() {
                e = m("g"),
                q(n.$$.fragment),
                q(i.$$.fragment),
                I = m("text"),
                l = N(r),
                q(c.$$.fragment),
                q(o.$$.fragment),
                D(I, "font-size", Le),
                D(I, "text-anchor", "middle"),
                D(I, "x", 25),
                D(I, "y", 30),
                D(I, "class", "svelte-1h3j6go"),
                D(e, "transform", g = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(t, g) {
                s(t, e, g),
                tt(n, e, null),
                tt(i, e, null),
                d(e, I),
                d(I, l),
                tt(c, e, null),
                tt(o, e, null),
                a = !0
            },
            p(t, [I]) {
                const u = {};
                3 & I && (u.pins = Qe(t[0], t[1].modules)),
                1 & I && (u.part = t[0]),
                n.$set(u);
                const d = {};
                3 & I && (d.pins = Ue(t[0], t[1].modules)),
                1 & I && (d.part = t[0]),
                i.$set(d),
                (!a || 8 & I) && r !== (r = t[3].abbreviation + "") && M(l, r);
                const s = {};
                1 & I && (s.part = t[0]),
                c.$set(s);
                const p = {};
                4 & I && (p.show = t[2]),
                o.$set(p),
                (!a || 1 & I && g !== (g = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", g)
            },
            i(t) {
                a || (H(n.$$.fragment, t),
                H(i.$$.fragment, t),
                H(c.$$.fragment, t),
                H(o.$$.fragment, t),
                a = !0)
            },
            o(t) {
                J(n.$$.fragment, t),
                J(i.$$.fragment, t),
                J(c.$$.fragment, t),
                J(o.$$.fragment, t),
                a = !1
            },
            d(t) {
                t && p(e),
                et(n),
                et(i),
                et(c),
                et(o)
            }
        }
    }
    function tl(t, e, n) {
        let i, I, l, c, o, g, {part: r} = e;
        const u = Ye();
        return a(t, u, (t=>n(7, g = t))),
        t.$$set = t=>{
            "part"in t && n(0, r = t.part)
        }
        ,
        t.$$.update = ()=>{
            128 & t.$$.dirty && n(5, i = g.simState),
            128 & t.$$.dirty && n(6, I = g.uiState.editMode),
            128 & t.$$.dirty && n(1, l = g.project),
            3 & t.$$.dirty && n(3, c = l.modules[r.moduleId]),
            97 & t.$$.dirty && n(2, o = I === pe.SIMULATION_PAUSED && i.history[i.activeHistoryEntry].queue.some((t=>t.partId.startsWith(r.id + "-"))))
        }
        ,
        [r, l, o, c, u, i, I, g]
    }
    function el(e) {
        let n, i, I;
        return {
            c() {
                n = m("g"),
                i = m("polygon"),
                D(i, "points", "1,0 4,3 26,3 29,0 26,-3 4,-3"),
                D(i, "class", "svelte-cq9yft"),
                h(i, "simValueTrue", e[2]),
                h(i, "simValueFalse", !e[2]),
                D(n, "transform", I = "translate(" + e[0] + " " + e[1] + ") " + e[3])
            },
            m(t, e) {
                s(t, n, e),
                d(n, i)
            },
            p(t, [e]) {
                4 & e && h(i, "simValueTrue", t[2]),
                4 & e && h(i, "simValueFalse", !t[2]),
                11 & e && I !== (I = "translate(" + t[0] + " " + t[1] + ") " + t[3]) && D(n, "transform", I)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n)
            }
        }
    }
    var nl;
    function il(t, e, n) {
        let i, {posX: I} = e, {posY: l} = e, {direction: c} = e, {simValue: o=!1} = e;
        return t.$$set = t=>{
            "posX"in t && n(0, I = t.posX),
            "posY"in t && n(1, l = t.posY),
            "direction"in t && n(4, c = t.direction),
            "simValue"in t && n(2, o = t.simValue)
        }
        ,
        t.$$.update = ()=>{
            16 & t.$$.dirty && n(3, i = c === nl.DOWN ? "rotate(90 0 0)" : "")
        }
        ,
        [I, l, o, i, c]
    }
    !function(t) {
        t[t.RIGHT = 0] = "RIGHT",
        t[t.DOWN = 1] = "DOWN"
    }(nl || (nl = {}));
    class Il extends It {
        constructor(t) {
            super(),
            it(this, t, il, el, g, {
                posX: 0,
                posY: 1,
                direction: 4,
                simValue: 2
            })
        }
    }
    function ll(t) {
        let e, n, i, I, l, c, o, g, a, r, u, d;
        return n = new tI({
            props: {
                pins: Be(t[0]),
                part: t[0]
            }
        }),
        i = new Il({
            props: {
                posX: 20,
                posY: 10,
                direction: nl.RIGHT,
                simValue: t[1][0]
            }
        }),
        I = new Il({
            props: {
                posX: 50,
                posY: 10,
                direction: nl.DOWN,
                simValue: t[1][1]
            }
        }),
        l = new Il({
            props: {
                posX: 50,
                posY: 40,
                direction: nl.DOWN,
                simValue: t[1][2]
            }
        }),
        c = new Il({
            props: {
                posX: 20,
                posY: 70,
                direction: nl.RIGHT,
                simValue: t[1][3]
            }
        }),
        o = new Il({
            props: {
                posX: 20,
                posY: 40,
                direction: nl.DOWN,
                simValue: t[1][4]
            }
        }),
        g = new Il({
            props: {
                posX: 20,
                posY: 10,
                direction: nl.DOWN,
                simValue: t[1][5]
            }
        }),
        a = new Il({
            props: {
                posX: 20,
                posY: 40,
                direction: nl.RIGHT,
                simValue: t[1][6]
            }
        }),
        r = new sI({
            props: {
                part: t[0]
            }
        }),
        {
            c() {
                e = m("g"),
                q(n.$$.fragment),
                q(i.$$.fragment),
                q(I.$$.fragment),
                q(l.$$.fragment),
                q(c.$$.fragment),
                q(o.$$.fragment),
                q(g.$$.fragment),
                q(a.$$.fragment),
                q(r.$$.fragment),
                D(e, "transform", u = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(t, u) {
                s(t, e, u),
                tt(n, e, null),
                tt(i, e, null),
                tt(I, e, null),
                tt(l, e, null),
                tt(c, e, null),
                tt(o, e, null),
                tt(g, e, null),
                tt(a, e, null),
                tt(r, e, null),
                d = !0
            },
            p(t, [s]) {
                const p = {};
                1 & s && (p.pins = Be(t[0])),
                1 & s && (p.part = t[0]),
                n.$set(p);
                const C = {};
                2 & s && (C.simValue = t[1][0]),
                i.$set(C);
                const A = {};
                2 & s && (A.simValue = t[1][1]),
                I.$set(A);
                const m = {};
                2 & s && (m.simValue = t[1][2]),
                l.$set(m);
                const N = {};
                2 & s && (N.simValue = t[1][3]),
                c.$set(N);
                const b = {};
                2 & s && (b.simValue = t[1][4]),
                o.$set(b);
                const Z = {};
                2 & s && (Z.simValue = t[1][5]),
                g.$set(Z);
                const y = {};
                2 & s && (y.simValue = t[1][6]),
                a.$set(y);
                const M = {};
                1 & s && (M.part = t[0]),
                r.$set(M),
                (!d || 1 & s && u !== (u = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", u)
            },
            i(t) {
                d || (H(n.$$.fragment, t),
                H(i.$$.fragment, t),
                H(I.$$.fragment, t),
                H(l.$$.fragment, t),
                H(c.$$.fragment, t),
                H(o.$$.fragment, t),
                H(g.$$.fragment, t),
                H(a.$$.fragment, t),
                H(r.$$.fragment, t),
                d = !0)
            },
            o(t) {
                J(n.$$.fragment, t),
                J(i.$$.fragment, t),
                J(I.$$.fragment, t),
                J(l.$$.fragment, t),
                J(c.$$.fragment, t),
                J(o.$$.fragment, t),
                J(g.$$.fragment, t),
                J(a.$$.fragment, t),
                J(r.$$.fragment, t),
                d = !1
            },
            d(t) {
                t && p(e),
                et(n),
                et(i),
                et(I),
                et(l),
                et(c),
                et(o),
                et(g),
                et(a),
                et(r)
            }
        }
    }
    function cl(t, e, n) {
        let i, I, l, {part: c} = e;
        const o = Ye();
        a(t, o, (t=>n(5, l = t))),
        bt[lt.SEVEN_SEGMENT];
        let g = new Array(6).fill(!1);
        return t.$$set = t=>{
            "part"in t && n(0, c = t.part)
        }
        ,
        t.$$.update = ()=>{
            32 & t.$$.dirty && n(3, i = l.simState),
            32 & t.$$.dirty && n(4, I = l.uiState.editMode),
            25 & t.$$.dirty && (I === pe.SIMULATION_RUNNING ? n(1, g = i.parts[c.id].inputPinValues) : I === pe.SIMULATION_PAUSED ? n(1, g = i.history[i.activeHistoryEntry].parts[c.id].inputPinValues) : n(1, g = new Array(6).fill(!1)))
        }
        ,
        [c, g, o, i, I, l]
    }
    function ol(t) {
        let e, n, i, I, l, c, o;
        return n = new tI({
            props: {
                pins: Be(t[0]),
                part: t[0]
            }
        }),
        l = new sI({
            props: {
                part: t[0]
            }
        }),
        {
            c() {
                e = m("g"),
                q(n.$$.fragment),
                i = m("text"),
                I = N(t[1]),
                q(l.$$.fragment),
                D(i, "text-anchor", "middle"),
                D(i, "alignment-baseline", "central"),
                D(i, "x", 35),
                D(i, "y", 45),
                D(i, "font-size", Le),
                D(i, "class", "svelte-1h3j6go"),
                D(e, "transform", c = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(t, c) {
                s(t, e, c),
                tt(n, e, null),
                d(e, i),
                d(i, I),
                tt(l, e, null),
                o = !0
            },
            p(t, [i]) {
                const g = {};
                1 & i && (g.pins = Be(t[0])),
                1 & i && (g.part = t[0]),
                n.$set(g),
                (!o || 2 & i) && M(I, t[1]);
                const a = {};
                1 & i && (a.part = t[0]),
                l.$set(a),
                (!o || 1 & i && c !== (c = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", c)
            },
            i(t) {
                o || (H(n.$$.fragment, t),
                H(l.$$.fragment, t),
                o = !0)
            },
            o(t) {
                J(n.$$.fragment, t),
                J(l.$$.fragment, t),
                o = !1
            },
            d(t) {
                t && p(e),
                et(n),
                et(l)
            }
        }
    }
    function gl(t, e, n) {
        let i, I, l;
        const c = Ye();
        a(t, c, (t=>n(5, l = t)));
        let {part: o} = e
          , g = 0;
        return t.$$set = t=>{
            "part"in t && n(0, o = t.part)
        }
        ,
        t.$$.update = ()=>{
            if (32 & t.$$.dirty && n(3, i = l.simState),
            32 & t.$$.dirty && n(4, I = l.uiState.editMode),
            25 & t.$$.dirty)
                if (I === pe.SIMULATION_RUNNING || I === pe.SIMULATION_PAUSED) {
                    const t = I === pe.SIMULATION_RUNNING ? i.parts[o.id] : i.history[i.activeHistoryEntry].parts[o.id];
                    n(1, (e = t.inputPinValues,
                    g = te(0, ((t,e,n)=>e + 2 ** t * (n ? 1 : 0)))(e)))
                } else
                    n(1, g = 0);
            var e
        }
        ,
        [o, g, c, i, I, l]
    }
    function al(e) {
        let n, I, l, c, o;
        return {
            c() {
                n = m("g"),
                I = m("polyline"),
                D(I, "points", "0,0 -9,9 9,9"),
                D(I, "fill", "black"),
                D(I, "stroke", "black"),
                D(n, "transform", l = "translate(" + e[0] + " " + e[1] + ") rotate(" + e[2] + ")")
            },
            m(t, i) {
                s(t, n, i),
                d(n, I),
                c || (o = [y(I, "click", e[4]), y(I, "pointerdown", e[5])],
                c = !0)
            },
            p(t, [e]) {
                7 & e && l !== (l = "translate(" + t[0] + " " + t[1] + ") rotate(" + t[2] + ")") && D(n, "transform", l)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                c = !1,
                i(o)
            }
        }
    }
    function rl(t, e, n) {
        let i, I;
        const l = w()
          , c = Ye();
        a(t, c, (t=>n(6, I = t)));
        let {x: o=0} = e
          , {y: g=0} = e
          , {rotation: r=0} = e;
        return t.$$set = t=>{
            "x"in t && n(0, o = t.x),
            "y"in t && n(1, g = t.y),
            "rotation"in t && n(2, r = t.rotation)
        }
        ,
        t.$$.update = ()=>{
            64 & t.$$.dirty && (i = I.uiState.editMode)
        }
        ,
        [o, g, r, c, function() {
            l("click", {})
        }
        , function(t) {
            i === pe.SIMULATION_RUNNING && t.stopImmediatePropagation()
        }
        , I]
    }
    class ul extends It {
        constructor(t) {
            super(),
            it(this, t, rl, al, g, {
                x: 0,
                y: 1,
                rotation: 2
            })
        }
    }
    var dl = {
        _tag: "None"
    }
      , sl = function(t) {
        return {
            _tag: "Some",
            value: t
        }
    };
    function pl(t) {
        let e, n, i, I, l, c, o, g, a, r, u, C, A, b, Z, y, v;
        return n = new tI({
            props: {
                pins: Ue(t[0]),
                part: t[0]
            }
        }),
        a = new sI({
            props: {
                part: t[0]
            }
        }),
        r = new ul({
            props: {
                x: 10,
                y: 20,
                rotation: 0
            }
        }),
        r.$on("click", t[11]),
        u = new ul({
            props: {
                x: 30,
                y: 20,
                rotation: 0
            }
        }),
        u.$on("click", t[12]),
        C = new ul({
            props: {
                x: 50,
                y: 20,
                rotation: 0
            }
        }),
        C.$on("click", t[13]),
        A = new ul({
            props: {
                x: 10,
                y: 70,
                rotation: 180
            }
        }),
        A.$on("click", t[14]),
        b = new ul({
            props: {
                x: 30,
                y: 70,
                rotation: 180
            }
        }),
        b.$on("click", t[15]),
        Z = new ul({
            props: {
                x: 50,
                y: 70,
                rotation: 180
            }
        }),
        Z.$on("click", t[16]),
        {
            c() {
                e = m("g"),
                q(n.$$.fragment),
                i = m("text"),
                I = N(t[3]),
                l = m("text"),
                c = N(t[2]),
                o = m("text"),
                g = N(t[1]),
                q(a.$$.fragment),
                q(r.$$.fragment),
                q(u.$$.fragment),
                q(C.$$.fragment),
                q(A.$$.fragment),
                q(b.$$.fragment),
                q(Z.$$.fragment),
                D(i, "font-size", Le),
                D(i, "text-anchor", "middle"),
                D(i, "alignment-baseline", "central"),
                D(i, "x", 10),
                D(i, "y", 45),
                D(i, "class", "svelte-1h3j6go"),
                D(l, "font-size", Le),
                D(l, "text-anchor", "middle"),
                D(l, "alignment-baseline", "central"),
                D(l, "x", 30),
                D(l, "y", 45),
                D(l, "class", "svelte-1h3j6go"),
                D(o, "font-size", Le),
                D(o, "text-anchor", "middle"),
                D(o, "alignment-baseline", "central"),
                D(o, "x", 50),
                D(o, "y", 45),
                D(o, "class", "svelte-1h3j6go"),
                D(e, "transform", y = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(t, p) {
                s(t, e, p),
                tt(n, e, null),
                d(e, i),
                d(i, I),
                d(e, l),
                d(l, c),
                d(e, o),
                d(o, g),
                tt(a, e, null),
                tt(r, e, null),
                tt(u, e, null),
                tt(C, e, null),
                tt(A, e, null),
                tt(b, e, null),
                tt(Z, e, null),
                v = !0
            },
            p(t, [i]) {
                const l = {};
                1 & i && (l.pins = Ue(t[0])),
                1 & i && (l.part = t[0]),
                n.$set(l),
                (!v || 8 & i) && M(I, t[3]),
                (!v || 4 & i) && M(c, t[2]),
                (!v || 2 & i) && M(g, t[1]);
                const o = {};
                1 & i && (o.part = t[0]),
                a.$set(o),
                (!v || 1 & i && y !== (y = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", y)
            },
            i(t) {
                v || (H(n.$$.fragment, t),
                H(a.$$.fragment, t),
                H(r.$$.fragment, t),
                H(u.$$.fragment, t),
                H(C.$$.fragment, t),
                H(A.$$.fragment, t),
                H(b.$$.fragment, t),
                H(Z.$$.fragment, t),
                v = !0)
            },
            o(t) {
                J(n.$$.fragment, t),
                J(a.$$.fragment, t),
                J(r.$$.fragment, t),
                J(u.$$.fragment, t),
                J(C.$$.fragment, t),
                J(A.$$.fragment, t),
                J(b.$$.fragment, t),
                J(Z.$$.fragment, t),
                v = !1
            },
            d(t) {
                t && p(e),
                et(n),
                et(a),
                et(r),
                et(u),
                et(C),
                et(A),
                et(b),
                et(Z)
            }
        }
    }
    function Cl(t, e, n) {
        let i, I, l;
        const c = Ye();
        a(t, c, (t=>n(10, l = t)));
        let {part: o} = e
          , g = 0
          , r = 0
          , u = 0
          , d = 0;
        function s(t) {
            return te(0, ((t,e,n)=>e + 2 ** t * (n ? 1 : 0)))(t)
        }
        const p = t=>{
            const e = function(t, e) {
                for (var n = [], i = t; ; ) {
                    var I = e(i);
                    if ("Some" !== I._tag)
                        break;
                    var l = I.value
                      , c = l[0]
                      , o = l[1];
                    n.push(c),
                    i = o
                }
                return n
            }(t, (t=>0 === t ? dl : sl([t % 2 == 1, Math.floor(t / 2)])))
              , n = 8 - e.length;
            return n > 0 ? [...e, ...(i = n,
            I = t=>!1,
            i <= 0 ? [] : St(I)(i))] : e;
            var i, I
        }
        ;
        function C(t) {
            if (I === pe.SIMULATION_RUNNING) {
                const e = d + 1 * 10 ** t;
                if (e <= 255 && e !== d) {
                    const t = p(e)
                      , n = l.project.modules[l.project.activeModuleId];
                    c.set(EI(l, o.id, t, n, l.project.modules))
                }
            }
        }
        function A(t) {
            if (I === pe.SIMULATION_RUNNING) {
                const e = d - 1 * 10 ** t;
                if (e >= 0 && e !== d) {
                    const t = p(e)
                      , n = l.project.modules[l.project.activeModuleId];
                    c.set(EI(l, o.id, t, n, l.project.modules))
                }
            }
        }
        return t.$$set = t=>{
            "part"in t && n(0, o = t.part)
        }
        ,
        t.$$.update = ()=>{
            if (1024 & t.$$.dirty && n(9, i = l.simState),
            1024 & t.$$.dirty && n(8, I = l.uiState.editMode),
            897 & t.$$.dirty)
                if (I === pe.SIMULATION_RUNNING || I === pe.SIMULATION_PAUSED) {
                    const t = I === pe.SIMULATION_RUNNING ? i.parts[o.id] : i.history[i.activeHistoryEntry].parts[o.id];
                    n(7, d = Mt(t.outputPins, Vt((t=>t.value)), s)),
                    n(1, g = d % 10),
                    n(2, r = Math.floor(d / 10) % 10),
                    n(3, u = Math.floor(d / 100) % 10)
                } else
                    n(1, g = 0),
                    n(2, r = 0),
                    n(3, u = 0),
                    n(7, d = 0)
        }
        ,
        [o, g, r, u, c, C, A, d, I, i, l, ()=>C(2), ()=>C(1), ()=>C(0), ()=>A(2), ()=>A(1), ()=>A(0)]
    }
    function Al(t) {
        let e, n, i, I, l, c, o, g, a, r, u, C, A, b;
        return g = new tI({
            props: {
                pins: Be(t[0]),
                part: t[0]
            }
        }),
        a = new tI({
            props: {
                pins: Ue(t[0]),
                part: t[0]
            }
        }),
        u = new sI({
            props: {
                part: t[0]
            }
        }),
        C = new aI({
            props: {
                partId: t[0].id
            }
        }),
        {
            c() {
                e = m("g"),
                n = m("text"),
                i = N(t[2]),
                c = m("polyline"),
                o = m("polyline"),
                q(g.$$.fragment),
                q(a.$$.fragment),
                r = m("circle"),
                q(u.$$.fragment),
                q(C.$$.fragment),
                D(n, "font-size", Le),
                D(n, "text-anchor", "middle"),
                D(n, "alignment-baseline", "central"),
                D(n, "class", "no-select svelte-7xw61z"),
                D(n, "x", I = Fe(t[0]) / 2),
                D(n, "y", l = Xe(t[0], t[3].modules) / 2),
                D(c, "points", "30,7  36,7  36,13"),
                D(c, "fill", "none"),
                D(c, "stroke", "black"),
                D(o, "points", "30,27 36,27 36,33"),
                D(o, "fill", "none"),
                D(o, "stroke", "black"),
                D(r, "cx", "20"),
                D(r, "cy", "30"),
                D(r, "r", "4"),
                D(r, "fill", t[1]),
                D(r, "stroke", "black"),
                D(e, "transform", A = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(t, I) {
                s(t, e, I),
                d(e, n),
                d(n, i),
                d(e, c),
                d(e, o),
                tt(g, e, null),
                tt(a, e, null),
                d(e, r),
                tt(u, e, null),
                tt(C, e, null),
                b = !0
            },
            p(t, [c]) {
                (!b || 4 & c) && M(i, t[2]),
                (!b || 1 & c && I !== (I = Fe(t[0]) / 2)) && D(n, "x", I),
                (!b || 9 & c && l !== (l = Xe(t[0], t[3].modules) / 2)) && D(n, "y", l);
                const o = {};
                1 & c && (o.pins = Be(t[0])),
                1 & c && (o.part = t[0]),
                g.$set(o);
                const d = {};
                1 & c && (d.pins = Ue(t[0])),
                1 & c && (d.part = t[0]),
                a.$set(d),
                (!b || 2 & c) && D(r, "fill", t[1]);
                const s = {};
                1 & c && (s.part = t[0]),
                u.$set(s);
                const p = {};
                1 & c && (p.partId = t[0].id),
                C.$set(p),
                (!b || 1 & c && A !== (A = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", A)
            },
            i(t) {
                b || (H(g.$$.fragment, t),
                H(a.$$.fragment, t),
                H(u.$$.fragment, t),
                H(C.$$.fragment, t),
                b = !0)
            },
            o(t) {
                J(g.$$.fragment, t),
                J(a.$$.fragment, t),
                J(u.$$.fragment, t),
                J(C.$$.fragment, t),
                b = !1
            },
            d(t) {
                t && p(e),
                et(g),
                et(a),
                et(u),
                et(C)
            }
        }
    }
    function ml(t, e, n) {
        let i, I, l, c, o, g, {part: r} = e;
        const u = Ye();
        a(t, u, (t=>n(8, g = t)));
        let d = "white";
        return t.$$set = t=>{
            "part"in t && n(0, r = t.part)
        }
        ,
        t.$$.update = ()=>{
            if (256 & t.$$.dirty && n(5, i = g.simState),
            256 & t.$$.dirty && n(6, I = g.uiState.editMode),
            256 & t.$$.dirty && n(3, l = g.project),
            1 & t.$$.dirty && n(7, c = bt[r.type]),
            128 & t.$$.dirty && n(2, o = c.label),
            97 & t.$$.dirty)
                if (I === pe.SIMULATION_RUNNING) {
                    const t = i.parts[r.id];
                    n(1, d = t.state.savedValueMaster ? "red" : "white")
                } else if (I === pe.SIMULATION_PAUSED) {
                    const t = i.history[i.activeHistoryEntry].parts[r.id];
                    n(1, d = t.state.savedValueMaster ? "red" : "white")
                } else
                    n(1, d = "white")
        }
        ,
        [r, d, o, l, u, i, I, c, g]
    }
    class Nl extends It {
        constructor(t) {
            super(),
            it(this, t, ml, Al, g, {
                part: 0
            })
        }
    }
    function bl(t) {
        let e;
        return {
            c() {
                e = m("line"),
                D(e, "x1", "0"),
                D(e, "y1", "20"),
                D(e, "x2", "40"),
                D(e, "y2", "30"),
                D(e, "stroke", t[2])
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, n) {
                4 & n && D(e, "stroke", t[2])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Zl(t) {
        let e;
        return {
            c() {
                e = m("line"),
                D(e, "x1", "0"),
                D(e, "y1", "40"),
                D(e, "x2", "40"),
                D(e, "y2", "30"),
                D(e, "stroke", t[2])
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, n) {
                4 & n && D(e, "stroke", t[2])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function yl(t) {
        let e, n, i, I, l, c, o, g, a, r = t[3] === t[1].DOWN && bl(t), u = t[3] === t[1].UP && Zl(t);
        return I = new tI({
            props: {
                pins: t[5],
                part: t[0]
            }
        }),
        l = new tI({
            props: {
                pins: t[6],
                part: t[0]
            }
        }),
        c = new sI({
            props: {
                part: t[0],
                points: "0,0 40,10 40,50 0,60 0,0"
            }
        }),
        o = new aI({
            props: {
                partId: t[0].id
            }
        }),
        {
            c() {
                e = m("g"),
                r && r.c(),
                n = Z(),
                u && u.c(),
                i = Z(),
                q(I.$$.fragment),
                q(l.$$.fragment),
                q(c.$$.fragment),
                q(o.$$.fragment),
                D(e, "transform", g = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(t, g) {
                s(t, e, g),
                r && r.m(e, null),
                d(e, n),
                u && u.m(e, null),
                d(e, i),
                tt(I, e, null),
                tt(l, e, null),
                tt(c, e, null),
                tt(o, e, null),
                a = !0
            },
            p(t, [d]) {
                t[3] === t[1].DOWN ? r ? r.p(t, d) : (r = bl(t),
                r.c(),
                r.m(e, n)) : r && (r.d(1),
                r = null),
                t[3] === t[1].UP ? u ? u.p(t, d) : (u = Zl(t),
                u.c(),
                u.m(e, i)) : u && (u.d(1),
                u = null);
                const s = {};
                1 & d && (s.part = t[0]),
                I.$set(s);
                const p = {};
                1 & d && (p.part = t[0]),
                l.$set(p);
                const C = {};
                1 & d && (C.part = t[0]),
                c.$set(C);
                const A = {};
                1 & d && (A.partId = t[0].id),
                o.$set(A),
                (!a || 1 & d && g !== (g = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", g)
            },
            i(t) {
                a || (H(I.$$.fragment, t),
                H(l.$$.fragment, t),
                H(c.$$.fragment, t),
                H(o.$$.fragment, t),
                a = !0)
            },
            o(t) {
                J(I.$$.fragment, t),
                J(l.$$.fragment, t),
                J(c.$$.fragment, t),
                J(o.$$.fragment, t),
                a = !1
            },
            d(t) {
                t && p(e),
                r && r.d(),
                u && u.d(),
                et(I),
                et(l),
                et(c),
                et(o)
            }
        }
    }
    function Dl(t, e, n) {
        let i, I, l, {part: c} = e;
        const o = Ye();
        a(t, o, (t=>n(9, l = t)));
        let g = Be(c)
          , r = Ue(c)
          , u = "black";
        var d;
        !function(t) {
            t[t.UP = 0] = "UP",
            t[t.DOWN = 1] = "DOWN",
            t[t.INVISIBLE = 2] = "INVISIBLE"
        }(d || (d = {}));
        let s = d.UP;
        return t.$$set = t=>{
            "part"in t && n(0, c = t.part)
        }
        ,
        t.$$.update = ()=>{
            512 & t.$$.dirty && n(7, i = l.simState),
            512 & t.$$.dirty && n(8, I = l.uiState.editMode),
            385 & t.$$.dirty && (I === pe.SIMULATION_RUNNING ? n(2, u = i.parts[c.id].outputPins[0].value ? "red" : "black") : I === pe.SIMULATION_PAUSED ? n(2, u = i.history[i.activeHistoryEntry].parts[c.id].outputPins[0].value ? "red" : "black") : n(2, u = "black")),
            387 & t.$$.dirty && (I === pe.SIMULATION_RUNNING ? i.parts[c.id].inputPinValues[2] ? n(3, s = d.UP) : n(3, s = d.DOWN) : I === pe.SIMULATION_PAUSED ? iI(i.history[i.activeHistoryEntry].queue, c.id) ? n(3, s = d.INVISIBLE) : i.history[i.activeHistoryEntry].parts[c.id].inputPinValues[2] ? n(3, s = d.UP) : n(3, s = d.DOWN) : n(3, s = d.DOWN))
        }
        ,
        [c, d, u, s, o, g, r, i, I, l]
    }
    function Ml(t) {
        let e;
        return {
            c() {
                e = m("line"),
                D(e, "x1", "0"),
                D(e, "y1", "30"),
                D(e, "x2", "40"),
                D(e, "y2", "20"),
                D(e, "stroke", t[2])
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, n) {
                4 & n && D(e, "stroke", t[2])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function vl(t) {
        let e;
        return {
            c() {
                e = m("line"),
                D(e, "x1", "0"),
                D(e, "y1", "30"),
                D(e, "x2", "40"),
                D(e, "y2", "40"),
                D(e, "stroke", t[2])
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, n) {
                4 & n && D(e, "stroke", t[2])
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function hl(t) {
        let e, n, i, I, l, c, o, g, a, r = t[3] === t[1].DOWN && Ml(t), u = t[3] === t[1].UP && vl(t);
        return I = new tI({
            props: {
                pins: t[4],
                part: t[0]
            }
        }),
        l = new tI({
            props: {
                pins: t[5],
                part: t[0]
            }
        }),
        c = new sI({
            props: {
                part: t[0],
                points: "0,10 40,0 40,60 0,50 0,10"
            }
        }),
        o = new aI({
            props: {
                partId: t[0].id
            }
        }),
        {
            c() {
                e = m("g"),
                r && r.c(),
                n = Z(),
                u && u.c(),
                i = Z(),
                q(I.$$.fragment),
                q(l.$$.fragment),
                q(c.$$.fragment),
                q(o.$$.fragment),
                D(e, "transform", g = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(t, g) {
                s(t, e, g),
                r && r.m(e, null),
                d(e, n),
                u && u.m(e, null),
                d(e, i),
                tt(I, e, null),
                tt(l, e, null),
                tt(c, e, null),
                tt(o, e, null),
                a = !0
            },
            p(t, [d]) {
                t[3] === t[1].DOWN ? r ? r.p(t, d) : (r = Ml(t),
                r.c(),
                r.m(e, n)) : r && (r.d(1),
                r = null),
                t[3] === t[1].UP ? u ? u.p(t, d) : (u = vl(t),
                u.c(),
                u.m(e, i)) : u && (u.d(1),
                u = null);
                const s = {};
                1 & d && (s.part = t[0]),
                I.$set(s);
                const p = {};
                1 & d && (p.part = t[0]),
                l.$set(p);
                const C = {};
                1 & d && (C.part = t[0]),
                c.$set(C);
                const A = {};
                1 & d && (A.partId = t[0].id),
                o.$set(A),
                (!a || 1 & d && g !== (g = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", g)
            },
            i(t) {
                a || (H(I.$$.fragment, t),
                H(l.$$.fragment, t),
                H(c.$$.fragment, t),
                H(o.$$.fragment, t),
                a = !0)
            },
            o(t) {
                J(I.$$.fragment, t),
                J(l.$$.fragment, t),
                J(c.$$.fragment, t),
                J(o.$$.fragment, t),
                a = !1
            },
            d(t) {
                t && p(e),
                r && r.d(),
                u && u.d(),
                et(I),
                et(l),
                et(c),
                et(o)
            }
        }
    }
    function jl(t, e, n) {
        let i, I, l, {part: c} = e, o = Be(c), g = Ue(c);
        const r = Ye();
        a(t, r, (t=>n(9, l = t)));
        let u = "black";
        var d;
        !function(t) {
            t[t.UP = 0] = "UP",
            t[t.DOWN = 1] = "DOWN",
            t[t.INVISIBLE = 2] = "INVISIBLE"
        }(d || (d = {}));
        let s = d.UP;
        return t.$$set = t=>{
            "part"in t && n(0, c = t.part)
        }
        ,
        t.$$.update = ()=>{
            512 & t.$$.dirty && n(7, i = l.simState),
            512 & t.$$.dirty && n(8, I = l.uiState.editMode),
            385 & t.$$.dirty && (I === pe.SIMULATION_RUNNING ? n(2, u = i.parts[c.id].inputPinValues[0] ? "red" : "black") : I === pe.SIMULATION_PAUSED ? n(2, u = i.history[i.activeHistoryEntry].parts[c.id].inputPinValues[0] ? "red" : "black") : n(2, u = "black")),
            387 & t.$$.dirty && (I === pe.SIMULATION_RUNNING ? i.parts[c.id].inputPinValues[1] ? n(3, s = d.UP) : n(3, s = d.DOWN) : I === pe.SIMULATION_PAUSED ? iI(i.history[i.activeHistoryEntry].queue, c.id) ? n(3, s = d.INVISIBLE) : i.history[i.activeHistoryEntry].parts[c.id].inputPinValues[1] ? n(3, s = d.UP) : n(3, s = d.DOWN) : n(3, s = d.DOWN))
        }
        ,
        [c, d, u, s, o, g, r, i, I, l]
    }
    function fl(t) {
        let e, n, i, I, l, c;
        return i = new tI({
            props: {
                pins: Ue(t[0]),
                part: t[0]
            }
        }),
        I = new sI({
            props: {
                part: t[0]
            }
        }),
        {
            c() {
                e = m("g"),
                n = m("polyline"),
                q(i.$$.fragment),
                q(I.$$.fragment),
                D(n, "transform", "translate(5 20)"),
                D(n, "points", "0 0 10 0 10 -10 20 -10 20 0 30 0"),
                D(n, "fill", "none"),
                D(n, "stroke", "black"),
                D(e, "transform", l = "translate(" + t[0].position.x + " " + t[0].position.y + ")")
            },
            m(t, l) {
                s(t, e, l),
                d(e, n),
                tt(i, e, null),
                tt(I, e, null),
                c = !0
            },
            p(t, [n]) {
                const o = {};
                1 & n && (o.pins = Ue(t[0])),
                1 & n && (o.part = t[0]),
                i.$set(o);
                const g = {};
                1 & n && (g.part = t[0]),
                I.$set(g),
                (!c || 1 & n && l !== (l = "translate(" + t[0].position.x + " " + t[0].position.y + ")")) && D(e, "transform", l)
            },
            i(t) {
                c || (H(i.$$.fragment, t),
                H(I.$$.fragment, t),
                c = !0)
            },
            o(t) {
                J(i.$$.fragment, t),
                J(I.$$.fragment, t),
                c = !1
            },
            d(t) {
                t && p(e),
                et(i),
                et(I)
            }
        }
    }
    function Gl(t, e, n) {
        let {part: i} = e;
        return t.$$set = t=>{
            "part"in t && n(0, i = t.part)
        }
        ,
        [i]
    }
    const Tl = {
        [lt.SWITCH]: class extends It {
            constructor(t) {
                super(),
                it(this, t, HI, FI, g, {
                    part: 0
                })
            }
        }
        ,
        [lt.LED]: class extends It {
            constructor(t) {
                super(),
                it(this, t, _I, VI, g, {
                    part: 0
                })
            }
        }
        ,
        [lt.MODULE]: class extends It {
            constructor(t) {
                super(),
                it(this, t, tl, qI, g, {
                    part: 0
                })
            }
        }
        ,
        [lt.SEVEN_SEGMENT]: class extends It {
            constructor(t) {
                super(),
                it(this, t, cl, ll, g, {
                    part: 0
                })
            }
        }
        ,
        [lt.BINARY_DISPLAY]: class extends It {
            constructor(t) {
                super(),
                it(this, t, gl, ol, g, {
                    part: 0
                })
            }
        }
        ,
        [lt.BINARY_INPUT]: class extends It {
            constructor(t) {
                super(),
                it(this, t, Cl, pl, g, {
                    part: 0
                })
            }
        }
        ,
        [lt.D_MS_1FLANKE]: Nl,
        [lt.D_MS_2FLANKEN]: Nl,
        [lt.MUX]: class extends It {
            constructor(t) {
                super(),
                it(this, t, Dl, yl, g, {
                    part: 0
                })
            }
        }
        ,
        [lt.DEMUX]: class extends It {
            constructor(t) {
                super(),
                it(this, t, jl, hl, g, {
                    part: 0
                })
            }
        }
        ,
        [lt.CLOCK]: class extends It {
            constructor(t) {
                super(),
                it(this, t, Gl, fl, g, {
                    part: 0
                })
            }
        }
    };
    function wl(t) {
        return Tl.hasOwnProperty(t) ? Tl[t] : AI
    }
    function Wl(t) {
        const e = t.slice()
          , n = e[3].select.selectionRect;
        return e[22] = n,
        e
    }
    function zl(t, e, n) {
        const i = t.slice();
        return i[23] = e[n],
        i
    }
    function Sl(t, e, n) {
        const i = t.slice();
        return i[26] = e[n],
        i
    }
    function Ol(t, e, n) {
        const i = t.slice();
        return i[26] = e[n],
        i
    }
    function Yl(t, e, n) {
        const i = t.slice();
        return i[31] = e[n],
        i
    }
    function xl(t, e, n) {
        const i = t.slice();
        return i[34] = e[n],
        i
    }
    function kl(t, e) {
        let n, i, I;
        return i = new ci({
            props: {
                rect: e[34]
            }
        }),
        {
            key: t,
            first: null,
            c() {
                n = Z(),
                q(i.$$.fragment),
                this.first = n
            },
            m(t, e) {
                s(t, n, e),
                tt(i, t, e),
                I = !0
            },
            p(t, n) {
                e = t;
                const I = {};
                16 & n[0] && (I.rect = e[34]),
                i.$set(I)
            },
            i(t) {
                I || (H(i.$$.fragment, t),
                I = !0)
            },
            o(t) {
                J(i.$$.fragment, t),
                I = !1
            },
            d(t) {
                t && p(n),
                et(i, t)
            }
        }
    }
    function Pl(t, e) {
        let n, i, I, l;
        var c = wl(e[31].type);
        function o(t) {
            return {
                props: {
                    part: t[31]
                }
            }
        }
        return c && (i = j(c, o(e))),
        {
            key: t,
            first: null,
            c() {
                n = Z(),
                i && q(i.$$.fragment),
                I = Z(),
                this.first = n
            },
            m(t, e) {
                s(t, n, e),
                i && tt(i, t, e),
                s(t, I, e),
                l = !0
            },
            p(t, n) {
                e = t;
                const l = {};
                if (16 & n[0] && (l.part = e[31]),
                16 & n[0] && c !== (c = wl(e[31].type))) {
                    if (i) {
                        X();
                        const t = i;
                        J(t.$$.fragment, 1, 0, (()=>{
                            et(t, 1)
                        }
                        )),
                        F()
                    }
                    c ? (i = j(c, o(e)),
                    q(i.$$.fragment),
                    H(i.$$.fragment, 1),
                    tt(i, I.parentNode, I)) : i = null
                } else
                    c && i.$set(l)
            },
            i(t) {
                l || (i && H(i.$$.fragment, t),
                l = !0)
            },
            o(t) {
                i && J(i.$$.fragment, t),
                l = !1
            },
            d(t) {
                t && p(n),
                t && p(I),
                i && et(i, t)
            }
        }
    }
    function Ll(t, e) {
        let n, i, I;
        return i = new Cn({
            props: {
                connectionId: e[26].id
            }
        }),
        {
            key: t,
            first: null,
            c() {
                n = Z(),
                q(i.$$.fragment),
                this.first = n
            },
            m(t, e) {
                s(t, n, e),
                tt(i, t, e),
                I = !0
            },
            p(t, n) {
                e = t;
                const I = {};
                16 & n[0] && (I.connectionId = e[26].id),
                i.$set(I)
            },
            i(t) {
                I || (H(i.$$.fragment, t),
                I = !0)
            },
            o(t) {
                J(i.$$.fragment, t),
                I = !1
            },
            d(t) {
                t && p(n),
                et(i, t)
            }
        }
    }
    function Rl(t, e) {
        let n, i, I;
        return i = new On({
            props: {
                connectionId: e[26].id
            }
        }),
        {
            key: t,
            first: null,
            c() {
                n = Z(),
                q(i.$$.fragment),
                this.first = n
            },
            m(t, e) {
                s(t, n, e),
                tt(i, t, e),
                I = !0
            },
            p(t, n) {
                e = t;
                const I = {};
                16 & n[0] && (I.connectionId = e[26].id),
                i.$set(I)
            },
            i(t) {
                I || (H(i.$$.fragment, t),
                I = !0)
            },
            o(t) {
                J(i.$$.fragment, t),
                I = !1
            },
            d(t) {
                t && p(n),
                et(i, t)
            }
        }
    }
    function Ql(t) {
        let e, n;
        return e = new Ln({}),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function Bl(t, e) {
        let n, i, I;
        return i = new Jn({
            props: {
                textField: e[23]
            }
        }),
        {
            key: t,
            first: null,
            c() {
                n = Z(),
                q(i.$$.fragment),
                this.first = n
            },
            m(t, e) {
                s(t, n, e),
                tt(i, t, e),
                I = !0
            },
            p(t, n) {
                e = t;
                const I = {};
                16 & n[0] && (I.textField = e[23]),
                i.$set(I)
            },
            i(t) {
                I || (H(i.$$.fragment, t),
                I = !0)
            },
            o(t) {
                J(i.$$.fragment, t),
                I = !1
            },
            d(t) {
                t && p(n),
                et(i, t)
            }
        }
    }
    function Ul(t) {
        let e, n;
        return e = new ai({
            props: {
                x1: t[22].x1,
                y1: t[22].y1,
                x2: t[22].x2,
                y2: t[22].y2
            }
        }),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, n) {
                const i = {};
                8 & n[0] && (i.x1 = t[22].x1),
                8 & n[0] && (i.y1 = t[22].y1),
                8 & n[0] && (i.x2 = t[22].x2),
                8 & n[0] && (i.y2 = t[22].y2),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function $l(t) {
        let e, n, i;
        return {
            c() {
                e = m("circle"),
                D(e, "cx", n = t[3].pinchZoom.pinchFocus.x),
                D(e, "cy", i = t[3].pinchZoom.pinchFocus.y),
                D(e, "r", "5"),
                D(e, "fill", "red")
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, I) {
                8 & I[0] && n !== (n = t[3].pinchZoom.pinchFocus.x) && D(e, "cx", n),
                8 & I[0] && i !== (i = t[3].pinchZoom.pinchFocus.y) && D(e, "cy", i)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function El(t) {
        let e, n, I, l, c, o, g, a, r, u, C, A, N, b, M, h, j = [], f = new Map, G = [], T = new Map, w = [], W = new Map, z = [], S = new Map, O = [], Y = new Map, x = Object.values(t[4].rects);
        const k = t=>t[4].id + "-" + t[34].id;
        for (let e = 0; e < x.length; e += 1) {
            let n = xl(t, x, e)
              , i = k(n);
            f.set(i, j[e] = kl(i, n))
        }
        let P = Object.values(t[4].parts);
        const L = t=>t[4].id + "-" + t[31].id;
        for (let e = 0; e < P.length; e += 1) {
            let n = Yl(t, P, e)
              , i = L(n);
            T.set(i, G[e] = Pl(i, n))
        }
        let R = Object.values(t[4].connections);
        const Q = t=>t[4].id + "-" + t[26].id;
        for (let e = 0; e < R.length; e += 1) {
            let n = Ol(t, R, e)
              , i = Q(n);
            W.set(i, w[e] = Ll(i, n))
        }
        let B = Object.values(t[4].connections);
        const U = t=>t[4].id + "-" + t[26].id;
        for (let e = 0; e < B.length; e += 1) {
            let n = Sl(t, B, e)
              , i = U(n);
            S.set(i, z[e] = Rl(i, n))
        }
        let $ = t[2] === pe.ADD_CONNECTION && Ql()
          , E = Object.values(t[4].textFields);
        const V = t=>t[4].id + "-" + t[23].id;
        for (let e = 0; e < E.length; e += 1) {
            let n = zl(t, E, e)
              , i = V(n);
            Y.set(i, O[e] = Bl(i, n))
        }
        let q = t[2] === pe.NEUTRAL && t[3].select.mouseDown && Ul(Wl(t))
          , tt = t[5].debug && t[3].pinchZoom.active && $l(t);
        return {
            c() {
                e = m("svg"),
                n = m("g");
                for (let t = 0; t < j.length; t += 1)
                    j[t].c();
                I = Z();
                for (let t = 0; t < G.length; t += 1)
                    G[t].c();
                l = Z();
                for (let t = 0; t < w.length; t += 1)
                    w[t].c();
                c = Z();
                for (let t = 0; t < z.length; t += 1)
                    z[t].c();
                o = Z(),
                $ && $.c(),
                g = Z();
                for (let t = 0; t < O.length; t += 1)
                    O[t].c();
                a = Z(),
                q && q.c(),
                u = m("g"),
                C = m("line"),
                A = m("line"),
                tt && tt.c(),
                D(n, "transform", r = "translate(" + t[3].translate.x + "," + t[3].translate.y + ") scale(" + t[3].scale / 100 + ")"),
                D(C, "x1", -5),
                D(C, "y1", 0),
                D(C, "x2", 5),
                D(C, "y2", 0),
                D(C, "stroke", "black"),
                D(A, "x1", 0),
                D(A, "y1", -5),
                D(A, "x2", 0),
                D(A, "y2", 5),
                D(A, "stroke", "black"),
                D(u, "transform", N = "translate(" + t[3].translate.x + "," + t[3].translate.y + ") scale(" + t[3].scale / 100 + ") "),
                v(e, "user-select", "none"),
                v(e, "width", "100%"),
                v(e, "height", "100%")
            },
            m(i, r) {
                s(i, e, r),
                d(e, n);
                for (let t = 0; t < j.length; t += 1)
                    j[t] && j[t].m(n, null);
                d(n, I);
                for (let t = 0; t < G.length; t += 1)
                    G[t] && G[t].m(n, null);
                d(n, l);
                for (let t = 0; t < w.length; t += 1)
                    w[t] && w[t].m(n, null);
                d(n, c);
                for (let t = 0; t < z.length; t += 1)
                    z[t] && z[t].m(n, null);
                d(n, o),
                $ && $.m(n, null),
                d(n, g);
                for (let t = 0; t < O.length; t += 1)
                    O[t] && O[t].m(n, null);
                d(n, a),
                q && q.m(n, null),
                t[15](n),
                d(e, u),
                d(u, C),
                d(u, A),
                t[16](u),
                tt && tt.m(e, null),
                t[17](e),
                b = !0,
                M || (h = [y(e, "pointermove", t[8]), y(e, "pointerup", t[9]), y(e, "pointerdown", t[7]), y(e, "pointercancel", t[11]), y(e, "pointerout", t[11]), y(e, "pointerleave", t[11]), y(e, "wheel", t[12]), y(e, "click", t[10]), y(e, "contextmenu", Xl)],
                M = !0)
            },
            p(t, i) {
                16 & i[0] && (x = Object.values(t[4].rects),
                X(),
                j = _(j, i, k, 1, t, x, f, n, K, kl, I, xl),
                F()),
                16 & i[0] && (P = Object.values(t[4].parts),
                X(),
                G = _(G, i, L, 1, t, P, T, n, K, Pl, l, Yl),
                F()),
                16 & i[0] && (R = Object.values(t[4].connections),
                X(),
                w = _(w, i, Q, 1, t, R, W, n, K, Ll, c, Ol),
                F()),
                16 & i[0] && (B = Object.values(t[4].connections),
                X(),
                z = _(z, i, U, 1, t, B, S, n, K, Rl, o, Sl),
                F()),
                t[2] === pe.ADD_CONNECTION ? $ ? 4 & i[0] && H($, 1) : ($ = Ql(),
                $.c(),
                H($, 1),
                $.m(n, g)) : $ && (X(),
                J($, 1, 1, (()=>{
                    $ = null
                }
                )),
                F()),
                16 & i[0] && (E = Object.values(t[4].textFields),
                X(),
                O = _(O, i, V, 1, t, E, Y, n, K, Bl, a, zl),
                F()),
                t[2] === pe.NEUTRAL && t[3].select.mouseDown ? q ? (q.p(Wl(t), i),
                12 & i[0] && H(q, 1)) : (q = Ul(Wl(t)),
                q.c(),
                H(q, 1),
                q.m(n, null)) : q && (X(),
                J(q, 1, 1, (()=>{
                    q = null
                }
                )),
                F()),
                (!b || 8 & i[0] && r !== (r = "translate(" + t[3].translate.x + "," + t[3].translate.y + ") scale(" + t[3].scale / 100 + ")")) && D(n, "transform", r),
                (!b || 8 & i[0] && N !== (N = "translate(" + t[3].translate.x + "," + t[3].translate.y + ") scale(" + t[3].scale / 100 + ") ")) && D(u, "transform", N),
                t[5].debug && t[3].pinchZoom.active ? tt ? tt.p(t, i) : (tt = $l(t),
                tt.c(),
                tt.m(e, null)) : tt && (tt.d(1),
                tt = null)
            },
            i(t) {
                if (!b) {
                    for (let t = 0; t < x.length; t += 1)
                        H(j[t]);
                    for (let t = 0; t < P.length; t += 1)
                        H(G[t]);
                    for (let t = 0; t < R.length; t += 1)
                        H(w[t]);
                    for (let t = 0; t < B.length; t += 1)
                        H(z[t]);
                    H($);
                    for (let t = 0; t < E.length; t += 1)
                        H(O[t]);
                    H(q),
                    b = !0
                }
            },
            o(t) {
                for (let t = 0; t < j.length; t += 1)
                    J(j[t]);
                for (let t = 0; t < G.length; t += 1)
                    J(G[t]);
                for (let t = 0; t < w.length; t += 1)
                    J(w[t]);
                for (let t = 0; t < z.length; t += 1)
                    J(z[t]);
                J($);
                for (let t = 0; t < O.length; t += 1)
                    J(O[t]);
                J(q),
                b = !1
            },
            d(n) {
                n && p(e);
                for (let t = 0; t < j.length; t += 1)
                    j[t].d();
                for (let t = 0; t < G.length; t += 1)
                    G[t].d();
                for (let t = 0; t < w.length; t += 1)
                    w[t].d();
                for (let t = 0; t < z.length; t += 1)
                    z[t].d();
                $ && $.d();
                for (let t = 0; t < O.length; t += 1)
                    O[t].d();
                q && q.d(),
                t[15](null),
                t[16](null),
                tt && tt.d(),
                t[17](null),
                M = !1,
                i(h)
            }
        }
    }
    function Xl(t) {}
    function Fl(t, e, n) {
        let i, I, l, c;
        const o = Nn()
          , g = Ye();
        a(t, g, (t=>n(14, c = t)));
        const r = Oe();
        let u, d;
        let s = ri;
        function p(t, e) {
            let n = u.createSVGPoint();
            n.x = t,
            n.y = e;
            const i = n.matrixTransform(d.getScreenCTM().inverse());
            return {
                x: i.x,
                y: i.y
            }
        }
        return function(t) {
            W(fe, t)
        }(p),
        t.$$.update = ()=>{
            16384 & t.$$.dirty[0] && n(3, i = c.uiState),
            16384 & t.$$.dirty[0] && n(2, I = c.uiState.editMode),
            16384 & t.$$.dirty[0] && n(4, l = c.project.modules[c.project.activeModuleId])
        }
        ,
        [u, d, I, i, l, o, g, function(t) {
            if (u.setPointerCapture(t.pointerId),
            0 === s.length) {
                if (0 === t.button) {
                    if (I === pe.NEUTRAL) {
                        let e = p(t.clientX, t.clientY);
                        g.set(function(t, e, n) {
                            return tn(t, (t=>{
                                const i = t.uiState;
                                i.select.mouseDown = !0,
                                i.select.selectionRect.x1 = e,
                                i.select.selectionRect.y1 = n,
                                i.select.selectionRect.x2 = e,
                                i.select.selectionRect.y2 = n
                            }
                            ))
                        }(c, e.x, e.y))
                    }
                } else if (1 === t.button || 2 === t.button) {
                    let e = p(t.clientX, t.clientY);
                    g.set(function(t, e) {
                        return tn(t, (t=>{
                            const n = t.uiState;
                            n.dragPane.active = !0,
                            n.dragPane.dragTranslateOffset = e
                        }
                        ))
                    }(c, e)),
                    t.preventDefault()
                }
            } else
                1 === s.length && (g.set(function(t, e, n) {
                    return tn(t, (t=>{
                        const i = t.uiState;
                        i.pinchZoom.active = !0,
                        i.pinchZoom.pos1 = e,
                        i.pinchZoom.pos2 = n,
                        i.pinchZoom.initialScale = i.scale,
                        i.pinchZoom.initialTranslate = i.translate,
                        i.pinchZoom.pinchFocus = pi(e, n)
                    }
                    ))
                }(c, s[0].lastPosition, {
                    x: t.offsetX,
                    y: t.offsetY
                })),
                g.set(hn(c)));
            s = function(t, e, n) {
                return [...t, {
                    pointerId: e,
                    lastPosition: n
                }]
            }(s, t.pointerId, {
                x: t.offsetX,
                y: t.offsetY
            })
        }
        , function(t) {
            const e = p(t.clientX, t.clientY);
            if (r.set({
                x: e.x,
                y: e.y
            }),
            s = function(t, e, n) {
                return t.map((t=>t.pointerId === e ? Object.assign(Object.assign({}, t), {
                    lastPosition: n
                }) : t))
            }(s, t.pointerId, {
                x: t.offsetX,
                y: t.offsetY
            }),
            1 === s.length) {
                if (i.select.mouseDown) {
                    let e = p(t.clientX, t.clientY);
                    g.set(function(t, e, n) {
                        return tn(t, (t=>{
                            const i = t.uiState;
                            i.select.mouseDown = !0,
                            i.select.selectionRect.x2 = e,
                            i.select.selectionRect.y2 = n
                        }
                        ))
                    }(c, e.x, e.y))
                }
                if (i.dragPane.active) {
                    let t = e.x - i.dragPane.dragTranslateOffset.x
                      , n = e.y - i.dragPane.dragTranslateOffset.y
                      , I = i.translate.x + t
                      , l = i.translate.y + n;
                    g.set(function(t, e) {
                        return tn(t, (t=>{
                            t.uiState.translate = e
                        }
                        ))
                    }(c, {
                        x: I,
                        y: l
                    }))
                }
            } else
                2 === s.length && g.set(function(t, e, n) {
                    const i = t.uiState
                      , I = i.pinchZoom.pinchFocus
                      , l = si(i.pinchZoom.pos1, i.pinchZoom.pos2)
                      , c = si(e, n) / l
                      , o = Math.round(i.pinchZoom.initialScale * c)
                      , g = o < 25 ? 25 : o < 200 ? o : 200
                      , a = (1 - g / i.pinchZoom.initialScale) * (I.x - i.pinchZoom.initialTranslate.x)
                      , r = (1 - g / i.pinchZoom.initialScale) * (I.y - i.pinchZoom.initialTranslate.y)
                      , u = pi(e, n)
                      , d = pi(i.pinchZoom.pos1, i.pinchZoom.pos2)
                      , s = u.x - d.x
                      , p = u.y - d.y;
                    return tn(t, (t=>{
                        const e = t.uiState;
                        e.translate.x = i.pinchZoom.initialTranslate.x + a + s,
                        e.translate.y = i.pinchZoom.initialTranslate.y + r + p,
                        e.pinchZoom.pinchFocus = I,
                        e.scale = g
                    }
                    ))
                }(c, s[0].lastPosition, s[1].lastPosition))
        }
        , function(t) {
            0 === t.button ? I === pe.NEUTRAL && i.select.mouseDown && g.set(jn(c)) : 1 !== t.button && 2 !== t.button || i.dragPane.active && g.set(Ni(c)),
            s = function(t, e) {
                return t.filter((t=>t.pointerId !== e))
            }(s, t.pointerId),
            s.length < 2 && g.set(Di(c))
        }
        , function(t) {
            if (I === pe.ADD_PART) {
                const e = je(p(t.clientX, t.clientY), ve);
                i.partTypeToAdd === lt.MODULE ? g.set(function(t, e, n) {
                    return tn(t, (t=>{
                        const i = t.project.modules[t.project.activeModuleId];
                        i.parts[i.nextPartId.toString()] = {
                            id: i.nextPartId.toString(),
                            type: lt.MODULE,
                            moduleId: e,
                            position: n,
                            state: {}
                        },
                        i.nextPartId++,
                        en(t)
                    }
                    ))
                }(c, i.moduleIdToAdd, e)) : g.set(function(t, e, n) {
                    return tn(t, (i=>{
                        const I = i.project.modules[t.project.activeModuleId];
                        I.parts[I.nextPartId.toString()] = {
                            id: I.nextPartId.toString(),
                            type: e,
                            position: n,
                            state: bt[e].defaultState,
                            name: ""
                        },
                        bt[e].inputPins || (I.parts[I.nextPartId.toString()].numberOfInputPins = 2),
                        I.nextPartId++,
                        en(i)
                    }
                    ))
                }(c, i.partTypeToAdd, e))
            } else if (I === pe.ADD_CONNECTION) {
                const e = je(p(t.clientX, t.clientY), ve);
                g.set(function(t, e) {
                    return tn(t, (t=>{
                        const n = t.uiState
                          , i = n.addConnection.nextPointId.toString();
                        n.addConnection.points[i] = {
                            id: i,
                            point: e
                        },
                        n.addConnection.pointOrder.push(i),
                        n.addConnection.nextPointId++
                    }
                    ))
                }(c, e))
            } else if (I === pe.ADD_TEXTFIELD) {
                const e = je(p(t.clientX, t.clientY), ve);
                g.set(function(t, e) {
                    return tn(t, (t=>{
                        const n = t.project.modules[t.project.activeModuleId]
                          , i = n.nextTextFieldId.toString();
                        n.textFields[i] = {
                            id: i,
                            text: "text",
                            position: e
                        },
                        n.nextTextFieldId++,
                        en(t)
                    }
                    ))
                }(c, e))
            } else if (I === pe.ADD_RECT) {
                let e = p(t.clientX, t.clientY);
                g.set(function(t, e) {
                    return tn(t, (t=>{
                        const n = t.project.modules[t.project.activeModuleId]
                          , i = n.nextRectId.toString();
                        n.rects[i] = {
                            id: i,
                            position: e,
                            width: 50,
                            height: 50,
                            stroke: "none",
                            fill: "green"
                        },
                        n.nextRectId++,
                        en(t)
                    }
                    ))
                }(c, e))
            }
        }
        , function(t) {
            s = s.filter((e=>e.pointerId !== t.pointerId)),
            s.length < 2 && g.set(Di(c)),
            0 === s.length && (g.set(hn(c)),
            g.set(Ni(c)))
        }
        , function(t) {
            t.ctrlKey && (t.preventDefault(),
            t.deltaY > 0 ? g.set(Zi(c)) : t.deltaY < 0 && g.set(yi(c)))
        }
        , function() {
            const t = u.children[0].getBBox();
            return '<svg xmlns="http://www.w3.org/2000/svg" ' + ('viewBox="' + t.x + " " + t.y + " " + t.width + " " + t.height + '"') + "><style>\n     .clickArea {\n        fill: white;\n        fill-opacity: 0;\n    }\n\n    .clickAreaConnection {\n        fill: none;\n        stroke: black;\n        stroke-opacity: 0;\n    } \n\n    text {\n        font-family: sans-serif;\n    }\n</style>" + u.children[0].innerHTML + "</svg>"
        }
        , c, function(t) {
            O[t ? "unshift" : "push"]((()=>{
                d = t,
                n(1, d)
            }
            ))
        }
        , function(t) {
            O[t ? "unshift" : "push"]((()=>{
                d = t,
                n(1, d)
            }
            ))
        }
        , function(t) {
            O[t ? "unshift" : "push"]((()=>{
                u = t,
                n(0, u)
            }
            ))
        }
        ]
    }
    class Hl extends It {
        constructor(t) {
            super(),
            it(this, t, Fl, El, g, {
                getSVG: 13
            }, null, [-1, -1])
        }
        get getSVG() {
            return this.$$.ctx[13]
        }
    }
    function Jl(t, e, n) {
        const i = t.slice();
        return i[16] = e[n],
        i
    }
    function Vl(t, e, n) {
        const i = t.slice();
        return i[19] = e[n],
        i
    }
    function Kl(t, e, n) {
        const i = t.slice();
        return i[22] = e[n],
        i
    }
    function _l(t) {
        let e, n, i, I, l = bt[t[22]].name + "";
        function c() {
            return t[11](t[22])
        }
        return {
            c() {
                e = A("div"),
                n = N(l),
                D(e, "class", "svelte-z6rthh"),
                h(e, "selected", t[4] === pe.ADD_PART && t[3].partTypeToAdd === t[22])
            },
            m(t, l) {
                s(t, e, l),
                d(e, n),
                i || (I = y(e, "click", c),
                i = !0)
            },
            p(n, i) {
                t = n,
                280 & i && h(e, "selected", t[4] === pe.ADD_PART && t[3].partTypeToAdd === t[22])
            },
            d(t) {
                t && p(e),
                i = !1,
                I()
            }
        }
    }
    function ql(t) {
        let e, n, i, I, l = t[19].name + "", c = t[19].partTypes, o = [];
        for (let e = 0; e < c.length; e += 1)
            o[e] = _l(Kl(t, c, e));
        return {
            c() {
                e = A("div"),
                n = N(l),
                i = b();
                for (let t = 0; t < o.length; t += 1)
                    o[t].c();
                I = Z(),
                v(e, "background-color", "lightgrey")
            },
            m(t, l) {
                s(t, e, l),
                d(e, n),
                s(t, i, l);
                for (let e = 0; e < o.length; e += 1)
                    o[e] && o[e].m(t, l);
                s(t, I, l)
            },
            p(t, e) {
                if (792 & e) {
                    let n;
                    for (c = t[19].partTypes,
                    n = 0; n < c.length; n += 1) {
                        const i = Kl(t, c, n);
                        o[n] ? o[n].p(i, e) : (o[n] = _l(i),
                        o[n].c(),
                        o[n].m(I.parentNode, I))
                    }
                    for (; n < o.length; n += 1)
                        o[n].d(1);
                    o.length = c.length
                }
            },
            d(t) {
                t && p(e),
                t && p(i),
                C(o, t),
                t && p(I)
            }
        }
    }
    function tc(t) {
        let e, n, i, I, l = "all" === t[0] || t[7].includes("TEXT"), c = "all" === t[0] || t[7].includes("RECT"), o = l && ec(t), g = c && nc(t);
        return {
            c() {
                e = A("div"),
                e.textContent = "Darstellung",
                n = b(),
                o && o.c(),
                i = b(),
                g && g.c(),
                I = Z(),
                v(e, "background-color", "lightgrey")
            },
            m(t, l) {
                s(t, e, l),
                s(t, n, l),
                o && o.m(t, l),
                s(t, i, l),
                g && g.m(t, l),
                s(t, I, l)
            },
            p(t, e) {
                1 & e && (l = "all" === t[0] || t[7].includes("TEXT")),
                l ? o ? o.p(t, e) : (o = ec(t),
                o.c(),
                o.m(i.parentNode, i)) : o && (o.d(1),
                o = null),
                1 & e && (c = "all" === t[0] || t[7].includes("RECT")),
                c ? g ? g.p(t, e) : (g = nc(t),
                g.c(),
                g.m(I.parentNode, I)) : g && (g.d(1),
                g = null)
            },
            d(t) {
                t && p(e),
                t && p(n),
                o && o.d(t),
                t && p(i),
                g && g.d(t),
                t && p(I)
            }
        }
    }
    function ec(t) {
        let e, n, i;
        return {
            c() {
                e = A("div"),
                e.textContent = "Textfeld",
                D(e, "class", "svelte-z6rthh"),
                h(e, "selected", t[4] === pe.ADD_TEXTFIELD)
            },
            m(I, l) {
                s(I, e, l),
                n || (i = y(e, "click", t[12]),
                n = !0)
            },
            p(t, n) {
                16 & n && h(e, "selected", t[4] === pe.ADD_TEXTFIELD)
            },
            d(t) {
                t && p(e),
                n = !1,
                i()
            }
        }
    }
    function nc(t) {
        let e, n, i;
        return {
            c() {
                e = A("div"),
                e.textContent = "Rechteck",
                D(e, "class", "svelte-z6rthh"),
                h(e, "selected", t[4] === pe.ADD_RECT)
            },
            m(I, l) {
                s(I, e, l),
                n || (i = y(e, "click", t[13]),
                n = !0)
            },
            p(t, n) {
                16 & n && h(e, "selected", t[4] === pe.ADD_RECT)
            },
            d(t) {
                t && p(e),
                n = !1,
                i()
            }
        }
    }
    function ic(t) {
        let e;
        return {
            c() {
                e = N("MODUL OHNE NAME")
            },
            m(t, n) {
                s(t, e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Ic(t) {
        let e, n = t[16].name + "";
        return {
            c() {
                e = N(n)
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, i) {
                4 & i && n !== (n = t[16].name + "") && M(e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function lc(t) {
        let e, n, i, I, l, c = 0 === t[16].name.length && ic(), o = t[16].name.length > 0 && Ic(t);
        function g() {
            return t[14](t[16])
        }
        return {
            c() {
                e = A("div"),
                c && c.c(),
                n = b(),
                o && o.c(),
                i = b(),
                D(e, "class", "svelte-z6rthh"),
                h(e, "selected", t[4] === pe.ADD_PART && t[3].partTypeToAdd === lt.MODULE && t[3].moduleIdToAdd == t[16].id)
            },
            m(t, a) {
                s(t, e, a),
                c && c.m(e, null),
                d(e, n),
                o && o.m(e, null),
                d(e, i),
                I || (l = y(e, "click", g),
                I = !0)
            },
            p(I, l) {
                0 === (t = I)[16].name.length ? c || (c = ic(),
                c.c(),
                c.m(e, n)) : c && (c.d(1),
                c = null),
                t[16].name.length > 0 ? o ? o.p(t, l) : (o = Ic(t),
                o.c(),
                o.m(e, i)) : o && (o.d(1),
                o = null),
                28 & l && h(e, "selected", t[4] === pe.ADD_PART && t[3].partTypeToAdd === lt.MODULE && t[3].moduleIdToAdd == t[16].id)
            },
            d(t) {
                t && p(e),
                c && c.d(),
                o && o.d(),
                I = !1,
                l()
            }
        }
    }
    function cc(e) {
        let n, i, I, l = "all" === e[0] || e[7].includes("TEXT") || e[7].includes("RECT"), c = e[8], o = [];
        for (let t = 0; t < c.length; t += 1)
            o[t] = ql(Vl(e, c, t));
        let g = l && tc(e)
          , a = e[6].modules && function(t) {
            let e, n, i, I = t[2], l = [];
            for (let e = 0; e < I.length; e += 1)
                l[e] = lc(Jl(t, I, e));
            return {
                c() {
                    e = A("div"),
                    e.textContent = "Module",
                    n = b();
                    for (let t = 0; t < l.length; t += 1)
                        l[t].c();
                    i = Z(),
                    v(e, "background-color", "lightgrey")
                },
                m(t, I) {
                    s(t, e, I),
                    s(t, n, I);
                    for (let e = 0; e < l.length; e += 1)
                        l[e] && l[e].m(t, I);
                    s(t, i, I)
                },
                p(t, e) {
                    if (62 & e) {
                        let n;
                        for (I = t[2],
                        n = 0; n < I.length; n += 1) {
                            const c = Jl(t, I, n);
                            l[n] ? l[n].p(c, e) : (l[n] = lc(c),
                            l[n].c(),
                            l[n].m(i.parentNode, i))
                        }
                        for (; n < l.length; n += 1)
                            l[n].d(1);
                        l.length = I.length
                    }
                },
                d(t) {
                    t && p(e),
                    t && p(n),
                    C(l, t),
                    t && p(i)
                }
            }
        }(e);
        return {
            c() {
                n = A("div");
                for (let t = 0; t < o.length; t += 1)
                    o[t].c();
                i = b(),
                g && g.c(),
                I = b(),
                a && a.c(),
                v(n, "border", "2px solid lightgrey"),
                v(n, "padding", "5px"),
                v(n, "margin", "5px"),
                v(n, "user-select", "none"),
                v(n, "overflow-y", "auto")
            },
            m(t, e) {
                s(t, n, e);
                for (let t = 0; t < o.length; t += 1)
                    o[t] && o[t].m(n, null);
                d(n, i),
                g && g.m(n, null),
                d(n, I),
                a && a.m(n, null)
            },
            p(t, [e]) {
                if (792 & e) {
                    let I;
                    for (c = t[8],
                    I = 0; I < c.length; I += 1) {
                        const l = Vl(t, c, I);
                        o[I] ? o[I].p(l, e) : (o[I] = ql(l),
                        o[I].c(),
                        o[I].m(n, i))
                    }
                    for (; I < o.length; I += 1)
                        o[I].d(1);
                    o.length = c.length
                }
                1 & e && (l = "all" === t[0] || t[7].includes("TEXT") || t[7].includes("RECT")),
                l ? g ? g.p(t, e) : (g = tc(t),
                g.c(),
                g.m(n, I)) : g && (g.d(1),
                g = null),
                t[6].modules && a.p(t, e)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                C(o, t),
                g && g.d(),
                a && a.d()
            }
        }
    }
    function oc(t, e, n) {
        let i, I, l, c, o;
        const g = Ye();
        a(t, g, (t=>n(1, o = t)));
        const r = Nn();
        let {availableParts: u="all"} = e;
        const d = u.split(",")
          , s = "all" === u ? Zt : Mt(Zt, Vt((t=>e=>Object.assign(Object.assign({}, e), {
            partTypes: qt((e=>t.includes(e.toString())))(e.partTypes)
        }))(d)), qt((t=>t.partTypes.length > 0)));
        function p(t) {
            g.set(function(t, e) {
                return tn(t, (t=>{
                    t.uiState.editMode = pe.ADD_PART,
                    t.uiState.partTypeToAdd = e
                }
                ))
            }(o, t))
        }
        return t.$$set = t=>{
            "availableParts"in t && n(0, u = t.availableParts)
        }
        ,
        t.$$.update = ()=>{
            2 & t.$$.dirty && n(10, i = o.project),
            2 & t.$$.dirty && n(4, I = o.uiState.editMode),
            2 & t.$$.dirty && n(3, l = o.uiState),
            1024 & t.$$.dirty && n(2, c = Object.values(i.modules).filter((t=>t.id != i.activeModuleId)))
        }
        ,
        [u, o, c, l, I, g, r, d, s, p, i, t=>p(t), ()=>{
            g.set(function(t) {
                return tn(t, (t=>{
                    t.uiState.editMode = pe.ADD_TEXTFIELD
                }
                ))
            }(o))
        }
        , ()=>g.set(function(t) {
            return tn(t, (t=>{
                t.uiState.editMode = pe.ADD_RECT
            }
            ))
        }(o)), t=>g.set(function(t, e) {
            return tn(t, (t=>{
                const n = t.uiState;
                n.editMode = pe.ADD_PART,
                n.partTypeToAdd = lt.MODULE,
                n.moduleIdToAdd = e
            }
            ))
        }(o, t.id))]
    }
    class gc extends It {
        constructor(t) {
            super(),
            it(this, t, oc, cc, g, {
                availableParts: 0
            })
        }
    }
    function ac(t) {
        let e, n;
        function i(i) {
            n = t.getAttribute("title"),
            t.removeAttribute("title"),
            e = document.createElement("div"),
            e.textContent = n,
            e.style = `\n\t\t\tborder: 1px solid #ddd;\n\t\t\tbox-shadow: 1px 1px 1px #ddd;\n\t\t\tbackground: white;\n\t\t\tborder-radius: 4px;\n\t\t\tpadding: 4px;\n\t\t\tposition: absolute;\n\t\t\ttop: ${i.pageY + 20}px;\n\t\t\tleft: ${i.pageX + 20}px;\n\t\t\tz-index: 1001;\n\t\t`,
            document.body.appendChild(e)
        }
        function I(t) {
            e.style.left = `${t.pageX + 20}px`,
            e.style.top = `${t.pageY + 20}px`
        }
        function l() {
            document.body.removeChild(e),
            t.setAttribute("title", n)
        }
        return t.addEventListener("pointerover", i),
        t.addEventListener("pointerleave", l),
        t.addEventListener("pointermove", I),
        {
            destroy() {
                t.removeEventListener("pointerover", i),
                t.removeEventListener("pointerleave", l),
                t.removeEventListener("pointermove", I)
            }
        }
    }
    var rc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InNpbXVsYXRpb24uc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDMiDQogICAgIGlua3NjYXBlOmN4PSIyNy4zMTE5OTkiDQogICAgIGlua3NjYXBlOmN5PSIzOS4wNjc2NDkiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY2NjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0iTSAxLjMyMjkxNjcsMjUuMTM1NDE3IDI1LjEzNTQxNywxMy4yMjkxNjcgMS4zMjI5MTY3LDEuMzIyOTE2NyBaIg0KICAgICAgIGlkPSJwYXRoNDI5Ig0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjYyIgLz4NCiAgPC9nPg0KPC9zdmc+"
      , uc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImVkaXQuc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI0Ig0KICAgICBpbmtzY2FwZTpjeD0iMzQuMzc1Ig0KICAgICBpbmtzY2FwZTpjeT0iNjYuNDk5OTk5Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCIgLz4NCiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMiIgLz4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgZD0ibSA3Ljk3MjkyMjIsNC4xOTYwMjcyIDAuMDIxNTQsMTIuMjA4MTQzOCAyLjk3ODc2NjUsLTEuNzE5NzkyIDUuMjkxNjY3LDkuMTY1NDM2IDUuMDQwOTksLTIuOTEwNDE3IC01LjI5MTY2NywtOS4xNjU0MzYgMi45Nzg3NjYsLTEuNzE5NzkxIHoiDQogICAgICAgaWQ9InBhdGgyOTgiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIgLz4NCiAgPC9nPg0KPC9zdmc+"
      , dc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImRlbGV0ZS5zdmciDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIGlkPSJuYW1lZHZpZXc3Ig0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxLjAiDQogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIg0KICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIg0KICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiDQogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSINCiAgICAgc2hvd2dyaWQ9InRydWUiDQogICAgIGlua3NjYXBlOnpvb209IjQiDQogICAgIGlua3NjYXBlOmN4PSIyNS4zNzUiDQogICAgIGlua3NjYXBlOmN5PSI2LjUiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICBkPSJNIDEuMzIyOTE2NiwxLjMyMjkxNjYgMjUuMTM1NDE2LDI1LjEzNTQxNiINCiAgICAgICBpZD0icGF0aDM1MiIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgIGQ9Ik0gMjUuMTM1NDE2LDEuMzIyOTE2NiAxLjMyMjkxNjYsMjUuMTM1NDE2Ig0KICAgICAgIGlkPSJwYXRoMzU0IiAvPg0KICA8L2c+DQo8L3N2Zz4="
      , sc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9Im5ld0Nvbm5lY3Rpb25Qb2ludC5zdmciDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIGlkPSJuYW1lZHZpZXc3Ig0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxLjAiDQogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIg0KICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIg0KICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiDQogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSINCiAgICAgc2hvd2dyaWQ9InRydWUiDQogICAgIGlua3NjYXBlOnpvb209IjQiDQogICAgIGlua3NjYXBlOmN4PSItMTcuODc1Ig0KICAgICBpbmtzY2FwZTpjeT0iMjcuNSINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIj4NCiAgICA8aW5rc2NhcGU6Z3JpZA0KICAgICAgIHR5cGU9Inh5Z3JpZCINCiAgICAgICBpZD0iZ3JpZDI2MTAiIC8+DQogIDwvc29kaXBvZGk6bmFtZWR2aWV3Pg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczIiIC8+DQogIDxnDQogICAgIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIg0KICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIg0KICAgICBpZD0ibGF5ZXIxIj4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIg0KICAgICAgIGQ9Im0gMTMuMjI5MTY3LDUuODIwODI5OCAtMWUtNiw1LjI5MTY2NTIiDQogICAgICAgaWQ9InBhdGgzNjgzIg0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSINCiAgICAgICBkPSJtIDEwLjU4MzMzNCw4LjQ2NjY2MjUgNS4yOTE2NjUsMTBlLTciDQogICAgICAgaWQ9InBhdGgzNjgzLTIiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgIGQ9Ik0gMi42NDU4MzMzLDE4Ljc4NTQxNSBIIDIzLjgxMjUiDQogICAgICAgaWQ9InBhdGgyMDk0IiAvPg0KICAgIDxjaXJjbGUNCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICBpZD0icGF0aDIyMDIiDQogICAgICAgY3g9IjEzLjIyOTE2NyINCiAgICAgICBjeT0iMTguNzg1NDE2Ig0KICAgICAgIHI9IjIuNjQ1ODMzMyIgLz4NCiAgPC9nPg0KPC9zdmc+"
      , pc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InVuZG8uc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDMiDQogICAgIGlua3NjYXBlOmN4PSI0Ni43NTc0MzYiDQogICAgIGlua3NjYXBlOmN5PSI3MC4zNTcxMjUiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPGcNCiAgICAgICBpZD0iZzUxOSINCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9IjEuMzIxODU4Ig0KICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iMC4wMDAzNjA0MDU1NCINCiAgICAgICB0cmFuc2Zvcm09InJvdGF0ZSgxNzkuMzI1MSwxMy43NTg5NywxMy4yMzI5NzIpIj4NCiAgICAgIDxwYXRoDQogICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICAgIGlkPSJwYXRoMjg3Ig0KICAgICAgICAgc29kaXBvZGk6dHlwZT0iYXJjIg0KICAgICAgICAgc29kaXBvZGk6Y3g9IjEzLjIyOTE2NyINCiAgICAgICAgIHNvZGlwb2RpOmN5PSIxMy4yMjkxNjciDQogICAgICAgICBzb2RpcG9kaTpyeD0iOS4yNjA0MTciDQogICAgICAgICBzb2RpcG9kaTpyeT0iOS4yNjA0MTciDQogICAgICAgICBzb2RpcG9kaTpzdGFydD0iMCINCiAgICAgICAgIHNvZGlwb2RpOmVuZD0iNC43MTIzODkiDQogICAgICAgICBzb2RpcG9kaTphcmMtdHlwZT0iYXJjIg0KICAgICAgICAgZD0iTSAyMi40ODk1ODQsMTMuMjI5MTY3IEEgOS4yNjA0MTcsOS4yNjA0MTcgMCAwIDEgMTYuNzcyOTc1LDIxLjc4NDY3NyA5LjI2MDQxNyw5LjI2MDQxNyAwIDAgMSA2LjY4MTA2MzMsMTkuNzc3MjcxIDkuMjYwNDE3LDkuMjYwNDE3IDAgMCAxIDQuNjczNjU3Myw5LjY4NTM1ODcgOS4yNjA0MTcsOS4yNjA0MTcgMCAwIDEgMTMuMjI5MTY3LDMuOTY4NzUiDQogICAgICAgICBzb2RpcG9kaTpvcGVuPSJ0cnVlIiAvPg0KICAgICAgPHBhdGgNCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgICAgZD0ibSAyMi40ODk1ODMsMTAuNTgzMzMzIC0yLjY0NTgzMywyLjY0NTgzNCBoIDUuMjkxNjY3IGwgLTIuNjQ1ODM0LC0yLjY0NTgzNCINCiAgICAgICAgIGlkPSJwYXRoNDEyIg0KICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjIiAvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+"
      , Cc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InJlZG8uc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSIyLjgyODQyNzIiDQogICAgIGlua3NjYXBlOmN4PSI1My4yMDk3ODUiDQogICAgIGlua3NjYXBlOmN5PSI5Mi4yNzc0MzQiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPGcNCiAgICAgICBpZD0iZzUxOSINCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9Ii0xLjMyMTg1OCINCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9IjAuMDAwMzYwNTk5MjciDQogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk5MzA2MywwLjAxMTc3ODk1LDAuMDExNzc4OTUsLTAuOTk5OTMwNjMsLTEuMjEzMjUxNiwyNi4zMDI5NikiPg0KICAgICAgPHBhdGgNCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgICAgaWQ9InBhdGgyODciDQogICAgICAgICBzb2RpcG9kaTp0eXBlPSJhcmMiDQogICAgICAgICBzb2RpcG9kaTpjeD0iMTMuMjI5MTY3Ig0KICAgICAgICAgc29kaXBvZGk6Y3k9IjEzLjIyOTE2NyINCiAgICAgICAgIHNvZGlwb2RpOnJ4PSI5LjI2MDQxNyINCiAgICAgICAgIHNvZGlwb2RpOnJ5PSI5LjI2MDQxNyINCiAgICAgICAgIHNvZGlwb2RpOnN0YXJ0PSIwIg0KICAgICAgICAgc29kaXBvZGk6ZW5kPSI0LjcxMjM4OSINCiAgICAgICAgIHNvZGlwb2RpOmFyYy10eXBlPSJhcmMiDQogICAgICAgICBkPSJNIDIyLjQ4OTU4NCwxMy4yMjkxNjcgQSA5LjI2MDQxNyw5LjI2MDQxNyAwIDAgMSAxNi43NzI5NzUsMjEuNzg0Njc3IDkuMjYwNDE3LDkuMjYwNDE3IDAgMCAxIDYuNjgxMDYzMywxOS43NzcyNzEgOS4yNjA0MTcsOS4yNjA0MTcgMCAwIDEgNC42NzM2NTczLDkuNjg1MzU4NyA5LjI2MDQxNyw5LjI2MDQxNyAwIDAgMSAxMy4yMjkxNjcsMy45Njg3NSINCiAgICAgICAgIHNvZGlwb2RpOm9wZW49InRydWUiIC8+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJtIDIyLjQ4OTU4MywxMC41ODMzMzMgLTIuNjQ1ODMzLDIuNjQ1ODM0IGggNS4yOTE2NjcgbCAtMi42NDU4MzQsLTIuNjQ1ODM0Ig0KICAgICAgICAgaWQ9InBhdGg0MTIiDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4="
      , Ac = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InNhdmUuc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDQiDQogICAgIGlua3NjYXBlOmN4PSIzNS45NzQwNTciDQogICAgIGlua3NjYXBlOmN5PSI1OS4wNDM0MTUiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICBkPSJtIDEuMzIyOTE2NiwxOS44NDM3NSB2IDUuMjkxNjY2IEggMjUuMTM1NDE2IFYgMTkuODQzNzUiDQogICAgICAgaWQ9InBhdGgzMDAiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICBkPSJtIDEzLjIyOTE2NywxLjMyMjkxNjcgLTFlLTYsMTguNTIwODMzMyINCiAgICAgICBpZD0icGF0aDMwMiINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgZD0ibSAxMy4yMjkxNjcsMjAuMTA4MzMyIDUuMjkxNjY2LC01LjI5MTY2NiINCiAgICAgICBpZD0icGF0aDMwNCIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgIGQ9Ik0gMTMuMjI5MTY3LDIwLjEwODMzMyA3LjkzNzUwMDQsMTQuODE2NjY3Ig0KICAgICAgIGlkPSJwYXRoMzA0LTYiIC8+DQogIDwvZz4NCjwvc3ZnPg=="
      , mc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InNhdmVBcy5zdmciDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIGlkPSJuYW1lZHZpZXc3Ig0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxLjAiDQogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIg0KICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIg0KICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiDQogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSINCiAgICAgc2hvd2dyaWQ9InRydWUiDQogICAgIGlua3NjYXBlOnpvb209IjguMDAwMDAwMiINCiAgICAgaW5rc2NhcGU6Y3g9IjU1LjU2MjQ5OSINCiAgICAgaW5rc2NhcGU6Y3k9IjQ5Ljg3NDk5OSINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIj4NCiAgICA8aW5rc2NhcGU6Z3JpZA0KICAgICAgIHR5cGU9Inh5Z3JpZCINCiAgICAgICBpZD0iZ3JpZDI2MTAiIC8+DQogIDwvc29kaXBvZGk6bmFtZWR2aWV3Pg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczIiIC8+DQogIDxnDQogICAgIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIg0KICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIg0KICAgICBpZD0ibGF5ZXIxIj4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgIGQ9Im0gMS4zMjI5MTY2LDE5Ljg0Mzc1IHYgNS4yOTE2NjYgSCAyNS4xMzU0MTYgViAxOS44NDM3NSINCiAgICAgICBpZD0icGF0aDMwMCIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgIGQ9Im0gOS4yNjA0MTcsMS4zMjI5MTY5IC0zZS03LDE4LjUyMDgzMzEiDQogICAgICAgaWQ9InBhdGgzMDIiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgIGQ9Im0gOS4yNjA0MTcsMjAuMTA4MzMyIDUuMjkxNjY2LC01LjI5MTY2NiINCiAgICAgICBpZD0icGF0aDMwNCIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgIGQ9Ik0gOS4yNjA0MTcsMjAuMTA4MzMzIDMuOTY4NzUwNywxNC44MTY2NjciDQogICAgICAgaWQ9InBhdGgzMDQtNiIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0iTSAyMS40MTgzNTcsMTYuNzYwMzU4IDI1LjE4NDcxNCwyLjcwNDEyNDggMjEuNjA2NzYzLDEuNzQ1NDE1OCAxNy44NDA0MSwxNS44MDE2NDkgbCAwLjg5ODc0MywzLjgwMTczNiAyLjY3OTIwNCwtMi44NDMwMjciDQogICAgICAgaWQ9InBhdGgzOTEiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2MiIC8+DQogIDwvZz4NCjwvc3ZnPg=="
      , Nc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxvYWQuc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDQiDQogICAgIGlua3NjYXBlOmN4PSIyOS42MTAwOTYiDQogICAgIGlua3NjYXBlOmN5PSI1OS4yMjAxOTEiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICBkPSJtIDEuMzIyOTE2NiwxOS44NDM3NSB2IDUuMjkxNjY2IEggMjUuMTM1NDE2IFYgMTkuODQzNzUiDQogICAgICAgaWQ9InBhdGgzMDAiIC8+DQogICAgPGcNCiAgICAgICBpZD0iZzI0MSINCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwwLDIxLjQzMTI1KSI+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJtIDEzLjIyOTE2NywxLjMyMjkxNjcgLTFlLTYsMTguNTIwODMzMyINCiAgICAgICAgIGlkPSJwYXRoMzAyIg0KICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4NCiAgICAgIDxwYXRoDQogICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICAgIGQ9Im0gMTMuMjI5MTY3LDIwLjEwODMzMiA1LjI5MTY2NiwtNS4yOTE2NjYiDQogICAgICAgICBpZD0icGF0aDMwNCIgLz4NCiAgICAgIDxwYXRoDQogICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICAgIGQ9Ik0gMTMuMjI5MTY3LDIwLjEwODMzMyA3LjkzNzUwMDQsMTQuODE2NjY3Ig0KICAgICAgICAgaWQ9InBhdGgzMDQtNiIgLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg=="
      , bc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9Imljb25FeHBvcnRTVkcuc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI4LjAwMDAwMDIiDQogICAgIGlua3NjYXBlOmN4PSI1Ny4zMTI0OTkiDQogICAgIGlua3NjYXBlOmN5PSIzNC4wNjI0OTkiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii05Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTkiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3RvcC1jb2xvcjojMDAwMDAwIg0KICAgICAgIGQ9Im0gMi42NDU4MzMzLDkuMjYwNDE2NyAwLDE0LjU1MjA4MzMgSCAyMy44MTI1IGwgMCwtMTQuNTUyMDgzMyBjIC03LjA1NTU1NiwwIC0xNC4xMTExMTExLDAgLTIxLjE2NjY2NjcsMCB6Ig0KICAgICAgIGlkPSJwYXRoMTk3NCINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjIiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0b3AtY29sb3I6IzAwMDAwMCINCiAgICAgICBkPSJNIDcuOTM3NSw5LjI2MDQxNjcgOC43MzEyNSw0Ljc2MjUgaCA4Ljk5NTgzMyBsIDAuNzkzNzUsNC40OTc5MTY3Ig0KICAgICAgIGlkPSJwYXRoMjgwNCINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+DQogICAgPGNpcmNsZQ0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdG9wLWNvbG9yOiMwMDAwMDAiDQogICAgICAgaWQ9InBhdGgzNTg0Ig0KICAgICAgIGN4PSIxMy4yMjkxNjciDQogICAgICAgY3k9IjE2LjQwNDE2NyINCiAgICAgICByPSIzLjUyOTE2NjciIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3RvcC1jb2xvcjojMDAwMDAwIg0KICAgICAgIGQ9Im0gMTguNTIwODMzLDEyLjQzNTQxNyBoIDIuNjQ1ODMzIg0KICAgICAgIGlkPSJwYXRoNTA4MyIgLz4NCiAgPC9nPg0KPC9zdmc+"
      , Zc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImltcG9ydE1vZHVsZXMuc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI4LjAwMDAwMDIiDQogICAgIGlua3NjYXBlOmN4PSI1MS4wNjI0OTkiDQogICAgIGlua3NjYXBlOmN5PSI0Ni4zNzQ5OTkiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICBkPSJtIDEuMzIyOTE2NiwxOS44NDM3NSB2IDUuMjkxNjY2IEggMjUuMTM1NDE2IFYgMTkuODQzNzUiDQogICAgICAgaWQ9InBhdGgzMDAiIC8+DQogICAgPGcNCiAgICAgICBpZD0iZzQwMiINCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwwLDIxLjQzMTI1KSI+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJtIDkuMjYwNDE3LDEuMzIyOTE2OSAtM2UtNywxOC41MjA4MzMxIg0KICAgICAgICAgaWQ9InBhdGgzMDIiDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICAgICAgPHBhdGgNCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgICAgZD0ibSA5LjI2MDQxNywyMC4xMDgzMzIgNS4yOTE2NjYsLTUuMjkxNjY2Ig0KICAgICAgICAgaWQ9InBhdGgzMDQiIC8+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJNIDkuMjYwNDE3LDIwLjEwODMzMyAzLjk2ODc1MDcsMTQuODE2NjY3Ig0KICAgICAgICAgaWQ9InBhdGgzMDQtNiIgLz4NCiAgICA8L2c+DQogICAgPHRleHQNCiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIg0KICAgICAgIHN0eWxlPSJmb250LXNpemU6MTQuMTExMXB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtzdHJva2Utd2lkdGg6MC4yNjQ1ODMiDQogICAgICAgeD0iMTUuMjQ2NjE0Ig0KICAgICAgIHk9IjE3Ljc5MzIzIg0KICAgICAgIGlkPSJ0ZXh0MzQ3Ij48dHNwYW4NCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiDQogICAgICAgICBpZD0idHNwYW4zNDUiDQogICAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpib2xkO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjE0LjExMTFweDtmb250LWZhbWlseTpBcmlhbDstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidBcmlhbCBCb2xkJztzdHJva2Utd2lkdGg6MC4yNjQ1ODMiDQogICAgICAgICB4PSIxNS4yNDY2MTQiDQogICAgICAgICB5PSIxNy43OTMyMyI+TTwvdHNwYW4+PC90ZXh0Pg0KICA8L2c+DQo8L3N2Zz4=";
    function yc(t) {
        var e = document.createElement("a");
        return e.download = t.project.fileName + ".json",
        e.href = "data:text/plain;charset=utf-8," + JSON.stringify(t.project),
        e.click(),
        tn(t, (e=>{
            e.lastSavedProject = qe.castDraft(t.project)
        }
        ))
    }
    function Dc(t, e) {
        const n = Ce(JSON.parse(e));
        return tn(t, (t=>{
            t.uiState.editMode = pe.NEUTRAL,
            yn(t.uiState),
            t.project = qe.castDraft(n),
            nn(t),
            In(t),
            en(t)
        }
        ))
    }
    function Mc(t) {
        return tn(t, (t=>{
            t.dialogState.resumeSimulation.isOpen = !1
        }
        ))
    }
    function vc(t) {
        return tn(t, (t=>{
            t.dialogState.importModules.isOpen1 = !1
        }
        ))
    }
    function hc(t) {
        return tn(t, (t=>{
            t.dialogState.importModules.isOpen2 = !1
        }
        ))
    }
    function jc(t) {
        return tn(t, (t=>{
            t.dialogState.saveAs.isOpen = !1
        }
        ))
    }
    function fc(t) {
        return tn(t, (t=>{
            t.dialogState.load.isOpen = !1
        }
        ))
    }
    function Gc(t) {
        return tn(t, (t=>{
            t.dialogState.newProject.isOpen = !1
        }
        ))
    }
    function Tc(t) {
        return tn(t, (t=>{
            t.uiState.editMode = pe.NEUTRAL,
            t.project = qe.castDraft(de),
            nn(t),
            In(t),
            en(t)
        }
        ))
    }
    function wc(t) {
        let e;
        return {
            c() {
                e = N("*")
            },
            m(t, n) {
                s(t, e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Wc(e) {
        let n, I, l, c, g, a, r, C, m, Z, j, f, G, T, w, W, z, S, O, Y, x, k, P, L, R, Q, B, U, $, E, X, F, H, J, V, K, _, q, tt, et = e[1].fileName + "", nt = e[5].showTopMenuElements.simulieren && function(t) {
            let e, n, I, l, c;
            return {
                c() {
                    e = A("button"),
                    n = A("img"),
                    v(n, "pointer-events", "none"),
                    D(n, "height", "30px"),
                    o(n.src, I = rc) || D(n, "src", I),
                    D(n, "alt", "icon simulieren"),
                    D(n, "class", "svelte-tmr7ze"),
                    D(e, "class", "dsimweb-iconButton svelte-tmr7ze"),
                    D(e, "title", "simulieren"),
                    h(e, "selected", t[0] === pe.SIMULATION_RUNNING || t[0] === pe.SIMULATION_PAUSED)
                },
                m(i, I) {
                    s(i, e, I),
                    d(e, n),
                    l || (c = [u(ac.call(null, e)), y(e, "click", t[8])],
                    l = !0)
                },
                p(t, n) {
                    1 & n && h(e, "selected", t[0] === pe.SIMULATION_RUNNING || t[0] === pe.SIMULATION_PAUSED)
                },
                d(t) {
                    t && p(e),
                    l = !1,
                    i(c)
                }
            }
        }(e), it = e[5].showTopMenuElements.editModeNeutral && function(t) {
            let e, n, I, l, c;
            return {
                c() {
                    e = A("button"),
                    n = A("img"),
                    v(n, "pointer-events", "none"),
                    D(n, "height", "30px"),
                    o(n.src, I = uc) || D(n, "src", I),
                    D(n, "alt", "icon bearbeiten"),
                    D(n, "class", "svelte-tmr7ze"),
                    D(e, "class", "dsimweb-iconButton svelte-tmr7ze"),
                    D(e, "title", "bearbeiten"),
                    h(e, "selected", t[0] === pe.NEUTRAL || t[0] === pe.DRAGGING_PART || t[0] === pe.DRAGGING_POINT || t[0] === pe.ADD_CONNECTION)
                },
                m(i, I) {
                    s(i, e, I),
                    d(e, n),
                    l || (c = [u(ac.call(null, e)), y(e, "click", t[7])],
                    l = !0)
                },
                p(t, n) {
                    1 & n && h(e, "selected", t[0] === pe.NEUTRAL || t[0] === pe.DRAGGING_PART || t[0] === pe.DRAGGING_POINT || t[0] === pe.ADD_CONNECTION)
                },
                d(t) {
                    t && p(e),
                    l = !1,
                    i(c)
                }
            }
        }(e), It = e[5].showTopMenuElements.loeschen && function(t) {
            let e, n, I, l, c;
            return {
                c() {
                    e = A("button"),
                    n = A("img"),
                    v(n, "pointer-events", "none"),
                    D(n, "height", "30px"),
                    o(n.src, I = dc) || D(n, "src", I),
                    D(n, "alt", "icon löschen"),
                    D(n, "class", "svelte-tmr7ze"),
                    D(e, "class", "dsimweb-iconButton svelte-tmr7ze"),
                    D(e, "title", "löschen"),
                    h(e, "selected", t[0] === pe.DELETE)
                },
                m(i, I) {
                    s(i, e, I),
                    d(e, n),
                    l || (c = [u(ac.call(null, e)), y(e, "click", t[10])],
                    l = !0)
                },
                p(t, n) {
                    1 & n && h(e, "selected", t[0] === pe.DELETE)
                },
                d(t) {
                    t && p(e),
                    l = !1,
                    i(c)
                }
            }
        }(e), lt = e[5].showTopMenuElements.knotenEinfuegen && function(t) {
            let e, n, I, l, c;
            return {
                c() {
                    e = A("button"),
                    n = A("img"),
                    v(n, "pointer-events", "none"),
                    D(n, "height", "30px"),
                    o(n.src, I = sc) || D(n, "src", I),
                    D(n, "alt", "icon Knoten einfügen"),
                    D(n, "class", "svelte-tmr7ze"),
                    D(e, "class", "dsimweb-iconButton svelte-tmr7ze"),
                    D(e, "title", "Ecke einfügen"),
                    h(e, "selected", t[0] === pe.ADD_POINT)
                },
                m(i, I) {
                    s(i, e, I),
                    d(e, n),
                    l || (c = [u(ac.call(null, e)), y(e, "click", t[11])],
                    l = !0)
                },
                p(t, n) {
                    1 & n && h(e, "selected", t[0] === pe.ADD_POINT)
                },
                d(t) {
                    t && p(e),
                    l = !1,
                    i(c)
                }
            }
        }(e), ct = e[5].showTopMenuElements.undo && function(e) {
            let n, I, l, c, g;
            return {
                c() {
                    n = A("button"),
                    I = A("img"),
                    v(I, "pointer-events", "none"),
                    D(I, "height", "30px"),
                    o(I.src, l = pc) || D(I, "src", l),
                    D(I, "alt", "icon rückgängig"),
                    D(I, "class", "svelte-tmr7ze"),
                    D(n, "class", "dsimweb-iconButton"),
                    D(n, "title", "Aktion rückgängig")
                },
                m(t, i) {
                    s(t, n, i),
                    d(n, I),
                    c || (g = [u(ac.call(null, n)), y(n, "click", e[13])],
                    c = !0)
                },
                p: t,
                d(t) {
                    t && p(n),
                    c = !1,
                    i(g)
                }
            }
        }(e), ot = e[5].showTopMenuElements.redo && function(e) {
            let n, I, l, c, g;
            return {
                c() {
                    n = A("button"),
                    I = A("img"),
                    v(I, "pointer-events", "none"),
                    D(I, "height", "30px"),
                    o(I.src, l = Cc) || D(I, "src", l),
                    D(I, "alt", "icon wiederherstellen"),
                    D(I, "class", "svelte-tmr7ze"),
                    D(n, "class", "dsimweb-iconButton"),
                    D(n, "title", "Aktion wiederherstellen")
                },
                m(t, i) {
                    s(t, n, i),
                    d(n, I),
                    c || (g = [u(ac.call(null, n)), y(n, "click", e[14])],
                    c = !0)
                },
                p: t,
                d(t) {
                    t && p(n),
                    c = !1,
                    i(g)
                }
            }
        }(e), gt = e[5].showTopMenuElements.speichern && function(e) {
            let n, I, l, c, g, a, r, C, m;
            return {
                c() {
                    n = A("button"),
                    I = A("img"),
                    c = b(),
                    g = A("button"),
                    a = A("img"),
                    v(I, "pointer-events", "none"),
                    D(I, "height", "30px"),
                    o(I.src, l = Ac) || D(I, "src", l),
                    D(I, "alt", "icon speichern"),
                    D(I, "class", "svelte-tmr7ze"),
                    D(n, "class", "dsimweb-iconButton"),
                    D(n, "title", "Projekt speichern"),
                    v(a, "pointer-events", "none"),
                    D(a, "height", "30px"),
                    o(a.src, r = mc) || D(a, "src", r),
                    D(a, "alt", "icon speichern als"),
                    D(a, "class", "svelte-tmr7ze"),
                    D(g, "class", "dsimweb-iconButton"),
                    D(g, "title", "Projekt speichern als")
                },
                m(t, i) {
                    s(t, n, i),
                    d(n, I),
                    s(t, c, i),
                    s(t, g, i),
                    d(g, a),
                    C || (m = [u(ac.call(null, n)), y(n, "click", e[9]), u(ac.call(null, g)), y(g, "click", e[16])],
                    C = !0)
                },
                p: t,
                d(t) {
                    t && p(n),
                    t && p(c),
                    t && p(g),
                    C = !1,
                    i(m)
                }
            }
        }(e), at = e[5].showTopMenuElements.laden && function(e) {
            let n, I, l, c, g;
            return {
                c() {
                    n = A("button"),
                    I = A("img"),
                    v(I, "pointer-events", "none"),
                    D(I, "height", "30px"),
                    o(I.src, l = Nc) || D(I, "src", l),
                    D(I, "alt", "icon speichern als"),
                    D(I, "class", "svelte-tmr7ze"),
                    D(n, "class", "dsimweb-iconButton"),
                    D(n, "title", "Projekt laden")
                },
                m(t, i) {
                    s(t, n, i),
                    d(n, I),
                    c || (g = [u(ac.call(null, n)), y(n, "click", e[12])],
                    c = !0)
                },
                p: t,
                d(t) {
                    t && p(n),
                    c = !1,
                    i(g)
                }
            }
        }(e), rt = e[5].modules && function(e) {
            let n, I, l, c, g;
            return {
                c() {
                    n = A("button"),
                    I = A("img"),
                    v(I, "pointer-events", "none"),
                    D(I, "height", "30px"),
                    o(I.src, l = Zc) || D(I, "src", l),
                    D(I, "alt", "icon Module importieren"),
                    D(I, "class", "svelte-tmr7ze"),
                    D(n, "class", "dsimweb-iconButton"),
                    D(n, "title", "Module importieren")
                },
                m(t, i) {
                    s(t, n, i),
                    d(n, I),
                    c || (g = [y(n, "click", e[15]), u(ac.call(null, n))],
                    c = !0)
                },
                p: t,
                d(t) {
                    t && p(n),
                    c = !1,
                    i(g)
                }
            }
        }(e), ut = e[5].screenShot && function(e) {
            let n, I, l, c, g;
            return {
                c() {
                    n = A("button"),
                    I = A("img"),
                    v(I, "pointer-events", "none"),
                    D(I, "height", "30px"),
                    o(I.src, l = bc) || D(I, "src", l),
                    D(I, "alt", "icon Screenshot"),
                    D(I, "class", "svelte-tmr7ze"),
                    D(n, "class", "dsimweb-iconButton"),
                    D(n, "title", "Screenshot")
                },
                m(t, i) {
                    s(t, n, i),
                    d(n, I),
                    c || (g = [y(n, "click", e[18]), u(ac.call(null, n))],
                    c = !0)
                },
                p: t,
                d(t) {
                    t && p(n),
                    c = !1,
                    i(g)
                }
            }
        }(e), dt = e[1] !== e[2] && wc();
        return {
            c() {
                n = A("div"),
                I = A("button"),
                l = A("img"),
                g = b(),
                a = A("span"),
                r = b(),
                nt && nt.c(),
                C = b(),
                m = A("span"),
                Z = b(),
                it && it.c(),
                j = b(),
                It && It.c(),
                f = b(),
                lt && lt.c(),
                G = b(),
                ct && ct.c(),
                T = b(),
                ot && ot.c(),
                w = b(),
                W = A("span"),
                z = b(),
                gt && gt.c(),
                S = b(),
                O = A("span"),
                Y = b(),
                at && at.c(),
                x = b(),
                rt && rt.c(),
                k = b(),
                P = A("span"),
                L = b(),
                ut && ut.c(),
                R = b(),
                Q = A("span"),
                B = b(),
                U = A("button"),
                $ = A("img"),
                X = b(),
                F = A("span"),
                H = b(),
                J = A("span"),
                V = N("Projektname:\r\n        "),
                K = N(et),
                _ = b(),
                dt && dt.c(),
                v(l, "pointer-events", "none"),
                D(l, "height", "30px"),
                o(l.src, c = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9Im5ld1Byb2plY3Quc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI4Ig0KICAgICBpbmtzY2FwZTpjeD0iNTMuNTYyNSINCiAgICAgaW5rc2NhcGU6Y3k9IjQ4LjUiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTY4MCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTg3Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMTkxMiINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjMxIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCIgLz4NCiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMiIgLz4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NjY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1taXRlcmxpbWl0OjQiDQogICAgICAgZD0iTSA1LjI5MTY2NjcsMi42NDU4MzMzIEggMTcuMTk3OTE3IGwgMy45Njg3NSwzLjk2ODc0OTkgViAyMy44MTI1IEggNS4yOTE2NjY3IFoiDQogICAgICAgaWQ9InBhdGgyOTU1Ig0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjIiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2Njk5NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxNC41NTIwODQsMTQuNTUyMDgzIC0xZS02LDUuMjkxNjY2Ig0KICAgICAgIGlkPSJwYXRoMzY4MyINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2Njk5NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxMS45MDYyNTEsMTcuMTk3OTE2IDUuMjkxNjY1LDFlLTYiDQogICAgICAgaWQ9InBhdGgzNjgzLTIiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4NCiAgPC9nPg0KPC9zdmc+") || D(l, "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9Im5ld1Byb2plY3Quc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI4Ig0KICAgICBpbmtzY2FwZTpjeD0iNTMuNTYyNSINCiAgICAgaW5rc2NhcGU6Y3k9IjQ4LjUiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTY4MCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTg3Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMTkxMiINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjMxIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCIgLz4NCiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMiIgLz4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NjY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1taXRlcmxpbWl0OjQiDQogICAgICAgZD0iTSA1LjI5MTY2NjcsMi42NDU4MzMzIEggMTcuMTk3OTE3IGwgMy45Njg3NSwzLjk2ODc0OTkgViAyMy44MTI1IEggNS4yOTE2NjY3IFoiDQogICAgICAgaWQ9InBhdGgyOTU1Ig0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjIiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2Njk5NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxNC41NTIwODQsMTQuNTUyMDgzIC0xZS02LDUuMjkxNjY2Ig0KICAgICAgIGlkPSJwYXRoMzY4MyINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2Njk5NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxMS45MDYyNTEsMTcuMTk3OTE2IDUuMjkxNjY1LDFlLTYiDQogICAgICAgaWQ9InBhdGgzNjgzLTIiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4NCiAgPC9nPg0KPC9zdmc+"),
                D(l, "alt", "icon neues Projekt"),
                D(l, "class", "svelte-tmr7ze"),
                D(I, "title", "neues Projekt"),
                D(I, "class", "dsimweb-iconButton"),
                v(a, "margin-right", "20px"),
                v(m, "margin-right", "20px"),
                v(W, "margin-right", "20px"),
                v(O, "margin-right", "20px"),
                v(P, "margin-right", "20px"),
                v(Q, "margin-right", "20px"),
                v($, "pointer-events", "none"),
                D($, "height", "30px"),
                o($.src, E = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImZ1bGxzY3JlZW4uc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDIiDQogICAgIGlua3NjYXBlOmN4PSI3MS4xNTI2MiINCiAgICAgaW5rc2NhcGU6Y3k9IjM4LjcxNDA5NyINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIj4NCiAgICA8aW5rc2NhcGU6Z3JpZA0KICAgICAgIHR5cGU9Inh5Z3JpZCINCiAgICAgICBpZD0iZ3JpZDI2MTAiIC8+DQogIDwvc29kaXBvZGk6bmFtZWR2aWV3Pg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczIiIC8+DQogIDxnDQogICAgIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIg0KICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIg0KICAgICBpZD0ibGF5ZXIxIj4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTg3NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIg0KICAgICAgIGQ9Ik0gMS4zMjI5MTY2LDEuMzIyOTE2NiBWIDI1LjEzNTQxNiBIIDI1LjEzNTQxNiBWIDEuMzIyOTE2NiBaIg0KICAgICAgIGlkPSJwYXRoMzAwIiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41ODc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAzLjk2ODc1LDE1Ljg3NSB2IDYuNjE0NTgzIGwgNi42MTQ1ODMsMCBWIDE1Ljg3NSBsIC02LjYxNDU4MywwIg0KICAgICAgIGlkPSJwYXRoMzAyIg0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjMyMjkyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxMy4yMjkxNjcsMTMuMjI5MTY4IDcuOTM3NSwtNy45Mzc1MDEzIg0KICAgICAgIGlkPSJwYXRoMzA0Ig0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjMyMjkyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxNy4xOTc5MTcsNS4yOTE2NjY3IGggMy45Njg3NSB2IDMuOTY4NzUiDQogICAgICAgaWQ9InBhdGgzMDYiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjMyMjkyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxMy4yMjkxNjcsOS4yNjA0MTYxIHYgMy45Njg3NTA5IGggMy45Njg3NSINCiAgICAgICBpZD0icGF0aDMwOCINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjYyIgLz4NCiAgPC9nPg0KPC9zdmc+") || D($, "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImZ1bGxzY3JlZW4uc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDIiDQogICAgIGlua3NjYXBlOmN4PSI3MS4xNTI2MiINCiAgICAgaW5rc2NhcGU6Y3k9IjM4LjcxNDA5NyINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIj4NCiAgICA8aW5rc2NhcGU6Z3JpZA0KICAgICAgIHR5cGU9Inh5Z3JpZCINCiAgICAgICBpZD0iZ3JpZDI2MTAiIC8+DQogIDwvc29kaXBvZGk6bmFtZWR2aWV3Pg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczIiIC8+DQogIDxnDQogICAgIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIg0KICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIg0KICAgICBpZD0ibGF5ZXIxIj4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTg3NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIg0KICAgICAgIGQ9Ik0gMS4zMjI5MTY2LDEuMzIyOTE2NiBWIDI1LjEzNTQxNiBIIDI1LjEzNTQxNiBWIDEuMzIyOTE2NiBaIg0KICAgICAgIGlkPSJwYXRoMzAwIiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41ODc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAzLjk2ODc1LDE1Ljg3NSB2IDYuNjE0NTgzIGwgNi42MTQ1ODMsMCBWIDE1Ljg3NSBsIC02LjYxNDU4MywwIg0KICAgICAgIGlkPSJwYXRoMzAyIg0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjMyMjkyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxMy4yMjkxNjcsMTMuMjI5MTY4IDcuOTM3NSwtNy45Mzc1MDEzIg0KICAgICAgIGlkPSJwYXRoMzA0Ig0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjMyMjkyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxNy4xOTc5MTcsNS4yOTE2NjY3IGggMy45Njg3NSB2IDMuOTY4NzUiDQogICAgICAgaWQ9InBhdGgzMDYiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjMyMjkyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxMy4yMjkxNjcsOS4yNjA0MTYxIHYgMy45Njg3NTA5IGggMy45Njg3NSINCiAgICAgICBpZD0icGF0aDMwOCINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjYyIgLz4NCiAgPC9nPg0KPC9zdmc+"),
                D($, "alt", "icon Vollbild umschalten"),
                D($, "class", "svelte-tmr7ze"),
                D(U, "class", "dsimweb-iconButton"),
                D(U, "title", "Vollbild umschalten"),
                v(F, "margin-right", "20px"),
                v(J, "white-space", "nowrap"),
                v(n, "border", "2px solid lightgrey"),
                v(n, "padding", "5px"),
                v(n, "margin", "5px"),
                v(n, "flex", "none")
            },
            m(t, i) {
                s(t, n, i),
                d(n, I),
                d(I, l),
                d(n, g),
                d(n, a),
                d(n, r),
                nt && nt.m(n, null),
                d(n, C),
                d(n, m),
                d(n, Z),
                it && it.m(n, null),
                d(n, j),
                It && It.m(n, null),
                d(n, f),
                lt && lt.m(n, null),
                d(n, G),
                ct && ct.m(n, null),
                d(n, T),
                ot && ot.m(n, null),
                d(n, w),
                d(n, W),
                d(n, z),
                gt && gt.m(n, null),
                d(n, S),
                d(n, O),
                d(n, Y),
                at && at.m(n, null),
                d(n, x),
                rt && rt.m(n, null),
                d(n, k),
                d(n, P),
                d(n, L),
                ut && ut.m(n, null),
                d(n, R),
                d(n, Q),
                d(n, B),
                d(n, U),
                d(U, $),
                d(n, X),
                d(n, F),
                d(n, H),
                d(n, J),
                d(J, V),
                d(J, K),
                d(J, _),
                dt && dt.m(J, null),
                q || (tt = [u(ac.call(null, I)), y(I, "click", e[6]), y(U, "click", e[17]), u(ac.call(null, U))],
                q = !0)
            },
            p(t, [e]) {
                t[5].showTopMenuElements.simulieren && nt.p(t, e),
                t[5].showTopMenuElements.editModeNeutral && it.p(t, e),
                t[5].showTopMenuElements.loeschen && It.p(t, e),
                t[5].showTopMenuElements.knotenEinfuegen && lt.p(t, e),
                t[5].showTopMenuElements.undo && ct.p(t, e),
                t[5].showTopMenuElements.redo && ot.p(t, e),
                t[5].showTopMenuElements.speichern && gt.p(t, e),
                t[5].showTopMenuElements.laden && at.p(t, e),
                t[5].modules && rt.p(t, e),
                t[5].screenShot && ut.p(t, e),
                2 & e && et !== (et = t[1].fileName + "") && M(K, et),
                t[1] !== t[2] ? dt || (dt = wc(),
                dt.c(),
                dt.m(J, null)) : dt && (dt.d(1),
                dt = null)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                nt && nt.d(),
                it && it.d(),
                It && It.d(),
                lt && lt.d(),
                ct && ct.d(),
                ot && ot.d(),
                gt && gt.d(),
                at && at.d(),
                rt && rt.d(),
                ut && ut.d(),
                dt && dt.d(),
                q = !1,
                i(tt)
            }
        }
    }
    function zc(t, e, n) {
        let i, I, l, c;
        const o = w()
          , g = Ye();
        a(t, g, (t=>n(19, l = t)));
        const r = Se();
        a(t, r, (t=>n(2, c = t)));
        const u = Nn();
        return t.$$.update = ()=>{
            524288 & t.$$.dirty && n(0, i = l.uiState.editMode),
            524288 & t.$$.dirty && n(1, I = l.project)
        }
        ,
        [i, I, c, g, r, u, function() {
            I !== c ? g.set(function(t) {
                return tn(t, (t=>{
                    t.dialogState.newProject.isOpen = !0
                }
                ))
            }(l)) : g.set(Tc(l))
        }
        , function() {
            g.set(Un(l))
        }
        , function() {
            i === pe.SIMULATION_RUNNING || i === pe.SIMULATION_PAUSED ? g.set($I(l)) : (g.set(Mi(l)),
            g.set(UI(l, u.maxNumOfSimSteps, g)))
        }
        , function() {
            g.set(yc(l))
        }
        , function() {
            i === pe.DELETE ? g.set(Un(l)) : g.set(function(t) {
                return tn(t, (t=>{
                    t.uiState.editMode = pe.DELETE
                }
                ))
            }(l))
        }
        , function() {
            i === pe.ADD_POINT ? g.set(Un(l)) : g.set(function(t) {
                return tn(t, (t=>{
                    t.uiState.editMode = pe.ADD_POINT
                }
                ))
            }(l))
        }
        , function() {
            g.set(function(t) {
                return tn(t, (t=>{
                    t.dialogState.load.isOpen = !0
                }
                ))
            }(l))
        }
        , function() {
            i !== pe.SIMULATION_RUNNING && i !== pe.SIMULATION_PAUSED && g.set(gn(l))
        }
        , function() {
            i !== pe.SIMULATION_RUNNING && i !== pe.SIMULATION_PAUSED && g.set(function(t) {
                return tn(t, (t=>{
                    if (t.redoStack.length >= 1) {
                        let e = t.redoStack.pop();
                        t.undoStack.push({
                            project: e
                        }),
                        t.project = e
                    }
                }
                ))
            }(l))
        }
        , function() {
            g.set(function(t) {
                return tn(t, (t=>{
                    t.dialogState.importModules.isOpen1 = !0
                }
                ))
            }(l))
        }
        , function() {
            g.set(function(t) {
                return tn(t, (t=>{
                    t.dialogState.saveAs.isOpen = !0
                }
                ))
            }(l))
        }
        , function() {
            g.set(function(t) {
                return tn(t, (t=>{
                    t.uiState.fullscreen = !t.uiState.fullscreen
                }
                ))
            }(l))
        }
        , function() {
            o("screenshot")
        }
        , l]
    }
    class Sc extends It {
        constructor(t) {
            super(),
            it(this, t, zc, Wc, g, {})
        }
    }
    function Oc(e) {
        let n, i, I, l, c, o, g, a, r, u, C, m, Z, y, D, h, j, f, G = e[2].scale + "", T = Math.round(e[2].translate.x) + "", w = Math.round(e[2].translate.y) + "", W = e[0].undoStack.length + "";
        return {
            c() {
                n = A("div"),
                i = A("span"),
                I = N("editMode: "),
                l = N(e[1]),
                c = b(),
                o = A("span"),
                g = N("scale: "),
                a = N(G),
                r = b(),
                u = A("span"),
                C = N("translate: "),
                m = N(T),
                Z = N(","),
                y = N(w),
                D = b(),
                h = A("span"),
                j = N("Undo Stack Länge: "),
                f = N(W),
                v(n, "flex", "none")
            },
            m(t, e) {
                s(t, n, e),
                d(n, i),
                d(i, I),
                d(i, l),
                d(n, c),
                d(n, o),
                d(o, g),
                d(o, a),
                d(n, r),
                d(n, u),
                d(u, C),
                d(u, m),
                d(u, Z),
                d(u, y),
                d(n, D),
                d(n, h),
                d(h, j),
                d(h, f)
            },
            p(t, [e]) {
                2 & e && M(l, t[1]),
                4 & e && G !== (G = t[2].scale + "") && M(a, G),
                4 & e && T !== (T = Math.round(t[2].translate.x) + "") && M(m, T),
                4 & e && w !== (w = Math.round(t[2].translate.y) + "") && M(y, w),
                1 & e && W !== (W = t[0].undoStack.length + "") && M(f, W)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n)
            }
        }
    }
    function Yc(t, e, n) {
        let i, I, l;
        const c = Ye();
        return a(t, c, (t=>n(0, l = t))),
        t.$$.update = ()=>{
            1 & t.$$.dirty && n(2, i = l.uiState),
            1 & t.$$.dirty && n(1, I = l.uiState.editMode)
        }
        ,
        [l, I, i, c]
    }
    class xc extends It {
        constructor(t) {
            super(),
            it(this, t, Yc, Oc, g, {})
        }
    }
    function kc(e) {
        let n, I, l, c, o, g, a, r, u, C, m, N, Z, M, h, j, f;
        return {
            c() {
                n = A("div"),
                I = A("input"),
                c = b(),
                o = A("br"),
                g = b(),
                a = A("button"),
                a.textContent = "∧",
                r = b(),
                u = A("button"),
                u.textContent = "∨",
                C = b(),
                m = A("button"),
                m.textContent = "¬",
                N = b(),
                Z = A("br"),
                M = b(),
                h = A("button"),
                h.textContent = "‾",
                D(I, "type", "text"),
                I.value = l = e[1].text,
                v(n, "border", "2px solid lightgrey"),
                v(n, "padding", "5px"),
                v(n, "margin", "5px")
            },
            m(t, i) {
                s(t, n, i),
                d(n, I),
                e[10](I),
                d(n, c),
                d(n, o),
                d(n, g),
                d(n, a),
                d(n, r),
                d(n, u),
                d(n, C),
                d(n, m),
                d(n, N),
                d(n, Z),
                d(n, M),
                d(n, h),
                j || (f = [y(I, "input", e[3]), y(a, "click", e[4]), y(u, "click", e[5]), y(m, "click", e[6]), y(h, "click", e[7])],
                j = !0)
            },
            p(t, [e]) {
                2 & e && l !== (l = t[1].text) && I.value !== l && (I.value = l)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                e[10](null),
                j = !1,
                i(f)
            }
        }
    }
    function Pc(t, e, n) {
        let i, I;
        const l = Ye();
        let c;
        a(t, l, (t=>n(9, I = t)));
        let o = 0
          , g = 0;
        !function(t) {
            G().$$.before_update.push(t)
        }((()=>{
            c && ({selectionStart: o, selectionEnd: g} = c)
        }
        )),
        T((()=>{
            c.setSelectionRange(o, g),
            c.focus()
        }
        ));
        let {id: r=""} = e;
        function u(t) {
            const e = c.selectionStart
              , i = c.selectionEnd
              , o = `${c.value.slice(0, e)}${t}${c.value.slice(i)}`;
            n(0, c.value = o, c),
            c.setSelectionRange(e + 1, e + 1),
            l.set(di(I, r, o))
        }
        return t.$$set = t=>{
            "id"in t && n(8, r = t.id)
        }
        ,
        t.$$.update = ()=>{
            768 & t.$$.dirty && n(1, i = I.project.modules[I.project.activeModuleId].textFields[r])
        }
        ,
        [c, i, l, function(t) {
            l.set(di(I, r, t.target.value))
        }
        , function() {
            u("∧")
        }
        , function() {
            u("∨")
        }
        , function() {
            u("¬")
        }
        , function() {
            const t = c.selectionStart
              , e = c.selectionEnd;
            if (t !== e) {
                const i = c.value.slice(t, e);
                if (i.includes("̅")) {
                    const o = i.replaceAll(/\u0305/g, "")
                      , g = `${c.value.slice(0, t)}${o}${c.value.slice(e)}`;
                    c.setSelectionRange(t, t),
                    n(0, c.value = g, c),
                    l.set(di(I, r, g))
                } else {
                    const o = i.replaceAll(/./g, (t=>t + "̅"))
                      , g = `${c.value.slice(0, t)}${o}${c.value.slice(e)}`;
                    c.setSelectionRange(t, t),
                    n(0, c.value = g, c),
                    l.set(di(I, r, g))
                }
            }
        }
        , r, I, function(t) {
            O[t ? "unshift" : "push"]((()=>{
                c = t,
                n(0, c)
            }
            ))
        }
        ]
    }
    class Lc extends It {
        constructor(t) {
            super(),
            it(this, t, Pc, kc, g, {
                id: 8
            })
        }
    }
    function Rc(e) {
        let n, i, I, l, c, o, g;
        return {
            c() {
                n = A("div"),
                i = A("div"),
                I = N("Füllung: "),
                l = A("input"),
                l.value = c = e[0].fill,
                v(n, "border", "2px solid lightgrey"),
                v(n, "padding", "5px"),
                v(n, "margin", "5px")
            },
            m(t, c) {
                s(t, n, c),
                d(n, i),
                d(i, I),
                d(i, l),
                o || (g = y(l, "input", e[2]),
                o = !0)
            },
            p(t, [e]) {
                1 & e && c !== (c = t[0].fill) && l.value !== c && (l.value = c)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                o = !1,
                g()
            }
        }
    }
    function Qc(t, e, n) {
        let i, I, l;
        const c = Ye();
        a(t, c, (t=>n(5, l = t)));
        let {id: o=""} = e;
        return t.$$set = t=>{
            "id"in t && n(3, o = t.id)
        }
        ,
        t.$$.update = ()=>{
            32 & t.$$.dirty && n(4, i = l.project),
            24 & t.$$.dirty && n(0, I = i.modules[i.activeModuleId].rects[o])
        }
        ,
        [I, c, function(t) {
            c.set(function(t, e, n) {
                return tn(t, (t=>{
                    t.project.modules[t.project.activeModuleId].rects[e].fill = n,
                    en(t, {
                        undoActionType: _e.RECT_CHANGE_FILL,
                        rectId: e
                    })
                }
                ))
            }(l, o, t.target.value))
        }
        , o, i, l]
    }
    class Bc extends It {
        constructor(t) {
            super(),
            it(this, t, Qc, Rc, g, {
                id: 3
            })
        }
    }
    function Uc(t, e, n) {
        const i = t.slice();
        i[14] = e[n],
        i[17] = n;
        const I = i[1].modules[i[1].activeModuleId].parts[i[14]].name;
        return i[15] = I,
        i
    }
    function $c(t, e, n) {
        const i = t.slice();
        i[18] = e[n],
        i[17] = n;
        const I = i[1].modules[i[1].activeModuleId].parts[i[18]].name;
        return i[19] = I,
        i
    }
    function Ec(t, e, n) {
        const i = t.slice();
        return i[21] = e[n][0],
        i[22] = e[n][1],
        i
    }
    function Xc(t) {
        let e;
        return {
            c() {
                e = N("MODUL OHNE NAME")
            },
            m(t, n) {
                s(t, e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Fc(t) {
        let e, n = t[22].name + "";
        return {
            c() {
                e = N(n)
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, i) {
                2 & i && n !== (n = t[22].name + "") && M(e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Hc(t, e) {
        let n, i, I, l, c = 0 === e[22].name.length && Xc(), o = e[22].name.length > 0 && Fc(e);
        function g() {
            return e[5](e[21])
        }
        return {
            key: t,
            first: null,
            c() {
                n = A("div"),
                c && c.c(),
                i = b(),
                o && o.c(),
                D(n, "class", "svelte-z6rthh"),
                h(n, "selected", e[1].activeModuleId === e[21]),
                this.first = n
            },
            m(t, e) {
                s(t, n, e),
                c && c.m(n, null),
                d(n, i),
                o && o.m(n, null),
                I || (l = y(n, "click", g),
                I = !0)
            },
            p(t, I) {
                0 === (e = t)[22].name.length ? c || (c = Xc(),
                c.c(),
                c.m(n, i)) : c && (c.d(1),
                c = null),
                e[22].name.length > 0 ? o ? o.p(e, I) : (o = Fc(e),
                o.c(),
                o.m(n, null)) : o && (o.d(1),
                o = null),
                2 & I && h(n, "selected", e[1].activeModuleId === e[21])
            },
            d(t) {
                t && p(n),
                c && c.d(),
                o && o.d(),
                I = !1,
                l()
            }
        }
    }
    function Jc(t) {
        let e, n, i;
        function I() {
            return t[9](t[18])
        }
        return {
            c() {
                e = A("button"),
                e.textContent = "⇓",
                D(e, "class", "dsimweb-button")
            },
            m(t, l) {
                s(t, e, l),
                n || (i = y(e, "click", I),
                n = !0)
            },
            p(e, n) {
                t = e
            },
            d(t) {
                t && p(e),
                n = !1,
                i()
            }
        }
    }
    function Vc(t) {
        let e;
        return {
            c() {
                e = N("EINGANG OHNE NAME")
            },
            m(t, n) {
                s(t, e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Kc(t) {
        let e, n = t[19] + "";
        return {
            c() {
                e = N(n)
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, i) {
                2 & i && n !== (n = t[19] + "") && M(e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function _c(t) {
        let e, n, i, I, l, c, o, g, a = t[17] > 0 && function(t) {
            let e, n, i;
            function I() {
                return t[8](t[18])
            }
            return {
                c() {
                    e = A("button"),
                    e.textContent = "⇑",
                    D(e, "class", "dsimweb-button")
                },
                m(t, l) {
                    s(t, e, l),
                    n || (i = y(e, "click", I),
                    n = !0)
                },
                p(e, n) {
                    t = e
                },
                d(t) {
                    t && p(e),
                    n = !1,
                    i()
                }
            }
        }(t), r = t[17] < t[1].modules[t[1].activeModuleId].inputIds.length - 1 && Jc(t), u = 0 === t[19].length && Vc(), C = t[19].length > 0 && Kc(t);
        function m() {
            return t[10](t[18])
        }
        return {
            c() {
                e = A("div"),
                a && a.c(),
                n = b(),
                r && r.c(),
                i = b(),
                I = A("span"),
                u && u.c(),
                l = b(),
                C && C.c(),
                c = b()
            },
            m(t, p) {
                s(t, e, p),
                a && a.m(e, null),
                d(e, n),
                r && r.m(e, null),
                d(e, i),
                d(e, I),
                u && u.m(I, null),
                d(I, l),
                C && C.m(I, null),
                d(e, c),
                o || (g = y(I, "click", m),
                o = !0)
            },
            p(n, c) {
                (t = n)[17] > 0 && a.p(t, c),
                t[17] < t[1].modules[t[1].activeModuleId].inputIds.length - 1 ? r ? r.p(t, c) : (r = Jc(t),
                r.c(),
                r.m(e, i)) : r && (r.d(1),
                r = null),
                0 === t[19].length ? u || (u = Vc(),
                u.c(),
                u.m(I, l)) : u && (u.d(1),
                u = null),
                t[19].length > 0 ? C ? C.p(t, c) : (C = Kc(t),
                C.c(),
                C.m(I, null)) : C && (C.d(1),
                C = null)
            },
            d(t) {
                t && p(e),
                a && a.d(),
                r && r.d(),
                u && u.d(),
                C && C.d(),
                o = !1,
                g()
            }
        }
    }
    function qc(t) {
        let e, n, i;
        function I() {
            return t[12](t[14])
        }
        return {
            c() {
                e = A("button"),
                e.textContent = "⇓",
                D(e, "class", "dsimweb-button")
            },
            m(t, l) {
                s(t, e, l),
                n || (i = y(e, "click", I),
                n = !0)
            },
            p(e, n) {
                t = e
            },
            d(t) {
                t && p(e),
                n = !1,
                i()
            }
        }
    }
    function to(t) {
        let e;
        return {
            c() {
                e = N("AUSGANG OHNE NAME")
            },
            m(t, n) {
                s(t, e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function eo(t) {
        let e, n = t[15] + "";
        return {
            c() {
                e = N(n)
            },
            m(t, n) {
                s(t, e, n)
            },
            p(t, i) {
                2 & i && n !== (n = t[15] + "") && M(e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function no(t) {
        let e, n, i, I, l, c, o, g, a = t[17] > 0 && function(t) {
            let e, n, i;
            function I() {
                return t[11](t[14])
            }
            return {
                c() {
                    e = A("button"),
                    e.textContent = "⇑",
                    D(e, "class", "dsimweb-button")
                },
                m(t, l) {
                    s(t, e, l),
                    n || (i = y(e, "click", I),
                    n = !0)
                },
                p(e, n) {
                    t = e
                },
                d(t) {
                    t && p(e),
                    n = !1,
                    i()
                }
            }
        }(t), r = t[17] < t[1].modules[t[1].activeModuleId].outputIds.length - 1 && qc(t), u = 0 === t[15].length && to(), C = t[15].length > 0 && eo(t);
        function m() {
            return t[13](t[14])
        }
        return {
            c() {
                e = A("div"),
                a && a.c(),
                n = b(),
                r && r.c(),
                i = b(),
                I = A("span"),
                u && u.c(),
                l = b(),
                C && C.c(),
                c = b()
            },
            m(t, p) {
                s(t, e, p),
                a && a.m(e, null),
                d(e, n),
                r && r.m(e, null),
                d(e, i),
                d(e, I),
                u && u.m(I, null),
                d(I, l),
                C && C.m(I, null),
                d(e, c),
                o || (g = y(I, "click", m),
                o = !0)
            },
            p(n, c) {
                (t = n)[17] > 0 && a.p(t, c),
                t[17] < t[1].modules[t[1].activeModuleId].outputIds.length - 1 ? r ? r.p(t, c) : (r = qc(t),
                r.c(),
                r.m(e, i)) : r && (r.d(1),
                r = null),
                0 === t[15].length ? u || (u = to(),
                u.c(),
                u.m(I, l)) : u && (u.d(1),
                u = null),
                t[15].length > 0 ? C ? C.p(t, c) : (C = eo(t),
                C.c(),
                C.m(I, null)) : C && (C.d(1),
                C = null)
            },
            d(t) {
                t && p(e),
                a && a.d(),
                r && r.d(),
                u && u.d(),
                C && C.d(),
                o = !1,
                g()
            }
        }
    }
    function io(e) {
        let n, I, l, c, o, g, a, r, u, m, Z, M, h, j, f, G, T, w, W, z, S, O, Y, x, k, P, L, R, Q, B, U, $ = [], E = new Map, X = Object.entries(e[1].modules);
        const F = t=>t[21];
        for (let t = 0; t < X.length; t += 1) {
            let n = Ec(e, X, t)
              , i = F(n);
            E.set(i, $[t] = Hc(i, n))
        }
        let H = e[1].modules[e[1].activeModuleId].inputIds
          , J = [];
        for (let t = 0; t < H.length; t += 1)
            J[t] = _c($c(e, H, t));
        let K = e[1].modules[e[1].activeModuleId].outputIds
          , q = [];
        for (let t = 0; t < K.length; t += 1)
            q[t] = no(Uc(e, K, t));
        return {
            c() {
                n = A("div"),
                I = A("div"),
                I.textContent = "Module",
                l = b();
                for (let t = 0; t < $.length; t += 1)
                    $[t].c();
                c = b(),
                o = A("button"),
                o.textContent = "neues Modul",
                g = b(),
                a = A("button"),
                a.textContent = "Modul löschen",
                r = b(),
                u = A("div"),
                m = N("gewähltes Modul: "),
                Z = A("br"),
                M = b(),
                h = A("input"),
                f = b(),
                G = A("div"),
                T = N("Abkürzung: "),
                w = A("br"),
                W = b(),
                z = A("input"),
                O = b(),
                Y = A("div"),
                x = A("div"),
                x.textContent = "Eingänge",
                k = b();
                for (let t = 0; t < J.length; t += 1)
                    J[t].c();
                P = b(),
                L = A("div"),
                R = A("div"),
                R.textContent = "Ausgänge",
                Q = b();
                for (let t = 0; t < q.length; t += 1)
                    q[t].c();
                v(I, "background-color", "lightgrey"),
                D(o, "class", "dsimweb-button"),
                D(a, "class", "dsimweb-button"),
                h.value = j = e[1].modules[e[1].activeModuleId].name,
                z.value = S = e[1].modules[e[1].activeModuleId].abbreviation,
                v(x, "background-color", "lightgrey"),
                v(Y, "margin-bottom", "5px"),
                v(R, "background-color", "lightgrey"),
                v(n, "border", "2px solid lightgrey"),
                v(n, "padding", "5px"),
                v(n, "margin", "5px"),
                v(n, "overflow-y", "auto")
            },
            m(t, i) {
                s(t, n, i),
                d(n, I),
                d(n, l);
                for (let t = 0; t < $.length; t += 1)
                    $[t] && $[t].m(n, null);
                d(n, c),
                d(n, o),
                d(n, g),
                d(n, a),
                d(n, r),
                d(n, u),
                d(u, m),
                d(u, Z),
                d(u, M),
                d(u, h),
                d(n, f),
                d(n, G),
                d(G, T),
                d(G, w),
                d(G, W),
                d(G, z),
                d(n, O),
                d(n, Y),
                d(Y, x),
                d(Y, k);
                for (let t = 0; t < J.length; t += 1)
                    J[t] && J[t].m(Y, null);
                d(n, P),
                d(n, L),
                d(L, R),
                d(L, Q);
                for (let t = 0; t < q.length; t += 1)
                    q[t] && q[t].m(L, null);
                B || (U = [y(o, "click", e[6]), y(a, "click", e[7]), y(h, "input", e[3]), y(z, "input", e[4])],
                B = !0)
            },
            p(t, [e]) {
                if (7 & e && (X = Object.entries(t[1].modules),
                $ = _($, e, F, 1, t, X, E, n, V, Hc, c, Ec)),
                2 & e && j !== (j = t[1].modules[t[1].activeModuleId].name) && h.value !== j && (h.value = j),
                2 & e && S !== (S = t[1].modules[t[1].activeModuleId].abbreviation) && z.value !== S && (z.value = S),
                7 & e) {
                    let n;
                    for (H = t[1].modules[t[1].activeModuleId].inputIds,
                    n = 0; n < H.length; n += 1) {
                        const i = $c(t, H, n);
                        J[n] ? J[n].p(i, e) : (J[n] = _c(i),
                        J[n].c(),
                        J[n].m(Y, null))
                    }
                    for (; n < J.length; n += 1)
                        J[n].d(1);
                    J.length = H.length
                }
                if (7 & e) {
                    let n;
                    for (K = t[1].modules[t[1].activeModuleId].outputIds,
                    n = 0; n < K.length; n += 1) {
                        const i = Uc(t, K, n);
                        q[n] ? q[n].p(i, e) : (q[n] = no(i),
                        q[n].c(),
                        q[n].m(L, null))
                    }
                    for (; n < q.length; n += 1)
                        q[n].d(1);
                    q.length = K.length
                }
            },
            i: t,
            o: t,
            d(t) {
                t && p(n);
                for (let t = 0; t < $.length; t += 1)
                    $[t].d();
                C(J, t),
                C(q, t),
                B = !1,
                i(U)
            }
        }
    }
    function Io(t, e, n) {
        let i, I;
        const l = Ye();
        a(t, l, (t=>n(0, I = t)));
        return t.$$.update = ()=>{
            1 & t.$$.dirty && n(1, i = I.project)
        }
        ,
        [I, i, l, function(t) {
            l.set(function(t, e, n) {
                return tn(t, (t=>{
                    t.project.modules[e].name = n,
                    en(t, {
                        undoActionType: _e.MODULE_SET_NAME,
                        moduleId: e
                    })
                }
                ))
            }(I, i.activeModuleId, t.target.value))
        }
        , function(t) {
            l.set(function(t, e, n) {
                return tn(t, (t=>{
                    t.project.modules[e].abbreviation = n,
                    en(t, {
                        undoActionType: _e.MODULE_SET_ABBREVIATION,
                        moduleId: e
                    })
                }
                ))
            }(I, i.activeModuleId, t.target.value))
        }
        , t=>l.set(function(t, e) {
            const n = Mi(t);
            return tn(n, (t=>{
                const n = t.uiState;
                n.editMode = pe.NEUTRAL,
                yn(n),
                t.project.activeModuleId = e,
                en(t)
            }
            ))
        }(I, t)), ()=>l.set(function(t) {
            return tn(t, (t=>{
                const e = t.project;
                let n = e.nextModuleId.toString();
                e.modules[n] = qe.castDraft(Object.assign(Object.assign({}, ue), {
                    id: n,
                    name: "Modul-" + n,
                    abbreviation: "M" + n
                })),
                e.nextModuleId++,
                en(t)
            }
            ))
        }(I)), ()=>l.set(hi(I, i.activeModuleId)), t=>l.set(function(t, e) {
            return tn(t, (t=>{
                const n = t.project.modules[t.project.activeModuleId]
                  , i = n.inputIds.findIndex((t=>t === e));
                n.inputIds = ut(n.inputIds, i),
                en(t)
            }
            ))
        }(I, t)), t=>l.set(function(t, e) {
            return tn(t, (t=>{
                const n = t.project.modules[t.project.activeModuleId];
                let i = n.inputIds.findIndex((t=>t === e));
                n.inputIds = ut(n.inputIds, i + 1),
                en(t)
            }
            ))
        }(I, t)), t=>l.set(Dn(I, me.PART, t)), t=>l.set(function(t, e) {
            return tn(t, (t=>{
                const n = t.project.modules[t.project.activeModuleId];
                let i = n.outputIds.findIndex((t=>t === e));
                n.outputIds = ut(n.outputIds, i),
                en(t)
            }
            ))
        }(I, t)), t=>l.set(function(t, e) {
            return tn(t, (t=>{
                const n = t.project.modules[t.project.activeModuleId];
                let i = n.outputIds.findIndex((t=>t === e));
                n.outputIds = ut(n.outputIds, i + 1),
                en(t)
            }
            ))
        }(I, t)), t=>l.set(Dn(I, me.PART, t))]
    }
    class lo extends It {
        constructor(t) {
            super(),
            it(this, t, Io, io, g, {})
        }
    }
    function co(t) {
        let e, n, i, I, l, c, o;
        const g = t[3].default
          , a = function(t, e, n, i) {
            if (t) {
                const I = r(t, e, n, i);
                return t[0](I)
            }
        }(g, t, t[2], null);
        return {
            c() {
                e = A("div"),
                n = b(),
                i = A("div"),
                I = A("div"),
                a && a.c(),
                v(e, "z-index", "1000"),
                v(e, "position", "fixed"),
                v(e, "top", "0"),
                v(e, "left", "0"),
                v(e, "width", "100%"),
                v(e, "height", "100%"),
                v(e, "background-color", "white"),
                v(e, "opacity", "0.9"),
                v(I, "background-color", "white"),
                v(I, "width", "50%"),
                v(I, "margin", "0 auto"),
                v(I, "pointer-events", "auto"),
                v(I, "border", "2px solid lightgrey"),
                v(I, "padding", "5px"),
                v(I, "margin", "5px"),
                v(i, "z-index", "1001"),
                v(i, "position", "fixed"),
                v(i, "top", "0"),
                v(i, "left", "0"),
                v(i, "width", "100%"),
                v(i, "height", "100%"),
                v(i, "pointer-events", "none"),
                v(i, "display", "flex"),
                v(i, "justify-content", "center"),
                v(i, "align-items", "center")
            },
            m(g, r) {
                s(g, e, r),
                s(g, n, r),
                s(g, i, r),
                d(i, I),
                a && a.m(I, null),
                l = !0,
                c || (o = y(e, "click", t[4]),
                c = !0)
            },
            p(t, e) {
                a && a.p && (!l || 4 & e) && function(t, e, n, i, I, l) {
                    if (I) {
                        const c = r(e, n, i, l);
                        t.p(c, I)
                    }
                }(a, g, t, t[2], l ? function(t, e, n, i) {
                    if (t[2] && i) {
                        const I = t[2](i(n));
                        if (void 0 === e.dirty)
                            return I;
                        if ("object" == typeof I) {
                            const t = []
                              , n = Math.max(e.dirty.length, I.length);
                            for (let i = 0; i < n; i += 1)
                                t[i] = e.dirty[i] | I[i];
                            return t
                        }
                        return e.dirty | I
                    }
                    return e.dirty
                }(g, t[2], e, null) : function(t) {
                    if (t.ctx.length > 32) {
                        const e = []
                          , n = t.ctx.length / 32;
                        for (let t = 0; t < n; t++)
                            e[t] = -1;
                        return e
                    }
                    return -1
                }(t[2]), null)
            },
            i(t) {
                l || (H(a, t),
                l = !0)
            },
            o(t) {
                J(a, t),
                l = !1
            },
            d(t) {
                t && p(e),
                t && p(n),
                t && p(i),
                a && a.d(t),
                c = !1,
                o()
            }
        }
    }
    function oo(t) {
        let e, n, i = t[0] && co(t);
        return {
            c() {
                i && i.c(),
                e = Z()
            },
            m(t, I) {
                i && i.m(t, I),
                s(t, e, I),
                n = !0
            },
            p(t, [n]) {
                t[0] ? i ? (i.p(t, n),
                1 & n && H(i, 1)) : (i = co(t),
                i.c(),
                H(i, 1),
                i.m(e.parentNode, e)) : i && (X(),
                J(i, 1, 1, (()=>{
                    i = null
                }
                )),
                F())
            },
            i(t) {
                n || (H(i),
                n = !0)
            },
            o(t) {
                J(i),
                n = !1
            },
            d(t) {
                i && i.d(t),
                t && p(e)
            }
        }
    }
    function go(t, e, n) {
        let {$$slots: i={}, $$scope: I} = e;
        const l = w();
        let {isOpen: c=!1} = e;
        return t.$$set = t=>{
            "isOpen"in t && n(0, c = t.isOpen),
            "$$scope"in t && n(2, I = t.$$scope)
        }
        ,
        [c, l, I, i, ()=>l("close")]
    }
    class ao extends It {
        constructor(t) {
            super(),
            it(this, t, go, oo, g, {
                isOpen: 0
            })
        }
    }
    function ro(t) {
        let e, n, I, l, c, o, g, a, r, u, C, m = t[0].stepCounter + "";
        return {
            c() {
                e = A("p"),
                n = N("Es wurden "),
                I = N(m),
                l = N(" Schritte simuliert."),
                c = b(),
                o = A("div"),
                g = A("button"),
                g.textContent = "Simulation abbrechen",
                a = b(),
                r = A("button"),
                r.textContent = "Simulation fortführen",
                D(g, "class", "dsimweb-button"),
                D(r, "class", "dsimweb-button"),
                v(o, "display", "flex"),
                v(o, "justify-content", "space-evenly")
            },
            m(i, p) {
                s(i, e, p),
                d(e, n),
                d(e, I),
                d(e, l),
                s(i, c, p),
                s(i, o, p),
                d(o, g),
                d(o, a),
                d(o, r),
                u || (C = [y(g, "click", t[4]), y(r, "click", t[3])],
                u = !0)
            },
            p(t, e) {
                1 & e && m !== (m = t[0].stepCounter + "") && M(I, m)
            },
            d(t) {
                t && p(e),
                t && p(c),
                t && p(o),
                u = !1,
                i(C)
            }
        }
    }
    function uo(t) {
        let e, n;
        return e = new ao({
            props: {
                isOpen: t[1].resumeSimulation.isOpen,
                $$slots: {
                    default: [ro]
                },
                $$scope: {
                    ctx: t
                }
            }
        }),
        e.$on("close", t[4]),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, [n]) {
                const i = {};
                2 & n && (i.isOpen = t[1].resumeSimulation.isOpen),
                65 & n && (i.$$scope = {
                    dirty: n,
                    ctx: t
                }),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function so(t, e, n) {
        let i, I, l;
        const c = Ye();
        return a(t, c, (t=>n(5, l = t))),
        t.$$.update = ()=>{
            32 & t.$$.dirty && n(1, i = l.dialogState),
            32 & t.$$.dirty && n(0, I = l.simState)
        }
        ,
        [I, i, c, function() {
            c.set(Mc(l))
        }
        , function() {
            c.set(Mc(l)),
            c.set($I(l))
        }
        , l]
    }
    class po extends It {
        constructor(t) {
            super(),
            it(this, t, so, uo, g, {})
        }
    }
    function Co(t, e, n) {
        const i = t.slice();
        return i[4] = e[n],
        i
    }
    function Ao(t) {
        let e, n, i = t[4] + "";
        return {
            c() {
                e = A("p"),
                n = N(i)
            },
            m(t, i) {
                s(t, e, i),
                d(e, n)
            },
            p(t, e) {
                1 & e && i !== (i = t[4] + "") && M(n, i)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function mo(t) {
        let e, n, i, I, l, c, o, g = t[0].deleteModuleNotPossible.moduleUsedInModuleNames, a = [];
        for (let e = 0; e < g.length; e += 1)
            a[e] = Ao(Co(t, g, e));
        return {
            c() {
                e = A("p"),
                e.textContent = "Das Modul kann nicht gelöscht werden, da es in folgenden Modulen verwendet wird:",
                n = b();
                for (let t = 0; t < a.length; t += 1)
                    a[t].c();
                i = b(),
                I = A("div"),
                l = A("button"),
                l.textContent = "OK",
                D(l, "class", "dsimweb-button"),
                v(I, "display", "flex"),
                v(I, "justify-content", "space-evenly")
            },
            m(g, r) {
                s(g, e, r),
                s(g, n, r);
                for (let t = 0; t < a.length; t += 1)
                    a[t] && a[t].m(g, r);
                s(g, i, r),
                s(g, I, r),
                d(I, l),
                c || (o = y(l, "click", t[2]),
                c = !0)
            },
            p(t, e) {
                if (1 & e) {
                    let n;
                    for (g = t[0].deleteModuleNotPossible.moduleUsedInModuleNames,
                    n = 0; n < g.length; n += 1) {
                        const I = Co(t, g, n);
                        a[n] ? a[n].p(I, e) : (a[n] = Ao(I),
                        a[n].c(),
                        a[n].m(i.parentNode, i))
                    }
                    for (; n < a.length; n += 1)
                        a[n].d(1);
                    a.length = g.length
                }
            },
            d(t) {
                t && p(e),
                t && p(n),
                C(a, t),
                t && p(i),
                t && p(I),
                c = !1,
                o()
            }
        }
    }
    function No(t) {
        let e, n;
        return e = new ao({
            props: {
                isOpen: t[0].deleteModuleNotPossible.isOpen,
                $$slots: {
                    default: [mo]
                },
                $$scope: {
                    ctx: t
                }
            }
        }),
        e.$on("close", t[2]),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, [n]) {
                const i = {};
                1 & n && (i.isOpen = t[0].deleteModuleNotPossible.isOpen),
                129 & n && (i.$$scope = {
                    dirty: n,
                    ctx: t
                }),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function bo(t, e, n) {
        let i, I;
        const l = Ye();
        return a(t, l, (t=>n(3, I = t))),
        t.$$.update = ()=>{
            8 & t.$$.dirty && n(0, i = I.dialogState)
        }
        ,
        [i, l, function() {
            l.set(function(t) {
                return tn(t, (t=>{
                    t.dialogState.deleteModuleNotPossible.isOpen = !1
                }
                ))
            }(I))
        }
        , I]
    }
    class Zo extends It {
        constructor(t) {
            super(),
            it(this, t, bo, No, g, {})
        }
    }
    function yo(t, e, n) {
        const i = t.slice();
        return i[7] = e[n],
        i
    }
    function Do(t) {
        let e, n, i = t[7] + "";
        return {
            c() {
                e = A("p"),
                n = N(i)
            },
            m(t, i) {
                s(t, e, i),
                d(e, n)
            },
            p(t, e) {
                2 & e && i !== (i = t[7] + "") && M(n, i)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Mo(t) {
        let e, n, i, I, l, c, o, g = t[1], a = [];
        for (let e = 0; e < g.length; e += 1)
            a[e] = Do(yo(t, g, e));
        return {
            c() {
                e = A("p"),
                e.textContent = "Die Simulation kann nicht gestartet werden, da es unter den Modulen zyklische Abhängigkeiten gibt.",
                n = b();
                for (let t = 0; t < a.length; t += 1)
                    a[t].c();
                i = b(),
                I = A("div"),
                l = A("button"),
                l.textContent = "OK",
                D(l, "class", "dsimweb-button"),
                v(I, "display", "flex"),
                v(I, "justify-content", "space-evenly")
            },
            m(g, r) {
                s(g, e, r),
                s(g, n, r);
                for (let t = 0; t < a.length; t += 1)
                    a[t] && a[t].m(g, r);
                s(g, i, r),
                s(g, I, r),
                d(I, l),
                c || (o = y(l, "click", t[3]),
                c = !0)
            },
            p(t, e) {
                if (2 & e) {
                    let n;
                    for (g = t[1],
                    n = 0; n < g.length; n += 1) {
                        const I = yo(t, g, n);
                        a[n] ? a[n].p(I, e) : (a[n] = Do(I),
                        a[n].c(),
                        a[n].m(i.parentNode, i))
                    }
                    for (; n < a.length; n += 1)
                        a[n].d(1);
                    a.length = g.length
                }
            },
            d(t) {
                t && p(e),
                t && p(n),
                C(a, t),
                t && p(i),
                t && p(I),
                c = !1,
                o()
            }
        }
    }
    function vo(t) {
        let e, n;
        return e = new ao({
            props: {
                isOpen: t[0].cyclicModuleDependencies.isOpen,
                $$slots: {
                    default: [Mo]
                },
                $$scope: {
                    ctx: t
                }
            }
        }),
        e.$on("close", t[3]),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, [n]) {
                const i = {};
                1 & n && (i.isOpen = t[0].cyclicModuleDependencies.isOpen),
                1026 & n && (i.$$scope = {
                    dirty: n,
                    ctx: t
                }),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function ho(t, e, n) {
        let i, I, l, c;
        const o = Ye();
        a(t, o, (t=>n(5, c = t)));
        return t.$$.update = ()=>{
            var e;
            32 & t.$$.dirty && n(4, i = c.project),
            32 & t.$$.dirty && n(0, I = c.dialogState),
            17 & t.$$.dirty && n(1, l = I.cyclicModuleDependencies.isOpen ? Bt((e = i.modules,
            t=>te("", ((t,n,i)=>0 === t ? e[i].name : n + " -> " + e[i].name))(t)))(I.cyclicModuleDependencies.cycles) : "")
        }
        ,
        [I, l, o, function() {
            o.set(function(t) {
                return tn(t, (t=>{
                    t.dialogState.cyclicModuleDependencies.isOpen = !1,
                    t.dialogState.cyclicModuleDependencies.cycles = []
                }
                ))
            }(c))
        }
        , i, c]
    }
    class jo extends It {
        constructor(t) {
            super(),
            it(this, t, ho, vo, g, {})
        }
    }
    function fo(e) {
        let n, I, l, c, o, g, a, r, u, C;
        return {
            c() {
                n = A("div"),
                I = A("input"),
                l = b(),
                c = A("label"),
                c.textContent = "Datei auswählen",
                o = b(),
                g = A("p"),
                g.textContent = "oder",
                a = b(),
                r = A("div"),
                r.textContent = "Datei in dieses Rechteck ziehen",
                D(I, "type", "file"),
                D(I, "id", "fileElem"),
                D(I, "class", "svelte-17jx7ha"),
                D(c, "class", "dsimweb-button"),
                D(c, "for", "fileElem"),
                v(c, "box-sizing", "content-box"),
                D(r, "class", "drop-area svelte-17jx7ha"),
                v(r, "width", "200px"),
                v(r, "height", "50px"),
                h(r, "highlight", e[0]),
                v(n, "display", "flex"),
                v(n, "justify-content", "space-evenly"),
                v(n, "align-items", "center"),
                v(n, "flex-direction", "column")
            },
            m(t, i) {
                s(t, n, i),
                d(n, I),
                d(n, l),
                d(n, c),
                d(n, o),
                d(n, g),
                d(n, a),
                d(n, r),
                u || (C = [y(I, "input", e[4]), y(r, "drop", e[1]), y(r, "dragenter", e[2]), y(r, "dragleave", e[3]), y(r, "dragover", Go)],
                u = !0)
            },
            p(t, [e]) {
                1 & e && h(r, "highlight", t[0])
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                u = !1,
                i(C)
            }
        }
    }
    const Go = t=>t.preventDefault();
    function To(t, e, n) {
        const i = w();
        let I = !1;
        return [I, function(t) {
            if (t.preventDefault(),
            n(0, I = !1),
            t.dataTransfer.files.length > 0) {
                const e = t.dataTransfer.files[0]
                  , n = new FileReader;
                n.readAsText(e),
                n.onload = t=>{
                    i("fileupload", {
                        content: n.result
                    })
                }
            }
        }
        , function(t) {
            t.preventDefault(),
            n(0, I = !0)
        }
        , function(t) {
            t.preventDefault(),
            n(0, I = !1)
        }
        , function(t) {
            let e = t.target.files[0]
              , n = new FileReader;
            n.readAsText(e),
            n.onload = t=>{
                i("fileupload", {
                    content: n.result
                })
            }
            ,
            t.target.value = ""
        }
        ]
    }
    class wo extends It {
        constructor(t) {
            super(),
            it(this, t, To, fo, g, {})
        }
    }
    function Wo(e) {
        let n, i, I, l, c, o, g, a, r;
        return I = new wo({}),
        I.$on("fileupload", e[3]),
        {
            c() {
                n = A("p"),
                n.textContent = "Lade die Projektdatei hoch, aus der du Module importieren möchtest:",
                i = b(),
                q(I.$$.fragment),
                l = b(),
                c = A("div"),
                o = A("button"),
                o.textContent = "Abbrechen",
                D(o, "class", "dsimweb-button"),
                v(c, "display", "flex"),
                v(c, "justify-content", "space-evenly")
            },
            m(t, u) {
                s(t, n, u),
                s(t, i, u),
                tt(I, t, u),
                s(t, l, u),
                s(t, c, u),
                d(c, o),
                g = !0,
                a || (r = y(o, "click", e[2]),
                a = !0)
            },
            p: t,
            i(t) {
                g || (H(I.$$.fragment, t),
                g = !0)
            },
            o(t) {
                J(I.$$.fragment, t),
                g = !1
            },
            d(t) {
                t && p(n),
                t && p(i),
                et(I, t),
                t && p(l),
                t && p(c),
                a = !1,
                r()
            }
        }
    }
    function zo(t) {
        let e, n;
        return e = new ao({
            props: {
                isOpen: t[0].importModules.isOpen1,
                $$slots: {
                    default: [Wo]
                },
                $$scope: {
                    ctx: t
                }
            }
        }),
        e.$on("close", t[2]),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, [n]) {
                const i = {};
                1 & n && (i.isOpen = t[0].importModules.isOpen1),
                32 & n && (i.$$scope = {
                    dirty: n,
                    ctx: t
                }),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function So(t, e, n) {
        let i, I;
        const l = Ye();
        return a(t, l, (t=>n(4, I = t))),
        t.$$.update = ()=>{
            16 & t.$$.dirty && n(0, i = I.dialogState)
        }
        ,
        [i, l, function() {
            l.set(vc(I))
        }
        , function(t) {
            l.set(vc(I)),
            l.set(function(t) {
                return tn(t, (t=>{
                    t.dialogState.importModules.isOpen2 = !0,
                    t.dialogState.importModules.selectedModules = {}
                }
                ))
            }(I));
            const e = JSON.parse(t.detail.content);
            l.set(function(t, e) {
                return tn(t, (t=>{
                    t.dialogState.importModules.projectToImport = qe.castDraft(e)
                }
                ))
            }(I, e))
        }
        , I]
    }
    class Oo extends It {
        constructor(t) {
            super(),
            it(this, t, So, zo, g, {})
        }
    }
    function Yo(t, e, n) {
        const i = t.slice();
        return i[11] = e[n],
        i
    }
    function xo(t, e, n) {
        const i = t.slice();
        return i[14] = e[n],
        i
    }
    function ko(t) {
        let e, n, i, I = t[11].dependsOnModules, l = [];
        for (let e = 0; e < I.length; e += 1)
            l[e] = Po(xo(t, I, e));
        return {
            c() {
                e = A("br"),
                n = N("Folgende Module werden automatisch importiert:\r\n                "),
                i = A("ul");
                for (let t = 0; t < l.length; t += 1)
                    l[t].c()
            },
            m(t, I) {
                s(t, e, I),
                s(t, n, I),
                s(t, i, I);
                for (let t = 0; t < l.length; t += 1)
                    l[t] && l[t].m(i, null)
            },
            p(t, e) {
                if (2 & e) {
                    let n;
                    for (I = t[11].dependsOnModules,
                    n = 0; n < I.length; n += 1) {
                        const c = xo(t, I, n);
                        l[n] ? l[n].p(c, e) : (l[n] = Po(c),
                        l[n].c(),
                        l[n].m(i, null))
                    }
                    for (; n < l.length; n += 1)
                        l[n].d(1);
                    l.length = I.length
                }
            },
            d(t) {
                t && p(e),
                t && p(n),
                t && p(i),
                C(l, t)
            }
        }
    }
    function Po(t) {
        let e, n, i = t[14].moduleName + "";
        return {
            c() {
                e = A("li"),
                n = N(i)
            },
            m(t, i) {
                s(t, e, i),
                d(e, n)
            },
            p(t, e) {
                2 & e && i !== (i = t[14].moduleName + "") && M(n, i)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Lo(t) {
        let e, n, i, I, l, c, o, g, a, r = t[11].moduleName + "";
        function u() {
            return t[8](t[11])
        }
        let C = t[11].dependsOnModules.length > 0 && ko(t);
        return {
            c() {
                e = A("div"),
                n = A("input"),
                I = b(),
                l = A("span"),
                c = N(r),
                o = b(),
                C && C.c(),
                D(n, "type", "checkbox"),
                n.checked = i = t[0].importModules.selectedModules[t[11].moduleId]
            },
            m(t, i) {
                s(t, e, i),
                d(e, n),
                d(e, I),
                d(e, l),
                d(l, c),
                d(e, o),
                C && C.m(e, null),
                g || (a = y(n, "click", u),
                g = !0)
            },
            p(I, l) {
                t = I,
                3 & l && i !== (i = t[0].importModules.selectedModules[t[11].moduleId]) && (n.checked = i),
                2 & l && r !== (r = t[11].moduleName + "") && M(c, r),
                t[11].dependsOnModules.length > 0 ? C ? C.p(t, l) : (C = ko(t),
                C.c(),
                C.m(e, null)) : C && (C.d(1),
                C = null)
            },
            d(t) {
                t && p(e),
                C && C.d(),
                g = !1,
                a()
            }
        }
    }
    function Ro(t) {
        let e, n, I, l, c, o, g, a, r, u = t[1], m = [];
        for (let e = 0; e < u.length; e += 1)
            m[e] = Lo(Yo(t, u, e));
        return {
            c() {
                e = A("p"),
                e.textContent = "Wähle die Module, die importiert werden sollen:",
                n = b();
                for (let t = 0; t < m.length; t += 1)
                    m[t].c();
                I = b(),
                l = A("div"),
                c = A("button"),
                c.textContent = "Abbrechen",
                o = b(),
                g = A("button"),
                g.textContent = "OK",
                D(c, "class", "dsimweb-button"),
                D(g, "class", "dsimweb-button"),
                v(l, "display", "flex"),
                v(l, "justify-content", "space-evenly")
            },
            m(i, u) {
                s(i, e, u),
                s(i, n, u);
                for (let t = 0; t < m.length; t += 1)
                    m[t] && m[t].m(i, u);
                s(i, I, u),
                s(i, l, u),
                d(l, c),
                d(l, o),
                d(l, g),
                a || (r = [y(c, "click", t[5]), y(g, "click", t[4])],
                a = !0)
            },
            p(t, e) {
                if (67 & e) {
                    let n;
                    for (u = t[1],
                    n = 0; n < u.length; n += 1) {
                        const i = Yo(t, u, n);
                        m[n] ? m[n].p(i, e) : (m[n] = Lo(i),
                        m[n].c(),
                        m[n].m(I.parentNode, I))
                    }
                    for (; n < m.length; n += 1)
                        m[n].d(1);
                    m.length = u.length
                }
            },
            d(t) {
                t && p(e),
                t && p(n),
                C(m, t),
                t && p(I),
                t && p(l),
                a = !1,
                i(r)
            }
        }
    }
    function Qo(t) {
        let e, n;
        return e = new ao({
            props: {
                isOpen: t[0].importModules.isOpen2,
                $$slots: {
                    default: [Ro]
                },
                $$scope: {
                    ctx: t
                }
            }
        }),
        e.$on("close", t[3]),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, [n]) {
                const i = {};
                1 & n && (i.isOpen = t[0].importModules.isOpen2),
                131075 & n && (i.$$scope = {
                    dirty: n,
                    ctx: t
                }),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function Bo(t, e, n) {
        let i, I;
        const l = Ye();
        function c(t, e, n) {
            if (n.includes(t))
                return [];
            {
                const i = Mt(e[t].parts, ge, qt((([t,e])=>void 0 !== e.moduleId)), Vt((([t,e])=>e.moduleId)), Jt(ee))
                  , I = [...i, ...Mt(i, Vt((i=>c(i, e, [...n, t]))), _t)];
                return Jt(ee)(I)
            }
        }
        function o(t, e) {
            return Mt(c(t, e, []), Vt((t=>({
                moduleId: t,
                moduleName: e[t].name
            }))))
        }
        a(t, l, (t=>n(7, I = t)));
        let g = new Array;
        function r(t) {
            l.set(function(t, e) {
                return tn(t, (t=>{
                    t.dialogState.importModules.selectedModules[e] = !t.dialogState.importModules.selectedModules[e]
                }
                ))
            }(I, t))
        }
        return t.$$.update = ()=>{
            128 & t.$$.dirty && n(0, i = I.dialogState),
            1 & t.$$.dirty && (i.importModules.isOpen2 ? n(1, g = Mt(i.importModules.projectToImport.modules, ge, Vt((([t,e])=>({
                moduleId: t,
                moduleName: e.name,
                dependsOnModules: o(t, i.importModules.projectToImport.modules)
            }))))) : n(1, g = new Array))
        }
        ,
        [i, g, l, function() {
            l.set(hc(I))
        }
        , function() {
            const t = i.importModules.projectToImport.modules
              , e = Mt(i.importModules.selectedModules, ge, qt((([t,e])=>e)), Vt((([e,n])=>[e, ...c(e, t, [])])), _t, Jt(ee), Vt((e=>t[e])));
            l.set(function(t, e) {
                const n = t.project.nextModuleId;
                return tn(t, (t=>{
                    const i = t.project;
                    for (let t = 0; t < e.length; t++) {
                        const I = e[t];
                        i.modules[ji(n, t)] = qe.castDraft(Object.assign(Object.assign({}, I), {
                            id: ji(n, t),
                            parts: ae((t=>"string" == typeof t.moduleId ? Object.assign(Object.assign({}, t), {
                                moduleId: fi(n, t.moduleId, e)
                            }) : t))(I.parts)
                        }))
                    }
                    i.nextModuleId = i.nextModuleId + e.length,
                    en(t)
                }
                ))
            }(I, e)),
            l.set(hc(I))
        }
        , function() {
            l.set(hc(I))
        }
        , r, I, t=>r(t.moduleId)]
    }
    class Uo extends It {
        constructor(t) {
            super(),
            it(this, t, Bo, Qo, g, {})
        }
    }
    function $o(t) {
        let e, n, I, l, c, o, g, a, r, u;
        return {
            c() {
                e = A("p"),
                e.textContent = "Dateiname eingeben:",
                n = b(),
                I = A("input"),
                l = b(),
                c = A("div"),
                o = A("button"),
                o.textContent = "Abbrechen",
                g = b(),
                a = A("button"),
                a.textContent = "speichern",
                I.value = t[0],
                D(o, "class", "dsimweb-button"),
                D(a, "class", "dsimweb-button"),
                v(c, "display", "flex"),
                v(c, "justify-content", "space-evenly")
            },
            m(i, p) {
                s(i, e, p),
                s(i, n, p),
                s(i, I, p),
                s(i, l, p),
                s(i, c, p),
                d(c, o),
                d(c, g),
                d(c, a),
                r || (u = [y(I, "input", t[6]), y(o, "click", t[4]), y(a, "click", t[5])],
                r = !0)
            },
            p(t, e) {
                1 & e && I.value !== t[0] && (I.value = t[0])
            },
            d(t) {
                t && p(e),
                t && p(n),
                t && p(I),
                t && p(l),
                t && p(c),
                r = !1,
                i(u)
            }
        }
    }
    function Eo(t) {
        let e, n;
        return e = new ao({
            props: {
                isOpen: t[1].saveAs.isOpen,
                $$slots: {
                    default: [$o]
                },
                $$scope: {
                    ctx: t
                }
            }
        }),
        e.$on("close", t[3]),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, [n]) {
                const i = {};
                2 & n && (i.isOpen = t[1].saveAs.isOpen),
                257 & n && (i.$$scope = {
                    dirty: n,
                    ctx: t
                }),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function Xo(t, e, n) {
        let i, I;
        const l = Ye();
        a(t, l, (t=>n(7, I = t)));
        let c = "";
        return t.$$.update = ()=>{
            128 & t.$$.dirty && n(1, i = I.dialogState)
        }
        ,
        [c, i, l, function() {
            l.set(jc(I))
        }
        , function() {
            l.set(jc(I))
        }
        , function() {
            c.length > 0 && (l.set(function(t, e) {
                return tn(t, (t=>{
                    t.project.fileName = e
                }
                ))
            }(I, c)),
            l.set(yc(I)),
            l.set(jc(I)))
        }
        , function(t) {
            n(0, c = t.target.value)
        }
        , I]
    }
    class Fo extends It {
        constructor(t) {
            super(),
            it(this, t, Xo, Eo, g, {})
        }
    }
    function Ho(t) {
        let e;
        return {
            c() {
                e = A("p"),
                e.textContent = "Achtung: Das aktuelle Projekt wurde noch nicht gespeichert!",
                v(e, "color", "red")
            },
            m(t, n) {
                s(t, e, n)
            },
            d(t) {
                t && p(e)
            }
        }
    }
    function Jo(t) {
        let e, n, i, I, l, c, o, g, a, r, u, C, m = t[0] !== t[2] && Ho();
        return I = new wo({}),
        I.$on("fileupload", t[7]),
        {
            c() {
                m && m.c(),
                e = b(),
                n = A("p"),
                n.textContent = "Lade die Projektdatei hoch, die geöffnet werden soll:",
                i = b(),
                q(I.$$.fragment),
                l = b(),
                c = A("div"),
                o = b(),
                g = A("div"),
                a = A("button"),
                a.textContent = "Abbrechen",
                v(c, "height", "2em"),
                D(a, "class", "dsimweb-button"),
                v(g, "display", "flex"),
                v(g, "justify-content", "space-evenly")
            },
            m(p, A) {
                m && m.m(p, A),
                s(p, e, A),
                s(p, n, A),
                s(p, i, A),
                tt(I, p, A),
                s(p, l, A),
                s(p, c, A),
                s(p, o, A),
                s(p, g, A),
                d(g, a),
                r = !0,
                u || (C = y(a, "click", t[6]),
                u = !0)
            },
            p(t, n) {
                t[0] !== t[2] ? m || (m = Ho(),
                m.c(),
                m.m(e.parentNode, e)) : m && (m.d(1),
                m = null)
            },
            i(t) {
                r || (H(I.$$.fragment, t),
                r = !0)
            },
            o(t) {
                J(I.$$.fragment, t),
                r = !1
            },
            d(t) {
                m && m.d(t),
                t && p(e),
                t && p(n),
                t && p(i),
                et(I, t),
                t && p(l),
                t && p(c),
                t && p(o),
                t && p(g),
                u = !1,
                C()
            }
        }
    }
    function Vo(t) {
        let e, n;
        return e = new ao({
            props: {
                isOpen: t[1].load.isOpen,
                $$slots: {
                    default: [Jo]
                },
                $$scope: {
                    ctx: t
                }
            }
        }),
        e.$on("close", t[5]),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, [n]) {
                const i = {};
                2 & n && (i.isOpen = t[1].load.isOpen),
                517 & n && (i.$$scope = {
                    dirty: n,
                    ctx: t
                }),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function Ko(t, e, n) {
        let i, I, l, c;
        const o = Ye();
        a(t, o, (t=>n(8, l = t)));
        const g = Se();
        return a(t, g, (t=>n(2, c = t))),
        t.$$.update = ()=>{
            256 & t.$$.dirty && n(1, i = l.dialogState),
            256 & t.$$.dirty && n(0, I = l.project)
        }
        ,
        [I, i, c, o, g, function() {
            o.set(fc(l))
        }
        , function() {
            o.set(fc(l))
        }
        , function(t) {
            o.set(Dc(l, t.detail.content)),
            o.set(fc(l))
        }
        , l]
    }
    class _o extends It {
        constructor(t) {
            super(),
            it(this, t, Ko, Vo, g, {})
        }
    }
    function qo(e) {
        let n, I, l, c, o, g, a, r;
        return {
            c() {
                n = A("p"),
                n.textContent = "Achtung: Das aktuelle Projekt wurde noch nicht gespeichert!",
                I = b(),
                l = A("div"),
                c = A("button"),
                c.textContent = "Abbrechen",
                o = b(),
                g = A("button"),
                g.textContent = "neues Projekt erzeugen",
                v(n, "color", "red"),
                D(c, "class", "dsimweb-button"),
                D(g, "class", "dsimweb-button"),
                v(l, "display", "flex"),
                v(l, "justify-content", "space-evenly")
            },
            m(t, i) {
                s(t, n, i),
                s(t, I, i),
                s(t, l, i),
                d(l, c),
                d(l, o),
                d(l, g),
                a || (r = [y(c, "click", e[3]), y(g, "click", e[4])],
                a = !0)
            },
            p: t,
            d(t) {
                t && p(n),
                t && p(I),
                t && p(l),
                a = !1,
                i(r)
            }
        }
    }
    function tg(t) {
        let e, n;
        return e = new ao({
            props: {
                isOpen: t[0].newProject.isOpen,
                $$slots: {
                    default: [qo]
                },
                $$scope: {
                    ctx: t
                }
            }
        }),
        e.$on("close", t[2]),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, [n]) {
                const i = {};
                1 & n && (i.isOpen = t[0].newProject.isOpen),
                64 & n && (i.$$scope = {
                    dirty: n,
                    ctx: t
                }),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function eg(t, e, n) {
        let i, I;
        const l = Ye();
        return a(t, l, (t=>n(5, I = t))),
        t.$$.update = ()=>{
            32 & t.$$.dirty && n(0, i = I.dialogState)
        }
        ,
        [i, l, function() {
            l.set(Gc(I))
        }
        , function() {
            l.set(Gc(I))
        }
        , function() {
            l.set(Tc(I)),
            l.set(Gc(I))
        }
        , I]
    }
    class ng extends It {
        constructor(t) {
            super(),
            it(this, t, eg, tg, g, {})
        }
    }
    const ig = [];
    function Ig(e, n=t) {
        let i;
        const I = new Set;
        function l(t) {
            if (l = t,
            ((n = e) != n ? l == l : n !== l || n && "object" == typeof n || "function" == typeof n) && (e = t,
            i)) {
                const t = !ig.length;
                for (const t of I)
                    t[1](),
                    ig.push(t, e);
                if (t) {
                    for (let t = 0; t < ig.length; t += 2)
                        ig[t][0](ig[t + 1]);
                    ig.length = 0
                }
            }
            var n, l
        }
        return {
            set: l,
            update: function(t) {
                l(t(e))
            },
            subscribe: function(c, o=t) {
                const g = [c, o];
                return I.add(g),
                1 === I.size && (i = n(l) || t),
                c(e),
                ()=>{
                    I.delete(g),
                    0 === I.size && i && (i(),
                    i = null)
                }
            }
        }
    }
    const lg = {
        project: de,
        lastSavedProject: de,
        simState: {},
        uiState: Ne,
        dialogState: Ae,
        undoStack: Array(),
        redoStack: Array()
    };
    function cg(e) {
        let n, i, I, l, c, o, g;
        return {
            c() {
                n = A("div"),
                i = A("div"),
                i.textContent = "Anzahl Eingänge",
                I = b(),
                l = A("input"),
                l.value = c = e[0].numberOfInputPins,
                D(l, "type", "number"),
                D(l, "min", "2"),
                D(l, "max", "5"),
                D(l, "step", "1"),
                v(n, "border", "2px solid lightgrey"),
                v(n, "padding", "5px"),
                v(n, "margin", "5px"),
                v(n, "user-select", "none")
            },
            m(t, c) {
                s(t, n, c),
                d(n, i),
                d(n, I),
                d(n, l),
                o || (g = y(l, "input", e[2]),
                o = !0)
            },
            p(t, [e]) {
                1 & e && c !== (c = t[0].numberOfInputPins) && l.value !== c && (l.value = c)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                o = !1,
                g()
            }
        }
    }
    function og(t, e, n) {
        let i, I, l;
        const c = Ye();
        a(t, c, (t=>n(5, l = t)));
        let {id: o=""} = e;
        return t.$$set = t=>{
            "id"in t && n(3, o = t.id)
        }
        ,
        t.$$.update = ()=>{
            32 & t.$$.dirty && n(4, i = l.project),
            24 & t.$$.dirty && n(0, I = i.modules[i.activeModuleId].parts[o])
        }
        ,
        [I, c, function(t) {
            if ("2" === t.target.value || "3" === t.target.value || "4" === t.target.value || "5" === t.target.value) {
                let e = parseInt(t.target.value);
                c.set(function(t, e, n) {
                    return tn(t, (t=>{
                        const i = t.project.modules[t.project.activeModuleId];
                        i.parts[e].numberOfInputPins = n;
                        for (let[t,I] of Object.entries(i.connections))
                            I.toPartId === e && I.toInputPinNr > n - 1 && delete i.connections[t];
                        en(t)
                    }
                    ))
                }(l, I.id, e))
            }
        }
        , o, i, l]
    }
    class gg extends It {
        constructor(t) {
            super(),
            it(this, t, og, cg, g, {
                id: 3
            })
        }
    }
    function ag(e) {
        let n, I, l, c, o, g, a, r, u, C, m, Z, M, h, j, f, G, T, w, W, z, S, O, Y, x, k, P, L, R, Q, B, U, $ = e[4].modules && function(t) {
            let e, n, i, I, l, c;
            return {
                c() {
                    e = N("als Modulausgang verwenden: "),
                    n = A("input"),
                    i = b(),
                    I = A("br"),
                    D(n, "type", "checkbox"),
                    n.checked = t[2]
                },
                m(o, g) {
                    s(o, e, g),
                    s(o, n, g),
                    s(o, i, g),
                    s(o, I, g),
                    l || (c = y(n, "input", t[6]),
                    l = !0)
                },
                p(t, e) {
                    4 & e && (n.checked = t[2])
                },
                d(t) {
                    t && p(e),
                    t && p(n),
                    t && p(i),
                    t && p(I),
                    l = !1,
                    c()
                }
            }
        }(e);
        return Q = function(t) {
            let e;
            return {
                p(...n) {
                    e = n,
                    e.forEach((e=>t.push(e)))
                },
                r() {
                    e.forEach((e=>t.splice(t.indexOf(e), 1)))
                }
            }
        }(e[12][0]),
        {
            c() {
                n = A("div"),
                I = N("Name: "),
                l = A("input"),
                o = b(),
                g = A("br"),
                a = b(),
                $ && $.c(),
                r = N("\r\n    Farbe:\r\n    "),
                u = A("br"),
                C = b(),
                m = A("label"),
                Z = A("input"),
                M = N("\r\n        rot"),
                h = b(),
                j = A("label"),
                f = A("input"),
                G = N("\r\n        blau"),
                T = b(),
                w = A("label"),
                W = A("input"),
                z = N("\r\n        grün"),
                S = b(),
                O = A("label"),
                Y = A("input"),
                x = N("\r\n        gelb"),
                k = b(),
                P = A("label"),
                L = A("input"),
                R = N("\r\n        orange"),
                l.value = c = e[0].name,
                D(Z, "type", "radio"),
                D(Z, "name", "color"),
                Z.__value = "red",
                Z.value = Z.__value,
                D(f, "type", "radio"),
                D(f, "name", "color"),
                f.__value = "blue",
                f.value = f.__value,
                D(W, "type", "radio"),
                D(W, "name", "color"),
                W.__value = "green",
                W.value = W.__value,
                D(Y, "type", "radio"),
                D(Y, "name", "color"),
                Y.__value = "yellow",
                Y.value = Y.__value,
                D(L, "type", "radio"),
                D(L, "name", "color"),
                L.__value = "orange",
                L.value = L.__value,
                v(n, "border", "2px solid lightgrey"),
                v(n, "padding", "5px"),
                v(n, "margin", "5px"),
                Q.p(Z, f, W, Y, L)
            },
            m(t, i) {
                s(t, n, i),
                d(n, I),
                d(n, l),
                d(n, o),
                d(n, g),
                d(n, a),
                $ && $.m(n, null),
                d(n, r),
                d(n, u),
                d(n, C),
                d(n, m),
                d(m, Z),
                Z.checked = Z.__value === e[1],
                d(m, M),
                d(n, h),
                d(n, j),
                d(j, f),
                f.checked = f.__value === e[1],
                d(j, G),
                d(n, T),
                d(n, w),
                d(w, W),
                W.checked = W.__value === e[1],
                d(w, z),
                d(n, S),
                d(n, O),
                d(O, Y),
                Y.checked = Y.__value === e[1],
                d(O, x),
                d(n, k),
                d(n, P),
                d(P, L),
                L.checked = L.__value === e[1],
                d(P, R),
                B || (U = [y(l, "input", e[5]), y(Z, "change", e[11]), y(Z, "change", e[13]), y(f, "change", e[14]), y(f, "change", e[15]), y(W, "change", e[16]), y(W, "change", e[17]), y(Y, "change", e[18]), y(Y, "change", e[19]), y(L, "change", e[20]), y(L, "change", e[21])],
                B = !0)
            },
            p(t, [e]) {
                1 & e && c !== (c = t[0].name) && l.value !== c && (l.value = c),
                t[4].modules && $.p(t, e),
                2 & e && (Z.checked = Z.__value === t[1]),
                2 & e && (f.checked = f.__value === t[1]),
                2 & e && (W.checked = W.__value === t[1]),
                2 & e && (Y.checked = Y.__value === t[1]),
                2 & e && (L.checked = L.__value === t[1])
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                $ && $.d(),
                Q.r(),
                B = !1,
                i(U)
            }
        }
    }
    function rg(t, e, n) {
        let i, I, l, c, o, {id: g=""} = e;
        const r = Ye();
        a(t, r, (t=>n(10, o = t)));
        let u = Nn();
        function d(t) {
            r.set(function(t, e, n) {
                return tn(t, (t=>{
                    t.project.modules[t.project.activeModuleId].parts[e].color = n,
                    en(t)
                }
                ))
            }(o, I.id, t))
        }
        return t.$$set = t=>{
            "id"in t && n(8, g = t.id)
        }
        ,
        t.$$.update = ()=>{
            1024 & t.$$.dirty && n(9, i = o.project),
            768 & t.$$.dirty && n(0, I = i.modules[i.activeModuleId].parts[g]),
            513 & t.$$.dirty && n(2, l = i.modules[i.activeModuleId].outputIds.includes(I.id)),
            1 & t.$$.dirty && n(1, c = void 0 === I.color ? "red" : I.color)
        }
        ,
        [I, c, l, r, u, function(t) {
            r.set(ui(o, g, t.target.value))
        }
        , function(t) {
            r.set(function(t, e, n) {
                return tn(t, (t=>{
                    const i = t.project.modules[t.project.activeModuleId];
                    n ? i.outputIds.push(e) : i.outputIds = i.outputIds.filter((t=>t !== e)),
                    en(t)
                }
                ))
            }(o, g, t.target.checked))
        }
        , d, g, i, o, function() {
            c = this.__value,
            n(1, c),
            n(0, I),
            n(9, i),
            n(8, g),
            n(10, o)
        }
        , [[]], ()=>d("red"), function() {
            c = this.__value,
            n(1, c),
            n(0, I),
            n(9, i),
            n(8, g),
            n(10, o)
        }
        , ()=>d("blue"), function() {
            c = this.__value,
            n(1, c),
            n(0, I),
            n(9, i),
            n(8, g),
            n(10, o)
        }
        , ()=>d("green"), function() {
            c = this.__value,
            n(1, c),
            n(0, I),
            n(9, i),
            n(8, g),
            n(10, o)
        }
        , ()=>d("yellow"), function() {
            c = this.__value,
            n(1, c),
            n(0, I),
            n(9, i),
            n(8, g),
            n(10, o)
        }
        , ()=>d("orange")]
    }
    function ug(e) {
        let n, i, I, l, c, o, g, a, r, u = e[3].modules && function(t) {
            let e, n, i, I;
            return {
                c() {
                    e = N("als Moduleingang verwenden: "),
                    n = A("input"),
                    D(n, "type", "checkbox"),
                    n.checked = t[1]
                },
                m(l, c) {
                    s(l, e, c),
                    s(l, n, c),
                    i || (I = y(n, "input", t[5]),
                    i = !0)
                },
                p(t, e) {
                    2 & e && (n.checked = t[1])
                },
                d(t) {
                    t && p(e),
                    t && p(n),
                    i = !1,
                    I()
                }
            }
        }(e);
        return {
            c() {
                n = A("div"),
                i = N("Name: "),
                I = A("input"),
                c = b(),
                o = A("br"),
                g = b(),
                u && u.c(),
                I.value = l = e[0].name,
                v(n, "border", "2px solid lightgrey"),
                v(n, "padding", "5px"),
                v(n, "margin", "5px")
            },
            m(t, l) {
                s(t, n, l),
                d(n, i),
                d(n, I),
                d(n, c),
                d(n, o),
                d(n, g),
                u && u.m(n, null),
                a || (r = y(I, "input", e[4]),
                a = !0)
            },
            p(t, [e]) {
                1 & e && l !== (l = t[0].name) && I.value !== l && (I.value = l),
                t[3].modules && u.p(t, e)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                u && u.d(),
                a = !1,
                r()
            }
        }
    }
    function dg(t, e, n) {
        let i, I, l, c, {id: o=""} = e;
        const g = Ye();
        a(t, g, (t=>n(8, c = t)));
        const r = Nn();
        return t.$$set = t=>{
            "id"in t && n(6, o = t.id)
        }
        ,
        t.$$.update = ()=>{
            256 & t.$$.dirty && n(7, i = c.project),
            192 & t.$$.dirty && n(0, I = i.modules[i.activeModuleId].parts[o]),
            129 & t.$$.dirty && n(1, l = i.modules[i.activeModuleId].inputIds.includes(I.id))
        }
        ,
        [I, l, g, r, function(t) {
            g.set(ui(c, o, t.target.value))
        }
        , function(t) {
            g.set(function(t, e, n) {
                return tn(t, (t=>{
                    const i = t.project.modules[t.project.activeModuleId];
                    n ? i.inputIds.push(e) : i.inputIds = i.inputIds.filter((t=>t !== e)),
                    en(t)
                }
                ))
            }(c, o, t.target.checked))
        }
        , o, i, c]
    }
    function sg(e) {
        let n, i, I, l, c, o, g, a, r, u;
        return {
            c() {
                n = A("div"),
                i = A("div"),
                I = N("Periodendauer in s: "),
                l = A("input"),
                c = b(),
                o = A("div"),
                g = N("Frequenz in Hz: "),
                a = N(e[1]),
                l.value = e[0],
                D(l, "type", "number"),
                D(l, "min", "0.1"),
                D(l, "max", "5"),
                D(l, "step", "0.1"),
                v(n, "border", "2px solid lightgrey"),
                v(n, "padding", "5px"),
                v(n, "margin", "5px"),
                v(n, "user-select", "none")
            },
            m(t, p) {
                s(t, n, p),
                d(n, i),
                d(i, I),
                d(i, l),
                d(n, c),
                d(n, o),
                d(o, g),
                d(o, a),
                r || (u = y(l, "input", e[3]),
                r = !0)
            },
            p(t, [e]) {
                1 & e && l.value !== t[0] && (l.value = t[0]),
                2 & e && M(a, t[1])
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                r = !1,
                u()
            }
        }
    }
    function pg(t, e, n) {
        let i, I, l, c, o;
        const g = Ye();
        a(t, g, (t=>n(7, o = t)));
        let {id: r=""} = e;
        return t.$$set = t=>{
            "id"in t && n(4, r = t.id)
        }
        ,
        t.$$.update = ()=>{
            128 & t.$$.dirty && n(6, i = o.project),
            80 & t.$$.dirty && n(5, I = i.modules[i.activeModuleId].parts[r]),
            32 & t.$$.dirty && n(0, l = void 0 === I.period ? 1 : I.period),
            1 & t.$$.dirty && n(1, c = Math.round(1 / l * 1e3) / 1e3)
        }
        ,
        [l, c, g, function(t) {
            var e = parseFloat(t.target.value);
            isNaN(e) || g.set(function(t, e, n) {
                return tn(t, (t=>{
                    t.project.modules[t.project.activeModuleId].parts[e].period = n,
                    en(t, {
                        undoActionType: _e.PART_SET_PERIOD,
                        partId: e
                    })
                }
                ))
            }(o, r, e))
        }
        , r, I, i, o]
    }
    const Cg = {
        [lt.AND]: gg,
        [lt.OR]: gg,
        [lt.NOR]: gg,
        [lt.NAND]: gg,
        [lt.XOR]: gg,
        [lt.SWITCH]: class extends It {
            constructor(t) {
                super(),
                it(this, t, dg, ug, g, {
                    id: 6
                })
            }
        }
        ,
        [lt.LED]: class extends It {
            constructor(t) {
                super(),
                it(this, t, rg, ag, g, {
                    id: 8
                })
            }
        }
        ,
        [lt.CLOCK]: class extends It {
            constructor(t) {
                super(),
                it(this, t, pg, sg, g, {
                    id: 4
                })
            }
        }
    };
    function Ag(t) {
        return Cg.hasOwnProperty(t)
    }
    function mg(t) {
        return Cg[t]
    }
    function Ng(e) {
        let n, I, l, c, g, a, r, C, m, Z, h, j, f, G, T, w, W, z, S, O, Y, x, k, P, L, R, Q, B, U, $, E, X, F, H, J, V, K, _, q, tt, et, nt, it, It, lt, ct, ot, gt = e[0].scale + "", at = Math.round(e[1].x) + "", rt = Math.round(e[1].y) + "";
        return {
            c() {
                n = A("div"),
                I = A("button"),
                l = A("img"),
                g = b(),
                a = A("button"),
                r = A("img"),
                m = b(),
                Z = A("span"),
                h = N("Zoom: "),
                j = N(gt),
                f = N("%"),
                G = b(),
                T = A("span"),
                w = b(),
                W = A("button"),
                z = A("img"),
                O = b(),
                Y = A("button"),
                x = A("img"),
                P = b(),
                L = A("button"),
                R = A("img"),
                B = b(),
                U = A("button"),
                $ = A("img"),
                X = b(),
                F = A("span"),
                H = b(),
                J = A("button"),
                V = A("img"),
                _ = b(),
                q = A("span"),
                tt = b(),
                et = A("span"),
                nt = N("X: "),
                it = N(at),
                It = N(" Y:"),
                lt = N(rt),
                v(l, "pointer-events", "none"),
                D(l, "height", "30px"),
                o(l.src, c = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9Inpvb21Jbi5zdmciDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIGlkPSJuYW1lZHZpZXc3Ig0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxLjAiDQogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIg0KICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIg0KICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiDQogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSINCiAgICAgc2hvd2dyaWQ9InRydWUiDQogICAgIGlua3NjYXBlOnpvb209IjQiDQogICAgIGlua3NjYXBlOmN4PSIxNy4zNzUiDQogICAgIGlua3NjYXBlOmN5PSIyMy41Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCIgLz4NCiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMiIgLz4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiPg0KICAgIDxjaXJjbGUNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgaWQ9InBhdGgyOTciDQogICAgICAgY3g9IjkuMjYwNDE3Ig0KICAgICAgIGN5PSI5LjU1MjA4NCINCiAgICAgICByPSI2LjkwNjI1MDUiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxNC41NTIwODMsMTQuNTUyMDgzIDkuNzg5NTg0LDkuNzg5NTg0Ig0KICAgICAgIGlkPSJwYXRoOTcwIg0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSINCiAgICAgICBkPSJtIDkuMjYwNDE3Miw2LjYxNDU4NTMgLTEwZS03LDUuMjkxNjY1NyINCiAgICAgICBpZD0icGF0aDM2ODMiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIg0KICAgICAgIGQ9Im0gNi42MTQ1ODQyLDkuMjYwNDE4MyA1LjI5MTY2NDgsMWUtNiINCiAgICAgICBpZD0icGF0aDM2ODMtMiINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICA8L2c+DQo8L3N2Zz4=") || D(l, "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9Inpvb21Jbi5zdmciDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIGlkPSJuYW1lZHZpZXc3Ig0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxLjAiDQogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIg0KICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIg0KICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiDQogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSINCiAgICAgc2hvd2dyaWQ9InRydWUiDQogICAgIGlua3NjYXBlOnpvb209IjQiDQogICAgIGlua3NjYXBlOmN4PSIxNy4zNzUiDQogICAgIGlua3NjYXBlOmN5PSIyMy41Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCIgLz4NCiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMiIgLz4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiPg0KICAgIDxjaXJjbGUNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgaWQ9InBhdGgyOTciDQogICAgICAgY3g9IjkuMjYwNDE3Ig0KICAgICAgIGN5PSI5LjU1MjA4NCINCiAgICAgICByPSI2LjkwNjI1MDUiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSAxNC41NTIwODMsMTQuNTUyMDgzIDkuNzg5NTg0LDkuNzg5NTg0Ig0KICAgICAgIGlkPSJwYXRoOTcwIg0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSINCiAgICAgICBkPSJtIDkuMjYwNDE3Miw2LjYxNDU4NTMgLTEwZS03LDUuMjkxNjY1NyINCiAgICAgICBpZD0icGF0aDM2ODMiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIg0KICAgICAgIGQ9Im0gNi42MTQ1ODQyLDkuMjYwNDE4MyA1LjI5MTY2NDgsMWUtNiINCiAgICAgICBpZD0icGF0aDM2ODMtMiINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICA8L2c+DQo8L3N2Zz4="),
                D(l, "alt", "icon größer"),
                D(l, "class", "svelte-1bac38i"),
                D(I, "title", "größer"),
                D(I, "class", "dsimweb-iconButton"),
                v(r, "pointer-events", "none"),
                D(r, "height", "30px"),
                o(r.src, C = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9Inpvb21PdXQuc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDIiDQogICAgIGlua3NjYXBlOmN4PSI3Ny41MTY1ODIiDQogICAgIGlua3NjYXBlOmN5PSIzOC41MzczMiINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIj4NCiAgICA8aW5rc2NhcGU6Z3JpZA0KICAgICAgIHR5cGU9Inh5Z3JpZCINCiAgICAgICBpZD0iZ3JpZDI2MTAiIC8+DQogIDwvc29kaXBvZGk6bmFtZWR2aWV3Pg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczIiIC8+DQogIDxnDQogICAgIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIg0KICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIg0KICAgICBpZD0ibGF5ZXIxIj4NCiAgICA8Y2lyY2xlDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIg0KICAgICAgIGlkPSJwYXRoMjk3Ig0KICAgICAgIGN4PSI5LjI2MDQxNyINCiAgICAgICBjeT0iOS41NTIwODQiDQogICAgICAgcj0iNi45MDYyNTA1IiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIg0KICAgICAgIGQ9Im0gMTQuNTUyMDgzLDE0LjU1MjA4MyA5Ljc4OTU4NCw5Ljc4OTU4NCINCiAgICAgICBpZD0icGF0aDk3MCINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSA2LjYxNDU4NDIsOS4yNjA0MTgzIDUuMjkxNjY0OCwxZS02Ig0KICAgICAgIGlkPSJwYXRoMzY4My0yIg0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogIDwvZz4NCjwvc3ZnPg==") || D(r, "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9Inpvb21PdXQuc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDIiDQogICAgIGlua3NjYXBlOmN4PSI3Ny41MTY1ODIiDQogICAgIGlua3NjYXBlOmN5PSIzOC41MzczMiINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIj4NCiAgICA8aW5rc2NhcGU6Z3JpZA0KICAgICAgIHR5cGU9Inh5Z3JpZCINCiAgICAgICBpZD0iZ3JpZDI2MTAiIC8+DQogIDwvc29kaXBvZGk6bmFtZWR2aWV3Pg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczIiIC8+DQogIDxnDQogICAgIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIg0KICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIg0KICAgICBpZD0ibGF5ZXIxIj4NCiAgICA8Y2lyY2xlDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIg0KICAgICAgIGlkPSJwYXRoMjk3Ig0KICAgICAgIGN4PSI5LjI2MDQxNyINCiAgICAgICBjeT0iOS41NTIwODQiDQogICAgICAgcj0iNi45MDYyNTA1IiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIg0KICAgICAgIGQ9Im0gMTQuNTUyMDgzLDE0LjU1MjA4MyA5Ljc4OTU4NCw5Ljc4OTU4NCINCiAgICAgICBpZD0icGF0aDk3MCINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiDQogICAgICAgZD0ibSA2LjYxNDU4NDIsOS4yNjA0MTgzIDUuMjkxNjY0OCwxZS02Ig0KICAgICAgIGlkPSJwYXRoMzY4My0yIg0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogIDwvZz4NCjwvc3ZnPg=="),
                D(r, "alt", "icon kleiner"),
                D(r, "class", "svelte-1bac38i"),
                D(a, "title", "kleiner"),
                D(a, "class", "dsimweb-iconButton"),
                v(T, "width", "3em"),
                v(T, "display", "inline-block"),
                v(z, "pointer-events", "none"),
                D(z, "height", "30px"),
                o(z.src, S = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxlZnQuc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDIiDQogICAgIGlua3NjYXBlOmN4PSIyNC40ODM1NzMiDQogICAgIGlua3NjYXBlOmN5PSI2NS4zMTg5ODkiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii05Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTkiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPGcNCiAgICAgICBpZD0iZzM5NyINCiAgICAgICB0cmFuc2Zvcm09InJvdGF0ZSg5MCwxMy4yMjkxNjcsMTMuMjI5MTY3KSI+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJNIDEzLjIyOTE2NywxLjMyMjkxNjcgViAyMy44MTI1Ig0KICAgICAgICAgaWQ9InBhdGgzMDAiDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICAgICAgPHBhdGgNCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgICAgZD0iTSAxOC41MjA4MzMsMTkuODQzNzUgMTMuMjI5MTY3LDI1LjEzNTQxNyA3LjkzNzUsMTkuODQzNzUiDQogICAgICAgICBpZD0icGF0aDQ2MS03Ig0KICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2MiIC8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4=") || D(z, "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxlZnQuc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDIiDQogICAgIGlua3NjYXBlOmN4PSIyNC40ODM1NzMiDQogICAgIGlua3NjYXBlOmN5PSI2NS4zMTg5ODkiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii05Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTkiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPGcNCiAgICAgICBpZD0iZzM5NyINCiAgICAgICB0cmFuc2Zvcm09InJvdGF0ZSg5MCwxMy4yMjkxNjcsMTMuMjI5MTY3KSI+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJNIDEzLjIyOTE2NywxLjMyMjkxNjcgViAyMy44MTI1Ig0KICAgICAgICAgaWQ9InBhdGgzMDAiDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICAgICAgPHBhdGgNCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgICAgZD0iTSAxOC41MjA4MzMsMTkuODQzNzUgMTMuMjI5MTY3LDI1LjEzNTQxNyA3LjkzNzUsMTkuODQzNzUiDQogICAgICAgICBpZD0icGF0aDQ2MS03Ig0KICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2MiIC8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4="),
                D(z, "alt", "icon nach links"),
                D(z, "class", "svelte-1bac38i"),
                D(W, "title", "Zeichenfläche nach links verschieben"),
                D(W, "class", "dsimweb-iconButton"),
                v(x, "pointer-events", "none"),
                D(x, "height", "30px"),
                o(x.src, k = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InVwLnN2ZyINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIg0KICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgaWQ9Im5hbWVkdmlldzciDQogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCINCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiDQogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiDQogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSINCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIg0KICAgICBzaG93Z3JpZD0idHJ1ZSINCiAgICAgaW5rc2NhcGU6em9vbT0iNS42NTY4NTQyIg0KICAgICBpbmtzY2FwZTpjeD0iMjQuNDgzNTczIg0KICAgICBpbmtzY2FwZTpjeT0iNjUuMzE4OTg5Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOSINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii05Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCIgLz4NCiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMiIgLz4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiPg0KICAgIDxnDQogICAgICAgaWQ9ImczOTciDQogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoMTgwLDEzLjIyOTE2NywxMy4yMjkxNjcpIj4NCiAgICAgIDxwYXRoDQogICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICAgIGQ9Ik0gMTMuMjI5MTY3LDEuMzIyOTE2NyBWIDIzLjgxMjUiDQogICAgICAgICBpZD0icGF0aDMwMCINCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJNIDE4LjUyMDgzMywxOS44NDM3NSAxMy4yMjkxNjcsMjUuMTM1NDE3IDcuOTM3NSwxOS44NDM3NSINCiAgICAgICAgIGlkPSJwYXRoNDYxLTciDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjYyIgLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg==") || D(x, "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InVwLnN2ZyINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIg0KICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgaWQ9Im5hbWVkdmlldzciDQogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCINCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiDQogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiDQogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSINCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIg0KICAgICBzaG93Z3JpZD0idHJ1ZSINCiAgICAgaW5rc2NhcGU6em9vbT0iNS42NTY4NTQyIg0KICAgICBpbmtzY2FwZTpjeD0iMjQuNDgzNTczIg0KICAgICBpbmtzY2FwZTpjeT0iNjUuMzE4OTg5Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOSINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii05Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCIgLz4NCiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMiIgLz4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiPg0KICAgIDxnDQogICAgICAgaWQ9ImczOTciDQogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoMTgwLDEzLjIyOTE2NywxMy4yMjkxNjcpIj4NCiAgICAgIDxwYXRoDQogICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICAgIGQ9Ik0gMTMuMjI5MTY3LDEuMzIyOTE2NyBWIDIzLjgxMjUiDQogICAgICAgICBpZD0icGF0aDMwMCINCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJNIDE4LjUyMDgzMywxOS44NDM3NSAxMy4yMjkxNjcsMjUuMTM1NDE3IDcuOTM3NSwxOS44NDM3NSINCiAgICAgICAgIGlkPSJwYXRoNDYxLTciDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjYyIgLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg=="),
                D(x, "alt", "icon nach oben"),
                D(x, "class", "svelte-1bac38i"),
                D(Y, "title", "Zeichenfläche nach oben verschieben"),
                D(Y, "class", "dsimweb-iconButton"),
                v(R, "pointer-events", "none"),
                D(R, "height", "30px"),
                o(R.src, Q = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImRvd24uc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDIiDQogICAgIGlua3NjYXBlOmN4PSIyNC40ODM1NzMiDQogICAgIGlua3NjYXBlOmN5PSI2NS4zMTg5ODkiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii05Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTkiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPGcNCiAgICAgICBpZD0iZzM5NyI+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJNIDEzLjIyOTE2NywxLjMyMjkxNjcgViAyMy44MTI1Ig0KICAgICAgICAgaWQ9InBhdGgzMDAiDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICAgICAgPHBhdGgNCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgICAgZD0iTSAxOC41MjA4MzMsMTkuODQzNzUgMTMuMjI5MTY3LDI1LjEzNTQxNyA3LjkzNzUsMTkuODQzNzUiDQogICAgICAgICBpZD0icGF0aDQ2MS03Ig0KICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2MiIC8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4=") || D(R, "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImRvd24uc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDIiDQogICAgIGlua3NjYXBlOmN4PSIyNC40ODM1NzMiDQogICAgIGlua3NjYXBlOmN5PSI2NS4zMTg5ODkiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii05Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTkiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSI+DQogICAgPGlua3NjYXBlOmdyaWQNCiAgICAgICB0eXBlPSJ4eWdyaWQiDQogICAgICAgaWQ9ImdyaWQyNjEwIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPGcNCiAgICAgICBpZD0iZzM5NyI+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJNIDEzLjIyOTE2NywxLjMyMjkxNjcgViAyMy44MTI1Ig0KICAgICAgICAgaWQ9InBhdGgzMDAiDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICAgICAgPHBhdGgNCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgICAgZD0iTSAxOC41MjA4MzMsMTkuODQzNzUgMTMuMjI5MTY3LDI1LjEzNTQxNyA3LjkzNzUsMTkuODQzNzUiDQogICAgICAgICBpZD0icGF0aDQ2MS03Ig0KICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2MiIC8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4="),
                D(R, "alt", "icon nach unten"),
                D(R, "class", "svelte-1bac38i"),
                D(L, "title", "Zeichenfläche nach unten verschieben"),
                D(L, "class", "dsimweb-iconButton"),
                v($, "pointer-events", "none"),
                D($, "height", "30px"),
                o($.src, E = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InJpZ2h0LnN2ZyINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIg0KICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgaWQ9Im5hbWVkdmlldzciDQogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCINCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiDQogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiDQogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSINCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIg0KICAgICBzaG93Z3JpZD0idHJ1ZSINCiAgICAgaW5rc2NhcGU6em9vbT0iNS42NTY4NTQyIg0KICAgICBpbmtzY2FwZTpjeD0iMjQuNDgzNTczIg0KICAgICBpbmtzY2FwZTpjeT0iNjUuMzE4OTg5Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOSINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii05Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCIgLz4NCiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMiIgLz4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiPg0KICAgIDxnDQogICAgICAgaWQ9ImczOTciDQogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoLTkwLDEzLjIyOTE2NywxMy4yMjkxNjYpIj4NCiAgICAgIDxwYXRoDQogICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICAgIGQ9Ik0gMTMuMjI5MTY3LDEuMzIyOTE2NyBWIDIzLjgxMjUiDQogICAgICAgICBpZD0icGF0aDMwMCINCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJNIDE4LjUyMDgzMywxOS44NDM3NSAxMy4yMjkxNjcsMjUuMTM1NDE3IDcuOTM3NSwxOS44NDM3NSINCiAgICAgICAgIGlkPSJwYXRoNDYxLTciDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjYyIgLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg==") || D($, "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InJpZ2h0LnN2ZyINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIg0KICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgaWQ9Im5hbWVkdmlldzciDQogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCINCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiDQogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiDQogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSINCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIg0KICAgICBzaG93Z3JpZD0idHJ1ZSINCiAgICAgaW5rc2NhcGU6em9vbT0iNS42NTY4NTQyIg0KICAgICBpbmtzY2FwZTpjeD0iMjQuNDgzNTczIg0KICAgICBpbmtzY2FwZTpjeT0iNjUuMzE4OTg5Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOSINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii05Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCIgLz4NCiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMiIgLz4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiPg0KICAgIDxnDQogICAgICAgaWQ9ImczOTciDQogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoLTkwLDEzLjIyOTE2NywxMy4yMjkxNjYpIj4NCiAgICAgIDxwYXRoDQogICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICAgIGQ9Ik0gMTMuMjI5MTY3LDEuMzIyOTE2NyBWIDIzLjgxMjUiDQogICAgICAgICBpZD0icGF0aDMwMCINCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgICBkPSJNIDE4LjUyMDgzMywxOS44NDM3NSAxMy4yMjkxNjcsMjUuMTM1NDE3IDcuOTM3NSwxOS44NDM3NSINCiAgICAgICAgIGlkPSJwYXRoNDYxLTciDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjYyIgLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg=="),
                D($, "alt", "icon nach rechts"),
                D($, "class", "svelte-1bac38i"),
                D(U, "title", "Zeichenfläche nach rechts verschieben"),
                D(U, "class", "dsimweb-iconButton"),
                v(F, "width", "1em"),
                v(F, "display", "inline-block"),
                v(V, "pointer-events", "none"),
                D(V, "height", "30px"),
                o(V.src, K = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InRvT3JpZ2luLnN2ZyINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIg0KICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgaWQ9Im5hbWVkdmlldzciDQogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCINCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiDQogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiDQogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSINCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIg0KICAgICBzaG93Z3JpZD0idHJ1ZSINCiAgICAgaW5rc2NhcGU6em9vbT0iNS42NTY4NTQyIg0KICAgICBpbmtzY2FwZTpjeD0iNjMuNzI3OTk5Ig0KICAgICBpbmtzY2FwZTpjeT0iNjUuMjMwNjAxIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCIgLz4NCiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMiIgLz4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgZD0iTSAzLjk2ODc1LDEuMzIyOTE2NyBWIDIzLjgxMjUiDQogICAgICAgaWQ9InBhdGgzMDAiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgIGQ9Im0gMS4zMjI5MTY3LDMuOTY4NzUgMjIuNDg5NTgzMywwIg0KICAgICAgIGlkPSJwYXRoMzAyIg0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICBkPSJNIDIxLjE2NjY2NywxLjMyMjkxNjcgMjMuODEyNSwzLjk2ODc1IDIxLjE2NjY2Niw2LjYxNDU4MzIiDQogICAgICAgaWQ9InBhdGg0NjEiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICBkPSJNIDYuNjE0NTgzLDIyLjQ4OTU4NCAzLjk2ODc1LDI1LjEzNTQxNyAxLjMyMjkxNywyMi40ODk1ODMiDQogICAgICAgaWQ9InBhdGg0NjEtNyINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjYyIgLz4NCiAgPC9nPg0KPC9zdmc+") || D(V, "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4xICg5YzZkNDFlNDEwLCAyMDIyLTA3LTE0KSINCiAgIHNvZGlwb2RpOmRvY25hbWU9InRvT3JpZ2luLnN2ZyINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIg0KICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgaWQ9Im5hbWVkdmlldzciDQogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCINCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiDQogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiDQogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSINCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIg0KICAgICBzaG93Z3JpZD0idHJ1ZSINCiAgICAgaW5rc2NhcGU6em9vbT0iNS42NTY4NTQyIg0KICAgICBpbmtzY2FwZTpjeD0iNjMuNzI3OTk5Ig0KICAgICBpbmtzY2FwZTpjeT0iNjUuMjMwNjAxIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCIgLz4NCiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzMiIgLz4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTY2NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiDQogICAgICAgZD0iTSAzLjk2ODc1LDEuMzIyOTE2NyBWIDIzLjgxMjUiDQogICAgICAgaWQ9InBhdGgzMDAiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE2Njc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIg0KICAgICAgIGQ9Im0gMS4zMjI5MTY3LDMuOTY4NzUgMjIuNDg5NTgzMywwIg0KICAgICAgIGlkPSJwYXRoMzAyIg0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICBkPSJNIDIxLjE2NjY2NywxLjMyMjkxNjcgMjMuODEyNSwzLjk2ODc1IDIxLjE2NjY2Niw2LjYxNDU4MzIiDQogICAgICAgaWQ9InBhdGg0NjEiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjExNjY3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCINCiAgICAgICBkPSJNIDYuNjE0NTgzLDIyLjQ4OTU4NCAzLjk2ODc1LDI1LjEzNTQxNyAxLjMyMjkxNywyMi40ODk1ODMiDQogICAgICAgaWQ9InBhdGg0NjEtNyINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjYyIgLz4NCiAgPC9nPg0KPC9zdmc+"),
                D(V, "alt", "icon zum Ursprung"),
                D(V, "class", "svelte-1bac38i"),
                D(J, "title", "zurück zum Ursprung"),
                D(J, "class", "dsimweb-iconButton"),
                v(q, "width", "3em"),
                v(q, "display", "inline-block"),
                v(et, "width", "8em"),
                v(et, "display", "inline-block"),
                v(n, "border", "2px solid lightgrey"),
                v(n, "padding", "5px"),
                v(n, "margin", "5px"),
                v(n, "flex", "none")
            },
            m(t, i) {
                s(t, n, i),
                d(n, I),
                d(I, l),
                d(n, g),
                d(n, a),
                d(a, r),
                d(n, m),
                d(n, Z),
                d(Z, h),
                d(Z, j),
                d(Z, f),
                d(n, G),
                d(n, T),
                d(n, w),
                d(n, W),
                d(W, z),
                d(n, O),
                d(n, Y),
                d(Y, x),
                d(n, P),
                d(n, L),
                d(L, R),
                d(n, B),
                d(n, U),
                d(U, $),
                d(n, X),
                d(n, F),
                d(n, H),
                d(n, J),
                d(J, V),
                d(n, _),
                d(n, q),
                d(n, tt),
                d(n, et),
                d(et, nt),
                d(et, it),
                d(et, It),
                d(et, lt),
                ct || (ot = [u(ac.call(null, I)), y(I, "click", e[4]), u(ac.call(null, a)), y(a, "click", e[5]), u(ac.call(null, W)), y(W, "click", e[7]), u(ac.call(null, Y)), y(Y, "click", e[8]), u(ac.call(null, L)), y(L, "click", e[9]), u(ac.call(null, U)), y(U, "click", e[10]), u(ac.call(null, J)), y(J, "click", e[6])],
                ct = !0)
            },
            p(t, [e]) {
                1 & e && gt !== (gt = t[0].scale + "") && M(j, gt),
                2 & e && at !== (at = Math.round(t[1].x) + "") && M(it, at),
                2 & e && rt !== (rt = Math.round(t[1].y) + "") && M(lt, rt)
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                ct = !1,
                i(ot)
            }
        }
    }
    function bg(t, e, n) {
        let i, I, l;
        const c = Ye();
        a(t, c, (t=>n(11, I = t)));
        const o = Oe();
        return a(t, o, (t=>n(1, l = t))),
        t.$$.update = ()=>{
            2048 & t.$$.dirty && n(0, i = I.uiState)
        }
        ,
        [i, l, c, o, function() {
            c.set(yi(I))
        }
        , function() {
            c.set(Zi(I))
        }
        , function() {
            c.set(function(t) {
                return tn(t, (t=>{
                    t.uiState.translate = {
                        x: 20,
                        y: 20
                    }
                }
                ))
            }(I))
        }
        , function() {
            c.set(bi(I, -100, 0))
        }
        , function() {
            c.set(bi(I, 0, -100))
        }
        , function() {
            c.set(bi(I, 0, 100))
        }
        , function() {
            c.set(bi(I, 100, 0))
        }
        , I]
    }
    class Zg extends It {
        constructor(t) {
            super(),
            it(this, t, bg, Ng, g, {})
        }
    }
    var yg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMyAoMGUxNTBlZDZjNCwgMjAyMy0wNy0yMSkiDQogICBzb2RpcG9kaTpkb2NuYW1lPSJzaW1QYXVzZS5zdmciDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIGlkPSJuYW1lZHZpZXc3Ig0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxLjAiDQogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIg0KICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIg0KICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiDQogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSINCiAgICAgc2hvd2dyaWQ9InRydWUiDQogICAgIGlua3NjYXBlOnpvb209IjUuNjU2ODU0MyINCiAgICAgaW5rc2NhcGU6Y3g9IjM0LjExNzkwMiINCiAgICAgaW5rc2NhcGU6Y3k9IjQwLjkyMzgwNSINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIj4NCiAgICA8aW5rc2NhcGU6Z3JpZA0KICAgICAgIHR5cGU9Inh5Z3JpZCINCiAgICAgICBpZD0iZ3JpZDI2MTAiDQogICAgICAgb3JpZ2lueD0iMCINCiAgICAgICBvcmlnaW55PSIwIg0KICAgICAgIHNwYWNpbmd5PSIxIg0KICAgICAgIHNwYWNpbmd4PSIxIg0KICAgICAgIHVuaXRzPSJtbSINCiAgICAgICB2aXNpYmxlPSJ0cnVlIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPGcNCiAgICAgICBpZD0iZzEiPg0KICAgICAgPGcNCiAgICAgICAgIGlkPSJnMiINCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNzI5MTY2NjcpIj4NCiAgICAgICAgPHBhdGgNCiAgICAgICAgICAgc3R5bGU9ImZpbGw6IzY2NjY2NjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIg0KICAgICAgICAgICBkPSJNIDEwLDIuMDAwMDAwMiBWIDI0Ig0KICAgICAgICAgICBpZD0icGF0aDEiDQogICAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgICAgIDxwYXRoDQogICAgICAgICAgIHN0eWxlPSJmaWxsOiM2NjY2NjY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSINCiAgICAgICAgICAgZD0iTSAxNSwyLjAwMDAwMDIgViAyNCINCiAgICAgICAgICAgaWQ9InBhdGgxLTAiDQogICAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogICAgICA8L2c+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4="
      , Dg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMyAoMGUxNTBlZDZjNCwgMjAyMy0wNy0yMSkiDQogICBzb2RpcG9kaTpkb2NuYW1lPSJzaW1TdGVwQmFja3dhcmQuc3ZnIg0KICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBpZD0ibmFtZWR2aWV3NyINCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIg0KICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCINCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCINCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIg0KICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iDQogICAgIHNob3dncmlkPSJ0cnVlIg0KICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDMiDQogICAgIGlua3NjYXBlOmN4PSIyNy4yMjM2MTEiDQogICAgIGlua3NjYXBlOmN5PSIzOC45NzkyNjEiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImcxIj4NCiAgICA8aW5rc2NhcGU6Z3JpZA0KICAgICAgIHR5cGU9Inh5Z3JpZCINCiAgICAgICBpZD0iZ3JpZDI2MTAiDQogICAgICAgb3JpZ2lueD0iMCINCiAgICAgICBvcmlnaW55PSIwIg0KICAgICAgIHNwYWNpbmd5PSIxIg0KICAgICAgIHNwYWNpbmd4PSIxIg0KICAgICAgIHVuaXRzPSJtbSINCiAgICAgICB2aXNpYmxlPSJ0cnVlIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPGcNCiAgICAgICBpZD0iZzEiDQogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoLTEsMCwwLDEsMjYuMzY1ODI3LDApIj4NCiAgICAgIDxwYXRoDQogICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjAzMTE4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSINCiAgICAgICAgIGQ9Ik0gMS4zMjI5MTY3LDI0LjY1Mjc3OCAyNC4xNzAxMzksMTMuMjI5MTY3IDEuMzIyOTE2NywxLjgwNTU1NTQgWiINCiAgICAgICAgIGlkPSJwYXRoNDI5Ig0KICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjIiAvPg0KICAgICAgPHBhdGgNCiAgICAgICAgIHN0eWxlPSJmaWxsOiM2NjY2NjY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMTE3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSINCiAgICAgICAgIGQ9Ik0gMjUsMiBWIDI0Ig0KICAgICAgICAgaWQ9InBhdGgxIg0KICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg=="
      , Mg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMyAoMGUxNTBlZDZjNCwgMjAyMy0wNy0yMSkiDQogICBzb2RpcG9kaTpkb2NuYW1lPSJzaW1TdGVwRm9yd2FyZC5zdmciDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIGlkPSJuYW1lZHZpZXc3Ig0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxLjAiDQogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIg0KICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIg0KICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiDQogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSINCiAgICAgc2hvd2dyaWQ9InRydWUiDQogICAgIGlua3NjYXBlOnpvb209IjUuNjU2ODU0MyINCiAgICAgaW5rc2NhcGU6Y3g9IjI3LjIyMzYxMSINCiAgICAgaW5rc2NhcGU6Y3k9IjM4Ljk3OTI2MSINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIj4NCiAgICA8aW5rc2NhcGU6Z3JpZA0KICAgICAgIHR5cGU9Inh5Z3JpZCINCiAgICAgICBpZD0iZ3JpZDI2MTAiDQogICAgICAgb3JpZ2lueD0iMCINCiAgICAgICBvcmlnaW55PSIwIg0KICAgICAgIHNwYWNpbmd5PSIxIg0KICAgICAgIHNwYWNpbmd4PSIxIg0KICAgICAgIHVuaXRzPSJtbSINCiAgICAgICB2aXNpYmxlPSJ0cnVlIiAvPg0KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4NCiAgPGRlZnMNCiAgICAgaWQ9ImRlZnMyIiAvPg0KICA8Zw0KICAgICBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSINCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciINCiAgICAgaWQ9ImxheWVyMSI+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjAzMTE4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSINCiAgICAgICBkPSJNIDEuMzIyOTE2NywyNC42NTI3NzggMjQuMTcwMTM5LDEzLjIyOTE2NyAxLjMyMjkxNjcsMS44MDU1NTU0IFoiDQogICAgICAgaWQ9InBhdGg0MjkiDQogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjIiAvPg0KICAgIDxwYXRoDQogICAgICAgc3R5bGU9ImZpbGw6IzY2NjY2NjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4xMTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIg0KICAgICAgIGQ9Im0gMjUsMiAwLDIyIg0KICAgICAgIGlkPSJwYXRoMSINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICA8L2c+DQo8L3N2Zz4="
      , vg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMyAoMGUxNTBlZDZjNCwgMjAyMy0wNy0yMSkiDQogICBzb2RpcG9kaTpkb2NuYW1lPSJzaW1TdGVwQmFja3dhcmREaXNhYmxlZC5zdmciDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIGlkPSJuYW1lZHZpZXc3Ig0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxLjAiDQogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIg0KICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIg0KICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiDQogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSINCiAgICAgc2hvd2dyaWQ9InRydWUiDQogICAgIGlua3NjYXBlOnpvb209IjUuNjU2ODU0MyINCiAgICAgaW5rc2NhcGU6Y3g9IjI3LjIyMzYxMSINCiAgICAgaW5rc2NhcGU6Y3k9IjM4Ljk3OTI2MSINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iZzEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCINCiAgICAgICBvcmlnaW54PSIwIg0KICAgICAgIG9yaWdpbnk9IjAiDQogICAgICAgc3BhY2luZ3k9IjEiDQogICAgICAgc3BhY2luZ3g9IjEiDQogICAgICAgdW5pdHM9Im1tIg0KICAgICAgIHZpc2libGU9InRydWUiIC8+DQogIDwvc29kaXBvZGk6bmFtZWR2aWV3Pg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczIiIC8+DQogIDxnDQogICAgIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIg0KICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIg0KICAgICBpZD0ibGF5ZXIxIj4NCiAgICA8Zw0KICAgICAgIGlkPSJnMSINCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgtMSwwLDAsMSwyNi4zNjU4MjcsMCkiPg0KICAgICAgPHBhdGgNCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM4MDgwODA7c3Ryb2tlLXdpZHRoOjIuMDMxMTg7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIg0KICAgICAgICAgZD0iTSAxLjMyMjkxNjcsMjQuNjUyNzc4IDI0LjE3MDEzOSwxMy4yMjkxNjcgMS4zMjI5MTY3LDEuODA1NTU1NCBaIg0KICAgICAgICAgaWQ9InBhdGg0MjkiDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+DQogICAgICA8cGF0aA0KICAgICAgICAgc3R5bGU9ImZpbGw6IzY2NjY2NjtzdHJva2U6IzgwODA4MDtzdHJva2Utd2lkdGg6Mi4xMTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIg0KICAgICAgICAgZD0iTSAyNSwyIFYgMjQiDQogICAgICAgICBpZD0icGF0aDEiDQogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+"
      , hg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgd2lkdGg9IjEwMCINCiAgIGhlaWdodD0iMTAwIg0KICAgdmlld0JveD0iMCAwIDI2LjQ1ODMzMyAyNi40NTgzMzMiDQogICB2ZXJzaW9uPSIxLjEiDQogICBpZD0ic3ZnNSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMyAoMGUxNTBlZDZjNCwgMjAyMy0wNy0yMSkiDQogICBzb2RpcG9kaTpkb2NuYW1lPSJzaW1TdGVwRm9yd2FyZERpc2FibGVkLnN2ZyINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIg0KICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgaWQ9Im5hbWVkdmlldzciDQogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCINCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiDQogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiDQogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSINCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIg0KICAgICBzaG93Z3JpZD0idHJ1ZSINCiAgICAgaW5rc2NhcGU6em9vbT0iNS42NTY4NTQzIg0KICAgICBpbmtzY2FwZTpjeD0iMjcuMjIzNjExIg0KICAgICBpbmtzY2FwZTpjeT0iMzguOTc5MjYxIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiPg0KICAgIDxpbmtzY2FwZTpncmlkDQogICAgICAgdHlwZT0ieHlncmlkIg0KICAgICAgIGlkPSJncmlkMjYxMCINCiAgICAgICBvcmlnaW54PSIwIg0KICAgICAgIG9yaWdpbnk9IjAiDQogICAgICAgc3BhY2luZ3k9IjEiDQogICAgICAgc3BhY2luZ3g9IjEiDQogICAgICAgdW5pdHM9Im1tIg0KICAgICAgIHZpc2libGU9InRydWUiIC8+DQogIDwvc29kaXBvZGk6bmFtZWR2aWV3Pg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczIiIC8+DQogIDxnDQogICAgIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIg0KICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIg0KICAgICBpZD0ibGF5ZXIxIj4NCiAgICA8cGF0aA0KICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM4MDgwODA7c3Ryb2tlLXdpZHRoOjIuMDMxMTg7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIg0KICAgICAgIGQ9Ik0gMS4zMjI5MTY3LDI0LjY1Mjc3OCAyNC4xNzAxMzksMTMuMjI5MTY3IDEuMzIyOTE2NywxLjgwNTU1NTQgWiINCiAgICAgICBpZD0icGF0aDQyOSINCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+DQogICAgPHBhdGgNCiAgICAgICBzdHlsZT0iZmlsbDojNjY2NjY2O3N0cm9rZTojODA4MDgwO3N0cm9rZS13aWR0aDoyLjExNztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiDQogICAgICAgZD0ibSAyNSwyIDAsMjIiDQogICAgICAgaWQ9InBhdGgxIg0KICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+DQogIDwvZz4NCjwvc3ZnPg==";
    function jg(e) {
        let n, i, I, l, c, o, g, a, r, u, C;
        return {
            c() {
                n = A("span"),
                i = N(e[0]),
                I = N("s:"),
                l = N(e[1]),
                c = N("ms:"),
                o = N(e[2]),
                g = N("μs:"),
                a = N(e[3]),
                r = N("ns:"),
                u = N(e[4]),
                C = N("ps"),
                v(n, "font-family", "'Courier New', Courier, monospace")
            },
            m(t, e) {
                s(t, n, e),
                d(n, i),
                d(n, I),
                d(n, l),
                d(n, c),
                d(n, o),
                d(n, g),
                d(n, a),
                d(n, r),
                d(n, u),
                d(n, C)
            },
            p(t, [e]) {
                1 & e && M(i, t[0]),
                2 & e && M(l, t[1]),
                4 & e && M(o, t[2]),
                8 & e && M(a, t[3]),
                16 & e && M(u, t[4])
            },
            i: t,
            o: t,
            d(t) {
                t && p(n)
            }
        }
    }
    function fg(t, e, n) {
        let {timestamp: i=0} = e
          , I = ""
          , l = ""
          , c = ""
          , o = ""
          , g = ""
          , a = 0;
        return t.$$set = t=>{
            "timestamp"in t && n(5, i = t.timestamp)
        }
        ,
        t.$$.update = ()=>{
            if (96 & t.$$.dirty) {
                let t = Date.now();
                if (a + 500 < t) {
                    n(6, a = t);
                    const e = Math.floor(i / 1e9).toString();
                    1 === e.length ? n(0, I = "  " + e) : 2 === e.length ? n(0, I = " " + e) : n(0, I = e),
                    n(1, l = Math.floor(i / 1e6 % 1e3).toString().padStart(3, "0")),
                    n(2, c = Math.floor(i / 1e3 % 1e3).toString().padStart(3, "0")),
                    n(3, o = Math.floor(i % 1e3).toString().padStart(3, "0")),
                    n(4, g = Math.floor(1e3 * i % 1e3).toString().padStart(3, "0"))
                }
            }
        }
        ,
        [I, l, c, o, g, i, a]
    }
    class Gg extends It {
        constructor(t) {
            super(),
            it(this, t, fg, jg, g, {
                timestamp: 5
            })
        }
    }
    function Tg(t) {
        let e, n, I, l, c, g, a, r, C, m, N, Z, M, j, f, G, T, w, W, z, S, O;
        G = new Gg({
            props: {
                timestamp: t[3]
            }
        });
        let Y = t[1] === pe.SIMULATION_PAUSED && wg(t);
        return {
            c() {
                e = A("div"),
                n = A("button"),
                I = A("img"),
                c = b(),
                g = A("button"),
                a = A("img"),
                m = b(),
                N = A("button"),
                Z = A("img"),
                f = b(),
                q(G.$$.fragment),
                T = b(),
                w = A("span"),
                W = b(),
                Y && Y.c(),
                v(I, "pointer-events", "none"),
                D(I, "height", "30px"),
                o(I.src, l = yg) || D(I, "src", l),
                D(I, "alt", "Pause"),
                D(I, "class", "svelte-1t7zuwa"),
                D(n, "title", "Pause"),
                D(n, "class", "dsimweb-iconButton svelte-1t7zuwa"),
                h(n, "selected", t[1] === pe.SIMULATION_PAUSED),
                v(a, "pointer-events", "none"),
                D(a, "height", "30px"),
                o(a.src, r = t[1] === pe.SIMULATION_RUNNING ? vg : Dg) || D(a, "src", r),
                D(a, "alt", "Schritt vorwärts"),
                D(a, "class", "svelte-1t7zuwa"),
                D(g, "title", "Schritt rückwärts"),
                D(g, "class", "dsimweb-iconButton"),
                g.disabled = C = t[1] === pe.SIMULATION_RUNNING,
                v(Z, "pointer-events", "none"),
                D(Z, "height", "30px"),
                o(Z.src, M = t[1] === pe.SIMULATION_RUNNING ? hg : Mg) || D(Z, "src", M),
                D(Z, "alt", "Schritt rückwärts"),
                D(Z, "class", "svelte-1t7zuwa"),
                D(N, "title", "Schritt vorwärts"),
                D(N, "class", "dsimweb-iconButton"),
                N.disabled = j = t[1] === pe.SIMULATION_RUNNING,
                v(w, "margin-right", "20px"),
                v(e, "border", "2px solid lightgrey"),
                v(e, "padding", "5px"),
                v(e, "margin", "5px"),
                v(e, "flex", "none")
            },
            m(i, l) {
                s(i, e, l),
                d(e, n),
                d(n, I),
                d(e, c),
                d(e, g),
                d(g, a),
                d(e, m),
                d(e, N),
                d(N, Z),
                d(e, f),
                tt(G, e, null),
                d(e, T),
                d(e, w),
                d(e, W),
                Y && Y.m(e, null),
                z = !0,
                S || (O = [u(ac.call(null, n)), y(n, "click", t[6]), u(ac.call(null, g)), y(g, "click", t[7]), u(ac.call(null, N)), y(N, "click", t[8])],
                S = !0)
            },
            p(t, i) {
                (!z || 2 & i) && h(n, "selected", t[1] === pe.SIMULATION_PAUSED),
                (!z || 2 & i && !o(a.src, r = t[1] === pe.SIMULATION_RUNNING ? vg : Dg)) && D(a, "src", r),
                (!z || 2 & i && C !== (C = t[1] === pe.SIMULATION_RUNNING)) && (g.disabled = C),
                (!z || 2 & i && !o(Z.src, M = t[1] === pe.SIMULATION_RUNNING ? hg : Mg)) && D(Z, "src", M),
                (!z || 2 & i && j !== (j = t[1] === pe.SIMULATION_RUNNING)) && (N.disabled = j);
                const I = {};
                8 & i && (I.timestamp = t[3]),
                G.$set(I),
                t[1] === pe.SIMULATION_PAUSED ? Y ? Y.p(t, i) : (Y = wg(t),
                Y.c(),
                Y.m(e, null)) : Y && (Y.d(1),
                Y = null)
            },
            i(t) {
                z || (H(G.$$.fragment, t),
                z = !0)
            },
            o(t) {
                J(G.$$.fragment, t),
                z = !1
            },
            d(t) {
                t && p(e),
                et(G),
                Y && Y.d(),
                S = !1,
                i(O)
            }
        }
    }
    function wg(t) {
        let e, n, i, I, l, c, o, g, a = t[0].history.length - 1 + "";
        return {
            c() {
                e = A("span"),
                n = A("input"),
                l = N("/"),
                c = N(a),
                n.value = i = t[0].activeHistoryEntry,
                D(n, "type", "number"),
                D(n, "min", "0"),
                D(n, "max", I = t[0].history.length - 1),
                D(n, "step", "1")
            },
            m(i, I) {
                s(i, e, I),
                d(e, n),
                d(e, l),
                d(e, c),
                o || (g = y(n, "input", t[5]),
                o = !0)
            },
            p(t, e) {
                1 & e && i !== (i = t[0].activeHistoryEntry) && n.value !== i && (n.value = i),
                1 & e && I !== (I = t[0].history.length - 1) && D(n, "max", I),
                1 & e && a !== (a = t[0].history.length - 1 + "") && M(c, a)
            },
            d(t) {
                t && p(e),
                o = !1,
                g()
            }
        }
    }
    function Wg(t) {
        let e, n, i = (t[1] === pe.SIMULATION_RUNNING || t[1] === pe.SIMULATION_PAUSED) && Tg(t);
        return {
            c() {
                i && i.c(),
                e = Z()
            },
            m(t, I) {
                i && i.m(t, I),
                s(t, e, I),
                n = !0
            },
            p(t, [n]) {
                t[1] === pe.SIMULATION_RUNNING || t[1] === pe.SIMULATION_PAUSED ? i ? (i.p(t, n),
                2 & n && H(i, 1)) : (i = Tg(t),
                i.c(),
                H(i, 1),
                i.m(e.parentNode, e)) : i && (X(),
                J(i, 1, 1, (()=>{
                    i = null
                }
                )),
                F())
            },
            i(t) {
                n || (H(i),
                n = !0)
            },
            o(t) {
                J(i),
                n = !1
            },
            d(t) {
                i && i.d(t),
                t && p(e)
            }
        }
    }
    function zg(t, e, n) {
        let i, I, l;
        const c = Ye();
        a(t, c, (t=>n(2, l = t)));
        let o = 0;
        return t.$$.update = ()=>{
            4 & t.$$.dirty && n(0, i = l.simState),
            4 & t.$$.dirty && n(1, I = l.uiState.editMode),
            3 & t.$$.dirty && (I === pe.SIMULATION_RUNNING ? n(3, o = i.timestamp) : I === pe.SIMULATION_PAUSED ? n(3, o = i.history[i.activeHistoryEntry].timestamp) : n(3, o = 0))
        }
        ,
        [i, I, l, o, c, function(t) {
            const e = parseInt(t.target.value);
            isNaN(e) || 0 <= e && e <= i.history.length - 1 && c.set(function(t, e) {
                return tn(t, (t=>{
                    t.simState.activeHistoryEntry = e
                }
                ))
            }(l, e))
        }
        , ()=>{
            I === pe.SIMULATION_RUNNING ? c.set(function(t) {
                return tn(t, (e=>{
                    e.uiState.editMode = pe.SIMULATION_PAUSED,
                    e.simState.activeHistoryEntry = t.simState.history.length - 1
                }
                ))
            }(l)) : c.set(function(t, e) {
                const n = t.project.modules[t.project.activeModuleId]
                  , i = t.project;
                return tn(t, (t=>{
                    t.uiState.editMode = pe.SIMULATION_RUNNING;
                    let {systemTimestampStart: I, intervalId: l} = PI(e, n, i.modules);
                    t.simState.intervalId = l,
                    t.simState.systemTimestampPreviousTask = I
                }
                ))
            }(l, c))
        }
        , ()=>{
            console.log("click"),
            I === pe.SIMULATION_PAUSED && c.set(function(t) {
                return tn(t, (t=>{
                    t.simState.activeHistoryEntry - 1 >= 0 && (t.simState.activeHistoryEntry -= 1)
                }
                ))
            }(l))
        }
        , ()=>{
            I === pe.SIMULATION_PAUSED && c.set(function(t) {
                return tn(t, (t=>{
                    let e = t.simState;
                    e.activeHistoryEntry + 1 < e.history.length && (t.simState.activeHistoryEntry += 1)
                }
                ))
            }(l))
        }
        ]
    }
    class Sg extends It {
        constructor(t) {
            super(),
            it(this, t, zg, Wg, g, {})
        }
    }
    function Og(t, e, n) {
        const i = t.slice();
        return i[4] = e[n],
        i
    }
    function Yg(t, e, n) {
        const i = t.slice();
        return i[7] = e[n],
        i
    }
    function xg(t) {
        let e, n, i = t[7] + "";
        return {
            c() {
                e = N(i),
                n = N(" ")
            },
            m(t, i) {
                s(t, e, i),
                s(t, n, i)
            },
            p(t, n) {
                1 & n && i !== (i = t[7] + "") && M(e, i)
            },
            d(t) {
                t && p(e),
                t && p(n)
            }
        }
    }
    function kg(t) {
        let e, n, i, I, l, c, o, g, a, r = Math.round(1e3 * t[4].timestamp) / 1e3 + "", u = t[4].partId + "", m = t[4].newOutputValues, Z = [];
        for (let e = 0; e < m.length; e += 1)
            Z[e] = xg(Yg(t, m, e));
        return {
            c() {
                e = A("tr"),
                n = A("td"),
                i = N(r),
                I = b(),
                l = A("td"),
                c = N(u),
                o = b(),
                g = A("td");
                for (let t = 0; t < Z.length; t += 1)
                    Z[t].c();
                a = b()
            },
            m(t, r) {
                s(t, e, r),
                d(e, n),
                d(n, i),
                d(e, I),
                d(e, l),
                d(l, c),
                d(e, o),
                d(e, g);
                for (let t = 0; t < Z.length; t += 1)
                    Z[t] && Z[t].m(g, null);
                d(e, a)
            },
            p(t, e) {
                if (1 & e && r !== (r = Math.round(1e3 * t[4].timestamp) / 1e3 + "") && M(i, r),
                1 & e && u !== (u = t[4].partId + "") && M(c, u),
                1 & e) {
                    let n;
                    for (m = t[4].newOutputValues,
                    n = 0; n < m.length; n += 1) {
                        const i = Yg(t, m, n);
                        Z[n] ? Z[n].p(i, e) : (Z[n] = xg(i),
                        Z[n].c(),
                        Z[n].m(g, null))
                    }
                    for (; n < Z.length; n += 1)
                        Z[n].d(1);
                    Z.length = m.length
                }
            },
            d(t) {
                t && p(e),
                C(Z, t)
            }
        }
    }
    function Pg(e) {
        let n, i, I, l, c = e[0], o = [];
        for (let t = 0; t < c.length; t += 1)
            o[t] = kg(Og(e, c, t));
        return {
            c() {
                n = A("div"),
                i = A("table"),
                I = A("tr"),
                I.innerHTML = "<th>timestamp</th> \n            <th>partId</th>",
                l = b();
                for (let t = 0; t < o.length; t += 1)
                    o[t].c();
                v(i, "min-width", "300px")
            },
            m(t, e) {
                s(t, n, e),
                d(n, i),
                d(i, I),
                d(i, l);
                for (let t = 0; t < o.length; t += 1)
                    o[t] && o[t].m(i, null)
            },
            p(t, [e]) {
                if (1 & e) {
                    let n;
                    for (c = t[0],
                    n = 0; n < c.length; n += 1) {
                        const I = Og(t, c, n);
                        o[n] ? o[n].p(I, e) : (o[n] = kg(I),
                        o[n].c(),
                        o[n].m(i, null))
                    }
                    for (; n < o.length; n += 1)
                        o[n].d(1);
                    o.length = c.length
                }
            },
            i: t,
            o: t,
            d(t) {
                t && p(n),
                C(o, t)
            }
        }
    }
    function Lg(t, e, n) {
        let i, I;
        const l = Ye();
        a(t, l, (t=>n(3, I = t)));
        let c = [];
        return t.$$.update = ()=>{
            8 & t.$$.dirty && n(2, i = I.uiState.editMode),
            12 & t.$$.dirty && (i === pe.SIMULATION_RUNNING ? n(0, c = I.simState.queue) : i === pe.SIMULATION_PAUSED ? n(0, c = I.simState.history[I.simState.activeHistoryEntry].queue) : n(0, c = []))
        }
        ,
        [c, l, i, I]
    }
    class Rg extends It {
        constructor(t) {
            super(),
            it(this, t, Lg, Pg, g, {})
        }
    }
    function Qg(t) {
        const e = t.slice()
          , n = e[3].select.selectedPartIds[0];
        return e[16] = n,
        e
    }
    function Bg(t) {
        let e, n;
        return e = new Lc({
            props: {
                id: t[3].select.selectedTextFields[0]
            }
        }),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, n) {
                const i = {};
                8 & n && (i.id = t[3].select.selectedTextFields[0]),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function Ug(t) {
        let e, n;
        return e = new Bc({
            props: {
                id: t[3].select.selectedRects[0]
            }
        }),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            p(t, n) {
                const i = {};
                8 & n && (i.id = t[3].select.selectedRects[0]),
                e.$set(i)
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function $g(t) {
        let e, n, i = Ag(t[4].modules[t[4].activeModuleId].parts[t[16]].type), I = i && Eg(t);
        return {
            c() {
                I && I.c(),
                e = Z()
            },
            m(t, i) {
                I && I.m(t, i),
                s(t, e, i),
                n = !0
            },
            p(t, n) {
                24 & n && (i = Ag(t[4].modules[t[4].activeModuleId].parts[t[16]].type)),
                i ? I ? (I.p(t, n),
                24 & n && H(I, 1)) : (I = Eg(t),
                I.c(),
                H(I, 1),
                I.m(e.parentNode, e)) : I && (X(),
                J(I, 1, 1, (()=>{
                    I = null
                }
                )),
                F())
            },
            i(t) {
                n || (H(I),
                n = !0)
            },
            o(t) {
                J(I),
                n = !1
            },
            d(t) {
                I && I.d(t),
                t && p(e)
            }
        }
    }
    function Eg(t) {
        let e, n, i;
        var I = mg(t[4].modules[t[4].activeModuleId].parts[t[16]].type);
        function l(t) {
            return {
                props: {
                    id: t[16]
                }
            }
        }
        return I && (e = j(I, l(t))),
        {
            c() {
                e && q(e.$$.fragment),
                n = Z()
            },
            m(t, I) {
                e && tt(e, t, I),
                s(t, n, I),
                i = !0
            },
            p(t, i) {
                const c = {};
                if (8 & i && (c.id = t[16]),
                24 & i && I !== (I = mg(t[4].modules[t[4].activeModuleId].parts[t[16]].type))) {
                    if (e) {
                        X();
                        const t = e;
                        J(t.$$.fragment, 1, 0, (()=>{
                            et(t, 1)
                        }
                        )),
                        F()
                    }
                    I ? (e = j(I, l(t)),
                    q(e.$$.fragment),
                    H(e.$$.fragment, 1),
                    tt(e, n.parentNode, n)) : e = null
                } else
                    I && e.$set(c)
            },
            i(t) {
                i || (e && H(e.$$.fragment, t),
                i = !0)
            },
            o(t) {
                e && J(e.$$.fragment, t),
                i = !1
            },
            d(t) {
                t && p(n),
                e && et(e, t)
            }
        }
    }
    function Xg(t) {
        let e, n, i = (t[3].editMode === pe.SIMULATION_PAUSED || t[3].editMode === pe.SIMULATION_RUNNING) && Fg();
        return {
            c() {
                i && i.c(),
                e = Z()
            },
            m(t, I) {
                i && i.m(t, I),
                s(t, e, I),
                n = !0
            },
            p(t, n) {
                t[3].editMode === pe.SIMULATION_PAUSED || t[3].editMode === pe.SIMULATION_RUNNING ? i ? 8 & n && H(i, 1) : (i = Fg(),
                i.c(),
                H(i, 1),
                i.m(e.parentNode, e)) : i && (X(),
                J(i, 1, 1, (()=>{
                    i = null
                }
                )),
                F())
            },
            i(t) {
                n || (H(i),
                n = !0)
            },
            o(t) {
                J(i),
                n = !1
            },
            d(t) {
                i && i.d(t),
                t && p(e)
            }
        }
    }
    function Fg(t) {
        let e, n;
        return e = new Rg({}),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function Hg(e) {
        let n, i, I, l;
        i = new Zg({});
        let c = e[5].showSimulationMenu && function(t) {
            let e, n;
            return e = new Sg({}),
            {
                c() {
                    q(e.$$.fragment)
                },
                m(t, i) {
                    tt(e, t, i),
                    n = !0
                },
                i(t) {
                    n || (H(e.$$.fragment, t),
                    n = !0)
                },
                o(t) {
                    J(e.$$.fragment, t),
                    n = !1
                },
                d(t) {
                    et(e, t)
                }
            }
        }();
        return {
            c() {
                n = A("div"),
                q(i.$$.fragment),
                I = b(),
                c && c.c(),
                v(n, "display", "flex"),
                v(n, "flex-wrap", "wrap"),
                D(n, "class", "svelte-chi4wh")
            },
            m(t, e) {
                s(t, n, e),
                tt(i, n, null),
                d(n, I),
                c && c.m(n, null),
                l = !0
            },
            p: t,
            i(t) {
                l || (H(i.$$.fragment, t),
                H(c),
                l = !0)
            },
            o(t) {
                J(i.$$.fragment, t),
                J(c),
                l = !1
            },
            d(t) {
                t && p(n),
                et(i),
                c && c.d()
            }
        }
    }
    function Jg(t) {
        let e, n;
        return e = new xc({}),
        {
            c() {
                q(e.$$.fragment)
            },
            m(t, i) {
                tt(e, t, i),
                n = !0
            },
            i(t) {
                n || (H(e.$$.fragment, t),
                n = !0)
            },
            o(t) {
                J(e.$$.fragment, t),
                n = !1
            },
            d(t) {
                et(e, t)
            }
        }
    }
    function Vg(e) {
        let n, i, I, l, c, o, g, a, r, u, C, m, N, Z, M, j, f, G, T, w, W, z, S, O, Y, x, k, P, L, R, Q, B, U, $ = e[8](e[3]), E = e[9](e[3]), V = e[7](e[3]), K = e[5].showTopMenu && function(e) {
            let n, i;
            return n = new Sc({}),
            n.$on("screenshot", e[11]),
            {
                c() {
                    q(n.$$.fragment)
                },
                m(t, e) {
                    tt(n, t, e),
                    i = !0
                },
                p: t,
                i(t) {
                    i || (H(n.$$.fragment, t),
                    i = !0)
                },
                o(t) {
                    J(n.$$.fragment, t),
                    i = !1
                },
                d(t) {
                    et(n, t)
                }
            }
        }(e), _ = e[5].showPartsMenu && function(t) {
            let e, n;
            return e = new gc({
                props: {
                    availableParts: t[1]
                }
            }),
            {
                c() {
                    q(e.$$.fragment)
                },
                m(t, i) {
                    tt(e, t, i),
                    n = !0
                },
                p(t, n) {
                    const i = {};
                    2 & n && (i.availableParts = t[1]),
                    e.$set(i)
                },
                i(t) {
                    n || (H(e.$$.fragment, t),
                    n = !0)
                },
                o(t) {
                    J(e.$$.fragment, t),
                    n = !1
                },
                d(t) {
                    et(e, t)
                }
            }
        }(e);
        o = new Hl({
            props: {}
        }),
        e[15](o);
        let nt = $ && Bg(e)
          , it = E && Ug(e)
          , It = V && $g(Qg(e))
          , lt = e[5].modules && function(t) {
            let e, n;
            return e = new lo({}),
            {
                c() {
                    q(e.$$.fragment)
                },
                m(t, i) {
                    tt(e, t, i),
                    n = !0
                },
                i(t) {
                    n || (H(e.$$.fragment, t),
                    n = !0)
                },
                o(t) {
                    J(e.$$.fragment, t),
                    n = !1
                },
                d(t) {
                    et(e, t)
                }
            }
        }()
          , ct = e[0] && Xg(e)
          , ot = e[5].showBottomMenu && Hg(e)
          , gt = e[0] && Jg();
        return j = new Fo({}),
        G = new po({}),
        w = new Zo({}),
        z = new jo({}),
        O = new Oo({}),
        x = new Uo({}),
        P = new _o({}),
        R = new ng({}),
        {
            c() {
                n = A("div"),
                K && K.c(),
                i = b(),
                I = A("div"),
                _ && _.c(),
                l = b(),
                c = A("div"),
                q(o.$$.fragment),
                g = b(),
                a = A("div"),
                nt && nt.c(),
                r = b(),
                it && it.c(),
                u = b(),
                It && It.c(),
                C = b(),
                lt && lt.c(),
                m = b(),
                ct && ct.c(),
                N = b(),
                ot && ot.c(),
                Z = b(),
                gt && gt.c(),
                M = b(),
                q(j.$$.fragment),
                f = b(),
                q(G.$$.fragment),
                T = b(),
                q(w.$$.fragment),
                W = b(),
                q(z.$$.fragment),
                S = b(),
                q(O.$$.fragment),
                Y = b(),
                q(x.$$.fragment),
                k = b(),
                q(P.$$.fragment),
                L = b(),
                q(R.$$.fragment),
                v(a, "position", "absolute"),
                v(a, "top", "0px"),
                v(a, "right", "0px"),
                v(a, "background-color", "white"),
                D(a, "class", "svelte-chi4wh"),
                v(c, "flex-grow", "1"),
                v(c, "border", "2px solid lightgrey"),
                v(c, "padding", "5px"),
                v(c, "margin", "5px"),
                v(c, "position", "relative"),
                D(c, "class", "svelte-chi4wh"),
                v(I, "display", "flex"),
                v(I, "user-select", "none"),
                v(I, "flex", "1 1 auto"),
                v(I, "height", "0px"),
                D(I, "class", "svelte-chi4wh"),
                D(n, "class", "noOutline nodrag noselect svelte-chi4wh"),
                v(n, "display", "flex"),
                v(n, "flex-direction", "column"),
                v(n, "height", "100%"),
                v(n, "touch-action", "none"),
                D(n, "tabindex", "-1"),
                h(n, "fullscreen", e[3].fullscreen)
            },
            m(t, p) {
                s(t, n, p),
                K && K.m(n, null),
                d(n, i),
                d(n, I),
                _ && _.m(I, null),
                d(I, l),
                d(I, c),
                tt(o, c, null),
                d(c, g),
                d(c, a),
                nt && nt.m(a, null),
                d(a, r),
                it && it.m(a, null),
                d(a, u),
                It && It.m(a, null),
                d(I, C),
                lt && lt.m(I, null),
                d(I, m),
                ct && ct.m(I, null),
                d(n, N),
                ot && ot.m(n, null),
                d(n, Z),
                gt && gt.m(n, null),
                s(t, M, p),
                tt(j, t, p),
                s(t, f, p),
                tt(G, t, p),
                s(t, T, p),
                tt(w, t, p),
                s(t, W, p),
                tt(z, t, p),
                s(t, S, p),
                tt(O, t, p),
                s(t, Y, p),
                tt(x, t, p),
                s(t, k, p),
                tt(P, t, p),
                s(t, L, p),
                tt(R, t, p),
                Q = !0,
                B || (U = y(n, "keydown", e[10]),
                B = !0)
            },
            p(t, [e]) {
                t[5].showTopMenu && K.p(t, e),
                t[5].showPartsMenu && _.p(t, e);
                o.$set({}),
                8 & e && ($ = t[8](t[3])),
                $ ? nt ? (nt.p(t, e),
                8 & e && H(nt, 1)) : (nt = Bg(t),
                nt.c(),
                H(nt, 1),
                nt.m(a, r)) : nt && (X(),
                J(nt, 1, 1, (()=>{
                    nt = null
                }
                )),
                F()),
                8 & e && (E = t[9](t[3])),
                E ? it ? (it.p(t, e),
                8 & e && H(it, 1)) : (it = Ug(t),
                it.c(),
                H(it, 1),
                it.m(a, u)) : it && (X(),
                J(it, 1, 1, (()=>{
                    it = null
                }
                )),
                F()),
                8 & e && (V = t[7](t[3])),
                V ? It ? (It.p(Qg(t), e),
                8 & e && H(It, 1)) : (It = $g(Qg(t)),
                It.c(),
                H(It, 1),
                It.m(a, null)) : It && (X(),
                J(It, 1, 1, (()=>{
                    It = null
                }
                )),
                F()),
                t[0] ? ct ? (ct.p(t, e),
                1 & e && H(ct, 1)) : (ct = Xg(t),
                ct.c(),
                H(ct, 1),
                ct.m(I, null)) : ct && (X(),
                J(ct, 1, 1, (()=>{
                    ct = null
                }
                )),
                F()),
                t[5].showBottomMenu && ot.p(t, e),
                t[0] ? gt ? 1 & e && H(gt, 1) : (gt = Jg(),
                gt.c(),
                H(gt, 1),
                gt.m(n, null)) : gt && (X(),
                J(gt, 1, 1, (()=>{
                    gt = null
                }
                )),
                F()),
                (!Q || 8 & e) && h(n, "fullscreen", t[3].fullscreen)
            },
            i(t) {
                Q || (H(K),
                H(_),
                H(o.$$.fragment, t),
                H(nt),
                H(it),
                H(It),
                H(lt),
                H(ct),
                H(ot),
                H(gt),
                H(j.$$.fragment, t),
                H(G.$$.fragment, t),
                H(w.$$.fragment, t),
                H(z.$$.fragment, t),
                H(O.$$.fragment, t),
                H(x.$$.fragment, t),
                H(P.$$.fragment, t),
                H(R.$$.fragment, t),
                Q = !0)
            },
            o(t) {
                J(K),
                J(_),
                J(o.$$.fragment, t),
                J(nt),
                J(it),
                J(It),
                J(lt),
                J(ct),
                J(ot),
                J(gt),
                J(j.$$.fragment, t),
                J(G.$$.fragment, t),
                J(w.$$.fragment, t),
                J(z.$$.fragment, t),
                J(O.$$.fragment, t),
                J(x.$$.fragment, t),
                J(P.$$.fragment, t),
                J(R.$$.fragment, t),
                Q = !1
            },
            d(t) {
                t && p(n),
                K && K.d(),
                _ && _.d(),
                e[15](null),
                et(o),
                nt && nt.d(),
                it && it.d(),
                It && It.d(),
                lt && lt.d(),
                ct && ct.d(),
                ot && ot.d(),
                gt && gt.d(),
                t && p(M),
                et(j, t),
                t && p(f),
                et(G, t),
                t && p(T),
                et(w, t),
                t && p(W),
                et(z, t),
                t && p(S),
                et(O, t),
                t && p(Y),
                et(x, t),
                t && p(k),
                et(P, t),
                t && p(L),
                et(R, t),
                B = !1,
                U()
            }
        }
    }
    function Kg(t, e, n) {
        let i, I, l, {debug: c=!1} = e, {configurationName: o="full"} = e, {availableParts: g="all"} = e;
        var r;
        r = Object.assign(Object.assign({}, An[o]), {
            debug: c
        }),
        W(mn, r);
        const u = Nn();
        let d;
        !function() {
            let t = Ig(de);
            W(we, t);
            let e = Ig(de);
            W(We, e);
            let n = Ig({
                x: 0,
                y: 0
            });
            W(Te, n);
            let i = Ig(lg);
            W(ze, i)
        }();
        const s = Ye();
        a(t, s, (t=>n(14, l = t)));
        let {fileUrl: p} = e;
        return "string" == typeof p && function(t) {
            G().$$.on_mount.push(t)
        }((async()=>{
            const t = await fetch(p);
            let e = await t.text();
            s.set(Dc(l, e)),
            u.startEditMode === pe.SIMULATION_RUNNING && s.set(UI(l, u.maxNumOfSimSteps, s))
        }
        )),
        s.set(function(t) {
            return tn(t, (t=>{
                en(t)
            }
            ))
        }(l)),
        t.$$set = t=>{
            "debug"in t && n(0, c = t.debug),
            "configurationName"in t && n(12, o = t.configurationName),
            "availableParts"in t && n(1, g = t.availableParts),
            "fileUrl"in t && n(13, p = t.fileUrl)
        }
        ,
        t.$$.update = ()=>{
            16384 & t.$$.dirty && n(3, i = l.uiState),
            16384 & t.$$.dirty && n(4, I = l.project)
        }
        ,
        [c, g, d, i, I, u, s, function(t) {
            return 1 === t.select.selectedPartIds.length && 0 === t.select.selectedRects.length && 0 === t.select.selectedTextFields.length && 0 === Object.keys(t.select.selectedConnectionPoints).length
        }
        , function(t) {
            return 0 === t.select.selectedPartIds.length && 0 === t.select.selectedRects.length && 1 === t.select.selectedTextFields.length && 0 === Object.keys(t.select.selectedConnectionPoints).length
        }
        , function(t) {
            return 0 === t.select.selectedPartIds.length && 1 === t.select.selectedRects.length && 0 === t.select.selectedTextFields.length && 0 === Object.keys(t.select.selectedConnectionPoints).length
        }
        , function(t) {
            "Delete" === t.key && (i.editMode !== pe.NEUTRAL && i.editMode !== pe.ADD_PART && i.editMode !== pe.ADD_POINT && i.editMode !== pe.ADD_RECT && i.editMode !== pe.ADD_TEXTFIELD && i.editMode !== pe.DELETE || s.set(function(t) {
                const e = t.uiState.select;
                return tn(t, (n=>{
                    const i = n.uiState
                      , I = n.project.modules[t.project.activeModuleId];
                    for (let t of e.selectedTextFields)
                        delete I.textFields[t];
                    for (let[t,n] of Object.entries(e.selectedConnectionPoints))
                        for (let[e,i] of Object.entries(n))
                            if (i) {
                                delete I.connections[t].points[e];
                                const n = I.connections[t].pointOrder.findIndex((t=>t === e));
                                I.connections[t].pointOrder.splice(n, 1)
                            }
                    for (let t of e.selectedPartIds)
                        an(I, t);
                    for (let t of e.selectedRects)
                        delete I.rects[t];
                    yn(i),
                    en(n)
                }
                ))
            }(l)))
        }
        , function() {
            var t = document.createElement("a");
            t.download = "logic-screenshot.svg",
            t.href = "data:image/svg+xml;charset=utf-8," + d.getSVG(),
            t.click()
        }
        , o, p, l, function(t) {
            O[t ? "unshift" : "push"]((()=>{
                d = t,
                n(2, d)
            }
            ))
        }
        ]
    }
    class _g extends It {
        constructor(t) {
            super(),
            it(this, t, Kg, Vg, g, {
                debug: 0,
                configurationName: 12,
                availableParts: 1,
                fileUrl: 13
            })
        }
    }
    let qg = document.getElementsByClassName("logic-simulator");
    for (let t of qg) {
        let e = null;
        t.hasAttribute("data-datei") && (e = "" === baseURL && "" === baseContentPath ? t.getAttribute("data-datei") :  "./" + t.getAttribute("data-datei"));
        let n = "full";
        t.hasAttribute("data-konfiguration") && (n = t.getAttribute("data-konfiguration"));
        let i = !1;
        t.hasAttribute("data-debug") && (i = "true" === t.getAttribute("data-debug"));
        let I = "all";
        t.hasAttribute("data-available-parts") && (I = t.getAttribute("data-available-parts")),
        new _g({
            target: t,
            props: {
                fileUrl: e,
                configurationName: n,
                debug: i,
                availableParts: I
            }
        })
    }
}();
