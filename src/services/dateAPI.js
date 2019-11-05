import axios from 'axios';
const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime';

export default {
  async getAPIResponse() {
    const response = await axios.get(DATE_JSON_URL);
    return response.data.date;
  }
};
