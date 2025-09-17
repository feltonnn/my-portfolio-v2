import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState, useRef } from "react";
import confetti from 'canvas-confetti'

export default function Navbar() {

    const [show, setShow] = useState(true);       // navbar visibility
    const lastScrollY = useRef(0);               // store last scroll position

    // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // scrolling down and past 100px → hide navbar
        setShow(false);
      } else {
        // scrolling up → show navbar
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const handleFunHover = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        // Top-right corner of the FUN link
        const originX = (rect.right + window.scrollX) / window.innerWidth
        const originY = (rect.top + window.scrollY) / window.innerHeight

        confetti({
            particleCount: 25,        // small burst
            angle: 75,                // 20° clockwise
            spread: 60,               // how wide the burst is
            origin: { x: originX, y: originY },
            colors: ["#ffffff"],      // white confetti
            startVelocity: 10,        // speed of particles
            gravity: 0.5,               // how quickly they fall
            scalar: 0.5               // size of particles
        })
    }

    return (
        <header className={`nav ${show ? "" : "hide"}`}>
            <div className="nav-inner">
                {/* Left: logo with two overlapping images */}
                <Link to="/" className="navlink" aria-label="Home">Felton Lim</Link>

                {/* Center: links */}
                <nav className="nav-links">
                    <NavLink to="/" end className="navlink geist">Experiences</NavLink>
                    <NavLink to="/projects" className="navlink rmneue">Projects</NavLink>
                    <NavLink to="/fun" className="navlink slackey fun-link" onMouseEnter={handleFunHover}>
                        <span className="letter f">F</span>
                        <span className="letter u">U</span>
                        <span className="letter n">N</span>
                    </NavLink>
                    <NavLink to="/about" className="navlink sometype">About</NavLink>
                </nav>

                {/* Right: Resume button */}
                <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noreferrer">
                    <span className="resume-icon" aria-hidden="true">
                        <span className="resume-icon-box" />
                    </span>
                    <span>Resume</span>
                </a>
            </div>
        </header>
    )
}
