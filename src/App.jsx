import { motion } from "framer-motion";
import { Play, Volume2, Maximize2, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5500000000000";
const WHATSAPP_MESSAGE =
  "Ol\u00e1! Vim pelo site da Central Play Plus e quero entender como funciona.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function WhatsappButton({ compact = false }) {
  return (
    <motion.a
      className={`whatsapp-button ${compact ? "compact" : ""}`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircle size={compact ? 18 : 22} />
      <span>FALAR NO WHATSAPP</span>
    </motion.a>
  );
}

function VideoHero() {
  return (
    <section className="hero" id="top">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="reference-kicker">
          <span className="ping-dot" />
          <span>Assista antes de escolher</span>
        </div>
        <h1>
          <span>Entenda como</span>
          <span>funciona a</span>
          <strong>Central Play Plus</strong>
        </h1>
        <p>
          Assista ao v&iacute;deo e descubra a <b>melhor op&ccedil;&atilde;o</b> para voc&ecirc;.
        </p>
      </motion.div>

      <motion.div
        className="video-stage"
        initial={{ opacity: 0, scale: 0.94, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      >
        <motion.div
          className="device-showcase"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="device-video" aria-label="Placeholder do v&iacute;deo explicativo">
            <div className="player-shell">
              <div className="screen-art">
                <video
  className="w-full h-full object-cover rounded-3xl"
  src="/assets/video-site.webm"
  autoPlay
  muted
  loop
  playsInline
/>
                <div className="screen-overlay" />
              </div>

              <button className="play-button" aria-label="Reproduzir v&iacute;deo">
                <Play size={42} fill="currentColor" />
              </button>

              <div className="player-controls" aria-hidden="true">
                <span>00:00</span>
                <div className="progress-track">
                  <span className="progress-fill" />
                </div>
                <Volume2 size={17} />
                <Maximize2 size={17} />
              </div>
            </div>
          </div>

          <img
            className="device-frame"
            src="/assets/bot-phone-mobile-keyed.png"
            alt="Mascote Central Play Plus segurando o v&iacute;deo"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-cta"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
      >
        <WhatsappButton />
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <div className="page-bg" />
      <VideoHero />
    </main>
  );
}
