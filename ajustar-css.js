const fs = require("fs");
const p = "src/styles.css";
let s = fs.readFileSync(p, "utf8");

s += `

.player-controls-below {
  position: relative !important;
  left: auto !important;
  right: auto !important;
  bottom: auto !important;
  width: min(82%, 520px) !important;
  margin: 14px auto 0 !important;
  z-index: 5 !important;
}

.play-button {
  display: none !important;
}
`;

fs.writeFileSync(p, s);
console.log("css dos controles atualizado");
