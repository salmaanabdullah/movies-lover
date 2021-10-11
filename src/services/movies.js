import { axiosAuth } from 'src/utils/axiosInterceptor';
import { baseUrl } from 'src/constants/config';

export const Movies = {
  get: () => axiosAuth.get(`${baseUrl}/movie/popular`),
  getById: id => axiosAuth.get(`${baseUrl}/movie/${id}`),
};
