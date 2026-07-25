'use strict';

/**
 * Loads every required game asset, then boots the game.
 * Paths are relative to index.html.
 */
(function () {
  const VARIANTS = ['crimson', 'void', 'bone', 'ember'];
  const WALK_FRAMES = 8;

  const fillEl = document.getElementById('preloaderFill');
  const statusEl = document.getElementById('preloaderStatus');
  const preloaderEl = document.getElementById('preloader');

  function setProgress(done, total, label) {
    const pct = total <= 0 ? 100 : Math.round((done / total) * 100);
    if (fillEl) fillEl.style.width = pct + '%';
    if (statusEl) statusEl.textContent = label || (pct + '%');
  }

  function imageToCanvas(img) {
    const c = document.createElement('canvas');
    c.width = img.width;
    c.height = img.height;
    const ctx = c.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 0, 0);
    return c;
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Failed to load ' + src));
      img.src = src;
    });
  }

  function collectAssetUrls() {
    const urls = [];
    for (const v of VARIANTS) {
      for (let i = 0; i < WALK_FRAMES; i++) {
        urls.push(`assets/dragons/${v}_w${i}.png`);
      }
      urls.push(`assets/dragons/${v}_still.png`);
    }
    return urls;
  }

  async function preloadAll() {
    window.__ASSET_CACHE__ = window.__ASSET_CACHE__ || {};
    const urls = collectAssetUrls();
    let done = 0;
    setProgress(0, urls.length, 'Loading assets…');

    for (const url of urls) {
      const img = await loadImage(url);
      window.__ASSET_CACHE__[url] = imageToCanvas(img);
      done += 1;
      const short = url.split('/').pop();
      setProgress(done, urls.length, `Loading ${short} (${done}/${urls.length})`);
    }

    setProgress(urls.length, urls.length, 'Starting…');

    // Build dragon sprite pack (same shape SpriteFactory.loadDragons returns)
    const dragons = {};
    for (const v of VARIANTS) {
      const walk = [];
      for (let i = 0; i < WALK_FRAMES; i++) {
        walk.push(window.__ASSET_CACHE__[`assets/dragons/${v}_w${i}.png`]);
      }
      dragons[v] = {
        walk,
        still: window.__ASSET_CACHE__[`assets/dragons/${v}_still.png`]
      };
    }
    return dragons;
  }

  async function start() {
    try {
      if (typeof window.bootGame !== 'function') {
        throw new Error('Game script failed to load (bootGame missing).');
      }
      const dragons = await preloadAll();
      await window.bootGame(dragons);
      if (preloaderEl) {
        preloaderEl.classList.add('done');
        setTimeout(() => {
          if (preloaderEl && preloaderEl.parentNode) preloaderEl.parentNode.removeChild(preloaderEl);
        }, 400);
      }
    } catch (err) {
      console.error(err);
      if (statusEl) {
        statusEl.className = 'preloader-error';
        statusEl.textContent =
          'Failed to load game assets. Serve this folder over HTTP (not raw file://).\n' +
          (err && err.message ? err.message : String(err));
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
