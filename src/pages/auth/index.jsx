import { signInWithPopup } from 'firebase/auth'
import {auth, provider} from '../../config/firebase-config'
import { Navigate, useNavigate } from 'react-router-dom'
import logo from '../../assets/expenses.png'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'
import './styles.css'


export const Auth = () => {

    const navigate = useNavigate()
    const {isAuth} = useGetUserInfo()

    const signInwithGoogle = async () =>{
        const results = await signInWithPopup(auth, provider)
        const authInfo = {
            userId: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true,
        };
        localStorage.setItem("auth", JSON.stringify(authInfo))
        navigate('/expense-tracker')        
    }

    if(isAuth) {
        return <Navigate to="/expense-tracker"/>
    }

    return (
    <div className="auth">
        <h1 className='heading'>
            <img src={logo} alt="logo" />SpendWise</h1>    
        <div className='login-page'>
            <p className='login-text'>Sign in to continue</p>
            <button className="login-with-google-btn"
            onClick={signInwithGoogle}>Sign in with google</button>
        </div>
    </div>
    )
}

