var React = require('react');
var PropTypes = React.PropTypes;

function puke(obj) {
  return (
    <pre> { JSON.stringify(obj, null, ' ')} </pre>
  )
}

function UserDetails(user) {
  return (
    <div>
      { puke(user) }
    </div>
  )
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired
}

module.exports = UserDetails;
