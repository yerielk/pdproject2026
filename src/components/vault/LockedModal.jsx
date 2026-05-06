import ModalShell from "../common/ModalShell";
import { formatKoreanDateTime } from "../../utils/date";

function LockedModal({ item, onClose }) {
  return (
    <ModalShell onClose={onClose}>
      <p className="english-label text-xs uppercase text-[var(--color-accent-soft)]">
        Locked
      </p>
      <h3 className="editorial-title mt-3 text-2xl">{item.title}</h3>
      <p className="mt-4 body-copy text-sm md:text-base">
        {item.lockedMessage}
      </p>
      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
        공개 예정 시각: {formatKoreanDateTime(item.unlockAt)}
      </p>
    </ModalShell>
  );
}

export default LockedModal;