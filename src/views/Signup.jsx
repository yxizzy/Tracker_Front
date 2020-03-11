import React from 'react';
import axios from 'axios';
import '../App.css';
import './login.css'


class Signup extends React.Component {
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

                            <div id="signup">
                                <h1>Sign Up for Free</h1>

                                <form onSubmit={this.onSubmit()}>

                                    <div className="top-row">
                                        <div className="field-wrap">
                                            {/* <label>
                                                First Name<span className="req">*</span>
                                            </label> */}
                                            <input type="text" required autocomplete="off" placeholder="First Name" required />
                                        </div>

                                        <div className="field-wrap">
                                            {/* <label>
                                                Last Name<span className="req">*</span>
                                            </label> */}
                                            <input type="text" required autocomplete="off" placeholder="Last Name" required />
                                        </div>
                                    </div>

                                    <div className="field-wrap">
                                        {/* <label>
                                            Email Address<span className="req">*</span>
                                        </label> */}
                                        <input type="email" required autocomplete="off" placeholder="Email Address*" onChange={this.handleChange('email')} required/>
                                    </div>

                                    <div className="field-wrap">
                                        {/* <label>
                                            Set A Password<span className="req">*</span>
                                        </label> */}
                                        <input type="password" required autocomplete="off" placeholder="Password*" onChange={this.handleChange('password')} required />
                                    </div>

                                    <button type="submit" className="button button-block">Get Started</button>

                                </form>

                            </div>

                        </div>

                    </div>
                </header >
            </div >
        )
    }
}

export default Signup;