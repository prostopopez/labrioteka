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
                        <form action=""></form>
                    </div>
                    <div className={'rightContacts'}>
                        <div className={'aboutUsInfo'}>
                            <ReactSVG
                            src="../img/mapIcon.svg"
                            beforeInjection={(svg) => {
                                svg.classList.add('inlineIcon')
                            }}
                            />
                            <span>
                                   <strong>Labrioteka</strong>
                                   Россия, Пенза, Пензенская область, улица Пупкина 104-4, 440000
                               </span>
                            <ReactSVG
                                src="../img/phoneIcon.svg"
                                beforeInjection={(svg) => {
                                    svg.classList.add('inlineIcon')
                                }}
                            />
                            <span>+ 7 (960) 000-00-00</span>
                            <ReactSVG
                                src="../img/mailIcon.svg"
                                beforeInjection={(svg) => {
                                    svg.classList.add('inlineIcon')
                                }}
                            />
                            <span>prostopopez@gmail.com</span>
                        </div>
                        <div className={'socialNetworkInfo'}>
                            <ReactSVG
                                src="../img/mailIcon.svg"
                                beforeInjection={(svg) => {
                                    svg.classList.add('inlineIcon')
                                }}
                            />
                            <ReactSVG
                                src="../img/mailIcon.svg"
                                beforeInjection={(svg) => {
                                    svg.classList.add('inlineIcon')
                                }}
                            />
                            <ReactSVG
                                src="../img/mailIcon.svg"
                                beforeInjection={(svg) => {
                                    svg.classList.add('inlineIcon')
                                }}
                            />
                            <ReactSVG
                                src="../img/mailIcon.svg"
                                beforeInjection={(svg) => {
                                    svg.classList.add('inlineIcon')
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
