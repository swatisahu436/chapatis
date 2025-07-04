import React from "react";
import Reuse from "./Reuse";

const Sustainbility = () => {
  return (
    <div className="sus-container">
      <section className="sus-section">
        <h1>SUSTAINBILITY</h1>
        <img id="sus-img" src="grain.jpg"></img>
      </section>
      <section className="sus-section2">
        <h2>GrainWise – Where Every Grain Makes a Difference </h2>
        <div className="sus-downtext"><p>Imagine a world where food is both delicious and sustainable.</p>
          <p>At GrainWise, we're making that a reality because we know every grain counts:</p>
          <ul className="dot-list">
            <li>  To help feed our growing population.</li>
            <li> To consume less and protect our planet.</li>
            <li>  To preserve farmland and foster more nature.</li>
            <li> And to make food taste truly exceptional.</li>
          </ul>
        </div>
      </section>
    <Reuse
        image="/fixing.jpg"
        heading="Fixing Food, One Tortilla at a Time "
        text="Our current food system is broken, and it demands bold action. We need to completely rethink how we produce the food we enjoy every day.
That’s where GrainWise comes in. We take valuable resources that would otherwise go to waste – specifically, brewers’ spent grain – and transform them into new, nutritious, and incredibly delicious ingredients for our tortillas. This isn’t just smart; it’s upcycling, and it’s the core of how we’re repairing the food system."
    />

      <Reuse
        image="/holdhand.jpg"
        heading="A Better Future, One Grain at a Time "
        text=" It’s a tough truth: 30% of all food produced never makes it to our plates. While the global population grows and food demand rises, a third of what’s made is lost or wasted.
This broken system has a heavy environmental cost:
 It drives the climate and biodiversity crises.
  Agriculture accounts for 80% of deforestation and 70% of biodiversity loss.
  More than 25% of global greenhouse gas emissions stem from food and agriculture.
  Half of the world’s habitable land is used for farming, and over half of that is degraded.
But there’s hope. At GrainWise, we’re committed to changing how food is produced. Our GrainWise tortillas, crafted from upcycled brewers’ spent grain, are a delicious step towards a more sustainable food system."
        reverse
      bgColor="#ffeacc" />
      <Reuse
        image="/recycle.jpg"
        heading="Reducing waste "
        text="We are conscious of processing any waste generated through production in a sustainable way and endeavour to compost, repurpose or recycle the vast majority. We have one full-time employee solely dedicated to sorting recycling to ensure our waste is processed correctly. Through this careful processing, we don’t send any waste to landfill."
      bgColor="	#e0f7e9"/>
      <Reuse
        image="/Spent_grain.jpg"
        heading="Minimising food waste"
        text="In the UK alone, 6.6 million tonnes of food is wasted every year—a staggering number with serious environmental consequences. At GrainWise, we’re passionate about reducing food waste, especially when crafting our nutritious, gluten-free tortillas made from upcycled brewers’ spent grain."
     reverse 
     bgColor="#e8f0fe"/>
      
      <Reuse
        image="/mix.png"
        heading=" Upcycling Innovation for Your Tortillas "
        text="At GrainWise, we transform brewers’ spent grain—a nutritious by-product of beer brewing—into delicious, high-fibre tortillas.

Each year, breweries generate around 40 million tons of spent grain, often discarded despite its rich nutritional value. By upcycling this ingredient, we reduce waste and create a sustainable, flavourful alternative—one tortilla at a time."
      bgColor="#fde2e4"/>
    </div>
  );
};
export default Sustainbility;
