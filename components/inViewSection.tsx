"use client"

import React,{useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionHook } from '@/context/activeSection';
import { links } from '@/lib/data';

type linkstype=(typeof links)[number]['name'];


function SectionViewHook (sectionname:linkstype,threshold=0.75 ){

    const {ref,inView}=useInView({
        threshold
      });
      const activeSection=useActiveSectionHook();
      const { activestate,setActiveState }=activeSection
      
      useEffect(() => {
        if(inView) setActiveState(sectionname);
      }, [inView,setActiveState,sectionname]);
      
return {
    ref
}    
}

export default SectionViewHook;
