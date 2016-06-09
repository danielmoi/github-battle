var React = require('react');
var PropTypes = React.PropTypes;

function puke(obj) {
  return (
    <pre> { JSON.stringify(obj, null, ' ')} </pre>
  )
}

function UserDetails(user) {
  // the parameter `user` will be the `props` object

  return (
    <div>
      { !!user.score && <li className="list-group-item">
        <h3>Score: { user.score }</h3>
      </li>}

      <li className="list-group-item">
        <img
          src={ user.info.avatar_url }
          className="img-rounded img-responsive"
          />
      </li>
    </div>
  )
}

UserDetails.propTypes = {
  info: PropTypes.object.isRequired
}

module.exports = UserDetails;
