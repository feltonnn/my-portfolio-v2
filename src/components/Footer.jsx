// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left column */}
        <div className="footer-col">
          <div className="footer-title">Felton Lim</div>
          <div className="footer-sub">Digital Portfolio</div>
        </div>

        {/* Middle column */}
        <div className="footer-col">
          <div className="footer-label">Let’s chat</div>
          <a href="mailto:feltonlim@gmail.com" className="footer-link">
            feltonlim@gmail.com
          </a>
          <div>
            <a href="https://t.me/feltonn" target="_blank" rel="noreferrer" className="footer-link">
              @feltonn
            </a>
            <span className="footer-note"> (telegram)</span>
          </div>
        </div>

        {/* Right column */}
        <div className="footer-col footer-right">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="footer-link">
            Resume
          </a>
          <a href="https://linkedin.com/in/feltonlim" target="_blank" rel="noreferrer" className="footer-link">
            Linkedin
          </a>
          <a href="https://instagram.com/feltonlim" target="_blank" rel="noreferrer" className="footer-link">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
