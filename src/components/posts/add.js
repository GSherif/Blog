import React ,{Component} from 'react';
import SimpleSchema from 'simpl-schema';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';

class AddPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body:'',
            userId:'',
            errors: [],
        };
    }

    handleSubmit = (e) => {
        console.log(e);
        e.preventDefault(); 
        const {title, body, userId} = this.state;
        const validationContext = new SimpleSchema({
            title: {
                type: String,
                optional: false,
            },
            body: String,
            userId: SimpleSchema.Integer,
        }).newContext();
        console.clear();
        validationContext.validate({title, body, userId: +userId});
        if(validationContext.isValid()){
            axios.post('https://jsonplaceholder.typicode.com/posts',{title, body, userId: +userId})
            .then((response) => {
                console.log(response);
                // this.props.history.push(`/posts/${response.data.id}`);
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
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control type="text" name="title" onChange={this.handleChange} value={this.state.title} placeholder="Enter a title" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Post Body</Form.Label>
                    <Form.Control type="text" name="body" onChange={this.handleChange} value={this.state.body} placeholder="Enter the body" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>User Id</Form.Label>
                    <Form.Control type="number" name="userId" onChange={this.handleChange} value={this.state.userId} placeholder="User Id" />
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

export default AddPost;