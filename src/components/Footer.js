import React from "react";
import { Link } from "react-router-dom";
import { GlobeIcon } from "@heroicons/react/outline";
import logoImg from "../assets/logo.png";
import bdFlag from "../assets/bdFlag.webp";

const Footer = () => {
  return (
    <div className="w-full bg-amazon_light">
      <div className="w-full h-auto border-b-borderThin border-gray-500">
        <div className="max-w-5xl mx-auto text-gray-300 flex justify-between py-10 font-bodyFont text-fotterFont">
          <div className="flex-col gap-2">
            <h4 className="text-white font-titleFont text-xl font-semibold mb-3">
              Get to Know Us
            </h4>
            <p className="footerLink">About Amazon</p>
            <p className="footerLink">Careers</p>
            <p className="footerLink">Amazon Science</p>
          </div>
          <div className="flex-col gap-2">
            <h4 className="text-white font-titleFont text-xl font-semibold mb-3">
              Shop with Us
            </h4>
            <p className="footerLink">Your Account</p>
            <p className="footerLink">Your Orders</p>
            <p className="footerLink">Your Addresses</p>
            <p className="footerLink">Your Lists</p>
          </div>
          <div className="flex-col gap-2">
            <h4 className="text-white font-titleFont text-xl font-semibold mb-3">
              Make Money with Us
            </h4>
            <p className="footerLink">Sell on Amazon</p>
            <p className="footerLink">Fulfillment by Amazon</p>
            <p className="footerLink">Become an Affiliate</p>
            <p className="footerLink">Advertise Your Products</p>
          </div>
          <div className="flex-col gap-2">
            <h4 className="text-white font-titleFont text-xl font-semibold mb-3">
              Let Us Help You
            </h4>
            <p className="footerLink">Help</p>
            <p className="footerLink">COVID-19 and Amazon</p>
            <p className="footerLink">Shipping & Delivery</p>
            <p className="footerLink">Returns & Replacements</p>
            <p className="footerLink">Amazon App Download</p>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto flex justify-center gap-12 py-8 text-gray-300">
        <div>
          <Link to="/">
            <img className="w-20 pt-2" src={logoImg} alt="logoImage" />
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-1 items-center justify-center border border-gray-500 px-2">
            <GlobeIcon height={20} />
            <p>English</p>
          </div>
          <div className="flex gap-1 items-center justify-center border border-gray-500 px-2">
            <img className="w-6" src={bdFlag} alt="" />
            <p>Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
