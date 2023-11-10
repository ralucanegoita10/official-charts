import React from 'react';

const LatestNews = () => {
  const newsData = [
    {
      date: '03/11/2023',
      content: 'Fri 2344. Missing APPLE STRM, SPOTIFY for Thu, YOUTUBE for Wed, Thu. Their data has been upweighted to compensate.'
    },
    {
      date: '15/09/2022',
      content: 'Sales Flashes Monday 19th September'
    },
    {
      date: '11/04/2022',
      content: 'Retailer Type Analysis Update - 2214'
    },
    {
      date: '25/10/2021',
      content: 'Dublin Vinyl HDel Added To Chart Panel - Week 2143'
    },
    {
      date: '12/10/2021',
      content: 'Rarewaves HDel Added To Chart Panel - Week 2139'
    },
    {
      date: '13/11/2021',
      content: 'Rarewaves HDel Added To Chart Panel - Week 96'
    },
    {
      date: '19/10/2022',
      content: 'Antarctica HDel Added To Charts - Week 92'
    }
  ];

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl text-custom-blue font-bold mb-4">Latest News</h2>
      {newsData.map((news, index) => (
        <div key={index} className="bg-white rounded p-4 mb-4 shadow-md">
          <p className="text-custom-pink font-semibold mb-2">{news.date}</p>
          <p className="text-gray-800">{news.content}</p>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;
