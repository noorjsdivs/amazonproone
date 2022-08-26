import React, { useContext } from "react";
import LogoImg from "../assets/logo.png";
import { Store } from "../Store";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartstate } = useContext(Store);
  const { cart } = cartstate;
  return (
    <div className="top-0 z-50 sticky">
      {/*=============== Top nav start here ================*/}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link to="/">
            <img
              src={LogoImg}
              className="cursor-pointer object-contain w-28 mr-2 ml-4 pt-2"
              alt="logoImage"
            />
          </Link>
        </div>
        {/* Search bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="h-full w-6 flex-grow flex-shrink rounded-l-md p-2 outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 font-titleFont">
          <div className="link">
            <p>
              Hello, <span className="font-bold">Noor</span>
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-7 h-5 w-5 bg-yellow-400 text-center rounded-full text-black font-bold flex items-center justify-center">
              {cart.cartItems.length}
            </span>

            <Link to="/cart">
              <div className="flex">
                <ShoppingCartIcon className="h-10" />
                <p className="font-extrabold md:text-sm hidden md:inline mt-2">
                  Cart
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/*=============== Top nav end here ================*/}
      {/*=============== Bottom nav start here ================*/}
      <div className="flex items-center space-x-3 p-3 pl-6 bg-amazon_light text-white">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Sell</p>
        <p className="link">Best Sellers</p>
        <p className="link">Today's Deals</p>
        <p className="link">Customer Service</p>
        <p className="link hidden lg:inline-flex">Your Prime</p>
        <p className="link hidden lg:inline-flex">New Releases</p>
        <p className="link hidden lg:inline-flex">Mobile Phones</p>
        <p className="link hidden lg:inline-flex">Fashion</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
      </div>
      {/*=============== Bottom nav end here ================*/}
    </div>
  );
};

export default Header;
