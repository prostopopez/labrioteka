import React from 'react';
import classnames from 'classnames/bind';
import styleMain from '../../style/main.less';
import style from './style.less';

const cn = classnames.bind(style);

const goTo = (e, path) => {
    e.preventDefault();

    window.h.push(path);
};

class MainPage extends React.Component {
    constructor() {
        super();

        this.state = {
            sights: [],
            feedback: [],
            news: [],
            articles: []
        };
    }

    render() {

        return <div className={style.mainStyle}>
            <div className={styleMain.cont}>
            </div>
        </div>;
    }
}

export default MainPage;
