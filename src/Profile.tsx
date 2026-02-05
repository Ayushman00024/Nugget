import React from "react";

function Profile() {
  // random avatar each load
  const avatarId = Math.floor(Math.random() * 100);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#0f0f0f,#1a1a1a)",
        color: "white",
        padding: "20px",
        textAlign: "center"
      }}
    >
      {/* Avatar */}
      <img
        src={`https://randomuser.me/api/portraits/men/${avatarId}.jpg`}
        alt="avatar"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "3px solid #ff0050",
          objectFit: "cover",
          marginTop: "30px"
        }}
      />

      {/* Name */}
      <h2 style={{ marginTop: "15px" }}>@yourname</h2>

      {/* Bio */}
      <p style={{ opacity: 0.7 }}>
        🎬 Creator | 🚀 Building cool stuff
      </p>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "25px"
        }}
      >
        <div>
          <h3>12</h3>
          <p style={{ opacity: 0.6 }}>Videos</p>
        </div>

        <div>
          <h3>1.2K</h3>
          <p style={{ opacity: 0.6 }}>Followers</p>
        </div>

        <div>
          <h3>8.5K</h3>
          <p style={{ opacity: 0.6 }}>Likes</p>
        </div>
      </div>

      {/* Edit button */}
      <button
        style={{
          marginTop: "25px",
          padding: "12px 25px",
          borderRadius: "25px",
          border: "none",
          background: "linear-gradient(45deg,#ff0050,#ff7a00)",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Edit Profile ✏️
      </button>

      {/* Video grid placeholder */}
      <h3 style={{ marginTop: "40px" }}>Your Videos</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "6px",
          marginTop: "15px"
        }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            style={{
              background: "#222",
              height: "120px",
              borderRadius: "10px"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;
