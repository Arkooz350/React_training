import React from "react";
import imageplateau from "../assets/Toyota.jpg";

const AcceuilSection2 = () => {
  return (
    <div className="imagedroiteAc">
      <img
        className="imggarage"
        src={imageplateau}
        style={{
          width: "500px",
          height: "400px",
          borderRadius: "50px",
          objectFit: "cover",
        }}
      ></img>
    </div>
  );
};

export default AcceuilSection2;
