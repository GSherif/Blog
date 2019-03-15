import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import axios from 'axios';

class DisplayUser extends Component{
    
    state = {
        data: [],
        userPosts: [],

    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const data = response.data;
            this.setState({data});
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((res) => {
                const userPosts = res.data;
                userPosts.map(e => console.log(e));
                this.setState({userPosts});
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
        const {data, userPosts} = this.state;
        return (
            <div>
                <Link to={`/user/add`}><Button className="my-4" variant="primary">Add New User</Button></Link>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>User Id: {data.id}</Card.Title>
                        <Card.Title>{data.name}</Card.Title>
                    </Card.Body>
                </Card>;
                <div>
                {userPosts.map(e => 
                    <>
                    <Card className="text-center">
                        <Card.Header>Post #{e.id}</Card.Header>
                        <Card.Body>
                            <Card.Title>{e.title}</Card.Title>
                            <Card.Text>{e.body}</Card.Text>
                            {/* <Link to={`/user/${props.id}`}><Button variant="primary">Post details</Button></Link> */}
                            <Button variant="primary">Post details</Button>
                        </Card.Body>
                    </Card>
                    </>
                    )}
                </div>
            </div>
        )
    }
}

export default DisplayUser;