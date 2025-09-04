export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Product Design | User Experience</h1>
        <p>
          Hi. I’m <span className="highlight">Felton Lim</span>.<br />
          I love to design and build digital products that balance sleek technical execution with 
          <span className="highlight"> thoughtful</span>, 
          <span className="highlight"> innovative</span>, and 
          <span className="highlight"> clean</span> designs.
        </p>
        <p className="location">📍 Based in <span className="highlight">Singapore</span>.</p>
      </div>
      <div className="hero-right">
        <img src="https://placehold.co/400x400" alt="Felton Hero" />
      </div>
    </section>
  )
}
