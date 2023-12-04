import './App.css';
import { AllRoutes } from './Routing/AllRoutes';
import { Homepage } from './Pages/Homepage';
import Navbar from "./Component/Navbar";
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
