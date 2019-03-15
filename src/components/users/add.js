import React ,{Component} from 'react';
import SimpleSchema from 'simpl-schema';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';

class AddUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            userId:'',
            userName:'',
            errors: [],
        };
    }

    handleSubmit = (e) => {
        console.log(e);
        e.preventDefault(); 
        const {userId, userName} = this.state;
        const validationContext = new SimpleSchema({
            userId: {
                type: SimpleSchema.Integer,
                optional: false,
            },
            userName: {
                type: String,
                optional: false,
            },
        }).newContext();
        console.clear();
        validationContext.validate({ userId: +userId, userName});
        if(validationContext.isValid()){
            axios.post('https://jsonplaceholder.typicode.com/users',{userId: +userId, userName})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        }else{
            this.setState({errors: validationContext.validationErrors()});
        }
        console.log(validationContext.validationErrors());
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}); 
    }

    render(){
        return(
            <>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type="text" name="userId" onChange={this.handleChange} value={this.state.userId} placeholder="Enter your ID" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name="userName" onChange={this.handleChange} value={this.state.userName} placeholder="Enter your name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div>
                {
                    this.state.errors.length ? 
                    this.state.errors.map(e => <h1>{e.name} is not valid</h1>)
                    :<h1>No Errors</h1>
                }
            </div>
            </>
        )
    }
}

export default AddUser;