import PropTypes from 'prop-types';
import React from 'react';
import Restaurant from './Restaurant'


function Restaurants(props) {
  let rests = [];
  for (var i = 0; i < props.children.length; i++) {
    let rest_props = props.children[i]
    rests.push(<Restaurant key={i} name={rest_props.name} genre={rest_props.genre} tenbis={rest_props.tenbis} rating={rest_props.rating}/>)
  }
  return (
    <div>
      {rests}
    </div>
  )
}

export default class RestaurantList extends React.Component {
  constructor(props) {
    super(props)
    let hashes = JSON.parse(this.props.json)
    this.state = {hashes: hashes, filters: {genre: null, rating: null, speed: null}}
  }


  componentDidMount() {
  }




  onGenreChanged(e) {
    let filter = e.target.name
    let value = e.target.value

    let tmp = this.state.filters


    switch(filter) {
    case "genre":
        tmp.genre = value
        break;
    case "rating":
        tmp.rating = value
        break;
    case "speed":
        tmp.speed = value
        break;
    default:
        console.log("unknown genre")
    }

    this.setState({filters: tmp})

    let url = "http://localhost:3000/restaurants.json?"

    if (this.state.filters.genre != null && this.state.filters.genre != "All"){
      url = url + "genre=" + this.state.filters.genre + "&"
    }

    if (this.state.filters.rating != null && this.state.filters.rating != "All"){
      url = url + "rating=" + this.state.filters.rating + "&"
    }

    if (this.state.filters.speed != null && this.state.filters.speed!= "All"){
      url = url + "delivery_time=" + this.state.filters.speed + "&"
    }



    console.log(url)

    let _this = this
    $.ajax({url: url}).success(function(data){
      _this.setState({hashes: data})
    })

  }

  render() {
    return (

      <div className=".container">

        <div className="row filters form-inline">


          <div className="col-md-4">
              Cuisine <br/>
            <select id="genre" name="genre" onChange={this.onGenreChanged.bind(this)}>
              <option>All</option>
              <option>Hamburger</option>
              <option>Pizza</option>
              <option>Sushi</option>
              <option>Cafe</option>
              <option>Fish</option>
              <option>Sea Food</option>
            </select>
          </div>


          <div className="col-md-4">
              Rating <br/>
              <select id="rating" name="rating" onChange={this.onGenreChanged.bind(this)}>
                <option >All</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
          </div>

          <div className="col-md-4">
              Speed <br/>
              <select id="speed" name="speed" onChange={this.onGenreChanged.bind(this)}>
                <option>All</option>
                <option value="15">Fast</option>
                <option value="30">Normal</option>
                <option value="60">Slow</option>
              </select>
          </div>

        </div>



        <div className="row">
          <div className="col-md-4 restaurants">
            <Restaurants children={this.state.hashes} />
          </div>
        </div>

      </div>
    )
  }
}
