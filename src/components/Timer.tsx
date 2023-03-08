import React, { useState, useEffect } from 'react';

export interface TimerProps{
    initialTime: number;
}

export function Timer(props:TimerProps){
    const [time, setTime] = useState(props.initialTime);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('timer', String(time));
    }, [time]);
  
    return (
    <div className='text-white bg-whitelight px-[80px] rounded-sm py-4 text-4xl'>
        
        {time}
    
    </div>
    );
}