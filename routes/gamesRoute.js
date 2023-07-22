import { Router } from "express";
var router = Router();
import GamesController from '../controllers/gameController.js';

const gamesController = new GamesController();

router.get('/', (req, res) => {
    gamesController.getAllGames(req, res);
});

router.get('/:id', (req, res) => {
    gamesController.getGameById(req, res);
});

router.post('/', (req, res) => {
    gamesController.createGame(req. res);
});

router.put('/:id', (req, res) => {
    gamesController.updateGame(req, res);
});

router.delete('/:id', (req, res) => {
    gamesController.deleteGame(req, res);
})

export default router;