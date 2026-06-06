import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { CartBadge } from '../common/CartBadge'
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to={ROUTES.HOME} className="logo">
          <h1>📚 BookStore</h1>
        </Link>
        <nav className="header-nav">
          <Link to={ROUTES.HOME} className="nav-link">
            Shop
          </Link>
          <CartBadge />
        </nav>
      </div>
    </header>
  )
}
