import React from 'react';
import classnames from 'classnames';
import style from './style.css';
import styleMain from '../../style/main.css';

const cn = classnames.bind(style, styleMain);

const AuthorShelf = (props) => {
    const {
        id,
        img,
        name,
        birthYear,
        deathYear,
        resume
    } = props;

    const isOverLength = resume.length >= 200;

    return <div className={'bookShelf'}>
        <div className={cn('bookShelfLeft', 'authorImg')}>
            <img
                src={img}
                alt=""/>
        </div>
        <div className={'bookShelfRight'}>
            <h3>{name}</h3>
            <div className={'bookShelfButtons'}>
                <a href={`/catalog/authors/${id}`}>
                    <button>Подробнее</button>
                </a>
            </div>
            <div className={'bookShelfInfo'}>
                <div>
                    <strong>Год рождения:</strong>
                    <span>{birthYear}</span>
                    <br/>
                    <strong>Год смерти:</strong>
                    <span>{deathYear}</span>
                </div>
            </div>
            <p>
                {isOverLength
                    ? `${resume.substring(0, 200)}...`
                    : resume
                }
            </p>
        </div>
    </div>;
};

export default AuthorShelf;
