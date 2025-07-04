import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from '../src/page/Body';
import Story from '../src/component/Story';
import Order from '../src/component/Order';
import "@fontsource/poppins"; 
import Sustainbility from './component/Sustainbility';
import Header from './component/Header';
import Footer from './component/Footer';
import Contact from './page/Contact';
function App() {

  return (
      
    <BrowserRouter>
    <Header/>
      <Routes>
      
        <Route path='/sustainbility' element={<Sustainbility/>}/>
        <Route path="/" element={<Body />}></Route>
        <Route path="/story" element={<Story />} />
        <Route path="/Order" element={<Order/>} />
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;