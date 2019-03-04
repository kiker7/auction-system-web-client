export const HEADER = {headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`}};
