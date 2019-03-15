export const BASE_URL = process.env.API_URL;

export function getHeaderObject() {
  return {headers: {"Authorization" : `Bearer ${localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token}`}};
}

export function handleError(error) {
  console.error("API call error. " + error); // eslint-disable-line no-console
  throw error;
}
