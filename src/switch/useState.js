import React from "react";

//custom hooks
const useState = (initialValue) => {
    let student = initialValue;

    const setStudent = (value) => {
        student = value;
    }

    return [student, setStudent];
};

export default useState;


const [fruit, setFruit] = useState("Apple")