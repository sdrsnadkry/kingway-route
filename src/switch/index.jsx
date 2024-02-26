import React from "react";
import Destructuring from "./destructuring";

const Switch = () => {
  const returnOdOrEven = (number) => {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  };

  const returnStarsBasedOnRating = (rating) => {
    switch (rating) {
      case 1:
        return <div>&#9733;</div>;
      case 2:
        return <div>&#9733; &#9733;</div>;
      case 3:
        return <div>&#9733; &#9733; &#9733;</div>;
      case 4:
        return <div>&#9733; &#9733; &#9733; &#9733;</div>;
      case 5:
        return <div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>;

      default:
        return "No Star";
    }

    // if (rating === 1) {
    //   return <div>&#9733;</div>;
    // } else if (rating === 2) {
    //   return <div>&#9733; &#9733;</div>;
    // } else if (rating === 3) {
    //   return <div>&#9733; &#9733; &#9733;</div>;
    // } else if (rating === 4) {
    //   return <div>&#9733; &#9733; &#9733; &#9733;</div>;
    // } else if (rating === 5) {
    //   return <div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>;
    // } else {
    //   return "No Star";
    // }
  };

  return (
    <div>
      <Destructuring />
      <h1>{returnStarsBasedOnRating(1)}</h1>
      <h1>{returnStarsBasedOnRating(2)}</h1>
      <h1>{returnStarsBasedOnRating(3)}</h1>
      <h1>{returnStarsBasedOnRating()}</h1>
    </div>
  );
};

export default Switch;
