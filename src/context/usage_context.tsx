import React, { createContext } from 'react'
import { useToggle } from 'react-use'

type UsageContext = {
  show: boolean
  toggle: (nextValue?: any) => void
}

export const UsageContext = createContext({} as UsageContext)

export const UsageProvider: React.FC = ({ children }) => {
  const [show, toggle] = useToggle(false)

  return (
    <UsageContext.Provider value={{ show, toggle }}>
      {children}
    </UsageContext.Provider>
  )
}

export default UsageProvider
