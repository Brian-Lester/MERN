import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Number from './Components/Number';
import Word from './Components/Word';
import Colors from './Components/Colors';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/number/:num' element={<Number/>}/>
    <Route path ='word/:word' element ={<Word/>}/>
    <Route path =':text/:textColor/:backGroundColor' element ={<Colors/>}/>
    </Routes>
    <div className="App">

    </div>
    </BrowserRouter>
  );
}

export default App;
