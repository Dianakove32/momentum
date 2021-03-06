import React from 'react';
import SizeOfCard from '../SizeOfCard/SizeOfCard';
import ButtonRandomizer from "./ButtonRandomizer"
import "./Randomaizer.scss";


class Randomizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteData: [],
      quote: '',
      author: '',

    }
    this.randomQuote = this.randomQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/'
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quoteData: data.quotes
        }, () => {
          // add handle click function here, so that a random quote in shown on initial load
          this.handleClick();
        })
      })
      .catch(error => console.log('Error', error));
    // remove randomQuote() call from here, there is no use of that call here.

  }

  randomQuote() {
    const randomNumber = Math.floor(Math.random() * this.state.quoteData.length);
    return this.state.quoteData[randomNumber];
  }

  handleClick() {
    const oneRandomQuote = this.randomQuote();
    this.setState({
      quote: oneRandomQuote.quote,
      author: oneRandomQuote.author
    })
  }



  render() {
    return (
      <div  id='quote-box'>
        {/* <div className='text-container'>
        <span className='text-brac '>&#8223;</span>
          <span id='text'>
            {this.state.quote} <span className='text-brac-right '>&#8222;</span>
          </span>
          <h3 className='author'>
            - {this.state.author} -
          </h3>
        </div> */}
        <blockquote>
          <p> {this.state.quote}</p>
          <footer>— <cite>{this.state.author}</cite></footer>
        </blockquote>

        <ButtonRandomizer handleClick={this.handleClick} />

      </div>
    )
  }
}


export default Randomizer;