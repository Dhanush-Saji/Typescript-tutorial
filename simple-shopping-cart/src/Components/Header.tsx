import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h1>Happy Shopping</h1>
        <div>
            <img src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png" alt="cart" />
            <p>2</p>
        </div>
    </div>
  )
}

export default Header