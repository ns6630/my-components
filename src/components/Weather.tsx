import React, { useEffect, useState } from "react";
import "./Weather.css";
import Loader from "./Loader";
import WeatherIcon from "./WeatherIcon";
import getWeather from "../services/WeatherService";

export interface WeatherProps {
  cities: string[];
}

function Weather({ cities }: WeatherProps) {
  const [cityIndex, setCityIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const city = cities[cityIndex];

  useEffect(() => {
    if (!city) {
      return;
    }
    setLoading(true);
    setWeatherData(null);

    (async () => {
      try {
        const response = await getWeather(city);
        setWeatherData(response);
      } catch(e) {
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [city]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCityIndex((cityIndex) =>
        cityIndex < cities.length - 1 ? cityIndex + 1 : 0
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [cities]);

  useEffect(() => {
    setCityIndex(0);
  }, [cities]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>{weatherData.name}</div>
          <WeatherIcon src={weatherData.weather[0].icon} />
          <div>
            {weatherData.main.temp}, {weatherData.weather[0].description}
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
