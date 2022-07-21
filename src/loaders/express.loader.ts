import type { Express, Request, Response } from "express";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import responseTime from "response-time";
import cookieParser from "cookie-parser";
import compression from "compression";

const limiter = rateLimit({});
const prefixVersion = "/api/v1";

export default (app: Express) => {
  app.use(cors({ origin: true }));
  app.use(helmet());
  app.use(limiter);
  app.use(responseTime());
  app.use(cookieParser());
  app.use(compression());
  app.use(prefixVersion, (req: Request, res: Response) => {
    res.send("Hello");
  });
};
