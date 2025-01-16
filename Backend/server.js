import express from 'express';
import dotenv from "dotenv/config";
import router from './routes/index.route.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api",router);


const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on the port:${PORT}`);
});