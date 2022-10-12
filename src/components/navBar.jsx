import React,{useState,} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  
      const [show,setShow] = useState(false);     

        return (

          <React.Fragment>
<nav className="navbar navbar-expand-lg bg-warning">

  <div className="container-fluid">

    <Link className="navbar-brand" to="/">
   SMT
    </Link>

    <button className="navbar-toggler" type="button" onClick={()=>setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="#">About Us</a>
        <a className="nav-link" href="#">How to Use</a>
        <a className="nav-link" href="#">Terms&Condition</a>
      </div>
      </div>
      
      <div className='Sign-buttons'>

<Link to='/login'>
<button className="btn btn-light">Sign In</button>
</Link>
<Link to='/register'>
  <button className="btn btn-dark">Sign Up</button>
  </Link>
</div>


  </div>

</nav>
{show && <div>
<div className="navbar-mobile bg-warning">
        <a  href="#">About Us</a>
        <a  href="#">How to Use</a>
        <a  href="#">Terms&Condition</a>
      </div>
</div>}


</React.Fragment>

        );
    }

export default NavBar;