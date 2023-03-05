import React from "react";
import Footer from "../../components/footer/Footer";

//import compontens
import Navigationbar from "../../components/navbar/Navigationbar";
//import style
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navigationbar />
      <div className="pBox home">
        <h1 className="p-5">Global warming dashboard</h1>
        <p className="p-5 lead">
          Climate change is one of the biggest challenges that humanity is
          currently facing.
          <br />
          It is a phenomenon that is irreversibly altering the climate of our
          planet, with consequences that will be felt for many years to come.
          <br />
          Climate change is mainly caused by the increase in greenhouse gas
          concentrations in the atmosphere,
          <br /> which is caused by human activities such as the use of fossil
          fuels for energy and transportation, deforestation, and intensive
          agriculture. These greenhouse gases trap heat in the atmosphere,
          <br />
          causing global temperatures to rise, changing weather patterns,
          warming oceans, and reducing glaciers.
          <br /> The consequences of climate change are multiple and affect all
          ecosystems on the planet.
          <br /> Rising sea levels are causing coastal erosion and the risk of
          flooding, while the reduced availability of clean drinking water is
          causing supply problems in many regions of the world.
          <br /> Populations living in the most vulnerable regions are suffering
          severe consequences such as increased diseases, loss of habitat,
          <br /> and decreased natural resources.
        </p>
        <p className="px-5 lead">
          Here you can check human impact on the environment in the last 150
          years.
        </p>
        <div>
          <p className="px-5 pb-5 lead">
            You will see five charts, those rapresent the increase of the
            <br />
            global temperature, carbon dioxide, methane,
            <br /> nitrogen dioxide and the decreased of the polar ice.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
