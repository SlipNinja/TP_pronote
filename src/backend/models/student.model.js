import { pool } from "../config/db.js";

export default class Prof {
	static async create_student(name, professor_id) {
		const sql = `INSERT INTO students (name, professor_id)
        VALUES (${name}, ${professor_id})`;
		const [result] = await pool.execute(sql);
		return result.insertId;
	}

	static async get_by_prof(professor_id) {
		const sql = `SELECT * FROM students WHERE professor_id = ${professor_id}`;
		const [result] = await pool.execute(sql);
		return result.insertId;
	}

	static async find_by_name(name) {
		const sql = `SELECT * FROM students WHERE name = ${name}`;
		const [result] = await pool.execute(sql);
		return result[0];
	}

	static async find_by_id(id) {
		const sql = `SELECT * FROM students WHERE id = ${id}`;
		const [result] = await pool.execute(sql);
		return result[0];
	}
}
