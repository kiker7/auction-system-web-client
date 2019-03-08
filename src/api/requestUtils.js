export const HEADER = {headers: {"Authorization" : `Bearer ${localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token}`}};
export const BASE_URL = process.env.API_URL;
