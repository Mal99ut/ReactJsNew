import React from 'react'
import axios from 'axios'
export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions",
            {
                client: { //onto the atcuall login, creating a session, this is sending a client object and api will check if authorized
                    email: this.state.email,
                    password: this.state.password
                }
            },
            { withCredentials: true } //t.then(Response)his is saying im authorizing you to send up a cookie to the api to see if the user can get in
        )
            .then(response => { //this is showing the response, if you are logged in or notF
                if (response.data.status === 'created') {
                    console.log("you can come in...")
                    this.props.handleSuccesfulAuth();
                } else {
                    this.setState({
                        errorText: "Wrong Email Or Password, Please Try Again"
                    });
                    this.props.handleUnSuccesfulAuth();

                }
            }).catch(error => {
                console.log("some error occured", error)
                this.setState({
                    errorText: "An Error Has Occured"
                })
            });       //catching catches the error of the program
        event.preventDefault()
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }        //shortcut for if prop.name = type of input, set to input info to typex     same for all props
    render() {
        return (
            <div>
                <h2>login to access your dashboard</h2>
                <div>{this.state.errorText}</div>
                <form onSubmit={this.handleSubmit}>
                    {/*Tese forms are different from html*/}
                    <input
                        type="email"
                        name="email"
                        /*we need to update the email value or the form will remain empty, this*/
                        placeholder="Your Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}