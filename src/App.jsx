
import './App.css'
import { BrowserRouter,Routes , Route, Navigate } from 'react-router-dom'
import Home from './route/Home';
import About from './route/About';
import Service from './route/Service';
import Contact from './route/Contact';
import SignUp from './route/SignUp';

function App() {
 
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='*' element={<Navigate to="/" />}/>
          </Routes>
       </BrowserRouter>
       </div>
    </>
  )
}

export default App
