import React from 'react';
import classnames from 'classnames/bind';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './lang/en';
import ru from './lang/ru';
import style from './style.css';
import styleMain from '../../style/main.css';

const cn = classnames.bind(style, styleMain);

const goTo = (e, path) => {
    e.preventDefault();

    window.h.push(path);
};

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ru', ru);
counterpart.setLocale('en');

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            isMenuOpen: false,
            lang: 'en'
        };
    }

    toggleMenu = (isMenuOpen) => {
        this.setState({
            isMenuOpen
        });

        if (isMenuOpen === true) {
            document.body.classList.add(style.noScroll);
        } else {
            document.body.classList.remove(style.noScroll);
        }
    };

    goTo = (e, link) => {
        goTo(e, link);

        this.setState({
            isMenuOpen: false
        });
        document.body.classList.remove(style.noScroll);
    };

    onLangChange = (e) => {
        this.setState({lang: e.target.value});
        counterpart.setLocale(e.target.value);
    }

    render() {
        const { menuItems, pathname } = this.props;
        const { isMenuOpen } = this.state;
        const isMainPage = pathname === `/`;

        return <header className={cn(`header`, { isMainPage, expanded: isMenuOpen })}>
            <div className={'contHeader'}>
                <div className={'cont'}>
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
                                        <Translate
                                            content='link'
                                            className={cn('headerLink', 'notMainPage')}
                                            href="/"
                                            onClick={(e) => this.goTo(e, `/`)}
                                        />
                                        <a
                                            className={cn('headerLink', 'notMainPage')}
                                            href="/"
                                            onClick={(e) => this.goTo(e, `/`)}
                                        >
                                        </a>
                                    </li>
                                }
                                {menuItems.map(item => <li>
                                    <a
                                        onClick={(e) => this.goTo(e, item.link)}
                                        className={cn('headerLink', {
                                            notMainPage: !isMainPage,
                                            isCurrentPage: pathname === item.link
                                        })}
                                        href={item.link}
                                    >
                                        {item.name}
                                    </a>
                                </li>)}
                            </menu>
                        </div>
                        <div className={cn(`chooseBtn`, { active: isMainPage })}>
                            <select value={this.state.lang} onChange={this.onLangChange}>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={'cont'}>
                    {isMainPage
                        ? <div className={'headerDescription'}>
                            <h1>{`title`}</h1>
                            <p>Краткое маркетинговое описание</p>
                        </div>
                        : null
                    }
                </div>
            </div>
        </header>;
    }
}

export default Header;
