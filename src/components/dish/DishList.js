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
        <div className='dish-wrapper'>
            <div className="nav-header">
            <Favorites />
            <div className="nav">
                <NavLink className="nav-item" to="/"> <h3>Home</h3></NavLink>
                <NavLink className="nav-item" to="/news"> <h3>News</h3></NavLink>
                <NavLink className="nav-item innactiv" to="/dish"> <h3>Dish</h3></NavLink>
            </div>

            </div>

            <div className="input-wrapper">
                 <input className="input-dish" type='text' placeholder='Find recipy...' autoComplete='on' onChange={onChange} />
            </div>

            <div className='dish-output'>
                {context.state.isLoaded &&
                    context.state.data.data.hits.map((el, i) => <Dish key={i} {...el.recipe} onClick={onClick} />)}
            </div>
        </div>
    )
}
