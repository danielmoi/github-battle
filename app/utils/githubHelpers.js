var axios = require('axios');

var id = 'YOUR_CLIENT_ID';
var secret = 'YOUR_CLIENT_SECRET';
var param = '?client_id=' + id + '&client_secret=' + secret;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
  // fetch usernames repos
}

function getTotalStars(stars) {
  // calculate all the stars user has
}

function getPlayersData(player) {
  // get repo
  // get total stars
  // return object with that data
}

function calculateScores(players) {
  // return array, after doing some fancy algorithms to determine a winner
}

var helpers = {
  getPlayersInfo: function(players) {
    // fetch some data from GitHub

    // axios.all takes an array of promises, and when each of those promises are resolved, the axios.then will be invoked
    return axios.all(players.map(function(username) {

        // returns a promise for each username in the players array
        return getUserInfo(username);
      }))
      // when all our axios promises resolve
      .then(function(info) {
        return info.map(function(user) {
          return user.data;
        })
      })

    // error handling
    .catch(function(err) {
      console.warn('Error in getPlayersInfo', err);
    });
  },

  battle: function(players) {
    console.log('BATTLE METHOD');
    return {}
  }



};

module.exports = helpers;
