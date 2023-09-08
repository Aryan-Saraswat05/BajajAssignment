const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST method endpoint
app.post('/api/data', (req, res) => {
    // Get data from the request body
    const {
        user_id,
        college_email_id,
        college_roll_number,
        numbers,
        alphabets,
    } = req.body;

    // Calculate the highest alphabet in the input array of alphabets
    const highestAlphabet = Math.max(...alphabets.map((c) => c.charCodeAt(0)));

    // Send the response
    res.json({
        status: 'Success',
        user_id,
        college_email_id,
        college_roll_number,
        numbers,
        alphabets,
        highest_alphabet: String.fromCharCode(highestAlphabet),
    });
});

// GET method endpoint
app.get('/api/operation_code', (req, res) => {
    // Generate an operation code (you can use any logic you want)
    const operationCode = Math.random().toString(36).substr(2, 8);

    // Send the operation code as the response
    res.json({ operation_code: operationCode });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
