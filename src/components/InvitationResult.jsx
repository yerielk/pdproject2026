import { motion } from "framer-motion";
import { invitationContent } from "../data/invitationContent";

function InvitationResult({ isRevealed, onEnterSite }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="secondary-panel mx-auto mt-8 max-w-md rounded-[18px] p-6 text-center"
    >
      {!isRevealed ? (
        <>
          <p className="english-label text-xs uppercase text-[#8a6e52]">
            Invitation Accepted
          </p>
          <h3 className="editorial-title mt-3 text-xl">
            {invitationContent.lockedMessage.title}
          </h3>
          <p className="mt-3 text-sm body-copy">
            {invitationContent.lockedMessage.body}
          </p>
        </>
      ) : (
        <>
          <p className="english-label text-xs uppercase text-[#8a6e52]">
            Welcome
          </p>
          <h3 className="editorial-title mt-3 text-xl">
            {invitationContent.revealedMessage.title}
          </h3>
          <p className="mt-3 text-sm body-copy">
            {invitationContent.revealedMessage.body}
          </p>

          <button
            type="button"
            onClick={onEnterSite}
            className="primary-button mt-6 rounded-[14px] px-5 py-3 text-sm font-medium"
          >
            입장하기
          </button>
        </>
      )}
    </motion.div>
  );
}

export default InvitationResult;