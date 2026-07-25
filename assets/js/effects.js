'use strict';

const EffectCaps = {
  MAX_BURN: 5,
  MAX_BLEED: 5,
  MAX_POISON: 5,
  MAX_FROZEN: 12,
  MAX_CURSED: 20,
  CURSE_GENERATIONS: 2,
  MAX_PUDDLES: 6,
  MAX_FIELDS: 3,
  MAX_TRAILS: 8,
  MAX_TOTEMS: 2,
  MAX_PHANTOMS: 3
};

class StatusEffects {
  static initEnemy(e) {
    e.burnStacks = 0; e.burnT = 0; e.burnTick = 0; e.burnDps = 0;
    e.poisonStacks = 0; e.poisonT = 0; e.poisonTick = 0; e.poisonDps = 0;
    e.slowFactor = 1; e.slowT = 0;
    e.bleedStacks = 0; e.bleedT = 0; e.bleedTick = 0; e.bleedDps = 0;
    e.freezeAccum = 0; e.frozenT = 0;
    e.curse = 0; e.curseGen = 0;
    e.weakT = 0;
    e.armorShredT = 0;
    e.stunT = 0;
    e.markT = 0;
    e.explodedBy = null;
    e.canChain = true;
  }

  static resetEnemy(e) {
    this.initEnemy(e);
  }

  /* Elder Dragon shrugs off freeze, stun, slow, pull, knockback, curse, and similar control. */
  static isControlImmune(e) {
    return !!(e && e.type === 'dragon');
  }

  static applyBurn(e, stacks, duration, dps) {
    if (!e || e.dying) return;
    e.burnStacks = Math.min(EffectCaps.MAX_BURN, e.burnStacks + stacks);
    e.burnT = Math.max(e.burnT, duration);
    e.burnDps = Math.max(e.burnDps, dps);
  }

  static applyPoison(e, stacks, duration, dps) {
    if (!e || e.dying) return;
    e.poisonStacks = Math.min(EffectCaps.MAX_POISON, e.poisonStacks + stacks);
    e.poisonT = Math.max(e.poisonT, duration);
    e.poisonDps = Math.max(e.poisonDps, dps);
  }

  static applyBleed(e, stacks, duration, dps) {
    if (!e || e.dying) return;
    e.bleedStacks = Math.min(EffectCaps.MAX_BLEED, e.bleedStacks + stacks);
    e.bleedT = Math.max(e.bleedT, duration);
    e.bleedDps = Math.max(e.bleedDps, dps);
  }

  static applySlow(e, factor, duration) {
    if (!e || e.dying || StatusEffects.isControlImmune(e)) return;
    e.slowFactor = Math.min(e.slowFactor, factor);
    e.slowT = Math.max(e.slowT, duration);
  }

  static applyFreeze(e, amount, freezeAt = 1) {
    if (!e || e.dying || e.frozenT > 0 || StatusEffects.isControlImmune(e)) return false;
    e.freezeAccum += amount;
    if (e.freezeAccum >= freezeAt) {
      e.freezeAccum = 0;
      e.frozenT = 2.2;
      return true;
    }
    return false;
  }

  static applyCurse(e, strength, gen) {
    if (!e || e.dying || StatusEffects.isControlImmune(e)) return;
    if (StatusEffects.countCursed(e._game) >= EffectCaps.MAX_CURSED && e.curse <= 0) return;
    e.curse = Math.max(e.curse, strength);
    e.curseGen = gen;
  }

  static countCursed(game) {
    if (!game) return 0;
    let n = 0;
    game.enemyPool.forEachActive((e) => { if (e.curse > 0 && !e.dying) n++; });
    return n;
  }

  static applyWeak(e, duration) {
    if (!e || e.dying || StatusEffects.isControlImmune(e)) return;
    e.weakT = Math.max(e.weakT, duration);
  }

  static applyArmorShred(e, duration) {
    if (!e || e.dying || StatusEffects.isControlImmune(e)) return;
    e.armorShredT = Math.max(e.armorShredT, duration);
  }

  static applyStun(e, duration) {
    if (!e || e.dying || StatusEffects.isControlImmune(e)) return;
    e.stunT = Math.max(e.stunT, Math.min(duration, 1.2));
  }

  static damageMult(e) {
    let m = 1;
    if (e.curse > 0) m *= 1 + e.curse;
    if (e.weakT > 0) m *= 1.25;
    if (e.armorShredT > 0) m *= 1.2;
    return m;
  }

