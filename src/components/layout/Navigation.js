import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
//
        
export default class Navigation extends Component {

    showLikes = (e) => {
        this.props.handleShowLikes();
    }

    render() {
        return (
            <Navbar fill sticky="top">

                <Button variant="danger" onClick={this.showLikes}>  Links  </Button> 
                <Button variant="danger" onClick={this.showLikes}>  Links  </Button>
            </Navbar>
        );
    }
}

