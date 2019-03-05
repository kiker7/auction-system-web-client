export const HEADER = {headers: {"Authorization" : `Bearer ${localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token}`}};
