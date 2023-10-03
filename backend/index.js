const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 9050;

const routes = require("./routes/routes");

app.use(cors());
app.use(express.json());

app.use("/", routes);

mongoose
  .connect(
    "mongodb+srv://dzende725:rader123@cluster0.ze8ajor.mongodb.net/realestate",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
