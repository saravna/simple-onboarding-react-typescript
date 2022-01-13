import React, { FC } from "react";
import "./style.css";

const Input: FC<{
  prefix?: string | null;
  inputType?: string | null;
  label?: string;
  key: string;
  placeholder: string;
  optional?: boolean;
  onChange: (value: string) => void;
}> = ({ prefix, inputType, label, optional = false, onChange, ...rest }) => {
  return (
    <div className="input-container">
      {!!label ? (
        <label htmlFor="key" className="input-label">
          {label} {optional ? <span className="optional-input">(optional)</span> : ""}
        </label>
      ) : null}
      {!!prefix ? (
        <div className="input-with-prefix">
          <p className="p-text">{prefix}</p>
          <input type={inputType || "text"} onChange={(e) => onChange(e.target.value)} className="p-input" {...rest} />
        </div>
      ) : (
        <input type={inputType || "text"} onChange={(e) => onChange(e.target.value)} className="input" {...rest} />
      )}
    </div>
  );
};

export default Input;
