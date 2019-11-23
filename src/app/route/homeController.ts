import {Request, Response} from 'express';
import * as express from 'express';
import * as path from "path";
import * as root from 'app-root-path';

/**
 * GET /
 * Home page.
 */
function process(file: string){
  return path.join(root.path, '../../assets/html/' + file)
}


let router = express.Router();
router.get('/', (req:Request, res:Response) => {
  
  res.sendFile(process('hello.html'))

})
export {router};