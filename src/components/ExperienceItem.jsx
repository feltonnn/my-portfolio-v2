import { useEffect, useRef, useState } from "react";
import { GlassElement } from "./GlassElement/GlassElement";
import Line from "./ui/Line";

export default function ExperienceItem({
  company,
  period,
  image,
  description,
  align = "left",
  glow,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // trigger once
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`experience-item ${glow} ${isVisible ? "animate-glow" : ""}`}
    >
      <div className="experience-header">
        <h3>{company}</h3>
        <span className="period">{period}</span>
      </div>

      {/* Experience Content */}
      <section
        className="experience-content"
        style={{
          flexDirection: align === "left" ? "row" : "row-reverse", // Swap direction based on `align`
        }}
      >
        {/* Glass effect and description */}
        <div
          className="experience-text"
          style={{
            zIndex: 1,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: align === "left" ? "30px" : "0", // Shift text for overlay effect
            marginRight: align === "left" ? "0" : "30px", // Shift text for overlay effect
          }}
        >
          <GlassElement
            radius={50}
            depth={10}
            blur={2}
            chromaticAberration={5}
            debug={false}
          >
            <p>{description}</p>
          </GlassElement>
        </div>

        {/* Image */}
        <img
          src={image}
          alt={`${company} project`}
          className="experience-img"
          style={{
            zIndex: 0,
            marginLeft: align === "left" ? "30px" : "0", // Shift image for overlay effect
            marginRight: align === "left" ? "0" : "30px",
          }}
        />
      </section>
    </div>
  );
}
