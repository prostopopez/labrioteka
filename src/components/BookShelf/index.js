import React from 'react';
import ReactStars from 'react-stars/dist/react-stars';
import './style.css';
import '../../style/main.css';

const BookShelf = (props) => {
    const {
        rank,
        description,
    } = props;

    const isOverLength = description.length >= 200;

    return <div className={'bookShelf'}>
        <div className={'bookShelfLeft'}>
            <ReactStars
                edit={false}
                count={5}
                value={rank}
                color1={'black'}
                className={'stars'}
            />
            <img
                src="https://pngimg.com/uploads/book/book_PNG51049.png"
                alt=""/>
            <span>1600.00 &#8381;</span>
        </div>
        <div className={'bookShelfRight'}>
            <h3>Семь смертей Эвелины Хардкасл</h3>
            <a href={'/author'}>Стюарт Тёртон</a>
            <div className={'bookShelfButtons'}>
                <a href={'/'}>
                    <button>В корзину</button>
                </a>
                <a href={'/'}>
                    <button>Подробнее</button>
                </a>
            </div>
            <div className={'bookShelfGenres'}>
                <a href={'/'}>Современная зарубежная литература</a>
                <a href={'/'}>Люблю аниме</a>
                <a href={'/'}>Классическая русская литература</a>
                <a href={'/'}>Люблю мангу</a>
                <a href={'/'}>Современная зарубежная литература</a>
                <a href={'/'}>Люблю аниме</a>
                <a href={'/'}>Классическая русская литература</a>
                <a href={'/'}>Люблю мангу</a>
            </div>
            <div className={'bookShelfInfo'}>
                <div>
                    <strong>Год издания:</strong>
                    <span>2020</span>
                </div>
                <div>
                    <strong>Издательство:</strong>
                    <a href={'/'}>Аниме</a>
                </div>
                <div>
                    <strong>Коллекция:</strong>
                    <a href={'/'}>Лучшие аниме</a>
                </div>
            </div>
            <p>
                {isOverLength
                    ? `${description.substring(0, 200)}...`
                    : description
                }
            </p>
        </div>
    </div>;
};

export default BookShelf;
