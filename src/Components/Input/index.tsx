import React, { FC } from "react";
import "./style.css";

const Input: FC<{
  prefix?: string;
  inputType?: string;
  label?: string;
  key: string;
  placeholder: string;
  optional?: boolean;
  onChange: (value: string) => void;
}> = ({ prefix, inputType = "text", label, optional = false, onChange, ...rest }) => {
  return (
    <div className="input-container">
      {!!label ? (
        <label htmlFor="key" style={{ padding: "5px" }}>
          {label} {optional ? <span className="optional-input">(optional)</span> : ""}
        </label>
      ) : null}
      {!!prefix ? (
        <div className="input-with-prefix" style={{display: "flex", borderRadius: "5px"}}>
          <p className="p-text">{prefix}</p>
          <input type={inputType} onChange={(e) => onChange(e.target.value)} className="p-input" {...rest} />
        </div>
      ) : (
        <input type={inputType} onChange={(e) => onChange(e.target.value)} className="input" {...rest} />
      )}
    </div>
  );
};

export default Input;
