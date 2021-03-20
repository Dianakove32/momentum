import React from 'react';


class DishRandom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dish: [],
          }
    
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const API = 'https://foodish-api.herokuapp.com/'
    fetch(API)
        .then((response) => response.json())
       
        .then((data) => {
            this.setState({
             dish: data
             
            })
       
        })
        .catch(error => console.log('Error', error));
        

  }
    
  render() {
    return (
      <div id='quote-box'>
      {this.state.dish}
      </div>
       
     
    )
  }
}

    
    


export default DishRandom;