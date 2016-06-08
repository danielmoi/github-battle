var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var PromptContainer = require('../containers/PromptContainer');

var browserHistory = ReactRouter.browserHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={ Main }>
      <IndexRoute component={ Home }></IndexRoute>
      <Route path='playerOne' header='Player One' component={ PromptContainer }></Route>
      <Route path='playerTwo/:playerOne' header='Player Two' component={ PromptContainer }></Route>
    </Route>

  </Router>
);

module.exports = routes;
