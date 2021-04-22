(this["webpackJsonpclock-app"]=this["webpackJsonpclock-app"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},125:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(17),s=c.n(i),r=c(8),o=c(9),d=c(11),l=c(10),j=(c(64),c(13)),b=c(27),h=c.n(b),u=c(34),p=c(29),O=(c(91),c(92),c(1)),m=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={timer:setInterval(n.setDate.bind(Object(p.a)(n)),1e3),secondDegrees:0,minuteDegress:0,hourDegrees:0},n}return Object(o.a)(c,[{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"setDate",value:function(){var e=document.querySelector("#hr"),t=document.querySelector("#mn"),c=document.querySelector("#sc");setInterval((function(){var n=new Date,a=30*n.getHours(),i=6*n.getMinutes(),s=6*n.getSeconds();e.style.transform="rotateZ(".concat(a+i/12,"deg)"),t.style.transform="rotateZ(".concat(i,"deg)"),c.style.transform="rotateZ(".concat(s,"deg)")}))}},{key:"render",value:function(){var e={transform:"rotate(".concat(this.state.secondDegrees,"deg)")},t={transform:"rotate(".concat(this.state.minuteDegrees,"deg)")},c={transform:"rotate(".concat(this.state.hourDegrees,"deg)")};return Object(O.jsx)("div",{className:"clock-container1",children:Object(O.jsxs)("div",{className:"clock",children:[Object(O.jsx)("div",{className:"hour",style:c,children:Object(O.jsx)("div",{className:"hr",id:"hr"})}),Object(O.jsx)("div",{className:"min",style:t,children:Object(O.jsx)("div",{className:"mn",id:"mn"})}),Object(O.jsx)("div",{className:"sec",style:e,children:Object(O.jsx)("div",{className:"sc",id:"sc"})})]})})}}]),c}(a.a.Component),x=(c(65),function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){return Object(r.a)(this,c),t.call(this,e)}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"buttons",children:Object(O.jsx)("button",{id:"new-quote",className:"button floating-button",onClick:this.props.handleClick,children:"New quote"})})}}]),c}(a.a.Component)),f=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={quoteData:[],quote:"",author:""},n.randomQuote=n.randomQuote.bind(Object(p.a)(n)),n.handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/").then((function(e){return e.json()})).then((function(t){e.setState({quoteData:t.quotes},(function(){e.handleClick()}))})).catch((function(e){return console.log("Error",e)}))}},{key:"randomQuote",value:function(){var e=Math.floor(Math.random()*this.state.quoteData.length);return this.state.quoteData[e]}},{key:"handleClick",value:function(){var e=this.randomQuote();this.setState({quote:e.quote,author:e.author})}},{key:"render",value:function(){return Object(O.jsxs)("div",{id:"quote-box",children:[Object(O.jsxs)("blockquote",{children:[Object(O.jsxs)("p",{children:[" ",this.state.quote]}),Object(O.jsxs)("footer",{children:["\u2014 ",Object(O.jsx)("cite",{children:this.state.author})]})]}),Object(O.jsx)(x,{handleClick:this.handleClick})]})}}]),c}(a.a.Component),g=(c(94),function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.gettingWeather;return Object(O.jsx)("div",{children:Object(O.jsx)("form",{onSubmit:e,children:Object(O.jsx)("input",{className:" input-weather ",type:"text",name:"city",placeholder:"Enter city..."})})})}}]),c}(n.Component)),v=(c(95),c(21)),y=(c(171),c(167),c(173),c(172),c(165)),N=[{descriptionData:"clear",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8e5GRi9lC8QxKIhgb_j-jdlJ3xf_jjVj_Fw&usqp=CAU",text:"You can relax"},{descriptionData:"rain",image:"https://i.pinimg.com/originals/9e/f3/b5/9ef3b5ee6c9610220183e9545bbd5202.png",text:"Take umdrella"},{descriptionData:"clouds",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FtQeTu2HfNvPamrtpYHInn6Df2GTNNkDWA&usqp=CAU ",text:"Take umdrella"},{descriptionData:"smoke",image:"https://image.shutterstock.com/image-photo/foggy-weather-on-hill-260nw-161556896.jpg ",text:"Be careful. its not clear on the road"},{descriptionData:"mist",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8aRZKsmztd5mZHUttnc7bfBomcBn2yOTs4A&usqp=CAU ",text:"Be careful. its not clear on the road"},{descriptionData:"snow",image:"https://ru.seaicons.com/wp-content/uploads/2015/10/sleet-icon.png",text:"Today will be beautifull"},{descriptionData:"dust",image:"https://lh3.googleusercontent.com/proxy/hUnspsQnxkph3Tg8I-E7OJ0bV6OHN_qE9sWGmBX0cMCT6SBRGcXt1XQumYIaxDlmHCt1J3WrnHyhwhvQEAt8ko9tcEckt7UnaBae2eNTuCdiUDhSNbKrgEpXtQY2nn4",text:"Be careful. its not clear on the road"},{descriptionData:"haze",image:"https://lh3.googleusercontent.com/proxy/hUnspsQnxkph3Tg8I-E7OJ0bV6OHN_qE9sWGmBX0cMCT6SBRGcXt1XQumYIaxDlmHCt1J3WrnHyhwhvQEAt8ko9tcEckt7UnaBae2eNTuCdiUDhSNbKrgEpXtQY2nn4",text:"Be careful. its not clear on the road"}];Object(y.a)((function(e){return{root:{height:50},wrapper:{width:250+e.spacing(1)},Controllabel:{marginLeft:0},paper:{zIndex:1,position:"absolute",margin:e.spacing(2),padding:10,bottom:50,left:10,backgroundRepeat:"no-repeat",width:250,height:200},im:{opacity:1}}}));c(100);var k=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){return Object(r.a)(this,c),t.call(this,e)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.city,c=e.temp,n=e.description,a=e.data,i=null;return a.forEach((function(e){if(n.includes(e.descriptionData))return e.image,i=e.text})),Object(O.jsxs)("div",{className:"weather-content",children:[Object(O.jsxs)("p",{children:[Object(O.jsxs)("b",{children:[t," ",c," "]}),"   "]}),Object(O.jsxs)("p",{children:["Today is  ",n,"."]}),Object(O.jsx)("p",{children:i})]})}}]),c}(n.Component),w=(c(101),function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={todoList:[],todo:{text:"",category:"Coding"},filter:"All"},e.addTodo=function(t){t.preventDefault();var c=e.state.todoList;c.push(e.state.todo),e.setState({todo:{text:"",category:e.state.todo.category},todoList:c})},e.putOneTodo=function(t){e.setState({todo:{text:t.target.value,category:e.state.todo.category}})},e.putOneCategory=function(t){e.setState({todo:{text:e.state.todo.text,category:t.target.value}})},e.deleteTodo=function(t){var c=e.state.todoList;c.splice(t,1),e.setState({todoList:c})},e.displayCategory=function(t){e.setState({filter:t.target.innerText})},e}return Object(o.a)(c,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"Todo",children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"todo_item1",children:[Object(O.jsxs)("div",{className:"input-wrapper",children:[Object(O.jsxs)("div",{className:"category",children:["Category:   ",Object(O.jsxs)("select",{onChange:this.putOneCategory,className:"categories-container",children:[Object(O.jsx)("option",{children:" Coding"}),Object(O.jsx)("option",{children:" Sports"}),Object(O.jsx)("option",{children:" Food"}),Object(O.jsx)("option",{children:" Extra"})]})]}),Object(O.jsx)("form",{onSubmit:this.addTodo,children:Object(O.jsx)("textarea",{className:"enter-note",value:this.state.todo.text,onChange:this.putOneTodo,placeholder:"Write your todo here...",onSubmit:this.addTodo})}),Object(O.jsx)("button",{className:"addBtn",onClick:this.addTodo,children:"Add it"})]}),Object(O.jsx)("div",{className:"todos-container1",children:0!==this.state.todoList.length?this.state.todoList.filter((function(t){return"All"===e.state.filter||t.category===e.state.filter})).map((function(t,c){return Object(O.jsxs)("div",{className:"todos-container-item",children:[Object(O.jsx)("button",{className:"btn-delete",onClick:function(){e.deleteTodo(c)},children:"X"}),Object(O.jsxs)("p",{children:["  ",t.text,"  "]})]},c)})):Object(O.jsx)("div",{className:"todoNothing",children:"You did not add any todo yet"})})]})," "]}),Object(O.jsxs)("div",{className:"filter-container",children:[Object(O.jsx)("button",{className:"category-button",onClick:this.displayCategory,children:"Coding"}),Object(O.jsx)("button",{className:"category-button",onClick:this.displayCategory,children:"Sports"}),Object(O.jsx)("button",{className:"category-button",onClick:this.displayCategory,children:"Food"}),Object(O.jsx)("button",{className:"category-button",onClick:this.displayCategory,children:"Extra"}),Object(O.jsx)("button",{className:"category-button",onClick:this.displayCategory,children:"All"})]})]})}}]),c}(a.a.Component)),C=c(16),S=c(55),D=c.n(S);c(52);function q(e){var t=e.name,c=e.url;e.image;return Object(O.jsxs)("div",{className:"cardNew",children:[Object(O.jsx)("div",{className:"cardNew-img",children:Object(O.jsx)("img",{src:c,alt:"news-pict"})}),Object(O.jsxs)("div",{className:"cardNew-content",children:[Object(O.jsx)("h3",{children:t}),Object(O.jsx)("div",{children:Object(O.jsx)("a",{href:c,children:"read more >"})})]})]})}c(123);var E=Object(n.createContext)(),T=function(e){var t=e.children,c=Object(n.useState)({}),a=Object(v.a)(c,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",{method:"GET",headers:{"x-bingapis-sdk":"true","x-rapidapi-key":"882af9aa22mshb2364291efb3859p188c75jsnb2edc39e47b4","x-rapidapi-host":"bing-news-search1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(O.jsx)(E.Provider,{value:{data:i,setData:s},children:t})},L=function(){var e,t=Object(n.useContext)(E);return Object(O.jsxs)("div",{className:"dish-wrapper",children:[Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(C.b,{className:"nav-item",to:"/",children:" Home"}),Object(O.jsx)(C.b,{className:"nav-item innactiv",to:"/news",children:" News"}),Object(O.jsx)(C.b,{className:"nav-item ",to:"/dish",children:" Dish"})]}),Object(O.jsx)("h2",{children:"NEWS"}),Object(O.jsxs)("div",{classname:"newsList",children:[null===(e=t.data.value)||void 0===e?void 0:e.map((function(e){return Object(O.jsx)(q,{name:e.name,url:e.image.thumbnail.contentUrl},e.name)})),"  "]})]})};a.a.Component;var A=c.p+"static/media/facebook.ad64850b.svg",I=c.p+"static/media/instagram.ca5891e4.svg",H=c.p+"static/media/slack.867246f3.svg",U=c.p+"static/media/twitter.da0951fd.svg",B=c.p+"static/media/github.3fdab464.svg",W=(c(125),c(42)),Q=c.n(W);function R(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),c=t[0],a=t[1],i=function(){console.log("click"),a(!c)};return Object(O.jsxs)("div",{className:"icons",children:[Object(O.jsxs)("div",{className:"icon-item",children:[Object(O.jsx)("a",{href:"https://www.facebook.com/",children:Object(O.jsx)("img",{src:A,alt:"facebook"})})," "]}),Object(O.jsxs)("div",{className:"icon-item",children:[Object(O.jsx)("a",{href:"https://www.instagram.com/",children:Object(O.jsx)("img",{src:I,alt:"instagram"})})," "]}),Object(O.jsxs)("div",{className:"icon-item",children:[Object(O.jsx)("a",{href:"https://app.slack.com/",children:Object(O.jsx)("img",{src:H,alt:"slack"})})," "]}),Object(O.jsxs)("div",{className:"icon-item",children:[Object(O.jsx)("a",{href:"https://twitter.com/",children:Object(O.jsx)("img",{src:U,alt:"twitter"})})," "]}),Object(O.jsxs)("div",{className:"icon-item",children:[Object(O.jsx)("a",{href:"https://github.com/",children:Object(O.jsx)("img",{src:B,alt:"github"})})," "]}),Object(O.jsx)("div",{className:"icon-item",children:Object(O.jsx)("div",{className:"last",onClick:i,children:"+ "})}),Object(O.jsx)("div",{className:"popup",children:Object(O.jsxs)(Q.a,{appElement:document.querySelector("#app"),isOpen:c,onRequestClose:i,style:{content:{top:"35%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",width:"60%",transform:"translate(-40%, -10%)"}},children:[Object(O.jsx)("div",{className:"modal",children:Object(O.jsx)("button",{className:"btn-modal",onClick:i,children:"Close"})}),Object(O.jsx)("h3",{children:"Add icon"}),Object(O.jsxs)("div",{className:"icons",children:[Object(O.jsxs)("div",{className:"icon-item",children:[Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("img",{src:A,alt:"facebook"})})," "]}),Object(O.jsxs)("div",{className:"icon-item",children:[Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("img",{src:I,alt:"instagram"})})," "]}),Object(O.jsxs)("div",{className:"icon-item",children:[Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("img",{src:H,alt:"slack"})})," "]}),Object(O.jsxs)("div",{className:"icon-item",children:[Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("img",{src:U,alt:"twitter"})})," "]}),Object(O.jsxs)("div",{className:"icon-item",children:[Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("img",{src:B,alt:"github"})})," "]})]})]})})]})}var G=c(46),M=c.n(G);var F=a.a.createContext(),_={data:[],isLoaded:!1,cart:[],snackbar:!1};function z(e){var t=e.children,c=Object(n.useState)(_),a=Object(v.a)(c,2),i=a[0],s=a[1],r=Object(n.useState)("pizza"),o=Object(v.a)(r,2),d=o[0],l=o[1];Object(n.useEffect)((function(){var e=localStorage.getItem("recipy"),t=JSON.parse(e);s(Object(j.a)(Object(j.a)({},i),{},{cart:t}))}),[]);var b="https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("ab443e56","&app_key=").concat("ebebb0b4e7e8e2c9dd2b09a8fceb27ee");Object(n.useEffect)((function(){p()}),[d]);var p=function(){s(Object(j.a)(Object(j.a)({},i),{},{isLoaded:!1})),function(){var e=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get(b);case 2:t=e.sent,s(Object(j.a)(Object(j.a)({},i),{},{data:t,isLoaded:!0}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()};return Object(O.jsx)(F.Provider,{value:{search:d,setSearch:l,state:i,setState:s},children:t})}var J,X,Y,K,V,Z,P,$=c(32),ee=c(33),te=c(81),ce=ee.a.div(J||(J=Object($.a)(["\nwidth:500px;\nposition:relative;\ndisplay: flex;\npadding:20px 10px 10px 10px;\nborder-radius: 4px;\n\nmargin: 0 auto;\nbackground: unset;\nbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\nbackground:#f6f1f1;\n  img {\n    padding-top:10px;\n    width:200px;\n    height:200px;\n    border-radius:4px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n"]))),ne=ee.a.div(X||(X=Object($.a)(["\nwidth:210px;\n}\n"]))),ae=ee.a.div(Y||(Y=Object($.a)(["\npadding-left:10px;\ntext-align: justify;\nfont-size:12px;\nh3{\n    color: rgb(107, 89, 89);\n    margin-top:0px\n}\n"]))),ie=(ee.a.img(K||(K=Object($.a)(["\n    padding-top:10px;\n    width:200px;\n    height:200px;\n    border-radius:4px\n    "]))),Object(ee.a)(te.a)(V||(V=Object($.a)(["\nwidth: 20px;\nheight: 20px;\nposition: absolute;\ntop: 5px;\nright: 5px;\ncolor:red;\n&:hover{\n    cursor:pointer\n}\n"])))),se=ee.a.button(Z||(Z=Object($.a)(["\n    background-color:  rgb(191, 221, 248);\n    border: 1px solid rgb(167, 182, 230);\n    padding: 3px;\n    border-radius: 4px;\n    font-size: 12px;\nmargin-top:10px;\nbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]))),re=ee.a.div(P||(P=Object($.a)(["\nposition: absolute;\n  display: flex;\njustify-content: center;\n align-items:center;\nright: -5px;\ntop: 13px;\nwidth: 20px;\nheight: 20px;\nbackground: #df6d85;\nborder-radius: 50%;\n"])));function oe(e){var t=e.label,c=e.image,n=e.calories,a=e.ingredientLines,i=e.onClick;return Object(O.jsxs)(ce,{children:[Object(O.jsxs)(ne,{children:[Object(O.jsx)("img",{src:c,alt:t}),Object(O.jsx)(se,{onClick:function(){return i(t)},children:"Add recipes"})]}),Object(O.jsxs)(ae,{children:[Object(O.jsx)("h3",{children:t}),Object(O.jsxs)("p",{children:["Calories: ",Object(O.jsxs)("i",{children:[Math.ceil(n)," "]})," "]}),Object(O.jsx)("p",{children:a.map((function(e){return Object(O.jsx)("li",{children:e})}))})]})]})}function de(){return Object(O.jsxs)("div",{className:"dishFor",children:[Object(O.jsx)("div",{className:"img-round",children:Object(O.jsx)("img",{src:"https://allshecooks.com/wp-content/uploads/2016/05/strawberry-limeade-rum-punch-party-drink-cocktail.jpg"})}),Object(O.jsx)("h3",{children:"Strawberry Limeade Vodka Cocktail"}),Object(O.jsx)("li",{children:"1/2 Cup sugar, "}),Object(O.jsx)("li",{children:"2 cups of strawberries (8-10 large strawberries)"}),Object(O.jsx)("li",{children:"3/4 cup of  Vodka"}),Object(O.jsx)("li",{children:"4 limes (squeezed)"}),Object(O.jsx)("li",{children:"1/2-3/4 cup of water"})]})}c(54);function le(){var e=Object(n.useContext)(F);return console.log(e.state.cart),Object(O.jsx)("div",{children:e.state.cart.length?e.state.cart.map((function(e,t){return Object(O.jsxs)("div",{className:"circul-img",children:[Object(O.jsx)("img",{src:e.recipe.image}),Object(O.jsxs)("p",{children:["  ",e.recipe.label]},t)," "]})})):Object(O.jsxs)("div",{children:["  ",Object(O.jsx)(de,{}),"  "]})})}function je(e){e.name,e.url,e.image;return Object(O.jsxs)("div",{className:"CardOneNew",children:[Object(O.jsx)("div",{className:"CardOneNew-img",children:Object(O.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_UNESCO.svg/1200px-Flag_of_UNESCO.svg.png",alt:"news-pict"})}),Object(O.jsxs)("div",{className:"CardOneNew-content",children:[Object(O.jsx)("h3",{children:"News Decoder teams up with UNESCO to promote press freedom "}),Object(O.jsx)("p",{children:"News Decoder is helping UNESCO promote press freedom with a global webinar on how threats to journalists\u2019 safety imperil the public\u2019s right to know."}),Object(O.jsx)("div",{children:Object(O.jsx)("a",{href:"https://news-decoder.com/news-decoder-teams-up-with-unesco-to-promote-press-freedom/",children:"read more >"})})]})]})}c(136);var be=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("select",{id:"selectColor",onChange:function(){var e=document.querySelector("#selectColor");document.body.style.backgroundColor=e.options[e.selectedIndex].text},children:[Object(O.jsx)("option",{value:"change backgraund",children:"change backgraund"}),Object(O.jsx)("option",{children:"WHITE"}),Object(O.jsx)("option",{children:"WHEAT"}),Object(O.jsx)("option",{children:"KHAKI"}),Object(O.jsx)("option",{children:"SILVER"}),Object(O.jsx)("option",{children:"LIGHTGREEN"}),Object(O.jsx)("option",{children:"TEAL"}),Object(O.jsx)("option",{children:"LIGHTBLUE"}),Object(O.jsx)("option",{children:"CORAL"})]})}}]),c}(a.a.Component),he=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={icon:void 0,temp:void 0,city:"Smile. Life is wonderfull",country:void 0,humidity:void 0,sunset:void 0,description:"..."},n.gettingWeather=function(){var e=Object(u.a)(h.a.mark((function e(t){var c,a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(c=t.target.elements.city.value)){e.next=10;break}return e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&appid=8768da57bd891fa41359848c1665c9e4&units=metric"));case 5:return a=e.sent,e.next=8,a.json();case 8:"city not found"==(i=e.sent).message?alert("City not found. Please enter correct data"):n.setState({city:i.name,temp:Math.ceil(i.main.temp)+"\xb0C",country:i.sys.country,humidity:i.main.humidity,description:i.weather[0].description});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getCityLocation=n.getCityLocation.bind(Object(p.a)(n)),n.getCityLocation(),n}return Object(o.a)(c,[{key:"componentDidMount",value:function(){}},{key:"getCityLocation",value:function(){var e=this;fetch("https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1").then((function(e){return e.json()})).then((function(t){return e.setState(Object(j.a)(Object(j.a)({},e.state),{},{city:t.city})),t.city})).then(function(){var e=Object(u.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=8768da57bd891fa41359848c1665c9e4&units=metric"));case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(t){return e.setState({city:t.name,temp:Math.ceil(t.main.temp)+"\xb0C",country:t.sys.country,humidity:t.main.humidity,description:t.weather[0].description})}))}},{key:"render",value:function(){console.log("city",this.state.city);var e=this.gettingWeather,t=this.state,c=t.city,n=t.country,a=t.temp,i=t.icon,s=t.sunset,r=t.humidity,o=t.description,d=null;return N.forEach((function(e){if(o.includes(e.descriptionData))return d=e.image,e.text})),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsxs)("div",{className:"todo-container card",children:[Object(O.jsx)("div",{className:"title-card",children:"My todo list"}),Object(O.jsx)(w,{})]}),Object(O.jsxs)("div",{className:"icon-container card",children:[Object(O.jsx)("div",{className:"title-card",children:"Social media"}),Object(O.jsx)(R,{})]}),Object(O.jsxs)("div",{className:"news-container card",children:[Object(O.jsxs)("div",{className:"title-card",children:[" NEWS ",Object(O.jsx)("div",{className:"title-link",children:Object(O.jsx)(C.b,{to:"/news",children:"find more news"})})]}),Object(O.jsx)(je,{})]}),Object(O.jsx)("div",{className:"clock-container card",children:Object(O.jsx)(m,{})}),Object(O.jsxs)("div",{className:"dish-container card",children:[Object(O.jsxs)("div",{className:"title-card",children:["Dish for today",Object(O.jsx)("div",{className:"title-link",children:Object(O.jsx)(C.b,{to:"/dish",children:"find more recipy"})})]}),Object(O.jsx)("div",{className:"dishForToday",children:Object(O.jsx)(le,{})})]}),Object(O.jsxs)("div",{className:"weather-container card",style:{backgroundImage:"url(".concat(d,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundWidth:"400",backgroundHeight:"300"},children:[Object(O.jsx)("div",{className:"title-card",children:"weather"}),Object(O.jsxs)("div",{className:"weatherBlock",children:[Object(O.jsx)(g,{data:N,gettingWeather:e}),Object(O.jsx)(k,{city:c,country:n,temp:a,sunset:s,icon:i,humidity:r,description:o,data:N})]})]}),Object(O.jsxs)("div",{className:"quote-container card",children:[Object(O.jsx)("div",{className:"title-card",children:"phrase of the day"}),Object(O.jsx)(f,{})]}),Object(O.jsxs)("div",{className:"footer card",children:[Object(O.jsx)("div",{className:"title-card",children:"settings"}),Object(O.jsxs)("div",{className:"footer-content",children:[Object(O.jsx)("div",{className:"icon-item",children:Object(O.jsx)("div",{className:"last",children:"+ "})}),Object(O.jsx)(be,{})]})]})]})})}}]),c}(a.a.Component),ue=c(7),pe=c(50);function Oe(e){var t=e.label,c=e.image,n=e.calories,a=e.ingredientLines,i=(e.quantity,e.onClick);return Object(O.jsxs)(ce,{children:[Object(O.jsx)("img",{src:c,alt:t}),Object(O.jsxs)(ae,{children:[Object(O.jsx)(ie,{onClick:function(){return i(t)}}),Object(O.jsx)("h3",{children:t}),Object(O.jsxs)("p",{children:["Calories: ",Object(O.jsxs)("i",{children:[Math.ceil(n)," "]})," "]}),Object(O.jsx)("p",{children:a.map((function(e){return Object(O.jsx)("li",{children:e})}))})]})]})}function me(){var e=Object(n.useContext)(F),t=Object(n.useState)(!1),c=Object(v.a)(t,2),a=c[0],i=c[1],s=function(){console.log("click"),i(!a)},r=function(t){var c=function(e,t){return e.find((function(e){return e.recipe.label===t}))}(e.state.cart,t),n=e.state.cart.indexOf(c),a=Object(pe.a)(e.state.cart);a.splice(n,1),e.setState(Object(j.a)(Object(j.a)({},e.state),{},{cart:a}))},o=function(e,t){return e.filter((function(e){return e.recipe.label==t}))};return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"modal",children:Object(O.jsxs)(Q.a,{appElement:document.querySelector("#app"),isOpen:a,onRequestClose:s,contentLabel:"My dialog",children:[Object(O.jsx)("button",{className:"btn-modal",onClick:s,children:"Close"}),e.state.cart.length?function(t){var c=JSON.stringify(t);return localStorage.setItem("recipy",c),t.filter((function(e,t,c){return c.indexOf(e)==t})).map((function(t,c){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Oe,{label:t.recipe.label,image:t.recipe.image,calories:t.recipe.calories,ingredientLines:t.recipe.ingredientLines,quantity:o(e.state.cart).length,onClick:r},c)})}))}(e.state.cart):Object(O.jsx)("h2",{children:"There is nothing"})]})}),Object(O.jsxs)("div",{className:"recipes-btn-wrapper",children:[Object(O.jsx)(re,{children:e.state.cart.length}),Object(O.jsx)("button",{className:"btn-wish",onClick:s,children:"Selected recipes"})]})]})}var xe=c(168),fe=c(170);c(137);function ge(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{class:"lds-spinner",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})})}function ve(e){return Object(O.jsx)(xe.a,Object(j.a)({elevation:6,variant:"filled"},e))}var ye=Object(y.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function Ne(e){var t=Object(n.useContext)(F),c=ye(),i=a.a.useState(!1),s=Object(v.a)(i,2),r=s[0],o=s[1],d=function(e){var c,n=t.state.data.data.hits.find((function(t){return t.recipe.label==e})),a=Object(pe.a)(t.state.cart);a.includes(n)||(a.push(n),c=a,M.a.set("recipy1",c),console.log("recipy1:",c),t.setState(Object(j.a)(Object(j.a)({},t.state),{},{cart:a})),o(!0))};setTimeout((function(){o(!1)}),3e3);var l=function(e,t){"clickaway"!==t&&o(!1)};return Object(O.jsxs)("div",{className:"dish-wrapper",children:[Object(O.jsxs)("div",{className:"nav-header",children:[Object(O.jsx)(me,{}),Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(C.b,{className:"nav-item",to:"/",children:" Home"}),Object(O.jsx)(C.b,{className:"nav-item",to:"/news",children:" News "}),Object(O.jsx)(C.b,{className:"nav-item innactiv",to:"/dish",children:"  Dish "})]})]}),Object(O.jsx)("h2",{children:"Find dish for today"}),Object(O.jsx)("div",{className:"input-wrapper",children:Object(O.jsx)("input",{className:"input-dish",type:"text",placeholder:"Find recipy...",autoComplete:"on",onChange:function(e){t.setSearch(e.target.value)}})}),Object(O.jsx)("div",{className:"dish-output",children:t.state.isLoaded?t.state.data.data.hits.map((function(e,t){return Object(O.jsx)(oe,Object(j.a)(Object(j.a)({},e.recipe),{},{onClick:d}),t)})):Object(O.jsx)(ge,{})}),Object(O.jsx)("div",{className:c.root,children:Object(O.jsx)(fe.a,{open:r,autoHideDuration:6e3,onClose:l,children:Object(O.jsx)(ve,{onClose:l,severity:"success",children:"Recipy has been added"})})})]})}var ke=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(ue.c,{children:[Object(O.jsx)(ue.a,{exact:!0,path:"/",children:Object(O.jsx)(he,{})}),Object(O.jsx)(ue.a,{path:"/news",children:Object(O.jsx)(L,{})}),Object(O.jsx)(ue.a,{path:"/dish",children:Object(O.jsx)(Ne,{})})]})})}}]),c}(a.a.Component);s.a.render(Object(O.jsx)(C.a,{children:Object(O.jsx)(T,{children:Object(O.jsx)(z,{children:Object(O.jsx)(ke,{})})})}),document.getElementById("root"))},52:function(e,t,c){},54:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},94:function(e,t,c){},95:function(e,t){}},[[138,1,2]]]);
//# sourceMappingURL=main.54dcd8ed.chunk.js.map