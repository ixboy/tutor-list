import React from 'react'
import countryFlag from '../images/countryFlag.jpeg'

const Header = () => {
  return (
    <div className="headerDiv">
      <p className="userLogo"> M </p>
      <h4>Welcome</h4>
      <img className="countryFlag" src={countryFlag} alt="country Flag" />
    </div>
  )
}

export default Header
