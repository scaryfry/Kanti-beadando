import { useState } from "react"
import type { Fours } from "./types/Fours"
import apiClient from "./api/apiClient"
import { toast } from "react-toastify/unstyled";

const Search = () => {
    const [id, setId] = useState(0);
    const [fours, setFours] = useState<Fours>()

    const search = () => {
        apiClient.get(`/fours/${id}`).then((response) => {
            setFours(response.data)
        }).catch(() => {
            toast.error("Error fetching Fours")
        })
    }
  return (
      <>
      <div>Search page</div>
        <label>Enter an id:</label>
        <input type="text" onChange={(e) => setId(Number(e.target.value))}/>
        <button onClick={search}>Search</button>
        {fours ? (
            <div>
                <h2>Fours Details</h2>
                <p>ID: {fours.id}</p>
                <p>Vals: {fours.vals}</p>
            </div>
        ) : (<p>No Fours found</p>)}
      </>
  )
}
export default Search