import dotenv from 'dotenv';
import express from 'express';
import appCampus from './routers/campus.js';
dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use("/campus", appCampus);


let config = JSON.parse(process.env.myServer);
appExpress.listen(config, ()=> {
    console.log(`http://${config.hostname}:${config.port}`);
});