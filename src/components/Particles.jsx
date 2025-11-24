import { useEffect } from "react";

function Particles() {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Position aléatoire
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.animationDuration = Math.random() * 3 + 2 + "s";
      particle.style.opacity = Math.random() * 0.5 + 0.2;
      particle.style.width = Math.random() * 4 + 2 + "px";
      particle.style.height = particle.style.width;

      document.querySelector(".particles-container").appendChild(particle);

      // Supprime après l'animation
      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    // Crée une particule toutes les 200ms
    const interval = setInterval(createParticle, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="particles-container"></div>
      <style>{`
        .particles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          top: -10px;
          background: radial-gradient(circle, #8B5CF6, transparent);
          border-radius: 50%;
          animation: fall linear forwards;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.8);
        }

        @keyframes fall {
          to {
            transform: translateY(100vh) translateX(${
              Math.random() * 100 - 50
            }px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Particles;
