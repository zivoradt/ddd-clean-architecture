import express, { Express } from 'express';
import  {setupServer}  from './setupServer';
import {config} from './config';
import { databaseConnection } from '@root/databaseSetup';




export class App{

    public async initialize(): Promise<void> {
        this.loadConfig();
        await databaseConnection.connect()
        const app: Express =  express();
        const server: setupServer = new setupServer(app);
        server.start();
    }
    private loadConfig(){
        config.validateConfig();
    }
}

const application: App = new App();
application.initialize();