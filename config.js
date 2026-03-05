require("dotenv").config();

const prodEnv = process.env.NODE_ENV === "production";

// Define and export the token based on the environment
module.exports = {
    token: prodEnv ? process.env.PROD_BOT_TOKEN : process.env.TEST_BOT_TOKEN,
    clientId: prodEnv ? process.env.PROD_CLIENT_ID : process.env.TEST_CLIENT_ID,
    guildId: prodEnv ? process.env.PROD_GUILD_ID : process.env.TEST_GUILD_ID,
    dbHost: prodEnv ? process.env.PROD_DB_HOST : process.env.TEST_DB_HOST,
    dbDialect: prodEnv ? process.env.PROD_DB_DIALECT : process.env.TEST_DB_DIALECT,
    dbStorage: prodEnv ? process.env.PROD_DB_STORAGE : process.env.TEST_DB_STORAGE,
    tankEmoji: prodEnv ? `<:tankrole:1464688406725398699>` : `<:tankrole:1181327150708686848>`,
    healerEmoji: prodEnv ? `<:healerrole:1464666513041527047>` : `<:healerole:1181327153749561364>`,
    dpsEmoji: prodEnv ? `<:dpsrole:1464688421783081070>` : `<:dpsrole:1181327148624117870>`,
};
