import Database from "better-sqlite3";
const db = new Database("./data/database.sqlite");

db.prepare(
    "CREATE TABLE IF NOT EXISTS fours (id INTEGER PRIMARY KEY AUTOINCREMENT, vals TEXT)",
).run();

export const getAllFours = () => {
  return db.prepare("SELECT * FROM fours").all();
};
export const getFourById = (id) => {
  return db.prepare("SELECT * FROM fours WHERE id = ?").get(id);
};
export const addFour = (vals) => {
  return db.prepare("INSERT INTO fours (vals) VALUES (?)").run(vals);
};
