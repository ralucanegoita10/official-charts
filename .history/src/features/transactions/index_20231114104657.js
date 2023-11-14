import React from "react";

import TitleCard from "../../components/Cards/TitleCard";
import SalesData from "./salesTabledata";
import ProductData from "./productDetails";
import SalesHistoryTabledata from "./salesHistory";
import "./productDetails.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      fill: false,
      label: "Sales over time",
      data: labels.map(() => {
        return Math.random() * 100;
      }),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function Transactions() {
  const generateLoadingBarStyle = (value) => {
    const parsedValue = parseFloat(value.replace(/,/g, ""));
    const percentage = (parsedValue / 5000000) * 100; // Assuming maximum value is 50,000
    const barColor = percentage <= 60 ? "#0f27e9" : "#ef6ad4"; // Blue if filled less than half, pink if filled more than half

    return {
      width: `${percentage}%`,
      backgroundColor: barColor,
    };
  };

  return (
    <>
      <div>
        <TitleCard title="Product Details" topMargin="mt-2">
          <div className="song-title">{"Shape of You"}</div>
          <div className="container">
            <div className="table-product-details">
              <div className="artist-name">
                <img src="/artist.png" width="150px" alt="idk" border-radius="5px"/>
                <b>{"Artist:"}</b> Ed Sheeran
              </div>

              <div className="album-name">
                <img src="/album.png" width="150px" alt="idk" border-radius="5px"/>
                <b>{"Album:"}</b> Divide
              </div>

              <div className="record-company">
                <img src="/recordCompany.png" width="150px" alt="idk" border-radius="5px" />
                <b>{"Record company:"}</b> Asylum Atlantic Records UK

              </div>

              <div className="genre">
                <img src="/genre.png" width="150px" alt="idk" border-radius="5px"/>
                <b>{"Genre:"}</b> Pop
              </div>
            </div>

            <div className="selected-stats">
              <h2>{"Selected stats"}</h2>
              <ul>
                <li>
                  <b>{"Release Date:"}</b> March 15, 2017
                </li>
                <li>
                  <b>{"Duration:"}</b> 3 minutes and 45 seconds
                </li>
                <li>
                  <b>{"Chart Performance:"}</b> Peaked at #3 on the Billboard
                  Hot 100
                </li>
                <li>
                  <b>{"Music Video Views:"}</b> Over 100 million on YouTube
                </li>
                <li>
                  <b>{"Country of Signing:"}</b> UK
                </li>
                <li>
                  <b>{"Corp. Group:"}</b> WARNER MUSIC
                </li>
                <li>
                  <b>{"BPI. Cert:"}</b> 10xPlatinum
                </li>
                <li>
                  <b>{"Nationality:"}</b> UK
                </li>
              </ul>
            </div>
          </div>
        </TitleCard>

        <TitleCard title="Sales data by media" topMargin="mt-2">
          <div className="table">
            <table width="100%">
              <thead>
                <tr>
                  <th rowSpan="2"></th>
                  <th colSpan="3">Market Contribution DUS</th>
                  <th colSpan="3">Product Contribution DUS</th>
                  <th rowSpan="2">Score DUS</th>
                </tr>
                <tr>
                  <th>2342</th>
                  <th>2341</th>
                  <th>% Var</th>
                  <th>2342</th>
                  <th>2341</th>
                  <th>% Var</th>
                </tr>
              </thead>
              <tbody>
                {SalesHistoryTabledata.map((data, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td rowSpan="2">{data.ShowPercentages}</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(
                              data.MarketContributionDUS.data[0]
                            )}
                          ></div>
                        </div>
                        <div className="loading-bar-label">
                          {data.MarketContributionDUS.data[0]}
                        </div>
                      </td>
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(
                              data.MarketContributionDUS.data[1]
                            )}
                          ></div>
                        </div>
                        <div className="loading-bar-label">
                          {data.MarketContributionDUS.data[1]}
                        </div>
                      </td>
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(
                              data.MarketContributionDUS.data[2]
                            )}
                          ></div>
                        </div>
                        <div className="loading-bar-label">
                          {data.MarketContributionDUS.data[2]}
                        </div>
                      </td>

                      {/* <td>{data.ProductContributionDUS.data[0]}</td>
                    <td>{data.ProductContributionDUS.data[1]}</td>
                    <td>{data.ProductContributionDUS.data[2]}</td> */}
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(
                              data.ProductContributionDUS.data[0]
                            )}
                          ></div>
                        </div>
                        <div className="loading-bar-label">
                          {data.ProductContributionDUS.data[0]}
                        </div>
                      </td>
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(
                              data.ProductContributionDUS.data[1]
                            )}
                          ></div>
                        </div>
                        <div className="loading-bar-label">
                          {data.ProductContributionDUS.data[1]}
                        </div>
                      </td>
                      <td>{data.ProductContributionDUS.data[2]}</td>

                      <td>{data.ScoreDUS}</td>
                      <td></td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </TitleCard>
      </div>
      {/* <div className="">
        <TitleCard title={"Sales over time"}>
          <Line style={{ width: "60%" }} data={data} options={options} />
          {/* <Line data={data} options={options} /> */}
        {/* </TitleCard>
      </div> */} 
      <div>
        <TitleCard title="Sales data" topMargin="mt-2" style={{ width: "60%" }}>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th> </th>
                  <th>Chart Eligible</th>
                  <th>Physical</th>
                  <th>Download</th>
                  <th>Aud Strm Prem</th>
                  <th>Aud Strm Prem Calc</th>
                  <th>Aud Strm AdF </th>
                  <th>Aud Strm AdF Calc</th>
                  <th>Vid Strm Prem</th>
                  <th>Vid Strm Prem Calc</th>
                  <th>Vid Strm AdF</th>
                  <th>Vid Strm AdF Calc</th>
                </tr>
              </thead>
              <tbody>
                {SalesData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.Type}</td>

                      <td>{data.chartEligible}</td>
                      <td>{data.Physical}</td>
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(data.Download)}
                          ></div>
                        </div>
                        <div className="loading-bar-label">{data.Download}</div>
                      </td>
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(data.AudStrmPrem)}
                          ></div>
                        </div>
                        <div className="loading-bar-label">
                          {data.AudStrmPrem}
                        </div>
                      </td>
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(
                              data.AudStrmPremCalc
                            )}
                          ></div>
                        </div>
                        <div className="loading-bar-label">
                          {data.AudStrmPremCalc}
                        </div>
                      </td>
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(data.AudStrmAdF)}
                          ></div>
                        </div>
                        <div className="loading-bar-label">
                          {data.AudStrmAdF}
                        </div>
                      </td>
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(data.AudStrmAdFCalc)}
                          ></div>
                        </div>
                        <div className="loading-bar-label">
                          {data.AudStrmAdFCalc}
                        </div>
                      </td>
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(data.VidStrmPrem)}
                          ></div>
                        </div>
                        <div className="loading-bar-label">
                          {data.VidStrmPrem}
                        </div>
                      </td>
                      <td>
                        <div className="loading-bar-container">
                          <div
                            className="loading-bar"
                            style={generateLoadingBarStyle(
                              data.VidStrmPremCalc
                            )}
                          ></div>
                        </div>
                        <div className="loading-bar-label">
                          {data.VidStrmPremCalc}
                        </div>
                      </td>
                      <td>{data.VidStrmAdF}</td>
                      <td>{data.VidStrmAdFCalc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </TitleCard>
      </div>
    </>
  );
}

export default Transactions;
