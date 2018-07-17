// Higher Order Component (HOC) = A component tht renders anther component(regular)
// Re Use Code
// Render Hijaking
// Prop Manipulation 
// Abstract State 

'use stict'; 
import React from 'react'; 
import ReactDOM from 'react-dom'; 

const Info  = (props) => (
	<div>
	<h1>Info</h1>
	<p>The info is: {props.info} </p>
	</div>
); 


const withAdminWarning = (WrappedComponent) =>{
	return (props) =>(
	<div>
	{props.isAdmin && <p>This is privet information</p>}
	<WrappedComponent {...props}/>
	</div>	
)}; 

const requiereAuthentication = (WrappedComponent) => {
	return	(props) => (
	<div>
	{props.isAuthenticated ? (
		<WrappedComponent {...props} />
		) : (
		<p>Please login to see the information</p>
	)}
	</div>
	); 
}

const AdminInfo = withAdminWarning(Info); 
const AuthInfo = requiereAuthentication(Info);  

//ReactDOM.render((<AdminInfo isAdmin={false} info='These are the Details' />),document.getElementById('app'));  
ReactDOM.render((<AuthInfo isAuthenticated={true} info='These are the Details' />),document.getElementById('app'));  