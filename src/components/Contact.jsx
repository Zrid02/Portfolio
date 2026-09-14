import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [consent, setConsent] = useState(false); // État RGPD
  const [isSending, setIsSending] = useState(false); // État chargement

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consent) {
      alert(
        "Veuillez accepter la politique de confidentialité (RGPD) pour envoyer ce message."
      );
      return;
    }

    setIsSending(true);

    const YOUR_EMAIL = "nessim.rabhi1402@gmail.com";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nouveau message de ${formData.name} (Portfolio)`, // Sujet du mail
        }),
      });

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        alert("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
        setConsent(false);
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur de connexion. Vérifiez votre internet.");
    } finally {
      setIsSending(false);
    }
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
        <p style={{ fontSize: "1.2rem", color: "#9CA3AF", marginTop: "20px" }}>
          N'hésitez pas à me contacter pour toute opportunité !
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
        <div style={{ marginBottom: "20px" }}>
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

        {/* Checkbox RGPD */}
        <div
          style={{
            marginBottom: "30px",
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <input
            type="checkbox"
            id="rgpdConsent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            style={{
              marginTop: "5px",
              cursor: "pointer",
              accentColor: "#8B5CF6",
              width: "18px",
              height: "18px",
            }}
          />
          <label
            htmlFor="rgpdConsent"
            style={{
              color: "#9CA3AF",
              fontSize: "0.9rem",
              cursor: "pointer",
              lineHeight: "1.4",
            }}
          >
            J'accepte que mes données soient traitées pour me recontacter.
          </label>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          disabled={isSending}
          onMouseEnter={(e) => {
            if (!isSending) {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 10px 30px rgba(139, 92, 246, 0.6)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isSending) {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 20px rgba(139, 92, 246, 0.4)";
            }
          }}
          style={{
            width: "100%",
            padding: "18px",
            background: isSending
              ? "#6B7280"
              : "linear-gradient(135deg, #8B5CF6, #6D28D9)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: isSending ? "not-allowed" : "pointer",
            boxShadow: "0 4px 20px rgba(139, 92, 246, 0.4)",
            transition: "all 0.3s",
            letterSpacing: "1px",
            textTransform: "uppercase",
            opacity: isSending ? 0.7 : 1,
          }}
        >
          {isSending ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      {/* Réseaux sociaux (inchangé) */}
      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <h3
          style={{ fontSize: "1.5rem", color: "#8B5CF6", marginBottom: "20px" }}
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
                color: "#E5E7EB",
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
