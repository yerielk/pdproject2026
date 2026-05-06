function ObjectCard({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="object-card text-left"
    >
      <div className="object-card__thumb">
        <div className={`object-symbol object-symbol--${item.type}`} />
      </div>

      <div className="mt-4">
        <p className="english-label text-[11px] uppercase text-[var(--color-accent-soft)]">
          {item.label}
        </p>
        <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
        <p className="mt-2 text-sm body-copy">
          {item.isUnlocked ? "열람 가능합니다" : "아직 잠겨 있습니다"}
        </p>
      </div>
    </button>
  );
}

export default ObjectCard;