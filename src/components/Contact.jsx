import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé:", formData);
    alert("Message envoyé ! (fonctionnalité à configurer)");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px 5%",
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
          💬 ME CONTACTER
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
          N'hésitez pas à me contacter pour vos projets
        </p>
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          width: "100%",
          background: "rgba(139, 92, 246, 0.05)",
          border: "2px solid rgba(139, 92, 246, 0.3)",
          borderRadius: "15px",
          padding: "40px",
          boxShadow: "0 10px 50px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Nom */}
        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              display: "block",
              color: "#E5E7EB",
              fontSize: "1.1rem",
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
            Nom
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "15px",
              background: "rgba(0, 0, 0, 0.5)",
              border: "2px solid rgba(139, 92, 246, 0.3)",
              borderRadius: "8px",
              color: "#E5E7EB",
              fontSize: "1rem",
              transition: "all 0.3s",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#8B5CF6";
              e.target.style.boxShadow = "0 0 15px rgba(139, 92, 246, 0.5)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(139, 92, 246, 0.3)";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              display: "block",
              color: "#E5E7EB",
              fontSize: "1.1rem",
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "15px",
              background: "rgba(0, 0, 0, 0.5)",
              border: "2px solid rgba(139, 92, 246, 0.3)",
              borderRadius: "8px",
              color: "#E5E7EB",
              fontSize: "1rem",
              transition: "all 0.3s",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#8B5CF6";
              e.target.style.boxShadow = "0 0 15px rgba(139, 92, 246, 0.5)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(139, 92, 246, 0.3)";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        {/* Message */}
        <div style={{ marginBottom: "30px" }}>
          <label
            style={{
              display: "block",
              color: "#E5E7EB",
              fontSize: "1.1rem",
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{
              width: "100%",
              padding: "15px",
              background: "rgba(0, 0, 0, 0.5)",
              border: "2px solid rgba(139, 92, 246, 0.3)",
              borderRadius: "8px",
              color: "#E5E7EB",
              fontSize: "1rem",
              resize: "vertical",
              transition: "all 0.3s",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#8B5CF6";
              e.target.style.boxShadow = "0 0 15px rgba(139, 92, 246, 0.5)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(139, 92, 246, 0.3)";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        {/* Bouton */}
        <button
          type="submit"
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 10px 30px rgba(139, 92, 246, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 20px rgba(139, 92, 246, 0.4)";
          }}
          style={{
            width: "100%",
            padding: "18px",
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
          📤 Envoyer
        </button>
      </form>

      {/* Réseaux sociaux */}
      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            color: "#8B5CF6",
            marginBottom: "20px",
          }}
        >
          Ou retrouvez-moi sur
        </h3>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          {[
            { name: "GitHub", icon: "🐙", link: "https://github.com/Zrid02" },
            {
              name: "LinkedIn",
              icon: "💼",
              link: "https://www.linkedin.com/in/nessim-rabhi",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px) scale(1.1)";
                e.currentTarget.style.boxShadow =
                  "0 5px 20px rgba(139, 92, 246, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: "60px",
                background: "rgba(139, 92, 246, 0.1)",
                border: "2px solid rgba(139, 92, 246, 0.3)",
                borderRadius: "50%",
                fontSize: "1.8rem",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
