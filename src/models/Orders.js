import mongoose from "mongoose";
import { serviceSchema } from "./Services.js";
import { clientSchema } from "./Client.js";

const ordersSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    service: { type: serviceSchema, required: true },
    price: { type: Number, required: true }
},{versionKey: false});

const order = mongoose.model("Orders", ordersSchema)

export{order, ordersSchema};