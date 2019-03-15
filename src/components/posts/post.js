import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

const Post = props => (
   <>
   <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Link to={`/posts/${props.id}`}><Button variant="primary">View Post</Button></Link>
        </Card.Body>
    </Card>
    </>
);

export default Post;