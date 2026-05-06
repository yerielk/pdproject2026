export const STORAGE_KEYS = {
  ENVELOPE_OPEN: "parents-day-envelope-open",
  INVITATION_ACCEPTED: "parents-day-invitation-accepted",
  BOX_OPENED: "parents-day-box-opened",

  // 예: parents-day-object-developed-camera
  OBJECT_DEVELOPED_PREFIX: "parents-day-object-developed-",
};

export function readStorageBoolean(key, fallbackValue = false) {
  try {
    const storedValue = window.localStorage.getItem(key);

    if (storedValue === "true") return true;
    if (storedValue === "false") return false;

    return fallbackValue;
  } catch {
    return fallbackValue;
  }
}

export function writeStorageBoolean(key, value) {
  try {
    window.localStorage.setItem(key, String(value));
  } catch {
    // localStorage를 사용할 수 없는 환경에서는 조용히 무시
  }
}

export function removeStorageItem(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // localStorage를 사용할 수 없는 환경에서는 조용히 무시
  }
}

export function clearParentsDayStorage() {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => {
      if (!key.endsWith("-")) {
        window.localStorage.removeItem(key);
      }
    });

    Object.keys(window.localStorage).forEach((key) => {
      if (key.startsWith(STORAGE_KEYS.OBJECT_DEVELOPED_PREFIX)) {
        window.localStorage.removeItem(key);
      }
    });
  } catch {
    // localStorage를 사용할 수 없는 환경에서는 조용히 무시
  }
}