import { Routes , Route } from 'react-router-dom';
import './App.css';
import Contato from './Component/Contato';
import Home from './Component/Home';
import Nav from './Component/Navbar';
import Sobre from './Component/Sobre';
import Notfound from './page/Notfound';

function App() {
  return ( <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sobre' element={ <Sobre/> } />
      <Route  path='/contato' element={<Contato/>}  />
      <Route path='*' element={ <Notfound/>} />
      <Route/>
    </Routes>

</>  );
}

export default App;
