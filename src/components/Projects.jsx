import { useState, useEffect, useRef } from "react";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Vos projets (à personnaliser)
  const projects = [
    {
      title: "Portfolio Personnel",
      description: "Un portfolio moderne avec React et animations",
      technologies: ["React", "CSS", "JavaScript"],
      image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Projet+1",
      github: "https://github.com/votre-username/projet1",
      demo: "https://votre-demo.com",
      status: "Terminé",
    },
    {
      title: "Pacman",
      description: "Site e-commerce avec panier et paiement",
      technologies: ["React", "Node.js", "MongoDB"],
      mediaType: "video",
      media: "/videos/synthetiseur-demo.mp4",
      github: "https://github.com/votre-username/projet2",
      demo: null, // pas de demo pour ce projet
      status: "En cours",
    },
    {
      title: "Synthétiseur de Musique",
      description: "API pour gestion de tâches avec authentification",
      technologies: ["Node.js", "Express", "JWT"],
      mediaType: "video",
      media: "/videos/synthetiseur-demo.mp4",
      github: "https://github.com/votre-username/projet3",
      demo: null,
      status: "Terminé",
    },
    {
      title: "SoloDle",
      description:
        "Site de divertissement donc le but est de deviner un personnage",
      technologies: ["HTML", "CSS", "JavaScript", "JSON"],
      image: "/public/solodle.png",
      github: "https://github.com/Zrid02/SoloDle",
      demo: "https://zrid02.github.io/SoloDle",
      status: "Terminé",
    },
  ];

  // Détection du scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      id="projets"
      style={{
        minHeight: "100vh",
        padding: "100px 5%",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Titre */}
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
          ⚔️ MES PROJETS
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
          Projets réalisés et en cours de développement
        </p>
      </div>

      {/* Grille de projets */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "rgba(139, 92, 246, 0.05)",
              border: "2px solid rgba(139, 92, 246, 0.3)",
              borderRadius: "15px",
              overflow: "hidden",
              transition: "all 0.4s",
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${index * 0.15}s`,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.borderColor = "#8B5CF6";
              e.currentTarget.style.boxShadow =
                "0 15px 50px rgba(139, 92, 246, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Image du projet */}
            <div
              style={{
                width: "100%",
                height: "250px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
              {/* Badge statut */}
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  padding: "8px 15px",
                  background:
                    project.status === "Terminé" ? "#10B981" : "#F59E0B",
                  color: "white",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                {project.status}
              </div>
            </div>

            {/* Contenu */}
            <div style={{ padding: "25px" }}>
              {/* Titre */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#FFFFFF",
                  fontWeight: "700",
                  marginBottom: "15px",
                  letterSpacing: "1px",
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "1rem",
                  color: "#9CA3AF",
                  marginBottom: "20px",
                  lineHeight: "1.6",
                }}
              >
                {project.description}
              </p>

              {/* Technologies */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "25px",
                }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      padding: "6px 12px",
                      background: "rgba(139, 92, 246, 0.2)",
                      border: "1px solid rgba(139, 92, 246, 0.4)",
                      borderRadius: "15px",
                      color: "#8B5CF6",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Boutons */}
              <div style={{ display: "flex", gap: "15px" }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    padding: "12px",
                    background: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    transition: "all 0.3s",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow =
                      "0 5px 20px rgba(139, 92, 246, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  🔗 GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      padding: "12px",
                      background: "transparent",
                      color: "#8B5CF6",
                      border: "2px solid #8B5CF6",
                      textAlign: "center",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "0.95rem",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#8B5CF6";
                      e.target.style.color = "white";
                      e.target.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#8B5CF6";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    🚀 Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
