import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});
// adb reverse tcp:3333 tcp:3333
