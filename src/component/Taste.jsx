import React from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
const Taste=()=>{
    return(
        <section className="taste-goodness-section">
  <h2 className="section-title">Taste the Goodness</h2>
  <p className="intro-text">
    Soft, nutty, and delicious — our wraps bring a wholesome taste that pairs beautifully with any filling.
  </p>

  <div className="wrap-grid">
    <div className="wrap-card">
      <img src="/breakfast-wraps-8.jpg" alt="Wrap for lunch" />
      <h3>Lunch Wraps</h3>
      <p>Perfectly satisfying and easy to customize with your favorite veggies and proteins.</p>
    </div>
    <div className="wrap-card">
      <img src="breakfast-wraps-8.jpg" alt="Breakfast burrito" />
      <h3>Breakfast Burritos</h3>
      <p>Start your day with a burst of flavor – eggs, cheese, and goodness wrapped in one.</p>
    </div>
    <div className="wrap-card">
      <img src="/sweet.jpg" alt="Quesadilla wrap" />
      <h3>Quesadillas</h3>
      <p>Cheesy, melty, and packed with taste – a family favorite reinvented with healthy wraps.</p>
    </div>
    <div className="wrap-card">
      <img src="quad.jpg" alt="Sweet dessert wrap" />
      <h3>Sweet Wraps</h3>
      <p>Indulge with bananas, berries, or nut butter – these wraps love dessert too!</p>
    </div>
  </div>
</section>

    );
};
export default Taste;