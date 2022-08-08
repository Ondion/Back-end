import express, {Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import middlewareError from './middlewareErro';

const api = express();

api.use(express.json());

const PORT: string | number = process.env.PORT || 3001;

api.get('/', (request: Request, response: Response, next) => {
  throw new Error('deu ruim');
  response.status(StatusCodes.OK).json({ message: 'API up!' })
});

api.use(middlewareError)

api.listen(PORT, () => {
  console.log(`ouvindo na porta ${ PORT }`);
});

export default api;
