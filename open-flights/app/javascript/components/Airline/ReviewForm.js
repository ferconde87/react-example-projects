import React from 'react'

const ReviewForm = (props) => {

  const ratingOptions = [1,2,3,4,5].map( (score, index) => {
    return (
      <div key={index} className="form-check form-check-inline me-4" >
          <input 
            type="radio" 
            value={score} 
            name="rating" 
            className="form-check-input" 
            onChange={props.setRating.bind(this, score)} 
            id={`rating-${score}`} 
            checked={props.review.score == score}
          />
          <label htmlFor={`rating-${score}`} className="form-check-label" >{index+1} </label>
      </div>
    )
  })
  
  
  return (
    <div className="card p-4">
      <div className="lead mb-1">Have an experience with {props.attributes.name}? Share your review</div>
      <form onSubmit={props.handleSubmit} className="mt-2">
        <div className="field form-group mb-2">
          <label htmlFor="title" className="form-label">Title: </label>
          <input onChange={props.handleChange} value={props.review.title} type="text" className="form-control" name="title" placeholder="Excellent flight!!!"/>
        </div>
        <div className="field form-group mb-2">
          <label htmlFor="description" className="form-label">Description: </label>
          <input onChange={props.handleChange} value={props.review.description}  type="text" className="form-control" name="description" placeholder="It was a great experience!"/>
        </div>
        <div className="field form-group mb-2">
          <label htmlFor="rating" className="form-label">Rating: </label>
          <div className="">
            {ratingOptions}
          </div>
        </div>
        <button className="btn btn-success my-3" type="submit">Submit Your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm
