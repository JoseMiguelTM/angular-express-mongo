/**
 * Created by Syed Afzal
 */
const mongoose = require("mongoose");
require('dotenv').config(); 

exports.connect = (app) => {
  const options = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
      maxPoolSize: 10, // Maintain up to 10 socket connections
  };

  const getMongoUri = () => {
    const MONGO_USER = process.env.MONGODB_USER;
    const MONGO_PASS = process.env.MONGODB_PASS;
    const MONGO_PROTO = process.env.MONGODB_PROTO;
    const MONGO_PARAMS = process.env.MONGODB_PARAMS;
    return `${MONGO_PROTO}${MONGO_USER}:${MONGO_PASS}${MONGO_PARAMS}`;
  }

  const connectWithRetry = () => {
    mongoose.Promise = global.Promise;
    console.log("MongoDB connection with retry");
    
    mongoose
      .connect(getMongoUri(), options)
      .then(() => {
        console.log("MongoDB is connected");
        app.emit("ready");
      })
      .catch((err) => {
        //console.log("MongoDB connection unsuccessful, retry after 2 seconds.", err);
        console.log(err)
        setTimeout(connectWithRetry, 2000);
      });
  };
  connectWithRetry();
};
