var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
  getInitialState: function() {
    return {
      username: ''
    }
  },
  _onUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },
  render: function() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={ transparentBg }>
        <h1>{ this.props.route.header }</h1>
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="GitHub username"
                className="form-control"
                onChange={ this._onUpdateUser }
                value={ this.state.username }
                />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-block btn-success" type="submit">
                Continue
              </button>

            </div>
          </form>
        </div>
      </div>
    )

  }
});

module.exports = PromptContainer;
