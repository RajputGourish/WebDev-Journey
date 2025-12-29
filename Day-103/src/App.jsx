import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    const a = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await a.json();
    setCards(data);
    // console.log(data); 
  }

  useEffect(() => {
    fetchData();
  }, [])



  return (
    <>
      <Navbar />
      <div className="container">
        {cards.map((card) => {
          return <div key={card.id} className="card">
            <h2>{card.userId}</h2>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default App
