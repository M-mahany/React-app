import React, { Component } from 'react';
import './BodyBoxes.css';
import { ImUserPlus } from "react-icons/im";
import NavBar from './navBar';
import Boxes from './boxes';
import { Link } from 'react-router-dom';


class Home extends Component {
    state = { 
     } 
    render() { 
        const src = "https://supersonicz.co.uk/images/sm_ng_img_03.webp"
        const logo = "https://www.bfxmoneytransfer.com.au/wp-content/uploads/2020/02/1-2-1.png"
        return (
          <>
          <NavBar/>
            <div className='imgHeader'>

            <div className='Text'>
                <img className='Logo' src={logo} alt='logo'>
                </img>
              <h1>your Smart Money Transfer Gateway</h1>
              <p>Bring your money from other wallets, 
                receive payments and convert it into local currency with a digital dollar account 
                connected to the world.</p>
                <Link to='/register'>
                <button type="button" className="btn btn-primary">
                < ImUserPlus/> Join Up Today!
                </button>
                </Link>
            </div>

              <img 
              src={src}
              alt='img'
              className='imgH'>
              </img>

            </div>
            <Boxes/>
            </>
        );
    }
}
 
export default Home;