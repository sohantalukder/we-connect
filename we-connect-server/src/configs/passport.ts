import passport from 'passport';
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions,
} from 'passport-jwt';
import dotenv from 'dotenv';
import configConstant from '../constants/config.constant';
import User from '../models/users';

dotenv.config();

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: configConstant.JWT_KEY,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload: {id: string}, done) => {
    try {
      const user = await User.findOne({_id: jwt_payload.id}).exec();
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  }),
);

export default passport;
