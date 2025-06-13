import React from "react";
import imageLogement from "../assets/citroen.jpeg";

const AcceuilSection3 = () => {
  return (
    <div className="imgmidleAC">
      <img
        src={imageLogement}
        className="imgLogment"
        style={{
          height: "400px",
          width: "500px",
          objectFit: "cover",
          borderRadius: "50px",
        }}
      ></img>
    </div>
  );
};

export default AcceuilSection3;
