import React from 'react'
const Header = (props) => {
    // header component
    console.log(props)
    return <h1>{props.text}</h1>
  }
export default Header