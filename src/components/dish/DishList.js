import React, {useEffect, useState} from 'react'
import Axios from "axios";

export default function DishList() {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const APP_ID = "ab443e56";
    const APP_KEY = "ebebb0b4e7e8e2c9dd2b09a8fceb27ee";

    const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {

    //   if (serch !== "") {
       const result = await Axios.get(url);
       console.log(result);
    //     if (!result.data.more) {
    //       return setAlert("No food with such name");
    //     }
    //     console.log(result);
    //     setRecipes(result.data.hits);
    //     setSerch("");
    //     setAlert("");
    //   } else {
    //     setAlert("Please fill the form");
    //   }
    };
    const onChange =(e) =>{
setSearch(e.target.value)
    }

    const onClick=()=>{
        getData()
    }

    return (
        <div>
<button onClick = {onClick}>get data</button>
<input type='text' placeholder='find dish' autoComplete='on' onChange={onChange}/>
        </div>
    )
}
