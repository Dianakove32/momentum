
import React from 'react';
import CardNew from './cardNew';
import { useContext } from 'react';
import {ApiContext} from '../../context/ApiContext';
import { NavLink } from "react-router-dom";
import './news.scss';

const News = () => {
    const context=useContext(ApiContext);

    return (
       <div>
        <NavLink to="/"> <h3>Home</h3></NavLink>
        
        <NavLink to="/dish"> <h3>Dishes</h3></NavLink>
           {console.log(context.data)}
        {
            context.data.articles?.map((el) => {
              return (
                <div classname="newsList">
                <CardNew
                  key={el.title}

                  title={el.title}
                  description={el.description}
                  url={el.url}
                  urlToImage={el.urlToImage}
                />
                </div>
                );
            })}
        </div>
    )
}
export default News;










