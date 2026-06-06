import './Footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} BookStore. Learning React + TypeScript + Redux.</p>
      </div>
    </footer>
  )
}
