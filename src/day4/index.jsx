import Student from "../components/student";

import { students } from "./data";

function Day4() {
  return (
    <div className="container text-center">
      <div className="row row-cols-3">
        {students?.map((item) => (
          <div className="col" key={item?.id}>
            <Student name={item?.name} image={item?.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day4;
