import React from 'react';
import style from './style.less';
import styleMain from '../../style/main.less';

const goTo = (e, path) => {
    e.preventDefault();

    window.h.push(path);
};

const Footer = (props) => {
    const { menuItems } = props;

    return <footer className={style.footer}>
        <div className={style.cont}>
            <div className={style.footerContentWrapper}>
                <menu>
                    <li>
                        <a
                            className={styleMain.footerLink}
                            href="/"
                            onClick={(e) => goTo(e, `/`)}
                        >
                            {`toMain`}
                        </a>
                    </li>
                    {menuItems.map(item => <li>
                        <a
                            onClick={(e) => goTo(e, item.link)}
                            className={styleMain.footerLink}
                            href={item.link}
                        >
                            {item.name}
                        </a>
                    </li>)}
                </menu>
            </div>
            <div className={style.footerDescription}>
                <span>+7 (999) 123-45-67</span>
                <span>name@email.com</span>
            </div>
        </div>
    </footer>;
};

export default Footer;
