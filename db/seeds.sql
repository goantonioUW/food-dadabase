USE fooddadabase_db;

INSERT INTO lists (username, ingredient, amount, measurement, createdAt, updatedAt)
VALUES
("Bdomschot", "chicken", 1, "5tbs", createdAt(), updatedAt()),
("goantoniouw", "chicken", 1, "5tbs", createdAt(), updatedAt()),
("bfourGitHub", "chicken", 1, "5tbs", createdAt(), updatedAt()),
("jkaganovsky", "chicken", 1, "5tbs", createdAt(), updatedAt()),
("mfrisch87", "chicken", 1, "5tbs", createdAt(), updatedAt());

INSERT INTO favorites (username, recipe_id, recipe_name, createdAt, updatedAt)
VALUES
("Bdomschot", 12, "chicken soup", createdAt(), updatedAt()),
("bfourGitHub", 12, "chicken soup", createdAt(), updatedAt()),
("goantoniouw", 12, "chicken soup", createdAt(), updatedAt()),
("jkaganovsky", 12, "chicken soup", createdAt(), updatedAt()),
("mfrisch87", 12, "chicken soup", createdAt(), updatedAt());
