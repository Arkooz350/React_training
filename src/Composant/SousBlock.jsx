import React from "react";

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
