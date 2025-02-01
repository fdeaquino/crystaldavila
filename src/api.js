// import axios from 'axios';

// // Example function to submit voter info
// export const submitVoterInfo = async (name, phoneNumber, email, setError) => {
//     try {
//         const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/submit-voter-info`, {
//             name,
//             phoneNumber,
//             email,
//         });

//         if (response.status === 200) {
//             console.log(response.data);
//         } else if (response.status === 400) {
//             setError(response.data.message);
//         }
//     } catch (error) {
//         if (error.response && error.response.status === 400) {
//             setError(error.response.data.message);
//         } else {
//             console.error('Error submitting voter info:', error);
//         }
//     }
// };

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
