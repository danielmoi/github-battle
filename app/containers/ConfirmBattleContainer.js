var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;

    // Fetch data from GitHub, then update state
    // call githubHelpers
    githubHelpers.getPlayersInfo([ query.playerOne, query.playerTwo ])

    // when githubHelpers resolves
    .then(function(arrData){
      this.setState({
        isLoading: false,
        playersInfo: [arrData[0], arrData[1]]
      })
    // explicitly set `this`, note that `bind` follows the curly brace
    }.bind(this));
  },
  _handleInitiateBattle: function(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });

  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={ this.state.isLoading }
        playersInfo={ this.state.playersInfo }
        _onInitiateBattle={ this._handleInitiateBattle }
      />

    )
  }
});

module.exports = ConfirmBattleContainer;
