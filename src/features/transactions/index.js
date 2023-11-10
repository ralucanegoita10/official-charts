import moment from "moment";
import { useEffect, useState } from "react";

import TitleCard from "../../components/Cards/TitleCard";
import { RECENT_TRANSACTIONS } from "../../utils/dummyData";
import { Title } from "chart.js";
import SalesData from "./salesTabledata";
import "./productDetails.css";

function Transactions() {
  const [trans, setTrans] = useState(RECENT_TRANSACTIONS);

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
      <TitleCard title="Product details" topMargin="mt-2">
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
                      <div className="loading-bar-label">{data.AudStrmPrem}</div>
                    </td>
                    <td>
                      <div className="loading-bar-container">
                        <div
                          className="loading-bar"
                          style={generateLoadingBarStyle(data.AudStrmPremCalc)}
                        ></div>
                      </div>
                      <div className="loading-bar-label">{data.AudStrmPremCalc}</div>
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
                      <div className="loading-bar-label">{data.AudStrmAdFCalc}</div>
                    </td>
                    <td>
                      <div className="loading-bar-container">
                        <div
                          className="loading-bar"
                          style={generateLoadingBarStyle(data.VidStrmPrem)}
                        ></div>
                      </div>
                      <div className="loading-bar-label">{data.VidStrmPrem}</div>
                    </td>
                    <td>
                      <div className="loading-bar-container">
                        <div
                          className="loading-bar"
                          style={generateLoadingBarStyle(data.VidStrmPremCalc)}
                        ></div>
                      </div>
                      <div className="loading-bar-label">{data.VidStrmPremCalc}</div>
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

      <TitleCard title="Sales"></TitleCard>

      <TitleCard title="Sales history" topMargin="mt-2"></TitleCard>
    </>
  );
}

export default Transactions;
