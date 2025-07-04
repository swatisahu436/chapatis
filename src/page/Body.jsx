import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import GrainWise from "../component/GrainWise";
import Taste from "../component/Taste";
import Choose from "../component/Choose";
import Benefits from '../component/Benefits';
import Productview from './Productview';
import Product from '../component/Product';
const Body = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="main">
        
        <div className='main-content'>
         
            <div className='main-top'>
              <h4>
                Partner With Us
              </h4>
            </div>
            <div className='main-bottom'>
              <div id="paragraph-home"> <h3>Taste the Future with GrainWise </h3>
                <p>Imagine a tortilla that's not just delicious, but also good for the planet. That's GrainWise.Let's talk about how we can tailor our tortillas to your precise specifications.
              </p></div>
            </div>
            <div id="productbutton">
              <button onClick={() => navigate('/story')}>
                <p> Our Product!!</p>
              </button>
            </div>

       
        </div>
      </div>
      <Choose />
      <Benefits />
     <Product/>
      
       <div className="patner">
        <div className='patner-handshake'><img src='handshake.png'/>  
              <h3>Partner with GrainWise for Bulk Orders</h3></div>
        <p>If you're a café/restaurant, food manufacturer, or responsible retailer looking for bulk quantities of high-quality, unique, and sustainable ingredients, you're in the right place. GrainWise tortillas, crafted from upcycled brewers’ spent grain, are perfect for distinguishing your products. We're dedicated to supplying you with the best, precisely sized for your operational needs.</p>
      </div>
     
    </div>
  )
}
export default Body;