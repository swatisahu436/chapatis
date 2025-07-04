import React from "react";
    
const Productdetails = [
    {
        name: "Regular Tortilla",
        photo: "/leafWrap.jpg"
    }, {
        name: "fruit Tortilla",
        photo: "/leafWrap.jpg"
    }, {
        name: "Spinch Tortilla",
        photo: "/leafWrap.jpg"
    }, {
        name: "fruit Tortilla",
        photo: "/leafWrap.jpg"
    }
]
const Product = () => {

    return (
        <div className="product">
            {Productdetails.map((person,index)=>(
            <div className="productdescription" key={index}>
              <img src={person.photo} />
              <h5>{person.name}</h5>
            </div>
            ))}
        </div>
    );
};
export default Product;