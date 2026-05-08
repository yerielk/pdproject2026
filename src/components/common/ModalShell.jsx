function ModalShell({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(26,20,15,0.45)] px-4 py-6">
      <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col rounded-[24px] border border-[var(--color-line)] bg-[var(--color-paper)] shadow-[var(--shadow-paper)]">
        <div className="sticky top-0 z-10 flex justify-end rounded-t-[24px] bg-[var(--color-paper)] px-5 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[var(--color-line)] bg-[#f8f4ed] px-3 py-1 text-sm text-[var(--color-text-muted)]"
          >
            닫기
          </button>
        </div>

        <div className="overflow-y-auto px-6 pb-6 pt-2 md:px-8 md:pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalShell;