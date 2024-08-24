import express from "express";
import clients from "./clientRoutes.js"
import services from "./serviceRoutes.js";
import orders from "./ordersRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) => res.status(200).send("API for clients of a cleaning and maintenance company"));

    app.use(express.json(), clients, services, orders);
};

export default routes;