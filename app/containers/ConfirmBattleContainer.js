var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;

    // Fetch data from GitHub, then update state
    githubHelpers.getPlayersInfo([ query.playerOne, query.playerTwo ])
    .then(function(arrData){
      console.log(arrData);
    });
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={ this.state.isLoading }
        playerInfo={ this.state.playerInfo }
      />

    )
  }
});

module.exports = ConfirmBattleContainer;
