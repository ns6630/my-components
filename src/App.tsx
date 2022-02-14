import React from 'react';
import './App.css';
import Page from "./components/Page";
import Weather from "./components/Weather";

const cities = ["St. Petersburg", "Moscow", "Orel", "Yekaterinburg", "Vladivostok"]

function App() {
  return (
    <div className="App">
      <Page>
        <Weather cities={cities} />
      </Page>
    </div>
  );
}

export default App;
