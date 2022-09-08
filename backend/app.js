const express = require("express");
require("dotenv").config();
const app = express();
const colors = require("colors");
const { connectDB } = require("./config/db");
const { errorHandler } = require("./middleware/erroMiddleWare");
const cors = require("cors")
// @PORT
const PORT = process.env.PORT || 8080;

// @db connection
connectDB();


// inbuilt middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors)

// custom middleware
app.use("/api/userData", require("./routes/userRoute"));
app.use("/auth", require("./routes/auth"));
app.use(errorHandler)
// app.use("/api/userDashboard", require("./routes/userDashBoard"))

app.listen(PORT, (req, res, next) => {
  console.log(colors.bold(`Listening on port http://localhost:${PORT}`));
});
