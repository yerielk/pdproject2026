import { motion } from "framer-motion";
import { siteContent } from "../../data/siteContent";

function InvitationAcceptedScreen({ onOpenBox }) {
  const { acceptedScreen } = siteContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="paper-panel paper-texture mx-auto max-w-2xl rounded-[24px] p-8 text-center shadow-[var(--shadow-paper)]"
    >
      <p className="english-label text-xs uppercase text-[var(--color-accent-soft)]">
        {acceptedScreen.eyebrow}
      </p>

      <h2 className="editorial-title mt-4 text-3xl md:text-4xl">
        {acceptedScreen.title}
      </h2>

      <div className="body-copy mx-auto mt-4 max-w-xl text-sm md:text-base">
        {acceptedScreen.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="mx-auto mt-10 w-full max-w-md rounded-[22px] border border-[var(--color-line)] bg-[#e9dfd0] p-8 shadow-[var(--shadow-soft)]">
        <div className="mx-auto h-36 rounded-[18px] border border-[var(--color-line)] bg-[#d8c4aa]" />
      </div>

      <button
        type="button"
        onClick={onOpenBox}
        className="primary-button mt-8 rounded-[14px] px-6 py-4 text-sm font-medium"
      >
        {acceptedScreen.openBoxButtonText}
      </button>
    </motion.div>
  );
}

export default InvitationAcceptedScreen;