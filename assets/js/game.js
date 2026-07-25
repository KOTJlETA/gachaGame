'use strict';

/* ============================================================
   I18N
   ============================================================ */
class I18n {
  static KEY = 'gachaSurvivorsLang';
  static lang = 'en';
  static listeners = [];

  static strings = {
    en: {
      title: 'BULLSHIT SURVIVORS',
      subtitle: 'Survive the endless field.<br>Collect absurd weapons. Grow stronger.',
      language: 'Language',
      touchLayout: 'Touch layout',
      touchLayoutJoyRight: 'Joystick right',
      touchLayoutJoyLeft: 'Joystick left',
      newGame: 'NEW GAME',
      test: 'TEST',
      testModeToast: 'TEST MODE — invulnerable · all mobs spawned',
      help: 'HELP',
      controls: 'CONTROLS',
      move: 'Move',
      pause: 'Pause',
      touchPause: 'Pause',
      chooseHint: 'Choose upgrade',
      chooseUpgrade: 'CHOOSE UPGRADE',
      newWeapon: 'NEW WEAPON',
      weaponLevel: 'Lv {0}',
      weaponBranch: 'Path {0}',
      autoSelectUpgrades: 'AUTOSELECT',
      autoSelectDesc: 'Auto-pick upgrades for the rest of this run. The choice menu will no longer appear.',
      autoSelectOn: 'Autoselect enabled',
      statDamage: 'Damage',
      statAttackSpeed: 'Attack Speed',
      statMoveSpeed: 'Move Speed',
      statMaxHealth: 'Max Health',
      statBulletSpeed: 'Projectile Speed',
      statWeaponRadius: 'Weapon Radius',
      statCritical: 'Critical',
      statExpGain: 'Exp Gain',
      statLuck: 'Luck',
      statBulletCount: 'Projectile Count',
      weaponShotgun: 'Boomstick',
      weaponChainLightning: 'Chain Lightning',
      weaponGarlicAura: 'Garlic Aura',
      weaponBoomerang: 'Boomerang',
      weaponTowerShield: 'Tower Shield',
      weaponGrenadeLauncher: 'Grenade Launcher',
      weaponBloodSpear: 'Blood Spear',
      weaponPhantomBlades: 'Phantom Blades',
      weaponCursedTotem: 'Cursed Totem',
      weaponIceCrystal: 'Ice Crystal',
      weaponsLabel: 'WEAPONS',
      statsLabel: 'STATS',
      helpWeapons: 'You carry up to 5 weapons, each firing on its own reload timer — no manual shooting. Every weapon reaches level 5; at level 3 you commit to path A or path B, which decides how it mutates. The HUD shows one slot per weapon with a reload sweep.',
      helpChoices: 'Each level-up pauses the run and deals 5 cards. Weapon cards (new or upgrades) appear on your first level-up and then every 5 levels (5, 10, 15…). Other levels offer stats only. Press 1-5 or click to pick. You may keep at most 5 different stats, so later rolls only re-offer stats you already own. Chests grant extra picks that can include weapons — 1 for common, 3 for rare, 5 for epic.',
      store: 'STORE',
      storeTitle: 'STORE',
      storeBuy: 'BUY {0} G',
      storeGoldVal: '{0} G',
      storeMaxed: 'MAX',
      storeLevel: '{0}/{1}',
      storeToggleOn: 'BONUS: ON',
      storeToggleOff: 'BONUS: OFF',
      storeMove: 'Movement Speed',
      storeMoveVal: '+10%',
      storeHealth: 'Max Health',
      storeHealthVal: '+20%',
      storeAttack: 'Attack',
      storeAttackVal: '+20%',
      storeAspd: 'Attack Speed',
      storeAspdVal: '+20%',
      storeBullets: 'Bullet Count',
      storeBulletsVal: '+1',
      storeCrit: 'Critical',
      storeCritVal: '+5% Chance / +10% Damage',
      storeExp: 'Experience Multiplier',
      storeExpVal: '+10%',
      storeLuck: 'Luck',
      storeLuckVal: '+10%',
      storeWeaponRadius: 'Weapon Radius',
      storeWeaponRadiusVal: '+10%',
      storeBulletSpeed: 'Projectile Speed',
      storeBulletSpeedVal: '+10%',
      storeCurse: 'Curse',
      storeCurseVal: '+10% Enemy HP / DMG / EXP',
      storeCurseDesc: 'Enemies gain more HP and deal more damage, but kills grant extra EXP. Stacks as a separate multiplier on top of Experience Multiplier.',
      storeWeaponSlots: 'Weapon Slots',
      storeWeaponSlotsVal: '+1 slot',
      storeWeaponSlotsDesc: 'Permanently adds one weapon slot for every run. Buy up to 5 extras (10 weapons total). Extremely expensive.',
      storeStatSlots: 'Stat Slots',
      storeStatSlotsVal: '+1 slot',
      storeStatSlotsDesc: 'Permanently adds one committed-stat slot for every run. Buy up to 5 extras (10 stats total). Extremely expensive.',
      resetData: 'RESET DATA',
      resetDataTitle: 'RESET ALL DATA?',
      resetDataText: 'Gold, store upgrades, and run saves will be permanently erased.',
      resetDataYes: 'YES, ERASE EVERYTHING',
      resetDataNo: 'CANCEL',
      menuGold: 'Gold: {0}',
      options: 'OPTIONS',
      optionsTitle: 'OPTIONS',
      damageNumbers: 'Show enemy damage numbers',
      chestHint: 'Walk near chests to auto-open',
      paused: 'PAUSED',
      resume: 'Resume',
      restart: 'RESTART',
      stats: 'STATS',
      currentStatsTitle: 'CURRENT STATS',
      restartConfirmTitle: 'RESTART RUN?',
      restartConfirmText: 'Your current progress will be lost.',
      restartConfirmYes: 'YES, RESTART',
      restartConfirmNo: 'CANCEL',
      menuConfirmTitle: 'EXIT TO MAIN MENU?',
      menuConfirmText: 'The run will end here. Gold earned this run is banked.',
      menuConfirmYes: 'YES, EXIT',
      menuConfirmNo: 'CANCEL',
      mainMenu: 'MAIN MENU',
      defeated: 'DEFEATED',
      tryAgain: 'TRY AGAIN',
      gameOverHint: 'Press buttons above or return to menu',
      back: 'BACK',
      helpTitle: 'HELP & BESTIARY',
      tabStats: 'STATS',
      tabWeapons: 'WEAPONS',
      tabBestiary: 'BESTIARY',
      tabItems: 'ITEMS',
      helpEmptyWeapons: 'No weapons discovered yet. Unlock them during a run.',
      helpEmptyEnemies: 'No enemies discovered yet. Defeat foes to fill the bestiary.',
      helpEmptyItems: 'No items discovered yet. Open chests and pick up drops.',
      goldLabel: 'GOLD',
      enemiesLabel: 'ENEMIES',
      shieldLabel: 'SHIELD',
      hpLabel: 'HP',
      levelStat: 'Level {0}',
      goldStat: 'Gold {0}',
      killsStat: 'Kills {0}',
      timeStat: 'Time {0}s',
      chestGold: '+{0}g ({1})',
      chickenLegHeal: '+{0} HP (chicken leg)',
      bossSlain: 'ELDER DRAGON SLAIN!',
      rarityCommon: 'COMMON',
      rarityRare: 'RARE',
      rarityEpic: 'EPIC',
      rarityLegendary: 'LEGENDARY',
      chestCommon: 'common',
      chestRare: 'rare',
      chestEpic: 'epic'
    },
    ru: {
      title: 'BULLSHIT SURVIVORS',
      subtitle: 'Выживите на бесконечном поле.<br>Собирайте абсурдное оружие. Становитесь сильнее.',
      language: 'Язык',
      touchLayout: 'Расположение',
      touchLayoutJoyRight: 'Джойстик справа',
      touchLayoutJoyLeft: 'Джойстик слева',
      newGame: 'НОВАЯ ИГРА',
      test: 'ТЕСТ',
      testModeToast: 'ТЕСТ — бессмертие · все мобы заспавнены',
      help: 'СПРАВКА',
      controls: 'УПРАВЛЕНИЕ',
      move: 'Движение',
      pause: 'Пауза',
      touchPause: 'Пауза',
      chooseHint: 'Выбрать улучшение',
      chooseUpgrade: 'ВЫБЕРИТЕ УЛУЧШЕНИЕ',
      store: 'МАГАЗИН',
      storeTitle: 'МАГАЗИН',
      storeBuy: 'КУПИТЬ {0} G',
      storeGoldVal: '{0} G',
      storeMaxed: 'МАКС',
      storeLevel: '{0}/{1}',
      storeToggleOn: 'БОНУС: ВКЛ',
      storeToggleOff: 'БОНУС: ВЫКЛ',
      storeMove: 'Скорость',
      storeMoveVal: '+10%',
      storeHealth: 'Макс. здоровье',
      storeHealthVal: '+20%',
      storeAttack: 'Атака',
      storeAttackVal: '+20%',
      storeAspd: 'Скорость атаки',
      storeAspdVal: '+20%',
      storeBullets: 'Кол-во снарядов',
      storeBulletsVal: '+1',
      storeCrit: 'Крит',
      storeCritVal: '+5% шанс / +10% урон',
      storeExp: 'Множитель опыта',
      storeExpVal: '+10%',
      storeLuck: 'Удача',
      storeLuckVal: '+10%',
      storeWeaponRadius: 'Радиус оружия',
      storeWeaponRadiusVal: '+10%',
      storeBulletSpeed: 'Скорость снарядов',
      storeBulletSpeedVal: '+10%',
      storeCurse: 'Проклятие',
      storeCurseVal: '+10% HP / урон / опыт врагов',
      storeCurseDesc: 'Враги получают больше HP и наносят больше урона, но убийства дают больше опыта. Отдельный множитель поверх множителя опыта.',
      storeWeaponSlots: 'Слоты оружия',
      storeWeaponSlotsVal: '+1 слот',
      storeWeaponSlotsDesc: 'Навсегда добавляет один слот оружия в каждом забеге. Можно купить до 5 доп. (всего 10). Очень дорого.',
      storeStatSlots: 'Слоты статов',
      storeStatSlotsVal: '+1 слот',
      storeStatSlotsDesc: 'Навсегда добавляет один слот выбранного стата в каждом забеге. Можно купить до 5 доп. (всего 10). Очень дорого.',
      resetData: 'СБРОС ДАННЫХ',
      resetDataTitle: 'СБРОСИТЬ ВСЕ ДАННЫЕ?',
      resetDataText: 'Золото, улучшения магазина и сохранения забегов будут удалены навсегда.',
      resetDataYes: 'ДА, УДАЛИТЬ ВСЁ',
      resetDataNo: 'ОТМЕНА',
      menuGold: 'Золото: {0}',
      newWeapon: 'НОВОЕ ОРУЖИЕ',
      weaponLevel: 'Ур. {0}',
      weaponBranch: 'Путь {0}',
      autoSelectUpgrades: 'АВТОВЫБОР',
      autoSelectDesc: 'Автовыбор улучшений до конца забега. Меню выбора больше не появится.',
      autoSelectOn: 'Автовыбор включён',
      statDamage: 'Урон',
      statAttackSpeed: 'Скорость атаки',
      statMoveSpeed: 'Скорость',
      statMaxHealth: 'Макс. здоровье',
      statBulletSpeed: 'Скорость снарядов',
      statWeaponRadius: 'Радиус оружия',
      statCritical: 'Критический удар',
      statExpGain: 'Прирост опыта',
      statLuck: 'Удача',
      statBulletCount: 'Число снарядов',
      weaponShotgun: 'Дробовик',
      weaponChainLightning: 'Цепная молния',
      weaponGarlicAura: 'Чесночная аура',
      weaponBoomerang: 'Бумеранг',
      weaponTowerShield: 'Башенный щит',
      weaponGrenadeLauncher: 'Гранатомёт',
      weaponBloodSpear: 'Кровавое копьё',
      weaponPhantomBlades: 'Призрачные клинки',
      weaponCursedTotem: 'Проклятый тотем',
      weaponIceCrystal: 'Ледяной кристалл',
      weaponsLabel: 'ОРУЖИЕ',
      statsLabel: 'СТАТЫ',
      helpWeapons: 'Вы носите до 5 оружий, каждое стреляет само по своему таймеру перезарядки — вручную стрелять не нужно. Любое оружие растёт до 5 уровня; на 3 уровне вы выбираете путь A или B, который определяет его развитие. В HUD у каждого оружия свой слот с полосой перезарядки.',
      helpChoices: 'Каждый новый уровень ставит забег на паузу и выдаёт 5 карт. Оружие (новое или улучшение) появляется на первом повышении уровня и далее каждые 5 уровней (5, 10, 15…). На остальных уровнях только статы. Нажмите 1-5 или щёлкните по карте. Можно держать не более 5 разных статов, поэтому позже предлагаются только уже выбранные. Сундуки дают дополнительные выборы с оружием — 1 за обычный, 3 за редкий, 5 за эпический.',
      options: 'НАСТРОЙКИ',
      optionsTitle: 'НАСТРОЙКИ',
      damageNumbers: 'Показывать урон врагов',
      chestHint: 'Подойдите к сундукам для авто-открытия',
      paused: 'ПАУЗА',
      resume: 'Продолжить',
      restart: 'ЗАНОВО',
      stats: 'СТАТЫ',
      currentStatsTitle: 'ТЕКУЩИЕ СТАТЫ',
      restartConfirmTitle: 'НАЧАТЬ ЗАНОВО?',
      restartConfirmText: 'Текущий прогресс будет потерян.',
      restartConfirmYes: 'ДА, ЗАНОВО',
      restartConfirmNo: 'ОТМЕНА',
      menuConfirmTitle: 'ВЫЙТИ В ГЛАВНОЕ МЕНЮ?',
      menuConfirmText: 'Забег закончится. Золото за забег будет зачислено.',
      menuConfirmYes: 'ДА, ВЫЙТИ',
      menuConfirmNo: 'ОТМЕНА',
      mainMenu: 'ГЛАВНОЕ МЕНЮ',
      defeated: 'ПОРАЖЕНИЕ',
      tryAgain: 'ЕЩЁ РАЗ',
      gameOverHint: 'Нажмите кнопки выше или вернитесь в меню',
      back: 'НАЗАД',
      helpTitle: 'СПРАВКА И БЕСТИАРИЙ',
      tabStats: 'СТАТЫ',
      tabWeapons: 'ОРУЖИЕ',
      tabBestiary: 'ВРАГИ',
      tabItems: 'ПРЕДМЕТЫ',
      helpEmptyWeapons: 'Оружие ещё не открыто. Получайте его во время забега.',
      helpEmptyEnemies: 'Враги ещё не открыты. Побеждайте врагов, чтобы заполнить бестиарий.',
      helpEmptyItems: 'Предметы ещё не открыты. Открывайте сундуки и подбирайте дроп.',
      goldLabel: 'ЗОЛОТО',
      enemiesLabel: 'ВРАГИ',
      shieldLabel: 'ЩИТ',
      hpLabel: 'ОЗ',
      levelStat: 'Уровень {0}',
      goldStat: 'Золото {0}',
      killsStat: 'Убийств {0}',
      timeStat: 'Время {0}с',
      chestGold: '+{0} з. ({1})',
      chickenLegHeal: '+{0} OЗ (куриная ножка)',
      bossSlain: 'ДРЕВНИЙ ДРАКОН ПОВЕРЖЕН!',
      rarityCommon: 'ОБЫЧНЫЙ',
      rarityRare: 'РЕДКИЙ',
      rarityEpic: 'ЭПИЧЕСКИЙ',
      rarityLegendary: 'ЛЕГЕНДАРНЫЙ',
      chestCommon: 'обычный',
      chestRare: 'редкий',
      chestEpic: 'эпический'
    }
  };

  static statNames = {
    en: {
      moveSpeed: 'Movement Speed', maxHealth: 'Max Health', maxShield: 'Shield',
      attack: 'Attack', attackSpeed: 'Attack Speed', bulletSpeed: 'Projectile Speed',
      weaponRadius: 'Weapon Radius',
      critChance: 'Crit Chance', critDamage: 'Crit Damage',
      bulletCount: 'Projectile Count', expMultiplier: 'Exp Multiplier', luck: 'Luck'
    },
    ru: {
      moveSpeed: 'Скорость', maxHealth: 'Макс. здоровье', maxShield: 'Щит',
      attack: 'Атака', attackSpeed: 'Скорость атаки', bulletSpeed: 'Скорость снарядов',
      weaponRadius: 'Радиус оружия',
      critChance: 'Шанс крита', critDamage: 'Урон крита',
      bulletCount: 'Число снарядов', expMultiplier: 'Множ. опыта', luck: 'Удача'
    }
  };

  static helpStats = {
    en: [
      { abbr: 'SPD', name: 'Movement Speed', desc: 'How fast you move across the field. Higher speed helps dodge enemy swarms and reach chests.' },
      { abbr: 'HP', name: 'Health', desc: 'Your life total. When HP reaches zero, the run ends. Max Health is raised by level-up cards, and each boost heals you for the same amount it adds.' },
      { abbr: 'SHD', name: 'Shield', desc: 'Only exists while you carry the Tower Shield weapon. It absorbs damage before HP and regenerates based on Attack Speed; a full break delays regeneration by 3 seconds. The Garlic Aura can also stack a small temporary shield.' },
      { abbr: 'ATK', name: 'Attack', desc: 'Base damage every weapon scales from. Each weapon applies its own multiplier on top, and critical hits multiply the result by Crit Damage.' },
      { abbr: 'ASP', name: 'Attack Speed', desc: 'Divides the reload time of every weapon, so all slots fire more often. Also speeds up Tower Shield regeneration.' },
      { abbr: 'BLT', name: 'Projectile Count', desc: 'Adds one extra projectile, pellet, or strike to every weapon that fires them.' },
      { abbr: 'BSP', name: 'Projectile Speed', desc: 'Projectile travel speed. Faster shots reach distant enemies sooner.' },
      { abbr: 'RAD', name: 'Weapon Radius', desc: 'Scales projectile hitboxes and splash / aura radii for weapons that use them (shotgun blasts, grenades, garlic, totem, ice shatter, and similar).' },
      { abbr: 'CRT', name: 'Critical Chance', desc: 'Probability each hit critically strikes. Crits roll independently per projectile.' },
      { abbr: 'CDM', name: 'Critical Damage', desc: 'Damage multiplier applied on critical hits (e.g. 1.5× = +50% damage). Once Crit Chance hits 100%, the Critical card gives only Crit Damage.' },
      { abbr: 'EXP', name: 'Experience Multiplier', desc: 'Multiplies XP gained from all gold pickups. XP raises level and scales difficulty.' },
      { abbr: 'LCK', name: 'Luck', desc: 'Multiplies all gold gained, raises the chest drop rate, and improves the rare/epic quality roll.' }
    ],
    ru: [
      { abbr: 'SPD', name: 'Скорость', desc: 'Скорость передвижения по полю. Помогает уклоняться от толпы и добираться до сундуков.' },
      { abbr: 'HP', name: 'Здоровье', desc: 'Запас жизни. При нуле OЗ забег заканчивается. Макс. здоровье растёт от карт улучшений, и каждая прибавка сразу лечит на ту же величину.' },
      { abbr: 'SHD', name: 'Щит', desc: 'Существует только с оружием «Башенный щит». Поглощает урон до OЗ и восстанавливается со скоростью атаки; после полного слома регенерация ждёт 3 секунды. «Чесночная аура» тоже может дать небольшой временный щит.' },
      { abbr: 'ATK', name: 'Атака', desc: 'Базовый урон, от которого считается всё оружие. У каждого оружия свой множитель сверху, а криты умножают результат на урон крита.' },
      { abbr: 'ASP', name: 'Скорость атаки', desc: 'Делит время перезарядки всего оружия — все слоты стреляют чаще. Также ускоряет регенерацию Башенного щита.' },
      { abbr: 'BLT', name: 'Число снарядов', desc: 'Добавляет по одному снаряду, дробине или удару каждому оружию, которое их выпускает.' },
      { abbr: 'BSP', name: 'Скорость снарядов', desc: 'Скорость полёта снарядов. Быстрее достают дальние цели.' },
      { abbr: 'RAD', name: 'Радиус оружия', desc: 'Увеличивает размер снарядов и радиус взрывов / аур у оружия, где это применимо (дробовик, гранаты, чеснок, тотем, лёд и т.п.).' },
      { abbr: 'CRT', name: 'Шанс крита', desc: 'Вероятность критического попадания для каждого снаряда.' },
      { abbr: 'CDM', name: 'Урон крита', desc: 'Множитель урона при крите (напр. 1.5× = +50% урона). При 100% шансе крита карта «Критический удар» даёт только урон крита.' },
      { abbr: 'EXP', name: 'Множ. опыта', desc: 'Умножает опыт от всего золота. Опыт повышает уровень и сложность.' },
      { abbr: 'LCK', name: 'Удача', desc: 'Умножает всё получаемое золото, повышает шанс выпадения сундуков и качество редких/эпических.' }
    ]
  };

  static helpSystems = {
    en: {
      playerStats: 'PLAYER STATS',
      combatSystems: 'COMBAT & SYSTEMS',
      weaponsTitle: 'Weapon Slots',
      choicesTitle: 'Level-Up Choices [1-5]',
      difficultyTitle: 'Difficulty Scaling',
      difficultyDesc: 'XP and level increase spawn rate, enemy count, HP, damage, speed, and dangerous enemy mix. From level 50 onward scaling ramps up sharply.',
      enemies: 'ENEMIES',
      items: 'ITEM DROPS',
      goldSources: 'GOLD SOURCES',
      goldSourcesDesc: 'Defeating enemies drops gold coins (amount varies by type). Every chest and chicken leg now drops from a killed enemy too — nothing spawns on the field by itself. All gold gained adds experience.',
      speed: 'Speed',
      autoOpen: 'Drops from kills · Auto-open'
    },
    ru: {
      playerStats: 'СТАТЫ ИГРОКА',
      combatSystems: 'БОЙ И СИСТЕМЫ',
      weaponsTitle: 'Слоты оружия',
      choicesTitle: 'Выбор при уровне [1-5]',
      difficultyTitle: 'Масштаб сложности',
      difficultyDesc: 'Опыт и уровень повышают частоту спавна, число врагов, HP, урон, скорость и долю опасных типов. С 50 уровня рост резкий.',
      enemies: 'ВРАГИ',
      items: 'ВЫПАДАЮЩИЕ ПРЕДМЕТЫ',
      goldSources: 'ИСТОЧНИКИ ЗОЛОТА',
      goldSourcesDesc: 'Враги роняют монеты (зависит от типа). Сундуки и куриные ножки теперь тоже выпадают только из убитых врагов — на поле сами по себе они не появляются. Всё золото даёт опыт.',
      speed: 'Скорость',
      autoOpen: 'Выпадает из врагов · Авто-открытие'
    }
  };

  static helpEnemies = {
    en: [
      { id: 'slime', name: 'Forest Slime', threat: 'low', gold: 1, speed: '35 (+scale)', hp: '20 (+scale)', dmg: '8 (+scale)', ability: 'Contact damage', desc: 'Slow blob that pauses, then jumps toward you in a burst. Common early-game fodder.', sprite: 'slime' },
      { id: 'skeleton', name: 'Bone Archer', threat: 'mid', gold: 4, speed: '50 (+scale)', hp: '25 (+scale)', dmg: '10 (+scale)', ability: 'Longbow · Keeps distance', desc: 'Holds ~220px range, strafes sideways and looses dodgeable arrows every 1.8s (120 speed, 400 range).', sprite: 'skeleton' },
      { id: 'zombie', name: 'Rotting Zombie', threat: 'mid', gold: 3, speed: '62 (+scale)', hp: '45 (+scale)', dmg: '14 (+scale)', ability: 'Melee only', desc: 'Shambles straight at you with a slight weave. No ranged attack, but tougher than it looks.', sprite: 'zombie' },
      { id: 'mage', name: 'Dark Mage', threat: 'high', gold: 6, speed: '45 (+scale)', hp: '40 (+scale)', dmg: '18 (+scale)', ability: 'Delayed AoE circles', desc: 'Stays at long range (~280px) and raises both hands to cast. Warning circles explode after 1–1.4s.', sprite: 'mage' },
      { id: 'bomber', name: 'Bomb Goblin', threat: 'extreme', gold: 8, speed: '140 (+scale)', hp: '1', dmg: 'Instant kill', ability: 'Suicide explosion', desc: 'Fastest enemy with only 1 HP. On contact: destroys all shield, or kills instantly if shield is empty.', sprite: 'bomber' },
      { id: 'robot', name: 'War Automaton', threat: 'high', gold: 14, speed: 'Always below yours', hp: '260 (+scale)', dmg: '26 (+scale)', ability: 'Melee only · Very tanky', desc: 'A walking wall from level 12. Its speed is hard-capped below your movement speed, so you can always outrun it.', sprite: 'robot' },
      { id: 'wolf', name: 'White Wolf', threat: 'high', gold: 7, speed: '155 (+scale)', hp: '55 (+scale)', dmg: '16 (+scale)', ability: 'Bite · Slows you 0.5s', desc: 'Sprints at you from level 8. When a bullet closes in, it blinks sideways with a ghost trail (1s cooldown). A bite cuts your movement speed for half a second.', sprite: 'wolf' },
      { id: 'priest', name: 'Zealot Priest', threat: 'extreme', gold: 16, speed: '58 (+scale)', hp: '95 (+scale)', dmg: 'No direct attack', ability: 'Holy heal aura', desc: 'From level 15. Keeps a golden aura that continuously heals nearby enemies. Does not heal himself, other priests, or Elder Dragons. A Cursed Totem blocks healing for foes inside its field (or already cursed).', sprite: 'priest' },
      { id: 'ufo', name: 'Alien Saucer', threat: 'extreme', gold: 45, speed: '125 (+scale)', hp: '320 (+scale)', dmg: 'Abduction', ability: 'Lifts and drops you', desc: 'From level 18, max 3 at once. Catches you, carries you for ~2.4s and dumps you into the thickest pack of enemies.', sprite: 'ufo' },
      { id: 'dragonCrimson', name: 'Crimson Tyrant (BOSS)', threat: 'extreme', gold: 260, speed: '58 (+scale)', hp: '4200 (+scale)', dmg: '42 (+scale)', ability: 'Triple fireball · Control immune', desc: 'Rare boss from level 25 (one of four Elder Dragon forms). Walks the field; never flies. Immune to freeze, stun, slow, pull, knockback, and curse. Only one Elder Dragon at a time, max once per 5 minutes. Hurls 3 arcing fireballs that leave burning zones.', sprite: 'dragonCrimson' },
      { id: 'dragonVoid', name: 'Void Elder (BOSS)', threat: 'extreme', gold: 260, speed: '58 (+scale)', hp: '4200 (+scale)', dmg: '42 (+scale)', ability: 'Triple fireball · Control immune', desc: 'Rare boss from level 25 (void form of the Elder Dragon). Same rules as Crimson Tyrant: ground walker, control immune, one dragon at a time, 5-minute cooldown, triple fireball volleys with lingering flames.', sprite: 'dragonVoid' },
      { id: 'dragonBone', name: 'Bone Sovereign (BOSS)', threat: 'extreme', gold: 260, speed: '58 (+scale)', hp: '4200 (+scale)', dmg: '42 (+scale)', ability: 'Triple fireball · Control immune', desc: 'Rare boss from level 25 (undead form of the Elder Dragon). Same rules as Crimson Tyrant: walks, control immune, one at a time, 5-minute cooldown, triple fireball barrages.', sprite: 'dragonBone' },
      { id: 'dragonEmber', name: 'Ember Wyrm (BOSS)', threat: 'extreme', gold: 260, speed: '58 (+scale)', hp: '4200 (+scale)', dmg: '42 (+scale)', ability: 'Triple fireball · Control immune', desc: 'Rare boss from level 25 (magma form of the Elder Dragon). Same rules as Crimson Tyrant: ground walker, control immune, one at a time, 5-minute cooldown, triple fireball barrages.', sprite: 'dragonEmber' }
    ],
    ru: [
      { id: 'slime', name: 'Лесной слайм', threat: 'low', gold: 1, speed: '35 (+масш.)', hp: '20 (+масш.)', dmg: '8 (+масш.)', ability: 'Контактный урон', desc: 'Медленная капля: пауза, затем прыжок к вам. Обычный ранний враг.', sprite: 'slime' },
      { id: 'skeleton', name: 'Скелет-лучник', threat: 'mid', gold: 4, speed: '50 (+масш.)', hp: '25 (+масш.)', dmg: '10 (+масш.)', ability: 'Лук · Дистанция', desc: 'Держит ~220px, стрейфит и стреляет каждые 1.8с (скор. 120, дальн. 400).', sprite: 'skeleton' },
      { id: 'zombie', name: 'Гниющий зомби', threat: 'mid', gold: 3, speed: '62 (+масш.)', hp: '45 (+масш.)', dmg: '14 (+масш.)', ability: 'Только ближний бой', desc: 'Бредёт прямо на вас, слегка виляя. Без дальних атак, но крепче, чем кажется.', sprite: 'zombie' },
      { id: 'mage', name: 'Тёмный маг', threat: 'high', gold: 6, speed: '45 (+масш.)', hp: '40 (+масш.)', dmg: '18 (+масш.)', ability: 'AoE с задержкой', desc: 'Дальний бой (~280px), поднимает руки при касте. Круги взрываются через 1–1.4с.', sprite: 'mage' },
      { id: 'bomber', name: 'Гоблин-бомба', threat: 'extreme', gold: 8, speed: '140 (+масш.)', hp: '1', dmg: 'Мгнов. смерть', ability: 'Самоподрыв', desc: 'Самый быстрый, 1 HP. Контакт: снимает весь щит или убивает без щита.', sprite: 'bomber' },
      { id: 'robot', name: 'Боевой автоматон', threat: 'high', gold: 14, speed: 'Всегда медленнее вас', hp: '260 (+масш.)', dmg: '26 (+масш.)', ability: 'Ближний бой · Очень живучий', desc: 'Ходячая стена с 12 уровня. Его скорость жёстко ограничена ниже вашей — от него всегда можно убежать.', sprite: 'robot' },
      { id: 'wolf', name: 'Белый волк', threat: 'high', gold: 7, speed: '155 (+масш.)', hp: '55 (+масш.)', dmg: '16 (+масш.)', ability: 'Укус · Замедляет на 0.5с', desc: 'С 8 уровня мчится к вам. Когда пуля близко — мигает в сторону с призрачным шлейфом (кд 1с). Укус замедляет вас на полсекунды.', sprite: 'wolf' },
      { id: 'priest', name: 'Жрец-фанатик', threat: 'extreme', gold: 16, speed: '58 (+масш.)', hp: '95 (+масш.)', dmg: 'Не атакует сам', ability: 'Аура исцеления', desc: 'С 15 уровня. Держит золотую ауру, которая постоянно лечит ближайших врагов. Не лечит себя, других жрецов и Драконов. Проклятый тотем блокирует лечение врагов в своём поле (или уже проклятых).', sprite: 'priest' },
      { id: 'ufo', name: 'НЛО', threat: 'extreme', gold: 45, speed: '125 (+масш.)', hp: '320 (+масш.)', dmg: 'Похищение', ability: 'Поднимает и бросает вас', desc: 'С 18 уровня, максимум 3 сразу. Хватает вас, несёт ~2.4с и сбрасывает в самую гущу врагов.', sprite: 'ufo' },
      { id: 'dragonCrimson', name: 'Алый тиран (БОСС)', threat: 'extreme', gold: 260, speed: '58 (+масш.)', hp: '4200 (+масш.)', dmg: '42 (+масш.)', ability: 'Залп из 3 фаерболов · Иммун к контролю', desc: 'Редкий босс с 25 уровня (одна из четырёх форм Древнего дракона). Ходит по земле, не летает. Иммунен к заморозке, стану, замедлению, притягиванию, откидыванию и проклятию. Только один дракон за раз, не чаще чем раз в 5 минут. Бросает 3 фаербола с горящими зонами.', sprite: 'dragonCrimson' },
      { id: 'dragonVoid', name: 'Старейшина Бездны (БОСС)', threat: 'extreme', gold: 260, speed: '58 (+масш.)', hp: '4200 (+масш.)', dmg: '42 (+масш.)', ability: 'Залп из 3 фаерболов · Иммун к контролю', desc: 'Редкий босс с 25 уровня (бездная форма). Те же правила: ходит, иммунен к контролю, один за раз, кд 5 минут, тройной залп фаерболов.', sprite: 'dragonVoid' },
      { id: 'dragonBone', name: 'Костяной владыка (БОСС)', threat: 'extreme', gold: 260, speed: '58 (+масш.)', hp: '4200 (+масш.)', dmg: '42 (+масш.)', ability: 'Залп из 3 фаерболов · Иммун к контролю', desc: 'Редкий босс с 25 уровня (нежить-форма). Те же правила: ходит, иммунен к контролю, один за раз, кд 5 минут, тройной залп фаерболов.', sprite: 'dragonBone' },
      { id: 'dragonEmber', name: 'Тлеющий змей (БОСС)', threat: 'extreme', gold: 260, speed: '58 (+масш.)', hp: '4200 (+масш.)', dmg: '42 (+масш.)', ability: 'Залп из 3 фаерболов · Иммун к контролю', desc: 'Редкий босс с 25 уровня (магма-форма). Те же правила: ходит, иммунен к контролю, один за раз, кд 5 минут, тройной залп фаерболов.', sprite: 'dragonEmber' }
    ]
  };

