import express from "express";
import dotenv from "dotenv";
import { routes } from "./routes/routes.js";

const app = express();
dotenv.config();

// app.get("/", (req, res) => {
//   res.status(200).send();
// });

routes.map(({ path, component }) => {
  return app.get(path, (req, res) => {
    res.status(200).send(component);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
