import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import GrainWise from "../component/GrainWise";
import Taste from "../component/Taste";
import Choose from "../component/Choose";
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
  Purely <span id="companyname">Grainwise</span>
</h4>

              
            </div>
            <div id="productbutton">
              <button onClick={() => navigate('/story')}>
                <h4>Our Product !</h4>
              </button>
            </div>
          </div>

          <div className="main-divide">
            <video id='video' autoPlay muted loop >
              <source src='/mainvedio.mp4' ></source>
              vedio should be here
            </video>
          </div>
        </div>
      </div>
      <Choose/>
      <GrainWise />
      <Taste />
    </div>
  )
}
export default Body;