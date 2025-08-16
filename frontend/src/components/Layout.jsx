import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img 
                src={isScrolled ? '/logo2.png' : '/logo.png'} 
                alt="The Flex" 
                className="logo-image"
              />
            </div>
            
            <nav className="nav">
              <a href="#" className="nav-link">
                <span>Landlords</span>
                <span className="dropdown-arrow">▼</span>
              </a>
              <a href="#" className="nav-link">
                <span>About Us</span>
              </a>
              <a href="#" className="nav-link">
                <span>Careers</span>
              </a>
              <a href="#" className="nav-link">
                <span>Contact</span>
              </a>
              <div className="language-selector">
                <span>GB English</span>
              </div>
              <div className="currency-selector">
                <span>£ GBP</span>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout 