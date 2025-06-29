import React, { useEffect, useRef } from "react";
import { FaLeaf,FaRecycle} from "react-icons/fa";

const Benefits = () => {
  const rotiRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue =
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      const rotation = scrollValue * 10; // full 360 degrees

      if (rotiRef.current) {
        rotiRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="benefits-div">
      <div className="benefits-left">
        <span id="left">  <FaRecycle className="benefit-icon" style={{ color: '#4B352A', width: '88px', height: '90px' }} />    Upcycled Goodness</span>
        <span id="right"><FaLeaf className="benefit-icon green" style={{color:'rgb(148, 192, 18)',width:'88px', height:'80px'}} /> Naturally Nutritious</span>  

        <span id="left">🌍 Planet-Friendly</span>
        <span id="right">💚 Smart Eating</span>
      </div>
      <div className="benefits-right">
        <img
          src="/roti-circel.png"
          alt="roti not found"
          className="rotate-roti"
          ref={rotiRef}
        />
      </div>
    </div>
  );
};

export default Benefits;
