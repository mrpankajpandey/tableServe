import passport from "passport";

// Protect Routes with JWT
export const protect = (req, res, next) => {
  // console.log("Headers:", req.headers.authorization);

  passport.authenticate("jwt", { session: false }, (err, user) => {
    // console.log("Error:", err);
    // console.log("User:", user);
    if (err || !user) {
      return res.status(401).json({ error: "Unauthorized, Token invalid" });
    }
    req.user = user;
    next();
  })(req, res, next);
};
