import mongoose from "mongoose";


const MessageSchema = new mongoose.Schema({

    conversationId:{
        type:String
    },
    senderId:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    }
},
{
    timestamps:true
}
);

const messasge = mongoose.model('Message',MessageSchema);
export default messasge