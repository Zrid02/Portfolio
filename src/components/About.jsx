function About() {
  const nomFichierCV = "CV-Nessim-Rabhi.pdf";

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px 5%",
        position: "relative",
        zIndex: 1,
      }}
    >
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
          , développeur web et application. Passionné par l'informatique, j'aime
          écrire du code à partir de mes idées. Toujours curieux et rigoureux,
          je cherche constamment à apprendre et progresser.
        </p>

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
              "🎓 Formation en développement web et application, base de données et réseau a l'IUT de Lens",
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

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={import.meta.env.BASE_URL + nomFichierCV}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 10px 40px rgba(139, 92, 246, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(139, 92, 246, 0.4)";
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
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            👁️ Voir mon CV
          </a>

          <a
            href={import.meta.env.BASE_URL + nomFichierCV}
            download={nomFichierCV}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(139, 92, 246, 0.2)";
              e.currentTarget.style.borderColor = "#8B5CF6";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(139, 92, 246, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "#8B5CF6";
              e.currentTarget.style.boxShadow = "none";
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
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            📥 Télécharger le CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
