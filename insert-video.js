const fs = require("fs");
const p = "src/App.jsx";
let s = fs.readFileSync(p, "utf8");

const video = `<video
  className="w-full h-full object-cover rounded-3xl"
  src="/assets/video-site.webm"
  autoPlay
  muted
  loop
  playsInline
/>`;

if (/<img[^>]+prototipo\.webp[^>]*>/s.test(s)) {
  s = s.replace(/<img[^>]+prototipo\.webp[^>]*>/s, video);
} else if (/<img[^>]+bot-phone[^>]*>/s.test(s)) {
  s = s.replace(/<img[^>]+bot-phone[^>]*>/s, video);
} else {
  console.error("Nao encontrei automaticamente o espaco do video.");
  process.exit(1);
}

fs.writeFileSync(p, s);
console.log("Video inserido.");
