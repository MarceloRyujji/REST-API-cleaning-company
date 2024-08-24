import express from "express";
import ClientController from "../controllers/clientsController.js";

const routes = express.Router();

routes.get("/clients", ClientController.ListClients);
routes.get("/clients/:id", ClientController.ListClientById);
routes.post("/clients", ClientController.RegisterCustomers);
routes.put("/clients/:id", ClientController.updateClient);
routes.delete("/clients/:id", ClientController.deleteClient);

export default routes;