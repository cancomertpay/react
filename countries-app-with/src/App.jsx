import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [country, setCountry] = useState([])

  useEffect(() => {
    const getCountry = async() => {
      const data = await axios.get('https://restcountries.com/v3.1/all')
      setCountry(data)
    }
    getCountry()
  }, [])

  return (
    <>
      <div className="container">
      <input style={{marginTop: "20px"}} type="search" id="search" name="search" placeholder="Search" /> 
        {
          country?.data?.map((item,index) => (
            <article key={index}>
              <header>
                <img src={item.flags.png} />
                <hgroup>
                  <h1>{item.name.common} ({item.altSpellings[0]}) </h1>
                  <h2> {item.capital} </h2>
                </hgroup>
              </header>
              <ul>
                <li>Population: {item.population}</li>
                <li>Region: {item.region}</li>
                <li>Languages: {Object.values(item.languages !== undefined || null ? item.languages : "").join(", ").toUpperCase()}</li>
                <li>Currencies: {Object.keys(item.currencies !== undefined || null ? item.currencies : "").join(", ").toUpperCase()}</li>
                <li>Time Zones: {item.timezones[0]}</li>
              </ul>
              <footer>
                Location: <a href={item.maps.googleMaps}>{item.maps.googleMaps}</a>
              </footer>
            </article>
          ))
        }
      </div>
    </>
  )
}

export default App
