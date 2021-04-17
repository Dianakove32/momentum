
import {createContext,useState,useEffect} from "react";
import moment from 'moment';
export const ApiContext=createContext();
let now = moment().format();
let newNow=now.substring(0, now.length - 15);
const ContextProvider=({children})=>{
    const [data, setData] = useState({});
    
    useEffect(() => {
        // eslint-disable-next-line no-template-curly-in-string
        const url = `https://newsapi.org/v2/everything?q=from=${newNow}&keyword&apiKey=0e428c7efd55415aba1f5a8b3fc39521`;
console.log(newNow)

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
