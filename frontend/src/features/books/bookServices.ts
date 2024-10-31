import axios from 'axios';

export const getBooks = async () => {
    const response = await axios.get('/api/books');
    return response.data;
};

export const createBook = async (bookData) => {
    const response = await axios.post('/api/books', bookData);
    return response.data;
};
