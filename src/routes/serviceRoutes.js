import express from "express";
import ServiceController from "../controllers/servicesController.js";
import checkApiKey from "../config/authorized.js";

const routes = express.Router();

routes.get("/service", checkApiKey, ServiceController.ListService);
routes.get("/service/:id", checkApiKey, ServiceController.ListServiceById);
routes.post("/service", checkApiKey, ServiceController.RegisterService);
routes.put("/service/:id", checkApiKey, ServiceController.updateService);
routes.delete("/service/:id",  checkApiKey, ServiceController.deleteService);

export default routes;
