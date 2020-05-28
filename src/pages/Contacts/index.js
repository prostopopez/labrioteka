import React from 'react';
import '../../style/main.css';
import './style.css';

const ContactPage = () => {
    return (
        <div className={'contacts'}>
            <div className={'mainWrapper'}>
                <h1 className={'titlePage'}>{``}</h1>
            </div>
            <div className={'contactsFlex'}>
                <div className={'left'}>
                    <div className={'leftInner'}>
                        <p>+7 (999) 123-47-54</p>
                        <p>example@example.com</p>
                        <p>ул. Кемеровская, д. 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
