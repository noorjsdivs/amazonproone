import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Store } from "../Store";
import { CheckIcon, StarIcon } from "@heroicons/react/solid";

const Cart = ({ recommendProduct }) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const { cartstate, cartdispatch } = useContext(Store);
  let [cartProduct, setCartProduct] = useState([]);
  let [total, setTotal] = useState("");
  const { cart } = cartstate;

  useEffect(() => {
    let price = 0;
    setCartProduct(cart.cartItems);
    cartProduct.map((item) => (price += item.price * item.quantity));
    setTotal(price);
  }, [cart.cartItems, cartProduct]);

  const handleDeleteProduct = (product) => {
    cartdispatch({
      type: "CART_PRODUCT_REMOVE",
      payload: product,
    });
  };
  const handleClearCart = (cartProduct) => {
    cartdispatch({
      type: "CLEAR_CART",
      payload: cartProduct,
    });
  };

  const handleQuantity = (item, quantity) => {
    cartdispatch({
      type: "CART_PRODUCT_ADD",
      payload: { ...item, quantity },
    });
  };

  const handleProductAdd = (item) => {
    console.log(item);
  };
  return (
    <div className="w-full bg-gray-300 h-auto px-8 py-4">
      {cart.cartItems.length > 0 ? (
        <div className="max-w-screen-2xl  h-auto flex gap-6">
          <div className="w-4/5 auto px-6 bg-white">
            <div className="flex justify-between font-titleFont border-b-borderThin border-gray-300 py-2">
              <h1 className="text-3xl">Shopping Cart</h1>
              <p className="text-lg mt-4">Subtotal</p>
            </div>
            <div>
              {cartProduct.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b-borderThin border-gray-300 py-6 flex gap-6 items-center justify-between font-bodyFont"
                >
                  <div>
                    <img
                      className="w-48 h-40"
                      src={item.image}
                      alt="ProductImages"
                    />
                  </div>
                  <div className="w-4/5">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="line-clamp-2 pr-6">{item.description}</p>
                    <p className="text-sm text-green-600">In Stock</p>
                    <p>
                      Unit price:{" "}
                      <span className="font-semibold">{item.price}</span>
                    </p>
                    <div className="bg-quantity_box text-sm flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
                      <p>Qty:</p>
                      <p
                        onClick={() => handleQuantity(item, item.quantity + 1)}
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                      >
                        +
                      </p>
                      <p>{item.quantity}</p>
                      <p
                        onClick={() =>
                          handleQuantity(
                            item,
                            item.quantity > 1
                              ? item.quantity - 1
                              : item.quantity
                          )
                        }
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                      >
                        -
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDeleteProduct(item)}
                        className="bg-red-500 py-1 px-4 rounded-full text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
              <button
                onClick={() => handleClearCart(cartProduct)}
                className="bg-red-500 text-white py-3 px-20 rounded-full text-xl font-titleFont font-semibold hover:bg-red-600 active:bg-red-800 mt-6 mb-6 uppercase"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="w-1/5  h-auto border-gray-300 border-l-borderThin border-b-borderThin  flex flex-col gap-10">
            <div className="bg-white px-4 py-4">
              <p className="flex gap-2 items-start text-sm">
                <span>
                  <CheckIcon
                    width={22}
                    className="bg-green-400 rounded-full text-white"
                  />
                </span>
                Your order qualifies for FREE Shipping Choose this option at
                checkout. See details....
              </p>
              <div>
                <p className="mt-4 font-bodyFont">
                  Total ( {cart.cartItems.length} items ) :{" "}
                  <span className="font-bodyFont font-semibold text-lg">
                    {Math.round(total)}.00
                  </span>
                </p>
              </div>
              <button className="bg-yellow-400 w-full mt-4 py-2 rounded-lg text-center text-sm font-bodyFont hover:bg-yellow-500 active:bg-yellow-700">
                Proceed to Buy
              </button>
            </div>
            <div className="bg-white px-4 py-4 h-full">
              <p className="text-center underline font-titleFont mb-4">
                Recommended Items:
              </p>
              <div className="flex flex-col gap-4 w-full ">
                {recommendProduct.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-2 h-32 border-b-borderThin  "
                  >
                    <div className="w-2/5">
                      <img
                        className="w-20 h-full object-contain"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="w-3/5 flex flex-col justify-center">
                      <h4 className="font-titleFont line-clamp-1">
                        {item.title}
                      </h4>
                      <div className="flex">
                        {Array(rating)
                          .fill()
                          .map((_, i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500" />
                          ))}
                      </div>
                      <p>Price: ${item.price}</p>
                      <button
                        onClick={() => handleProductAdd(item)}
                        className="bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 font-titleFont text-xs px-3 py-1 w-3/4 mt-1"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-quantity_box p-6">
          <h1 className="font-titleFont text-4xl text-red-600 font-bold">
            Your Cart is Empty
          </h1>
          <Link to="/">
            <button className="mt-6 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg">
              Add Products
            </button>
          </Link>
        </div>
      )}
      <div className="max-w-screen-2xl bg-white h-20 mt-6 flex"></div>
      <div className="max-w-5xl">
        <p className="text-xs text-black py-6 mb-6">
          The price and availability of items at Amazon.bd are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Do you have a gift card or
          promotional code? We'll ask you to enter your claim code when it's
          time to pay.
        </p>
      </div>
    </div>
  );
};

export default Cart;
