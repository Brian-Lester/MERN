import ToDo from './Components/ToDo';
import Form from './Components/Form';
import { useState } from 'react';
import './App.css';


function App() {
  const [ list, setList] =  useState([]);
  const [item , setItem] = useState({
    Title:'',
    dueDate : '',
    done: false})
  return (
    <div className="App">
        <Form list = {list} setList ={setList} item ={item} setItem = {setItem}/>
        <ToDo list = {list}/>
    </div>
  );
}

export default App;
