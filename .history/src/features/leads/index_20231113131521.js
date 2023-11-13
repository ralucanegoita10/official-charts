import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import ProductCard from "../user/components/ProductCard";
import { getLeadsContent } from "./leadSlice";
import ChartData from "./chartData";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from 'react-router-dom'


import "./latestCharts.css"; // Import the CSS file for styling

function Leads() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeadsContent());
  }, []);
let index = 0
function setIndex(newVal) {
  index = newVal
  console.log('index set')
}
  function generateRandomLW() {
    let values = [...Array(30).keys()].map((i) => i + 1); // Create an array with numbers 1 to 30
    const maxNewOccurrences = Math.floor(Math.random() * 2) + 3; // Randomize 3 to 4 occurrences of "NEW"
    for (let i = 0; i < maxNewOccurrences; i++) {
      values.push("NEW"); // Add "NEW" to the array the specified number of times
    }

    let currentIndex = values.length,
      randomIndex,
      tempValue;

    // Perform Fisher-Yates shuffle algorithm
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap current element with random element
      tempValue = values[currentIndex];
      values[currentIndex] = values[randomIndex];
      values[randomIndex] = tempValue;
    }

    return values.pop(); // Return and remove the last element from the shuffled array
  }

  const generateRandomSparkline = (length) => {
    const data = [];
    for (let i = 0; i < length; i++) {
      data.push(Math.floor(Math.random() * 100)); // Generate random numbers between 0 and 100
    }
    return data;
  };

  const generateLoadingBarStyle = (value) => {
    const parsedValue = parseFloat(value.replace(/,/g, ""));
    const percentage = (parsedValue / 50000) * 100; // Assuming maximum value is 50,000
    const barColor = percentage <= 50 ? "#0f27e9" : "#ef6ad4"; // Blue if filled less than half, pink if filled more than half

    return {
      width: `${percentage}%`,
      backgroundColor: barColor,
    };
  };

  return (
    <>
      <ProductCard data={ChartData} index={index}/>
      <TitleCard title="Latest Charts" topMargin="mt-2">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Pos</th>
                <th>LW</th>
                <th>Album photo</th>
                <th>Title</th>
                <th>DUS</th>
                <th>Physical</th>
                <th>Download</th>
                <th>Streams</th>
                <th>Sparkline</th>
              </tr>
            </thead>
            <tbody>
              {ChartData.map((data, index) => (
                <tr key={index} onClick={() => setIndex(index)}>
                  <td onClick={() => setIndex(index)}>{data.pos}</td>
                  <td>
                    {data.lw === "NEW" ? (
                      <p>{"NEW"}</p>
                    ) : (
                      <p>{generateRandomLW()}</p>
                    )}
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 zoom">
                          <img src={data.albumPhoto} alt="Album Art" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div onClick={() => setIndex(index)}>
                        {/* //<Link to="/app/transactions"> */}
                          <div className="font-bold">{data.title}</div>
                        {/* //</Link> */}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="loading-bar-container">
                      <div
                        className="loading-bar"
                        style={generateLoadingBarStyle(data.dus)}
                      ></div>
                    </div>
                    <div className="loading-bar-label">{data.dus}</div>
                  </td>
                  <td>
                    <div className="loading-bar-container">
                      <div
                        className="loading-bar"
                        style={generateLoadingBarStyle(data.physical)}
                      ></div>
                    </div>
                    <div className="loading-bar-label">{data.physical}</div>
                  </td>
                  <td>
                    <div className="loading-bar-container">
                      <div
                        className="loading-bar"
                        style={generateLoadingBarStyle(data.download)}
                      ></div>
                    </div>
                    <div className="loading-bar-label">{data.download}</div>
                  </td>
                  <td>
                    <div className="loading-bar-container">
                      <div
                        className="loading-bar"
                        style={generateLoadingBarStyle(data.streams)}
                      ></div>
                    </div>
                    <div className="loading-bar-label">{data.streams}</div>
                  </td>
                  <td>
                    <div className="sparkline-container">
                      <Sparklines data={generateRandomSparkline(10)}>
                        <SparklinesLine color="#570df8" />
                      </Sparklines>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default Leads;
