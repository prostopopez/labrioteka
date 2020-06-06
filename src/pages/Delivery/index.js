import React from 'react';
import '../../style/main.css';
import './style.css';

class DeliveryPage extends React.Component {
    constructor() {
        super();

        this.state = {
            something: null
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;

            console.log(lat, lng);
        });
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
