import { useState } from "react";
import ModalShell from "../common/ModalShell";
import { lettersData } from "../../data/lettersData";

function MailboxModal({ item, onClose }) {
  const [isMailboxOpened, setIsMailboxOpened] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const letters = lettersData[item.recipientKey] ?? [];

  return (
    <ModalShell onClose={onClose}>
      <p className="english-label text-xs uppercase text-[var(--color-accent-soft)]">
        {item.label}
      </p>

      <h3 className="editorial-title mt-3 text-2xl">{item.title}</h3>

      <p className="mt-3 body-copy text-sm">
        우편함을 열고 준비된 편지를 확인해보세요.
      </p>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setIsMailboxOpened((prev) => !prev)}
          className="mx-auto rounded-[18px] border border-[var(--color-line)] bg-[#ece2d3] px-8 py-10 shadow-[var(--shadow-soft)]"
        >
          <div className="text-sm text-[var(--color-text-muted)]">
            우편함 열기
          </div>
        </button>
      </div>

      {isMailboxOpened && (
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {letters.map((letter) => (
            <button
              key={letter.id}
              type="button"
              onClick={() => setSelectedLetter(letter)}
              className="rounded-[16px] border border-[var(--color-line)] bg-[#f8f4ed] p-4 text-left transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              <p className="english-label text-[11px] uppercase text-[var(--color-accent-soft)]">
                {letter.label}
              </p>
              <h4 className="mt-2 font-medium">{letter.author}</h4>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                편지 열기
              </p>
            </button>
          ))}
        </div>
      )}

      {selectedLetter && (
        <div className="letter-paper mt-6 rounded-[18px] border border-[var(--color-line)] p-6">
          <p className="english-label text-xs uppercase text-[var(--color-accent-soft)]">
            {selectedLetter.label}
          </p>

          <h4 className="editorial-title mt-3 text-xl">
            {selectedLetter.title}
          </h4>

          <p className="mt-5 whitespace-pre-line body-copy text-sm md:text-base">
            {selectedLetter.body}
          </p>
        </div>
      )}
    </ModalShell>
  );
}

export default MailboxModal;