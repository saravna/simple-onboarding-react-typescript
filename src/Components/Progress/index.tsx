import React, { FC } from "react";
import "./style.css";

const Progress: FC<{ steps: number; currentStep: number }> = ({ steps, currentStep }) => {
  const getProgressBar = () => {
    const progress: JSX.Element[] = [];
    for (let i = 0; i < steps; i += 1) {
      progress.push(
        <div key={"step" + i} className={`progress${currentStep >= i + 1 ? " active" : ""}`}>
          {i + 1}
        </div>
      );
    }
    return progress;
  };
  return <div id="progress-container">{getProgressBar()}</div>;
};

export default Progress;
