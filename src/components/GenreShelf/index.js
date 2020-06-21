import React from 'react';
import classnames from 'classnames';
import style from './style.css';
import styleMain from '../../style/main.css';

const cn = classnames.bind(style, styleMain);

const GenreShelf = (props) => {
    const {
        id,
        mainGenre,
        miniGenre,
        description
    } = props;

    const isOverLength = description.length >= 200;

    return <div className={cn('bookShelf', 'genreShelf')}>
        <div className={cn('bookShelfLeft', 'authorImg')}>

        </div>
        <div className={'bookShelfRight'}>
            <h3>{mainGenre}</h3>
            <div className={'bookShelfButtons'}>
                {miniGenre}
            </div>
            <div className={'bookShelfInfo'}>

            </div>
        </div>
    </div>;
};

export default GenreShelf;
