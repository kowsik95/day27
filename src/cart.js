import React from "react";

function Cart(props) {
  return (
    <li>
      <a class="dropdown-item" href="#">
        {props.display.name}
        {props.display.price}
      </a>
      <button
        class="badge bg-primary rounded-pill"
        onClick={() => {
          return props.removeBtn(props.display);
        }}
      >
        X
      </button>
    </li>
  );
}

export default Cart;
