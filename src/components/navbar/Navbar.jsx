import React from 'react'
import './navBar.css'

function Navbar({isScrolling}) {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
    }
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo" onClick={toTheTop}>Desarrollador Web</div>
    </nav>
  )
}

export default Navbar