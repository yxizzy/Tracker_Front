import React from 'react';
import axios from 'axios';
import '../App.css';
import './login.css'


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit = () => event => {
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_PROD_API_URL}/api/users/`,{
            username: this.state.email,
            password: this.state.password
        })
        .then(res => {
            localStorage.setItem('token', res.data['token'])
            this.props.history.push('/')
        })
        .catch(err => {
            this.setState({err, display_err: true})
        })
        setTimeout(() => this.setState({ display_err: false }), 5000)
    }

    handleChange = (email, password) => event => {
        this.setState({
            [email]: event.target.value,
            [password]: event.target.value
        })
    } 

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="form">

                        {/* <ul className="tab-group">
                            <li className="tab active"><a href="#signup">Sign Up</a></li>
                            <li className="tab"><a href="#login">Log In</a></li>
                        </ul> */}

                        <div>

                            <div id="login">
                                <h1>Welcome Back!</h1>

                                <form onSubmit={this.onSubmit()}>

                                    <div className="field-wrap">
                                        {/* <label>
                                            Email Address<span className="req">*</span>
                                        </label> */}
                                        <input type="email" autocomplete="off" onChange={this.handleChange('email')} placeholder= "Email Address*" required />
                                    </div>

                                    <div className="field-wrap">
                                        {/* <label>
                                            Password<span className="req">*</span>
                                        </label> */}
                                        <input type="password" autocomplete="off" onChange={this.handleChange('password')} placeholder="Enter Password*" required />
                                    </div>

                                    <p className="forgot"><a href="#">Forgot Password?</a></p>

                                    <button className="button button-block">Log In</button>
                                    <span style={{fontSize: '16px'}}>Don't have an account? <a href="/signup">Signup</a></span>

                                </form>

                            </div>

                        </div>

                    </div>
                </header >
            </div >
        )
    }
}

export default Login;