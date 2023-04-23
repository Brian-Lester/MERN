
import './App.css';
import'./components/PersonCard'
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        fName={"Brian"} 
        lName={"Lester"}
        age ={26}
        hairColor={"Brown"}/>
      <PersonCard
        fName={"Megan"} 
        lName={"Lester"}
        age ={26}
        hairColor={"Brown"}/>
      <PersonCard
        fName={"Annabel"} 
        lName={"Lester"}
        age ={2}
        hairColor={"Brown"}/>
    </div>
  );
}

export default App;
