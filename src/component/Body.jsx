import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import GrainWise from "./GrainWise";
import Taste from "./Taste";
const Body = () => {
const navigate = useNavigate();
  return (
    <div>
    <div id="maincontent">
      <Header/>
      <div id='mainhead'>
      <h1> Crafted from the Earth,</h1><br /> <h1> Brewed for Good</h1>
     </div>
      <div id="video">
        <video autoPlay loop muted>
          <source src="/mainvedio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div id="explorebutton">
          <button onClick={()=>navigate('/story')}>
            <h4>Explore Our Story</h4>
          </button>
        </div>
    </div>
     <GrainWise />
     <Taste/>
     </div>
  )
}
export default Body;