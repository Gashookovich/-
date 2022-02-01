import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import Video from "./components/video";
import {IUser} from "./models/IUser";
import UserService from "./service/UserService";
import './style.css';

const App: FC = () => {
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (store.isLoading) {
        return <div className={'block_loading'}>Загрузка...</div>
    }

    if (!store.isAuth) {
        return (
            <div>
                <LoginForm/>
            </div>
        )
    }

    if (!store.user.isActivated) {
        return (
            <div className={'block_examination'}>
                <h1 className={'block_examination-head'}>Проверьте почту и ПОДТВЕРДИТЕ АККАУНТ</h1>
            </div>
        )
    }

    return (
        <div className={'block-user_container'}>
            <h1 className={'block-user_container-head'}>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : `АВТОРИЗУЙТЕСЬ`}</h1>
            <h2 className={'block-user_container-text'}>{store.user.isActivated ? 'Аккаунт подтверждён по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!'}</h2>
            <Video/>
            <button className={'block-user_container-exit'} onClick={() => store.logout()}>Выйти</button>
        </div>
    );
};

export default observer(App);
