import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ApiContext } from "../../components/context/Context";
import Dish from "./Dish.js";
import Favorites from "./Favorites";
import "./style.scss"
import {setCookie,  getCookie , removeCookie} from "../../services/cookies";

export default function DishList(props) {

    const context = useContext(ApiContext);
  

    const onChange = (e) => {
        context.setSearch(e.target.value)
    }
    const onClick = (title) => {
        const item = context.state.data.data.hits.find(el => el.recipe.label == title)
        let copyOfItems = [...context.state.cart]
        copyOfItems.push(item)
        setCookie(copyOfItems)

        context.setState({
            ...context.state,
            cart: copyOfItems
        })
    }

       setTimeout(() => {
        setOpen(false);
      }, 3000);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };


    return (
        <div className='dish-wrapper'>
            <div className="nav-header">
            <Favorites />
            <div className="nav">
                <NavLink className="nav-item" to="/"> Home</NavLink>
                <NavLink className="nav-item" to="/news"> News </NavLink>
                <NavLink className="nav-item innactiv" to="/dish">  Dish </NavLink>
            </div>

            </div>
                <h2>Find dish for today</h2>
            <div className="input-wrapper">
                 <input className="input-dish" type='text' placeholder='Find recipy...' autoComplete='on' onChange={onChange} />
            </div>

            <div className='dish-output'>
                {context.state.isLoaded &&
                    context.state.data.data.hits.map((el, i) => <Dish key={i} {...el.recipe} onClick={onClick} />)}
            </div>

            <div className={classes.root}>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success">
         Recipy has been added
        </Alert>
      </Snackbar>


    </div>

        </div>
    )
}
