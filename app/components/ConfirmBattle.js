var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var MainContainer = require('../containers/MainContainer');
var Loading = require('../components/Loading');

var styles = require('../styles');

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <Loading speed={100} text="Wait one moment please"/>
  : <MainContainer>
        <h1>Confirm Battle</h1>
        <div className="col-sm-8 col-sm-offset-2">

          <UserDetailsWrapper header="Player 1">
            <UserDetails
              info={ props.playersInfo[0] } />
          </UserDetailsWrapper>

          <UserDetailsWrapper header="Player 2">
            <UserDetails
              info={ props.playersInfo[1] } />
          </UserDetailsWrapper>

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

      </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  _onInitiateBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;
