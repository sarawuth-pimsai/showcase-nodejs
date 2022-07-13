import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import responseTime from "response-time";
import cookieParser from "cookie-parser";
import compression from "compression";
import userRouter from "./routes/userRouter";

const app = express();
const port = 3000;
const limiter = rateLimit({});
const prefixVersion = "/api/v1";

app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(responseTime());
app.use(cookieParser());
app.use(compression());

app.use(`${prefixVersion}/users`, userRouter);
app.get("/", (req, res) => {
  // throw { error: { message: "error" } };
  res.send("Hello");
});
app.use(express.static("public"));
app.use((err, req, res, next) => {
  console.log(JSON.stringify(err));
  res.send("error");
});
app.listen(port, () => {
  console.log(`Application listenting on port ${port}`);
});
