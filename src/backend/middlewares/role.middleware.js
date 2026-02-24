export const require_prof = (req, res, next) => {
	if (req.user.role != "PROFESSOR") {
		return res.status(403).json({ message: "Acces interdit" });
	}
	next();
};
