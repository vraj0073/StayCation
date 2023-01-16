const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const bookingRoutes = require("./routes/bookingRoutes");
const searchRoute = require("./routes/search");
const cors = require("cors");
const port = process.env.PORT || 8080;
const app = express();
const users = require("./routes/api/user");
const reviewRoutes = require('./routes/reviewRoutes');
const qaRoutes = require('./routes/qaRoutes');
const articleRoutes = require('./routes/articleRoutes');
const feedbackFormRoutes = require('./routes/feedbackFormRoutes');

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/hostuser", routes);
app.use("/booking", bookingRoutes);
app.use("/", users);
app.use("/search", searchRoute);
app.use("/review", reviewRoutes);
app.use("/qa", qaRoutes);
app.use("/article", articleRoutes);
app.use("/feedbackForm", feedbackFormRoutes);


app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: "error" });
});

mongoose
  .connect(
    "mongodb+srv://abcd:abcd@webproject.1vxrv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Port " + port);
    app.listen(port);
  })
  .catch((err) => console.log(err));
