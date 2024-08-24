import {client} from "../models/Client.js";

class ClientController {
    static async ListClients(req, res){
    try{
        const listClients = await client.find({});
        res.status(200).json(listClients);
    }catch(err){
        res.status(500).json({message: `${err.message} - req was failed`});
    }
    };

    static async ListClientById(req, res){
        try{
            const id = req.params.id
            const clientFound = await client.findById(id);
            res.status(200).json(clientFound);
        }catch(err){
            res.status(404).json({message: `${err.message} - client not found`});
        }
        };

    static async RegisterCustomers(req,res){
        try{
            const newCustomer = await client.create(req.body);
            res.status(201).json({message: "Client is now on database", client: newCustomer});
        }catch(err){
            res.status(500).json({message: `${err.message} - Fail to register customer`});
        }
    }
    static async updateClient(req, res){
        try{
            const id = req.params.id
            await client.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: `Client updated`});
        }catch(err){
            res.status(500).json({message: `${err.message} - client not updated`});
        }
        };
        static async deleteClient(req, res){
            try{
                const id = req.params.id
                await client.findByIdAndDelete(id, req.body);
                res.status(200).json({message: `Client deleted`});
            }catch(err){
                res.status(500).json({message: `${err.message} - FAIL, client not deleted`});
            }
            };
};

export default ClientController;