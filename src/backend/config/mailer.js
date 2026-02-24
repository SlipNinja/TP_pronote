import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
	host: process.env.BREVO_SMTP_HOST,
	port: process.env.BREVO_SMTP_PORT,
	secure: false,
	auth: {
		user: process.env.BREVO_SMTP_USER,
		pass: process.env.BREVO_SMTP_PASSWORD,
	},
});

transporter.verify((err, success) => {
	if (err) console.error("SMTP not connected", err.message);
	else console.log("SMTP connected !");
});

export const send_welcome_mail = async (to, email, password) => {
	return transporter.sendMail({
		from: `Welcome ${process.env.BREVO_SMTP_EMAIL}`,
		to,
		subject: "Merci pour l'inscription",
		html: `<h2>Bienvenue</h2>
        <p>Votre compte a bien été créé</p>
        <p>Votre email : ${email}</p>
        <p>Votre mot de passe : ${password}</p>`,
	});
};
