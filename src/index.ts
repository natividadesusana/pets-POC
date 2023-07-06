import express, { json, Request, Response } from "express";
import "express-async-errors";
import httpStatus from "http-status";
import router from "@/routers/index.router";
import { errorHandler } from "@/middlewares/error-middlewares";

const app = express();
app.use(json());
app.use(router)
app.use(errorHandler)

app.get("/health", (req: Request, res: Response) => res.sendStatus(httpStatus.OK));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
