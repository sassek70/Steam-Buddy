import { useState } from "react"
import { crud } from "../common/httpFunctions"


const StoreSearch = () => {

    const [formData, setFormData] = useState({userSearchTerm: ""})

    const handleSearch = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const searchSteam = async (event) => {
        event.preventDefault()
        // trim out trailing & leading white space 
        // using .replace(/ /g, "+") to replace empty spaces(g = all spaces) with "+"
        // this puts search term in correct format for Steam Store search
        const steamSearchString = formData.userSearchTerm.trim().replace(/ /g, "+")
        const steamResults = await crud.post(import.meta.env.VITE_BACKEND_URL, "store_search", steamSearchString)
        console.log(steamResults)
    }

    // console.log(formData)

    return (
        <form onSubmit={searchSteam}>
            <label htmlFor="search">Search the Steam Store</label>
            <input type="text" value={formData.userSearchTerm} name="userSearchTerm" onChange={handleSearch}></input>
        </form>
        
    )






}

export default StoreSearch