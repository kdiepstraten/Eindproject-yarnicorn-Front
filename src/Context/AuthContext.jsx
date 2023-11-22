import {createContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";


export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        role: null,
        user: null,
        token: null,
        status: "pending",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");

        const fetchData = async () => {
            if (token) {
                await login(token);
            } else {
                setIsAuth({
                    isAuthenticated: false,
                    user: null,
                    status: "done",
                });
            }
        };

        void fetchData();
    }, []);

    async function login(token) {

        localStorage.setItem('token', token);

        const info = jwtDecode(token);

        const username = info.sub;
        const role = info.role[0].authority;

        setIsAuth({
            isAuthenticated: true,
            user: {
                username: username,
            },
            role: role,
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
