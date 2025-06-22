import { React } from 'react';
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import GrainWise from "../component/GrainWise";
import Taste from "../component/Taste";
import Choose from "../component/Choose";
import Benefits from '../component/benefits';
import Productview from './Productview';

const Body = () => {
  const navigate = useNavigate();
  const [time,setTime] =useState(new Date());

  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setTime(new Date())
    },1000);
  },[]);
   

  return (
    <div>
      <div id="main">
        <Header />
        <div className='main-content'>
          <div className='main-divide'>
            <div className='main-left'>
              <h4>
                Wholesome Tortillas<br />
                Purely <span id="companyname">GrainWise</span>
              </h4>
            </div>
            <div id="productbutton">
              <button onClick={() => navigate('/story')}>
             <p> Our Product!!</p>
              </button>
            </div>
            <div>
             <h1> {time.toLocalTimeString()}</h1>
            </div>
          </div>
        </div>
      </div>
      <Choose />
      <Benefits/>
      <Productview/>
    </div>
  )
}
export default Body;