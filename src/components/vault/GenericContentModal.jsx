import ModalShell from "../common/ModalShell";

function GenericContentModal({ item, onClose }) {
  return (
    <ModalShell onClose={onClose}>
      <p className="english-label text-xs uppercase text-[var(--color-accent-soft)]">
        {item.label}
      </p>
      <h3 className="editorial-title mt-3 text-2xl">{item.contentTitle}</h3>
      <div className="mt-5 rounded-[16px] border border-[var(--color-line)] bg-[#f4eee4] p-5">
        <p className="body-copy whitespace-pre-line text-sm md:text-base">
          {item.contentBody}
        </p>
      </div>
    </ModalShell>
  );
}

export default GenericContentModal;