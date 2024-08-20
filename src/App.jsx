import './App.css';
import Todolist from './component/Todo/Todolist';
import TofoFrom from './component/Todo/TofoFrom';
import TodoProvider from './context/TodoProvider';



function App() {
  // const [count , setCount] = useState(0);

  return (
    <TodoProvider>
    <div className='border'>
       < TofoFrom/>
       <Todolist></Todolist>

       
      {/* <FromUser></FromUser>
      <h2>count : {count}</h2>
      <h2>count : { 100  - count}</h2>
      <ClassComponent></ClassComponent>
      <FunctionComponent count={count} setCount={setCount} ></FunctionComponent> */}
    </div>
    </TodoProvider>
  )
}

export default App
