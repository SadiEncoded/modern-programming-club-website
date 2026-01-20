"use client";

import { useSyncExternalStore } from "react";

export const useIsClient = () =>
  useSyncExternalStore(
    (callback) => {
      callback();
      return () => {};
    },
    () => true,
    () => false,
  );

