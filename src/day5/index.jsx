import React, { useEffect, useState } from "react";

import axios from "axios";

const Day5 = () => {
  const [todos, setTodos] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setTodos(response?.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <div>
      Products List
      {todos?.map((item, index) => (
        <div key={item?.id}>
            <img src={item?.image} alt="" srcset="" width={150} height={150} />
          <p>
            {index + 1} - {item?.title}
          </p>
        </div>
      ))}
      <p></p>
    </div>
  );
};

export default Day5;
