import PropTypes from 'prop-types';
import React from 'react';


function Tenbis(props) {
  let tenbis = null;
  if (props.tenbis) {
    tenbis = <img src="assets/tenbis.png"/>;
  }
  return tenbis
}


function Stars(props) {
  let stars = [];
  for (var i = 0; i < props.rating; i++) {
    stars.push(<span key={i} className="glyphicon glyphicon-star"></span>)
  }
  return (
    <div>
      Rating: {stars}
    </div>
  )

}


export default class Restaurant extends React.Component {

  render() {
    let genreToSymbol = {
      "Hamburger": "a",
      "Pizza": "l",
      "Sushi": "i",
      "Fish": "k",
      "Cafe": "b",
      "Sea Food": "c"
    }

    return (
      <div className="restaurant">
        <div className="restaurant_content">
          <span className="genre"> {genreToSymbol[this.props.genre]} </span>
          <span className="content">
            <span className="name"> {this.props.name} </span>
            <Tenbis tenbis={this.props.tenbis}/>
            <br/>
            <Stars rating={this.props.rating} />
          </span>
        </div>
      </div>
    );
  }
}
