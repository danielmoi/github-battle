var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;
var UserDetails = require('../components/UserDetails');

var styles = require('../styles');

function puke(obj) {
  return (
    <pre> { JSON.stringify(obj, null, ' ')} </pre>
  )
}

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Battle</h1>
        <div className="col-sm-8 col-sm-offset-2">

          <div className="col-sm-6">
            <p className="lead">Player 1</p>
              <UserDetails user={ props.playersInfo[0] }/>
          </div>

          <div className="col-sm-6">
            <p className="lead">Player 2</p>
            <UserDetails user={ props.playersInfo[1] } />
          </div>

        </div>

        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            <button
              type="button"
              className="btn btn-lg btn-success"
              onClick={ props._onInitiateBattle }>
              Initiate Battle!
            </button>
          </div>
        </div>

        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            <Link to='/playerOne' >
              <button
                type="button"
                className="btn btn-lg btn-danger">
                Reselect Players
              </button>

            </Link>
          </div>
        </div>

      </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  _onInitiateBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;
