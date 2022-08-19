const express = require("express");
require("dotenv").config();
const app = express();
const colors = require("colors")
const {connectDB} = require("./config/db");

// @PORT
const PORT = process.env.PORT || 8080;

// @db connection
connectDB()


// inbuilt middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// custom middleware
app.use("/api/userData", require("./routes/userRoute"))
// app.use("/api/userDashboard", require("./routes/userDashBoard"))


app.listen(PORT, () => {
  console.log(colors.bold(`Listening on port http://localhost:${PORT}`));
});
