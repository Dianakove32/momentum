import React from 'react';


class Dish extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uri:"",
      label:"",
      image:""
          }
    
          this.getRecipe = this.getRecipe.bind(this);
  }

  getRecipe() {
    const API = 'https://api.edamam.com/search?q=chicken&app_id=02ff5b94&app_key=38d7e7e23122d500b9bfd3beced06c29&from=0&to=3&calories=591-722&health=alcohol-free'
    fetch(API)
        .then((response) =>{ response.json();
        console.log(response)})
        
        .then((data) => {
          console.log(data)
            this.setState({
              uri:data.uri, image:data.image, label:data.label 
             
            })
       
        })
        .catch(error => console.log('Error', error));
        

  }
    
  render() {
    return (
      <div>
     Hello dish from Diana!
      <button onClick={this.getRecipe}>dish</button> 
      </div>
       
     
    )
  }
}

    
    


export default Dish;



