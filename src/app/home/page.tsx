import { List } from "@/components/templates/List";
import { useFiltersStore, InitializerFiltersStore } from "@/store"

// const filters = [{
//   name: 'producers',
//   label: 'Produtores',
// },{
//   name: 'products',
//   label: 'Produtos',
// },{
//   name: 'harvest',
//   label: 'Safra',
// }] as Filter[]

export default async function Home() {
  // useFiltersStore.setState({
  //   state: {
  //     filters,
  //   }
  // })

  const { filters } = useFiltersStore.getState().state;

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
