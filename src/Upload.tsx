import { useRef } from "react";

function Upload() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      style={{
        height: "100dvh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}
    >
      {/* Upload Card */}
      <div
        style={{
          background: "black",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          width: "320px",
          border: "1px solid #222"
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Upload</h1>

        <p style={{ opacity: 0.6, marginBottom: "30px" }}>
          Share your video
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
            background: "white",
            color: "black",
            border: "none",
            padding: "14px",
            borderRadius: "8px",
            fontSize: "15px",
            cursor: "pointer",
            width: "100%",
            fontWeight: "600"
          }}
        >
          Select Video
        </button>

        {/* Drag area */}
        <div
          style={{
            marginTop: "25px",
            padding: "20px",
            border: "1px dashed #333",
            borderRadius: "10px",
            opacity: 0.6
          }}
        >
          Drag & Drop
        </div>
      </div>
    </div>
  );
}

export default Upload;
