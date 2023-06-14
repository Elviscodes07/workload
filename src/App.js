import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/about';
import { Home } from './components/home';
import { Pricing } from './components/pricing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Store } from './components/store';

AOS.init();
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/store' element={<Store></Store>}></Route>
      </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
