import React from "react";
import FormInput from "../form-input/form-input_component";
import CustomButton from "../custom-button/custom-button_component";
import './sign-in_styles.scss';


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '' 
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({ [name]: value })
    }

    render () {
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                   <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange = {this.handleChange}
                        required
                   />
                   <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        value={this.state.password} 
                        handleChange = {this.handleChange}
                        required
                   />

                   <CustomButton type="submit">SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;