  static helpItems = {
    en: [
      { tier: 'common', name: 'Common Chest', gold: 5, threat: 'low', sprite: 'chestCommon', desc: 'Dropped by slain enemies and auto-opens when you walk nearby. Most frequent chest type.' },
      { tier: 'rare', name: 'Rare Chest', gold: 15, threat: 'mid', sprite: 'chestRare', desc: 'Blue-glowing drop. Luck raises both the drop rate and the quality roll.' },
      { tier: 'epic', name: 'Epic Chest', gold: 50, threat: 'high', sprite: 'chestEpic', desc: 'Purple-glowing drop with the largest gold reward. Bosses drop chests far more often.' },
      { id: 'chickenLeg', name: 'Chicken Leg', threat: 'high', sprite: 'chickenLeg', tags: 'Epic rarity · Auto-pickup', statline: 'Restores 5% max HP', desc: 'Very rare heal drop from a killed enemy; Luck improves the odds. Walk nearby to collect.' }
    ],
    ru: [
      { tier: 'common', name: 'Обычный сундук', gold: 5, threat: 'low', sprite: 'chestCommon', desc: 'Выпадает из убитых врагов, открывается при приближении. Самый частый тип.' },
      { tier: 'rare', name: 'Редкий сундук', gold: 15, threat: 'mid', sprite: 'chestRare', desc: 'Синее свечение. Удача повышает шанс выпадения и качество.' },
      { tier: 'epic', name: 'Эпический сундук', gold: 50, threat: 'high', sprite: 'chestEpic', desc: 'Фиолетовое свечение, максимум золота. Из боссов выпадает гораздо чаще.' },
      { id: 'chickenLeg', name: 'Куриная ножка', threat: 'high', sprite: 'chickenLeg', tags: 'Эпич. редкость · Авто-подбор', statline: 'Восстанавливает 5% макс. OЗ', desc: 'Очень редкое лечение из убитого врага; Удача повышает шанс. Подойдите для подбора.' }
    ]
  };

  static helpWeaponDescs = {
    en: {
      shotgun: 'Fan of pellets along your move direction. Keeps firing that way after you stop.',
      chainLightning: 'Arc bolt that jumps between nearby foes.',
      garlicAura: 'Damaging aura around you that ticks continuously.',
      boomerang: 'Throws toward the furthest enemy in range, pierces on the way out, then returns through the pack.',
      towerShield: 'Orbiting shield that bashes foes and can block projectiles. Regen scales with Attack Speed.',
      grenadeLauncher: 'Lobs arcing grenades that explode on landing.',
      bloodSpear: 'Piercing spears that can apply bleed.',
      phantomBlades: 'Orbiting phantom blades that slash nearby enemies.',
      cursedTotem: 'Plants a long-lived curse zone at your feet. Stay inside the radius for it to curse foes. Also blocks Priest healing for enemies in the field.',
      iceCrystal: 'Fans homing ice shards in a 90° cone; each shard locks onto an enemy.'
    },
    ru: {
      shotgun: 'Веер дроби в сторону движения. После остановки продолжает стрелять в том же направлении.',
      chainLightning: 'Дуга, прыгающая между ближайшими врагами.',
      garlicAura: 'Постоянная аура урона вокруг вас.',
      boomerang: 'Бросается в самого дальнего врага в радиусе, пробивает на пути и возвращается сквозь толпу.',
      towerShield: 'Орбитальный щит: бьёт врагов и может блокировать снаряды. Регенерация зависит от скорости атаки.',
      grenadeLauncher: 'Кидает гранаты по дуге со взрывом при приземлении.',
      bloodSpear: 'Пронзающие копья, способные накладывать кровотечение.',
      phantomBlades: 'Орбитальные призрачные клинки, секущие ближайших врагов.',
      cursedTotem: 'Ставит долгую зону проклятия у ног. Оставайтесь внутри радиуса, чтобы тотем проклинал врагов. Также блокирует лечение Жреца для врагов в поле.',
      iceCrystal: 'Веер самонаводящихся ледяных осколков в конусе 90°; каждый осколок ловит свою цель.'
    }
  };

  static t(key, ...args) {
    let s = this.strings[this.lang]?.[key] ?? this.strings.en[key] ?? key;
    args.forEach((a, i) => { s = s.replace(`{${i}}`, a); });
    return s;
  }

  static statName(key) {
    return this.statNames[this.lang]?.[key] ?? this.statNames.en[key] ?? key;
  }

  static rarityLabel(rarity) {
    const map = { common: 'rarityCommon', rare: 'rarityRare', epic: 'rarityEpic', legendary: 'rarityLegendary' };
    return this.t(map[rarity] ?? 'rarityCommon');
  }

  static chestTierLabel(tier) {
    const map = { common: 'chestCommon', rare: 'chestRare', epic: 'chestEpic' };
    return this.t(map[tier] ?? 'chestCommon');
  }

  static hintHtml(key) {
    const htmlKey = key + 'Html';
    return this.t(htmlKey);
  }

  static onChange(fn) { this.listeners.push(fn); }

  static setLang(lang) {
    if (!this.strings[lang]) return;
    this.lang = lang;
    try { localStorage.setItem(this.KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;
    const sel = document.getElementById('langSelect');
    if (sel) sel.value = lang;
    this.applyDom();
    for (const fn of this.listeners) fn();
  }

  static applyDom() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = this.t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      el.innerHTML = this.t(el.dataset.i18nHtml);
    });
    MobileControls.updateLayoutLabels();
  }

  static init() {
    try {
      const saved = localStorage.getItem(this.KEY);
      if (saved && this.strings[saved]) this.lang = saved;
    } catch (e) {}
    document.documentElement.lang = this.lang;
    const sel = document.getElementById('langSelect');
    if (sel) {
      sel.value = this.lang;
      sel.onchange = () => this.setLang(sel.value);
    }
    this.applyDom();
  }
}

/* ============================================================
   SOUND — procedural 8-bit Web Audio
   ============================================================ */
class SoundManager {
  static ctx = null;
  static master = null;
  static enabled = true;
  static lastShoot = 0;
  static lastKill = 0;
  static lastBite = 0;
  static lastFlap = 0;
  static lastUfoFly = 0;

  static init() {
    try {
      if (localStorage.getItem('gachaSurvivorsSound') === '0') this.enabled = false;
    } catch (e) {}
  }

  static unlock() {
    if (!this.enabled) return;
    try {
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        this.ctx = new AC();
        this.master = this.ctx.createGain();
        this.master.gain.value = 0.32;
        this.master.connect(this.ctx.destination);
      }
      if (this.ctx.state === 'suspended') this.ctx.resume();
    } catch (e) {}
  }

  static _t() {
    return this.ctx ? this.ctx.currentTime : 0;
  }

  static _tone(freq, dur, type = 'square', vol = 0.14, delay = 0, slide = null) {
    if (!this.enabled || !this.ctx || !this.master) return;
    const t0 = this._t() + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(40, freq), t0);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, slide), t0 + dur);
    gain.gain.setValueAtTime(vol, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.03);
  }

  static _seq(notes, step = 0.07, type = 'square', vol = 0.12) {
    notes.forEach((n, i) => this._tone(n, step * 0.9, type, vol, i * step));
  }

  static _noise(dur, vol = 0.1, freq = 900, delay = 0, type = 'lowpass') {
    if (!this.enabled || !this.ctx || !this.master) return;
    const t0 = this._t() + delay;
    const len = Math.floor(this.ctx.sampleRate * dur);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const filt = this.ctx.createBiquadFilter();
    filt.type = type;
    filt.frequency.value = freq;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(vol, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    src.connect(filt);
    filt.connect(gain);
    gain.connect(this.master);
    src.start(t0);
    src.stop(t0 + dur + 0.02);
  }

  static ui() {
    this._tone(520, 0.05, 'square', 0.1);
    this._tone(780, 0.04, 'square', 0.06, 0.03);
  }

  static shoot(crit = false) {
    const now = performance.now();
    if (now - this.lastShoot < 45) return;
    this.lastShoot = now;
    if (crit) {
      this._tone(990, 0.05, 'square', 0.11);
      this._tone(1480, 0.06, 'square', 0.09, 0.04);
    } else {
      this._tone(740, 0.045, 'square', 0.08);
      this._tone(1100, 0.035, 'triangle', 0.05, 0.025);
    }
  }

  static kill() {
    const now = performance.now();
    if (now - this.lastKill < 25) return;
    this.lastKill = now;
    this._tone(320, 0.07, 'square', 0.1);
    this._tone(180, 0.09, 'square', 0.08, 0.04, 90);
  }

  static hurt() {
    this._tone(220, 0.12, 'sawtooth', 0.12, 0, 110);
    this._noise(0.06, 0.06, 600);
  }

  static chest(tier = 'common') {
    if (tier === 'epic') {
      // Big purple fanfare — intentionally ~2s so epic opens feel special
      this._noise(0.12, 0.08, 900);
      this._tone(196, 0.22, 'triangle', 0.1, 0);
      this._tone(262, 0.2, 'square', 0.11, 0.12);
      this._tone(330, 0.2, 'square', 0.12, 0.26);
      this._tone(392, 0.22, 'square', 0.12, 0.4);
      this._tone(523, 0.28, 'triangle', 0.13, 0.58);
      this._tone(659, 0.32, 'square', 0.12, 0.78);
      this._tone(784, 0.36, 'triangle', 0.11, 0.98);
      this._tone(1047, 0.55, 'sine', 0.12, 1.18);
      this._tone(1319, 0.5, 'triangle', 0.1, 1.35);
      this._tone(1568, 0.45, 'sine', 0.08, 1.5);
      // Sustained shimmer through the end of the 2s window
      this._tone(880, 0.7, 'triangle', 0.05, 1.3);
      this._tone(1175, 0.55, 'sine', 0.06, 1.45);
      this._noise(0.35, 0.04, 2200, 1.55, 'highpass');
      this._tone(1760, 0.35, 'sine', 0.05, 1.65);
      return;
    }
    if (tier === 'rare') {
      // Cool blue arpeggio — longer and brighter than common
      this._noise(0.06, 0.05, 1200);
      this._seq([392, 494, 587, 740, 880], 0.1, 'square', 0.11);
      this._tone(988, 0.28, 'triangle', 0.09, 0.48);
      this._tone(1175, 0.22, 'sine', 0.06, 0.62);
      return;
    }
    // Common: short wooden clink + soft chime
    this._noise(0.05, 0.06, 700);
    this._tone(180, 0.08, 'square', 0.08, 0, 120);
    this._tone(523, 0.1, 'triangle', 0.1, 0.06);
    this._tone(659, 0.12, 'triangle', 0.08, 0.14);
  }

  static heal() {
    this._seq([440, 554, 659, 880], 0.09, 'triangle', 0.1);
  }

  static levelUp() {
    this._seq([523, 659, 784, 1047], 0.09, 'square', 0.13);
    this._tone(1319, 0.18, 'triangle', 0.09, 0.34);
    this._tone(1568, 0.14, 'sine', 0.06, 0.42);
  }

  static gachaResult(rarity = 'common') {
    const sets = {
      common: [392, 494],
      rare: [392, 494, 587],
      epic: [392, 494, 587, 740],
      legendary: [392, 494, 587, 740, 988, 1175]
    };
    this._seq(sets[rarity] || sets.common, 0.1, 'square', 0.12);
    if (rarity === 'legendary') this._tone(1175, 0.2, 'triangle', 0.1, 0.55);
  }

  static gachaTick() {
    this._tone(300 + Math.random() * 80, 0.025, 'square', 0.04);
  }

  static ultimate() {
    this._noise(0.15, 0.14, 400);
    this._seq([196, 262, 330, 392, 523], 0.09, 'square', 0.13);
    this._tone(523, 0.25, 'sawtooth', 0.1, 0.4, 196);
  }

  static bomber() {
    this._noise(0.2, 0.18, 500);
    this._tone(120, 0.25, 'square', 0.14, 0, 40);
  }

  static death() {
    this._seq([330, 262, 196, 147, 98], 0.14, 'square', 0.12);
    this._noise(0.2, 0.08, 700);
  }

  static wolfBite() {
    const now = performance.now();
    if (now - this.lastBite < 120) return;
    this.lastBite = now;
    this._noise(0.08, 0.1, 1400);
    this._tone(420, 0.07, 'sawtooth', 0.09, 0, 180);
  }

  static dragonRoar() {
    const now = performance.now();
    if (now - (this.lastRoar || 0) < 2000) return;
    this.lastRoar = now;
    // Long evil growl: deep descending layers + grit (~2.4s)
    this._tone(95, 2.2, 'sawtooth', 0.18, 0, 32);
    this._tone(72, 2.35, 'square', 0.12, 0.05, 28);
    this._tone(118, 1.9, 'sawtooth', 0.09, 0.12, 40);
    this._tone(54, 2.4, 'triangle', 0.1, 0.08, 24);
    this._tone(160, 0.7, 'square', 0.08, 0, 70);
    this._tone(48, 1.4, 'sawtooth', 0.07, 1.0, 22);
    this._noise(0.55, 0.14, 240);
    this._noise(0.45, 0.09, 160, 0.35);
    this._noise(0.5, 0.08, 120, 0.9);
    this._noise(0.4, 0.06, 90, 1.5);
    this._tone(85, 0.55, 'sawtooth', 0.06, 1.6, 30);
    this._tone(40, 0.7, 'triangle', 0.05, 1.85, 22);
  }

  static dragonFlap() {
    const now = performance.now();
    if (now - this.lastFlap < 140) return;
    this.lastFlap = now;
    this._noise(0.09, 0.11, 280);
    this._noise(0.06, 0.06, 700, 0.02);
    this._tone(70, 0.12, 'triangle', 0.07, 0, 40);
  }

  static dragonFireball() {
    this._tone(260, 0.1, 'sawtooth', 0.12, 0, 110);
    this._tone(480, 0.14, 'square', 0.08, 0.03, 160);
    this._noise(0.12, 0.1, 1100);
    this._tone(180, 0.18, 'triangle', 0.06, 0.08, 70);
  }

  /* ~5s descending death groan for the Elder Dragon */
  static dragonDeath() {
    this._tone(110, 5.0, 'sawtooth', 0.15, 0, 32);
    this._tone(78, 5.0, 'square', 0.09, 0.08, 26);
    this._tone(55, 4.6, 'triangle', 0.07, 0.25, 22);
    this._noise(0.8, 0.12, 220);
    for (let i = 0; i < 9; i++) {
      const d = 0.45 + i * 0.5;
      this._noise(0.35, 0.06 - i * 0.004, 180 - i * 8, d);
      this._tone(95 - i * 7, 0.45, 'sawtooth', 0.05, d, 30);
    }
  }

  static ufoFly() {
    const now = performance.now();
    if (now - this.lastUfoFly < 180) return;
    this.lastUfoFly = now;
    const wobble = 160 + Math.random() * 40;
    this._tone(wobble, 0.22, 'sine', 0.045);
    this._tone(wobble * 2.1, 0.18, 'triangle', 0.03, 0.02);
    this._tone(wobble * 3.3, 0.12, 'sine', 0.02, 0.04);
  }

  /* ~0.3s electric-alien tractor beam */
  static ufoPull() {
    this._tone(900, 0.3, 'sawtooth', 0.1, 0, 2200);
    this._tone(1400, 0.28, 'square', 0.07, 0.02, 380);
    this._tone(600, 0.3, 'sine', 0.08, 0, 1800);
    this._noise(0.3, 0.09, 2800, 0, 'bandpass');
    this._noise(0.18, 0.05, 4200, 0.08, 'highpass');
  }

  static abduct() {
    this.ufoPull();
  }

  static fireLand() {
    this._noise(0.12, 0.09, 700);
    this._tone(160, 0.16, 'square', 0.08, 0, 70);
  }

  static bindUiClicks() {
    document.querySelectorAll('.btn, .help-tab').forEach((el) => {
      el.addEventListener('click', () => {
        this.unlock();
        this.ui();
      });
    });
  }
}

/* ============================================================
   MOBILE TOUCH CONTROLS
   ============================================================ */
class MobileControls {
  static LAYOUT_KEY = 'gachaSurvivorsTouchLayout';
  static isMobile = false;
  static game = null;
  static el = null;
  static joystickZone = null;
  static joystickKnob = null;
  static joystickActive = false;
  static joyTravel = 52;
  static joyDeadzone = 0.14;
  static layout = 'joy-right';

  static detect() {
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const narrow = window.matchMedia('(max-width: 900px)').matches;
    return touch && (coarse || narrow);
  }

  static loadLayout() {
    try {
      const v = localStorage.getItem(this.LAYOUT_KEY);
      if (v === 'joy-left' || v === 'joy-right') this.layout = v;
    } catch (e) {}
  }

  static updateLayoutLabels() {
    const sel = document.getElementById('touchLayoutSelect');
    if (!sel || sel.options.length < 2) return;
    sel.options[0].textContent = I18n.t('touchLayoutJoyRight');
    sel.options[1].textContent = I18n.t('touchLayoutJoyLeft');
  }

  static applyLayout() {
    if (!this.el) this.el = document.getElementById('mobileControls');
    if (!this.el) return;
    this.el.classList.remove('layout-joy-right', 'layout-joy-left');
    this.el.classList.add(this.layout === 'joy-left' ? 'layout-joy-left' : 'layout-joy-right');
    const sel = document.getElementById('touchLayoutSelect');
    if (sel) sel.value = this.layout;
  }

  static setLayout(layout) {
    this.layout = layout === 'joy-left' ? 'joy-left' : 'joy-right';
    try { localStorage.setItem(this.LAYOUT_KEY, this.layout); } catch (e) {}
    this.applyLayout();
  }

  static _syncMobileMenu() {
    const row = document.getElementById('touchLayoutSelector');
    if (row) row.classList.toggle('hidden', !this.isMobile);
  }

  static init(game) {
    this.game = game;
    this.loadLayout();
    this.el = document.getElementById('mobileControls');
    this.joystickZone = document.getElementById('touchJoystick');
    this.joystickKnob = document.getElementById('touchJoystickKnob');
    this.applyLayout();
    this.updateLayoutLabels();

    const layoutSel = document.getElementById('touchLayoutSelect');
    if (layoutSel) {
      layoutSel.onchange = () => this.setLayout(layoutSel.value);
    }

    this.isMobile = this.detect();
    this._syncMobileMenu();

    if (!this.isMobile) return;

    document.body.classList.add('mobile-game');
    this._bindJoystick();
    this._bindActions();
    window.addEventListener('resize', () => {
      const was = this.isMobile;
      this.isMobile = this.detect();
      this._syncMobileMenu();
      if (this.isMobile !== was) {
        document.body.classList.toggle('mobile-game', this.isMobile);
        if (!this.isMobile) this.setVisible(false);
      }
    });
  }

  static _bindJoystick() {
    const zone = this.joystickZone;
    const knob = this.joystickKnob;
    const base = zone.querySelector('.touch-joystick-base');

    const center = () => {
      const r = base.getBoundingClientRect();
      return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 };
    };

    const update = (clientX, clientY) => {
      const c = center();
      let dx = clientX - c.x;
      let dy = clientY - c.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 0;
      const max = this.joyTravel;
      if (dist > max) {
        dx = (dx / dist) * max;
        dy = (dy / dist) * max;
      }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      this._applyStick(dx / max, dy / max, dist / max);
    };

    const end = () => {
      if (!this.joystickActive) return;
      this.joystickActive = false;
      zone.classList.remove('active');
      knob.style.transform = '';
      this.resetInput();
    };

    zone.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      zone.setPointerCapture(e.pointerId);
      this.joystickActive = true;
      zone.classList.add('active');
      SoundManager.unlock();
      update(e.clientX, e.clientY);
    });
    zone.addEventListener('pointermove', (e) => {
      if (!this.joystickActive) return;
      e.preventDefault();
      update(e.clientX, e.clientY);
    });
    zone.addEventListener('pointerup', end);
    zone.addEventListener('pointercancel', end);
  }

  static _applyStick(nx, ny, mag) {
    if (!this.game) return;
    const i = this.game.input;
    if (mag < this.joyDeadzone) {
      i.up = i.down = i.left = i.right = false;
      return;
    }
    i.up = ny < -0.22;
    i.down = ny > 0.22;
    i.left = nx < -0.22;
    i.right = nx > 0.22;
  }

  static _bindActions() {
    const pauseBtn = document.getElementById('touchPause');
    if (!pauseBtn) return;
    pauseBtn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      SoundManager.unlock();
      SoundManager.ui();
      const g = this.game;
      if (g.upgrades && g.upgrades.isOpen()) return;
      if (g.help.isOpen()) g.help.close();
      else g.togglePause();
    });
  }

  static _setDir(dir, on) {
    if (!this.game) return;
    const i = this.game.input;
    if (dir === 'up') i.up = on;
    if (dir === 'down') i.down = on;
    if (dir === 'left') i.left = on;
    if (dir === 'right') i.right = on;
  }

  static resetInput() {
    if (this.joystickKnob) this.joystickKnob.style.transform = '';
    if (this.joystickZone) this.joystickZone.classList.remove('active');
    this.joystickActive = false;
    this._setDir('up', false);
    this._setDir('down', false);
    this._setDir('left', false);
    this._setDir('right', false);
  }

  static setVisible(visible) {
    if (!this.isMobile || !this.el) return;
    this.el.classList.toggle('hidden', !visible);
    if (!visible) this.resetInput();
  }

  /* Nothing left to mirror on the touch HUD — weapons fire on their own. */
  static updateHud(player) {
    if (!this.isMobile || !player) return;
  }
}

/* ============================================================
   SPRITE FACTORY — original 16x16 anime-fantasy pixel art
   ============================================================ */
