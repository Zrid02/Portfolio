import { useNavigate } from "react-router-dom";
import TypingText from "./TypingText";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Effet de glow derrière le titre */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: -1,
        }}
      ></div>

      {/* Titre avec effet typing */}
      <TypingText text="DÉVELOPPEUR WEB ET APPLICATION" speed={150} />

      {/* Sous-titre mystique */}
      <p
        style={{
          fontSize: "1.5rem",
          color: "#8B5CF6",
          fontStyle: "italic",
          marginBottom: "15px",
          textShadow: "0 0 10px rgba(139, 92, 246, 0.6)",
          fontWeight: "300",
          letterSpacing: "2px",
        }}
      >
        Nessim Rabhi
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: "1.2rem",
          color: "#9CA3AF",
          marginBottom: "50px",
          fontWeight: "400",
          maxWidth: "700px",
          lineHeight: "1.8",
        }}
      >
        Transformant les idées en réalité numérique, <br />
        Un développeur qui s'élève au-delà des limites
      </p>

      {/* Ligne de séparation lumineuse */}
      <div
        style={{
          width: "300px",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #8B5CF6, transparent)",
          marginBottom: "50px",
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
        }}
      ></div>

      {/* Boutons futuristes avec navigation */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => navigate("/skills")}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-5px) scale(1.05)";
            e.target.style.boxShadow = "0 10px 40px rgba(139, 92, 246, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = "0 4px 20px rgba(139, 92, 246, 0.4)";
          }}
          style={{
            padding: "18px 40px",
            background: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(139, 92, 246, 0.4)",
            transition: "all 0.3s",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          🔎 Voir mes skills
        </button>

        <button
          onClick={() => navigate("/contact")}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(139, 92, 246, 0.2)";
            e.target.style.borderColor = "#8B5CF6";
            e.target.style.boxShadow = "0 0 20px rgba(139, 92, 246, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.borderColor = "#8B5CF6";
            e.target.style.boxShadow = "none";
          }}
          style={{
            padding: "18px 40px",
            background: "transparent",
            color: "#8B5CF6",
            border: "2px solid #8B5CF6",
            borderRadius: "8px",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          💬 Me Contacter
        </button>
      </div>

      {/* Stats style Solo Leveling */}
      <div
        style={{
          marginTop: "80px",
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          { label: "Projets Complétés", value: "5+" },
          { label: "Technologies", value: "10+" },
          { label: "Level", value: "∞" },
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              padding: "20px 30px",
              background: "rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#8B5CF6",
                textShadow: "0 0 10px rgba(139, 92, 246, 0.6)",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#9CA3AF",
                marginTop: "5px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
