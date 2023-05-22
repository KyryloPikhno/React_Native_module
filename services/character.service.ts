import {baseUrl, url} from '../configs/urls';

const fetchCharacter = {
  getAll: () => fetch(`${baseUrl}/${url.character}`),
};

export {fetchCharacter};
