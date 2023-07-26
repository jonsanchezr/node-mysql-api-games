import express, { Application , Request, Response } from "express";
import cors from "cors";
import routeGame from "../routes/game.route";
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('App in port: ' + this.port)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                message: 'API Working'
            });
        })
        this.app.use('/api/games', routeGame)
    }

    middlewares() {
        this.app.use(express.json());

        // Cors
        this.app.use(cors())
    }

    async dbConnection() {
        await db.authenticate();
        console.log('DB connected')
    }
}

export default Server;
