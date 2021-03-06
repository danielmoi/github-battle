var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var browserHistory = ReactRouter.browserHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');

var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var ResultsContainer = require('../containers/ResultsContainer');

var routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={ Main }>
      <IndexRoute component={ Home }></IndexRoute>
      <Route path='playerOne' header='Player One' component={ PromptContainer }></Route>
      <Route path='playerTwo/:playerOne' header='Player Two' component={ PromptContainer }></Route>
    </Route>
    <Route path='battle' component={ ConfirmBattleContainer }></Route>
    <Route path='results' component={ ResultsContainer }></Route>

  </Router>
);

module.exports = routes;
