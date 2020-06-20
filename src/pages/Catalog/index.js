import React from 'react';
import BookShelf from '../../components/BookShelf';
import './style.css';
import '../../style/main.css';

class CatalogPage extends React.Component {
    constructor() {
        super();

        this.state = {
            dataBooks: [],
            dataAuthors: [],
            dataGenres: [],
            intervalIsSet: false,
            idToDelete: null,
            idToUpdate: null,
            objectToUpdate: null,
        };
    }

    componentDidMount() {
        this.getDataFromDbBooks();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDbBooks, 1000);
            this.setState({ intervalIsSet: interval });
        }

        this.getDataFromDbAuthors();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDbAuthors, 1000);
            this.setState({ intervalIsSet: interval });
        }

        this.getDataFromDbAuthors();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDbAuthors, 1000);
            this.setState({ intervalIsSet: interval });
        }

        this.getDataFromDbGenres();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDbGenres, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    getDataFromDbBooks = () => {
        fetch('http://localhost:3001/api/getBooksData')
            .then((data) => data.json())
            .then((res) => this.setState({ dataBooks: res.data }));
    };

    getDataFromDbAuthors = () => {
        fetch('http://localhost:3001/api/getAuthorsData')
            .then((data) => data.json())
            .then((res) => this.setState({ dataAuthors: res.data }));
    };

    getDataFromDbGenres = () => {
        fetch('http://localhost:3001/api/getGenresData')
            .then((data) => data.json())
            .then((res) => this.setState({ dataGenres: res.data }));
    };


    render() {
        const { dataBooks, dataAuthors, dataGenres } = this.state;

        return <div className={'catalog'}>
            <div className={'mainWrapper'}>
                <h1>{`Каталог`}</h1>
                <hr/>
                {dataBooks.length <= 0
                    ? 'Нет данных'
                    : dataBooks.map((dataBook) => {
                        const bookAuthor = dataAuthors.map((dataAuthor) => {
                            if (dataAuthor.books_id.includes(dataBook._id)){
                                return dataAuthor.authorName;
                            }
                        });

                        const bookGenre = (dataGenres.map((dataGenre) => {
                            if (dataGenre.books_id.includes(dataBook._id)){
                                return dataGenre.genreName;
                            }
                        }));

                        return <BookShelf
                            name={dataBook.bookName}
                            price={dataBook.bookPrice}
                            genres={bookGenre}
                            author={bookAuthor}
                            collection={dataBook.bookCollection}
                            publisher={dataBook.bookPublisher}
                            date={dataBook.bookPubDate}
                            rank={dataBook.bookRating}
                            img={dataBook.bookImg}
                            description={dataBook.bookDescription}
                        />;
                    })
                }
            </div>
        </div>

    }
}

export default CatalogPage;
