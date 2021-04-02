import React from "react";

const Navbar = () => {

return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <h2 class="myName">
        <a
          class="navbar-brand"
          href="index.html"
          >Eva O.
        </a>
      </h2>
      <div class="navbar-expand-md" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="portfolio.html">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
)
}

export default Navbar;