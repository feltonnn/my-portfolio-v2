import { useEffect, useRef, useState } from "react"

export default function ExperienceItem({ company, period, image, description, align = "left", glow }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target) // trigger once
          }
        })
      },
      { threshold: 0.3 } // triggers when 30% visible
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`experience-item ${align} ${glow} ${isVisible ? "animate-glow" : ""}`}
    >
      <div className="experience-text glass">
        <h3>{company}</h3>
        <span className="period">{period}</span>
        <p>{description}</p>
      </div>
      <img src={image} alt={`${company} project`} className="experience-img" />
    </div>
  )
}
