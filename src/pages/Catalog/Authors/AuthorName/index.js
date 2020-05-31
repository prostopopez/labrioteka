import React from 'react';
import './style.css';
import '../../../../style/main.css';

class AuthorName extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            item: {
                name: ``,
                email: ``,
                phoneNumber: ``,
                commentaries: ``
            },
            errors: {
                name: null,
                email: null,
                commentaries: null,
                checked: null
            }
        };
    }

    render() {
        return <div className={'about'}>
            <div className={'mainWrapper'}>
                <div className={'content'}>

                </div>
            </div>
        </div>;
    }
}

export default AuthorName;
