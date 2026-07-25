'use strict';

const STAT_DEFS = {
  attack: {
    id: 'attack', icon: 'attack',
    apply(p) { p.statAdd.attack += 0.15; },
    label() { return I18n.t('statDamage'); },
    value() { return '+15%'; },
    bonusText(p) { return `+${Math.round(p.statAdd.attack * 100)}%`; }
  },
  attackSpeed: {
    id: 'attackSpeed', icon: 'attackSpeed',
    apply(p) { p.statAdd.attackSpeed += 0.12; },
    label() { return I18n.t('statAttackSpeed'); },
    value() { return '+12%'; },
    bonusText(p) { return `+${Math.round(p.statAdd.attackSpeed * 100)}%`; }
  },
  moveSpeed: {
    id: 'moveSpeed', icon: 'moveSpeed',
    apply(p) { p.statAdd.moveSpeed += 0.08; },
    label() { return I18n.t('statMoveSpeed'); },
    value() { return '+8%'; },
    bonusText(p) { return `+${Math.round(p.statAdd.moveSpeed * 100)}%`; }
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
    bonusText(p) { return `+${Math.round(p.statAdd.maxHealth * 100)}%`; }
  },
  bulletSpeed: {
    id: 'bulletSpeed', icon: 'bulletSpeed',
    apply(p) { p.statAdd.bulletSpeed += 0.12; },
    label() { return I18n.t('statBulletSpeed'); },
    value() { return '+12%'; },
    bonusText(p) { return `+${Math.round(p.statAdd.bulletSpeed * 100)}%`; }
  },
  weaponRadius: {
    id: 'weaponRadius', icon: 'weaponRadius',
    apply(p) { p.statAdd.weaponRadius += 0.12; },
    label() { return I18n.t('statWeaponRadius'); },
    value() { return '+12%'; },
    bonusText(p) { return `+${Math.round(p.statAdd.weaponRadius * 100)}%`; }
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
    bonusText(p) {
      const ch = Math.round(p.stats.critChance * 100);
      const cd = Math.round((p.stats.critDamage - 1) * 100);
      return `${ch}% / +${cd}%`;
    }
  },
  expMultiplier: {
    id: 'expMultiplier', icon: 'expMultiplier',
    apply(p) { p.statAdd.expMultiplier += 0.12; },
    label() { return I18n.t('statExpGain'); },
    value() { return '+12%'; },
    bonusText(p) { return `+${Math.round(p.statAdd.expMultiplier * 100)}%`; }
  },
  luck: {
    id: 'luck', icon: 'luck',
    apply(p) { p.statAdd.luck += 0.15; },
    label() { return I18n.t('statLuck'); },
    value() { return '+15%'; },
    bonusText(p) { return `+${Math.round(p.statAdd.luck * 100)}%`; }
  },
  bulletCount: {
    id: 'bulletCount', icon: 'bulletCount',
    apply(p) { p.bulletCount += 1; },
    label() { return I18n.t('statBulletCount'); },
    value() { return '+1'; },
    bonusText(p) { return `+${p.bulletCount - 1}`; }
  }
};

