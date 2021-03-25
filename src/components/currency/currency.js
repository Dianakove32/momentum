import React from 'react';


class Currency extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          abbr:"",
          cur:""
      };
            
           // this.getCurrency = this.getCurrency.bind(this);
    }
  
    // getCurrency() {
    //   fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
    //       .then((response) =>{ response.json();
    //       console.log(response)})
          
    //       .then((data) => {
    //         console.log(data)
                     
    //       })
    //       .catch(error => console.log('Error', error));
          
  
    
      async componentDidMount(){
          const url='https://www.nbrb.by/api/exrates/rates?periodicity=0';
          const response= await fetch(url);
          const data=await response.json();
          console.log(data.Cur_Abbreviation, data[0].Cur_OfficialRate)
          this.setState({abbr:data[0].Cur_Abbreviation, cur:data[0].Cur_OfficialRate })
      }
      getCurrency(){
        
      }
    render() {
      return (
        <div>
          
 {this.state.abbr} {this.state.cur}
         
        </div>
         
       
      )
    }
}
  export default Currency;