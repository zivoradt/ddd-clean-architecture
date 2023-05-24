import { Application} from "express";
import http from 'http'
import Routes from "@routes/index";




const PORT: number = 3001;


export class setupServer {
    private app: Application;
    constructor(app: Application) {
        this.app = app;

    }

    protected startRouter(app: Application) {
        const routes: Routes = new Routes(app);
        routes.initializeRoutes();
    };

    protected httpServer(httpserver: http.Server) {
        httpserver.listen(process.env.PORT, () => {
            console.log(`App listening on PORT:${process.env.PORT}`);
        })
    };

    protected startServer(app: Application){
        const httpSever: http.Server = new http.Server(app);
        this.httpServer(httpSever);
    }

    public start(){
        
        this.startServer(this.app);
        this.startRouter(this.app);
    }

};


