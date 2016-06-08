var React = require('react');
var PropTypes = React.PropTypes;

function puke(obj) {
  return (
    <pre> { JSON.stringify(obj, null, ' ')} </pre>
  )
}

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
  : <div> CONFIRM BATTLE!: { puke(props) } </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  _onInitiateBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;
