import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login_logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Logo_beijaflore.jpg' />
            </div>
            <Button type='submit' onClick={signIn}>
                {" "}
                Entrar
            </Button>
        </div>
    );
}

export default Login;