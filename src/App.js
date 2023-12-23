import './App.css';
import NavBar from './NavBar.js';
import Elsewhere from './Elsewhere.js';
import About from './pages/About.js';
import Teaching from './pages/Teaching.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Elsewhere/>
      <About/>
      <div id='teaching1'> <Teaching/> </div>
    </div>
  );
}

export default App;
