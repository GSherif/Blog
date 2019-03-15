import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import NotFound from './components/not_found';
import PostsList from './components/posts/list';
import DisplayPost from './components/posts/displayPost';
import AddPost from './components/posts/add';
import AddUser from './components/users/add';
import UsersList from './components/users/list';
import DisplayUser from './components/users/displayUser';
import {Navbar, Nav} from 'react-bootstrap';

class App extends Component{
    render(){
        return <div>Home</div>
    }
}

ReactDOM.render(
    <BrowserRouter>
        <>
            <Navbar bg="primary" variant="dark">
                <Nav className="mr-auto" >
                <NavLink to="/posts" style={{color:'blue', padding: '1rem'}} activeStyle={{color:'white'}} activeClassName="selected">Posts</NavLink>
                <NavLink to="/user" style={{color:'blue', padding: '1rem'}} activeStyle={{color:'white'}}>Users</NavLink>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/posts/add" component={AddPost}></Route>
                <Route path="/user/add" component={AddUser}></Route>
                <Route path="/posts/:id" component={DisplayPost}></Route>
                <Route path="/user/:id" component={DisplayUser}></Route>
                <Route path="/user" component={UsersList}></Route>
                <Route path="/posts" component={PostsList}></Route>
                <Route exact path="/" component={App}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </>
    </BrowserRouter>
    , document.querySelector('#root'));


