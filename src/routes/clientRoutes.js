import express from "express";
import ClientController from "../controllers/clientsController.js";
import checkApiKey from "../config/authorized.js";

const routes = express.Router();

routes.get("/clients", checkApiKey, ClientController.ListClients);
routes.get("/clients/:id",checkApiKey, ClientController.ListClientById);
routes.post("/clients", checkApiKey, ClientController.RegisterCustomers);
routes.put("/clients/:id", checkApiKey, ClientController.updateClient);
routes.delete("/clients/:id", checkApiKey, ClientController.deleteClient);

export default routes;
