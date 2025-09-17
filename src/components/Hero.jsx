
import { GlassElement } from "./GlassElement/GlassElement";
// import { InteractiveGridPattern } from "@/components/ui/shadcn-io/interactive-grid-pattern";


export default function Hero() {
  return (
    <section className="hero">
      {/* <InteractiveGridPattern 
        className="absolute inset-0"
        squares={[20, 20]}
      /> */}
      <div className="hero-left">
        <h1>Product Design | User Experience</h1>
        <p>
          Hi. I’m <span className="highlight">Felton Lim</span>.<br />
          I love to design and build digital products that balance sleek technical execution with
          <span className="highlight"> thoughtful</span>,
          <span className="highlight"> innovative</span>, and
          <span className="highlight"> clean</span> designs.
        </p>
        <p className="location">
          🇸🇬 Based in <span className="highlight">Singapore</span>. &nbsp;&nbsp;&nbsp;&nbsp; <br />
          🇵🇭 Currently in <span className="highlight">Metro Manila</span>.
        </p>
      </div>
      <div className="hero-right">
        <div className="hero-image">
          {/* Position the GIF in the top-right corner */}
          <img src="/hero/mew.gif" alt="Mew" className="hero-gif" />
        </div>
      </div>
      <div className="overlay">
        {/* <GlassElement
          width={200}
          height={200}
          radius={50}
          depth={10}
          blur={2}
          chromaticAberration={5}
          debug={false}
        >hellooo</GlassElement> */}
      </div>
    </section>
  )
}
