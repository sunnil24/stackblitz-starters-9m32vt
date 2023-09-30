import React from 'react';

const Tile: React.FC<{
  country: string;
  capital: string;
  text: string;
}> = ({ country, capital, text }) => {
  return (
    <button data-country={country} data-capital={capital}>
      {text}
    </button>
  );
};

export default Tile;
