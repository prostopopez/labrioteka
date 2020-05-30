import React from 'react';
import classnames from 'classnames/bind';
import enhanceWithClickOutside from 'react-click-outside';
import { ReactSVG } from 'react-svg'
import style from './style.css';
import styleMain from '../../style/main.css';

const cn = classnames.bind(style, styleMain);

const goTo = (e, path) => {
    e.preventDefault();

    window.h.push(path);
};

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            isMenuOpen: false,
            isSubmenuOpen: false
        };
    }

    toggleMenu = (isMenuOpen) => {
        this.setState({
            isMenuOpen
        });

        if (isMenuOpen === true) {
            document.body.classList.add('noScroll');
        } else {
            document.body.classList.remove('noScroll');
        }
    };

    toggleSubmenu = (isSubmenuOpen) => {
        this.setState({
            isSubmenuOpen
        });
    };

    handleClickOutside() {
        this.setState({ isSubmenuOpen: false });
    }

    goTo = (e, link) => {
        goTo(e, link);

        this.setState({
            isMenuOpen: false
        });
        document.body.classList.remove('noScroll');
    };

    render() {
        const { menuItems, pathname } = this.props;
        const { isMenuOpen, isSubmenuOpen } = this.state;
        const isMainPage = pathname === `/`;

        return <header className={cn(`header`, { isMainPage, expanded: isMenuOpen, isSubmenuOpen })}>
            <div className={'headerWrapper'}>
                <div className={'mainWrapper'}>
                    {isMainPage
                        ? <div className={'headerDescription'}>
                                <div className={'h1Wrapper'}>
                                <ReactSVG
                                    src="../img/bookIcon.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('mainIcon')
                                    }}
                                />
                                <h1>{`Labrioteka`}</h1>
                            </div>
                            <p>Книжный портал с уникальными коллекциями и широким ассортиментом</p>
                        </div>
                        : null
                    }
                </div>
                <div className={'mainWrapper'}>
                    <div className={'headerContentWrapper'}>
                        <button className={cn(`toggle`, { active: isMenuOpen })} onClick={() => this.toggleMenu(!isMenuOpen)}>
                            <span />
                            <span />
                            <span />
                        </button>
                        <div className={'left'}>
                            <menu>
                                {isMainPage
                                    ? null
                                    : <li className={'mainLink'}>
                                        <a
                                            className={cn('headfootLink', 'notMainPage')}
                                            href="/"
                                            onClick={(e) => this.goTo(e, `/`)}
                                        >
                                            {isMenuOpen
                                                ? 'Главная'
                                                : <ReactSVG
                                                    src="../img/bookIcon.svg"
                                                    beforeInjection={(svg) => {
                                                        svg.classList.add('mainIcon')
                                                    }}
                                                />
                                            }
                                        </a>
                                    </li>
                                }
                                {menuItems.map(item => <li className={'suck'}>
                                    <a
                                        onClick={(e) => {this.goTo(e, item.link); this.toggleSubmenu(false)}}
                                        onMouseOver={() => this.toggleSubmenu(true)}
                                        className={cn('headfootLink', {
                                            notMainPage: !isMainPage,
                                            isCurrentPage: (item.link !== '/catalog' && pathname.includes(item.link)) || (pathname === '/catalog' && item.link === '/catalog')
                                        })}
                                        href={item.link}
                                    >
                                        {item.name}
                                    </a>
                                    <ul className="headerSubmenu">
                                        {menuItems.map(item => <li>
                                            <a
                                                onClick={(e) => {this.goTo(e, item.link); this.toggleSubmenu(false)}}
                                                className={cn('headfootLink', {
                                                    notMainPage: !isMainPage
                                                })}
                                                href={item.link}
                                            >
                                                {item.name}
                                            </a>
                                        </li>)}
                                    </ul>
                                </li>)}
                            </menu>
                        </div>
                        <div className={cn(`userToggle`, { active: isMainPage })}>
                            <a
                                onClick={(e) => this.goTo(e, `/profile/basket`)}
                                className={cn('headfootLink', {
                                    isCurrentPage: pathname === '/profile/basket'
                                })}
                                href="/profile/basket"
                            >
                                <ReactSVG
                                    src="../img/basketIcon.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('basketIcon')
                                    }}
                                />
                            </a>
                            <a
                                onClick={(e) => this.goTo(e, `/profile`)}
                                className={cn('headfootLink', {
                                    isCurrentPage: pathname === '/profile'
                                })}
                                href="/profile"
                            >
                                <ReactSVG
                                    src="../img/userIcon.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('userIcon')
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>;
    }
}

export default enhanceWithClickOutside(Header);
