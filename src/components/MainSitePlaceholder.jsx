import { Gift, Heart, Images } from "lucide-react";

function MainSitePlaceholder() {
  return (
    <main className="min-h-screen bg-[#fff7ee] px-5 py-12 text-[#3f3028]">
      <section className="mx-auto max-w-4xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-sm text-rose-700 shadow-sm">
          2026.05.08 공개
        </p>

        <h1 className="text-3xl font-semibold md:text-5xl">
          엄마 아빠를 위한 작은 공간
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#7b655c] md:text-base">
          여기에 가족 앨범, 편지, 생일 선물 공개 섹션이 들어갈 예정이에요.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-white/80 p-6 shadow-md">
            <Images className="mx-auto mb-4 text-rose-500" />
            <h2 className="font-semibold">가족 앨범</h2>
            <p className="mt-2 text-sm text-[#7b655c]">
              우리 가족 사진들이 들어갈 자리
            </p>
          </div>

          <div className="rounded-3xl bg-white/80 p-6 shadow-md">
            <Heart className="mx-auto mb-4 text-rose-500" />
            <h2 className="font-semibold">편지</h2>
            <p className="mt-2 text-sm text-[#7b655c]">
              엄마, 아빠에게 쓰는 편지 자리
            </p>
          </div>

          <div className="rounded-3xl bg-white/80 p-6 shadow-md">
            <Gift className="mx-auto mb-4 text-rose-500" />
            <h2 className="font-semibold">선물 공개</h2>
            <p className="mt-2 text-sm text-[#7b655c]">
              생일 선물 공개 이벤트 자리
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainSitePlaceholder;