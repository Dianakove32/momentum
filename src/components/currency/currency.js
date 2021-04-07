import React from 'react';
import CurrencySingle from './currencySingle';


class Currency extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          abbr:"",
          cur:""
      };
            
           
    }
      
  
    
      async componentDidMount(){
          const url='https://www.nbrb.by/api/exrates/rates?periodicity=0';
          const response= await fetch(url);
          const data=await response.json();
          console.log(data);
          console.log(data[4].Cur_Abbreviation, data[4].Cur_OfficialRate)
          this.setState({abbr:data[4].Cur_Abbreviation, cur:data[4].Cur_OfficialRate })
      }
      getCurrency(){
        
      }
    render() {
      return (
        <div>
          
 {this.state.abbr}: {this.state.cur}
         
        </div>
         
       
      )
    }
}
  export default Currency;