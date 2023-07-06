import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function errorHandler(error, req: Request, res: Response, next: NextFunction) {
  console.log(error);

  if (error.type === "NotFoundError") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Sorry, something went wrong.`);
}
