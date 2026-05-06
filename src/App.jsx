import { useMemo, useState } from "react";
import InvitationEnvelope from "./components/invitation/InvitationEnvelope";
import InvitationAcceptedScreen from "./components/invitation/InvitationAcceptedScreen";
import MemoryBoxScreen from "./components/vault/MemoryBoxScreen";
import { siteContent } from "./data/siteContent";
import { STORAGE_KEYS } from "./utils/storage";
import { usePersistentBoolean } from "./hooks/usePersistentBoolean";

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = usePersistentBoolean(
    STORAGE_KEYS.ENVELOPE_OPEN,
    false
  );

  const [hasAcceptedInvitation, setHasAcceptedInvitation] = usePersistentBoolean(
    STORAGE_KEYS.INVITATION_ACCEPTED,
    false
  );

  const [isBoxOpened, setIsBoxOpened] = usePersistentBoolean(
    STORAGE_KEYS.BOX_OPENED,
    false
  );

  const [isReviewingInvitation, setIsReviewingInvitation] = useState(false);

  const objects = useMemo(() => siteContent.objects, []);

  const shouldShowInvitation =
    !hasAcceptedInvitation || isReviewingInvitation;

  function handleOpenEnvelope() {
    setIsEnvelopeOpen(true);
  }

  function handleAcceptInvitation() {
    setHasAcceptedInvitation(true);
    setIsReviewingInvitation(false);
  }

  function handleOpenBox() {
    setIsBoxOpened(true);
  }

  function handleBackToInvitation() {
    setIsEnvelopeOpen(true);
    setIsReviewingInvitation(true);
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg)] px-5 py-10 text-[var(--color-text)]">
      {shouldShowInvitation ? (
        <section className="mx-auto flex min-h-screen max-w-4xl items-center justify-center">
          <InvitationEnvelope
            isOpen={isEnvelopeOpen}
            onOpen={handleOpenEnvelope}
            onAccept={handleAcceptInvitation}
          />
        </section>
      ) : (
        <section className="mx-auto flex min-h-screen max-w-5xl items-center justify-center">
          {!isBoxOpened ? (
            <InvitationAcceptedScreen onOpenBox={handleOpenBox} />
          ) : (
            <MemoryBoxScreen
              objects={objects}
              onBackToInvitation={handleBackToInvitation}
            />
          )}
        </section>
      )}
    </main>
  );
}

export default App;