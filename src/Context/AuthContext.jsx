import {createContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";


export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: null,
        token: null,
        status: "pending",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            void login(token);
        } else {
            setIsAuth({
                isAuthenticated: false,
                user: null,
                status: "done",
            });
        }
    }, []);

    async function login(token) {

        localStorage.setItem('token', token);

        const info = jwtDecode(token);
        const username = info.sub;


        setIsAuth({
            isAuthenticated: true,
            user: {
                username: username,
            },
            token: token,
            status: 'done',
        });

    }

    function logout() {
        localStorage.clear();
        setIsAuth({
            isAuthenticated: false,
            token: null,
            user: null,
            status: 'done'
        });
    }

    const data = {
        ...isAuth,
        logout: logout,
        login: login,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