class SpriteFactory {
  static create(pixels, palette, scale = 3) {
    const size = 16;
    const c = document.createElement('canvas');
    c.width = size * scale;
    c.height = size * scale;
    const ctx = c.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = y * size + x;
        const ci = pixels[i];
        if (ci === 0) continue;
        ctx.fillStyle = palette[ci];
        ctx.fillRect(x * scale, y * scale, scale, scale);
      }
    }
    return c;
  }

  /* Procedural death frames: scatter, fall, ash-tint. */
  static makeDeathFrames(source, count = 3, dramatic = false) {
    const sw = source.width;
    const sh = source.height;
    const scratch = document.createElement('canvas');
    scratch.width = sw;
    scratch.height = sh;
    const sctx = scratch.getContext('2d');
    sctx.imageSmoothingEnabled = false;
    sctx.drawImage(source, 0, 0);
    const src = sctx.getImageData(0, 0, sw, sh).data;
    const frames = [];
    const hash = (x, y, s) => {
      let n = x * 374761393 + y * 668265263 + s * 1274126177;
      n = (n ^ (n >> 13)) * 1274126177;
      return ((n ^ (n >> 16)) >>> 0) / 4294967296;
    };

    for (let f = 0; f < count; f++) {
      const t = count <= 1 ? 1 : f / (count - 1);
      const c = document.createElement('canvas');
      c.width = sw;
      c.height = sh;
      const ctx = c.getContext('2d');
      ctx.imageSmoothingEnabled = false;
      const out = ctx.createImageData(sw, sh);
      const fall = t * sh * (dramatic ? 0.55 : 0.42);
      const spread = t * (dramatic ? 22 : 9);
      const dissolve = t * (dramatic ? 0.78 : 0.68);

      for (let y = 0; y < sh; y++) {
        for (let x = 0; x < sw; x++) {
          const i = (y * sw + x) * 4;
          if (src[i + 3] < 12) continue;
          if (hash(x, y, f + 3) < dissolve) continue;

          const cx = sw * 0.5;
          const cy = sh * 0.5;
          const dx = x - cx;
          const dy = y - cy;
          const jx = (hash(x, y, 1) * 2 - 1) * spread;
          const jy = hash(x, y, 2) * fall * 0.35;
          let nx = Math.round(x + dx * t * (dramatic ? 0.45 : 0.3) + jx);
          let ny = Math.round(y + fall + Math.abs(dx) * t * 0.12 + jy);
          if (nx < 0 || ny < 0 || nx >= sw || ny >= sh) continue;

          const oi = (ny * sw + nx) * 4;
          const ash = dramatic ? 55 * t : 28 * t;
          out.data[oi] = Math.min(255, src[i] * (1 - t * 0.55) + ash);
          out.data[oi + 1] = src[i + 1] * (1 - t * 0.78);
          out.data[oi + 2] = src[i + 2] * (1 - t * 0.82);
          out.data[oi + 3] = src[i + 3] * (1 - t * 0.88);

          // Extra debris flecks on later frames
          if (dramatic && t > 0.35 && hash(x, y, 9) > 0.82) {
            const fx = Math.max(0, Math.min(sw - 1, nx + Math.round((hash(x, y, 4) - 0.5) * 10)));
            const fy = Math.max(0, Math.min(sh - 1, ny + Math.round(hash(x, y, 5) * 8)));
            const fi = (fy * sw + fx) * 4;
            out.data[fi] = 90;
            out.data[fi + 1] = 40;
            out.data[fi + 2] = 30;
            out.data[fi + 3] = Math.floor(180 * (1 - t));
          }
        }
      }
      ctx.putImageData(out, 0, 0);
      frames.push(c);
    }
    return frames;
  }

  static player() {
    // Hero mage-knight — teal cloak, gold trim, bright hair
    const p = [
      '#0000','#1a1a2e','#2d5a4a','#3dff9a','#ffd93d','#ffeaa7',
      '#c0392b','#e74c3c','#3498db','#fff','#5dade2','#27ae60'
    ];
    const px = [
      0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,
      0,0,0,0,1,5,5,5,5,5,5,1,0,0,0,0,
      0,0,0,1,5,5,5,5,5,5,5,5,1,0,0,0,
      0,0,0,1,5,5,4,5,5,4,5,5,1,0,0,0,
      0,0,0,1,5,9,9,9,9,9,9,5,1,0,0,0,
      0,0,0,0,1,9,1,9,9,1,9,1,0,0,0,0,
      0,0,0,0,1,9,9,9,9,9,9,1,0,0,0,0,
      0,0,0,0,0,1,6,6,6,6,1,0,0,0,0,0,
      0,0,0,1,3,3,3,3,3,3,3,3,1,0,0,0,
      0,0,1,3,3,3,4,3,3,4,3,3,3,1,0,0,
      0,0,1,3,3,3,3,3,3,3,3,3,3,1,0,0,
      0,0,1,2,3,3,3,3,3,3,3,3,2,1,0,0,
      0,0,0,1,2,2,1,1,1,1,2,2,1,0,0,0,
      0,0,0,0,1,1,8,0,0,8,1,1,0,0,0,0,
      0,0,0,0,1,8,8,0,0,8,8,1,0,0,0,0,
      0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0
    ];
    return this.create(px, p);
  }

  /* All mob sprites face RIGHT by default; runtime flips with `facing`. */

  static slime() {
    // Front blob — two eyes; does not flip toward the player
    const p = ['#0000','#0d3d1a','#1a8f3a','#3dff6a','#a8ffc0','#fff','#1a5a2a'];
    const px = [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,
      0,0,0,0,0,1,2,3,3,2,1,0,0,0,0,0,
      0,0,0,0,1,2,3,3,3,3,2,1,0,0,0,0,
      0,0,0,1,2,3,4,3,3,4,3,2,1,0,0,0,
      0,0,1,2,5,5,3,3,3,3,5,5,2,1,0,0,
      0,0,1,2,1,5,3,3,3,3,1,5,2,1,0,0,
      0,1,2,3,3,3,3,3,3,3,3,3,3,2,1,0,
      0,1,2,3,3,3,3,3,3,3,3,3,3,2,1,0,
      0,1,6,2,3,3,3,3,3,3,3,3,2,6,1,0,
      0,0,1,6,2,2,3,3,3,3,2,2,6,1,0,0,
      0,0,0,1,6,6,2,2,2,2,6,6,1,0,0,0,
      0,0,0,0,1,1,6,6,6,6,1,1,0,0,0,0,
      0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p);
  }

  static skeleton() {
    // Side bone archer — clear skull 💀 + bow aimed right
    // 0=clear 1=outline 2=bone 3=shade 4=socket/black 5=eye glow 6=bow string 7=bow wood
    const p = ['#0000','#1a1a1a','#f0ebe0','#c8c0b0','#2a2420','#ff4444','#a8a8a8','#8b5a2b'];
    const px = [
      0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,
      0,0,0,0,1,2,2,2,2,2,1,0,7,0,0,0,
      0,0,0,0,1,2,4,2,4,2,1,0,7,0,0,0,
      0,0,0,0,1,2,5,2,5,2,1,0,7,0,0,0,
      0,0,0,0,0,1,2,4,2,1,0,0,7,0,0,0,
      0,0,0,0,0,1,2,2,2,1,1,7,6,6,0,0,
      0,0,0,0,0,1,4,2,4,1,2,1,0,7,0,0,
      0,0,0,0,0,0,1,3,1,0,1,0,0,7,0,0,
      0,0,0,0,0,1,2,2,2,2,1,0,0,7,0,0,
      0,0,0,0,1,2,1,2,2,1,0,0,0,7,0,0,
      0,0,0,0,1,2,0,1,1,0,0,0,7,0,0,0,
      0,0,0,0,1,3,0,0,0,0,0,0,7,0,0,0,
      0,0,0,0,1,2,1,0,1,2,1,0,0,0,0,0,
      0,0,0,0,1,2,1,0,1,2,1,0,0,0,0,0,
      0,0,0,0,1,3,1,0,1,3,1,0,0,0,0,0,
      0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0
    ];
    return this.create(px, p);
  }

  static zombie() {
    // Side shambler — two distinct green arms + hands stretched forward
    // 0=clear 1=outline 2=body 3=lite green hand 4=dark cloth 5=(unused) 6=shade 7=eyes 8=teeth
    const p = ['#0000','#1a2a1a','#4a7a3a','#6aaa4a','#3a5a2a','#c09060','#2a4a2a','#ff6666','#ddd'];
    const px = [
      0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,1,2,2,2,1,0,0,0,0,0,0,
      0,0,0,0,0,1,7,2,7,1,0,0,0,0,0,0,
      0,0,0,0,0,1,2,2,2,1,0,0,0,0,0,0,
      0,0,0,0,0,0,1,8,8,1,0,0,0,0,0,0,
      0,0,0,0,0,0,1,2,2,1,2,2,2,3,3,1,
      0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,1,
      0,0,0,0,0,1,2,2,2,2,2,2,2,3,3,1,
      0,0,0,0,1,2,2,2,2,2,1,0,0,3,3,1,
      0,0,0,0,1,2,2,2,2,2,1,0,0,0,0,0,
      0,0,0,0,1,6,2,2,2,6,1,0,0,0,0,0,
      0,0,0,0,0,1,6,1,6,1,0,0,0,0,0,0,
      0,0,0,0,0,1,4,0,4,1,0,0,0,0,0,0,
      0,0,0,0,0,1,4,0,4,1,0,0,0,0,0,0,
      0,0,0,0,0,1,6,0,6,1,0,0,0,0,0,0,
      0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0
    ];
    return this.create(px, p);
  }

  static bomber() {
    // Side goblin sprinting right holding a black round bomb
    // 0=clear 1=outline 2=dark red 3=skin 4=highlight 5=fuse spark 6=legs 7=eye 8=bomb black
    const p = ['#0000','#1a0a0a','#8b0000','#ff2222','#ff6666','#ffaa00','#333','#fff','#0a0a0a'];
    const px = [
      0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,
      0,0,0,0,0,0,0,1,1,1,0,1,8,1,0,0,
      0,0,0,0,0,0,1,2,2,2,1,8,8,8,1,0,
      0,0,0,0,0,0,1,3,7,3,1,8,8,8,1,0,
      0,0,0,0,0,0,1,3,3,3,1,8,8,8,1,0,
      0,0,0,0,0,1,2,3,3,3,2,1,8,1,0,0,
      0,0,0,0,1,2,3,3,4,3,3,2,1,0,0,0,
      0,0,0,0,1,2,3,3,3,3,2,1,0,0,0,0,
      0,0,0,0,0,1,6,2,2,6,1,0,0,0,0,0,
      0,0,0,0,0,0,1,6,6,1,0,0,0,0,0,0,
      0,0,0,0,0,0,1,3,3,1,0,0,0,0,0,0,
      0,0,0,0,0,1,2,1,1,2,1,0,0,0,0,0,
      0,0,0,0,0,1,2,1,0,1,2,1,0,0,0,0,
      0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p);
  }

  static mage() {
    // Side dark mage — staff aimed right
    const p = ['#0000','#1a0a2a','#4a2080','#7a40c0','#aa70ff','#ffd700','#fff','#e0c0ff','#2a1050'];
    const px = [
      0,0,0,0,0,0,0,5,5,0,0,0,0,5,0,0,
      0,0,0,0,0,0,5,5,6,5,0,0,0,5,0,0,
      0,0,0,0,0,0,1,2,2,1,0,0,0,5,0,0,
      0,0,0,0,0,1,2,4,6,2,1,0,0,5,0,0,
      0,0,0,0,0,1,2,4,4,2,1,0,0,5,0,0,
      0,0,0,0,0,0,1,7,7,1,0,0,0,5,0,0,
      0,0,0,0,0,1,2,2,2,2,1,1,1,5,0,0,
      0,0,0,0,1,2,3,3,3,3,2,1,0,5,0,0,
      0,0,0,0,1,2,3,3,4,3,2,1,0,5,0,0,
      0,0,0,0,1,8,2,3,3,2,8,1,0,5,0,0,
      0,0,0,0,0,1,8,2,2,8,1,0,0,5,0,0,
      0,0,0,0,0,0,1,1,1,1,0,0,0,5,0,0,
      0,0,0,0,0,0,1,2,0,2,1,0,0,5,0,0,
      0,0,0,0,0,0,1,2,0,2,1,0,0,1,0,0,
      0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p);
  }

  static mageCast() {
    // Side cast — arms + staff raised toward the right
    const p = ['#0000','#1a0a2a','#4a2080','#7a40c0','#aa70ff','#ffd700','#fff','#e0c0ff','#2a1050'];
    const px = [
      0,0,0,0,0,0,0,5,5,0,0,0,6,5,0,0,
      0,0,0,0,0,0,5,5,6,5,0,0,3,5,0,0,
      0,0,0,0,0,0,1,2,2,1,0,3,3,5,0,0,
      0,0,0,0,0,1,2,4,6,2,1,3,0,5,0,0,
      0,0,0,0,0,1,2,4,4,2,1,0,0,5,0,0,
      0,0,0,0,0,0,1,7,7,1,0,0,0,5,0,0,
      0,0,0,0,0,1,2,2,2,2,1,0,0,5,0,0,
      0,0,0,0,1,2,3,3,3,3,2,1,0,5,0,0,
      0,0,0,0,1,2,3,3,4,3,2,1,0,5,0,0,
      0,0,0,0,1,8,2,3,3,2,8,1,0,5,0,0,
      0,0,0,0,0,1,8,2,2,8,1,0,0,5,0,0,
      0,0,0,0,0,0,1,1,1,1,0,0,0,5,0,0,
      0,0,0,0,0,0,1,2,0,2,1,0,0,5,0,0,
      0,0,0,0,0,0,1,2,0,2,1,0,0,1,0,0,
      0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p);
  }

  static robot() {
    // Side war automaton — bulky, visor facing right
    const p = ['#0000','#1a1a22','#5a6472','#8a94a2','#b8c2d0','#ff3b3b','#ffcc00','#2a3038'];
    const px = [
      0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,
      0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,
      0,0,0,0,1,3,3,3,3,3,3,1,0,0,0,0,
      0,0,0,0,1,3,3,5,5,5,3,1,0,0,0,0,
      0,0,0,0,1,3,3,3,3,3,3,1,0,0,0,0,
      0,0,0,0,1,2,2,6,6,2,2,1,0,0,0,0,
      0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,
      0,0,1,3,2,3,3,3,3,3,2,3,3,1,0,0,
      0,0,1,2,2,3,4,4,4,3,2,2,2,1,0,0,
      0,0,0,1,1,2,3,3,3,2,1,1,1,0,0,0,
      0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,
      0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,
      0,0,0,0,1,3,1,0,0,1,3,1,0,0,0,0,
      0,0,0,0,1,2,1,0,0,1,2,1,0,0,0,0,
      0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0
    ];
    return this.create(px, p, 6);
  }

  static wolf() {
    // White wolf — side profile facing right, bushy tail + all 4 legs
    // 0=clear 1=outline 2=dark 3=mid fur 4=white 5=eye 6=nose/mouth 7=paw 8=belly
    const p = ['#0000','#2a2e38','#6a7280','#c8d0dc','#f4f7fb','#ff4444','#1a1d24','#4a505c','#e8edf4'];
    const px = [
      0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,
      1,1,0,0,0,0,0,0,0,1,3,1,3,1,0,0,
      1,3,1,0,0,0,0,0,1,4,4,3,4,3,1,0,
      0,1,3,1,0,0,0,1,4,4,5,4,4,4,4,1,
      0,1,3,3,1,0,1,3,4,4,4,4,4,6,6,1,
      0,0,1,3,3,1,3,3,4,4,4,4,4,4,1,0,
      0,0,1,3,3,3,3,3,3,4,4,4,4,1,0,0,
      0,1,2,3,3,3,3,3,3,3,3,3,1,0,0,0,
      0,1,2,8,8,3,3,3,3,3,8,8,1,0,0,0,
      0,0,1,1,3,1,3,1,1,3,1,3,1,0,0,0,
      0,0,0,1,2,0,1,2,0,1,2,0,1,2,0,0,
      0,0,0,1,2,0,1,2,0,1,2,0,1,2,0,0,
      0,0,0,1,7,0,1,7,0,1,7,0,1,7,0,0,
      0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p);
  }

  static priest() {
    // Side zealot — halo + staff held toward the right
    const p = ['#0000','#3a3020','#ffffff','#f0e6c8','#ffd700','#8b6914','#e8c060','#7a6a40'];
    const px = [
      0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,
      0,0,0,0,0,0,4,4,4,0,0,0,0,4,0,0,
      0,0,0,0,0,0,1,1,1,0,0,0,0,4,0,0,
      0,0,0,0,0,1,3,3,3,1,0,0,0,4,0,0,
      0,0,0,0,0,1,1,3,1,1,0,0,0,4,0,0,
      0,0,0,0,0,1,3,3,3,1,0,0,0,4,0,0,
      0,0,0,0,0,0,1,2,2,1,0,1,1,4,0,0,
      0,0,0,0,0,1,2,2,2,2,1,1,0,4,0,0,
      0,0,0,0,1,2,2,4,4,2,2,1,0,4,0,0,
      0,0,0,0,1,2,2,2,4,2,2,1,0,4,0,0,
      0,0,0,0,1,7,2,4,4,2,7,1,0,4,0,0,
      0,0,0,0,0,1,7,2,2,7,1,0,0,4,0,0,
      0,0,0,0,0,0,1,6,6,1,0,0,0,4,0,0,
      0,0,0,0,0,0,1,2,0,2,1,0,0,1,0,0,
      0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p, 4.5);
  }

  static fireball() {
    const p = ['#0000','#5a1000','#c03000','#ff6a00','#ffb400','#fff0a0'];
    const px = [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,
      0,0,0,0,0,0,2,3,3,2,0,0,0,0,0,0,
      0,0,0,0,0,2,3,4,4,3,2,0,0,0,0,0,
      0,0,0,0,2,3,4,5,5,4,3,2,0,0,0,0,
      0,0,0,2,3,4,5,5,5,5,4,3,2,0,0,0,
      0,0,0,2,3,4,5,5,5,5,4,3,2,0,0,0,
      0,0,0,2,3,4,4,5,5,4,4,3,2,0,0,0,
      0,0,0,0,2,3,4,4,4,4,3,2,0,0,0,0,
      0,0,0,0,0,2,3,3,3,3,2,0,0,0,0,0,
      0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,
      0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p, 2);
  }

  /* Renders `draw` at 1:1 pixel units, then nearest-neighbour upscales. */
  static _pixelate(w, h, scale, draw) {
    const src = document.createElement('canvas');
    src.width = w;
    src.height = h;
    draw(src.getContext('2d'));
    const out = document.createElement('canvas');
    out.width = w * scale;
    out.height = h * scale;
    const octx = out.getContext('2d');
    octx.imageSmoothingEnabled = false;
    octx.drawImage(src, 0, 0, out.width, out.height);
    return out;
  }

  /* Boss dragons — image walk cycles (crimson / void / bone / ember) */
  static DRAGON_VARIANTS = ['crimson', 'void', 'bone', 'ember'];
  static DRAGON_WALK_FRAMES = 8;

  static loadImageCanvas(src) {
    const cache = window.__ASSET_CACHE__;
    if (cache && cache[src]) {
      return Promise.resolve(cache[src]);
    }
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement('canvas');
        c.width = img.width;
        c.height = img.height;
        const ctx = c.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0);
        if (window.__ASSET_CACHE__) window.__ASSET_CACHE__[src] = c;
        resolve(c);
      };
      img.onerror = () => reject(new Error('Failed to load ' + src));
      img.src = src;
    });
  }

  static async loadDragons() {
    const dragons = {};
    for (const v of SpriteFactory.DRAGON_VARIANTS) {
      const walk = [];
      for (let i = 0; i < SpriteFactory.DRAGON_WALK_FRAMES; i++) {
        walk.push(await SpriteFactory.loadImageCanvas(`assets/dragons/${v}_w${i}.png`));
      }
      const still = await SpriteFactory.loadImageCanvas(`assets/dragons/${v}_still.png`);
      dragons[v] = { walk, still };
    }
    return dragons;
  }

  /* Alien saucer — 2 tiles wide, top-down (no facing flip) */
  static ufo() {
    return this._pixelate(32, 16, 6, (g) => {
      const ell = (x, y, rx, ry, color) => {
        g.fillStyle = color;
        g.beginPath();
        g.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
        g.fill();
      };
      // Glass dome + pilot (centered)
      ell(16, 6, 8, 6, '#9fe8ff');
      ell(16, 6, 6, 4, '#5ac8e8');
      g.fillStyle = '#7dff9a';
      g.fillRect(14, 4, 4, 4);
      g.fillStyle = '#0d2014';
      g.fillRect(14, 5, 1, 2);
      g.fillRect(17, 5, 1, 2);
      // Hull
      ell(16, 10, 15, 4, '#b8c2d0');
      ell(16, 11, 12, 3, '#6a7484');
      ell(16, 9, 13, 2, '#e4ecf6');
      // Rim lights
      const lights = ['#ff4d6d', '#ffd23d', '#7dff9a', '#4ac8ff', '#c86dff'];
      lights.forEach((c, i) => {
        g.fillStyle = c;
        g.fillRect(4 + i * 6, 11, 2, 2);
      });
      // Tractor emitter
      g.fillStyle = '#3dffd0';
      g.fillRect(15, 13, 2, 2);
    });
  }

  static chickenLeg() {
    const p = ['#0000', '#3a2010', '#6b3a18', '#a05828', '#d08040', '#f0a858', '#f5deb3', '#fff'];
    const px = [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,
      0,0,0,0,0,1,2,3,3,2,1,0,0,0,0,0,
      0,0,0,0,1,2,3,4,4,3,2,1,0,0,0,0,
      0,0,0,1,2,3,4,5,5,4,3,2,1,0,0,0,
      0,0,0,1,2,3,4,5,6,4,3,2,1,0,0,0,
      0,0,0,0,1,2,3,4,4,3,2,1,0,0,0,0,
      0,0,0,0,0,1,2,3,3,2,1,0,0,0,0,0,
      0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,
      0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,7,7,0,0,0,0,0,0,0,
      0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,
      0,0,0,0,0,0,0,7,7,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p);
  }

  static chest(tier) {
    const pals = {
      common: ['#0000','#3a2a10','#8b6914','#c9a227','#e8d48b','#5a4010','#fff'],
      rare:   ['#0000','#0a1a3a','#1a4a8a','#4a90ff','#a0c8ff','#0a2a5a','#fff'],
      epic:   ['#0000','#2a0a3a','#6a20a0','#c040ff','#e8a0ff','#1a0530','#ffd700']
    };
    const p = pals[tier];
    const px = [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,
      0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,
      0,0,1,2,3,3,3,3,3,3,3,3,2,1,0,0,
      0,0,1,2,3,3,4,4,4,4,3,3,2,1,0,0,
      0,0,1,2,2,2,2,4,4,2,2,2,2,1,0,0,
      0,1,1,1,1,1,1,5,5,1,1,1,1,1,1,0,
      0,1,2,2,2,2,2,5,5,2,2,2,2,2,1,0,
      0,1,2,3,3,3,3,3,3,3,3,3,3,2,1,0,
      0,1,2,3,3,3,3,3,3,3,3,3,3,2,1,0,
      0,1,2,3,3,3,3,3,3,3,3,3,3,2,1,0,
      0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0,
      0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p);
  }

  static bullet() {
    const p = ['#0000','#1a4a8a','#4a90ff','#a0d0ff','#fff'];
    const px = [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,
      0,0,0,0,0,1,2,3,3,2,1,0,0,0,0,0,
      0,0,0,0,1,2,3,4,4,3,2,1,0,0,0,0,
      0,0,0,0,1,2,3,4,4,3,2,1,0,0,0,0,
      0,0,0,0,0,1,2,3,3,2,1,0,0,0,0,0,
      0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,
      0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p, 2);
  }

  static arrow() {
    const p = ['#0000','#3a2a10','#8b6914','#c9a227','#5a4010','#aaa'];
    const c = document.createElement('canvas');
    c.width = 16; c.height = 8;
    const ctx = c.getContext('2d');
    ctx.fillStyle = p[2];
    ctx.fillRect(2, 3, 10, 2);
    ctx.fillStyle = p[5];
    ctx.beginPath();
    ctx.moveTo(12, 0); ctx.lineTo(16, 4); ctx.lineTo(12, 8);
    ctx.fill();
    ctx.fillStyle = p[1];
    ctx.fillRect(0, 2, 2, 1);
    ctx.fillRect(0, 5, 2, 1);
    return c;
  }

  static flower(variant) {
    const pals = [
      ['#0000','#2a6a20','#4aaa30','#ff6688','#ffaabb','#fff'],
      ['#0000','#2a6a20','#4aaa30','#ffaa22','#ffcc66','#fff'],
      ['#0000','#2a6a20','#4aaa30','#6688ff','#aaccff','#fff']
    ];
    const p = pals[variant % 3];
    const px = [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,
      0,0,0,0,0,3,4,4,3,0,0,0,0,0,0,0,
      0,0,0,0,3,4,5,5,4,3,0,0,0,0,0,0,
      0,0,0,0,0,3,4,4,3,0,0,0,0,0,0,0,
      0,0,0,0,0,0,3,1,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,2,1,2,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p, 2);
  }

  static stone() {
    const p = ['#0000','#3a3a3a','#6a6a6a','#9a9a9a','#2a2a2a'];
    const px = [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,1,2,3,2,1,0,0,0,0,0,0,
      0,0,0,0,1,2,3,3,3,2,1,0,0,0,0,0,
      0,0,0,0,1,2,3,3,2,4,1,0,0,0,0,0,
      0,0,0,0,0,1,4,4,4,1,0,0,0,0,0,0,
      0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p, 2);
  }

  static plant() {
    const p = ['#0000','#1a5a10','#2a8a20','#4aba30'];
    const px = [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,3,2,3,0,0,0,0,0,0,0,
      0,0,0,0,0,2,2,1,2,2,0,0,0,0,0,0,
      0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    return this.create(px, p, 2);
  }
}

/* ============================================================
   ICON FACTORY — 16x16 pixel icons for every stat + gold
   ============================================================ */
