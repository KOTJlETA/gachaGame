'use strict';

const STAT_MAX_LEVEL = 10;
const WEAPON_CORE_MAX = 10;
const STAT_MAX_LEVELS = {
  bulletCount: 5
};

function statMaxLevel(statId) {
  return STAT_MAX_LEVELS[statId] || STAT_MAX_LEVEL;
}

function statPickCount(player, statId) {
  return (player && player.statLevels && player.statLevels[statId]) || 0;
}

function statProgressText(player, statId) {
  return `${statPickCount(player, statId)}/${statMaxLevel(statId)}`;
}

function weaponProgressText(level) {
  const lv = Math.max(1, level | 0);
  if (lv > WEAPON_CORE_MAX) return `${lv}+`;
  return `${lv}/${WEAPON_CORE_MAX}`;
}

const STAT_DEFS = {
  attack: {
    id: 'attack', icon: 'attack',
    apply(p) { p.statAdd.attack += 0.15; },
    label() { return I18n.t('statDamage'); },
    value() { return '+15%'; },
    bonusText(p) { return String(statPickCount(p, 'attack')); }
  },
  attackSpeed: {
    id: 'attackSpeed', icon: 'attackSpeed',
    apply(p) { p.statAdd.attackSpeed += 0.12; },
    label() { return I18n.t('statAttackSpeed'); },
    value() { return '+12%'; },
    bonusText(p) { return String(statPickCount(p, 'attackSpeed')); }
  },
  moveSpeed: {
    id: 'moveSpeed', icon: 'moveSpeed',
    apply(p) { p.statAdd.moveSpeed += 0.08; },
    label() { return I18n.t('statMoveSpeed'); },
    value() { return '+8%'; },
    bonusText(p) { return String(statPickCount(p, 'moveSpeed')); }
  },
  maxHealth: {
    id: 'maxHealth', icon: 'maxHealth',
    apply(p) {
      const before = p.stats.maxHealth;
      p.statAdd.maxHealth += 0.15;
      p._recomputeStats();
      p.health += p.stats.maxHealth - before;
    },
    label() { return I18n.t('statMaxHealth'); },
    value() { return '+15%'; },
    bonusText(p) { return String(statPickCount(p, 'maxHealth')); }
  },
  bulletSpeed: {
    id: 'bulletSpeed', icon: 'bulletSpeed',
    apply(p) { p.statAdd.bulletSpeed += 0.12; },
    label() { return I18n.t('statBulletSpeed'); },
    value() { return '+12%'; },
    bonusText(p) { return String(statPickCount(p, 'bulletSpeed')); }
  },
  weaponRadius: {
    id: 'weaponRadius', icon: 'weaponRadius',
    apply(p) { p.statAdd.weaponRadius += 0.12; },
    label() { return I18n.t('statWeaponRadius'); },
    value() { return '+12%'; },
    bonusText(p) { return String(statPickCount(p, 'weaponRadius')); }
  },
  critical: {
    id: 'critical', icon: 'critChance',
    apply(p) {
      if (p.stats.critChance >= 1) {
        p.statAdd.critDamageBonus += 0.20;
      } else {
        p.statAdd.critChance += 0.05;
        p.statAdd.critDamageBonus += 0.10;
      }
    },
    label() { return I18n.t('statCritical'); },
    value(p) {
      if (p && p.stats.critChance >= 1) return '+20% Crit Damage';
      return '+5% Chance / +10% Crit Damage';
    },
    bonusText(p) { return String(statPickCount(p, 'critical')); }
  },
  expMultiplier: {
    id: 'expMultiplier', icon: 'expMultiplier',
    apply(p) { p.statAdd.expMultiplier += 0.12; },
    label() { return I18n.t('statExpGain'); },
    value() { return '+12%'; },
    bonusText(p) { return String(statPickCount(p, 'expMultiplier')); }
  },
  luck: {
    id: 'luck', icon: 'luck',
    apply(p) { p.statAdd.luck += 0.15; },
    label() { return I18n.t('statLuck'); },
    value() { return '+15%'; },
    bonusText(p) { return String(statPickCount(p, 'luck')); }
  },
  curse: {
    id: 'curse', icon: 'curse',
    apply(p) { p.statAdd.curse += 0.10; },
    label() { return I18n.t('statCurse'); },
    value() { return '+10% Enemy HP / DMG / EXP / Mobs'; },
    bonusText(p) { return String(statPickCount(p, 'curse')); }
  },
  bulletCount: {
    id: 'bulletCount', icon: 'bulletCount',
    apply(p) { p.bulletCount += 1; },
    label() { return I18n.t('statBulletCount'); },
    value() { return '+1'; },
    bonusText(p) { return String(statPickCount(p, 'bulletCount')); }
  },
  armor: {
    id: 'armor', icon: 'armor',
    apply(p) { p.statAdd.armor += 1; },
    label() { return I18n.t('statArmor'); },
    value() { return '+1 Armor'; },
    bonusText(p) { return String(statPickCount(p, 'armor')); }
  }
};

