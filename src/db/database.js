import mysql from 'mysql2/promise'
const connection = await mysql.createConnection({
  host: "172.17.0.1",
  port: 3306,
  user: "root",
  password: "1234",
  database: "db-question",
  ssl: false,
})

export const getQuestion = async () => {
  try {
    const sql = `CALL get_questions()`;
    const [resut, fields] = await connection.query(sql);
    return await [resut, fields];
  } catch (error) {
    return error;
  }
}