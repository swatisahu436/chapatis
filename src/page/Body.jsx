import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import GrainWise from "../component/GrainWise";
import Taste from "../component/Taste";
import Choose from "../component/Choose";
import Benefits from '../component/benefits';
const Body = () => {
  const navigate = useNavigate();
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
          </div>
        </div>
      </div>
      <Choose />
      <Benefits/>
    </div>
  )
}
export default Body;