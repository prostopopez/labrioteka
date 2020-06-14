const mongoose = require('mongoose');
let booksConnect = require('./dbSetUp/booksConnect');
const server = '127.0.0.1:27017';
const database = 'labrioteka';
const dbUrl = `mongodb://${server}/${database}`;
const action = 'fetch';

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(dbUrl)
            .then(() => {
                console.log('Database connection successful');

                switch(action) {
                    case 'fetch':
                        booksConnect
                            .find({
                                rank: 2
                            })
                            .then(doc => {
                                console.log(doc)
                            })
                            .catch(err => {
                                console.error(err)
                            });
                        break;
                    case 'add':
                        let msg = new booksConnect({
                            rank: 2,
                            description: 'Я люблю читать'
                        });

                        msg.save()
                            .then(doc => {
                                console.log(doc)
                            })
                            .catch(err => {
                                console.log(err)
                            });
                        break;
                    case 'edit':
                        booksConnect
                            .findOneAndUpdate(
                                {
                                    rank: 2
                                },
                                {
                                    rank: 5,
                                    description: 'Я люблю ммм'
                                },
                                {
                                    new: true             // validate before update
                                })
                            .then(doc => {
                                console.log(doc)
                            })
                            .catch(err => {
                                console.error(err)
                            });
                        break;
                    case 'delete':
                        booksConnect
                            .findOneAndRemove({
                                rank: 5
                            })
                            .then(response => {
                                console.log(response)
                            })
                            .catch(err => {
                                console.error(err)
                            });
                        break;
                    default:
                        console.log('nothing happened');
                }

            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database();