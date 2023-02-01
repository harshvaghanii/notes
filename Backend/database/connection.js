const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const uri = process.env.MONGO_URI;

const establishConnection = async () => {
    try {
        const conn = await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("DB Connected successfully!");
    } catch (error) {
        console.log(`Error : ${error.message}`);
    }
};

module.exports = establishConnection;
