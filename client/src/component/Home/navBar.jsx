import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
function NavBar({ activePage, setActivePage }) {
  const history = useHistory();
  console.log("TCL: NavBar -> history", history);
  const navBarItem = [
    {
      title: "Bags",
      path: "/",
    },
    {
      title: "Accessories",
      path: "/products",
    },
  ];

  return (
    <header className="navBar">
      <div className="navBar__logo">
        <h1>Tan</h1>
      </div>

      <div className="navBar__list">
        <ul>
          {navBarItem.map((item, index) => {
            return (
              <Link key={index} to={item.path}>
                <li
                  className={
                    item.path === history.location.pathname
                      ? "navBar__list--item active"
                      : "navBar__list--item"
                  }
                  onClick={history.push(item.path)}
                >
                  {item.title}
                </li>
              </Link>
            );
          })}
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
