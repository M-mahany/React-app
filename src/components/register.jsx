import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import './loginRegister.css';

export const  Register = () => {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [name,setName]= useState("");
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
            <label htmlFor='name'>
                Full Name
            </label>
            <input value={name} onChange={(e)=>setName(e.target.value)} name='name' id='name' placeholder='FullName'/>
            <label htmlFor="email">
                Email
            </label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' name='email' placeholder='youremail@gmail.com'id='email'/>
            <label htmlFor="password">
                Password
            </label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type='password' name='password' placeholder='********'id='password'/>
            <button className='btn btn-primary' type='submit'>
            Sign Up
            </button>
        </form>
        <Link to='/login'>
        <button className='linkButton'>
         Already have account? login here
         </button>
         </Link>
         </div>
         </div>

     </>
     );
}
 
export default Register;