const STAT_IDS = Object.keys(STAT_DEFS);
const WEAPON_IDS = [
  'shotgun', 'chainLightning', 'garlicAura', 'boomerang', 'towerShield',
  'grenadeLauncher', 'bloodSpear', 'phantomBlades', 'cursedTotem', 'iceCrystal', 'madCat'
];

class UpgradeSystem {
  constructor() {
    this.pendingRolls = 0;
    this.open = false;
    this.options = [];
    this.overlay = null;
    this.cardsEl = null;
    this.titleEl = null;
    this.game = null;
    this.readyAt = 0;
    this._unlockTimer = 0;
    // Once chosen after all weapons are maxed, level-ups apply silently for this run
    this.autoSelect = false;
    // Progress through the current multi-pick batch (e.g. epic chest = 5)
    this.batchTotal = 0;
    this.batchIndex = 0;
    // Per pending roll: whether weapon cards are allowed
    this.pendingWeaponEligible = [];
    this._currentWeaponEligible = false;
    this.skipUsed = false;
    // High Cultist one-shot second-weapon picker (mandatory, Esc-proof)
    this.startWeaponPick = false;
  }

  bindGame(game) {
    this.game = game;
    this.overlay = document.getElementById('choiceOverlay');
    this.cardsEl = document.getElementById('choiceCards');
    this.titleEl = document.getElementById('choiceTitle');
    this.skipEl = document.getElementById('choiceSkipBtn');
    if (!this.overlay) return;
    this.overlay.addEventListener('click', (e) => {
      if (e.target.closest('[data-skip-upgrade]')) {
        this.skip();
        return;
      }
      const card = e.target.closest('[data-choice-idx]');
      if (!card) return;
      const idx = +card.dataset.choiceIdx;
      this.pick(idx);
    });
  }

  isOpen() { return this.open; }

  _canPick() {
    return this.open && performance.now() >= this.readyAt;
  }

  /* Weapons now have repeatable overcap upgrades, so they are never exhausted. */
  _weaponsFullyUpgraded() {
    return false;
  }

  enqueue(n, opts) {
    n = Math.max(0, n | 0);
    if (n <= 0) return;
    opts = opts || {};
    // weaponEligible: true | false | boolean[] (one flag per roll)
    for (let i = 0; i < n; i++) {
      let ok = true;
      if (Array.isArray(opts.weaponEligible)) ok = !!opts.weaponEligible[i];
      else if (opts.weaponEligible === false) ok = false;
      else if (opts.weaponEligible === true) ok = true;
      this.pendingWeaponEligible.push(ok);
    }
    this.pendingRolls += n;
    // Extend the active batch, or start a new one
    if (this.open || this.batchTotal > 0) this.batchTotal += n;
    else {
      this.batchTotal = this.pendingRolls;
      this.skipUsed = false;
    }
    if (this.autoSelect) {
      this._drainAuto();
      return;
    }
    if (!this.open && this.game && this.game.state === 'playing') this._openNext();
  }

  reset() {
    this.pendingRolls = 0;
    this.autoSelect = false;
    this.batchTotal = 0;
    this.batchIndex = 0;
    this.pendingWeaponEligible = [];
    this._currentWeaponEligible = false;
    this.skipUsed = false;
    this.startWeaponPick = false;
    this.close();
  }

  /* Mandatory second-weapon choice at run start (High Cultist). */
  openStartWeaponPick(excludeId) {
    if (!this.game || this.game.state !== 'playing') return;
    this.startWeaponPick = true;
    this.pendingRolls = 0;
    this.pendingWeaponEligible = [];
    this.batchTotal = 1;
    this.batchIndex = 1;
    this.options = WEAPON_IDS
      .filter((id) => id !== excludeId)
      .map((id) => ({ type: 'weapon', weaponId: id, level: 1, branch: null }));
    this.open = true;
    this.readyAt = performance.now() + 500;
    this._render();
    if (this.overlay) {
      this.overlay.classList.remove('hidden');
      this.overlay.classList.add('choice-locked');
      this.overlay.classList.add('start-weapon-pick');
    }
    if (this._unlockTimer) clearTimeout(this._unlockTimer);
    this._unlockTimer = setTimeout(() => {
      this._unlockTimer = 0;
      if (this.overlay && this.open) this.overlay.classList.remove('choice-locked');
    }, 500);
  }

