import React, { useEffect, useState } from "react";

import axios from "axios";
import Star, { EmptyStar } from "./star";

const Day5 = () => {
  const [todos, setTodos] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setTodos(response?.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const calculateStar = (rating) => {
    const starCount = Math.floor(rating?.rate);


    const array = Array(starCount).fill(Math.random());

    return array;
  };

  return (
    <div>
      Products List
      {todos?.map((item, index) => (
        <div key={item?.id}>
          <img src={item?.image} alt=""   width={150} height={150} />
          <p>
            {index + 1} - {item?.title}
          </p>

          {calculateStar(item?.rating)?.map((rating, index) => (
            <Star key={index} />
          ))}

          {/* <EmptyStar/> */}
        </div>
      ))}
      <p></p>
    </div>
  );
};

export default Day5;
