import axios from 'axios';

// Example function to submit voter info
export const submitVoterInfo = async (name, phoneNumber, email) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/submit-voter-info`, {
            name,
            phoneNumber,
            email,
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error submitting voter info:', error);
    }
};

// Example function to submit contact form
export const submitContactForm = async (name, email, message) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/submit-contact-form`, {
            name,
            email,
            message,
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error submitting contact form:', error);
    }
};
