// import logo from './logo.svg';
import './App.css';
import CentralHero from './Components/CentralHero.js';
import BottomLinks from './Components/BottomLinks';

function App() {
  return (
    <div className="App">
      <div className="center-container">
        <CentralHero />
      </div>
      <div className="bottom-container">
        <BottomLinks />
      </div>
    </div>
  );
}

export default App;
