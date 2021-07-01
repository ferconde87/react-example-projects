import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({title: '', description: '', score: 0})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // const fetchAirline = async () => {
    //   const slug = props.match.params.slug
    //   const result = await axios.get(`api/v1/airlines/${slug}`)
    //   setAirlines(result.data)
    //   console.log(result.data)
    // }

    const slug = props.match.params.slug
    axios.get(`/api/v1/airlines/${slug}`)
    .then( res => { 
      setAirline(res.data)
      setLoaded(true)
    })
    .catch( err => console.log(err))
  }, [review])

  const handleChange = (e) => {
    setReview({...review, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const airline_id = airline.data.id
    axios.post('/api/v1/reviews', { review, airline_id})
    .then(res => {
      const included = [...airline.included, res.data.data]
      setAirline({...airline, included})
      setReview({title: '', description: '', score: 0})
    })
    .catch(err => console.log(err))
  }

  const setRating = (score, e) => {
    setReview({...review, score})
  }


  let reviews
  if(loaded && airline.included) {
    reviews = airline.included.map((item, index) => {
      console.log('mapping:',item)
      return (
        <Review 
          key={index}
          title={item.attributes.title}
          description={item.attributes.description}
          score={item.attributes.score}
        />
      )
    })
  }

  return (
    <div className="container">
      {loaded && 
      <div className="row">
        <div className="col">
            <Header 
              attributes={airline.data.attributes}
              reviews={airline.included}
            />
            {reviews}
        </div>
        <div className="col mt-5">
          <ReviewForm 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setRating={setRating}
            attributes={airline.data.attributes}
            review={review}
          />
        </div>

      </div>
      }
    </div>
  )
}

export default Airline
