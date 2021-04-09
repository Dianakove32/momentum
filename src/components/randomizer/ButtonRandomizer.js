import React from 'react';
import  "./Randomaizer.scss";

class ButtonRandomizer extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div className='buttons'>

          <button   id='new-quote' className='button floating-button' onClick={this.props.handleClick}>
            New quote
          </button>
        </div>
      )
    }
}

export default ButtonRandomizer;