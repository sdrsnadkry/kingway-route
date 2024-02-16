import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Product from "../components/product";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProductsFromAPi = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProductsFromAPi();
  }, []);

  console.log(products);

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
