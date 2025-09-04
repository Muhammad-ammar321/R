

import { useContext } from 'react'
import { SiteContext } from '../../context/siteContext'
const About =()=>{
    
    
        const {siteList } = useContext(SiteContext)
    
    return(

        <div>
            <h2>  context Lenght  </h2>
            <p>{siteList.length}</p>
        </div>

    )
}


export default About