import React, { FC } from "react";
import { FormValueType } from "../../types";
import CardSelect from "../CardSelect";
import Input from "../Input";
import "./style.css";

const getSubstitutesArray = (string: string) => {
  // regular expression to get the string between << and >>
  var regExp = /<<([^)]+)>>/g;
  var matches = string.match(regExp);
  const substitutes = [];
  if (matches) {
    for (var i = 0; i < matches.length; i++) {
      var str = matches[i];
      // from 2 till length - 2 to avoid << and >>
      substitutes.push(str.substring(2, str.length - 2));
    }
  }
  return substitutes;
};

const getUpdatedString = (string: string, substitutes: { [key: string]: string }, data: any) => {
  let substituteStrings = getSubstitutesArray(string);
  let tempString = string;
  substituteStrings.forEach((s) => {
    tempString = tempString.replace(`<<${s}>>`, data[substitutes[s]][s]);
  });
  return tempString;
};

const Form: FC<{
  currentForm: string;
  formData: any;
  formContent: FormValueType;
  handleActionClick: () => void;
  handleChange: (key: string, value: string) => void;
}> = ({ currentForm, formData, formContent, handleActionClick, handleChange }) => {
  const title = getUpdatedString(formContent.title, formContent.titleSubstitutes, formData);
  const subTitle = getUpdatedString(formContent.subTitle, formContent.subTitleSubstitutes, formData);
  return (
    <div className="form-container">
      <h2>{title}</h2>
      <h4 className="subtitle">{subTitle}</h4>
      {formContent.fields.map((field) => {
        if (field.type === "input")
          return (
            <Input
              prefix={field.inputPrefix}
              key={field.key}
              placeholder={field.placeholder || ""}
              inputType={field.inputType}
              label={field.label || ""}
              optional={field.optional}
              onChange={(value: string) => handleChange(field.key, value)}
            />
          );
        else if (field.type === "cardSelect") {
          console.log(field.key);
          return (
            <CardSelect
              onChange={(value: string) => handleChange(field.key, value)}
              value={formData[currentForm]?.[field.key]}
              key={field.key}
              options={field.options}
            />
          );
        }
        return <></>;
      })}
      <button className="button" onClick={handleActionClick}>
        {formContent.action.label}
      </button>
    </div>
  );
};

export default Form;
