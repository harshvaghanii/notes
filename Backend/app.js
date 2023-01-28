// Imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

// Importing Routes
const notesRoute = require("./routes/notesRoute");
// End of Routes Import

// End of Imports

// Writing the API Endpoints

app.use("/notes", notesRoute);

// End of API Endpoints

// Listening to the server

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
