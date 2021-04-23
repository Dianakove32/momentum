import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ApiContext } from "../../components/context/Context";
import Dish from "./Dish.js";
import Favorites from "./Favorites";
import "./style.scss"

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import { setCookie, getCookie, removeCookie } from "../../services/cookies";
import Cookies from "js-cookie";
import Loader from "../Loader/Loader";




function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));



export default function DishList(props) {

    const context = useContext(ApiContext);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const onChange = (e) => {
        context.setSearch(e.target.value)
    }
    const onClick = (title) => {

        const item = context.state.data.data.hits.find(el => el.recipe.label == title)

        let copyOfItems = [...context.state.cart]
        if (copyOfItems.includes(item)) {
            return
        } else
            copyOfItems.push(item)


        setCookie(copyOfItems)

        context.setState({
            ...context.state,
            cart: copyOfItems
        })
        setOpen(true);
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
                {context.state.isLoaded ?
                    (context.state.data.data.hits.map((el, i) => <Dish key={i} {...el.recipe} onClick={onClick} />)) : (
                        <Loader />
                    )}
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
