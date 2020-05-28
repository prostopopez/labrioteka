import React from 'react';
import {ReactSVG} from "react-svg";
import  './style.css';
import '../../style/main.css';

const goTo = (e, path) => {
    e.preventDefault();

    window.h.push(path);
};

const Footer = (props) => {
    const { menuItems } = props;

    return <footer className={'footer'}>
        <div className={'footerWrapper'}>
            <menu>
                <li>
                    <a
                        className={'footerLink'}
                        href="/"
                        onClick={(e) => goTo(e, `/`)}
                    >
                        {`Главная`}
                    </a>
                </li>
                {menuItems.map(item => <li>
                    <a
                        onClick={(e) => goTo(e, item.link)}
                        className={'headfootLink'}
                        href={item.link}
                    >
                        {item.name}
                    </a>
                </li>)}
            </menu>
            <div className={'footerDescription'}>
                <ReactSVG
                    src="../img/bookIcon.svg"
                    beforeInjection={(svg) => {
                        svg.classList.add('mainIcon')
                        svg.setAttribute('style', 'width: 2vw; height: 2vw')
                    }}
                />
                <span>&copy; 2020 Labrioteka</span>
                <span>prostopopez</span>
            </div>
        </div>
    </footer>;
};

export default Footer;
