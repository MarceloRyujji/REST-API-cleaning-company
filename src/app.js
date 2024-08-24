import express from "express";
import conectOnDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect =  await conectOnDB();
connect.on("err", (err) =>{
    console.error("Connection Error", err)
});
connect.once("open", ()=>{
    console.log("Successful connection with the database")
})
const app = express();
routes(app);


app.delete("/clients/:id", (req,res)=>{
    const index = searchClients(req.params.id);
    clients.splice(index, 1);
    res.status(200).send("Client deleted");
})

export default app;