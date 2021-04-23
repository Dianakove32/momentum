
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {setCookie,  getCookie , removeCookie} from "../../services/cookies";
export const ApiContext = React.createContext()

const initialState = {
    data: [],
    isLoaded: false,
    cart: [],
    snackbar:false
}

export default function ContextProvider({ children }) {

    const [state, setState] = useState(initialState)
    const [search, setSearch] = useState("pizza");
    // useEffect(() => {
    //     let cartFromStor = localStorage.getItem('recipy')
    //     let localRecipy = JSON.parse(cartFromStor)
    //     if(localRecipy){
    //        setState({
    //         ...state,
    //         cart: localRecipy
    //     })
    //     }

    // }, [])

    const APP_ID = "ab443e56";
    const APP_KEY = "ebebb0b4e7e8e2c9dd2b09a8fceb27ee";
    const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect(() => {
        getData()
    }, [search])

    const getData = () => {
        setState({
            ...state,
            isLoaded: false
        })
        const fetchData = async () => {

            const data = await axios.get(url)


            setState({
                ...state,
                data,
                isLoaded: true
            })
        }
        fetchData()
    }


    return (
        <ApiContext.Provider value={{ search, setSearch, state, setState }}>
            {children}
        </ApiContext.Provider>
    )
}
