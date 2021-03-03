import Axios, {AxiosRequestConfig} from 'axios';
import {URLS} from '../src/utilities/constants/paths/urls';
import {strings} from '../src/utilities/locales/i18n';

export const axios = Axios.create({
  baseURL: URLS.API_BASE_URL,
  validateStatus: (status) =>
    status === 200 || status === 201 || status === 204 || status === 401,
});

export const request = (config: AxiosRequestConfig) =>
  axios(config).then((response) => {
    const exceptionUrls = [URLS.LOGIN];
    if (response.status >= 400 && !config?.data?.password) {
      // handle failed requests, the check for the password in the data is to not send
      // password related requests to bug reporting tools (just suggestion)
    }
    if (
      response.status === 401 &&
      exceptionUrls.includes(response.config.url)
    ) {
      throw response;
    }

    if (
      response.status === 401 &&
      !exceptionUrls.includes(response.config.url)
    ) {
      //call logout action returning the store to its initial state, removing data in the async storage
      // and any other related date
      //logout();
      throw {
        response: {
          data: {
            message: strings('common.sessionExpired'),
            response: response,
          },
        },
      };
    }
    return response;
  });
