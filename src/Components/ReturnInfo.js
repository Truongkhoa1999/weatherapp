import React, { useEffect, useState } from "react";
import axios from "axios";
const apiKey = 'HzmGgMBlGzQxQVUdtPMndElXkkCAKUZR'




export const ReturnInfo = ({ cityData }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    axios
      .get(`https://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${apiKey}`)
      .then((res) => {
        setData(res.data[0]);

      });
  }, [cityData.Key]);

  return (
    <>
      {data && (
        <main className="box-info">

          <div className="details">
            <h3 className="location-name">
              {cityData.EnglishName} {cityData.Country.EnglishName}
            </h3>
            <h2 className="temp">
              {Math.ceil(data.Temperature.Metric.Value)}
              <sup className="deg">&deg;{data.Temperature.Metric.Unit}</sup>
              <p className="sub-text">{data.WeatherText}</p>
            </h2>
          </div>
        </main>
      )}
    </>
  );
};
