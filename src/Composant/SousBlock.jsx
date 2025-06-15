import React from "react";
import AcceuilSection1 from "./AcceuilSection1";
import AcceuilSection2 from "./AcceuilSection2";
import AcceuilSection3 from "./AcceuilSection3";
import Select from "./Select";

const SousBlock = () => {
  const response = <Select vehicule {...Select.prototype}></Select>;
  console.log(response);
  const handleMouse = (event) => {
    console.log(event.target.value);

    if (!response) {
    }
  };
  return (
    <div onMouseMove={handleMouse} className="mousemoveSousBlock">
    </div>
  );
};

export default SousBlock;
