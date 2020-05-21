import React from 'react';
import './styles.css';
import api from '../services/api';
import { DebounceInput } from 'react-debounce-input';
export default class Main extends React.Component{

    state = {
        email: "",
        password: "",
    }

    getEmail = (event) => {
        
        this.setState({email: event.target.value})
    }
    
    getPassword = (event) => {
        
        this.setState({password: event.target.value})
    }

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
                <form onSubmit = {this.authUser}>
                    <strong>Efetue o login</strong>
                    <DebounceInput minLength = {2} placeholder = "E-mail" debounceTimeout = {600} 
                    onChange = {this.getEmail.bind(this)} type = "email" required autoFocus />
                    <DebounceInput type = "password" debounceTimeout = {600} placeholder = "Password" onChange = {this.getPassword.bind(this)} required autoFocus />
                    <button type = "submit">Acessar</button>
                </form>
            </div>
        )
    }
}