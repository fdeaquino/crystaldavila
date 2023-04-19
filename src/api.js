import axios from 'axios';

// Example function to submit voter info
const submitVoterInfo = async (name, phoneNumber, email) => {
  try {
    const response = await axios.post('http://localhost:3001/submit-voter-info', {
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
const submitContactForm = async (name, email, message) => {
  try {
    const response = await axios.post('http://localhost:3001/submit-contact-form', {
      name,
      email,
      message,
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error submitting contact form:', error);
  }
};
