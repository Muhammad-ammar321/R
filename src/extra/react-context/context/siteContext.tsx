import React, { createContext } from 'react'

// Define the shape of a single contact item
export interface Site {
  id: number
  title: string
  da: number
  url: string
  contact: string
}

// Define the context value shape
interface SiteContextType {
  siteList: Site[]
  setSiteList: React.Dispatch<React.SetStateAction<Site[]>>
}

// Provide a default value for the context to avoid undefined errors
export const SiteContext = createContext<SiteContextType>({
  siteList: [],
  setSiteList: () => {},
})