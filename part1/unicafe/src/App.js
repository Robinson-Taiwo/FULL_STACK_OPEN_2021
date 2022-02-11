import React, { useState } from 'react'
import Title from './components/Title'
import Button from './components/Button'
import Statistics from './components/Statistics'




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+bad+neutral;
  const average = all/3;
  const positive =  ` ${(good/all)*100} %`

  

  return (
    <div>
      < Title name={"give feedback"}/>

      <Button name={"good"} 
      onclick={()=>{setGood(good +1)}} />

       <Button  name={"neutral"} 
       onclick={()=>{setNeutral(neutral +1)}} />

        <Button  name={"bad"} 
         onclick={()=>{setBad(bad +1)}} />

         {
           good===0 & neutral===0 && bad===0? <p>no feed back</p>:<Statistics good={good} bad={bad} neutral={neutral} average={average} all={all} positive={positive} />
            
          }
         
        
        

    </div>
  )
}


export default App