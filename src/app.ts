import 'reflect-metadata'
import express, { Express } from 'express';
import  {setupServer}  from './setupServer';
import {config} from './config';
import { DatabaseConnection } from '@root/databaseSetup';
import { inject, injectable } from 'tsyringe';
import { diContainer } from './dependencies/dependencies';



@injectable()
export class App{
    private db: DatabaseConnection;

    constructor() {
        this.db = diContainer.registerController.resolve(DatabaseConnection);
    }
    
    public async initialize(): Promise<void> {
        this.loadConfig();
        await this.db.connect();
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