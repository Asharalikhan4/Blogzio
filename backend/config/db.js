import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.DATABASE_STRING,{
            useNewUrlParser:true,
  useUnifiedTopology:true,
        });
        console.log("Database is Connected.");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;