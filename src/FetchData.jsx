import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions/index";
import Spinner from "./Spinner";
import "./fetchdata.css";

const FetchData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const data = useSelector((state) => state?.fetchData?.data);
  const states = data?.states;

  if (!data) return <Spinner message="Loading Data..."/>;

  return (
    <div className="data">
      <h2>Nigeria Covid-19 Cases</h2>
      <div className="data-heading">
        <div className="data-heading-total">
          <p>Total Samples Tested:</p>
          <p>{data?.totalSamplesTested}</p>
        </div>
        <div className="data-heading-total light">
          <p>Total Confirmed Cases:</p>
          <p>{data?.totalConfirmedCases}</p>
        </div>
        <div className="data-heading-total">
          <p>Total Active Cases:</p>
          <p>{data?.totalActiveCases}</p>
        </div>
        <div className="data-heading-total light">
          <p> Total Discharged:</p>
          <p>{data?.discharged}</p>
        </div>
        <div className="data-heading-total">
          <p> Total Death Confirmed:</p>
          <p>{data?.death}</p>
        </div>
      </div>
      <h3>Cases of Covid per state in Nigeria</h3>
      <table className="data-table">
        <tbody>
          <tr className="data-tableTr">
            <th className="data-tableTh">State</th>
            <th className="data-tableTh">Confirmed Cases</th>
            <th className="data-tableTh">Cases on Admission</th>
            <th className="data-tableTh">Discharged</th>
            <th className="data-tableTh">Death</th>
          </tr>
          {states?.map((state) => (
            <tr key={state._id} className="data-tableTr">
              <td className="data-tableTd">{state?.state}</td>
              <td className="data-tableTd">{state?.confirmedCases}</td>
              <td className="data-tableTd">{state?.casesOnAdmission}</td>
              <td className="data-tableTd">{state?.discharged}</td>
              <td className="data-tableTd">{state?.death}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;
