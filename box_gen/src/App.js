
import './App.css';
import Form from './Components/Form';
import ColorList from './Components/ColorList';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("");
  const[allColors,setAllColors] = useState([]);
  return (
    <div className="App">
      
      <Form color = {color} setColor = {setColor} setAllColors={setAllColors} allColors ={allColors}/>
      <ColorList allColors={allColors}/>
    </div>
  );
}

export default App;
