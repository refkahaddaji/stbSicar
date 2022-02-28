import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import NosFonds from './pages/NosFonds';

function App() {
  return (
    <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="nosfonds" element={<NosFonds />} />
   
    </Routes>

  );
}

export default App;
