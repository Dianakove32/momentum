 import ClockCard from './ClockCard';
import DishCard from "./DishCard";
import IconCard from "./IconCard";
import NewsCard from "./NewsCard";
import QuoteCard from './QuoteCard';
import TodoCard from "./TodoCard";
import WeatherCard from './WeatherCard';

   const dataCardContent=[
{
    id:'h1',
    order:'1',
    component: <TodoCard/>
},
{
    id:'h2',
    order:'2',
    component: <IconCard/>
},
{
    id:'h3',
    order:'3',
    component: <NewsCard/>
},
{
    id:'h4',
    order:'4',
    component: <ClockCard/>
},
{
    id:'h5',
    order:'5',
    component: <DishCard/>
},
{
    id:'h6',
    order:'6',
    component: <WeatherCard/>
},
{
    id:'h7',
    order:'7',
    component: <QuoteCard/>
},
]
export default  dataCardContent