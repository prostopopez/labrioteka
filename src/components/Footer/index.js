import React from 'react';
import  './style.css';
import '../../style/main.css';

const goTo = (e, path) => {
    e.preventDefault();

    window.h.push(path);
};

const Footer = (props) => {
    const { menuItems } = props;

    return <footer className={'footer'}>
        <div className={'contFooter'}>
            <div className={'footerContentWrapper'}>
                <menu>
                    <li>
                        <a
                            className={'footerLink'}
                            href="/"
                            onClick={(e) => goTo(e, `/`)}
                        >
                            {`На главную`}
                        </a>
                    </li>
                    {menuItems.map(item => <li>
                        <a
                            onClick={(e) => goTo(e, item.link)}
                            className={'footerLink'}
                            href={item.link}
                        >
                            {item.name}
                        </a>
                    </li>)}
                </menu>
            </div>
            <div className={'footerDescription'}>
                <span>+7 (999) 123-45-67</span>
                <span>name@email.com</span>
            </div>
        </div>
    </footer>;
};

export default Footer;
