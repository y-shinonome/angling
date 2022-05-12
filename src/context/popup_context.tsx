import React, { useState, createContext } from 'react'

type Popup =
  | {
      title: string
      lat: number
      lon: number
      id?: string
    }
  | undefined

type PopupContext = {
  popup: Popup
  setPopup: React.Dispatch<React.SetStateAction<Popup>>
}

export const PopupContext = createContext({} as PopupContext)

export const PopupProvider: React.FC = ({ children }) => {
  const [popup, setPopup] = useState<Popup | undefined>(undefined)

  return (
    <PopupContext.Provider value={{ popup, setPopup }}>
      {children}
    </PopupContext.Provider>
  )
}

export default PopupProvider
