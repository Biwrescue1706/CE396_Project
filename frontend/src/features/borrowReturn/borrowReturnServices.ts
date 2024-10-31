import axios from 'axios';

export const borrowBook = async (borrowData) => {
    const response = await axios.post('/api/borrow', borrowData);
    return response.data;
};

// Additional services for returning books, etc.
