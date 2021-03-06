
import {createContext,useState,useEffect} from "react";
import moment from 'moment';
export const ApiContext=createContext();
// let now = moment().format();
// let newNow=now.substring(0, now.length - 15);
const ContextProvider=({children})=>{
    const [data, setData] = useState({});

    useEffect(() => {
        // eslint-disable-next-line no-template-curly-in-string
        fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-key": "882af9aa22mshb2364291efb3859p188c75jsnb2edc39e47b4",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
	}
})
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
