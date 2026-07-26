'use strict';

/* ============================================================
   CHARACTER DEFS — roster for character select + run start
   ============================================================ */
/* Absolute character bases (replace Player.BASE for listed keys).
   Unlisted stats keep the global Player.BASE defaults.
   Store / run upgrades multiply (or add, for crit) on top of these. */
const CHARACTER_DEFS = [
  {
    id: 'hunter', weapon: 'shotgun', sprite: 'charHunter',
    nameKey: 'charHunter', passiveKey: 'passiveAdrenaline', descKey: 'charHunterDesc',
    baseStats: { moveSpeed: 147, maxHealth: 100, attack: 8.4, attackSpeed: 1, bulletSpeed: 280,
      weaponRadius: 0.95, critChance: 0.06, critDamage: 1.5, expMultiplier: 1,
      bulletCount: 4, luck: 0.03, curse: 0, armor: 0 }
  },
  {
    id: 'catWitch', weapon: 'madCat', sprite: 'charCatWitch',
    nameKey: 'charCatWitch', passiveKey: 'passiveFamiliarMark', descKey: 'charCatWitchDesc',
    baseStats: { moveSpeed: 142, maxHealth: 95, attack: 8.0, attackSpeed: 1.08, bulletSpeed: 320,
      weaponRadius: 1.1, critChance: 0.07, critDamage: 1.55, expMultiplier: 1.02,
      bulletCount: 2, luck: 0.06, curse: 0.02, armor: 0 }
  },
  {
    id: 'stormcaller', weapon: 'chainLightning', sprite: 'charStormcaller',
    nameKey: 'charStormcaller', passiveKey: 'passiveStaticCharge', descKey: 'charStormcallerDesc',
    baseStats: { moveSpeed: 136, maxHealth: 90, attack: 8.96, attackSpeed: 0.95, bulletSpeed: 308,
      weaponRadius: 1.05, critChance: 0.05, critDamage: 1.55, expMultiplier: 1.04,
      bulletCount: 1, luck: 0.08, curse: 0.05, armor: 0 }
  },
  {
    id: 'plagueDoctor', weapon: 'garlicAura', sprite: 'charPlagueDoctor',
    nameKey: 'charPlagueDoctor', passiveKey: 'passiveInfection', descKey: 'charPlagueDoctorDesc',
    baseStats: { moveSpeed: 129, maxHealth: 115, attack: 7.6, attackSpeed: 0.96, bulletSpeed: 265,
      weaponRadius: 1.15, critChance: 0.04, critDamage: 1.45, expMultiplier: 1.06,
      bulletCount: 1, luck: 0.04, curse: 0.08, armor: 1 }
  },
  {
    id: 'ranger', weapon: 'boomerang', sprite: 'charRanger',
    nameKey: 'charRanger', passiveKey: 'passivePerfectCatch', descKey: 'charRangerDesc',
    baseStats: { moveSpeed: 161, maxHealth: 92, attack: 8.1, attackSpeed: 1.06, bulletSpeed: 314,
      weaponRadius: 1, critChance: 0.09, critDamage: 1.55, expMultiplier: 1,
      bulletCount: 2, luck: 0.06, curse: 0, armor: 0 }
  },
  {
    id: 'guardian', weapon: 'towerShield', sprite: 'charGuardian',
    nameKey: 'charGuardian', passiveKey: 'passiveResolve', descKey: 'charGuardianDesc',
    baseStats: { moveSpeed: 123, maxHealth: 125, attack: 7.36, attackSpeed: 0.92, bulletSpeed: 255,
      weaponRadius: 1.08, critChance: 0.03, critDamage: 1.4, expMultiplier: 0.98,
      bulletCount: 1, luck: 0.02, curse: 0, armor: 4 }
  },
  {
    id: 'demolition', weapon: 'grenadeLauncher', sprite: 'charDemolition',
    nameKey: 'charDemolition', passiveKey: 'passiveDelayedDetonation', descKey: 'charDemolitionDesc',
    baseStats: { moveSpeed: 133, maxHealth: 108, attack: 9.44, attackSpeed: 0.88, bulletSpeed: 250,
      weaponRadius: 1.1, critChance: 0.04, critDamage: 1.6, expMultiplier: 0.96,
      bulletCount: 2, luck: 0.03, curse: 0.05, armor: 1 }
  },
  {
    id: 'bloodKnight', weapon: 'bloodSpear', sprite: 'charBloodKnight',
    nameKey: 'charBloodKnight', passiveKey: 'passiveBloodlust', descKey: 'charBloodKnightDesc',
    baseStats: { moveSpeed: 138, maxHealth: 95, attack: 8.8, attackSpeed: 1.02, bulletSpeed: 285,
      weaponRadius: 1.02, critChance: 0.1, critDamage: 1.65, expMultiplier: 1,
      bulletCount: 1, luck: 0.02, curse: 0.08, armor: 2 }
  },
  {
    id: 'bladeDancer', weapon: 'phantomBlades', sprite: 'charBladeDancer',
    nameKey: 'charBladeDancer', passiveKey: 'passiveRhythm', descKey: 'charBladeDancerDesc',
    baseStats: { moveSpeed: 154, maxHealth: 88, attack: 7.8, attackSpeed: 1.15, bulletSpeed: 302,
      weaponRadius: 0.92, critChance: 0.08, critDamage: 1.55, expMultiplier: 1.02,
      bulletCount: 2, luck: 0.05, curse: 0.03, armor: 0 }
  },
  {
    id: 'highCultist', weapon: 'cursedTotem', sprite: 'charHighCultist',
    nameKey: 'charHighCultist', passiveKey: 'passiveSoulHarvest', descKey: 'charHighCultistDesc',
    baseStats: { moveSpeed: 133, maxHealth: 105, attack: 7.8, attackSpeed: 1, bulletSpeed: 270,
      weaponRadius: 1.1, critChance: 0.05, critDamage: 1.5, expMultiplier: 1.08,
      bulletCount: 1, luck: 0.08, curse: 0.15, armor: 1 },
    startWeaponPick: true
  },
  {
    id: 'iceWitch', weapon: 'iceCrystal', sprite: 'charIceWitch',
    nameKey: 'charIceWitch', passiveKey: 'passiveSupercooling', descKey: 'charIceWitchDesc',
    baseStats: { moveSpeed: 136, maxHealth: 105, attack: 7.6, attackSpeed: 0.95, bulletSpeed: 302,
      weaponRadius: 1.12, critChance: 0.06, critDamage: 1.5, expMultiplier: 1.05,
      bulletCount: 1, luck: 0.05, curse: 0.04, armor: 1 }
  }
];

