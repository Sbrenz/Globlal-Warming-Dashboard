import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Graphic from "../chart/Graphic";

const MethaneApi = () => {
  const [methaneDates, setMethaneDates] = useState([]);
  const [methaneAverages, setMethaneAverages] = useState([]);
  const [methaneError, setMethaneError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://global-warming.org/api/methane-api"
        );
        const data = response.data.methane;
        setMethaneDates(data.slice(1).map((obj) => obj.date));
        setMethaneAverages(data.slice(1).map((obj) => obj.average));
      } catch (error) {
        setMethaneError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="text-center d-flex justify-content-center">
      {methaneError !== null ? (
        <div className="errorContainer">
          <Alert variant="danger">
            Sorry but there is an error <br />
            from the server of the methane's data.
            <br />
            Please try later.
          </Alert>
          <hr />
        </div>
      ) : (
        <Graphic
          yData={methaneDates}
          xData={methaneAverages}
          chartType="methane"
          title="Global increase of methane"
        />
      )}
    </section>
  );
};

export default MethaneApi;
