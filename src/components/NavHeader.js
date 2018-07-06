import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { startLogin } from '../actions/auth'; 
import '../styles/styles.scss'; 

export const NavHeader = ({  startLogin  }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" >Home  </NavLink>
    <NavLink to="/help" activeClassName="is-active">  Help</NavLink>
    <button onClick={startLogin}>Login</button> 
    </header>
);

const mapDispatchToProps = (dispatch) =>({
  startLogin: () => dispatch(startLogin()) 
}); 

export default connect(undefined, mapDispatchToProps)(NavHeader);
