import React from 'react'

const Review = ({ score, title, description }) => {
  
  return (
    <div className="card my-4 col">
      <div className="card-header bg-light">
        Rating: {score}
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <div className="lead">{description}</div>
      </div>
      
    </div>
  )
}

export default Review
