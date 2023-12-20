import './App.css';
import NavBar from './NavBar.js';
import Elsewhere from './Elsewhere.js';
import About from './pages/About.js';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Elsewhere/>
      <About/>
    </div>
  );
}

export default App;
