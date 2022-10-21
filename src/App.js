import axios from 'axios';
import { useState } from 'react';
import { ReturnInfo } from './Components/ReturnInfo'

function App() {

  // states
  const [citySearch, setCitySearch] = useState('');
  const [cityData, setCityData] = useState(null);
  const apiKey = 'oF3NNZZ8QXJ6kXiXB1AGmMjqCSG7qBqn'

  // city search form
  const fetchCity = (e) => {
    e.preventDefault();
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${citySearch}`)
      .then((res) => {
        setCityData(res.data[0]);
        setCitySearch('');
      });
  }

  return (
    <div className="wrapper">
      <h1 className="headline">WEATHER APP</h1>
      <form className='form-group custom-form'
        onSubmit={fetchCity}>
        <div className='search-box'>
          <input className='form-control' placeholder='Enter your city'
            value={citySearch} onChange={(e) => setCitySearch(e.target.value)} />
          <button className="button"> Search
          </button>
        </div>
      </form>
      {cityData ? <div><ReturnInfo cityData={cityData} /></div> : <div className='box-info'>
        <h1>No value</h1></div>}

    </div>
  );
}

export default App;