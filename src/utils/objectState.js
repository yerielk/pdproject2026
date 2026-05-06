import { isDateReached } from "./date";

export function getObjectState(item) {
  return {
    ...item,
    isUnlocked: isDateReached(item.unlockAt),
  };
}