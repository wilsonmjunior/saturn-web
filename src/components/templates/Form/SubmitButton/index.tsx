"use client"

import { Button } from "@/components/common"
import { useFiltersStore } from "@/store";

export function SubmitButton() {
  const addFilters = useFiltersStore((state) => state.actions.addFilters); 

  return (
    <Button
      label="Adicionar"
      onClick={() => addFilters({ label: 'Modalidade', name: 'modality' })} 
    />
  )
}