  toSaveData() {
    return {
      pendingRolls: this.pendingRolls,
      autoSelect: this.autoSelect,
      batchTotal: this.batchTotal,
      batchIndex: this.batchIndex,
      pendingWeaponEligible: this.pendingWeaponEligible.slice(),
      currentWeaponEligible: this._currentWeaponEligible,
      skipUsed: this.skipUsed
    };
  }

  loadSaveData(data) {
    this.pendingRolls = (data && data.pendingRolls) || 0;
    this.autoSelect = !!(data && data.autoSelect);
    this.batchTotal = (data && data.batchTotal) || 0;
    this.batchIndex = (data && data.batchIndex) || 0;
    this.pendingWeaponEligible = Array.isArray(data && data.pendingWeaponEligible)
      ? data.pendingWeaponEligible.map(Boolean)
      : [];
    this._currentWeaponEligible = !!(data && data.currentWeaponEligible);
    this.skipUsed = !!(data && data.skipUsed);
    // Older saves: pad missing flags as weapon-eligible so picks aren't empty
    while (this.pendingWeaponEligible.length < this.pendingRolls) {
      this.pendingWeaponEligible.push(true);
    }
  }

  refreshLocale() {
    if (this.open) this._render();
  }

  handleKey(code) {
    if (!this.open) return false;
    if (code === 'Space') {
      if (!this._canPick()) return true;
      this.skip();
      return true;
    }
    const map = {
      Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3, Digit5: 4,
      Digit6: 5, Digit7: 6, Digit8: 7, Digit9: 8,
      Numpad1: 0, Numpad2: 1, Numpad3: 2, Numpad4: 3, Numpad5: 4,
      Numpad6: 5, Numpad7: 6, Numpad8: 7, Numpad9: 8
    };
    if (!(code in map)) return false;
    // Still swallow number keys during the grace period so they don't leak into the game
    if (!this._canPick()) return true;
    this.pick(map[code]);
    return true;
  }

  _openNext() {
    if (this.autoSelect) {
      this._drainAuto();
      return;
    }
    if (this.pendingRolls <= 0 || this.open) return;
    this.pendingRolls--;
    this.batchIndex++;
    if (this.batchTotal < this.batchIndex) this.batchTotal = this.batchIndex;
    this._currentWeaponEligible = this.pendingWeaponEligible.length
      ? !!this.pendingWeaponEligible.shift()
      : true;
    this.options = this.generateOptions();
    this.open = true;
    // 0.5s grace after the panel appears so a leftover click/keystroke can't pick
    this.readyAt = performance.now() + 500;
    this._render();
    if (this.overlay) {
      this.overlay.classList.remove('hidden');
      this.overlay.classList.add('choice-locked');
    }
    if (this._unlockTimer) clearTimeout(this._unlockTimer);
    this._unlockTimer = setTimeout(() => {
      this._unlockTimer = 0;
      if (this.overlay && this.open) this.overlay.classList.remove('choice-locked');
    }, 500);
  }

  _endBatchIfDone() {
    if (this.pendingRolls <= 0 && !this.open) {
      this.batchTotal = 0;
      this.batchIndex = 0;
    }
  }

  close() {
    this.open = false;
    this.options = [];
    this.readyAt = 0;
    this.startWeaponPick = false;
    if (this._unlockTimer) {
      clearTimeout(this._unlockTimer);
      this._unlockTimer = 0;
    }
    if (this.overlay) {
      this.overlay.classList.add('hidden');
      this.overlay.classList.remove('choice-locked');
      this.overlay.classList.remove('start-weapon-pick');
    }
    if (this.skipEl) this.skipEl.classList.add('hidden');
  }

