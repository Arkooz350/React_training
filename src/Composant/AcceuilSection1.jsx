import React from "react";
import boutiqueimg from "../assets/boutiquepizza.jpg";

const AcceuilSection1 = () => {
  return (
    <div className="sectiongaucheAc">
      <img
        className="imagegauche"
        src={boutiqueimg}
        style={{ objectFit: "cover" }}
        alt="boutiquepizza"
      />
    </div>
  );
};

export default AcceuilSection1;
