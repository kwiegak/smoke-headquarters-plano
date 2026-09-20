import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NicotineWarning from './components/NicotineWarning/NicotineWarning';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NicotineWarning />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;