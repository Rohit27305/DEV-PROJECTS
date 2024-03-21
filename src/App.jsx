import { useState , useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Navbar from './component/Navbar'

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [isFinish , setIsFinish] = useState(true);
  useEffect(() => {
    let str = localStorage.getItem("todos");
    if(str){
      let todos = JSON.parse(localStorage.getItem("todos"));
      settodos(todos);
    }
  }, []);

  const saveTolc = (params) =>{
    localStorage.setItem("todos" , JSON.stringify(todos));
  }

  const save = (e)=>{
    if(todo.length == 0){ 
      alert("Empty string is not allowed");
      return;
    }

    let id = uuidv4();
    settodos([...todos,{todo , isCom:false , id}])
    settodo("")
    console.log(todos); 
    saveTolc();   
  }
  const change = (e) =>{
    if(e.target.value.length > 0){
      settodo(e.target.value);
    }
    saveTolc();
  }
  const check = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item =>{
      return item.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].isCom = !newTodos[index].isCom
    settodos(newTodos)
    saveTolc()
  }

  const remove = (e , id) =>{
    let newTodos = todos.filter(item =>{
      return item.id != id;
    })
    settodos(newTodos);
    saveTolc();
  }
  const show = (e) =>{
    setIsFinish(!isFinish);
  }
  return (
    <>
      <Navbar/>
      <div className="mytodos flex flex-col w-full md:w-1/2 md:rounded-xl h-[80vh] md:mx-auto p-4 border my-4 gap-4 bg-blue-100">
          <p className='flex justify-center text-2xl md:text-4xl font-bold'>My Todos</p>
          <div className="add flex gap-4">
            <input onChange={change} type="text" placeholder='Add something to do'  value={todo} className='outline-none focus:border-blue-600 w-full bg-blue-200 rounded-[10px] p-2 text-sm border'/>
            <button onClick={save} className='m-1 px-4 bg-sky-600 rounded-[6px]'>Save</button>
          </div>
          <div className="todos flex flex-col gap-2 overflow-auto">
            <div className='flex gap-2 mx-2'><input onChange={show} checked={isFinish} type="checkbox"></input>show finished</div>
            <p className='m-2 text-xl font-bold'>Your Todos</p>
            {todos.length === 0 && <div className='m-4'>No todos to display </div>}
            {todos.map(item =>{
              return( (isFinish || !item.isCom ) &&
              <div key={item.id} className="todo flex h-auto justify-between p-2 border-y border-y-slate-300">
                <div className="left flex gap-4">
                  <input name={item.id} onChange={check} type="checkbox" checked={item.isCom} />
                  <div className={item.isCom ? "line-through" : ""}>{item.todo}</div>
                </div>
                <button onClick={(e) => {remove(e , item.id)}} className='px-4 bg-red-500 rounded-sm'> Remove</button>
              </div>
              )
            })}
          </div>
      </div>
    </>
  )
}

export default App
