import logo from './logo.svg';
import './App.css';
import {
  Routes, Route,
  BrowserRouter,
  useNavigate,
} from 'react-router-dom';
import Home from './Pages/Home'
import Nav from './Components/Nav';
import Product from './Pages/Product';
import { useState } from 'react';
import Footer from './Components/Footer';
function App() {
  const [img, setImg] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home setImg={setImg} />} />
          <Route path='/Home/:sec' element={<Home setImg={setImg} />} />
          <Route path='/Product/:Cat/:iCat/:id' element={<Product img={img} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
