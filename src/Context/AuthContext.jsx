import {createContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: null,
        token: null,
    });
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            const info = jwtDecode(token);
            const username = info.sub;

            setIsAuth({
                isAuthenticated: true,
                user: { username: "" },
                token: token,
                status: "done",
            });
        } else {
            setIsAuth({
                isAuthenticated: false,
                user: null,
                token: null,
                status: "done",
            });
        }
    }, []);
    async function login(token) {

        localStorage.setItem('token', token);
        console.log(localStorage.getItem('token'));
        const info = jwtDecode(token);
        const username = info.sub;

        console.log(info);
        // try {
        //     const response = await axios.get(`http://localhost:8080/profile/${username}`);
        //     console.log(response);

        setIsAuth({
            isAuthenticated: true,
            user: {
                username: ''
            },
            token: token,
            status: 'done',
        });
        // } catch (e){
        //     console.error(e);
        //     console.error("Error status:", e.response.status);
        //     console.error("Error data:", e.response.data);

        // }

        console.log('Ingelogd!')
    }

    function logout() {
        localStorage.clear();
        setIsAuth({
            isAuthenticated: false,
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
