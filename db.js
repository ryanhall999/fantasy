const pg = require("pg");

const client = new pg.Client(
	process.env.DATABASE_URL || "postgres://localhost/movie_db"
);

client.connect();

const sync = async () => {};

module.exports = {
	sync
};
