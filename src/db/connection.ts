import { Sequelize } from "sequelize";

const sequelize = new Sequelize('games', 'games', 'games', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export default sequelize;