function getCharacterDef(id) {
  return CHARACTER_DEFS.find((c) => c.id === id) || CHARACTER_DEFS[0];
}

const CHARACTER_STAT_KEYS = [
  'moveSpeed', 'maxHealth', 'attack', 'attackSpeed', 'bulletSpeed',
  'weaponRadius', 'critChance', 'critDamage', 'expMultiplier',
  'bulletCount', 'luck', 'curse', 'armor'
];

const CHARACTER_STAT_DECIMALS = {
  moveSpeed: 0, maxHealth: 0, attack: 1, attackSpeed: 2, bulletSpeed: 0,
  weaponRadius: 2, critChance: 2, critDamage: 2, expMultiplier: 2,
  bulletCount: 0, luck: 2, curse: 2, armor: 0
};

/* Build the full base table for a character (global defaults + overrides). */
function resolveCharacterBase(def) {
  const B = (typeof Player !== 'undefined' && Player.BASE) ? Player.BASE : {
    moveSpeed: 140, maxHealth: 100, attack: 8, attackSpeed: 1,
    bulletSpeed: 280, weaponRadius: 1, critChance: 0.05, critDamage: 1.5, expMultiplier: 1
  };
  const out = {
    moveSpeed: B.moveSpeed,
    maxHealth: B.maxHealth,
    attack: B.attack,
    attackSpeed: B.attackSpeed,
    bulletSpeed: B.bulletSpeed,
    weaponRadius: B.weaponRadius,
    critChance: B.critChance,
    critDamage: B.critDamage,
    expMultiplier: B.expMultiplier,
    bulletCount: B.bulletCount || 1,
    luck: B.luck || 0,
    curse: B.curse || 0,
    armor: B.armor || 0
  };
  const stats = (def && def.baseStats) || {};
  for (const key of CHARACTER_STAT_KEYS) {
    if (Number.isFinite(stats[key])) out[key] = stats[key];
  }
  return out;
}

/* Install character bases on the player — does NOT touch run/store statAdd. */
function applyCharacterBaseStats(player, def) {
  if (!player || !def) return;
  player.charBase = resolveCharacterBase(def);
  player.bulletCount = player.charBase.bulletCount;
}

/* Global default bases used for green/red deltas on character cards. */
function defaultCharacterBase() {
  return resolveCharacterBase({ baseStats: {} });
}

function formatCharacterStatValue(key, value) {
  if (key === 'critChance' || key === 'luck' || key === 'curse') {
    return `${Math.round(value * 100)}%`;
  }
  const d = CHARACTER_STAT_DECIMALS[key] ?? 2;
  return Number(value).toFixed(d);
}

/* HTML block for char select / help — absolute bases; green/red vs global defaults. */
function formatCharacterBaseStatsHtml(def) {
  if (!def) return '';
  const stats = resolveCharacterBase(def);
  const defaults = defaultCharacterBase();
  const rows = [];
  const names = (I18n.statNames && (I18n.statNames[I18n.lang] || I18n.statNames.en)) || {};
  const labelKey = {
    moveSpeed: 'moveSpeed', maxHealth: 'maxHealth', attack: 'attack',
    attackSpeed: 'attackSpeed', bulletSpeed: 'bulletSpeed', weaponRadius: 'weaponRadius',
    critChance: 'critChance', critDamage: 'critDamage', expMultiplier: 'expMultiplier',
    bulletCount: 'bulletCount', luck: 'luck', curse: 'curse', armor: 'armor'
  };
  for (const key of CHARACTER_STAT_KEYS) {
    const v = stats[key];
    if (!Number.isFinite(v)) continue;
    const base = defaults[key];
    let tone = '';
    if (Number.isFinite(base) && Math.abs(v - base) > 1e-6) {
      tone = v > base ? ' buff' : ' debuff';
    }
    const name = names[labelKey[key]] || key;
    rows.push(`<div class="char-stat-row${tone}"><span>${name}</span>` +
      `<span>${formatCharacterStatValue(key, v)}</span></div>`);
  }
  if (!rows.length) return '';
  return `<div class="char-card-stats">` +
    `<div class="char-card-stats-title">${I18n.t('charBaseStats')}</div>` +
    (def.startWeaponPick ? `<div class="char-stat-note">${I18n.t('charCultistKit')}</div>` : '') +
    rows.join('') +
    `</div>`;
}

