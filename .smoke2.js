/* Second harness: input routing + long soak. */
load('.smokeenv.js');

I18n.init();
if (typeof window._bindWeaponSounds === 'function') window._bindWeaponSounds();
const game = new Game(fakeDragons());
game.startGame();
game.player.invulnerable = true;

// Rebuild the keydown handler the same way _bindInput does, then drive it
function key(code) {
  const handlers = capturedKeydown;
  for (const h of handlers) h({ code, repeat: false, preventDefault() {} });
}

// The real markup ships these overlays with class="overlay hidden"
for (const id of ['helpOverlay', 'currentStatsOverlay', 'confirmRestart',
  'confirmResetData', 'storeOverlay']) {
  document.getElementById(id).classList.add('hidden');
}

game.upgrades.enqueue(1);
print('choice open=' + game.upgrades.isOpen());
key('Escape');
print('after Esc still open=' + game.upgrades.isOpen() + ' state=' + game.state);
key('Digit3');
print('after Digit3 open=' + game.upgrades.isOpen() + ' weapons=' + game.weapons.slots.length);
key('Escape');
print('after Esc (no choice) state=' + game.state);
key('Escape');
print('after Esc again state=' + game.state);

// Long soak in a real run with every weapon maxed on branch A, then B
game.resume();
game.startGame();
game.player.invulnerable = true;
game.upgrades.reset();
let errors = 0;
for (const branch of ['A', 'B']) {
  game.weapons.reset();
  for (const id of WEAPON_IDS) {
    game.weapons.grant(id, 1, null);
    for (let l = 0; l < 6; l++) game.weapons.upgrade(id, branch);
  }
  for (let i = 0; i < 1200; i++) {
    try {
      if (game.upgrades.isOpen()) { game.upgrades.pick(0); continue; }
      game.update(0.016);
      game.draw();
    } catch (e) {
      errors++;
      print('SOAK_ERROR ' + branch + '@' + i + ': ' + e + '\n' + (e && e.stack));
      if (errors > 2) break;
    }
  }
  print('branch ' + branch + ' soak: enemies=' + game.enemyPool.countActive() +
    ' proj=' + game.projPool.countActive() +
    ' grenades=' + game.grenadePool.countActive() +
    ' fields=' + game.effects.fieldPool.countActive() +
    ' particles=' + game.particlePool.countActive() +
    ' kills=' + game.killCount);
}

// Test mode still has to survive every archetype being on screen
game.startTestMode();
game.player.invulnerable = true;
for (let i = 0; i < 1500; i++) {
  try {
    if (game.upgrades.isOpen()) { game.upgrades.pick(0); continue; }
    game.update(0.016);
    game.draw();
  } catch (e) {
    errors++;
    print('SOAK_ERROR@' + i + ': ' + e + '\n' + (e && e.stack));
    if (errors > 2) break;
  }
}
print('soak frames done errors=' + errors +
  ' enemies=' + game.enemyPool.countActive() +
  ' proj=' + game.projPool.countActive() +
  ' grenades=' + game.grenadePool.countActive() +
  ' fields=' + game.effects.fieldPool.countActive() +
  ' particles=' + game.particlePool.countActive());

// Pool sizes must not balloon without bound
print('pool item counts: proj=' + game.projPool.items.length +
  ' enemy=' + game.enemyPool.items.length +
  ' field=' + game.effects.fieldPool.items.length +
  ' particle=' + game.particlePool.items.length);

print(errors === 0 ? 'SOAK_OK' : 'SOAK_FAIL');
