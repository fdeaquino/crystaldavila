const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.post('/submit-voter-info', (req, res) => {
    const { name, phoneNumber, email } = req.body;
    // Save the voter info to a database or send to an email, etc.
    res.status(201).send('Voter info submitted successfully.');
});

app.post('/submit-contact-form', (req, res) => {
    const { name, email, message } = req.body;
    // Save the message to a database or send to an email, etc.
    res.status(201).send('Contact form submitted successfully.');
});