  static tick(e, dt, game) {
    if (!e.active || e.dying) return;
    e._game = game;

    if (e.stunT > 0) e.stunT -= dt;
    if (e.frozenT > 0) e.frozenT -= dt;
    if (e.slowT > 0) {
      e.slowT -= dt;
      if (e.slowT <= 0) e.slowFactor = 1;
    }
    if (e.weakT > 0) e.weakT -= dt;
    if (e.armorShredT > 0) e.armorShredT -= dt;
    if (e.markT > 0) e.markT -= dt;

    const applyDot = (stacks, dps, tickKey, tKey) => {
      if (e[tKey] <= 0 || stacks <= 0) return;
      e[tKey] -= dt;
      e[tickKey] = (e[tickKey] || 0) + dt;
      if (e[tickKey] >= 0.4) {
        e[tickKey] = 0;
        const dmg = dps * stacks * 0.4;
        const dead = e.takeDamage(dmg);
        if (dead && game) game._onEnemyKilled(e);
      }
      if (e[tKey] <= 0) {
        if (tKey === 'burnT') e.burnStacks = 0;
        if (tKey === 'poisonT') e.poisonStacks = 0;
        if (tKey === 'bleedT') e.bleedStacks = 0;
      }
    };

    applyDot(e.burnStacks, e.burnDps, 'burnTick', 'burnT');
    applyDot(e.poisonStacks, e.poisonDps, 'poisonTick', 'poisonT');
    applyDot(e.bleedStacks, e.bleedDps, 'bleedTick', 'bleedT');
  }

  static moveFactor(e) {
    if (StatusEffects.isControlImmune(e)) return 1;
    if (e.stunT > 0 || e.frozenT > 0) return 0;
    return e.slowFactor || 1;
  }
}

/* Shared world fields: puddles, electric fields, trails */
class WorldField {
  constructor() {
    this.active = false;
    this.kind = 'puddle';
    this.x = 0; this.y = 0;
    this.radius = 40;
    this.life = 0;
    this.maxLife = 1;
    this.dps = 0;
    this.tick = 0;
    this.color = '#8f8';
    this.canChain = false;
    this.meta = null;
  }

  spawn(kind, x, y, radius, life, dps, color, meta) {
    this.active = true;
    this.kind = kind;
    this.x = x; this.y = y;
    this.radius = radius;
    this.life = life;
    this.maxLife = life;
    this.dps = dps;
    this.tick = 0;
    this.color = color || '#8f8';
    this.canChain = false;
    this.meta = meta || null;
  }

  update(dt, game) {
    if (!this.active) return;
    this.life -= dt;
    if (this.life <= 0) {
      if (this.meta && this.meta.onExpire) this.meta.onExpire(this, game);
      this.active = false;
      return;
    }
    this.tick += dt;
    if (this.tick < 0.35) return;
    this.tick = 0;
    const r2 = this.radius * this.radius;
    game.spatial.queryCircle(this.x, this.y, this.radius, (e) => {
      const dx = e.x - this.x;
      const dy = e.y - this.y;
      if (dx * dx + dy * dy > r2) return;
      if (this.kind === 'acid') {
        StatusEffects.applyArmorShred(e, 1.2);
        if (this.dps > 0) {
          const dead = e.takeDamage(this.dps * 0.35);
          if (dead) game._onEnemyKilled(e);
        }
      } else if (this.kind === 'napalm' || this.kind === 'trail') {
        StatusEffects.applyBurn(e, 1, 2.5, this.dps || 4);
      } else if (this.kind === 'electric') {
        const dmg = (this.dps || 6) * 0.35;
        const dead = e.takeDamage(dmg * StatusEffects.damageMult(e));
        if (dead) game._onEnemyKilled(e);
        StatusEffects.applySlow(e, 0.7, 0.6);
      } else if (this.kind === 'blood') {
        StatusEffects.applyBleed(e, 1, 2, this.dps || 3);
      } else if (this.kind === 'ice') {
        StatusEffects.applySlow(e, 0.55, 0.8);
        StatusEffects.applyFreeze(e, 0.15);
      }
    }, 48);
  }

  draw(ctx, cam) {
    if (!this.active) return;
    const s = cam.worldToScreen(this.x, this.y);
    const a = Math.min(1, this.life / Math.max(0.01, this.maxLife)) * 0.45;
    ctx.save();
    ctx.globalAlpha = a;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(s.x, s.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class EffectSystem {
  constructor() {
    this.fieldPool = new Pool(() => new WorldField(), 24);
  }

  reset() {
    this.fieldPool.forEachActive((f) => { f.active = false; });
  }

  countKind(kind) {
    let n = 0;
    this.fieldPool.forEachActive((f) => { if (f.kind === kind) n++; });
    return n;
  }

  spawnField(kind, x, y, radius, life, dps, color, meta, maxOfKind) {
    if (maxOfKind != null) {
      while (this.countKind(kind) >= maxOfKind) {
        let oldest = null;
        this.fieldPool.forEachActive((f) => {
          if (f.kind !== kind) return;
          if (!oldest || f.life < oldest.life) oldest = f;
        });
        if (!oldest) break;
        oldest.active = false;
      }
    }
    const f = this.fieldPool.acquire();
    f.spawn(kind, x, y, radius, life, dps, color, meta);
    return f;
  }

  update(dt, game) {
    this.fieldPool.forEachActive((f) => f.update(dt, game));
  }

  draw(ctx, cam) {
    this.fieldPool.forEachActive((f) => f.draw(ctx, cam));
  }
}

window.EffectCaps = EffectCaps;
window.StatusEffects = StatusEffects;
window.WorldField = WorldField;
window.EffectSystem = EffectSystem;
