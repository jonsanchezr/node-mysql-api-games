import { Router } from "express";
import { deleteGame, getGame, getGames, postGame, updateGame } from "../controllers/game.controller";

const router = Router();

router.get('/', getGames);
router.get('/:id', getGame);
router.post('/', postGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

export default router;
