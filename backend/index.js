import express from "express";
import connectToDatabase from "./config/dbConfig.js";
import dishesRoutes from "./routes/dishes.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from 'cors';
import session from "express-session";
import passport from "passport";
import User from "./models/User.js";

const app = express();
const port = 3001;

connectToDatabase();
app.use(
    session({
      secret: "SECRETKEY",
      resave: false,
      saveUninitialized: true,
      cookie:{
        maxAge: 1000*60*60*24,
      }
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(cors());
app.use(dishesRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);

passport.serializeUser((user,cb)=>{
    cb(null,user);
  });
passport.deserializeUser((user,cb)=>{
    cb(null,user);
  });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});