import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express()

// only support string and limit 20 mb
app.use(bodyParser.json({limit: "20mb", extended: true}));

// it parses incomming request with urlencoded payloads
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

// make request form one website to another website
app.use(cors())

