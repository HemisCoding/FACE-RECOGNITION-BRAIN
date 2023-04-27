import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
<<<<<<< HEAD
            name: ''
        }
    }
    
=======
            name:''
        }
    }

>>>>>>> origin/main
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
<<<<<<< HEAD
    
=======

>>>>>>> origin/main
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

<<<<<<< HEAD
    onSubmitSignIn = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/register", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
=======
    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'aplication/json'},
>>>>>>> origin/main
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
<<<<<<< HEAD
            .then(response => response.json())
            .then(user => {
=======
        .then(response => response.json())
        .then(user => {
>>>>>>> origin/main
            if (user) {
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
<<<<<<< HEAD
        })
=======
        })    
>>>>>>> origin/main
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="email-address">Name</label>
<<<<<<< HEAD
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"
=======
                        <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="name"
                        id="name"
>>>>>>> origin/main
                        onChange={this.onNameChange}
                        ></input>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
<<<<<<< HEAD
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"
=======
                        <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="email"
                        name="email-address"
                        id="email-address"
>>>>>>> origin/main
                        onChange={this.onEmailChange}
                        ></input>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="password">Password</label>
<<<<<<< HEAD
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
=======
                        <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password"
                        name="password"
                        id="password"
>>>>>>> origin/main
                        onChange={this.onPasswordChange}
                        ></input>
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
<<<<<<< HEAD
                        onClick={this.onSubmitSignIn}
=======
                        onClick={this.on}
>>>>>>> origin/main
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit"
                        value="Register"></input>
                    </div>
                </form>
            </main>
            </article>
<<<<<<< HEAD
        );
=======
        )
>>>>>>> origin/main
    }
}

export default Register;