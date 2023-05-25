import { Application} from "express";
import http from 'http'
import Routes from "@routes/index";
import Logger from "bunyan";
import { config } from "@root/config";

import bodyParser, { json, urlencoded } from "body-parser";

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

    public start(){
        this.baseMiddlewere(this.app);
        this.startServer(this.app);
        this.startRouter(this.app);
        
    }

};

