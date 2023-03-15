// import React from 'react'

const Button = ({url}) => {
  return (
    <a href={url} className="btn btn-primary">go somewhere</a>
  )
}

//* Object destructuring, took away props and added url 

export default Button