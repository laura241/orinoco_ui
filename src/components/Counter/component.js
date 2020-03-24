import React, { useEffect, useState} from 'react';


function Counter() {
    const [counter, setCounter] = useState(0);
    const [date, setDate] = useState(new Date());
   
    useEffect(() => {
      const interval = setInterval(() => setDate(new Date()), 1000);
   
      return function() {
        clearInterval(interval);
      }
    }, []);
     
    return (
      <div>
        {`${counter} `} 
        <button onload={() => setCounter(counter + 1)}>+1{date.toLocaleString("fr-FR")}</button>
      </div>
    );
  }

export default Counter;
