import express from "express";
import OrderController from "../controllers/ordersController.js";
import checkApiKey from "../config/authorized.js";

const routes = express.Router();

routes.get("/order", checkApiKey, OrderController.ListOrders);
routes.get("/order/:id", checkApiKey, OrderController.ListOrderById);
routes.post("/order",checkApiKey, OrderController.RegisterOrder);
routes.put("/order/:id",checkApiKey, OrderController.updateOrder);
routes.delete("/order/:id",checkApiKey, OrderController.deleteOrder);

export default routes;