/* ============================================================
   CHARACTER SPRITES — unique 16×16 front-facing heroes
   Palette slots vary per sprite; each silhouette is distinct.
   ============================================================ */
const CharacterSprites = {
  _make(px, p) {
    return SpriteFactory.create(px, p);
  },

  build() {
    // Shared face/outline helpers referenced in comments below:
    // 0 clear, 1 outline, 9 skin/white face accents where used
    return {
      /* Hunter — flat cap, short cloak, shotgun across chest */
      charHunter: this._make([
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,
        0,0,1,5,5,5,5,5,5,5,5,5,1,0,0,0,
        0,0,1,5,5,5,5,5,5,5,5,5,1,0,0,0,
        0,0,0,1,9,9,9,9,9,9,9,1,0,0,0,0,
        0,0,0,1,9,1,9,9,1,9,1,0,0,0,0,0,
        0,0,0,0,1,9,9,9,9,9,1,0,0,0,0,0,
        0,0,0,0,0,1,6,6,6,1,0,0,0,0,0,0,
        0,0,0,1,3,3,3,4,3,3,3,1,0,0,0,0,
        0,0,1,3,3,4,4,4,4,4,3,3,1,0,0,0,
        0,0,1,3,3,3,3,3,3,3,3,3,1,0,0,0,
        0,0,1,2,3,3,3,3,3,3,3,2,1,0,0,0,
        0,0,0,1,2,2,1,1,1,1,2,1,0,0,0,0,
        0,0,0,0,1,1,8,0,0,8,1,0,0,0,0,0,
        0,0,0,0,1,8,8,0,0,8,8,1,0,0,0,0,
        0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0
      ], ['#0000','#1a1a2e','#2a3a1a','#4a6a30','#c9a227','#3a2a18','#5a3030','#e74c3c','#3a2a18','#f0d8b0']),

      /* Stormcaller — tall pointed hood, lightning bolt emblem */
      charStormcaller: this._make([
        0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,1,4,1,0,0,0,0,0,0,0,
        0,0,0,0,0,1,4,4,4,1,0,0,0,0,0,0,
        0,0,0,0,1,4,4,4,4,4,1,0,0,0,0,0,
        0,0,0,1,4,4,4,4,4,4,4,1,0,0,0,0,
        0,0,1,4,4,9,9,9,9,9,4,4,1,0,0,0,
        0,0,1,4,9,1,9,9,1,9,4,1,0,0,0,0,
        0,0,0,1,9,9,9,9,9,9,1,0,0,0,0,0,
        0,0,1,3,3,3,4,3,3,3,3,1,0,0,0,0,
        0,1,3,3,3,4,4,4,3,3,3,3,1,0,0,0,
        0,1,3,3,3,3,4,3,3,3,3,3,1,0,0,0,
        0,1,2,3,3,3,3,3,3,3,3,2,1,0,0,0,
        0,0,1,2,2,1,1,1,1,2,2,1,0,0,0,0,
        0,0,0,1,1,8,0,0,8,1,1,0,0,0,0,0,
        0,0,0,0,1,8,0,0,8,1,0,0,0,0,0,0,
        0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0
      ], ['#0000','#0a1028','#1a2a5a','#2a4a9a','#a0e0ff','#e8e8f0','#6a3030','#e74c3c','#2a3a6a','#f5e6d0']),

      /* Plague Doctor — wide brim + beak mask */
      charPlagueDoctor: this._make([
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
        0,1,5,5,5,5,5,5,5,5,5,5,5,5,1,0,
        0,0,1,5,5,5,5,5,5,5,5,5,5,1,0,0,
        0,0,0,1,1,9,9,9,9,9,1,1,0,0,0,0,
        0,0,0,1,9,4,4,9,9,4,4,1,0,0,0,0,
        0,0,0,1,4,4,4,4,4,4,4,1,0,0,0,0,
        0,0,0,0,1,4,4,4,4,4,1,0,0,0,0,0,
        0,0,0,0,0,1,4,4,4,1,0,0,0,0,0,0,
        0,0,0,1,3,3,3,3,3,3,3,1,0,0,0,0,
        0,0,1,3,3,3,6,3,3,6,3,3,1,0,0,0,
        0,0,1,2,3,3,3,3,3,3,3,2,1,0,0,0,
        0,0,0,1,2,2,1,1,1,1,2,1,0,0,0,0,
        0,0,0,0,1,1,8,0,0,8,1,0,0,0,0,0,
        0,0,0,0,1,8,8,0,0,8,8,1,0,0,0,0,
        0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0
      ], ['#0000','#0a0a0a','#1a2a1a','#2a4a28','#1a1a1a','#2a2a2a','#8a2020','#e74c3c','#1a1a10','#c8b090']),

      /* Ranger — hooded cowl, quiver on back */
      charRanger: this._make([
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,
        0,0,0,1,5,5,5,5,5,5,5,1,0,0,0,0,
        0,0,1,5,5,5,5,5,5,5,5,5,1,4,0,0,
        0,0,1,5,9,9,9,9,9,9,5,1,0,4,1,0,
        0,0,0,1,9,1,9,9,1,9,1,0,0,4,1,0,
        0,0,0,0,1,9,9,9,9,9,1,0,0,4,1,0,
        0,0,0,0,0,1,6,6,6,1,0,0,0,1,0,0,
        0,0,0,1,3,3,3,3,3,3,3,1,0,0,0,0,
        0,0,1,3,3,3,4,3,3,4,3,3,1,0,0,0,
        0,0,1,3,3,3,3,3,3,3,3,3,1,0,0,0,
        0,0,1,2,3,3,3,3,3,3,3,2,1,0,0,0,
        0,0,0,1,2,2,1,1,1,1,2,1,0,0,0,0,
        0,0,0,0,1,1,8,0,0,8,1,0,0,0,0,0,
        0,0,0,0,1,8,8,0,0,8,8,1,0,0,0,0,
        0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0
      ], ['#0000','#1a2010','#2a3a18','#3a6a28','#daa520','#2a4a20','#6a4020','#e74c3c','#3a2a10','#e8c8a0']),

      /* Guardian — full helm + kite shield on left */
      charGuardian: this._make([
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,
        0,0,0,1,7,7,7,7,7,7,7,1,0,0,0,0,
        0,0,0,1,7,7,5,5,5,7,7,1,0,0,0,0,
        0,0,0,1,7,5,1,5,1,5,7,1,0,0,0,0,
        0,0,0,1,7,5,5,5,5,5,7,1,0,0,0,0,
        0,0,0,0,1,7,5,5,5,7,1,0,0,0,0,0,
        0,4,4,0,0,1,6,6,6,1,0,0,0,0,0,0,
        0,4,5,4,1,3,3,3,3,3,3,1,0,0,0,0,
        0,4,5,4,1,3,3,3,3,3,3,3,1,0,0,0,
        0,4,5,4,1,3,3,3,3,3,3,3,1,0,0,0,
        0,4,4,4,1,2,3,3,3,3,3,2,1,0,0,0,
        0,0,4,0,0,1,2,1,1,1,2,1,0,0,0,0,
        0,0,0,0,0,0,1,8,0,8,1,0,0,0,0,0,
        0,0,0,0,0,0,1,8,0,8,1,0,0,0,0,0,
        0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0
      ], ['#0000','#1a1a28','#3a3a4a','#6a7a8a','#4a90c0','#cde8ff','#8a8070','#8a9098','#4a4a5a','#f0e0d0']),

      /* Demolition — hard hat, goggles, belt pouches, stocky */
      charDemolition: this._make([
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,
        0,0,0,1,1,4,4,4,4,4,1,1,0,0,0,0,
        0,0,1,4,4,4,4,4,4,4,4,4,1,0,0,0,
        0,0,1,4,4,4,4,4,4,4,4,4,1,0,0,0,
        0,0,0,1,9,6,6,9,6,6,9,1,0,0,0,0,
        0,0,0,1,9,1,9,9,1,9,1,0,0,0,0,0,
        0,0,0,0,1,9,9,9,9,9,1,0,0,0,0,0,
        0,0,1,3,3,3,3,3,3,3,3,3,1,0,0,0,
        0,1,3,3,7,3,3,3,3,7,3,3,3,1,0,0,
        0,1,3,3,7,3,3,3,3,7,3,3,3,1,0,0,
        0,1,2,3,3,3,3,3,3,3,3,3,2,1,0,0,
        0,0,1,2,2,1,1,1,1,1,2,2,1,0,0,0,
        0,0,0,1,1,8,0,0,0,8,1,1,0,0,0,0,
        0,0,0,1,8,8,0,0,0,8,8,1,0,0,0,0,
        0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0
      ], ['#0000','#1a1008','#4a2a10','#8a4a20','#ff6a20','#2a1a10','#1a3040','#c07020','#3a2010','#e8c090']),

      /* Blood Knight — horned helm, cape, spear tip peeking */
      charBloodKnight: this._make([
        0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,
        0,0,1,4,0,1,1,1,1,1,0,4,1,0,0,0,
        0,0,0,1,1,7,7,7,7,7,1,1,0,0,0,0,
        0,0,0,1,7,7,5,5,5,7,7,1,0,0,0,0,
        0,0,0,1,7,5,1,5,1,5,7,1,0,0,0,0,
        0,0,0,1,7,5,5,5,5,5,7,1,0,0,0,0,
        0,0,0,0,1,7,5,5,5,7,1,0,0,0,0,0,
        0,0,0,0,0,1,6,6,6,1,0,0,0,0,0,0,
        0,1,1,1,3,3,3,4,3,3,3,1,0,0,0,0,
        1,4,4,1,3,3,4,4,4,3,3,3,1,0,0,0,
        1,4,4,1,3,3,3,4,3,3,3,3,1,0,0,0,
        0,1,1,1,2,3,3,3,3,3,3,2,1,0,0,0,
        0,0,0,0,1,2,2,1,1,2,2,1,0,0,0,0,
        0,0,0,0,0,1,8,0,0,8,1,0,0,0,0,0,
        0,0,0,0,0,1,8,0,0,8,1,0,0,0,0,0,
        0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0
      ], ['#0000','#1a0508','#4a1010','#8a2020','#ff4040','#e8d0d0','#6a1018','#5a1018','#3a1010','#f0d0c8']),

      /* Blade Dancer — dual blades raised, lean torso, scarf */
      charBladeDancer: this._make([
        0,0,5,0,0,0,0,0,0,0,0,0,5,0,0,0,
        0,0,5,0,0,1,1,1,1,1,0,0,5,0,0,0,
        0,0,7,0,1,8,8,8,8,8,1,0,7,0,0,0,
        0,0,7,1,8,8,8,8,8,8,8,1,7,0,0,0,
        0,0,0,1,8,9,9,9,9,9,8,1,0,0,0,0,
        0,0,0,1,9,1,9,9,1,9,1,0,0,0,0,0,
        0,0,0,0,1,9,9,9,9,9,1,0,0,0,0,0,
        0,0,0,0,0,1,6,6,6,1,0,0,0,0,0,0,
        0,0,5,1,3,3,3,3,3,3,3,1,5,0,0,0,
        0,0,5,1,3,3,4,3,3,4,3,1,5,0,0,0,
        0,0,7,1,3,3,3,3,3,3,3,1,7,0,0,0,
        0,0,0,1,2,3,3,3,3,3,2,1,0,0,0,0,
        0,0,0,0,1,2,1,1,1,2,1,0,0,0,0,0,
        0,0,0,0,0,1,8,0,8,1,0,0,0,0,0,0,
        0,0,0,0,0,1,8,0,8,1,0,0,0,0,0,0,
        0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0
      ], ['#0000','#1a1a30','#2a2a4a','#6a6ab0','#b8c8ff','#e8e0ff','#c04080','#d0d8ff','#3a3a5a','#fff0f8']),

      /* High Cultist — tall mitre, occult eye on robe */
      charHighCultist: this._make([
        0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,1,4,1,0,0,0,0,0,0,0,
        0,0,0,0,0,1,5,5,5,1,0,0,0,0,0,0,
        0,0,0,0,1,5,5,4,5,5,1,0,0,0,0,0,
        0,0,0,1,5,5,5,5,5,5,5,1,0,0,0,0,
        0,0,0,1,5,9,9,9,9,9,5,1,0,0,0,0,
        0,0,0,1,9,1,9,9,1,9,1,0,0,0,0,0,
        0,0,0,0,1,9,9,9,9,9,1,0,0,0,0,0,
        0,0,0,1,3,3,3,3,3,3,3,1,0,0,0,0,
        0,0,1,3,3,3,4,9,4,3,3,3,1,0,0,0,
        0,0,1,3,3,3,3,4,3,3,3,3,1,0,0,0,
        0,0,1,2,3,3,3,3,3,3,3,2,1,0,0,0,
        0,0,0,1,2,2,1,1,1,1,2,1,0,0,0,0,
        0,0,0,0,1,1,8,0,0,8,1,0,0,0,0,0,
        0,0,0,0,1,8,8,0,0,8,8,1,0,0,0,0,
        0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0
      ], ['#0000','#140810','#2a1020','#6a2040','#c04080','#3a1830','#6a3030','#e74c3c','#2a1020','#e8c8d0']),

      /* Ice Witch — pointed hat, crystal staff, icy dress flare */
      charIceWitch: this._make([
        0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,1,4,1,0,0,0,0,0,4,0,
        0,0,0,0,0,1,4,4,4,1,0,0,0,0,4,1,
        0,0,0,0,1,5,5,5,5,5,1,0,0,0,6,1,
        0,0,0,1,5,5,5,5,5,5,5,1,0,0,4,0,
        0,0,0,1,5,9,9,9,9,9,5,1,0,0,0,0,
        0,0,0,1,9,1,9,9,1,9,1,0,0,0,0,0,
        0,0,0,0,1,9,9,9,9,9,1,0,0,0,0,0,
        0,0,0,1,3,3,3,4,3,3,3,1,0,0,0,0,
        0,0,1,3,3,3,4,4,4,3,3,3,1,0,0,0,
        0,1,3,3,3,3,3,4,3,3,3,3,3,1,0,0,
        0,1,2,3,3,3,3,3,3,3,3,3,2,1,0,0,
        0,0,1,2,2,1,1,1,1,1,2,2,1,0,0,0,
        0,0,0,1,1,8,0,0,0,8,1,1,0,0,0,0,
        0,0,0,0,1,8,0,0,0,8,1,0,0,0,0,0,
        0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0
      ], ['#0000','#0a2030','#1a3a4a','#40a0c0','#e0f8ff','#d0e8f0','#90e0ff','#e74c3c','#2a4a5a','#f0f8ff']),

      /* Cat Witch — tall pointy hat, black/white robes, pale face, cat-ear tips */
      charCatWitch: this._make([
        0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,1,7,1,0,0,0,0,0,0,0,
        0,0,0,0,0,1,4,4,4,1,0,0,0,0,0,0,
        0,0,0,0,1,4,4,4,4,4,1,0,0,0,0,0,
        0,0,0,1,4,4,4,7,4,4,4,1,0,0,0,0,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0,
        0,0,7,0,1,9,9,9,9,9,1,0,7,0,0,0,
        0,0,1,7,9,1,9,9,1,9,9,7,1,0,0,0,
        0,0,0,1,9,9,9,9,9,9,1,0,0,0,0,0,
        0,0,0,1,3,3,3,7,3,3,3,1,0,0,0,0,
        0,0,1,3,3,3,3,3,3,3,3,3,1,0,0,0,
        0,0,1,2,3,3,3,3,3,3,3,2,1,0,0,0,
        0,0,0,1,2,2,1,1,1,1,2,1,0,0,0,0,
        0,0,0,0,1,8,0,0,0,8,1,0,0,0,0,0,
        0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0
      ], ['#0000','#050505','#1a1a1a','#2e2e2e','#0a0a0a','#a8a8a8','#606060','#f5f5f5','#111111','#ececec'])
    };
  }
};

