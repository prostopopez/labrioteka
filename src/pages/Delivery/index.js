import React from 'react';
import { getCoords } from '../../services/locationService';
import '../../style/main.css';
import './style.css';

class DeliveryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: null,
        };
    }

    async componentDidMount() {
        this.setState({
            location: await getCoords(),
        });

        this.translit();
    }

    translit() {
        let str = document.getElementsByClassName('locationName')[0].innerHTML;
        let link = '';
        let transl = {
            'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д', 'e': 'е', 'zh': 'ж',
            'z': 'з', 'i': 'и', 'j': 'й', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н',
            'o': 'о', 'p': 'п', 'r': 'р','s': 'с', 't': 'т', 'u': 'у', 'f': 'ф', 'h': 'x',
            'c': 'ц', 'ch': 'ч', 'sh': 'ш', '`': 'ь',
            'y': 'ы', 'yu': 'ю', 'ya': 'я', ' ': ' '
        };

        if (str !== '') {
            str = str.toLowerCase();
        }

        for (let i = 0; i < str.length; i++){
            if (/[a-z]/.test(str.charAt(i))){
                link += transl[str.charAt(i)];
            } else if (/[а-яё0-9\s]/.test(str.charAt(i))){
                link += str.charAt(i);
            }
        }
        document.getElementsByClassName('locationName')[0].innerHTML = link;
    }

    render() {
        const { location } = this.state;

        return <div className={'delivery'}>
            <div className={'mainWrapper'}>
                <h1>{`Доставка`}</h1>
                <hr/>
                <p>Ваш населённый пункт -
                    <strong className={'locationName'}> { location === null
                        ? null
                        : location.city
                    } </strong>
                </p>
            </div>
        </div>;
    }
}

export default DeliveryPage;
