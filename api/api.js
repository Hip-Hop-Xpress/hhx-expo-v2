import axios from 'axios';

// May change during development/after release
const baseUrl = 'https://us-central1-hhx-api-48896.cloudfunctions.net/app';

export default axios.create({
  baseURL: baseUrl
});
