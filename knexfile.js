"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require('ts-node/register');
const environments = ['development', 'staging', 'production'];
const connection = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};
const commonConfig = {
    client: 'pg',
    connection,
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: 'src/database/migrations'
    },
    seeds: {
        directory: 'src/database/seeds'
    }
};
exports.default = Object.fromEntries(environments.map((env) => [env, commonConfig]));
