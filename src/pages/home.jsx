import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Product from "../components/product";
import axios from "axios";
import { setProductsToStore } from "../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {

  const productsFromStore = useSelector((state) => state.productReducer.list);

  const dispatch = useDispatch();

  const fetchProductsFromAPi = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      dispatch(setProductsToStore(response.data));
    } catch (error) {
      // dispatch(setProductsToStore(null));
    }
  };

  useEffect(() => {
    fetchProductsFromAPi();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container text-center mt-5">
        <div className="row row-cols-4 row-cols-md-2">
          {productsFromStore?.map((item) => (
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

export default Home;
