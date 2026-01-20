import { useSyncExternalStore } from "react";

export const useMediaQuery = (query: string) =>
  useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const media = window.matchMedia(query);
      media.addEventListener("change", callback);
      return () => media.removeEventListener("change", callback);
    },
    () =>
      typeof window === "undefined" ? false : window.matchMedia(query).matches,
    () => false,
  );
