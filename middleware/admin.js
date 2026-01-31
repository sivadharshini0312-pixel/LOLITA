export const isAdmin = (req, res, next) => {
    // Safety check
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized access" });
    }

    // Role check
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Admin access only" });
    }

    next();
};
