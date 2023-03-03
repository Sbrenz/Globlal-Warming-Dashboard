import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Graphic from "../chart/Graphic";

const No2Api = () => {
  const [no2Dates, setNo2Dates] = useState([]);
  const [no2Averages, setNo2Averages] = useState([]);
  const [no2Error, setNo2Error] = useState(null);

  useEffect(() => {
    axios
      .get("https://global-warming.org/api/nitrous-oxide-api")
      .then((res) => {
        const data = res.data.nitrous;
        setNo2Dates(data.slice(1).map((obj) => obj.date));
        setNo2Averages(data.slice(1).map((obj) => obj.average));
      })
      .catch((err) => setNo2Error(err.message));
  }, []);

  return (
    <section className="text-center d-flex justify-content-center">
      {no2Error !== null ? (
        <div className="errorContainer">
          <Alert variant="danger">
            Sorry but there is an error <br />
            from the server of the No2's data.
            <br />
            Please try later.
          </Alert>
          <hr />
        </div>
      ) : (
        <Graphic
          yData={no2Dates}
          xData={no2Averages}
          chartType="no2"
          title="Global increase of nitrogen dioxide"
        />
      )}
    </section>
  );
};

export default No2Api;
