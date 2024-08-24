import mongoose from "mongoose";

async function conectOnDB() {
    mongoose.connect(process.env.DB_CONECTION_STRING)
    return mongoose.connection;
};

export default conectOnDB;

