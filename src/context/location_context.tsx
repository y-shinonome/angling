import React, { useState, createContext } from 'react'

type Location = L.LatLng | null

type LocationContext = {
  location: Location
  setLocation: React.Dispatch<React.SetStateAction<Location>>
}

export const LocationContext = createContext({} as LocationContext)

export const LocationProvider: React.FC = ({ children }) => {
  const [location, setLocation] = useState<Location | null>(null)

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  )
}

export default LocationProvider
