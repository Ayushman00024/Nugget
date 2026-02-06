function Profile() {
  const avatarId = Math.floor(Math.random() * 100);

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "black",
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
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          border: "2px solid white",
          objectFit: "cover",
          marginTop: "30px"
        }}
      />

      {/* Name */}
      <h2 style={{ marginTop: "15px" }}>@yourname</h2>

      {/* Bio */}
      <p style={{ opacity: 0.6 }}>
        Creator • Building cool stuff
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
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid white",
          background: "black",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
          width: "100%"
        }}
      >
        Edit Profile
      </button>

      {/* Video grid */}
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
              background: "#111",
              height: "120px",
              borderRadius: "6px",
              border: "1px solid #222"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;
