import React, { Component } from 'react';
import ListUsers from './ListUsers';
import './styles.css';
export default class PageMaster extends Component {

    logout = () => {
        localStorage.removeItem("tokenUser");
        window.location.reload();
    }

    render(){
        const buttonStyle = {width: "120px", height: "35px", marginLeft: "20px"}
        return(
            <div className = "page-master">
                <div className = 'component-body'>
                <strong>Hello User!</strong>
                <button style = {buttonStyle} onClick = {this.logout.bind(this)}>Deslogar</button>
                <ListUsers />
                </div>
            </div>
        )
    }
}

