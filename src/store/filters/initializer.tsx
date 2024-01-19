'use client';

import { useRef } from "react";

import { Filter, useFiltersStore } from ".";

type InitializerStoreProps = {
  children?: React.ReactNode;
  filters: Filter[];
}

export function InitializerFiltersStore({ children, filters }: InitializerStoreProps) {
  const initializerRef = useRef(false);

  if (!initializerRef.current) {
    useFiltersStore.setState({ state: { filters }});
    initializerRef.current = true;
  }

  return <>{children}</>;
}
