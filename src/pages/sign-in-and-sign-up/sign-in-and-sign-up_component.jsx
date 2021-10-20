import React from 'react';
import SignIn from '../../components/sign-in/sign-in_component';
import SignUp from '../../components/sign-up/sign-up_component';
import './sign-in-and-sign-up_style.scss';

const SignInAndSignUpPage = () => (
    <div className = 'sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage;