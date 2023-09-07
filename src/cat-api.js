import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] = 'live_ZEpSa9RSu6Fke38zcrSo1R9trQ8LPPo0tj87HXlsZPfnKj0Uh4uGYelZxIZ7ko2M';

const END_POINTS = {
    breeds: 'breeds',
    info: 'images/search',
};

export const fetchBreeds = () => {
    return axios(`${END_POINTS.breeds}`);
};

export const fetchCatByBreed = breedId => {
    return axios(`${END_POINTS.info}?breed_ids=${breedId}`);
};
