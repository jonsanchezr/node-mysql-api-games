"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGame = exports.updateGame = exports.postGame = exports.getGame = exports.getGames = void 0;
const game_model_1 = __importDefault(require("../models/game.model"));
const getGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listGames = yield game_model_1.default.findAll();
    return res.json(listGames);
});
exports.getGames = getGames;
const getGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const game = yield game_model_1.default.findByPk(id);
    if (!game) {
        return res.status(404).json({
            message: 'Not Found Game'
        });
    }
    return res.json(game);
});
exports.getGame = getGame;
const postGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield game_model_1.default.create(body);
        return res.json({
            message: 'Game created'
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            message: 'Error server'
        });
    }
});
exports.postGame = postGame;
const updateGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const game = yield game_model_1.default.findByPk(id);
    if (!game) {
        return res.status(404).json({
            message: 'Not Found Game'
        });
    }
    try {
        yield game.update(body);
        return res.json({
            message: 'Game updated',
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            message: 'Error server'
        });
    }
});
exports.updateGame = updateGame;
const deleteGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const game = yield game_model_1.default.findByPk(id);
    if (!game) {
        return res.status(404).json({
            message: 'Not Found Game'
        });
    }
    yield game.destroy();
    return res.json({
        message: 'Game deleted',
    });
});
exports.deleteGame = deleteGame;
