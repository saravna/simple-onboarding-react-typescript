import React, { FC } from "react";
import "./style.css";

const CardOption: FC<{ option: any; onClick: () => void; active: boolean }> = ({ option, active, onClick }) => {
  return (
    <div onClick={onClick} key={option.key} className={`card-option${active ? " active" : ""}`}>
      <div className={`icon-placeholder${active ? " active" : ""}`} />
      <h3>{option.title}</h3>
      <p className="card-description">{option.description}</p>
    </div>
  );
};

export default CardOption;
