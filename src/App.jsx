import { useState } from 'react'
import './App.css'

function App() {
  const [animes, setAnimes] = useState([])

  return (
    <section className="index">
        <table className="table">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {animes.map((anime, i)=> {
               return <Anime />
            })}
          </tbody>
        </table>
        <button onClick={()=>{navigate(`/animes/new`)}}>Add Anime</button>
    </section>
  )
}

export default App
