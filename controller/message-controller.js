import Conversation from "../model/Conversation.js";
import Message from "../model/Message.js"

export const newMessage = async(request,response)=>{
try {
    const newMessage = new Message(request.body);
    await newMessage.save()
  await Conversation.findByIdAndUpdate(request.body.conversationId,{message:request.body.text})
    return response.status(200).json("Message has been sent successfully")
} catch (error) {
    return response.status(500).json(error.message)
}
}


export const getMessages = async(request,response)=>{
    try {

        const message = await Message.find({conversationId:request.params.Id});
        return response.status(200).json(message)
    } catch (error) {
        console.log("error while fetching messages");
    }
}