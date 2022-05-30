
const { Sequelize } = require('sequelize');

import { DEVELOPMENT, PRODUCTION, SEQUELIZE, TEST } from "../constants";
import { Donate } from "../constants/donate";
import { databaseConfig } from "./database.config";

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async() => {
            let config;
            switch (process.env.NODE_ENV) {
                case DEVELOPMENT:
                    config = databaseConfig.development
                    break
                case TEST:
                    config = databaseConfig.test;
                    break
                case PRODUCTION:
                    config = databaseConfig.production;
                    break;
                default:
                    config = databaseConfig.development;                
            }
            const sequlize = new Sequelize(config);
            sequlize.addModels([Donate]);
            await sequlize
                .sync()
                .then(function() {
                    console.log("connection successfully established")
                })
                .catch(function(err) {
                    console.error("Could not connection to database: ", err);
                });

            return sequlize;
        }
    }
];