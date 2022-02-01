import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import '../components/loginForm.css';


const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    return (
        <div className={'block-form_container'}>
            <h1 className={'block-form_container-head'}>Приветствую тебя в рядах участников тренинга Марии Погодиной. Прошу пройти регистрацию, чтобы получить доступ к видео-урокам</h1>
            <input
                className={'block-form_container-email'}
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                className={'block-form_container-password'}
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
            />
            <button className={'block-form_container-login'} onClick={() => store.login(email, password)}>
                Логин
            </button>
            <button className={'block-form_container-registration'} onClick={() => store.registration(email, password)}>
                Регистрация
            </button>
        </div>
    );
};

export default observer(LoginForm);