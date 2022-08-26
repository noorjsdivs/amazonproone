import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="bg-gray-100 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-60 mx-auto">
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
      {/* <Image src={advaImg} /> */}
    </div>
  );
};

export default ProductFeed;
