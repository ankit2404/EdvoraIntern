import { createContext, useState, useEffect } from "react";
import axios from "axios";
const CompanyContext = createContext();
export const CompanyProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [state, setState] = useState([]);
  const [country, setCountry] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  let arr = [];
  let st = [];
  let cont = [];
  useEffect(() => {
    const callAPI = async () => {
      const response = await axios.get(
        "https://assessment-edvora.herokuapp.com/"
      );
      arr = response.data;
      let farr = [];
      arr.map((obj) => {
        if (!st.includes(obj.address.state)) {
          st.push(obj.address.state);
        }
        if (!cont.includes(obj.address.city)) {
          cont.push(obj.address.city);
        }
        let temp = false;
        farr.map((obj1) => {
          if (obj1.product_name === obj.product_name) {
            obj1.data.push(obj);
            temp = true;
          }
        });
        if (temp === false) {
          farr.push({
            product_name: obj.product_name,
            data: [obj],
          });
        }
      });
      setData(farr);
      setLoading(false);
      setCountry(cont);
      setState(st);
    };
    callAPI();
  }, []);

  const getData = (city, state) => {
    let dataCopy = data.map((item) => ({
      product_name: item.product_name,
      data: [...item.data],
    }));

    if (city !== "City" && state !== "State") {
      dataCopy.forEach((item) => {
        const itemData = [...item.data];
        item.data = itemData.filter(
          (i) => i.address.state === state && i.address.city === city
        );
      });
    } else if (city !== "City") {
      dataCopy.forEach((item) => {
        const itemData = [...item.data];
        item.data = itemData.filter((i) => i.address.city === city);
      });
    } else if (state !== "State") {
      dataCopy.forEach((item) => {
        const itemData = [...item.data];
        item.data = itemData.filter((i) => i.address.state === state);
      });
    }

    setFilteredData(dataCopy);
  };

  return (
    <CompanyContext.Provider
      value={{
        data,
        getData,
        loading,
        state,
        country,
        filteredData,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
