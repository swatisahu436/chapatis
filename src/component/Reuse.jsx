import React from "react";

const Reuse=({ image, heading, text, reverse,bgColor })=>{
    return(
    
      <div className={`section ${reverse ? "reverse" : ""}`}
      style={{ backgroundColor: bgColor }}>
      <div className="text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={image} alt="section visual" />
      </div>
    </div>
    
    );
};
export default Reuse;
