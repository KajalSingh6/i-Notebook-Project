const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/inotebook";
const mongoURI = "mongodb+srv://kajalsingh82793:ZMDNx3bF6TV2TPCX@cluster0.x4kif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = () => {
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully");
}

module.exports = connectToMongo;
