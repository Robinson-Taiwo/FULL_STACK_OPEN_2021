import { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

    console.log(points)

const randomNumbers = Math.floor(Math.random() * anecdotes.length);
  


const handleclick = ()=>{
  const copy =[...points]
  copy[selected] +=1
  setPoints(copy )
}
  
const ps= [...points]
const max = Math.max(...ps)
const index = ps.indexOf(max);
console.log(max)

  
 return(
<div>
<Title text={"Anecdote of the day"} />
<p>{anecdotes[selected]}</p>
<p>{`has ${points[selected]} votes`}</p>
<Button onClick={handleclick} name={"votes"} />
<Button onClick={()=>{setSelected(randomNumbers)}} name={"next Anecdote"} />
<Title text={"Anecdote with most votes"} />
<p>{anecdotes[index]}</p>
<p>{`has ${max} votes`}</p>
</div>

 ) 
     
 }
  


export default App;
