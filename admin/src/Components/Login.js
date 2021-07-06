import React, {Component} from 'react';
import '../Style/Home.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {browserHistory} from 'react-router';
import PasswordField from 'material-ui-password-field';

var errormsg='';
class Login extends Component {
    state = {
        username: '',
        password: '',
        response:'',
        value:'',
        showError:false
    };

    handleChangeUsername = event => {
        this.setState({ username: event.target.value });
    }

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    }

    validateSignup = event => {
        browserHistory.push("/Signup")
    }

    validateLogin = (state) =>{

        var username = this.state.username;
        var password = this.state.password;
        const data = new FormData(document.getElementById("form"));
        this.setState({value: Object.fromEntries(data.entries()) })
        console.log(this.state.value)
        if(username===null || username === '' || password === null || password === '') {
            errormsg = 'Please provide username and password.'
            this.setState((prevState, props) => {
                return {showError: true}
            })
        }
        else if(!/\S+@\S+\.\S+/.test(username)){
            errormsg = 'Email address is invalid';
            this.setState((prevState, props) => {
                return {showError: true}
            })
        }
        else {
            if(username === "admin@gmail.com" && password === "Admin@123") {
                browserHistory.push("/User");
            }
        }
    }

    render(){
        return (
            <div>
                <h2 style={{textAlign:'center', marginTop:'10%'}}>Explore</h2>
                <h5 style={{textAlign:'center', marginTop:'0.5%'}}>Login </h5>
                <form id = "form">
                    <Input 
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Email" 
                        inputProps={{ 'aria-label': 'description', 'color':'primary' }}
                        style={{width: 365, height: 40, color: 'primary', marginLeft:'40%',
                         marginTop: '2.5%'}}
                        value = {this.state.username}
                        onChange = {this.handleChangeUsername}/>
                    <PasswordField
                        type = "text"
                        id = "Password"
                        name = "Password"
                        placeholder="Password"
                        style={{width: 365, height: 40, color: 'primary', marginLeft:'40%', 
                        marginTop: '2%'}}
                        value = {this.state.password}
                        onChange = {this.handleChangePassword}
                        />
                    {this.state.showError && <div className = "error-message-login">{errormsg}</div>}
                    <Button variant="contained" color="primary" 
                        onClick = {this.validateLogin}
                        style={{backgroundColor: "primary", width:365, 
                        height: 50, marginLeft:'40%',fontWeight:'Bold', marginTop:'3%', 
                        textTransform: 'none', borderRadius:25, font:'Bold'}}>
                        Login
                    </Button>
                    <Button variant="outlined" color="primary" onClick={this.validateSignup}
                        style={{backgroundColor: "primary", width:365, 
                        height: 50, marginLeft:'40%',fontWeight:'Bold', marginTop:'2%', 
                        textTransform: 'none', borderRadius:25, font:'Bold', borderWidth:3, borderColor:'primary'}}>
                        Sign Up
                    </Button>
                </form>
                </div>
        )
    }
}

export default Login;