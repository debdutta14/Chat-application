import mongoose from "mongoose";

const connectToMongoDB = async (req,res) => {
    try{
        await mongoose.connect(process.env.Mongo_DB_URI);
        console.log("MongoDb connected Successfully");
    }
    catch(error){
        console.log("DB connection error",error.message);
    }
};

export default connectToMongoDB;