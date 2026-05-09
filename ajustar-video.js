const fs = require("fs");
const p = "src/App.jsx";
let s = fs.readFileSync(p, "utf8");

s = s.replace(/<div className="player-controls[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, "</div>\n          </div>");
s = s.replace(/<button className="play-button"[\s\S]*?<\/button>/, "");

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
                  zIndex: 1
                }}
                src="/assets/video-site.webm"
                autoPlay
                muted
                loop
                playsInline
                controls
              />`;

s = s.replace(/<video[\s\S]*?\/>/, novoVideo);

fs.writeFileSync(p, s);
console.log("video maior, controles fake removidos e controles reais ativados");
