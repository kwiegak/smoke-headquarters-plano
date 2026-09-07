import { Routes, Route } from "react-router-dom";
import NicotineWarning from './components/NicotineWarning/NicotineWarning';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <NicotineWarning />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;