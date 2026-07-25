'use strict';

/* Uniform spatial hash for enemy queries (cell size 128). */
class SpatialGrid {
  constructor(cellSize = 128) {
    this.cellSize = cellSize;
    this.cells = new Map();
    this._queryMark = 1;
  }

  clear() {
    this.cells.clear();
  }

  _key(cx, cy) {
    return cx + ',' + cy;
  }

  insert(e) {
    if (!e || !e.active || e.dying) return;
    const cs = this.cellSize;
    const cx = Math.floor(e.x / cs);
    const cy = Math.floor(e.y / cs);
    const k = this._key(cx, cy);
    let bucket = this.cells.get(k);
    if (!bucket) {
      bucket = [];
      this.cells.set(k, bucket);
    }
    bucket.push(e);
  }

  insertAll(enemyPool) {
    this.clear();
    enemyPool.forEachActive((e) => this.insert(e));
  }

  queryCircle(x, y, r, cb, cap = 64) {
    const cs = this.cellSize;
    const r2 = r * r;
    const minCX = Math.floor((x - r) / cs);
    const maxCX = Math.floor((x + r) / cs);
    const minCY = Math.floor((y - r) / cs);
    const maxCY = Math.floor((y + r) / cs);
    let count = 0;
    const mark = ++this._queryMark;
    for (let cy = minCY; cy <= maxCY; cy++) {
      for (let cx = minCX; cx <= maxCX; cx++) {
        const bucket = this.cells.get(this._key(cx, cy));
        if (!bucket) continue;
        for (let i = 0; i < bucket.length; i++) {
          const e = bucket[i];
          if (!e.active || e.dying) continue;
          if (e._spatialMark === mark) continue;
          e._spatialMark = mark;
          const dx = e.x - x;
          const dy = e.y - y;
          if (dx * dx + dy * dy <= r2) {
            cb(e);
            count++;
            if (count >= cap) return count;
          }
        }
      }
    }
    return count;
  }

  nearest(x, y, maxR = 99999) {
    let best = null;
    let bestD = maxR * maxR;
    this.queryCircle(x, y, maxR, (e) => {
      const dx = e.x - x;
      const dy = e.y - y;
      const d = dx * dx + dy * dy;
      if (d < bestD) {
        bestD = d;
        best = e;
      }
    }, 96);
    return best;
  }

  kNearest(x, y, maxR, k) {
    const list = [];
    this.queryCircle(x, y, maxR, (e) => {
      const dx = e.x - x;
      const dy = e.y - y;
      list.push({ e, d: dx * dx + dy * dy });
    }, Math.max(64, k * 8));
    list.sort((a, b) => a.d - b.d);
    const out = [];
    for (let i = 0; i < list.length && out.length < k; i++) out.push(list[i].e);
    return out;
  }

  furthest(x, y, maxR = 99999) {
    let best = null;
    let bestD = -1;
    this.queryCircle(x, y, maxR, (e) => {
      if (e.dying) return;
      const dx = e.x - x;
      const dy = e.y - y;
      const d = dx * dx + dy * dy;
      if (d > bestD) {
        bestD = d;
        best = e;
      }
    }, 96);
    return best;
  }
}

window.SpatialGrid = SpatialGrid;
