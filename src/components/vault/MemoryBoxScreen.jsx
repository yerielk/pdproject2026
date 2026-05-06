import { useMemo, useState } from "react";
import { getObjectState } from "../../utils/objectState";
import ObjectGrid from "./ObjectGrid";
import LockedModal from "./LockedModal";
import CameraRevealModal from "./CameraRevealModal";
import GenericContentModal from "./GenericContentModal";
import { siteContent } from "../../data/siteContent";

function MemoryBoxScreen({ objects, onBackToInvitation }) {
  const [selectedObject, setSelectedObject] = useState(null);

  const objectStates = useMemo(() => {
    return objects.map(getObjectState);
  }, [objects]);

  function handleObjectClick(item) {
    setSelectedObject(item);
  }

  function closeModal() {
    setSelectedObject(null);
  }

  return (
    <>
      <div className="w-full max-w-5xl">
        <div className="paper-panel mx-auto rounded-[28px] border border-[var(--color-line)] bg-[var(--color-paper)] p-6 shadow-[var(--shadow-paper)] md:p-10">
          <div className="mb-8 flex flex-col gap-5 text-center md:flex-row md:items-start md:justify-between md:text-left">
            <div className="mx-auto max-w-2xl md:mx-0">
              <p className="english-label text-xs uppercase text-[var(--color-accent-soft)]">
                {siteContent.memoryBox.eyebrow}
              </p>

              <h2 className="editorial-title mt-3 text-3xl md:text-4xl">
                {siteContent.memoryBox.title}
              </h2>

              <div className="body-copy mt-3 text-sm md:text-base">
                {siteContent.memoryBox.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={onBackToInvitation}
              className="mx-auto rounded-[14px] border border-[var(--color-line)] bg-[#f8f4ed] px-4 py-3 text-sm text-[var(--color-text-muted)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] md:mx-0"
            >
              초대장 다시 보기
            </button>
          </div>

          <ObjectGrid items={objectStates} onSelect={handleObjectClick} />
        </div>
      </div>

      {selectedObject && !selectedObject.isUnlocked && (
        <LockedModal item={selectedObject} onClose={closeModal} />
      )}

      {selectedObject &&
        selectedObject.isUnlocked &&
        selectedObject.type === "camera" && (
          <CameraRevealModal item={selectedObject} onClose={closeModal} />
        )}

      {selectedObject &&
        selectedObject.isUnlocked &&
        selectedObject.type !== "camera" && (
          <GenericContentModal item={selectedObject} onClose={closeModal} />
        )}
    </>
  );
}

export default MemoryBoxScreen;