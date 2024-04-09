const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
require("dotenv").config();

const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});
const passport = require("passport");
// const multer = require('multer');

// instantiate & assign/import routes
const bookRoutes = require("./routes/bookRoutes");
// const customerRoutes = require('./routes/customerRoutes');
// const loginRoutes = require('./routes/signupLoginRoutes');
// const agriOfficerDash = require('./routes/aoRoutes');
// const farmerOneDash = require('./routes/foRoutes');
// const urbanFarmerDash = require('./routes/ufRoutes');

// Importing model schema
// const UserReg = require('./models/UserReg');
const Book = require("./models/bookModel");
// Create an express application
const app = express();

// Connect to MongoDB datatbase using Mongoose
// mongoose.connect(process.env.librarydb, {
// mongoose.connect("mongodb://127.0.0.1:27017/librarydb");
mongoose.connect(process.env.DatabaseURL);

// Test if the mongoose connection is open or not
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
    app.listen(3000, () => console.log("listening on port 3000"));
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// app.set('view engine','pug')
app.set("views", path.join(__dirname, "views"));

//Simple request time logger for a specific route
// app.use((req, res, next) => {
//   console.log('A new request received at ' + Date.now());
//   next();
// });

// Body Parser Middleware settings
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Express-Session & Passport Config Settings
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

// Connecting Passport to Schema
// passport.use(UserReg.createStrategy());
// passport.serializeUser(UserReg.serializeUser());
// passport.deserializeUser(UserReg.deserializeUser());

// Multer Middleware Settings
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// });
// const upload = multer({ storage: storage});

// Connect to public folder
app.use(express.static(path.join(__dirname, "public")));

// Connect to main Routing where all Get & Post Methods are
// app.use('/', pageRoutes);

app.use("/", bookRoutes);
// app.use('/', loginRoutes);
// app.use('/', agriOfficerDash);
// app.use('/', farmerOneDash);
// app.use('/', urbanFarmerDash);

//logout
// app.post('/logIntoDash', (req, res) => {
//   if (req.session) {
//       req.session.destroy((err)=> {
//           if (err) {
//               // failed to destroy session
//           } else {
//               return res.redirect('/logIntoDash');
//           }
//       })
//   }
// })

// Incase of Error
app.get("*", (req, res) => {
  res.send("error page");
});
