import {baseUrl, url} from '../configs/urls';

const fetchCharacter = async () => {
  try {
    const response = await fetch(`${baseUrl}/${url.character}`);
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch users.');
  }
};

export {fetchCharacter};
