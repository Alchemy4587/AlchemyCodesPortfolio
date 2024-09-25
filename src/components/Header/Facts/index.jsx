import React, { useEffect, useState } from 'react'
import "./facts.css"
import Odometer from 'react-odometerjs'

const Facts = () => {
    const [experience,setExperience] = useState(0);
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setExperience(10)
        },3000)
        return () =>{
            clearTimeout(timeoutId)
        }
    },[])
  return (
    <div className='fact__container'>
        <div className="fact__item">
            <div className="count__container">
                <Odometer
                    value={experience}
                />
                <span className="indicator">+</span>
            </div>
            <p className="name">Years of Experience</p>
        </div>
    </div>
  )
}

export default Facts