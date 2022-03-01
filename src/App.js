import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import NosFonds from "./pages/NosFonds";
import Presentation from "./components/Presentation";
import News from "./pages/News";
import HomeNews from "./components/HomeNews";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="nosfonds" element={<NosFonds />} />
      <Route path="presentation" element={<Presentation />} />
      <Route path="news" element={<News />} />
      <Route path="homeNews" element={<HomeNews />} />
    </Routes>
  );
}

export default App;
