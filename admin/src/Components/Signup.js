import React, {Component} from 'react';
import '../Style/Home.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {browserHistory} from 'react-router';
import PasswordField from 'material-ui-password-field';

var errormsg='';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            showError:false
        }
    }

    validateSignup = (state) =>{
        var name = this.state.name;
        var email = this.state.email;
        var password = this.state.password;
        var confirmPassword = this.state.confirmPassword;

        if( name === '' || name === null || email === '' || email === null || password === '' || password === null || confirmPassword === '' || confirmPassword === null) {
            errormsg = 'Please provide all the data'
            this.setState((prevState, props) => {
                return {showError: true}
            })
        } else if (password !== confirmPassword) {
            errormsg = 'The password and confirm password do not match'
            this.setState((prevState, props) => {
                return {showError: true}
            })
        } else if (!name.match("[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$")){
            errormsg='Name is invalid';
            this.setState((prevState, props) => {
                return { showError: true }
              })
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errormsg = 'Email address is invalid';
            this.setState((prevState, props) => {
                return {showError: true}
            })
        } else if (!password.match("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}")) {
            errormsg = 'Password must be strong. Password must be at least 8 characters long and include capital and small letters and special characters';
            this.setState((prevState, props) => {
                return {showError: true}
            })
        } else {
            browserHistory.push("/Login")
        }
    }

    render(){
        return (
            <div>
                {this.state.showError && <div className="error-message-signup" style = {{font:'Bold'}}>{errormsg}</div>}
                <h2 style={{textAlign:'center', marginTop:'10%'}}>Explore</h2>
                <h5 style={{textAlign:'center', marginTop:'0.5%'}}>Sign Up</h5>
                <form >
                    <Input 
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder="Name" 
                        onChange={(evt) => { this.state.name =  evt.target.value; }}
                        inputProps={{ 'aria-label': 'description', 'color':'primary' }}
                        style={{width: 365, height: 40, color: 'primary', marginLeft:'40%',
                         marginTop: '3%'}} />
                    <Input 
                        type="text"
                        id="Email"
                        name="Email"
                        placeholder="Email" 
                        onChange={(evt) => { this.state.email =  evt.target.value; }}
                        inputProps={{ 'aria-label': 'description', 'color':'primary' }}
                        style={{width: 365, height: 40, color: 'primary', marginLeft:'40%', 
                        marginTop: '2%'}} />
                    <PasswordField
                        type = "text"
                        id = "Password"
                        name = "Password"
                        placeholder="Password"
                        style={{width: 365, height: 40, color: 'primary', marginLeft:'40%', marginTop: '2%'}}
                        onChange={(evt) => { this.state.password =  evt.target.value; }}/>
                    <div>
                    <PasswordField
                        type = "text"
                        id = "Confirm Password"
                        name = "Confirm Password"
                        placeholder="Confirm Password"
                        autocomplete = {false}
                        style={{width:365, height: 40, color: 'primary', marginLeft:'40%', marginTop: '2%'}}
                        onChange={(evt) => { this.state.confirmPassword =  evt.target.value; }}/>
                        </div>
                    <Button variant="contained" color="primary" onClick={this.validateSignup}
                        style={{backgroundColor: "primary", width:365, 
                        height: 50, marginLeft:'40%',fontWeight:'Bold', marginTop:'3%', 
                        textTransform: 'none', borderRadius:25, font:'Bold'}}>
                        Sign Up
                    </Button>
                </form>
            </div>
        )
    }
}

export default Signup;