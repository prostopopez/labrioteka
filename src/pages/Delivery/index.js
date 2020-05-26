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
        return <div className={'mainStyle'}>
            <div className={'cont'}>

            </div>
        </div>;
    }
}

export default DeliveryPage;
