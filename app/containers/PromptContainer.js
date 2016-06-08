var React = require('react');

var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    }
  },
  _handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },
  _handleSubmitUser: function(e) {
    e.preventDefault();

    // cache the username
    var username = this.state.username;

    // reset username
    this.setState({
      username: ''
    });

    if ( this.props.routeParams.playerOne ) {
      // go to battle
      // pass object to .push, to set route
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })

    } else {
      // go to playerTwo
      // pass string to .push, to set route
      this.context.router.push( '/playerTwo/' + this.state.username );
    }
  },
  render: function() {
    return (
      <Prompt
        _onSubmitUser={ this._handleSubmitUser }
        _onUpdateUser={ this._handleUpdateUser }
        header={ this.props.route.header }
        username={ this.state.username }
        />
    )

  }
});

module.exports = PromptContainer;
