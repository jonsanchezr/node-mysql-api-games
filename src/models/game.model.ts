import { DataTypes } from "sequelize";
import db from "../db/connection";

const Game = db.define('Game', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    stock: {
        type: DataTypes.NUMBER
    }
});

export default Game;
