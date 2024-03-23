import { children, createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token
    console.log("isLoggedIn", isLoggedIn, token);

    // Logout Functionality
    const LogoutUser = () => {
        setToken();
        return localStorage.removeItem("token")
    }



    // JWT Authentication 


    const userAuthentication = async () => {
        try {
            const response = await fetch("https://expense-tracker-amyv.onrender.com/api/user",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }

            );
            if (response.ok) {
                const data = await response.json();
                console.log("User Data", data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.error("Error fetching user data : Lol ")
        }
    }
    useEffect(() => {
        userAuthentication();
    }, [])


    return <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);

    if (!authContextValue) {
        throw new Error("UseAuth used outside of the Provider");
    }

    return authContextValue;
};


