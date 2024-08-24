import {service} from "../models/Services.js";

class ServiceController {
    static async ListService(req, res){
    try{
        const listService = await service.find({});
        res.status(200).json(listService);
    }catch(err){
        res.status(500).json({message: `${err.message} - req was failed`});
    }
    };

    static async ListServiceById(req, res){
        try{
            const id = req.params.id
            const ServiceFound = await service.findById(id);
            res.status(200).json(ServiceFound);
        }catch(err){
            res.status(404).json({message: `${err.message} - Service not found`});
        }
        };

    static async RegisterService(req,res){
        try{
            const newService = await service.create(req.body);
            res.status(201).json({message: "Service is now on database", service: newService});
        }catch(err){
            res.status(500).json({message: `${err.message} - Fail to register service`});
        }
    }
    static async updateService(req, res){
        try{
            const id = req.params.id
            await service.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: `Service updated`});
        }catch(err){
            res.status(500).json({message: `${err.message} - Service not updated`});
        }
        };
        static async deleteService(req, res){
            try{
                const id = req.params.id
                await service.findByIdAndDelete(id, req.body);
                res.status(200).json({message: `Service deleted`});
            }catch(err){
                res.status(500).json({message: `${err.message} - FAIL, Service not deleted`});
            }
            };
};

export default ServiceController;