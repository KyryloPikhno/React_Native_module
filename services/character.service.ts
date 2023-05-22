import {axiosService} from './axios.service';
import {url} from '../configs/urls';

const characterService = {
  getAll: () => axiosService(url.character, {params: {page: 1, count: 2}}),
};

export {characterService};
