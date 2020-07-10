import React from 'react';
import {Redirect} from 'react-router-dom';
import {AdvancedCounter, Chat, Clock, Counter, Hello, Kitty} from "../components";


const routerConfig = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/home" />
    },
    {
        path: '/chat',
        exact: true,
        component: <Chat />
    },
    {
        path: '/greeting',
        exact: true,
        component: <Hello />
    },
    {
        path: '/counter',
        exact: true,
        component: <Counter />
    },
    {
        path: '/clock',
        exact: true,
        component: <Clock />
    },
    {
        path: '/kitty',
        exact: true,
        component: <Kitty />
    },
    {
        path: '/advanced-counter',
        exact: true,
        component: () => <AdvancedCounter />
    }
]

export default routerConfig