  generateOptions() {
    const game = this.game;
    const p = game.player;
    const weapons = game.weapons;
    const weaponOpts = [];
    const offerAuto = this._weaponsFullyUpgraded() && !this.autoSelect;
    const allowWeapons = !!this._currentWeaponEligible;
    const cardCount = (typeof MetaProgression !== 'undefined' && MetaProgression.maxChoiceOptions)
      ? MetaProgression.maxChoiceOptions()
      : 6;

    // Weapon options — only on milestone level-ups / chest rolls that allow them.
    // Branch-choice weapons always contribute both Path A and Path B cards.
    const branchPairs = [];
    if (allowWeapons) {
      for (const w of weapons.slots) {
        if (w.level === 3) {
          branchPairs.push([
            { type: 'weapon', weaponId: w.id, level: 4, branch: 'A' },
            { type: 'weapon', weaponId: w.id, level: 4, branch: 'B' }
          ]);
        } else {
          weaponOpts.push({ type: 'weapon', weaponId: w.id, level: w.level + 1, branch: w.branch });
        }
      }
      if (weapons.slots.length < weapons.maxSlots) {
        for (const id of WEAPON_IDS) {
          if (!weapons.get(id)) weaponOpts.push({ type: 'weapon', weaponId: id, level: 1, branch: null });
        }
      }
    }

    this._shuffle(weaponOpts);
    this._shuffle(branchPairs);

    const result = [];
    const used = new Set();
    // Reserve one slot for Autoselect when offered
    const maxCards = offerAuto ? Math.max(1, cardCount - 1) : cardCount;

    // Always surface both A and B when any owned weapon is choosing a path.
    // Keep each A/B pair together; stop once another full pair cannot fit.
    for (const pair of branchPairs) {
      if (result.length + pair.length > maxCards) break;
      for (const option of pair) {
        const key = this._key(option);
        if (used.has(key)) continue;
        result.push(option);
        used.add(key);
      }
    }

    // Weapon-eligible rolls reserve the first 2–3 slots for weapon choices.
    const desiredWeapons = allowWeapons
      ? Math.max(result.length, 2 + (Math.random() < 0.5 ? 0 : 1))
      : result.length;
    while (result.length < desiredWeapons && weaponOpts.length) {
      const option = weaponOpts.shift();
      const key = this._key(option);
      if (used.has(key)) continue;
      result.push(option);
      used.add(key);
    }

    // Eligible stats + whole chicken fill remaining slots (unique when possible)
    const selected = p.selectedStatIds;
    const maxStats = typeof p.maxStatSlots === 'function' ? p.maxStatSlots() : 5;
    const belowCap = (id) => statPickCount(p, id) < statMaxLevel(id);
    let eligibleStats = (selected.length >= maxStats ? selected.slice() : STAT_IDS.slice()).filter(belowCap);
    const filler = eligibleStats.map((id) => ({ type: 'stat', statId: id }));
    filler.push({ type: 'heal', id: 'wholeChicken' });
    this._shuffle(filler);

    for (const o of filler) {
      if (result.length >= maxCards) break;
      const k = this._key(o);
      if (used.has(k)) continue;
      used.add(k);
      result.push(o);
    }

    // If still short (e.g. only a few selected stats), add extra weapon picks
    while (result.length < maxCards && weaponOpts.length) {
      const o = weaponOpts.shift();
      const k = this._key(o);
      if (used.has(k)) continue;
      used.add(k);
      result.push(o);
    }

    // Never repeat bonus stats (or chicken) in a single choice round —
    // prefer fewer unique cards over duplicates.

    // Autoselect is always the last card once every weapon is maxed
    if (offerAuto) result.push({ type: 'auto' });

    return result.slice(0, cardCount);
  }

