'use strict';

/* Persistent banked gold + permanent start-of-run bonuses (menu Store). */
const MetaProgression = {
  KEY: 'bullshitSurvivorsMeta',
  gold: 0,
  levels: {},
  // Per-bonus on/off switch; a purchased bonus can be disabled without refunding
  enabled: {},
  discovered: { enemies: [], items: [], weapons: [] },
  selectedCharacter: 'hunter',

  DEFS: [
    { id: 'moveSpeed', max: 10, perLevel: 0.10,
      costs: [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200],
      icon: 'moveSpeed', labelKey: 'storeMove', valueKey: 'storeMoveVal' },
    { id: 'maxHealth', max: 10, perLevel: 0.20,
      costs: [150, 300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 76800],
      icon: 'maxHealth', labelKey: 'storeHealth', valueKey: 'storeHealthVal' },
    { id: 'armor', max: 10, perLevel: 1,
      costs: [300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 76800, 153600],
      icon: 'armor', labelKey: 'storeArmor', valueKey: 'storeArmorVal',
      descKey: 'storeArmorDesc' },
    { id: 'attack', max: 10, perLevel: 0.20,
      costs: [150, 300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 76800],
      icon: 'attack', labelKey: 'storeAttack', valueKey: 'storeAttackVal' },
    { id: 'attackSpeed', max: 5, perLevel: 0.20, costs: [150, 300, 600, 1200, 2400],
      icon: 'attackSpeed', labelKey: 'storeAspd', valueKey: 'storeAspdVal' },
    { id: 'bulletCount', max: 3, perLevel: 1, costs: [250, 750, 2000],
      icon: 'bulletCount', labelKey: 'storeBullets', valueKey: 'storeBulletsVal' },
    { id: 'critical', max: 10, critChance: 0.05, critDamage: 0.10,
      costs: [200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200, 102400],
      icon: 'critChance', labelKey: 'storeCrit', valueKey: 'storeCritVal' },
    { id: 'expMultiplier', max: 10, perLevel: 0.10,
      costs: [80, 120, 180, 270, 400, 600, 900, 1300, 1900, 2800],
      icon: 'expMultiplier', labelKey: 'storeExp', valueKey: 'storeExpVal' },
    { id: 'luck', max: 20, perLevel: 0.10,
      costs: [80, 120, 180, 270, 400, 600, 900, 1300, 1900, 2800,
        4000, 5800, 8400, 12000, 17000, 24000, 34000, 48000, 68000, 96000],
      icon: 'luck', labelKey: 'storeLuck', valueKey: 'storeLuckVal' },
    { id: 'weaponRadius', max: 10, perLevel: 0.10,
      costs: [80, 120, 180, 270, 400, 600, 900, 1300, 1900, 2800],
      icon: 'weaponRadius', labelKey: 'storeWeaponRadius', valueKey: 'storeWeaponRadiusVal' },
    { id: 'bulletSpeed', max: 10, perLevel: 0.10,
      costs: [80, 120, 180, 270, 400, 600, 900, 1300, 1900, 2800],
      icon: 'bulletSpeed', labelKey: 'storeBulletSpeed', valueKey: 'storeBulletSpeedVal' },
    { id: 'curse', max: 10, perLevel: 0.10,
      costs: [100, 160, 250, 400, 650, 1000, 1600, 2500, 4000, 6500],
      icon: 'curse', labelKey: 'storeCurse', valueKey: 'storeCurseVal',
      descKey: 'storeCurseDesc' },
    /* Extra carry slots — steep luxury curve ending at 1,000,000 */
    { id: 'weaponSlots', max: 5, perLevel: 1,
      costs: [50000, 150000, 350000, 700000, 1000000],
      icon: 'weaponSlots', labelKey: 'storeWeaponSlots', valueKey: 'storeWeaponSlotsVal',
      descKey: 'storeWeaponSlotsDesc' },
    { id: 'statSlots', max: 5, perLevel: 1,
      costs: [50000, 150000, 350000, 700000, 1000000],
      icon: 'statSlots', labelKey: 'storeStatSlots', valueKey: 'storeStatSlotsVal',
      descKey: 'storeStatSlotsDesc' },
    /* Extra level-up / chest choice cards — steep luxury (base 6 → up to 8) */
    { id: 'choiceOptions', max: 2, perLevel: 1,
      costs: [120000, 500000],
      icon: 'choiceOptions', labelKey: 'storeChoiceOptions', valueKey: 'storeChoiceOptionsVal',
      descKey: 'storeChoiceOptionsDesc' }
  ],

  _emptyLevels() {
    const o = {};
    for (const d of this.DEFS) o[d.id] = 0;
    return o;
  },

  _emptyEnabled() {
    const o = {};
    for (const d of this.DEFS) o[d.id] = true;
    return o;
  },

  _emptyDiscovered() {
    return { enemies: [], items: [], weapons: [] };
  },

  load() {
    this.levels = this._emptyLevels();
    this.enabled = this._emptyEnabled();
    this.gold = 0;
    this.discovered = this._emptyDiscovered();
    this.selectedCharacter = 'hunter';
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (!data) return;
      this.gold = Math.max(0, Math.floor(data.gold || 0));
      const lv = data.levels || {};
      const en = data.enabled || {};
      for (const d of this.DEFS) {
        this.levels[d.id] = Math.max(0, Math.min(d.max, lv[d.id] | 0));
        // Default to enabled for anything not explicitly turned off
        this.enabled[d.id] = en[d.id] !== false;
      }
      const disc = data.discovered || {};
      this.discovered = {
        enemies: Array.isArray(disc.enemies) ? disc.enemies.slice() : [],
        items: Array.isArray(disc.items) ? disc.items.slice() : [],
        weapons: Array.isArray(disc.weapons) ? disc.weapons.slice() : []
      };
      if (typeof data.selectedCharacter === 'string' && data.selectedCharacter) {
        this.selectedCharacter = data.selectedCharacter;
      }
    } catch (e) { /* ignore */ }
  },

  save() {
    try {
      localStorage.setItem(this.KEY, JSON.stringify({
        gold: Math.floor(this.gold),
        levels: { ...this.levels },
        enabled: { ...this.enabled },
        selectedCharacter: this.selectedCharacter || 'hunter',
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
    this.enabled = this._emptyEnabled();
    this.discovered = this._emptyDiscovered();
    this.selectedCharacter = 'hunter';
    try { localStorage.removeItem(this.KEY); } catch (e) {}
  },

  setSelectedCharacter(id) {
    this.selectedCharacter = id || 'hunter';
    this.save();
  },

  levelOf(id) {
    return this.levels[id] | 0;
  },

  isEnabled(id) {
    return this.enabled[id] !== false;
  },

  /* Flip a purchased bonus on/off. Un-purchased bonuses stay enabled by default. */
  toggle(id) {
    this.enabled[id] = this.enabled[id] === false;
    this.save();
    return this.enabled[id];
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
      expMultiplier: 0, luck: 0, weaponRadius: 0, bulletSpeed: 0, curse: 0, armor: 0,
      weaponSlots: 0, statSlots: 0, choiceOptions: 0
    };
    for (const d of this.DEFS) {
      const n = this.levelOf(d.id);
      if (!n || !this.isEnabled(d.id)) continue;
      if (d.id === 'critical') {
        b.critChance += d.critChance * n;
        b.critDamageBonus += d.critDamage * n;
      } else if (d.id === 'bulletCount' || d.id === 'weaponSlots' || d.id === 'statSlots' || d.id === 'choiceOptions') {
        b[d.id] += d.perLevel * n;
      } else {
        b[d.id] += d.perLevel * n;
      }
    }
    return b;
  },

  maxWeaponSlots() {
    return 5 + (this.isEnabled('weaponSlots') ? this.levelOf('weaponSlots') : 0);
  },

  maxStatSlots() {
    return 5 + (this.isEnabled('statSlots') ? this.levelOf('statSlots') : 0);
  },

  /* Base 6 choice cards + store extras (max +2 → 8). */
  maxChoiceOptions() {
    return 6 + (this.isEnabled('choiceOptions') ? this.levelOf('choiceOptions') : 0);
  }
};

window.MetaProgression = MetaProgression;
