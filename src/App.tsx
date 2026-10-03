import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NicotineWarning from './components/NicotineWarning/NicotineWarning';
import AgeVerification from './components/AgeVerification/AgeVerification';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <AgeVerification />
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