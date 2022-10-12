import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import './loginRegister.css';

export const  Login = () => {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

   const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return ( 
        <>
        <NavBar/>
        <div className='mainDiv'>
    <div className='authDiv'>
        <form className='authForm' onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email
            </label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' name='email' placeholder='youremail@gmail.com'id='email'/>
            <label htmlFor="password">
                Password
            </label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type='password' name='password' placeholder='********'id='password'/>
            <button className='btn btn-primary' type='submit'>
            Sign In
            </button>
        </form>
        <Link to='/register'>
        <button className='linkButton'>
        Don't have Account Yet? Create New Account
        </button>
        </Link>
        </div>
        </div>
       </>
     );
}
 
export default Login;