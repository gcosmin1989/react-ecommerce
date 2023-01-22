import React from 'react';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { signInWithGoogle, signInWithFacebook, signOut } from '../firebase-init';
import Layout from '../components/Layout';

function Login() {
	return (
		<Layout>
			<div>
				<h1>Login</h1>
				<FacebookLoginButton onClick={signInWithFacebook} />

				<GoogleLoginButton onClick={signInWithGoogle} />
				<FacebookLoginButton onClick={signOut} />
			</div>
		</Layout>
	);
}

export default Login;
