"use client"

import React from 'react';

import { motion } from 'framer-motion';
import SectionViewHook from './inViewSection';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast';
import Heading from './Heading';


const Contact = () => {

  const {ref}=SectionViewHook("Contact",0.7)
  
  return (
    <motion.section 
    ref={ref}
    id="contact"
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1
    }}
    className='scroll-mt-28 sm:mb-28 mb-20 ' >
    <Heading>Get in touch</Heading>
     <p className='text-sm text-gray-900 text-center  dark:text-gray-200'>To contact me directly at <a href="mailto:srivardhan3566@gmail.com" className='underline text-gray-950  dark:text-gray-200' target="_blank">srivardhan3566@gmial.com</a> or through this form </p>

     <form 
     className='flex flex-col space-y-4 mt-10 text-sm'
     action={async(formData)=>{
        
        const {data,error}= await sendEmail(formData)
        if(error){
            toast.error(error);
            return
        }
        toast.success("Email Sent Successfully")
       
       
     }}
     >
        <input 
        name='senderEmail'
        type="email" 
        required
        maxLength={500}
        className='border border-black/10 rounded-lg shadow-lg h-10  p-2 dark:bg-gray-800' placeholder='your email'></input>
        <textarea 
        name="message"
        cols={10} 
        rows={10} 
        required
        maxLength={500}
        className='rounded-lg p-2 shadow-lg dark:bg-gray-800' 
        placeholder='your message'>

        </textarea>
      <SubmitBtn />
     </form>
    </motion.section>
  );
}

export default Contact;