  _key(o) {
    if (o.type === 'auto') return 'auto';
    if (o.type === 'heal') return `h:${o.id || 'heal'}`;
    if (o.type === 'weapon') return `w:${o.weaponId}:${o.level}:${o.branch || ''}`;
    return `s:${o.statId}`;
  }

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  /* Apply one generated option without opening the UI. */
  _applyOption(opt, silent) {
    if (!opt) return;
    const game = this.game;
    const p = game.player;

    if (opt.type === 'stat') {
      const def = STAT_DEFS[opt.statId];
      if (def && statPickCount(p, opt.statId) < statMaxLevel(opt.statId)) {
        if (!p.statLevels) p.statLevels = {};
        if (!p.selectedStatIds.includes(opt.statId) && p.selectedStatIds.length < p.maxStatSlots()) {
          p.selectedStatIds.push(opt.statId);
        }
        def.apply(p);
        p.statLevels[opt.statId] = (p.statLevels[opt.statId] || 0) + 1;
        p._recomputeStats();
        if (!silent) game.ui.toast(`${def.label()}: ${def.value(p)}`, 'rare');
      }
    } else if (opt.type === 'heal') {
      const healed = p.healPercent(0.15);
      if (typeof MetaProgression !== 'undefined') {
        MetaProgression.discover('items', 'wholeChicken');
      }
      if (typeof game.spawnHealParticles === 'function') {
        game.spawnHealParticles(p.x, p.y);
      }
      if (!silent) {
        if (healed > 0 && typeof SoundManager !== 'undefined' && SoundManager.heal) SoundManager.heal();
        game.ui.toast(I18n.t('wholeChickenHeal', Math.ceil(healed || p.stats.maxHealth * 0.15)), 'epic');
      }
    } else if (opt.type === 'weapon') {
      const existing = game.weapons.get(opt.weaponId);
      const def = WEAPON_DEFS[opt.weaponId];
      const name = def ? I18n.t(def.nameKey) : opt.weaponId;
      if (!existing) {
        game.weapons.grant(opt.weaponId, 1, null);
        if (!silent) game.ui.toast(`${name} Lv1`, 'epic');
      } else {
        game.weapons.upgrade(opt.weaponId, opt.branch || existing.branch, p);
        const w = game.weapons.get(opt.weaponId);
        const br = w.branch ? ` ${w.branch}` : '';
        if (!silent) game.ui.toast(`${name} Lv${w.level}${br}`, 'epic');
      }
    }
  }

  _optionLabel(opt) {
    if (!opt) return '';
    const p = this.game.player;
    if (opt.type === 'stat') {
      const def = STAT_DEFS[opt.statId];
      return def ? `${def.label()} ${def.value(p)}` : '';
    }
    if (opt.type === 'heal') {
      return `${I18n.t('wholeChicken')} ${I18n.t('wholeChickenVal')}`;
    }
    if (opt.type === 'weapon') {
      const def = WEAPON_DEFS[opt.weaponId];
      const name = def ? I18n.t(def.nameKey) : opt.weaponId;
      const w = this.game.weapons.get(opt.weaponId);
      if (!w) return `${name} Lv1`;
      const br = w.branch ? ` ${w.branch}` : '';
      return `${name} Lv${w.level}${br}`;
    }
    return '';
  }

  /* Float the auto-picked upgrade name above the player (staggered if several land at once). */
  _floatAutoUpgrade(opt, stackIndex) {
    const game = this.game;
    if (!game || !opt || typeof game.spawnFloatingText !== 'function') return;
    const label = this._optionLabel(opt);
    if (!label) return;
    const p = game.player;
    const color = opt.type === 'weapon' ? '#e8a0ff' : opt.type === 'heal' ? '#ff9a4a' : '#7dff9a';
    const delay = stackIndex * 280;
    const rise = stackIndex * 14;
    const spawn = () => {
      if (!p || !p.alive) return;
      game.spawnFloatingText(p.x, p.y - 36 - rise, label, color, 18);
    };
    if (delay <= 0) spawn();
    else setTimeout(spawn, delay);
  }

  /* Spend every queued roll by randomly picking among generated options (no menu). */
  _drainAuto() {
    let stack = 0;
    while (this.pendingRolls > 0) {
      this.pendingRolls--;
      this.batchIndex++;
      this._currentWeaponEligible = this.pendingWeaponEligible.length
        ? !!this.pendingWeaponEligible.shift()
        : true;
      const opts = this.generateOptions().filter((o) => o.type !== 'auto');
      if (!opts.length) continue;
      const pick = opts[Math.floor(Math.random() * opts.length)];
      this._applyOption(pick, true);
      this._floatAutoUpgrade(pick, stack);
      stack++;
    }
    this._endBatchIfDone();
  }

  pick(idx) {
    if (!this._canPick() || idx < 0 || idx >= this.options.length) return;
    const opt = this.options[idx];

    if (opt.type === 'auto') {
      this.autoSelect = true;
      this.game.ui.toast(I18n.t('autoSelectOn'), 'epic');
      this.close();
      if (this.pendingRolls > 0) this._drainAuto();
      else this._endBatchIfDone();
      return;
    }

    const wasStartPick = this.startWeaponPick;
    this._applyOption(opt, false);
    // Brief i-frames after a manual pick — not used for auto-select drains
    const p = this.game.player;
    if (p && !p.invulnerable) p.invulnTimer = Math.max(p.invulnTimer || 0, 0.5);
    this.close();
    if (wasStartPick) {
      this._endBatchIfDone();
      return;
    }
    if (this.pendingRolls > 0) {
      setTimeout(() => this._openNext(), 80);
    } else {
      this._endBatchIfDone();
    }
  }

