import ModalShell from "./ModalShell";

function MediaViewerModal({ media, onClose }) {
  if (!media) return null;

  return (
    <ModalShell onClose={onClose}>
      <p className="english-label text-xs uppercase text-[var(--color-accent-soft)]">
        {media.type === "video" ? "Video" : "Photo"}
      </p>

      <h3 className="editorial-title mt-3 text-2xl">{media.title}</h3>

      <div className="mt-5 overflow-hidden rounded-[16px] border border-[var(--color-line)] bg-[#f8f5ef] p-3">
        {media.type === "video" ? (
          <video
            src={media.src}
            poster={media.poster}
            controls
            autoPlay
            playsInline
            className="w-full rounded-[12px]"
          />
        ) : (
          <img
            src={media.src}
            alt={media.title}
            className="w-full rounded-[12px]"
          />
        )}
      </div>

      <p className="mt-4 body-copy text-sm whitespace-pre-line">
        {media.caption}
      </p>
    </ModalShell>
  );
}

export default MediaViewerModal;