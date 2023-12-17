
import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [sum, setSum] = useState(0);

  useEffect(()=>{
    setSum(Number(input1)+Number(input2));
  },[input1, input2])
  return (
    <div id="main">
      <input id='input1' value={input1} onChange={e=>setInput1(e.target.value)}/>
       +
      <input id='input2' value={input2} onChange={e=>setInput2(e.target.value)}/> 
      
      <p id='result'>{sum}</p>
    </div>
  )
}


export default App;