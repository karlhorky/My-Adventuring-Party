exports.up = async (sql) => {
  await sql`
	CREATE TABLE IF NOT EXISTS combat_instance (
		combat_id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
		actual_turn integer NOT NULL DEFAULT 1,
		game_id integer REFERENCES game_instance (game_id) ON DELETE CASCADE
	);`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE IF EXISTS combat_instance;`;
};
