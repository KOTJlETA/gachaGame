'use strict';

/* Persistent banked gold + permanent start-of-run bonuses (menu Store). */
const MetaProgression = {
  KEY: 'bullshitSurvivorsMeta',
  gold: 0,
  levels: {},
  discovered: { enemies: [], items: [], weapons: [] },

  DEFS: [
    { id: 'moveSpeed', max: 5, perLevel: 0.10, costs: [100, 200, 400, 800, 1600],
      icon: 'moveSpeed', labelKey: 'storeMove', valueKey: 'storeMoveVal' },
    { id: 'maxHealth', max: 5, perLevel: 0.20, costs: [150, 300, 600, 1200, 2400],
      icon: 'maxHealth', labelKey: 'storeHealth', valueKey: 'storeHealthVal' },
    { id: 'attack', max: 5, perLevel: 0.20, costs: [150, 300, 600, 1200, 2400],
      icon: 'attack', labelKey: 'storeAttack', valueKey: 'storeAttackVal' },
    { id: 'attackSpeed', max: 5, perLevel: 0.20, costs: [150, 300, 600, 1200, 2400],
      icon: 'attackSpeed', labelKey: 'storeAspd', valueKey: 'storeAspdVal' },
    { id: 'bulletCount', max: 3, perLevel: 1, costs: [250, 750, 2000],
      icon: 'bulletCount', labelKey: 'storeBullets', valueKey: 'storeBulletsVal' },
    { id: 'critical', max: 5, critChance: 0.05, critDamage: 0.10,
      costs: [200, 400, 800, 1600, 3200],
      icon: 'critChance', labelKey: 'storeCrit', valueKey: 'storeCritVal' },
    { id: 'expMultiplier', max: 10, perLevel: 0.10,
      costs: [80, 120, 180, 270, 400, 600, 900, 1300, 1900, 2800],
      icon: 'expMultiplier', labelKey: 'storeExp', valueKey: 'storeExpVal' },
    { id: 'luck', max: 10, perLevel: 0.10,
      costs: [80, 120, 180, 270, 400, 600, 900, 1300, 1900, 2800],
      icon: 'luck', labelKey: 'storeLuck', valueKey: 'storeLuckVal' }
  ],

  _emptyLevels() {
    const o = {};
    for (const d of this.DEFS) o[d.id] = 0;
    return o;
  },

  _emptyDiscovered() {
    return { enemies: [], items: [], weapons: [] };
  },

  load() {
    this.levels = this._emptyLevels();
    this.gold = 0;
    this.discovered = this._emptyDiscovered();
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (!data) return;
      this.gold = Math.max(0, Math.floor(data.gold || 0));
      const lv = data.levels || {};
      for (const d of this.DEFS) {
        this.levels[d.id] = Math.max(0, Math.min(d.max, lv[d.id] | 0));
      }
      const disc = data.discovered || {};
      this.discovered = {
        enemies: Array.isArray(disc.enemies) ? disc.enemies.slice() : [],
        items: Array.isArray(disc.items) ? disc.items.slice() : [],
        weapons: Array.isArray(disc.weapons) ? disc.weapons.slice() : []
      };
    } catch (e) { /* ignore */ }
  },

  save() {
    try {
      localStorage.setItem(this.KEY, JSON.stringify({
        gold: Math.floor(this.gold),
        levels: { ...this.levels },
        discovered: {
          enemies: this.discovered.enemies.slice(),
          items: this.discovered.items.slice(),
          weapons: this.discovered.weapons.slice()
        }
      }));
    } catch (e) { /* ignore */ }
  },

  clear() {
    this.gold = 0;
    this.levels = this._emptyLevels();
    this.discovered = this._emptyDiscovered();
    try { localStorage.removeItem(this.KEY); } catch (e) {}
  },

  levelOf(id) {
    return this.levels[id] | 0;
  },

  def(id) {
    return this.DEFS.find((d) => d.id === id) || null;
  },

  costOf(id) {
    const d = this.def(id);
    if (!d) return null;
    const lv = this.levelOf(id);
    if (lv >= d.max) return null;
    return d.costs[lv];
  },

  canBuy(id) {
    const cost = this.costOf(id);
    return cost != null && this.gold >= cost;
  },

  buy(id) {
    const cost = this.costOf(id);
    if (cost == null || this.gold < cost) return false;
    this.gold -= cost;
    this.levels[id] = (this.levels[id] | 0) + 1;
    this.save();
    return true;
  },

  addGold(amount) {
    if (!(amount > 0)) return;
    this.gold += amount;
    this.save();
  },

  discover(kind, id) {
    if (!id || !this.discovered[kind]) return false;
    if (this.discovered[kind].includes(id)) return false;
    this.discovered[kind].push(id);
    this.save();
    return true;
  },

  hasDiscovered(kind, id) {
    return !!(this.discovered[kind] && this.discovered[kind].includes(id));
  },

  /* Flat bonus fractions / points applied at the start of every run. */
  bonuses() {
    const b = {
      moveSpeed: 0, maxHealth: 0, attack: 0, attackSpeed: 0,
      bulletCount: 0, critChance: 0, critDamageBonus: 0,
      expMultiplier: 0, luck: 0
    };
    for (const d of this.DEFS) {
      const n = this.levelOf(d.id);
      if (!n) continue;
      if (d.id === 'critical') {
        b.critChance += d.critChance * n;
        b.critDamageBonus += d.critDamage * n;
      } else if (d.id === 'bulletCount') {
        b.bulletCount += d.perLevel * n;
      } else {
        b[d.id] += d.perLevel * n;
      }
    }
    return b;
  }
};

window.MetaProgression = MetaProgression;
