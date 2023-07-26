import express, { Request, Response } from "express";
import Game from "../models/game.model";

export const getGames = async (req: Request, res: Response) => {
    const listGames = await Game.findAll();
    return res.json(listGames)
}

export const getGame = async (req: Request, res: Response) => {
    const {id} = req.params;
    const game = await Game.findByPk(id);

    if (!game) {
        return res.status(404).json({
            message: 'Not Found Game'
        });
    }

    return res.json(game);
}

export const postGame = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Game.create(body);
        return res.json({
            message: 'Game created'
        });
    } catch (error) {
        console.log(error);
        return res.json({
            message: 'Error server'
        });
    }
}

export const updateGame = async (req: Request, res: Response) => {
    const {id} = req.params;
    const { body } = req

    const game = await Game.findByPk(id);

    if (!game) {
        return res.status(404).json({
            message: 'Not Found Game'
        });
    }

    try {
        await game.update(body);
        return res.json({
            message: 'Game updated',
        })
    } catch (error) {
        console.log(error);
        return res.json({
            message: 'Error server'
        });
    }
}

export const deleteGame = async (req: Request, res: Response) => {
    const {id} = req.params;
    const game = await Game.findByPk(id);

    if (!game) {
        return res.status(404).json({
            message: 'Not Found Game'
        });
    }

    await game.destroy();

    return res.json({
        message: 'Game deleted',
    })
}
