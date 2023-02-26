import React, { Component } from "react";

// import axios
import axios from "axios";

// import temperature components
import TemperatureChart from "../temperature/TemperatureChart";

// Alert from bootstrap
import Alert from "react-bootstrap/Alert";

export class TemperatureApi extends Component {
  constructor(props) {
    super(props);
    // Make the state for the Api's data and Error handling
    this.state = {
      times: [],
      lands: [],
      error: null,
    };
  }

  componentDidMount() {
    // Get data from api
    axios
      .get("https://global-warming.org/api/temperature-api")
      .then((res) => {
        const data = res.data.result;
        this.setState({
          times: data.map((obj) => obj.time),
          lands: data.map((obj) => obj.land),
        });
      }) // Error handling
      .catch((err) => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div className="d-flex justify-content-center text-center">
        {this.state.error !== null ? (
          <div className="errorContainer">
            <Alert variant="danger">
              Sorry but there is an error <br />
              from the server of the temperature's data.
              <br />
              Please try later.
            </Alert>
            <hr />
          </div>
        ) : (
          <TemperatureChart
            timeData={this.state.times}
            landData={this.state.lands}
          />
        )}
      </div>
    );
  }
}

export default TemperatureApi;
