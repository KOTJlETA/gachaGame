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
globalThis.addEventListener = function () {};
globalThis.innerWidth = 1280;
globalThis.innerHeight = 720;
globalThis.AudioContext = undefined;
globalThis.webkitAudioContext = undefined;

const files = ['assets/js/game.js', 'assets/js/spatial.js', 'assets/js/effects.js',
  'assets/js/weapons.js', 'assets/js/upgrades.js', 'assets/js/meta.js'];
for (const f of files) {
  try {
    load(f);
  } catch (e) {
    print('LOAD_FAIL ' + f + ': ' + e + '\n' + (e && e.stack));
    throw e;
  }
}
print('modules loaded');

function fakeDragons() {
  const mk = () => makeEl('canvas');
  const out = {};
  for (const v of ['crimson', 'void', 'bone', 'ember']) {
    out[v] = { still: mk(), walk: [mk(), mk(), mk(), mk(), mk(), mk(), mk(), mk()] };
  }
  return out;
}

let errors = 0;
let picks = 0;
function step(game, dt) {
  try {
    if (game.state !== 'playing') throw new Error('unexpected state ' + game.state);
    if (game.upgrades.isOpen()) {
      picks++;
      game.upgrades.pick(Math.floor(Math.random() * 5));
      return;
    }
    game.update(dt);
    game.draw();
    game.ui.update(dt, game.player);
  } catch (e) {
    errors++;
    print('RUNTIME_ERROR: ' + e + '\n' + (e && e.stack));
    if (errors > 3) throw e;
  }
}

I18n.init();
// bootGame does this in the browser; jsc has no setTimeout so do it manually
if (typeof window._bindWeaponSounds === 'function') window._bindWeaponSounds();
print('weapon sfx bound=' + (typeof SoundManager.weaponShotgun === 'function'));
const game = new Game(fakeDragons());
print('game constructed; weapons=' + game.weapons.slots.length);
game.startGame();
print('after startGame weapons=' + JSON.stringify(game.weapons.toSaveData()));
game.player.invulnerable = true;

// Force a fat XP injection so the upgrade flow (and every weapon) gets exercised
for (let i = 0; i < 1200; i++) {
  step(game, 0.016);
  if (i % 40 === 0) game.addCurrency(600);
}
print('phase1 done. picks=' + picks + ' level=' + game.player.level +
  ' weapons=' + JSON.stringify(game.weapons.toSaveData()) +
  ' stats=' + JSON.stringify(game.player.selectedStatIds) +
  ' enemies=' + game.enemyPool.countActive() +
  ' proj=' + game.projPool.countActive() +
  ' hp=' + game.player.health.toFixed(1));

// Max out every weapon along both branches and run again
game.weapons.reset();
for (const id of WEAPON_IDS.slice(0, 5)) {
  const w = game.weapons.grant(id, 1, null);
  for (let l = 0; l < 6; l++) game.weapons.upgrade(id, 'A');
}
for (let i = 0; i < 400; i++) step(game, 0.016);
print('phase2 (branch A) done: ' + JSON.stringify(game.weapons.toSaveData()));

game.weapons.reset();
for (const id of WEAPON_IDS.slice(5)) {
  game.weapons.grant(id, 1, null);
  for (let l = 0; l < 6; l++) game.weapons.upgrade(id, 'B');
}
for (let i = 0; i < 400; i++) step(game, 0.016);
print('phase3 (branch B) done: ' + JSON.stringify(game.weapons.toSaveData()));

// Save / load round trip
SaveManager.save(game);
const raw = localStorage.getItem(SaveManager.KEY);
print('saved bytes=' + (raw ? raw.length : 0));
game.player.reset();
game.weapons.reset();
const ok = SaveManager.load(game);
print('reload ok=' + ok + ' weapons=' + JSON.stringify(game.weapons.toSaveData()));

// Version mismatch must wipe the save
localStorage.setItem(SaveManager.KEY, JSON.stringify({ version: 1, player: {} }));
print('stale load=' + SaveManager.load(game) + ' cleared=' + (localStorage.getItem(SaveManager.KEY) === null));

// Test mode + help + stats panels
game.startTestMode();
for (let i = 0; i < 200; i++) step(game, 0.016);
print('testmode done weapons=' + game.weapons.slots.length + ' enemies=' + game.enemyPool.countActive());
game._buildStatsPanel();
game.help.rebuild();
I18n.setLang('ru');
game._buildStatsPanel();
game.help.rebuild();
game.upgrades.enqueue(1);
print('ru render ok, choiceOpen=' + game.upgrades.isOpen());
I18n.setLang('en');

game.upgrades.reset();

// Pending picks must survive a save/load and reopen on startGame
game.testMode = false;
game.upgrades.pendingRolls = 4;
SaveManager.save(game);
game.upgrades.reset();
game.startGame();
print('pending reopened=' + game.upgrades.isOpen() + ' remaining=' + game.upgrades.pendingRolls);
while (game.upgrades.isOpen()) { picks++; game.upgrades.pick(0); }
print('drained pending=' + game.upgrades.pendingRolls);

// Chests hand out picks per tier
game.upgrades.reset();
const before = { rolls: 0 };
for (const tier of ['common', 'rare', 'epic']) {
  game.upgrades.pendingRolls = 0;
  game.upgrades.close();
  const c = game.chestPool.acquire();
  c.spawn(game.player.x, game.player.y, tier, {
    common: game.sprites.chestCommon, rare: game.sprites.chestRare, epic: game.sprites.chestEpic
  });
  const lvBefore = game.player.level;
  c.update(0.016, game.player, game);
  // one roll opens immediately, the rest stay queued
  print('chest ' + tier + ' -> open=' + game.upgrades.isOpen() + ' queued=' + game.upgrades.pendingRolls +
    ' levelUps=' + (game.player.level - lvBefore));
}
game.upgrades.reset();

// Shield absorption: bomber eats the shield, then kills
game.weapons.reset();
game.player.reset();
game.player.invulnerable = false;
game.weapons.grant('towerShield', 2, null);
game.weapons.update(0.016, game);
const shieldBefore = game.weapons.get('towerShield').state.shield;
game.player.bomberHit(game);
print('shield ' + shieldBefore.toFixed(0) + ' -> ' + game.weapons.get('towerShield').state.shield.toFixed(0) +
  ' alive=' + game.player.alive);
game.player.bomberHit(game);
print('second bomber alive=' + game.player.alive);

// Death must roll into gameOver
game.state = 'playing';
game.player.reset();
game.player.invulnerable = false;
game.player.takeDamage(100000, game);
game.update(0.016);
print('state after death=' + game.state + ' weaponsCleared=' + (game.weapons.slots.length === 0));

print(errors === 0 ? 'SMOKE_OK' : ('SMOKE_ERRORS=' + errors));
