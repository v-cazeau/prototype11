import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Error404 from './pages/Error404.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= '/' element= {<Home />} />
      <Route path= '/about' element= {<About />} />
      <Route path= '/contact' element= {<Contact/>} />
      <Route path= '/*' element= {<Error404/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
