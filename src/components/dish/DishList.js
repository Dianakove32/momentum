import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ApiContext } from "../../components/context/Context";

import Dish from "./Dish.js";
import Favorites from "./Favorites";
import "./style.scss"


export default function DishList(props) {

    const context = useContext(ApiContext);

    const onChange = (e) => {
        context.setSearch(e.target.value)
    }
    const onClick = (title) => {

        const item = context.state.data.data.hits.find(el => el.recipe.label == title)

        let copyOfItems = [...context.state.cart]
        copyOfItems.push(item)
        context.setState({
            ...context.state,
            cart: copyOfItems
        })


    }


    return (
        <div>
        <NavLink to="/"> <h3>Home</h3></NavLink>
        <NavLink to="/news"> <h3>News</h3></NavLink>
        <NavLink to="/dish"> <h3>Dish</h3></NavLink>
            <Favorites/>

            <input className="input-dish" type='text' placeholder='find dish' autoComplete='on' onChange={onChange} />
            {context.state.isLoaded &&
                context.state.data.data.hits.map((el, i) => <Dish key={i} {...el.recipe} onClick={onClick} />)}

        </div>
    )
}
