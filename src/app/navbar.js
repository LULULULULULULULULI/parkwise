"use client";
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements.js";
import SearchBar from "./searchbar.js";

export default function Navbar() {
  return (
    <div>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/listings" activeStyle>
            Listings
          </NavLink>
          <NavLink to="/about" activeStyle>
            About us
          </NavLink>
          {/* <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          <NavLink to="/myaccount" activeStyle>
            My Account
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>

      <SearchBar></SearchBar>
    </div>
  );
}
