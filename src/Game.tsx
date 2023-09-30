import { ButtonHTMLAttributes, FC, useState } from 'react';

import './style.css';

const data = [
  { nation: 'India', capital: 'New Delhi' },
  { nation: 'Nepal', capital: 'Kathmandu' },
];
const transformData = [];

data.forEach((item) => {
  transformData.push({
    displayText: item.nation,
    answer: item.capital,
  });
  transformData.push({
    displayText: item.capital,
    answer: item.nation,
  });
});

transformData.sort(() => 0.5 - Math.random());

export default () => {
  const [tiles, updateTiles] = useState(transformData);
  const [selectedPair, updatePair] = useState(null);

  const handleCick = (e) => {
    e.preventDefault();
    const value = JSON.parse(e.target.value);
    if (selectedPair) {
    } else {
      updatePair(value);
    }
    console.log(value);
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      {tiles.map((item) => {
        return (
          <button
            type="button"
            value={JSON.stringify(item)}
            onClick={handleCick}
          >
            {item.displayText}
          </button>
        );
      })}
    </div>
  );
};
