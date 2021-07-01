import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Airline from './Airline'


const Airlines = () => {
  const [airlines, setAirlines] = useState([])
  // const [list, setList] = useState([])

  useEffect(() => {
    // const fetchAirlines = async () => {
    //   const result = await axios.get('/api/v1/airlines')
    //   setAirlines(result.data)
    //   console.log(result.data)
    // }
    // fetchAirlines()

    
    //The older way without async and await
    // Get all the airlines from the API
    axios.get('/api/v1/airlines')
    .then( res => setAirlines(res.data.data))
    .catch( err => console.log(err))
    
  }, [airlines.length])
  
  const grid = airlines.map( item => {
    return (
      <Airline 
        key={item.attributes.name}
        image_url={item.attributes.image_url}
        name={item.attributes.name}
        avg_score={item.attributes.avg_score}
        slug={item.attributes.slug}
         />)
  })

  return (
    <div className="container">
    <div className="text-center mx-auto my-5">
      <h1>OpenFlights</h1>
      <h2>Honest, unbiased airline reviews.</h2>
    </div>
    <div className="grid">
      <div className="row">
        {grid}
      </div>
    </div>
    </div>
  )
}

export default Airlines
