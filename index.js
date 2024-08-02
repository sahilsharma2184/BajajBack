const express = require('express');
const cors = require('cors'); // Import cors
const app = express();

app.use(express.json());
app.use(cors()); // Use cors

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const user_id = "sahil_sharma_2184";
    const email = "sharma_sahil@srmap.edu.in";
    const roll_number = "AP21110010512";
    
    let numbers = [];
    let alphabets = [];
    let highest_alphabet = "";

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
        }
    });

    if (alphabets.length > 0) {
        highest_alphabet = [alphabets.sort((a, b) => b.localeCompare(a))[0]];
    }

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
