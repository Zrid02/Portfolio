import { useState, useEffect, useRef } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "HTML/CSS", level: 90, color: "#E34F26" },
    { name: "JAVASCRIPT", level: 70, color: "#F7DF1E" },
    { name: "TYPESCRIPT", level: 80, color: "#3178c6ff" },
    { name: "REACT", level: 80, color: "#61DAFB" },
    { name: "NEXT.JS", level: 75, color: "#000000" },
    { name: "NODE.JS", level: 65, color: "#339933" },
    { name: "NEST.JS", level: 70, color: "#e0234eff" },
    { name: "MONGODB", level: 50, color: "#4479A1" },
    { name: "POSTGRESQL", level: 60, color: "#1369acff" },
    { name: "PHP", level: 50, color: "#0ea753ff" },
    { name: "LARAVEL", level: 50, color: "#0a6432ff" },
    { name: "PYTHON", level: 70, color: "#9c18d0ff" },
    { name: "FLASK", level: 55, color: "#af0cf0ff" },
    { name: "JAVA", level: 85, color: "#9f198bff" },
    { name: "SPRING", level: 50, color: "#6db33fff" },
    { name: "C++", level: 50, color: "#00599cff" },
    { name: "C#", level: 50, color: "#68217aff" },
  ];

  // Détection du scroll pour animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{
        minHeight: "100vh",
        padding: "100px 5%",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Titre de la section */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2
          style={{
            fontSize: "3rem",
            color: "#FFFFFF",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "3px",
            marginBottom: "15px",
            textShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
          }}
        >
          MES SKILLS
        </h2>
        <div
          style={{
            width: "200px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #8B5CF6, transparent)",
            margin: "0 auto",
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
          }}
        ></div>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#9CA3AF",
            marginTop: "20px",
          }}
        >
          Technologies que je maîtrise
        </p>
      </div>

      {/* Grille des compétences */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gap: "30px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "rgba(139, 92, 246, 0.05)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              borderRadius: "12px",
              padding: "25px",
              transition: "all 0.3s",
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${index * 0.1}s`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(139, 92, 246, 0.1)";
              e.currentTarget.style.borderColor = "#8B5CF6";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(139, 92, 246, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(139, 92, 246, 0.05)";
              e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Nom et niveau */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
              }}
            >
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  letterSpacing: "1px",
                }}
              >
                {skill.name}
              </span>
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  color: "#8B5CF6",
                  textShadow: "0 0 10px rgba(139, 92, 246, 0.8)",
                }}
              >
                {skill.level}%
              </span>
            </div>

            {/* Barre de progression */}
            <div
              style={{
                width: "100%",
                height: "12px",
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Barre de remplissage animée */}
              <div
                style={{
                  height: "100%",
                  width: isVisible ? `${skill.level}%` : "0%",
                  background: `linear-gradient(90deg, ${skill.color}, #8B5CF6)`,
                  borderRadius: "10px",
                  transition: "width 1.5s ease-out",
                  transitionDelay: `${index * 0.1 + 0.3}s`,
                  boxShadow: `0 0 20px ${skill.color}`,
                  position: "relative",
                }}
              >
                {/* Effet de brillance */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
                    borderRadius: "10px 10px 0 0",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section "Autres compétences" */}
      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.8rem",
            color: "#8B5CF6",
            fontWeight: "600",
            marginBottom: "30px",
            textShadow: "0 0 15px rgba(139, 92, 246, 0.6)",
          }}
        >
          Outils utilisés et compétences complémentaires
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {[
            "Windows/Linux",
            "Git/GitHub/GitLab",
            "IntelliJ IDEA",
            "PHPStorm",
            "VS Code",
            "Réseaux",
            "Méthodes Agiles",
            "Docker,Podman",
            "Arduino",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: "12px 25px",
                background: "rgba(139, 92, 246, 0.1)",
                border: "1px solid rgba(139, 92, 246, 0.4)",
                borderRadius: "25px",
                color: "#E5E7EB",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "all 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#8B5CF6";
                e.target.style.color = "#FFFFFF";
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 5px 20px rgba(139, 92, 246, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(139, 92, 246, 0.1)";
                e.target.style.color = "#E5E7EB";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
