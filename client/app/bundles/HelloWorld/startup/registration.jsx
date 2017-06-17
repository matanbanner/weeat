import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import Restaurant from '../components/Restaurant';
import RestaurantList from '../components/RestaurantList';
import NewRestauratButton from '../components/NewRestauratButton';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld, Restaurant, RestaurantList, NewRestauratButton
});
