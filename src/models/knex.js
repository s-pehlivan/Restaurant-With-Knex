import knex from "knex";
import knexfile from "../../knexfile.js";

const environment = process.env.NODE_ENV || "development";

const config = knexfile[environment];

export default knex(config);
