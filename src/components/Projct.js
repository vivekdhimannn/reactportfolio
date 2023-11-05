import React from "react";
import Procard from "./Procard";
import Carddata from "./Carddata";

const Projct = () => {

  return (
    <div className="W-container">
      <h1 className="P-heading"> Recent Projects</h1>
      <span className="bar"></span>
      <div className="P-container">
        {Carddata.map((val, index) => {
          return (
            <Procard
              key={index}
              imgsource={val.imgsource}
              title={val.title}
              text={val.text}
              view = {val.view}
              source ={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projct;