  skip() {
    if (!this._canPick() || this.startWeaponPick || this.skipUsed) return;
    this.skipUsed = true;
    this.close();
    if (this.pendingRolls > 0) setTimeout(() => this._openNext(), 80);
    else this._endBatchIfDone();
  }

  _render() {
    if (!this.cardsEl) return;
    if (this.titleEl) {
      if (this.startWeaponPick) {
        this.titleEl.textContent = I18n.t('charCultistPickTitle');
      } else {
        const title = I18n.t('chooseUpgrade');
        const total = Math.max(this.batchTotal, this.batchIndex, 1);
        const index = Math.max(this.batchIndex, 1);
        this.titleEl.textContent = `${title}  ${index}/${total}`;
      }
    }
    const p = this.game.player;
    this.cardsEl.innerHTML = this.options.map((o, i) => {
      if (o.type === 'auto') {
        return `<button type="button" class="choice-card auto" data-choice-idx="${i}">
          <div class="choice-key">${i + 1}</div>
          <div class="choice-auto-glyph">A</div>
          <div class="choice-name">${I18n.t('autoSelectUpgrades')}</div>
          <div class="choice-desc">${I18n.t('autoSelectDesc')}</div>
        </button>`;
      }
      if (o.type === 'stat') {
        const def = STAT_DEFS[o.statId];
        const iconKey = IconFactory.spriteKey(def.icon);
        const spr = this.game.sprites[iconKey];
        const img = spr ? `<img class="choice-icon" src="${spr.toDataURL()}">` : '';
        const progress = statProgressText(p, o.statId);
        return `<button type="button" class="choice-card" data-choice-idx="${i}">
          <div class="choice-key">${i + 1}</div>
          ${img}
          <div class="choice-name">${def.label()}</div>
          <div class="choice-value">${def.value(p)}</div>
          <div class="choice-progress">${progress}</div>
        </button>`;
      }
      if (o.type === 'heal') {
        const spr = this.game.sprites.wholeChicken
          || this.game.sprites[IconFactory.spriteKey('wholeChicken')]
          || this.game.sprites.chickenLeg;
        const img = spr ? `<img class="choice-icon" src="${spr.toDataURL()}">` : '';
        return `<button type="button" class="choice-card heal" data-choice-idx="${i}">
          <div class="choice-key">${i + 1}</div>
          ${img}
          <div class="choice-name">${I18n.t('wholeChicken')}</div>
          <div class="choice-value">${I18n.t('wholeChickenVal')}</div>
        </button>`;
      }
      const def = WEAPON_DEFS[o.weaponId];
      const icon = WeaponIcons.get(o.weaponId);
      const name = I18n.t(def.nameKey);
      const owned = this.game.weapons.get(o.weaponId);
      const progress = weaponProgressText(o.level);
      let sub = progress;
      if (o.level === 1 && !owned) sub = `${I18n.t('newWeapon')} · ${progress}`;
      else if (o.branch && o.level === 4) sub = `${I18n.t('weaponBranch', o.branch)} · ${progress}`;
      const desc = typeof weaponLevelDesc === 'function'
        ? weaponLevelDesc(o.weaponId, o.level, o.branch)
        : '';
      return `<button type="button" class="choice-card weapon" data-choice-idx="${i}">
        <div class="choice-key">${i + 1}</div>
        <img class="choice-icon" src="${icon.toDataURL()}">
        <div class="choice-name">${name}</div>
        <div class="choice-value">${sub}</div>
        ${desc ? `<div class="choice-desc">${desc}</div>` : ''}
      </button>`;
    }).join('');

    if (this.skipEl) {
      const showSkip = !this.startWeaponPick && !this.skipUsed;
      this.skipEl.textContent = I18n.t('skipUpgrade');
      this.skipEl.classList.toggle('hidden', !showSkip);
    }
  }
}

window.STAT_DEFS = STAT_DEFS;
window.STAT_IDS = STAT_IDS;
window.STAT_MAX_LEVEL = STAT_MAX_LEVEL;
window.STAT_MAX_LEVELS = STAT_MAX_LEVELS;
window.WEAPON_CORE_MAX = WEAPON_CORE_MAX;
window.statMaxLevel = statMaxLevel;
window.statPickCount = statPickCount;
window.statProgressText = statProgressText;
window.weaponProgressText = weaponProgressText;
window.WEAPON_IDS = WEAPON_IDS;
window.UpgradeSystem = UpgradeSystem;
