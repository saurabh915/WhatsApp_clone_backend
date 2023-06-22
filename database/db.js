import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
const connection = async()=>{
const URL = `mongodb://${USERNAME}:${PASSWORD}@cluster0-shard-00-00.hjvio.mongodb.net:27017,cluster0-shard-00-01.hjvio.mongodb.net:27017,cluster0-shard-00-02.hjvio.mongodb.net:27017/?ssl=true&replicaSet=atlas-dovdzg-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {

    await mongoose.connect(URL,{useUnifiedTopology:true})
console.log("database connected successfully");
} catch (error) {
    console.log("error while connecting database ",error.message);
}
}

export default connection;