const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt=require("jsonwebtoken");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
     
      done(null, profile); // Store user profile in session
    }
  )
);

// Serialize user (store in session)
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user (retrieve from session)
passport.deserializeUser((user, done) => {
  done(null, user);
});
