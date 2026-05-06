import { useEffect, useState } from "react";
import { readStorageBoolean, writeStorageBoolean } from "../utils/storage";

export function usePersistentBoolean(key, initialValue = false) {
  const [value, setValue] = useState(() => {
    return readStorageBoolean(key, initialValue);
  });

  useEffect(() => {
    writeStorageBoolean(key, value);
  }, [key, value]);

  return [value, setValue];
}