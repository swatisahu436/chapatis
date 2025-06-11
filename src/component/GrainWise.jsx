import React from "react";
import { FaLeaf, FaUtensils, FaRecycle, FaGripLines } from "react-icons/fa";

const benefits = [
  {
    icon: <FaLeaf className="benefit-icon green" />,
    title: "High Fiber & Protein",
  },
  {
    icon: <FaUtensils className="benefit-icon yellow" />,
    title: "Tastes Great",
  },
  {
    icon: <FaRecycle className="benefit-icon blue" />,
    title: "Reduces Waste",
  },
  {
    icon: <FaGripLines className="benefit-icon gray" />,
    title: "Unique Texture",
  },
];

export default function GrainWise() {
  return (
    <div className="grainwise-container">
      {/* Split Image Banner */}
      <div className="split-image">
        <img src="/leafWrap.jpg" alt="Healthy Wrap" />
        <img src="/spent-grain-texture.avif" alt="Spent Grain" />
      </div>

      {/* Section Title */}
      <div className="section">
        <h1 className="section-title">The GrainWise Difference</h1>
        </div>

      {/* Benefits Grid */}
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            {benefit.icon}
            <h3>{benefit.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
