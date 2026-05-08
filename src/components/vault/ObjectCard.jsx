function ThumbSymbol({ type }) {
  if (type === "camera") {
    return <div className="object-symbol object-symbol--camera" />;
  }

  if (type === "album") {
    return <div className="object-symbol object-symbol--album" />;
  }

  if (type === "gift") {
    return <div className="object-symbol object-symbol--gift" />;
  }

  if (type === "mailbox" || type === "letter") {
    return (
      <svg
        viewBox="0 0 120 120"
        className="h-24 w-24"
        aria-hidden="true"
      >
        <g>
          <path
            d="M60 46 L60 96"
            stroke="#6f7c55"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M60 70 C48 62, 40 64, 34 76 C44 78, 53 76, 60 70 Z"
            fill="#87956a"
          />
          <path
            d="M60 80 C72 72, 80 74, 86 86 C76 88, 67 86, 60 80 Z"
            fill="#87956a"
          />

          <path
            d="M60 42
               C50 30, 42 28, 38 36
               C34 44, 40 50, 50 50
               C44 42, 46 34, 54 32
               C52 40, 56 46, 60 48
               Z"
            fill="#8a3f43"
          />
          <path
            d="M60 42
               C70 30, 78 28, 82 36
               C86 44, 80 50, 70 50
               C76 42, 74 34, 66 32
               C68 40, 64 46, 60 48
               Z"
            fill="#8a3f43"
          />
          <path
            d="M60 28
               C52 22, 48 16, 52 10
               C58 12, 60 18, 60 24
               C60 18, 62 12, 68 10
               C72 16, 68 22, 60 28
               Z"
            fill="#9a4a4f"
          />
          <path
            d="M46 30
               C38 28, 32 24, 32 18
               C40 18, 46 22, 50 28
               Z"
            fill="#a55459"
          />
          <path
            d="M74 30
               C82 28, 88 24, 88 18
               C80 18, 74 22, 70 28
               Z"
            fill="#a55459"
          />
          <circle cx="60" cy="38" r="8" fill="#6f2f2a" />
        </g>
      </svg>
    );
  }

  return <div className="object-symbol object-symbol--album" />;
}

function ObjectCard({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="object-card text-left"
    >
      <div className="object-card__thumb">
        <ThumbSymbol type={item.type} />
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