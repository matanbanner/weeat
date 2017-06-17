import PropTypes from 'prop-types';
import React from 'react';

export default class NewRestauratButton extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    // this.state = { name: this.props.name };
  }

  onGenreChanged(e) {
  }

  render() {
    return (
      <div>
        <a href="https://www.w3schools.com">
        <img className="plus" src="http://localhost:3000/assets/plus" onChange={this.onGenreChanged.bind(this)}/>
        </a>
      </div>
    );
  }
}
