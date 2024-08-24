import express from "express";
import ServiceController from "../controllers/servicesController.js";

const routes = express.Router();

routes.get("/service", ServiceController.ListService);
routes.get("/service/:id", ServiceController.ListServiceById);
routes.post("/service", ServiceController.RegisterService);
routes.put("/service/:id", ServiceController.updateService);
routes.delete("/service/:id", ServiceController.deleteService);

export default routes;