class IconFactory {
  static defs = {
    gold: {
      p: ['#0000','#5a4010','#8b6914','#daa520','#ffd700','#fff8c8'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,
        0,0,0,1,1,2,4,4,2,1,1,0,0,0,0,0,
        0,0,1,2,4,4,5,5,4,4,2,1,0,0,0,0,
        0,1,2,4,4,2,2,2,2,4,4,2,1,0,0,0,
        0,1,2,4,4,2,4,4,2,4,4,2,1,0,0,0,
        0,1,2,4,4,2,4,2,2,4,4,2,1,0,0,0,
        0,1,2,4,4,2,4,4,2,4,4,2,1,0,0,0,
        0,1,2,4,4,2,2,2,2,4,4,2,1,0,0,0,
        0,0,1,2,4,4,4,4,4,4,2,1,0,0,0,0,
        0,0,0,1,1,2,3,3,2,1,1,0,0,0,0,0,
        0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    moveSpeed: {
      p: ['#0000','#0d3d1a','#3dff9a','#a8ffc0'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,
        0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,0,
        0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,
        0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,
        0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,
        0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,
        0,2,2,0,0,0,2,2,0,0,0,2,2,0,0,0,
        0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    maxHealth: {
      p: ['#0000','#4a0a12','#c0392b','#e74c3c','#ff9a8a'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,
        0,0,1,4,4,3,1,0,1,3,3,3,1,0,0,0,
        0,1,4,4,3,3,3,1,3,3,3,3,3,1,0,0,
        0,1,4,3,3,3,3,3,3,3,3,3,2,1,0,0,
        0,1,3,3,3,3,3,3,3,3,3,2,2,1,0,0,
        0,1,3,3,3,3,3,3,3,3,2,2,2,1,0,0,
        0,0,1,3,3,3,3,3,3,2,2,2,1,0,0,0,
        0,0,0,1,3,3,3,3,2,2,2,1,0,0,0,0,
        0,0,0,0,1,3,3,2,2,2,1,0,0,0,0,0,
        0,0,0,0,0,1,3,2,2,1,0,0,0,0,0,0,
        0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    maxShield: {
      p: ['#0000','#0a2a4a','#2e86c1','#5dade2','#aed6f1'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
        0,1,4,4,3,3,3,3,3,3,3,2,2,1,0,0,
        0,1,4,3,3,3,3,3,3,3,3,2,2,1,0,0,
        0,1,3,3,3,3,3,3,3,3,3,2,2,1,0,0,
        0,1,3,3,3,3,3,3,3,3,3,2,2,1,0,0,
        0,1,3,3,3,3,3,3,3,3,3,2,2,1,0,0,
        0,0,1,3,3,3,3,3,3,3,3,2,1,0,0,0,
        0,0,1,3,3,3,3,3,3,3,3,2,1,0,0,0,
        0,0,0,1,3,3,3,3,3,3,2,1,0,0,0,0,
        0,0,0,0,1,3,3,3,3,2,1,0,0,0,0,0,
        0,0,0,0,0,1,3,3,2,1,0,0,0,0,0,0,
        0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    attack: {
      p: ['#0000','#2a2a2a','#c0c8d4','#f0f4fa','#8b6914','#ffd700'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,
        0,0,0,0,0,0,0,0,0,0,1,3,3,1,0,0,
        0,0,0,0,0,0,0,0,0,1,3,3,1,1,0,0,
        0,0,0,0,0,0,0,0,1,3,3,1,0,0,0,0,
        0,0,0,0,0,0,0,1,3,3,1,0,0,0,0,0,
        0,0,0,0,0,0,1,3,3,1,0,0,0,0,0,0,
        0,0,0,0,0,1,3,3,1,0,0,0,0,0,0,0,
        0,0,0,0,1,3,2,1,0,0,0,0,0,0,0,0,
        0,0,1,5,5,5,5,5,1,0,0,0,0,0,0,0,
        0,0,1,5,4,1,4,5,1,0,0,0,0,0,0,0,
        0,0,0,1,1,4,4,1,1,0,0,0,0,0,0,0,
        0,0,0,0,1,4,4,1,0,0,0,0,0,0,0,0,
        0,0,0,1,4,4,4,4,1,0,0,0,0,0,0,0,
        0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    attackSpeed: {
      p: ['#0000','#2a2a2a','#c0c8d4','#f0f4fa','#ffd700','#fff3a0'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,
        0,0,0,0,0,0,0,0,0,0,1,3,3,1,0,0,
        0,0,0,0,0,0,0,0,0,1,3,3,1,1,0,0,
        0,4,4,4,0,0,0,0,1,3,3,1,0,0,0,0,
        0,0,0,0,0,0,0,1,3,3,1,0,0,0,0,0,
        4,4,4,4,4,0,1,3,3,1,0,0,0,0,0,0,
        0,0,0,0,0,1,3,3,1,0,0,0,0,0,0,0,
        0,4,4,4,1,3,2,1,0,0,0,0,0,0,0,0,
        0,0,1,5,5,5,5,5,1,0,0,0,0,0,0,0,
        0,0,1,5,4,1,4,5,1,0,0,0,0,0,0,0,
        0,0,0,1,1,4,4,1,1,0,0,0,0,0,0,0,
        0,0,0,0,1,4,4,1,0,0,0,0,0,0,0,0,
        0,0,0,1,4,4,4,4,1,0,0,0,0,0,0,0,
        0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    bulletCount: {
      p: ['#0000','#0a2a4a','#4a90ff','#a0d0ff','#fff'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,0,
        0,0,4,4,4,0,4,4,4,0,4,4,4,0,0,0,
        0,0,3,2,3,0,3,2,3,0,3,2,3,0,0,0,
        0,0,3,2,3,0,3,2,3,0,3,2,3,0,0,0,
        0,0,3,2,3,0,3,2,3,0,3,2,3,0,0,0,
        0,0,3,2,3,0,3,2,3,0,3,2,3,0,0,0,
        0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    bulletSpeed: {
      p: ['#0000','#0a2a4a','#4a90ff','#a0d0ff','#fff','#7dff9a'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,
        0,5,5,5,5,0,0,0,1,3,2,2,1,0,0,0,
        0,0,0,0,0,0,0,1,3,2,2,2,4,1,0,0,
        0,5,5,5,5,5,5,1,3,2,2,2,4,1,0,0,
        0,0,0,0,0,0,0,1,3,2,2,2,4,1,0,0,
        0,5,5,5,5,0,0,0,1,3,2,2,1,0,0,0,
        0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    weaponRadius: {
      p: ['#0000','#1a3a2a','#3a8a5a','#7dff9a','#c8f5d0','#ffe080'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,
        0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,
        0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,
        0,0,2,0,0,0,3,3,3,3,0,0,0,2,0,0,
        0,0,2,0,0,3,0,0,0,0,3,0,0,2,0,0,
        0,0,2,0,0,3,0,5,5,0,3,0,0,2,0,0,
        0,0,2,0,0,3,0,5,5,0,3,0,0,2,0,0,
        0,0,2,0,0,3,0,0,0,0,3,0,0,2,0,0,
        0,0,2,0,0,0,3,3,3,3,0,0,0,2,0,0,
        0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,
        0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,
        0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    curse: {
      p: ['#0000','#1a0a12','#4a2030','#e8e0d8','#c8b8a8','#8a2030'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,
        0,0,0,0,1,3,3,3,3,3,3,1,0,0,0,0,
        0,0,0,1,3,3,3,3,3,3,3,3,1,0,0,0,
        0,0,0,1,3,2,2,3,3,2,2,3,1,0,0,0,
        0,0,0,1,3,2,1,3,3,1,2,3,1,0,0,0,
        0,0,0,1,3,3,3,3,3,3,3,3,1,0,0,0,
        0,0,0,0,1,3,3,5,5,3,3,1,0,0,0,0,
        0,0,0,0,0,1,3,3,3,3,1,0,0,0,0,0,
        0,0,0,0,0,1,4,3,3,4,1,0,0,0,0,0,
        0,0,0,0,0,1,3,1,1,3,1,0,0,0,0,0,
        0,0,0,0,0,0,1,3,3,1,0,0,0,0,0,0,
        0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    critChance: {
      p: ['#0000','#7a3a00','#ff8c00','#ffd23d','#fff3a0'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,
        0,0,2,0,0,0,2,3,2,0,0,0,2,0,0,0,
        0,0,0,2,0,0,2,3,2,0,0,2,0,0,0,0,
        0,0,0,0,2,2,3,4,3,2,2,0,0,0,0,0,
        0,3,3,3,3,3,4,4,4,3,3,3,3,0,0,0,
        0,0,0,0,2,2,3,4,3,2,2,0,0,0,0,0,
        0,0,0,2,0,0,2,3,2,0,0,2,0,0,0,0,
        0,0,2,0,0,0,2,3,2,0,0,0,2,0,0,0,
        0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    critDamage: {
      p: ['#0000','#5a0a00','#ff3b1a','#ff8c3a','#ffd23d'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,
        0,0,0,2,0,0,2,3,2,0,0,2,0,0,0,0,
        0,0,0,0,2,0,3,3,3,0,2,0,0,0,0,0,
        0,0,2,0,0,3,3,4,3,3,0,0,2,0,0,0,
        0,0,0,0,3,3,4,4,4,3,3,0,0,0,0,0,
        0,2,2,3,3,4,4,4,4,4,3,3,2,2,0,0,
        0,0,0,0,3,3,4,4,4,3,3,0,0,0,0,0,
        0,0,2,0,0,3,3,4,3,3,0,0,2,0,0,0,
        0,0,0,0,2,0,3,3,3,0,2,0,0,0,0,0,
        0,0,0,2,0,0,2,3,2,0,0,2,0,0,0,0,
        0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    energyRegen: {
      p: ['#0000','#7a5a00','#f1c40f','#ffe066','#fff8c8'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,
        0,0,0,0,0,0,0,1,3,3,1,0,0,0,0,0,
        0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,0,
        0,0,0,0,0,1,3,3,2,1,0,0,0,0,0,0,
        0,0,0,0,1,3,3,2,1,1,1,1,0,0,0,0,
        0,0,0,1,3,3,2,3,3,3,3,1,0,0,0,0,
        0,0,0,1,2,2,2,2,2,3,1,0,0,0,0,0,
        0,0,0,1,1,1,1,1,2,3,1,0,0,0,0,0,
        0,0,0,0,0,0,1,3,3,1,0,0,0,0,0,0,
        0,0,0,0,0,1,3,3,1,0,0,0,0,0,0,0,
        0,0,0,0,1,3,3,1,0,0,0,0,0,0,0,0,
        0,0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,
        0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    shieldRegen: {
      p: ['#0000','#0a2a4a','#2e86c1','#5dade2','#7dff9a'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
        0,1,3,3,3,3,3,3,3,3,3,2,2,1,0,0,
        0,1,3,3,3,3,4,4,3,3,3,2,2,1,0,0,
        0,1,3,3,3,3,4,4,3,3,3,2,2,1,0,0,
        0,1,3,3,4,4,4,4,4,4,3,2,2,1,0,0,
        0,1,3,3,4,4,4,4,4,4,3,2,2,1,0,0,
        0,0,1,3,3,3,4,4,3,3,3,2,1,0,0,0,
        0,0,1,3,3,3,4,4,3,3,3,2,1,0,0,0,
        0,0,0,1,3,3,3,3,3,3,2,1,0,0,0,0,
        0,0,0,0,1,3,3,3,3,2,1,0,0,0,0,0,
        0,0,0,0,0,1,3,3,2,1,0,0,0,0,0,0,
        0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    expMultiplier: {
      p: ['#0000','#5a4a00','#9b59b6','#c39bd3','#ffd700'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,
        0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,
        0,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,
        0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,
        0,0,0,4,4,4,4,4,4,4,4,0,0,0,0,0,
        0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,
        0,0,0,4,4,4,4,4,4,4,4,0,0,0,0,0,
        0,0,0,4,4,4,0,0,4,4,4,0,0,0,0,0,
        0,0,4,4,0,0,0,0,0,4,4,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    luck: {
      p: ['#0000','#1a5a10','#2ecc71','#7dff9a','#ffd700'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,3,3,0,0,0,0,3,3,0,0,0,0,
        0,0,0,3,2,2,3,0,0,3,2,2,3,0,0,0,
        0,0,3,2,2,2,2,3,3,2,2,2,2,3,0,0,
        0,0,3,2,2,2,2,2,2,2,2,2,2,3,0,0,
        0,0,0,3,2,2,2,2,2,2,2,2,3,0,0,0,
        0,0,0,0,3,2,2,2,2,2,2,3,0,0,0,0,
        0,0,0,3,2,2,2,2,2,2,2,2,3,0,0,0,
        0,0,3,2,2,2,2,2,2,2,2,2,2,3,0,0,
        0,0,3,2,2,2,2,3,3,2,2,2,2,3,0,0,
        0,0,0,3,2,2,3,1,0,3,2,2,3,0,0,0,
        0,0,0,0,3,3,0,1,1,0,3,3,0,0,0,0,
        0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    weaponSlots: {
      p: ['#0000','#3a2040','#c040ff','#e8a0ff','#ffd700','#fff'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,
        0,0,1,2,2,1,0,0,0,1,2,2,1,0,0,0,
        0,0,1,2,2,1,0,0,0,1,2,2,1,0,0,0,
        0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,
        0,0,0,0,0,4,5,5,4,0,0,0,0,0,0,0,
        0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,
        0,0,1,3,3,1,0,0,0,1,3,3,1,0,0,0,
        0,0,1,3,3,1,0,0,0,1,3,3,1,0,0,0,
        0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    },
    statSlots: {
      p: ['#0000','#0a3a2a','#1a6a4a','#7dff9a','#ffd700','#fff'],
      px: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
        0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,
        0,0,1,2,3,3,2,2,2,2,3,3,2,1,0,0,
        0,0,1,2,3,3,2,4,4,2,3,3,2,1,0,0,
        0,0,1,2,2,2,2,4,4,2,2,2,2,1,0,0,
        0,0,1,2,2,2,2,4,4,2,2,2,2,1,0,0,
        0,0,1,2,3,3,2,4,4,2,3,3,2,1,0,0,
        0,0,1,2,3,3,2,2,2,2,3,3,2,1,0,0,
        0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,
        0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
        0,0,0,0,0,0,0,5,5,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,5,5,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]
    }
  };

  static keys() {
    return Object.keys(this.defs);
  }

  static build() {
    const out = {};
    for (const key of this.keys()) {
      const d = this.defs[key];
      out['icon' + key.charAt(0).toUpperCase() + key.slice(1)] = SpriteFactory.create(d.px, d.p, 2);
    }
    return out;
  }

  static spriteKey(statKey) {
    return 'icon' + statKey.charAt(0).toUpperCase() + statKey.slice(1);
  }
}

/* ============================================================
   OBJECT POOL
   ============================================================ */
class Pool {
  constructor(factory, size = 64) {
    this.factory = factory;
    this.items = [];
    for (let i = 0; i < size; i++) this.items.push(factory());
  }
  acquire() {
    for (let i = 0; i < this.items.length; i++) {
      if (!this.items[i].active) return this.items[i];
    }
    const extra = this.factory();
    this.items.push(extra);
    return extra;
  }
  forEachActive(fn) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].active) fn(this.items[i], i);
    }
  }
  countActive() {
    let n = 0;
    for (let i = 0; i < this.items.length; i++) if (this.items[i].active) n++;
    return n;
  }
}

/* ============================================================
   CAMERA
   ============================================================ */
class Camera {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = 800;
    this.h = 600;
  }
  follow(target) {
    this.x = target.x - this.w * 0.5;
    this.y = target.y - this.h * 0.5;
  }
  resize(w, h) {
    this.w = w;
    this.h = h;
  }
  worldToScreen(wx, wy) {
    return { x: wx - this.x, y: wy - this.y };
  }
  screenToWorld(sx, sy) {
    return { x: sx + this.x, y: sy + this.y };
  }
}

/* ============================================================
   PARTICLE
   ============================================================ */
class Particle {
  constructor() {
    this.active = false;
    this.x = 0; this.y = 0;
    this.vx = 0; this.vy = 0;
    this.life = 0; this.maxLife = 0;
    this.color = '#fff';
    this.size = 3;
    this.gravity = 0;
  }
  spawn(x, y, vx, vy, life, color, size, gravity = 0) {
    this.active = true;
    this.x = x; this.y = y;
    this.vx = vx; this.vy = vy;
    this.life = life; this.maxLife = life;
    this.color = color; this.size = size;
    this.gravity = gravity;
  }
  update(dt) {
    if (!this.active) return;
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.vy += this.gravity * dt;
    this.life -= dt;
    if (this.life <= 0) this.active = false;
  }
  draw(ctx, cam) {
    if (!this.active) return;
    const a = this.life / this.maxLife;
    ctx.globalAlpha = a;
    ctx.fillStyle = this.color;
    const s = cam.worldToScreen(this.x, this.y);
    ctx.fillRect(s.x - this.size * 0.5, s.y - this.size * 0.5, this.size, this.size);
    ctx.globalAlpha = 1;
  }
}

/* ============================================================
   GOLD COIN — flies to HUD gold counter (screen space)
   ============================================================ */
class GoldCoin {
  constructor() {
    this.active = false;
    this.x = 0; this.y = 0;
    this.vx = 0; this.vy = 0;
    this.phase = 'burst';
    this.timer = 0;
    this.targetX = 72;
    this.targetY = 24;
    this.size = 8;
    this.rotation = 0;
    this.spin = 0;
    this.flip = 0;
    this.flipSpeed = 10;
  }

  spawn(sx, sy, tx, ty) {
    this.active = true;
    this.x = sx;
    this.y = sy;
    this.targetX = tx;
    this.targetY = ty;
    const a = Math.random() * Math.PI * 2;
    const sp = 50 + Math.random() * 90;
    this.vx = Math.cos(a) * sp;
    this.vy = Math.sin(a) * sp;
    this.phase = 'burst';
    this.timer = 0.12 + Math.random() * 0.18;
    this.rotation = Math.random() * Math.PI * 2;
    this.spin = (Math.random() - 0.5) * 10;
    this.flip = Math.random() * Math.PI * 2;
    this.flipSpeed = 9 + Math.random() * 8;
    this.size = 7 + Math.random() * 5;
  }

  update(dt, ui) {
    if (!this.active) return;
    this.rotation += this.spin * dt;
    this.flip += this.flipSpeed * dt;

    if (this.phase === 'burst') {
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      this.vx *= Math.pow(0.9, dt * 60);
      this.vy *= Math.pow(0.9, dt * 60);
      this.timer -= dt;
      if (this.timer <= 0) this.phase = 'fly';
      return;
    }

    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    if (dist < 10) {
      this.active = false;
      if (ui) ui.pulseGold();
      return;
    }
    const accel = 320 + dist * 3;
    this.x += (dx / dist) * accel * dt;
    this.y += (dy / dist) * accel * dt;
    this.flipSpeed += dt * 4;
  }

  _drawMilledRing(ctx, r, radius, lineW) {
    const segments = 48;
    ctx.strokeStyle = '#9a7518';
    ctx.lineWidth = lineW;
    for (let i = 0; i < segments; i++) {
      if (i % 2) continue;
      const a0 = (i / segments) * Math.PI * 2;
      const a1 = ((i + 1) / segments) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(0, 0, radius, a0, a1);
      ctx.stroke();
    }
  }

  _drawCoinEdge(ctx, r) {
    const w = r;
    const h = r * 1.2;
    const edgeGrad = ctx.createLinearGradient(0, -h, 0, h);
    edgeGrad.addColorStop(0, '#5a4010');
    edgeGrad.addColorStop(0.12, '#8b6914');
    edgeGrad.addColorStop(0.35, '#ffd700');
    edgeGrad.addColorStop(0.5, '#fff8c8');
    edgeGrad.addColorStop(0.65, '#ffd700');
    edgeGrad.addColorStop(0.88, '#8b6914');
    edgeGrad.addColorStop(1, '#4a3510');

    ctx.fillStyle = edgeGrad;
    ctx.beginPath();
    ctx.ellipse(0, 0, w, h, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(0,0,0,0.25)';
    ctx.lineWidth = 0.6;
    const ridges = Math.max(6, Math.floor(h * 1.2));
    for (let i = 0; i < ridges; i++) {
      const y = -h + (i / ridges) * h * 2;
      ctx.beginPath();
      ctx.moveTo(-w * 0.92, y);
      ctx.lineTo(w * 0.92, y);
      ctx.stroke();
    }

    const capGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, w);
    capGrad.addColorStop(0, '#ffe066');
    capGrad.addColorStop(1, '#9a7518');
    ctx.fillStyle = capGrad;
    ctx.beginPath();
    ctx.ellipse(0, -h * 0.98, w * 0.96, w * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, h * 0.98, w * 0.96, w * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  _drawCoinFace(ctx, r) {
    const faceGrad = ctx.createRadialGradient(-r * 0.38, -r * 0.42, r * 0.08, 0, 0, r);
    faceGrad.addColorStop(0, '#fffde8');
    faceGrad.addColorStop(0.3, '#ffe566');
    faceGrad.addColorStop(0.62, '#daa520');
    faceGrad.addColorStop(1, '#7a5a10');
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fillStyle = faceGrad;
    ctx.fill();

    this._drawMilledRing(ctx, r, r - r * 0.1, r * 0.11);

    ctx.strokeStyle = '#6a5010';
    ctx.lineWidth = r * 0.05;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.78, 0, Math.PI * 2);
    ctx.stroke();

    const innerGrad = ctx.createRadialGradient(-r * 0.15, -r * 0.18, 0, 0, 0, r * 0.72);
    innerGrad.addColorStop(0, '#ffee99');
    innerGrad.addColorStop(0.55, '#e8b020');
    innerGrad.addColorStop(1, '#a07810');
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.74, 0, Math.PI * 2);
    ctx.fillStyle = innerGrad;
    ctx.fill();

    ctx.strokeStyle = '#8b6914';
    ctx.lineWidth = r * 0.04;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.74, 0, Math.PI * 2);
    ctx.stroke();

    const fontSize = Math.max(6, r * 1.05);
    ctx.font = `bold ${fontSize}px Georgia, serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(60,40,5,0.45)';
    ctx.fillText('G', r * 0.06, r * 0.08);
    ctx.fillStyle = '#7a5a08';
    ctx.fillText('G', r * 0.03, r * 0.04);
    const textGrad = ctx.createLinearGradient(0, -fontSize * 0.5, 0, fontSize * 0.5);
    textGrad.addColorStop(0, '#fff8d0');
    textGrad.addColorStop(0.5, '#ffd700');
    textGrad.addColorStop(1, '#b8860b');
    ctx.fillStyle = textGrad;
    ctx.fillText('G', 0, 0);

    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.beginPath();
    ctx.ellipse(-r * 0.34, -r * 0.38, r * 0.26, r * 0.14, -0.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = r * 0.03;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.55, -1.2, 0.2);
    ctx.stroke();
  }

  draw(ctx) {
    if (!this.active) return;
    const r = this.size;
    const squash = Math.max(0.1, Math.abs(Math.cos(this.flip)));
    const edgeView = squash < 0.38;

    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.fillStyle = 'rgba(0,0,0,0.22)';
    ctx.beginPath();
    ctx.ellipse(2, r * 0.85, r * squash * 0.9, r * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.rotate(this.rotation);
    ctx.scale(squash, 1);

    if (edgeView) {
      this._drawCoinEdge(ctx, r);
    } else {
      this._drawCoinFace(ctx, r);
    }

    ctx.restore();
  }
}

/* ============================================================
   PROJECTILE
   ============================================================ */
class Projectile {
  constructor() {
    this.active = false;
    this._resetFields();
  }

  /* Weapon-driven projectiles carry a lot of optional behaviour, so every
     field is cleared on spawn — pooled objects must never leak old flags. */
  _resetFields() {
    this.x = 0; this.y = 0;
    this.vx = 0; this.vy = 0;
    this.damage = 0;
    this.isCrit = false;
    this.radius = 6;
    this.life = 0;
    this.maxLife = 1;
    this.fromPlayer = true;
    this.sprite = null;
    this.angle = 0;
    this.spinAngle = 0;
    this.piercing = 0;
    this.pierceLeft = 0;
    this.hitSet = null;
    this.color = null;
    this.kind = 'bullet';
    this.onHit = null;
    this.weaponOpts = null;
    this.spin = false;
    this.returning = false;
    this.home = false;
    this.lockTarget = null;
    this.keepFlying = false;
    this.canChain = true;
    this.trail = false;
    this.split = false;
    this.explosive = false;
    this.ownerWeapon = null;
    this.arc = null;
    this.meta = null;
    this._reflected = false;
  }

  spawn(x, y, vx, vy, damage, isCrit, fromPlayer, sprite, life = 2) {
    this._resetFields();
    this.active = true;
    this.x = x; this.y = y;
    this.vx = vx; this.vy = vy;
    this.damage = damage;
    this.isCrit = isCrit;
    this.fromPlayer = fromPlayer;
    this.sprite = sprite;
    this.life = life;
    this.maxLife = life;
    this.angle = Math.atan2(vy, vx);
    this.radius = fromPlayer ? 6 : 5;
  }

  speed() {
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  }

  _steerTowards(tx, ty, accel, dt) {
    const dx = tx - this.x;
    const dy = ty - this.y;
    const d = Math.sqrt(dx * dx + dy * dy) || 1;
    const spd = this.speed() || 1;
    this.vx += (dx / d) * spd * accel * dt;
    this.vy += (dy / d) * spd * accel * dt;
    const cur = this.speed() || 1;
    this.vx = (this.vx / cur) * spd;
    this.vy = (this.vy / cur) * spd;
    return d;
  }

  update(dt, game) {
    if (!this.active) return;
    if (this.spin) this.spinAngle += dt * 16;
    const m = this.meta;
    const player = game ? game.player : null;

    if (m && player && (this.kind === 'boomerang' || m.returns)) {
      if (!this.returning && this.life <= this.maxLife * 0.5) {
        this.returning = true;
        // A returning throw is allowed to hit everything a second time
        if (this.hitSet) this.hitSet.clear();
      }
      if (m.hover && !this.returning) {
        m.hoverT = (m.hoverT || 0) + dt;
        if (m.hoverT > 0.3) {
          const drag = Math.pow(0.12, dt);
          this.vx *= drag;
          this.vy *= drag;
        }
      }
      if (this.returning) {
        const orbit = m.extraOrbit ? 1.2 : 0;
        const d = this._steerTowards(player.x, player.y, 5 + orbit, dt);
        if (d < 26) {
          this.active = false;
          return;
        }
      }
      if (m.pull && game.spatial) {
        const basePull = m.collidePull ? 120 : 90;
        const pullR = typeof weaponScaleRadius === 'function'
          ? weaponScaleRadius(basePull, game.player) : basePull;
        game.spatial.queryCircle(this.x, this.y, pullR, (e) => {
          if (StatusEffects.isControlImmune(e)) return;
          const dx = this.x - e.x;
          const dy = this.y - e.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = m.collidePull ? 90 : 55;
          e.x += (dx / d) * force * dt;
          e.y += (dy / d) * force * dt;
        }, 12);
      }
    }

    // A locked shot chases one specific enemy until it dies or the shot expires
    if (this.lockTarget) {
      const t = this.lockTarget;
      if (!t.active || t.dying) {
        this.lockTarget = null;
      } else {
        const dx = t.x - this.x;
        const dy = t.y - this.y;
        const d = Math.sqrt(dx * dx + dy * dy) || 1;
        if (d < 80) {
          // Close range: aim straight in, otherwise a fast shot can orbit its mark
          const spd = this.speed() || 1;
          this.vx = (dx / d) * spd;
          this.vy = (dy / d) * spd;
        } else {
          this._steerTowards(t.x, t.y, 8, dt);
        }
      }
    }

    if (!this.lockTarget && this.home && game && game.spatial) {
      const t = game.spatial.nearest(this.x, this.y, 280);
      if (t) this._steerTowards(t.x, t.y, 3, dt);
    }

    this.x += this.vx * dt;
    this.y += this.vy * dt;
    if (this.vx !== 0 || this.vy !== 0) this.angle = Math.atan2(this.vy, this.vx);

    if (this.trail && game && game.effects && Math.random() < 0.3) {
      const trailR = typeof weaponScaleRadius === 'function'
        ? weaponScaleRadius(16, game.player) : 16;
      game.effects.spawnField('trail', this.x, this.y, trailR, 1.1, Math.max(3, this.damage * 0.15),
        '#f84', null, EffectCaps.MAX_TRAILS);
    }

    this.life -= dt;
    if (this.life <= 0) this.active = false;
  }

  draw(ctx, cam) {
    if (!this.active) return;
    const s = cam.worldToScreen(this.x, this.y);
    if (this.color) {
      this._drawColored(ctx, s);
      return;
    }
    if (this.sprite) {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(this.angle);
      const sw = this.sprite.width;
      const sh = this.sprite.height;
      ctx.drawImage(this.sprite, -sw * 0.5, -sh * 0.5);
      ctx.restore();
      if (this.isCrit) {
        ctx.fillStyle = 'rgba(255,200,50,0.4)';
        ctx.beginPath();
        ctx.arc(s.x, s.y, 10, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      ctx.fillStyle = this.fromPlayer ? '#4af' : '#f44';
      ctx.beginPath();
      ctx.arc(s.x, s.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /* Weapon projectiles have no sprites — each kind gets its own vector look. */
  _drawColored(ctx, s) {
    const r = this.radius;
    ctx.save();
    ctx.translate(s.x, s.y);
    if (this.kind === 'boomerang') {
      ctx.rotate(this.spinAngle);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = Math.max(3, r * 0.5);
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(0, 0, r, -0.7, 2.3);
      ctx.stroke();
    } else if (this.kind === 'spear') {
      ctx.rotate(this.angle);
      ctx.fillStyle = this.color;
      ctx.fillRect(-r * 2.2, -r * 0.32, r * 3.2, r * 0.64);
      ctx.beginPath();
      ctx.moveTo(r * 1.0, -r * 0.8);
      ctx.lineTo(r * 2.2, 0);
      ctx.lineTo(r * 1.0, r * 0.8);
      ctx.closePath();
      ctx.fill();
    } else if (this.kind === 'shard') {
      ctx.rotate(this.angle);
      // Frosty comet tail
      ctx.fillStyle = 'rgba(150,225,255,0.28)';
      ctx.beginPath();
      ctx.moveTo(-r * 3.4, 0);
      ctx.lineTo(-r * 0.4, -r * 0.6);
      ctx.lineTo(-r * 0.4, r * 0.6);
      ctx.closePath();
      ctx.fill();
      // Ice shard body
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(r * 1.7, 0);
      ctx.lineTo(0, -r * 0.85);
      ctx.lineTo(-r * 1.1, 0);
      ctx.lineTo(0, r * 0.85);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.beginPath();
      ctx.moveTo(r * 0.8, 0);
      ctx.lineTo(0, -r * 0.34);
      ctx.lineTo(-r * 0.35, 0);
      ctx.lineTo(0, r * 0.34);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
    }
    if (this.isCrit) {
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = '#ffd23d';
      ctx.beginPath();
      ctx.arc(0, 0, r + 4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}

/* ============================================================
   AOE WARNING / DAMAGE ZONE (Mage)
   ============================================================ */
class AoEZone {
  constructor() {
    this.active = false;
    this.x = 0; this.y = 0;
    this.radius = 60;
    this.timer = 0;
    this.warnTime = 1.2;
    this.damageTime = 0.4;
    this.damage = 15;
    this.phase = 'warn'; // warn | damage
    this.damaged = false;
    this.kind = 'arcane'; // arcane | fire
    this.mode = 'hit';    // hit (single burst) | burn (damage over time)
    this.dps = 0;
    this.tickAccum = 0;
  }
  spawn(x, y, radius, damage, warnTime, kind = 'arcane', opts = {}) {
    this.active = true;
    this.x = x; this.y = y;
    this.radius = radius;
    this.damage = damage;
    this.warnTime = warnTime;
    this.timer = 0;
    this.phase = warnTime > 0 ? 'warn' : 'damage';
    this.damaged = false;
    this.kind = kind;
    this.mode = opts.mode || 'hit';
    this.damageTime = opts.duration || 0.35;
    this.dps = opts.dps || 0;
    this.tickAccum = 0;
  }
  update(dt, player, game) {
    if (!this.active) return;
    this.timer += dt;
    if (this.phase === 'warn') {
      if (this.timer >= this.warnTime) {
        this.phase = 'damage';
        this.timer = 0;
        this.damaged = false;
      }
      return;
    }
    if (this.mode === 'burn') {
      // Damage over time while the player stands in the flames
      const dx = player.x - this.x;
      const dy = player.y - this.y;
      if (dx * dx + dy * dy < this.radius * this.radius) {
        this.tickAccum += dt;
        if (this.tickAccum >= 0.4) {
          player.takeDamage(this.dps * this.tickAccum, game);
          this.tickAccum = 0;
        }
      } else {
        this.tickAccum = 0;
      }
      if (this.timer >= this.damageTime) this.active = false;
    } else {
      if (!this.damaged) {
        if (this.damage > 0) {
          const dx = player.x - this.x;
          const dy = player.y - this.y;
          if (dx * dx + dy * dy < this.radius * this.radius) {
            player.takeDamage(this.damage, game);
          }
        }
        this.damaged = true;
      }
      if (this.timer >= this.damageTime) this.active = false;
    }
  }
  draw(ctx, cam) {
    if (!this.active) return;
    const s = cam.worldToScreen(this.x, this.y);
    const fire = this.kind === 'fire';
    if (this.phase === 'warn') {
      const t = this.timer / this.warnTime;
      ctx.strokeStyle = fire
        ? `rgba(255,140,40,${0.35 + t * 0.5})`
        : `rgba(180,60,255,${0.3 + t * 0.5})`;
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.arc(s.x, s.y, this.radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = fire
        ? `rgba(255,110,20,${0.1 + t * 0.16})`
        : `rgba(180,60,255,${0.08 + t * 0.12})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, this.radius * t, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.mode === 'burn') {
      // Lingering flames — flicker and fade out near the end
      const remain = 1 - Math.min(1, this.timer / this.damageTime);
      const fade = Math.min(1, remain * 2.2);
      const flick = 0.82 + Math.sin(this.timer * 22) * 0.09 + Math.sin(this.timer * 7) * 0.05;
      const g = ctx.createRadialGradient(s.x, s.y, this.radius * 0.15, s.x, s.y, this.radius);
      g.addColorStop(0, `rgba(255,240,150,${0.5 * fade * flick})`);
      g.addColorStop(0.45, `rgba(255,120,20,${0.42 * fade * flick})`);
      g.addColorStop(1, `rgba(150,20,0,0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(s.x, s.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `rgba(255,180,60,${0.5 * fade})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(s.x, s.y, this.radius * (0.96 + Math.sin(this.timer * 12) * 0.03), 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.fillStyle = fire ? 'rgba(255,90,20,0.5)' : 'rgba(200,40,255,0.45)';
      ctx.beginPath();
      ctx.arc(s.x, s.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = fire ? '#ffd23d' : '#e0a0ff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(s.x, s.y, this.radius, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}

/* ============================================================
   FIREBALL — dragon shot that lands and ignites a fire zone
   ============================================================ */
class Fireball {
  constructor() {
    this.active = false;
    this.sx = 0; this.sy = 0; // launch (mouth) point
    this.tx = 0; this.ty = 0; // landing point
    this.x = 0; this.y = 0;   // current ground position
    this.damage = 20;
    this.radius = 60;
    this.spin = 0;
    this.t = 0;
    this.flightTime = 1;
    this.arcHeight = 0;
    this.height = 0;
    this.size = 26;
    this.trailCD = 0;
  }

  spawn(x, y, tx, ty, damage, radius) {
    this.active = true;
    this.sx = x; this.sy = y;
    this.x = x; this.y = y;
    this.tx = tx; this.ty = ty;
    this.damage = damage;
    this.radius = radius;
    this.spin = 0;
    this.t = 0;
    const dx = tx - x;
    const dy = ty - y;
    const d = Math.sqrt(dx * dx + dy * dy) || 1;
    this.flightTime = Math.max(0.6, Math.min(1.5, 0.55 + d * 0.0016));
    this.arcHeight = Math.min(260, 90 + d * 0.32);
    this.height = 0;
    this.size = 30;
    this.trailCD = 0;
  }

  update(dt, game) {
    if (!this.active) return;
    this.spin += dt * 9;
    this.t += dt;
    const p = Math.min(1, this.t / this.flightTime);
    this.x = this.sx + (this.tx - this.sx) * p;
    this.y = this.sy + (this.ty - this.sy) * p;
    // Parabolic visual height (peaks mid-flight)
    this.height = this.arcHeight * 4 * p * (1 - p);

    // Fiery trail while airborne
    this.trailCD -= dt;
    if (this.trailCD <= 0) {
      this.trailCD = 0.025;
      game.spawnEmber(this.x, this.y - this.height, this.size * 0.4);
    }

    if (p >= 1) {
      this.active = false;
      // Only deals damage where it lands — as a lingering flame patch (DoT)
      game.spawnFireZone(this.tx, this.ty, this.radius, this.damage);
      game.spawnFireBurst(this.tx, this.ty);
    }
  }

  _flame(ctx, x, y, r, spin) {
    const g = ctx.createRadialGradient(x, y, r * 0.12, x, y, r);
    g.addColorStop(0, 'rgba(255,255,220,0.95)');
    g.addColorStop(0.35, 'rgba(255,190,40,0.9)');
    g.addColorStop(0.7, 'rgba(255,90,10,0.75)');
    g.addColorStop(1, 'rgba(150,20,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    // Licking flame tongues
    ctx.fillStyle = 'rgba(255,150,30,0.6)';
    for (let i = 0; i < 6; i++) {
      const a = spin + i * (Math.PI / 3);
      const fr = r * (0.85 + Math.sin(spin * 3 + i) * 0.18);
      ctx.beginPath();
      ctx.arc(x + Math.cos(a) * fr * 0.7, y + Math.sin(a) * fr * 0.7, r * 0.34, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  draw(ctx, cam) {
    if (!this.active) return;
    const ground = cam.worldToScreen(this.x, this.y);
    const sx = ground.x;
    const sy = ground.y - this.height;
    const flick = 1 + Math.sin(this.spin * 5) * 0.08;
    const r = this.size * flick;

    // Target danger zone (shown from launch, fire-colored to match the projectile)
    const t = cam.worldToScreen(this.tx, this.ty);
    ctx.save();
    ctx.strokeStyle = 'rgba(255,140,40,0.85)';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 7]);
    ctx.beginPath();
    ctx.arc(t.x, t.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    const gz = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, this.radius);
    gz.addColorStop(0, 'rgba(255,110,20,0.22)');
    gz.addColorStop(1, 'rgba(255,110,20,0)');
    ctx.fillStyle = gz;
    ctx.beginPath();
    ctx.arc(t.x, t.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Ground shadow beneath the airborne fireball
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.28)';
    ctx.beginPath();
    ctx.ellipse(ground.x, ground.y, r * 0.7, r * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Big flamy projectile
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    this._flame(ctx, sx, sy, r * 1.15, this.spin);
    ctx.restore();
  }
}

/* ============================================================
   ENEMY
   ============================================================ */
class Enemy {
  static goldDrops = {
    slime: 1,
    zombie: 3,
    skeleton: 4,
    bomber: 8,
    mage: 6,
    wolf: 7,
    robot: 14,
    priest: 16,
    ufo: 45,
    dragon: 260
  };

  static PRIEST_HEAL_RADIUS = 150;
  static PRIEST_HEAL_RATE = 0.08; // fraction of target max HP restored per second
  static BUFF_GROWTH = 1 / 10;   // leftover size-buff decay (no longer applied by priests)
  static BUFF_DECAY = 1 / 7;
  static _uid = 0;

  static _getLevelMult(level) {
    if (level < 50) {
      if (level < 30) return 1;
      return 1 + (level - 29) * 0.02; // lv30→1.02 … lv49→1.4
    }
    if (level < 70) return 2;
    // 70+: +1× every 10 levels (lv70→3×, lv80→4×, lv90→5× …)
    return 2 + Math.ceil((level - 69) / 10);
  }

  /* Early runs should feel squishy so the shotgun clears packs quickly. */
  static earlyHpScale(level) {
    if (level <= 1) return 0.28;
    if (level <= 5) return 0.28 + (level - 1) * 0.06;
    if (level <= 15) return 0.52 + (level - 5) * 0.04;
    return 1;
  }

  constructor() {
    this.active = false;
    this.type = 'slime';
    this.x = 0; this.y = 0;
    this.vx = 0; this.vy = 0;
    this.hp = 1; this.maxHp = 1;
    this.speed = 40;
    this.radius = 14;
    this.damage = 10;
    this.sprite = null;
    this.flash = 0;
    this.timer = 0;
    this.state = 0;
    this.wanderAngle = 0;
    this.shootCD = 0;
    this.aoeCD = 0;
    this.jumping = false;
    this.jumpVy = 0;
    this.groundY = 0;
    this.contactCD = 0;
    this.goldDrop = 1;
    this.levelMult = 1;

    this.uid = 0;
    this.facing = 1;
    this.sprites = null;
    this.baseSprite = null;
    this.baseRadius = 14;
    this.baseMaxHp = 1;
    this.baseDamage = 10;
    this.animTime = 0;
    this.castAnim = 0;

    // Priest buff wiring
    this.buff = 0;
    this.buffSource = null;
    this.buffSourceUid = -1;
    this.buffTargets = [];
    this.retargetCD = 0;

    // UFO abduction
    this.grabCD = 0;
    this.carrying = false;
    this.carryTimer = 0;
    this.dropX = 0;
    this.dropY = 0;
    this.beamOn = false;
    this.beamTargetX = 0;
    this.beamTargetY = 0;

    // Death animation
    this.dying = false;
    this.deathTimer = 0;
    this.deathDuration = 0.36;
    this.deathFrame = 0;
    this.deathFrameCount = 3;
    this.deathSprites = null;
    this._lootGiven = false;
    this._lastFlapFrame = -1;
    this.headAngle = 0;
    this.volleyLeft = 0;
    this.volleyCD = 0;
    this.growlCD = 0;
    this.walkFrame = 0;
    this.dragonVariant = 'crimson';
    this.dodgeCD = 0;
    this.ghostTrail = [];
    this.baseSpeed = 40;
    StatusEffects.initEnemy(this);
  }

  spawn(type, x, y, sprites, difficulty, level = 1, variant = null) {
    this.active = true;
    this.type = type;
    this.uid = ++Enemy._uid;
    this.sprites = sprites;
    this.goldDrop = Enemy.goldDrops[type] || 1;
    this.x = x; this.y = y;
    this.vx = 0; this.vy = 0;
    this.flash = 0;
    this.timer = 0;
    this.state = 0;
    this.facing = 1;
    this.animTime = Math.random() * 4;
    this.castAnim = 0;
    this.wanderAngle = Math.random() * Math.PI * 2;
    this.shootCD = 1 + Math.random();
    this.aoeCD = 2 + Math.random() * 2;
    this.jumping = false;
    this.contactCD = 0;
    this.buff = 0;
    this.buffSource = null;
    this.buffSourceUid = -1;
    this.buffTargets.length = 0;
    this.retargetCD = 0;
    this.grabCD = 1.5;
    this.carrying = false;
    this.carryTimer = 0;
    this.beamOn = false;
    this.beamTargetX = 0;
    this.beamTargetY = 0;
    this.dying = false;
    this.deathTimer = 0;
    this.deathFrame = 0;
    this._lootGiven = false;
    this._lastFlapFrame = -1;
    this.headAngle = 0;
    this.volleyLeft = 0;
    this.volleyCD = 0;
    this.growlCD = 1.8 + Math.random() * 1.5;
    this.walkFrame = Math.random() * SpriteFactory.DRAGON_WALK_FRAMES;
    this.dragonVariant = 'crimson';
    this.dodgeCD = 0;
    this.ghostTrail.length = 0;
    const d = 1 + difficulty * 0.08;
    const lvMult = Enemy._getLevelMult(level);
    const hpScale = Enemy.earlyHpScale(level);
    const speedMult = 1 + (lvMult - 1) * 0.45;
    this.levelMult = lvMult;
    const curseMult = (typeof MetaProgression !== 'undefined')
      ? (1 + (MetaProgression.bonuses().curse || 0))
      : 1;

    switch (type) {
      case 'slime':
        this.hp = this.maxHp = Math.max(1, Math.floor(20 * d * lvMult * hpScale));
        this.speed = (35 + difficulty * 0.5) * speedMult;
        this.damage = (8 + difficulty * 0.3) * lvMult;
        this.radius = 16;
        this.sprite = sprites.slime;
        break;
      case 'zombie':
        this.hp = this.maxHp = Math.max(1, Math.floor(45 * d * lvMult * hpScale));
        this.speed = (62 + difficulty * 0.7) * speedMult;
        this.damage = (14 + difficulty * 0.4) * lvMult;
        this.radius = 15;
        this.sprite = sprites.zombie;
        break;
      case 'skeleton':
        this.hp = this.maxHp = Math.max(1, Math.floor(25 * d * lvMult * hpScale));
        this.speed = (50 + difficulty * 0.5) * speedMult;
        this.damage = (10 + difficulty * 0.3) * lvMult;
        this.radius = 14;
        this.sprite = sprites.skeleton;
        break;
      case 'bomber':
        this.hp = this.maxHp = 1;
        this.speed = (140 + difficulty * 1.5) * speedMult;
        this.damage = 9999;
        this.radius = 12;
        this.sprite = sprites.bomber;
        break;
      case 'mage':
        this.hp = this.maxHp = Math.max(1, Math.floor(40 * d * lvMult * hpScale));
        this.speed = (45 + difficulty * 0.4) * speedMult;
        this.damage = (18 + difficulty * 0.5) * lvMult;
        this.radius = 14;
        this.sprite = sprites.mage;
        break;
      case 'robot':
        this.hp = this.maxHp = Math.max(1, Math.floor(260 * d * lvMult * hpScale));
        this.speed = (46 + difficulty * 0.2) * speedMult;
        this.damage = (26 + difficulty * 0.6) * lvMult;
        this.radius = 40;
        this.sprite = sprites.robot;
        break;
      case 'wolf':
        this.hp = this.maxHp = Math.max(1, Math.floor(55 * d * lvMult * hpScale));
        this.speed = (155 + difficulty * 1.1) * speedMult;
        this.damage = (16 + difficulty * 0.45) * lvMult;
        this.radius = 15;
        this.sprite = sprites.wolf;
        break;
      case 'priest':
        this.hp = this.maxHp = Math.max(1, Math.floor(95 * d * lvMult * hpScale));
        this.speed = (58 + difficulty * 0.4) * speedMult;
        this.damage = (10 + difficulty * 0.3) * lvMult;
        this.radius = 23;
        this.sprite = sprites.priest;
        break;
      case 'ufo':
        this.hp = this.maxHp = Math.max(1, Math.floor(320 * d * lvMult * hpScale));
        this.speed = (125 + difficulty * 0.5) * speedMult;
        this.damage = (12 + difficulty * 0.3) * lvMult;
        this.radius = 60;
        this.sprite = sprites.ufo;
        break;
      case 'dragon':
        this.hp = this.maxHp = Math.max(1, Math.floor(4200 * d * lvMult * hpScale));
        this.speed = (58 + difficulty * 0.3) * speedMult;
        this.damage = (42 + difficulty * 0.9) * lvMult;
        this.radius = 150;
        this.dragonVariant = variant && SpriteFactory.DRAGON_VARIANTS.includes(variant)
          ? variant
          : SpriteFactory.DRAGON_VARIANTS[(Math.random() * SpriteFactory.DRAGON_VARIANTS.length) | 0];
        this.sprite = sprites.dragons[this.dragonVariant].walk[0];
        this.shootCD = 2;
        break;
    }
    if (curseMult !== 1 && this.type !== 'bomber') {
      this.maxHp = Math.max(1, Math.floor(this.maxHp * curseMult));
      this.hp = this.maxHp;
      this.damage *= curseMult;
    }
    this.baseSprite = this.sprite;
    this.baseMaxHp = this.maxHp;
    this.baseDamage = this.damage;
    this.baseRadius = this.radius;
    this.baseSpeed = this.speed;
    StatusEffects.initEnemy(this);
    if (type === 'dragon') {
      this.deathSprites = sprites.dragonDeaths[this.dragonVariant] || null;
      this.deathFrameCount = 10;
      this.deathDuration = 1.0;
    } else {
      const deathKey = type + 'Death';
      this.deathSprites = sprites[deathKey] || null;
      this.deathFrameCount = 3;
      this.deathDuration = 0.36;
    }
  }

  get buffMult() {
    return 1 + this.buff * 2; // full buff = 3× size
  }

  canBeBuffed() {
    return !this.dying && this.type !== 'priest' && this.type !== 'dragon' &&
      this.type !== 'ufo' && this.type !== 'bomber';
  }

  canBeHealedByPriest() {
    return !this.dying && this.type !== 'priest' && this.type !== 'dragon' &&
      this.hp < this.maxHp;
  }

  beginDeath() {
    if (this.dying) return false;
    this.dying = true;
    this.deathTimer = 0;
    this.deathFrame = 0;
    this.hp = 0;
    this.flash = 0;
    if (this.deathSprites && this.deathSprites[0]) this.sprite = this.deathSprites[0];
    if (this.type === 'dragon') SoundManager.dragonDeath();
    if (this.type === 'priest') {
      this.buffTargets.length = 0;
    }
    return true;
  }

  takeDamage(amount) {
    if (!this.active || this.dying) return false;
    this.hp -= amount * StatusEffects.damageMult(this);
    this.flash = 0.12;
    if (this.hp <= 0) {
      this.beginDeath();
      return true;
    }
    return false;
  }

  update(dt, player, game) {
    if (!this.active) return;

    if (this.dying) {
      this.deathTimer += dt;
      const pct = Math.min(1, this.deathTimer / this.deathDuration);
      this.deathFrame = Math.min(
        this.deathFrameCount - 1,
        Math.floor(pct * this.deathFrameCount)
      );
      if (this.deathSprites && this.deathSprites[this.deathFrame]) {
        this.sprite = this.deathSprites[this.deathFrame];
      }
      if (this.deathTimer >= this.deathDuration) this.active = false;
      return;
    }

    this.timer += dt;
    this.animTime += dt;
    if (this.flash > 0) this.flash -= dt;
    if (this.contactCD > 0) this.contactCD -= dt;
    if (this.castAnim > 0) this.castAnim -= dt;
    this._updateBuff(dt);

    // A solidly frozen enemy remains harmless for the entire frame, including
    // the frame in which its freeze timer reaches zero.
    const wasFullyFrozen = this.frozenT > 0;
    StatusEffects.tick(this, dt, game);
    if (!this.active || this.dying) return;
    if (wasFullyFrozen) {
      this.speed = 0;
      return;
    }
    // Freeze / stun / slow all funnel through one movement multiplier
    const moveFactor = StatusEffects.moveFactor(this);
    this.speed = this.baseSpeed * moveFactor;
    if (moveFactor <= 0) return;

    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const nx = dx / dist;
    const ny = dy / dist;
    // Side-facing sprites flip toward the player; slime/UFO stay fixed
    if (this.type !== 'ufo' && this.type !== 'slime') this.facing = nx >= 0 ? 1 : -1;

    // Test mode: stay planted, but still shoot / melee when the player is in range
    if (game && game.testMode) {
      this._updateTestAttacks(dt, nx, ny, dist, player, game);
      if (this.type === 'ufo' || this.type === 'priest') return;
      if (dist < this.radius + player.radius && this.contactCD <= 0) {
        if (this.type === 'bomber') {
          this.beginDeath();
          SoundManager.bomber();
          player.bomberHit(game);
          game.spawnExplosion(this.x, this.y);
          game._onEnemyKilled(this);
          return;
        }
        player.takeDamage(this.damage, game);
        this.contactCD = 0.6;
        if (this.type === 'wolf') {
          player.applySlow(0.45, 0.5);
          SoundManager.wolfBite();
        }
      }
      return;
    }

    switch (this.type) {
      case 'slime':
        this._updateSlime(dt, nx, ny, dist);
        break;
      case 'zombie':
        this._updateZombie(dt, nx, ny);
        break;
      case 'skeleton':
        this._updateSkeleton(dt, nx, ny, dist, player, game);
        break;
      case 'bomber':
        this.x += nx * this.speed * dt;
        this.y += ny * this.speed * dt;
        break;
      case 'mage':
        this._updateMage(dt, nx, ny, dist, player, game);
        break;
      case 'robot':
        this._updateRobot(dt, nx, ny, player);
        break;
      case 'wolf':
        this._updateWolf(dt, nx, ny, game);
        break;
      case 'priest':
        this._updatePriest(dt, nx, ny, dist, game);
        break;
      case 'ufo':
        this._updateUfo(dt, nx, ny, dist, player, game);
        return;
      case 'dragon':
        this._updateDragon(dt, nx, ny, dist, player, game);
        break;
    }

    // Contact damage
    if (dist < this.radius + player.radius && this.contactCD <= 0) {
      if (this.type === 'bomber') {
        this.beginDeath();
        SoundManager.bomber();
        player.bomberHit(game);
        game.spawnExplosion(this.x, this.y);
        game._onEnemyKilled(this);
        return;
      }
      if (this.type === 'priest') return;
      player.takeDamage(this.damage, game);
      this.contactCD = 0.6;
      if (this.type === 'wolf') {
        player.applySlow(0.45, 0.5);
        SoundManager.wolfBite();
      }
    }
  }

  _updateTestAttacks(dt, nx, ny, dist, player, game) {
    switch (this.type) {
      case 'skeleton': {
        this.shootCD -= dt;
        if (this.shootCD <= 0 && dist < 400) {
          this.shootCD = 1.8 / Math.sqrt(this.levelMult || 1);
          const spd = 120 * (1 + ((this.levelMult || 1) - 1) * 0.25);
          game.spawnEnemyProjectile(this.x, this.y, nx * spd, ny * spd, this.damage * 0.7);
        }
        break;
      }
      case 'mage': {
        this.aoeCD -= dt;
        if (this.aoeCD <= 0 && dist < 420) {
          this.aoeCD = (2.5 + Math.random()) / Math.sqrt(this.levelMult || 1);
          this.castAnim = 0.6;
          const ox = player.x + (Math.random() - 0.5) * 80;
          const oy = player.y + (Math.random() - 0.5) * 80;
          game.spawnAoE(ox, oy, 55 + Math.random() * 25, this.damage, 1.0 + Math.random() * 0.4);
        }
        this.sprite = this.castAnim > 0 ? this.sprites.mageCast : this.sprites.mage;
        break;
      }
      case 'dragon': {
        // Test mode: loop full walk cycle in place so the animation is visible
        this._tickDragonWalk(dt, true);
        this._tickDragonGrowl(dt);
        this.shootCD -= dt;
        if (this.shootCD <= 0 && this.volleyLeft <= 0 && dist < 520) {
          this.shootCD = 3.4 / Math.sqrt(this.levelMult || 1);
          this.volleyLeft = 3;
          this.volleyCD = 0;
        }
        this._tickDragonVolley(dt, player, game);
        break;
      }
      case 'priest': {
        this._tickPriestHeal(dt, game);
        break;
      }
      case 'ufo': {
        SoundManager.ufoFly();
        this.beamOn = false;
        if (this.grabCD > 0) this.grabCD -= dt;
        const hDist = Math.abs(this.x - player.x);
        const near = dist < 140 && hDist < 36;
        if (near) {
          this.beamOn = true;
          this.beamTargetX = player.x;
          this.beamTargetY = player.y;
          if (this.grabCD <= 0) {
            this.grabCD = 2.2;
            SoundManager.ufoPull();
            player.takeDamage(this.damage, game);
            player.applySlow(0.55, 0.6);
          }
        }
        break;
      }
      // Melee types (slime/zombie/robot/wolf/bomber): contact handled by caller
      default:
        break;
    }
  }

  _updateBuff(dt) {
    const src = this.buffSource;
    const linked = !!src && src.active && src.uid === this.buffSourceUid && src.type === 'priest';
    if (!linked && src) {
      this.buffSource = null;
      this.buffSourceUid = -1;
    }
    const prev = this.buff;
    if (linked) this.buff = Math.min(1, this.buff + Enemy.BUFF_GROWTH * dt);
    else if (this.buff > 0) this.buff = Math.max(0, this.buff - Enemy.BUFF_DECAY * dt);
    if (this.buff === prev) return;

    const prevMult = 1 + prev * 2;
    const mult = 1 + this.buff * 2;
    this.maxHp = this.baseMaxHp * mult;
    const gained = this.baseMaxHp * (mult - prevMult);
    if (gained > 0) this.hp += gained;
    if (this.hp > this.maxHp) this.hp = this.maxHp;
    this.radius = this.baseRadius * mult;
    this.damage = this.baseDamage * (1 + this.buff * 2); // up to 3× damage
  }

  _updateSlime(dt, nx, ny, dist) {
    if (!this.jumping) {
      this.state += dt;
      if (this.state > 0.9) {
        this.jumping = true;
        this.state = 0;
        this.vx = nx * this.speed * 2.2;
        this.vy = ny * this.speed * 2.2;
        this.jumpVy = -120;
      }
    } else {
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      this.jumpVy += 400 * dt;
      this.state += dt;
      if (this.state > 0.45) {
        this.jumping = false;
        this.vx = 0; this.vy = 0;
        this.state = 0;
      }
    }
  }

  _updateZombie(dt, nx, ny) {
    this.state += dt;
    if (this.state > 0.4) {
      this.state = 0;
      this.wanderAngle = Math.atan2(ny, nx) + (Math.random() - 0.5) * 1.2;
    }
    this.x += Math.cos(this.wanderAngle) * this.speed * dt;
    this.y += Math.sin(this.wanderAngle) * this.speed * dt;
  }

  _updateRobot(dt, nx, ny, player) {
    // Never outruns the player, no matter how much it is scaled up
    const sp = Math.min(this.speed, player.stats.moveSpeed * 0.62);
    this.x += nx * sp * dt;
    this.y += ny * sp * dt;
  }

  _updateWolf(dt, nx, ny, game) {
    if (this.dodgeCD > 0) this.dodgeCD -= dt;
    for (let i = this.ghostTrail.length - 1; i >= 0; i--) {
      this.ghostTrail[i].life -= dt;
      if (this.ghostTrail[i].life <= 0) this.ghostTrail.splice(i, 1);
    }

    // Instant sidestep when a player bullet is closing in (1s cooldown)
    if (this.dodgeCD <= 0) {
      let best = null;
      let bestThreat = 0;
      const sense = 130;
      game.projPool.forEachActive((p) => {
        if (!p.fromPlayer) return;
        const dx = this.x - p.x;
        const dy = this.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 > sense * sense || d2 < 4) return;
        const dist = Math.sqrt(d2);
        const pv = Math.sqrt(p.vx * p.vx + p.vy * p.vy) || 1;
        const approach = (p.vx * dx + p.vy * dy) / (pv * dist);
        if (approach < 0.4) return;
        const threat = approach * (1 - dist / sense);
        if (threat > bestThreat) {
          bestThreat = threat;
          best = p;
        }
      });

      if (best) {
        const dx = this.x - best.x;
        const dy = this.y - best.y;
        const pv = Math.sqrt(best.vx * best.vx + best.vy * best.vy) || 1;
        const side = best.vx * dy - best.vy * dx >= 0 ? 1 : -1;
        const sx = (-best.vy / pv) * side;
        const sy = (best.vx / pv) * side;
        const shift = 78 + Math.random() * 22;
        const ox = this.x;
        const oy = this.y;
        this.x += sx * shift;
        this.y += sy * shift;
        this.dodgeCD = 1;
        this.ghostTrail.push(
          { x: ox, y: oy, life: 0.34, maxLife: 0.34, facing: this.facing },
          { x: ox + sx * shift * 0.35, y: oy + sy * shift * 0.35, life: 0.24, maxLife: 0.24, facing: this.facing },
          { x: ox + sx * shift * 0.7, y: oy + sy * shift * 0.7, life: 0.14, maxLife: 0.14, facing: this.facing }
        );
      }
    }

    this.x += nx * this.speed * dt;
    this.y += ny * this.speed * dt;
  }

  _updatePriest(dt, nx, ny, dist, game) {
    const preferred = 340;
    if (dist < preferred - 50) {
      this.x -= nx * this.speed * dt;
      this.y -= ny * this.speed * dt;
    } else if (dist > preferred + 80) {
      this.x += nx * this.speed * 0.7 * dt;
      this.y += ny * this.speed * 0.7 * dt;
    } else {
      this.x += -ny * this.speed * 0.4 * dt;
      this.y += nx * this.speed * 0.4 * dt;
    }
    this._tickPriestHeal(dt, game);
  }

  _tickPriestHeal(dt, game) {
    if (!game || !game.spatial) return;
    const r = Enemy.PRIEST_HEAL_RADIUS;
    const rate = Enemy.PRIEST_HEAL_RATE * dt;
    game.spatial.queryCircle(this.x, this.y, r, (e) => {
      if (e === this || !e.canBeHealedByPriest()) return;
      if (game.isPriestHealBlocked(e)) return;
      e.hp = Math.min(e.maxHp, e.hp + e.maxHp * rate);
    }, 40);
  }

  _tickDragonWalk(dt, moving) {
    const frames = this.sprites.dragons[this.dragonVariant].walk;
    const n = frames.length;
    // Eight genuinely different leg poses; Test mode also passes moving=true.
    this.walkFrame += dt * (moving ? 8 : 3);
    if (this.walkFrame >= n) this.walkFrame -= n;
    this.sprite = frames[Math.floor(this.walkFrame) % n];
  }

  _tickDragonGrowl(dt) {
    this.growlCD -= dt;
    if (this.growlCD > 0) return;
    this.growlCD = 4.5 + Math.random() * 2.5;
    SoundManager.dragonRoar();
  }

  _tickDragonVolley(dt, player, game) {
    if (this.volleyLeft <= 0) return;
    this.volleyCD -= dt;
    if (this.volleyCD > 0) return;
    this.volleyCD = 0.1;
    this.volleyLeft--;
    SoundManager.dragonFireball();
    const mouthX = this.x + this.facing * 280;
    const mouthY = this.y - 24;
    const spread = 130;
    game.spawnFireball(
      mouthX, mouthY,
      player.x + (Math.random() - 0.5) * spread,
      player.y + (Math.random() - 0.5) * spread,
      this.damage * 0.8
    );
  }

  _updateDragon(dt, nx, ny, dist, player, game) {
    let moving = false;
    if (dist > 300) {
      this.x += nx * this.speed * dt;
      this.y += ny * this.speed * dt;
      moving = true;
    } else if (dist < 190) {
      this.x -= nx * this.speed * 0.7 * dt;
      this.y -= ny * this.speed * 0.7 * dt;
      moving = true;
    } else {
      this.x += -ny * this.speed * 0.55 * dt;
      this.y += nx * this.speed * 0.55 * dt;
      moving = true;
    }
    this._tickDragonWalk(dt, moving);
    this._tickDragonGrowl(dt);

    this.shootCD -= dt;
    if (this.shootCD <= 0 && this.volleyLeft <= 0) {
      this.shootCD = 3.4 / Math.sqrt(this.levelMult || 1);
      this.volleyLeft = 3;
      this.volleyCD = 0;
    }
    this._tickDragonVolley(dt, player, game);
  }

  _updateUfo(dt, nx, ny, dist, player, game) {
    const HOVER = 78;
    SoundManager.ufoFly();
    this.beamOn = false;

    if (this.carrying) {
      this.carryTimer -= dt;
      const dx = this.dropX - this.x;
      const dy = this.dropY - this.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      this.x += (dx / d) * this.speed * 1.35 * dt;
      this.y += (dy / d) * this.speed * 1.35 * dt;
      // Keep player hanging below the saucer, never overlapping it
      player.x = this.x;
      player.y = this.y + HOVER;
      this.beamOn = true;
      this.beamTargetX = player.x;
      this.beamTargetY = player.y;
      if (this.carryTimer <= 0 || d < 26) this.releaseAbduction(player, game);
      return;
    }

    if (this.grabCD > 0) this.grabCD -= dt;

    // Orbit / approach a hover point ABOVE the player (y+ is down)
    const tx = player.x;
    const ty = player.y - HOVER;
    const adx = tx - this.x;
    const ady = ty - this.y;
    const ad = Math.sqrt(adx * adx + ady * ady) || 1;
    this.x += (adx / ad) * this.speed * dt;
    this.y += (ady / ad) * this.speed * dt;

    // V-beam when saucer is overhead and roughly aligned
    const above = this.y < player.y - 36;
    const hDist = Math.abs(this.x - player.x);
    const vDist = player.y - this.y;
    const beamHalf = 8 + Math.max(0, vDist) * 0.3;
    if (above && hDist < beamHalf && vDist > 40 && vDist < HOVER + 50) {
      this.beamOn = true;
      this.beamTargetX = player.x;
      this.beamTargetY = player.y;
      if (this.grabCD <= 0 && !player.carriedBy) {
        const spot = game.findEnemyCluster(this);
        this.carrying = true;
        this.carryTimer = 2.4;
        this.dropX = spot.x;
        this.dropY = spot.y - HOVER;
        player.carriedBy = this;
        SoundManager.ufoPull();
      }
    }
  }

  releaseAbduction(player, game) {
    if (!this.carrying) return;
    this.carrying = false;
    this.beamOn = false;
    this.grabCD = 6;
    if (player.carriedBy === this) player.carriedBy = null;
    player.x = this.x;
    player.y = this.y + 78;
    player.takeDamage(player.stats.maxHealth * 0.08);
    player.applySlow(0.55, 0.6);
    game.spawnExplosion(player.x, player.y);
  }

  _updateSkeleton(dt, nx, ny, dist, player, game) {
    const preferred = 220;
    if (dist < preferred - 30) {
      this.x -= nx * this.speed * dt;
      this.y -= ny * this.speed * dt;
    } else if (dist > preferred + 40) {
      this.x += nx * this.speed * 0.7 * dt;
      this.y += ny * this.speed * 0.7 * dt;
    } else {
      // strafe
      this.x += -ny * this.speed * 0.5 * dt;
      this.y += nx * this.speed * 0.5 * dt;
    }
    this.shootCD -= dt;
    if (this.shootCD <= 0 && dist < 400) {
      this.shootCD = 1.8 / Math.sqrt(this.levelMult || 1);
      const spd = 120 * (1 + ((this.levelMult || 1) - 1) * 0.25);
      game.spawnEnemyProjectile(this.x, this.y, nx * spd, ny * spd, this.damage * 0.7);
    }
  }

  _updateMage(dt, nx, ny, dist, player, game) {
    const preferred = 280;
    if (dist < preferred - 40) {
      this.x -= nx * this.speed * dt;
      this.y -= ny * this.speed * dt;
    } else if (dist > preferred + 50) {
      this.x += nx * this.speed * 0.6 * dt;
      this.y += ny * this.speed * 0.6 * dt;
    }
    this.aoeCD -= dt;
    if (this.aoeCD <= 0) {
      this.aoeCD = (2.5 + Math.random()) / Math.sqrt(this.levelMult || 1);
      this.castAnim = 0.6;
      const ox = player.x + (Math.random() - 0.5) * 80;
      const oy = player.y + (Math.random() - 0.5) * 80;
      game.spawnAoE(ox, oy, 55 + Math.random() * 25, this.damage, 1.0 + Math.random() * 0.4);
    }
    this.sprite = this.castAnim > 0 ? this.sprites.mageCast : this.sprites.mage;
  }

  _drawHealAura(ctx, cam, s) {
    const r = Enemy.PRIEST_HEAL_RADIUS;
    const pulse = 0.12 + Math.sin(this.timer * 3.2) * 0.05;
    ctx.save();
    ctx.beginPath();
    ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 236, 160, ${pulse * 0.55})`;
    ctx.fill();
    ctx.strokeStyle = `rgba(255, 230, 140, ${0.28 + pulse})`;
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.lineDashOffset = -this.timer * 18;
    ctx.stroke();
    ctx.setLineDash([]);
    const glow = ctx.createRadialGradient(s.x, s.y, r * 0.15, s.x, s.y, r);
    glow.addColorStop(0, `rgba(255, 250, 200, ${0.1 + pulse * 0.35})`);
    glow.addColorStop(1, 'rgba(255, 220, 120, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  _drawWolfGhosts(ctx, cam) {
    if (!this.sprite) return;
    const w = this.sprite.width * this.buffMult;
    const h = this.sprite.height * this.buffMult;
    for (const g of this.ghostTrail) {
      const gs = cam.worldToScreen(g.x, g.y);
      const t = Math.max(0, g.life / g.maxLife);
      ctx.save();
      ctx.globalAlpha = t * 0.4;
      ctx.translate(gs.x, gs.y);
      ctx.scale(g.facing, 1);
      ctx.drawImage(this.sprite, -w * 0.5, -h * 0.5, w, h);
      ctx.restore();
    }
  }

  draw(ctx, cam) {
    if (!this.active) return;
    const s = cam.worldToScreen(this.x, this.y);

    if (!this.dying && this.type === 'priest') {
      this._drawHealAura(ctx, cam, s);
    }

    if (!this.dying && this.type === 'wolf' && this.ghostTrail.length) {
      this._drawWolfGhosts(ctx, cam);
    }

    if (this.sprite) {
      const mult = this.dying ? Math.max(0.35, this.buffMult * (1 - this.deathTimer / this.deathDuration * 0.25)) : this.buffMult;
      const w = this.sprite.width * mult;
      const h = this.sprite.height * mult;
      let bob = 0;
      if (!this.dying) {
        bob = this.type === 'slime' && this.jumping ? -8 : Math.sin(this.timer * 6) * 1.5;
        if (this.type === 'ufo') bob = Math.sin(this.animTime * 5) * 4;
      } else {
        bob = this.deathTimer * (this.type === 'dragon' ? 18 : 10);
      }
      const drawMob = () => {
        ctx.translate(s.x, s.y + bob);
        if (this.type !== 'ufo' && this.type !== 'slime') ctx.scale(this.facing, 1);
        ctx.drawImage(this.sprite, -w * 0.5, -h * 0.5, w, h);
      };

      ctx.save();
      if (this.dying) {
        ctx.globalAlpha = Math.max(0.15, 1 - this.deathTimer / this.deathDuration * 0.85);
      } else if (this.flash > 0) {
        ctx.globalAlpha = 0.5;
      }
      drawMob();
      ctx.restore();

      if (!this.dying && this.buff > 0) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = 0.12 + this.buff * 0.3;
        drawMob();
        ctx.restore();

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, Math.max(w, h) * 0.6);
        glow.addColorStop(0, `rgba(255,245,200,${0.1 + this.buff * 0.18})`);
        glow.addColorStop(1, 'rgba(255,220,120,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(s.x, s.y, Math.max(w, h) * 0.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Solid freeze: light-blue ice sheet over the enemy
      if (!this.dying && this.frozenT > 0) {
        ctx.save();
        ctx.translate(s.x, s.y + bob);
        if (this.type !== 'ufo' && this.type !== 'slime') ctx.scale(this.facing, 1);
        const hw = w * 0.5;
        const hh = h * 0.5;
        const frost = ctx.createRadialGradient(0, 0, 2, 0, 0, Math.max(hw, hh) * 1.05);
        frost.addColorStop(0, 'rgba(220, 245, 255, 0.72)');
        frost.addColorStop(0.55, 'rgba(150, 215, 255, 0.45)');
        frost.addColorStop(1, 'rgba(120, 200, 255, 0)');
        ctx.fillStyle = frost;
        ctx.beginPath();
        ctx.ellipse(0, 0, hw * 0.95, hh * 0.98, 0, 0, Math.PI * 2);
        ctx.fill();
        // Foreground ice crystals
        ctx.fillStyle = 'rgba(190, 235, 255, 0.7)';
        ctx.strokeStyle = 'rgba(230, 250, 255, 0.95)';
        ctx.lineWidth = 1.4;
        const shards = [
          [-hw * 0.35, -hh * 0.45, 7],
          [hw * 0.28, -hh * 0.32, 6],
          [-hw * 0.1, hh * 0.05, 8],
          [hw * 0.32, hh * 0.22, 5],
          [-hw * 0.4, hh * 0.15, 5]
        ];
        for (const [sx, sy, sz] of shards) {
          ctx.beginPath();
          ctx.moveTo(sx, sy - sz);
          ctx.lineTo(sx + sz * 0.55, sy);
          ctx.lineTo(sx, sy + sz * 0.75);
          ctx.lineTo(sx - sz * 0.55, sy);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    if (!this.dying && this.type === 'ufo' && this.beamOn) {
      const pt = cam.worldToScreen(this.beamTargetX, this.beamTargetY);
      const topY = s.y + 12;
      ctx.save();
      ctx.globalAlpha = 0.55;
      ctx.fillStyle = 'rgba(61,255,160,0.35)';
      ctx.beginPath();
      // V-shaped tractor beam from saucer belly down to the player
      ctx.moveTo(s.x - 5, topY);
      ctx.lineTo(s.x + 5, topY);
      ctx.lineTo(pt.x + 26, pt.y);
      ctx.lineTo(pt.x - 26, pt.y);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = 'rgba(125,255,180,0.45)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(s.x - 5, topY);
      ctx.lineTo(pt.x - 26, pt.y);
      ctx.moveTo(s.x + 5, topY);
      ctx.lineTo(pt.x + 26, pt.y);
      ctx.stroke();
      ctx.restore();
    }

    // HP bar for non-bombers
    if (!this.dying && this.type !== 'bomber' && this.hp < this.maxHp) {
      const boss = this.type === 'dragon';
      const bw = boss ? 140 : 28 * Math.min(2.5, this.buffMult);
      const bh = boss ? 7 : 3;
      const top = s.y - (this.sprite ? this.sprite.height * this.buffMult * 0.5 + 10 : 28);
      ctx.fillStyle = '#222';
      ctx.fillRect(s.x - bw * 0.5, top, bw, bh);
      ctx.fillStyle = boss ? '#ff8c00' : '#e74c3c';
      ctx.fillRect(s.x - bw * 0.5, top, bw * (this.hp / this.maxHp), bh);
    }
  }
}

/* ============================================================
   CHICKEN LEG — rare field heal pickup (epic chest rarity)
   ============================================================ */
class ChickenLeg {
  constructor() {
    this.active = false;
    this.x = 0;
    this.y = 0;
    this.sprite = null;
    this.radius = 28;
    this.bob = 0;
    this.collected = false;
  }

  spawn(x, y, sprite) {
    this.active = true;
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.collected = false;
    this.bob = Math.random() * Math.PI * 2;
  }

  update(dt, player, game) {
    if (!this.active || this.collected) return;
    this.bob += dt * 3;
    const dx = player.x - this.x;
    const dy = player.y - this.y;
    if (dx * dx + dy * dy < this.radius * this.radius) {
      this.collected = true;
      this.active = false;
      if (typeof MetaProgression !== 'undefined') {
        MetaProgression.discover('items', 'chickenLeg');
      }
      const healed = player.healPercent(0.05);
      game.spawnHealParticles(this.x, this.y);
      if (healed > 0) {
        SoundManager.heal();
        game.ui.toast(I18n.t('chickenLegHeal', Math.ceil(healed)), 'epic');
      }
    }
  }

  draw(ctx, cam) {
    if (!this.active) return;
    const s = cam.worldToScreen(this.x, this.y);
    const by = Math.sin(this.bob) * 3;
    ctx.fillStyle = 'rgba(255,160,60,0.3)';
    ctx.beginPath();
    ctx.arc(s.x, s.y + by, 22, 0, Math.PI * 2);
    ctx.fill();
    if (this.sprite) {
      ctx.drawImage(this.sprite, s.x - this.sprite.width * 0.5, s.y - this.sprite.height * 0.5 + by);
    }
  }
}

/* ============================================================
   CHEST
   ============================================================ */
class Chest {
  constructor() {
    this.active = false;
    this.x = 0; this.y = 0;
    this.tier = 'common';
    this.sprite = null;
    this.radius = 28;
    this.bob = 0;
    this.opened = false;
  }
  spawn(x, y, tier, sprites) {
    this.active = true;
    this.x = x; this.y = y;
    this.tier = tier;
    this.sprite = sprites[tier];
    this.opened = false;
    this.bob = Math.random() * Math.PI * 2;
  }
  update(dt, player, game) {
    if (!this.active || this.opened) return;
    this.bob += dt * 3;
    const dx = player.x - this.x;
    const dy = player.y - this.y;
    if (dx * dx + dy * dy < this.radius * this.radius) {
      this.opened = true;
      this.active = false;
      if (typeof MetaProgression !== 'undefined') {
        MetaProgression.discover('items', this.tier);
      }
      const rewards = { common: 5, rare: 15, epic: 50 };
      const amount = game.addCurrency(rewards[this.tier]);
      game.spawnGoldCoins(this.x, this.y, amount);
      game.spawnChestParticles(this.x, this.y, this.tier);
      SoundManager.chest(this.tier);
      game.ui.toast(I18n.t('chestGold', Math.floor(amount), I18n.chestTierLabel(this.tier)), this.tier === 'epic' ? 'epic' : this.tier === 'rare' ? 'rare' : '');
      // Better chests are worth several extra upgrade picks
      const rolls = { common: 1, rare: 3, epic: 5 };
      if (game.upgrades) game.upgrades.enqueue(rolls[this.tier] || 1, { weaponEligible: true });
    }
  }
  draw(ctx, cam) {
    if (!this.active) return;
    const s = cam.worldToScreen(this.x, this.y);
    const by = Math.sin(this.bob) * 3;
    if (this.sprite) {
      ctx.drawImage(this.sprite, s.x - this.sprite.width * 0.5, s.y - this.sprite.height * 0.5 + by);
    }
    // glow
    const colors = { common: 'rgba(200,180,50,0.25)', rare: 'rgba(70,140,255,0.3)', epic: 'rgba(180,60,255,0.35)' };
    ctx.fillStyle = colors[this.tier];
    ctx.beginPath();
    ctx.arc(s.x, s.y + by, 22, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* ============================================================
   PLAYER
   ============================================================ */
class Player {
  /* Every stat derives from these bases plus additive upgrade fractions. */
  static BASE = {
    moveSpeed: 140,
    maxHealth: 100,
    attack: 8,
    attackSpeed: 1.0,
    bulletSpeed: 280,
    weaponRadius: 1,
    critChance: 0.05,
    critDamage: 1.5,
    expMultiplier: 1
  };

  constructor(sprites) {
    this.sprite = sprites.player;
    this.x = 0; this.y = 0;
    this.radius = 14;
    this.stats = {};
    this.reset();
  }

  static emptyStatAdd() {
    return {
      moveSpeed: 0,
      maxHealth: 0,
      attack: 0,
      attackSpeed: 0,
      bulletSpeed: 0,
      weaponRadius: 0,
      critChance: 0,
      critDamageBonus: 0,
      expMultiplier: 0,
      luck: 0
    };
  }

  reset() {
    this.x = 0; this.y = 0;
    this.alive = true;
    // Gold earned this run only; it is banked to MetaProgression when the run ends
    this.currency = 0;
    this.experience = 0;
    this.level = 1;
    this.xpToNext = Player.xpToNextFor(1);

    this.statAdd = Player.emptyStatAdd();
    this.selectedStatIds = [];
    this.bulletCount = 1;
    this._recomputeStats();

    this.health = this.stats.maxHealth;
    this.hurtFlash = 0;
    this.facing = 1;
    this.shootDirX = 1;
    this.shootDirY = 0;
    this.anim = 0;
    this.slowTimer = 0;
    this.slowFactor = 1;
    this.carriedBy = null;
    this.shieldFlash = 0;
    this.hpFlash = 0;
    this.invulnerable = false;
  }

  _recomputeStats() {
    const B = Player.BASE;
    const a = this.statAdd;
    const m = (typeof MetaProgression !== 'undefined') ? MetaProgression.bonuses() : {
      moveSpeed: 0, maxHealth: 0, attack: 0, attackSpeed: 0,
      bulletCount: 0, critChance: 0, critDamageBonus: 0, expMultiplier: 0, luck: 0,
      weaponRadius: 0, bulletSpeed: 0, curse: 0
    };
    const s = this.stats;
    s.moveSpeed = B.moveSpeed * (1 + a.moveSpeed + m.moveSpeed);
    s.maxHealth = B.maxHealth * (1 + a.maxHealth + m.maxHealth);
    s.attack = B.attack * (1 + a.attack + m.attack);
    s.attackSpeed = B.attackSpeed * (1 + a.attackSpeed + m.attackSpeed);
    s.bulletSpeed = B.bulletSpeed * (1 + a.bulletSpeed + m.bulletSpeed);
    s.weaponRadius = B.weaponRadius * (1 + a.weaponRadius + m.weaponRadius);
    s.critChance = Math.min(1, B.critChance + a.critChance + m.critChance);
    s.critDamage = B.critDamage + a.critDamageBonus + m.critDamageBonus;
    s.expMultiplier = B.expMultiplier * (1 + a.expMultiplier + m.expMultiplier);
    s.luck = a.luck + m.luck;
    s.bulletCount = this.bulletCount + m.bulletCount;
    if (this.health > s.maxHealth) this.health = s.maxHealth;
  }

  /* Luck is a plain fraction: 0.15 means +15% gold and drop weighting. */
  get luckMult() {
    return 1 + this.stats.luck;
  }

  /* Store Curse stacks on top of Exp Multiplier for XP from gold. */
  get curseExpMult() {
    if (typeof MetaProgression === 'undefined') return 1;
    const b = MetaProgression.bonuses();
    return 1 + (b.curse || 0);
  }

  maxStatSlots() {
    return (typeof MetaProgression !== 'undefined')
      ? MetaProgression.maxStatSlots()
      : 5;
  }

  toSaveData() {
    return {
      x: this.x,
      y: this.y,
      alive: this.alive,
      experience: this.experience,
      level: this.level,
      xpToNext: this.xpToNext,
      statAdd: { ...this.statAdd },
      selectedStatIds: this.selectedStatIds.slice(),
      bulletCount: this.bulletCount,
      health: this.health,
      facing: this.facing
    };
  }

  loadSaveData(data) {
    this.x = data.x ?? 0;
    this.y = data.y ?? 0;
    this.alive = data.alive ?? true;
    this.currency = data.currency ?? 0;
    this.experience = data.experience ?? 0;
    this.level = data.level ?? 1;
    this.xpToNext = data.xpToNext ?? Player.xpToNextFor(this.level);
    this.statAdd = { ...Player.emptyStatAdd(), ...(data.statAdd || {}) };
    this.selectedStatIds = Array.isArray(data.selectedStatIds) ? data.selectedStatIds.slice() : [];
    this.bulletCount = data.bulletCount ?? 1;
    this._recomputeStats();
    this.health = data.health ?? this.stats.maxHealth;
    this.facing = data.facing ?? 1;
    this.shootDirX = this.facing;
    this.shootDirY = 0;
    this.hurtFlash = 0;
    this.anim = 0;
    this.slowTimer = 0;
    this.slowFactor = 1;
    this.carriedBy = null;
    this.shieldFlash = 0;
    this.hpFlash = 0;
  }

  reviveRun() {
    this.alive = true;
    this.x = 0;
    this.y = 0;
    this.health = this.stats.maxHealth;
    this.hurtFlash = 0;
    this.slowTimer = 0;
    this.slowFactor = 1;
    this.carriedBy = null;
    this.shieldFlash = 0;
    this.hpFlash = 0;
    this.invulnerable = false;
  }

  getDifficulty() {
    return Math.sqrt(this.experience) * 0.4 + this.level * 0.3;
  }

  /* Early levels need far less XP so the first weapon/stat picks arrive quickly;
     mid/late curve stays close to the original quadratic ramp. */
  static xpToNextFor(level) {
    if (level <= 5) return Math.floor(6 + level * 4);       // ~10–26
    if (level <= 12) return Math.floor(12 + level * 8);     // ~60–108
    return Math.floor(20 + level * 15 + level * level * 0.5);
  }

  addCurrency(amount, game) {
    // Luck multiplies gold from kills, chests, and other pickups
    const gained = amount * this.luckMult;
    this.currency += gained;
    // Extra XP weight while still early so gold from trash mobs levels you faster
    const earlyBoost = this.level <= 8 ? (1.6 - (this.level - 1) * 0.07) : 1;
    const xpGain = gained * this.stats.expMultiplier * this.curseExpMult * earlyBoost;
    this.experience += xpGain;
    let levels = 0;
    const weaponFlags = [];
    while (this.experience >= this.xpToNext) {
      this.experience -= this.xpToNext;
      this.level++;
      this.xpToNext = Player.xpToNextFor(this.level);
      levels++;
      // First level-up (→2) always offers weapons; then every 5th level (5, 10, 15…)
      weaponFlags.push(this.level === 2 || this.level % 5 === 0);
    }
    if (levels > 0 && game && game.upgrades) {
      if (typeof SoundManager !== 'undefined') SoundManager.levelUp();
      game.upgrades.enqueue(levels, { weaponEligible: weaponFlags });
    }
    return gained;
  }

  takeDamage(amount, game) {
    if (!this.alive || this.invulnerable) return;
    this.hurtFlash = 0.15;
    let dmg = amount;

    const weapons = game ? game.weapons : null;
    if (weapons) {
      // Garlic Aura path B soaks a slice of every hit before shields
      const garlic = weapons.get('garlicAura');
      if (garlic && garlic.mods.auraDr && garlic.state.dr > 0) {
        dmg *= 1 - Math.min(0.35, garlic.state.dr);
      }
      const absorbed = weapons.absorbShield(dmg);
      if (absorbed > 0) {
        dmg -= absorbed;
        this.shieldFlash = 0.1;
      }
    }

    if (dmg > 0) {
      this.health -= dmg;
      this.hpFlash = 0.12;
      SoundManager.hurt();
      if (this.health <= 0) {
        this.health = 0;
        this.alive = false;
      }
    }
  }

  applySlow(factor, duration) {
    this.slowFactor = Math.min(this.slowFactor, factor);
    this.slowTimer = Math.max(this.slowTimer, duration);
  }

  healPercent(pct) {
    if (!this.alive || pct <= 0) return 0;
    const before = this.health;
    this.health = Math.min(this.stats.maxHealth, this.health + this.stats.maxHealth * pct);
    return this.health - before;
  }

  /* A bomber eats the whole shield pool, or kills outright when unshielded.
     The drain amount stays finite so absorbShield can subtract it safely. */
  bomberHit(game) {
    if (!this.alive || this.invulnerable) return;
    this.hurtFlash = 0.2;
    const weapons = game ? game.weapons : null;
    const absorbed = weapons ? weapons.absorbShield(1e9) : 0;
    if (absorbed > 0) {
      this.shieldFlash = 0.15;
      return;
    }
    this.health = 0;
    this.alive = false;
  }

  update(dt, input, game) {
    if (!this.alive) return;
    this.anim += dt;

    if (this.shieldFlash > 0) this.shieldFlash -= dt;
    if (this.hpFlash > 0) this.hpFlash -= dt;
    if (this.slowTimer > 0) {
      this.slowTimer -= dt;
      if (this.slowTimer <= 0) this.slowFactor = 1;
    }
    if (this.carriedBy && !this.carriedBy.active) this.carriedBy = null;
    const abducted = !!this.carriedBy;

    let mx = 0, my = 0;
    if (input.up) my -= 1;
    if (input.down) my += 1;
    if (input.left) mx -= 1;
    if (input.right) mx += 1;
    if ((mx || my) && !abducted) {
      const len = Math.sqrt(mx * mx + my * my);
      mx /= len; my /= len;
      const speed = this.stats.moveSpeed * this.slowFactor;
      this.x += mx * speed * dt;
      this.y += my * speed * dt;
      this.shootDirX = mx;
      this.shootDirY = my;
      if (mx !== 0) this.facing = mx > 0 ? 1 : -1;
    }

    if (this.hurtFlash > 0) this.hurtFlash -= dt;

    // Weapons fire themselves on their own reload timers
    if (game.weapons) game.weapons.update(dt, game);
  }

  draw(ctx, cam) {
    const s = cam.worldToScreen(this.x, this.y);
    const bob = Math.sin(this.anim * 8) * 2;
    ctx.save();
    ctx.translate(s.x, s.y + bob);
    ctx.scale(this.facing, 1);
    if (this.hurtFlash > 0) ctx.globalAlpha = 0.5;
    ctx.drawImage(this.sprite, -this.sprite.width * 0.5, -this.sprite.height * 0.5);
    ctx.restore();

    // Soft shadow
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.beginPath();
    ctx.ellipse(s.x, s.y + 22, 12, 4, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* ============================================================
   FLOATING TEXT — stat popups above player
   ============================================================ */
class FloatingText {
  constructor() {
    this.active = false;
    this.x = 0; this.y = 0;
    this.vy = -50;
    this.life = 0;
    this.maxLife = 1.4;
    this.text = '';
    this.color = '#ffffff';
    this.size = 20;
  }

  spawn(wx, wy, text, color = '#ffffff', size = 20) {
    this.active = true;
    this.x = wx + (Math.random() - 0.5) * 16;
    this.y = wy - 28;
    this.text = text;
    this.color = color;
    this.size = size;
    this.life = this.maxLife;
    this.vy = -48 - Math.random() * 20;
  }

  update(dt) {
    if (!this.active) return;
    this.y += this.vy * dt;
    this.vy *= Math.pow(0.98, dt * 60);
    this.life -= dt;
    if (this.life <= 0) this.active = false;
  }

  draw(ctx, cam) {
    if (!this.active) return;
    const s = cam.worldToScreen(this.x, this.y);
    const a = Math.min(1, this.life / (this.maxLife * 0.65));
    ctx.save();
    ctx.globalAlpha = a;
    ctx.font = `bold ${this.size}px "Courier New", monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = 'rgba(0,0,0,0.7)';
    ctx.lineWidth = Math.max(4, this.size * 0.28);
    ctx.lineJoin = 'round';
    ctx.strokeText(this.text, s.x, s.y);
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, s.x, s.y);
    ctx.restore();
  }
}

/* ============================================================
   WAVE MANAGER
   ============================================================ */
class WaveManager {
  static DRAGON_COOLDOWN = 300; // 5 minutes between boss appearances

  constructor() {
    this.spawnTimer = 0;
    this.elapsed = 0;
    this.lastDragonAt = -WaveManager.DRAGON_COOLDOWN;
  }

  reset() {
    this.spawnTimer = 0;
    this.elapsed = 0;
    this.lastDragonAt = -WaveManager.DRAGON_COOLDOWN;
  }

  loadSaveData(data) {
    this.elapsed = data.elapsed ?? 0;
    this.lastDragonAt = data.lastDragonAt ?? -WaveManager.DRAGON_COOLDOWN;
    this.spawnTimer = 0;
  }

  _getLevelDensityMult(level) {
    if (level < 50) return 1;
    if (level < 70) return 1.35;
    // Soft late-game bump, hard-capped so high levels stay playable
    return Math.min(1.85, 1.35 + (level - 70) / 60);
  }

  update(dt, game) {
    if (game.testMode) return;
    this.elapsed += dt;
    const diff = game.player.getDifficulty();
    const exp = game.player.experience;
    const level = game.player.level;
    const density = this._getLevelDensityMult(level);

    // Spawn rate scales with experience and level density
    const baseInterval = Math.max(0.08, (1.2 - exp * 0.002 - diff * 0.03) / density);
    this.spawnTimer -= dt;

    const rawCap = 36 + Math.floor(exp * 0.08) + Math.floor(diff * 5) + Math.floor(level * 1.15);
    const maxEnemies = Math.min(200, Math.floor(rawCap * density));
    const active = game.enemyPool.countActive();

    if (this.spawnTimer <= 0 && active < maxEnemies) {
      this.spawnTimer = baseInterval;
      const baseBurst = 1 + Math.floor(diff / 3) + Math.floor(exp / 80);
      const burst = Math.min(14, Math.max(1, Math.floor(baseBurst * Math.min(density, 1.4))));
      for (let i = 0; i < burst && game.enemyPool.countActive() < maxEnemies; i++) {
        this._spawnEnemy(game, diff, exp);
      }
    }
  }

  pickSpawnPos(player) {
    const angle = Math.random() * Math.PI * 2;
    const dist = 420 + Math.random() * 200;
    return {
      x: player.x + Math.cos(angle) * dist,
      y: player.y + Math.sin(angle) * dist
    };
  }

  _spawnEnemy(game, diff, exp) {
    const pos = this.pickSpawnPos(game.player);
    const type = this._pickType(game, diff, exp, game.player.level);
    if (type === 'dragon') this.lastDragonAt = this.elapsed;
    const e = game.enemyPool.acquire();
    e.spawn(type, pos.x, pos.y, game.sprites, diff, game.player.level);
  }

  _canSpawnDragon(game, level) {
    return level >= 25
      && !game.hasEnemy('dragon')
      && (this.elapsed - this.lastDragonAt) >= WaveManager.DRAGON_COOLDOWN;
  }

  _pickType(game, diff, exp, level) {
    const late = Math.max(0, level - 25);
    const weights = {
      slime: Math.max(6, 40 - late * 0.45),
      zombie: 15 + diff * 2 + late * 0.35,
      skeleton: 8 + diff * 1.5 + late * 0.3,
      bomber: Math.max(0, -10 + diff * 0.55 + exp * 0.004 + late * 0.04),
      mage: Math.max(0, -8 + diff * 1.5 + exp * 0.008 + late * 0.05),
      wolf: level >= 8 ? Math.max(0, -4 + diff * 1.2 + late * 0.22) : 0,
      robot: level >= 12 ? Math.max(0, -3 + diff * 0.7 + late * 0.18) : 0,
      priest: level >= 15 ? Math.min(6, Math.max(0, -2 + diff * 0.35 + late * 0.08)) : 0,
      ufo: level >= 18 && game.countEnemies('ufo') < 3 ? 0.9 + late * 0.02 : 0,
      // Very rare boss; also gated by a hard 5-minute cooldown
      dragon: this._canSpawnDragon(game, level) ? 0.028 + late * 0.0008 : 0
    };
    let total = 0;
    for (const k in weights) total += weights[k];
    let r = Math.random() * total;
    for (const k in weights) {
      r -= weights[k];
      if (r <= 0) return k;
    }
    return 'slime';
  }

  /* Every field item now comes off a corpse. */
  rollKillDrops(game, x, y, enemy) {
    const luck = game.player.stats.luck;
    const luckMult = game.player.luckMult;
    const bossBonus = enemy.type === 'dragon' ? 40 : enemy.type === 'ufo' ? 8 : 1;
    // Chests now hand out upgrade picks, so they must stay genuinely rare
    const chestChance = Math.min(0.06, 0.008 * luckMult * bossBonus);
    if (Math.random() < chestChance && game.chestPool.countActive() < 14) {
      this._dropChest(game, x, y, luck);
    }
    const legChance = Math.min(0.12, (0.006 + luck * 0.06) * bossBonus);
    if (Math.random() < legChance && game.chickenLegPool.countActive() < 4) {
      const item = game.chickenLegPool.acquire();
      item.spawn(x + (Math.random() - 0.5) * 24, y + (Math.random() - 0.5) * 24, game.sprites.chickenLeg);
    }
  }

  _dropChest(game, x, y, luck) {
    // Roughly 80 / 16 / 4 split, nudged toward the good tiers by Luck
    const roll = Math.random() + luck * 0.2;
    let tier = 'common';
    if (roll > 0.96) tier = 'epic';
    else if (roll > 0.8) tier = 'rare';

    const c = game.chestPool.acquire();
    c.spawn(x + (Math.random() - 0.5) * 20, y + (Math.random() - 0.5) * 20, tier, {
      common: game.sprites.chestCommon,
      rare: game.sprites.chestRare,
      epic: game.sprites.chestEpic
    });
  }
}

/* ============================================================
   UI
   ============================================================ */
class UI {
  constructor() {
    this.toastEl = document.getElementById('toast');
    this.toastTimer = 0;
    this.goldPulse = 0;
    this.goldTarget = { x: 72, y: 24 };
    this.sprites = null;
  }

  getGoldCounterPos() {
    return this.goldTarget;
  }

  pulseGold() {
    this.goldPulse = 0.25;
  }

  toast(msg, rarity) {
    this.toastEl.textContent = msg;
    this.toastEl.className = 'show' + (rarity ? ' ' + rarity : '');
    this.toastTimer = 2.2;
  }

  setControlsVisible(visible) {
    if (MobileControls.isMobile) {
      MobileControls.setVisible(visible);
    } else {
      MobileControls.setVisible(false);
    }
  }

  update(dt, player) {
    if (this.toastTimer > 0) {
      this.toastTimer -= dt;
      if (this.toastTimer <= 0) this.toastEl.className = '';
    }
    if (this.goldPulse > 0) this.goldPulse -= dt;
    if (player) MobileControls.updateHud(player);
  }

  /* HUD is drawn ~3x the old size, shrinking only on short viewports. */
  hudScale(cam) {
    return Math.max(1.1, 3 * Math.min(1, cam.h / 880));
  }

  _icon(ctx, key, x, y, size) {
    const spr = this.sprites && this.sprites[IconFactory.spriteKey(key)];
    if (!spr) return;
    ctx.drawImage(spr, x, y, size, size);
  }

  draw(ctx, player, cam, enemyCount, game) {
    const S = this.hudScale(cam);
    const pad = 12 * S;
    const s = player.stats;
    const weapons = game ? game.weapons : null;

    ctx.save();
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';

    // Top-left: one slot per weapon, each with its own reload sweep
    const weaponCap = weapons ? weapons.maxSlots : 5;
    const statCap = typeof player.maxStatSlots === 'function' ? player.maxStatSlots() : 5;
    const slotCount = Math.max(weaponCap, statCap, 5);
    const baseSlot = Math.round(19 * S);
    // Shrink slightly when store extras push past the default 5 so the row still fits
    const slot = slotCount > 5
      ? Math.max(Math.round(12 * S), Math.round(baseSlot * 5 / slotCount))
      : baseSlot;
    const gap = Math.max(2, Math.round(4 * S * (slot / baseSlot)));
    const weaponsY = pad;
    for (let i = 0; i < weaponCap; i++) {
      const x = pad + i * (slot + gap);
      const w = weapons && weapons.slots[i] ? weapons.slots[i] : null;
      this._weaponSlot(ctx, x, weaponsY, slot, w, weapons, S);
    }

    // Below them: committed stats for this run (base 5 + store extras)
    const statsY = weaponsY + slot + gap;
    for (let i = 0; i < statCap; i++) {
      const x = pad + i * (slot + gap);
      const statId = player.selectedStatIds[i];
      this._statSlot(ctx, x, statsY, slot, statId, player, S);
    }

    // Gold sits under both slot rows
    const goldIcon = Math.round(13 * S);
    const goldY = statsY + slot + gap + goldIcon * 0.5;
    this.goldTarget.x = pad + goldIcon * 0.5;
    this.goldTarget.y = goldY;

    const goldScale = 1 + this.goldPulse * 0.35;
    ctx.save();
    ctx.translate(pad, goldY);
    ctx.scale(goldScale, goldScale);
    ctx.translate(-pad, -goldY);
    this._icon(ctx, 'gold', pad, goldY - goldIcon * 0.5, goldIcon);
    ctx.font = `bold ${Math.round(13 * S)}px "Courier New", monospace`;
    if (this.goldPulse > 0) {
      ctx.shadowColor = '#ffd700';
      ctx.shadowBlur = 8 + this.goldPulse * 40;
    }
    ctx.fillStyle = '#ffd700';
    // Same total as the main menu: banked account gold + any not-yet-banked run earnings
    const banked = game ? (game._bankedRunGold || 0) : 0;
    const meta = (typeof MetaProgression !== 'undefined') ? MetaProgression.gold : 0;
    const unbanked = Math.max(0, Math.floor(player.currency) - banked);
    const accountGold = Math.floor(meta) + unbanked;
    ctx.fillText(`${accountGold}`, pad + goldIcon + 5 * S, goldY);
    ctx.shadowBlur = 0;
    ctx.restore();

    // Top-right: accumulated stat bonuses
    this._bonusRows(ctx, player, cam, S);

    // Top center: XP bar + level
    const barW = Math.min(320 * S * 0.7, cam.w * 0.5);
    const barX = cam.w * 0.5 - barW * 0.5;
    const barY = 8 * S;
    const barH = 6 * S;
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(barX - 2, barY - 2, barW + 4, barH + 4);
    ctx.fillStyle = '#1a3a2a';
    ctx.fillRect(barX, barY, barW, barH);
    const xpPct = player.experience / player.xpToNext;
    const grad = ctx.createLinearGradient(barX, 0, barX + barW, 0);
    grad.addColorStop(0, '#2ecc71');
    grad.addColorStop(1, '#7dff9a');
    ctx.fillStyle = grad;
    ctx.fillRect(barX, barY, barW * xpPct, barH);
    ctx.font = `bold ${Math.round(11 * S)}px "Courier New", monospace`;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText(`LV ${player.level}`, cam.w * 0.5, barY + barH + 10 * S);

    // Bottom center: HP, plus a shield bar only while Tower Shield is carried
    const bw = Math.min(300 * S * 0.62, cam.w * 0.8);
    const bx = cam.w * 0.5 - bw * 0.5;
    const bh = 7 * S;
    let by = cam.h - 26 * S;
    const hasShield = !!(weapons && weapons.hasShield());
    if (hasShield) {
      this._bar(ctx, bx, by - bh * 1.35, bw, bh * 0.85, weapons.shieldRatio(),
        '#3498db', '#1a4a6a', I18n.t('shieldLabel'), S);
    }
    this._bar(ctx, bx, by, bw, bh, player.health / s.maxHealth, '#e74c3c', '#5a1a1a', I18n.t('hpLabel'), S);

    ctx.font = `${Math.round(10 * S)}px "Courier New", monospace`;
    ctx.fillStyle = 'rgba(180,220,190,0.6)';
    ctx.textAlign = 'left';
    ctx.fillText(`${I18n.t('enemiesLabel')} ${enemyCount}`,
      pad, by - (hasShield ? bh * 2.6 : bh * 1.3));

    ctx.restore();
  }

  _slotFrame(ctx, x, y, size, filled) {
    ctx.fillStyle = filled ? 'rgba(10,20,14,0.72)' : 'rgba(10,20,14,0.35)';
    ctx.fillRect(x, y, size, size);
    ctx.strokeStyle = filled ? 'rgba(160,220,180,0.55)' : 'rgba(160,220,180,0.18)';
    ctx.lineWidth = Math.max(1, size * 0.04);
    ctx.strokeRect(x + 0.5, y + 0.5, size - 1, size - 1);
  }

  _weaponSlot(ctx, x, y, size, w, weapons, S) {
    this._slotFrame(ctx, x, y, size, !!w);
    if (!w) return;

    const icon = typeof WeaponIcons !== 'undefined' ? WeaponIcons.get(w.id) : null;
    const inset = size * 0.1;
    if (icon) ctx.drawImage(icon, x + inset, y + inset, size - inset * 2, size - inset * 2);

    // Reload sweep: the dark wedge is what is still missing
    const progress = weapons ? weapons.reloadProgress(w) : 1;
    if (progress < 1) {
      const cx = x + size * 0.5;
      const cy = y + size * 0.5;
      const r = size * 0.62;
      const start = -Math.PI * 0.5 + Math.PI * 2 * progress;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, -Math.PI * 0.5 + Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = 'rgba(0,0,0,0.62)';
      ctx.fill();
      ctx.restore();
    }

    ctx.font = `bold ${Math.round(6 * S)}px "Courier New", monospace`;
    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffd23d';
    const tag = w.level + (w.branch || '');
    ctx.fillText(tag, x + size - 2 * S, y + size - 4 * S);
    ctx.textAlign = 'left';
  }

  _statSlot(ctx, x, y, size, statId, player, S) {
    this._slotFrame(ctx, x, y, size, !!statId);
    if (!statId) return;
    const def = typeof STAT_DEFS !== 'undefined' ? STAT_DEFS[statId] : null;
    if (!def) return;
    const inset = size * 0.14;
    this._icon(ctx, def.icon, x + inset, y + inset, size - inset * 2);
    ctx.font = `bold ${Math.round(6 * S)}px "Courier New", monospace`;
    ctx.textAlign = 'right';
    ctx.fillStyle = 'rgba(220,245,225,0.95)';
    ctx.fillText(def.bonusText(player), x + size - 2 * S, y + size - 4 * S);
    ctx.textAlign = 'left';
  }

  _bonusRows(ctx, player, cam, S) {
    const rows = [
      ['attack', player.stats.attack.toFixed(1)],
      ['attackSpeed', `${player.stats.attackSpeed.toFixed(2)}/s`],
      ['moveSpeed', player.stats.moveSpeed.toFixed(0)],
      ['bulletCount', String(Math.floor(player.stats.bulletCount))],
      ['bulletSpeed', player.stats.bulletSpeed.toFixed(0)],
      ['weaponRadius', `x${player.stats.weaponRadius.toFixed(2)}`],
      ['critChance', `${Math.round(player.stats.critChance * 100)}%`],
      ['critDamage', `x${player.stats.critDamage.toFixed(2)}`],
      ['expMultiplier', `x${player.stats.expMultiplier.toFixed(2)}`],
      ['luck', `x${player.luckMult.toFixed(2)}`]
    ];
    const iconSize = Math.round(10 * S);
    const pad = 12 * S;
    const right = cam.w - pad;
    ctx.font = `${Math.round(11 * S)}px "Courier New", monospace`;
    ctx.fillStyle = 'rgba(200,230,210,0.92)';
    ctx.textAlign = 'right';
    let y = pad + 8 * S;
    for (const [key, value] of rows) {
      ctx.fillText(value, right, y);
      this._icon(ctx, key, right - ctx.measureText(value).width - 5 * S - iconSize, y - iconSize * 0.5, iconSize);
      y += 13 * S;
    }
    ctx.textAlign = 'left';
  }

  _bar(ctx, x, y, w, h, pct, color, bg, label, S = 1) {
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(x - 2, y - 2, w + 4, h + 4);
    ctx.fillStyle = bg;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w * Math.max(0, Math.min(1, pct)), h);
    ctx.font = `${Math.round(7 * S)}px "Courier New", monospace`;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'left';
    ctx.fillText(label, x + 4, y + h * 0.5);
  }
}

/* ============================================================
   SAVE MANAGER
   Runs are no longer resumable: every session starts a new game, so the game
   only ever clears this slot to purge saves written by older versions.
   ============================================================ */
class SaveManager {
  static KEY = 'gachaSurvivorsSave';
  static VERSION = 2;

  static save(game) {
    if (game.testMode) return;
    try {
      const data = {
        version: SaveManager.VERSION,
        player: game.player.toSaveData(),
        killCount: game.killCount,
        survived: game.survived,
        waves: { elapsed: game.waves.elapsed, lastDragonAt: game.waves.lastDragonAt },
        weapons: game.weapons.toSaveData(),
        upgrades: game.upgrades.toSaveData()
      };
      localStorage.setItem(SaveManager.KEY, JSON.stringify(data));
    } catch (e) { /* storage full or unavailable */ }
  }

  static load(game) {
    try {
      const raw = localStorage.getItem(SaveManager.KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      if (!data || !data.player) return false;
      // Pre-rework saves describe a game that no longer exists
      if (data.version !== SaveManager.VERSION) {
        SaveManager.clear();
        return false;
      }
      game.player.loadSaveData(data.player);
      game.killCount = data.killCount ?? 0;
      game.survived = data.survived ?? 0;
      game.waves.loadSaveData(data.waves ?? {});
      game.weapons.loadSaveData(data.weapons);
      game.upgrades.loadSaveData(data.upgrades);
      return true;
    } catch (e) {
      return false;
    }
  }

  static clear() {
    try { localStorage.removeItem(SaveManager.KEY); } catch (e) {}
  }

  static hasSave() {
    try { return !!localStorage.getItem(SaveManager.KEY); } catch (e) { return false; }
  }
}

/* ============================================================
   HELP PANEL
   ============================================================ */
class HelpPanel {
  constructor() {
    this.overlay = document.getElementById('helpOverlay');
    this.content = document.getElementById('helpContent');
    this.returnTo = 'menu';
    this.currentTab = 'stats';
    this.sprites = null;
    this.built = false;

    document.getElementById('helpCloseBtn').onclick = () => this.close();
    this.overlay.querySelectorAll('.help-tab').forEach((btn) => {
      btn.onclick = () => this.showTab(btn.dataset.tab);
    });
  }

  init(sprites) {
    this.sprites = sprites;
    this.rebuild();
  }

  rebuild() {
    this.built = false;
    if (this.sprites) {
      this._buildAll();
      this.built = true;
      if (!this.overlay.classList.contains('hidden')) {
        this.showTab(this.currentTab);
      }
    }
  }

  static abbrToStat = {
    SPD: 'moveSpeed', HP: 'maxHealth', SHD: 'maxShield', ATK: 'attack',
    ASP: 'attackSpeed', BLT: 'bulletCount', BSP: 'bulletSpeed',
    RAD: 'weaponRadius',
    CRT: 'critChance', CDM: 'critDamage',
    EXP: 'expMultiplier', LCK: 'luck'
  };

  _iconHtml(statKey) {
    const key = IconFactory.spriteKey(statKey);
    const spr = this.sprites[key];
    if (!spr) return '';
    return `<span class="stat-icon"><canvas width="${spr.width}" height="${spr.height}" data-sprite="${key}"></canvas></span>`;
  }

  _artHtml(spriteKey) {
    const spr = this.sprites[spriteKey];
    if (!spr) return '';
    return `<div class="bestiary-art"><canvas width="${spr.width}" height="${spr.height}" data-sprite="${spriteKey}"></canvas></div>`;
  }

  _paintSprites() {
    this.content.querySelectorAll('canvas[data-sprite]').forEach((c) => {
      const key = c.dataset.sprite;
      const spr = this.sprites[key];
      if (!spr) return;
      c.width = spr.width;
      c.height = spr.height;
      c.getContext('2d').drawImage(spr, 0, 0);
    });
  }

  _buildAll() {
    const sys = I18n.helpSystems[I18n.lang] || I18n.helpSystems.en;
    const stats = I18n.helpStats[I18n.lang] || I18n.helpStats.en;
    const enemies = I18n.helpEnemies[I18n.lang] || I18n.helpEnemies.en;
    const items = I18n.helpItems[I18n.lang] || I18n.helpItems.en;
    const meta = typeof MetaProgression !== 'undefined' ? MetaProgression : null;
    const seenEnemy = (id) => meta && meta.hasDiscovered('enemies', id);
    const seenItem = (id) => meta && meta.hasDiscovered('items', id);
    const seenWeapon = (id) => meta && meta.hasDiscovered('weapons', id);

    const statsEl = document.createElement('div');
    statsEl.id = 'helpStats';
    statsEl.innerHTML = `<div class="help-section-title">${sys.playerStats}</div>` +
      stats.map((s) => {
        const icon = this._iconHtml(HelpPanel.abbrToStat[s.abbr] || '');
        return `<div class="stat-entry"><div class="stat-name">${icon}${s.name}<span class="stat-abbr">[${s.abbr}]</span></div><div class="stat-desc">${s.desc}</div></div>`;
      }).join('') +
      `<div class="help-section-title">${sys.combatSystems}</div>` +
      `<div class="stat-entry"><div class="stat-name">${sys.weaponsTitle}</div><div class="stat-desc">${I18n.t('helpWeapons')}</div></div>` +
      `<div class="stat-entry"><div class="stat-name">${sys.choicesTitle}</div><div class="stat-desc">${I18n.t('helpChoices')}</div></div>` +
      `<div class="stat-entry"><div class="stat-name">${sys.difficultyTitle}</div><div class="stat-desc">${sys.difficultyDesc}</div></div>`;

    const weaponsEl = document.createElement('div');
    weaponsEl.id = 'helpWeapons';
    weaponsEl.className = 'hidden';
    const weaponDescs = I18n.helpWeaponDescs[I18n.lang] || I18n.helpWeaponDescs.en;
    const weaponCards = (typeof WEAPON_IDS !== 'undefined' ? WEAPON_IDS : [])
      .filter((id) => seenWeapon(id))
      .map((id) => {
        const def = WEAPON_DEFS[id];
        const icon = typeof WeaponIcons !== 'undefined' ? WeaponIcons.get(id) : null;
        const img = icon
          ? `<div class="bestiary-art"><img src="${icon.toDataURL()}" width="48" height="48" style="image-rendering:pixelated"></div>`
          : '';
        const name = def ? I18n.t(def.nameKey) : id;
        const desc = weaponDescs[id]
          || (typeof weaponLevelDesc === 'function' ? weaponLevelDesc(id, 1, null) : '')
          || '';
        return `<div class="bestiary-card threat-mid">${img}<div class="bestiary-info">
          <div class="bestiary-name">${name}</div>
          <div class="bestiary-tags">${def ? def.kind : ''}</div>
          <div class="bestiary-desc">${desc}</div>
        </div></div>`;
      });
    weaponsEl.innerHTML = `<div class="help-section-title">${I18n.t('weaponsLabel')}</div>` +
      (weaponCards.length
        ? `<div class="bestiary-grid">${weaponCards.join('')}</div>`
        : `<div class="help-empty">${I18n.t('helpEmptyWeapons')}</div>`);

    const knownEnemies = enemies.filter((e) => seenEnemy(e.id || e.sprite));
    const bestEl = document.createElement('div');
    bestEl.id = 'helpBestiary';
    bestEl.className = 'hidden';
    bestEl.innerHTML = `<div class="help-section-title">${sys.enemies}</div>` +
      (knownEnemies.length
        ? `<div class="bestiary-grid">` + knownEnemies.map((e) =>
          `<div class="bestiary-card threat-${e.threat}">${this._artHtml(e.sprite)}<div class="bestiary-info">
            <div class="bestiary-name">${e.name}</div>
            <div class="bestiary-tags">${e.gold}g · ${e.ability}</div>
            <div class="bestiary-statline">${sys.speed} ${e.speed}<br>HP ${e.hp} · DMG ${e.dmg}</div>
            <div class="bestiary-desc">${e.desc}</div>
          </div></div>`
        ).join('') + '</div>'
        : `<div class="help-empty">${I18n.t('helpEmptyEnemies')}</div>`);

    const knownItems = items.filter((item) => seenItem(item.id || item.tier));
    const itemsEl = document.createElement('div');
    itemsEl.id = 'helpItems';
    itemsEl.className = 'hidden';
    itemsEl.innerHTML = `<div class="help-section-title">${sys.items}</div>` +
      (knownItems.length
        ? `<div class="bestiary-grid">` + knownItems.map((item) => {
          const tags = item.tags ?? `${item.gold} ${I18n.lang === 'ru' ? 'зол.' : 'gold'} · ${sys.autoOpen}`;
          const statline = item.statline
            ? `<div class="bestiary-statline">${item.statline}</div>`
            : '';
          return `<div class="bestiary-card threat-${item.threat}">${this._artHtml(item.sprite)}<div class="bestiary-info">
            <div class="bestiary-name">${item.name}</div>
            <div class="bestiary-tags">${tags}</div>
            ${statline}
            <div class="bestiary-desc">${item.desc}</div>
          </div></div>`;
        }).join('') + '</div>'
        : `<div class="help-empty">${I18n.t('helpEmptyItems')}</div>`) +
      `<div class="help-section-title">${sys.goldSources}</div>` +
      `<div class="stat-entry"><div class="stat-name">${this._iconHtml('gold')}${I18n.t('goldLabel')}</div>` +
      `<div class="stat-desc">${sys.goldSourcesDesc}</div></div>`;

    this.content.innerHTML = '';
    this.content.appendChild(statsEl);
    this.content.appendChild(weaponsEl);
    this.content.appendChild(bestEl);
    this.content.appendChild(itemsEl);
    this._paintSprites();
  }

  showTab(tab) {
    this.currentTab = tab;
    this.overlay.querySelectorAll('.help-tab').forEach((b) => {
      b.classList.toggle('active', b.dataset.tab === tab);
    });
    const stats = document.getElementById('helpStats');
    const weapons = document.getElementById('helpWeapons');
    const bestiary = document.getElementById('helpBestiary');
    const items = document.getElementById('helpItems');
    if (stats) stats.classList.toggle('hidden', tab !== 'stats');
    if (weapons) weapons.classList.toggle('hidden', tab !== 'weapons');
    if (bestiary) bestiary.classList.toggle('hidden', tab !== 'bestiary');
    if (items) items.classList.toggle('hidden', tab !== 'items');
    this.content.scrollTop = 0;
  }

  open(from) {
    this.returnTo = from;
    if (from === 'menu') document.getElementById('mainMenu').classList.add('hidden');
    if (from === 'pause') document.getElementById('pauseMenu').classList.add('hidden');
    this.rebuild();
    this.overlay.classList.remove('hidden');
    this.showTab(this.currentTab);
    this._paintSprites();
  }

  close() {
    this.overlay.classList.add('hidden');
    if (this.returnTo === 'menu') document.getElementById('mainMenu').classList.remove('hidden');
    if (this.returnTo === 'pause') document.getElementById('pauseMenu').classList.remove('hidden');
  }

  isOpen() {
    return !this.overlay.classList.contains('hidden');
  }
}

/* ============================================================
   GAME
   ============================================================ */
class Game {
  constructor(dragonSprites) {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;

    this.sprites = {
      player: SpriteFactory.player(),
      slime: SpriteFactory.slime(),
      skeleton: SpriteFactory.skeleton(),
      zombie: SpriteFactory.zombie(),
      bomber: SpriteFactory.bomber(),
      mage: SpriteFactory.mage(),
      mageCast: SpriteFactory.mageCast(),
      robot: SpriteFactory.robot(),
      wolf: SpriteFactory.wolf(),
      priest: SpriteFactory.priest(),
      ufo: SpriteFactory.ufo(),
      dragons: dragonSprites,
      fireball: SpriteFactory.fireball(),
      ...IconFactory.build(),
      chestCommon: SpriteFactory.chest('common'),
      chestRare: SpriteFactory.chest('rare'),
      chestEpic: SpriteFactory.chest('epic'),
      chickenLeg: SpriteFactory.chickenLeg(),
      bullet: SpriteFactory.bullet(),
      arrow: SpriteFactory.arrow(),
      flower0: SpriteFactory.flower(0),
      flower1: SpriteFactory.flower(1),
      flower2: SpriteFactory.flower(2),
      stone: SpriteFactory.stone(),
      plant: SpriteFactory.plant()
    };

    // Bestiary stills for each dragon variant
    for (const v of SpriteFactory.DRAGON_VARIANTS) {
      const key = 'dragon' + v.charAt(0).toUpperCase() + v.slice(1);
      this.sprites[key] = dragonSprites[v].still;
    }

    // Death animation sheets (3 frames normal / 10 frames per dragon variant)
    const deathTypes = ['slime', 'skeleton', 'zombie', 'bomber', 'mage', 'robot', 'wolf', 'priest', 'ufo'];
    for (const t of deathTypes) {
      this.sprites[t + 'Death'] = SpriteFactory.makeDeathFrames(this.sprites[t], 3);
    }
    this.sprites.dragonDeaths = {};
    for (const v of SpriteFactory.DRAGON_VARIANTS) {
      this.sprites.dragonDeaths[v] = SpriteFactory.makeDeathFrames(dragonSprites[v].still, 10, true);
    }

    this.camera = new Camera();
    this.player = new Player(this.sprites);
    this.ui = new UI();
    this.ui.sprites = this.sprites;
    this.waves = new WaveManager();
    this.help = new HelpPanel();
    this.help.init(this.sprites);

    this.spatial = new SpatialGrid();
    this.effects = new EffectSystem();
    this.weapons = new WeaponSystem();
    this.upgrades = new UpgradeSystem();
    this.upgrades.bindGame(this);

    this.enemyPool = new Pool(() => new Enemy(), 200);
    this.projPool = new Pool(() => new Projectile(), 300);
    this.grenadePool = new Pool(() => new GrenadeProjectile(), 24);
    this.chestPool = new Pool(() => new Chest(), 20);
    this.chickenLegPool = new Pool(() => new ChickenLeg(), 8);
    this.particlePool = new Pool(() => new Particle(), 200);
    this.goldCoinPool = new Pool(() => new GoldCoin(), 36);
    this.floatingTextPool = new Pool(() => new FloatingText(), 32);
    this.aoePool = new Pool(() => new AoEZone(), 40);
    this.fireballPool = new Pool(() => new Fireball(), 24);

    this.state = 'menu'; // menu | playing | paused | gameover
    this.testMode = false;
    this.lastTime = 0;
    this.killCount = 0;
    this.survived = 0;
    this.lastGameOverStats = null;
    this.showEnemyDamageNumbers = true;
    try {
      const stored = localStorage.getItem('gachaSurvivorsShowEnemyDamage');
      if (stored !== null) this.showEnemyDamageNumbers = stored === '1';
    } catch (e) {}
    this.pointerX = 0;
    this.pointerY = 0;
    this.hasPointerAim = false;

    this.input = {
      up: false, down: false, left: false, right: false
    };

    this._bindUI();
    this._bindInput();
    this._bindPointer();
    MobileControls.init(this);
    this.canvas.addEventListener('pointerdown', () => SoundManager.unlock());
    this._resize();
    window.addEventListener('resize', () => this._resize());
    this._refreshMenuGold();

    I18n.onChange(() => {
      this._refreshMenuGold();
      this.help.rebuild();
      this.upgrades.refreshLocale();
      if (this.isStoreOpen()) this._renderStore();
      if (this.state === 'gameover') this._updateGameOverStats();
    });

    requestAnimationFrame((t) => this.loop(t));
  }

  _updateGameOverStats() {
    if (!this.lastGameOverStats) return;
    const s = this.lastGameOverStats;
    const el = document.getElementById('goStats');
    el.innerHTML =
      `${I18n.t('levelStat', s.level)}<br>` +
      `${I18n.t('goldStat', s.gold)}<br>` +
      `${I18n.t('killsStat', s.kills)}<br>` +
      `${I18n.t('timeStat', s.time)}`;
  }

  _bindUI() {
    document.getElementById('startBtn').onclick = () => this.startGame();
    document.getElementById('storeBtn').onclick = () => this.openStore();
    document.getElementById('storeCloseBtn').onclick = () => this.closeStore();
    document.getElementById('optionsBtn').onclick = () => this.openOptions();
    document.getElementById('optionsCloseBtn').onclick = () => this.closeOptions();
    document.getElementById('testBtn').onclick = () => this.startTestMode();
    document.getElementById('resetDataBtn').onclick = () => this.askResetData();
    document.getElementById('confirmResetDataYes').onclick = () => {
      this.closeResetDataConfirm();
      this.resetAllData();
    };
    document.getElementById('confirmResetDataNo').onclick = () => this.closeResetDataConfirm();
    document.getElementById('resumeBtn').onclick = () => this.resume();
    document.getElementById('restartBtn').onclick = () => this.askRestart();
    document.getElementById('confirmRestartYes').onclick = () => {
      this.closeRestartConfirm();
      this.restartGame();
    };
    document.getElementById('confirmRestartNo').onclick = () => this.closeRestartConfirm();
    document.getElementById('menuBtn').onclick = () => this.askToMenu();
    document.getElementById('confirmMenuYes').onclick = () => this.toMenu();
    document.getElementById('confirmMenuNo').onclick = () => this.closeMenuConfirm();
    document.getElementById('goMenuBtn').onclick = () => this.toMenu();
    document.getElementById('helpBtnMain').onclick = () => this.help.open('menu');
    document.getElementById('helpBtnPause').onclick = () => this.help.open('pause');
    document.getElementById('statsBtn').onclick = () => this.openStats();
    document.getElementById('currentStatsCloseBtn').onclick = () => this.closeStats();

    const dmgToggle = document.getElementById('damageNumbersToggle');
    if (dmgToggle) {
      dmgToggle.checked = !!this.showEnemyDamageNumbers;
      dmgToggle.onchange = () => {
        this.showEnemyDamageNumbers = !!dmgToggle.checked;
        try {
          localStorage.setItem(
            'gachaSurvivorsShowEnemyDamage',
            this.showEnemyDamageNumbers ? '1' : '0'
          );
        } catch (e) {}
      };
    }
  }

  _bindPointer() {
    const update = (clientX, clientY) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / Math.max(1, rect.width);
      const scaleY = this.canvas.height / Math.max(1, rect.height);
      this.pointerX = (clientX - rect.left) * scaleX;
      this.pointerY = (clientY - rect.top) * scaleY;
      this.hasPointerAim = true;
    };
    window.addEventListener('pointermove', (e) => update(e.clientX, e.clientY));
    this.canvas.addEventListener('pointerdown', (e) => update(e.clientX, e.clientY));
  }

  getAimPoint() {
    if (this.hasPointerAim) {
      return this.camera.screenToWorld(this.pointerX, this.pointerY);
    }
    return {
      x: this.player.x + this.player.facing * 120,
      y: this.player.y
    };
  }

  _bindInput() {
    const set = (e, v) => {
      switch (e.code) {
        case 'KeyW': case 'ArrowUp': this.input.up = v; break;
        case 'KeyS': case 'ArrowDown': this.input.down = v; break;
        case 'KeyA': case 'ArrowLeft': this.input.left = v; break;
        case 'KeyD': case 'ArrowRight': this.input.right = v; break;
        case 'Digit1': case 'Digit2': case 'Digit3': case 'Digit4': case 'Digit5':
        case 'Numpad1': case 'Numpad2': case 'Numpad3': case 'Numpad4': case 'Numpad5':
          if (!v || e.repeat) break;
          if (this.upgrades.handleKey(e.code)) e.preventDefault();
          break;
        case 'Escape':
          if (v) {
            // The upgrade choice is mandatory — Esc must not dismiss it
            if (this.upgrades.isOpen()) break;
            if (this.isResetDataConfirmOpen()) this.closeResetDataConfirm();
            else if (this.isMenuConfirmOpen()) this.closeMenuConfirm();
            else if (this.isRestartConfirmOpen()) this.closeRestartConfirm();
            else if (this.isStoreOpen()) this.closeStore();
            else if (this.isOptionsOpen()) this.closeOptions();
            else if (this.isStatsOpen()) this.closeStats();
            else if (this.help.isOpen()) this.help.close();
            else this.togglePause();
          }
          break;
      }
    };
    window.addEventListener('keydown', (e) => {
      SoundManager.unlock();
      set(e, true);
    });
    window.addEventListener('keyup', (e) => set(e, false));
  }

  _resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.camera.resize(this.canvas.width, this.canvas.height);
  }

  startGame() {
    this.testMode = false;
    this.player.invulnerable = false;
    this._clearPools();
    this.upgrades.reset();
    this.effects.reset();
    this.weapons.reset();
    SaveManager.clear();

    this.player.reset();
    this.waves.reset();
    this.killCount = 0;
    this.survived = 0;
    this._bankedRunGold = 0;
    // Every run opens with the boomstick
    this.weapons.grant('shotgun', 1, null);

    this.state = 'playing';
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('pauseMenu').classList.add('hidden');
    document.getElementById('gameOverMenu').classList.add('hidden');
    this.closeStore();
    this.closeOptions();
    this.ui.setControlsVisible(true);
  }

  startTestMode() {
    this._clearPools();
    this.upgrades.reset();
    this.effects.reset();
    this.weapons.reset();
    this.player.reset();
    this.waves.reset();
    this.killCount = 0;
    this.survived = 0;
    this.testMode = true;
    this.player.invulnerable = true;
    this.player.level = 30;
    this.player.currency = 9999;
    for (const id of WEAPON_IDS) this.weapons.grant(id, 1, null);

    this.state = 'playing';
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('pauseMenu').classList.add('hidden');
    document.getElementById('gameOverMenu').classList.add('hidden');
    this.closeStore();
    this.closeOptions();
    this.ui.setControlsVisible(true);

    const types = [
      { type: 'slime' },
      { type: 'zombie' },
      { type: 'skeleton' },
      { type: 'bomber' },
      { type: 'mage' },
      { type: 'wolf' },
      { type: 'robot' },
      { type: 'priest' },
      { type: 'ufo' },
      { type: 'dragon', variant: 'crimson' },
      { type: 'dragon', variant: 'void' },
      { type: 'dragon', variant: 'bone' },
      { type: 'dragon', variant: 'ember' }
    ];

    // Chessboard grid around the player (origin), skip center
    const cellX = 720;
    const cellY = 520;
    const coords = [];
    for (let row = -2; row <= 2; row++) {
      for (let col = -3; col <= 3; col++) {
        if (row === 0 && col === 0) continue;
        // Chessboard squares only (alternating)
        if (((row + col) & 1) !== 0) continue;
        coords.push({ x: col * cellX, y: row * cellY });
      }
    }
    // Prefer nearer cells first so the 13 mobs hug the player
    coords.sort((a, b) => (a.x * a.x + a.y * a.y) - (b.x * b.x + b.y * b.y));

    this.player.x = 0;
    this.player.y = 0;
    this.testSpawns = types.map((slot, i) => ({
      type: slot.type,
      variant: slot.variant || null,
      x: coords[i].x,
      y: coords[i].y,
      enemy: null
    }));
    this._maintainTestEnemies();
    this.ui.toast(I18n.t('testModeToast'), 'legendary');
  }

  _maintainTestEnemies() {
    if (!this.testMode || !this.testSpawns) return;
    for (const slot of this.testSpawns) {
      if (slot.enemy && slot.enemy.active) continue;
      const e = this.enemyPool.acquire();
      e.spawn(slot.type, slot.x, slot.y, this.sprites, 5, 30, slot.variant);
      slot.enemy = e;
    }
  }

  restartGame() {
    if (this.testMode) {
      this.startTestMode();
      return;
    }
    this._bankRunGold();
    SaveManager.clear();
    this._clearPools();
    this.upgrades.reset();
    this.effects.reset();
    this.weapons.reset();
    this.player.reset();
    this.waves.reset();
    this.killCount = 0;
    this.survived = 0;
    this._bankedRunGold = 0;
    this.weapons.grant('shotgun', 1, null);
    this.state = 'playing';
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('pauseMenu').classList.add('hidden');
    document.getElementById('gameOverMenu').classList.add('hidden');
    this.ui.setControlsVisible(true);
  }

  /* Commits run gold to the persistent save. Safe to call repeatedly (on pause,
     on death, or when leaving to the menu): only the not-yet-banked portion is
     added, so the run's own gold counter keeps showing the full total. */
  _bankRunGold() {
    if (this.testMode || typeof MetaProgression === 'undefined') return;
    const total = Math.floor(this.player.currency);
    const delta = total - (this._bankedRunGold || 0);
    if (delta > 0) {
      MetaProgression.addGold(delta);
      this._bankedRunGold = total;
    }
  }

  askToMenu() {
    if (this.state === 'menu') return;
    this.closeRestartConfirm();
    document.getElementById('confirmMenu').classList.remove('hidden');
  }

  closeMenuConfirm() {
    document.getElementById('confirmMenu').classList.add('hidden');
  }

  isMenuConfirmOpen() {
    return !document.getElementById('confirmMenu').classList.contains('hidden');
  }

  toMenu() {
    this.upgrades.close();
    this.closeRestartConfirm();
    this.closeMenuConfirm();
    document.getElementById('currentStatsOverlay').classList.add('hidden');
    this._bankRunGold();
    // Runs are never resumed, so nothing about this one is kept
    SaveManager.clear();
    this.testMode = false;
    this.player.invulnerable = false;
    this.state = 'menu';
    document.getElementById('mainMenu').classList.remove('hidden');
    document.getElementById('pauseMenu').classList.add('hidden');
    document.getElementById('gameOverMenu').classList.add('hidden');
    this.ui.setControlsVisible(false);
    this._refreshMenuGold();
  }

  _refreshMenuGold() {
    const el = document.getElementById('menuGold');
    if (!el) return;
    const g = (typeof MetaProgression !== 'undefined') ? MetaProgression.gold : 0;
    el.textContent = I18n.t('menuGold', Math.floor(g));
  }

  isStoreOpen() {
    const el = document.getElementById('storeOverlay');
    return !!(el && !el.classList.contains('hidden'));
  }

  openStore() {
    if (this.state !== 'menu') return;
    this.closeResetDataConfirm();
    this.closeOptions();
    this._renderStore();
    document.getElementById('storeOverlay').classList.remove('hidden');
  }

  closeStore() {
    const el = document.getElementById('storeOverlay');
    if (el) el.classList.add('hidden');
  }

  isOptionsOpen() {
    const el = document.getElementById('optionsOverlay');
    return !!(el && !el.classList.contains('hidden'));
  }

  openOptions() {
    if (this.state !== 'menu') return;
    this.closeResetDataConfirm();
    this.closeStore();
    document.getElementById('optionsOverlay').classList.remove('hidden');
  }

  closeOptions() {
    const el = document.getElementById('optionsOverlay');
    if (el) el.classList.add('hidden');
  }

  _storeHelpDesc(storeId) {
    const def = typeof MetaProgression !== 'undefined' ? MetaProgression.def(storeId) : null;
    if (def && def.descKey) return I18n.t(def.descKey);
    const map = {
      moveSpeed: ['SPD'],
      maxHealth: ['HP'],
      attack: ['ATK'],
      attackSpeed: ['ASP'],
      bulletCount: ['BLT'],
      critical: ['CRT', 'CDM'],
      expMultiplier: ['EXP'],
      luck: ['LCK'],
      weaponRadius: ['RAD'],
      bulletSpeed: ['BSP']
    };
    const abbrs = map[storeId];
    if (!abbrs) return '';
    const stats = I18n.helpStats[I18n.lang] || I18n.helpStats.en;
    return abbrs.map((abbr) => {
      const entry = stats.find((s) => s.abbr === abbr);
      return entry ? entry.desc : '';
    }).filter(Boolean).join(' ');
  }

  _renderStore() {
    const list = document.getElementById('storeList');
    const goldEl = document.getElementById('storeGold');
    if (!list || typeof MetaProgression === 'undefined') return;
    goldEl.textContent = I18n.t('storeGoldVal', Math.floor(MetaProgression.gold).toLocaleString('en-US'));
    list.innerHTML = MetaProgression.DEFS.map((d) => {
      const lv = MetaProgression.levelOf(d.id);
      const maxed = lv >= d.max;
      const cost = MetaProgression.costOf(d.id);
      const spr = this.sprites[IconFactory.spriteKey(d.icon)];
      const img = spr ? `<img src="${spr.toDataURL()}" alt="">` : '<span></span>';
      const costLabel = cost != null ? cost.toLocaleString('en-US') : '';
      const btnLabel = maxed ? I18n.t('storeMaxed') : I18n.t('storeBuy', costLabel);
      const disabled = maxed || !MetaProgression.canBuy(d.id) ? ' disabled' : '';
      const desc = this._storeHelpDesc(d.id);
      const owned = lv > 0;
      const on = MetaProgression.isEnabled(d.id);
      const toggleLabel = on ? I18n.t('storeToggleOn') : I18n.t('storeToggleOff');
      const toggleBtn = owned
        ? `<button type="button" class="btn store-toggle${on ? '' : ' off'}" data-toggle-id="${d.id}">${toggleLabel}</button>`
        : '';
      return `<div class="store-row${maxed ? ' maxed' : ''}${owned && !on ? ' bonus-off' : ''}">
        ${img}
        <div class="store-info">
          <div class="store-name">${I18n.t(d.labelKey)}</div>
          <div class="store-meta">${I18n.t(d.valueKey)} · ${I18n.t('storeLevel', lv, d.max)}</div>
          ${desc ? `<div class="store-desc">${desc}</div>` : ''}
        </div>
        <div class="store-actions">
          <button type="button" class="btn" data-store-id="${d.id}"${disabled}>${btnLabel}</button>
          ${toggleBtn}
        </div>
      </div>`;
    }).join('');
    list.querySelectorAll('[data-store-id]').forEach((btn) => {
      btn.onclick = () => {
        if (MetaProgression.buy(btn.dataset.storeId)) {
          SoundManager.ui();
          this._renderStore();
          this._refreshMenuGold();
        }
      };
    });
    list.querySelectorAll('[data-toggle-id]').forEach((btn) => {
      btn.onclick = () => {
        MetaProgression.toggle(btn.dataset.toggleId);
        SoundManager.ui();
        this._renderStore();
      };
    });
  }

  isResetDataConfirmOpen() {
    const el = document.getElementById('confirmResetData');
    return !!(el && !el.classList.contains('hidden'));
  }

  askResetData() {
    if (this.state !== 'menu') return;
    this.closeStore();
    this.closeOptions();
    document.getElementById('confirmResetData').classList.remove('hidden');
  }

  closeResetDataConfirm() {
    const el = document.getElementById('confirmResetData');
    if (el) el.classList.add('hidden');
  }

  resetAllData() {
    SaveManager.clear();
    if (typeof MetaProgression !== 'undefined') MetaProgression.clear();
    this.upgrades.reset();
    this.weapons.reset();
    this.effects.reset();
    this.player.reset();
    this.waves.reset();
    this.killCount = 0;
    this.survived = 0;
    this._refreshMenuGold();
  }

  askRestart() {
    document.getElementById('confirmRestart').classList.remove('hidden');
  }

  closeRestartConfirm() {
    document.getElementById('confirmRestart').classList.add('hidden');
  }

  isRestartConfirmOpen() {
    return !document.getElementById('confirmRestart').classList.contains('hidden');
  }

  openStats() {
    document.getElementById('pauseMenu').classList.add('hidden');
    this._buildStatsPanel();
    document.getElementById('currentStatsOverlay').classList.remove('hidden');
  }

  closeStats() {
    document.getElementById('currentStatsOverlay').classList.add('hidden');
    if (this.state === 'paused') {
      document.getElementById('pauseMenu').classList.remove('hidden');
    }
  }

  isStatsOpen() {
    return !document.getElementById('currentStatsOverlay').classList.contains('hidden');
  }

  _statValueText(abbr) {
    const s = this.player.stats;
    const p = this.player;
    switch (abbr) {
      case 'SPD': return `${Math.round(s.moveSpeed)}`;
      case 'HP': return `${Math.round(p.health)} / ${Math.round(s.maxHealth)}`;
      case 'SHD': {
        const tower = this.weapons.get('towerShield');
        if (!tower) return '—';
        return `${Math.round(tower.state.shield || 0)} / ${Math.round(tower.state.maxShield || 0)}`;
      }
      case 'ATK': return `${s.attack.toFixed(1)}`;
      case 'ASP': return `${s.attackSpeed.toFixed(2)}/s`;
      case 'BLT': return `${Math.round(s.bulletCount)}`;
      case 'BSP': return `${Math.round(s.bulletSpeed)}`;
      case 'RAD': return `x${s.weaponRadius.toFixed(2)}`;
      case 'CRT': return `${Math.round(s.critChance * 100)}%`;
      case 'CDM': return `${s.critDamage.toFixed(2)}×`;
      case 'EXP': return `${s.expMultiplier.toFixed(2)}×`;
      case 'LCK': return `${p.luckMult.toFixed(2)}×`;
      default: return '';
    }
  }

  _buildStatsPanel() {
    const content = document.getElementById('currentStatsContent');
    const stats = I18n.helpStats[I18n.lang] || I18n.helpStats.en;
    const selected = new Set(this.player.selectedStatIds.map((id) => STAT_DEFS[id] && STAT_DEFS[id].icon));
    const iconHtml = (sprKey) => {
      const spr = sprKey ? this.sprites[sprKey] : null;
      if (!spr) return '';
      return `<span class="stat-icon"><canvas width="${spr.width}" height="${spr.height}" data-sprite="${sprKey}"></canvas></span>`;
    };

    // Weapons the run is actually carrying, then the stats it committed to
    const weaponRows = this.weapons.slots.map((w) => {
      const def = WEAPON_DEFS[w.id];
      const name = def ? I18n.t(def.nameKey) : w.id;
      const branch = w.branch ? ` ${I18n.t('weaponBranch', w.branch)}` : '';
      return `<div class="stat-entry"><div class="stat-head">` +
        `<span class="stat-name">${name}</span>` +
        `<span class="stat-value">${I18n.t('weaponLevel', w.level)}${branch}</span></div></div>`;
    }).join('');

    content.innerHTML =
      `<div class="help-section-title">${I18n.t('weaponsLabel')}</div>` +
      (weaponRows || '') +
      `<div class="help-section-title">${I18n.t('statsLabel')}</div>` +
      stats.map((s) => {
        const statKey = HelpPanel.abbrToStat[s.abbr];
        const sprKey = statKey ? IconFactory.spriteKey(statKey) : '';
        const chosen = selected.has(statKey) ? ' chosen' : '';
        return `<div class="stat-entry${chosen}"><div class="stat-head">${iconHtml(sprKey)}` +
          `<span class="stat-name">${s.name}<span class="stat-abbr">[${s.abbr}]</span></span>` +
          `<span class="stat-value">${this._statValueText(s.abbr)}</span></div>` +
          `<div class="stat-desc">${s.desc}</div></div>`;
      }).join('');
    content.querySelectorAll('canvas[data-sprite]').forEach((c) => {
      const spr = this.sprites[c.dataset.sprite];
      if (!spr) return;
      c.width = spr.width;
      c.height = spr.height;
      c.getContext('2d').drawImage(spr, 0, 0);
    });
    content.scrollTop = 0;
  }

  togglePause() {
    if (this.upgrades.isOpen() || this.help.isOpen() || this.isStatsOpen()) return;
    if (this.state === 'playing') {
      this.state = 'paused';
      // Commit run gold to the persistent save whenever the run is paused
      this._bankRunGold();
      this._refreshMenuGold();
      document.getElementById('pauseMenu').classList.remove('hidden');
      this.ui.setControlsVisible(false);
    } else if (this.state === 'paused') {
      this.resume();
    }
  }

  resume() {
    this.closeRestartConfirm();
    this.state = 'playing';
    document.getElementById('pauseMenu').classList.add('hidden');
    this.ui.setControlsVisible(true);
  }

  gameOver() {
    this.lastGameOverStats = {
      level: this.player.level,
      gold: Math.floor(this.player.currency),
      kills: this.killCount,
      time: Math.floor(this.survived)
    };

    this._bankRunGold();
    SaveManager.clear();
    this.upgrades.reset();
    this._clearPools();
    this.effects.reset();
    this.weapons.reset();
    this.player.reset();
    this.waves.reset();
    this.killCount = 0;
    this.survived = 0;

    this.state = 'gameover';
    SoundManager.death();
    this._updateGameOverStats();
    document.getElementById('gameOverMenu').classList.remove('hidden');
    this.ui.setControlsVisible(false);
  }

  _clearPools() {
    for (const p of [this.enemyPool, this.projPool, this.grenadePool, this.chestPool, this.chickenLegPool, this.particlePool, this.goldCoinPool, this.floatingTextPool, this.aoePool, this.fireballPool]) {
      for (const item of p.items) item.active = false;
    }
    this.spatial.clear();
    for (const e of this.enemyPool.items) {
      e.carrying = false;
      e.dying = false;
      e._lootGiven = false;
      e.buffSource = null;
      e.buffTargets.length = 0;
    }
    this.player.carriedBy = null;
  }

  spawnFloatingText(wx, wy, text, color, size) {
    const t = this.floatingTextPool.acquire();
    t.spawn(wx, wy, text, color, size);
  }

  spawnGoldCoins(wx, wy, amount) {
    const maxOnScreen = 20;
    const active = this.goldCoinPool.countActive();
    if (active >= maxOnScreen) return;

    const s = this.camera.worldToScreen(wx, wy);
    const target = this.ui.getGoldCounterPos();
    const slots = maxOnScreen - active;
    const count = Math.min(slots, Math.min(5, Math.max(1, Math.ceil(Math.sqrt(amount) * 0.5))));
    for (let i = 0; i < count; i++) {
      const c = this.goldCoinPool.acquire();
      const spread = 14 + count * 2;
      c.spawn(
        s.x + (Math.random() - 0.5) * spread,
        s.y + (Math.random() - 0.5) * spread,
        target.x + (Math.random() - 0.5) * 6,
        target.y + (Math.random() - 0.5) * 4
      );
    }
  }

  addCurrency(amount) {
    return this.player.addCurrency(amount, this);
  }

  countEnemies(type) {
    let n = 0;
    this.enemyPool.forEachActive((e) => { if (e.type === type) n++; });
    return n;
  }

  hasEnemy(type) {
    let found = false;
    this.enemyPool.forEachActive((e) => { if (e.type === type) found = true; });
    return found;
  }

  findBuffCandidate(priest, maxDist) {
    let best = null;
    let bestD = maxDist * maxDist;
    this.enemyPool.forEachActive((e) => {
      if (e === priest || e.buffSource || !e.canBeBuffed()) return;
      const dx = e.x - priest.x;
      const dy = e.y - priest.y;
      const d = dx * dx + dy * dy;
      if (d < bestD) { bestD = d; best = e; }
    });
    return best;
  }

  /* Cursed Totem suppresses priest healing for foes in its aura or already cursed. */
  isPriestHealBlocked(e) {
    if (!e || e.dying) return true;
    if (e.curse > 0) return true;
    const w = this.weapons && this.weapons.get('cursedTotem');
    const totems = w && w.state && w.state.totems;
    if (!totems || !totems.length) return false;
    for (const t of totems) {
      const r = t.radius || 220;
      const dx = e.x - t.x;
      const dy = e.y - t.y;
      if (dx * dx + dy * dy <= r * r) return true;
    }
    return false;
  }

  /* Densest nearby knot of enemies — where a UFO wants to dump the player. */
  findEnemyCluster(from) {
    const candidates = [];
    this.enemyPool.forEachActive((e) => {
      if (e === from || e.type === 'ufo' || candidates.length >= 24) return;
      const dx = e.x - from.x;
      const dy = e.y - from.y;
      if (dx * dx + dy * dy < 700 * 700) candidates.push(e);
    });

    let best = null;
    let bestScore = -1;
    for (const e of candidates) {
      let neighbours = 0;
      for (const o of candidates) {
        const ox = o.x - e.x;
        const oy = o.y - e.y;
        if (ox * ox + oy * oy < 130 * 130) neighbours++;
      }
      if (neighbours > bestScore) { bestScore = neighbours; best = e; }
    }
    if (best) return { x: best.x, y: best.y - 34 };
    const a = Math.random() * Math.PI * 2;
    return { x: from.x + Math.cos(a) * 320, y: from.y + Math.sin(a) * 320 };
  }

  spawnFireball(x, y, tx, ty, damage) {
    const f = this.fireballPool.acquire();
    f.spawn(x, y, tx, ty, damage, 95 + Math.random() * 35);
  }

  spawnFireBurst(x, y) {
    SoundManager.fireLand();
    for (let i = 0; i < 18; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 40 + Math.random() * 150;
      const p = this.particlePool.acquire();
      p.spawn(x, y, Math.cos(a) * sp, Math.sin(a) * sp, 0.4 + Math.random() * 0.4,
        Math.random() > 0.5 ? '#ff6a00' : '#ffd23d', 4 + Math.random() * 4);
    }
  }

  spawnEmber(x, y, size) {
    if (this.particlePool.countActive() > 240) return;
    const a = Math.random() * Math.PI * 2;
    const sp = 8 + Math.random() * 28;
    const p = this.particlePool.acquire();
    p.spawn(x + (Math.random() - 0.5) * 8, y + (Math.random() - 0.5) * 8,
      Math.cos(a) * sp, Math.sin(a) * sp - 20, 0.25 + Math.random() * 0.25,
      Math.random() > 0.4 ? '#ff8a2a' : '#ffd23d', size * (0.6 + Math.random() * 0.6));
  }

  findNearestEnemy(x, y, maxDist) {
    return this.spatial.nearest(x, y, maxDist);
  }

  spawnPlayerProjectile(x, y, vx, vy, dmg, isCrit) {
    const p = this.projPool.acquire();
    p.spawn(x, y, vx, vy, dmg, isCrit, true, this.sprites.bullet, 1.8);
  }

  spawnEnemyProjectile(x, y, vx, vy, dmg) {
    const p = this.projPool.acquire();
    p.spawn(x, y, vx, vy, dmg, false, false, this.sprites.arrow, 3.5);
  }

  spawnAoE(x, y, radius, damage, warnTime) {
    const a = this.aoePool.acquire();
    a.spawn(x, y, radius, damage, warnTime);
  }

  // Lingering flames left where a dragon fireball lands; damage over time
  spawnFireZone(x, y, radius, damage) {
    const a = this.aoePool.acquire();
    const duration = 3.2;
    a.spawn(x, y, radius, damage, 0, 'fire', {
      mode: 'burn',
      duration,
      dps: damage * 0.7
    });
  }

  spawnExplosion(x, y) {
    for (let i = 0; i < 18; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 40 + Math.random() * 120;
      const p = this.particlePool.acquire();
      p.spawn(x, y, Math.cos(a) * sp, Math.sin(a) * sp, 0.4 + Math.random() * 0.3,
        Math.random() > 0.5 ? '#ff4400' : '#ffaa00', 3 + Math.random() * 4);
    }
  }

  /* Richer blast for grenade landings: flash ring + fire/smoke/debris spray. */
  spawnGrenadeSplash(x, y, radius = 55) {
    if (this.aoePool) {
      const flash = this.aoePool.acquire();
      flash.spawn(x, y, radius, 0, 0, 'fire', { duration: 0.22, mode: 'hit' });
    }
    const colors = ['#ff4400', '#ffaa00', '#ffe680', '#ff7020', '#c04010', '#666'];
    for (let i = 0; i < 34; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 50 + Math.random() * 200;
      const p = this.particlePool.acquire();
      const smoke = i > 22;
      p.spawn(
        x + (Math.random() - 0.5) * 12,
        y + (Math.random() - 0.5) * 12,
        Math.cos(a) * sp * (smoke ? 0.45 : 1),
        Math.sin(a) * sp * (smoke ? 0.45 : 1) - (smoke ? 20 : 40),
        smoke ? 0.7 + Math.random() * 0.45 : 0.35 + Math.random() * 0.35,
        smoke ? (Math.random() > 0.5 ? '#555' : '#888') : colors[(Math.random() * 5) | 0],
        smoke ? 5 + Math.random() * 6 : 3 + Math.random() * 5,
        smoke ? 30 : 90
      );
    }
    // Bright upward sparks
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI * 0.5 + (Math.random() - 0.5) * 1.2;
      const sp = 80 + Math.random() * 160;
      const p = this.particlePool.acquire();
      p.spawn(x, y, Math.cos(a) * sp, Math.sin(a) * sp,
        0.3 + Math.random() * 0.25, '#fff0a0', 2 + Math.random() * 2, 140);
    }
  }

  spawnChestParticles(x, y, tier) {
    const colors = { common: '#c9a227', rare: '#4a90ff', epic: '#c040ff' };
    const col = colors[tier];
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 30 + Math.random() * 80;
      const p = this.particlePool.acquire();
      p.spawn(x, y, Math.cos(a) * sp, Math.sin(a) * sp - 40, 0.5 + Math.random() * 0.4, col, 3, 80);
    }
  }

  spawnHealParticles(x, y) {
    for (let i = 0; i < 10; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 25 + Math.random() * 70;
      const p = this.particlePool.acquire();
      p.spawn(x, y, Math.cos(a) * sp, Math.sin(a) * sp - 30, 0.45 + Math.random() * 0.35,
        Math.random() > 0.4 ? '#7dff9a' : '#e74c3c', 3, 70);
    }
  }

  _enemyDiscoveryId(e) {
    if (e.type === 'dragon') {
      const v = e.dragonVariant || 'crimson';
      return 'dragon' + v.charAt(0).toUpperCase() + v.slice(1);
    }
    return e.type;
  }

  _onEnemyKilled(e, silent = false) {
    if (e._lootGiven) return;
    e._lootGiven = true;
    // Dragon plays its own long groan; skip the short kill blip for it
    if (!silent && e.type !== 'dragon') SoundManager.kill();
    if (e.carrying) e.releaseAbduction(this.player, this);
    if (typeof MetaProgression !== 'undefined') {
      MetaProgression.discover('enemies', this._enemyDiscoveryId(e));
    }
    const gold = this.addCurrency(e.goldDrop);
    this.killCount++;
    this.spawnGoldCoins(e.x, e.y, gold);
    this._deathParticles(e.x, e.y);
    this.waves.rollKillDrops(this, e.x, e.y, e);
    if (e.type === 'dragon') this.ui.toast(I18n.t('bossSlain'), 'legendary');
  }

  _deathParticles(x, y) {
    for (let i = 0; i < 6; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 20 + Math.random() * 60;
      const p = this.particlePool.acquire();
      p.spawn(x, y, Math.cos(a) * sp, Math.sin(a) * sp, 0.3, '#7dff9a', 2 + Math.random() * 2);
    }
  }

  loop(timestamp) {
    const dt = Math.min(0.05, (timestamp - this.lastTime) / 1000) || 0.016;
    this.lastTime = timestamp;

    if (this.state === 'playing' && !this.upgrades.isOpen()) this.update(dt);
    if (this.state === 'playing' || this.state === 'paused' || this.state === 'gameover') {
      this.floatingTextPool.forEachActive((t) => t.update(dt));
      this.goldCoinPool.forEachActive((c) => c.update(dt, this.ui));
    }
    this.ui.update(dt, this.state === 'playing' || this.state === 'paused' || this.state === 'gameover' ? this.player : null);
    this.draw();

    requestAnimationFrame((t) => this.loop(t));
  }

  update(dt) {
    this.survived += dt;
    // Weapons query the grid as they fire, so it has to be current first
    this.spatial.insertAll(this.enemyPool);
    this.player.update(dt, this.input, this);
    this.camera.follow(this.player);
    this.waves.update(dt, this);
    if (this.testMode) this._maintainTestEnemies();

    this.enemyPool.forEachActive((e) => {
      e.update(dt, this.player, this);
      if (this.testMode || e.dying || e.carrying) return;
      const dx = e.x - this.player.x;
      const dy = e.y - this.player.y;
      if (dx * dx + dy * dy <= 900000) return;
      // Wounded enemies are never lost — they get relocated to a fresh spawn ring
      if (e.hp < e.maxHp) {
        const pos = this.waves.pickSpawnPos(this.player);
        e.x = pos.x;
        e.y = pos.y;
        e.contactCD = 0.5;
      } else {
        e.active = false;
      }
    });

    this.projPool.forEachActive((p) => {
      p.update(dt, this);
      if (!p.active) return;

      if (p.fromPlayer) {
        this._resolvePlayerProjectile(p);
      } else {
        if (this.weapons.tryBlockProjectile(this, p) || !p.active) return;
        const dx = this.player.x - p.x;
        const dy = this.player.y - p.y;
        if (dx * dx + dy * dy < (this.player.radius + p.radius) * (this.player.radius + p.radius)) {
          this.player.takeDamage(p.damage, this);
          p.active = false;
        }
      }
    });

    this.grenadePool.forEachActive((g) => g.update(dt, this));
    this.effects.update(dt, this);
    this.chestPool.forEachActive((c) => c.update(dt, this.player, this));
    this.chickenLegPool.forEachActive((item) => item.update(dt, this.player, this));
    this.aoePool.forEachActive((a) => a.update(dt, this.player, this));
    this.fireballPool.forEachActive((f) => f.update(dt, this));
    this.particlePool.forEachActive((p) => p.update(dt));

    if (!this.player.alive) this.gameOver();
  }

  /* Player projectiles pierce, split, and explode, so hits run through the
     shared _hitEnemy helper instead of touching enemy HP directly. */
  _resolvePlayerProjectile(p) {
    const hitRadius = p.radius + 40;
    this.spatial.queryCircle(p.x, p.y, hitRadius, (e) => {
      if (!p.active || e.dying) return;
      if (p.hitSet && p.hitSet.has(e)) return;
      const rr = e.radius + p.radius;
      const dx = e.x - p.x;
      const dy = e.y - p.y;
      if (dx * dx + dy * dy > rr * rr) return;

      if (p.hitSet) p.hitSet.add(e);
      _hitEnemy(this, e, p.damage, p.isCrit, p.weaponOpts);
      if (p.onHit) p.onHit(e, this);

      if (p.explosive) {
        this.spawnExplosion(p.x, p.y);
        const blastR = typeof weaponScaleRadius === 'function'
          ? weaponScaleRadius(46, this.player) : 46;
        this.spatial.queryCircle(p.x, p.y, blastR, (o) => {
          if (o === e) return;
          _hitEnemy(this, o, p.damage * 0.6, false, null);
        }, 12);
      }
      if (p.split) {
        p.split = false;
        for (let i = -1; i <= 1; i += 2) {
          const ang = Math.atan2(p.vy, p.vx) + i * 0.5;
          const spd = p.speed() || 220;
          const child = this.projPool.acquire();
          child.spawn(p.x, p.y, Math.cos(ang) * spd, Math.sin(ang) * spd,
            p.damage * 0.5, p.isCrit, true, null, 0.5);
          child.color = p.color;
          child.kind = p.kind;
          child.radius = p.radius;
        }
      }

      if (p.pierceLeft > 0) {
        p.pierceLeft--;
        if (!p.hitSet) p.hitSet = new Set([e]);
      } else if (!p.keepFlying) {
        p.active = false;
      }
    }, 16);
  }

  /* ---- World ground ---- */
  _hash(x, y) {
    let n = x * 374761393 + y * 668265263;
    n = (n ^ (n >> 13)) * 1274126177;
    return ((n ^ (n >> 16)) >>> 0) / 4294967296;
  }

  drawWorld() {
    const ctx = this.ctx;
    const cam = this.camera;
    const tile = 48;

    const startTX = Math.floor(cam.x / tile) - 1;
    const startTY = Math.floor(cam.y / tile) - 1;
    const endTX = Math.ceil((cam.x + cam.w) / tile) + 1;
    const endTY = Math.ceil((cam.y + cam.h) / tile) + 1;

    for (let ty = startTY; ty <= endTY; ty++) {
      for (let tx = startTX; tx <= endTX; tx++) {
        const h = this._hash(tx, ty);
        const h2 = this._hash(tx + 17, ty + 31);
        // Grass color variation
        const g = 90 + Math.floor(h * 40);
        const r = 30 + Math.floor(h2 * 25);
        const b = 30 + Math.floor(h * 20);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        const sx = tx * tile - cam.x;
        const sy = ty * tile - cam.y;
        ctx.fillRect(sx, sy, tile + 1, tile + 1);

        // Decorations
        if (h > 0.82) {
          const spr = this.sprites['flower' + Math.floor(h2 * 3)];
          ctx.drawImage(spr, sx + h2 * 20, sy + h * 20);
        } else if (h > 0.72) {
          ctx.drawImage(this.sprites.plant, sx + h2 * 24, sy + h * 18);
        } else if (h > 0.66) {
          ctx.drawImage(this.sprites.stone, sx + h2 * 16, sy + h * 16);
        }
      }
    }
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.camera.w, this.camera.h);

    if (this.state === 'menu') {
      // Atmospheric background for menu
      this.camera.x = Math.sin(performance.now() * 0.0001) * 200;
      this.camera.y = Math.cos(performance.now() * 0.00008) * 150;
      this.drawWorld();
      return;
    }

    this.drawWorld();

    // Sort-ish: chests, chicken legs, enemies, projectiles, player, particles
    this.chestPool.forEachActive((c) => c.draw(ctx, this.camera));
    this.chickenLegPool.forEachActive((item) => item.draw(ctx, this.camera));
    this.aoePool.forEachActive((a) => a.draw(ctx, this.camera));
    this.effects.draw(ctx, this.camera);
    this.enemyPool.forEachActive((e) => e.draw(ctx, this.camera));
    this.projPool.forEachActive((p) => p.draw(ctx, this.camera));
    this.grenadePool.forEachActive((g) => g.draw(ctx, this.camera));
    this.player.draw(ctx, this.camera);
    this.weapons.draw(ctx, this.camera, this);
    this.floatingTextPool.forEachActive((t) => t.draw(ctx, this.camera));
    this.particlePool.forEachActive((p) => p.draw(ctx, this.camera));

    this._drawDamageVignette(ctx);

    if (this.state === 'playing' || this.state === 'paused' || this.state === 'gameover') {
      this.ui.draw(ctx, this.player, this.camera, this.enemyPool.countActive(), this);
      this.goldCoinPool.forEachActive((c) => c.draw(ctx));
    }
  }

  _drawDamageVignette(ctx) {
    const p = this.player;
    const strong = p.hpFlash > 0;
    if (!strong && p.shieldFlash <= 0) return;

    // Flat edge blink: constant alpha for the whole flash, no fade or scaling
    const w = this.camera.w;
    const h = this.camera.h;
    const band = Math.round(Math.min(w, h) * 0.05);
    ctx.fillStyle = strong ? 'rgba(231,76,60,0.5)' : 'rgba(52,152,219,0.32)';
    ctx.fillRect(0, 0, w, band);
    ctx.fillRect(0, h - band, w, band);
    ctx.fillRect(0, band, band, h - band * 2);
    ctx.fillRect(w - band, band, band, h - band * 2);
  }
}

/* Boot entry used by assets/js/preloader.js after all assets are ready */
window.bootGame = async function bootGame(preloadedDragons) {
  I18n.init();
  SoundManager.init();
  SoundManager.bindUiClicks();
  if (typeof MetaProgression !== 'undefined') MetaProgression.load();
  if (typeof window._bindWeaponSounds === 'function') window._bindWeaponSounds();
  try {
    const dragons = preloadedDragons || await SpriteFactory.loadDragons();
    window.game = new Game(dragons);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
