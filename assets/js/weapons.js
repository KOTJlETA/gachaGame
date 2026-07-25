'use strict';

function rollCritDamage(player, baseDmg) {
  const isCrit = Math.random() < player.stats.critChance;
  return {
    damage: baseDmg * (isCrit ? player.stats.critDamage : 1),
    isCrit
  };
}

function weaponProjectileCount(def, player) {
  const base = def.projectiles || 1;
  return Math.max(1, base + (Math.floor(player.stats.bulletCount) - 1));
}

function weaponCooldown(def, player) {
  return def.cooldown / Math.max(0.15, player.stats.attackSpeed);
}

/* Tiny unique canvas icons for each weapon */
const WeaponIcons = {
  _cache: {},
  get(id) {
    if (this._cache[id]) return this._cache[id];
    const c = document.createElement('canvas');
    c.width = 48; c.height = 48;
    const ctx = c.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const drawers = {
      shotgun: () => {
        ctx.fillStyle = '#5a4632'; ctx.fillRect(8, 20, 28, 10);
        ctx.fillStyle = '#2a2218'; ctx.fillRect(32, 18, 10, 14);
        ctx.fillStyle = '#c9a227'; ctx.fillRect(6, 22, 6, 6);
      },
      chainLightning: () => {
        ctx.strokeStyle = '#6cf'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(10, 12); ctx.lineTo(22, 24); ctx.lineTo(14, 28); ctx.lineTo(38, 40); ctx.stroke();
      },
      garlicAura: () => {
        ctx.fillStyle = '#8f8'; ctx.beginPath(); ctx.arc(24, 24, 14, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#efe'; ctx.beginPath(); ctx.arc(24, 22, 7, 0, Math.PI * 2); ctx.fill();
      },
      boomerang: () => {
        ctx.strokeStyle = '#d4a574'; ctx.lineWidth = 5; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.arc(24, 24, 14, -0.8, 2.4); ctx.stroke();
      },
      towerShield: () => {
        ctx.fillStyle = '#6a7a8a';
        ctx.beginPath(); ctx.moveTo(12, 10); ctx.lineTo(36, 10); ctx.lineTo(34, 34); ctx.lineTo(24, 42); ctx.lineTo(14, 34); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#cde'; ctx.fillRect(20, 16, 8, 12);
      },
      grenadeLauncher: () => {
        ctx.fillStyle = '#3d5a3d'; ctx.fillRect(6, 22, 26, 10);
        ctx.fillStyle = '#2a3a2a'; ctx.beginPath(); ctx.arc(36, 27, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#8a4'; ctx.fillRect(10, 18, 8, 6);
      },
      bloodSpear: () => {
        ctx.fillStyle = '#a22'; ctx.fillRect(8, 22, 28, 5);
        ctx.fillStyle = '#f66';
        ctx.beginPath(); ctx.moveTo(36, 18); ctx.lineTo(44, 24); ctx.lineTo(36, 30); ctx.closePath(); ctx.fill();
      },
      phantomBlades: () => {
        ctx.globalAlpha = 0.85; ctx.fillStyle = '#b8c8ff';
        ctx.beginPath(); ctx.moveTo(10, 34); ctx.lineTo(22, 10); ctx.lineTo(26, 34); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(22, 34); ctx.lineTo(34, 10); ctx.lineTo(38, 34); ctx.closePath(); ctx.fill();
      },
      cursedTotem: () => {
        ctx.fillStyle = '#3a2040'; ctx.fillRect(18, 14, 12, 26);
        ctx.fillStyle = '#a0f'; ctx.beginPath(); ctx.arc(24, 14, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#f0a'; ctx.fillRect(20, 12, 3, 3); ctx.fillRect(26, 12, 3, 3);
      },
      iceCrystal: () => {
        ctx.fillStyle = '#9ef';
        ctx.beginPath(); ctx.moveTo(24, 6); ctx.lineTo(36, 24); ctx.lineTo(24, 42); ctx.lineTo(12, 24); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#eff'; ctx.beginPath(); ctx.moveTo(24, 14); ctx.lineTo(30, 24); ctx.lineTo(24, 34); ctx.lineTo(18, 24); ctx.closePath(); ctx.fill();
      }
    };
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.fillRect(0, 0, 48, 48);
    if (drawers[id]) drawers[id]();
    else {
      ctx.fillStyle = '#888';
      ctx.fillRect(12, 12, 24, 24);
    }
    this._cache[id] = c;
    return c;
  }
};

const WEAPON_DEFS = {};

function _modsFor(w) {
  const m = {
    pierce: 0, burst: 1, spreadTight: 1, explosive: false, choke: false, split: false, burn: false,
    jumps: 3, slowOnHit: false, killJump: false, conductive: false, skyStrike: false, field: false, fieldStrike: false,
    auraSlow: false, lifesteal: false, healOrbs: false, overhealShield: false, auraDr: false, weakSpread: false, darkPulse: false,
    wallReturn: false, spinHard: false, hover: false, trail: false, pull: false, collidePull: false, extraOrbit: false,
    blockProj: false, knockback: false, stun: false, slam: false, frontGuard: false, reflect: false, blockAura: false,
    puddle: false, acid: false, expand: false, expireBlast: false, napalm: false, burnTrail: false, fragments: 0,
    keepFlying: false, bleed: false, bloodPool: false, bleedExplode: false, returns: false, home: false, spinReturn: false,
    linger: false, oscillate: false, expandBurst: false, dashIn: false, phantoms: 0, ghostWall: false, finalSlash: false,
    curseAmp: false, curseSpread: false, curseStrong: false, totemPulse: false, recharge: false, deathBoom: false, multiTotem: false,
    freeze: false, freezeSolid: false, shatter: false, statues: false, shards: false, ricochet: 0, iceTrail: false
  };
  const lv = w.level;
  const b = w.branch;
  if (w.id === 'shotgun') {
    if (lv >= 2) m.pierce = 1;
    if (b === 'A') { if (lv >= 3) m.burst = 3; if (lv >= 4) m.spreadTight = 0.55; if (lv >= 5) m.explosive = true; }
    if (b === 'B') { if (lv >= 3) m.choke = true; if (lv >= 4) m.split = true; if (lv >= 5) m.burn = true; }
  } else if (w.id === 'chainLightning') {
    if (lv >= 2) m.jumps = 5;
    if (b === 'A') { if (lv >= 3) m.slowOnHit = true; if (lv >= 4) m.killJump = true; if (lv >= 5) m.conductive = true; }
    if (b === 'B') { if (lv >= 3) m.skyStrike = true; if (lv >= 4) m.field = true; if (lv >= 5) m.fieldStrike = true; }
  } else if (w.id === 'garlicAura') {
    if (lv >= 2) m.auraSlow = true;
    if (b === 'A') { if (lv >= 3) m.lifesteal = true; if (lv >= 4) m.healOrbs = true; if (lv >= 5) m.overhealShield = true; }
    if (b === 'B') { if (lv >= 3) m.auraDr = true; if (lv >= 4) m.weakSpread = true; if (lv >= 5) m.darkPulse = true; }
  } else if (w.id === 'boomerang') {
    if (lv >= 2) m.wallReturn = true;
    if (b === 'A') { if (lv >= 3) m.spinHard = true; if (lv >= 4) m.hover = true; if (lv >= 5) m.trail = true; }
    if (b === 'B') { if (lv >= 3) m.pull = true; if (lv >= 4) m.collidePull = true; if (lv >= 5) m.extraOrbit = true; }
  } else if (w.id === 'towerShield') {
    if (lv >= 2) m.blockProj = true;
    if (b === 'A') { if (lv >= 3) m.knockback = true; if (lv >= 4) m.stun = true; if (lv >= 5) m.slam = true; }
    if (b === 'B') { if (lv >= 3) m.frontGuard = true; if (lv >= 4) m.reflect = true; if (lv >= 5) m.blockAura = true; }
  } else if (w.id === 'grenadeLauncher') {
    if (lv >= 2) m.puddle = true;
    if (b === 'A') { if (lv >= 3) m.acid = true; if (lv >= 4) m.expand = true; if (lv >= 5) m.expireBlast = true; }
    if (b === 'B') { if (lv >= 3) m.napalm = true; if (lv >= 4) m.burnTrail = true; if (lv >= 5) m.fragments = 4; }
  } else if (w.id === 'bloodSpear') {
    if (lv >= 2) m.keepFlying = true;
    if (b === 'A') { if (lv >= 3) m.bleed = true; if (lv >= 4) m.bloodPool = true; if (lv >= 5) m.bleedExplode = true; }
    if (b === 'B') { if (lv >= 3) m.returns = true; if (lv >= 4) m.home = true; if (lv >= 5) m.spinReturn = true; }
  } else if (w.id === 'phantomBlades') {
    if (lv >= 2) m.linger = true;
    if (b === 'A') { if (lv >= 3) m.oscillate = true; if (lv >= 4) m.expandBurst = true; if (lv >= 5) m.dashIn = true; }
    if (b === 'B') { if (lv >= 3) m.phantoms = 2; if (lv >= 4) m.ghostWall = true; if (lv >= 5) m.finalSlash = true; }
  } else if (w.id === 'cursedTotem') {
    if (lv >= 2) m.curseAmp = true;
    if (b === 'A') { if (lv >= 3) m.curseSpread = true; if (lv >= 4) m.curseStrong = true; if (lv >= 5) m.totemPulse = true; }
    if (b === 'B') { if (lv >= 3) m.recharge = true; if (lv >= 4) m.deathBoom = true; if (lv >= 5) m.multiTotem = true; }
  } else if (w.id === 'iceCrystal') {
    if (lv >= 2) m.freeze = true;
    if (b === 'A') { if (lv >= 3) m.freezeSolid = true; if (lv >= 4) m.shatter = true; if (lv >= 5) m.statues = true; }
    if (b === 'B') { if (lv >= 3) m.shards = true; if (lv >= 4) m.ricochet = 2; if (lv >= 5) m.iceTrail = true; }
  }
  return m;
}

/* Short upgrade blurbs shown on level-up cards (en / ru). */
const WEAPON_LEVEL_TEXT = {
  shotgun: {
    en: {
      1: 'Wide pellet spray at short range.',
      2: 'Pellets pierce through 1 enemy.',
      '3A': 'Path A: 3-round burst fire.',
      '3B': 'Path B: tight choke cone.',
      '4A': 'Even tighter pellet spread.',
      '4B': 'Pellets split on hit.',
      '5A': 'Pellets explode on impact.',
      '5B': 'Pellets ignite enemies.'
    },
    ru: {
      1: 'Широкий дробовой залп вблизи.',
      2: 'Дробь пробивает 1 врага.',
      '3A': 'Путь A: очередь из 3 выстрелов.',
      '3B': 'Путь B: узкий плотный конус.',
      '4A': 'Ещё более плотная осыпь.',
      '4B': 'Дробь делится при попадании.',
      '5A': 'Дробь взрывается при ударе.',
      '5B': 'Дробь поджигает врагов.'
    }
  },
  chainLightning: {
    en: {
      1: 'Arc bolt that jumps between foes.',
      2: 'Chain jumps farther.',
      '3A': 'Path A: hits slow enemies.',
      '3B': 'Path B: random sky strikes.',
      '4A': 'Kills extend the chain.',
      '4B': 'Leaves a static field.',
      '5A': 'Conductive foes chain harder.',
      '5B': 'Field triggers follow-up strikes.'
    },
    ru: {
      1: 'Молния, прыгающая между врагами.',
      2: 'Больше прыжков по цепи.',
      '3A': 'Путь A: удары замедляют.',
      '3B': 'Путь B: случайные удары с неба.',
      '4A': 'Убийства удлиняют цепь.',
      '4B': 'Оставляет статическое поле.',
      '5A': 'Проводники усиливают цепь.',
      '5B': 'Поле вызывает доп. удары.'
    }
  },
  garlicAura: {
    en: {
      1: 'Damaging aura around you.',
      2: 'Aura slows nearby enemies.',
      '3A': 'Path A: lifesteal from aura.',
      '3B': 'Path B: aura reduces damage taken.',
      '4A': 'Spawn heal orbs.',
      '4B': 'Weakness spreads between foes.',
      '5A': 'Overheal becomes temp shield.',
      '5B': 'Dark pulse bursts from the aura.'
    },
    ru: {
      1: 'Уронная аура вокруг вас.',
      2: 'Аура замедляет врагов рядом.',
      '3A': 'Путь A: вампиризм от ауры.',
      '3B': 'Путь B: аура снижает получаемый урон.',
      '4A': 'Появляются сферы лечения.',
      '4B': 'Слабость распространяется.',
      '5A': 'Избыток лечения → щит.',
      '5B': 'Тёмный импульс из ауры.'
    }
  },
  boomerang: {
    en: {
      1: 'Throws toward the furthest enemy, then returns.',
      2: 'Returns after the edge bounce.',
      '3A': 'Path A: harder spin, more hits.',
      '3B': 'Path B: pulls enemies inward.',
      '4A': 'Hovers briefly at the apex.',
      '4B': 'Stronger pull on contact.',
      '5A': 'Leaves a damaging trail.',
      '5B': 'Extra orbiting boomerang.'
    },
    ru: {
      1: 'Бросок в самого дальнего врага с возвратом.',
      2: 'Возврат после отскока от края.',
      '3A': 'Путь A: сильнее крутится, больше ударов.',
      '3B': 'Путь B: притягивает врагов.',
      '4A': 'Коротко зависает на пике.',
      '4B': 'Сильнее тянет при касании.',
      '5A': 'Оставляет уронный след.',
      '5B': 'Доп. орбитальный бумеранг.'
    }
  },
  towerShield: {
    en: {
      1: 'Orbiting shield that bashes foes.',
      2: 'Blocks enemy projectiles.',
      '3A': 'Path A: knocks enemies back.',
      '3B': 'Path B: wider front guard.',
      '4A': 'Bash stuns enemies.',
      '4B': 'Reflects blocked shots.',
      '5A': 'Ground-slam shockwave.',
      '5B': 'Block triggers a defense aura.'
    },
    ru: {
      1: 'Орбитальный щит, бьющий врагов.',
      2: 'Блокирует вражеские снаряды.',
      '3A': 'Путь A: отбрасывает врагов.',
      '3B': 'Путь B: шире фронтальная защита.',
      '4A': 'Удар оглушает.',
      '4B': 'Отражает заблокированные выстрелы.',
      '5A': 'Ударная волна по земле.',
      '5B': 'Блок включает защитную ауру.'
    }
  },
  grenadeLauncher: {
    en: {
      1: 'Lobs arcing grenades that explode.',
      2: 'Leaves an acid puddle on land.',
      '3A': 'Path A: stronger acid pools.',
      '3B': 'Path B: napalm burn pools.',
      '4A': 'Puddles expand over time.',
      '4B': 'Burn trail while in flight.',
      '5A': 'Puddles explode when they expire.',
      '5B': 'Blasts spawn shrapnel fragments.'
    },
    ru: {
      1: 'Кидает гранаты по дуге со взрывом.',
      2: 'Оставляет кислотную лужу.',
      '3A': 'Путь A: сильнее кислотные лужи.',
      '3B': 'Путь B: напалмовые горящие лужи.',
      '4A': 'Лужи расширяются.',
      '4B': 'Огненный след в полёте.',
      '5A': 'Лужи взрываются при исчезновении.',
      '5B': 'Взрыв сыплет осколками.'
    }
  },
  bloodSpear: {
    en: {
      1: 'Throws a piercing blood spear.',
      2: 'Keeps flying after hits.',
      '3A': 'Path A: applies bleed stacks.',
      '3B': 'Path B: spear returns to you.',
      '4A': 'Bleed leaves blood pools.',
      '4B': 'Homes toward nearby foes.',
      '5A': 'Bleed detonates on kill.',
      '5B': 'Spinning return path.'
    },
    ru: {
      1: 'Пронзающее кровавое копьё.',
      2: 'Летит дальше после попаданий.',
      '3A': 'Путь A: накладывает кровотечение.',
      '3B': 'Путь B: копьё возвращается.',
      '4A': 'Кровь оставляет лужи.',
      '4B': 'Наводится на врагов рядом.',
      '5A': 'Кровотечение взрывается при убийстве.',
      '5B': 'Вращающийся путь возврата.'
    }
  },
  phantomBlades: {
    en: {
      1: 'Ghost blades orbit around you.',
      2: 'Blades linger longer on contact.',
      '3A': 'Path A: orbit radius oscillates.',
      '3B': 'Path B: extra phantom blades.',
      '4A': 'Periodic expand burst.',
      '4B': 'Forms a ghost wall.',
      '5A': 'Blades dash inward after burst.',
      '5B': 'Finishing slash on a timer.'
    },
    ru: {
      1: 'Призрачные клинки на орбите.',
      2: 'Дольше «держатся» при контакте.',
      '3A': 'Путь A: радиус орбиты пульсирует.',
      '3B': 'Путь B: больше призрачных клинков.',
      '4A': 'Периодический рывок наружу.',
      '4B': 'Собирается в стену призраков.',
      '5A': 'После рывка клинки схлопываются.',
      '5B': 'Финальный удар по таймеру.'
    }
  },
  cursedTotem: {
    en: {
      1: 'Plants a long-lived curse zone at your feet. Stay inside to empower it.',
      2: 'Curse amplifies damage taken.',
      '3A': 'Path A: curse spreads between foes.',
      '3B': 'Path B: next plant comes sooner.',
      '4A': 'Stronger curse stacks.',
      '4B': 'Totem explodes when it dies.',
      '5A': 'Totem sends pulse waves.',
      '5B': 'Multiple totems at once.'
    },
    ru: {
      1: 'Ставит долгую зону проклятия у ног. Оставайтесь внутри, чтобы она работала.',
      2: 'Проклятие усиливает получаемый урон.',
      '3A': 'Путь A: проклятие распространяется.',
      '3B': 'Путь B: следующая установка быстрее.',
      '4A': 'Сильнее стаки проклятия.',
      '4B': 'Тотем взрывается при гибели.',
      '5A': 'Импульсные волны от тотема.',
      '5B': 'Несколько тотемов сразу.'
    }
  },
  iceCrystal: {
    en: {
      1: 'Fans homing crystal shards in a 90° cone.',
      2: 'Applies freeze buildup.',
      '3A': 'Path A: can freeze foes solid.',
      '3B': 'Path B: shatters into extra shards.',
      '4A': 'Shatter frozen enemies.',
      '4B': 'Ricochets between foes.',
      '5A': 'Frozen statues linger as obstacles.',
      '5B': 'Leaves a chilling ice trail.'
    },
    ru: {
      1: 'Веер самонаводящихся осколков в конусе 90°.',
      2: 'Накапливает заморозку.',
      '3A': 'Путь A: может заморозить намертво.',
      '3B': 'Путь B: раскалывается на осколки.',
      '4A': 'Разбивает замороженных врагов.',
      '4B': 'Рикошетит между врагами.',
      '5A': 'Ледяные статуи остаются преградой.',
      '5B': 'Оставляет ледяной след.'
    }
  }
};

function weaponLevelDesc(weaponId, level, branch) {
  const pack = WEAPON_LEVEL_TEXT[weaponId];
  if (!pack) return '';
  const lang = (typeof I18n !== 'undefined' && I18n.lang) || 'en';
  const table = pack[lang] || pack.en;
  let key = String(level);
  if (level >= 3 && branch) key = `${level}${branch}`;
  return table[key] || table['1'] || '';
}

function _hitEnemy(game, e, dmg, isCrit, opts) {
  if (!e || !e.active || e.dying) return false;
  // Enemy.takeDamage applies StatusEffects.damageMult itself; mirror it here only
  // so the floating number matches what actually landed
  const final = dmg * StatusEffects.damageMult(e);
  const dead = e.takeDamage(dmg);
  if (game.showEnemyDamageNumbers && game.floatingTextPool.countActive() < 28) {
    game.spawnFloatingText(e.x, e.y, String(Math.max(1, Math.round(final))),
      isCrit ? '#ffd23d' : '#ffffff', isCrit ? 26 : 20);
  }
  if (opts) {
    if (opts.burn) StatusEffects.applyBurn(e, 1, 2.5, Math.max(3, dmg * 0.2));
    if (opts.bleed) StatusEffects.applyBleed(e, 1, 2.5, Math.max(2, dmg * 0.15));
    if (opts.slow) StatusEffects.applySlow(e, opts.slowFactor || 0.6, opts.slowDur || 1.2);
    if (opts.freeze) StatusEffects.applyFreeze(e, opts.freezeAmt || 0.25);
    if (opts.stun) StatusEffects.applyStun(e, opts.stunDur || 0.5);
    if (opts.knockback && game.player && !StatusEffects.isControlImmune(e)) {
      const dx = e.x - game.player.x;
      const dy = e.y - game.player.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      e.x += (dx / len) * (opts.knockback || 18);
      e.y += (dy / len) * (opts.knockback || 18);
    }
    if (opts.onHit) opts.onHit(e, dead);
  }
  if (dead) {
    if (opts && opts.bleedExplode && e.bleedStacks > 0 && e.canChain !== false) {
      e.explodedBy = 'bleed';
      game.spatial.queryCircle(e.x, e.y, 70, (o) => {
        if (o === e || o.explodedBy) return;
        const r = rollCritDamage(game.player, dmg * 0.6);
        _hitEnemy(game, o, r.damage, r.isCrit, { canChain: false });
      }, 12);
    }
    game._onEnemyKilled(e);
  }
  return dead;
}

function _spawnBullet(game, x, y, vx, vy, dmg, isCrit, opts) {
  const p = game.projPool.acquire();
  p.spawn(x, y, vx, vy, dmg, isCrit, true, null, opts.life || 1.6);
  p.radius = opts.radius || 5;
  p.piercing = opts.pierce || 0;
  p.pierceLeft = opts.pierce || 0;
  p.hitSet = null;
  p.color = opts.color || '#4af';
  p.kind = opts.kind || 'bullet';
  p.onHit = opts.onHit || null;
  p.weaponOpts = opts.hitOpts || null;
  p.spin = !!opts.spin;
  p.returning = false;
  p.home = !!opts.home;
  p.lockTarget = opts.lockTarget || null;
  p.keepFlying = !!opts.keepFlying;
  p.canChain = opts.canChain !== false;
  p.trail = !!opts.trail;
  p.split = !!opts.split;
  p.explosive = !!opts.explosive;
  p.ownerWeapon = opts.weaponId || null;
  p.arc = opts.arc || null;
  p.meta = opts.meta || null;
  return p;
}

/* ---- Weapon definitions ---- */
WEAPON_DEFS.shotgun = {
  id: 'shotgun', nameKey: 'weaponShotgun', kind: 'projectile',
  cooldown: 1.0, damageMult: 0.35, projectiles: 8, hasReload: true,
  fire(w, game, aim) {
    const p = game.player;
    const m = w.mods;
    const base = p.stats.attack * this.damageMult;
    const count = weaponProjectileCount(this, p);
    const dx = aim.x - p.x; const dy = aim.y - p.y;
    const baseAng = Math.atan2(dy, dx);
    let spread = m.choke ? 0.28 : 0.55;
    spread *= m.spreadTight;
    const bursts = m.burst || 1;
    for (let b = 0; b < bursts; b++) {
      const delay = b * 0.08;
      const fireOnce = () => {
        let anyCrit = false;
        for (let i = 0; i < count; i++) {
          const t = count === 1 ? 0 : (i / (count - 1) - 0.5);
          const ang = baseAng + t * spread + (Math.random() - 0.5) * 0.04;
          const spd = 220 + p.stats.bulletSpeed * 0.35;
          const roll = rollCritDamage(p, base);
          if (roll.isCrit) anyCrit = true;
          _spawnBullet(game, p.x, p.y, Math.cos(ang) * spd, Math.sin(ang) * spd, roll.damage, roll.isCrit, {
            pierce: m.pierce, radius: 4, color: '#f5d76e', kind: 'pellet', life: 0.9,
            explosive: m.explosive, split: m.split && i === Math.floor(count / 2),
            hitOpts: m.burn ? { burn: true } : null, weaponId: 'shotgun'
          });
        }
        SoundManager.weaponShotgun(anyCrit);
      };
      if (delay <= 0) fireOnce();
      else w.state.pending = (w.state.pending || []).concat([{ t: delay, fn: fireOnce }]);
    }
  }
};

WEAPON_DEFS.chainLightning = {
  id: 'chainLightning', nameKey: 'weaponChainLightning', kind: 'hitscan',
  cooldown: 1.1, damageMult: 0.9, projectiles: 1, hasReload: true,
  fire(w, game, aim) {
    const p = game.player;
    const m = w.mods;
    const strikes = weaponProjectileCount(this, p);
    const base = p.stats.attack * this.damageMult;
    for (let s = 0; s < strikes; s++) {
      const start = s === 0
        ? (game.spatial.nearest(aim.x, aim.y, 420) || game.spatial.nearest(p.x, p.y, 420))
        : game.spatial.kNearest(p.x, p.y, 420, strikes + 2)[s];
      if (!start) continue;
      const hit = new Set();
      let cur = start;
      let fromX = p.x; let fromY = p.y;
      let jumps = m.jumps;
      const segs = [];
      while (cur && jumps-- > 0) {
        if (hit.has(cur)) break;
        hit.add(cur);
        const roll = rollCritDamage(p, base * (0.7 + 0.3 * (jumps + 1) / m.jumps));
        const dead = _hitEnemy(game, cur, roll.damage, roll.isCrit, {
          slow: m.slowOnHit, slowFactor: 0.55, slowDur: 1.4,
          onHit: (e, wasDead) => {
            if (wasDead && m.killJump) jumps += 1;
          }
        });
        segs.push({ x1: fromX, y1: fromY, x2: cur.x, y2: cur.y });
        if (m.skyStrike && jumps === 0) {
          const roll2 = rollCritDamage(p, base * 1.2);
          _hitEnemy(game, cur, roll2.damage, roll2.isCrit, {});
          segs.push({ x1: cur.x, y1: cur.y - 120, x2: cur.x, y2: cur.y, sky: true });
        }
        if (m.field && jumps === 0) {
          game.effects.spawnField('electric', cur.x, cur.y, 55, 2.5, base * 0.35, '#6cf', {
            onExpire: m.fieldStrike ? (f, g) => {
              g.spatial.queryCircle(f.x, f.y, f.radius, (e) => {
                const r = rollCritDamage(p, base * 0.5);
                _hitEnemy(g, e, r.damage, r.isCrit, {});
              }, 16);
            } : null
          }, EffectCaps.MAX_FIELDS);
        }
        fromX = cur.x; fromY = cur.y;
        let next = null; let best = 1e12;
        game.spatial.queryCircle(cur.x, cur.y, 180, (e) => {
          if (hit.has(e)) return;
          const dx = e.x - cur.x; const dy = e.y - cur.y;
          const d = dx * dx + dy * dy;
          if (d < best) { best = d; next = e; }
        }, 24);
        if (m.conductive && next && next.slowT > 0) { /* prefer slowed */ }
        cur = next;
      }
      w.state.bolts = (w.state.bolts || []).concat({ segs, life: 0.22 });
    }
    SoundManager.weaponZap();
  },
  update(w, dt) {
    if (!w.state.bolts) return;
    w.state.bolts = w.state.bolts.filter((b) => { b.life -= dt; return b.life > 0; });
  },
  draw(w, ctx, cam) {
    if (!w.state.bolts) return;
    for (const b of w.state.bolts) {
      ctx.save();
      ctx.strokeStyle = `rgba(100,220,255,${Math.min(1, b.life * 5)})`;
      ctx.lineWidth = 2;
      for (const s of b.segs) {
        const a = cam.worldToScreen(s.x1, s.y1);
        const c = cam.worldToScreen(s.x2, s.y2);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        const mx = (a.x + c.x) * 0.5 + (Math.random() - 0.5) * 16;
        const my = (a.y + c.y) * 0.5 + (Math.random() - 0.5) * 16;
        ctx.lineTo(mx, my);
        ctx.lineTo(c.x, c.y);
        ctx.stroke();
      }
      ctx.restore();
    }
  }
};

WEAPON_DEFS.garlicAura = {
  id: 'garlicAura', nameKey: 'weaponGarlicAura', kind: 'aura',
  cooldown: 0.45, damageMult: 0.22, projectiles: 1, hasReload: true,
  fire(w, game) {
    const p = game.player;
    const m = w.mods;
    const base = p.stats.attack * this.damageMult;
    const radius = Math.min(150, 70 + w.level * 8);
    w.state.radius = radius;
    w.state.pulse = 0.2;
    let healed = 0;
    game.spatial.queryCircle(p.x, p.y, radius, (e) => {
      const roll = rollCritDamage(p, base);
      const dead = _hitEnemy(game, e, roll.damage, roll.isCrit, {
        slow: m.auraSlow, slowFactor: 0.7, slowDur: 0.6
      });
      if (m.lifesteal) healed += roll.damage * 0.04;
      if (dead && m.healOrbs) healed += p.stats.maxHealth * 0.02;
      if (dead && m.weakSpread) {
        game.spatial.queryCircle(e.x, e.y, 80, (o) => StatusEffects.applyWeak(o, 2), 8);
      }
    }, 40);
    if (healed > 0) {
      const before = p.health;
      p.health = Math.min(p.stats.maxHealth, p.health + healed);
      const over = healed - (p.health - before);
      if (m.overhealShield && over > 0 && game.weapons) {
        game.weapons.addTempShield(Math.min(40, over));
      }
    }
    if (m.darkPulse) {
      w.state.darkT = (w.state.darkT || 0) + 1;
      if (w.state.darkT >= 4) {
        w.state.darkT = 0;
        game.spatial.queryCircle(p.x, p.y, radius * 1.2, (e) => {
          const roll = rollCritDamage(p, base * 1.5);
          _hitEnemy(game, e, roll.damage, roll.isCrit, {});
        }, 48);
      }
    }
    if (m.auraDr) w.state.dr = 0.35;
    SoundManager.weaponHum();
  },
  update(w, dt) {
    if (w.state.pulse > 0) w.state.pulse -= dt;
    if (w.state.dr > 0) w.state.dr -= dt * 0.15;
  },
  draw(w, ctx, cam, player) {
    const r = w.state.radius || 70;
    const s = cam.worldToScreen(player.x, player.y);
    const a = 0.15 + (w.state.pulse || 0);
    ctx.save();
    ctx.strokeStyle = `rgba(120,220,100,${a})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
};

WEAPON_DEFS.boomerang = {
  id: 'boomerang', nameKey: 'weaponBoomerang', kind: 'thrown',
  cooldown: 1.2, damageMult: 0.7, projectiles: 1, hasReload: true,
  fire(w, game, aim) {
    const p = game.player;
    const m = w.mods;
    const base = p.stats.attack * this.damageMult;
    const count = weaponProjectileCount(this, p);
    // Always lob toward the furthest foe so the return path cuts through the pack
    const target = game.spatial.furthest(p.x, p.y, 720)
      || game.spatial.nearest(p.x, p.y, 500)
      || aim;
    const ang = Math.atan2(target.y - p.y, target.x - p.x);
    for (let i = 0; i < count; i++) {
      const a = ang + (i - (count - 1) * 0.5) * 0.2;
      const spd = (m.spinHard ? 260 : 200) + p.stats.bulletSpeed * 0.2;
      const roll = rollCritDamage(p, base);
      const proj = _spawnBullet(game, p.x, p.y, Math.cos(a) * spd, Math.sin(a) * spd, roll.damage, roll.isCrit, {
        radius: 8, color: '#d4a574', kind: 'boomerang', life: m.hover ? 2.4 : 1.8,
        pierce: 99, spin: true, trail: m.trail, weaponId: 'boomerang',
        meta: { returning: false, originX: p.x, originY: p.y, pull: m.pull, collidePull: m.collidePull,
          extraOrbit: m.extraOrbit, hover: m.hover, hoverT: 0 }
      });
      proj.hitSet = new Set();
    }
    SoundManager.weaponWhoosh();
  }
};

WEAPON_DEFS.towerShield = {
  id: 'towerShield', nameKey: 'weaponTowerShield', kind: 'orbit',
  cooldown: 0.8, damageMult: 0.4, projectiles: 1, hasReload: false,
  fire() {},
  update(w, dt, game) {
    const p = game.player;
    const m = w.mods;
    w.state.angle = (w.state.angle || 0) + dt * 2.2;
    const maxShield = 30 + w.level * 12;
    if (w.state.shield == null) w.state.shield = maxShield;
    w.state.maxShield = maxShield;
    if (w.state.regenDelay > 0) w.state.regenDelay -= dt;
    else w.state.shield = Math.min(maxShield, w.state.shield + (4 + w.level) * dt);

    const radius = 42;
    const sx = p.x + Math.cos(w.state.angle) * radius;
    const sy = p.y + Math.sin(w.state.angle) * radius;
    w.state.x = sx; w.state.y = sy;
    const base = p.stats.attack * this.damageMult;
    w.state.hitCD = (w.state.hitCD || 0) - dt;
    if (w.state.hitCD <= 0) {
      game.spatial.queryCircle(sx, sy, 22, (e) => {
        const roll = rollCritDamage(p, base);
        _hitEnemy(game, e, roll.damage, roll.isCrit, {
          knockback: m.knockback ? 28 : 0,
          stun: m.stun, stunDur: 0.45
        });
      }, 8);
      w.state.hitCD = 0.25;
    }
    if (m.slam) {
      w.state.slamT = (w.state.slamT || 0) + dt;
      if (w.state.slamT >= 3.5) {
        w.state.slamT = 0;
        game.spatial.queryCircle(p.x, p.y, 90, (e) => {
          const roll = rollCritDamage(p, base * 1.4);
          _hitEnemy(game, e, roll.damage, roll.isCrit, { knockback: 40, canChain: false });
        }, 24);
        SoundManager.weaponClang();
      }
    }
    if (m.frontGuard) w.state.guardT = (w.state.guardT || 0) + dt;
    if (m.blockAura && w.state.justBlocked) {
      w.state.auraT = 1.5;
      w.state.justBlocked = false;
    }
    if (w.state.auraT > 0) {
      w.state.auraT -= dt;
      game.spatial.queryCircle(p.x, p.y, 60, (e) => {
        StatusEffects.applySlow(e, 0.6, 0.4);
      }, 16);
    }
  },
  draw(w, ctx, cam) {
    if (w.state.x == null) return;
    const s = cam.worldToScreen(w.state.x, w.state.y);
    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.rotate(w.state.angle || 0);
    ctx.fillStyle = '#8a9aaa';
    ctx.fillRect(-10, -16, 20, 32);
    ctx.fillStyle = '#cde';
    ctx.fillRect(-4, -8, 8, 12);
    ctx.restore();
  }
};

WEAPON_DEFS.grenadeLauncher = {
  id: 'grenadeLauncher', nameKey: 'weaponGrenadeLauncher', kind: 'thrown',
  cooldown: 1.4, damageMult: 1.1, projectiles: 1, hasReload: true,
  fire(w, game, aim) {
    const p = game.player;
    const m = w.mods;
    const base = p.stats.attack * this.damageMult;
    const count = weaponProjectileCount(this, p);
    const dx = aim.x - p.x;
    const dy = aim.y - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const baseAng = Math.atan2(dy, dx);
    const baseDist = Math.max(90, Math.min(360, dist));

    const lobOne = (i) => {
      // Wide fan between multi-shots, plus strong random scatter
      const fan = count > 1 ? (i - (count - 1) * 0.5) * 0.28 : 0;
      const jitterAng = (Math.random() - 0.5) * 0.55;
      const ang = baseAng + fan + jitterAng;
      const range = baseDist * (0.65 + Math.random() * 0.7);
      const side = (Math.random() - 0.5) * 110;
      const tx = p.x + Math.cos(ang) * range - Math.sin(ang) * side;
      const ty = p.y + Math.sin(ang) * range + Math.cos(ang) * side;
      const roll = rollCritDamage(p, base);
      const g = game.grenadePool.acquire();
      g.spawn(p.x, p.y, tx, ty, roll.damage, roll.isCrit, {
        puddle: m.puddle, acid: m.acid, expand: m.expand, expireBlast: m.expireBlast,
        napalm: m.napalm, burnTrail: m.burnTrail, fragments: m.fragments
      });
      if (typeof SoundManager !== 'undefined' && SoundManager.weaponThump) SoundManager.weaponThump();
    };

    for (let i = 0; i < count; i++) {
      const delay = i * 0.1;
      if (delay <= 0) lobOne(i);
      else {
        const idx = i;
        w.state.pending = (w.state.pending || []).concat([{ t: delay, fn: () => lobOne(idx) }]);
      }
    }
  }
};

WEAPON_DEFS.bloodSpear = {
  id: 'bloodSpear', nameKey: 'weaponBloodSpear', kind: 'projectile',
  cooldown: 0.85, damageMult: 0.85, projectiles: 1, hasReload: true,
  fire(w, game, aim) {
    const p = game.player;
    const m = w.mods;
    const base = p.stats.attack * this.damageMult;
    const count = weaponProjectileCount(this, p);
    const dx = aim.x - p.x; const dy = aim.y - p.y;
    const ang = Math.atan2(dy, dx);
    for (let i = 0; i < count; i++) {
      const a = ang + (i - (count - 1) * 0.5) * 0.12;
      const spd = 320 + p.stats.bulletSpeed * 0.4;
      const roll = rollCritDamage(p, base);
      _spawnBullet(game, p.x, p.y, Math.cos(a) * spd, Math.sin(a) * spd, roll.damage, roll.isCrit, {
        pierce: m.keepFlying ? 8 : 2, radius: 5, color: '#e33', kind: 'spear', life: 1.4,
        keepFlying: m.keepFlying, home: m.home, spin: m.spinReturn,
        hitOpts: {
          bleed: m.bleed,
          bleedExplode: m.bleedExplode,
          onHit: (e) => {
            if (m.bloodPool) {
              game.effects.spawnField('blood', e.x, e.y, 36, 2.2, base * 0.2, '#a22', null, EffectCaps.MAX_PUDDLES);
            }
          }
        },
        meta: m.returns ? { returning: false, originX: p.x, originY: p.y, returns: true } : null,
        weaponId: 'bloodSpear'
      });
    }
    SoundManager.weaponWet();
  }
};

WEAPON_DEFS.phantomBlades = {
  id: 'phantomBlades', nameKey: 'weaponPhantomBlades', kind: 'orbit',
  cooldown: 0.5, damageMult: 0.35, projectiles: 1, hasReload: false,
  fire() {},
  update(w, dt, game) {
    const p = game.player;
    const m = w.mods;
    w.state.angle = (w.state.angle || 0) + dt * (2.8 + (m.linger ? 0.4 : 0));
    let radius = 50;
    if (m.oscillate) radius = 40 + Math.sin((w.state.angle || 0) * 2) * 18;
    if (m.expandBurst) {
      w.state.burstT = (w.state.burstT || 0) + dt;
      if (w.state.burstT > 2.5) {
        w.state.burstT = 0;
        w.state.expand = 1.2;
      }
    }
    if (w.state.expand > 0) {
      radius += 40 * w.state.expand;
      w.state.expand -= dt;
      if (w.state.expand <= 0 && m.dashIn) radius = 30;
    }
    const blades = 2 + Math.min(EffectCaps.MAX_PHANTOMS, m.phantoms || 0);
    const base = p.stats.attack * this.damageMult;
    w.state.blades = [];
    for (let i = 0; i < blades; i++) {
      const a = (w.state.angle || 0) + (Math.PI * 2 * i) / blades;
      const bx = p.x + Math.cos(a) * radius;
      const by = p.y + Math.sin(a) * radius;
      w.state.blades.push({ x: bx, y: by, a });
      game.spatial.queryCircle(bx, by, m.linger ? 18 : 14, (e) => {
        if (e._bladeHit === w.state.tick) return;
        e._bladeHit = w.state.tick;
        const roll = rollCritDamage(p, base);
        _hitEnemy(game, e, roll.damage, roll.isCrit, {});
      }, 6);
    }
    w.state.tick = (w.state.tick || 0) + 1;
    if (m.finalSlash) {
      w.state.slashT = (w.state.slashT || 0) + dt;
      if (w.state.slashT >= 4) {
        w.state.slashT = 0;
        game.spatial.queryCircle(p.x, p.y, radius + 20, (e) => {
          const roll = rollCritDamage(p, base * 1.6);
          _hitEnemy(game, e, roll.damage, roll.isCrit, {});
        }, 32);
        SoundManager.weaponWhoosh();
      }
    }
  },
  draw(w, ctx, cam) {
    if (!w.state.blades) return;
    for (const b of w.state.blades) {
      const s = cam.worldToScreen(b.x, b.y);
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(b.a);
      ctx.globalAlpha = 0.75;
      ctx.fillStyle = '#b8c8ff';
      ctx.beginPath();
      ctx.moveTo(-4, 10); ctx.lineTo(0, -14); ctx.lineTo(4, 10);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }
};

WEAPON_DEFS.cursedTotem = {
  id: 'cursedTotem', nameKey: 'weaponCursedTotem', kind: 'summon',
  /* Long plant CD: you commit to a zone instead of kiting with fresh totems. */
  cooldown: 12, damageMult: 0.5, projectiles: 1, hasReload: true,
  auraRadius: 220,
  totemLife: 16,
  fire(w, game, aim) {
    const p = game.player;
    const m = w.mods;
    const maxT = m.multiTotem ? EffectCaps.MAX_TOTEMS : 1;
    w.state.totems = w.state.totems || [];
    while (w.state.totems.length >= maxT) w.state.totems.shift();
    // Always planted on the player — the field is a hold-the-zone circle
    w.state.totems.push({
      x: p.x, y: p.y, life: this.totemLife, cd: 0,
      radius: this.auraRadius,
      amp: m.curseAmp, spread: m.curseSpread, strong: m.curseStrong,
      pulse: m.totemPulse, deathBoom: m.deathBoom
    });
    // Path B: shorter wait before the next plant (still far slower than before)
    if (m.recharge) w.cd *= 0.7;
    SoundManager.weaponChime();
  },
  update(w, dt, game) {
    if (!w.state.totems) return;
    const p = game.player;
    const base = p.stats.attack * this.damageMult;
    const auraR = this.auraRadius;
    w.state.totems = w.state.totems.filter((t) => {
      t.life -= dt;
      t.cd -= dt;
      if (t.auraPulse > 0) t.auraPulse -= dt;
      if (t.life <= 0) {
        if (t.deathBoom) {
          game.spatial.queryCircle(t.x, t.y, 80, (e) => {
            if (e.curse > 0) {
              const roll = rollCritDamage(p, base * 1.5);
              _hitEnemy(game, e, roll.damage, roll.isCrit, { canChain: false });
            }
          }, 20);
        }
        return false;
      }
      // Curse only ticks while the player is inside — leave and it goes dormant
      const pdx = p.x - t.x;
      const pdy = p.y - t.y;
      t.playerInside = (pdx * pdx + pdy * pdy) <= auraR * auraR;
      if (!t.playerInside) return true;

      if (t.cd <= 0) {
        t.cd = 0.7;
        t.auraPulse = 0.25;
        const target = game.spatial.nearest(t.x, t.y, auraR);
        if (target) {
          const strength = t.strong ? 0.35 : 0.2;
          StatusEffects.applyCurse(target, strength + (t.amp ? 0.1 : 0), 0);
          if (t.spread) {
            game.spatial.queryCircle(target.x, target.y, 90, (e) => {
              if (e === target) return;
              StatusEffects.applyCurse(e, strength * 0.7, 1);
            }, 6);
          }
        }
      }
      if (t.pulse) {
        t.pulseT = (t.pulseT || 0) + dt;
        if (t.pulseT >= 2) {
          t.pulseT = 0;
          t.auraPulse = 0.35;
          game.spatial.queryCircle(t.x, t.y, 70, (e) => {
            if (e.curse <= 0) return;
            const roll = rollCritDamage(p, base);
            _hitEnemy(game, e, roll.damage, roll.isCrit, {});
          }, 16);
        }
      }
      return true;
    });
  },
  draw(w, ctx, cam) {
    if (!w.state.totems) return;
    for (const t of w.state.totems) {
      const s = cam.worldToScreen(t.x, t.y);
      const r = t.radius || this.auraRadius;
      const pulse = t.auraPulse || 0;
      const active = t.playerInside !== false;
      const fillA = (active ? 0.08 : 0.03) + pulse * 0.18;
      const strokeA = (active ? 0.35 : 0.14) + pulse * 0.45;
      ctx.save();
      ctx.fillStyle = `rgba(160, 40, 255, ${fillA})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `rgba(200, 120, 255, ${strokeA})`;
      ctx.lineWidth = 2;
      ctx.setLineDash(active ? [8, 6] : [3, 10]);
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      ctx.globalAlpha = active ? 1 : 0.45;
      ctx.fillStyle = '#3a2040';
      ctx.fillRect(s.x - 6, s.y - 18, 12, 28);
      ctx.fillStyle = '#a0f';
      ctx.beginPath();
      ctx.arc(s.x, s.y - 18, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }
};

WEAPON_DEFS.iceCrystal = {
  id: 'iceCrystal', nameKey: 'weaponIceCrystal', kind: 'projectile',
  cooldown: 0.7, damageMult: 0.3, projectiles: 3, hasReload: true,
  /* Shards leave the player in a 90° fan, then curve into the enemy they locked. */
  coneSpread: Math.PI * 0.5,
  fire(w, game, aim) {
    const p = game.player;
    const m = w.mods;
    const base = p.stats.attack * this.damageMult;
    const count = weaponProjectileCount(this, p);
    const targets = game.spatial.kNearest(p.x, p.y, 480, count + 3).filter((e) => !e.dying);
    if (!targets.length) return;

    const aimed = game.spatial.nearest(aim.x, aim.y, 480);
    const primary = aimed && !aimed.dying ? aimed : targets[0];
    const baseAng = Math.atan2(primary.y - p.y, primary.x - p.x);
    const spread = this.coneSpread;

    const launchShard = (fromX, fromY, ang, target, bounces, mult) => {
      const roll = rollCritDamage(p, base * mult);
      const spd = 300 + p.stats.bulletSpeed * 0.35;
      _spawnBullet(game, fromX, fromY, Math.cos(ang) * spd, Math.sin(ang) * spd, roll.damage, roll.isCrit, {
        radius: mult < 1 ? 5 : 6, color: '#9ef', kind: 'shard', life: mult < 1 ? 1.6 : 2.2,
        lockTarget: target, home: true, weaponId: 'iceCrystal',
        hitOpts: { slow: true, slowFactor: 0.65, slowDur: 1, freeze: m.freeze, freezeAmt: 0.02 },
        onHit: (e, g) => {
          // Per-shard buildup is small because a volley lands several shards
          const froze = m.freeze ? StatusEffects.applyFreeze(e, m.freezeSolid ? 0.22 : 0.12) : false;
          if (froze && m.shatter) {
            const r2 = rollCritDamage(p, base * mult * 0.8);
            _hitEnemy(g, e, r2.damage, r2.isCrit, {});
          }
          if (froze && m.statues) e.frozenT = Math.max(e.frozenT, 3);
          if (m.iceTrail) {
            g.effects.spawnField('ice', e.x, e.y, 28, 1.8, 2, '#9ef', null, EffectCaps.MAX_TRAILS);
          }
          if (m.shards) {
            g.spatial.queryCircle(e.x, e.y, 70, (o) => {
              if (o === e) return;
              const r = rollCritDamage(p, base * mult * 0.4);
              _hitEnemy(g, o, r.damage, r.isCrit, { freeze: true, freezeAmt: 0.12 });
            }, 4);
          }
          // Path B bounces the shard onward to the next nearby enemy
          if (bounces > 0) {
            let next = null; let best = 1e12;
            g.spatial.queryCircle(e.x, e.y, 180, (o) => {
              if (o === e || o.dying) return;
              const dx = o.x - e.x; const dy = o.y - e.y;
              const d = dx * dx + dy * dy;
              if (d < best) { best = d; next = o; }
            }, 12);
            if (next) {
              const nAng = Math.atan2(next.y - e.y, next.x - e.x);
              launchShard(e.x, e.y, nAng, next, bounces - 1, mult * 0.75);
            }
          }
        }
      });
    };

    // Each shard locks the enemy closest to its own launch angle, so the fan
    // spreads over the crowd instead of every shard chasing the same body
    const pool = targets.slice();
    const angleGap = (a, b) => {
      let d = (a - b) % (Math.PI * 2);
      if (d > Math.PI) d -= Math.PI * 2;
      if (d < -Math.PI) d += Math.PI * 2;
      return Math.abs(d);
    };

    for (let i = 0; i < count; i++) {
      const t = count === 1 ? 0 : (i / (count - 1) - 0.5);
      const ang = baseAng + t * spread;
      let target = primary;
      if (pool.length) {
        let bestIdx = 0; let bestGap = 1e12;
        for (let j = 0; j < pool.length; j++) {
          const gap = angleGap(Math.atan2(pool[j].y - p.y, pool[j].x - p.x), ang);
          if (gap < bestGap) { bestGap = gap; bestIdx = j; }
        }
        target = pool.splice(bestIdx, 1)[0];
      }
      launchShard(p.x, p.y, ang, target, m.ricochet || 0, 1);
    }
    SoundManager.weaponCrystal();
  },
  draw(w, ctx, cam, player) {
    // Floating crystal above the player marks the weapon slot
    const s = cam.worldToScreen(player.x, player.y - 28);
    ctx.save();
    ctx.fillStyle = '#9ef';
    ctx.beginPath();
    ctx.moveTo(s.x, s.y - 10); ctx.lineTo(s.x + 8, s.y); ctx.lineTo(s.x, s.y + 10); ctx.lineTo(s.x - 8, s.y);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
};

class GrenadeProjectile {
  constructor() {
    this.active = false;
  }
  spawn(sx, sy, tx, ty, damage, isCrit, mods) {
    this.active = true;
    this.sx = sx; this.sy = sy; this.tx = tx; this.ty = ty;
    this.x = sx; this.y = sy;
    this.damage = damage; this.isCrit = isCrit;
    this.mods = mods || {};
    this.t = 0; this.dur = 0.85;
    this.arcHeight = 90 + Math.random() * 50;
    this.radius = 10;
    this.spin = Math.random() * Math.PI * 2;
    this._sparkCd = 0;
  }
  update(dt, game) {
    if (!this.active) return;
    this.t += dt / this.dur;
    this.spin += dt * 10;
    if (this.t >= 1) {
      this.t = 1;
      this._land(game);
      this.active = false;
      return;
    }
    const u = this.t;
    this.x = this.sx + (this.tx - this.sx) * u;
    this.y = this.sy + (this.ty - this.sy) * u - Math.sin(u * Math.PI) * this.arcHeight;
    const groundY = this.sy + (this.ty - this.sy) * u;
    if (this.mods.burnTrail && Math.random() < 0.35) {
      game.effects.spawnField('trail', this.x, groundY, 18, 1.2, 3, '#f84', null, EffectCaps.MAX_TRAILS);
    }
    // Fuse sparks so the lob stays visible over green terrain
    this._sparkCd -= dt;
    if (this._sparkCd <= 0 && game.particlePool) {
      this._sparkCd = 0.04;
      const p = game.particlePool.acquire();
      p.spawn(this.x, this.y, (Math.random() - 0.5) * 40, -30 - Math.random() * 40,
        0.2 + Math.random() * 0.15, Math.random() > 0.5 ? '#ffb020' : '#ffe680', 2 + Math.random() * 2, 80);
    }
  }
  _land(game) {
    const p = game.player;
    const r = 55;
    game.spatial.queryCircle(this.tx, this.ty, r, (e) => {
      _hitEnemy(game, e, this.damage, this.isCrit, {
        burn: this.mods.napalm
      });
    }, 32);
    if (typeof game.spawnGrenadeSplash === 'function') game.spawnGrenadeSplash(this.tx, this.ty, r);
    else game.spawnExplosion(this.tx, this.ty);
    if (typeof SoundManager !== 'undefined' && SoundManager.weaponBoom) SoundManager.weaponBoom();
    const m = this.mods;
    if (m.puddle || m.acid || m.napalm) {
      const kind = m.acid ? 'acid' : m.napalm ? 'napalm' : 'acid';
      const rad = m.expand ? 70 : 48;
      game.effects.spawnField(kind, this.tx, this.ty, rad, 3.2, this.damage * 0.25,
        m.napalm ? '#f84' : '#8f6', {
          onExpire: m.expireBlast ? (f, g) => {
            g.spatial.queryCircle(f.x, f.y, f.radius, (e) => {
              const roll = rollCritDamage(p, this.damage * 0.7);
              _hitEnemy(g, e, roll.damage, roll.isCrit, { canChain: false });
            }, 20);
            if (typeof g.spawnGrenadeSplash === 'function') g.spawnGrenadeSplash(f.x, f.y, f.radius);
            else g.spawnExplosion(f.x, f.y);
          } : null
        }, EffectCaps.MAX_PUDDLES);
    }
    if (m.fragments > 0) {
      for (let i = 0; i < m.fragments; i++) {
        const a = (Math.PI * 2 * i) / m.fragments;
        const roll = rollCritDamage(p, this.damage * 0.35);
        _spawnBullet(game, this.tx, this.ty, Math.cos(a) * 180, Math.sin(a) * 180, roll.damage, roll.isCrit, {
          radius: 4, color: '#fa4', life: 0.5, canChain: false
        });
      }
    }
  }
  draw(ctx, cam) {
    if (!this.active) return;
    const groundY = this.sy + (this.ty - this.sy) * this.t;
    const ground = cam.worldToScreen(this.x, groundY);
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.beginPath();
    ctx.ellipse(ground.x, ground.y + 2, 12, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    const s = cam.worldToScreen(this.x, this.y);
    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.rotate(this.spin);
    // High-contrast shell — olive body was nearly invisible on the field
    ctx.fillStyle = '#2a1a08';
    ctx.beginPath();
    ctx.arc(0, 0, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#c4a035';
    ctx.beginPath();
    ctx.arc(0, 0, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#6b8f3a';
    ctx.fillRect(-6, -4, 12, 8);
    ctx.fillStyle = '#1a1208';
    ctx.fillRect(-2, -11, 4, 5);
    ctx.fillStyle = '#ff6020';
    ctx.beginPath();
    ctx.arc(0, -12, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffe080';
    ctx.beginPath();
    ctx.arc(0, -14, 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class WeaponSystem {
  constructor() {
    this.slots = [];
    this.maxSlots = 5;
    this.tempShield = 0;
  }

  reset() {
    this.slots = [];
    this.tempShield = 0;
  }

  grant(id, level = 1, branch = null) {
    if (this.slots.find((w) => w.id === id)) return null;
    if (this.slots.length >= this.maxSlots) return null;
    const def = WEAPON_DEFS[id];
    if (!def) return null;
    const w = { id, level, branch, cd: 0, lastCd: 0, state: {}, mods: {} };
    w.mods = _modsFor(w);
    this.slots.push(w);
    if (typeof MetaProgression !== 'undefined') {
      MetaProgression.discover('weapons', id);
    }
    return w;
  }

  get(id) {
    return this.slots.find((w) => w.id === id) || null;
  }

  upgrade(id, branch) {
    const w = this.get(id);
    if (!w || w.level >= 5) return false;
    if (w.level === 2 && branch) {
      w.branch = branch;
      w.level = 3;
    } else if (w.level >= 3) {
      if (branch && w.branch && branch !== w.branch) return false;
      w.level++;
    } else {
      w.level++;
    }
    w.mods = _modsFor(w);
    return true;
  }

  addTempShield(amount) {
    this.tempShield = Math.min(60, this.tempShield + amount);
  }

  absorbShield(amount) {
    const tower = this.get('towerShield');
    let left = amount;
    if (this.tempShield > 0) {
      const a = Math.min(this.tempShield, left);
      this.tempShield -= a;
      left -= a;
    }
    if (tower && tower.state.shield > 0 && left > 0) {
      const a = Math.min(tower.state.shield, left);
      tower.state.shield -= a;
      left -= a;
      if (tower.state.shield <= 0) tower.state.regenDelay = 3;
      if (a > 0 && tower.mods.blockAura) tower.state.justBlocked = true;
    }
    return amount - left;
  }

  shieldRatio() {
    const tower = this.get('towerShield');
    if (!tower) return 0;
    return tower.state.shield / Math.max(1, tower.state.maxShield || 1);
  }

  hasShield() {
    return !!this.get('towerShield');
  }

  tryBlockProjectile(game, proj) {
    const tower = this.get('towerShield');
    if (!tower || !tower.mods.blockProj) return false;
    const sx = tower.state.x; const sy = tower.state.y;
    if (sx == null) return false;
    const dx = proj.x - sx; const dy = proj.y - sy;
    if (dx * dx + dy * dy > 28 * 28) {
      if (tower.mods.frontGuard) {
        const p = game.player;
        const ang = Math.atan2(proj.y - p.y, proj.x - p.x);
        const guardAng = tower.state.angle || 0;
        let d = Math.abs(ang - guardAng);
        while (d > Math.PI) d -= Math.PI * 2;
        if (Math.abs(d) > 0.9) return false;
        const pdx = proj.x - p.x; const pdy = proj.y - p.y;
        if (pdx * pdx + pdy * pdy > 50 * 50) return false;
      } else return false;
    }
    if (tower.mods.reflect && !proj._reflected) {
      proj._reflected = true;
      proj.fromPlayer = true;
      proj.vx *= -1; proj.vy *= -1;
      proj.damage = game.player.stats.attack * 0.5;
      return true;
    }
    proj.active = false;
    if (tower.mods.blockAura) tower.state.justBlocked = true;
    SoundManager.weaponClang();
    return true;
  }

  toSaveData() {
    return this.slots.map((w) => ({ id: w.id, level: w.level, branch: w.branch }));
  }

  loadSaveData(list) {
    this.reset();
    if (!list) return;
    for (const s of list) this.grant(s.id, s.level || 1, s.branch || null);
  }

  update(dt, game) {
    const p = game.player;
    if (!p || !p.alive) return;
    for (const w of this.slots) {
      const def = WEAPON_DEFS[w.id];
      if (!def) continue;
      if (w.state.pending) {
        w.state.pending = w.state.pending.filter((job) => {
          job.t -= dt;
          if (job.t <= 0) { job.fn(); return false; }
          return true;
        });
      }
      if (def.update) def.update(w, dt, game);
      // Orbit-style weapons live entirely in update() and never reload
      if (!def.hasReload) continue;
      if (w.cd > 0) {
        w.cd -= dt;
        continue;
      }

      let aim;
      if (game.autoaim || (typeof MobileControls !== 'undefined' && MobileControls.isMobile)) {
        const t = game.spatial.nearest(p.x, p.y, 500);
        if (!t && def.kind !== 'aura' && def.kind !== 'orbit') continue;
        aim = t || { x: p.x + p.facing * 80, y: p.y };
      } else {
        aim = game.getAimPoint();
      }
      const cd = weaponCooldown(def, p);
      w.lastCd = cd;
      w.cd = cd;
      def.fire(w, game, aim);
    }
  }

  draw(ctx, cam, game) {
    for (const w of this.slots) {
      const def = WEAPON_DEFS[w.id];
      if (def && def.draw) def.draw(w, ctx, cam, game.player);
    }
  }

  reloadProgress(w) {
    const def = WEAPON_DEFS[w.id];
    if (!def || !def.hasReload) return 1;
    const total = w.lastCd || def.cooldown;
    if (total <= 0) return 1;
    return Math.max(0, Math.min(1, 1 - w.cd / total));
  }
}

/* Extend SoundManager with weapon SFX when available */
(function bindWeaponSounds() {
  const ensure = () => {
    if (typeof SoundManager === 'undefined') return;
    if (SoundManager.weaponShotgun) return;
    const lim = (key, ms, fn) => {
      SoundManager[key] = function (...args) {
        const now = performance.now();
        if (now - (this['_' + key] || 0) < ms) return;
        this['_' + key] = now;
        fn.apply(this, args);
      };
    };
    lim('weaponShotgun', 80, function (crit) {
      this._noise(0.08, 0.12, crit ? 0.1 : 0.07);
      this._tone(crit ? 180 : 140, 0.06, 'square', 0.05);
    });
    lim('weaponZap', 90, function () {
      this._tone(720, 0.05, 'sawtooth', 0.04);
      this._tone(420, 0.08, 'square', 0.03);
    });
    lim('weaponHum', 200, function () {
      this._tone(110, 0.12, 'sine', 0.025);
    });
    lim('weaponWhoosh', 100, function () {
      this._noise(0.1, 0.08, 0.05);
    });
    lim('weaponClang', 120, function () {
      this._tone(520, 0.04, 'triangle', 0.05);
      this._tone(260, 0.08, 'square', 0.03);
    });
    lim('weaponThump', 90, function () {
      // Deep launcher chug — bass hit + short grit so each lob cuts through combat noise
      this._tone(55, 0.18, 'sine', 0.22, 0, 28);
      this._tone(78, 0.12, 'square', 0.14, 0.01, 36);
      this._tone(42, 0.2, 'triangle', 0.12, 0.02, 24);
      this._noise(0.1, 0.12, 180);
      this._noise(0.06, 0.06, 90, 0.04);
    });
    lim('weaponBoom', 70, function () {
      // Heavy low explosion — long rumble, not a thin click
      this._noise(0.28, 0.22, 220);
      this._noise(0.22, 0.14, 110, 0.05);
      this._noise(0.18, 0.08, 70, 0.12);
      this._tone(70, 0.28, 'sawtooth', 0.18, 0, 28);
      this._tone(48, 0.35, 'square', 0.14, 0.02, 22);
      this._tone(95, 0.16, 'triangle', 0.1, 0.04, 40);
      this._tone(36, 0.4, 'sine', 0.1, 0.08, 20);
    });
    lim('weaponWet', 90, function () {
      this._tone(200, 0.05, 'sine', 0.04);
      this._noise(0.05, 0.06, 0.03);
    });
    lim('weaponChime', 150, function () {
      this._tone(360, 0.1, 'sine', 0.04);
      this._tone(540, 0.12, 'sine', 0.03);
    });
    lim('weaponCrystal', 100, function () {
      this._tone(880, 0.06, 'triangle', 0.035);
      this._tone(1320, 0.08, 'sine', 0.025);
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ensure);
  else setTimeout(ensure, 0);
  window._bindWeaponSounds = ensure;
})();

window.rollCritDamage = rollCritDamage;
window.weaponProjectileCount = weaponProjectileCount;
window.weaponCooldown = weaponCooldown;
window.WeaponIcons = WeaponIcons;
window.WEAPON_DEFS = WEAPON_DEFS;
window.WeaponSystem = WeaponSystem;
window.GrenadeProjectile = GrenadeProjectile;
window._hitEnemy = _hitEnemy;
window.weaponLevelDesc = weaponLevelDesc;
window.weaponLevelDesc = weaponLevelDesc;
