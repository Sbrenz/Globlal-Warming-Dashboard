import React from "react";

// import components
import TemperatureApi from "../client-api/TemperatureApi";
import Co2Api from "../client-api/Co2Api";
import MethaneApi from "../client-api/MethaneApi";
import No2Api from "../client-api/No2Api";
import PolarIceApi from "../client-api/PolarIceApi";
import Navigationbar from "../navbar/Navigationbar";
import Footer from "../footer/Footer";

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
          <MethaneApi />
          <No2Api />
          <PolarIceApi />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Dashboards;
