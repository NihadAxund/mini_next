'use client'
import React, { useEffect, useState } from 'react';
import styles from "./componentsModuleCss/mainheader.module.css";

export default function MainHeader() {
    
    const [isSticky, setSticky] = useState(true);
    
    const onScroll = (event:any) => {
        const { pageYOffset, scrollY } = window;
        console.log("yOffset", pageYOffset, "scrollY", scrollY);
        alert("a")
   
      };
    
      useEffect(() => {
        const eventOptions: any | EventListenerOptions = { passive: true };
        const { pageYOffset, scrollY } = window;
        
        document.body.addEventListener("scroll", onScroll, eventOptions);
      
        // Remove event listener on unmount to prevent memory leaks
        return () => {
          document.body.removeEventListener("scroll", onScroll, eventOptions);
        };
      }, [])


    return (
        <div className={`${styles.mainheader_sec} ${isSticky ? styles['sticky-header'] : ''}`}>
            
        </div>
    )
}


