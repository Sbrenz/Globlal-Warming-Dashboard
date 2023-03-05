import React from "react";

// import components

import Navigationbar from "../../components/navbar/Navigationbar";
import Footer from "../../components/footer/Footer";
import TemperatureApi from "../../components/client-api/TemperatureApi";
import Co2Api from "../../components/client-api/Co2Api";
import No2Api from "../../components/client-api/No2Api";
import MethaneApi from "../../components/client-api/MethaneApi";
import PolarIceApi from "../../components/client-api/PolarIceApi";

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
