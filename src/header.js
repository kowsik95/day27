import React from "react";

function Header() {
  return (
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#!">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">
            About
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Shop
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#!">
                All Products
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#!">
                Popular Items
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#!">
                New Arrivals
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Header;
