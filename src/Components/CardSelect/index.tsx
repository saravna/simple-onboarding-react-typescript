import React, { FC } from "react";
import { CardSelectOption } from "../../types";
import CardOption from "./CardOption";
import "./style.css";

const CardSelect: FC<{ options: CardSelectOption[]; value: string; onChange: (value: string) => void }> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className="card-select">
      {options.map((option) => {
        return (
          <CardOption
            onClick={() => onChange(option.value)}
            active={option.value === value}
            key={option.key}
            option={option}
          />
        );
      })}
    </div>
  );
};

export default CardSelect;
