import { motion, AnimatePresence } from "framer-motion";
import InvitationLetter from "./InvitationLetter";
import { siteContent } from "../../data/siteContent";

function InvitationEnvelope({ isOpen, onOpen, onAccept }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-xl"
    >
      <div className="mb-8 text-center">
        <p className="english-label mx-auto mb-4 inline-flex rounded-full px-4 py-2 text-sm date-chip">
          {siteContent.invitation.badgeText}
        </p>

        <h1 className="editorial-title text-3xl leading-tight md:text-5xl">
          {siteContent.invitation.heroTitle.line1}
          <br />
          {siteContent.invitation.heroTitle.line2}
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm md:text-base body-copy">
          {siteContent.invitation.heroDescription.line1}
          <br />
          {siteContent.invitation.heroDescription.line2}
        </p>

        <p className="mx-auto mt-5 max-w-md text-center text-xs leading-6 text-[var(--color-text-muted)] md:text-sm">
          {siteContent.invitation.heroNote.line1}
          <br />
          {siteContent.invitation.heroNote.line2}
        </p>
      </div>

      <div className="relative mx-auto h-[420px] max-w-md md:h-[470px]">
        <motion.div
          animate={isOpen ? { rotateX: -10, y: -16 } : { rotateX: 0, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="invitation-envelope absolute inset-x-0 bottom-0 z-10 mx-auto h-[300px] rounded-[20px] md:h-[330px]"
        >
          <div className="absolute inset-0 rounded-[20px] paper-texture" />

          <svg
            className="absolute left-0 top-0 z-10 h-[160px] w-full"
            viewBox="0 0 400 160"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 18 14 L 200 112 L 382 14"
              fill="none"
              stroke="var(--color-line)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <button
            type="button"
            onClick={onOpen}
            disabled={isOpen}
            className="seal-button absolute left-1/2 top-[84px] z-20 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full text-[#f7f2ea] transition hover:scale-[1.02] active:scale-[0.98] disabled:cursor-default disabled:opacity-90 disabled:hover:scale-100"
            aria-label="편지 열기"
          >
            <span className="seal-mark">Y&N</span>
          </button>

          <p className="absolute bottom-8 left-0 right-0 text-center text-sm subtle-note">
            {siteContent.invitation.sealGuideText}
          </p>
        </motion.div>

        <AnimatePresence>
          {isOpen && <InvitationLetter onAccept={onAccept} />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default InvitationEnvelope;