
import React from 'react';
import CardNew from './cardNew';
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import { NavLink } from "react-router-dom";
import './news.scss';
import dataNews from './data'
const News = () => {
  const context = useContext(ApiContext);

  return (
    <div className="dish-wrapper">
      <div className='nav'>
        <NavLink className='nav-item' to="/"> Home</NavLink>
        <NavLink className='nav-item innactiv' to="/news"> News</NavLink>
        <NavLink className='nav-item ' to="/dish"> Dish</NavLink>
      </div>
      <h2>NEWS</h2>
      <div classname="newsList">
        {dataNews.map((el, i) => <div className='dataCardNews' key={i}>
          <img src={el.image} />
          <h3>{el.name}</h3>
          <a href={el.url}><p>read more</p> </a>

        </div>
        )
        }

        {
          context.data.value?.map((el) => {
            return (
              <CardNew
                key={el.name}
                name={el.name}
                url={el.url}
              //  image={el.image.thumbnail.contentUrl}
              />
            );
          })}  </div>
    </div>
  )
}
export default News;










