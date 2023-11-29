"use client"

import React ,{useState,createContext ,useContext} from 'react';
import { links } from '@/lib/data';
import {  } from 'vm';


type links=(typeof links)[number]['name']
type ContextType={
    activestate:links,
    setActiveState:React.Dispatch<React.SetStateAction<links>>;
}

export const activeProvider= createContext<ContextType | null >(null)


const ActiveSectionProvider = ({children}:{children:React.ReactNode}) => {
    
    const [activestate ,setActiveState]=useState<links>("Projects")
 
    return (
        <activeProvider.Provider
        value={{activestate,setActiveState}}
        >
            {children}
        </activeProvider.Provider>

  );

}



export   const useActiveSectionHook = () => {
    const context=useContext(activeProvider);
    if(context===null){
    throw new Error("nul")
    }
    return context;

}




export default ActiveSectionProvider;