/* ============================================================
   CHARACTER PASSIVES
   ============================================================ */
const CHARACTER_PASSIVES = {
  /* ---- 1. Hunter / Adrenaline ---- */
  hunter: {
    init(game, s) {
      s.stacks = 0;
      s.scanT = 0;
      s.gainT = 0;
      s.loseT = 0;
    },
    update(game, s, dt) {
      s.scanT -= dt;
      if (s.scanT > 0) return;
      s.scanT = 0.25;
      let near = 0;
      game.spatial.queryCircle(game.player.x, game.player.y, 220, () => { near++; }, 8);
      if (near >= 6) {
        s.gainT += 0.25;
        if (s.gainT >= 0.5) {
          s.gainT = 0;
          s.stacks = Math.min(5, s.stacks + 1);
        }
        s.loseT = 0;
      } else {
        s.loseT += 0.25;
        if (s.loseT >= 0.8) {
          s.loseT = 0;
          s.stacks = Math.max(0, s.stacks - 1);
        }
        s.gainT = 0;
      }
    },
    hud(game, s) {
      return { label: 'ADR', ratio: s.stacks / 5, pips: s.stacks };
    }
  },

  /* ---- 2. Stormcaller / Static Charge ---- */
  stormcaller: {
    init(game, s) {
      s.charged = [];
      s.burstCd = 0;
      s.arcs = [];
      s.arcing = false;
      s.scanT = 0;
    },
    _ensure(s) {
      if (!s.arcs) s.arcs = [];
      if (!s.charged) s.charged = [];
      if (s.burstCd == null) s.burstCd = 0;
      if (s.scanT == null) s.scanT = 0;
      if (s.arcing == null) s.arcing = false;
    },
    update(game, s, dt) {
      this._ensure(s);
      s.burstCd = Math.max(0, s.burstCd - dt);
      s.scanT -= dt;
      for (let i = s.arcs.length - 1; i >= 0; i--) {
        s.arcs[i].life -= dt;
        if (s.arcs[i].life <= 0) s.arcs.splice(i, 1);
      }
      if (s.scanT > 0) return;
      s.scanT = 0.2;
      const now = performance.now();
      s.charged = s.charged.filter((c) => c.e && c.e.active && !c.e.dying && c.until > now);
      if (s.charged.length < 3 || s.burstCd > 0 || s.arcing) return;
      s.arcing = true;
      s.burstCd = 0.6;
      let made = 0;
      const list = s.charged;
      for (let i = 0; i < list.length && made < 3; i++) {
        for (let j = i + 1; j < list.length && made < 3; j++) {
          const a = list[i].e;
          const b = list[j].e;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (dx * dx + dy * dy > 160 * 160) continue;
          const dmg = game.player.stats.attack * 0.35;
          _hitEnemy(game, a, dmg, false, { weaponId: 'staticArc' });
          _hitEnemy(game, b, dmg, false, { weaponId: 'staticArc' });
          s.arcs.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, life: 0.12 });
          made++;
        }
      }
      s.arcing = false;
    },
    onHit(game, s, e, weaponId) {
      this._ensure(s);
      if (weaponId !== 'chainLightning' || s.arcing) return;
      if (!e || !e.active || e.dying) return;
      if (e._charged) return;
      e._charged = true;
      const until = performance.now() + 4000;
      s.charged.push({ e, until });
      while (s.charged.length > 10) {
        const drop = s.charged.shift();
        if (drop && drop.e) drop.e._charged = false;
      }
    },
    draw(game, s, ctx, cam) {
      this._ensure(s);
      for (const a of s.arcs) {
        const p1 = cam.worldToScreen(a.x1, a.y1);
        const p2 = cam.worldToScreen(a.x2, a.y2);
        ctx.save();
        ctx.strokeStyle = `rgba(120,220,255,${Math.min(1, a.life * 8)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
      }
    },
    hud(game, s) {
      this._ensure(s);
      return { label: 'CHG', ratio: s.charged.length / 10, pips: s.charged.length };
    }
  },

  /* ---- 3. Plague Doctor / Infection ---- */
  plagueDoctor: {
    init(game, s) {
      s.infected = [];
    },
    update(game, s, dt) {
      const now = performance.now();
      s.infected = s.infected.filter((c) => c.e && c.e.active && !c.e.dying && c.until > now);
    },
    onHit(game, s, e, weaponId) {
      if (weaponId !== 'garlicAura' || !e || e.dying) return;
      e._infectPulses = (e._infectPulses || 0) + 1;
      if (e._infectPulses < 3 || e._infected) return;
      e._infected = true;
      e._infectSpread = true;
      StatusEffects.applyPoison(e, 1, 3, Math.max(2, game.player.stats.attack * 0.08));
      s.infected.push({ e, until: performance.now() + 3000 });
      while (s.infected.length > 24) s.infected.shift();
    },
    onKill(game, s, e) {
      if (!e || !e._infected || !e._infectSpread) return;
      e._infectSpread = false;
      const t = game.spatial.nearest(e.x, e.y, 90);
      if (!t || t === e || t._infected) return;
      t._infected = true;
      t._infectSpread = false;
      StatusEffects.applyPoison(t, 1, 3, Math.max(2, game.player.stats.attack * 0.08));
      s.infected.push({ e: t, until: performance.now() + 3000 });
      while (s.infected.length > 24) s.infected.shift();
    },
    hud(game, s) {
      return { label: 'INF', ratio: Math.min(1, s.infected.length / 12), pips: Math.min(5, s.infected.length) };
    }
  },

  /* ---- 4. Ranger / Perfect Catch ---- */
  ranger: {
    init(game, s) {
      s.momentum = false;
      s.moving = false;
      s.stoppedWhileAir = false;
      s.lastX = game.player.x;
      s.lastY = game.player.y;
      s.boomerangAir = false;
    },
    update(game, s, dt) {
      const p = game.player;
      const dx = p.x - s.lastX;
      const dy = p.y - s.lastY;
      s.moving = (dx * dx + dy * dy) > 0.25;
      s.lastX = p.x;
      s.lastY = p.y;
      if (s.boomerangAir && !s.moving) s.stoppedWhileAir = true;
    },
    onBoomerangThrown(game, s) {
      s.boomerangAir = true;
      s.stoppedWhileAir = !s.moving;
    },
    onBoomerangCaught(game, s) {
      if (s.boomerangAir && !s.stoppedWhileAir) s.momentum = true;
      s.boomerangAir = false;
      s.stoppedWhileAir = false;
    },
    consumeMomentum(game, s) {
      if (!s.momentum) return false;
      s.momentum = false;
      return true;
    },
    hud(game, s) {
      return { label: 'MOM', ratio: s.momentum ? 1 : 0, pips: s.momentum ? 1 : 0 };
    }
  },

  /* ---- 5. Guardian / Resolve ---- */
  guardian: {
    init(game, s) {
      s.resolve = false;
      s.noHitT = 0;
      s.slamCd = 0;
    },
    update(game, s, dt) {
      s.slamCd = Math.max(0, s.slamCd - dt);
      if (!s.resolve) {
        s.noHitT += dt;
        if (s.noHitT >= 6) s.resolve = true;
      }
      if (!s.resolve || s.slamCd > 0) return;
      const tower = game.weapons.get('towerShield');
      if (!tower || tower.state.x == null) return;
      let hit = false;
      game.spatial.queryCircle(tower.state.x, tower.state.y, weaponScaleRadius(22, game.player), () => { hit = true; }, 4);
      if (!hit) return;
      s.resolve = false;
      s.noHitT = 0;
      s.slamCd = 3;
      const base = game.player.stats.attack * 0.55;
      const r = weaponScaleRadius(110, game.player);
      game.spatial.queryCircle(game.player.x, game.player.y, r, (e) => {
        const roll = rollCritDamage(game.player, base);
        _hitEnemy(game, e, roll.damage, roll.isCrit, {
          knockback: 40, stun: true, stunDur: 0.5, weaponId: 'towerShield'
        });
      }, 32);
      if (typeof SoundManager !== 'undefined' && SoundManager.weaponClang) SoundManager.weaponClang();
      if (game.spawnExplosion) game.spawnExplosion(game.player.x, game.player.y);
    },
    onPlayerDamaged(game, s) {
      s.resolve = false;
      s.noHitT = 0;
    },
    hud(game, s) {
      return { label: 'RES', ratio: s.resolve ? 1 : Math.min(1, s.noHitT / 6), pips: s.resolve ? 1 : 0 };
    }
  },

  /* ---- 6. Demolition / Delayed Detonation ---- */
  demolition: {
    init(game, s) {
      s.armed = null;
    },
    update(game, s, dt) {
      const g = s.armed;
      if (!g || !g.active) {
        s.armed = null;
        return;
      }
      g._armLife = (g._armLife || 6) - dt;
      if (g._armLife <= 0) {
        s.armed = null;
        if (g._detonateArmed) g._detonateArmed(game);
      }
    },
    armGrenade(game, s, grenade) {
      if (s.armed && s.armed.active && s.armed !== grenade && s.armed._detonateArmed) {
        const prev = s.armed;
        s.armed = null;
        prev._detonateArmed(game);
      }
      s.armed = grenade;
      grenade._armLife = 6;
    },
    clearArmed(game, s) {
      if (s.armed && s.armed.active && s.armed._detonateArmed) {
        const g = s.armed;
        s.armed = null;
        g._detonateArmed(game);
      }
      s.armed = null;
    },
    hud(game, s) {
      return { label: 'ARM', ratio: s.armed && s.armed.active ? 1 : 0, pips: s.armed && s.armed.active ? 1 : 0 };
    }
  },

  /* ---- 7. Blood Knight / Bloodlust ---- */
  bloodKnight: {
    init(game, s) {
      s.meter = 0;
      s.ready = false;
    },
    onHit(game, s, e, weaponId, dead, opts) {
      if (weaponId !== 'bloodSpear') return;
      if (opts && opts.bleed) s.meter = Math.min(20, s.meter + 1);
      if (s.meter >= 20) s.ready = true;
    },
    onKill(game, s, e) {
      if (e && e.bleedStacks > 0) {
        s.meter = Math.min(20, s.meter + 2);
        if (s.meter >= 20) s.ready = true;
      }
    },
    consumeCrimson(game, s) {
      if (!s.ready) return false;
      s.ready = false;
      s.meter = 0;
      return true;
    },
    hud(game, s) {
      return { label: 'BLD', ratio: s.meter / 20, pips: s.ready ? 1 : 0 };
    }
  },

  /* ---- 8. Blade Dancer / Rhythm ---- */
  bladeDancer: {
    init(game, s) {
      s.rhythm = 0;
      s.syncT = 0;
    },
    update(game, s, dt) {
      if (s.syncT > 0) s.syncT = Math.max(0, s.syncT - dt);
    },
    onHit(game, s, e, weaponId) {
      if (weaponId !== 'phantomBlades') return;
      if (s.syncT > 0) return;
      s.rhythm = Math.min(40, s.rhythm + 1);
      if (s.rhythm >= 40) {
        s.rhythm = 0;
        s.syncT = 4;
      }
    },
    hud(game, s) {
      if (s.syncT > 0) return { label: 'SYN', ratio: s.syncT / 4, pips: 1 };
      return { label: 'RHY', ratio: s.rhythm / 40, pips: 0 };
    }
  },

  /* ---- 9. High Cultist / Soul Harvest ---- */
  highCultist: {
    init(game, s) {
      s.souls = 0;
      s.flying = [];
    },
    update(game, s, dt) {
      const totems = (game.weapons.get('cursedTotem') || {}).state;
      const list = (totems && totems.totems) || [];
      const tx = list.length ? list[0].x : game.player.x;
      const ty = list.length ? list[0].y : game.player.y;
      for (let i = s.flying.length - 1; i >= 0; i--) {
        const f = s.flying[i];
        f.life -= dt;
        if (f.life <= 0) {
          s.flying.splice(i, 1);
          continue;
        }
        const dx = tx - f.x;
        const dy = ty - f.y;
        const d = Math.sqrt(dx * dx + dy * dy) || 1;
        f.x += (dx / d) * 220 * dt;
        f.y += (dy / d) * 220 * dt;
        if (d < 18) {
          s.flying.splice(i, 1);
          s.souls = Math.min(5, s.souls + 1);
          if (s.souls >= 5 && list.length) {
            s.souls = 0;
            const t = list[0];
            let n = 0;
            game.spatial.queryCircle(t.x, t.y, t.radius || 220, (e) => {
              if (n >= 6) return;
              StatusEffects.applyCurse(e, 0.35, 1);
              n++;
            }, 24);
          }
        }
      }
    },
    onKill(game, s, e) {
      if (!e || !(e.curse > 0)) return;
      if (s.flying.length >= 12) return;
      s.flying.push({ x: e.x, y: e.y, life: 4 });
    },
    draw(game, s, ctx, cam) {
      for (const f of s.flying) {
        const p = cam.worldToScreen(f.x, f.y);
        ctx.fillStyle = 'rgba(200,80,160,0.85)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    hud(game, s) {
      return { label: 'SOL', ratio: s.souls / 5, pips: s.souls };
    }
  },

  /* ---- 10. Ice Witch / Supercooling ---- */
  iceWitch: {
    init(game, s) {
      s.sources = [];
      s.scanT = 0;
    },
    _ensure(s) {
      if (!s.sources) s.sources = [];
      if (s.scanT == null) s.scanT = 0;
    },
    update(game, s, dt) {
      this._ensure(s);
      s.scanT -= dt;
      s.sources = s.sources.filter((e) => e && e.active && !e.dying && e.frozenT > 0);
      if (s.scanT > 0) return;
      s.scanT = 0.2;
      for (const src of s.sources) {
        game.spatial.queryCircle(src.x, src.y, 90, (e) => {
          if (e === src) return;
          e._superCool = 0.35;
        }, 10);
      }
    },
    onHit(game, s, e, weaponId) {
      this._ensure(s);
      if (weaponId !== 'iceCrystal' || !e) return;
      if (e.frozenT <= 0) return;
      if (s.sources.indexOf(e) >= 0) return;
      if (s.sources.length >= 3) s.sources.shift();
      s.sources.push(e);
    },
    hud(game, s) {
      this._ensure(s);
      return { label: 'ICE', ratio: s.sources.length / 3, pips: s.sources.length };
    }
  },

  /* ---- 11. Cat Witch / Familiar Mark ---- */
  catWitch: {
    init(game, s) {
      s.marks = 0;
      s.markCd = 0;
    },
    _ensure(s) {
      if (s.marks == null) s.marks = 0;
      if (s.markCd == null) s.markCd = 0;
    },
    update(game, s, dt) {
      this._ensure(s);
      if (s.markCd > 0) s.markCd -= dt;
    },
    onHit(game, s, e, weaponId) {
      this._ensure(s);
      if (weaponId !== 'madCat' || !e) return;
      if (s.markCd > 0) return;
      s.markCd = 0.22;
      s.marks = Math.min(4, (s.marks | 0) + 1);
      if (s.marks < 4) return;
      s.marks = 0;
      const w = game.weapons && game.weapons.get('madCat');
      if (w && typeof madCatSpawnScratch === 'function') {
        madCatSpawnScratch(game, w, e.x, e.y, { dmgMult: 1.25, life: 0.55 });
      }
    },
    hud(game, s) {
      this._ensure(s);
      return { label: 'FAM', ratio: (s.marks || 0) / 4, pips: s.marks || 0 };
    }
  }
};

window.CHARACTER_DEFS = CHARACTER_DEFS;
window.CHARACTER_PASSIVES = CHARACTER_PASSIVES;
window.CharacterSprites = CharacterSprites;
window.getCharacterDef = getCharacterDef;
window.resolveCharacterBase = resolveCharacterBase;
window.applyCharacterBaseStats = applyCharacterBaseStats;
window.formatCharacterBaseStatsHtml = formatCharacterBaseStatsHtml;
