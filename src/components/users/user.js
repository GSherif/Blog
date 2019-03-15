import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Button} from 'react-bootstrap';

const User = (props) => {
    return <>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Link to={`/user/${props.id}`}><Button variant="primary">View User</Button></Link>
        </Card.Body>
    </Card>
    </>
}

export default User;