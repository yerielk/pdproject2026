import { motion } from "framer-motion";
import { siteContent } from "../../data/siteContent";

function InvitationLetter({ onAccept }) {
  const { invitation } = siteContent;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 70, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="invitation-letter paper-texture absolute inset-x-0 top-0 z-30 mx-auto min-h-[390px] rounded-[18px] p-7 md:p-9"
    >
      <div className="mb-5 border-b border-dashed thin-divider pb-4">
        <p className="english-label text-xs uppercase text-[var(--color-accent-soft)]">
          {invitation.letter.label}
        </p>

        <h2 className="editorial-title mt-3 text-2xl md:text-3xl">
          {invitation.letter.title}
        </h2>
      </div>

      <p className="text-[15px] body-copy">{invitation.letter.body}</p>

      <div className="schedule-box mt-7 rounded-[14px] p-4 text-sm">
        <p className="font-medium text-[var(--color-text)]">
          {invitation.letter.scheduleTitle}
        </p>

        <div className="mt-2 body-copy">
          {invitation.letter.scheduleBody.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onAccept}
        className="primary-button mt-8 w-full rounded-[14px] px-5 py-4 text-sm font-medium"
      >
        {invitation.acceptButtonText}
      </button>
    </motion.div>
  );
}

export default InvitationLetter;