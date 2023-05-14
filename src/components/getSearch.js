const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34845397-6a8ea04ff885abb1fbb7f7c21';

//pixabay.com/api/?q= cat & page=1 & key=your_key & image_type=photo & orientation=horizontal & per_page=12

export const getSearch = searchText => {
  return fetch(
    `${BASE_URL}?q=${searchText}&page=1&key=${API_KEY}&image_type=photo& orientation=horizontal&per_page=12`
  );
};
export default getSearch;
// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = 'your_key';
// const searchTerm = 'cat';
// const page = 1;
// const perPage = 12;
// const orientation = 'horizontal';
// const imageType = 'photo';

// const url = `${BASE_URL}?key=${API_KEY}&q=${searchTerm}&page=${page}&per_page=${perPage}&orientation=${orientation}&image_type=${imageType}`;

// fetch(url)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Network response was not ok.');
//   })
//   .then(data => {
//     // Обработка полученных данных
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });
