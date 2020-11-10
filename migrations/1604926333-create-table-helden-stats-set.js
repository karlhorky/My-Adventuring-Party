exports.up = async (sql) => {
  await sql`
	CREATE TABLE IF NOT EXISTS helden_stats_set (
		stats_id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
		ve_vital_energy integer NOT NULL,
		ap_action_power integer NOT NULL,
		sd_supernatural_defense integer NOT NULL,
		pd_physical_defense integer NOT NULL,
		lvl_level integer DEFAULT 1,
		exs_experience_shards integer DEFAULT 0,
		sa_special_actions integer DEFAULT 2
	);`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE IF EXISTS helden_stats_set;
  `;
};
