import React, {Component} from 'react';
import axios from 'axios';
import User from './user';

class UsersList extends Component {
        state = {
            data: [],
        }
    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const data = response.data;
            this.setState({data});
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        return this.state.data.map(u => (<User key={u.id} name={u.name} id={u.id}/>));
    }
}

export default UsersList;