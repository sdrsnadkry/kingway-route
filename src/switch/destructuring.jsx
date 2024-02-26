import React, { useState } from "react";

const student = {
  name: "John Doe",
  address: "Kalimati",
  age: 20,
  marks: 100,
};

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Destructuring = () => {

  //   const name = student.name;
  //   const address = student.address;
  //   const age = student.age;
  //   const marks = student.marks;

  //   const { name, address, age, marks } = student;

  //rest
  const { name, address, ...remaining } = student;

  //spread

  const student2 = {...student, name: "Sudarshan", marks: 200};

  console.log(student2)

  

//   console.log(remaining)

  //   const one = arrayOfNumbers[0];
  //   const two = arrayOfNumbers[1];
  //   const three = arrayOfNumbers[2];

  const [one, two, three, ...reamainingArr] = arrayOfNumbers;


  return (
    <div>
      <h1>Description</h1>
      <h2>{name}</h2>
      <h2>{address}</h2>
       <h2>{remaining?.age}</h2>
      <h2>{remaining?.marks}</h2>
      <h2>
        {one}, {two}, {three}
      </h2>
    </div>
  );
};

export default Destructuring;
