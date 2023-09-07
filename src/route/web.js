import express from "express";
import homeController from "../controller/homeController";
let Router = express.Router();

let router = express.Router();
const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', (req, res) => {
        res.send('Lien ne')
    })
    return app.use('/', router)

}
module.export = initWebRouter;