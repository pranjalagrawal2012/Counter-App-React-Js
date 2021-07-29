import React from 'react'
import './App.css';
import {useState} from 'react'

function App() {

  const [data, setdata] = useState(0)
  
  function update(i){
    if(i==="i"){
      setdata(data+1);
    }else if(i==='d'){
        setdata(data-1);
    }
    else{
      setdata(0);
    }
  
}

  return (
    <div className="App">     
      <h1 class ="navbar">{data}</h1>
      <button onClick={()=>update('d')}>Decrement</button>
      <button onClick={update}>Reset</button> 
      <button onClick={()=>update('i')}>Increment</button>
    </div>
  );
}

export default App;
