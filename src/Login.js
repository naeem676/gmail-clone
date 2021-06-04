import React from 'react';
import './Login.css';
import  Button  from '@material-ui/core/Button';
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const singIn = () => {
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL
            }))
        })
        .catch(error => alert(error.message))

    }
    return (
        <div className='login'>
            <div className="login_container">
            <img src="https://1.bp.blogspot.com/-Iz1WDj_g2sw/X5H7dpDGtOI/AAAAAAAAUkQ/LKGihXr3jn8-9_zColtX7iUuYqs2Q28fgCLcBGAsYHQ/w1200-h630-p-k-no-nu/gmail%2Bnew.png" alt="" />
             <Button variant="contained" color="primary" onClick={singIn} >Login</Button>
            </div>
        </div>
    );
};

export default Login;