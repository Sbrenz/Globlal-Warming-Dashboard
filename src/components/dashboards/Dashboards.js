import React from "react";

// import components

import Navigationbar from "../navbar/Navigationbar";
import Footer from "../footer/Footer";
import TemperatureApi from "../client-api/TemperatureApi";
import Co2Api from "../client-api/Co2Api";
import No2Api from "../client-api/No2Api";
import MethaneApi from "../client-api/MethaneApi";
import PolarIceApi from "../client-api/PolarIceApi";

// import style
import "./dashboards.css";

const Dashboards = () => {
  return (
    <section>
      <Navigationbar />
      <div className="dash text-center container-fluid">
        <div className="container">
          <TemperatureApi />
          <Co2Api />
          <No2Api />
          <MethaneApi />
          <PolarIceApi />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Dashboards;
