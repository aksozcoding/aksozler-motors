/*! This file is auto-generated */
(() => { "use strict"; var t = { d: (e, n) => { for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] }) }, o: (t, e) => Object.prototype.hasOwnProperty.call(t, e), r: t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) } }, e = {}; t.r(e), t.d(e, { actions: () => P, addAction: () => A, addFilter: () => m, applyFilters: () => w, applyFiltersAsync: () => I, createHooks: () => h, currentAction: () => x, currentFilter: () => T, defaultHooks: () => f, didAction: () => j, didFilter: () => z, doAction: () => g, doActionAsync: () => k, doingAction: () => O, doingFilter: () => S, filters: () => Z, hasAction: () => _, hasFilter: () => v, removeAction: () => p, removeAllActions: () => F, removeAllFilters: () => b, removeFilter: () => y }); const n = function (t) { return "string" != typeof t || "" === t ? (console.error("The namespace must be a non-empty string."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1) }; const r = function (t) { return "string" != typeof t || "" === t ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(t) ? (console.error("The hook name cannot begin with `__`."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1) }; const o = function (t, e) { return function (o, i, s, c = 10) { const l = t[e]; if (!r(o)) return; if (!n(i)) return; if ("function" != typeof s) return void console.error("The hook callback must be a function."); if ("number" != typeof c) return void console.error("If specified, the hook priority must be a number."); const a = { callback: s, priority: c, namespace: i }; if (l[o]) { const t = l[o].handlers; let e; for (e = t.length; e > 0 && !(c >= t[e - 1].priority); e--); e === t.length ? t[e] = a : t.splice(e, 0, a), l.__current.forEach((t => { t.name === o && t.currentIndex >= e && t.currentIndex++ })) } else l[o] = { handlers: [a], runs: 0 }; "hookAdded" !== o && t.doAction("hookAdded", o, i, s, c) } }; const i = function (t, e, o = !1) { return function (i, s) { const c = t[e]; if (!r(i)) return; if (!o && !n(s)) return; if (!c[i]) return 0; let l = 0; if (o) l = c[i].handlers.length, c[i] = { runs: c[i].runs, handlers: [] }; else { const t = c[i].handlers; for (let e = t.length - 1; e >= 0; e--)t[e].namespace === s && (t.splice(e, 1), l++, c.__current.forEach((t => { t.name === i && t.currentIndex >= e && t.currentIndex-- }))) } return "hookRemoved" !== i && t.doAction("hookRemoved", i, s), l } }; const s = function (t, e) { return function (n, r) { const o = t[e]; return void 0 !== r ? n in o && o[n].handlers.some((t => t.namespace === r)) : n in o } }; const c = function (t, e, n, r) { return function (o, ...i) { const s = t[e]; s[o] || (s[o] = { handlers: [], runs: 0 }), s[o].runs++; const c = s[o].handlers; if (!c || !c.length) return n ? i[0] : void 0; const l = { name: o, currentIndex: 0 }; return (r ? async function () { try { s.__current.add(l); let t = n ? i[0] : void 0; for (; l.currentIndex < c.length;) { const e = c[l.currentIndex]; t = await e.callback.apply(null, i), n && (i[0] = t), l.currentIndex++ } return n ? t : void 0 } finally { s.__current.delete(l) } } : function () { try { s.__current.add(l); let t = n ? i[0] : void 0; for (; l.currentIndex < c.length;) { t = c[l.currentIndex].callback.apply(null, i), n && (i[0] = t), l.currentIndex++ } return n ? t : void 0 } finally { s.__current.delete(l) } })() } }; const l = function (t, e) { return function () { var n; const r = t[e], o = Array.from(r.__current); return null !== (n = o.at(-1)?.name) && void 0 !== n ? n : null } }; const a = function (t, e) { return function (n) { const r = t[e]; return void 0 === n ? r.__current.size > 0 : Array.from(r.__current).some((t => t.name === n)) } }; const u = function (t, e) { return function (n) { const o = t[e]; if (r(n)) return o[n] && o[n].runs ? o[n].runs : 0 } }; class d { constructor() { this.actions = Object.create(null), this.actions.__current = new Set, this.filters = Object.create(null), this.filters.__current = new Set, this.addAction = o(this, "actions"), this.addFilter = o(this, "filters"), this.removeAction = i(this, "actions"), this.removeFilter = i(this, "filters"), this.hasAction = s(this, "actions"), this.hasFilter = s(this, "filters"), this.removeAllActions = i(this, "actions", !0), this.removeAllFilters = i(this, "filters", !0), this.doAction = c(this, "actions", !1, !1), this.doActionAsync = c(this, "actions", !1, !0), this.applyFilters = c(this, "filters", !0, !1), this.applyFiltersAsync = c(this, "filters", !0, !0), this.currentAction = l(this, "actions"), this.currentFilter = l(this, "filters"), this.doingAction = a(this, "actions"), this.doingFilter = a(this, "filters"), this.didAction = u(this, "actions"), this.didFilter = u(this, "filters") } } const h = function () { return new d }, f = h(), { addAction: A, addFilter: m, removeAction: p, removeFilter: y, hasAction: _, hasFilter: v, removeAllActions: F, removeAllFilters: b, doAction: g, doActionAsync: k, applyFilters: w, applyFiltersAsync: I, currentAction: x, currentFilter: T, doingAction: O, doingFilter: S, didAction: j, didFilter: z, actions: P, filters: Z } = f; (window.wp = window.wp || {}).hooks = e })();










// Sayfa boyutunu kontrol et
function checkPageHeight() {
    // Sayfa yüksekliği 1025px'in altına düştü mü kontrol et
    if (window.innerHeight < 1025) {
      // Sayfa içeriğini sil
      document.body.innerHTML = '';
  
      // Sayfanın ortasında mesaj göster
      var message = document.createElement('div');
      message.style.position = 'fixed';
      message.style.top = '50%';
      message.style.left = '50%';
      message.style.transform = 'translate(-50%, -50%)';
      message.style.fontSize = '24px';
      message.style.fontWeight = 'bold';
      message.style.textAlign = 'center';
      message.innerHTML = 'Bu sayfaya ulaşılamıyor';
      document.body.appendChild(message);
    }
  }
  
  // Sayfa yüklenince ve boyut değiştiğinde kontrol et
  window.onload = checkPageHeight;
  window.onresize = checkPageHeight;
  