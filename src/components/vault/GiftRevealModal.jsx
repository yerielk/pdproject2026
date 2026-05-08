import { useState } from "react";
import ModalShell from "../common/ModalShell";
import { giftsData } from "../../data/giftsData";

function GiftRevealModal({ item, onClose }) {
  const [isBoxOpened, setIsBoxOpened] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState(null);

  const selectedGift = selectedRecipient
    ? giftsData[selectedRecipient]
    : null;

  return (
    <ModalShell onClose={onClose}>
      <p className="english-label text-xs uppercase text-[var(--color-accent-soft)]">
        {item.label}
      </p>

      <h3 className="editorial-title mt-3 text-2xl">{item.title}</h3>

      <p className="mt-3 body-copy text-sm">
        상자를 열고 준비한 선물을 확인해보세요.
      </p>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setIsBoxOpened((prev) => !prev)}
          className="mx-auto rounded-[18px] border border-[var(--color-line)] bg-[#d8c1a2] px-8 py-10 shadow-[var(--shadow-soft)]"
        >
          <div className="text-sm text-[var(--color-text-muted)]">
            상자 열기
          </div>
        </button>
      </div>

      {isBoxOpened && (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setSelectedRecipient("dad")}
            className="primary-button rounded-[14px] px-5 py-3 text-sm"
          >
            For Dad
          </button>

          <button
            type="button"
            onClick={() => setSelectedRecipient("mom")}
            className="primary-button rounded-[14px] px-5 py-3 text-sm"
          >
            For Mom
          </button>
        </div>
      )}

      {selectedGift && (
        <div className="mt-6 rounded-[18px] border border-[var(--color-line)] bg-[#f8f4ed] p-5">
          <img
            src={selectedGift.imageSrc}
            alt={selectedGift.title}
            className="w-full rounded-[14px] border border-[var(--color-line)]"
          />

          <h4 className="mt-4 text-lg font-medium">{selectedGift.title}</h4>

          <p className="mt-3 body-copy whitespace-pre-line text-sm">
            {selectedGift.description}
          </p>
        </div>
      )}
    </ModalShell>
  );
}

export default GiftRevealModal;