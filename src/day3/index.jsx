import { useState } from "react";
import Child1 from "./child1";
import ImageComponent from "./imageComponent";

function Day3() {
  //   const [count, setCount] = useState(0);

  const [firstImage, setFirstImage] = useState(true);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  const toggleImage = () => {
    setFirstImage(!firstImage);
  };

  return (
    <div>
      {/* <h1>Count = {count}</h1> */}

      {/* <Child1 increment={increment} /> */}

      <ImageComponent
        imageUrl={
          firstImage
            ? "https://wms.edigitalnepal.com/wms/files/ws-post-images/1686047064135_ec4f597c-6265-4fe8-af65-32c126019a85.jpg"
            : "https://www.collegeinfonepal.com/wp-content/uploads/2023/07/Kathmandu-Engineering-College-Photo-1.jpg"
        }
      />

      <button onClick={toggleImage}>Switch Image</button>
    </div>
  );
}

export default Day3;
