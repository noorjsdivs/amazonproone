import React from "react";

const FooterBottom = () => {
  return (
    <div className="w-full bg-footerBottom py-6">
      <div className="max-w-6xl mx-auto text-white flex gap-14 justify-between">
        <div className="flex flex-col gap-6">
          <div className="group cursor-pointer">
            <h6 className="footerBottomTitle">Sell on Amazon.bd</h6>
            <p className="footerBottomText">
              Sell globally, start with Bangladesh
            </p>
          </div>
          <div className="group cursor-pointer">
            <h6 className="footerBottomTitle">IMDb</h6>
            <p className="footerBottomText">Movies, TV</p>
            <p className="footerBottomText">& Celebrities</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="group cursor-pointer">
            <h6 className="footerBottomTitle">Amazon Advertising</h6>
            <p className="footerBottomText">Find, attract, and</p>
            <p className="footerBottomText">engage customers</p>
          </div>
          <div className="group cursor-pointer">
            <h6 className="footerBottomTitle">Alexa</h6>
            <p className="footerBottomText">Actionable Analytics</p>
            <p className="footerBottomText">for the Web</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="group cursor-pointer">
            <h6 className="footerBottomTitle">Amazon Web Services</h6>
            <p className="footerBottomText">Scalable Cloud</p>
            <p className="footerBottomText">Computing Services</p>
          </div>
          <div className="group cursor-pointer">
            <h6 className="footerBottomTitle">Book Depository</h6>
            <p className="footerBottomText">Books With Free</p>
            <p className="footerBottomText">Delivery Worldwide</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="group cursor-pointer">
            <h6 className="footerBottomTitle">Goodreads</h6>
            <p className="footerBottomText">Book reviews</p>
            <p className="footerBottomText">& recommendations</p>
          </div>
          <div className="group cursor-pointer">
            <h6 className="footerBottomTitle">shopbop</h6>
            <p className="footerBottomText">Designer</p>
            <p className="footerBottomText">Fashion Brands</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="group cursor-pointer">
            <h6 className="footerBottomTitle">Audible</h6>
            <p className="footerBottomText">Download</p>
            <p className="footerBottomText">Audio Books</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="flex text-gray-300 text-sm gap-6 py-2 mt-4">
          <li className="hover:underline cursor-pointer">
            Conditions of Use & Sale
          </li>
          <li className="hover:underline cursor-pointer">Privacy Notice</li>
          <li className="hover:underline cursor-pointer">Interest-Based Ads</li>
          <li className="flex items-center justify-center">
            <span className="border rounded-full w-4 h-full mr-1 text-xs text-center inline-block">
              C
            </span>
            1996-2022, Amazon.com, Inc. or its affiliates
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;
