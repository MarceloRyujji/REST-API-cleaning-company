import {order} from "../models/Orders.js";
import { service } from "../models/Services.js";
import { client } from "../models/Client.js";

class OrderController {
    static async ListOrders(req, res){
    try{
        const ListOrders = await order.find({});
        res.status(200).json(ListOrders);
    }catch(err){
        res.status(500).json({message: `${err.message} - req was failed`});
    }
    };

    static async ListOrderById(req, res){
        try{
            const id = req.params.id
            const OrderFound = await order.findById(id);
            res.status(200).json(OrderFound);
        }catch(err){
            res.status(404).json({message: `${err.message} - Order not found`});
        }
        };

    static async RegisterOrder(req,res){
        const newOrder = req.body;
        try{
            const clientFound = await client.findById(newOrder.clientId);
            const serviceFound =  await service.findById(newOrder.service);
            const buildOrder = {...newOrder, client:{...clientFound._doc}, service:{...serviceFound._doc}};
            const completeOrder = await order.create(buildOrder);
            res.status(201).json({message: "Order is now on database", service: completeOrder});
        }catch(err){
            res.status(500).json({message: `${err.message} - Fail to register order`});
        }
    }
    static async updateOrder(req, res){
        try{
            const id = req.params.id
            await order.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: `Order updated`});
        }catch(err){
            res.status(500).json({message: `${err.message} - Order not updated`});
        }
        };
        static async deleteOrder(req, res){
            try{
                const id = req.params.id
                await order.findByIdAndDelete(id, req.body);
                res.status(200).json({message: `Order deleted`});
            }catch(err){
                res.status(500).json({message: `${err.message} - FAIL, Order not deleted`});
            }
            };
};

export default OrderController;