import React from "react";
import "./Navbar.scss";
import { Icon } from "@iconify/react";
function Navbar() {
  return (
    <div className="container">
      <section className="navb">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <img src="/Images/logo.png" alt="..." className="img-fluid" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Icon icon="mingcute:menu-fill" color="white" />
          </button>

          <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
            <form class="form-inline right">
              <a href="#">Docs & Financials</a>
              <button class="btn " type="submit">
                Connect Wallet
              </button>
            </form>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
