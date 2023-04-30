import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../proveders/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () =>{
        logOut()
        .then(result =>{
            console.log('Successful');
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
            { !user && <><Link to="/login">Login</Link>
                <Link to="/signUp">Sign Up</Link></>  }
                
                {user && <span className='text-user'> Welcome {user.email } </span>}
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </nav>
    );
};

export default Header;