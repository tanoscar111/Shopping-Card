import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
function NavBar() {
  return (
    <header className="navBar">
      <div className="navBar__logo">
        <h1>Tan</h1>
      </div>

      <div className="navBar__list">
        <ul>
          <li>Bags</li>
          <li>Accessories</li>
          <li>Explore</li>
        </ul>
        <div className="store">
          <ul className="store__list">
            <li className="store__list--icon1">
              <IoSearchOutline />
            </li>
            <li className="store__list--icon">
              <BiUser />
            </li>
            <li className="store__list--icon3">
              <MdOutlineLocalGroceryStore />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default NavBar;
