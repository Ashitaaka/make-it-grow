import { useState } from 'react';

export default function tokenStorage(){

    const getToken = () => {
        const tokenString = localStorage.getItem('makeItGrowToken');
        const userToken = JSON.parse(tokenString);
        return userToken
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem('makeItGrowToken', JSON.stringify(userToken));
        setToken(userToken);
    };

    const removeToken = () =>{
        localStorage.removeItem('makeItGrowToken');
        setToken(getToken());
    }

    return {
        removeToken,
        setToken : saveToken,
        token,
    }
}