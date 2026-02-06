import { NavLink } from "react-router-dom";

function BottomNav() {
  const linkStyle: React.CSSProperties = {
    color: "white",
    fontSize: "24px",
    textDecoration: "none"
  };

  const activeStyle: React.CSSProperties = {
    color: "red"
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        padding: "12px",
        paddingBottom: "env(safe-area-inset-bottom)", // ✅ added
        background: "rgba(0,0,0,0.8)"
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        🏠
      </NavLink>

      <NavLink
        to="/upload"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        ⬆️
      </NavLink>

      <NavLink
        to="/profile"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        👤
      </NavLink>
    </div>
  );
}

export default BottomNav;
