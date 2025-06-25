import React from 'react'
import menuData from '../data/menuData'

const Nav = () => {
  return (
    <nav className="nav h_left">
      <ul>
        {menuData.map((item, idx) => (
          <li key={idx}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
