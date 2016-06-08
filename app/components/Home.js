var React = require('react');
var transparentBg = require('../styles').transparentBg;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={ transparentBg }>
        <h1>GitHub Battle</h1>
        <p className="lead">Some fancy motto</p>
      </div>
    )
  }
});

module.exports = Home;
