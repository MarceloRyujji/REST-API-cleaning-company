import mongoose from "mongoose";

const clientSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: {type: String, required: true},
    adress: {type: String, required: true},
    email:  {type: String},
    phoneNumber:  {type: Number, required: true},
}, {versionKey: false});

const client = mongoose.model("clients", clientSchema);

export {client, clientSchema};