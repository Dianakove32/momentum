
import React from 'react';
import CardNew from './cardNew';
import { useContext } from 'react';
import {ApiContext} from '../../context/ApiContext';
import { NavLink } from "react-router-dom";
import './news.scss';

const News = () => {
    const context=useContext(ApiContext);

    return (
       <div >
       <div className='nav'>
        <NavLink className='nav-item' to="/"> <h3>Home</h3></NavLink>
        <NavLink  className='nav-item' to="/news"> <h3>News</h3></NavLink>
        <NavLink className='nav-item' to="/dish"> <h3>Dishes</h3></NavLink>
       </div>
 <div classname="newsList">

        {
            context.data.articles?.map((el) => {
              return (

                <CardNew
                  key={el.title}
                  title={el.title}
                  description={el.description}
                  url={el.url}
                  urlToImage={el.urlToImage}
                />

                );
            })}  </div>
        </div>
    )
}
export default News;










