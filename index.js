const path = require('path');
const express= require('express')
const dotenv = require('dotenv');
const DishRoutes= require('./routes/dishRouter')
const promoRoutes= require('./routes/promoRouter')
const leaderRoutes= require('./routes/leaderRouter')
var cookieParser = require('cookie-parser')

const connectDB = require('./config/db');


// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database

connectDB();
const app = express()


//Bosy parser- To read the data from the user:

app.use(express.json());
// Mouting the users:
app.use(cookieParser('12345-67890-09876-54321'));

function auth (req, res, next) {

    if (!req.signedCookies.user) {
      var authHeader = req.headers.authorization;
      if (!authHeader) {
          var err = new Error('You are not authenticated!');
          res.setHeader('WWW-Authenticate', 'Basic');              
          err.status = 401;
          next(err);
          return;
      }
      var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
      var user = auth[0];
      var pass = auth[1];
      if (user == 'admin' && pass == 'password') {
          res.cookie('user','admin',{signed: true});
          next(); // authorized
      } else {
          var err = new Error('You are not authenticated!');
          res.setHeader('WWW-Authenticate', 'Basic');              
          err.status = 401;
          next(err);
      }
    }
    else {
        if (req.signedCookies.user === 'admin') {
            next();
        }
        else {
            var err = new Error('You are not authenticated!');
            err.status = 401;
            next(err);
        }
    }
  }

app.use(auth);



app.use('/dishes/', DishRoutes)
app.use('/promotions/', promoRoutes)
app.use('/leaders/', leaderRoutes)

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
