import React, { useState } from 'react'
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
const Header = ({setListImages,setIsLoading}) => {
    const [inputValue,setInputValue]=useState("")
    const handleInputChange=(e)=>setInputValue(e.target.value)
    console.log(inputValue);
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
          const response=await fetch("http://localhost:5500/openai/images",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                prompt:inputValue
            })
          })
          const jsonData=await response.json();
          setListImages(jsonData.data)  
            
        } catch (error) {
            console.log(error)
            
        }finally{
            setIsLoading(false);
        }
    }
  return (
    <div className='bg-gradient-to-r from-[#84a9c0] to-[#6a66a3] '>
       <div className='container mx-auto max-w-5xl px-2 py-6'>
        <p className='block font-bold text-xl font-opensans'>Image<span className='text-primary'>MINGLE</span></p>
        <div className='mt-14'>
            <h2 className='font-bold text-xl max-w-xs mb-1'>Unleash the power of AI to create stunning images</h2>
            <p className='font-light opacity-80 hidden md:inline-block'>Crafted with the magic of AI, giving life to images beyond imagination!</p>
            <form className='relative my-8  max-w-md' onSubmit={handleSubmit}>
                <input value={inputValue} onChange={handleInputChange} className='indent-2 py-4 pr-[4.5rem] rounded -sm bg-gray-50
                w-full md:max-w-md focus:ring-primary outline-none focus:ring-1' type='text'
                placeholder='Unleash power of AI to create'/>
                <button type='submit' className='absolute bottom-2.5 right-2.5 bg-primary text-white px-2 py-2 rounded-sm text-sm'>
                    <ArrowLongRightIcon className='h-6'/>
                </button>
            </form>
        </div>
        </div> 
    </div>
  )
}

export default Header