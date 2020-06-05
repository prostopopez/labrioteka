import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import enhanceWithClickOutside from 'react-click-outside';
import classnames from 'classnames/bind';
import styleMain from '../../style/main.css';

const cn = classnames.bind(styleMain);

class TelephoneInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFieldActive: false,
            phone: 'none'
        };
    }

    handleClickOutside() {
        this.setState({ isFieldActive: false });
    }

    inputClickEffect(isFieldActive) {
        this.setState({
            isFieldActive: true
        });
    }

    render() {
        const { isFieldActive } = this.state;

        return <div className={cn({isFieldActive})}>
            <PhoneInput
                containerClass={'telephoneInput'}
                country={'us'}
                value={this.state.phone}
                onClick={() => this.inputClickEffect(!isFieldActive)}
                onFocus={() => this.inputClickEffect(!isFieldActive)}
                onBlur={() => this.handleClickOutside()}
                onChange={phone => this.setState({phone})}
            />
        </div>;
    }
}

export default enhanceWithClickOutside(TelephoneInput);
