import React from "react";
import Pinitem from "./pinitem";
const Pinlist = ({ listofPins }) => {
  console.log(listofPins);
  return (
    <div className=" px-2 mt-7 columns-3 space-y-6">
      {listofPins.map((item, index) => (
        <div>
          <Pinitem pin={item} key={index} />
        </div>
      ))}
    </div>
  );
};

export default Pinlist;
