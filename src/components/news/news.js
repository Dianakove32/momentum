
import React from 'react';
import CardNew from './cardNew';
import { useContext } from 'react';
import {ApiContext} from '../../context/ApiContext';

const News = () => {
    const context=useContext(ApiContext);
   
    return (
       <div>
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










