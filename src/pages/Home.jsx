import Filter from "../component/Filter";
import CardSlider from "../component/CardSlider";
import Spinner from "../component/Spinner";
import { v4 as uuidv4 } from "uuid";
import "./Home.css";
import { useContext, useEffect } from "react";
import CompanyContext from "../context/CompanyContext";
import { useState } from "react";
function Home() {
  const { data, loading, getData, filteredData } = useContext(CompanyContext);
  const [city, setCity] = useState("City");
  const [state, setState] = useState("State");
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    getData(city, state);
    if (city !== "City" || state !== "State") {
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
  }, [city, state]);

  if (!loading) {
    return (
      <div className="container">
        <div className="comp1">
          <Filter setCity={(c) => setCity(c)} setState={(s) => setState(s)} />
        </div>
        <div className="comp2">
          <div className="content">
            <h1 className="cont-1">Edvora</h1>
            <h2 className="cont-2">Products</h2>
            {!isFilter
              ? data.map((company) => (
                  <div className="lastComp" key={uuidv4()}>
                    <h3 className="cont-3">{company.product_name}</h3>
                    <hr />
                    <CardSlider details={company.data} />
                  </div>
                ))
              : filteredData.map((company) => (
                  <div className="lastComp" key={uuidv4()}>
                    <h3 className="cont-3">{company.product_name}</h3>
                    <hr />
                    <CardSlider details={company.data} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Home;
