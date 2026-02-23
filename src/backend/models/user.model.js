import { pool } from "../config/db.js";

export default class User {
	static async create_prof(email, password) {
		const sql = `INSERT INTO users (email, password, role)
        VALUES (${email}, ${password}, 'PROFESSOR')`;
		const [result] = await pool.execute(sql);
		return result.insertId;
	}

	static async find_by_email(email) {
		const sql = `SELECT * FROM users WHERE email = ${email}`;
		const [result] = await pool.execute(sql);
		return result[0];
	}

	static async find_by_id(id) {
		const sql = `SELECT * FROM users WHERE id = ${id}`;
		const [result] = await pool.execute(sql);
		return result[0];
	}
}
