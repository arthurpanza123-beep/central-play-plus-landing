const fs = require("fs");
const p = "src/App.jsx";
let s = fs.readFileSync(p, "utf8");

s = s.replace(
  /const WHATSAPP_URL = ["'`][^"'`]+["'`];/,
  'const WHATSAPP_URL = "https://wa.link/64pxb3";'
);

fs.writeFileSync(p, s);
console.log("WhatsApp link atualizado");
