import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { Fours } from './types/Fours'
import apiClient from './api/apiClient'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  const [fours, setFours] = useState<Array<Fours>>([])

  const getFours = () => {
    apiClient.get('/fours').then((response) => {
      setFours(response.data)
    }).catch((error) => {
      toast.error("Error fetching data")
    })
  }
  return (
    <>
      <div>
      <h1>Fours List</h1>
      <button onClick={getFours}>Load Fours</button>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vals</th>
          </tr>
        </thead>
        <tbody>
          {fours.map((four) => (
            <tr key={four.id}>
              <td>{four.id}</td>
              <td>{four.vals}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
      <button style={{marginRight: "10px"}} onClick={() => navigate('/create')}>Create New Fours</button>
      <button style={{marginLeft: "10px"}} onClick={() => navigate('/search')}>Search Fours</button>
      </div>
      </div>
    </>
  )
}

export default App
