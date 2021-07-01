import React from 'react'

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes
  const total = props.reviews.length

  console.log(props.attributes)
  return (
    <div className="container mx-auto">
      <h1 className="text-center my-5"> {name} </h1>
      <div className="row mx-auto">
          <img src={image_url} alt={name} className="img-fluid w-50 rounded-circle mx-auto" /> 
      </div>
      <div className="d-flex flex-column align-items-center h3">
          <div className="my-2"> {total} User Reviews </div>
          <div> {avg_score} out of 5 </div>
      </div>
    </div>
  )
}

export default Header
