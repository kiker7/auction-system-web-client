export function getCurrentUserName() {
  try{
    return JSON.parse(localStorage.getItem('user')).username;
  }catch (e) {
    return undefined;
  }

}
