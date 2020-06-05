import React from 'react';
import '../../style/main.css';
import './style.css';
import {ReactSVG} from "react-svg";

const ContactPage = () => {
    return (
        <div className={'contacts'}>
            <div className={'mainWrapper'}>
                <h1>{`Контакты`}</h1>
                <hr/>
                <p>«Labrioteka» – современный книжный интернет-ресурс, успешно работающий даже во время карантина.</p>
                <div className={'contactsFlex'}>
                    <div className={'leftContacts'}>
                        <form>

                            <input type='tel' placeholder={'Введите ваш телефон'} pattern='[+][0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}' required={true}/>
                            <textarea cols='30' rows='10' placeholder={'Введите сообщение'} required={true}/>
                            <input type='submit'/>
                        </form>
                    </div>
                    <div className={'rightContacts'}>
                        <div className={'aboutUsInfo'}>
                            <div>
                                <ReactSVG
                                    src="../img/mapIcon.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('inlineIcon')
                                    }}
                                />
                                <span>
                                    <strong>Labrioteka</strong><br/>
                                    Россия, Пенза, Пензенская область,<br/>
                                    улица Пупкина 104-4, 440000<br/>
                                </span>
                            </div>
                            <div>
                                <ReactSVG
                                    src="../img/phoneIcon.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('inlineIcon')
                                    }}
                                />
                                <span>+ 7 (960) 000-00-00</span>
                            </div>
                            <div>
                                <ReactSVG
                                    src="../img/mailIcon.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('inlineIcon')
                                    }}
                                />
                                <span>prostopopez@gmail.com</span>
                            </div>
                        </div>
                        <hr/>
                        <div className={'socialNetworkInfo'}>
                            <a href="https://vk.com/gtaas">
                                <ReactSVG
                                    src="../img/ContactsLogos/vkLogo.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('inlineIcon')
                                    }}
                                />
                            </a>
                            <a href="#">
                                <ReactSVG
                                    src="../img/ContactsLogos/tgLogo.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('inlineIcon')
                                    }}
                                />
                            </a>
                            <a href="https://www.facebook.com/people/Prostopopez-Aot/100009744790989">
                                <ReactSVG
                                    src="../img/ContactsLogos/fbLogo.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('inlineIcon')
                                    }}
                                />
                            </a>
                            <a href="https://www.youtube.com/prostopopez">
                                <ReactSVG
                                    src="../img/ContactsLogos/ytLogo.svg"
                                    beforeInjection={(svg) => {
                                        svg.classList.add('inlineIcon')
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
