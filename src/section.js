import React from "react";

function Section(props) {
  return (
    <div class="col mb-5">
      <div class="card h-100">
        <div
          className={
            props.product.sale
              ? "badge bg-dark text-white position-absolute"
              : ""
          }
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {props.product.sale1}
        </div>

        <img
          class="card-img-top"
          src="https://picsum.photos/200/300"
          alt="..."
        />
        <div class="card-body p-4">
          <div class="text-center">
            <h5 class="fw-bolder">{props.product.name}</h5>
            {props.product.star ? (
              <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
              </div>
            ) : (
              ""
            )}
            {props.product.strikeout ? (
              <span class="text-muted text-decoration-line-through">
                ${props.product.strikeRate}
              </span>
            ) : (
              ""
            )}
            ${props.product.price}
          </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <button
              disabled={props.addedItem.some(
                (obj) => obj.id === props.product.id
              )}
              class="btn btn-outline-dark mt-auto"
              href="#"
              onClick={() => {
                return props.button(props.product);
              }}
            >
              {props.product.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
