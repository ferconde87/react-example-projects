import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=ARS&order=market_cap_desc&per_page=100&page=1&sparkline=false


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(err => console.log.apply(err));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input 
            type='text' 
            placeholder='Search' 
            className='coin-input' 
            onChange={handleChange}
            />
        </form>
      </div>
      <div className='coin-cointainer'>
        <div className='coin-row'>
          <div className='coin center'>
            <p className='coin-name'>Name</p>
            <p className='coin-marketcap'>Symbol</p>
          </div>
          <div className='coin-data'>
            <p className='coin-price'>Price</p>
            <p className='coin-volume'>Volume</p>
            <p className='coin-marketcap'>Market Cap</p>
            <p className='coin-price'>% Change (24h)</p>
          </div>
        </div>
      </div>
      {filteredCoins.map(coin => {
        return(
          <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image} 
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            />
        )} 
      )}

    </div>
  );
}

export default App;
