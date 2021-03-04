import React from 'react';
import  "./Randomaizer.scss";

class ButtonRandomizer extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div className='buttons'>
          <a id='tweet-quote'   className='button' href={`https://twitter.com/intent/tweet/?text=${this.props.quote} - ${this.props.author}`}><i className='fab fa-twitter'></i></a>
          <button   id='new-quote' className='button floating-button' onClick={this.props.handleClick}>
            New quote
          </button>
        </div>
      )
    }
}

export default ButtonRandomizer;