import express from "express";
import "dotenv/config";
import auth_router from "./routes/auth.route.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api/auth", auth_router);

app.listen(PORT, () => {
	console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
