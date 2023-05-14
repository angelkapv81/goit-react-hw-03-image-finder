const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34845397-6a8ea04ff885abb1fbb7f7c21';

export const getSearch = searchText => {
  return fetch(
    `${BASE_URL}?q=${searchText}&page=1&key=${API_KEY}&image_type=photo& orientation=horizontal&per_page=12`
  );
};
export default getSearch;
