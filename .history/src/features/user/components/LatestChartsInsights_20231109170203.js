import React from "react";
import { Link } from 'react-router-dom';

const LatestChartsInsights = () => {
  const insightsData = [
    {
      category: "Popular Genres",
      insight: "Rock and Pop genres dominate the charts this week.",
    },
    {
      category: "Trending Artists",
      insight: "New artists like Artist X and Artist Y are gaining popularity.",
    },
    {
      category: "Trending Artists",
      insight: "New artists like Artist X and Artist Y are gaining popularity.",
    },

    {
      category: "Trending Artists",
      insight: "New artists like Artist X and Artist Y are gaining popularity.",
    },
  ];

  return (
    <Link to="/app/leads">
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
      <h2 className=" text-custom-blue font-bold mb-4">Latest Charts Insights</h2>
      {insightsData.map((item, index) => (
        <div key={index} className="bg-white rounded p-4 mb-4 shadow-md">
          <p className="text-custom-pink font-semibold mb-2">{item.category}</p>
          <p className="text-gray-800">{item.insight}</p>
        </div>
      ))}
    </div>
    </Link>
  );
};

export default LatestChartsInsights;
