import express from "express";
import mongoose from "mongoose";
import SwordRoutes from "./routes/SwordRoutes";
import bodyParser from "body-parser";
const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint2");
app.use(bodyParser.json());
app.use(SwordRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
