export function getCurrentUserName() {
  return JSON.parse(localStorage.getItem('user')).username;
}
