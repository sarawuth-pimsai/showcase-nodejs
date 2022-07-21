import express from "express";
import expressLoader from "./loaders/express.loader";

const startServer = () => {
  const app = express();
  const port = "3000";
  expressLoader(app);
  app.listen(port, () => {
    console.log("Application start on port: " + port);
  });
};
startServer();
