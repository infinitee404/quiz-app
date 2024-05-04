import React, { useEffect, useState } from 'react'
import StartPage from './StartPage'
import Quiz from './Quiz'

const Hero = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [categories, setCategories] = useState(null)

    const handleCategory = (category) =>{
        setCategories(category)
    }

    const handleRestart = () =>{
        setIsRunning(false)
        setCategories(null)
    }
    
    useEffect(()=>{
        if (categories != null){
            setIsRunning(true)  
        }
    },[categories])

    return(
        <>
            {!isRunning ?
                <StartPage 
                    onClick = {handleCategory}
                />
            :
                <Quiz
                    selectCategory={categories}
                    handleRestart={handleRestart}
                />       
            }
        </>
    )    
}

export default Hero