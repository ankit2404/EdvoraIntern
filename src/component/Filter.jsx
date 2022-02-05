import React from "react";
import "./Filter.css";
import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import CompanyContext from "../context/CompanyContext";
function Filter({ setCity, setState }) {
  const { state, country, data } = useContext(CompanyContext);
  const [stateValue, setStateValue] = useState("State");
  const [cityValue, setCityValue] = useState("City");

  return (
    <>
      <div>
        <div className="card shadow-md compact  side back">
          <div className="remove">
            <h1 className="header">Filters</h1>
            <button
              className="btn"
              onClick={() => {
                setStateValue("State");
                setCityValue("City");
                setState("State");
                setCity("City");
              }}
            >
              Clear
            </button>
          </div>
          <hr />
          <div className=" items-center space-x-7 card-body">
            <select className="dropdown">
              <option>Products</option>

              {data.map((prod) => (
                <option value={prod.product_name} key={uuidv4()}>
                  {prod.product_name}
                </option>
              ))}
            </select>
          </div>
          <div className=" items-center space-x-7 card-body">
            <select
              className="dropdown"
              onChange={(e) => {
                setStateValue(e.target.value);
                setState(e.target.value);
              }}
            >
              <option>{stateValue}</option>
              {state.map((sta) => (
                <option value={sta} key={uuidv4()}>
                  {sta}
                </option>
              ))}
            </select>
          </div>
          <div className=" items-center space-x-7 card-body">
            <select
              className="dropdown"
              style={{ marginBottom: "25px" }}
              onChange={(e) => {
                setCityValue(e.target.value);
                setCity(e.target.value);
              }}
            >
              <option>{cityValue}</option>
              {country.map((cont) => (
                <option value={cont} key={uuidv4()}>
                  {cont}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
