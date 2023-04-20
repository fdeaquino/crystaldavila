require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cd-campaign-backend';

const Schema = mongoose.Schema;

const VoterInfoSchema = new Schema({
    name: String,
    phoneNumber: String,
    email: String
});

const ContactFormSchema = new Schema({
    name: String,
    email: String,
    message: String
});

const VoterInfo = mongoose.model('VoterInfo', VoterInfoSchema);
const ContactForm = mongoose.model('ContactForm', ContactFormSchema);

async function connectToMongoDB() {
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        startServer();
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

function startServer() {
    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });

    app.post('/submit-voter-info', async (req, res, next) => {
        const { name, phoneNumber, email } = req.body;

        try {
            const voterInfo = new VoterInfo({ name, phoneNumber, email });
            await voterInfo.save();
            console.log('Voter info saved:', voterInfo);
            res.status(200).json({ message: 'Voter info saved' });
        } catch (err) {
            console.error('Error saving voter info:', err);
            next(err);
        }
    });

    app.post('/submit-contact-form', async (req, res, next) => {
        const { name, email, message } = req.body;

        try {
            const contactForm = new ContactForm({ name, email, message });
            await contactForm.save();
            console.log('Contact form saved:', contactForm);
            res.status(200).json({ message: 'Contact form saved' });
        } catch (err) {
            console.error('Error saving contact form', err);
            next(err);
        }
    });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something went wrong!');
    });

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

connectToMongoDB();



