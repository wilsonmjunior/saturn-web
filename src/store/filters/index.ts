import { create } from 'zustand';

export type Filter = {
  endpointURL: string;
  name: string;
  label: string;
  allEndpointURL?: string;
}

export type ActionFilters = {
  addFilters(filter: Filter): void;
}

type FiltersStore = {
  state: {
    filters: Filter[]
  },
  actions: ActionFilters;
}

export const useFiltersStore = create<FiltersStore>((set) => ({
  state: {
    filters: [],
  },
  actions: {
    addFilters(filter: Filter) {
      set(({ state }) => ({
        state: {
          filters: [...state.filters, filter]
        }
      }));
    },
  }
}));

export { InitializerFiltersStore } from './initializer';