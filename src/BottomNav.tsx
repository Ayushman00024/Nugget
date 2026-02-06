import { NavLink } from "react-router-dom";

function BottomNav() {
  const iconStyle: React.CSSProperties = {
    width: "26px",
    height: "26px",
    stroke: "white",
    strokeWidth: 2,
    fill: "none",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "12px 0",
        paddingBottom: "env(safe-area-inset-bottom)",
        background: "black",
        borderTop: "1px solid #222",
        zIndex: 1000,
      }}
    >
      {/* Home */}
      <NavLink to="/">
        {({ isActive }) => (
          <svg
            viewBox="0 0 24 24"
            style={{
              ...iconStyle,
              opacity: isActive ? 1 : 0.6,
              transform: isActive ? "scale(1.1)" : "scale(1)",
              transition: "0.15s",
            }}
          >
            <path d="M3 11L12 4l9 7" />
            <path d="M5 10v10h14V10" />
          </svg>
        )}
      </NavLink>

      {/* Upload (+) */}
      <NavLink to="/upload">
        {({ isActive }) => (
          <svg
            viewBox="0 0 24 24"
            style={{
              ...iconStyle,
              opacity: isActive ? 1 : 0.6,
              transform: isActive ? "scale(1.1)" : "scale(1)",
              transition: "0.15s",
            }}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        )}
      </NavLink>

      {/* Profile */}
      <NavLink to="/profile">
        {({ isActive }) => (
          <svg
            viewBox="0 0 24 24"
            style={{
              ...iconStyle,
              opacity: isActive ? 1 : 0.6,
              transform: isActive ? "scale(1.1)" : "scale(1)",
              transition: "0.15s",
            }}
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c2-4 14-4 16 0" />
          </svg>
        )}
      </NavLink>
    </div>
  );
}

export default BottomNav;
