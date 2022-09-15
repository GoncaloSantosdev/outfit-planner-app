import React from "react";

const FashionDisplayView = ({ type, clothingImg }) => {
  return (
    <>
      <div className="StyleText">{type}</div>
      <img src={clothingImg === "" ? "" : clothingImg} className="clothes" alt="" />
    </>
  );
};

export default FashionDisplayView;