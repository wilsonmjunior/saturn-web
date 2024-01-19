import { List } from "@/components/templates/List";
import { Filter, useFiltersStore, InitializerFiltersStore } from "@/store"

const filters = [{
  name: 'producers',
  label: 'Produtores',
},{
  name: 'products',
  label: 'Produtos',
},{
  name: 'harvest',
  label: 'Safra',
}] as Filter[]

const Filters = () => {
  const { filters } = useFiltersStore.getState().state;
  return (
    <div className="mt-4">
      { filters.map(filter => (
          <li key={filter.name}>{filter.label}</li>
        ))
      }
    </div>
  )
}

export default async function Home() {
  useFiltersStore.setState({
    state: {
      filters,
    }
  })

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl">
        Store Example
      </h1>

      <InitializerFiltersStore filters={filters ?? []}>
        <List />
      </InitializerFiltersStore>
    </div>
  )
}
