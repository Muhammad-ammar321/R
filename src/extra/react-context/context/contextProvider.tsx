import { useContext, useState, type ReactNode } from "react"
import { SiteContext, type Site } from "./siteContext"


const initilaState = [
  {
    id: 1,
    title: 'Example Site',
    da: 55,
    url: 'https://example.com',
    contact: 'a@a.com',
  },
  {
    id: 2,
    title: 'Tech Blog',
    da: 42,
    url: 'https://techblog.com',
    contact: 'contact@techblog.com',
  },
  {
    id: 3,
    title: 'News Portal',
    da: 60,
    url: 'https://newsportal.com',
    contact: 'editor@newsportal.com',
  },
]
  
    
    
const SiteProvider = ({ children }:{ children:ReactNode })=>{

  const [siteList, setSiteList] = useState<Site[]>(initilaState)


  return(
    <SiteContext.Provider value={{siteList,setSiteList}} >
      {children}
    </SiteContext.Provider>
  )
}
export default SiteProvider

    

export  const useSiteContext=()=>{
    const context = useContext(SiteContext)
    
    if(!context){
      throw new Error('Some error in context')
    }
    return context
  }

