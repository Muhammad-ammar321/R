import { useState, type ChangeEvent, type FormEvent } from 'react'
import './todo.css'

const Todo = () => {
    const [task,setTask] = useState('')

    const [todos,setTodos] = useState(['Go to gym','Buy a new laptop','Finish the React App'])

    const onChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setTask(event?.target.value)
    }

    const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!task.trim())return ;
        setTodos([...todos,task])
        setTask('')
    }

    const deletetask =(text:string)=>{
        const del = todos.filter((todo)=> todo !== text )
        setTodos(del)
    }
    const editTask =(text:string)=>{
        const edit =todos.find((todo)=> todo === text)
            // setTodos(
            //     <input type="text" value={edit} />
                
            // )
        
    }

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={onSubmit}>
        <label htmlFor="task" className='bg-red'>Add a New Task</label>
        <small>Plese but some value</small>
        <input type="text" value={task} onChange={onChange} id="task" placeholder="What do you want to do"  required/>
        <button type="submit"  >Submit</button>
      </form>

      {todos.length > 0 ?( <ul className="todo-list">
        
            {todos.map((todo=>(
                <li> {todo}   
                    <button onClick={()=> deletetask(todo)}>Delete</button>
                    <button onClick={()=>editTask(todo)}>Edit</button>
                </li>
         )))}
      </ul>):( <p >Please add some task</p> ) }
    </div>
  )
}

export default Todo


//made by sire

/*
https://bait-us-salam-psdc.netlify.app/react/react-assignment-2

// code
import { useState, type ChangeEvent, type FormEvent } from 'react'
import './index.css'

const todos = [
  {
    title: 'Go to gym',
    completed: false,
    id: 1,
  },
]

const Todo = () => {
  const [task, setTask] = useState('')
  const [error, setError] = useState('')

  const [todos, setTodos] = useState([
    'Go to gym',
    'Buy a new laptop',
    'Finish the React App',
  ])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event?.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!task.trim()) {
      setError('please add some task')
      return
    }
    setTodos([...todos, task])
    setTask('')
  }

  const onDeleteTask = (text: string) => {
    const deleteTodo = todos.filter((todo) => todo !== text)

    setTodos(deleteTodo)
  }

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={onSubmit}>
        <label htmlFor="task">Add a New Task</label>
        <input
          type="text"
          id="task"
          value={task}
          onChange={onChange}
          placeholder="What do you want to do"
        />
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
      </form>

      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li>
              {todo} <button onClick={() => onDeleteTask(todo)}>Delete</button>
              <button>Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please add some task</p>
      )}
    </div>
  )
}

export default Todo

*/ 