import React, { useContext,useState } from "react";

import { ApiContext } from "../../components/context/Context";

  import Dish from "./Dish.js";
import   "./style.scss"


export default function DishList() {

    const context = useContext(ApiContext);

    const onChange =(e) =>{
        context.setSearch(e.target.value)
            }


    return (
        <div>

<input className="input-dish" type='text' placeholder='find dish' autoComplete='on' onChange={onChange}/>
  {context.state.isLoaded &&
        context.state.data.data.hits.map((el) =><Dish {...el.recipe}/>)}

        </div>
    )
}
