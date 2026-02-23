import express from "express";
import "dotenv/config";
import { pool } from "./config/db.js";

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
	res.status(200).send(`<h1>Mon super serveur deploye V3</h1>`);
});

app.listen(PORT, () => {
	console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
