import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        padding: "20px 5%",
        background: "rgba(10, 10, 10, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "2px solid rgba(139, 92, 246, 0.3)",
        boxShadow: "0 4px 30px rgba(139, 92, 246, 0.2)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      {/* Logo avec effet glow */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#8B5CF6",
            textShadow:
              "0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4)",
            letterSpacing: "2px",
          }}
        >
          NR Portfolio
        </div>
      </Link>

      {/* Navigation */}
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
          }}
        >
          {[
            { name: "Accueil", path: "/accueil" },
            { name: "À Propos", path: "/a-propos" },
            { name: "Projets", path: "/projets" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onMouseEnter={(e) => {
                  e.target.style.color = "#8B5CF6";
                  e.target.style.textShadow =
                    "0 0 10px rgba(139, 92, 246, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#E5E7EB";
                  e.target.style.textShadow = "none";
                }}
                style={{
                  color: "#E5E7EB",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "all 0.3s",
                  letterSpacing: "1px",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
