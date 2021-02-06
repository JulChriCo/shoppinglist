const path = require('path');
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

let fakeData = [
    {
        _id: 1,
        item: 'milk',
        quantity: 1,
    },
];

app.get('/add', (req, res, next) => {
    res.render('add');
});

app.post('/add', (req, res, next) => {
    const { item, quantity } = req.body;
    fakeData.push({
        _id: Math.floor(Math.random() * 10000),
        item,
        quantity,
    });
    console.log(fakeData);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
