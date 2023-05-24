import express, { Express } from 'express';
import  {setupServer}  from './setupServer';
import {config} from './config';


export class App{

    public initialize(): void {
        this.loadConfig();
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