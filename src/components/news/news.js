
import React from 'react';
import CardNew from './cardNew';
import { useContext } from 'react';
import {ApiContext} from '../../context/ApiContext';
import { NavLink } from "react-router-dom";
import './news.scss';

const News = () => {
    const context=useContext(ApiContext);

    return (
       <div className="dish-wrapper">
       <div className='nav'>
        <NavLink className='nav-item' to="/"> Home</NavLink>
        <NavLink  className='nav-item innactiv' to="/news"> News</NavLink>
        <NavLink className='nav-item ' to="/dish"> Dish</NavLink>
       </div>
       <h2>NEWS</h2>
 <div classname="newsList">

        {
            context.data.value?.map((el) => {

              return (

                <CardNew
                  // key={el.title}
                  name={el.name}
                  // description={el.description}
                  url={el.image.thumbnail. contentUrl}
                  image={el.image}
                />

                );
            })}  </div>
        </div>
    )
}
export default News;










