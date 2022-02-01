import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import Video from "./components/video";
import {IUser} from "./models/IUser";
import UserService from "./service/UserService";

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
        return <div>Загрузка...</div>
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
            <div>
                <h1>Проверьте почту и ПОДТВЕРДИТЕ АККАУНТ</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : `АВТОРИЗУЙТЕСЬ`}</h1>
            <h1>{store.user.isActivated ? 'Аккаунт подтверждён по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!'}</h1>
            <Video/>
            <button onClick={() => store.logout()}>Выйти</button>
        </div>
    );
};

export default observer(App);
