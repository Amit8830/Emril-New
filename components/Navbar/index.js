import React from "react";
import { Nav, NavLink } from "./NavbarElements";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
// import Maintainance from "../AllPage/Maintainance/Maintainance"
// import Ecommerce from "../AllPage/Ecommerce"

import "../../App.css";

const Navbar = () => {
  return (
    <>
      <Nav className="nav_1">
        <NavLink to="/">
          <img
            className="main"
            src="data:image/jpeg;base64,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"
            alt="Emrill"
          />
        </NavLink>

        {/* <NavMenu className="Nav_main">
          <NavLink to="/maintance" activeStyle>
            Maintance
          </NavLink>
          <NavLink to="/ecommerce" activeStyle>
            E-commerce
          </NavLink>
          <NavLink to="/club" activeStyle>
            Club
          </NavLink>
          <NavLink to="/rento" activeStyle>
            Rento
          </NavLink>
          <NavLink to="/food" activeStyle>
            Food
          </NavLink>
          <NavLink to="/education" activeStyle>
            Education
          </NavLink>
          <NavLink to="/banking" activeStyle>
            Banking
          </NavLink>
          <NavLink to="/hospital" activeStyle>
            Hospital
          </NavLink>
          <NavLink to="/other" activeStyle>
            Other
          </NavLink>
          <NavLink to="/map" activeStyle>
            <FaMapMarkerAlt />
          </NavLink>
          <NavBtnLink className="sign_1" to="/signin">
            Sign In
          </NavBtnLink>
          <NavLink to="/cart">
            <FaCartPlus className="cart_1" />
          </NavLink>
        </NavMenu> */}
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  {/* <NavLink className="navbar-brand" to="/">@mIT</NavLink> */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link active"
                          aria-current="page"
                          to="/maintance"
                        >
                          Maintanace
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/ecommerce"
                        >
                          Ecommerce
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/club"
                        >
                          Club
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/rento"
                        >
                          Rento
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/food"
                        >
                          Food
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/education"
                        >
                          Education
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/banking"
                        >
                          Banking
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/hospital"
                        >
                          Hospital
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/other"
                        >
                          Other
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/map"
                        >
                          <FaMapMarkerAlt />
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="sign_1"
                          to="/signin"
                        >
                          Sign-In
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/cart"
                        >
                          {" "}
                          <FaCartPlus />{" "}
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
