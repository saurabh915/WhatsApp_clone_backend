import  express  from "express";
import  connection  from "./database/db.js";
import cors from 'cors'
import Route from "./routes/routes.js";
import bodyParser from 'body-parser' 
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

const PORT = 8000;
connection()
app.use('/',Route)
app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`))

