const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4"
];

function VideoFeed() {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        background: "black"
      }}
    >
      {videos.map((src, i) => (
        <VideoCard key={i} src={src} />
      ))}
    </div>
  );
}

function VideoCard({ src }: { src: string }) {
  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        scrollSnapAlign: "start"
      }}
    >
      {/* VIDEO */}
      <video
        src={src}
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />

      {/* RIGHT SIDE BUTTONS */}
      <div
        style={{
          position: "absolute",
          right: "10px",
          bottom: "100px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontSize: "24px"
        }}
      >
        ❤️  
        💬  
        ➡️  
      </div>

      {/* USERNAME + CAPTION */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "10px",
          color: "white"
        }}
      >
        <h4>@nugget</h4>
        <p>Cool STEM video 🚀</p>
      </div>

      {/* BOTTOM NAVBAR */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          color: "white",
          background: "rgba(0,0,0,0.5)"
        }}
      >
        🏠 🔍 ➕ 📩 👤
      </div>
    </div>
  );
}

export default VideoFeed;
