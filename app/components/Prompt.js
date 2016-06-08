var React = require('react');
var PropTypes = React.PropTypes;

var transparentBg = require('../styles').transparentBg;

var Prompt = function(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={ transparentBg }>
      <h1>{ props.header }</h1>
      <div className="col-sm-12">
        <form onSubmit={ props._onSubmitUser }>
          <div className="form-group">
            <input
              type="text"
              placeholder="GitHub username"
              className="form-control"
              onChange={ props._onUpdateUser }
              value={ props.username }
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
};

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    _onSubmitUser: PropTypes.func.isRequired,
    _onUpdateUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = Prompt;
