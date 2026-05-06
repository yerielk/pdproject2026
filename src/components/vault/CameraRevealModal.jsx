import { useEffect, useMemo, useState } from "react";
import ModalShell from "../common/ModalShell";

function CameraRevealModal({ item, onClose }) {
  const [isPrinting, setIsPrinting] = useState(false);
  const [progress, setProgress] = useState(0);

  const duration = item.developDurationMs ?? 20000;

  useEffect(() => {
    if (!isPrinting) return;

    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(elapsed / duration, 1);

      setProgress(nextProgress);

      if (nextProgress >= 1) {
        clearInterval(timer);
        setIsPrinting(false);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [isPrinting, duration]);

  const isFinished = useMemo(() => progress >= 1, [progress]);

  function handlePrint() {
    setProgress(0);
    setIsPrinting(true);
  }

  return (
    <ModalShell onClose={onClose}>
      <p className="english-label text-xs uppercase text-[var(--color-accent-soft)]">
        {item.label}
      </p>

      <h3 className="editorial-title mt-3 text-2xl">{item.revealTitle}</h3>

      <p className="mt-3 body-copy text-sm">{item.description}</p>

      <div className="mt-6 flex flex-col items-center">
        <div className="polaroid-frame">
          <div className="polaroid-image-wrap">
            <div className="polaroid-photo-area">
              {item.photoSrc ? (
                <img
                  src={item.photoSrc}
                  alt={item.revealTitle}
                  className="polaroid-image"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-[var(--color-text-muted)]">
                  /public/imgs/polaroid-surprise.jpg 파일을 넣어주세요
                </div>
              )}

              {!isFinished && (
                <div
                  className="polaroid-overlay"
                  style={{
                    opacity: 1 - progress * 0.95,
                    filter: `blur(${Math.max(0, 8 - progress * 8)}px)`,
                  }}
                />
              )}
            </div>
          </div>

          <div className="mt-5 text-center">
            {!isPrinting && !isFinished ? (
              <button
                type="button"
                onClick={handlePrint}
                className="primary-button rounded-[14px] px-5 py-3 text-sm font-medium"
              >
                인화하기
              </button>
            ) : isPrinting && !isFinished ? (
              <p className="text-sm text-[var(--color-text-muted)]">
                사진이 천천히 인화되고 있어요...
              </p>
            ) : (
              <p className="text-sm text-[var(--color-text-muted)]">
                사진 인화가 완료되었어요.
              </p>
            )}
          </div>
        </div>

        {isFinished && (
          <div className="mt-6 w-full rounded-[16px] border border-[var(--color-line)] bg-[#f4eee4] p-5">
            <h4 className="text-base font-medium text-[var(--color-text)]">
              서프라이즈 설명
            </h4>

            <p className="mt-3 body-copy whitespace-pre-line text-sm">
              {item.revealDescription}
            </p>
          </div>
        )}
      </div>
    </ModalShell>
  );
}

export default CameraRevealModal;