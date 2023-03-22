import React from "react";

// import components
import Navigationbar from "../../components/navbar/Navigationbar";
import Footer from "../../components/footer/Footer";
import ClientApi from "../../components/client-api/ClientApi";

// import style
import style from "./dashboards.module.css";

// import components from bootstrap
import Container from "react-bootstrap/esm/Container";

const Dashboards = () => {
  return (
    <main className={style.dash}>
      <Navigationbar />
      <Container as="section">
        <Container>
          <ClientApi />
        </Container>
      </Container>
      <Footer />
    </main>
  );
};

export default Dashboards;
