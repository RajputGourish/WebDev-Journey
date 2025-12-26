import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshwwbtn] = useState(false)
  const [Todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey i am grocery todo",
      desc: "I am a good todo but i am a grocery todo"
    }
  ])

  // const Todo = ({ todo }) => {
  //   return (<>
  //     <div className="m-4 border-2">
  //       <div className="todo font-bold text-xl">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>
  //   </>)
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>Showbtn is true</button> : <button>Showbtn is false</button>}
      {/* {showbtn && <button>Show btn is true</button>} */}
      {Todos.map(todo => {
        // return <Todo key={todo.title} todo={todo} />

        return <div key={todo.title} className="m-4 border-2">
          <div className="todo font-bold text-xl">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>

      })}
      <div className="card">
        <button onClick={() => setshwwbtn(!showbtn)}>
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App