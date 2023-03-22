import React, { useState, useEffect } from "react";

// import axios
import axios from "axios";

// import graphic components
import Graphic from "../chart/Graphic";

const ClientApi = () => {
  // const for temperature data
  const [temperatureTimes, setTemperatureTimes] = useState([]);
  const [temperatureLands, setTemperatureLands] = useState([]);

  // const for co2 data
  const [co2Years, setCo2Years] = useState([]);
  const [co2Trends, setCo2Trends] = useState([]);

  // const for no2 data
  const [no2Dates, setNo2Dates] = useState([]);
  const [no2Averages, setNo2Averages] = useState([]);

  // const for methane data
  const [methaneDates, setMethaneDates] = useState([]);
  const [methaneAverages, setMethaneAverages] = useState([]);

  // const for polar ice data
  const [polarIceYears, setPolarIceYears] = useState([]);
  const [polarIceExtents, setPolarIceExtents] = useState([]);

  const [errorApi, setErrorApi] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle api call
  useEffect(() => {
    setLoading(true);

    // temperature
    axios
      .get("https://global-warming.org/api/temperature-api")
      .then((res) => {
        const data = res.data.result;
        setTemperatureTimes(data.map((obj) => obj.time));
        setTemperatureLands(data.map((obj) => obj.land));
        setLoading(false);
      })
      .catch((err) => setErrorApi(err.message));

    // co2
    axios
      .get("https://global-warming.org/api/co2-api")
      .then((res) => {
        const data = res.data.co2;
        setCo2Years(data.map((obj) => obj.year));
        setCo2Trends(data.map((obj) => obj.trend));
        setLoading(false);
      })
      .catch((err) => setErrorApi(err.message));

    // no2
    axios
      .get("https://global-warming.org/api/nitrous-oxide-api")
      .then((res) => {
        const data = res.data.nitrous;
        setNo2Dates(data.slice(1).map((obj) => obj.date));
        setNo2Averages(data.slice(1).map((obj) => obj.average));
        setLoading(false);
      })
      .catch((err) => setErrorApi(err.message));

    // methane
    axios
      .get("https://global-warming.org/api/methane-api")
      .then((res) => {
        const data = res.data.methane;
        setMethaneDates(data.slice(1).map((obj) => obj.date));
        setMethaneAverages(data.slice(1).map((obj) => obj.average));
        setLoading(false);
      })
      .catch((err) => setErrorApi(err.message));

    // polar ice
    axios
      .get("https://global-warming.org/api/arctic-api")
      .then((res) => {
        const data = res.data.arcticData;
        setPolarIceYears(data.map((obj) => obj.year));
        setPolarIceExtents(data.map((obj) => obj.extent));
        setLoading(false);
      })
      .catch((err) => setErrorApi(err.message));
  }, []);

  return (
    <Graphic
      yDataTemperature={temperatureTimes}
      xDataTemperature={temperatureLands}
      yDataCo2={co2Years}
      xDataCo2={co2Trends}
      yDataNo2={no2Dates}
      xDataNo2={no2Averages}
      yDataMethane={methaneDates}
      xDataMethane={methaneAverages}
      yDataPolarIce={polarIceYears}
      xDataPolarIce={polarIceExtents}
      error={errorApi}
      loading={loading}
    />
  );
};

export default ClientApi;
