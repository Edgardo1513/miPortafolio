
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './componets/AppNavbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import App1 from './pages/App1';
import App2 from './pages/App2';
import App3 from './pages/App3';
import App4 from './pages/App4';
import App5 from './pages/App5';
import MySocialMedia from './componets/MySocialMedia';
import Contacto from './componets/Contacto';



function App() {
  

  return (          
    

        <HashRouter>               
          <div className='App'>
            <AppNavbar />
            <Routes>
              <Route path='/' element={<Home />} />   
              <Route path='/AboutMe' element={<AboutMe />} />
              <Route path='/App1' element={<App1 />} />   
              <Route path='/App2' element={<App2 />} />   
              <Route path='/App3' element={<App3 />} />   
              <Route path='/App4' element={<App4 />} />   
              <Route path='/App5' element={<App5 />} /> 
              <Route path='/MySocialMedia' element={<MySocialMedia />} />    
              <Route path='/Contacto' element={<Contacto />} />        
            </Routes>           
          </div>
        </HashRouter>         
      
  )
}

export default App
