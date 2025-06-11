import React from 'react';


const items = [
  { id: 1, name: 'Grain Wrap', price: '₹99', image: '/wrap.jpg' },
  { id: 2, name: 'Breakfast Burrito', price: '₹119', image: '/breakfast-wraps-8.jpg' },
  { id: 3, name: 'Quesadilla', price: '₹129', image: '/leafWrap.jpg' },
  { id: 4, name: 'Sweet Wrap', price: '₹89', image: '/quad.jpg' },
  { id: 5, name: 'Veg Wrap', price: '₹109', image: '/sweet.jpg' },
  { id: 6, name: 'Spicy Chicken Wrap', price: '₹149', image: 'Spent_grain.jpg' },
];


const Order = () => {
  return (
    <div className="order-page">
      <h1>Order Your Favorite Wrap</h1>
      <div className="card-container">
        {items.map(item => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
