import { useMemo, useState } from "react";
import ModalShell from "../common/ModalShell";
import MediaViewerModal from "../common/MediaViewerModal";
import { albumEntries } from "../../data/albumEntries";
import { chunkArray } from "../../utils/array";

function AlbumModal({ item, onClose }) {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const pages = useMemo(() => chunkArray(albumEntries, 6), []);

  return (
    <>
      <ModalShell onClose={onClose}>
        <p className="english-label text-xs uppercase text-[var(--color-accent-soft)]">
          {item.label}
        </p>

        <h3 className="editorial-title mt-3 text-2xl">{item.title}</h3>

        <p className="mt-3 body-copy text-sm">
          페이지를 옆으로 넘기며 사진과 영상을 감상해보세요.
        </p>

        <div className="mt-6 overflow-x-auto snap-x snap-mandatory">
          <div className="flex w-full">
            {pages.map((page, pageIndex) => (
              <div
                key={`album-page-${pageIndex}`}
                className="min-w-full snap-center px-1"
              >
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {page.map((media) => (
                    <button
                      key={media.id}
                      type="button"
                      onClick={() => setSelectedMedia(media)}
                      className="rounded-[16px] border border-[var(--color-line)] bg-[#f8f4ed] p-3 text-left transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                    >
                      <div className="overflow-hidden rounded-[12px] border border-[var(--color-line)] bg-[#f3ede2]">
                        {media.type === "video" ? (
                          <div className="relative">
                            <img
                              src={media.poster}
                              alt={media.title}
                              className="h-32 w-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-white">
                              ▶
                            </div>
                          </div>
                        ) : (
                          <img
                            src={media.src}
                            alt={media.title}
                            className="h-32 w-full object-cover"
                          />
                        )}
                      </div>

                      <h4 className="mt-3 text-sm font-medium">{media.title}</h4>

                    </button>
                  ))}
                </div>

                <p className="mt-4 text-center text-xs text-[var(--color-text-muted)]">
                  {pageIndex + 1} / {pages.length}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ModalShell>

      {selectedMedia && (
        <MediaViewerModal
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </>
  );
}

export default AlbumModal;