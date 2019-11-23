import * as express from 'express';
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import * as bodyParser from 'body-parser';
import {router}  from "./app/route/homeController";
import * as errHandler from  "./app/route/errHandler";
import * as root from 'app-root-path';

let app = express();
// view engine setup
app.set('..views',path.join(root.path, '../../assets/views'));
app.engine('html', require('ejs').__express);  
app.set('view engine', 'html');

//Set assets directory.
app.use(express.static(path.join(root.path, '../../assets')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', router);
app.use(errHandler.pageNotFoundErr); // catch 404 and forward to error handler
app.use(errHandler.internalErr); // error handler

export default app;
