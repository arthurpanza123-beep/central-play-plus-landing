const fs = require("fs");
const p = "src/App.jsx";
let s = fs.readFileSync(p, "utf8");

// Remove botão play fake
s = s.replace(/<button className="play-button"[\s\S]*?<\/button>/g, "");

// Remove controles fake
s = s.replace(/<div className="player-controls[\s\S]*?<Maximize2 size=\{17\} \/>\s*<\/div>/g, "");

// Ajusta vídeo
const novoVideo = `<video
                className="hero-video-real"
                style={{
                  position: "absolute",
                  left: "1%",
                  top: "1%",
                  width: "98%",
                  height: "96%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  zIndex: 3
                }}
                src="/assets/video-site.webm"
                autoPlay
                muted
                loop
                playsInline
                controls
              />`;

s = s.replace(/<video[\s\S]*?<\/video>|<video[\s\S]*?\/>/g, novoVideo);

fs.writeFileSync(p, s);
console.log("limpeza aplicada");
