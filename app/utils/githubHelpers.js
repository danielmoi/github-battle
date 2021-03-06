var axios = require('axios');

var id = '';
var secret = '';
var param = '?client_id=' + id + '&client_secret=' + secret;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
  // fetch usernames repos
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');

}

function getTotalStars(repos) {
  // calculate all the stars user has
  return repos.data.reduce(function(sofar, next) {
    return sofar + next.stargazers_count;
  }, 0);
}

function getPlayersData(player) {
  // get repo
  return getRepos(player.login)
  // get total stars
    .then(getTotalStars)
  // return object with that data
    .then(function(totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      };
    });
}

function calculateScores(players) {
  // return array, after doing some fancy algorithms to determine a winner
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars,
  ]
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
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) {
        console.warn('Error in getPlayersInfo:', err);
      })
  }



};

module.exports = helpers;
