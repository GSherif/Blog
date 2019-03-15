import React, {Component} from 'react';
import axios from 'axios';
import Post from './post';
import {Container, Row} from 'react-bootstrap';

class PostsList extends Component {
        state = {
            data: [],
        }
    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const data = response.data;
            this.setState({data});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        return this.state.data.map(p=> (<Container>
            <Row className="justify-content-md-center"><Post key={p.id} title={p.title} id={p.id}/></Row></Container>));
    }
}

export default PostsList;