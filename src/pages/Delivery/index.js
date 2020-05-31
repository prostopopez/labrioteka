import React from 'react';
import '../../style/main.css';
import './style.css';

class DeliveryPage extends React.Component {
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
        return <div className={'delivery'}>
            <div className={'mainWrapper'}>
                <h1>{`Доставка`}</h1>
                <hr/>
            </div>
        </div>;
    }
}

export default DeliveryPage;
