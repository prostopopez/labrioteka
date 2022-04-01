import React from 'react';
import classnames from 'classnames/bind';
import enhanceWithClickOutside from 'react-click-outside';
import axios from 'axios';
import {ReactSVG} from 'react-svg'
import style from './style.css';
import styleMain from '../../style/main.css';
import isCurrency from "validator/es/lib/isCurrency";

const cn = classnames.bind(style, styleMain);

const goTo = (e, path) => {
    e.preventDefault();

    window.h.push(path);
};

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            dataUsers: [],
            id: 0,
            username: null,
            password: null,
            isMenuOpen: false,
            isModalOpen: false,
            isToggleReg: false,
            intervalIsSet: false,
        };
    }

    componentDidMount() {
        this.getDataFromDbUsers();

        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDbUsers(), 1000);
            this.setState({intervalIsSet: interval});
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({intervalIsSet: null});
        }
    }

    getDataFromDbUsers = () => {
        fetch('http://localhost:3001/api/getUserData')
            .then((data) => data.json())
            .then((res) => this.setState({dataUsers: res.data}));
    };

    putDataToDbUsers = (username, password) => {
        let currentIds = this.state.dataUsers.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post('http://localhost:3001/api/putUserData', {
            id: idToBeAdded,
            username: username,
            password: password
        });
    };

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

    handleClickOutside() {
        this.setState({
            isModalOpen: false
        });
    }

    goTo = (e, link) => {
        goTo(e, link);

        this.setState({
            isMenuOpen: false
        });
        document.body.classList.remove('noScroll');
    };

    toggleModal = () => {
        this.setState(
            prevState => ({
                isModalOpen: !prevState.isModalOpen
            })
        );
    };

    toggleReg = (isToggleReg) => {
        this.setState({
            isToggleReg
        })
    };

    checkUser = (e, username, password) => {
        const {dataUsers} = this.state;

        const isUserCorrect = dataUsers.map(singleData => {
            if (singleData.username == username && singleData.password == password) {
                return [true, singleData.username];
            }
        });

        if (isUserCorrect[0]) {
            this.goTo(e, `/${isUserCorrect[1]}`);
        } else {
            alert('Вы ввели что-то неправильно');
        }
    };

    render() {
        const {
            menuItems,
            pathname
        } = this.props;
        const {
            isMenuOpen,
            isModalOpen,
            isToggleReg
        } = this.state;
        const isMainPage = pathname === `/`;

        return <header className={cn(`header`, {isMainPage, expanded: isMenuOpen})}>
            <div
                className={cn(`modal`, {isModalOpen, isToggleReg})}
            >
                <div className={'log-in'}>
                    <form>
                        <input type={'text'} onChange={(e) => this.setState({username: e.target.value})}
                               placeholder={'Введите ваш логин'} required={true}/>
                        <input type={'password'} onChange={(e) => this.setState({password: e.target.value})}
                               placeholder={'Введите ваш пароль'} required={true}/>
                        <button onClick={(e) => this.checkUser(e, this.state.username, this.state.password)}
                                className={'green'}>Войти
                        </button>
                    </form>
                    <button onClick={() => {
                        this.toggleReg(true);
                    }} className={'purple'}>Создать пользователя
                    </button>
                </div>
                <div className='reg-in'>
                    <form>
                        <input type={'text'} onChange={(e) => this.setState({username: e.target.value})}
                               placeholder={'Введите новый логин'} required={true}/>
                        <input type={'password'} onChange={(e) => this.setState({password: e.target.value})}
                               placeholder={'Введите новый пароль'} required={true}/>
                        <button onClick={() => this.putDataToDbUsers(this.state.username, this.state.password)}
                                className={'green'}>Зарегистрироваться
                        </button>
                    </form>
                    <button onClick={() => this.toggleReg(false)} className={'purple'}>Вернуться к авторизации</button>
                </div>
            </div>
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
                        <button className={cn(`toggle`, {active: isMenuOpen})}
                                onClick={() => this.toggleMenu(!isMenuOpen)}>
                            <span/>
                            <span/>
                            <span/>
                        </button>
                        <div className={'left'}>
                            <menu>
                                {isMainPage
                                    ? null
                                    : <li className={'mainLink'}>
                                        <a
                                            className={cn('headfootLink', 'notMainPage')}
                                            href="/"
                                            onClick={(e) => {
                                                this.goTo(e, `/`);
                                            }}
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
                                {menuItems.map(item => <li className={'forMenuList'}>
                                    <a
                                        onClick={(e) => {
                                            this.goTo(e, item.link);
                                        }}
                                        className={cn('headfootLink', {
                                            notMainPage: !isMainPage,
                                            isCurrentPage: (item.link !== '/catalog' && pathname.includes(item.link)) || (pathname === '/catalog' && item.link === '/catalog')
                                        })}
                                        href={item.link}
                                    >
                                        {item.name}
                                    </a>
                                </li>)}
                            </menu>
                        </div>
                        <div className={cn(`userToggle`, {active: isMainPage})}>
                            <a
                                onClick={(e) => {
                                    this.goTo(e, `/profile/basket`);
                                }}
                                className={cn('headfootLink', {
                                    isCurrentPage: pathname === '/profile/basket'
                                })}
                                href="/profile/basket"
                            >
                                <ReactSVG
                                    src="../img/basketIcon.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('menuIcon')
                                    }}
                                />
                            </a>
                            <div
                                onClick={() => this.toggleModal()}
                                className={cn('headfootLink', {
                                    isCurrentPage: pathname === '/profile'
                                })}
                            >
                                <ReactSVG
                                    src="../img/userIcon.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('menuIcon')
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>;
    }
}

export default enhanceWithClickOutside(Header);
