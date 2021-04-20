
import {createContext,useState,useEffect} from "react";
import moment from 'moment';
export const ApiContext=createContext();
let now = moment().format();
let newNow=now.substring(0, now.length - 15);

const ContextProvider=({children})=>{
    const [data, setData] = useState({});

    useEffect(() => {
        // eslint-disable-next-line no-template-curly-in-string
        const url = `https://localhost:44378/weatherforecast`;
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
