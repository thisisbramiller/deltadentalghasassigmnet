/**
 * Axios configuration for making API requests to the policyholder endpoint.
 * @module axiosConfig
 */

import axios from 'axios';

/**
 * Axios instance with base URL set to the policyholder API endpoint.
 * @type {import('axios').AxiosInstance}
 */
export default axios.create({
    baseURL: 'https://sorriso-backend-staging-7c0729e676da.herokuapp.com/api/v1/policyholder'
});