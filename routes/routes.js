import  express  from "express";
import { addUser ,getUsers} from "../controller/user-contoller.js";
import { newConversation } from "../controller/conversation-controller.js";
import { getConversation } from "../controller/conversation-controller.js";
import { getMessages, newMessage } from "../controller/message-controller.js";
import { uploadFile } from "../controller/image-controller.js";
import upload from '../controller/upload.js'
import { getImage } from "../controller/image-controller.js";
const route = express.Router();

route.post('/add',addUser)
route.get('/users',getUsers)

route.post('/conversation/add',newConversation)
route.post('/conversation/get',getConversation)

route.post('/message/add',newMessage)
route.get('/message/get/:Id',getMessages)

route.post('/file/upload/',upload.single("file"),uploadFile)
route.get('/file/:filename',getImage)

export default route;
