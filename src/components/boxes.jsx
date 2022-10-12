import React, { Component } from 'react';
import './BodyBoxes.css';

class Boxes extends Component {
    state = { 
     } 

    render() { 
        return (
            <div className='divBox'>

<div className='Box'>
<img src='https://gogeticon.net/files/3167323/7b6a42df87ccee072408635511891a08.png'
alt='img'>
</img>
<h3>
    Sign Up
</h3>
<p>
    Start by creating your account and start usin all of our money services.
</p>
<button type="button" className="btn btn-warning">Learn More!</button>
</div>

<div className='Box'>
<img src='https://www.wearemoneyclub.com/wp-content/uploads/2021/11/Wealth-Genaration.png'
alt='img'>
</img>
<h3>
    Add Funds
</h3>
<p>
    Add Money to your account through various methods of your choice.
</p>
<button type="button" className="btn btn-warning">Learn More!</button>
</div>

<div className='Box'>
<img src='https://www.myexpatsipp.com/hs-fs/hubfs/Direct%20withdrawal.png?width=300&name=Direct%20withdrawal.png'
alt='img'>
</img>
<h3>
    Withdraw
</h3>
<p>
    Withdraw your account balance and use it instantly through paymnet method of your choice.
</p>
<button type="button" className="btn btn-warning">Learn More!</button>
</div>
            </div>
        );
    }
}
 
export default Boxes;