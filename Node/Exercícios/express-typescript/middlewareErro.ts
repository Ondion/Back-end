import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';

export default function middlewareError(error: Error, request: Request, response: Response, next: NextFunction): any {
  const { name, message, details } = error as any;

  switch (name) {
    case 'ValidationError':
      return response.status(StatusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      return response.status(StatusCodes.NOT_FOUND).json({ message });
      break;
    case 'ConflictError':
      return response.status(StatusCodes.CONFLICT).json({ message });
      break;
    default:
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
  }+

  next();
}
