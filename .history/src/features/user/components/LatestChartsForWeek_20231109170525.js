import React from "react";
import { Link } from 'react-router-dom';

const LatestChartsForWeek = () => {
  const weekNumber = 45; // Example week number
  const chartData = [
    {
      rank: 1,
      song: "Song A",
    },
    {
      rank: 2,
      song: "Song B",
    },
    {
      rank: 3,
      song: "Song A",
    },
    {
      rank: 4,
      song: "Song A",
    },
    {
      rank: 5,
      song: "Song A",
    },
  ];

  return (
    <Link to="/app/leads">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-custom-blue font-bold mb-4">
          Latest Charts Available for Week {weekNumber}
        </h2>
        {chartData.map((item, index) => (
          <div key={index} className="bg-white rounded p-4 mb-4 shadow-md">
            <p className="text-custom-pink font-semibold mb-2">
              Rank {item.rank}
            </p>
            <p className="text-gray-800">{item.song}</p>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default LatestChartsForWeek;
