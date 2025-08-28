const  List = ()=>{
    
    const list =['apple','orange','mango','banana']
    
    return(
        <div>
            <ol>
                {
                    list.map((item,index) => (  <li key={item}>{item}</li> ) )
                }
            </ol>
        </div>
    )
}
export default List