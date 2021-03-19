import fetch from 'isomorphic-unfetch';

export const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const youtubeSearch = (options = {}) => new Promise((resolve, reject) => {
  if (!options.key || !options.term || !options.part || !options.type) {
    reject(new Error('Please make sure that the required fields are inserted'));
  }

  const url = `${ROOT_URL}?key=${options.key}&q=${options.term}&part=${options.part}&type=${options.type}`;

  fetch(url)
    .then((response) => resolve(response.json()))
    .catch(reject);
});

export default youtubeSearch;