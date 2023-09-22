import { createContext, useState, useContext } from "react"

// Types
export type SelectedFitspot = {
  latitude: number
  longitude: number
}

type AddFitSpotContextType = {
  selectedFitspot: SelectedFitspot | null
  setSelectedFitspot: React.Dispatch<
    React.SetStateAction<SelectedFitspot | null>
  >
}

type AddFitspotContextProviderProps = {
  children: React.ReactNode
}

// Context
export const AddFitspotContext = createContext<AddFitSpotContextType>({
  selectedFitspot: null,
  setSelectedFitspot: () => {},
})

export const AddFitspotProvider = ({
  children,
}: AddFitspotContextProviderProps) => {
  const [selectedFitspot, setSelectedFitspot] =
    useState<SelectedFitspot | null>(null)

  return (
    <AddFitspotContext.Provider value={{ selectedFitspot, setSelectedFitspot }}>
      {children}
    </AddFitspotContext.Provider>
  )
}

export const useAddFitspot = () => {
  const context = useContext(AddFitspotContext)
  if (context === undefined) {
    throw new Error("useAddFitspot must be used within an AddFitspot Context")
  }
  return context
}
