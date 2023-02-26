import React, { Component } from "react";

// import axios
import axios from "axios";

// import chart
import PolarIceChart from "../polar-ice/PolarIceChart";

// Alert from bootstrap
import Alert from "react-bootstrap/Alert";

export class PolarIceApi extends Component {
  constructor(props) {
    super(props);
    // Make the state for the Api's data and Error handling
    this.state = {
      years: [],
      extents: [],
      error: null,
    };
  }

  componentDidMount() {
    // Get data from api
    axios
      .get("https://global-warming.org/api/arctic-api")
      .then((res) => {
        const data = res.data.arcticData;

        this.setState({
          years: data.map((obj) => obj.year),
          extents: data.map((obj) => obj.extent),
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
              from the server of the polar ice's data.
              <br />
              Please try later.
            </Alert>
            <hr />
          </div>
        ) : (
          <PolarIceChart
            yearData={this.state.years}
            extentData={this.state.extents}
          />
        )}
      </section>
    );
  }
}

export default PolarIceApi;
