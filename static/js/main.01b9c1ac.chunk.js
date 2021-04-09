(this["webpackJsonpclock-app"]=this["webpackJsonpclock-app"]||[]).push([[0],{111:function(t,e){},122:function(t,e,n){},123:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(18),s=n.n(i),r=(n(79),n(8)),o=n(9),l=n(11),d=n(10),u=(n(52),n(15)),j=n(22),b=n.n(j),h=n(27),p=n(24),O=(n(81),n(82),n(1)),x=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={timer:setInterval(c.setDate.bind(Object(p.a)(c)),1e3),secondDegrees:0,minuteDegress:0,hourDegrees:0},c}return Object(o.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"setDate",value:function(){var t=document.querySelector("#hr"),e=document.querySelector("#mn"),n=document.querySelector("#sc");setInterval((function(){var c=new Date,a=30*c.getHours(),i=6*c.getMinutes(),s=6*c.getSeconds();t.style.transform="rotateZ(".concat(a+i/12,"deg)"),e.style.transform="rotateZ(".concat(i,"deg)"),n.style.transform="rotateZ(".concat(s,"deg)")}))}},{key:"render",value:function(){var t={transform:"rotate(".concat(this.state.secondDegrees,"deg)")},e={transform:"rotate(".concat(this.state.minuteDegrees,"deg)")},n={transform:"rotate(".concat(this.state.hourDegrees,"deg)")};return Object(O.jsxs)("div",{className:"clock",children:[Object(O.jsx)("div",{className:"hour",style:n,children:Object(O.jsx)("div",{className:"hr",id:"hr"})}),Object(O.jsx)("div",{className:"min",style:e,children:Object(O.jsx)("div",{className:"mn",id:"mn"})}),Object(O.jsx)("div",{className:"sec",style:t,children:Object(O.jsx)("div",{className:"sc",id:"sc"})})]})}}]),n}(a.a.Component),m=(n(53),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"buttons",children:Object(O.jsx)("button",{id:"new-quote",className:"button floating-button",onClick:this.props.handleClick,children:"New quote"})})}}]),n}(a.a.Component)),f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={quoteData:[],quote:"",author:""},c.randomQuote=c.randomQuote.bind(Object(p.a)(c)),c.handleClick=c.handleClick.bind(Object(p.a)(c)),c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/").then((function(t){return t.json()})).then((function(e){t.setState({quoteData:e.quotes},(function(){t.handleClick()}))})).catch((function(t){return console.log("Error",t)}))}},{key:"randomQuote",value:function(){var t=Math.floor(Math.random()*this.state.quoteData.length);return this.state.quoteData[t]}},{key:"handleClick",value:function(){var t=this.randomQuote();this.setState({quote:t.quote,author:t.author})}},{key:"render",value:function(){return Object(O.jsxs)("div",{id:"quote-box",children:[Object(O.jsxs)("div",{className:"text-container",children:[Object(O.jsx)("p",{id:"text",children:this.state.quote}),Object(O.jsxs)("h3",{className:"author",children:["- ",this.state.author]})]}),Object(O.jsx)(m,{handleClick:this.handleClick})]})}}]),n}(a.a.Component),g=(n(84),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props.gettingWeather;return Object(O.jsx)("div",{children:Object(O.jsx)("form",{onSubmit:t,children:Object(O.jsx)("input",{className:" input-weather ",type:"text",name:"city",placeholder:"Enter city..."})})})}}]),n}(c.Component)),v=(n(85),n(26)),y=n(149),C=n(148),k=n(150),N=n(151),w=n(146),S=[{descriptionData:"clear",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8e5GRi9lC8QxKIhgb_j-jdlJ3xf_jjVj_Fw&usqp=CAU",text:"You can relax"},{descriptionData:"rain",image:"https://i.pinimg.com/originals/9e/f3/b5/9ef3b5ee6c9610220183e9545bbd5202.png",text:"Take umdrella"},{descriptionData:"clouds",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FtQeTu2HfNvPamrtpYHInn6Df2GTNNkDWA&usqp=CAU ",text:"Take umdrella"},{descriptionData:"smoke",image:"https://image.shutterstock.com/image-photo/foggy-weather-on-hill-260nw-161556896.jpg ",text:"Be careful. its not clear on the road"},{descriptionData:"mist",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8aRZKsmztd5mZHUttnc7bfBomcBn2yOTs4A&usqp=CAU ",text:"Be careful. its not clear on the road"},{descriptionData:"snow",image:"https://ru.seaicons.com/wp-content/uploads/2015/10/sleet-icon.png",text:"Today will be beautifull"}],D=Object(w.a)((function(t){return{root:{height:50},wrapper:{width:250+t.spacing(1)},Controllabel:{marginLeft:0},paper:{zIndex:1,position:"absolute",margin:t.spacing(2),padding:10,bottom:50,left:10,backgroundRepeat:"no-repeat",width:250,height:200},im:{opacity:1}}}));function q(t){var e=D(),n=a.a.useState(!1),c=Object(v.a)(n,2),i=c[0],s=c[1],r=t.city,o=t.country,l=t.temp,d=t.sunset,u=t.humidity,j=(t.description,t.imageModal);return Object(O.jsx)("div",{className:e.root,children:Object(O.jsxs)("div",{className:e.wrapper,children:[Object(O.jsx)(N.a,{control:Object(O.jsx)(y.a,{className:e.Controllabel,checked:i,onChange:function(){s((function(t){return!t}))}})}),Object(O.jsx)(k.a,{in:i,mountOnEnter:!0,unmountOnExit:!0,children:Object(O.jsx)(C.a,{elevation:4,className:e.paper,style:{backgroundImage:"url(".concat(j,")")},children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:e.im,children:[" ",Object(O.jsx)("b",{children:"City:  "}),r]}),Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("b",{children:"Temp:  "}),l]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Country: "}),o]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Sunset: "}),d]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Humidity: "})," ",u]})]})})})]})})}var T=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.city,n=t.country,c=t.temp,a=t.sunrise,i=t.description,s=t.humidity,r=t.image,o=t.data,l=null,d=null;return o.forEach((function(t){if(i.includes(t.descriptionData))return l=t.image,d=t.text,console.log("uraaaaa",l),d})),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[Object(O.jsxs)("b",{children:[e," ",c," "]}),"   "]}),Object(O.jsxs)("p",{children:["Today is  ",i,"."]}),Object(O.jsxs)("p",{children:["  ",d]}),Object(O.jsx)(q,{city:e,country:n,temp:c,sunrise:a,humidity:s,description:i,image:r,data:o,imageModal:l})]})}}]),n}(c.Component),L=(n(90),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={todoList:[],todo:{text:"",category:"Coding"},filter:"All"},t.addTodo=function(){var e=t.state.todoList;e.push(t.state.todo),t.setState({todo:{text:"",category:t.state.todo.category},todoList:e})},t.putOneTodo=function(e){t.setState({todo:{text:e.target.value,category:t.state.todo.category}})},t.putOneCategory=function(e){t.setState({todo:{text:t.state.todo.text,category:e.target.value}})},t.deleteTodo=function(e){var n=t.state.todoList;n.splice(e,1),t.setState({todoList:n})},t.displayCategory=function(e){t.setState({filter:e.target.innerText})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(O.jsxs)("div",{className:"Todo",children:[Object(O.jsxs)("div",{className:"Todo_item1",children:[Object(O.jsxs)("div",{className:"inputToDo input",children:[Object(O.jsx)("input",{className:"inputToDo2",value:this.state.todo.text,onChange:this.putOneTodo,placeholder:"Write your todo here..."}),Object(O.jsxs)("select",{onChange:this.putOneCategory,className:"categories-container",children:[Object(O.jsx)("option",{children:" Coding"}),Object(O.jsx)("option",{children:" Sports"}),Object(O.jsx)("option",{children:" Food"}),Object(O.jsx)("option",{children:" Extra"})]}),Object(O.jsx)("button",{className:"addBtn",onClick:this.addTodo,children:"Add it"})]}),0!==this.state.todoList.length?this.state.todoList.filter((function(e){return"All"===t.state.filter||e.category===t.state.filter})).map((function(e,n){return Object(O.jsxs)("div",{className:"todos-container",children:[Object(O.jsxs)("span",{children:["- ",e.text," | "]}),Object(O.jsxs)("span",{className:"category-container",children:[" ",e.category," "]}),Object(O.jsx)("button",{className:"btn-delete",onClick:function(){t.deleteTodo(n)},children:"X"})]},n)})):Object(O.jsx)("div",{className:"todoNothing",children:"You did not add any todo yet"})]}),Object(O.jsxs)("div",{className:"filter-container",children:[Object(O.jsx)("p",{children:"Filter it"}),Object(O.jsx)("hr",{}),Object(O.jsx)("button",{className:"category-button",onClick:this.displayCategory,children:"Coding"}),Object(O.jsx)("button",{className:"category-button",onClick:this.displayCategory,children:"Sports"}),Object(O.jsx)("button",{className:"category-button",onClick:this.displayCategory,children:"Food"}),Object(O.jsx)("button",{className:"category-button",onClick:this.displayCategory,children:"Extra"}),Object(O.jsx)("button",{className:"category-button",onClick:this.displayCategory,children:"All"})]})]})}}]),n}(a.a.Component)),A=n(12),M=n(42),E=n.n(M);function I(t){var e=t.title,n=t.description,c=t.url;t.urlToImage;return Object(O.jsxs)("div",{className:"cardNew",children:[Object(O.jsx)("h1",{children:e}),Object(O.jsx)("p",{children:n}),Object(O.jsx)("a",{href:c,children:"bgbfg"})]})}var R=Object(c.createContext)(),F=function(t){var e=t.children,n=Object(c.useState)({}),a=Object(v.a)(n,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=0e428c7efd55415aba1f5a8b3fc39521").then((function(t){return t.json()})).then((function(t){return s(t)}))}),[]),Object(O.jsx)(R.Provider,{value:{data:i,setData:s},children:e})},H=function(){var t=Object(c.useContext)(R);return Object(O.jsxs)("div",{children:[Object(O.jsxs)(A.b,{to:"/",children:[" ",Object(O.jsx)("h3",{children:"Home"})]}),Object(O.jsxs)(A.b,{to:"/news",children:[" ",Object(O.jsx)("h3",{children:"News"})]}),Object(O.jsxs)(A.b,{to:"/dish",children:[" ",Object(O.jsx)("h3",{children:"News"})]}),console.log(t.data),t.data.articles.map((function(t){return Object(O.jsx)(I,{title:t.title,description:t.description,url:t.url},t.title)}))]})};n(111);var W=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={abbr:"",cur:""},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(b.a.mark((function t(){var e,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.nbrb.by/api/exrates/rates?periodicity=0",t.next=3,fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,this.setState({abbr:n[4].Cur_Abbreviation,cur:n[4].Cur_OfficialRate});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getCurrency",value:function(){}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[this.state.abbr,": ",this.state.cur]})}}]),n}(a.a.Component);function _(){return Object(O.jsx)("div",{children:"ICOON"})}var B=a.a.createContext(),Q={data:[],isLoaded:!1,cart:[]};function z(t){var e=t.children,n=Object(c.useState)(Q),a=Object(v.a)(n,2),i=a[0],s=a[1],r=Object(c.useState)("pizza"),o=Object(v.a)(r,2),l=o[0],d=o[1],j="https://api.edamam.com/search?q=".concat(l,"&app_id=").concat("ab443e56","&app_key=").concat("ebebb0b4e7e8e2c9dd2b09a8fceb27ee");Object(c.useEffect)((function(){p()}),[l]);var p=function(){s(Object(u.a)(Object(u.a)({},i),{},{isLoaded:!1})),function(){var t=Object(h.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get(j);case 2:e=t.sent,s(Object(u.a)(Object(u.a)({},i),{},{data:e,isLoaded:!0}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()};return Object(O.jsx)(B.Provider,{value:{search:l,setSearch:d,state:i,setState:s},children:e})}function G(){var t=Object(c.useContext)(B);return Object(O.jsx)("div",{children:t.state.cart.map((function(t,e){return Object(O.jsxs)("li",{children:["  ",t.recipe.label]},e)}))})}var U,Z,J,K,P=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={icon:void 0,temp:void 0,city:void 0,country:void 0,humidity:void 0,sunset:void 0,description:"..."},c.gettingWeather=function(){var t=Object(h.a)(b.a.mark((function t(e){var n,a,i,s,r,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!(n=e.target.elements.city.value)){t.next=14;break}return t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=8768da57bd891fa41359848c1665c9e4&units=metric"));case 5:return a=t.sent,t.next=8,a.json();case 8:i=t.sent,s=i.sys.sunset,(r=new Date).setTime(s),o=r.getHours()+":"+r.getMinutes()+":"+r.getSeconds(),c.setState({city:i.name,temp:Math.ceil(i.main.temp)+"\xb0C",country:i.sys.country,humidity:i.main.humidity,sunset:o,description:i.weather[0].description});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c.getCityLocation=c.getCityLocation.bind(Object(p.a)(c)),c.gettingResult=c.gettingResult.bind(Object(p.a)(c)),c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){console.log("func",this.getCityLocation()),this.gettingResult()}},{key:"getCityLocation",value:function(){var t=this;fetch("https://geolocation-db.com/json/639aa2f0-98c5-11eb-a996-0b3faf254bc0").then((function(t){return t.json()})).then((function(e){return t.setState(Object(u.a)(Object(u.a)({},t.state),{},{city:e.city}))}))}},{key:"gettingResult",value:function(){var t=Object(h.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=8768da57bd891fa41359848c1665c9e4&units=metric"));case 2:n=t.sent,console.log("data",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){console.log("city",this.state.city);var t=this.gettingWeather,e=this.state,n=e.city,c=e.country,a=e.temp,i=e.icon,s=e.sunset,r=e.humidity,o=e.description;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"layout-2-column",children:[Object(O.jsx)("div",{className:"todo-container",children:Object(O.jsx)(L,{})}),Object(O.jsxs)("div",{className:"icon-container",children:[Object(O.jsx)(W,{}),Object(O.jsx)(_,{})]})]}),Object(O.jsxs)("div",{className:"layout-3-column",children:[Object(O.jsx)("div",{className:"news-container",children:Object(O.jsxs)(A.b,{to:"/news",children:[" ",Object(O.jsx)("h3",{children:"NEWS "})]})}),Object(O.jsx)("div",{className:"clock-container",children:Object(O.jsx)(x,{})}),Object(O.jsxs)("div",{className:"dish-container",children:[Object(O.jsxs)(A.b,{to:"/dish",children:[" ",Object(O.jsx)("h3",{children:"Dish for today"})]}),Object(O.jsx)("div",{className:"dishForToday",children:Object(O.jsx)(G,{})})]})]}),Object(O.jsxs)("div",{className:"layout-2-column",children:[Object(O.jsx)("div",{className:"weather-container",children:Object(O.jsxs)("div",{className:"weatherBlock",children:[Object(O.jsx)(g,{data:S,gettingWeather:t}),Object(O.jsx)(T,{city:n,country:c,temp:a,sunset:s,icon:i,humidity:r,description:o,data:S})]})}),Object(O.jsx)("div",{className:"quote-container",children:Object(O.jsx)(f,{})})]})]})}}]),n}(a.a.Component),Y=n(5),V=n(43),X=n(38),$=n(39),tt=n(70),et=$.a.div(U||(U=Object(X.a)(["\nposition:relative;\ndisplay: flex;\npadding: 10px;\n  width: 90%;\n  margin: 0 auto;\n  background: unset;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  img {\npadding-top:10px;\n    width:200px;\n    height:200px;\n    border-radius:4px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n"]))),nt=$.a.div(Z||(Z=Object(X.a)(["\npadding-left:10px;\ntext-align: justify;\nfont-size:15px;\nh2{\n    margin-top:0px\n}\n\n"]))),ct=($.a.img(J||(J=Object(X.a)(["\npadding-top:10px;\n    width:200px;\n    height:200px;\n    border-radius:4px\n    "]))),Object($.a)(tt.a)(K||(K=Object(X.a)(["\nwidth: 30px;\nheight: 30px;\nposition: absolute;\ntop: 5px;\nright: 5px;\n&:hover{\n    cursor:pointer\n}\n"]))));function at(t){var e=t.label,n=t.image,c=t.calories,a=t.ingredientLines,i=t.onClick;return Object(O.jsxs)(et,{children:[Object(O.jsx)("img",{src:n,alt:e}),Object(O.jsxs)(nt,{children:[Object(O.jsx)("h2",{children:e}),Object(O.jsxs)("p",{children:["Calories: ",Object(O.jsxs)("i",{children:[Math.ceil(c)," "]})," "]}),Object(O.jsx)("p",{children:a.map((function(t){return Object(O.jsx)("li",{children:t})}))}),Object(O.jsx)("button",{onClick:function(){return i(e)},children:"add"})]})]})}var it=n(69),st=n.n(it);function rt(t){var e=t.label,n=t.image,c=t.calories,a=t.ingredientLines,i=(t.quantity,t.onClick);return Object(O.jsxs)(et,{children:[Object(O.jsx)("img",{src:n,alt:e}),Object(O.jsxs)(nt,{children:[Object(O.jsx)(ct,{onClick:function(){return i(e)}}),Object(O.jsx)("h2",{children:e}),Object(O.jsxs)("p",{children:["Calories: ",Object(O.jsxs)("i",{children:[Math.ceil(c)," "]})," "]}),Object(O.jsx)("p",{children:a.map((function(t){return Object(O.jsx)("li",{children:t})}))})]})]})}function ot(){var t,e=Object(c.useContext)(B),n=Object(c.useState)(!1),a=Object(v.a)(n,2),i=a[0],s=a[1],r=function(){console.log("click"),s(!i)},o=function(t){console.log("e");var n=function(t,e){return t.find((function(t){return t.recipe.label===e}))}(e.state.cart,t);console.log("elem",n);var c=e.state.cart.indexOf(n),a=Object(V.a)(e.state.cart);a.splice(c,1),e.setState(Object(u.a)(Object(u.a)({},e.state),{},{cart:a}))},l=function(t,e){return t.filter((function(t){return t.recipe.label==e}))};return Object(O.jsxs)("div",{children:[Object(O.jsxs)(st.a,{appElement:document.querySelector("#app"),isOpen:i,onRequestClose:r,contentLabel:"My dialog",children:[e.state.cart.length?(t=e.state.cart,t.filter((function(t,e,n){return n.indexOf(t)==e})).map((function(t,n){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(rt,{label:t.recipe.label,image:t.recipe.image,calories:t.recipe.calories,ingredientLines:t.recipe.ingredientLines,quantity:l(e.state.cart).length,onClick:o},n)})}))):Object(O.jsx)("h2",{children:"There is nothing"}),Object(O.jsx)("button",{onClick:r,children:"Close"})]}),Object(O.jsx)("button",{onClick:r,children:"Modal"})]})}n(122);function lt(t){var e=Object(c.useContext)(B),n=function(t){var n=e.state.data.data.hits.find((function(e){return e.recipe.label==t})),c=Object(V.a)(e.state.cart);c.push(n),e.setState(Object(u.a)(Object(u.a)({},e.state),{},{cart:c}))};return console.log(e.state.data),Object(O.jsxs)("div",{children:[Object(O.jsxs)(A.b,{to:"/",children:[" ",Object(O.jsx)("h3",{children:"Home"})]}),Object(O.jsxs)(A.b,{to:"/news",children:[" ",Object(O.jsx)("h3",{children:"News"})]}),Object(O.jsxs)(A.b,{to:"/dish",children:[" ",Object(O.jsx)("h3",{children:"Dish"})]}),Object(O.jsx)(ot,{}),Object(O.jsx)("input",{className:"input-dish",type:"text",placeholder:"find dish",autoComplete:"on",onChange:function(t){e.setSearch(t.target.value)}}),e.state.isLoaded&&e.state.data.data.hits.map((function(t){return Object(O.jsx)(at,Object(u.a)(Object(u.a)({},t.recipe),{},{onClick:n}))}))]})}var dt=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(Y.c,{children:[Object(O.jsx)(Y.a,{exact:!0,path:"/",children:Object(O.jsx)(P,{})}),Object(O.jsx)(Y.a,{path:"/news",children:Object(O.jsx)(H,{})}),Object(O.jsx)(Y.a,{path:"/dish",children:Object(O.jsx)(lt,{})})]})})}}]),n}(a.a.Component);s.a.render(Object(O.jsx)(A.a,{children:Object(O.jsx)(F,{children:Object(O.jsx)(z,{children:Object(O.jsx)(dt,{})})})}),document.getElementById("root"))},52:function(t,e,n){},53:function(t,e,n){},79:function(t,e,n){},81:function(t,e,n){},82:function(t,e,n){},84:function(t,e,n){},85:function(t,e){},90:function(t,e,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.01b9c1ac.chunk.js.map