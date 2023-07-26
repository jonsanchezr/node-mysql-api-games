"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const game_controller_1 = require("../controllers/game.controller");
const router = (0, express_1.Router)();
router.get('/', game_controller_1.getGames);
router.get('/:id', game_controller_1.getGame);
router.post('/', game_controller_1.postGame);
router.put('/:id', game_controller_1.updateGame);
router.delete('/:id', game_controller_1.deleteGame);
exports.default = router;
