// Check Role Middleware
export const checkRole = (role) => {
    return (req, res, next) => {
      if (req.user.role !== role) {
        return res.status(403).json({ error: "Forbidden, Access denied" });
      }
      next();
    };
  };
  