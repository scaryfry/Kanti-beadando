import { useState } from "react"
import type { Fours } from "./types/Fours"
import apiClient from "./api/apiClient"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const navigate = useNavigate(); 
    const [fours, setFours] = useState<Fours>({
        id: 0,
        vals: ''
    })
    const submit = () => {
        apiClient.post('/fours', fours).then(() => {
            toast.success("Fours created successfully"), navigate('/');
        }).catch(() => {
            toast.error("Error creating Fours")
        })
    }
    return (
        <>
        <div>Create page</div>
        <label>Vals</label>
        <input maxLength={5} type="text" onChange={(e) => setFours({...fours, vals: e.target.value})} />
        <br />
        <button style={{marginRight: "10px"}} onClick={submit}>Submit</button>
        <button style={{marginLeft: "10px"}} onClick={() => navigate('/')}>Go Back</button>
        </>
    )
}

export default Create