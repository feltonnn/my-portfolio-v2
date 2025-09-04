import Hero from "../components/Hero"
import ExperienceItem from "../components/ExperienceItem"
import { experiences } from "../data/experiences"

export default function Experience() {
  return (
    <div className="experience-page">
      {/* Intro section */}
      <Hero />

      {/* Work Experience */}
      <section className="work-experience">
        <h2 className="section-title">Work Experience</h2>
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </section>
    </div>
  )
}
