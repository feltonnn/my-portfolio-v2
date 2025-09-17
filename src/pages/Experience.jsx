import Hero from "../components/Hero";
import ExperienceItem from "../components/ExperienceItem";
import { experiences } from "../data/experiences";
import Line from "../components/ui/Line"; // Import the Line component

export default function Experience() {
  return (
    <div className="experience-page">
      {/* Intro section */}
      <Hero />

      {/* Work Experience */}
      <section className="work-experience">
        <h2 className="section-title">Work Experience</h2>
        {experiences.map((exp, i) => {
          const align = i % 2 === 0 ? "left" : "right"; // Determine align based on index
          console.log("Experience " + i, align); // Log the value of align
          return (
            <div key={i}>
              <ExperienceItem {...exp} align={align} />
              
              {/* Add the line after every experience item except for the last one */}
              {i !== experiences.length - 1 && (
                <Line height="1px" width="100%" margin="60px 0px 40px 0px" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
