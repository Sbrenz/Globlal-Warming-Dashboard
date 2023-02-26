import React, { Component } from "react";

// import axios
import axios from "axios";

// import chart
import MethaneChart from "../methane/MethaneChart";

// Alert from bootstrap
import Alert from "react-bootstrap/Alert";

export class MethaneApi extends Component {
  constructor(props) {
    // Make the state for the Api's data and Error handling
    super(props);
    this.state = {
      dates: [],
      averages: [],
      error: null,
    };
  }

  componentDidMount() {
    // Get data from api
    axios
      .get("https://global-warming.org/api/methane-api")
      .then((res) => {
        const data = res.data.methane;
        this.setState({
          dates: data.slice(1).map((obj) => obj.date),
          averages: data.slice(1).map((obj) => obj.average),
        });
      }) // Error handling
      .catch((err) => this.setState({ error: err.message }));
  }
  render() {
    return (
      <section className="text-center d-flex justify-content-center">
        {this.state.error !== null ? (
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
          <MethaneChart
            dateData={this.state.dates}
            averageData={this.state.averages}
          />
        )}
      </section>
    );
  }
}

export default MethaneApi;
