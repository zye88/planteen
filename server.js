const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

if (process.env.NODE_ENV != 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, error => {
    if (error) throw error;
    console.log(`Server is running on port: ${port}`);
});

app.post('/payments', (req, res) => {
    const body = {
        amount: req.body.amount,
        currency: 'cad',
        source: req.body.token.id,
    };

    stripe.charges.create(body, (err, charge) => {
        if(err) res.status(err.statusCode).send({ error: err.message });
        else res.status(200).send({ success: charge});
    });
});