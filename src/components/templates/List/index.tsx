'use client';

import { useFiltersStore } from "@/store";

export function List() {
  const { state: { filters } } = useFiltersStore();

  return (
    <div className="p-4 border border-slate-50 rounded-md">
      <ul>
        {
          filters.map((filter) => (
            <li key={filter.name}>{filter.label}</li>
          ))
        }
      </ul>
    </div>
  )
}