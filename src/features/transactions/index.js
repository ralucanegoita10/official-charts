import moment from "moment";
import React from "react";

import TitleCard from "../../components/Cards/TitleCard";
import SalesData from "./salesTabledata";
import ProductData from "./productDetails";
import SalesHistoryTabledata from "./salesHistory";
import "./productDetails.css";

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
      <TitleCard title="Sales" topMargin="mt-2">
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
                          style={generateLoadingBarStyle(data.AudStrmPremCalc)}
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
                      <div className="loading-bar-label">{data.AudStrmAdF}</div>
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
                          style={generateLoadingBarStyle(data.VidStrmPremCalc)}
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

      <TitleCard title="Product Details" topMargin="mt-2">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <tbody>
              {Object.entries(ProductData[0]).map(([key, value], index) => (
                <tr key={index}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TitleCard>
      <TitleCard title="Sales History Details" topMargin="mt-2">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th rowSpan="2">Show Percentages</th>
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
    </>
  );
}

export default Transactions;
