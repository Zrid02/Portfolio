function About() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px 5%",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Titre */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
          👤 À PROPOS
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
      </div>

      {/* Contenu */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "rgba(139, 92, 246, 0.05)",
          border: "2px solid rgba(139, 92, 246, 0.3)",
          borderRadius: "15px",
          padding: "50px",
          boxShadow: "0 10px 50px rgba(0, 0, 0, 0.5)",
        }}
      >
        <p
          style={{
            fontSize: "1.3rem",
            color: "#E5E7EB",
            lineHeight: "2",
            marginBottom: "30px",
            textAlign: "justify",
          }}
        >
          Bonjour ! Je suis{" "}
          <span style={{ color: "#8B5CF6", fontWeight: "700" }}>
            Nessim Rabhi
          </span>
          , développeur web et application passionné par la création
          d'expériences numériques innovantes.
        </p>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#9CA3AF",
            lineHeight: "1.8",
            marginBottom: "30px",
            textAlign: "justify",
          }}
        >
          jdezij
        </p>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#9CA3AF",
            lineHeight: "1.8",
            textAlign: "justify",
          }}
        >
          llkl
        </p>

        {/* Parcours */}
        <div style={{ marginTop: "50px" }}>
          <h3
            style={{
              fontSize: "1.8rem",
              color: "#8B5CF6",
              fontWeight: "600",
              marginBottom: "25px",
              textShadow: "0 0 15px rgba(139, 92, 246, 0.6)",
            }}
          >
            📚 Mon Parcours
          </h3>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
            }}
          >
            {[
              "🎓 Formation en développement",
              "💻 Expérience avec Python, Java, Php, React, Html/Css/JavaScript",
              "🚀 Création de projets personnels",
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  fontSize: "1.1rem",
                  color: "#E5E7EB",
                  marginBottom: "15px",
                  padding: "15px",
                  background: "rgba(139, 92, 246, 0.1)",
                  borderLeft: "4px solid #8B5CF6",
                  borderRadius: "5px",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
