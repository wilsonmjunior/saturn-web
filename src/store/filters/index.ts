import { create } from 'zustand';
import z from 'zod';
import { v4 as uuidv4 } from 'uuid';

export type Filter = {
  allEndpointURL?: string;
  endpointURL?: string;
  label: string;
  name: string;
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

const schema = z.object({
  id: z.string(),
  data: z.string(),
  // allEndpointURL: z.string().optional(),
  // endpointURL: z.string().optional(),
  // label: z.string(),
  // name: z.string(),
})

export const useFiltersStore = create<FiltersStore>((set) => ({
  state: {
    filters: [],
  },
  actions: {
    addFilters(filter: Filter) {
      set(({ state }) => {
        try {
          const parsedFilter = schema.parse({
            id: uuidv4(),
            data: JSON.stringify(filter),
          });
  
          return ({
            state: {
              filters: [...state.filters, parsedFilter],
            }
          })
        } catch (error) {
          console.log('ERROR::', error); 
          return ({
            state: {
              filters: state.filters,
            }
          })
        }
      });
    },
  }
}));

export { InitializerFiltersStore } from './initializer';