const mongoose = require('mongoose');
const express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const booksData = require('./getBooksData');
const authorsData = require('./getAuthorsData');
const genresData = require('./getGenresData');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute =
    'mongodb+srv://prostopopez:prostopopez@cluster0-qljpi.mongodb.net/labrioteka?retryWrites=true&w=majority';

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/getBooksData', (req, res) => {
    booksData.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.get('/getAuthorsData', (req, res) => {
    authorsData.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.get('/getGenresData', (req, res) => {
    genresData.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.post('/updateAuthorsData', (req, res) => {
    const { id, update } = req.body;
    authorsData.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete('/deleteAuthorsData', (req, res) => {
    const { id } = req.body;
    authorsData.findByIdAndRemove(id, (err) => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

router.post('/putBooksData', (req, res) => {
    let data = new booksData();

    const { id, bookRating, bookDescription } = req.body;

    if ((!id && id !== 0) || !bookRating || !bookDescription) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    data.bookRating = bookRating;
    data.bookDescription = bookDescription;
    data.id = id;
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

app.use('/api', router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));