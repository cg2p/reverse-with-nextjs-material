import { Pool } from 'pg';

const pghost = process.env.PGHOST;
const pgport = process.env.PGPORT;
const pguser = process.env.PGUSER;
const pgpassword = process.env.PGPASSWORD;
const pgdatabase = process.env.PGDATABASE;

console.log("PGHOST=%s", pghost);
console.log("PGPORT=%s", pgport);
console.log("PGUSER=%s", pguser);
console.log("PGPASSWORD=%s", pgpassword);
console.log("PGDATABASE=%s", pgdatabase);

const pool = new Pool({
  host: pghost,
  port: pgport,
  user: pguser,
  password: pgpassword,
  database: pgdatabase,
  ssl: { rejectUnauthorized: false }
});

export const db = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}