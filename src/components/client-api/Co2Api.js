import React, { Component } from "react";

// import axios
import axios from "axios";

// import the chart
import Co2Chart from "../co2/Co2Chart";

// Alert from bootstrap
import Alert from "react-bootstrap/Alert";

export class Co2Api extends Component {
  constructor(props) {
    super(props);
    // Make the state for the Api's data and Error handling
    this.state = {
      years: [],
      trends: [],
      error: null,
    };
  }

  componentDidMount() {
    // Get data from api
    axios
      .get("https://global-warming.org/api/co2-api")
      .then((res) => {
        const data = res.data.co2;
        this.setState({
          years: data.map((obj) => obj.year),
          trends: data.map((obj) => obj.trend),
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
              from the server of the Co2's data.
              <br />
              Please try later.
            </Alert>
            <hr />
          </div>
        ) : (
          <Co2Chart yearData={this.state.years} trendData={this.state.trends} />
        )}
      </section>
    );
  }
}

export default Co2Api;
