
import {createContext,useState,useEffect} from "react";
export const ApiContext=createContext();



const ContextProvider=({children})=>{
    const [data, setData] = useState({});
    useEffect(() => {
        const url = 'https://newsapi.org/v2/everything?q=from=2021-04-11&keyword&apiKey=0e428c7efd55415aba1f5a8b3fc39521';


        fetch(url)
            .then(data => data.json())
            .then(res => setData(res))

    }, [])
    return(
       <ApiContext.Provider value={{data,setData}}>
           {children}
       </ApiContext.Provider>
    )
}
export default ContextProvider;
