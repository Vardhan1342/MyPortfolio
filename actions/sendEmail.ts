"use server"
import { error } from 'console';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

const validation=(value:unknown)=>{
        if(!value && typeof value !== 'string')
        {
            return false;
        }
        return true
}

const getErrormessdage=(error:unknown): string=>{
    let message:string;
    if(error instanceof Error){
    message=error.message
    }
    else if(error && typeof error === 'object' && "message" in error){
    message=String(error.message)
    }
    else if(typeof error === "string"){
        message=error
    }
    else{
        message="something went wrong"
    }
    return message;
}

export const sendEmail=async(formData:FormData)=>{

    const senderEmail=formData.get("senderEmail")
    const message=formData.get("message")
    if(!validation(senderEmail)){
        return {
            error:"in valid email"
        }
    }
    if(!validation(message)){
        return {
            error:"in valid message"
        }
    }
    let data
    try{

    data= await resend.emails.send({
            from: 'from Portfolio <onboarding@resend.dev>',
            to: 'srivardhan3566@gmail.com',
            reply_to:senderEmail as string,
            subject: 'Message',
            text: message as string
        });
        
    }
    catch(error:unknown){
        return {
            error:getErrormessdage(error),
        }
    }
    return {
        data,
    }
}