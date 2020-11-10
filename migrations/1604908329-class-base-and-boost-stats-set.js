exports.up = async (sql) => {
  await sql`
	CREATE TABLE IF NOT EXISTS class_stats_on_lvl_1 (
		class_stats_id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
		ve_class_base integer NOT NULL,
		ap_class_base integer NOT NULL,
		sd_class_base integer NOT NULL,
		pd_class_base integer NOT NULL

	);`;

  await sql`
	CREATE TABLE IF NOT EXISTS class_boost_stats_on_levelup (
		stat_boost_id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
		ve_class_boost integer NOT NULL,
		ap_class_boost integer NOT NULL,
		sd_class_boost integer NOT NULL,
		pd_class_boost integer NOT NULL

	);`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE IF EXISTS class_base_stats_set;
	`;
  await sql`
	DROP TABLE IF EXISTS class_boost_stats_on_levelup;
	`;
};
