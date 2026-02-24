import argon2 from "argon2";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { z } from "zod";
import User from "../models/user.model.js";
import { send_welcome_mail } from "../config/mailer.js";

export const auth_schema = z.object({
	email: z.email().min(3, "l'email doit contenir 3 lettres au minimum"),
	password: z.string().min(6),
});

export const register = async (req, res) => {
	const { email, password } = req.body;

	const existing = await User.find_by_email(email);
	if (existing) return res.status(409).json({ message: "email deja existant" });

	const hashed = await argon2.hash(password);
	const id = await User.create_prof(email, hashed);

	await send_welcome_mail(email, email, password);

	return res.status(201).json({ message: "Compte créé et mail envoyé", id: id, email: email });
};

export const login = async (req, res) => {
	const { email, password } = req.body;

	const existing = await User.find_by_email(email);
	if (!existing) return res.status(401).json({ message: "user not found" });

	const valid = await argon2.verify(existing["password"], password);
	if (!valid) return res.status(401).json({ message: "wrong credentials" });

	const token = jwt.sign(existing, process.env.JWT_SECRET);

	return res.status(200).json({ token: token });
};
