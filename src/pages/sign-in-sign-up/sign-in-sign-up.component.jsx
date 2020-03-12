import React from 'react';

import './sign-in-sign-up.styles.scss'
import SignIn from '../../component/sign-in/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component'
const SignInAndSignUp = () =>(
    <div className='sign-in-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)
export default SignInAndSignUp;