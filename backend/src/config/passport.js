import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

export default (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        // console.log("JWT Payload:", jwt_payload);
        
        const user = await User.findById(jwt_payload.id);

        if (user){
          // console.log("User Found:", user);
          return done(null, user);
        } else{
          // console.log("User Not Found");
          return done(null, false);

        }
          
      } catch (error) {
        // console.log("Error in JWT Strategy:", err);
        return done(error, false);
      }
    })
  );
};
