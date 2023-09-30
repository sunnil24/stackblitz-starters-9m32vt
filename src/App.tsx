import { ButtonHTMLAttributes, FC, useState } from 'react';

import './style.css';

const data = [
  { nation: 'India', capital: 'New Delhi' },
  { nation: 'Nepal', capital: 'Kathmandu' },
  { nation: 'U.S.A', capital: 'Washington' },
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

  const handleTIleUpdate = (target) => {
    const updatedTiles = tiles.filter((tl) => {
      console.log(tl, target);
      return (
        target.displayText !== tl.displayText &&
        target.answer !== tl.displayText
      );
    });

    console.log(updatedTiles, target);
    updateTiles(updatedTiles);
  };

  const handleCick = (e) => {
    e.preventDefault();
    const value = JSON.parse(e.target.value);
    if (selectedPair) {
      if (e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
      } else {
        if (selectedPair.displayText === value.answer) {
          handleTIleUpdate(value);
          e.target.classList.add('selected');
        } else {
          document.querySelector('.selected').classList.remove('selected');
        }
      }
      updatePair(null);
    } else {
      updatePair(value);
      e.target.classList.add('selected');
    }
  };

  if (!tiles.length) {
    return <h1>Congratulations! all set</h1>;
  }

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
            key={item.displayText}
          >
            {item.displayText}
          </button>
        );
      })}
    </div>
  );
};
