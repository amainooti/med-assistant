const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8080;


// inbuilt middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// custom middleware
app.use("/api/userData", require("./routes/userRoute"))

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
