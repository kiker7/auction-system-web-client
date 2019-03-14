export default {
  apiCallsInProgress: 0,
  userStore: {
    currentUser: {
      authenticated: localStorage.getItem('user') !== null,
      username: ""
    },
    users: [],
    library: {},
    games: []
  }
};
