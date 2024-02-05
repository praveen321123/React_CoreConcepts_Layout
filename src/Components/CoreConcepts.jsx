import React from 'react'

const CoreConcepts = ({image, title, description}) => {
  return (
    <div>
      <li>
        <img src={image} alt={title}/>
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    </div>
  )
}

export default CoreConcepts