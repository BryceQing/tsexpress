// import {createError} from "http-errors";
// import { Request, Response, NextFunction } from "express";
import * as express from 'express';
// import express = require('express');
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
// var bodyParser = require("body-parser");
import * as bodyParser from 'body-parser';
import * as homeController from "./app/demo/homeController";
import * as userController from "./app/demo/userController";
import * as errHandler from "./app/common/errHandler";

let app = express();


// view engine setup
app.set('..views',path.join(__dirname, 'views'));
app.engine('html', require('ejs').__express);  
app.set('view engine', 'html');

//Set assets directory.
app.use(express.static(path.join(__dirname, 'assets')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', homeController.index);
app.get('/users', userController.list);

// catch 404 and forward to error handler
app.use(errHandler.pageNotFoundErr);
// error handler
app.use(errHandler.internalErr);

export default app;
