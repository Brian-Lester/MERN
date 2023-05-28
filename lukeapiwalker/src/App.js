
import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [searchItem, setSearchItem] = useState({
    Obj: 'people',
    id: ''
  });
  const [responseData , setResponseData] = useState('')
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '' element ={<Form searchItem = {searchItem} setSearchItem = {setSearchItem} responseData ={responseData} setResponseData = {setResponseData}/>}/>
      <Route path = 'people/:id' element ={<Form searchItem = {searchItem} setSearchItem = {setSearchItem} responseData ={responseData} setResponseData = {setResponseData}/>}/>
      <Route path = 'planets/:id' element ={<Form searchItem = {searchItem} setSearchItem = {setSearchItem} responseData ={responseData} setResponseData = {setResponseData}/>}/>
      <Route path = 'vehicles/:id' element ={<Form searchItem = {searchItem} setSearchItem = {setSearchItem} responseData ={responseData} setResponseData = {setResponseData}/>}/>
    </Routes>
    <div className="App">

    </div>
    </BrowserRouter>
  );
}

export default App;
