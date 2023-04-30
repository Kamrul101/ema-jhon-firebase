import React from "react";
import "./ReviewItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItems = ({ product , handleRemoveFromCart }) => {
  const { id, img, price, quantity, name, shipping } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <h4 className="title-text">{name}</h4>

        <h5 className="title-text">
          Price: <span className="text-orange">${price}</span>
        </h5>

        <h5 className="title-text">
          Shipping Charge: <span className="text-orange">${shipping}</span>
        </h5>

        <p className="title-text">
          Quantity: <span className="text-orange">{quantity}</span>
        </p>
      </div>

      <button onClick={()=>handleRemoveFromCart(id)} className="btn-orange">
        <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ReviewItems;
