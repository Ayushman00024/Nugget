import { useState } from "react";

const videos: string[] = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/river.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/bee.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
];

function Home() {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        height: "100dvh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        background: "black"
      }}
    >
      {videos.map((v, i) => (
        <div
          key={i}
          style={{
            height: "100dvh",
            scrollSnapAlign: "start",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Nugget label */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 0,
              right: 0,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              zIndex: 10,
              textShadow: "0 0 10px rgba(0,0,0,0.7)"
            }}
          >
            Nugget
          </div>

          <video
            src={v}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onClick={() =>
              setZoomedIndex(zoomedIndex === i ? null : i)
            }
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              cursor: "pointer",
              transform:
                zoomedIndex === i ? "scale(1.8)" : "scale(1)",
              transition: "transform 0.3s ease"
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
