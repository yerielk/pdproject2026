function ModalShell({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(26,20,15,0.45)] px-5 py-8">
      <div className="relative w-full max-w-2xl rounded-[24px] border border-[var(--color-line)] bg-[var(--color-paper)] p-6 shadow-[var(--shadow-paper)] md:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-sm text-[var(--color-text-muted)]"
        >
          닫기
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalShell;