import React from 'react';
import { Button } from './ui/button';
import { FaPaperPlane } from 'react-icons/fa';
import {  useFormStatus } from 'react-dom';
const SubmitBtn = () => {
 const {pending}=useFormStatus()

  return (
    <Button className='rounded-full gap-x-2 hover:scale-105 transition duration-200 w-[8rem]' type='submit'
    disabled={pending}>
        {pending ?<div className='h-5 w-5 animate-spin border-b-2 border-white rounded-full'></div>:(<>
            Submit <FaPaperPlane />
        
        </>
            )}
     </Button>
  );
}

export default SubmitBtn;
