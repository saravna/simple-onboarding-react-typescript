import React, { FC, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Progress from "./Components/Progress";
import form from "./form.json";

const getInitialData = () => {
  const initialState: { [mainKey: string]: { [nestedKey: string]: string } } = {};
  const optionals: string[] = [];
  Object.entries(form).forEach(([key, value]) => {
    initialState[key] = {};
    value.fields.forEach((field) => {
      initialState[key][field.key] = "";
      if (field.optional) optionals.push(field.key);
    });
  });
  return { initialState, optionals };
};

const App: FC = () => {
  const totalSteps = Object.keys(form).length;
  const [currentStep, setCurrentStep] = useState(1);
  const { initialState, optionals } = getInitialData();
  const [data, setData] = useState(initialState);

  const handleDataChange = (key: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [currentStep]: {
        ...prev[currentStep],
        [key]: value,
      },
    }));
  };

  const handleSubmit = () => {
    const currentFormData = data[currentStep.toString()];
    for (const [key, value] of Object.entries(currentFormData)) {
      if (!value && !optionals.includes(key)) {
        alert("Enter all data");
        return;
      }
    }
    if (currentStep < totalSteps) setCurrentStep((p) => p + 1);
    else {
      console.log(JSON.stringify(data, null, 2));
      setData(() => initialState);
      setCurrentStep(1);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Progress steps={totalSteps} currentStep={currentStep} />
        <Form
          currentForm={currentStep.toString()}
          formData={data}
          formContent={form[currentStep.toString() as keyof typeof form]}
          handleActionClick={handleSubmit}
          handleChange={handleDataChange}
        />
      </div>
    </div>
  );
};

export default App;
