import logo from "./logo.svg";
import "./css/styles.css";
import Header from "./header";
import Header1 from "./header1";
import Cart from "./cart";
import Section from "./section";
import Display from "./display";
import Footer from "./footer";

import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let products = [
    {
      id: 1,
      name: "Fancy Product",
      price: "40.00",
      buttonText: "View Options",
      
    },
    {
      id: 2,
      name: "Special Item",
      price: "18.00",
      buttonText: "Add to Cart",
      sale: true,
      sale1: "sales",
      star: true,
      strikeout: true,
      strikeRate: "20.00",
    },
    {
      id: 3,
      name: "Sale Item",
      price: "25.00",
      buttonText: "Add to Cart",
      sale: true,
      sale1: "sales",
      strikeout: true,
      strikeRate: "50.00",
    },
    {
      id: 4,
      name: "Popular Item",
      price: "40.00",
      buttonText: "Add to Cart",
      star: true,
    },
    {
      id: 5,
      name: "Sale Item",
      price: "25.00",
      buttonText: "Add to Cart",
      sale: true,
      sale1: "sales",
      strikeout: true,
      strikeRate: "50.00",
    },
    {
      id: 6,
      name: "Fancy Product",
      price: "280.00",
      buttonText: "View Options",
    },
    {
      id: 7,
      name: "Special Item",
      price: "18.00",
      buttonText: "Add to Cart",
      sale: true,
      sale1: "sales",
      star: true,
      strikeout: true,
      strikeRate: "20.00",
    },
    {
      id: 8,
      name: "Popular Item",
      price: "40.00",
      buttonText: "Add to Cart",
      star: true,
    },
  ];

  const [addedItems, setItems] = useState([]);
  const [total, totalItems] = useState(0);
  const [rate, rateTotal] = useState(0);

  let add = (itemsCart) => {
    setItems([...addedItems, itemsCart]);
    totalItems(total + 1);
    rateTotal(rate + parseInt(itemsCart.price));
  };

  let removeBtn = (items) => {
    let index = addedItems.findIndex((obj) => items.id === obj.id);
    addedItems.splice(index, 1);
    setItems([...addedItems]);
    totalItems(total - 1);
    rateTotal(rate - parseInt(items.price));
  };
  let cart = (cart) => {
    setItems([...addedItems, cart]);
  };
  // let show = () => {
  //   setItems([...addedItems]);
  // };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Header></Header>
          {/* store={store} */}
          {/* {addedItems.map((store) => { */}
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              // onClick={() => show()}
            >
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">
                {total}
              </span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {addedItems.map((displayItems) => {
                return (
                  <Cart display={displayItems} removeBtn={removeBtn}></Cart>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <Header1></Header1>
      <section class="py-5">
        <div class="container-fluid px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-left">
            {products.map((x) => {
              return (
                <Section
                  product={x}
                  button={add}
                  addedItem={addedItems}
                ></Section>
              );
            })}
          </div>
        </div>
      </section>
      {/* <div className="row">
        <div className="col-lg-12">
          <h1 className="bg-primary text-center">Cart Details</h1>
          <ol class="list-group list-group-numbered">
            {addedItems.map((displayItems) => {
              return (
                <Display display={displayItems} removeBtn={removeBtn}></Display>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h1>Total amount :{rate}</h1>
        </div>
      </div> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
