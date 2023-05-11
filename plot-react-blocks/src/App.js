
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Main from './components/Main';
import SubContent from './components/SubContent';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="container">
      <Header/>
      <SideNav/>
      <Main>
          <SubContent/>
          <SubContent/>
          <SubContent/>
          <Advertisement/>
      </Main>
    </div>
  );
}

export default App;
