import { useRef } from "react";

function Upload() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      style={{
        height: "100dvh", // ✅ changed
        background: "linear-gradient(180deg,#0f0f0f,#1c1c1c)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}
    >
      {/* Upload Card */}
      <div
        style={{
          background: "#111",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          width: "320px",
          boxShadow: "0 0 30px rgba(255,255,255,0.1)"
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Upload 🎬</h1>
        <p style={{ opacity: 0.7, marginBottom: "30px" }}>
          Share your video with the world
        </p>

        {/* Hidden file input */}
        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          style={{ display: "none" }}
        />

        {/* Upload button */}
        <button
          onClick={handleClick}
          style={{
            background: "linear-gradient(45deg,#ff0050,#ff7a00)",
            border: "none",
            padding: "15px 25px",
            borderRadius: "30px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            width: "100%",
            fontWeight: "bold"
          }}
        >
          Select Video 📁
        </button>

        {/* Drag area */}
        <div
          style={{
            marginTop: "25px",
            padding: "20px",
            border: "2px dashed #333",
            borderRadius: "15px",
            opacity: 0.6
          }}
        >
          Drag & Drop Video Here
        </div>
      </div>
    </div>
  );
}

export default Upload;
