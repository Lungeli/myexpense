const { Schema, model } = require("mongoose");

const TransactionSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    datetime: Date,
});

const TransactionModel = model('Transaction', TransactionSchema);

module.exports = TransactionModel;