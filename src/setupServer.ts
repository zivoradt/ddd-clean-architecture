import 'reflect-metadata'
import cors from 'cors';
import { Application} from "express";
import http from 'http'
import Routes from "@routes/index";
import Logger from "bunyan";
import { config } from "@root/config";
import { json, urlencoded } from "body-parser";
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';



const log: Logger  = config.createLogger('setupServer');


const PORT: number = 3001;


export class setupServer {
    private app: Application;
    constructor(app: Application) {
        this.app = app;
    }

    protected baseMiddlewere(app: Application){
       
        app.use(json({limit: '50mb'}));
        app.use(urlencoded({ extended: true, limit: '50mb' }));
    }

    protected cookieMiddleware(app: Application){
        app.use(cookieParser());
         app.use(cors({
            origin: 'http://localhost:3001',
            credentials: true,
            optionsSuccessStatus: 200,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
        })) 
        app.use(cookieSession({
            name: 'session',
            keys: [config.TOKEN_KEY1!, config.TOKEN_KEY2!],
            maxAge: 24 * 7 * 3600000,
            secure: config.NODE_ENV !== 'development'
        }))
    }

    protected startRouter(app: Application) {
        const routes: Routes = new Routes(app);
        routes.initializeRoutes();
    };

    protected httpServer(httpserver: http.Server) {
        httpserver.listen(process.env.PORT, () => {
           log.info(`App listening on PORT:${process.env.PORT}`);
        })
    };


    protected startServer(app: Application){
        const httpSever: http.Server = new http.Server(app);
        this.httpServer(httpSever);
    }

    public start():any{
        this.cookieMiddleware(this.app);
        this.baseMiddlewere(this.app);
        this.startServer(this.app);
        this.startRouter(this.app);
        
        
    }

};

