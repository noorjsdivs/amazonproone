import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div className="w-full border-t-borderThin border-b-borderThin py-6 mb-6">
      <div className="w-64 mx-auto text-center font-titleFont">
        <p className="text-sm">See personalized recommendations</p>
        <button className="w-full bg-yellow-400 rounded-md py-1 cursor-pointer mt-1 hover:bg-yellow-500 active:bg-yellow-700 font-titleFont font-semibold">
          Sign in
        </button>
        <p className="text-xs mt-1">
          New Customer?{" "}
          <Link to="/">
            <span className="text-blue-600">Start here.</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
