import React from 'react';
import './styles.css';
import api from '../services/api';
export default class Main extends React.Component{

    state = {
        email: "",
        password: "",
    }

    getEmail = (event) => {
        this.setState({email: event.target.value})
        
    }
    
    getPassword = (event) => (
        this.setState({password: event.target.value})
    )

    authUser = async(event) => {
        event.preventDefault();
        const { email } = this.state;
        const { password } = this.state;
       
        const response = await api.post('/authUsers', {
            email,
            password
        });
        
        if(response){
            localStorage.setItem("tokenUser", response.data.token);
            window.location.reload();
        }
        
    }
    
    render(){
        return(
            <div className = "body-main">
                <form>
                    <strong>Efetue o login</strong>
                    <input type = "email" placeholder = "E-mail" onChange = {this.getEmail.bind(this)} required autoFocus/>
                    <input type = "password" placeholder = "Password" onChange = {this.getPassword.bind(this)} required autoFocus />
                    <button type = "submit" onClick = {this.authUser.bind(this)}>Acessar</button>
                </form>
            </div>
        )
    }
}