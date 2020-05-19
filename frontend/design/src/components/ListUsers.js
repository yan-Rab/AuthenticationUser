import React, { Component } from 'react';
import api from '../services/api';

export default class ListUsers extends Component {

    state = {
        users: [],
    }

    componentDidMount(){
        this.loadUsers();
    }
    loadUsers = async() => {
       
            const response = await api.get("/searchUsers");
            this.setState({users: response.data.docs}); 
        
        
    }
    render(){
        return(
            <div>
                <h3 style = {{color:"#cc0033"}}>List Users</h3>
                {this.state.users.map(users => (
                    <ul key = {users._id}>
                        <li><strong>{users.name}</strong></li>
                        <li>{users.email}</li>
                    </ul>
                ))}
            </div>
        )
    }
}
