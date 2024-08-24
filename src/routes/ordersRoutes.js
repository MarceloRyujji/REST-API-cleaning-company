import express from "express";
import OrderController from "../controllers/ordersController.js";

const routes = express.Router();

routes.get("/order", OrderController.ListOrders);
routes.get("/order/:id", OrderController.ListOrderById);
routes.post("/order", OrderController.RegisterOrder);
routes.put("/order/:id", OrderController.updateOrder);
routes.delete("/order/:id", OrderController.deleteOrder);

export default routes;