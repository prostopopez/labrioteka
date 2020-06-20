import React from 'react';
import ReactStars from 'react-stars/dist/react-stars';
import './style.css';
import '../../style/main.css';

const BookShelf = (props) => {
    const {
        rank,
        img,
        price,
        name,
        author,
        genres,
        date,
        publisher,
        collection,
        description
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
                src={img}
                alt=""/>
            <span>{price} &#8381;</span>
        </div>
        <div className={'bookShelfRight'}>
            <h3>{name}</h3>
            <a href={'/author'}>{author}</a>
            <div className={'bookShelfButtons'}>
                <a href={'/'}>
                    <button>В корзину</button>
                </a>
                <a href={'/'}>
                    <button>Подробнее</button>
                </a>
            </div>
            <div className={'bookShelfGenres'}>
                {genres.length <= 0
                    ? 'Нет жанра'
                    : genres.map((genre) => {
                        if (genre === undefined) {
                            return null;
                        } else {
                            return (
                                <div>
                                    <a href={'/'}>{genre[0]}</a>
                                    <a href={'/'}>{genre[1]}</a>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className={'bookShelfInfo'}>
                <div>
                    <strong>Год издания:</strong>
                    <span>{date}</span>
                </div>
                <div>
                    <strong>Издательство:</strong>
                    <a href={'/'}>{publisher}</a>
                </div>
                <div>
                    <strong>Коллекция:</strong>
                    <a href={'/'}>{collection}</a>
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
