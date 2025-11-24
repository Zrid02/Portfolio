import { useState, useEffect } from "react";

function TypingText({ text, speed = 150 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <h1
      style={{
        fontSize: "4rem",
        color: "#FFFFFF",
        marginBottom: "20px",
        fontWeight: "800",
        textShadow:
          "0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)",
        letterSpacing: "3px",
        textTransform: "uppercase",
        minHeight: "80px",
      }}
    >
      {displayedText}
      <span
        style={{
          opacity: currentIndex < text.length ? 1 : 0,
          animation: "blink 1s infinite",
        }}
      >
        |
      </span>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </h1>
  );
}

export default TypingText;
