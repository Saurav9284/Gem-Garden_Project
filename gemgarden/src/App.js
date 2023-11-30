import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './Routing/AllRoutes';
import { Homepage } from './Pages/Homepage';
import Navbar from "./Component/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
