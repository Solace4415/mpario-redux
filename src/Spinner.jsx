import React from "react";
import { Puff } from "react-loader-spinner";
import "./spinner.css";

const Spinner = ({ message }) => {
  return (
    <div className="spinner">
      <Puff
        type="Puff"
        color="grey"
        height={100}
        width={200}
        className="puff"
      />
      <p className="spinner-text">{message}</p>
    </div>
  );
};

export default Spinner;
