import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Airline = ({image_url, name, avg_score, slug}) => {
  return (
    <div className="col-md-4 col-sm-12 text-center mb-3 d-flex align-items-stretch align-content-stretch" >
      <div className="card center" style={{width: "30rem"}}>
        <div className="card-header bg-dark text-light airline-name p-4">
          {name}
        </div>
        <img className="img-fluid w-50 mt-4 d-none d-sm-block mx-auto" src={image_url} alt={name} />
        <div className="card-body d-flex align-items-end mx-auto">
          <div className="airline-score">
            {avg_score}
          </div>
        </div>
        <div className="card-footer bg-light text-dark d-flex w-100">
        <Link to={`/airlines/${slug}`} className="stretched-link btn mx-auto">View Airline</Link>
        </div>

      </div>
    </div>
  )
}

export default Airline
