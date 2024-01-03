import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://658492af022766bcb8c75cca.mockapi.io/contacts',
});

export const selectContacts = async () => {
  const data = await instance.get('/');
  return data;
};
