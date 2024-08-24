import mongoose from "mongoose";

const serviceSchema =  new mongoose.Schema({
    id : {type: mongoose.Schema.Types.ObjectId},
    Service: {type: String, required:true }
},{versionKey:false});

const service = mongoose.model("services", serviceSchema);

export {service, serviceSchema}