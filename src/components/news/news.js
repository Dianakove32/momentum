
import React from 'react';
import CardNew from './cardNew';
import { useContext } from 'react';
import {ApiContext} from '../../context/ApiContext';
import { NavLink } from "react-router-dom";

const News = () => {
    const context=useContext(ApiContext);

    return (
       <div>
        <NavLink to="/"> <h3>Home</h3></NavLink>
        <NavLink to="/news"> <h3>News</h3></NavLink>
        <NavLink to="/dish"> <h3>News</h3></NavLink>
           {console.log(context.data)}
        {
            context.data.articles.map((el) => {
              return (
                <CardNew
                  key={el.title}

                  title={el.title}
                  description={el.description}
                  url={el.url}
                />
                );
            })}
        </div>
    )
}
export default News;










