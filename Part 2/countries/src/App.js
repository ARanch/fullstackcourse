// app goals:
// √ get data from countries rest API, using the endpoint "all" ˙
// √ find country using search field
// FIND INSPIRATION I phonebook appen
// √ if more than 10 countries matching query, prompt for more specific 
// one to ten results are showing
// when only one country is shown, show data
//   √country name
//   √capital city
//   √languages spoken
//   √image of flag
//   √area

// 2.13: Add show buttons, for when there is multiple countries showing
// 2.14: add weather data for capital, https://openweathermap.org/
import axios from 'axios'
import { useState, useEffect } from 'react';
import CountryData from './components/CountryData';

const SearchField = (props) => {
  <form onSubmit={(event) => { event.preventDefault() }}>
    <input
      placeholder='Search countries'
      onChange={props.handler} />
  </form>
}

const App = () => {
  const [filter, setFilter] = useState('')
  const [data, setData] = useState([])
  const [countryName, setCountryName] = useState('')
  const [countryList, setCountryList] = useState([])
  
  const handleInput = (event) => {
    setFilter(event.target.value)
  }

  const setToDenmark = () => {
    setFilter('Sweden')
  }
  
  useEffect(() => {
    console.log('attempting to fetch data...')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        // console.log('Data received...', response.data)
        setData(response.data)
        setCountryName(response.data[2].name.common)
      })
  }, [])

  useEffect(() => {
    console.log('Filter is: ', filter)
    setCountryList(data.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())))
  }, [filter])

  useEffect(() => {
    // countryList.map(country => console.log(country))
    console.log(countryList)
    console.log('Countries found: ', countryList.length)
  }, [countryList])
  
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input placeholder='Search Country' onChange={handleInput}></input>
        <button onClick={() => setFilter('')}>Clear search</button>
      </form>
      <SearchField handler={handleInput} value={filter} />
      <CountryData countries={countryList} filterSetter={setFilter}/>
    </div>
  )
}

export default App;
