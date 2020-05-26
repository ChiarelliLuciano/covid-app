import React from "react";
import { Cards, Chart, Country } from "./components/indexedImports";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

import covidImage from "./images/covid.png";
import covidQR from "./images/qr_covid.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="COVID-19" />
        <Country handleCountryChange={this.handleCountryChange} />
        <Cards data={this.state.data} />
        <Chart data={data} country={country} />
        <img className={styles.image} src={covidQR} alt="QR" />
        <h3>Abre esta app en tu dispositivo!</h3>
      </div>
    );
  }
}

export default App;
