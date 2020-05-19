import React from 'react';
import './styles.css';
export default class Main extends React.Component{

    state = {
        email: "",
        password: "",
    }

    
    render(){
        return(
            <div className = "body-main">
                <form>
                    <strong>Efetue o login</strong>
                    <input type = "email" required autoFocus/>
                    <input type = "password" required autoFocus />
                    <button type = "submit">Acessar</button>
                </form>
            </div>
        )
    }
}