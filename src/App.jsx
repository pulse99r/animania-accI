import { useState, useEffect } from 'react'
import './App.css'
import Anime from './Components/Anime'

function App() {
  const [animes, setAnimes] = useState([])

  const localHTTP = "http://localhost:3333"

  function getAnimes() {
    fetch(`${localHTTP}/animes/`)
    .then((response) => response.json())
    .then((data) => {setAnimes(data)})
    .catch((error) => {
      console.log(error, "Error getting animes!")
    })
  }
  useEffect(() => {
    getAnimes()
   }, []);
   console.log("animes:-->",animes)

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
            {animes.map((anime)=> {
               return (<Anime key={anime.id} anime = {anime} />)
            })}
          </tbody>
        </table>
        <button onClick={()=>{navigate(`/animes/new`)}}>Add Anime</button>
    </section>
  )
}

export default App
