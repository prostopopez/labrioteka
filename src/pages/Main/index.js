import React from 'react';
import '../../style/main.css';
import './style.css';

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
        return <div className={'mainStyle'}>
            <div className={'mainWrapper'}>

            </div>
        </div>;
    }
}

export default MainPage;
