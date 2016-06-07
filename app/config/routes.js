var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// var hashHistory = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  // <Router history={ hashHistory }>
  <Router history={ browserHistory }>
    <Route path='/' component={ Main }>
      {/*<IndexRoute component={ Home }></IndexRoute>*/}
      <Route path='home' component={ Home }></Route>
    </Route>

  </Router>
);

module.exports = routes;