const STAT_IDS = Object.keys(STAT_DEFS);
const WEAPON_IDS = [
  'shotgun', 'chainLightning', 'garlicAura', 'boomerang', 'towerShield',
  'grenadeLauncher', 'bloodSpear', 'phantomBlades', 'cursedTotem', 'iceCrystal'
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
  }

  bindGame(game) {
    this.game = game;
    this.overlay = document.getElementById('choiceOverlay');
    this.cardsEl = document.getElementById('choiceCards');
    this.titleEl = document.getElementById('choiceTitle');
    if (!this.overlay) return;
    this.overlay.addEventListener('click', (e) => {
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

  /* All five weapon slots filled and every weapon at level 5. */
  _weaponsFullyUpgraded() {
    const weapons = this.game && this.game.weapons;
    if (!weapons || weapons.slots.length < weapons.maxSlots) return false;
    return weapons.slots.every((w) => w.level >= 5);
  }

  enqueue(n) {
    n = Math.max(0, n | 0);
    if (n <= 0) return;
    this.pendingRolls += n;
    // Extend the active batch, or start a new one
    if (this.open || this.batchTotal > 0) this.batchTotal += n;
    else this.batchTotal = this.pendingRolls;
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
    this.close();
  }

  toSaveData() {
    return {
      pendingRolls: this.pendingRolls,
      autoSelect: this.autoSelect,
      batchTotal: this.batchTotal,
      batchIndex: this.batchIndex
    };
  }

  loadSaveData(data) {
    this.pendingRolls = (data && data.pendingRolls) || 0;
    this.autoSelect = !!(data && data.autoSelect);
    this.batchTotal = (data && data.batchTotal) || 0;
    this.batchIndex = (data && data.batchIndex) || 0;
  }

  refreshLocale() {
    if (this.open) this._render();
  }

  handleKey(code) {
    if (!this.open) return false;
    const map = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3, Digit5: 4,
      Numpad1: 0, Numpad2: 1, Numpad3: 2, Numpad4: 3, Numpad5: 4 };
    if (!(code in map)) return false;
    // Still swallow 1-5 during the grace period so they don't leak into the game
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
    if (this._unlockTimer) {
      clearTimeout(this._unlockTimer);
      this._unlockTimer = 0;
    }
    if (this.overlay) {
      this.overlay.classList.add('hidden');
      this.overlay.classList.remove('choice-locked');
    }
  }

  generateOptions() {
    const game = this.game;
    const p = game.player;
    const weapons = game.weapons;
    const weaponOpts = [];
    const offerAuto = this._weaponsFullyUpgraded() && !this.autoSelect;

    // Weapon options
    for (const w of weapons.slots) {
      if (w.level >= 5) continue;
      if (w.level === 2) {
        weaponOpts.push({ type: 'weapon', weaponId: w.id, level: 3, branch: 'A' });
        weaponOpts.push({ type: 'weapon', weaponId: w.id, level: 3, branch: 'B' });
      } else {
        weaponOpts.push({ type: 'weapon', weaponId: w.id, level: w.level + 1, branch: w.branch });
      }
    }
    if (weapons.slots.length < weapons.maxSlots) {
      for (const id of WEAPON_IDS) {
        if (!weapons.get(id)) weaponOpts.push({ type: 'weapon', weaponId: id, level: 1, branch: null });
      }
    }

    this._shuffle(weaponOpts);

    const result = [];
    const used = new Set();
    const maxCards = offerAuto ? 4 : 5;

    // Guarantee at least one weapon option when any exist
    if (weaponOpts.length) {
      const first = weaponOpts.shift();
      result.push(first);
      used.add(this._key(first));
    }

    // Eligible stats fill the remaining slots (unique when possible)
    const selected = p.selectedStatIds;
    const maxStats = typeof p.maxStatSlots === 'function' ? p.maxStatSlots() : 5;
    let eligibleStats = selected.length >= maxStats ? selected.slice() : STAT_IDS.slice();
    this._shuffle(eligibleStats);

    for (const id of eligibleStats) {
      if (result.length >= maxCards) break;
      const o = { type: 'stat', statId: id };
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
      if (o.type === 'weapon' && o.branch) {
        const other = result.find((r) => r.type === 'weapon' && r.weaponId === o.weaponId && r.branch && r.branch !== o.branch);
        if (other) continue;
      }
      used.add(k);
      result.push(o);
    }

    // Last resort: repeat eligible stats so there are always enough cards
    let si = 0;
    while (result.length < maxCards && eligibleStats.length) {
      result.push({ type: 'stat', statId: eligibleStats[si % eligibleStats.length] });
      si++;
    }

    this._shuffle(result);
    // Keep a weapon card visible in slot 1 when we guaranteed one (after shuffle, re-pin one)
    const weaponIdx = result.findIndex((o) => o.type === 'weapon');
    if (weaponIdx > 0) {
      const tmp = result[0];
      result[0] = result[weaponIdx];
      result[weaponIdx] = tmp;
    }

    // Autoselect is always the last card once every weapon is maxed
    if (offerAuto) result.push({ type: 'auto' });

    return result.slice(0, 5);
  }

  _key(o) {
    if (o.type === 'auto') return 'auto';
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
      if (def) {
        if (!p.selectedStatIds.includes(opt.statId) && p.selectedStatIds.length < p.maxStatSlots()) {
          p.selectedStatIds.push(opt.statId);
        }
        def.apply(p);
        p._recomputeStats();
        if (!silent) game.ui.toast(`${def.label()}: ${def.value(p)}`, 'rare');
      }
    } else if (opt.type === 'weapon') {
      const existing = game.weapons.get(opt.weaponId);
      const def = WEAPON_DEFS[opt.weaponId];
      const name = def ? I18n.t(def.nameKey) : opt.weaponId;
      if (!existing) {
        game.weapons.grant(opt.weaponId, 1, null);
        if (!silent) game.ui.toast(`${name} Lv1`, 'epic');
      } else {
        game.weapons.upgrade(opt.weaponId, opt.branch || existing.branch);
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
    const color = opt.type === 'weapon' ? '#e8a0ff' : '#7dff9a';
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

    this._applyOption(opt, false);
    this.close();
    if (this.pendingRolls > 0) {
      setTimeout(() => this._openNext(), 80);
    } else {
      this._endBatchIfDone();
    }
  }

  _render() {
    if (!this.cardsEl) return;
    if (this.titleEl) {
      const title = I18n.t('chooseUpgrade');
      const total = Math.max(this.batchTotal, this.batchIndex, 1);
      const index = Math.max(this.batchIndex, 1);
      this.titleEl.textContent = `${title}  ${index}/${total}`;
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
        return `<button type="button" class="choice-card" data-choice-idx="${i}">
          <div class="choice-key">${i + 1}</div>
          ${img}
          <div class="choice-name">${def.label()}</div>
          <div class="choice-value">${def.value(p)}</div>
        </button>`;
      }
      const def = WEAPON_DEFS[o.weaponId];
      const icon = WeaponIcons.get(o.weaponId);
      const name = I18n.t(def.nameKey);
      let sub;
      if (o.level === 1) sub = I18n.t('newWeapon');
      else if (o.branch && o.level === 3) sub = I18n.t('weaponBranch', o.branch);
      else sub = I18n.t('weaponLevel', o.level);
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
  }
}

window.STAT_DEFS = STAT_DEFS;
window.STAT_IDS = STAT_IDS;
window.WEAPON_IDS = WEAPON_IDS;
window.UpgradeSystem = UpgradeSystem;
