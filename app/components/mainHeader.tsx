'use client'
import React, { useEffect, useState, useContext } from 'react';
import styles from "./componentsModuleCss/mainheader.module.css";
import AddRepository from './headercomponents/addRepository';
import InputRepo from './inputRepo';
import { AppContext } from './AppContext';


export default function MainHeader() {
    
    const [isSticky, setSticky] = useState(true);
    const [formValue, setFormValue] = useState<string>('');
    const { AddRepo } = useContext(AppContext);
    const changeInputValue = (value: string) => {
      console.log('Form submitted with value:', value);
      setFormValue(value);
      // Diğer işlemleri burada gerçekleştirebilirsiniz
    };

    const SumbitAdddRepo = async ()=> {
      if(formValue){
        try {
          let repoUrl = formValue;
          const response = await fetch('http://localhost:3000/api/repos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',  // Set the content type for JSON data
            },
            body: JSON.stringify({ repoUrl }),  // Serialize the repoUrl as JSON
          });
      
          if (!response.ok) {
            if(response.status==401){
              alert("The url you sent is wrong")
              setFormValue("");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
          await AddRepo(data)
  
        } catch (error) {
          console.error("Error:", error);
          // Handle other network or parsing errors
        }
      }
      else{
        alert("Repo Url is Empty")
      }
    }

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
            <InputRepo changeInputValue={changeInputValue}></InputRepo>
            <AddRepository SubmitRepo = {SumbitAdddRepo}></AddRepository>
        </div>
    )
}


