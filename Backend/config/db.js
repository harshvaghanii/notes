//Connection file to mongo db
import mongoose from "mongoose";
import colors from "colors";
mongoose.set("strictQuery", false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("DB Connection successfull!");
    } catch (error) {
        console.error(`Error: ${error.message}`.red.bold);
        process.exit();
    }
};

export default connectDB;
