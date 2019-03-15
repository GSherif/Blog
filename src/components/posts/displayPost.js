import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

class DisplayPost extends Component{
    
    state = {
        data: {},
        userData: '',
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            const data = response.data;
            this.setState({data});
            axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            .then((res) => {
                const userData = res.data[0];
                console.log(userData);
                this.setState({userData});
            })
            .catch((error) => {
                console.log(error);
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        const {data, userData} = this.state;
        return (
            <>
                <Link to={`/posts/add`}><Button className="my-4" variant="primary">Add New Post</Button></Link>
                <Card className="text-center">
                        <Card.Header>Post #{data.id}</Card.Header>
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>{data.body}</Card.Text>
                            <Card.Text>User Id: {data.userId}</Card.Text>
                            <Card.Text>User Name: {userData.username}</Card.Text>
                        </Card.Body>
                </Card>
            </>
        )
    }
}

export default DisplayPost;