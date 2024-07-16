const express = require('express');
const app = express();
const cors = require('cors');
const Transaction = require('./models/transaction');
const { default: mongoose } = require('mongoose');
const {Schema, model} = mongoose;
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ body: 'test ok1' });
});

app.post('/api/transaction', async(req, res) => {
    // console.log(process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL);
    const {name,price, description, datetime} = req.body;
   const transaction = await Transaction.create({name,price, description, datetime})

    res.json(transaction);
});

app.get('/api/transactions', async(req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
   const transactions = await Transaction.find();
   res.json(transactions);
});

const port = 3030;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});