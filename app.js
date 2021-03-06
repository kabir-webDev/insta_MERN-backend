const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./keys");

require("./models/user");
app.use(express.json());

app.use(require("./routes/auth"));

mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("err connecting", err);
});

app.listen(PORT, () => {
  console.log("Ekhane run hoitese: ", PORT);
});
