var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('../styles');
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var MainContainer = require('../containers/MainContainer');
var Loading = require('../components/Loading');

function StartOver(props) {
  return (
    <div className="col-sm-12" style={ styles.space }>
      <Link to="/playerOne" >
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  )
}

function puke(obj) {
  return (
    <pre> { JSON.stringify(obj, 2, ' ')} </pre>
  )
}

function Results(props) {
  if (props.isLoading === true) {
    return (
      <Loading speed={800} text="Results are loading" />
    )
  }

  if (props.scores[0] === props.scores[1] ) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper>
            <UserDetails
              score={ props.scores[0]}
              info={ props.playersInfo[0] } />
          </UserDetailsWrapper>

          <UserDetailsWrapper>
            <UserDetails
              score={ props.scores[1]}
              info={ props.playersInfo[1] } />
          </UserDetailsWrapper>
        </div>

        <StartOver />
      </MainContainer>
    )
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">

        <UserDetailsWrapper header="Winner">
          <UserDetails
            score={ props.scores[winningIndex]}
            info={ props.playersInfo[winningIndex] } />
        </UserDetailsWrapper>

        <UserDetailsWrapper header="Loser">
          <UserDetails
            score={ props.scores[losingIndex ]}
            info={ props.playersInfo[losingIndex] } />
        </UserDetailsWrapper>

      </div>

      <StartOver />

    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired

};

module.exports = Results;
