const fs = require("fs");
const p = "src/App.jsx";
let s = fs.readFileSync(p, "utf8");

s = s.replace(
  'src="/assets/video-site.webm"',
  'src="https://raw.githubusercontent.com/arthurpanza123-beep/public/main/video-site.webm"'
);

fs.writeFileSync(p, s);
console.log("video apontando para GitHub raw");
