import React from "react";
import Product from "../components/product";
import useProducts from "../customHooks/useProducts";
import Navbar from "../navbar";

const Products = () => {
  // DRY Principle
  const { products } = useProducts();

  return (
    <div>
      <Navbar />

      <div className="container text-center mt-5">
        <div className="row row-cols-4">
          {products?.map((item) => (
            <div className="col" key={item?.id}>
              <Product
                title={item?.title}
                price={item?.price}
                image={item?.image}
                description={item?.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
