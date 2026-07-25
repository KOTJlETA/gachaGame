/* Headless smoke harness (jsc). Not part of the game. */
function makeGrad() { return { addColorStop() {} }; }

function makeCtx(canvas) {
  const base = {
    canvas,
    getImageData(x, y, w, h) { return { data: new Uint8ClampedArray(Math.max(4, (w | 0) * (h | 0) * 4)) }; },
    createImageData(w, h) { return { data: new Uint8ClampedArray(Math.max(4, (w | 0) * (h | 0) * 4)) }; },
    createLinearGradient() { return makeGrad(); },
    createRadialGradient() { return makeGrad(); },
    createPattern() { return null; },
    measureText() { return { width: 12 }; }
  };
  return new Proxy(base, {
    get(t, k) {
      if (k in t) return t[k];
      return function () { return undefined; };
    },
    set(t, k, v) { t[k] = v; return true; }
  });
}

function makeClassList() {
  const set = {};
  return {
    add(c) { set[c] = true; },
    remove(c) { delete set[c]; },
    toggle(c, on) { if (on === undefined) { set[c] = !set[c]; } else if (on) { set[c] = true; } else { delete set[c]; } },
    contains(c) { return !!set[c]; }
  };
}

function makeEl(tag) {
  const el = {
    tagName: (tag || 'div').toUpperCase(),
    width: 48, height: 48,
    style: {}, dataset: {},
    textContent: '', innerHTML: '', value: '', checked: false,
    scrollTop: 0, className: '',
    options: [{ textContent: '' }, { textContent: '' }],
    classList: makeClassList(),
    getContext() { return makeCtx(el); },
    toDataURL() { return 'data:,'; },
    addEventListener() {}, removeEventListener() {},
    appendChild() {}, setPointerCapture() {},
    querySelector() { return makeEl('div'); },
    querySelectorAll() { return { forEach() {}, length: 0 }; },
    getBoundingClientRect() { return { left: 0, top: 0, width: 1280, height: 720 }; },
    closest() { return null; },
    onclick: null, onchange: null
  };
  return el;
}

const elCache = {};
globalThis.window = globalThis;
globalThis.document = {
  readyState: 'complete',
  documentElement: { lang: 'en' },
  body: { classList: makeClassList() },
  createElement(tag) { return makeEl(tag); },
  getElementById(id) {
    if (!elCache[id]) elCache[id] = makeEl('div');
    return elCache[id];
  },
  querySelectorAll() { return { forEach() {}, length: 0 }; },
  addEventListener() {}
};
globalThis.localStorage = {
  _d: {},
  getItem(k) { return Object.prototype.hasOwnProperty.call(this._d, k) ? this._d[k] : null; },
  setItem(k, v) { this._d[k] = String(v); },
  removeItem(k) { delete this._d[k]; }
};
let _now = 0;
globalThis.performance = { now() { _now += 16; return _now; } };
globalThis.navigator = { maxTouchPoints: 0 };
globalThis.matchMedia = function () { return { matches: false }; };
globalThis.requestAnimationFrame = function () { return 0; };
globalThis.capturedKeydown = [];
globalThis.addEventListener = function (type, fn) {
  if (type === 'keydown') capturedKeydown.push(fn);
};
globalThis.innerWidth = 1280;
globalThis.innerHeight = 720;
globalThis.AudioContext = undefined;
globalThis.webkitAudioContext = undefined;

const files = ['assets/js/game.js', 'assets/js/spatial.js', 'assets/js/effects.js',
  'assets/js/weapons.js', 'assets/js/upgrades.js', 'assets/js/meta.js'];
for (const f of files) load(f);

function fakeDragons() {
  const mk = () => makeEl('canvas');
  const out = {};
  for (const v of ['crimson', 'void', 'bone', 'ember']) {
    out[v] = { still: mk(), walk: [mk(), mk(), mk(), mk(), mk(), mk(), mk(), mk()] };
  }
  return out;
}
globalThis.fakeDragons = fakeDragons;
