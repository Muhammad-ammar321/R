import { useEffect,useState } from "react"
const useApi=()=>{
    
    const [post,setPost] = useState([])
    const getData = async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPost(data)
        console.log('data>>>>>>>>>',data)
        console.log('post>>>>>>>>',post)
    }
    useEffect(()=>{
        getData()
    },[])
    return{post}
}

    export default useApi