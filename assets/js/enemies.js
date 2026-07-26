'use strict';
/* Enemy roster: data-driven defs, template sprites, special AI */

const EnemyTemplates = {"blob": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 0, 0, 0, 1, 2, 3, 3, 4, 3, 4, 3, 3, 2, 2, 1, 0, 0, 0, 1, 2, 5, 5, 4, 3, 3, 3, 3, 4, 5, 5, 2, 1, 0, 0, 1, 2, 1, 5, 3, 3, 3, 3, 3, 3, 1, 5, 2, 1, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 6, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 6, 1, 0, 1, 6, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 6, 1, 0, 0, 0, 1, 6, 6, 2, 2, 2, 2, 2, 6, 6, 1, 0, 0, 0, 0, 0, 0, 1, 1, 6, 6, 6, 6, 6, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "biped": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 3, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "quadruped": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 4, 3, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 5, 5, 5, 2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 0, 1, 2, 2, 1, 0, 1, 2, 2, 2, 0, 1, 2, 2, 1, 0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "flyer": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 3, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 3, 0, 0, 0, 3, 3, 0, 1, 2, 2, 2, 2, 1, 0, 3, 3, 0, 0, 0, 0, 0, 3, 1, 2, 4, 3, 4, 2, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "insect": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 4, 3, 4, 2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 3, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 3, 0, 3, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 3, 0, 0, 0, 3, 0, 1, 2, 2, 1, 1, 2, 1, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 1, 1, 0, 0, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "tall": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "centaur": [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 5, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 1, 0, 1, 2, 2, 1, 0, 1, 2, 2, 1, 1, 0, 1, 2, 2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 2, 1, 0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "flower": [0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 5, 5, 5, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 5, 5, 5, 5, 5, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 5, 5, 5, 5, 5, 5, 5, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 5, 5, 5, 5, 5, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 5, 5, 5, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "jelly": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 5, 5, 5, 2, 1, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 2, 1, 0, 0, 0, 1, 2, 5, 5, 5, 4, 3, 4, 5, 5, 5, 5, 2, 1, 0, 1, 2, 5, 5, 5, 4, 3, 3, 3, 4, 5, 5, 5, 5, 2, 1, 1, 2, 5, 5, 5, 3, 3, 3, 3, 3, 5, 5, 5, 5, 2, 1, 0, 1, 2, 5, 5, 5, 3, 3, 3, 5, 5, 5, 5, 2, 1, 0, 0, 0, 1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 2, 1, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 5, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "mummy": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "robotoid": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "demon": [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "angel": [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 1, 2, 2, 2, 1, 0, 0, 3, 3, 0, 0, 3, 0, 3, 0, 1, 2, 5, 5, 5, 5, 2, 1, 0, 3, 0, 3, 0, 3, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sphinx": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 5, 5, 5, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 4, 3, 4, 2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 0, 1, 2, 2, 1, 0, 1, 2, 2, 2, 0, 1, 2, 2, 1, 0, 0, 0, 1, 2, 2, 0, 0, 1, 2, 0, 0, 0, 2, 2, 1, 0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "whale": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 5, 5, 5, 5, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "colossus": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 5, 5, 5, 5, 5, 5, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 2, 4, 3, 4, 2, 2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]};

const ENEMY_DEFS = Object.create(null);

function _enemyPal(colors) { return ['#0000', ...colors]; }
function _registerEnemy(def) { ENEMY_DEFS[def.id] = def; }

_registerEnemy({"id": "petalSlug", "gold": 2, "unlock": 1, "retire": [18, 36], "maxAlive": 0, "behavior": "chase", "template": "flower", "scale": 2.6, "radius": 12, "baseHp": 16, "baseSpeed": 32, "speedDiff": 0.4, "baseDamage": 7, "damageDiff": 0.25, "weightBase": 14, "weightDiff": 0.1, "weightLate": 0.02, "colors": ["#1a3a12", "#2d6b1e", "#5cb83a", "#9ae070", "#ff6b9d", "#145018", "#c4e89a"], "isNew": true, "contact": true});
_registerEnemy({"id": "sandMummy", "gold": 3, "unlock": 2, "retire": [22, 42], "maxAlive": 0, "behavior": "chase", "template": "mummy", "scale": 3.0, "radius": 14, "baseHp": 28, "baseSpeed": 38, "speedDiff": 0.45, "baseDamage": 10, "damageDiff": 0.3, "weightBase": 12, "weightDiff": 0.15, "weightLate": 0.03, "colors": ["#3a2a10", "#c2a36b", "#e8d4a2", "#f5ebd0", "#8a7040", "#5a4820", "#d4c090"], "isNew": true, "contact": true});
_registerEnemy({"id": "cinderRat", "gold": 2, "unlock": 3, "retire": [16, 32], "maxAlive": 0, "behavior": "chase", "template": "quadruped", "scale": 2.5, "radius": 11, "baseHp": 14, "baseSpeed": 78, "speedDiff": 0.9, "baseDamage": 8, "damageDiff": 0.28, "weightBase": 11, "weightDiff": 0.12, "weightLate": 0.02, "colors": ["#2a1010", "#8a2020", "#e04020", "#ff8040", "#ffd060", "#501010", "#c03018"], "isNew": true, "contact": true});
_registerEnemy({"id": "sporeCap", "gold": 2, "unlock": 4, "retire": [20, 38], "maxAlive": 0, "behavior": "chase", "template": "flower", "scale": 2.8, "radius": 13, "baseHp": 22, "baseSpeed": 36, "speedDiff": 0.4, "baseDamage": 9, "damageDiff": 0.28, "weightBase": 10, "weightDiff": 0.12, "weightLate": 0.025, "colors": ["#1a2010", "#4a6030", "#7a9a40", "#b8d060", "#e8f0a0", "#303818", "#98b050"], "isNew": true, "contact": true});
_registerEnemy({"id": "glassBeetle", "gold": 3, "unlock": 5, "retire": [24, 44], "maxAlive": 0, "behavior": "chase", "template": "insect", "scale": 2.7, "radius": 12, "baseHp": 20, "baseSpeed": 70, "speedDiff": 0.8, "baseDamage": 11, "damageDiff": 0.32, "weightBase": 9, "weightDiff": 0.14, "weightLate": 0.03, "colors": ["#102028", "#3a8090", "#70d0e0", "#c0f0ff", "#ffffff", "#184858", "#a0e8f0"], "isNew": true, "contact": true});
_registerEnemy({"id": "mossGolemkin", "gold": 3, "unlock": 6, "retire": [26, 46], "maxAlive": 0, "behavior": "chase", "template": "blob", "scale": 3.2, "radius": 15, "baseHp": 40, "baseSpeed": 28, "speedDiff": 0.3, "baseDamage": 12, "damageDiff": 0.35, "weightBase": 8, "weightDiff": 0.15, "weightLate": 0.03, "colors": ["#142014", "#3a5a30", "#5a8a48", "#8aba68", "#c0e090", "#243820", "#70a050"], "isNew": true, "contact": true});
_registerEnemy({"id": "lanternJelly", "gold": 3, "unlock": 7, "retire": [24, 42], "maxAlive": 0, "behavior": "chase", "template": "jelly", "scale": 3.0, "radius": 14, "baseHp": 24, "baseSpeed": 42, "speedDiff": 0.5, "baseDamage": 10, "damageDiff": 0.3, "weightBase": 8, "weightDiff": 0.14, "weightLate": 0.03, "colors": ["#201810", "#c07020", "#f0a030", "#ffe080", "#fff8c0", "#603010", "#e09040"], "isNew": true, "contact": true});
_registerEnemy({"id": "copperAnt", "gold": 3, "unlock": 8, "retire": [28, 48], "maxAlive": 0, "behavior": "chase", "template": "insect", "scale": 2.4, "radius": 10, "baseHp": 18, "baseSpeed": 72, "speedDiff": 0.85, "baseDamage": 9, "damageDiff": 0.3, "weightBase": 8, "weightDiff": 0.14, "weightLate": 0.03, "colors": ["#2a1810", "#8a4a20", "#c87830", "#e8a050", "#f0c880", "#503018", "#a85828"], "isNew": true, "contact": true});
_registerEnemy({"id": "reedStalker", "gold": 4, "unlock": 9, "retire": [30, 50], "maxAlive": 0, "behavior": "chase", "template": "flyer", "scale": 2.9, "radius": 13, "baseHp": 26, "baseSpeed": 55, "speedDiff": 0.6, "baseDamage": 12, "damageDiff": 0.35, "weightBase": 7, "weightDiff": 0.16, "weightLate": 0.035, "colors": ["#1a2810", "#4a6830", "#6a9040", "#a0c060", "#d0e890", "#283818", "#80a848"], "isNew": true, "contact": true});
_registerEnemy({"id": "ashImpkin", "gold": 4, "unlock": 10, "retire": [32, 52], "maxAlive": 0, "behavior": "chase", "template": "demon", "scale": 2.6, "radius": 12, "baseHp": 22, "baseSpeed": 60, "speedDiff": 0.7, "baseDamage": 13, "damageDiff": 0.38, "weightBase": 7, "weightDiff": 0.16, "weightLate": 0.04, "colors": ["#1a1010", "#4a3030", "#8a5050", "#c07070", "#ff4040", "#301818", "#a04040"], "isNew": true, "contact": true});
_registerEnemy({"id": "centaurScout", "gold": 5, "unlock": 13, "retire": [40, 60], "maxAlive": 0, "behavior": "chase", "template": "centaur", "scale": 3.4, "radius": 18, "baseHp": 48, "baseSpeed": 68, "speedDiff": 0.7, "baseDamage": 15, "damageDiff": 0.4, "weightBase": 6, "weightDiff": 0.2, "weightLate": 0.05, "colors": ["#2a2010", "#8a6030", "#c49050", "#e8c080", "#4060a0", "#403018", "#a07040"], "isNew": true, "contact": true});
_registerEnemy({"id": "mummyArcher", "gold": 5, "unlock": 14, "retire": [42, 62], "maxAlive": 0, "behavior": "ranged", "template": "mummy", "scale": 3.1, "radius": 14, "baseHp": 32, "baseSpeed": 48, "speedDiff": 0.5, "baseDamage": 12, "damageDiff": 0.35, "weightBase": 6, "weightDiff": 0.18, "weightLate": 0.045, "colors": ["#2a2418", "#b8a070", "#d8c898", "#f0e8d0", "#6a5a30", "#4a4020", "#c8b888"], "isNew": true, "contact": true});
_registerEnemy({"id": "angelicMite", "gold": 4, "unlock": 15, "retire": [38, 58], "maxAlive": 0, "behavior": "chase", "template": "angel", "scale": 2.4, "radius": 10, "baseHp": 16, "baseSpeed": 80, "speedDiff": 0.9, "baseDamage": 11, "damageDiff": 0.32, "weightBase": 6, "weightDiff": 0.18, "weightLate": 0.04, "colors": ["#202030", "#e8e0f0", "#ffffff", "#c0d0ff", "#ffe080", "#404060", "#d0d8f0"], "isNew": true, "contact": true});
_registerEnemy({"id": "demonPup", "gold": 5, "unlock": 16, "retire": [40, 60], "maxAlive": 0, "behavior": "chase", "template": "quadruped", "scale": 2.8, "radius": 13, "baseHp": 35, "baseSpeed": 75, "speedDiff": 0.85, "baseDamage": 16, "damageDiff": 0.42, "weightBase": 5.5, "weightDiff": 0.2, "weightLate": 0.05, "colors": ["#200808", "#6a1010", "#a02020", "#e04020", "#ff8020", "#400808", "#c02818"], "isNew": true, "contact": true});
_registerEnemy({"id": "alienPolyp", "gold": 5, "unlock": 17, "retire": [42, 62], "maxAlive": 0, "behavior": "chase", "template": "blob", "scale": 3.0, "radius": 15, "baseHp": 38, "baseSpeed": 44, "speedDiff": 0.5, "baseDamage": 14, "damageDiff": 0.4, "weightBase": 5.5, "weightDiff": 0.2, "weightLate": 0.05, "colors": ["#101828", "#204060", "#40a0c0", "#80e0ff", "#c0ffff", "#182838", "#60c0e0"], "isNew": true, "contact": true});
_registerEnemy({"id": "clockworkOwl", "gold": 6, "unlock": 18, "retire": [44, 64], "maxAlive": 0, "behavior": "chase", "template": "flyer", "scale": 3.2, "radius": 14, "baseHp": 42, "baseSpeed": 52, "speedDiff": 0.55, "baseDamage": 15, "damageDiff": 0.4, "weightBase": 5, "weightDiff": 0.22, "weightLate": 0.05, "colors": ["#1a1810", "#6a5a30", "#a09050", "#d0c070", "#ffd040", "#3a3020", "#b0a060"], "isNew": true, "contact": true});
_registerEnemy({"id": "frostLotus", "gold": 5, "unlock": 19, "retire": [44, 64], "maxAlive": 0, "behavior": "chase", "template": "flower", "scale": 3.0, "radius": 13, "baseHp": 36, "baseSpeed": 40, "speedDiff": 0.45, "baseDamage": 13, "damageDiff": 0.38, "weightBase": 5, "weightDiff": 0.2, "weightLate": 0.05, "colors": ["#102030", "#4080a0", "#70c0e0", "#c0f0ff", "#ffffff", "#183848", "#90d8f0"], "isNew": true, "contact": true});
_registerEnemy({"id": "boneCentaur", "gold": 6, "unlock": 20, "retire": [46, 66], "maxAlive": 0, "behavior": "chase", "template": "centaur", "scale": 3.5, "radius": 18, "baseHp": 50, "baseSpeed": 64, "speedDiff": 0.65, "baseDamage": 17, "damageDiff": 0.42, "weightBase": 4.5, "weightDiff": 0.22, "weightLate": 0.055, "colors": ["#1a1814", "#d0c8b8", "#f0e8d8", "#a09888", "#ff6060", "#404038", "#e0d8c8"], "isNew": true, "contact": true});
_registerEnemy({"id": "plagueFlower", "gold": 5, "unlock": 21, "retire": [46, 66], "maxAlive": 0, "behavior": "chase", "template": "flower", "scale": 3.1, "radius": 14, "baseHp": 40, "baseSpeed": 38, "speedDiff": 0.42, "baseDamage": 16, "damageDiff": 0.4, "weightBase": 4.5, "weightDiff": 0.2, "weightLate": 0.05, "colors": ["#201828", "#4a2060", "#8030a0", "#b050d0", "#60ff40", "#301838", "#9040b8"], "isNew": true, "contact": true});
_registerEnemy({"id": "rustAngel", "gold": 6, "unlock": 22, "retire": [48, 68], "maxAlive": 0, "behavior": "chase", "template": "angel", "scale": 3.3, "radius": 16, "baseHp": 55, "baseSpeed": 46, "speedDiff": 0.5, "baseDamage": 18, "damageDiff": 0.45, "weightBase": 4, "weightDiff": 0.22, "weightLate": 0.055, "colors": ["#2a1810", "#8a4a28", "#c07040", "#e0a060", "#6090c0", "#402818", "#a85838"], "isNew": true, "contact": true});
_registerEnemy({"id": "neonScarab", "gold": 6, "unlock": 23, "retire": [48, 68], "maxAlive": 0, "behavior": "chase", "template": "insect", "scale": 2.9, "radius": 13, "baseHp": 34, "baseSpeed": 76, "speedDiff": 0.9, "baseDamage": 15, "damageDiff": 0.4, "weightBase": 4, "weightDiff": 0.22, "weightLate": 0.055, "colors": ["#081018", "#00a080", "#00ffc0", "#80ffe0", "#ff00ff", "#104038", "#40e0c0"], "isNew": true, "contact": true});
_registerEnemy({"id": "warthogKnight", "gold": 7, "unlock": 24, "retire": [50, 70], "maxAlive": 0, "behavior": "chase", "template": "quadruped", "scale": 3.6, "radius": 17, "baseHp": 70, "baseSpeed": 50, "speedDiff": 0.5, "baseDamage": 20, "damageDiff": 0.48, "weightBase": 3.8, "weightDiff": 0.24, "weightLate": 0.06, "colors": ["#1a1410", "#5a4830", "#8a7048", "#c0a070", "#708090", "#302818", "#a08858"], "isNew": true, "contact": true});
_registerEnemy({"id": "silkWidow", "gold": 6, "unlock": 25, "retire": [50, 70], "maxAlive": 0, "behavior": "chase", "template": "insect", "scale": 3.2, "radius": 15, "baseHp": 45, "baseSpeed": 62, "speedDiff": 0.7, "baseDamage": 18, "damageDiff": 0.45, "weightBase": 3.8, "weightDiff": 0.22, "weightLate": 0.055, "colors": ["#101018", "#303040", "#606080", "#a0a0c0", "#ff4060", "#181820", "#8080a0"], "isNew": true, "contact": true});
_registerEnemy({"id": "obsidianToad", "gold": 7, "unlock": 26, "retire": [52, 72], "maxAlive": 0, "behavior": "chase", "template": "blob", "scale": 3.4, "radius": 16, "baseHp": 65, "baseSpeed": 34, "speedDiff": 0.35, "baseDamage": 19, "damageDiff": 0.45, "weightBase": 3.5, "weightDiff": 0.24, "weightLate": 0.06, "colors": ["#080810", "#202028", "#404050", "#707088", "#c0c0e0", "#101018", "#585868"], "isNew": true, "contact": true});
_registerEnemy({"id": "solarIbis", "gold": 8, "unlock": 29, "retire": [55, 75], "maxAlive": 0, "behavior": "chase", "template": "flyer", "scale": 3.3, "radius": 15, "baseHp": 52, "baseSpeed": 58, "speedDiff": 0.6, "baseDamage": 20, "damageDiff": 0.5, "weightBase": 3.2, "weightDiff": 0.25, "weightLate": 0.06, "colors": ["#2a2010", "#c08020", "#f0b040", "#ffe080", "#ffffff", "#503818", "#e09830"], "isNew": true, "contact": true});
_registerEnemy({"id": "abyssMerfolk", "gold": 8, "unlock": 30, "retire": [56, 76], "maxAlive": 0, "behavior": "chase", "template": "biped", "scale": 3.4, "radius": 15, "baseHp": 60, "baseSpeed": 55, "speedDiff": 0.55, "baseDamage": 21, "damageDiff": 0.5, "weightBase": 3, "weightDiff": 0.25, "weightLate": 0.065, "colors": ["#061828", "#104060", "#2080a0", "#40c0e0", "#80ffe0", "#0a2838", "#30a0c0"], "isNew": true, "contact": true});
_registerEnemy({"id": "gildedMummy", "gold": 10, "unlock": 32, "retire": [58, 78], "maxAlive": 0, "behavior": "chase", "template": "mummy", "scale": 3.8, "radius": 18, "baseHp": 110, "baseSpeed": 30, "speedDiff": 0.25, "baseDamage": 22, "damageDiff": 0.5, "weightBase": 2.8, "weightDiff": 0.26, "weightLate": 0.07, "colors": ["#2a2010", "#a08020", "#d0b040", "#f0e080", "#ffffff", "#504818", "#c0a030"], "isNew": true, "contact": true});
_registerEnemy({"id": "stormCentaur", "gold": 9, "unlock": 33, "retire": [58, 78], "maxAlive": 0, "behavior": "chase", "template": "centaur", "scale": 3.6, "radius": 19, "baseHp": 72, "baseSpeed": 72, "speedDiff": 0.75, "baseDamage": 23, "damageDiff": 0.52, "weightBase": 2.8, "weightDiff": 0.26, "weightLate": 0.07, "colors": ["#101828", "#4060a0", "#70a0e0", "#c0e0ff", "#ffe040", "#182040", "#5890d0"], "isNew": true, "contact": true});
_registerEnemy({"id": "crystalDemon", "gold": 9, "unlock": 34, "retire": [60, 80], "maxAlive": 0, "behavior": "chase", "template": "demon", "scale": 3.5, "radius": 16, "baseHp": 68, "baseSpeed": 58, "speedDiff": 0.65, "baseDamage": 26, "damageDiff": 0.55, "weightBase": 2.6, "weightDiff": 0.26, "weightLate": 0.07, "colors": ["#180828", "#6020a0", "#a040e0", "#d080ff", "#ffffff", "#301048", "#9040c8"], "isNew": true, "contact": true});
_registerEnemy({"id": "orchidMedusa", "gold": 9, "unlock": 36, "retire": [60, 80], "maxAlive": 0, "behavior": "chase", "template": "tall", "scale": 3.5, "radius": 16, "baseHp": 64, "baseSpeed": 50, "speedDiff": 0.55, "baseDamage": 24, "damageDiff": 0.52, "weightBase": 2.5, "weightDiff": 0.26, "weightLate": 0.07, "colors": ["#201028", "#803060", "#c05090", "#f080c0", "#60d040", "#401838", "#a04078"], "isNew": true, "contact": true});
_registerEnemy({"id": "orbitDrone", "gold": 8, "unlock": 37, "retire": [62, 82], "maxAlive": 0, "behavior": "chase", "template": "robotoid", "scale": 3.0, "radius": 14, "baseHp": 55, "baseSpeed": 70, "speedDiff": 0.8, "baseDamage": 20, "damageDiff": 0.5, "weightBase": 2.5, "weightDiff": 0.25, "weightLate": 0.07, "colors": ["#101018", "#304060", "#60a0c0", "#a0e0ff", "#40ff80", "#182030", "#80c0e0"], "isNew": true, "contact": true});
_registerEnemy({"id": "marbleCherub", "gold": 10, "unlock": 38, "retire": [62, 82], "maxAlive": 0, "behavior": "chase", "template": "angel", "scale": 3.6, "radius": 17, "baseHp": 95, "baseSpeed": 36, "speedDiff": 0.35, "baseDamage": 22, "damageDiff": 0.5, "weightBase": 2.3, "weightDiff": 0.26, "weightLate": 0.07, "colors": ["#282830", "#c0c0c8", "#e8e8f0", "#ffffff", "#d0b080", "#484850", "#d8d8e0"], "isNew": true, "contact": true});
_registerEnemy({"id": "blightUnicorn", "gold": 10, "unlock": 40, "retire": [64, 84], "maxAlive": 0, "behavior": "chase", "template": "quadruped", "scale": 3.5, "radius": 17, "baseHp": 78, "baseSpeed": 68, "speedDiff": 0.7, "baseDamage": 25, "damageDiff": 0.55, "weightBase": 2.2, "weightDiff": 0.28, "weightLate": 0.075, "colors": ["#1a1020", "#503060", "#8050a0", "#b080d0", "#40ff60", "#281828", "#9060b8"], "isNew": true, "contact": true});
_registerEnemy({"id": "forgeCyclops", "gold": 12, "unlock": 41, "retire": [64, 84], "maxAlive": 0, "behavior": "chase", "template": "tall", "scale": 4.2, "radius": 22, "baseHp": 120, "baseSpeed": 40, "speedDiff": 0.35, "baseDamage": 28, "damageDiff": 0.6, "weightBase": 2, "weightDiff": 0.28, "weightLate": 0.075, "colors": ["#201010", "#6a3030", "#a05030", "#e08040", "#ffe040", "#401818", "#c06038"], "isNew": true, "contact": true});
_registerEnemy({"id": "quillPorcupine", "gold": 8, "unlock": 42, "retire": [65, 85], "maxAlive": 0, "behavior": "chase", "template": "quadruped", "scale": 3.3, "radius": 20, "baseHp": 70, "baseSpeed": 45, "speedDiff": 0.45, "baseDamage": 24, "damageDiff": 0.52, "weightBase": 2, "weightDiff": 0.26, "weightLate": 0.07, "colors": ["#181410", "#5a4838", "#8a7860", "#c0a880", "#e0d0b0", "#302820", "#a09070"], "isNew": true, "contact": true});
_registerEnemy({"id": "moonKoi", "gold": 9, "unlock": 43, "retire": [66, 86], "maxAlive": 0, "behavior": "chase", "template": "flyer", "scale": 3.4, "radius": 15, "baseHp": 58, "baseSpeed": 64, "speedDiff": 0.7, "baseDamage": 21, "damageDiff": 0.5, "weightBase": 2, "weightDiff": 0.26, "weightLate": 0.07, "colors": ["#101828", "#c0c8e0", "#e8f0ff", "#ffffff", "#ff80c0", "#283048", "#d0d8f0"], "isNew": true, "contact": true});
_registerEnemy({"id": "tarSphinx", "gold": 12, "unlock": 45, "retire": [68, 88], "maxAlive": 0, "behavior": "chase", "template": "sphinx", "scale": 4.0, "radius": 20, "baseHp": 100, "baseSpeed": 42, "speedDiff": 0.4, "baseDamage": 27, "damageDiff": 0.58, "weightBase": 1.8, "weightDiff": 0.28, "weightLate": 0.08, "colors": ["#080808", "#202018", "#404028", "#706040", "#c0a060", "#10100c", "#585038"], "isNew": true, "contact": true});
_registerEnemy({"id": "voltMantis", "gold": 10, "unlock": 46, "retire": [68, 88], "maxAlive": 0, "behavior": "chase", "template": "insect", "scale": 3.4, "radius": 15, "baseHp": 62, "baseSpeed": 78, "speedDiff": 0.9, "baseDamage": 26, "damageDiff": 0.55, "weightBase": 1.8, "weightDiff": 0.28, "weightLate": 0.08, "colors": ["#101810", "#30a040", "#60ff40", "#c0ff80", "#ffff40", "#184020", "#80e050"], "isNew": true, "contact": true});
_registerEnemy({"id": "seraphEngine", "gold": 14, "unlock": 49, "retire": [72, 92], "maxAlive": 0, "behavior": "chase", "template": "angel", "scale": 4.0, "radius": 18, "baseHp": 90, "baseSpeed": 55, "speedDiff": 0.55, "baseDamage": 30, "damageDiff": 0.6, "weightBase": 1.6, "weightDiff": 0.3, "weightLate": 0.08, "colors": ["#202028", "#a0b0c0", "#e0f0ff", "#ffffff", "#60c0ff", "#404050", "#c0d0e0"], "isNew": true, "contact": true});
_registerEnemy({"id": "pharaohWasp", "gold": 12, "unlock": 50, "retire": [72, 92], "maxAlive": 0, "behavior": "chase", "template": "insect", "scale": 3.5, "radius": 16, "baseHp": 75, "baseSpeed": 80, "speedDiff": 0.95, "baseDamage": 28, "damageDiff": 0.58, "weightBase": 1.5, "weightDiff": 0.3, "weightLate": 0.08, "colors": ["#201808", "#a08020", "#e0c040", "#fff080", "#202020", "#403010", "#c0a030"], "isNew": true, "contact": true});
_registerEnemy({"id": "voidCentaur", "gold": 14, "unlock": 52, "retire": [74, 94], "maxAlive": 0, "behavior": "chase", "template": "centaur", "scale": 3.8, "radius": 19, "baseHp": 95, "baseSpeed": 70, "speedDiff": 0.75, "baseDamage": 32, "damageDiff": 0.62, "weightBase": 1.4, "weightDiff": 0.3, "weightLate": 0.085, "colors": ["#080818", "#302060", "#5040a0", "#8060e0", "#c0a0ff", "#181030", "#6050c0"], "isNew": true, "contact": true});
_registerEnemy({"id": "brimstoneLotus", "gold": 12, "unlock": 54, "retire": [75, 95], "maxAlive": 0, "behavior": "chase", "template": "flower", "scale": 3.6, "radius": 16, "baseHp": 80, "baseSpeed": 42, "speedDiff": 0.4, "baseDamage": 30, "damageDiff": 0.6, "weightBase": 1.4, "weightDiff": 0.3, "weightLate": 0.085, "colors": ["#200808", "#a02010", "#e04020", "#ff8040", "#ffe060", "#401010", "#c03018"], "isNew": true, "contact": true});
_registerEnemy({"id": "chromeCerberus", "gold": 15, "unlock": 56, "retire": [76, 96], "maxAlive": 0, "behavior": "chase", "template": "quadruped", "scale": 4.0, "radius": 20, "baseHp": 110, "baseSpeed": 60, "speedDiff": 0.65, "baseDamage": 34, "damageDiff": 0.65, "weightBase": 1.2, "weightDiff": 0.32, "weightLate": 0.09, "colors": ["#181820", "#808890", "#c0c8d0", "#e8f0f8", "#ff4040", "#303038", "#a0a8b0"], "isNew": true, "contact": true});
_registerEnemy({"id": "eclipseOwl", "gold": 14, "unlock": 58, "retire": [78, 98], "maxAlive": 0, "behavior": "chase", "template": "flyer", "scale": 4.2, "radius": 18, "baseHp": 100, "baseSpeed": 52, "speedDiff": 0.5, "baseDamage": 31, "damageDiff": 0.6, "weightBase": 1.2, "weightDiff": 0.3, "weightLate": 0.09, "colors": ["#080810", "#303048", "#505070", "#8080a0", "#ffe040", "#181828", "#606088"], "isNew": true, "contact": true});
_registerEnemy({"id": "jadeOni", "gold": 16, "unlock": 60, "retire": [78, 98], "maxAlive": 0, "behavior": "chase", "template": "demon", "scale": 4.0, "radius": 20, "baseHp": 130, "baseSpeed": 48, "speedDiff": 0.45, "baseDamage": 36, "damageDiff": 0.68, "weightBase": 1.1, "weightDiff": 0.32, "weightLate": 0.09, "colors": ["#081808", "#206030", "#40a050", "#80e080", "#ff4040", "#104020", "#50c060"], "isNew": true, "contact": true});
_registerEnemy({"id": "starUrchin", "gold": 12, "unlock": 62, "retire": [80, 100], "maxAlive": 0, "behavior": "chase", "template": "blob", "scale": 3.5, "radius": 18, "baseHp": 70, "baseSpeed": 40, "speedDiff": 0.4, "baseDamage": 33, "damageDiff": 0.62, "weightBase": 1.1, "weightDiff": 0.3, "weightLate": 0.09, "colors": ["#100828", "#402080", "#7040c0", "#a080ff", "#ffffff", "#201040", "#8060e0"], "isNew": true, "contact": true});
_registerEnemy({"id": "cathedralGolem", "gold": 18, "unlock": 64, "retire": [82, 100], "maxAlive": 0, "behavior": "chase", "template": "colossus", "scale": 5.5, "radius": 28, "baseHp": 180, "baseSpeed": 28, "speedDiff": 0.2, "baseDamage": 35, "damageDiff": 0.65, "weightBase": 1, "weightDiff": 0.32, "weightLate": 0.1, "colors": ["#181820", "#406080", "#80a0c0", "#c0e0ff", "#ff6080", "#283040", "#6090b0"], "isNew": true, "contact": true});
_registerEnemy({"id": "bloodOrchidKnight", "gold": 15, "unlock": 66, "retire": [84, 100], "maxAlive": 0, "behavior": "chase", "template": "biped", "scale": 3.8, "radius": 17, "baseHp": 105, "baseSpeed": 58, "speedDiff": 0.6, "baseDamage": 34, "damageDiff": 0.65, "weightBase": 1, "weightDiff": 0.32, "weightLate": 0.1, "colors": ["#200810", "#801030", "#c02050", "#ff4060", "#40ff80", "#401018", "#a01840"], "isNew": true, "contact": true});
_registerEnemy({"id": "apexChimera", "gold": 20, "unlock": 70, "retire": null, "maxAlive": 0, "behavior": "chase", "template": "sphinx", "scale": 4.5, "radius": 22, "baseHp": 150, "baseSpeed": 55, "speedDiff": 0.55, "baseDamage": 38, "damageDiff": 0.7, "weightBase": 0.9, "weightDiff": 0.35, "weightLate": 0.12, "colors": ["#201010", "#804020", "#c06030", "#e0a040", "#60c040", "#402018", "#a05028"], "isNew": true, "contact": true});
_registerEnemy({"id": "primeArchon", "gold": 22, "unlock": 72, "retire": null, "maxAlive": 0, "behavior": "chase", "template": "angel", "scale": 4.8, "radius": 20, "baseHp": 140, "baseSpeed": 50, "speedDiff": 0.5, "baseDamage": 40, "damageDiff": 0.72, "weightBase": 0.85, "weightDiff": 0.35, "weightLate": 0.12, "colors": ["#202030", "#e0d080", "#ffe0a0", "#ffffff", "#80c0ff", "#404050", "#f0e0b0"], "isNew": true, "contact": true});
_registerEnemy({"id": "novaLeviathan", "gold": 24, "unlock": 74, "retire": null, "maxAlive": 0, "behavior": "chase", "template": "whale", "scale": 5.2, "radius": 26, "baseHp": 200, "baseSpeed": 32, "speedDiff": 0.25, "baseDamage": 36, "damageDiff": 0.68, "weightBase": 0.8, "weightDiff": 0.35, "weightLate": 0.12, "colors": ["#081028", "#204080", "#4080c0", "#80c0ff", "#ffe080", "#102040", "#60a0e0"], "isNew": true, "contact": true});
_registerEnemy({"id": "finalMummyGod", "gold": 28, "unlock": 76, "retire": null, "maxAlive": 0, "behavior": "chase", "template": "colossus", "scale": 6.0, "radius": 30, "baseHp": 220, "baseSpeed": 26, "speedDiff": 0.2, "baseDamage": 42, "damageDiff": 0.75, "weightBase": 0.75, "weightDiff": 0.35, "weightLate": 0.12, "colors": ["#2a2010", "#c0a030", "#e0c050", "#fff080", "#ffffff", "#504818", "#d0b040"], "isNew": true, "contact": true});
_registerEnemy({"id": "mirrorMimic", "gold": 10, "unlock": 22, "retire": null, "maxAlive": 4, "behavior": "mirrorMimic", "template": "blob", "scale": 3.2, "radius": 15, "baseHp": 45, "baseSpeed": 55, "speedDiff": 0.6, "baseDamage": 14, "damageDiff": 0.4, "weightBase": 2.2, "weightDiff": 0.2, "weightLate": 0.05, "colors": ["#101820", "#406080", "#80c0e0", "#c0f0ff", "#ffffff", "#203040", "#60a0c0"], "isNew": true, "contact": true});
_registerEnemy({"id": "chronoTick", "gold": 12, "unlock": 30, "retire": null, "maxAlive": 3, "behavior": "chronoTick", "template": "insect", "scale": 3.0, "radius": 14, "baseHp": 50, "baseSpeed": 48, "speedDiff": 0.5, "baseDamage": 16, "damageDiff": 0.42, "weightBase": 2.0, "weightDiff": 0.22, "weightLate": 0.06, "colors": ["#181010", "#806020", "#c0a040", "#ffe080", "#60ffe0", "#403018", "#a08030"], "isNew": true, "contact": true});
_registerEnemy({"id": "bloomHydra", "gold": 11, "unlock": 35, "retire": null, "maxAlive": 4, "behavior": "bloomHydra", "template": "flower", "scale": 3.4, "radius": 16, "baseHp": 70, "baseSpeed": 42, "speedDiff": 0.45, "baseDamage": 18, "damageDiff": 0.45, "weightBase": 1.8, "weightDiff": 0.24, "weightLate": 0.065, "colors": ["#142014", "#308040", "#50c060", "#90ff80", "#ff60c0", "#204028", "#70e070"], "isNew": true, "contact": true});
_registerEnemy({"id": "gravityWell", "gold": 14, "unlock": 40, "retire": null, "maxAlive": 2, "behavior": "gravityWell", "template": "blob", "scale": 3.8, "radius": 18, "baseHp": 90, "baseSpeed": 28, "speedDiff": 0.25, "baseDamage": 20, "damageDiff": 0.5, "weightBase": 1.5, "weightDiff": 0.25, "weightLate": 0.07, "colors": ["#080818", "#301860", "#5020a0", "#8040e0", "#c080ff", "#180828", "#6030c0"], "isNew": true, "contact": true});
_registerEnemy({"id": "echoWraith", "gold": 13, "unlock": 45, "retire": null, "maxAlive": 3, "behavior": "echoWraith", "template": "flyer", "scale": 3.2, "radius": 14, "baseHp": 35, "baseSpeed": 65, "speedDiff": 0.7, "baseDamage": 22, "damageDiff": 0.52, "weightBase": 1.4, "weightDiff": 0.26, "weightLate": 0.075, "colors": ["#101020", "#6060a0", "#a0a0e0", "#e0e0ff", "#ffffff", "#282848", "#8080c0"], "isNew": true, "contact": true});
_registerEnemy({"id": "ironChoir", "gold": 16, "unlock": 52, "retire": null, "maxAlive": 2, "behavior": "ironChoir", "template": "angel", "scale": 3.6, "radius": 16, "baseHp": 85, "baseSpeed": 45, "speedDiff": 0.45, "baseDamage": 24, "damageDiff": 0.55, "weightBase": 1.2, "weightDiff": 0.28, "weightLate": 0.08, "colors": ["#181820", "#708090", "#a0b0c0", "#e0f0ff", "#60ffe0", "#303040", "#90a8b8"], "isNew": true, "contact": true});
_registerEnemy({"id": "pactImp", "gold": 18, "unlock": 55, "retire": null, "maxAlive": 3, "behavior": "pactImp", "template": "demon", "scale": 2.8, "radius": 12, "baseHp": 40, "baseSpeed": 85, "speedDiff": 1.0, "baseDamage": 12, "damageDiff": 0.35, "weightBase": 1.3, "weightDiff": 0.28, "weightLate": 0.08, "colors": ["#200810", "#a01828", "#e02840", "#ff6080", "#ffe040", "#401018", "#c02030"], "isNew": true, "contact": true});
_registerEnemy({"id": "seraphJudge", "gold": 20, "unlock": 60, "retire": null, "maxAlive": 2, "behavior": "seraphJudge", "template": "angel", "scale": 4.0, "radius": 18, "baseHp": 100, "baseSpeed": 40, "speedDiff": 0.4, "baseDamage": 28, "damageDiff": 0.6, "weightBase": 1.0, "weightDiff": 0.3, "weightLate": 0.09, "colors": ["#202028", "#e0d0a0", "#fff0c0", "#ffffff", "#ff6040", "#404038", "#f0e0b0"], "isNew": true, "contact": true});
_registerEnemy({"id": "voidLeech", "gold": 16, "unlock": 68, "retire": null, "maxAlive": 2, "behavior": "voidLeech", "template": "jelly", "scale": 3.0, "radius": 14, "baseHp": 30, "baseSpeed": 50, "speedDiff": 0.55, "baseDamage": 10, "damageDiff": 0.3, "weightBase": 0.9, "weightDiff": 0.3, "weightLate": 0.1, "colors": ["#080818", "#401860", "#8030c0", "#c060ff", "#ffffff", "#180828", "#9040e0"], "isNew": true, "contact": true});
_registerEnemy({"id": "omenColossus", "gold": 80, "unlock": 75, "retire": null, "maxAlive": 1, "behavior": "omenColossus", "template": "colossus", "scale": 6.5, "radius": 36, "baseHp": 350, "baseSpeed": 22, "speedDiff": 0.15, "baseDamage": 40, "damageDiff": 0.7, "weightBase": 0.6, "weightDiff": 0.25, "weightLate": 0.1, "colors": ["#101018", "#404060", "#8080a0", "#c0c0e0", "#ff8040", "#202030", "#606080"], "isNew": true, "contact": true});

const EnemyRoster = {
  NEW_IDS: ["petalSlug", "sandMummy", "cinderRat", "sporeCap", "glassBeetle", "mossGolemkin", "lanternJelly", "copperAnt", "reedStalker", "ashImpkin", "centaurScout", "mummyArcher", "angelicMite", "demonPup", "alienPolyp", "clockworkOwl", "frostLotus", "boneCentaur", "plagueFlower", "rustAngel", "neonScarab", "warthogKnight", "silkWidow", "obsidianToad", "solarIbis", "abyssMerfolk", "gildedMummy", "stormCentaur", "crystalDemon", "orchidMedusa", "orbitDrone", "marbleCherub", "blightUnicorn", "forgeCyclops", "quillPorcupine", "moonKoi", "tarSphinx", "voltMantis", "seraphEngine", "pharaohWasp", "voidCentaur", "brimstoneLotus", "chromeCerberus", "eclipseOwl", "jadeOni", "starUrchin", "cathedralGolem", "bloodOrchidKnight", "apexChimera", "primeArchon", "novaLeviathan", "finalMummyGod", "mirrorMimic", "chronoTick", "bloomHydra", "gravityWell", "echoWraith", "ironChoir", "pactImp", "seraphJudge", "voidLeech", "omenColossus"],
  SPECIAL_IDS: ["mirrorMimic", "chronoTick", "bloomHydra", "gravityWell", "echoWraith", "ironChoir", "pactImp", "seraphJudge", "voidLeech", "omenColossus"],
  NAMES: {"petalSlug": ["Petal Slug", "\u0426\u0432\u0435\u0442\u043e\u0447\u043d\u044b\u0439 \u0441\u043b\u0438\u0437\u0435\u043d\u044c", "Flower-snail soft body."], "sandMummy": ["Sand Mummy", "\u041f\u0435\u0441\u0447\u0430\u043d\u0430\u044f \u043c\u0443\u043c\u0438\u044f", "Bandaged desert shambler."], "cinderRat": ["Cinder Rat", "\u0422\u043b\u0435\u044e\u0449\u0430\u044f \u043a\u0440\u044b\u0441\u0430", "Ember rodent that scurries in fast."], "sporeCap": ["Spore Cap", "\u0421\u043f\u043e\u0440\u043e\u0432\u0430\u044f \u0448\u043b\u044f\u043f\u043a\u0430", "Walking mushroom."], "glassBeetle": ["Glass Beetle", "\u0421\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u044b\u0439 \u0436\u0443\u043a", "Shiny fragile-looking insect."], "mossGolemkin": ["Moss Golemkin", "\u041c\u043e\u0445\u043e\u0432\u043e\u0439 \u0433\u043e\u043b\u0435\u043c\u0438\u043a", "Tiny stone-moss lump."], "lanternJelly": ["Lantern Jelly", "\u0424\u043e\u043d\u0430\u0440\u043d\u0430\u044f \u043c\u0435\u0434\u0443\u0437\u0430", "Soft glowing floater with a sting."], "copperAnt": ["Copper Ant", "\u041c\u0435\u0434\u043d\u044b\u0439 \u043c\u0443\u0440\u0430\u0432\u0435\u0439", "Metallic ant swarmling."], "reedStalker": ["Reed Stalker", "\u0422\u0440\u043e\u0441\u0442\u043d\u0438\u043a\u043e\u0432\u044b\u0439 \u043b\u043e\u0432\u0447\u0438\u0439", "Plant-legged bird hunter."], "ashImpkin": ["Ash Impkin", "\u041f\u0435\u043f\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u0435\u0441\u0451\u043d\u043e\u043a", "Tiny horned ash demon."], "centaurScout": ["Centaur Scout", "\u041a\u0435\u043d\u0442\u0430\u0432\u0440-\u0440\u0430\u0437\u0432\u0435\u0434\u0447\u0438\u043a", "Horse-human lancer."], "mummyArcher": ["Mummy Archer", "\u041c\u0443\u043c\u0438\u044f-\u043b\u0443\u0447\u043d\u0438\u043a", "Bandaged bowman; shoots from range."], "angelicMite": ["Angelic Mite", "\u0410\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u043b\u0435\u0449", "Small winged halo pest."], "demonPup": ["Demon Pup", "\u0414\u0435\u043c\u043e\u043d-\u0449\u0435\u043d\u043e\u043a", "Stubby hellhound."], "alienPolyp": ["Alien Polyp", "\u0427\u0443\u0436\u043e\u0439 \u043f\u043e\u043b\u0438\u043f", "Tentacle blob from elsewhere."], "clockworkOwl": ["Clockwork Owl", "\u0417\u0430\u0432\u043e\u0434\u043d\u0430\u044f \u0441\u043e\u0432\u0430", "Gear-driven bird."], "frostLotus": ["Frost Lotus", "\u041c\u043e\u0440\u043e\u0437\u043d\u044b\u0439 \u043b\u043e\u0442\u043e\u0441", "Ice flower walker."], "boneCentaur": ["Bone Centaur", "\u041a\u043e\u0441\u0442\u044f\u043d\u043e\u0439 \u043a\u0435\u043d\u0442\u0430\u0432\u0440", "Skeleton horse hybrid."], "plagueFlower": ["Plague Flower", "\u0427\u0443\u043c\u043d\u043e\u0439 \u0446\u0432\u0435\u0442\u043e\u043a", "Toxic bloom body."], "rustAngel": ["Rust Angel", "\u0420\u0436\u0430\u0432\u044b\u0439 \u0430\u043d\u0433\u0435\u043b", "Corroded winged statue."], "neonScarab": ["Neon Scarab", "\u041d\u0435\u043e\u043d\u043e\u0432\u044b\u0439 \u0441\u043a\u0430\u0440\u0430\u0431\u0435\u0439", "Alien beetle with a glow."], "warthogKnight": ["Warthog Knight", "\u0420\u044b\u0446\u0430\u0440\u044c-\u0431\u043e\u0440\u043e\u0434\u0430\u0432\u043e\u0447\u043d\u0438\u043a", "Armored boar charger."], "silkWidow": ["Silk Widow", "\u0428\u0451\u043b\u043a\u043e\u0432\u0430\u044f \u0432\u0434\u043e\u0432\u0430", "Spider-human torso hybrid."], "obsidianToad": ["Obsidian Toad", "\u041e\u0431\u0441\u0438\u0434\u0438\u0430\u043d\u043e\u0432\u0430\u044f \u0436\u0430\u0431\u0430", "Black-glass amphibian brick."], "solarIbis": ["Solar Ibis", "\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0439 \u0438\u0431\u0438\u0441", "Sun-bird silhouette."], "abyssMerfolk": ["Abyss Merfolk", "\u0411\u0435\u0437\u0434\u043e\u043d\u043d\u044b\u0439 \u043c\u0435\u0440\u0444\u043e\u043b\u043a", "Fish-legged deep one."], "gildedMummy": ["Gilded Mummy", "\u041f\u043e\u0437\u043e\u043b\u043e\u0447\u0435\u043d\u043d\u0430\u044f \u043c\u0443\u043c\u0438\u044f", "Heavy gold wraps; tanky and slow."], "stormCentaur": ["Storm Centaur", "\u0428\u0442\u043e\u0440\u043c\u043e\u0432\u043e\u0439 \u043a\u0435\u043d\u0442\u0430\u0432\u0440", "Lightning-mane charger."], "crystalDemon": ["Crystal Demon", "\u041a\u0440\u0438\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0435\u043c\u043e\u043d", "Faceted horned demon."], "orchidMedusa": ["Orchid Medusa", "\u041e\u0440\u0445\u0438\u0434\u0435\u044f-\u043c\u0435\u0434\u0443\u0437\u0430", "Flower-snake hair walker."], "orbitDrone": ["Orbit Drone", "\u041e\u0440\u0431\u0438\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0440\u043e\u043d", "Alien robot orb."], "marbleCherub": ["Marble Cherub", "\u041c\u0440\u0430\u043c\u043e\u0440\u043d\u044b\u0439 \u0445\u0435\u0440\u0443\u0432\u0438\u043c", "Stone baby angel; ironic tank."], "blightUnicorn": ["Blight Unicorn", "\u041f\u043e\u0440\u0447\u0435\u043d\u044b\u0439 \u0435\u0434\u0438\u043d\u043e\u0440\u043e\u0433", "Corrupted horn beast."], "forgeCyclops": ["Forge Cyclops", "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0446\u0438\u043a\u043b\u043e\u043f", "One-eyed smith brute."], "quillPorcupine": ["Quill Porcupine", "\u0418\u0433\u043b\u043e\u0431\u0440\u044e\u0445", "Spiny high-contact radius."], "moonKoi": ["Moon Koi", "\u041b\u0443\u043d\u043d\u044b\u0439 \u043a\u043e\u0438", "Flying fish silhouette."], "tarSphinx": ["Tar Sphinx", "\u0421\u043c\u043e\u043b\u044f\u043d\u043e\u0439 \u0441\u0444\u0438\u043d\u043a\u0441", "Black-sand lion-human."], "voltMantis": ["Volt Mantis", "\u0412\u043e\u043b\u044c\u0442\u043e\u0432\u0430\u044f \u0431\u043e\u0433\u043e\u043c\u043e\u043b\u043a\u0430", "Electric insect blade."], "seraphEngine": ["Seraph Engine", "\u0421\u0435\u0440\u0430\u0444\u0438\u043c-\u043c\u0430\u0448\u0438\u043d\u0430", "Angel-machine wings."], "pharaohWasp": ["Pharaoh Wasp", "\u041e\u0441\u0430-\u0444\u0430\u0440\u0430\u043e\u043d", "Mummy-insect queenling."], "voidCentaur": ["Void Centaur", "\u041a\u0435\u043d\u0442\u0430\u0432\u0440 \u0411\u0435\u0437\u0434\u043d\u044b", "Space horse archer look."], "brimstoneLotus": ["Brimstone Lotus", "\u0421\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0442\u043e\u0441", "Hell flower."], "chromeCerberus": ["Chrome Cerberus", "\u0425\u0440\u043e\u043c\u043e\u0432\u044b\u0439 \u0446\u0435\u0440\u0431\u0435\u0440", "Three-head robot dog (looks)."], "eclipseOwl": ["Eclipse Owl", "\u0421\u043e\u0432\u0430 \u0437\u0430\u0442\u043c\u0435\u043d\u0438\u044f", "Giant night bird."], "jadeOni": ["Jade Oni", "\u041d\u0435\u0444\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u043e\u043d\u0438", "Demon mask brute."], "starUrchin": ["Star Urchin", "\u0417\u0432\u0451\u0437\u0434\u043d\u044b\u0439 \u0451\u0436", "Alien spine ball."], "cathedralGolem": ["Cathedral Golem", "\u0421\u043e\u0431\u043e\u0440\u043d\u044b\u0439 \u0433\u043e\u043b\u0435\u043c", "Stained-glass giant."], "bloodOrchidKnight": ["Blood Orchid Knight", "\u0420\u044b\u0446\u0430\u0440\u044c \u043a\u0440\u043e\u0432\u0430\u0432\u043e\u0439 \u043e\u0440\u0445\u0438\u0434\u0435\u0438", "Flower-knight hybrid."], "apexChimera": ["Apex Chimera", "\u0412\u044b\u0441\u0448\u0430\u044f \u0445\u0438\u043c\u0435\u0440\u0430", "Lion-goat-serpent mash."], "primeArchon": ["Prime Archon", "\u041f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u0430\u0440\u0445\u043e\u043d\u0442", "God-fragment silhouette."], "novaLeviathan": ["Nova Leviathan", "\u041d\u043e\u0432\u0430-\u043b\u0435\u0432\u0438\u0430\u0444\u0430\u043d", "Small cosmic whale; huge body."], "finalMummyGod": ["Final Mummy God", "\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0431\u043e\u0433-\u043c\u0443\u043c\u0438\u044f", "Oversized bandage idol."], "mirrorMimic": ["Mirror Mimic", "\u0417\u0435\u0440\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0438\u043c\u0438\u043a", "Copies your strafe; contact reflects recent weapon damage."], "chronoTick": ["Chrono Tick", "\u0425\u0440\u043e\u043d\u043e\u043a\u043b\u0435\u0449", "Time bubble slows your move and attack speed."], "bloomHydra": ["Bloom Hydra", "\u0426\u0432\u0435\u0442\u043e\u0447\u043d\u0430\u044f \u0433\u0438\u0434\u0440\u0430", "Splits into two bloomlets on death once."], "gravityWell": ["Gravity Well", "\u0413\u0440\u0430\u0432\u0438\u043a\u043e\u043b\u043e\u0434\u0435\u0446", "Pulls you inward while dealing contact damage."], "echoWraith": ["Echo Wraith", "\u042d\u0445\u043e-\u043f\u0440\u0438\u0437\u0440\u0430\u043a", "Leaves exploding echo clones; fragile body."], "ironChoir": ["Iron Choir", "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u0445\u043e\u0440", "Ranged shock hymn: cone stun and damage."], "pactImp": ["Pact Imp", "\u0414\u043e\u0433\u043e\u0432\u043e\u0440\u043d\u043e\u0439 \u0431\u0435\u0441", "Steals run gold on contact, then flees."], "seraphJudge": ["Seraph Judge", "\u0421\u0435\u0440\u0430\u0444\u0438\u043c-\u0441\u0443\u0434\u044c\u044f", "Marks you; smite scales with how far you moved."], "voidLeech": ["Void Leech", "\u041f\u0438\u044f\u0432\u043a\u0430 \u0411\u0435\u0437\u0434\u043d\u044b", "Aura drains XP progress while nearby."], "omenColossus": ["Omen Colossus", "\u041a\u043e\u043b\u043e\u0441\u0441-\u0437\u043d\u0430\u043c\u0435\u043d\u0438\u0435", "At half HP, roars and buffs nearby foe damage."]},
  def(id) { return ENEMY_DEFS[id] || null; },
  buildSprites(SpriteFactory) {
    const out = {};
    for (const id of this.NEW_IDS) {
      const d = ENEMY_DEFS[id];
      if (!d || !d.template) continue;
      const px = EnemyTemplates[d.template];
      if (!px) continue;
      out[id] = SpriteFactory.create(px, _enemyPal(d.colors), d.scale || 3);
    }
    return out;
  },
  deathTypes() { return this.NEW_IDS.slice(); },
  goldTable() {
    const g = {};
    for (const id of this.NEW_IDS) g[id] = ENEMY_DEFS[id].gold;
    return g;
  },
  applySpawn(enemy, def, sprites, difficulty, level, curseMult, lvMult, hpScale, speedMult) {
    const d = 1 + difficulty * 0.08;
    enemy.hp = enemy.maxHp = Math.max(1, Math.floor(def.baseHp * d * lvMult * hpScale));
    enemy.speed = (def.baseSpeed + difficulty * (def.speedDiff || 0)) * speedMult;
    enemy.damage = (def.baseDamage + difficulty * (def.damageDiff || 0)) * lvMult;
    enemy.radius = def.radius;
    enemy.sprite = sprites[def.id] || sprites.slime;
    enemy._enemyDef = def;
    enemy._roared = false;
    enemy._echoCD = 0.6 + Math.random() * 0.6;
    enemy._markT = 0;
    enemy._markMoved = 0;
    enemy._fleeT = 0;
    enemy._reflectCD = 0;
    enemy._hymnCD = 1.0 + Math.random();
    enemy._bubbleR = 110;
    if (enemy._bloomChild) {
      // scaled after spawn in onBeginDeath
    }
  },
  weight(def, game, diff, level, late, fade) {
    if (!def || !def.isNew) return 0;
    if (level < def.unlock) return 0;
    if (def.maxAlive > 0 && game.countEnemies(def.id) >= def.maxAlive) return 0;
    let w = Math.max(0, (def.weightBase || 0) + diff * (def.weightDiff || 0) + late * (def.weightLate || 0));
    if (def.retire) w *= fade(def.retire[0], def.retire[1]);
    return w;
  },
  collectWeights(game, diff, level, late, fade, into) {
    for (const id of this.NEW_IDS) {
      // Slightly soft so legacy pack composition stays readable with 60+ types
      into[id] = this.weight(ENEMY_DEFS[id], game, diff, level, late, fade) * 0.85;
    }
  },
  helpEntries(lang) {
    const list = [];
    for (const id of this.NEW_IDS) {
      const d = ENEMY_DEFS[id];
      const n = this.NAMES[id];
      if (!n) continue;
      const threat = d.unlock >= 70 ? 'extreme' : d.unlock >= 49 ? 'high' : d.unlock >= 29 ? 'high' : d.unlock >= 13 ? 'mid' : 'low';
      list.push({
        id: d.id,
        name: lang === 'ru' ? n[1] : n[0],
        threat, gold: d.gold,
        speed: d.baseSpeed + ' (+scale)',
        hp: d.baseHp + ' (+scale)',
        dmg: d.baseDamage + ' (+scale)',
        ability: this.SPECIAL_IDS.includes(d.id)
          ? (lang === 'ru' ? 'Особая' : 'Special')
          : (d.behavior === 'ranged'
            ? (lang === 'ru' ? 'Дальний бой' : 'Ranged')
            : (lang === 'ru' ? 'Ближний бой' : 'Melee')),
        desc: n[2],
        sprite: d.id
      });
    }
    return list;
  },

  /* Generic + special movement. Returns true if shared contact should be skipped. */
  update(enemy, dt, nx, ny, dist, player, game) {
    const def = enemy._enemyDef || ENEMY_DEFS[enemy.type];
    if (!def) return false;
    const b = def.behavior;
    if (b === 'ranged') {
      this._updateRanged(enemy, dt, nx, ny, dist, player, game);
      return false;
    }
    if (b === 'chase') {
      enemy.x += nx * enemy.speed * dt;
      enemy.y += ny * enemy.speed * dt;
      return false;
    }
    switch (b) {
      case 'mirrorMimic': return this._updateMirrorMimic(enemy, dt, nx, ny, dist, player, game);
      case 'chronoTick': return this._updateChronoTick(enemy, dt, nx, ny, dist, player, game);
      case 'bloomHydra':
        enemy.x += nx * enemy.speed * dt;
        enemy.y += ny * enemy.speed * dt;
        return false;
      case 'gravityWell': return this._updateGravityWell(enemy, dt, nx, ny, dist, player, game);
      case 'echoWraith': return this._updateEchoWraith(enemy, dt, nx, ny, dist, player, game);
      case 'ironChoir': return this._updateIronChoir(enemy, dt, nx, ny, dist, player, game);
      case 'pactImp': return this._updatePactImp(enemy, dt, nx, ny, dist, player, game);
      case 'seraphJudge': return this._updateSeraphJudge(enemy, dt, nx, ny, dist, player, game);
      case 'voidLeech': return this._updateVoidLeech(enemy, dt, nx, ny, dist, player, game);
      case 'omenColossus': return this._updateOmenColossus(enemy, dt, nx, ny, dist, player, game);
      default:
        enemy.x += nx * enemy.speed * dt;
        enemy.y += ny * enemy.speed * dt;
        return false;
    }
  },

  onContact(enemy, player, game) {
    const def = enemy._enemyDef || ENEMY_DEFS[enemy.type];
    if (!def) return;
    if (def.behavior === 'mirrorMimic') {
      if (enemy._reflectCD <= 0) {
        const reflect = Math.max(enemy.damage, (player.recentWeaponDamage || 0) * 0.45);
        player.takeDamage(reflect, game);
        enemy._reflectCD = 1.4;
      }
      return;
    }
    if (def.behavior === 'pactImp') {
      const banked = game._bankedRunGold || 0;
      const steal = Math.min(25, Math.max(3, Math.floor((player.currency - banked) * 0.08)));
      if (steal > 0 && player.currency > banked) {
        player.currency = Math.max(banked, player.currency - steal);
        if (game.ui) game.ui.toast(`-${steal} gold`, 'rare');
      }
      enemy._fleeT = 2.2;
      return;
    }
    player.takeDamage(enemy.damage, game);
  },

  onBeginDeath(enemy, game) {
    const def = enemy._enemyDef || ENEMY_DEFS[enemy.type];
    if (!def) return;
    if (def.behavior === 'bloomHydra' && !enemy._noSplit && !enemy._bloomChild && game && game.enemyPool) {
      for (let i = 0; i < 2; i++) {
        const child = game.enemyPool.acquire();
        const ang = (Math.PI * 2 * i) / 2 + Math.random() * 0.4;
        child.spawn('bloomHydra',
          enemy.x + Math.cos(ang) * 28,
          enemy.y + Math.sin(ang) * 28,
          game.sprites, game.player.getDifficulty(), game.player.level, null, game);
        child._bloomChild = true;
        child._noSplit = true;
        child.maxHp = Math.max(1, Math.floor(child.maxHp * 0.45));
        child.hp = child.maxHp;
        child.baseMaxHp = child.maxHp;
        child.radius = Math.max(8, child.radius * 0.7);
        child.baseRadius = child.radius;
        child.damage *= 0.7;
        child.baseDamage = child.damage;
      }
    }
  },

  drawExtra(enemy, ctx, cam) {
    const def = enemy._enemyDef || ENEMY_DEFS[enemy.type];
    if (!def || enemy.dying) return;
    const s = cam.worldToScreen(enemy.x, enemy.y);
    if (def.behavior === 'chronoTick') {
      const r = enemy._bubbleR || 110;
      ctx.strokeStyle = 'rgba(255, 220, 80, 0.35)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = 'rgba(255, 200, 60, 0.06)';
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.fill();
    } else if (def.behavior === 'gravityWell') {
      ctx.strokeStyle = 'rgba(140, 80, 255, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(s.x, s.y, 130, 0, Math.PI * 2);
      ctx.stroke();
    } else if (def.behavior === 'voidLeech') {
      ctx.strokeStyle = 'rgba(180, 80, 255, 0.35)';
      ctx.beginPath();
      ctx.arc(s.x, s.y, 100, 0, Math.PI * 2);
      ctx.stroke();
    } else if (def.behavior === 'seraphJudge' && enemy._markT > 0) {
      ctx.strokeStyle = `rgba(255, 80, 40, ${0.4 + Math.sin(enemy.animTime * 10) * 0.2})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(s.x, s.y - 28, 10, 0, Math.PI * 2);
      ctx.stroke();
    } else if (def.behavior === 'echoWraith') {
      enemy._drawAlpha = 0.55 + Math.sin(enemy.animTime * 8) * 0.25;
    } else if (def.behavior === 'omenColossus' && enemy._roared) {
      ctx.strokeStyle = 'rgba(255, 120, 40, 0.45)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(s.x, s.y, enemy.radius + 8, 0, Math.PI * 2);
      ctx.stroke();
    }
  },

  _updateRanged(enemy, dt, nx, ny, dist, player, game) {
    const preferred = 220;
    if (dist < preferred - 30) {
      enemy.x -= nx * enemy.speed * dt;
      enemy.y -= ny * enemy.speed * dt;
    } else if (dist > preferred + 40) {
      enemy.x += nx * enemy.speed * 0.7 * dt;
      enemy.y += ny * enemy.speed * 0.7 * dt;
    } else {
      enemy.x += -ny * enemy.speed * 0.5 * dt;
      enemy.y += nx * enemy.speed * 0.5 * dt;
    }
    enemy.shootCD = (enemy.shootCD || 0) - dt;
    if (enemy.shootCD <= 0 && dist < 400) {
      enemy.shootCD = 1.8 / Math.sqrt(enemy.levelMult || 1);
      const spd = 120 * (1 + ((enemy.levelMult || 1) - 1) * 0.25);
      game.spawnEnemyProjectile(enemy.x, enemy.y, nx * spd, ny * spd, enemy.damage * 0.7);
    }
  },

  _updateMirrorMimic(enemy, dt, nx, ny, dist, player, game) {
    enemy._reflectCD = Math.max(0, (enemy._reflectCD || 0) - dt);
    // Mirror player facing / strafe bias
    const side = player.facing || 1;
    enemy.x += (nx * 0.55 + (-ny) * side * 0.45) * enemy.speed * dt;
    enemy.y += (ny * 0.55 + nx * side * 0.45) * enemy.speed * dt;
    return false;
  },

  _updateChronoTick(enemy, dt, nx, ny, dist, player, game) {
    const r = enemy._bubbleR || 110;
    const inside = dist < r;
    if (inside) {
      player.applySlow(0.55, 0.15);
      player.aspdMult = Math.min(player.aspdMult || 1, 0.55);
      player.aspdMultTimer = Math.max(player.aspdMultTimer || 0, 0.15);
      enemy.x += nx * enemy.speed * 0.35 * dt;
      enemy.y += ny * enemy.speed * 0.35 * dt;
    } else {
      enemy.x += nx * enemy.speed * 1.15 * dt;
      enemy.y += ny * enemy.speed * 1.15 * dt;
    }
    return false;
  },

  _updateGravityWell(enemy, dt, nx, ny, dist, player, game) {
    enemy.x += nx * enemy.speed * 0.5 * dt;
    enemy.y += ny * enemy.speed * 0.5 * dt;
    if (dist < 160 && dist > 1) {
      const pull = (1 - dist / 160) * 140 * dt;
      player.x -= nx * pull;
      player.y -= ny * pull;
    }
    return false;
  },

  _updateEchoWraith(enemy, dt, nx, ny, dist, player, game) {
    enemy.x += nx * enemy.speed * dt;
    enemy.y += ny * enemy.speed * dt;
    enemy._echoCD -= dt;
    if (enemy._echoCD <= 0) {
      enemy._echoCD = 2.4;
      if (typeof game.spawnAoE === 'function') {
        game.spawnAoE(enemy.x, enemy.y, 48, enemy.damage * 0.85, 0.7);
      }
    }
    return false;
  },

  _updateIronChoir(enemy, dt, nx, ny, dist, player, game) {
    const preferred = 240;
    if (dist < preferred - 40) {
      enemy.x -= nx * enemy.speed * dt;
      enemy.y -= ny * enemy.speed * dt;
    } else if (dist > preferred + 50) {
      enemy.x += nx * enemy.speed * 0.7 * dt;
      enemy.y += ny * enemy.speed * 0.7 * dt;
    } else {
      enemy.x += -ny * enemy.speed * 0.45 * dt;
      enemy.y += nx * enemy.speed * 0.45 * dt;
    }
    enemy._hymnCD -= dt;
    if (enemy._hymnCD <= 0 && dist < 320) {
      enemy._hymnCD = 2.6;
      // Cone-ish: hit player if roughly in front
      const facingDot = nx * enemy.facing;
      if (facingDot > 0.25 || dist < 90) {
        player.takeDamage(enemy.damage * 0.9, game);
        if (typeof StatusEffects !== 'undefined' && StatusEffects.applyStun) {
          // Stun is for enemies; slow the player instead
        }
        player.applySlow(0.4, 0.7);
      }
    }
    return true; // skip default contact (uses hymn)
  },

  _updatePactImp(enemy, dt, nx, ny, dist, player, game) {
    if (enemy._fleeT > 0) {
      enemy._fleeT -= dt;
      enemy.x -= nx * enemy.speed * 1.4 * dt;
      enemy.y -= ny * enemy.speed * 1.4 * dt;
      return true;
    }
    enemy.x += nx * enemy.speed * dt;
    enemy.y += ny * enemy.speed * dt;
    return false;
  },

  _updateSeraphJudge(enemy, dt, nx, ny, dist, player, game) {
    const preferred = 260;
    if (dist > preferred) {
      enemy.x += nx * enemy.speed * dt;
      enemy.y += ny * enemy.speed * dt;
    } else {
      enemy.x += -ny * enemy.speed * 0.4 * dt;
      enemy.y += nx * enemy.speed * 0.4 * dt;
    }
    if (enemy._markT <= 0) {
      enemy._markT = 2.0;
      enemy._markMoved = 0;
      enemy._markX = player.x;
      enemy._markY = player.y;
    } else {
      enemy._markT -= dt;
      const mdx = player.x - (enemy._markX || player.x);
      const mdy = player.y - (enemy._markY || player.y);
      enemy._markMoved += Math.sqrt(mdx * mdx + mdy * mdy);
      enemy._markX = player.x;
      enemy._markY = player.y;
      if (enemy._markT <= 0) {
        const bonus = Math.min(2.5, enemy._markMoved / 180);
        player.takeDamage(enemy.damage * (0.7 + bonus), game);
        enemy._markT = 0;
        enemy._hymnCD = 1.5;
      }
    }
    return true;
  },

  _updateVoidLeech(enemy, dt, nx, ny, dist, player, game) {
    enemy.x += nx * enemy.speed * dt;
    enemy.y += ny * enemy.speed * dt;
    if (dist < 100 && player.experience > 0) {
      const drain = Math.min(player.experience, player.xpToNext * 0.04 * dt);
      player.experience = Math.max(0, player.experience - drain);
    }
    return false;
  },

  _updateOmenColossus(enemy, dt, nx, ny, dist, player, game) {
    enemy.x += nx * enemy.speed * dt;
    enemy.y += ny * enemy.speed * dt;
    if (!enemy._roared && enemy.hp <= enemy.maxHp * 0.5) {
      enemy._roared = true;
      enemy._roarT = 5;
      game.spatial.queryCircle(enemy.x, enemy.y, 220, (e) => {
        if (e === enemy || e.dying) return;
        e._omenBuffT = 5;
        e.damage = e.baseDamage * 1.35;
      }, 24);
      if (game.ui) game.ui.toast('Omen roar!', 'legendary');
    }
    if (enemy._roarT > 0) enemy._roarT -= dt;
    return false;
  }
};

window.ENEMY_DEFS = ENEMY_DEFS;
window.EnemyRoster = EnemyRoster;
window.EnemyTemplates = EnemyTemplates;

if (typeof I18n !== 'undefined' && I18n.helpEnemies) {
  for (const lang of ['en', 'ru']) {
    const extra = EnemyRoster.helpEntries(lang);
    I18n.helpEnemies[lang] = (I18n.helpEnemies[lang] || []).concat(extra);
  }
}
