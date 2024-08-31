import express from "express";
import fs from "fs";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';
const app = express();
const filePath = './uuid.txt';
const corsOptions = {

    origin: 'http://127.0.0.1:5500',

    optionsSuccessStatus: 200
    
}
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(corsOptions));

//GERA O UUID
let uuid;

// Verifica se o arquivo com o UUID já existe
if (fs.existsSync(filePath)) {
  // Lê o UUID do arquivo
  uuid = fs.readFileSync(filePath, 'utf-8');
} else {
  // Gera um novo UUID e salva no arquivo
  uuid = uuidv4();
  fs.writeFileSync(filePath, uuid);
}

console.log('UUID:', uuid);

//USO DO UUID

function createNewGuy(){
    return{
        id: uuid,
        name: "Marcelo A",
    }
}

const newGuy = createNewGuy();
console.log(newGuy);


const checkApiKey = (req,res, next) => {
    const userApiKey = req.header('x-api-key');
    if(userApiKey === uuid){
        next();
    }else{
        res.status(403).json({error: 'Forbidden: Invalid API Key'})
    }
};

export default checkApiKey;


