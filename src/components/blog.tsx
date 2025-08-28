import useApi from "./hooks/useApp"
const Blogs =()=>{
    const {post} =useApi()     
    return(
        <div> 
            <h2>Blog</h2>
            <div>
                {post.map((P)=>(
                    <div key={P.id}>
                        <h3>{P.title}</h3>
                        <p> {P.body} </p>
                    </div>
                ))} 
            </div>
        </div>
    )
}


export default Blogs