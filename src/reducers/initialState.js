export default {
  apiCallsInProgress: 0,
  userStore: {
    currentUser: {
      authenticated: localStorage.getItem('user') !== null,
      username: localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')).username : ""
    },
    users: [],
    library: {},
    games: []
  }
};
