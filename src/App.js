import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import NosFonds from './pages/NosFonds';
import Presentation  from './components/Presentation'
import News from './pages/News';

function App() {
  return (
    <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="nosfonds" element={<NosFonds />} />
        <Route path="presentation" element={<Presentation />} />
        <Route path="news" element={<News />} />
   
    </Routes>

  );
}

export default App;
