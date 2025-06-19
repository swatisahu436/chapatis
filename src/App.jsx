import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from '../src/page/Body';
import Story from '../src/component/Story';
import Login from '../src/component/Login';
import Order from '../src/component/Order';
import "@fontsource/poppins"; 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/story" element={<Story />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Order" element={<Order/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
